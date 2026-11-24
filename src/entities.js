import * as THREE from 'three';
import { MAT } from './props.js';

/* ------------------------------------------------------------------ */
/* Collision / vision helpers                                         */
/* ------------------------------------------------------------------ */

const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);

export function resolveCircle(pos, radius, colliders) {
  for (const c of colliders) {
    if (c.height < 0.35) continue;
    const closestX = clamp(pos.x, c.minX, c.maxX);
    const closestZ = clamp(pos.z, c.minZ, c.maxZ);
    const dx = pos.x - closestX;
    const dz = pos.z - closestZ;
    const d2 = dx * dx + dz * dz;

    if (d2 < radius * radius) {
      if (d2 > 1e-7) {
        const d = Math.sqrt(d2);
        pos.x += (dx / d) * (radius - d);
        pos.z += (dz / d) * (radius - d);
      } else {
        const left = pos.x - c.minX + radius;
        const right = c.maxX - pos.x + radius;
        const top = pos.z - c.minZ + radius;
        const bottom = c.maxZ - pos.z + radius;
        const m = Math.min(left, right, top, bottom);
        if (m === left) pos.x = c.minX - radius;
        else if (m === right) pos.x = c.maxX + radius;
        else if (m === top) pos.z = c.minZ - radius;
        else pos.z = c.maxZ + radius;
      }
    }
  }
}

function segmentAABB(x1, z1, x2, z2, c) {
  let tmin = 0;
  let tmax = 1;
  const dx = x2 - x1;
  const dz = z2 - z1;

  if (Math.abs(dx) < 1e-8) {
    if (x1 < c.minX || x1 > c.maxX) return false;
  } else {
    let t1 = (c.minX - x1) / dx;
    let t2 = (c.maxX - x1) / dx;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }

  if (Math.abs(dz) < 1e-8) {
    if (z1 < c.minZ || z1 > c.maxZ) return false;
  } else {
    let t1 = (c.minZ - z1) / dz;
    let t2 = (c.maxZ - z1) / dz;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }

  return tmax > 0.02 && tmin < 0.98;
}

export function hasLineOfSight(x1, z1, x2, z2, colliders) {
  for (const c of colliders) {
    if (c.height < 1.25) continue;
    if (
      x1 >= c.minX - 0.15 &&
      x1 <= c.maxX + 0.15 &&
      z1 >= c.minZ - 0.15 &&
      z1 <= c.maxZ + 0.15
    ) {
      continue;
    }
    if (segmentAABB(x1, z1, x2, z2, c)) return false;
  }
  return true;
}

function blockedAhead(x, z, nx, nz, dist, colliders) {
  return !hasLineOfSight(x, z, x + nx * dist, z + nz * dist, colliders);
}

const angleLerp = (a, b, t) => {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
};

/* ------------------------------------------------------------------ */
/* Player                                                             */
/* ------------------------------------------------------------------ */

export class Player {
  constructor() {
    this.pos = new THREE.Vector3(0, 0, 0);
    this.vel = new THREE.Vector3();
    this.radius = 0.34;
    this.eyeHeight = 1.66;
    this.crouchEye = 1.12;
    this.crouching = false;
    this.sprinting = false;
    this.moving = false;
    this.yaw = 0;
    this.pitch = 0;
    this.health = 100;
    this.bob = 0;
    this.stepTimer = 0;
  }

  reset(spawn) {
    this.pos.set(spawn.x, 0, spawn.z);
    this.vel.set(0, 0, 0);
    this.yaw = spawn.yaw ?? 0;
    this.pitch = 0;
    this.health = 100;
    this.crouching = false;
    this.sprinting = false;
    this.moving = false;
    this.bob = 0;
    this.stepTimer = 0;
  }
}

/* ------------------------------------------------------------------ */
/* Shared humanoid model                                              */
/* ------------------------------------------------------------------ */

const skinMat = new THREE.MeshStandardMaterial({ color: 0xc39a7d, roughness: 0.86 });
const darkMat = new THREE.MeshStandardMaterial({ color: 0x14171c, roughness: 0.8 });

