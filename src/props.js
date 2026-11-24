import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { T, repeatTexture, makeFacade, makeTextTexture, makeStripeTexture } from './procedural.js';

const std = (opts) => new THREE.MeshStandardMaterial(opts);
const basics = (opts) => new THREE.MeshBasicMaterial(opts);

const shadow = (mesh, cast = true) => {
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
};

/* ------------------------------------------------------------------ */
/* Materials                                                           */
/* ------------------------------------------------------------------ */

const snowMat = (repeat = 3) =>
  std({
    map: repeatTexture(T.snow, repeat, repeat),
    bumpMap: repeatTexture(T.snowBump, repeat, repeat),
    bumpScale: 0.25,
    roughness: 0.95,
    metalness: 0,
    color: 0xf4f8ff,
  });

export const MAT = {
  snow: snowMat(2.5),
  groundSnow: std({
    map: repeatTexture(T.snow, 34, 34),
    bumpMap: repeatTexture(T.snowBump, 34, 34),
    bumpScale: 0.5,
    roughness: 0.92,
    color: 0xeaf2ff,
  }),
  pine: std({
    map: repeatTexture(T.pine, 4, 2.6),
    bumpMap: repeatTexture(T.pineBump, 4, 2.6),
    bumpScale: 0.9,
    roughness: 0.84,
    metalness: 0.02,
    envMapIntensity: 0.35,
    color: 0xd4e1ce,
  }),
  pineDark: std({
    map: repeatTexture(T.pine, 3, 2),
    bumpMap: repeatTexture(T.pineBump, 3, 2),
    bumpScale: 0.85,
    roughness: 0.89,
    color: 0x3f5945,
  }),
  bark: std({
    map: repeatTexture(T.bark, 1.3, 2.2),
    bumpMap: repeatTexture(T.barkBump, 1.3, 2.2),
    bumpScale: 0.65,
    roughness: 0.94,
    color: 0xc5b5a4,
  }),
  wood: std({
    map: repeatTexture(T.wood, 2, 2),
    bumpMap: repeatTexture(T.woodBump, 2, 2),
    bumpScale: 0.25,
    roughness: 0.82,
  }),
  woodDark: std({
    map: repeatTexture(T.wood, 1, 1),
    bumpMap: repeatTexture(T.woodBump, 1, 1),
    bumpScale: 0.3,
    roughness: 0.72,
    color: 0x7a5b48,
  }),
  brick: std({
    map: repeatTexture(T.brick, 3, 3),
    bumpMap: repeatTexture(T.brickBump, 3, 3),
    bumpScale: 0.3,
    roughness: 0.9,
  }),
  stoneWall: std({
    map: repeatTexture(T.stone, 3, 3),
    bumpMap: repeatTexture(T.stoneBump, 3, 3),
    bumpScale: 0.4,
    roughness: 0.9,
    color: 0xb4bcc8,
  }),
  pathStone: std({
    map: repeatTexture(T.stone, 8, 8),
    bumpMap: repeatTexture(T.stoneBump, 8, 8),
    bumpScale: 0.28,
    roughness: 0.78,
    color: 0xb1a99e,
  }),
  sidewalk: std({
    map: repeatTexture(T.stone, 3, 22),
    bumpMap: repeatTexture(T.stoneBump, 3, 22),
    bumpScale: 0.22,
    roughness: 0.86,
    color: 0xb9c0cc,
  }),
  plaster: std({
    map: repeatTexture(T.plaster, 2, 2),
    bumpMap: repeatTexture(T.plasterBump, 2, 2),
    bumpScale: 0.18,
    roughness: 0.88,
    color: 0xe7dcc6,
  }),
  plasterWarm: std({
    map: repeatTexture(T.plaster, 2, 2),
    bumpMap: repeatTexture(T.plasterBump, 2, 2),
    bumpScale: 0.18,
    roughness: 0.9,
    color: 0xd8c1a3,
  }),
  roof: std({
    map: repeatTexture(T.roof, 2.5, 2),
    bumpMap: repeatTexture(T.roofBump, 2.5, 2),
    bumpScale: 0.3,
    roughness: 0.8,
    color: 0xc4b6b2,
  }),
  roofFlat: std({ color: 0x232936, roughness: 0.85 }),
  cityStone: std({
    map: repeatTexture(T.stone, 2.6, 2.6),
    bumpMap: repeatTexture(T.stoneBump, 2.6, 2.6),
    bumpScale: 0.34,
    roughness: 0.88,
    color: 0x8a94a4,
  }),
  cityStoneDark: std({
    map: repeatTexture(T.stone, 2, 2),
    bumpMap: repeatTexture(T.stoneBump, 2, 2),
    bumpScale: 0.3,
    roughness: 0.9,
    color: 0x59626f,
  }),
  citySteel: std({
    map: repeatTexture(T.metal, 2, 2),
    bumpMap: repeatTexture(T.metalBump, 2, 2),
    bumpScale: 0.18,
    color: 0x8c96a4,
    metalness: 0.7,
    roughness: 0.44,
  }),
  roofTrim: basics({ color: 0xffd7a2, toneMapped: false }),
  icePatch: std({
    color: 0x93b5cc,
    roughness: 0.14,
    metalness: 0.45,
    transparent: true,
    opacity: 0.5,
    envMapIntensity: 1.6,
  }),
  binGreen: std({ color: 0x1e3a2c, metalness: 0.45, roughness: 0.6 }),
  ice: std({
    map: T.ice,
    roughness: 0.06,
    metalness: 0.25,
    color: 0xbfe0ff,
    envMapIntensity: 1.5,
  }),
  metal: std({
    map: repeatTexture(T.metal, 2, 2),
    bumpMap: repeatTexture(T.metalBump, 2, 2),
    bumpScale: 0.2,
    metalness: 0.75,
    roughness: 0.42,
    color: 0xaeb9c9,
  }),
  iron: std({ color: 0x1c222b, metalness: 0.85, roughness: 0.52 }),
  brass: std({ color: 0xb78f53, metalness: 0.9, roughness: 0.3 }),
  gold: std({ color: 0xe2b764, metalness: 0.95, roughness: 0.24 }),
  roofSnow: snowMat(4),
  asphalt: std({
    map: repeatTexture(T.asphalt, 26, 26),
    bumpMap: repeatTexture(T.asphaltBump, 26, 26),
    bumpScale: 0.4,
    roughness: 0.86,
    color: 0xc9d2df,
  }),
  roadLine: std({ color: 0xd8dde3, roughness: 0.68, metalness: 0.05 }),
  roadLineWarm: std({ color: 0xc9ad64, roughness: 0.7, metalness: 0.04 }),
  hydrantRed: std({ map: repeatTexture(T.metal, 1, 1), color: 0x9c2b24, roughness: 0.56, metalness: 0.35 }),
  grassSnow: std({
    map: repeatTexture(T.snow, 24, 24),
    bumpMap: repeatTexture(T.snowBump, 24, 24),
    bumpScale: 0.4,
    roughness: 0.94,
    color: 0xd9e6f2,
  }),
  windowFrame: std({ color: 0x2d2118, roughness: 0.8 }),
  glassWarm: basics({ map: T.window, toneMapped: false }),
  glassCool: basics({ color: 0xcfe3ff, toneMapped: false }),
  glassDark: std({ color: 0x0a1119, roughness: 0.12, metalness: 0.7 }),
  lampGlass: basics({ color: 0xffc98b, toneMapped: false }),
  lampGlassOff: std({
    color: 0x3b2b1f,
    emissive: 0x150c06,
    emissiveIntensity: 0.8,
    metalness: 0.18,
    roughness: 0.28,
  }),
  headlight: basics({ color: 0xfff1c8, toneMapped: false }),
  taillight: basics({ color: 0xff5040, toneMapped: false }),
  wreath: std({ color: 0x1f4a2b, roughness: 0.88, map: repeatTexture(T.pine, 2, 1) }),
  bow: std({ color: 0x9e2028, roughness: 0.62 }),
  fabricRed: std({ color: 0x7c1b21, roughness: 0.92 }),
  fabricGreen: std({ color: 0x1c3d2a, roughness: 0.92 }),
  fabricCream: std({ color: 0xd7cbb6, roughness: 0.95 }),
  coal: std({ color: 0x08080a, roughness: 0.95 }),
  carrot: std({ color: 0xd3762c, roughness: 0.78 }),
  candy: std({
    map: repeatTexture(makeStripeTexture('#f4efe4', '#b72f36', 7), 1, 3),
    roughness: 0.42,
    metalness: 0.02,
  }),
  stallRed: std({
    map: repeatTexture(makeStripeTexture('#e9dfcd', '#8f2429', 8), 1, 1),
    roughness: 0.85,
  }),
  stallGreen: std({
    map: repeatTexture(makeStripeTexture('#e9dfcd', '#22492f', 8), 1, 1),
    roughness: 0.85,
  }),
  statueStone: std({
    map: repeatTexture(T.stone, 2, 2),
    bumpMap: repeatTexture(T.stoneBump, 2, 2),
    bumpScale: 0.35,
    roughness: 0.88,
    color: 0x59616d,
  }),
  mansionStone: std({
    map: repeatTexture(T.stone, 5, 4),
    bumpMap: repeatTexture(T.stoneBump, 5, 4),
    bumpScale: 0.42,
    roughness: 0.9,
    color: 0x8f96a3,
  }),
  flame: basics({
    color: 0xff9c3a,
    transparent: true,
    opacity: 0.82,
    toneMapped: false,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }),
  flameCore: basics({
    color: 0xffe7a6,
    transparent: true,
    opacity: 0.9,
    toneMapped: false,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }),
  ember: basics({ color: 0xffb066, toneMapped: false }),
};

const giftMaterialCache = new Map();
function giftMaterial(hex) {
  if (!giftMaterialCache.has(hex)) {
    giftMaterialCache.set(hex, std({ color: hex, roughness: 0.48, metalness: 0.08 }));
  }
  return giftMaterialCache.get(hex);
}

const facadeCache = new Map();
function facadeMaterial(seed, rx, ry) {
  const key = `${seed}:${rx.toFixed(2)}:${ry.toFixed(2)}`;
  if (facadeCache.has(key)) return facadeCache.get(key);
  const src = makeFacade(seed);
  const map = src.map.clone();
  map.needsUpdate = true;
  map.repeat.set(rx, ry);
  const emissiveMap = src.emissive.clone();
  emissiveMap.needsUpdate = true;
  emissiveMap.repeat.set(rx, ry);
  const mat = std({
    map,
    emissiveMap,
    emissive: 0xffffff,
    emissiveIntensity: 1.5,
    roughness: 0.9,
    metalness: 0.04,
    color: 0xb8c3d5,
  });
  facadeCache.set(key, mat);
  return mat;
}

