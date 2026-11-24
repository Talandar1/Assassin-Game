import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { MAPS } from './maps.js';
import { WorldBuilder, MAT } from './props.js';
import { T } from './procedural.js';
import { Player, Guard, Target, Civilian, createKnife, resolveCircle, hasLineOfSight } from './entities.js';
import { WEAPONS, createPistol, createSniper } from './weapons.js';
import { AudioEngine } from './audio.js';

const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);

const rayAABB = (origin, dir, box, maxDist) => {
  let tmin = 0;
  let tmax = maxDist;
  const min = [box.minX, 0, box.minZ];
  const max = [box.maxX, box.height ?? 3, box.maxZ];
  const o = [origin.x, origin.y, origin.z];
  const d = [dir.x, dir.y, dir.z];

  for (let i = 0; i < 3; i++) {
    if (Math.abs(d[i]) < 1e-8) {
      if (o[i] < min[i] || o[i] > max[i]) return Infinity;
      continue;
    }
    let t1 = (min[i] - o[i]) / d[i];
    let t2 = (max[i] - o[i]) / d[i];
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return Infinity;
  }
  return tmin;
};

const raySphere = (origin, dir, center, radius) => {
  const ox = origin.x - center.x;
  const oy = origin.y - center.y;
  const oz = origin.z - center.z;
  const b = ox * dir.x + oy * dir.y + oz * dir.z;
  const c = ox * ox + oy * oy + oz * oz - radius * radius;
  const disc = b * b - c;
  if (disc < 0) return Infinity;
  const root = Math.sqrt(disc);
  const t0 = -b - root;
  if (t0 > 0.05) return t0;
  const t1 = -b + root;
  return t1 > 0.05 ? t1 : Infinity;
};