export class Humanoid {
  constructor(scene, opts = {}) {
    this.scene = scene;
    this.pos = new THREE.Vector3(opts.x ?? 0, 0, opts.z ?? 0);
    this.heading = opts.heading ?? Math.PI;
    this.alive = true;
    this.bulletHp = 2;
    this.walkPhase = 0;
    this.waypointIndex = 0;
    this.wait = 0;
    this.scanPhase = Math.random() * 10;
    this.isTarget = false;

    const coatColor = opts.coat ?? 0x1d2a22;
    const hatColor = opts.hat ?? 0x101216;
    const scarfColor = opts.scarf ?? 0x6f1d21;

    const coatMat = new THREE.MeshStandardMaterial({ color: coatColor, roughness: 0.88 });
    const hatMat = new THREE.MeshStandardMaterial({ color: hatColor, roughness: 0.9 });
    const scarfMat = new THREE.MeshStandardMaterial({ color: scarfColor, roughness: 0.92 });

    const root = new THREE.Group();
    root.position.copy(this.pos);
    root.rotation.y = this.heading;
    scene.add(root);
    this.root = root;

    const mesh = (geo, mat) => {
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = true;
      m.receiveShadow = true;
      return m;
    };

    const coatSkirt = mesh(
      new THREE.CylinderGeometry(0.3, 0.36, 0.62, 10),
      coatMat
    );
    coatSkirt.position.y = 0.92;
    root.add(coatSkirt);

    const torso = mesh(new THREE.CapsuleGeometry(0.235, 0.44, 4, 12), coatMat);
    torso.position.y = 1.23;
    torso.scale.z = 0.82;
    root.add(torso);

    const collar = mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.16, 10), hatMat);
    collar.position.y = 1.55;
    root.add(collar);

    const head = mesh(new THREE.SphereGeometry(0.155, 18, 12), skinMat);
    head.position.y = 1.66;
    head.scale.set(0.92, 1.02, 0.95);
    root.add(head);
    this.head = head;

    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 5, 4), darkMat);
      eye.position.set(side * 0.055, 1.69, 0.137);
      root.add(eye);

      const ear = mesh(new THREE.SphereGeometry(0.036, 8, 6), skinMat);
      ear.position.set(side * 0.151, 1.66, 0);
      ear.scale.set(0.45, 1, 0.72);
      root.add(ear);

      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.012, 0.018), darkMat);
      brow.position.set(side * 0.057, 1.724, 0.146);
      brow.rotation.z = side * 0.08;
      root.add(brow);
    }

    const nose = mesh(new THREE.SphereGeometry(0.034, 8, 6), skinMat);
    nose.position.set(0, 1.651, 0.154);
    nose.scale.set(0.72, 0.95, 1.35);
    root.add(nose);

    const belt = mesh(new THREE.CylinderGeometry(0.252, 0.258, 0.075, 12), darkMat);
    belt.position.y = 1.04;
    root.add(belt);
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.05, 0.032), MAT.brass);
    buckle.position.set(0, 1.04, 0.25);
    root.add(buckle);

    if (!opts.targetStyle) {
      for (let i = 0; i < 3; i++) {
        const button = new THREE.Mesh(new THREE.SphereGeometry(0.021, 6, 5), MAT.brass);
        button.position.set(0.055, 1.41 - i * 0.12, 0.198);
        root.add(button);
      }
    }

    const scarf = mesh(new THREE.TorusGeometry(0.157, 0.05, 7, 16), scarfMat);
    scarf.position.y = 1.51;
    scarf.rotation.x = Math.PI / 2;
    root.add(scarf);

    const scarfTail = mesh(new THREE.BoxGeometry(0.11, 0.38, 0.06), scarfMat);
    scarfTail.position.set(0.11, 1.33, 0.16);
    scarfTail.rotation.z = 0.18;
    root.add(scarfTail);

    this.parts = {};

    for (const side of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(side * 0.31, 1.43, 0);
      const shoulder = mesh(new THREE.SphereGeometry(0.102, 12, 9), coatMat);
      shoulder.position.y = -0.015;
      shoulder.scale.set(1, 0.82, 0.92);
      arm.add(shoulder);
      const armMesh = mesh(new THREE.CapsuleGeometry(0.072, 0.42, 4, 8), coatMat);
      armMesh.position.y = -0.24;
      arm.add(armMesh);
      const cuff = mesh(new THREE.CylinderGeometry(0.083, 0.076, 0.065, 9), darkMat);
      cuff.position.y = -0.445;
      arm.add(cuff);
      const hand = mesh(new THREE.SphereGeometry(0.075, 8, 6), darkMat);
      hand.position.y = -0.5;
      arm.add(hand);
      root.add(arm);
      this.parts[side < 0 ? 'armL' : 'armR'] = arm;

      const leg = new THREE.Group();
      leg.position.set(side * 0.115, 0.9, 0);
      const legMesh = mesh(new THREE.CapsuleGeometry(0.095, 0.56, 4, 8), hatMat);
      legMesh.position.y = -0.32;
      leg.add(legMesh);
      const boot = mesh(new THREE.BoxGeometry(0.16, 0.13, 0.28), darkMat);
      boot.position.set(0, -0.66, 0.05);
      leg.add(boot);
      root.add(leg);
      this.parts[side < 0 ? 'legL' : 'legR'] = leg;
    }

    if (opts.targetStyle) {
      this.isTarget = true;
      const brim = mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.035, 18), hatMat);
      brim.position.y = 1.81;
      root.add(brim);
      const crown = mesh(new THREE.CylinderGeometry(0.165, 0.18, 0.36, 16), hatMat);
      crown.position.y = 2.0;
      root.add(crown);
      const band = mesh(new THREE.CylinderGeometry(0.182, 0.186, 0.07, 16), scarfMat);
      band.position.y = 1.85;
      root.add(band);
      for (let i = 0; i < 3; i++) {
        const button = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), MAT.gold);
        button.position.set(0, 1.36 - i * 0.12, 0.19);
        root.add(button);
      }
    } else {
      const hat = mesh(
        new THREE.SphereGeometry(0.166, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.56),
        hatMat
      );
      hat.position.y = 1.64;
      root.add(hat);
      const brim = mesh(new THREE.TorusGeometry(0.158, 0.033, 6, 16), hatMat);
      brim.position.y = 1.6;
      brim.rotation.x = Math.PI / 2;
      root.add(brim);
    }

    this.coatMat = coatMat;
    this.hatMat = hatMat;
  }

  setPosition(x, z) {
    this.pos.set(x, 0, z);
    this.root.position.x = x;
    this.root.position.z = z;
  }

  syncVisual(bob = 0) {
    this.root.position.x = this.pos.x;
    this.root.position.z = this.pos.z;
    this.root.position.y = bob;
    this.root.rotation.y = this.heading;
  }

  canSeePoint(x, z, colliders, range = 24, minDot = 0.15) {
    const dx = x - this.pos.x;
    const dz = z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist > range) return false;

    if (dist > 2.1) {
      const dot = (dx * Math.sin(this.heading) + dz * Math.cos(this.heading)) / dist;
      if (dot < minDot) return false;
    }

    return hasLineOfSight(this.pos.x, this.pos.z, x, z, colliders);
  }

  walk(dt, speed) {
    this.walkPhase += dt * Math.max(0.9, speed) * 1.7;
    const intensity = Math.min(1.2, speed / 2.4);
    const swing = Math.sin(this.walkPhase) * 0.52 * intensity;
    if (this.parts.legL) this.parts.legL.rotation.x = swing;
    if (this.parts.legR) this.parts.legR.rotation.x = -swing;
    if (this.parts.armL) this.parts.armL.rotation.x = -swing * 0.75;
    if (this.parts.armR) this.parts.armR.rotation.x = swing * 0.55;
    this.syncVisual(Math.abs(Math.sin(this.walkPhase)) * 0.035 * intensity);
  }

  idle(dt) {
    const damp = 1 - Math.exp(-dt * 9);
    if (this.parts.legL) this.parts.legL.rotation.x += (0 - this.parts.legL.rotation.x) * damp;
    if (this.parts.legR) this.parts.legR.rotation.x += (0 - this.parts.legR.rotation.x) * damp;
    if (this.parts.armL) this.parts.armL.rotation.x += (0 - this.parts.armL.rotation.x) * damp;
    if (this.parts.armR) this.parts.armR.rotation.x += (0 - this.parts.armR.rotation.x) * damp;
    this.syncVisual(0);
  }

  turnTowards(targetHeading, dt, rate = 7) {
    this.heading = angleLerp(this.heading, targetHeading, 1 - Math.exp(-dt * rate));
    this.root.rotation.y = this.heading;
  }

  stepToward(tx, tz, speed, dt, colliders, stopDist = 0.2) {
    const dx = tx - this.pos.x;
    const dz = tz - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.001) return 0;

    this.turnTowards(Math.atan2(dx, dz), dt);

    if (dist > stopDist) {
      const step = Math.min(speed * dt, dist - stopDist);
      this.pos.x += (dx / dist) * step;
      this.pos.z += (dz / dist) * step;
      resolveCircle(this.pos, 0.33, colliders);
      this.walk(dt, speed);
    } else {
      this.idle(dt);
    }

    return dist;
  }

  die() {
    if (!this.alive) return;
    this.alive = false;
    this.root.position.set(this.pos.x, 0.16, this.pos.z);
    this.root.rotation.set(0.05, this.heading, Math.random() > 0.5 ? 1.45 : -1.45);
    if (this.beam) this.beam.visible = false;
  }
}

