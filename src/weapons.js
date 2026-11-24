import * as THREE from 'three';
import { MAT } from './props.js';

export const WEAPONS = [
  {
    id: 'knife',
    name: 'KNIFE',
    slot: '1',
    quiet: true,
  },
  {
    id: 'pistol',
    name: 'PISTOL',
    slot: '2',
    magSize: 12,
    reserveMax: 36,
    damage: 1,
    range: 70,
    spread: 0.02,
    aimSpread: 0.0045,
    fireDelay: 0.26,
    reloadTime: 1.25,
  },
  {
    id: 'sniper',
    name: 'SNIPER',
    slot: '3',
    magSize: 5,
    reserveMax: 15,
    damage: 2,
    range: 210,
    spread: 0.045,
    aimSpread: 0.0016,
    fireDelay: 1.05,
    reloadTime: 2.2,
    scopeFov: 24,
  },
];

const gunMetal = new THREE.MeshStandardMaterial({
  color: 0x2b3038,
  metalness: 0.75,
  roughness: 0.34,
});
const gunDark = new THREE.MeshStandardMaterial({
  color: 0x101318,
  metalness: 0.4,
  roughness: 0.62,
});
const gunGrip = new THREE.MeshStandardMaterial({
  color: 0x241c17,
  metalness: 0.08,
  roughness: 0.88,
});

const finishViewmodel = (group) => {
  group.traverse((child) => {
    child.frustumCulled = false;
    if (child.material) child.material.envMapIntensity = 0.9;
  });
  return group;
};

export function createPistol() {
  const group = new THREE.Group();

  const slide = new THREE.Mesh(new THREE.BoxGeometry(0.105, 0.078, 0.34), gunMetal);
  slide.position.set(0, 0.055, -0.105);
  group.add(slide);

  const slideRail = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.016, 0.31), gunDark);
  slideRail.position.set(0, 0.102, -0.105);
  group.add(slideRail);

  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.052, 0.21), gunDark);
  frame.position.set(0, 0.0, -0.06);
  group.add(frame);

  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.09, 12), gunMetal);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.045, -0.31);
  group.add(barrel);

  const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.03, 12), gunDark);
  muzzle.rotation.x = Math.PI / 2;
  muzzle.position.set(0, 0.045, -0.365);
  group.add(muzzle);

  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.23, 0.115), gunGrip);
  grip.position.set(0, -0.115, 0.035);
  grip.rotation.x = 0.2;
  group.add(grip);

  const gripPanel = new THREE.Mesh(new THREE.BoxGeometry(0.088, 0.13, 0.075), gunDark);
  gripPanel.position.set(0, -0.12, 0.045);
  gripPanel.rotation.x = 0.2;
  group.add(gripPanel);

  const triggerGuard = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.009, 6, 14, Math.PI), gunMetal);
  triggerGuard.rotation.set(Math.PI / 2, 0, Math.PI);
  triggerGuard.position.set(0, -0.042, -0.06);
  group.add(triggerGuard);

  for (const side of [-1, 1]) {
    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.026, 0.02), gunDark);
    sight.position.set(side * 0.038, 0.114, 0.02);
    group.add(sight);
  }

  const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.024, 0.018), gunDark);
  frontSight.position.set(0, 0.116, -0.255);
  group.add(frontSight);

  return finishViewmodel(group);
}

export function createSniper() {
  const group = new THREE.Group();

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.085, 0.98), gunDark);
  body.position.set(0, 0, -0.4);
  group.add(body);

  const upper = new THREE.Mesh(new THREE.BoxGeometry(0.062, 0.035, 0.82), gunMetal);
  upper.position.set(0, 0.058, -0.42);
  group.add(upper);

  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.021, 0.026, 0.66, 12), gunMetal);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.012, -1.02);
  group.add(barrel);

  const muzzleBrake = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.033, 0.1, 12), gunDark);
  muzzleBrake.rotation.x = Math.PI / 2;
  muzzleBrake.position.set(0, 0.012, -1.42);
  group.add(muzzleBrake);

  const stock = new THREE.Mesh(new THREE.BoxGeometry(0.095, 0.15, 0.36), gunGrip);
  stock.position.set(0, -0.045, 0.27);
  group.add(stock);

  const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.05, 0.2), gunGrip);
  cheek.position.set(0, 0.075, 0.2);
  group.add(cheek);

  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.17, 0.1), gunGrip);
  grip.position.set(0, -0.105, 0.0);
  grip.rotation.x = 0.24;
  group.add(grip);

  const mag = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.12, 0.14), gunMetal);
  mag.position.set(0, -0.088, -0.24);
  group.add(mag);

  const scopeBody = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.4, 16), gunDark);
  scopeBody.rotation.x = Math.PI / 2;
  scopeBody.position.set(0, 0.145, -0.34);
  group.add(scopeBody);

  const scopeFront = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.055, 0.1, 16), gunMetal);
  scopeFront.rotation.x = Math.PI / 2;
  scopeFront.position.set(0, 0.145, -0.58);
  group.add(scopeFront);

  const scopeRear = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.066, 0.08, 16), gunMetal);
  scopeRear.rotation.x = Math.PI / 2;
  scopeRear.position.set(0, 0.145, -0.12);
  group.add(scopeRear);

  const lensMat = new THREE.MeshBasicMaterial({ color: 0x8fb6cf, toneMapped: false });
  const lensFront = new THREE.Mesh(new THREE.CircleGeometry(0.058, 16), lensMat);
  lensFront.position.set(0, 0.145, -0.632);
  group.add(lensFront);

  for (const z of [-0.44, -0.24]) {
    const mount = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.04), gunMetal);
    mount.position.set(0, 0.095, z);
    group.add(mount);
  }

  const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.15, 8), gunMetal);
  bolt.rotation.z = Math.PI / 2;
  bolt.position.set(0.08, 0.03, -0.1);
  group.add(bolt);

  const boltKnob = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), gunMetal);
  boltKnob.position.set(0.16, 0.03, -0.1);
  group.add(boltKnob);

  return finishViewmodel(group);
}