const glowSpriteMaterial = (color = 0xffffff, opacity = 0.55) =>
  new THREE.SpriteMaterial({
    map: T.glow,
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

const smokeSpriteMaterial = () =>
  new THREE.SpriteMaterial({
    map: T.smoke,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  });

const icicleGeo = new THREE.ConeGeometry(0.065, 0.4, 5);
const dummy = new THREE.Object3D();
const colorHelper = new THREE.Color();

const makeRand = (seed) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

function mergedMesh(parts, material, cast = true) {
  if (!parts.length) return null;
  const geo = mergeGeometries(parts, false);
  for (const part of parts) part.dispose();
  if (!geo) return null;
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

const firTierGeos = [0, 1, 2].map((seed) => {
  const geo = new THREE.ConeGeometry(1, 1, 24, 4, false);
  const position = geo.attributes.position;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    const angle = Math.atan2(z, x);
    const taper = 1 - (y + 0.5) * 0.24;
    const jag =
      1 +
      Math.sin(angle * 7 + seed * 1.7) * 0.1 +
      Math.sin(angle * 13 + seed * 2.3) * 0.06 +
      Math.sin(angle * 23 + seed * 4.1) * 0.022 -
      Math.cos((y + 0.5) * 5.4 + seed) * 0.045;
    position.setX(i, x * jag * taper);
    position.setZ(i, z * jag * taper);
    position.setY(i, y + Math.sin(angle * 9 + seed) * 0.02);
  }
  geo.computeVertexNormals();
  return geo;
});

const firSnowGeos = [0, 1, 2].map((seed) => {
  const geo = new THREE.ConeGeometry(1, 1, 24, 2, true);
  const position = geo.attributes.position;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const z = position.getZ(i);
    const y = position.getY(i);
    const angle = Math.atan2(z, x);
    const scallop =
      1 +
      Math.sin(angle * 11 + seed * 2.6) * 0.11 +
      Math.sin(angle * 19 + seed * 4.3) * 0.055 -
      Math.cos((y + 0.5) * 8 + seed) * 0.035;
    position.setX(i, x * scallop);
    position.setZ(i, z * scallop);
    position.setY(i, y - Math.max(0, 1 - scallop) * 0.08);
  }
  geo.computeVertexNormals();
  return geo;
});

const firTipGeo = new THREE.ConeGeometry(0.1, 0.82, 5);
firTipGeo.translate(0, 0.41, 0);
const firClumpGeo = new THREE.IcosahedronGeometry(0.16, 0);
const firRootGeo = new THREE.CylinderGeometry(0.22, 0.5, 0.52, 9);
const firBaseSnowGeo = new THREE.ConeGeometry(0.86, 0.24, 12);
const UP = new THREE.Vector3(0, 1, 0);
const tipDir = new THREE.Vector3();
const tipQuat = new THREE.Quaternion();

/* ------------------------------------------------------------------ */
/* World builder                                                       */
/* ------------------------------------------------------------------ */

export class WorldBuilder {
  constructor(scene) {
    this.scene = scene;
    this.colliders = [];
    this.animated = [];
    this.traffic = [];
    this.time = 0;
  }

  update(t, dt) {
    for (const fn of this.animated) fn(t, dt);
  }

  add(obj) {
    this.scene.add(obj);
    return obj;
  }

  solid(x, z, w, d, h = 3, rot = 0) {
    let ww = w;
    let dd = d;
    if (rot) {
      const c = Math.abs(Math.cos(rot));
      const s = Math.abs(Math.sin(rot));
      ww = w * c + d * s;
      dd = w * s + d * c;
    }
    this.colliders.push({
      minX: x - ww / 2,
      maxX: x + ww / 2,
      minZ: z - dd / 2,
      maxZ: z + dd / 2,
      height: h,
    });
  }

  mesh(geo, mat, x, y, z, ry = 0) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return this.add(mesh);
  }

  box(w, h, d, mat, x, y, z, ry = 0, cast = true) {
    const mesh = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat), cast);
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    return this.add(mesh);
  }

  cyl(rTop, rBottom, h, seg, mat, x, y, z) {
    const mesh = shadow(new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, seg), mat));
    mesh.position.set(x, y, z);
    return this.add(mesh);
  }

  ground(mat = MAT.groundSnow, size = 150) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = 0;
    mesh.receiveShadow = true;
    this.add(mesh);
    return mesh;
  }

  pathCircle(radius, x = 0, z = 0, mat = MAT.pathStone) {
    const mesh = new THREE.Mesh(new THREE.CircleGeometry(radius, 64), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.025, z);
    mesh.receiveShadow = true;
    this.add(mesh);
    return mesh;
  }

  pathRect(w, d, x, z, mat = MAT.pathStone) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.026, z);
    mesh.receiveShadow = true;
    this.add(mesh);
    return mesh;
  }

  /* ---------------------------- Houses ---------------------------- */

  house(opts = {}) {
    const {
      x = 0,
      z = 0,
      rot = 0,
      w = 6.4,
      d = 7.4,
      h = 4.4,
      wall = MAT.plaster,
      roofMat = MAT.roof,
      lit = false,
    } = opts;

    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.7, d + 0.3), MAT.stoneWall));
    base.position.y = 0.35;
    g.add(base);

    const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall));
    body.position.y = h / 2 + 0.1;
    g.add(body);

    const rise = Math.min(2.7, w * 0.29);
    const overhang = 0.6;
    const half = w / 2 + overhang;
    const slopeLen = Math.hypot(half, rise) + 0.3;
    const ang = Math.atan2(rise, half);

    const gableMat = wall.clone();
    gableMat.side = THREE.DoubleSide;
    const gableShape = new THREE.Shape();
    gableShape.moveTo(-w / 2, 0);
    gableShape.lineTo(w / 2, 0);
    gableShape.lineTo(0, rise);
    gableShape.closePath();
    const gableGeo = new THREE.ShapeGeometry(gableShape);

    for (const side of [-1, 1]) {
      const panel = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(slopeLen, 0.22, d + overhang * 1.7), roofMat)
      );
      panel.position.set(side * (half / 2), h + 0.1 + rise / 2, 0);
      panel.rotation.z = -side * ang;
      g.add(panel);

      const snow = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(slopeLen * 0.97, 0.1, d + overhang * 1.5), MAT.snow),
        false
      );
      snow.position.set(side * (half / 2), h + 0.24 + rise / 2, 0);
      snow.rotation.z = -side * ang;
      g.add(snow);
    }

    for (const zs of [-1, 1]) {
      const gable = new THREE.Mesh(gableGeo, gableMat);
      gable.position.set(0, h + 0.1, zs * (d / 2 - 0.02));
      if (zs < 0) gable.rotation.y = Math.PI;
      gable.castShadow = true;
      gable.receiveShadow = true;
      g.add(gable);
    }

    const windowY = h * 0.55 + 0.1;
    const windowAt = (wx, wy, wz, ry, wid = 1.06, hei = 1.3) => {
      const wg = new THREE.Group();
      wg.position.set(wx, wy, wz);
      wg.rotation.y = ry;
      const frame = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(wid + 0.22, hei + 0.22, 0.1), MAT.windowFrame),
        false
      );
      const pane = new THREE.Mesh(new THREE.BoxGeometry(wid, hei, 0.08), MAT.glassWarm);
      pane.position.z = 0.04;
      wg.add(frame, pane);
      g.add(wg);
    };

    windowAt(-w * 0.26, windowY, d / 2 + 0.05, 0);
    windowAt(w * 0.26, windowY, d / 2 + 0.05, 0);
    windowAt(-w / 2 - 0.05, windowY, 0, -Math.PI / 2);
    windowAt(w / 2 + 0.05, windowY, 0, Math.PI / 2);

    if (h > 4.8) {
      windowAt(-w * 0.26, h * 0.8, d / 2 + 0.05, 0, 0.8, 0.9);
      windowAt(w * 0.26, h * 0.8, d / 2 + 0.05, 0, 0.8, 0.9);
    }

    const door = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.24, 2.2, 0.16), MAT.woodDark));
    door.position.set(0, 1.2, d / 2 + 0.06);
    g.add(door);

    const frame = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.38, 0.12), MAT.windowFrame),
      false
    );
    frame.position.set(0, 1.25, d / 2 + 0.02);
    g.add(frame);

    const wreath = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.08, 8, 20), MAT.wreath);
    wreath.position.set(0, 1.66, d / 2 + 0.18);
    wreath.castShadow = true;
    g.add(wreath);

    const bowA = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.09, 0.05), MAT.bow));
    bowA.position.set(-0.11, 1.4, d / 2 + 0.2);
    bowA.rotation.z = 0.45;
    const bowB = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.09, 0.05), MAT.bow));
    bowB.position.set(0.11, 1.4, d / 2 + 0.2);
    bowB.rotation.z = -0.45;
    g.add(bowA, bowB);

    const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.36, 0.24), MAT.lampGlass);
    lantern.position.set(w * 0.32, 2.75, d / 2 + 0.28);
    g.add(lantern);

    if (lit) {
      const light = new THREE.PointLight(0xffb066, 18, 11, 2);
      light.position.set(w * 0.32, 2.65, d / 2 + 0.7);
      g.add(light);

      const glow = new THREE.Sprite(glowSpriteMaterial(0xffb777, 0.5));
      glow.scale.set(1.6, 1.6, 1);
      glow.position.copy(lantern.position);
      g.add(glow);
    }

    const chimney = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.82, 2.2, 0.82), MAT.stoneWall));
    chimney.position.set(-w * 0.26, h + rise * 0.72, -d * 0.2);
    g.add(chimney);

    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.13, 0.98), MAT.snow);
    cap.position.set(-w * 0.26, h + rise * 0.72 + 1.16, -d * 0.2);
    g.add(cap);

    for (let i = 0; i < 7; i++) {
      const icicle = new THREE.Mesh(icicleGeo, MAT.ice);
      icicle.position.set(-w * 0.4 + (i * w * 0.8) / 6, h + 0.02, d / 2 + overhang * 0.65);
      icicle.rotation.x = Math.PI;
      g.add(icicle);
    }

    this.solid(x, z, w + 0.5, d + 0.5, h + rise, rot);
    return g;
  }

  mansion(opts = {}) {
    const { x = 0, z = -26, rot = 0, w = 30, d = 13, h = 9 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const wall = MAT.mansionStone;
    const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(w + 0.7, 0.9, d + 0.7), MAT.stoneWall));
    base.position.y = 0.45;
    g.add(base);

    const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wall));
    body.position.y = h / 2 + 0.3;
    g.add(body);

    const cornice = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(w + 1.1, 0.5, d + 1.1), MAT.mansionStone)
    );
    cornice.position.y = h + 0.5;
    g.add(cornice);

    const roofSnow = new THREE.Mesh(new THREE.BoxGeometry(w + 0.8, 0.35, d + 0.8), MAT.roofSnow);
    roofSnow.position.y = h + 0.9;
    roofSnow.receiveShadow = true;
    g.add(roofSnow);

    const raised = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(w * 0.36, 2.6, d * 0.72), MAT.mansionStone)
    );
    raised.position.set(0, h + 2, -d * 0.06);
    g.add(raised);
    const raisedSnow = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.38, 0.3, d * 0.76),
      MAT.roofSnow
    );
    raisedSnow.position.set(0, h + 3.35, -d * 0.06);
    g.add(raisedSnow);

    for (const cx of [-11.5, -8, 8, 11.5]) {
      for (const cy of [3.4, 6.9]) {
        const frame = shadow(
          new THREE.Mesh(new THREE.BoxGeometry(1.55, 2.7, 0.14), MAT.windowFrame),
          false
        );
        frame.position.set(cx, cy, d / 2 + 0.05);
        g.add(frame);
        const pane = new THREE.Mesh(new THREE.BoxGeometry(1.28, 2.42, 0.1), MAT.glassWarm);
        pane.position.set(cx, cy, d / 2 + 0.12);
        g.add(pane);
      }
    }

    for (const cx of [-13.2, 13.2]) {
      for (const cz of [-4, 1.8]) {
        const frame = shadow(
          new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.4, 1.4), MAT.windowFrame),
          false
        );
        frame.position.set(cx, 5.2, cz);
        g.add(frame);
        const pane = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.1, 1.16), MAT.glassWarm);
        pane.position.set(cx + Math.sign(cx) * 0.07, 5.2, cz);
        g.add(pane);
      }
    }

    const doorFrame = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(5.6, 5.4, 0.3), MAT.stoneWall),
      false
    );
    doorFrame.position.set(0, 2.9, d / 2 + 0.1);
    g.add(doorFrame);

    const door = shadow(new THREE.Mesh(new THREE.BoxGeometry(3.4, 4.6, 0.22), MAT.woodDark));
    door.position.set(0, 2.5, d / 2 + 0.3);
    g.add(door);

    const doorWreath = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.16, 8, 24), MAT.wreath);
    doorWreath.position.set(0, 3.2, d / 2 + 0.46);
    doorWreath.castShadow = true;
    g.add(doorWreath);

    const handleA = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), MAT.gold);
    handleA.position.set(-0.55, 2.3, d / 2 + 0.45);
    const handleB = handleA.clone();
    handleB.position.x = 0.55;
    g.add(handleA, handleB);

    for (const cx of [-5, -1.7, 1.7, 5]) {
      const ped = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.1, 1.25), MAT.stoneWall));
      ped.position.set(cx, 0.85, d / 2 + 2.6);
      g.add(ped);
      const column = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.47, 5.4, 14), MAT.mansionStone));
      column.position.set(cx, 4.0, d / 2 + 2.6);
      g.add(column);
      const capBox = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 1.2), MAT.stoneWall));
      capBox.position.set(cx, 6.75, d / 2 + 2.6);
      g.add(capBox);
    }

    const portico = shadow(new THREE.Mesh(new THREE.BoxGeometry(13.2, 0.7, 4.3), MAT.mansionStone));
    portico.position.set(0, 7.15, d / 2 + 1.8);
    g.add(portico);
    const porticoSnow = new THREE.Mesh(new THREE.BoxGeometry(13.4, 0.22, 4.5), MAT.roofSnow);
    porticoSnow.position.set(0, 7.6, d / 2 + 1.8);
    g.add(porticoSnow);

    const pedimentShape = new THREE.Shape();
    pedimentShape.moveTo(-6.6, 0);
    pedimentShape.lineTo(6.6, 0);
    pedimentShape.lineTo(0, 2.2);
    pedimentShape.closePath();
    const pediment = new THREE.Mesh(
      new THREE.ShapeGeometry(pedimentShape),
      MAT.mansionStone
    );
    pediment.position.set(0, 7.55, d / 2 + 3.98);
    pediment.castShadow = true;
    g.add(pediment);

    for (let i = 0; i < 3; i++) {
      const step = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(14 - i * 0.8, 0.22, 1.2), MAT.stoneWall)
      );
      step.position.set(0, 0.14 + i * 0.2, d / 2 + 3.6 + i * 0.9);
      g.add(step);
    }

    const lanternL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.44, 0.3), MAT.lampGlass);
    lanternL.position.set(-3.8, 3.4, d / 2 + 0.45);
    const lanternR = lanternL.clone();
    lanternR.position.x = 3.8;
    g.add(lanternL, lanternR);

    const porchLight = new THREE.PointLight(0xffb87a, 30, 15, 2);
    porchLight.position.set(0, 3.8, d / 2 + 1.8);
    g.add(porchLight);

    this.solid(x, z, w + 0.8, d + 0.8, h + 3, rot);

    this.stringLights(
      [
        { x: -5.4, y: 6.5, z: d / 2 + 2.9 },
        { x: 0, y: 6.1, z: d / 2 + 2.9 },
        { x: 5.4, y: 6.5, z: d / 2 + 2.9 },
      ],
      { count: 16, sag: 0.35, radius: 0.055 }
    );

    return g;
  }

  workshop(opts = {}) {
    const { x = 0, z = -28, rot = 0, w = 30, d = 16, h = 12 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 0.7, d + 0.4), MAT.stoneWall));
    base.position.y = 0.35;
    g.add(base);

    const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), MAT.brick));
    body.position.y = h / 2 + 0.2;
    g.add(body);

    for (const bx of [-w / 2, -w / 6, w / 6, w / 2]) {
      const beam = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.45, h, 0.45), MAT.iron));
      beam.position.set(bx, h / 2 + 0.2, d / 2 + 0.14);
      g.add(beam);
    }

    for (const by of [3.8, 8.2]) {
      const beam = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, 0.3), MAT.iron));
      beam.position.set(0, by, d / 2 + 0.14);
      g.add(beam);
    }

    const roof = shadow(new THREE.Mesh(new THREE.BoxGeometry(w + 1.2, 0.7, d + 1.2), MAT.metal));
    roof.position.y = h + 0.6;
    g.add(roof);
    const roofSnow = new THREE.Mesh(new THREE.BoxGeometry(w + 1.3, 0.25, d + 1.3), MAT.roofSnow);
    roofSnow.position.y = h + 1.05;
    g.add(roofSnow);

    const doorFrame = shadow(new THREE.Mesh(new THREE.BoxGeometry(7.4, 7.1, 0.3), MAT.iron), false);
    doorFrame.position.set(0, 3.7, d / 2 + 0.16);
    g.add(doorFrame);

    const door = shadow(new THREE.Mesh(new THREE.BoxGeometry(6.2, 6.2, 0.2), MAT.metal));
    door.position.set(0, 3.4, d / 2 + 0.35);
    g.add(door);

    const doorLight = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.2, 0.2), MAT.lampGlass);
    doorLight.position.set(0, 6.7, d / 2 + 0.5);
    g.add(doorLight);

    for (const wx of [-12, -9.5, 8.8, 11.5]) {
      for (const wy of [5.2, 8.8]) {
        const frame = shadow(
          new THREE.Mesh(new THREE.BoxGeometry(1.7, 2.1, 0.16), MAT.windowFrame),
          false
        );
        frame.position.set(wx, wy, d / 2 + 0.06);
        g.add(frame);
        const pane = new THREE.Mesh(new THREE.BoxGeometry(1.45, 1.85, 0.1), MAT.glassWarm);
        pane.position.set(wx, wy, d / 2 + 0.13);
        g.add(pane);
      }
    }

    const awning = shadow(new THREE.Mesh(new THREE.BoxGeometry(8, 0.18, 2.4), MAT.metal));
    awning.position.set(0, 7.9, d / 2 + 1.2);
    awning.rotation.x = 0.18;
    g.add(awning);

    const dock = shadow(new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, 0.8, 3.2), MAT.woodDark));
    dock.position.set(-w * 0.2, 0.4, d / 2 + 2.6);
    g.add(dock);

    this.solid(x, z, w + 0.6, d + 0.6, h, rot);
    return g;
  }

  cityBlock(opts = {}) {
    const {
      x = 18,
      z = 0,
      w = 11,
      d = 14,
      h = 26,
      seed = 1,
      facing = -1,
      light = true,
      name = null,
      detail = true,
    } = opts;

    const g = new THREE.Group();
    g.position.set(x, 0, z);
    this.add(g);

    const rand = makeRand(seed * 977 + 41);
    const rx = Math.max(0.5, w / 13);
    const ry = Math.max(0.7, h / 22);
    const facade = facadeMaterial(seed, rx, ry);
    const frontX = facing * (w / 2);
    const rich = detail !== false;

    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [
      facade,
      facade,
      MAT.roofFlat,
      MAT.roofFlat,
      facade,
      facade,
    ]);
    body.position.y = h / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);

    const stone = [];
    const metal = [];
    const snow = [];
    const warm = [];
    const lit = [];
    const dark = [];
    const pBox = (arr, bw, bh, bd, px, py, pz) => {
      const geo = new THREE.BoxGeometry(bw, bh, bd);
      geo.translate(px, py, pz);
      arr.push(geo);
    };

    // ---- base course and entrance steps
    pBox(stone, w + 0.9, 1.15, d + 0.9, 0, 0.575, 0);
    pBox(stone, w + 1.12, 0.18, d + 1.12, 0, 1.13, 0);
    pBox(snow, w + 1.16, 0.09, d + 1.16, 0, 1.23, 0);
    for (let i = 0; i < 3; i++) {
      const stepD = 3.8 - i * 0.35;
      const stepX = frontX + facing * (0.58 + i * 0.42);
      const stepY = 0.36 - i * 0.12;
      pBox(stone, 0.62, 0.22, stepD, stepX, stepY, 0);
      pBox(snow, 0.6, 0.055, stepD - 0.18, stepX, stepY + 0.14, 0);
    }

    // ---- corner piers
    const pier = 0.85;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        pBox(
          stone,
          pier,
          h - 0.2,
          pier,
          sx * (w / 2 - pier / 2 + 0.16),
          h / 2,
          sz * (d / 2 - pier / 2 + 0.16)
        );
      }
    }

    // ---- horizontal cornices with snow ledges
    const bandGap = h > 34 ? 4.6 : 4.0;
    let bandIndex = 0;
    for (let by = 5.4; by < h - 2.6; by += bandGap) {
      const thick = bandIndex % 3 === 2 ? 0.34 : 0.18;
      pBox(stone, w + 0.46, thick, d + 0.46, 0, by, 0);
      if (rand() < 0.8) {
        pBox(snow, w + 0.6, 0.07, d + 0.6, 0, by + thick / 2 + 0.03, 0);
      }
      bandIndex++;
    }

    // ---- top cornice and hollow parapet
    pBox(stone, w + 1.0, 0.55, d + 1.0, 0, h - 0.28, 0);
    pBox(stone, w + 1.3, 0.2, d + 1.3, 0, h + 0.06, 0);
    pBox(snow, w + 1.34, 0.11, d + 1.34, 0, h + 0.22, 0);
    for (const sz of [-1, 1]) {
      pBox(stone, w + 0.7, 0.9, 0.34, 0, h + 0.45, sz * (d / 2 + 0.18));
      pBox(snow, w + 0.74, 0.1, 0.4, 0, h + 0.95, sz * (d / 2 + 0.18));
    }
    for (const sx of [-1, 1]) {
      pBox(stone, 0.34, 0.9, d + 0.7, sx * (w / 2 + 0.18), h + 0.45, 0);
      pBox(snow, 0.4, 0.1, d + 0.74, sx * (w / 2 + 0.18), h + 0.95, 0);
    }

    // ---- setback tower and crown
    let top = h;
    let towerW = 0;
    let towerD = 0;
    const hasTower = h >= 24 && seed % 7 !== 3;
    if (hasTower) {
      towerW = w * (0.52 + rand() * 0.16);
      towerD = d * (0.56 + rand() * 0.14);
      const towerH = 5 + rand() * (h > 34 ? 13 : 8);
      const towerFacade = facadeMaterial(
        seed + 201,
        Math.max(0.4, towerW / 13),
        Math.max(0.45, towerH / 22)
      );
      const tower = new THREE.Mesh(new THREE.BoxGeometry(towerW, towerH, towerD), [
        towerFacade,
        towerFacade,
        MAT.roofFlat,
        MAT.roofFlat,
        towerFacade,
        towerFacade,
      ]);
      tower.position.y = h + towerH / 2;
      tower.castShadow = true;
      tower.receiveShadow = true;
      g.add(tower);

      pBox(stone, towerW + 0.7, 0.4, towerD + 0.7, 0, h + 0.1, 0);
      pBox(stone, towerW + 0.82, 0.45, towerD + 0.82, 0, h + towerH - 0.18, 0);
      pBox(snow, towerW + 0.9, 0.12, towerD + 0.9, 0, h + towerH + 0.08, 0);
      top = h + towerH;

      for (const sz of [-1, 1]) {
        pBox(lit, towerW + 0.88, 0.1, 0.1, 0, h + towerH - 0.68, sz * (towerD / 2 + 0.26));
      }
      for (const sx of [-1, 1]) {
        pBox(lit, 0.1, 0.1, towerD + 0.88, sx * (towerW / 2 + 0.26), h + towerH - 0.68, 0);
      }

      if (h > 36) {
        const capH = 2.6 + rand() * 3.2;
        const capW = towerW * 0.54;
        const capD = towerD * 0.54;
        pBox(stone, capW, capH, capD, 0, top + capH / 2, 0);
        pBox(stone, capW + 0.42, 0.28, capD + 0.42, 0, top + capH, 0);
        pBox(snow, capW + 0.5, 0.1, capD + 0.5, 0, top + capH + 0.2, 0);
        pBox(lit, capW * 0.4, 0.1, capD * 0.4, 0, top + capH + 0.28, 0);
        top += capH;
      }
    }

    // ---- rooftop plant: stair shed, HVAC, pipes, tank legs
    if (rich) {
      const shedW = 3.2;
      const shedH = 2.8;
      const shedD = 2.4;
      pBox(stone, shedW, shedH, shedD, w * 0.06, h + shedH / 2, -d * 0.04);
      pBox(snow, shedW + 0.3, 0.16, shedD + 0.3, w * 0.06, h + shedH + 0.08, -d * 0.04);
      pBox(metal, 0.9, 2.0, 0.08, w * 0.06 - 0.7, h + 1.0, -d * 0.04 + shedD / 2 + 0.03);
      pBox(lit, 0.7, 0.55, 0.07, w * 0.06 + 0.85, h + 2.1, -d * 0.04 + shedD / 2 + 0.03);

      for (let i = 0; i < 3; i++) {
        const ux = -w * 0.3 + i * (w * 0.2);
        pBox(metal, 1.5, 0.65, 1.1, ux, h + 0.42, -d * 0.34);
        pBox(snow, 1.56, 0.08, 1.16, ux, h + 0.78, -d * 0.34);
        pBox(metal, 0.52, 0.1, 0.52, ux, h + 0.83, -d * 0.34);
      }
      pBox(metal, 0.16, 0.16, d * 0.5, w * 0.3, h + 0.18, 0);
      pBox(metal, 0.14, 0.14, d * 0.36, -w * 0.34, h + 0.18, 0);

      for (const lx of [-0.48, 0.48]) {
        for (const lz of [-0.48, 0.48]) {
          pBox(metal, 0.1, 1.4, 0.1, w * 0.24 + lx, h + 0.7, d * 0.2 + lz);
        }
      }

      // window air conditioners
      for (let i = 0; i < 6; i++) {
        const ay = 6.5 + rand() * Math.max(2, h - 10);
        const az = (rand() - 0.5) * (d * 0.68);
        pBox(metal, 0.42, 0.48, 0.7, frontX + facing * 0.26, ay, az);
      }

      // fire escape landings
      if (h > 13) {
        const levels = h > 24 ? [7.6, 14.6, 21.6] : [7.6, 14.6];
        for (const level of levels) {
          if (level > h - 4) continue;
          pBox(metal, 1.2, 0.1, d * 0.46, frontX + facing * 0.58, level, 0);
          pBox(metal, 0.08, 0.72, d * 0.46, frontX + facing * 1.14, level + 0.4, 0);
          pBox(metal, 0.1, 6.6, 0.4, frontX + facing * 1.04, level - 3.0, d * 0.2);
          for (let i = 0; i < 7; i++) {
            pBox(metal, 0.06, 0.72, 0.06, frontX + facing * 1.14, level + 0.4, -d * 0.21 + i * (d * 0.07));
          }
        }
      }
    }

    if (rich) {
      // ---- storefront glazing, door and frames
      const shopX = frontX + facing * 0.06;
      const winZ = d * 0.3;
      for (const zz of [-winZ, winZ]) {
        pBox(light ? warm : dark, 0.14, 2.3, d * 0.22, shopX, 2.2, zz);
        pBox(metal, 0.24, 3.05, 0.14, shopX + facing * 0.02, 2.3, zz - d * 0.115);
        pBox(metal, 0.24, 3.05, 0.14, shopX + facing * 0.02, 2.3, zz + d * 0.115);
        pBox(metal, 0.24, 0.18, d * 0.24, shopX + facing * 0.02, 3.28, zz);
      }
      pBox(dark, 0.16, 2.6, 1.6, shopX, 1.6, 0);
      if (light) pBox(warm, 0.1, 1.1, 0.8, shopX + facing * 0.07, 2.05, 0);
      pBox(metal, 0.3, 2.9, 0.18, shopX + facing * 0.06, 1.75, -0.86);
      pBox(metal, 0.3, 2.9, 0.18, shopX + facing * 0.06, 1.75, 0.86);
      pBox(metal, 0.3, 0.2, 1.9, shopX + facing * 0.06, 3.14, 0);
      pBox(lit, 0.18, 0.2, d * 0.7, shopX + facing * 0.03, 3.26, 0);

      if (light) {
        for (const zz of [-d * 0.47, d * 0.47]) {
          pBox(lit, 0.3, 0.5, 0.24, shopX + facing * 0.18, 3.62, zz);
        }
        const canopyLight = new THREE.PointLight(0xffae66, 16, 14, 2);
        canopyLight.position.set(frontX + facing * 1.6, 2.7, 0);
        g.add(canopyLight);
      }
    }

    // ---- antenna and crossbars
    const mastH = 4 + rand() * 5.5;
    const mastX = w * (0.2 + rand() * 0.16);
    const mastZ = -d * 0.3;
    pBox(metal, 1.5, 0.06, 0.06, mastX, top + mastH * 0.55, mastZ);
    pBox(metal, 1.0, 0.06, 0.06, mastX, top + mastH * 0.8, mastZ);
    pBox(metal, 0.06, mastH * 0.55, 0.06, mastX, top + mastH * 0.3, mastZ);

    // ---- merge detail batches into a handful of draw calls
    const stoneMesh = mergedMesh(stone, MAT.cityStone);
    if (stoneMesh) g.add(stoneMesh);
    const metalMesh = mergedMesh(metal, MAT.iron);
    if (metalMesh) g.add(metalMesh);
    const snowMesh = mergedMesh(snow, MAT.snow, false);
    if (snowMesh) g.add(snowMesh);
    const warmMesh = mergedMesh(warm, MAT.glassWarm, false);
    if (warmMesh) g.add(warmMesh);
    const litMesh = mergedMesh(lit, MAT.roofTrim, false);
    if (litMesh) g.add(litMesh);
    const darkMesh = mergedMesh(dark, MAT.glassDark);
    if (darkMesh) g.add(darkMesh);

    if (rich) {
      // ---- awning with snow and valance
      const awning = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.16, d * 0.72), MAT.fabricRed));
      awning.position.set(frontX + facing * 0.78, 3.52, 0);
      awning.rotation.z = facing * 0.16;
      g.add(awning);
      const awningSnow = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.09, d * 0.72), MAT.snow);
      awningSnow.position.set(frontX + facing * 0.79, 3.62, 0);
      awningSnow.rotation.z = facing * 0.16;
      g.add(awningSnow);
      const valance = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.26, d * 0.72), MAT.fabricRed);
      valance.position.set(frontX + facing * 1.16, 3.3, 0);
      g.add(valance);

      // ---- shop sign
      const shopNames = ['NOEL', 'DELI', 'HOTEL', 'CAFE', 'BOOKS', 'TAILOR', 'PHARMACY', 'THEATRE', 'BAKERY', 'GIFTS'];
      const label = name || shopNames[seed % shopNames.length];
      const signTex = makeTextTexture(label, light ? '#ffd6a2' : '#93a0b2', {
        width: 512,
        height: 160,
        font: '700 92px Georgia',
        glow: 20,
      });
      const signW = Math.min(d * 0.6, 6.2);
      const signH = Math.max(1.05, signW / 3.4);
      const signBoard = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, signH + 0.26, signW + 0.34),
        MAT.iron
      );
      signBoard.position.set(frontX + facing * 0.9, 4.62, 0);
      signBoard.castShadow = true;
      g.add(signBoard);
      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(signW, signH),
        basics({ map: signTex, transparent: true, toneMapped: false, depthWrite: false })
      );
      sign.position.set(frontX + facing * 0.99, 4.62, 0);
      sign.rotation.y = facing > 0 ? Math.PI / 2 : -Math.PI / 2;
      g.add(sign);
    }

    // ---- water tower
    if (rich) {
      const tank = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.82, 1.5, 12), MAT.woodDark));
      tank.position.set(w * 0.24, h + 2.1, d * 0.2);
      g.add(tank);
      const tankCap = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.86, 0.36, 12), MAT.iron));
      tankCap.position.set(w * 0.24, h + 3.0, d * 0.2);
      g.add(tankCap);
      const tankSnow = new THREE.Mesh(new THREE.ConeGeometry(0.8, 0.22, 12), MAT.snow);
      tankSnow.position.set(w * 0.24, h + 3.16, d * 0.2);
      g.add(tankSnow);
    }

    // ---- antenna mast and blinking aviation beacon
    const mast = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.12, mastH, 6), MAT.iron));
    mast.position.set(mastX, top + mastH / 2, mastZ);
    g.add(mast);
    const beaconMat = basics({ color: 0xff4636, transparent: true, opacity: 1, toneMapped: false });
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), beaconMat);
    beacon.position.set(mastX, top + mastH + 0.08, mastZ);
    g.add(beacon);
    const beaconHalo = new THREE.Sprite(glowSpriteMaterial(0xff4636, 0.45));
    beaconHalo.scale.set(1.5, 1.5, 1);
    beaconHalo.position.copy(beacon.position);
    g.add(beaconHalo);
    const blink = rand() * 10;
    this.animated.push((t) => {
      const phase = (t * 0.7 + blink) % 1;
      const on = phase < 0.42 ? 1 : 0.08;
      beaconMat.opacity = on;
      beaconHalo.material.opacity = 0.45 * on;
    });

    // ---- roof snow piles and base drifts
    const piles = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), MAT.snow, 9);
    for (let i = 0; i < 9; i++) {
      if (i < 5) {
        dummy.position.set((rand() - 0.5) * (w - 2.5), h + 0.02, (rand() - 0.5) * (d - 2.5));
        dummy.scale.set(0.7 + rand() * 0.9, 0.28 + rand() * 0.22, 0.7 + rand() * 0.8);
      } else {
        const side = rand() < 0.5 ? -1 : 1;
        dummy.position.set(side * (w / 2 + 0.5), 0.1, (rand() - 0.5) * (d + 1));
        dummy.scale.set(0.9 + rand() * 0.7, 0.3 + rand() * 0.2, 0.5 + rand() * 0.5);
      }
      dummy.rotation.set(rand(), rand() * 3, rand());
      dummy.updateMatrix();
      piles.setMatrixAt(i, dummy.matrix);
    }
    piles.instanceMatrix.needsUpdate = true;
    piles.castShadow = false;
    piles.receiveShadow = true;
    g.add(piles);

    // ---- festive bulbs and icicles along the front cornice
    const fringeCount = 26;
    const fringe = new THREE.InstancedMesh(
      new THREE.SphereGeometry(0.085, 5, 4),
      basics({ toneMapped: false }),
      fringeCount
    );
    const fringePalette = [0xffd9a0, 0xffb877, 0xfff0d0];
    for (let i = 0; i < fringeCount; i++) {
      const t = (i + 0.5) / fringeCount;
      dummy.position.set(frontX + facing * 0.68, h + 0.02, -d / 2 - 0.32 + t * (d + 0.64));
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(0.85 + (i % 3) * 0.15);
      dummy.updateMatrix();
      fringe.setMatrixAt(i, dummy.matrix);
      colorHelper.setHex(fringePalette[i % fringePalette.length]);
      fringe.setColorAt(i, colorHelper);
    }
    fringe.instanceMatrix.needsUpdate = true;
    if (fringe.instanceColor) fringe.instanceColor.needsUpdate = true;
    g.add(fringe);

    if (rich) {
      const icicleCount = 16;
      const icicles = new THREE.InstancedMesh(
        new THREE.ConeGeometry(0.055, 0.5, 5),
        MAT.ice,
        icicleCount
      );
      for (let i = 0; i < icicleCount; i++) {
        dummy.position.set(frontX + facing * 0.6, h - 0.26, -d / 2 + (i + 0.5) * (d / icicleCount));
        dummy.rotation.set(Math.PI, 0, 0);
        dummy.scale.set(1, 0.6 + ((i * 7) % 5) * 0.18, 1);
        dummy.updateMatrix();
        icicles.setMatrixAt(i, dummy.matrix);
      }
      icicles.instanceMatrix.needsUpdate = true;
      g.add(icicles);
    }

    this.solid(x, z, w, d, h);
    return g;
  }

  /* ----------------------- City street props ---------------------- */

  snowDrift(opts = {}) {
    const { x = 0, z = 0, w = 3.2, d = 1.8, h = 0.45, rot = 0 } = opts;
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), MAT.snow);
    mesh.position.set(x, h * 0.34, z);
    mesh.scale.set(w * 0.5, h, d * 0.5);
    mesh.rotation.y = rot;
    mesh.receiveShadow = true;
    this.add(mesh);
    return mesh;
  }

  icePatch(opts = {}) {
    const { x = 0, z = 0, r = 2.4, rot = 0 } = opts;
    const mesh = new THREE.Mesh(new THREE.CircleGeometry(r, 14), MAT.icePatch);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = rot;
    mesh.position.set(x, 0.052, z);
    this.add(mesh);
    return mesh;
  }

  bollard(opts = {}) {
    const { x = 0, z = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    this.add(g);

    const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 1.0, 10), MAT.iron));
    post.position.y = 0.5;
    g.add(post);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.08, 10), MAT.brass);
    band.position.y = 0.84;
    g.add(band);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 6), MAT.snow);
    cap.position.y = 1.03;
    cap.scale.y = 0.5;
    g.add(cap);

    this.solid(x, z, 0.45, 0.45, 1.1);
    return g;
  }

  streetBin(opts = {}) {
    const { x = 0, z = 0, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const body = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.27, 0.92, 10), MAT.binGreen));
    body.position.y = 0.5;
    g.add(body);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 10), MAT.iron);
    rim.position.y = 0.96;
    g.add(rim);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.33, 0.1, 10), MAT.iron);
    lid.position.y = 1.03;
    g.add(lid);
    const snow = new THREE.Mesh(new THREE.SphereGeometry(0.31, 10, 6), MAT.snow);
    snow.position.y = 1.09;
    snow.scale.y = 0.35;
    g.add(snow);

    this.solid(x, z, 0.8, 0.8, 1.1);
    return g;
  }

  planter(opts = {}) {
    const { x = 0, z = 0, rot = 0, size = 1.7 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const box = shadow(new THREE.Mesh(new THREE.BoxGeometry(size, 0.7, size), MAT.cityStoneDark));
    box.position.y = 0.35;
    g.add(box);
    const rim = new THREE.Mesh(new THREE.BoxGeometry(size + 0.16, 0.12, size + 0.16), MAT.cityStone);
    rim.position.y = 0.72;
    g.add(rim);
    const snow = new THREE.Mesh(new THREE.BoxGeometry(size - 0.2, 0.1, size - 0.2), MAT.snow);
    snow.position.y = 0.78;
    g.add(snow);

    const lower = shadow(new THREE.Mesh(firTierGeos[1], MAT.pineDark));
    lower.position.y = 1.6;
    lower.scale.set(size * 0.38, 1.7, size * 0.38);
    g.add(lower);
    const lowerSnow = new THREE.Mesh(firSnowGeos[1], MAT.snow);
    lowerSnow.position.y = 2.12;
    lowerSnow.scale.set(size * 0.28, 0.5, size * 0.28);
    g.add(lowerSnow);
    const upper = shadow(new THREE.Mesh(firTierGeos[2], MAT.pineDark));
    upper.position.y = 2.42;
    upper.scale.set(size * 0.25, 1.25, size * 0.25);
    g.add(upper);

    this.solid(x, z, size + 0.2, size + 0.2, 2.8, rot);
    return g;
  }

  newsBox(opts = {}) {
    const { x = 0, z = 0, rot = 0, color = 0x8f2429 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.05, 0.72), giftMaterial(color)));
    body.position.y = 0.62;
    g.add(body);
    const head = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.26, 0.78), MAT.iron));
    head.position.y = 1.2;
    g.add(head);
    const pane = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.5, 0.04), MAT.glassWarm);
    pane.position.set(0, 0.8, 0.38);
    g.add(pane);
    const snow = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.08, 0.82), MAT.snow);
    snow.position.y = 1.38;
    g.add(snow);
    for (const sx of [-0.34, 0.34]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.24, 0.08), MAT.iron);
      leg.position.set(sx, 0.12, 0);
      g.add(leg);
    }

    this.solid(x, z, 1.0, 0.82, 1.4, rot);
    return g;
  }

  busShelter(opts = {}) {
    const { x = 0, z = 0, rot = 0, w = 5.2, d = 2.1, label = 'NOEL' } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    for (const sx of [-w / 2 + 0.12, w / 2 - 0.12]) {
      for (const sz of [-d / 2 + 0.1, d / 2 - 0.1]) {
        const post = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.9, 0.14), MAT.iron));
        post.position.set(sx, 1.45, sz);
        g.add(post);
      }
    }

    const roof = shadow(new THREE.Mesh(new THREE.BoxGeometry(w + 0.5, 0.16, d + 0.5), MAT.iron));
    roof.position.y = 2.95;
    g.add(roof);
    const roofSnow = new THREE.Mesh(new THREE.BoxGeometry(w + 0.52, 0.1, d + 0.52), MAT.snow);
    roofSnow.position.y = 3.06;
    g.add(roofSnow);

    const back = new THREE.Mesh(new THREE.BoxGeometry(w - 0.3, 2.3, 0.08), MAT.glassDark);
    back.position.set(0, 1.4, -d / 2 + 0.1);
    g.add(back);
    const backRail = new THREE.Mesh(new THREE.BoxGeometry(w - 0.2, 0.12, 0.16), MAT.iron);
    backRail.position.set(0, 2.58, -d / 2 + 0.1);
    g.add(backRail);
    const divider = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.3, d - 0.3), MAT.glassDark);
    divider.position.set(w / 2 - 0.12, 1.4, 0);
    g.add(divider);

    const panelTex = makeTextTexture(label, '#ffe0ad', {
      width: 512,
      height: 720,
      font: '700 104px Georgia',
      glow: 24,
    });
    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(1.15, 1.78),
      basics({ map: panelTex, transparent: true, toneMapped: false, depthWrite: false })
    );
    panel.position.set(w / 2 - 0.18, 1.62, 0);
    panel.rotation.y = Math.PI / 2;
    g.add(panel);
    const panelFrame = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.0, 1.36), MAT.iron);
    panelFrame.position.set(w / 2 - 0.26, 1.62, 0);
    g.add(panelFrame);

    const seat = shadow(new THREE.Mesh(new THREE.BoxGeometry(w - 2.0, 0.12, 0.55), MAT.wood));
    seat.position.set(-0.2, 0.62, -d / 2 + 0.5);
    g.add(seat);
    const seatSnow = new THREE.Mesh(new THREE.BoxGeometry(w - 2.05, 0.06, 0.52), MAT.snow);
    seatSnow.position.set(-0.2, 0.71, -d / 2 + 0.5);
    g.add(seatSnow);
    for (const sx of [-w / 2 + 0.9, w / 2 - 2.1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.42), MAT.iron);
      leg.position.set(sx, 0.3, -d / 2 + 0.5);
      g.add(leg);
    }

    this.solid(x, z, w, d, 3, rot);
    return g;
  }

  steamVent(opts = {}) {
    const { x = 0, z = 0, size = 2.2, count = 16 } = opts;
    const grate = shadow(new THREE.Mesh(new THREE.BoxGeometry(size * 0.75, 0.07, size * 0.5), MAT.iron), false);
    grate.position.set(x, 0.056, z);
    this.add(grate);
    for (let i = 0; i < 5; i++) {
      const slot = new THREE.Mesh(new THREE.BoxGeometry(size * 0.62, 0.03, 0.1), MAT.coal);
      slot.position.set(x, 0.09, z - size * 0.2 + i * (size * 0.1));
      this.add(slot);
    }

    const positions = new Float32Array(count * 3);
    const seeds = [];
    for (let i = 0; i < count; i++) {
      seeds.push({ t: Math.random(), a: Math.random() * Math.PI * 2, s: 0.09 + Math.random() * 0.07 });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      map: T.smoke,
      size: 3.2,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false;
    this.add(pts);

    this.animated.push((t) => {
      for (let i = 0; i < count; i++) {
        const s = seeds[i];
        const p = (t * s.s + s.t) % 1;
        const r = 0.15 + p * 1.4;
        positions[i * 3] = x + Math.cos(s.a + p * 2.2) * r + p * 0.7;
        positions[i * 3 + 1] = 0.1 + p * 6.5;
        positions[i * 3 + 2] = z + Math.sin(s.a + p * 1.7) * r;
      }
      geo.attributes.position.needsUpdate = true;
      mat.opacity = 0.13 + Math.sin(t * 0.7) * 0.03;
    });
  }

  skyline(opts = {}) {
    const { count = 40, radius = 205, minHeight = 55, maxHeight = 145 } = opts;
    const rand = makeRand(4242);
    const seedsFor = [311, 312, 313];
    const groups = new Map();

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rand() * 0.06;
      const r = radius * (0.82 + rand() * 0.5);
      const px = Math.cos(angle) * r;
      const pz = Math.sin(angle) * r;
      const bw = 12 + rand() * 20;
      const bd = 12 + rand() * 18;
      const bh = minHeight + Math.pow(rand(), 1.6) * (maxHeight - minHeight);
      const gi = Math.floor(rand() * seedsFor.length);
      if (!groups.has(gi)) groups.set(gi, []);
      const geo = new THREE.BoxGeometry(bw, bh, bd);
      geo.translate(px, bh / 2, pz);
      groups.get(gi).push(geo);
    }

    for (const [gi, parts] of groups) {
      const mesh = mergedMesh(parts, facadeMaterial(seedsFor[gi], 1.6, 3.4), false);
      if (mesh) {
        mesh.receiveShadow = false;
        this.add(mesh);
      }
    }
  }


  /* ------------------------- Festive props ------------------------ */

  christmasTree(opts = {}) {
    const { x = 0, z = 0, scale = 1, bulbs = 120, ornaments = 46 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    this.add(g);

    const trunk = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.48, 1.9, 12), MAT.bark));
    trunk.position.y = 0.95;
    g.add(trunk);

    const root = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.66, 0.34, 12), MAT.bark));
    root.position.y = 0.17;
    g.add(root);

    const baseSnow = new THREE.Mesh(
      new THREE.CylinderGeometry(1.02, 1.24, 0.16, 20),
      MAT.snow
    );
    baseSnow.position.y = 0.06;
    baseSnow.receiveShadow = true;
    g.add(baseSnow);

    const tiers = 5;
    for (let i = 0; i < tiers; i++) {
      const t = i / (tiers - 1);
      const radius = 3.5 * (1 - t * 0.7);
      const height = 2.75 * (1 - t * 0.25);
      const y = 1.25 + i * 1.34;
      const cone = shadow(
        new THREE.Mesh(firTierGeos[i % firTierGeos.length], MAT.pine)
      );
      cone.position.y = y + height / 2;
      cone.scale.set(radius, height, radius);
      cone.rotation.y = i * 0.6;
      g.add(cone);

      const snowCap = new THREE.Mesh(firSnowGeos[i % firSnowGeos.length], MAT.snow);
      snowCap.position.y = y + height * 0.81;
      snowCap.scale.set(radius * 0.74, height * 0.22, radius * 0.74);
      snowCap.rotation.y = i * 0.6;
      snowCap.receiveShadow = true;
      g.add(snowCap);
    }

    const branchClumps = new THREE.InstancedMesh(firClumpGeo, MAT.snow, 54);
    for (let i = 0; i < 54; i++) {
      const t = Math.pow(Math.random(), 0.72) * 0.94;
      const y = 1.52 + t * 8.05;
      const radius = Math.max(0.36, 3.26 * (1 - t)) + 0.1;
      const angle = Math.random() * Math.PI * 2;
      dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      dummy.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);
      dummy.scale.setScalar(0.25 + Math.random() * 0.45);
      dummy.updateMatrix();
      branchClumps.setMatrixAt(i, dummy.matrix);
    }
    branchClumps.instanceMatrix.needsUpdate = true;
    branchClumps.castShadow = false;
    g.add(branchClumps);

    const bulbGeo = new THREE.SphereGeometry(0.075, 7, 6);
    const bulbMat = basics({ toneMapped: false });
    const bulbMesh = new THREE.InstancedMesh(bulbGeo, bulbMat, bulbs);
    const palette = [0xffe0a0, 0xffb066, 0xe4493c, 0x7de08f, 0xfff0c7, 0xffd36a];
    const bulbPositions = [];
    const bulbColors = [];
    for (let i = 0; i < bulbs; i++) {
      const t = i / (bulbs - 1);
      const y = 1.55 + t * 8.1;
      const radius = Math.max(0.25, 3.3 * (1 - t)) + 0.22;
      const angle = t * Math.PI * 2 * 8.5;
      dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      dummy.scale.setScalar(0.8 + Math.sin(i * 12.7) * 0.2 + 0.2);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      bulbMesh.setMatrixAt(i, dummy.matrix);
      colorHelper.setHex(palette[i % palette.length]);
      bulbMesh.setColorAt(i, colorHelper);
      bulbPositions.push(new THREE.Vector3(dummy.position.x, y, dummy.position.z));
      bulbColors.push(colorHelper.clone());
    }
    bulbMesh.instanceMatrix.needsUpdate = true;
    if (bulbMesh.instanceColor) bulbMesh.instanceColor.needsUpdate = true;
    g.add(bulbMesh);

    const wirePoints = [];
    for (let i = 0; i <= 220; i++) {
      const t = i / 220;
      const y = 1.55 + t * 8.1;
      const radius = Math.max(0.25, 3.3 * (1 - t)) + 0.22;
      const angle = t * Math.PI * 2 * 8.5;
      wirePoints.push(
        new THREE.Vector3(
          Math.cos(angle) * radius * 0.985,
          y,
          Math.sin(angle) * radius * 0.985
        )
      );
    }
    const wire = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wirePoints), 220, 0.013, 4, false),
      std({ color: 0x162019, roughness: 0.82, metalness: 0.08 })
    );
    wire.castShadow = false;
    g.add(wire);

    const bulbGlowGeo = new THREE.BufferGeometry();
    const bulbGlowPositions = new Float32Array(bulbs * 3);
    const bulbGlowColors = new Float32Array(bulbs * 3);
    bulbPositions.forEach((p, i) => {
      bulbGlowPositions[i * 3] = p.x;
      bulbGlowPositions[i * 3 + 1] = p.y;
      bulbGlowPositions[i * 3 + 2] = p.z;
      bulbGlowColors[i * 3] = bulbColors[i].r;
      bulbGlowColors[i * 3 + 1] = bulbColors[i].g;
      bulbGlowColors[i * 3 + 2] = bulbColors[i].b;
    });
    bulbGlowGeo.setAttribute('position', new THREE.BufferAttribute(bulbGlowPositions, 3));
    bulbGlowGeo.setAttribute('color', new THREE.BufferAttribute(bulbGlowColors, 3));
    const bulbGlowMat = new THREE.PointsMaterial({
      map: T.glow,
      color: 0xffffff,
      size: 0.52,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      alphaTest: 0.01,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const bulbGlow = new THREE.Points(bulbGlowGeo, bulbGlowMat);
    bulbGlow.frustumCulled = false;
    g.add(bulbGlow);

    const ornGeo = new THREE.SphereGeometry(0.14, 9, 7);
    const ornMat = std({ metalness: 0.55, roughness: 0.24 });
    const ornMesh = new THREE.InstancedMesh(ornGeo, ornMat, ornaments);
    const ornCaps = new THREE.InstancedMesh(
      new THREE.CylinderGeometry(0.035, 0.046, 0.065, 6),
      MAT.gold,
      ornaments
    );
    const ornPalette = [0xb3202a, 0xd6a94f, 0x2d6b46, 0xe8e0d2, 0x8b1d4a];
    for (let i = 0; i < ornaments; i++) {
      const t = Math.pow(Math.random(), 0.7) * 0.9;
      const y = 1.7 + t * 7.4;
      const radius = Math.max(0.4, 3.15 * (1 - t)) + 0.18;
      const angle = Math.random() * Math.PI * 2;
      const size = 0.8 + Math.random() * 0.6;
      dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      dummy.scale.setScalar(size);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      ornMesh.setMatrixAt(i, dummy.matrix);
      colorHelper.setHex(ornPalette[i % ornPalette.length]);
      ornMesh.setColorAt(i, colorHelper);

      dummy.position.y = y + 0.145 * size;
      dummy.scale.set(0.9, 1, 0.9);
      dummy.rotation.y = Math.random() * Math.PI;
      dummy.updateMatrix();
      ornCaps.setMatrixAt(i, dummy.matrix);
    }
    ornMesh.instanceMatrix.needsUpdate = true;
    if (ornMesh.instanceColor) ornMesh.instanceColor.needsUpdate = true;
    ornCaps.instanceMatrix.needsUpdate = true;
    g.add(ornMesh, ornCaps);

    const star = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.46, 0),
      basics({ color: 0xffe3a1, toneMapped: false })
    );
    star.position.y = 10.2;
    star.scale.y = 1.35;
    g.add(star);

    const starCore = new THREE.Sprite(glowSpriteMaterial(0xffe2a8, 0.9));
    starCore.scale.set(3.2, 3.2, 1);
    starCore.position.y = 10.2;
    g.add(starCore);

    const starGlow = new THREE.Sprite(glowSpriteMaterial(0xffd79a, 0.3));
    starGlow.scale.set(10, 10, 1);
    starGlow.position.y = 10.2;
    g.add(starGlow);

    const treeLight = new THREE.PointLight(0xffc286, 46, 32, 2);
    treeLight.position.set(0, 4.4, 0);
    g.add(treeLight);

    const baseLight = new THREE.PointLight(0xffb06a, 15, 16, 2);
    baseLight.position.set(0, 2.2, 0);
    g.add(baseLight);

    const phase = Math.random() * 10;
    this.animated.push((t) => {
      const pulse = Math.sin(t * 1.7 + phase) * 0.5 + Math.sin(t * 4.1 + phase * 0.7) * 0.5;
      bulbGlowMat.opacity = 0.34 + pulse * 0.055;
      starGlow.material.opacity = 0.24 + Math.max(0, Math.sin(t * 1.4 + phase)) * 0.12;
      starCore.material.opacity = 0.76 + Math.max(0, Math.sin(t * 2.2 + phase)) * 0.18;
      treeLight.intensity = 44 + pulse * 2.5;
    });

    this.solid(x, z, 1.6, 1.6, 10);
    return g;
  }

  pines(positions, opts = {}) {
    const { minScale = 0.75, maxScale = 1.45, base = 1 } = opts;
    const count = positions.length;
    if (!count) return;

    const tiers = [
      { y: 2.42, r: 1.98, h: 3.02 },
      { y: 3.68, r: 1.56, h: 2.75 },
      { y: 4.76, r: 1.13, h: 2.32 },
      { y: 5.68, r: 0.7, h: 1.86 },
    ];
    const tipsPerTier = 8;
    const clumpsPerTier = 5;

    const tierMeshes = tiers.map((tier, index) => {
      const mesh = new THREE.InstancedMesh(firTierGeos[index % firTierGeos.length], MAT.pine, count);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.add(mesh);
      return mesh;
    });

    const snowMeshes = tiers.map((tier, index) => {
      const mesh = new THREE.InstancedMesh(
        firSnowGeos[index % firSnowGeos.length],
        MAT.snow,
        count
      );
      mesh.receiveShadow = true;
      this.add(mesh);
      return mesh;
    });

    const tips = new THREE.InstancedMesh(
      firTipGeo,
      MAT.pineDark,
      count * tiers.length * tipsPerTier
    );
    tips.receiveShadow = true;
    tips.castShadow = false;
    this.add(tips);

    const clumps = new THREE.InstancedMesh(
      firClumpGeo,
      MAT.snow,
      count * tiers.length * clumpsPerTier
    );
    clumps.receiveShadow = true;
    clumps.castShadow = false;
    this.add(clumps);

    const trunkMesh = new THREE.InstancedMesh(
      new THREE.CylinderGeometry(0.14, 0.3, 2.5, 12),
      MAT.bark,
      count
    );
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    this.add(trunkMesh);

    const rootMesh = new THREE.InstancedMesh(firRootGeo, MAT.bark, count);
    rootMesh.castShadow = true;
    rootMesh.receiveShadow = true;
    this.add(rootMesh);

    const baseSnowMesh = new THREE.InstancedMesh(firBaseSnowGeo, MAT.snow, count);
    baseSnowMesh.receiveShadow = true;
    this.add(baseSnowMesh);

    let tipIndex = 0;
    let clumpIndex = 0;

    positions.forEach((p, i) => {
      const s = (p.s ?? minScale + ((i * 37) % 100) / 100 * (maxScale - minScale)) * base;
      const rot = ((i * 73) % 360) * (Math.PI / 180);
      const tint = 0.88 + ((i * 17) % 100) / 100 * 0.22;

      tiers.forEach((tier, tierIndex) => {
        const tierTint = 0.8 + tierIndex * 0.055;
        colorHelper.setRGB(
          tint * 0.78 * tierTint,
          tint * tierTint,
          tint * 0.84 * tierTint
        );
        dummy.position.set(p.x, tier.y * s, p.z);
        dummy.rotation.set(0, rot + tierIndex * 0.37, 0);
        dummy.scale.set(tier.r * s, tier.h * s, tier.r * s);
        dummy.updateMatrix();
        tierMeshes[tierIndex].setMatrixAt(i, dummy.matrix);
        tierMeshes[tierIndex].setColorAt(i, colorHelper);

        dummy.position.set(p.x, (tier.y + tier.h * 0.3) * s, p.z);
        dummy.rotation.set(0, rot + tierIndex * 0.37, 0);
        dummy.scale.set(tier.r * 0.73 * s, tier.h * 0.22 * s, tier.r * 0.73 * s);
        dummy.updateMatrix();
        snowMeshes[tierIndex].setMatrixAt(i, dummy.matrix);

        for (let k = 0; k < tipsPerTier; k++) {
          const angle =
            rot +
            tierIndex * 0.37 +
            (k / tipsPerTier) * Math.PI * 2 +
            Math.sin(i * 2.3 + k * 1.7) * 0.1;
          const radius = tier.r * s * (0.91 + Math.sin(i + k * 2.1) * 0.05);
          const baseY = (tier.y - tier.h * 0.45) * s;
          dummy.position.set(
            p.x + Math.cos(angle) * radius,
            baseY,
            p.z + Math.sin(angle) * radius
          );
          tipDir.set(Math.cos(angle), -0.32 - Math.sin(i + k) * 0.06, Math.sin(angle)).normalize();
          tipQuat.setFromUnitVectors(UP, tipDir);
          dummy.quaternion.copy(tipQuat);
          dummy.scale.setScalar(s * (0.74 + ((i + k * 3) % 5) * 0.055));
          dummy.updateMatrix();
          tips.setMatrixAt(tipIndex, dummy.matrix);
          colorHelper.setRGB(
            tint * 0.62 * tierTint,
            tint * 0.8 * tierTint,
            tint * 0.66 * tierTint
          );
          tips.setColorAt(tipIndex, colorHelper);
          tipIndex++;
        }

        for (let k = 0; k < clumpsPerTier; k++) {
          const angle = rot + (k / clumpsPerTier) * Math.PI * 2 + tierIndex * 0.71;
          const radius = tier.r * s * (0.48 + ((i + k) % 4) * 0.08);
          dummy.position.set(
            p.x + Math.cos(angle) * radius,
            (tier.y + tier.h * (0.08 + ((i + k) % 3) * 0.07)) * s,
            p.z + Math.sin(angle) * radius
          );
          dummy.rotation.set(0, angle, 0);
          dummy.scale.setScalar(s * (0.42 + ((i * 2 + k) % 5) * 0.07));
          dummy.updateMatrix();
          clumps.setMatrixAt(clumpIndex, dummy.matrix);
          clumpIndex++;
        }
      });

      dummy.position.set(p.x, 1.2 * s, p.z);
      dummy.rotation.set(0, rot, 0);
      dummy.quaternion.setFromEuler(dummy.rotation);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      trunkMesh.setMatrixAt(i, dummy.matrix);

      dummy.position.set(p.x, 0.25 * s, p.z);
      dummy.rotation.set(0, rot, 0);
      dummy.quaternion.setFromEuler(dummy.rotation);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      rootMesh.setMatrixAt(i, dummy.matrix);

      dummy.position.set(p.x, 0.1 * s, p.z);
      dummy.rotation.set(0, rot, 0);
      dummy.quaternion.setFromEuler(dummy.rotation);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      baseSnowMesh.setMatrixAt(i, dummy.matrix);

      this.solid(p.x, p.z, 0.9 * s, 0.9 * s, 4);
    });

    tierMeshes.forEach((mesh) => {
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    });
    snowMeshes.forEach((mesh) => {
      mesh.instanceMatrix.needsUpdate = true;
    });
    tips.instanceMatrix.needsUpdate = true;
    if (tips.instanceColor) tips.instanceColor.needsUpdate = true;
    clumps.instanceMatrix.needsUpdate = true;
    trunkMesh.instanceMatrix.needsUpdate = true;
    rootMesh.instanceMatrix.needsUpdate = true;
    baseSnowMesh.instanceMatrix.needsUpdate = true;
  }

  stall(opts = {}) {
    const { x = 0, z = 0, rot = 0, canopy = MAT.stallRed, light = true } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    for (const px of [-1.7, 1.7]) {
      for (const pz of [-1.1, 1.1]) {
        const post = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.5, 0.14), MAT.woodDark));
        post.position.set(px, 1.25, pz);
        g.add(post);
      }
    }

    const roof = shadow(new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.18, 2.7), canopy));
    roof.position.y = 2.55;
    roof.rotation.z = 0.035;
    g.add(roof);

    const trim = shadow(new THREE.Mesh(new THREE.BoxGeometry(3.95, 0.18, 2.78), MAT.woodDark), false);
    trim.position.y = 2.45;
    g.add(trim);

    const counter = shadow(new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.95, 0.85), MAT.wood));
    counter.position.set(0, 0.48, 0.95);
    g.add(counter);

    const shelf = shadow(new THREE.Mesh(new THREE.BoxGeometry(3.5, 1.5, 0.35), MAT.wood));
    shelf.position.set(0, 1.2, -1.18);
    g.add(shelf);

    const giftColors = [0x8f1f28, 0x1f5134, 0xc3a24a, 0x2d4268];
    for (let i = 0; i < 5; i++) {
      const sx = -1.25 + i * 0.62;
      const size = 0.28 + (i % 3) * 0.09;
      const box = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(size, size, size), giftMaterial(giftColors[i % 4])),
        false
      );
      box.position.set(sx, 1.0 + size / 2, 0.95);
      g.add(box);
      const ribbon = new THREE.Mesh(
        new THREE.BoxGeometry(size * 0.18, size * 1.02, size * 1.02),
        MAT.gold
      );
      ribbon.position.copy(box.position);
      g.add(ribbon);
    }

    for (let i = 0; i < 9; i++) {
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.055, 5, 4),
        basics({ color: i % 2 ? 0xffc078 : 0xffe6b0, toneMapped: false })
      );
      bulb.position.set(-1.8 + i * 0.45, 2.34, 1.42);
      g.add(bulb);
    }

    const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.34, 0.22), MAT.lampGlass);
    lantern.position.set(0, 2.05, 1.35);
    g.add(lantern);

    if (light) {
      const stallLight = new THREE.PointLight(0xffb066, 12, 8, 2);
      stallLight.position.set(0, 2.1, 1.9);
      g.add(stallLight);
    }

    this.solid(x, z, 3.9, 2.8, 2.6, rot);
    return g;
  }

  lamp(opts = {}) {
    const { x = 0, z = 0, rot = 0, color = 0xffc07a, light = false, glow = true } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const lit = light === true;
    const lightColor = new THREE.Color(color);

    const plate = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 0.09, 12), MAT.iron));
    plate.position.y = 0.045;
    g.add(plate);

    const base = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.34, 0.38, 12), MAT.iron));
    base.position.y = 0.25;
    g.add(base);

    const baseRing = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.265, 0.032, 6, 16), MAT.brass));
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = 0.43;
    g.add(baseRing);

    const baseSnow = new THREE.Mesh(new THREE.CylinderGeometry(0.43, 0.5, 0.055, 14), MAT.snow);
    baseSnow.position.y = 0.035;
    baseSnow.receiveShadow = true;
    g.add(baseSnow);

    const pole = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.095, 5.15, 12), MAT.iron));
    pole.position.y = 2.85;
    g.add(pole);

    for (const y of [0.55, 2.1, 4.2, 5.4]) {
      const collar = shadow(
        new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.07, 12), MAT.brass),
        false
      );
      collar.position.y = y;
      g.add(collar);
    }

    const armCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 5.4, 0),
      new THREE.Vector3(0.08, 5.54, 0),
      new THREE.Vector3(0.34, 5.61, 0),
      new THREE.Vector3(0.65, 5.53, 0),
      new THREE.Vector3(0.86, 5.31, 0),
      new THREE.Vector3(0.95, 5.12, 0),
    ]);
    const arm = shadow(
      new THREE.Mesh(new THREE.TubeGeometry(armCurve, 18, 0.045, 7, false), MAT.iron)
    );
    g.add(arm);

    const brace = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.045, 0.045), MAT.iron));
    brace.position.set(0.3, 5.17, 0);
    brace.rotation.z = -0.55;
    g.add(brace);

    const armSnow = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.055, 0.1), MAT.snow);
    armSnow.position.set(0.42, 5.52, 0);
    armSnow.rotation.z = -0.17;
    armSnow.receiveShadow = true;
    g.add(armSnow);

    const lx = 0.95;
    const ly = 4.82;

    const glass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.21, 0.25, 0.58, 6),
      lit ? MAT.lampGlass : MAT.lampGlassOff
    );
    glass.position.set(lx, ly, 0);
    g.add(glass);

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const post = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.64, 0.028), MAT.iron),
        false
      );
      post.position.set(lx + Math.cos(angle) * 0.245, ly, Math.sin(angle) * 0.245);
      g.add(post);
    }

    for (const y of [ly - 0.31, ly + 0.31]) {
      const ring = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.065, 6), MAT.iron));
      ring.position.set(lx, y, 0);
      g.add(ring);
    }

    const cap = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.22, 6), MAT.iron));
    cap.position.set(lx, ly + 0.42, 0);
    g.add(cap);

    const snowCap = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.14, 6), MAT.snow);
    snowCap.position.set(lx, ly + 0.48, 0);
    snowCap.receiveShadow = true;
    g.add(snowCap);

    const finial = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.2, 6), MAT.brass));
    finial.position.set(lx, ly + 0.59, 0);
    g.add(finial);

    for (let i = 0; i < 4; i++) {
      const icicle = new THREE.Mesh(
        new THREE.ConeGeometry(0.035 + (i % 2) * 0.012, 0.22 + (i % 3) * 0.08, 5),
        MAT.ice
      );
      icicle.position.set(lx - 0.16 + i * 0.11, ly - 0.44, 0.05 - (i % 2) * 0.1);
      icicle.rotation.x = Math.PI;
      g.add(icicle);
    }

    const halos = [];
    if (glow && lit) {
      const core = new THREE.Sprite(glowSpriteMaterial(color, 0.86));
      core.scale.set(1.5, 1.5, 1);
      core.position.set(lx, ly + 0.02, 0);
      g.add(core);
      halos.push(core);

      const halo = new THREE.Sprite(glowSpriteMaterial(color, 0.3));
      halo.scale.set(5.1, 5.1, 1);
      halo.position.set(lx, ly, 0);
      g.add(halo);
      halos.push(halo);
    }

    let lightObj = null;
    let pool = null;
    let beam = null;
    if (lit) {
      lightObj = new THREE.PointLight(color, 42, 22, 2);
      lightObj.position.set(lx, ly + 0.08, 0);
      g.add(lightObj);

      const beamMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.03,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
        toneMapped: false,
      });
      beam = new THREE.Mesh(new THREE.ConeGeometry(1.9, 4.55, 18, 1, true), beamMat);
      beam.position.set(lx, ly - 2.27, 0);
      beam.renderOrder = 2;
      g.add(beam);

      const poolMat = new THREE.MeshBasicMaterial({
        map: T.glow,
        color: lightColor,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      pool = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 6.2), poolMat);
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(lx, 0.048, 0);
      pool.renderOrder = 1;
      g.add(pool);
    }

    if (lit && lightObj) {
      const phase = Math.random() * 10;
      this.animated.push((t) => {
        const flicker =
          0.94 + Math.sin(t * 2.1 + phase) * 0.035 + Math.sin(t * 7.7 + phase * 1.3) * 0.016;
        lightObj.intensity = 42 * flicker;
        if (halos[0]) halos[0].material.opacity = 0.86 * flicker;
        if (halos[1]) halos[1].material.opacity = 0.3 * flicker;
        if (pool) pool.material.opacity = 0.18 * flicker;
      });
    }

    this.solid(x, z, 0.5, 0.5, 5.7);
    return g;
  }

  snowBanks(size = 44) {
    const sides = [
      { x: 0, z: size, w: size * 2 + 4, d: 4 },
      { x: 0, z: -size, w: size * 2 + 4, d: 4 },
      { x: size, z: 0, w: 4, d: size * 2 + 4 },
      { x: -size, z: 0, w: 4, d: size * 2 + 4 },
    ];
    for (const side of sides) {
      const mound = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(side.w, 1.5, side.d), MAT.snow)
      );
      mound.position.set(side.x, 0.45, side.z);
      this.add(mound);

      const crest = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(side.w * 0.98, 0.8, side.d * 0.65), MAT.snow),
        false
      );
      crest.position.set(side.x, 1.15, side.z);
      this.add(crest);

      this.solid(side.x, side.z, side.w, side.d, 2);
    }
  }

  snowman(opts = {}) {
    const { x = 0, z = 0, rot = 0, scale = 1 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    g.scale.setScalar(scale);
    this.add(g);

    const bottom = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.58, 16, 12), MAT.snow));
    bottom.position.y = 0.56;
    g.add(bottom);
    const middle = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 12), MAT.snow));
    middle.position.y = 1.35;
    g.add(middle);
    const head = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.29, 16, 12), MAT.snow));
    head.position.y = 1.95;
    g.add(head);

    for (const ex of [-0.1, 0.1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.033, 6, 5), MAT.coal);
      eye.position.set(ex, 2.03, 0.26);
      g.add(eye);
    }

    for (let i = 0; i < 3; i++) {
      const button = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 5), MAT.coal);
      button.position.set(0, 1.5 - i * 0.18, 0.38 - i * 0.02);
      g.add(button);
    }

    const nose = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.32, 7), MAT.carrot));
    nose.position.set(0, 1.94, 0.42);
    nose.rotation.x = Math.PI / 2;
    g.add(nose);

    const hatBrim = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.06, 14), MAT.coal));
    hatBrim.position.y = 2.2;
    g.add(hatBrim);
    const hat = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.4, 14), MAT.coal));
    hat.position.y = 2.42;
    g.add(hat);

    const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.07, 8, 16), MAT.fabricRed);
    scarf.position.y = 1.68;
    scarf.rotation.x = Math.PI / 2;
    g.add(scarf);

    for (const side of [-1, 1]) {
      const arm = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.95, 5), MAT.woodDark));
      arm.position.set(side * 0.62, 1.5, 0);
      arm.rotation.z = side * 1.15;
      g.add(arm);
    }

    this.solid(x, z, 1.1 * scale, 1.1 * scale, 2);
    return g;
  }

  gift(opts = {}) {
    const { x = 0, z = 0, y = 0, size = 0.7, color = 0x93232b, rot = 0, collide = false } = opts;
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rot;
    this.add(g);

    const body = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(size, size, size), giftMaterial(color))
    );
    body.position.y = size / 2;
    g.add(body);

    const ribbonA = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(size * 0.16, size * 1.01, size * 1.01), MAT.gold),
      false
    );
    ribbonA.position.y = size / 2;
    const ribbonB = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(size * 1.01, size * 1.01, size * 0.16), MAT.gold),
      false
    );
    ribbonB.position.y = size / 2;
    g.add(ribbonA, ribbonB);

    if (collide) this.solid(x, z, size, size, size, rot);
    return g;
  }

  bench(opts = {}) {
    const { x = 0, z = 0, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    for (const lx of [-0.65, 0.65]) {
      const leg = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.48), MAT.iron));
      leg.position.set(lx, 0.27, 0);
      g.add(leg);
    }

    const seat = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.12, 0.55), MAT.wood));
    seat.position.y = 0.58;
    g.add(seat);
    const back = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.12, 0.5), MAT.wood));
    back.position.set(0, 0.98, -0.3);
    back.rotation.x = -0.2;
    g.add(back);

    const snow = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.08, 0.52), MAT.snow);
    snow.position.y = 0.68;
    g.add(snow);

    this.solid(x, z, 1.9, 0.9, 1.2, rot);
    return g;
  }

  hedge(opts = {}) {
    const { x = 0, z = 0, w = 2, d = 7, h = 1.7, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), MAT.pineDark));
    body.position.y = h / 2;
    g.add(body);

    const snow = new THREE.Mesh(new THREE.BoxGeometry(w * 0.95, 0.14, d * 0.98), MAT.snow);
    snow.position.y = h + 0.02;
    g.add(snow);

    this.solid(x, z, w, d, h, rot);
    return g;
  }

  ironFence(x1, z1, x2, z2, opts = {}) {
    const { height = 2.4, colorMat = MAT.iron } = opts;
    const dx = x2 - x1;
    const dz = z2 - z1;
    const length = Math.hypot(dx, dz);
    const mx = (x1 + x2) / 2;
    const mz = (z1 + z2) / 2;
    const angle = Math.atan2(-dz, dx);

    const g = new THREE.Group();
    g.position.set(mx, 0, mz);
    g.rotation.y = angle;
    this.add(g);

    const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(length, 0.35, 0.36), MAT.stoneWall));
    base.position.y = 0.17;
    g.add(base);

    const count = Math.max(2, Math.floor(length / 0.32));
    const barGeo = new THREE.CylinderGeometry(0.032, 0.032, height, 6);
    const bars = new THREE.InstancedMesh(barGeo, colorMat, count);
    bars.castShadow = true;
    for (let i = 0; i < count; i++) {
      dummy.position.set(-length / 2 + (i + 0.5) * (length / count), height / 2 + 0.3, 0);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      bars.setMatrixAt(i, dummy.matrix);
    }
    bars.instanceMatrix.needsUpdate = true;
    g.add(bars);

    for (const ry of [height * 0.22 + 0.3, height * 0.78 + 0.3]) {
      const rail = shadow(new THREE.Mesh(new THREE.BoxGeometry(length, 0.06, 0.07), colorMat));
      rail.position.set(0, ry, 0);
      g.add(rail);
    }

    const spikeGeo = new THREE.ConeGeometry(0.06, 0.22, 5);
    const spikes = new THREE.InstancedMesh(spikeGeo, colorMat, count);
    for (let i = 0; i < count; i++) {
      dummy.position.set(-length / 2 + (i + 0.5) * (length / count), height + 0.42, 0);
      dummy.updateMatrix();
      spikes.setMatrixAt(i, dummy.matrix);
    }
    spikes.instanceMatrix.needsUpdate = true;
    g.add(spikes);

    const minX = Math.min(x1, x2) - 0.25;
    const maxX = Math.max(x1, x2) + 0.25;
    const minZ = Math.min(z1, z2) - 0.25;
    const maxZ = Math.max(z1, z2) + 0.25;
    this.colliders.push({ minX, maxX, minZ, maxZ, height: height + 0.5 });

    return g;
  }

  fountain(opts = {}) {
    const { x = 0, z = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    this.add(g);

    const basin = shadow(new THREE.Mesh(new THREE.CylinderGeometry(4.1, 4.3, 0.7, 32), MAT.stoneWall));
    basin.position.y = 0.35;
    g.add(basin);

    const rim = shadow(new THREE.Mesh(new THREE.TorusGeometry(3.9, 0.32, 10, 40), MAT.stoneWall));
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.7;
    g.add(rim);

    const ice = new THREE.Mesh(new THREE.CircleGeometry(3.75, 48), MAT.ice);
    ice.rotation.x = -Math.PI / 2;
    ice.position.y = 0.71;
    ice.receiveShadow = true;
    g.add(ice);

    const pedestal = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.8, 1.6, 12), MAT.stoneWall));
    pedestal.position.y = 1.4;
    g.add(pedestal);

    const sculpture = shadow(new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 0), MAT.ice));
    sculpture.position.y = 3.1;
    sculpture.rotation.set(0.4, 0.8, 0.2);
    g.add(sculpture);

    const snow = new THREE.Mesh(new THREE.CylinderGeometry(4.05, 4.12, 0.08, 32), MAT.snow);
    snow.position.y = 0.74;
    g.add(snow);

    const glowLight = new THREE.PointLight(0x9fd0ff, 12, 12, 2);
    glowLight.position.set(0, 2.6, 0);
    g.add(glowLight);

    this.solid(x, z, 8.6, 8.6, 3);
    return g;
  }

  iceSculpture(opts = {}) {
    const { x = 0, z = 0, scale = 1 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    this.add(g);

    const plinth = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.0, 1.4), MAT.stoneWall));
    plinth.position.y = 0.5;
    g.add(plinth);

    const shardA = shadow(new THREE.Mesh(new THREE.OctahedronGeometry(0.8, 0), MAT.ice));
    shardA.position.y = 2.0;
    shardA.rotation.set(0.3, 0.5, 0.15);
    shardA.scale.set(0.8, 1.9, 0.8);
    g.add(shardA);

    const shardB = shadow(new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), MAT.ice));
    shardB.position.set(0.7, 2.6, -0.2);
    shardB.rotation.z = 0.3;
    shardB.scale.set(0.6, 1.7, 0.6);
    g.add(shardB);

    const baseSnow = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.14, 12), MAT.snow);
    baseSnow.position.y = 0.04;
    g.add(baseSnow);

    this.solid(x, z, 1.6 * scale, 1.6 * scale, 3);
    return g;
  }

  car(opts = {}) {
    const {
      x = 0,
      z = 0,
      rot = 0,
      color = 0x2a3a4a,
      collide = true,
      headlights = true,
    } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const paint = std({ color, metalness: 0.62, roughness: 0.26, envMapIntensity: 1.25 });
    const trim = std({ color: 0x14181d, metalness: 0.55, roughness: 0.42 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x0b0c0e, roughness: 0.96 });
    const rimMat = std({ color: 0xb8c2cd, metalness: 0.92, roughness: 0.22 });

    const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.42, 4.18), paint));
    body.position.y = 0.61;
    g.add(body);

    const nose = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.24, 0.78), paint));
    nose.position.set(0, 0.87, 1.64);
    g.add(nose);

    const boot = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 0.72), paint));
    boot.position.set(0, 0.86, -1.64);
    g.add(boot);

    const cabin = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.58, 1.86), MAT.glassDark));
    cabin.position.set(0, 1.16, -0.08);
    g.add(cabin);

    const roof = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.11, 1.74), paint));
    roof.position.set(0, 1.5, -0.08);
    g.add(roof);

    const windshield = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(1.47, 0.46, 0.055), MAT.glassDark)
    );
    windshield.position.set(0, 1.16, 0.88);
    windshield.rotation.x = -0.34;
    g.add(windshield);

    const rearGlass = shadow(
      new THREE.Mesh(new THREE.BoxGeometry(1.44, 0.42, 0.055), MAT.glassDark)
    );
    rearGlass.position.set(0, 1.17, -1.02);
    rearGlass.rotation.x = 0.34;
    g.add(rearGlass);

    for (const side of [-1, 1]) {
      const pillar = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.08), paint));
      pillar.position.set(side * 0.8, 1.17, -0.08);
      g.add(pillar);

      const mirror = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.09, 0.07), trim));
      mirror.position.set(side * 1.02, 1.08, 0.72);
      g.add(mirror);
    }

    for (const side of [-1, 1]) {
      for (const wz of [-1.36, 1.36]) {
        const tire = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.24, 18), tireMat));
        tire.rotation.z = Math.PI / 2;
        tire.position.set(side * 0.93, 0.36, wz);
        g.add(tire);

        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.195, 0.195, 0.255, 12), rimMat);
        rim.rotation.z = Math.PI / 2;
        rim.position.set(side * 0.94, 0.36, wz);
        g.add(rim);
      }
    }

    const frontBumper = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.96, 0.16, 0.2), trim));
    frontBumper.position.set(0, 0.42, 2.13);
    g.add(frontBumper);
    const rearBumper = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.94, 0.15, 0.18), trim));
    rearBumper.position.set(0, 0.43, -2.13);
    g.add(rearBumper);

    const grille = new THREE.Mesh(
      new THREE.BoxGeometry(1.04, 0.2, 0.075),
      new THREE.MeshStandardMaterial({ color: 0x101418, metalness: 0.65, roughness: 0.34 })
    );
    grille.position.set(0, 0.66, 2.13);
    g.add(grille);

    const plate = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 0.14, 0.03),
      new THREE.MeshBasicMaterial({ color: 0xc9d0b9 })
    );
    plate.position.set(0, 0.48, 2.23);
    g.add(plate);

    for (const lx of [-0.66, 0.66]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.06), MAT.headlight);
      head.position.set(lx, 0.79, 2.2);
      g.add(head);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.06), MAT.taillight);
      tail.position.set(lx, 0.81, -2.2);
      g.add(tail);

      if (headlights) {
        const glow = new THREE.Sprite(glowSpriteMaterial(0xffe3af, 0.5));
        glow.scale.set(0.92, 0.92, 1);
        glow.position.set(lx, 0.79, 2.28);
        g.add(glow);
      }
    }

    const roofSnow = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.57, 0.11, 1.7), MAT.snow), false);
    roofSnow.position.set(0, 1.58, -0.08);
    g.add(roofSnow);

    const hoodSnow = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.08, 0.74), MAT.snow), false);
    hoodSnow.position.set(0, 0.99, 1.62);
    g.add(hoodSnow);

    const bootSnow = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.07, 0.62), MAT.snow), false);
    bootSnow.position.set(0, 0.97, -1.62);
    g.add(bootSnow);

    if (collide) this.solid(x, z, 2.1, 4.45, 1.9, rot);
    return g;
  }

  movingCar(opts = {}) {
    const {
      axis = 'z',
      lane = 6,
      start = 0,
      min = -110,
      max = 110,
      speed = 8,
      dir = 1,
      color = 0x2a3a4a,
    } = opts;

    const rot =
      axis === 'z'
        ? dir > 0
          ? 0
          : Math.PI
        : dir > 0
          ? Math.PI / 2
          : -Math.PI / 2;
    const group = this.car({
      x: axis === 'z' ? lane : start,
      z: axis === 'z' ? start : lane,
      rot,
      color,
      collide: false,
      headlights: true,
    });
    const car = { group, axis, lane, pos: start, min, max, speed, dir, cooldown: 0 };
    this.traffic.push(car);
    return car;
  }

  crosswalk(opts = {}) {
    const { x = 0, z = 0, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    for (let i = -3; i <= 3; i++) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.02, 3.8), MAT.roadLine);
      stripe.position.set(i * 1.0, 0.038, 0);
      stripe.receiveShadow = true;
      g.add(stripe);
    }

    return g;
  }

  trafficLight(opts = {}) {
    const { x = 0, z = 0, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const pole = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 4.8, 10), MAT.iron));
    pole.position.y = 2.4;
    g.add(pole);

    const arm = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.12), MAT.iron));
    arm.position.set(0.72, 4.55, 0);
    g.add(arm);

    const backplate = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.56, 1.2, 0.055), MAT.iron));
    backplate.position.set(1.4, 4.25, -0.2);
    g.add(backplate);

    const housing = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.05, 0.36), MAT.iron));
    housing.position.set(1.4, 4.25, 0);
    g.add(housing);

    const lensColors = [0xff4c3a, 0xffb34a, 0x5dff9c];
    const lensY = [4.55, 4.25, 3.95];
    const lenses = [];
    const glows = [];
    lensColors.forEach((lensColor, i) => {
      const lens = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 10, 8),
        new THREE.MeshBasicMaterial({ color: lensColor, toneMapped: false })
      );
      lens.position.set(1.4, lensY[i], 0.2);
      g.add(lens);
      lenses.push(lens);

      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.022, 5, 14), MAT.iron);
      rim.position.set(1.4, lensY[i], 0.22);
      g.add(rim);

      const glow = new THREE.Sprite(glowSpriteMaterial(lensColor, 0.78));
      glow.scale.set(0.82, 0.82, 1);
      glow.position.set(1.4, lensY[i], 0.34);
      g.add(glow);
      glows.push(glow);
    });

    const housingSnow = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.06, 0.4), MAT.snow);
    housingSnow.position.set(1.4, 4.8, 0);
    housingSnow.receiveShadow = true;
    g.add(housingSnow);

    const offset = Math.random();
    this.animated.push((t) => {
      const phase = (t * 0.17 + offset) % 1;
      const states = [phase < 0.44, phase >= 0.44 && phase < 0.57, phase >= 0.57];
      lenses.forEach((lens, i) => {
        lens.visible = states[i];
        glows[i].visible = states[i];
      });
    });

    this.solid(x, z, 0.5, 0.5, 4.8);
    return g;
  }

  hydrant(opts = {}) {
    const { x = 0, z = 0, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const base = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.22, 10), MAT.hydrantRed));
    base.position.y = 0.11;
    g.add(base);
    const body = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.56, 10), MAT.hydrantRed));
    body.position.y = 0.5;
    g.add(body);
    const cap = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 7), MAT.hydrantRed));
    cap.position.y = 0.84;
    g.add(cap);
    for (const side of [-1, 1]) {
      const nozzle = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.18, 8), MAT.metal));
      nozzle.rotation.z = Math.PI / 2;
      nozzle.position.set(side * 0.2, 0.58, 0);
      g.add(nozzle);
    }

    this.solid(x, z, 0.5, 0.5, 1);
    return g;
  }

  neon(opts = {}) {
    const { x = 0, y = 4, z = 0, rot = 0, text = 'NOEL', color = '#ffb46a', width = 5 } = opts;
    const height = width / 3.2;
    const tex = makeTextTexture(text, color);

    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rot;
    this.add(g);

    const back = shadow(new THREE.Mesh(new THREE.BoxGeometry(width + 0.4, height + 0.35, 0.12), MAT.iron), false);
    g.add(back);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      basics({ map: tex, transparent: true, toneMapped: false, depthWrite: false, side: THREE.DoubleSide })
    );
    plane.position.z = 0.08;
    g.add(plane);

    const halo = new THREE.Sprite(glowSpriteMaterial(new THREE.Color(color).getHex(), 0.28));
    halo.scale.set(width * 1.1, height * 2.4, 1);
    halo.position.z = 0.4;
    g.add(halo);

    return g;
  }

  candyCane(opts = {}) {
    const { x = 0, z = 0, scale = 1, rot = 0 } = opts;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 2.4, 0),
      new THREE.Vector3(0, 4.7, 0),
      new THREE.Vector3(-0.15, 5.6, 0),
      new THREE.Vector3(-0.85, 5.9, 0),
      new THREE.Vector3(-1.55, 5.55, 0),
      new THREE.Vector3(-1.75, 4.9, 0),
    ]);
    const tube = shadow(new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.26, 10, false), MAT.candy));
    tube.position.set(x, 0, z);
    tube.rotation.y = rot;
    tube.scale.setScalar(scale);
    this.add(tube);

    const snow = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 0.14, 10), MAT.snow);
    snow.position.set(x, 0.06, z);
    snow.scale.setScalar(scale);
    this.add(snow);

    this.solid(x, z, 0.9 * scale, 0.9 * scale, 5);
    return tube;
  }

  bonfire(opts = {}) {
    const { x = 0, z = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    this.add(g);

    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const stone = shadow(new THREE.Mesh(new THREE.DodecahedronGeometry(0.32, 0), MAT.stoneWall));
      stone.position.set(Math.cos(a) * 1.3, 0.2, Math.sin(a) * 1.3);
      stone.scale.set(1, 0.7, 1);
      stone.rotation.set(i, i * 2, i);
      g.add(stone);
    }

    for (let i = 0; i < 5; i++) {
      const log = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 1.8, 7), MAT.woodDark));
      log.rotation.z = Math.PI / 2;
      log.rotation.y = (i / 5) * Math.PI;
      log.position.y = 0.42;
      g.add(log);
    }

    const flames = [];
    for (let i = 0; i < 4; i++) {
      const geo = new THREE.ConeGeometry(0.45 - i * 0.07, 1.5 + i * 0.25, 7);
      const flame = new THREE.Mesh(geo, i < 2 ? MAT.flame : MAT.flameCore);
      flame.position.set((i - 1.5) * 0.18, 1.0 + i * 0.18, (i % 2) * 0.14);
      g.add(flame);
      flames.push(flame);
    }

    const light = new THREE.PointLight(0xff8a3a, 46, 20, 2);
    light.position.set(0, 2.2, 0);
    g.add(light);

    const glow = new THREE.Sprite(glowSpriteMaterial(0xff9648, 0.7));
    glow.scale.set(6, 5, 1);
    glow.position.y = 1.7;
    g.add(glow);

    const emberCount = 30;
    const emberGeo = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    const emberSeeds = [];
    for (let i = 0; i < emberCount; i++) {
      emberSeeds.push({ t: Math.random(), speed: 0.3 + Math.random() * 0.5, a: Math.random() * Math.PI * 2 });
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    const embers = new THREE.Points(
      emberGeo,
      new THREE.PointsMaterial({ color: 0xffab5c, size: 0.08, transparent: true, opacity: 0.9, depthWrite: false })
    );
    g.add(embers);

    this.animated.push((t) => {
      light.intensity = 42 + Math.sin(t * 11.3) * 7 + Math.sin(t * 23.7) * 4;
      flames.forEach((flame, i) => {
        const pulse = 0.82 + Math.sin(t * (9 + i * 2.4) + i) * 0.18;
        flame.scale.set(pulse, 0.9 + Math.sin(t * (7 + i) + i) * 0.16, pulse);
        flame.rotation.y = t * (0.6 + i * 0.4);
      });
      for (let i = 0; i < emberCount; i++) {
        const seed = emberSeeds[i];
        const p = (t * seed.speed + seed.t) % 1;
        emberPositions[i * 3] = Math.cos(seed.a + p * 2) * (0.4 + p * 1.2);
        emberPositions[i * 3 + 1] = 0.9 + p * 5;
        emberPositions[i * 3 + 2] = Math.sin(seed.a + p * 2) * (0.4 + p * 1.2);
      }
      emberGeo.attributes.position.needsUpdate = true;
    });

    this.solid(x, z, 3.0, 3.0, 2);
    return g;
  }

  torch(opts = {}) {
    const { x = 0, z = 0, y = 2.3, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const pole = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, y + 0.6, 6), MAT.iron));
    pole.position.y = (y + 0.6) / 2;
    g.add(pole);

    const bowl = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.2, 0.32, 8), MAT.iron));
    bowl.position.y = y + 0.3;
    g.add(bowl);

    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.9, 7), MAT.flame);
    flame.position.y = y + 0.85;
    g.add(flame);

    const core = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.5, 6), MAT.flameCore);
    core.position.y = y + 0.75;
    g.add(core);

    const light = new THREE.PointLight(0xff9548, 22, 17, 2);
    light.position.y = y + 1.1;
    g.add(light);

    const glow = new THREE.Sprite(glowSpriteMaterial(0xff9f54, 0.55));
    glow.scale.set(3.4, 3.4, 1);
    glow.position.y = y + 1.0;
    g.add(glow);

    const phase = Math.random() * 10;
    this.animated.push((t) => {
      light.intensity = 20 + Math.sin(t * 12 + phase) * 5;
      flame.scale.y = 0.86 + Math.sin(t * 9 + phase) * 0.14;
      flame.rotation.y = t * 0.8;
    });

    this.solid(x, z, 0.6, 0.6, 2);
    return g;
  }

  statue(opts = {}) {
    const { x = 0, z = 0, rot = 0, scale = 1 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    g.scale.setScalar(scale);
    this.add(g);

    const base = shadow(new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.35, 1.2, 8), MAT.stoneWall));
    base.position.y = 0.6;
    g.add(base);

    const robe = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.9, 3.0, 8), MAT.statueStone));
    robe.position.y = 2.7;
    g.add(robe);

    const torso = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 1.1, 8), MAT.statueStone));
    torso.position.y = 3.7;
    g.add(torso);

    const head = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.36, 12, 10), MAT.statueStone));
    head.position.y = 4.55;
    g.add(head);

    for (const side of [-1, 1]) {
      const horn = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.9, 6), MAT.statueStone));
      horn.position.set(side * 0.26, 5.05, 0);
      horn.rotation.z = -side * 0.5;
      g.add(horn);

      const arm = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 1.5, 6), MAT.statueStone));
      arm.position.set(side * 0.72, 3.4, 0.2);
      arm.rotation.z = side * 0.55;
      g.add(arm);
    }

    const baseSnow = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.35, 0.14, 10), MAT.snow);
    baseSnow.position.y = 1.2;
    g.add(baseSnow);

    this.solid(x, z, 2.2, 2.2, 4);
    return g;
  }

  deadTree(opts = {}) {
    const { x = 0, z = 0, scale = 1 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    this.add(g);

    const trunk = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.42, 5.2, 10), MAT.bark));
    trunk.position.y = 2.6;
    g.add(trunk);

    const branches = [
      { y: 2.0, a: 0.9, len: 2.1 },
      { y: 2.8, a: 2.5, len: 1.8 },
      { y: 3.5, a: 4.6, len: 1.6 },
      { y: 4.2, a: 5.8, len: 1.2 },
      { y: 4.6, a: 1.9, len: 1.0 },
    ];
    for (const b of branches) {
      const branch = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.12, b.len, 6), MAT.bark));
      branch.position.set(Math.cos(b.a) * b.len * 0.35, b.y, Math.sin(b.a) * b.len * 0.35);
      branch.rotation.z = 1.2;
      branch.rotation.y = b.a;
      g.add(branch);
    }

    this.solid(x, z, 0.9 * scale, 0.9 * scale, 5);
    return g;
  }

  conveyor(opts = {}) {
    const { x = 0, z = 0, length = 24, rot = 0 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    this.add(g);

    const frame = shadow(new THREE.Mesh(new THREE.BoxGeometry(length, 0.75, 1.8), MAT.metal));
    frame.position.y = 0.42;
    g.add(frame);

    const belt = new THREE.Mesh(new THREE.BoxGeometry(length - 0.4, 0.08, 1.45), MAT.coal);
    belt.position.y = 0.84;
    belt.receiveShadow = true;
    g.add(belt);

    for (const lx of [-length * 0.4, length * 0.4]) {
      const leg = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.55, 1.6), MAT.iron));
      leg.position.set(lx, 0.22, 0);
      g.add(leg);
    }

    const rollerGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);
    const rollerCount = Math.floor(length / 1.4);
    const rollers = new THREE.InstancedMesh(rollerGeo, MAT.iron, rollerCount);
    for (let i = 0; i < rollerCount; i++) {
      dummy.position.set(-length / 2 + 0.9 + i * 1.4, 0.79, 0);
      dummy.rotation.set(Math.PI / 2, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      rollers.setMatrixAt(i, dummy.matrix);
    }
    rollers.instanceMatrix.needsUpdate = true;
    g.add(rollers);

    const gifts = [];
    const giftColors = [0x8f1f28, 0x1f5134, 0xc3a24a, 0x2d4268, 0x6c1e48];
    for (let i = 0; i < 4; i++) {
      const size = 0.55 + (i % 2) * 0.22;
      const gift = new THREE.Group();
      const body = shadow(
        new THREE.Mesh(new THREE.BoxGeometry(size, size, size), giftMaterial(giftColors[i])),
        false
      );
      body.position.y = size / 2;
      gift.add(body);
      const ribbon = new THREE.Mesh(
        new THREE.BoxGeometry(size * 0.18, size * 1.02, size * 1.02),
        MAT.gold
      );
      ribbon.position.y = size / 2;
      gift.add(ribbon);
      gift.position.set(-length / 2 + 2 + i * 4.5, 0.87, 0);
      g.add(gift);
      gifts.push({ group: gift, offset: i * 4.5 });
    }

    this.animated.push((t) => {
      gifts.forEach((item) => {
        const travel = ((t * 0.9 + item.offset) % (length - 2)) - (length - 2) / 2;
        item.group.position.x = travel;
      });
    });

    this.solid(x, z, length, 2.2, 1.2, rot);
    return g;
  }

  smokestack(opts = {}) {
    const { x = 0, z = 0, height = 16, radius = 1.1 } = opts;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    this.add(g);

    const stack = shadow(new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.75, radius, height, 16), MAT.brick));
    stack.position.y = height / 2;
    g.add(stack);

    for (let i = 1; i < 4; i++) {
      const band = shadow(
        new THREE.Mesh(new THREE.CylinderGeometry(radius * (1 - i * 0.05), radius * (1 - i * 0.05) + 0.04, 0.3, 16), MAT.iron)
      );
      band.position.y = (height / 4) * i;
      g.add(band);
    }

    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 8, 6),
      basics({ color: 0xff3a2a, toneMapped: false })
    );
    beacon.position.y = height + 0.2;
    g.add(beacon);

    const beaconGlow = new THREE.Sprite(glowSpriteMaterial(0xff3a2a, 0.6));
    beaconGlow.scale.set(3, 3, 1);
    beaconGlow.position.y = height + 0.2;
    g.add(beaconGlow);

    const puffs = [];
    for (let i = 0; i < 9; i++) {
      const mat = smokeSpriteMaterial();
      const sprite = new THREE.Sprite(mat);
      sprite.position.set(0, height + 0.5, 0);
      g.add(sprite);
      puffs.push({ sprite, offset: i / 9 });
    }

    const phase = Math.random() * 10;
    this.animated.push((t) => {
      beaconGlow.material.opacity = 0.3 + Math.max(0, Math.sin(t * 2.4 + phase)) * 0.5;
      puffs.forEach((puff) => {
        const p = (t * 0.07 + puff.offset) % 1;
        puff.sprite.position.set(Math.sin(t + puff.offset * 8) * p * 2.4, height + 0.5 + p * 10, Math.cos(t * 0.8 + puff.offset * 5) * p * 2);
        const s = 2.4 + p * 6.5;
        puff.sprite.scale.set(s, s, 1);
        puff.sprite.material.opacity = (1 - p) * 0.32;
      });
    });

    this.solid(x, z, radius * 2.1, radius * 2.1, height);
    return g;
  }

  stringLights(points, opts = {}) {
    const { count = 12, sag = 0.6, radius = 0.055 } = opts;
    if (points.length < 2) return;

    const palette = [0xffdda0, 0xffb266, 0xe25244, 0x8ee29a, 0xfff0c4];
    const total = (points.length - 1) * count;
    const bulbGeo = new THREE.SphereGeometry(radius, 7, 6);
    const bulbMat = basics({ toneMapped: false });
    const bulbs = new THREE.InstancedMesh(bulbGeo, bulbMat, total);
    const sockets = new THREE.InstancedMesh(
      new THREE.CylinderGeometry(0.02, 0.026, 0.06, 5),
      MAT.iron,
      total
    );
    const bulbPositions = [];
    const bulbColors = [];

    const wirePoints = [];
    let index = 0;
    for (let seg = 0; seg < points.length - 1; seg++) {
      const a = points[seg];
      const b = points[seg + 1];
      for (let i = 0; i < count; i++) {
        const t = (i + 0.5) / count;
        const x = a.x + (b.x - a.x) * t;
        const z = a.z + (b.z - a.z) * t;
        const y = a.y + (b.y - a.y) * t - Math.sin(t * Math.PI) * sag;
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(0.9 + (i % 3) * 0.15);
        dummy.updateMatrix();
        bulbs.setMatrixAt(index, dummy.matrix);
        colorHelper.setHex(palette[index % palette.length]);
        bulbs.setColorAt(index, colorHelper);
        bulbPositions.push(new THREE.Vector3(x, y, z));
        bulbColors.push(colorHelper.clone());

        dummy.position.set(x, y + 0.07, z);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        sockets.setMatrixAt(index, dummy.matrix);
        index++;
      }
      for (let i = 0; i <= 14; i++) {
        const t = i / 14;
        wirePoints.push(
          new THREE.Vector3(
            a.x + (b.x - a.x) * t,
            a.y + (b.y - a.y) * t - Math.sin(t * Math.PI) * sag,
            a.z + (b.z - a.z) * t
          )
        );
      }
    }

    bulbs.instanceMatrix.needsUpdate = true;
    if (bulbs.instanceColor) bulbs.instanceColor.needsUpdate = true;
    sockets.instanceMatrix.needsUpdate = true;
    this.add(bulbs, sockets);

    const glowGeo = new THREE.BufferGeometry();
    const glowPositions = new Float32Array(total * 3);
    const glowColors = new Float32Array(total * 3);
    bulbPositions.forEach((p, i) => {
      glowPositions[i * 3] = p.x;
      glowPositions[i * 3 + 1] = p.y;
      glowPositions[i * 3 + 2] = p.z;
      glowColors[i * 3] = bulbColors[i].r;
      glowColors[i * 3 + 1] = bulbColors[i].g;
      glowColors[i * 3 + 2] = bulbColors[i].b;
    });
    glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
    glowGeo.setAttribute('color', new THREE.BufferAttribute(glowColors, 3));
    const glowMat = new THREE.PointsMaterial({
      map: T.glow,
      color: 0xffffff,
      size: 0.42,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      alphaTest: 0.01,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const glow = new THREE.Points(glowGeo, glowMat);
    glow.frustumCulled = false;
    this.add(glow);

    const wire = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(wirePoints),
      new THREE.LineBasicMaterial({ color: 0x111a12, transparent: true, opacity: 0.82 })
    );
    this.add(wire);

    const phase = Math.random() * 10;
    this.animated.push((t) => {
      glowMat.opacity = 0.33 + Math.sin(t * 1.9 + phase) * 0.04;
    });
  }
}