/* ------------------------------------------------------------------ */
/* Guard                                                              */
/* ------------------------------------------------------------------ */

const beamGeo = new THREE.ConeGeometry(1.25, 9, 14, 1, true);
const beamMat = new THREE.MeshBasicMaterial({
  color: 0xffc78a,
  transparent: true,
  opacity: 0.055,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  side: THREE.DoubleSide,
});

export class Guard extends Humanoid {
  constructor(scene, cfg) {
    super(scene, {
      x: cfg.x,
      z: cfg.z,
      coat: cfg.coat ?? 0x1b2a22,
      hat: cfg.hat ?? 0x101216,
      scarf: cfg.scarf ?? 0x5c191d,
    });

    this.waypoints = cfg.path && cfg.path.length ? cfg.path : [{ x: cfg.x, z: cfg.z }];
    this.waypointIndex = 0;
    this.speed = cfg.speed ?? 1.5;
    this.state = 'patrol';
    this.awareness = 0;
    this.searchTimer = 0;
    this.fireTimer = 1.2 + Math.random() * 1.4;
    this.investigatePos = new THREE.Vector3(cfg.x, 0, cfg.z);
    this.investigateTimer = 0;
    this.lastSeen = new THREE.Vector3(cfg.x, 0, cfg.z);
    this.investigatedAlarm = false;
    this.baseHeading = this.heading;
    this.scan = Math.random() * 6;
    this.isGuard = true;
    this.escort = Boolean(cfg.escort);
    this.escortSide = Math.random() < 0.5 ? -1 : 1;

    const torch = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.045, 0.24, 8), MAT.iron);
    torch.rotation.x = Math.PI / 2;
    torch.position.set(0.02, -0.5, 0.12);
    this.parts.armR.add(torch);

    const lens = new THREE.Mesh(
      new THREE.CircleGeometry(0.045, 12),
      new THREE.MeshBasicMaterial({ color: 0xffe2ae, toneMapped: false })
    );
    lens.position.set(0.02, -0.5, 0.25);
    this.parts.armR.add(lens);

    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.rotation.x = -Math.PI / 2;
    beam.position.set(0, 1.35, 4.5);
    beam.renderOrder = 2;
    this.root.add(beam);
    this.beam = beam;

    const radio = new THREE.Group();
    radio.position.set(0.19, 1.31, 0.17);
    radio.rotation.z = -0.08;
    const radioCase = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.17, 0.055), MAT.iron);
    radioCase.castShadow = true;
    radio.add(radioCase);

    const radioFace = new THREE.Mesh(
      new THREE.BoxGeometry(0.075, 0.062, 0.012),
      new THREE.MeshStandardMaterial({ color: 0x0a0c0f, roughness: 0.38, metalness: 0.2 })
    );
    radioFace.position.set(0, 0.028, 0.034);
    radio.add(radioFace);

    const speaker = new THREE.Mesh(
      new THREE.CircleGeometry(0.022, 10),
      new THREE.MeshStandardMaterial({ color: 0x5e5b50, roughness: 0.9 })
    );
    speaker.position.set(-0.018, -0.025, 0.042);
    radio.add(speaker);

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.01, 0.32, 5), MAT.metal);
    antenna.position.set(0.052, 0.2, -0.012);
    antenna.rotation.z = -0.12;
    radio.add(antenna);

    const radioLed = new THREE.Mesh(
      new THREE.SphereGeometry(0.015, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0xff5c3d, toneMapped: false })
    );
    radioLed.position.set(0.036, 0.062, 0.041);
    radioLed.visible = false;
    radio.add(radioLed);
    this.root.add(radio);
    this.radioLed = radioLed;
    this.radioTimer = 0;

    const handset = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.035, 0.1), MAT.iron);
    handset.position.set(0, -0.5, 0.035);
    this.parts.armL.add(handset);
  }

  startRadio(duration = 1.15) {
    this.radioTimer = Math.max(this.radioTimer, duration);
    this.state = 'radio';
    this.awareness = 1;
  }

  canSee(player, colliders) {
    const dx = player.pos.x - this.pos.x;
    const dz = player.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.001) return true;

    const range = player.crouching ? 11 : player.sprinting ? 19 : 16;
    if (dist > range) return false;

    if (dist > 2.4) {
      const fx = Math.sin(this.heading);
      const fz = Math.cos(this.heading);
      const dot = (dx * fx + dz * fz) / dist;
      if (dot < 0.6) return false;
    }

    return hasLineOfSight(this.pos.x, this.pos.z, player.pos.x, player.pos.z, colliders);
  }

  raiseAlarm(game) {
    if (!this.investigatedAlarm) {
      this.investigatedAlarm = true;
      game.radioAlarm(this, 'INTRUDER SPOTTED');
    }
  }

  update(dt, game) {
    if (!this.alive) return;

    if (this.radioLed) {
      this.radioLed.visible = this.radioTimer > 0 && Math.sin(game.time * 24) > -0.25;
    }

    if (this.radioTimer > 0) {
      this.radioTimer -= dt;
      this.turnTowards(
        Math.atan2(game.player.pos.x - this.pos.x, game.player.pos.z - this.pos.z),
        dt,
        3
      );
      this.idle(dt);
      this.parts.armL.rotation.x = -1.88 + Math.sin(game.time * 18) * 0.035;
      this.parts.armL.rotation.z = -0.22;
      this.syncVisual(0);

      if (this.radioTimer <= 0) {
        this.parts.armL.rotation.z = 0;
        this.parts.armL.rotation.x = 0;
        this.state = 'chase';
        this.searchTimer = 6;
        this.awareness = 1;
        this.lastSeen.set(game.player.pos.x, 0, game.player.pos.z);
        if (this.radioLed) this.radioLed.visible = false;
      }
      return;
    }

    const player = game.player;
    const colliders = game.colliders;
    const dx = player.pos.x - this.pos.x;
    const dz = player.pos.z - this.pos.z;
    const distToPlayer = Math.hypot(dx, dz);
    const sees = this.canSee(player, colliders);

    if (sees) {
      const range = player.crouching ? 11 : 16;
      const prox = 1 - Math.min(1, distToPlayer / range);
      const movement = player.moving ? 1.25 : 0.75;
      this.awareness = Math.min(
        1,
        this.awareness + dt * (0.85 + prox * 1.7) * movement
      );
      this.lastSeen.set(player.pos.x, 0, player.pos.z);
    } else if (this.state !== 'chase') {
      this.awareness = Math.max(0, this.awareness - dt * 0.3);
    }

    if (this.state !== 'chase') {
      if (this.awareness >= 1) {
        this.state = 'chase';
        this.searchTimer = 5;
        this.heading = Math.atan2(dx, dz);
        this.raiseAlarm(game);
      } else if (this.awareness > 0.25 && sees) {
        this.turnTowards(Math.atan2(dx, dz), dt, 4);
        this.idle(dt);
        return;
      }
    }

    if (game.alarm && this.state === 'patrol' && !this.investigatedAlarm) {
      this.investigatedAlarm = true;
      this.state = 'investigate';
      this.investigatePos.copy(game.alarmPos);
      this.investigateTimer = 5;
    }

    switch (this.state) {
      case 'chase':
        this.updateChase(dt, game, sees, distToPlayer);
        break;
      case 'investigate':
        this.updateInvestigate(dt, game);
        break;
      default:
        if (this.escort) this.updateEscort(dt, game, sees);
        else this.updatePatrol(dt, game, sees);
        break;
    }
  }

  updateEscort(dt, game, sees) {
    if (sees && this.awareness > 0.05) {
      const player = game.player;
      this.turnTowards(
        Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z),
        dt,
        3.5
      );
      this.idle(dt);
      return;
    }

    const target = game.target;
    if (!target || !target.alive) {
      this.idle(dt);
      return;
    }

    const backX = Math.sin(target.heading + Math.PI);
    const backZ = Math.cos(target.heading + Math.PI);
    const rightX = Math.cos(target.heading);
    const rightZ = -Math.sin(target.heading);
    const destX = target.pos.x + backX * 2.4 + rightX * this.escortSide * 1.05;
    const destZ = target.pos.z + backZ * 2.4 + rightZ * this.escortSide * 1.05;
    const dist = Math.hypot(destX - this.pos.x, destZ - this.pos.z);

    if (dist > 0.9) {
      this.stepToward(destX, destZ, dist > 7 ? 3.4 : 1.8, dt, game.colliders, 0.6);
    } else {
      this.idle(dt);
    }

    this.scan += dt;
    const watchHeading = target.heading + Math.PI + Math.sin(this.scan * 1.15) * 0.55;
    this.turnTowards(watchHeading, dt, 6);
  }

  updatePatrol(dt, game, sees) {
    if (sees && this.awareness > 0.05) {
      const player = game.player;
      this.turnTowards(
        Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z),
        dt,
        3.5
      );
      this.idle(dt);
      return;
    }

    const wp = this.waypoints[this.waypointIndex % this.waypoints.length];
    if (!wp) return;

    if (this.wait > 0) {
      this.wait -= dt;
      this.scan += dt;
      this.heading = this.baseHeading + Math.sin(this.scan * 1.2) * 0.55;
      this.root.rotation.y = this.heading;
      this.idle(dt);
      return;
    }

    const dist = this.stepToward(wp.x, wp.z, this.speed, dt, game.colliders, 0.3);
    if (dist < 0.9) {
      this.waypointIndex = (this.waypointIndex + 1) % this.waypoints.length;
      this.wait = 1.2 + Math.random() * 2.4;
      this.baseHeading = this.heading;
      this.scan = 0;
    }
  }

  updateInvestigate(dt, game) {
    const dist = this.stepToward(
      this.investigatePos.x,
      this.investigatePos.z,
      2.9,
      dt,
      game.colliders,
      1.1
    );

    if (dist < 2.3) {
      this.investigateTimer -= dt;
      this.scan += dt;
      this.heading = this.baseHeading + Math.sin(this.scan * 1.4) * 0.8;
      this.root.rotation.y = this.heading;
      this.idle(dt);
      if (this.investigateTimer <= 0) {
        this.state = 'patrol';
        this.awareness = 0;
        this.waypointIndex = 0;
        this.wait = 0;
      }
    } else {
      this.investigateTimer -= dt;
      if (this.investigateTimer <= -5) {
        this.state = 'patrol';
        this.waypointIndex = 0;
      }
    }
  }

  updateChase(dt, game, sees, distToPlayer) {
    const player = game.player;

    if (sees) {
      this.searchTimer = 5;
      this.lastSeen.set(player.pos.x, 0, player.pos.z);
    } else {
      this.searchTimer -= dt;
    }

    const targetX = sees ? player.pos.x : this.lastSeen.x;
    const targetZ = sees ? player.pos.z : this.lastSeen.z;
    const dist = Math.hypot(targetX - this.pos.x, targetZ - this.pos.z);

    this.turnTowards(Math.atan2(targetX - this.pos.x, targetZ - this.pos.z), dt, 8);

    if (dist > 5.2) {
      this.stepToward(targetX, targetZ, 4.15, dt, game.colliders, 4.6);
    } else {
      this.idle(dt);
    }

    if (sees && distToPlayer < 17) {
      this.fireTimer -= dt;
      if (this.fireTimer <= 0) {
        this.fireTimer = 1.1 + Math.random() * 0.65;
        game.guardShoot(this, distToPlayer);
      }
    }

    if (!sees && this.searchTimer <= 0) {
      this.state = 'investigate';
      this.investigatePos.copy(this.lastSeen);
      this.investigateTimer = 4;
      this.awareness = Math.max(0.35, this.awareness * 0.6);
    }
  }
}