const SkyShader = {
  uniforms: {
    topColor: { value: new THREE.Color(0x050b18) },
    horizonColor: { value: new THREE.Color(0x1d2c45) },
    bottomColor: { value: new THREE.Color(0x05080e) },
  },
  vertexShader: `
    varying vec3 vWorld;
    void main() {
      vec4 world = modelMatrix * vec4(position, 1.0);
      vWorld = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,
  fragmentShader: `
    uniform vec3 topColor;
    uniform vec3 horizonColor;
    uniform vec3 bottomColor;
    varying vec3 vWorld;
    void main() {
      float h = normalize(vWorld).y;
      vec3 col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.62));
      col = mix(bottomColor, col, smoothstep(-0.14, 0.05, h));
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    grain: { value: 0.045 },
    vignette: { value: 0.42 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float grain;
    uniform float vignette;
    varying vec2 vUv;

    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.82, 0.24, d);
      color.rgb *= mix(1.0, vig, vignette);
      color.rgb = mix(color.rgb, color.rgb * vec3(0.965, 1.0, 1.055), 0.6);
      float noise = rand(vUv * 1440.0 + fract(time) * 90.0) - 0.5;
      color.rgb += noise * grain;
      gl_FragColor = color;
    }
  `,
};

export class Game {
  constructor(canvas, hooks = {}) {
    this.canvas = canvas;
    this.hooks = hooks;
    this.audio = new AudioEngine();

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x05080f);
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.05,
      700
    );
    this.camera.rotation.order = 'YXZ';

    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer = new EffectComposer(this.renderer);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.renderPass);

    this.bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.62,
      0.6,
      0.8
    );
    this.composer.addPass(this.bloom);

    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);

    this.gradePass = new ShaderPass(GradeShader);
    this.composer.addPass(this.gradePass);

    this.clock = new THREE.Clock();
    this.time = 0;
    this.state = 'boot';
    this.levelIndex = 0;
    this.keys = new Set();
    this.snowSystems = [];
    this.effects = [];
    this.colliders = [];
    this.agents = [];
    this.guards = [];
    this.health = 100;
    this.alarm = false;
    this.alarmPos = new THREE.Vector3();
    this.alerts = 0;
    this.guardsKilled = 0;
    this.elapsed = 0;
    this.attackCooldown = 0;
    this.swing = -1;
    this.hitDone = true;
    this.lookSway = { x: 0, y: 0 };
    this.footTimer = 0;
    this.hudTimer = 0;
    this.damageFlash = 0;
    this.shake = 0;
    this.menuAngle = 0.8;
    this.snowSpeedFactor = 1;
    this.snowWind = new THREE.Vector3(0.3, 0, 0.1);

    this.bloodGeo = new THREE.SphereGeometry(0.035, 5, 4);
    this.bloodMat = new THREE.MeshBasicMaterial({ color: 0x7a1114 });
    this.flashMaterial = new THREE.SpriteMaterial({
      map: T.glow,
      color: 0xffdfa8,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.weaponModels = [createKnife(), createPistol(), createSniper()];
    this.weaponModels.forEach((model) => {
      model.visible = false;
      this.camera.add(model);
    });
    this.weaponIndex = 0;
    this.weapon = this.weaponModels[0];
    this.ammo = [null, null, null];
    this.aiming = false;
    this.scoped = false;
    this.reloading = false;
    this.reloadTimer = 0;
    this.fireCooldown = 0;
    this.gunKick = 0;
    this.weaponSwitchT = 1;
    this.tasks = [];
    this.objectivesComplete = false;
    this.interactTask = null;
    this.objectivesAnnounced = false;
    this.taskPulse = 0;
    this.civilians = [];
    this.talkTarget = null;
    this.dialogueTimer = 0;
    this.traffic = [];
    this.pendingRadio = null;
    this.bounds = 78;
    this.autoReload = false;
    this.resetLoadout();

    this.buildEnvironment();
    this.buildSky();
    this.buildSnow();

    this.loop = this.loop.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    window.addEventListener('resize', this.onResize);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousemove', this.onMouseMove);
    canvas.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    requestAnimationFrame(this.loop);
  }

  resetLoadout() {
    this.ammo = [
      null,
      { mag: WEAPONS[1].magSize, reserve: WEAPONS[1].reserveMax },
      { mag: WEAPONS[2].magSize, reserve: WEAPONS[2].reserveMax },
    ];
    this.weaponIndex = 0;
    this.weapon = this.weaponModels?.[0] ?? null;
    this.aiming = false;
    this.scoped = false;
    this.reloading = false;
    this.reloadTimer = 0;
    this.fireCooldown = 0;
    this.gunKick = 0;
    this.weaponSwitchT = 1;
    this.autoReload = false;
    this.weaponModels?.forEach((model) => {
      model.visible = false;
    });
  }

  setWeaponsVisible(visible) {
    this.weaponModels.forEach((model, index) => {
      model.visible = Boolean(visible && index === this.weaponIndex && !this.scoped);
    });
  }

  setWeapon(index) {
    if (this.state !== 'playing') return;
    if (!Number.isInteger(index) || index < 0 || index >= WEAPONS.length) return;
    if (index === this.weaponIndex) return;

    this.weaponModels[this.weaponIndex].visible = false;
    this.weaponIndex = index;
    this.weapon = this.weaponModels[index];
    this.swing = -1;
    this.hitDone = true;
    this.attackCooldown = 0;
    this.reloading = false;
    this.reloadTimer = 0;
    this.aiming = false;
    this.scoped = false;
    this.weaponSwitchT = 0;
    this.hooks.onScope?.(false);
    this.weapon.visible = true;
    this.audio.weaponSwitch?.();
    this.emitHud();
  }

  setAiming(active) {
    if (this.state !== 'playing' || this.weaponIndex === 0) return;
    this.aiming = Boolean(active);
    this.scoped = this.aiming && this.weaponIndex === 2;
    this.hooks.onScope?.(this.scoped);
    if (this.scoped) this.weapon.visible = false;
    else if (this.state === 'playing') this.weapon.visible = true;
  }

  startReload() {
    const spec = WEAPONS[this.weaponIndex];
    const ammo = this.ammo[this.weaponIndex];
    if (!spec || !ammo || spec.id === 'knife' || this.reloading) return;
    if (ammo.mag >= spec.magSize || ammo.reserve <= 0) return;

    this.reloading = true;
    this.reloadTimer = spec.reloadTime;
    this.autoReload = false;
    this.aiming = false;
    this.scoped = false;
    this.hooks.onScope?.(false);
    this.audio.reload?.();
    this.emitHud();
  }

  finishReload() {
    const spec = WEAPONS[this.weaponIndex];
    const ammo = this.ammo[this.weaponIndex];
    if (!spec || !ammo) return;

    const load = Math.min(spec.magSize - ammo.mag, ammo.reserve);
    ammo.mag += load;
    ammo.reserve -= load;
    this.reloading = false;
    this.reloadTimer = 0;
    this.emitHud();
  }

  getWeaponHud() {
    const spec = WEAPONS[this.weaponIndex];
    const ammo = this.ammo[this.weaponIndex];
    return {
      name: spec.name,
      slot: spec.slot,
      id: spec.id,
      ammo: ammo ? ammo.mag : null,
      reserve: ammo ? ammo.reserve : null,
      reloading: this.reloading,
    };
  }

  /* ------------------------------------------------------------------ */
  /* Construction helpers                                               */
  /* ------------------------------------------------------------------ */

  buildEnvironment() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();

    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(20, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x23344c, side: THREE.BackSide })
    );
    envScene.add(sky);

    const warm = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 3.2),
      new THREE.MeshBasicMaterial({ color: 0xffb066 })
    );
    warm.position.set(0, 1.6, -17);
    envScene.add(warm);

    const cool = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 8),
      new THREE.MeshBasicMaterial({ color: 0xa9c8ff })
    );
    cool.position.set(12, 9, 6);
    cool.lookAt(0, 0, 0);
    envScene.add(cool);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(20, 24),
      new THREE.MeshBasicMaterial({ color: 0x1a2534 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -4;
    envScene.add(floor);

    this.envMap = pmrem.fromScene(envScene, 0.02).texture;
    pmrem.dispose();

    this.skyGroup = new THREE.Group();

    const skyMesh = new THREE.Mesh(
      new THREE.SphereGeometry(320, 40, 24),
      new THREE.ShaderMaterial({
        ...SkyShader,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
      })
    );
    skyMesh.renderOrder = -10;
    this.skyMesh = skyMesh;
    this.skyGroup.add(skyMesh);

    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      const theta = Math.random() * Math.PI * 2;
      const y = 0.08 + Math.random() * 0.92;
      const r = Math.sqrt(1 - y * y) * 300;
      starPositions[i * 3] = Math.cos(theta) * r;
      starPositions[i * 3 + 1] = y * 300;
      starPositions[i * 3 + 2] = Math.sin(theta) * r;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    this.starField = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        color: 0xd6e5ff,
        size: 1.35,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        fog: false,
      })
    );
    this.skyGroup.add(this.starField);

    this.moon = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: T.moon,
        transparent: true,
        depthWrite: false,
        fog: false,
        opacity: 0.95,
      })
    );
    this.moon.scale.set(46, 46, 1);
    this.moon.position.set(-160, 120, -250);
    this.skyGroup.add(this.moon);
  }

  buildSky() {
    // Sky objects are shared between levels; colors are configured per level.
  }

  buildSnow() {
    this.snowGroup = new THREE.Group();
    const layers = [
      { count: 2600, size: 0.085, opacity: 0.9, range: 30 },
      { count: 3800, size: 0.055, opacity: 0.55, range: 70 },
    ];

    for (const layer of layers) {
      const positions = new Float32Array(layer.count * 3);
      const speeds = new Float32Array(layer.count);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        map: T.flake,
        size: layer.size,
        transparent: true,
        opacity: layer.opacity,
        depthWrite: false,
        color: 0xe9f2ff,
        sizeAttenuation: true,
        alphaTest: 0.01,
        fog: true,
      });
      const points = new THREE.Points(geo, mat);
      points.frustumCulled = false;
      this.snowGroup.add(points);
      this.snowSystems.push({
        points,
        positions,
        speeds,
        count: layer.count,
        active: layer.count,
        range: layer.range,
        size: layer.size,
      });
    }
  }

  resetSnow(center) {
    const cx = center?.x ?? 0;
    const cz = center?.z ?? 0;
    for (const sys of this.snowSystems) {
      const half = sys.range / 2;
      for (let i = 0; i < sys.count; i++) {
        sys.positions[i * 3] = cx + (Math.random() - 0.5) * sys.range;
        sys.positions[i * 3 + 1] = Math.random() * 30;
        sys.positions[i * 3 + 2] = cz + (Math.random() - 0.5) * sys.range;
        sys.speeds[i] = 0.55 + Math.random() * 1.5;
      }
      sys.points.geometry.attributes.position.needsUpdate = true;
    }
  }

  setSnowDensity(total) {
    const near = Math.floor(total * 0.42);
    const far = total - near;
    const limits = [near, far];
    this.snowSystems.forEach((sys, i) => {
      sys.active = Math.min(sys.count, limits[i]);
      sys.points.geometry.setDrawRange(0, sys.active);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Level lifecycle                                                    */
  /* ------------------------------------------------------------------ */

  loadLevel(index, { preview = false } = {}) {
    this.levelIndex = index;
    this.preview = preview;
    this.level = MAPS[index];
    this.levelIndex = index;

    this.clearEffects();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.level.fogColor);
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.5;
    this.scene.fog = new THREE.FogExp2(this.level.fogColor, this.level.fogDensity);

    this.skyMesh.material.uniforms.topColor.value.set(this.level.skyTop);
    this.skyMesh.material.uniforms.horizonColor.value.set(this.level.skyHorizon);
    this.skyMesh.material.uniforms.bottomColor.value.set(this.level.fogColor);
    this.starField.material.opacity = this.level.starOpacity ?? 0.7;
    this.moon.material.opacity = this.level.starOpacity > 0.5 ? 0.95 : 0.6;
    this.scene.add(this.skyGroup);

    const hemi = new THREE.HemisphereLight(
      this.level.skyHorizon,
      0x141a24,
      this.level.hemiIntensity ?? 0.5
    );
    this.scene.add(hemi);

    const moonLight = new THREE.DirectionalLight(
      this.level.moonColor,
      this.level.moonIntensity ?? 1.6
    );
    moonLight.position.set(-34, 48, -22);
    moonLight.target.position.set(0, 0, 0);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.set(3072, 3072);
    const shadowSpan = this.level.shadowSpan ?? Math.min(110, (this.level.bounds ?? 78) + 4);
    moonLight.shadow.camera.left = -shadowSpan;
    moonLight.shadow.camera.right = shadowSpan;
    moonLight.shadow.camera.top = shadowSpan;
    moonLight.shadow.camera.bottom = -shadowSpan;
    moonLight.shadow.camera.near = 1;
    moonLight.shadow.camera.far = this.level.shadowFar ?? 240;
    moonLight.shadow.bias = -0.0004;
    moonLight.shadow.normalBias = 0.03;
    moonLight.shadow.camera.updateProjectionMatrix();
    this.scene.add(moonLight);
    this.scene.add(moonLight.target);

    const fill = new THREE.DirectionalLight(0x89a8d6, 0.24);
    fill.position.set(30, 18, 30);
    this.scene.add(fill);

    const world = new WorldBuilder(this.scene);
    const built = this.level.build(world);
    this.world = world;
    this.colliders = world.colliders;
    this.levelTasks = built.tasks ?? [];

    const b = this.level.bounds ?? 78;
    this.bounds = b;
    this.colliders.push(
      { minX: -b - 8, maxX: b + 8, minZ: b, maxZ: b + 5, height: 4 },
      { minX: -b - 8, maxX: b + 8, minZ: -b - 5, maxZ: -b, height: 4 },
      { minX: b, maxX: b + 5, minZ: -b - 8, maxZ: b + 8, height: 4 },
      { minX: -b - 5, maxX: -b, minZ: -b - 8, maxZ: b + 8, height: 4 }
    );

    this.player = new Player();
    this.player.reset(built.playerSpawn);

    this.target = new Target(this.scene, {
      x: built.targetSpawn.x,
      z: built.targetSpawn.z,
      path: built.targetPath,
      escape: built.escape,
    });

    this.guards = built.guards.map((guard) => new Guard(this.scene, guard));
    if (built.escort) {
      this.guards.push(
        new Guard(this.scene, {
          x: built.escort.x,
          z: built.escort.z,
          path: [{ x: built.escort.x, z: built.escort.z }],
          escort: true,
          coat: 0x14181f,
          hat: 0x090b0e,
          scarf: 0x7a1d24,
          speed: 1.8,
        })
      );
    }
    this.agents = [this.target, ...this.guards];
    this.civilians = (built.civilians ?? []).map((cfg) => new Civilian(this.scene, cfg));
    this.traffic = world.traffic ?? [];
    this.pendingRadio = null;
    this.talkTarget = null;
    this.dialogueTimer = 0;
    this.setupTasks();

    this.marker = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: T.marker,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        opacity: 0.95,
        toneMapped: false,
      })
    );
    this.marker.scale.set(0.85, 0.85, 1);
    this.marker.renderOrder = 999;
    this.marker.visible = false;
    this.scene.add(this.marker);

    this.scene.add(this.camera);
    this.scene.add(this.snowGroup);
    this.setSnowDensity(this.level.snow.count);
    this.resetSnow(this.player.pos);

    this.snowSpeedFactor = this.level.snow.speed ?? 1;
    this.snowWind.set(this.level.snow.windX ?? 0, 0, this.level.snow.windZ ?? 0);

    this.alarm = false;
    this.alarmPos.set(0, 0, 0);
    this.health = 100;
    this.elapsed = 0;
    this.alerts = 0;
    this.guardsKilled = 0;
    this.pendingRadio = null;
    this.talkTarget = null;
    this.dialogueTimer = 0;
    this.attackCooldown = 0;
    this.swing = -1;
    this.hitDone = true;
    this.lookSway.x = 0;
    this.lookSway.y = 0;
    this.footTimer = 0;
    this.hudTimer = 0;
    this.shake = 0;
    this.endTimer = 0;
    this.keys.clear();

    this.resetLoadout();
    this.setWeaponsVisible(false);
    this.scoped = false;
    this.aiming = false;
    this.hooks.onScope?.(false);
    this.player.pitch = 0;

    this.renderPass.scene = this.scene;
    this.composer.setSize(window.innerWidth, window.innerHeight);

    this.camera.fov = 70;
    this.camera.updateProjectionMatrix();

    if (preview) {
      this.enterMenuView();
    } else {
      this.state = 'ready';
      this.camera.position.set(
        this.player.pos.x,
        this.player.eyeHeight,
        this.player.pos.z
      );
      this.camera.rotation.set(0, this.player.yaw, 0);
    }
  }

  begin() {
    if (this.state !== 'ready') return;
    this.state = 'playing';
    this.player.health = 100;
    this.health = 100;
    this.elapsed = 0;
    this.alerts = 0;
    this.guardsKilled = 0;
    this.alarm = false;
    this.alarmPos.set(0, 0, 0);
    this.pendingRadio = null;
    this.talkTarget = null;
    this.dialogueTimer = 0;
    this.resetLoadout();
    this.setWeaponsVisible(true);
    this.hooks.onScope?.(false);
    this.marker.visible = true;
    this.attackCooldown = 0;
    this.swing = -1;
    this.hitDone = true;
    this.lookSway.x = 0;
    this.lookSway.y = 0;
    this.footTimer = 0;
    this.hudTimer = 0;
    this.shake = 0;
    this.endTimer = 0;
    this.keys.clear();
    this.camera.fov = 70;
    this.camera.updateProjectionMatrix();
    this.camera.position.set(
      this.player.pos.x,
      this.player.eyeHeight,
      this.player.pos.z
    );
    this.camera.rotation.set(0, this.player.yaw, 0);
    this.clock.getDelta();
    this.audio.init();
    if (this.level.hint) this.hooks.onToast?.(this.level.hint);
    if (this.hooks.onHud) {
      this.emitHud();
    }
  }

  enterMenuView() {
    this.state = 'menu';
    this.setWeaponsVisible(false);
    this.scoped = false;
    this.hooks.onScope?.(false);
    this.marker.visible = false;
    this.menuAngle = 0.8;
    this.orbitCamera(0.016);
  }

  returnToMenu() {
    if (document.pointerLockElement) document.exitPointerLock();
    this.state = 'menu';
    this.loadLevel(0, { preview: true });
  }

  pause() {
    if (this.state === 'playing') {
      this.state = 'paused';
      this.keys.clear();
      this.aiming = false;
      this.scoped = false;
      this.hooks.onScope?.(false);
    }
  }

  resume() {
    if (this.state === 'paused') {
      this.state = 'playing';
      this.clock.getDelta();
      this.keys.clear();
    }
  }

  /* ------------------------------------------------------------------ */
  /* Input                                                              */
  /* ------------------------------------------------------------------ */

  onKeyDown(event) {
    if (event.code === 'KeyM') {
      this.audio.init();
      const muted = this.audio.toggleMute();
      this.hooks.onMute?.(muted);
    }
    if (event.code === 'Digit1' || event.code === 'Digit2' || event.code === 'Digit3') {
      this.setWeapon(Number(event.code.slice(-1)) - 1);
      return;
    }
    if (event.code === 'KeyR') {
      this.startReload();
      return;
    }
    if (event.code === 'KeyE' && this.state === 'playing') {
      this.tryTalk();
    }
    this.keys.add(event.code);
  }

  onKeyUp(event) {
    this.keys.delete(event.code);
  }

  onMouseMove(event) {
    if (this.state !== 'playing') return;

    const locked = document.pointerLockElement === this.canvas;
    const rightDragging = (event.buttons & 2) === 2;
    if (!locked && !rightDragging) return;

    const sensitivity = locked ? 0.0021 : 0.0034;
    this.player.yaw -= event.movementX * sensitivity;
    this.player.pitch -= event.movementY * sensitivity;
    this.player.pitch = clamp(this.player.pitch, -1.42, 1.42);
    this.lookSway.x = clamp(this.lookSway.x + event.movementX * 0.00022, -1, 1);
    this.lookSway.y = clamp(this.lookSway.y + event.movementY * 0.00022, -1, 1);
  }

  onMouseDown(event) {
    if (this.state !== 'playing') return;

    if (event.button === 2) {
      this.setAiming(true);
      return;
    }
    if (event.button !== 0) return;

    if (this.weaponIndex === 0) {
      if (this.attackCooldown > 0 || this.swing >= 0) return;
      this.swing = 0;
      this.hitDone = false;
      this.attackCooldown = 0.58;
      this.audio.whoosh();
      return;
    }

    this.fireGun();
  }

  onMouseUp(event) {
    if (event.button === 2) this.setAiming(false);
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
  }

  /* ------------------------------------------------------------------ */
  /* Main loop                                                          */
  /* ------------------------------------------------------------------ */

  loop() {
    requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, this.clock.getDelta());

    if (this.state !== 'paused' && this.state !== 'boot') {
      this.time += dt;
      this.gradePass.uniforms.time.value = this.time;
      this.updateSnow(dt);
      this.updateEffects(dt);
      this.world?.update(this.time, dt);

      if (this.state === 'playing') {
        this.updatePlaying(dt);
      } else if (this.state === 'ending') {
        this.updateEnding(dt);
      } else if (this.state === 'menu') {
        this.orbitCamera(dt);
      }
    }

    this.composer.render();
  }

  orbitCamera(dt) {
    if (!this.level) return;
    const focus = this.level.focus ?? { x: 0, y: 3, z: 0 };
    this.menuAngle += dt * 0.03;
    const radius = 19;
    this.camera.position.set(
      focus.x + Math.cos(this.menuAngle) * radius,
      7.2 + Math.sin(this.menuAngle * 0.8) * 1.1,
      focus.z + Math.sin(this.menuAngle) * radius
    );
    this.camera.lookAt(focus.x, focus.y, focus.z);
  }

  updateSnow(dt) {
    const cam = this.camera.position;
    const wx = this.snowWind.x;
    const wz = this.snowWind.z;
    for (const sys of this.snowSystems) {
      const half = sys.range / 2;
      const n = sys.active;
      for (let i = 0; i < n; i++) {
        const j = i * 3;
        sys.positions[j] += wx * dt;
        sys.positions[j + 1] -= (0.5 + sys.speeds[i]) * dt * this.snowSpeedFactor;
        sys.positions[j + 2] += wz * dt;

        if (sys.positions[j + 1] < -0.4) {
          sys.positions[j + 1] = 26 + Math.random() * 8;
        }

        if (sys.positions[j] - cam.x > half) sys.positions[j] -= sys.range;
        else if (sys.positions[j] - cam.x < -half) sys.positions[j] += sys.range;
        if (sys.positions[j + 2] - cam.z > half) sys.positions[j + 2] -= sys.range;
        else if (sys.positions[j + 2] - cam.z < -half) sys.positions[j + 2] += sys.range;
      }
      sys.points.geometry.attributes.position.needsUpdate = true;
    }
  }

  updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const effect = this.effects[i];
      effect.life -= dt;

      if (effect.velocity) {
        effect.velocity.y -= 9.8 * dt;
        effect.mesh.position.addScaledVector(effect.velocity, dt);
      }

      if (effect.fade && effect.mesh.material) {
        effect.mesh.material.opacity =
          Math.max(0, effect.life / effect.maxLife) * effect.baseOpacity;
      }

      if (effect.shrink) {
        effect.mesh.scale.multiplyScalar(Math.max(0.01, 1 - dt * 3.5));
      }

      if (effect.life <= 0) {
        this.scene.remove(effect.mesh);
        if (effect.disposeGeom && effect.mesh.geometry) effect.mesh.geometry.dispose();
        if (effect.disposeMat && effect.mesh.material) effect.mesh.material.dispose();
        this.effects.splice(i, 1);
      }
    }
  }

  clearEffects() {
    for (const effect of this.effects) {
      if (effect.disposeGeom && effect.mesh.geometry) effect.mesh.geometry.dispose();
      if (effect.disposeMat && effect.mesh.material) effect.mesh.material.dispose();
    }
    this.effects = [];
  }

  updatePlaying(dt) {
    this.elapsed += dt;
    this.updatePlayer(dt);
    this.updateWeapon(dt);
    this.updateTasks(dt);
    this.updateTalkTarget();
    for (const agent of this.agents) agent.update(dt, this);
    this.updateTraffic(dt);
    for (const civilian of this.civilians) civilian.update(dt, this);
    this.updatePendingRadio(dt);
    if (this.dialogueTimer > 0) {
      this.dialogueTimer -= dt;
      if (this.dialogueTimer <= 0) this.hooks.onDialogue?.(null);
    }
    this.updateMarker();
    this.updateHud(dt);
  }

  updateTalkTarget() {
    this.talkTarget = null;
    if (this.state !== 'playing' || this.interactTask) return;

    let nearest = null;
    let nearestDist = Infinity;
    for (const civilian of this.civilians) {
      if (!civilian.alive || civilian.talkTimer > 0) continue;
      const dist = Math.hypot(
        this.player.pos.x - civilian.pos.x,
        this.player.pos.z - civilian.pos.z
      );
      if (dist > 2.7 || dist >= nearestDist) continue;
      if (
        !hasLineOfSight(
          this.player.pos.x,
          this.player.pos.z,
          civilian.pos.x,
          civilian.pos.z,
          this.colliders
        )
      ) {
        continue;
      }
      nearest = civilian;
      nearestDist = dist;
    }
    this.talkTarget = nearest;
  }

  tryTalk() {
    if (this.state !== 'playing' || this.interactTask || !this.talkTarget) return;
    this.talkTarget.talk(this);
  }

  showDialogue(civilian, line) {
    this.dialogueTimer = 4.4;
    this.hooks.onDialogue?.({ name: civilian.name, line });
    this.audio.chatter?.();
  }

  updateTraffic(dt) {
    if (!this.traffic.length) return;
    const player = this.player;

    for (const car of this.traffic) {
      car.cooldown = Math.max(0, car.cooldown - dt);
      car.pos += car.speed * car.dir * dt;
      if (car.pos > car.max) car.pos = car.min;
      else if (car.pos < car.min) car.pos = car.max;

      if (car.axis === 'z') car.group.position.set(car.lane, 0, car.pos);
      else car.group.position.set(car.pos, 0, car.lane);

      const halfX = car.axis === 'z' ? 1.18 : 2.35;
      const halfZ = car.axis === 'z' ? 2.35 : 1.18;
      const dx = player.pos.x - car.group.position.x;
      const dz = player.pos.z - car.group.position.z;

      if (
        car.cooldown <= 0 &&
        Math.abs(dx) < halfX + player.radius &&
        Math.abs(dz) < halfZ + player.radius
      ) {
        car.cooldown = 2.4;
        this.audio.horn?.();
        this.hooks.onToast?.('WATCH THE TRAFFIC');
        this.damagePlayer(26 + car.speed * 1.1, 'A car ran you down in the street.');
        if (car.axis === 'z') player.vel.z += car.dir * 5.5;
        else player.vel.x += car.dir * 5.5;
      }
    }
  }

  updatePendingRadio(dt) {
    if (!this.pendingRadio) return;
    this.pendingRadio.timer -= dt;
    if (this.pendingRadio.timer > 0) return;

    const guard = this.pendingRadio.guard;
    this.pendingRadio = null;
    this.raiseAlarm(guard, { message: null });
  }

  updateEnding(dt) {
    const slow = dt * 0.38;
    this.endTimer -= dt;
    this.updateWeapon(slow);
    for (const agent of this.agents) agent.update(slow, this);
    this.updateMarker();
    if (this.endTimer <= 0) this.finishSuccess();
  }

  updatePlayer(dt) {
    const player = this.player;
    player.crouching = this.keys.has('KeyC');
    player.sprinting =
      (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) && !player.crouching;

    let moveX = 0;
    let moveZ = 0;
    if (this.keys.has('KeyW')) moveZ += 1;
    if (this.keys.has('KeyS')) moveZ -= 1;
    if (this.keys.has('KeyA')) moveX -= 1;
    if (this.keys.has('KeyD')) moveX += 1;

    const len = Math.hypot(moveX, moveZ);
    if (len > 0) {
      moveX /= len;
      moveZ /= len;
    }

    if (document.pointerLockElement !== this.canvas) {
      const lookSpeed = 1.8;
      if (this.keys.has('ArrowLeft')) player.yaw += lookSpeed * dt;
      if (this.keys.has('ArrowRight')) player.yaw -= lookSpeed * dt;
      if (this.keys.has('ArrowUp')) player.pitch += lookSpeed * 0.7 * dt;
      if (this.keys.has('ArrowDown')) player.pitch -= lookSpeed * 0.7 * dt;
      player.pitch = clamp(player.pitch, -1.42, 1.42);
    }

    let speed = player.crouching ? 2.15 : player.sprinting ? 6.25 : 4.05;
    if (this.aiming && this.weaponIndex > 0) speed *= 0.62;
    const forwardX = -Math.sin(player.yaw);
    const forwardZ = -Math.cos(player.yaw);
    const rightX = Math.cos(player.yaw);
    const rightZ = -Math.sin(player.yaw);

    const desiredX = (forwardX * moveZ + rightX * moveX) * speed;
    const desiredZ = (forwardZ * moveZ + rightZ * moveX) * speed;
    const blend = 1 - Math.exp(-dt * 12);

    player.vel.x += (desiredX - player.vel.x) * blend;
    player.vel.z += (desiredZ - player.vel.z) * blend;

    player.pos.x += player.vel.x * dt;
    player.pos.z += player.vel.z * dt;

    resolveCircle(player.pos, player.radius, this.colliders);

    player.moving = Math.hypot(player.vel.x, player.vel.z) > 0.7;

    if (player.moving) {
      player.bob += dt * (player.sprinting ? 13.5 : 9);
      this.footTimer -= dt;
      if (this.footTimer <= 0) {
        this.footTimer = player.crouching ? 0.58 : player.sprinting ? 0.3 : 0.43;
        this.audio.footstep(player.crouching);
      }
    } else {
      player.bob += dt * 1.6;
    }

    const bobAmp = player.moving
      ? player.crouching
        ? 0.014
        : player.sprinting
          ? 0.048
          : 0.028
      : 0.005;

    const eye = player.crouching ? player.crouchEye : player.eyeHeight;
    this.camera.position.set(
      player.pos.x,
      eye + Math.sin(player.bob) * bobAmp,
      player.pos.z
    );

    const targetFov = this.scoped
      ? WEAPONS[2].scopeFov
      : this.aiming && this.weaponIndex > 0
        ? 54
        : player.sprinting
          ? 75
          : player.crouching
            ? 68
            : 70;
    if (Math.abs(this.camera.fov - targetFov) > 0.02) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 9);
      this.camera.updateProjectionMatrix();
    }

    const roll = Math.sin(player.bob * 0.5) * 0.0035 * (player.sprinting ? 2 : 1);
    this.camera.rotation.set(player.pitch, player.yaw, roll);

    if (this.shake > 0.001) {
      this.shake = Math.max(0, this.shake - dt * 2.6);
      this.camera.rotation.x += Math.sin(this.time * 68) * this.shake * 0.008;
      this.camera.rotation.y += Math.cos(this.time * 59) * this.shake * 0.008;
    }
  }

  updateWeapon(dt) {
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.gunKick = Math.max(0, this.gunKick - dt * 6.5);
    this.weaponSwitchT = Math.min(1, this.weaponSwitchT + dt * 7);

    if (this.reloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) this.finishReload();
    }

    const decay = 1 - Math.exp(-dt * 8);
    this.lookSway.x += (0 - this.lookSway.x) * decay;
    this.lookSway.y += (0 - this.lookSway.y) * decay;

    const swayX = this.lookSway.x * 0.05;
    const swayY = this.lookSway.y * 0.04;
    const switchDrop = (1 - this.weaponSwitchT) * 0.35;
    const reloadDrop = this.reloading ? 0.16 : 0;

    if (this.weaponIndex === 0) {
      this.weapon.visible = true;

      if (this.swing >= 0) {
        this.swing += dt * 4.1;
        if (!this.hitDone && this.swing > 0.32) {
          this.hitDone = true;
          this.performStrike();
        }
        if (this.swing >= 1) this.swing = -1;
      }

      const swing = this.swing >= 0 ? Math.sin(Math.min(1, this.swing) * Math.PI) : 0;
      this.weapon.position.set(
        0.27 - swing * 0.4 + swayX,
        -0.25 - swing * 0.06 + Math.sin(this.player.bob) * 0.006 + swayY - switchDrop,
        -0.46 + swing * 0.17
      );
      this.weapon.rotation.set(
        0.2 + swing * 1.05 - this.player.pitch * 0.08,
        -0.55 + swing * 0.95,
        0.18 - swing * 0.95
      );
      return;
    }

    if (this.scoped) {
      this.weapon.visible = false;
      return;
    }

    this.weapon.visible = true;
    const spec = WEAPONS[this.weaponIndex];
    const aimed = this.aiming ? 1 : 0;
    const kick = this.gunKick;
    const bob = Math.sin(this.player.bob) * 0.004;

    if (spec.id === 'pistol') {
      this.weapon.position.set(
        0.245 - aimed * 0.245 + swayX * 0.35,
        -0.23 + aimed * 0.075 + swayY * 0.3 + bob - switchDrop - reloadDrop,
        -0.52 + aimed * 0.045 + kick * 0.07
      );
      this.weapon.rotation.set(
        0.02 + kick * 0.05 + reloadDrop * 1.2,
        -0.055 + aimed * 0.055,
        0.015 - aimed * 0.015
      );
    } else {
      this.weapon.position.set(
        0.24 - aimed * 0.24 + swayX * 0.25,
        -0.29 + aimed * 0.13 + swayY * 0.24 + bob - switchDrop - reloadDrop,
        -0.62 + aimed * 0.06 + kick * 0.12
      );
      this.weapon.rotation.set(
        0.03 + kick * 0.06 + reloadDrop * 1.1,
        -0.05 + aimed * 0.05,
        0.012
      );
    }
  }

  fireGun() {
    const spec = WEAPONS[this.weaponIndex];
    if (!spec || spec.id === 'knife' || this.state !== 'playing') return;
    if (this.reloading || this.fireCooldown > 0) return;

    const ammo = this.ammo[this.weaponIndex];
    if (!ammo) return;
    if (ammo.mag <= 0) {
      this.audio.dryFire?.();
      this.startReload();
      return;
    }

    ammo.mag -= 1;
    this.fireCooldown = spec.fireDelay;
    this.gunKick = 1;
    this.player.pitch = clamp(
      this.player.pitch + (spec.id === 'sniper' ? 0.052 : 0.016),
      -1.42,
      1.42
    );

    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    const spread = this.scoped ? 0.00035 : this.aiming ? spec.aimSpread : spec.spread;
    if (spread > 0) {
      const right = new THREE.Vector3().crossVectors(forward, this.camera.up).normalize();
      const up = new THREE.Vector3().crossVectors(right, forward).normalize();
      forward.addScaledVector(right, (Math.random() * 2 - 1) * spread);
      forward.addScaledVector(up, (Math.random() * 2 - 1) * spread);
      forward.normalize();
    }

    if (spec.id === 'sniper') this.audio.sniper?.();
    else this.audio.pistol?.();

    const muzzle = this.camera.localToWorld(
      new THREE.Vector3(0.12, -0.11, spec.id === 'sniper' ? -1.1 : -0.5)
    );
    this.spawnMuzzleFlash(muzzle, spec.id === 'sniper' ? 1.7 : 1.0);

    const hit = this.raycastShot(this.camera.position, forward, spec.range);
    this.spawnTracer(
      muzzle,
      hit.point,
      spec.id === 'sniper' ? 0xffe2ab : 0xffd49a,
      spec.id === 'sniper' ? 0.18 : 0.07
    );

    if (hit.agent) this.damageAgent(hit.agent, spec.damage);
    else this.spawnImpact(hit.point);

    this.alertNearbyGuards(this.player.pos);
    this.emitHud();

    if (ammo.mag <= 0) this.startReload();
  }

  raycastShot(origin, dir, range) {
    let bestT = range;
    let agent = null;

    for (const box of this.colliders) {
      const t = rayAABB(origin, dir, box, bestT);
      if (t < bestT) bestT = t;
    }

    for (const candidate of this.agents) {
      if (!candidate.alive) continue;

      const chest = { x: candidate.pos.x, y: 1.15, z: candidate.pos.z };
      const head = { x: candidate.pos.x, y: 1.64, z: candidate.pos.z };
      let t = raySphere(origin, dir, chest, 0.37);
      t = Math.min(t, raySphere(origin, dir, head, 0.2));

      if (t < bestT) {
        bestT = t;
        agent = candidate;
      }
    }

    const point = origin.clone().addScaledVector(dir, bestT);
    return { agent, point, distance: bestT };
  }

  spawnMuzzleFlash(position, scale) {
    const flash = new THREE.Sprite(this.flashMaterial.clone());
    flash.position.copy(position);
    flash.scale.set(scale, scale, 1);
    this.scene.add(flash);
    this.effects.push({
      mesh: flash,
      life: 0.06,
      maxLife: 0.06,
      fade: true,
      baseOpacity: 0.95,
      disposeMat: true,
    });
  }

  spawnTracer(from, to, color, life) {
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const tracer = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([from.clone(), to.clone()]),
      material
    );
    this.scene.add(tracer);
    this.effects.push({
      mesh: tracer,
      life,
      maxLife: life,
      fade: true,
      baseOpacity: 0.8,
      disposeGeom: true,
      disposeMat: true,
    });
  }

  spawnImpact(position) {
    for (let i = 0; i < 4; i++) {
      const spark = new THREE.Sprite(this.flashMaterial.clone());
      spark.material.color.setHex(0xffc77e);
      spark.position.copy(position);
      spark.scale.setScalar(0.12 + Math.random() * 0.08);
      this.scene.add(spark);
      this.effects.push({
        mesh: spark,
        life: 0.16 + Math.random() * 0.1,
        maxLife: 0.26,
        fade: true,
        baseOpacity: 0.7,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 2.4,
          0.6 + Math.random() * 1.8,
          (Math.random() - 0.5) * 2.4
        ),
        disposeMat: true,
      });
    }
  }

  damageAgent(agent, damage) {
    if (!agent.alive) return;

    agent.bulletHp = Math.max(0, (agent.bulletHp ?? 2) - damage);
    this.spawnBlood(agent.pos);
    this.audio.stabHit();

    if (agent.bulletHp <= 0) {
      this.killAgent(agent, 'gun');
      return;
    }

    if (agent === this.target) {
      this.target.startFlee(this);
    } else {
      agent.awareness = 1;
      agent.state = 'chase';
      agent.searchTimer = 5;
      agent.lastSeen.set(this.player.pos.x, 0, this.player.pos.z);
    }
  }

  setupTasks() {
    const definitions = this.levelTasks ?? [];
    this.tasks = definitions.map((task, index) => ({
      ...task,
      index,
      label:
        task.label ??
        (task.type === 'relay' ? 'DISABLE SECURITY RELAY' : 'RECOVER THE LEDGER'),
      complete: false,
      progress: 0,
      group: null,
      beacon: null,
      icon: null,
      screen: null,
    }));
    this.objectivesComplete = this.tasks.length === 0;
    this.objectivesAnnounced = this.objectivesComplete;
    this.interactTask = null;

    for (const task of this.tasks) this.createTaskProp(task);
  }

  createTaskProp(task) {
    const isRelay = task.type === 'relay';
    const group = new THREE.Group();
    group.position.set(task.x, 0, task.z);
    this.scene.add(group);

    if (isRelay) {
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.05, 0.55), MAT.metal);
      base.position.y = 0.525;
      group.add(base);

      const screen = new THREE.Mesh(
        new THREE.BoxGeometry(0.58, 0.36, 0.05),
        new THREE.MeshBasicMaterial({ color: 0x67d8ff, toneMapped: false })
      );
      screen.position.set(0, 0.82, 0.29);
      group.add(screen);
      task.screen = screen;

      const antenna = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.026, 0.92, 8),
        MAT.iron
      );
      antenna.position.set(0.31, 1.45, 0);
      group.add(antenna);
    } else {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.72, 0.9), MAT.woodDark);
      crate.position.y = 0.36;
      group.add(crate);

      const caseMesh = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.4, 0.17), MAT.iron);
      caseMesh.position.set(0, 0.9, 0);
      group.add(caseMesh);

      for (const side of [-1, 1]) {
        const clasp = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.04), MAT.brass);
        clasp.position.set(side * 0.16, 0.92, 0.1);
        group.add(clasp);
      }
    }

    const color = isRelay ? 0x67d8ff : 0xf1cc7d;
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.34, 0.62, 7.4, 14, 1, true),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.1,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      })
    );
    beam.position.y = 3.7;
    group.add(beam);

    const icon = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.22, 0),
      new THREE.MeshBasicMaterial({ color, toneMapped: false })
    );
    icon.position.y = 2.55;
    group.add(icon);

    task.group = group;
    task.beacon = beam;
    task.icon = icon;
    this.world.solid(task.x, task.z, 1.0, 1.0, 1.1);
  }

  updateTasks(dt) {
    this.taskPulse += dt;

    for (const task of this.tasks) {
      if (task.complete || !task.icon) continue;
      task.icon.rotation.y += dt * 1.7;
      task.icon.position.y = 2.55 + Math.sin(this.taskPulse * 2.3 + task.index) * 0.13;
      if (task.beacon) {
        task.beacon.material.opacity =
          0.09 + Math.sin(this.taskPulse * 2.4 + task.index) * 0.03;
      }
    }

    if (this.state !== 'playing') {
      this.interactTask = null;
      return;
    }

    let nearest = null;
    let nearestDist = Infinity;
    for (const task of this.tasks) {
      if (task.complete) continue;
      const dist = Math.hypot(this.player.pos.x - task.x, this.player.pos.z - task.z);
      if (dist > 2.8 || dist >= nearestDist) continue;
      if (
        !hasLineOfSight(
          this.player.pos.x,
          this.player.pos.z,
          task.x,
          task.z,
          this.colliders
        )
      ) {
        continue;
      }
      nearest = task;
      nearestDist = dist;
    }

    if (this.interactTask !== nearest) {
      if (this.interactTask) this.interactTask.progress = 0;
      this.interactTask = nearest;
    }

    if (nearest && this.keys.has('KeyE')) {
      nearest.progress = Math.min(1, nearest.progress + dt / 1.15);
      if (nearest.progress >= 1) this.completeTask(nearest);
      this.emitHud();
    } else if (nearest) {
      nearest.progress = 0;
    }
  }

  completeTask(task) {
    if (task.complete) return;

    task.complete = true;
    task.progress = 1;
    if (task.beacon) task.beacon.visible = false;
    if (task.icon) task.icon.visible = false;
    if (task.screen) task.screen.material.color.setHex(0x79ffb3);

    const completed = this.tasks.filter((entry) => entry.complete).length;
    this.objectivesComplete = completed === this.tasks.length;
    this.audio.objective?.();

    if (this.objectivesComplete) {
      this.objectivesAnnounced = true;
      this.hooks.onToast?.('OBJECTIVES SECURED — TARGET VULNERABLE');
    } else {
      this.hooks.onToast?.(`OBJECTIVE ${completed}/${this.tasks.length} — ${task.label}`);
    }

    this.interactTask = null;
    this.emitHud();
  }

  getStrikeInfo() {
    if (!this.target || !this.target.alive) {
      return { dist: Infinity, inRange: false, canStrike: false, behind: false, los: false };
    }

    const target = this.target;
    const dx = this.player.pos.x - target.pos.x;
    const dz = this.player.pos.z - target.pos.z;
    const dist = Math.hypot(dx, dz);
    const los = hasLineOfSight(
      this.player.pos.x,
      this.player.pos.z,
      target.pos.x,
      target.pos.z,
      this.colliders
    );

    const fx = Math.sin(target.heading);
    const fz = Math.cos(target.heading);
    const facingDot = dist > 0.001 ? (dx * fx + dz * fz) / dist : 0;
    const behind = target.state === 'flee' || facingDot < 0.15;
    const inRange = dist < 2.65 && los;

    return { dist, inRange, canStrike: inRange && behind, behind, los };
  }

  performStrike() {
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    const origin = this.camera.position;
    const strikeInfo = this.getStrikeInfo();
    let victim = null;
    let victimDist = Infinity;

    for (const agent of this.agents) {
      if (!agent.alive) continue;

      const flatDist = Math.hypot(
        agent.pos.x - this.player.pos.x,
        agent.pos.z - this.player.pos.z
      );
      if (flatDist > 2.65 || flatDist >= victimDist) continue;

      const to = new THREE.Vector3(agent.pos.x, 1.05, agent.pos.z).sub(origin);
      to.normalize();
      if (forward.dot(to) < 0.42) continue;

      if (
        !hasLineOfSight(
          this.player.pos.x,
          this.player.pos.z,
          agent.pos.x,
          agent.pos.z,
          this.colliders
        )
      ) {
        continue;
      }

      victim = agent;
      victimDist = flatDist;
    }

    if (!victim) return;

    if (victim === this.target && !strikeInfo.behind) {
      this.blockTargetStrike();
      return;
    }

    this.killAgent(victim);
  }

  blockTargetStrike() {
    this.shake = 0.55;
    this.audio.impact();
    this.target.startFlee(this);
    this.hooks.onToast?.('BLOCKED — STRIKE FROM BEHIND');
  }

  killAgent(agent, cause = 'knife') {
    agent.die();
    if (cause === 'knife') this.audio.stabHit();
    this.spawnBlood(agent.pos);

    if (agent === this.target) {
      if (!this.objectivesComplete) {
        this.fail(
          `The hit came too early. Complete all ${this.tasks.length} objectives before eliminating the target.`
        );
        return;
      }
      this.succeed();
      return;
    }

    this.guardsKilled += 1;
    if (cause === 'knife') this.audio.bodyFall();
    this.handleKillWitnesses(agent);
  }

  spawnBlood(pos) {
    for (let i = 0; i < 14; i++) {
      const mesh = new THREE.Mesh(this.bloodGeo, this.bloodMat);
      mesh.position.set(pos.x, 1.15 + Math.random() * 0.4, pos.z);
      this.scene.add(mesh);
      this.effects.push({
        mesh,
        life: 0.85 + Math.random() * 0.4,
        maxLife: 1.2,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 3.4,
          1.4 + Math.random() * 2.6,
          (Math.random() - 0.5) * 3.4
        ),
        shrink: true,
      });
    }
  }

  updateMarker() {
    if (!this.marker) return;
    const visible =
      this.target &&
      this.target.alive &&
      (this.state === 'playing' || this.state === 'ending');
    this.marker.visible = visible;
    if (visible) {
      this.marker.position.set(
        this.target.pos.x,
        2.85 + Math.sin(this.time * 2.2) * 0.12,
        this.target.pos.z
      );
    }
  }

  updateHud(dt) {
    this.hudTimer -= dt;
    if (this.hudTimer > 0) return;
    this.hudTimer = 0.1;
    this.emitHud();
  }

  emitHud() {
    if (!this.target) return;
    const distance = this.player.pos.distanceTo(this.target.pos);
    const strike = this.getStrikeInfo();
    let awareness = 0;
    for (const guard of this.guards) {
      if (guard.alive) awareness = Math.max(awareness, guard.awareness);
    }
    let status = 'UNDETECTED';
    if (this.alarm) status = 'SPOTTED';
    else if (awareness > 0.3) status = 'SUSPICIOUS';

    const completedTasks = this.tasks.filter((task) => task.complete).length;
    const taskData = this.tasks.map((task) => ({
      label: task.label,
      type: task.type,
      complete: task.complete,
      progress: task.progress,
      distance: Math.hypot(this.player.pos.x - task.x, this.player.pos.z - task.z),
    }));

    this.hooks.onHud?.({
      health: this.health,
      status,
      distance,
      inRange: this.weaponIndex === 0 && strike.inRange,
      canStrike: this.weaponIndex === 0 && strike.canStrike,
      behind: this.weaponIndex === 0 && strike.behind,
      alerts: this.alerts,
      targetName: this.level.target,
      weapon: this.getWeaponHud(),
      tasks: taskData,
      completedTasks,
      totalTasks: this.tasks.length,
      objectivesComplete: this.objectivesComplete,
      targetReady: this.objectivesComplete,
      interact: this.interactTask
        ? {
            kind: 'task',
            label: this.interactTask.label,
            progress: this.interactTask.progress,
          }
        : this.talkTarget
          ? {
              kind: 'talk',
              label: `TALK TO ${this.talkTarget.name}`,
              progress: 0,
            }
          : null,
    });
  }

  /* ------------------------------------------------------------------ */
  /* Agent events                                                       */
  /* ------------------------------------------------------------------ */

  alertNearbyGuards(position) {
    if (this.state !== 'playing') return;
    for (const guard of this.guards) {
      if (!guard.alive || guard.radioTimer > 0) continue;
      const dist = Math.hypot(guard.pos.x - position.x, guard.pos.z - position.z);
      if (dist > 34) continue;
      if (guard.state === 'patrol') {
        guard.state = 'investigate';
        guard.investigatePos.set(position.x, 0, position.z);
        guard.investigateTimer = 6;
        guard.awareness = Math.max(guard.awareness, 0.55);
      }
    }
  }

  findKillWitnesses(victim) {
    const witnesses = { targetSees: false, guards: [] };
    const target = this.target;

    if (target?.alive && target !== victim) {
      witnesses.targetSees =
        target.canSeePoint(this.player.pos.x, this.player.pos.z, this.colliders, 23, 0.1) ||
        target.canSeePoint(victim.pos.x, victim.pos.z, this.colliders, 23, 0.1);
    }

    for (const guard of this.guards) {
      if (!guard.alive || guard === victim) continue;
      const minDot = guard.state === 'chase' || guard.state === 'investigate' ? -0.15 : 0.12;
      const seesPlayer = guard.canSeePoint(
        this.player.pos.x,
        this.player.pos.z,
        this.colliders,
        28,
        minDot
      );
      const seesBody = guard.canSeePoint(
        victim.pos.x,
        victim.pos.z,
        this.colliders,
        28,
        minDot
      );
      if (seesPlayer || seesBody) witnesses.guards.push(guard);
    }

    return witnesses;
  }

  handleKillWitnesses(victim) {
    if (this.state !== 'playing') return;
    const witnesses = this.findKillWitnesses(victim);

    if (witnesses.targetSees) {
      this.raiseAlarm(this.target, {
        message: 'THE TARGET SAW THE KILL — HE IS RUNNING',
      });
      return;
    }

    if (witnesses.guards.length) {
      this.radioAlarm(
        witnesses.guards[0],
        'Boss, the intruder just killed one of ours. He is still in the district.'
      );
    }
  }

  radioAlarm(guard, line) {
    if (this.state !== 'playing' || !guard?.alive) return;
    if (this.alarm) return;
    if (this.pendingRadio) return;

    guard.investigatedAlarm = true;
    guard.startRadio(1.2);
    this.audio.radioCall?.();
    this.hooks.onRadio?.({ name: 'BODYGUARD', line });
    this.pendingRadio = { timer: 1.2, guard };
  }

  raiseAlarm(source, options = {}) {
    if (this.state !== 'playing') return;
    if (source) this.alarmPos.set(source.pos.x, 0, source.pos.z);
    if (!this.alarm) {
      this.alarm = true;
      this.alerts += 1;
      this.audio.alarm();
      const message =
        options.message === undefined ? 'ALARM RAISED — TARGET FLEEING' : options.message;
      if (message) this.hooks.onToast?.(message);
    }
    this.target?.startFlee(this);
  }

  guardShoot(guard, distance) {
    if (this.state !== 'playing' || !this.target) return;

    this.audio.gunshot(distance);

    const muzzle = new THREE.Vector3(guard.pos.x, 1.4, guard.pos.z);
    const aim = new THREE.Vector3(
      this.player.pos.x + (Math.random() - 0.5) * 0.7,
      1.1,
      this.player.pos.z + (Math.random() - 0.5) * 0.7
    );

    const flash = new THREE.Sprite(this.flashMaterial.clone());
    flash.position.copy(muzzle);
    flash.scale.set(1.3, 1.3, 1);
    this.scene.add(flash);
    this.effects.push({
      mesh: flash,
      life: 0.07,
      maxLife: 0.07,
      fade: true,
      baseOpacity: 0.9,
      disposeMat: true,
    });

    const tracerMaterial = new THREE.LineBasicMaterial({
      color: 0xffd6a0,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const tracer = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([muzzle, aim]),
      tracerMaterial
    );
    this.scene.add(tracer);
    this.effects.push({
      mesh: tracer,
      life: 0.08,
      maxLife: 0.08,
      fade: true,
      baseOpacity: 0.75,
      disposeGeom: true,
      disposeMat: true,
    });

    const chance = clamp(
      0.8 -
        distance * 0.027 -
        (this.player.sprinting ? 0.16 : 0) -
        (this.player.crouching ? 0.08 : 0) -
        (this.player.moving ? 0.06 : 0),
      0.15,
      0.85
    );

    if (Math.random() < chance) {
      const damage = 6 + Math.random() * 8;
      this.damagePlayer(damage);
    }
  }

  damagePlayer(amount, reason = 'You were killed. The contract is forfeit.') {
    if (this.state !== 'playing') return;
    this.health = Math.max(0, this.health - amount);
    this.shake = 0.7;
    this.audio.impact();
    this.hooks.onDamage?.();
    if (this.health <= 0) {
      this.fail(reason);
    }
  }

  succeed() {
    if (this.state !== 'playing') return;
    this.state = 'ending';
    this.endTimer = 2.1;
    this.alarm = false;
    this.aiming = false;
    this.scoped = false;
    this.hooks.onScope?.(false);
    this.audio.success();
    this.hooks.onKill?.();
    this.hooks.onHud?.({
      health: this.health,
      status: 'TARGET ELIMINATED',
      distance: 0,
      inRange: false,
      canStrike: false,
      behind: false,
      alerts: this.alerts,
      targetName: this.level.target,
    });
  }

  finishSuccess() {
    if (this.state !== 'ending') return;
    this.state = 'complete';
    this.setWeaponsVisible(false);
    this.scoped = false;
    this.hooks.onScope?.(false);
    this.marker.visible = false;

    let rank = 'GHOST';
    if (this.alerts > 0 || this.guardsKilled > 0) rank = 'SHADOW';
    if (this.alerts > 0 && this.guardsKilled > 0) rank = 'BRUTE';

    if (document.pointerLockElement) document.exitPointerLock();
    this.hooks.onComplete?.({
      levelIndex: this.levelIndex,
      seconds: this.elapsed,
      alerts: this.alerts,
      guardsKilled: this.guardsKilled,
      rank,
    });
  }

  fail(reason) {
    if (this.state !== 'playing') return;
    this.state = 'failed';
    this.setWeaponsVisible(false);
    this.scoped = false;
    this.hooks.onScope?.(false);
    this.marker.visible = false;
    this.audio.fail();
    if (document.pointerLockElement) document.exitPointerLock();
    this.hooks.onFail?.({
      levelIndex: this.levelIndex,
      reason,
      seconds: this.elapsed,
      alerts: this.alerts,
    });
  }
}