/* ------------------------------------------------------------------ */
/* Target                                                             */
/* ------------------------------------------------------------------ */

export class Target extends Humanoid {
  constructor(scene, cfg) {
    super(scene, {
      x: cfg.x,
      z: cfg.z,
      coat: 0xd8cdb8,
      hat: 0x17181d,
      scarf: 0x8e2028,
      targetStyle: true,
    });

    this.waypoints = cfg.path && cfg.path.length ? cfg.path : [{ x: cfg.x, z: cfg.z }];
    this.waypointIndex = 0;
    this.speed = 1.0;
    this.state = 'patrol';
    this.escape = cfg.escape;
    this.isTarget = true;
    this.fleeAnnounced = false;
  }

  startFlee(game, message) {
    if (this.state === 'flee' || !this.alive) return;
    this.state = 'flee';
    this.raiseAlarm(game, message);
    if (!this.fleeAnnounced) {
      this.fleeAnnounced = true;
      game.audio?.scream?.();
    }
  }

  raiseAlarm(game, message) {
    game.raiseAlarm(this, { message });
  }

  chooseDirection(colliders) {
    const dx = this.escape.x - this.pos.x;
    const dz = this.escape.z - this.pos.z;
    const base = Math.atan2(dx, dz);
    const offsets = [0, 0.45, -0.45, 0.95, -0.95, 1.5, -1.5, 2.2, -2.2];
    for (const off of offsets) {
      const angle = base + off;
      const nx = Math.sin(angle);
      const nz = Math.cos(angle);
      if (!blockedAhead(this.pos.x, this.pos.z, nx, nz, 2.2, colliders)) {
        return { x: nx, z: nz };
      }
    }
    return { x: Math.sin(base), z: Math.cos(base) };
  }

  update(dt, game) {
    if (!this.alive) return;

    if (game.alarm && this.state !== 'flee') {
      this.startFlee(game);
    }

    if (this.state === 'flee') {
      const dx = this.escape.x - this.pos.x;
      const dz = this.escape.z - this.pos.z;
      const escapeDist = Math.hypot(dx, dz);

      if (escapeDist < 2.6) {
        game.fail('The target escaped into the night.');
        return;
      }

      const dir = this.chooseDirection(game.colliders);
      const speed = 4.0;
      const step = Math.min(speed * dt, Math.max(0, escapeDist - 1.5));
      this.pos.x += dir.x * step;
      this.pos.z += dir.z * step;
      resolveCircle(this.pos, 0.32, game.colliders);
      this.heading = Math.atan2(dir.x, dir.z);
      this.root.rotation.y = this.heading;
      this.walk(dt, speed);
      return;
    }

    const pdx = game.player.pos.x - this.pos.x;
    const pdz = game.player.pos.z - this.pos.z;
    const pdist = Math.hypot(pdx, pdz);

    if (
      pdist < 10.5 &&
      hasLineOfSight(this.pos.x, this.pos.z, game.player.pos.x, game.player.pos.z, game.colliders)
    ) {
      const fx = Math.sin(this.heading);
      const fz = Math.cos(this.heading);
      const dot = pdist > 0.001 ? (pdx * fx + pdz * fz) / pdist : 1;
      const hearsSprint = game.player.sprinting && pdist < 8.5;
      if (pdist < 1.9 || dot > 0.35 || hearsSprint) {
        this.startFlee(game);
        return;
      }
    }

    const wp = this.waypoints[this.waypointIndex % this.waypoints.length];
    if (!wp) return;

    if (this.wait > 0) {
      this.wait -= dt;
      this.scan += dt;
      this.heading = this.baseHeading + Math.sin(this.scan * 0.8) * 0.4;
      this.root.rotation.y = this.heading;
      this.idle(dt);
      return;
    }

    const dist = this.stepToward(wp.x, wp.z, this.speed, dt, game.colliders, 0.3);
    if (dist < 0.8) {
      this.waypointIndex = (this.waypointIndex + 1) % this.waypoints.length;
      this.wait = 2.4 + Math.random() * 3.2;
      this.baseHeading = this.heading;
      this.scan = 0;
    }
  }
}

/* ------------------------------------------------------------------ */
/* Civilian                                                           */
/* ------------------------------------------------------------------ */

const DEFAULT_CIVILIAN_LINES = [
  "The boss keeps five locks on this district. You didn't hear it from me.",
  'Cars do not stop for anyone after midnight. Look both ways.',
  'Half the block belongs to him. The other half is too afraid to say so.',
  'The relay tower is west. The ledgers are scattered all over the city.',
  "You look like trouble. I'm not seeing you.",
  'There are cameras on every corner. Smile for the city.',
  'I heard a shot? No. Just the snow and the engines.',
  'The plaza is watched. He never stands still for long.',
];

export class Civilian extends Humanoid {
  constructor(scene, cfg = {}) {
    super(scene, {
      x: cfg.x,
      z: cfg.z,
      coat: cfg.coat ?? 0x2b3340,
      hat: cfg.hat ?? 0x161b22,
      scarf: cfg.scarf ?? 0x6a3238,
      heading: cfg.heading,
    });

    this.waypoints = cfg.path && cfg.path.length ? cfg.path : [{ x: cfg.x, z: cfg.z }];
    this.waypointIndex = 0;
    this.speed = cfg.speed ?? 0.72 + Math.random() * 0.32;
    this.scan = Math.random() * 8;
    this.baseHeading = this.heading;
    this.talkTimer = 0;
    this.talkCooldown = 0;
    this.panicTimer = 0;
    this.name = cfg.name ?? 'BYSTANDER';
    this.lines = cfg.lines?.length ? cfg.lines : DEFAULT_CIVILIAN_LINES;
    this.lineIndex = Math.floor(Math.random() * this.lines.length);
    this.isCivilian = true;

    const bag = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.24, 0.11),
      new THREE.MeshStandardMaterial({
        color: cfg.bag ?? 0x4d2330,
        roughness: 0.72,
        metalness: 0.05,
      })
    );
    bag.position.set(0, -0.53, 0.05);
    bag.castShadow = true;
    this.parts.armR.add(bag);
  }

  talk(game) {
    if (this.talkTimer > 0 || this.talkCooldown > 0) return false;
    this.talkTimer = 4.2;
    this.talkCooldown = 4.2;
    const line = this.lines[this.lineIndex++ % this.lines.length];
    game.showDialogue?.(this, line);
    return true;
  }

  update(dt, game) {
    if (!this.alive) return;
    this.talkCooldown = Math.max(0, this.talkCooldown - dt);

    if (this.talkTimer > 0) {
      this.talkTimer -= dt;
      const dx = game.player.pos.x - this.pos.x;
      const dz = game.player.pos.z - this.pos.z;
      this.turnTowards(Math.atan2(dx, dz), dt, 5);
      this.idle(dt);
      this.parts.armL.rotation.x = -1.35 + Math.sin(game.time * 4.5) * 0.16;
      this.parts.armL.rotation.z = -0.18;
      this.syncVisual(0);
      if (this.talkTimer <= 0) {
        this.parts.armL.rotation.x = 0;
        this.parts.armL.rotation.z = 0;
      }
      return;
    }

    if (game.alarm) {
      const source = game.alarmPos;
      const dx = this.pos.x - source.x;
      const dz = this.pos.z - source.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 46 && dist > 0.01) {
        this.panicTimer = Math.max(this.panicTimer, 1.2);
      }
    }

    if (this.panicTimer > 0) {
      this.panicTimer -= dt;
      const dx = this.pos.x - game.player.pos.x;
      const dz = this.pos.z - game.player.pos.z;
      const dist = Math.hypot(dx, dz) || 1;
      const step = 3.1 * dt;
      this.pos.x += (dx / dist) * step;
      this.pos.z += (dz / dist) * step;
      resolveCircle(this.pos, 0.3, game.colliders);
      this.heading = Math.atan2(dx, dz);
      this.walk(dt, 3.1);
      return;
    }

    const wp = this.waypoints[this.waypointIndex % this.waypoints.length];
    if (!wp) return;

    if (this.wait > 0) {
      this.wait -= dt;
      this.scan += dt;
      this.heading = this.baseHeading + Math.sin(this.scan * 0.9) * 0.45;
      this.root.rotation.y = this.heading;
      this.idle(dt);
      return;
    }

    const dist = this.stepToward(wp.x, wp.z, this.speed, dt, game.colliders, 0.35);
    if (dist < 0.9) {
      this.waypointIndex = (this.waypointIndex + 1) % this.waypoints.length;
      this.wait = 1.6 + Math.random() * 3.8;
      this.baseHeading = this.heading;
      this.scan = 0;
    }
  }
}

/* ------------------------------------------------------------------ */
/* Knife viewmodel                                                    */
/* ------------------------------------------------------------------ */

export function createKnife() {
  const group = new THREE.Group();

  const gloveMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1d, roughness: 0.72 });
  const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x202a24, roughness: 0.9 });

  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.095, 0.42, 8), sleeveMat);
  sleeve.rotation.x = Math.PI / 2;
  sleeve.position.set(0.02, -0.02, 0.22);
  group.add(sleeve);

  const glove = new THREE.Mesh(new THREE.SphereGeometry(0.085, 10, 8), gloveMat);
  glove.scale.set(1, 0.85, 1.35);
  glove.position.set(0.015, 0.0, 0.06);
  group.add(glove);

  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.22, 8), MAT.woodDark);
  handle.rotation.x = Math.PI / 2;
  handle.position.set(0, 0, -0.03);
  group.add(handle);

  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 6), MAT.brass);
  pommel.position.set(0, 0, 0.09);
  group.add(pommel);

  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.035, 0.04), MAT.brass);
  guard.position.set(0, 0, -0.15);
  group.add(guard);

  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(-0.034, 0);
  bladeShape.lineTo(0.036, 0.015);
  bladeShape.lineTo(0.031, 0.38);
  bladeShape.lineTo(0.0, 0.52);
  bladeShape.lineTo(-0.024, 0.39);
  bladeShape.closePath();

  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, {
    depth: 0.014,
    bevelEnabled: true,
    bevelSize: 0.003,
    bevelThickness: 0.003,
    bevelSegments: 1,
    steps: 1,
  });
  const blade = new THREE.Mesh(bladeGeo, MAT.metal);
  blade.rotation.x = -Math.PI / 2;
  blade.rotation.z = 0.02;
  blade.position.set(0, 0.004, -0.17);
  blade.castShadow = false;
  group.add(blade);

  const edge = new THREE.Mesh(
    new THREE.BoxGeometry(0.006, 0.006, 0.46),
    new THREE.MeshBasicMaterial({ color: 0xdfe9f5, toneMapped: false })
  );
  edge.position.set(-0.028, 0.002, -0.39);
  edge.rotation.y = 0.0;
  group.add(edge);

  group.traverse((child) => {
    child.frustumCulled = false;
    if (child.material) child.material.envMapIntensity = 1.2;
  });

  return group;
}
