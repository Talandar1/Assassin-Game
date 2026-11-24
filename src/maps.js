import * as THREE from 'three';
import { MAT } from './props.js';

const pineBorder = (size = 39) => {
  const points = [];
  const count = 26;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + 0.17;
    const r = size - (i % 4) * 1.8;
    points.push({ x: Math.cos(a) * r, z: Math.sin(a) * r, s: 0.85 + ((i * 29) % 60) / 100 });
  }
  return points;
};

export const MAPS = [
  /* ------------------------------------------------------------------ */
  /* 1. Silent Night Square                                             */
  /* ------------------------------------------------------------------ */
  {
    id: 'village',
    name: 'Silent Night Square',
    location: 'Sainte-Claire · French Alps',
    target: 'Viktor Kringle',
    targetTitle: 'The Coal Baron',
    difficulty: 'LOW RISK',
    accent: '#e4c38c',
    fogColor: 0x0b1524,
    fogDensity: 0.012,
    skyTop: 0x040a16,
    skyHorizon: 0x1d2c45,
    moonColor: 0xc2d6ff,
    moonIntensity: 1.7,
    hemiIntensity: 0.55,
    starOpacity: 0.75,
    snow: { speed: 1, windX: 0.35, windZ: 0.15, count: 4200 },
    focus: { x: 0, y: 3.2, z: -1 },
    build(b) {
      b.ground(MAT.groundSnow, 200);
      b.pathCircle(11, 0, 1.5);
      b.pathRect(6, 30, 0, 17);
      b.pathRect(6, 34, 0, 50);
      b.pathRect(4, 36, -40, -6);
      b.pathRect(4, 32, 44, 16);
      b.snowBanks(73);

      b.christmasTree({ x: 0, z: -2, scale: 1.18, bulbs: 130, ornaments: 48 });

      b.house({ x: -22, z: -12, rot: 0.12, lit: true, wall: MAT.plaster, w: 6.8, d: 7.6 });
      b.house({ x: -24, z: 7, rot: -0.18, wall: MAT.plasterWarm, w: 7, d: 8 });
      b.house({ x: 22, z: -14, rot: -0.12, lit: true, wall: MAT.brick, w: 7, d: 7.8 });
      b.house({ x: 23, z: 7, rot: 0.2, wall: MAT.plaster, w: 7.2, d: 8.4 });
      b.house({ x: -7, z: 23, rot: Math.PI, lit: false, wall: MAT.plasterWarm, w: 7, d: 8 });
      b.house({ x: 8, z: 24, rot: Math.PI, wall: MAT.plaster, w: 6.6, d: 8 });

      b.stall({ x: -10, z: 6, rot: 0.35, canopy: MAT.stallRed, light: true });
      b.stall({ x: 10, z: 7, rot: -0.35, canopy: MAT.stallGreen, light: true });
      b.stall({ x: -12, z: -8, rot: 1.15, canopy: MAT.stallGreen, light: false });
      b.stall({ x: 12, z: -9, rot: -1.0, canopy: MAT.stallRed, light: false });

      b.lamp({ x: -7, z: 13, light: true });
      b.lamp({ x: 7, z: 12, light: true });
      b.lamp({ x: -15, z: -3, rot: 2.4 });
      b.lamp({ x: 15, z: -2, rot: -2.4 });

      b.snowman({ x: 18, z: 1, rot: -0.7 });
      b.snowman({ x: -18, z: 15, rot: 0.6, scale: 0.9 });

      b.bench({ x: -4, z: 12, rot: 0.1 });
      b.bench({ x: 4, z: 10, rot: Math.PI });

      b.gift({ x: -1.7, z: 8.2, size: 0.65, color: 0x8f1f28 });
      b.gift({ x: 1.9, z: 8.6, size: 0.5, color: 0x1f5134 });
      b.gift({ x: 2.4, z: 9.2, size: 0.38, color: 0xc3a24a });

      b.stringLights(
        [
          { x: -7, y: 5.3, z: 13 },
          { x: 0, y: 4.9, z: 15.5 },
          { x: 7, y: 5.3, z: 12 },
        ],
        { count: 18, sag: 0.85 }
      );

      b.house({ x: -54, z: -40, rot: 0.3, wall: MAT.plasterWarm, w: 7.4, d: 8.2, lit: true });
      b.house({ x: 55, z: 42, rot: -0.35, wall: MAT.plaster, w: 7.2, d: 8, lit: false });
      b.house({ x: -57, z: 12, rot: 0.22, wall: MAT.brick, w: 7, d: 8 });
      b.house({ x: 56, z: -18, rot: -0.2, wall: MAT.plasterWarm, w: 7.6, d: 8.4, lit: true });

      b.stall({ x: -46, z: -26, rot: 0.45, canopy: MAT.stallGreen, light: true });
      b.stall({ x: 42, z: 30, rot: -0.5, canopy: MAT.stallRed, light: true });
      b.stall({ x: -52, z: 34, rot: 1.1, canopy: MAT.stallRed, light: false });
      b.stall({ x: 52, z: -32, rot: -1.05, canopy: MAT.stallGreen, light: false });

      b.lamp({ x: -40, z: 40, light: true });
      b.lamp({ x: 40, z: -32, light: true });
      b.lamp({ x: -58, z: -18, rot: 1.3 });
      b.lamp({ x: 58, z: 22, rot: -1.3 });
      b.lamp({ x: -32, z: 56, rot: 0.4, light: true });

      b.snowman({ x: -33, z: 48, rot: 0.8 });
      b.snowman({ x: 38, z: -44, rot: -0.5, scale: 0.9 });
      b.bench({ x: -43, z: 40, rot: 0.2 });
      b.bench({ x: 44, z: -30, rot: Math.PI });
      b.gift({ x: -40, z: -20, size: 0.8, color: 0x1f5134 });
      b.gift({ x: 41, z: 36, size: 0.7, color: 0x8f1f28 });

      b.pines([...pineBorder(39), ...pineBorder(71)]);

      return {
        playerSpawn: { x: 0, z: 64, yaw: 0 },
        targetSpawn: { x: 7, z: 4 },
        targetPath: [
          { x: 7, z: 4 },
          { x: 7, z: -8 },
          { x: 0, z: -13 },
          { x: -7, z: -8 },
          { x: -7, z: 4 },
          { x: 0, z: 9 },
        ],
        escape: { x: 60, z: 56 },
        escort: { x: 4.6, z: 6.2 },
        tasks: [
          { type: 'relay', x: -47, z: -33 },
          { type: 'ledger', x: 48, z: 34 },
        ],
        guards: [
          {
            x: -12,
            z: 9,
            path: [
              { x: -12, z: 9 },
              { x: -18, z: 1 },
              { x: -14, z: -9 },
              { x: -6, z: -12 },
            ],
          },
          {
            x: 12,
            z: 9,
            path: [
              { x: 12, z: 9 },
              { x: 18, z: 2 },
              { x: 14, z: -9 },
              { x: 6, z: -13 },
            ],
          },
          {
            x: 0,
            z: -18,
            path: [
              { x: 0, z: -18 },
              { x: -9, z: -20 },
              { x: 0, z: -23 },
              { x: 9, z: -20 },
            ],
          },
          {
            x: -42,
            z: -26,
            path: [
              { x: -42, z: -26 },
              { x: -50, z: -18 },
              { x: -38, z: -14 },
              { x: -34, z: -26 },
            ],
            coat: 0x23302a,
          },
          {
            x: 46,
            z: 30,
            path: [
              { x: 46, z: 30 },
              { x: 54, z: 24 },
              { x: 62, z: 34 },
              { x: 60, z: 50 },
              { x: 46, z: 48 },
            ],
            coat: 0x2d2420,
          },
        ],
      };
    },
  },

  /* ------------------------------------------------------------------ */
  /* 2. Frostwood Estate                                                */
  /* ------------------------------------------------------------------ */
  {
    id: 'estate',
    name: 'Frostwood Estate',
    location: 'Lake Geneva · Switzerland',
    target: 'Helena Frost',
    targetTitle: 'The Winter Widow',
    difficulty: 'GUARDED',
    accent: '#a7c9e8',
    fogColor: 0x101a2b,
    fogDensity: 0.011,
    skyTop: 0x050b18,
    skyHorizon: 0x273a54,
    moonColor: 0xd0e2ff,
    moonIntensity: 1.9,
    hemiIntensity: 0.6,
    starOpacity: 0.85,
    snow: { speed: 0.85, windX: 0.18, windZ: 0.3, count: 3800 },
    focus: { x: 0, y: 3, z: 0 },
    build(b) {
      b.ground(MAT.groundSnow, 200);
      b.pathCircle(5.2, 0, 0);
      b.pathRect(5.5, 22, 0, 16);
      b.pathRect(5.5, 12, 0, -12);
      b.pathRect(5.5, 36, 0, 48);
      b.pathRect(4, 30, -42, 12);
      b.pathRect(4, 30, 42, 12);
      b.snowBanks(73);

      b.mansion({ x: 0, z: -27, w: 30, d: 13, h: 9 });

      b.fountain({ x: 0, z: 0 });

      b.hedge({ x: -9, z: 8, w: 1.8, d: 7 });
      b.hedge({ x: 9, z: 8, w: 1.8, d: 7 });
      b.hedge({ x: -9, z: -8, w: 1.8, d: 7 });
      b.hedge({ x: 9, z: -8, w: 1.8, d: 7 });
      b.hedge({ x: -20, z: -1, w: 7, d: 1.8 });
      b.hedge({ x: 20, z: -1, w: 7, d: 1.8 });

      b.iceSculpture({ x: -7, z: 17, scale: 1.1 });
      b.iceSculpture({ x: 7, z: 17, scale: 1.1 });
      b.iceSculpture({ x: -18, z: 7, scale: 0.9 });
      b.iceSculpture({ x: 18, z: 7, scale: 0.9 });

      b.lamp({ x: -13, z: 13, light: false });
      b.lamp({ x: 13, z: 13, light: false });
      b.lamp({ x: -13, z: -13, light: false });
      b.lamp({ x: 13, z: -13, light: false });

      b.stringLights(
        [
          { x: -13, y: 5.2, z: 13 },
          { x: 13, y: 5.2, z: 13 },
          { x: 13, y: 5.2, z: -13 },
          { x: -13, y: 5.2, z: -13 },
          { x: -13, y: 5.2, z: 13 },
        ],
        { count: 20, sag: 1.1 }
      );

      b.lamp({ x: -5.5, z: 24, light: true });
      b.lamp({ x: 5.5, z: 24, light: true });

      b.bench({ x: -15, z: 19, rot: 0.15 });
      b.bench({ x: 15, z: 19, rot: -0.15 });
      b.bench({ x: 12, z: -16, rot: Math.PI - 0.2 });

      b.house({ x: -56, z: -40, rot: 0.25, wall: MAT.plasterWarm, w: 7.2, d: 8, lit: true });
      b.house({ x: 55, z: 40, rot: -0.3, wall: MAT.plaster, w: 7.4, d: 8.2, lit: false });
      b.house({ x: -58, z: 18, rot: -0.2, wall: MAT.brick, w: 7, d: 8 });
      b.house({ x: 58, z: -16, rot: 0.22, wall: MAT.plasterWarm, w: 7.2, d: 8.4, lit: true });

      b.hedge({ x: -34, z: 28, w: 14, d: 1.8 });
      b.hedge({ x: 34, z: -26, w: 14, d: 1.8 });
      b.hedge({ x: -34, z: -26, w: 12, d: 1.8 });
      b.hedge({ x: 34, z: 30, w: 12, d: 1.8 });

      b.iceSculpture({ x: -48, z: -22, scale: 1.1 });
      b.iceSculpture({ x: 46, z: 22, scale: 1.1 });
      b.iceSculpture({ x: -40, z: 38, scale: 0.9 });
      b.iceSculpture({ x: 40, z: -38, scale: 0.9 });

      b.lamp({ x: -50, z: -24, light: true });
      b.lamp({ x: 50, z: 24, light: true });
      b.lamp({ x: -42, z: 42, rot: 0.6 });
      b.lamp({ x: 42, z: -42, rot: -0.6 });
      b.bench({ x: -42, z: 30, rot: 0.4 });
      b.bench({ x: 42, z: -30, rot: Math.PI - 0.4 });

      b.pines(
        [
          { x: -30, z: -14, s: 1.2 },
          { x: -33, z: 2, s: 1.4 },
          { x: -31, z: 20, s: 1.1 },
          { x: -25, z: 30, s: 1 },
          { x: 30, z: -16, s: 1.3 },
          { x: 33, z: 3, s: 1.4 },
          { x: 30, z: 22, s: 1.1 },
          { x: 23, z: 31, s: 1 },
          { x: -16, z: 37, s: 1.2 },
          { x: 16, z: 37, s: 1.2 },
          { x: -37, z: 28, s: 1.3 },
          { x: 37, z: 29, s: 1.2 },
          { x: -24, z: -26, s: 1.1 },
          { x: 24, z: -26, s: 1.1 },
        ],
        { minScale: 0.9, maxScale: 1.3 }
      );
      b.pines(pineBorder(71));

      return {
        playerSpawn: { x: 0, z: 64, yaw: 0 },
        targetSpawn: { x: 0, z: -9 },
        targetPath: [
          { x: 0, z: -9 },
          { x: 8, z: -7 },
          { x: 13, z: 0 },
          { x: 8, z: 8 },
          { x: 0, z: 11 },
          { x: -8, z: 8 },
          { x: -13, z: 0 },
          { x: -8, z: -7 },
        ],
        escape: { x: -63, z: 58 },
        escort: { x: 2.6, z: -7.6 },
        tasks: [
          { type: 'relay', x: -48, z: -31 },
          { type: 'ledger', x: 46, z: 31 },
        ],
        guards: [
          {
            x: -17,
            z: 12,
            path: [
              { x: -17, z: 12 },
              { x: -22, z: 2 },
              { x: -18, z: -8 },
              { x: -10, z: -14 },
            ],
            coat: 0x223044,
          },
          {
            x: 17,
            z: 12,
            path: [
              { x: 17, z: 12 },
              { x: 22, z: 2 },
              { x: 18, z: -8 },
              { x: 10, z: -14 },
            ],
            coat: 0x223044,
          },
          {
            x: 0,
            z: 10,
            path: [
              { x: -8, z: 12 },
              { x: 0, z: 8 },
              { x: 8, z: 12 },
              { x: 0, z: 16 },
            ],
            coat: 0x1c2a3a,
          },
          {
            x: 0,
            z: -17,
            path: [
              { x: -10, z: -17 },
              { x: 0, z: -15 },
              { x: 10, z: -17 },
              
            ],
            coat: 0x1c2a3a,
          },
          {
            x: -44,
            z: -26,
            path: [
              { x: -44, z: -26 },
              { x: -52, z: -20 },
              { x: -42, z: -14 },
              { x: -34, z: -24 },
            ],
            coat: 0x2b3a4d,
          },
          {
            x: 42,
            z: 24,
            path: [
              { x: 42, z: 24 },
              { x: 50, z: 18 },
              { x: 60, z: 28 },
              { x: 54, z: 34 },
              { x: 44, z: 36 },
            ],
            coat: 0x2b3a4d,
          },
        ],
      };
    },
  },

  /* ------------------------------------------------------------------ */
  /* 3. Neon Noel                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: 'city',
    name: 'Neon Noel',
    location: 'Manhattan · New York',
    target: 'Dominic Marchetti',
    targetTitle: 'The Toy Smuggler',
    difficulty: 'HIGH RISK',
    accent: '#ff9a72',
    fogColor: 0x121725,
    fogDensity: 0.015,
    skyTop: 0x05080f,
    skyHorizon: 0x33253a,
    moonColor: 0xc6d2f0,
    moonIntensity: 1.15,
    hemiIntensity: 0.5,
    starOpacity: 0.25,
    snow: { speed: 1.15, windX: 0.55, windZ: 0.2, count: 4800 },
    focus: { x: 0, y: 4, z: 4 },
    build(b) {
      b.ground(MAT.asphalt, 200);
      b.box(5, 0.2, 150, MAT.sidewalk, -10.5, 0.1, 0, 0, false);
      b.box(5, 0.2, 150, MAT.sidewalk, 10.5, 0.1, 0, 0, false);
      b.snowBanks(73);

      const blocks = [
        { x: -18, z: -28, h: 28, seed: 11, facing: 1, light: false },
        { x: -18, z: -10, h: 34, seed: 12, facing: 1, light: true },
        { x: -18, z: 8, h: 24, seed: 13, facing: 1, light: false },
        { x: -18, z: 26, h: 30, seed: 14, facing: 1, light: false },
        { x: 18, z: -28, h: 30, seed: 15, facing: -1, light: false },
        { x: 18, z: -10, h: 22, seed: 16, facing: -1, light: false },
        { x: 18, z: 8, h: 34, seed: 17, facing: -1, light: true },
        { x: 18, z: 26, h: 26, seed: 18, facing: -1, light: false },
        { x: -18, z: 52, h: 27, seed: 19, facing: 1, light: true },
        { x: 18, z: 52, h: 21, seed: 20, facing: -1, light: false },
        { x: -18, z: -52, h: 31, seed: 21, facing: 1, light: false },
        { x: 18, z: -52, h: 24, seed: 22, facing: -1, light: true },
      ];
      blocks.forEach((block) => {
        b.cityBlock({
          x: block.x,
          z: block.z,
          w: 11,
          d: 14,
          h: block.h,
          seed: block.seed,
          facing: block.facing,
          light: block.light,
        });
      });

      b.neon({ x: -12.3, y: 7.5, z: -10, rot: Math.PI / 2, text: 'NOEL', color: '#ffb277', width: 5.4 });
      b.neon({ x: 12.3, y: 8, z: 8, rot: -Math.PI / 2, text: 'TOYS', color: '#ff8f9c', width: 4.8 });
      b.neon({ x: -12.3, y: 6.5, z: 26, rot: Math.PI / 2, text: 'COCOA', color: '#8fe3b0', width: 5.2 });
      b.neon({ x: 12.3, y: 7, z: -28, rot: -Math.PI / 2, text: 'OPEN', color: '#8fbcff', width: 4.6 });
      b.neon({ x: -12.3, y: 7.2, z: 52, rot: Math.PI / 2, text: 'NORTH', color: '#ffb277', width: 5 });
      b.neon({ x: 12.3, y: 6.8, z: 52, rot: -Math.PI / 2, text: 'SLEIGH', color: '#ff8f9c', width: 5.2 });
      b.neon({ x: -12.3, y: 7.4, z: -52, rot: Math.PI / 2, text: 'MIDNIGHT', color: '#8fbcff', width: 5.6 });
      b.neon({ x: 12.3, y: 6.6, z: -52, rot: -Math.PI / 2, text: 'ICE', color: '#8fe3b0', width: 4 });

      for (let i = 0; i < 24; i++) {
        const z = -70 + i * 6;
        b.box(0.22, 0.02, 2.2, MAT.snow, 0, 0.04, z, 0, false);
      }
      for (let i = 0; i < 7; i++) {
        b.box(0.9, 0.02, 3.2, MAT.snow, -6 + i * 2, 0.04, 17.5, 0, false);
      }

      b.car({ x: -7, z: 23, rot: 0.02, color: 0x1e2b3c });
      b.car({ x: 7, z: 14, rot: Math.PI + 0.01, color: 0x3b2026 });
      b.car({ x: -7, z: 5, rot: -0.02, color: 0x243226 });
      b.car({ x: 7, z: -9, rot: Math.PI, color: 0x2c2c34 });
      b.car({ x: -7, z: -23, rot: 0, color: 0x3a3230 });
      b.car({ x: 7, z: 44, rot: Math.PI + 0.02, color: 0x263442 });
      b.car({ x: -7, z: 58, rot: 0.01, color: 0x3c2a2a });
      b.car({ x: 7, z: -58, rot: Math.PI - 0.01, color: 0x202b2e });
      b.car({ x: -7, z: -68, rot: 0.02, color: 0x322d3a });

      b.lamp({ x: -9.7, z: -20, rot: Math.PI / 2, light: false });
      b.lamp({ x: 9.7, z: -20, rot: -Math.PI / 2, light: false });
      b.lamp({ x: -9.7, z: 0, rot: Math.PI / 2, light: true });
      b.lamp({ x: 9.7, z: 0, rot: -Math.PI / 2, light: true });
      b.lamp({ x: -9.7, z: 20, rot: Math.PI / 2, light: false });
      b.lamp({ x: 9.7, z: 20, rot: -Math.PI / 2, light: false });
      b.lamp({ x: -9.7, z: 44, rot: Math.PI / 2, light: true });
      b.lamp({ x: 9.7, z: 44, rot: -Math.PI / 2, light: false });
      b.lamp({ x: -9.7, z: 64, rot: Math.PI / 2, light: false });
      b.lamp({ x: 9.7, z: 64, rot: -Math.PI / 2, light: true });
      b.lamp({ x: -9.7, z: -44, rot: Math.PI / 2, light: false });
      b.lamp({ x: 9.7, z: -44, rot: -Math.PI / 2, light: true });
      b.lamp({ x: -9.7, z: -64, rot: Math.PI / 2, light: true });
      b.lamp({ x: 9.7, z: -64, rot: -Math.PI / 2, light: false });

      b.christmasTree({ x: -10.5, z: 35, scale: 0.72, bulbs: 70, ornaments: 24 });
      b.christmasTree({ x: 10.5, z: 35, scale: 0.72, bulbs: 70, ornaments: 24 });
      b.christmasTree({ x: -10.5, z: -36, scale: 0.68, bulbs: 60, ornaments: 20 });
      b.christmasTree({ x: 10.5, z: -36, scale: 0.68, bulbs: 60, ornaments: 20 });

      for (const side of [-1, 1]) {
        for (let i = 0; i < 3; i++) {
          b.box(2.1, 0.35, 2.8, MAT.snow, side * 8.4, 0.14, -18 + i * 18, 0, false);
        }
        for (let i = 0; i < 4; i++) {
          b.box(2.2, 0.32, 3.2, MAT.snow, side * 8.4, 0.14, 44 + i * 7, 0, false);
          b.box(2.2, 0.32, 3.2, MAT.snow, side * 8.4, 0.14, -44 - i * 7, 0, false);
        }
      }

      b.pines(pineBorder(72));

      return {
        playerSpawn: { x: 0, z: 68, yaw: 0 },
        targetSpawn: { x: 3.5, z: -10 },
        targetPath: [
          { x: 3.5, z: -10 },
          { x: 3.5, z: 6 },
          { x: 3.5, z: 22 },
          { x: 0, z: 26 },
          { x: -3.5, z: 16 },
          { x: -3.5, z: 0 },
          { x: -3.5, z: -18 },
          { x: 0, z: -28 },
        ],
        escape: { x: 0, z: -72 },
        escort: { x: 1.4, z: -8.2 },
        tasks: [
          { type: 'relay', x: 10.4, z: -55 },
          { type: 'ledger', x: -10.4, z: 55 },
        ],
        guards: [
          {
            x: 10.5,
            z: -16,
            path: [
              { x: 10.5, z: -16 },
              { x: 10.5, z: -2 },
              { x: 10.5, z: 12 },
            ],
            coat: 0x1b2733,
          },
          {
            x: -10.5,
            z: 18,
            path: [
              { x: -10.5, z: 18 },
              { x: -10.5, z: 4 },
              { x: -10.5, z: -10 },
            ],
            coat: 0x252b38,
          },
          {
            x: 10.5,
            z: 12,
            path: [
              { x: 10.5, z: 12 },
              { x: 10.5, z: 2 },
              { x: 10.5, z: 16 },
            ],
            coat: 0x332431,
          },
          {
            x: -10.5,
            z: -26,
            path: [
              { x: -10.5, z: -26 },
              { x: -10.5, z: -6 },
              { x: -4, z: -10 },
            ],
            coat: 0x1f2933,
          },
          {
            x: -11.6,
            z: -52,
            path: [
              { x: -11.6, z: -52 },
              { x: -11.6, z: -68 },
              { x: -11.6, z: -38 },
            ],
            coat: 0x1b2733,
          },
          {
            x: 11.6,
            z: 52,
            path: [
              { x: 11.6, z: 52 },
              { x: 11.6, z: 68 },
              { x: 11.6, z: 40 },
            ],
            coat: 0x252b38,
          },
        ],
      };
    },
  },

  /* ------------------------------------------------------------------ */
  /* 4. Krampusnacht                                                    */
  /* ------------------------------------------------------------------ */
  {
    id: 'krampus',
    name: 'Krampusnacht',
    location: 'The Black Forest · Germany',
    target: 'Baron Albrecht Krampus',
    targetTitle: 'The Collector',
    difficulty: 'SEVERE',
    accent: '#d9846b',
    fogColor: 0x0a0c14,
    fogDensity: 0.018,
    skyTop: 0x03050b,
    skyHorizon: 0x1b1722,
    moonColor: 0xc7d8ff,
    moonIntensity: 1.35,
    hemiIntensity: 0.36,
    starOpacity: 0.9,
    snow: { speed: 0.9, windX: 0.4, windZ: 0.1, count: 3600 },
    focus: { x: -2, y: 3, z: 0 },
    build(b) {
      b.ground(MAT.groundSnow, 200);
      b.pathRect(6, 34, 0, 12);
      b.pathRect(6, 38, 0, 47);
      b.pathCircle(8, -3, 3);
      b.pathRect(4, 30, -44, 4);
      b.pathRect(4, 30, 44, 4);
      b.snowBanks(73);

      b.mansion({ x: 0, z: -29, w: 28, d: 13, h: 10 });

      b.ironFence(-66, 66, -7, 66);
      b.ironFence(7, 66, 66, 66);
      b.ironFence(-66, -66, 66, -66);
      b.ironFence(-66, -66, -66, 66);
      b.ironFence(66, -66, 66, -6);
      b.ironFence(66, 6, 66, 66);

      b.box(0.9, 3.8, 0.9, MAT.stoneWall, 66, 1.9, -6);
      b.box(0.9, 3.8, 0.9, MAT.stoneWall, 66, 1.9, 6);
      b.box(0.9, 3.8, 0.9, MAT.stoneWall, 7, 1.9, 66);
      b.box(0.9, 3.8, 0.9, MAT.stoneWall, -7, 1.9, 66);

      const pond = new THREE.Mesh(new THREE.CircleGeometry(5.8, 48), MAT.ice);
      pond.rotation.x = -Math.PI / 2;
      pond.position.set(-16, 0.035, -9);
      pond.receiveShadow = true;
      b.add(pond);

      const pondRim = new THREE.Mesh(new THREE.TorusGeometry(5.6, 0.35, 8, 40), MAT.stoneWall);
      pondRim.rotation.x = Math.PI / 2;
      pondRim.position.set(-16, 0.2, -9);
      b.add(pondRim);

      b.bonfire({ x: -9, z: 9 });
      b.statue({ x: 10, z: 1, rot: -0.6, scale: 1.05 });
      b.deadTree({ x: -27, z: 18, scale: 1.25 });
      b.deadTree({ x: 27, z: 16, scale: 1.1 });
      b.deadTree({ x: -24, z: -22, scale: 0.95 });
      b.deadTree({ x: 25, z: -20, scale: 1.15 });

      b.torch({ x: -4, z: 18, rot: 0.2 });
      b.torch({ x: 4, z: 18, rot: -0.2 });
      b.torch({ x: -15, z: -2, rot: 0.4 });
      b.torch({ x: 17, z: -2, rot: -0.4 });

      b.iceSculpture({ x: -22, z: -10, scale: 1.2 });
      b.iceSculpture({ x: 21, z: 9, scale: 0.8 });
      b.iceSculpture({ x: -50, z: 42, scale: 1.3 });
      b.iceSculpture({ x: 46, z: -24, scale: 1.1 });

      b.deadTree({ x: -46, z: 28, scale: 1.35 });
      b.deadTree({ x: 44, z: 38, scale: 1.2 });
      b.deadTree({ x: -44, z: -38, scale: 1.15 });
      b.deadTree({ x: 40, z: -46, scale: 1.3 });
      b.torch({ x: -44, z: 42, rot: 0.3 });
      b.torch({ x: 52, z: 32, rot: -0.3 });
      b.torch({ x: 44, z: -36, rot: 0.5 });
      b.torch({ x: -52, z: -28, rot: -0.5 });
      b.statue({ x: -52, z: 16, rot: 0.8, scale: 0.9 });
      b.statue({ x: 50, z: 18, rot: -0.8, scale: 0.9 });

      b.pines(
        [
          { x: -30, z: -15, s: 1.2 },
          { x: -33, z: 5, s: 1.45 },
          { x: -31, z: 28, s: 1.05 },
          { x: -19, z: 35, s: 1.2 },
          { x: 30, z: -12, s: 1.4 },
          { x: 33, z: 6, s: 1.2 },
          { x: 32, z: 27, s: 1.1 },
          { x: 20, z: 34, s: 1.3 },
          { x: -12, z: 36, s: 1.1 },
          { x: 8, z: 35, s: 1.2 },
          { x: -27, z: -26, s: 1.3 },
          { x: 27, z: -26, s: 1.2 },
        ],
        { minScale: 0.9, maxScale: 1.4 }
      );
      b.pines(pineBorder(71));

      return {
        playerSpawn: { x: 0, z: 58, yaw: 0 },
        targetSpawn: { x: 0, z: -10 },
        targetPath: [
          { x: 0, z: -10 },
          { x: 9, z: -4 },
          { x: 11, z: 6 },
          { x: 0, z: 12 },
          { x: -10, z: 6 },
          { x: -10, z: -4 },
        ],
        escape: { x: 60, z: 52 },
        escort: { x: 2.4, z: -8.6 },
        tasks: [
          { type: 'relay', x: -48, z: 38 },
          { type: 'ledger', x: 48, z: -32 },
        ],
        guards: [
          {
            x: -14,
            z: 14,
            path: [
              { x: -14, z: 14 },
              { x: -21, z: 4 },
              { x: -17, z: -6 },
              { x: -7, z: -13 },
            ],
            coat: 0x3a1717,
            hat: 0x121014,
          },
          {
            x: 14,
            z: 14,
            path: [
              { x: 14, z: 14 },
              { x: 21, z: 4 },
              { x: 17, z: -6 },
              { x: 7, z: -13 },
            ],
            coat: 0x3a1717,
            hat: 0x121014,
          },
          {
            x: 0,
            z: 14,
            path: [
              { x: -8, z: 14 },
              { x: 0, z: 12 },
              { x: 8, z: 14 },
              { x: 0, z: 16 },
            ],
            coat: 0x26141a,
            hat: 0x121014,
          },
          {
            x: 0,
            z: -18,
            path: [
              { x: -10, z: -18 },
              { x: 0, z: -16 },
              { x: 10, z: -18 },
              { x: 0, z: -21 },
            ],
            coat: 0x26141a,
            hat: 0x121014,
          },
          {
            x: -42,
            z: 34,
            path: [
              { x: -42, z: 34 },
              { x: -52, z: 30 },
              { x: -56, z: 44 },
              { x: -44, z: 50 },
            ],
            coat: 0x3a1717,
            hat: 0x121014,
          },
          {
            x: 42,
            z: -28,
            path: [
              { x: 42, z: -28 },
              { x: 52, z: -24 },
              { x: 56, z: -40 },
              { x: 44, z: -44 },
            ],
            coat: 0x26141a,
            hat: 0x121014,
          },
        ],
      };
    },
  },

  /* ------------------------------------------------------------------ */
  /* 5. The North Pole Works                                            */
  /* ------------------------------------------------------------------ */
  {
    id: 'workshop',
    name: 'The North Pole Works',
    location: 'Arctic Circle · 90° North',
    target: 'Elias Toymaker',
    targetTitle: 'The Workshop King',
    difficulty: 'EXTREME',
    accent: '#93d8b6',
    fogColor: 0x0e1a24,
    fogDensity: 0.014,
    skyTop: 0x050d15,
    skyHorizon: 0x243947,
    moonColor: 0xcde0ff,
    moonIntensity: 1.7,
    hemiIntensity: 0.52,
    starOpacity: 0.8,
    snow: { speed: 1.2, windX: 0.7, windZ: 0.25, count: 4600 },
    focus: { x: 0, y: 3.5, z: 0 },
    build(b) {
      b.ground(MAT.groundSnow, 200);
      b.pathRect(8, 26, 0, 12);
      b.pathRect(8, 38, 0, 48);
      b.pathRect(4, 32, -42, 8);
      b.pathRect(4, 32, 42, 8);
      b.snowBanks(73);

      b.workshop({ x: 0, z: -29, w: 31, d: 16, h: 12 });
      b.smokestack({ x: -10, z: -31, height: 19, radius: 1.15 });
      b.smokestack({ x: 11, z: -32, height: 22, radius: 1.25 });

      b.conveyor({ x: 0, z: -4, length: 26 });

      b.gift({ x: -14, z: 8, size: 2.3, color: 0x8f1f28, rot: 0.2, collide: true });
      b.gift({ x: 14, z: 8, size: 2.5, color: 0x1f5134, rot: -0.25, collide: true });
      b.gift({ x: 0, z: 14, size: 2.2, color: 0x2d4268, rot: 0.1, collide: true });
      b.gift({ x: -15.8, z: 9.6, size: 1.2, color: 0xc3a24a, collide: true });
      b.gift({ x: 15.9, z: 9.4, size: 1.15, color: 0x8f1f28, collide: true });

      b.candyCane({ x: -7, z: 21, scale: 1.05 });
      b.candyCane({ x: 7, z: 21, scale: 1.05 });
      b.candyCane({ x: -18, z: 1, scale: 0.9 });
      b.candyCane({ x: 18, z: 1, scale: 0.9 });

      b.lamp({ x: -12, z: 24, rot: 0.4, light: true });
      b.lamp({ x: 12, z: 24, rot: -0.4, light: true });
      b.lamp({ x: -20, z: 14, rot: Math.PI / 2, light: false });
      b.lamp({ x: 20, z: 14, rot: -Math.PI / 2, light: false });
      b.lamp({ x: -46, z: 30, rot: Math.PI / 2, light: true });
      b.lamp({ x: 46, z: -32, rot: -Math.PI / 2, light: true });
      b.lamp({ x: -42, z: 50, rot: 0.4, light: false });
      b.lamp({ x: 42, z: -52, rot: Math.PI - 0.4, light: false });

      b.smokestack({ x: -54, z: -42, height: 24, radius: 1.3 });
      b.smokestack({ x: 56, z: -46, height: 27, radius: 1.4 });
      b.smokestack({ x: -58, z: 44, height: 21, radius: 1.15 });
      b.smokestack({ x: 58, z: 48, height: 23, radius: 1.2 });

      b.gift({ x: -48, z: 42, size: 3.1, color: 0x8f1f28, rot: 0.25, collide: true });
      b.gift({ x: 52, z: 36, size: 2.8, color: 0x2d4268, rot: -0.2, collide: true });
      b.gift({ x: 44, z: -44, size: 3.4, color: 0x1f5134, rot: 0.3, collide: true });
      b.gift({ x: -40, z: -36, size: 3.0, color: 0xc3a24a, rot: -0.3, collide: true });

      b.candyCane({ x: -38, z: 46, scale: 1.2 });
      b.candyCane({ x: 46, z: 26, scale: 1.1 });
      b.candyCane({ x: 38, z: -34, scale: 1.15 });
      b.candyCane({ x: -36, z: -40, scale: 1.05 });

      for (const crate of [
        { x: -54, z: 20, s: 2 },
        { x: -52, z: 22.5, s: 1.4 },
        { x: 54, z: -20, s: 2.1 },
        { x: 52, z: -22.5, s: 1.5 },
        { x: 40, z: 46, s: 1.8 },
        { x: -40, z: 22, s: 1.7 },
      ]) {
        b.box(crate.s, crate.s, crate.s, MAT.woodDark, crate.x, crate.s / 2, crate.z, crate.s * 0.15);
        b.solid(crate.x, crate.z, crate.s, crate.s, crate.s);
      }

      for (const crate of [
        { x: 18, z: -14, s: 1.6 },
        { x: 19.4, z: -12.2, s: 1.2 },
        { x: 17.2, z: -16.4, s: 1.3 },
        { x: -18, z: -14, s: 1.5 },
        { x: -19.6, z: -12.1, s: 1.1 },
        { x: -17.4, z: -16.3, s: 1.2 },
      ]) {
        b.box(crate.s, crate.s, crate.s, MAT.woodDark, crate.x, crate.s / 2, crate.z, crate.s * 0.2);
        b.solid(crate.x, crate.z, crate.s, crate.s, crate.s);
      }

      for (const barrel of [
        { x: -21, z: 17 },
        { x: 21, z: 17 },
        { x: 20.5, z: 19 },
      ]) {
        b.cyl(0.55, 0.62, 1.4, 12, MAT.metal, barrel.x, 0.7, barrel.z);
        b.solid(barrel.x, barrel.z, 1.2, 1.2, 1.4);
      }

      b.pines([...pineBorder(40), ...pineBorder(71)]);

      return {
        playerSpawn: { x: 0, z: 60, yaw: 0 },
        targetSpawn: { x: 0, z: -12 },
        targetPath: [
          { x: 0, z: -12 },
          { x: 10, z: -12 },
          { x: 14, z: 2 },
          { x: 0, z: 8 },
          { x: -14, z: 2 },
          { x: -12, z: -12 },
        ],
        escape: { x: -60, z: 50 },
        escort: { x: 2.4, z: -10.6 },
        tasks: [
          { type: 'relay', x: 50, z: -36 },
          { type: 'ledger', x: -48, z: 34 },
        ],
        guards: [
          {
            x: -18,
            z: 12,
            path: [
              { x: -18, z: 12 },
              { x: -23, z: 4 },
              { x: -18, z: -8 },
              { x: -14, z: -16 },
            ],
            coat: 0x1b3a2a,
            hat: 0x2b1a12,
          },
          {
            x: 18,
            z: 12,
            path: [
              { x: 18, z: 12 },
              { x: 23, z: 4 },
              { x: 18, z: -8 },
              { x: 14, z: -16 },
            ],
            coat: 0x1b3a2a,
            hat: 0x2b1a12,
          },
          {
            x: 0,
            z: 12,
            path: [
              { x: -8, z: 12 },
              { x: 0, z: 10 },
              { x: 8, z: 12 },
              { x: 0, z: 14 },
            ],
            coat: 0x23372a,
            hat: 0x2b1a12,
          },
          {
            x: 0,
            z: -17,
            path: [
              { x: -8, z: -17 },
              { x: 0, z: -19 },
              { x: 8, z: -17 },
              { x: 0, z: -14 },
            ],
            coat: 0x23372a,
            hat: 0x2b1a12,
          },
          {
            x: 19,
            z: -3,
            path: [
              { x: 19, z: -3 },
              { x: 23, z: 8 },
              { x: 16, z: 5 },
              { x: 14, z: -5 },
            ],
            coat: 0x183226,
            hat: 0x2b1a12,
          },
          {
            x: 44,
            z: -28,
            path: [
              { x: 44, z: -28 },
              { x: 54, z: -24 },
              { x: 60, z: -36 },
              { x: 52, z: -44 },
              { x: 46, z: -50 },
            ],
            coat: 0x1b3a2a,
            hat: 0x2b1a12,
          },
          {
            x: -42,
            z: 26,
            path: [
              { x: -42, z: 26 },
              { x: -52, z: 24 },
              { x: -58, z: 48 },
              { x: -46, z: 50 },
              { x: -44, z: 46 },
            ],
            coat: 0x23372a,
            hat: 0x2b1a12,
          },
        ],
      };
    },
  },

  /* ------------------------------------------------------------------ */
  /* 6. The Midnight Mile                                               */
  /* ------------------------------------------------------------------ */
  {
    id: 'metropolis',
    name: 'The Midnight Mile',
    location: 'Chicago · Illinois',
    target: 'Augustin Voss',
    targetTitle: 'The City Boss',
    difficulty: 'NIGHTMARE',
    accent: '#9cc8ff',
    fogColor: 0x0b1220,
    fogDensity: 0.0085,
    skyTop: 0x030711,
    skyHorizon: 0x172337,
    moonColor: 0xbdd4ff,
    moonIntensity: 1.25,
    hemiIntensity: 0.46,
    starOpacity: 0.22,
    snow: { speed: 1.15, windX: 0.55, windZ: 0.2, count: 5600 },
    focus: { x: 0, y: 5, z: 0 },
    bounds: 120,
    shadowSpan: 110,
    hint: 'CITY RULES — WATCH THE TRAFFIC · E TALKS TO BYSTANDERS',
    build(b) {
      b.ground(MAT.asphalt, 300);

      b.box(8, 0.18, 240, MAT.sidewalk, -15, 0.09, 0, 0, false);
      b.box(8, 0.18, 240, MAT.sidewalk, 15, 0.09, 0, 0, false);
      b.box(240, 0.18, 8, MAT.sidewalk, 0, 0.09, -15, 0, false);
      b.box(240, 0.18, 8, MAT.sidewalk, 0, 0.09, 15, 0, false);

      for (let z = -112; z <= 112; z += 8) {
        if (Math.abs(z) < 14) continue;
        b.box(0.15, 0.025, 3.8, MAT.roadLineWarm, 0, 0.045, z, 0, false);
      }
      for (let x = -112; x <= 112; x += 8) {
        if (Math.abs(x) < 14) continue;
        b.box(3.8, 0.025, 0.15, MAT.roadLineWarm, x, 0.045, 0, 0, false);
      }
      for (let z = -106; z <= 106; z += 6) {
        if (Math.abs(z) < 18) continue;
        b.box(0.1, 0.02, 2.4, MAT.roadLine, -2.8, 0.04, z, 0, false);
        b.box(0.1, 0.02, 2.4, MAT.roadLine, 2.8, 0.04, z, 0, false);
      }

      b.crosswalk({ x: 0, z: -14, rot: 0 });
      b.crosswalk({ x: 0, z: 14, rot: 0 });
      b.crosswalk({ x: -14, z: 0, rot: Math.PI / 2 });
      b.crosswalk({ x: 14, z: 0, rot: Math.PI / 2 });

      const blocks = [
        { x: -42, z: -78, h: 34, seed: 61, light: false },
        { x: -42, z: -38, h: 24, seed: 62, light: true },
        { x: -42, z: 38, h: 30, seed: 63, light: false },
        { x: -42, z: 78, h: 26, seed: 64, light: true },
        { x: 42, z: -78, h: 28, seed: 65, light: true },
        { x: 42, z: -38, h: 36, seed: 66, light: false },
        { x: 42, z: 38, h: 22, seed: 67, light: false },
        { x: 42, z: 78, h: 32, seed: 68, light: true },
        { x: -90, z: -78, h: 42, seed: 69, light: false },
        { x: -90, z: -38, h: 30, seed: 70, light: true },
        { x: -90, z: 38, h: 38, seed: 71, light: false },
        { x: -90, z: 78, h: 26, seed: 72, light: false },
        { x: 90, z: -78, h: 31, seed: 73, light: true },
        { x: 90, z: -38, h: 40, seed: 74, light: false },
        { x: 90, z: 38, h: 27, seed: 75, light: true },
        { x: 90, z: 78, h: 35, seed: 76, light: false },

        // deep background towers forming the second rank of the skyline
        { x: -107, z: -78, h: 58, seed: 77, w: 14, d: 16, light: false, backdrop: true },
        { x: -107, z: -38, h: 46, seed: 78, w: 14, d: 16, light: true, backdrop: true },
        { x: -107, z: 38, h: 52, seed: 79, w: 14, d: 16, light: false, backdrop: true },
        { x: -107, z: 78, h: 44, seed: 80, w: 14, d: 16, light: false, backdrop: true },
        { x: 107, z: -78, h: 50, seed: 81, w: 14, d: 16, light: false, backdrop: true },
        { x: 107, z: -38, h: 62, seed: 82, w: 14, d: 16, light: false, backdrop: true },
        { x: 107, z: 38, h: 48, seed: 83, w: 14, d: 16, light: true, backdrop: true },
        { x: 107, z: 78, h: 56, seed: 84, w: 14, d: 16, light: false, backdrop: true },
        { x: -42, z: -107, h: 50, seed: 85, w: 16, d: 16, light: false, backdrop: true },
        { x: 42, z: -107, h: 44, seed: 86, w: 16, d: 16, light: true, backdrop: true },
        { x: -90, z: -107, h: 58, seed: 87, w: 16, d: 16, light: false, backdrop: true },
        { x: 90, z: -107, h: 48, seed: 88, w: 16, d: 16, light: false, backdrop: true },
        { x: -42, z: 107, h: 46, seed: 89, w: 16, d: 16, light: false, backdrop: true },
        { x: 42, z: 107, h: 54, seed: 90, w: 16, d: 16, light: true, backdrop: true },
        { x: -90, z: 107, h: 42, seed: 91, w: 16, d: 16, light: false, backdrop: true },
        { x: 90, z: 107, h: 60, seed: 92, w: 16, d: 16, light: false, backdrop: true },
      ];

      blocks.forEach((block, blockIndex) => {
        const bw = block.w ?? 18;
        const bd = block.d ?? 18;
        // raised pavement pad so each block sits on a proper city sidewalk
        b.box(bw + 4, 0.16, bd + 4, MAT.sidewalk, block.x, 0.08 + blockIndex * 0.0004, block.z, 0, false);
        b.cityBlock({
          x: block.x,
          z: block.z,
          w: bw,
          d: bd,
          h: block.h,
          seed: block.seed,
          facing: block.x > 0 ? -1 : 1,
          light: block.light,
          detail: !block.backdrop,
        });
      });

      const neonSigns = [
        { x: -32.8, y: 10, z: -38, rot: Math.PI / 2, text: 'VELVET', color: '#ff9f83', width: 5.2 },
        { x: 32.8, y: 9, z: -38, rot: -Math.PI / 2, text: 'MIDNIGHT', color: '#9cc8ff', width: 6.2 },
        { x: -32.8, y: 8, z: 38, rot: Math.PI / 2, text: 'NOCTURNE', color: '#8fe3b0', width: 6 },
        { x: 32.8, y: 9, z: 38, rot: -Math.PI / 2, text: 'VOSS', color: '#ffb46a', width: 4.4 },
        { x: -80.8, y: 11, z: -38, rot: Math.PI / 2, text: 'BLACK MILE', color: '#d19cff', width: 6.4 },
        { x: 80.8, y: 10, z: 38, rot: -Math.PI / 2, text: 'LAST CALL', color: '#ff8f9c', width: 6 },
      ];
      neonSigns.forEach((sign) => b.neon(sign));

      b.trafficLight({ x: -13, z: 13, rot: Math.PI / 2 });
      b.trafficLight({ x: 13, z: 13, rot: -Math.PI / 2 });
      b.trafficLight({ x: -13, z: -13, rot: Math.PI });
      b.trafficLight({ x: 13, z: -13, rot: 0 });

      b.hydrant({ x: 18, z: 26 });
      b.hydrant({ x: -18, z: -46 });
      b.hydrant({ x: 18, z: 72 });

      const lamps = [-96, -72, -48, -24, 28, 52, 76, 100];
      lamps.forEach((z, i) => {
        b.lamp({ x: -18, z, rot: Math.PI / 2, light: i % 2 === 0 });
        b.lamp({ x: 18, z, rot: -Math.PI / 2, light: i % 2 === 1 });
      });

      // lamps lining the deeper building fronts
      b.lamp({ x: -31, z: -38, rot: 0, light: true });
      b.lamp({ x: 31, z: -38, rot: Math.PI, light: false });
      b.lamp({ x: -31, z: 38, rot: 0, light: false });
      b.lamp({ x: 31, z: 38, rot: Math.PI, light: true });
      b.lamp({ x: -79, z: -78, rot: 0, light: false });
      b.lamp({ x: 79, z: 78, rot: Math.PI, light: true });

      // garlands strung between the lamp posts across the avenue
      for (const gz of [-72, -48, -24, 28, 52, 76, 100]) {
        b.stringLights(
          [
            { x: -18, y: 5.55, z: gz },
            { x: 0, y: 5.95, z: gz },
            { x: 18, y: 5.55, z: gz },
          ],
          { count: 22, sag: 0.95, radius: 0.06 }
        );
      }

      b.christmasTree({ x: 24, z: -8, scale: 0.92, bulbs: 100, ornaments: 34 });
      b.bench({ x: 16, z: 4, rot: 0.4 });
      b.bench({ x: 32, z: 4, rot: -0.4 });
      b.bench({ x: 24, z: -24, rot: Math.PI });
      b.lamp({ x: 14, z: -24, rot: Math.PI / 2, light: true });

      b.box(18, 0.03, 24, MAT.snow, 60, 0.04, 20, 0, false);
      b.pines([
        { x: 55, z: 13, s: 1.05 },
        { x: 65, z: 13, s: 1.15 },
        { x: 55, z: 27, s: 1.1 },
        { x: 65, z: 27, s: 0.98 },
        { x: 51.5, z: 25.5, s: 0.9 },
        { x: 68.5, z: 16.5, s: 0.95 },
      ]);
      b.bench({ x: 60, z: 20, rot: 0.2 });
      b.bench({ x: 60, z: 26.5, rot: Math.PI - 0.2 });
      b.snowman({ x: 63.4, z: 26.4, scale: 0.9 });
      b.icePatch({ x: 60, z: 20.5, r: 3.4, rot: 0.4 });

      for (let z = -96; z <= 96; z += 12) {
        if (Math.abs(z) < 20) continue;
        b.box(2.2, 0.26, 1.2, MAT.snow, -20.5, 0.13, z, 0.1, false);
        b.box(2.0, 0.22, 1.1, MAT.snow, 20.5, 0.11, z, -0.1, false);
      }

      // ---- curbs, drifts and street clutter
      const curbMat = MAT.cityStoneDark;
      for (const side of [-1, 1]) {
        b.box(0.55, 0.16, 230, curbMat, side * 11.15, 0.08, 0, 0, false);
        b.box(0.64, 0.075, 230, MAT.snow, side * 11.15, 0.18, 0, 0, false);
        b.box(230, 0.16, 0.55, curbMat, 0, 0.08, side * 11.15, 0, false);
        b.box(230, 0.075, 0.64, MAT.snow, 0, 0.18, side * 11.15, 0, false);
      }

      for (let z = -104; z <= 104; z += 16) {
        if (Math.abs(z) < 20) continue;
        b.snowDrift({ x: -12.7, z, w: 3.6, d: 1.5, h: 0.34, rot: 0.08 });
        b.snowDrift({ x: 12.7, z: z + 7, w: 3.2, d: 1.3, h: 0.3, rot: -0.1 });
      }
      for (let x = -100; x <= 100; x += 20) {
        if (Math.abs(x) < 20) continue;
        b.snowDrift({ x, z: -12.7, w: 2.8, d: 1.3, h: 0.28, rot: 0.5 });
        b.snowDrift({ x: x + 9, z: 12.7, w: 2.6, d: 1.2, h: 0.26, rot: -0.4 });
      }

      const iceSpots = [
        [-8, -62, 2.4],
        [7.4, -18, 1.9],
        [-4.2, 34, 2.7],
        [9, 86, 2.1],
        [-9.4, 60, 2.3],
        [3.4, 112, 1.8],
        [-6.4, -96, 2.0],
        [6.2, 6, 1.6],
      ];
      iceSpots.forEach(([ix, iz, ir], i) => b.icePatch({ x: ix, z: iz, r: ir, rot: i * 0.9 }));

      const parked = [
        { x: -9.2, z: -88, rot: 0, color: 0x1c2833 },
        { x: -9.2, z: -44, rot: 0, color: 0x33252a },
        { x: -9.2, z: 44, rot: 0, color: 0x24302a },
        { x: 9.2, z: -66, rot: Math.PI, color: 0x2b2c33 },
        { x: 9.2, z: 30, rot: Math.PI, color: 0x30343d },
        { x: 9.2, z: 92, rot: Math.PI, color: 0x2a2125 },
        { x: -56, z: -9.2, rot: Math.PI / 2, color: 0x262f38 },
        { x: 24, z: 9.2, rot: -Math.PI / 2, color: 0x332b26 },
        { x: 68, z: -9.2, rot: Math.PI / 2, color: 0x1f2833 },
        { x: -24, z: 9.2, rot: -Math.PI / 2, color: 0x2c3138 },
      ];
      parked.forEach((p) => b.car({ ...p, collide: true, headlights: false }));

      b.busShelter({ x: -14.6, z: -40, rot: 0 });
      b.busShelter({ x: 14.8, z: 68, rot: Math.PI, label: 'MIDNIGHT' });

      b.streetBin({ x: 17.6, z: 14.6 });
      b.streetBin({ x: -17.6, z: -14.6 });
      b.streetBin({ x: 17.6, z: -58 });
      b.streetBin({ x: -17.4, z: 42 });
      b.streetBin({ x: 17.4, z: 96 });

      for (const [px, pz] of [
        [-17.6, -26],
        [17.8, 46],
        [-17.6, 66],
        [17.8, -76],
        [-17.6, 102],
        [17.8, -96],
      ]) {
        b.planter({ x: px, z: pz, size: 1.6 });
      }

      b.newsBox({ x: 13.4, z: 24, rot: -Math.PI / 2, color: 0x8f2429 });
      b.newsBox({ x: 14.1, z: 25.6, rot: -Math.PI / 2, color: 0x1f3f5c });
      b.newsBox({ x: -13.6, z: -66, rot: Math.PI / 2, color: 0x2f4a2c });

      for (const [bx, bz] of [
        [11.9, 11.9],
        [-11.9, 11.9],
        [11.9, -11.9],
        [-11.9, -11.9],
      ]) {
        b.bollard({ x: bx, z: bz });
      }

      b.steamVent({ x: -3.4, z: -58, size: 2.4 });
      b.steamVent({ x: 3.6, z: 24 });
      b.steamVent({ x: -4.2, z: 84 });

      b.skyline({ count: 44, radius: 212, minHeight: 60, maxHeight: 152 });

      const wallMat = MAT.stoneWall;
      for (const side of [-1, 1]) {
        b.box(8, 42, 260, wallMat, side * 118, 21, 0, 0, false);
        b.solid(side * 118, 0, 8, 260, 42);
        b.box(270, 42, 8, wallMat, 0, 21, side * 118, 0, false);
        b.solid(0, side * 118, 270, 8, 42);
        b.box(8.8, 0.5, 264, MAT.snow, side * 118, 42.1, 0, 0, false);
        b.box(274, 0.5, 8.8, MAT.snow, 0, 42.1, side * 118, 0, false);
      }

      const trafficColors = [0x1d2b3d, 0x3a2026, 0x243226, 0x2c2c34, 0x3a3230, 0x263442, 0x3b2d2a];
      b.movingCar({ axis: 'z', lane: -6, start: -92, min: -114, max: 114, speed: 9.4, dir: -1, color: trafficColors[0] });
      b.movingCar({ axis: 'z', lane: -6, start: 4, min: -114, max: 114, speed: 8.2, dir: -1, color: trafficColors[1] });
      b.movingCar({ axis: 'z', lane: -6, start: 72, min: -114, max: 114, speed: 10.1, dir: -1, color: trafficColors[2] });
      b.movingCar({ axis: 'z', lane: 6, start: -62, min: -114, max: 114, speed: 8.8, dir: 1, color: trafficColors[3] });
      b.movingCar({ axis: 'z', lane: 6, start: 24, min: -114, max: 114, speed: 9.8, dir: 1, color: trafficColors[4] });
      b.movingCar({ axis: 'x', lane: -6, start: -76, min: -114, max: 114, speed: 8.5, dir: 1, color: trafficColors[5] });
      b.movingCar({ axis: 'x', lane: 6, start: 48, min: -114, max: 114, speed: 9.1, dir: -1, color: trafficColors[6] });

      const civilian = (x, z, path, name, coat, lines, bag) => ({
        x,
        z,
        path,
        name,
        coat,
        bag,
        lines,
        hat: 0x141920,
        scarf: 0x5a2b32,
      });

      return {
        playerSpawn: { x: 16, z: 104, yaw: 0 },
        targetSpawn: { x: 24, z: -16 },
        targetPath: [
          { x: 24, z: -16 },
          { x: 32, z: -8 },
          { x: 24, z: 0 },
          { x: 16, z: -8 },
          { x: 24, z: -16 },
        ],
        escape: { x: 0, z: -108 },
        escort: { x: 21, z: -17 },
        tasks: [
          { type: 'relay', x: -42, z: 94, label: 'DISABLE SECURITY RELAY' },
          { type: 'ledger', x: 42, z: 62, label: 'RECOVER THE LEDGER' },
          { type: 'relay', x: -92, z: 20, label: 'CUT THE SURVEILLANCE FEED' },
          { type: 'ledger', x: 92, z: -56, label: 'STEAL THE BLACKMAIL FILE' },
          { type: 'relay', x: -18, z: -92, label: 'PLANT THE TRACKING BEACON' },
        ],
        guards: [
          {
            x: 18,
            z: -16,
            path: [
              { x: 18, z: -16 },
              { x: 18, z: -2 },
              { x: 28, z: -2 },
              { x: 28, z: -16 },
            ],
            coat: 0x22303e,
          },
          {
            x: 30,
            z: -2,
            path: [
              { x: 30, z: -2 },
              { x: 30, z: -18 },
              { x: 20, z: -18 },
            ],
            coat: 0x26323c,
          },
          {
            x: 18,
            z: 2,
            path: [
              { x: 18, z: 2 },
              { x: 26, z: 2 },
              { x: 26, z: -6 },
            ],
            coat: 0x1d2933,
          },
          {
            x: 16,
            z: 40,
            path: [
              { x: 16, z: 40 },
              { x: 16, z: 58 },
              { x: 16, z: 18 },
            ],
            coat: 0x2b3542,
          },
          {
            x: -16,
            z: 20,
            path: [
              { x: -16, z: 20 },
              { x: -16, z: 38 },
              { x: -16, z: -2 },
            ],
            coat: 0x202b36,
          },
          {
            x: -34,
            z: 88,
            path: [
              { x: -34, z: 88 },
              { x: -50, z: 94 },
              { x: -60, z: 82 },
              { x: -46, z: 92 },
            ],
            coat: 0x23313c,
          },
          {
            x: 84,
            z: -50,
            path: [
              { x: 84, z: -50 },
              { x: 100, z: -50 },
              { x: 100, z: -64 },
              { x: 84, z: -64 },
            ],
            coat: 0x2b303a,
          },
          {
            x: -84,
            z: 8,
            path: [
              { x: -84, z: 8 },
              { x: -104, z: 8 },
              { x: -104, z: 24 },
              { x: -84, z: 24 },
            ],
            coat: 0x1f2b34,
          },
        ],
        civilians: [
          civilian(16, 90, [{ x: 16, z: 90 }, { x: 16, z: 74 }], 'NIGHT SHIFT COOK', 0x4a2e2b, [
            'The boss keeps five locks between himself and the street. Five.',
            'The relay tower out west feeds every camera in the district.',
          ], 0x6a4a2e),
          civilian(-16, 72, [{ x: -16, z: 72 }, { x: -16, z: 56 }], 'CAB DRIVER', 0x2f3d35, [
            'Cars do not stop after midnight. Use the crossings and keep moving.',
            'I saw a black car circle the plaza twice. Voss is expecting trouble.',
          ], 0x2b2b30),
          civilian(24, -22, [{ x: 24, z: -22 }, { x: 32, z: -22 }, { x: 32, z: -14 }], 'FLOWER SELLER', 0x5a3c2d, [
            'He walks the plaza every night. The tree, the bench, the same circle.',
            'The ledgers are not in one place. He is careful like that.',
          ], 0x8f1f28),
          civilian(38, 20, [{ x: 38, z: 20 }, { x: 38, z: 8 }], 'DOOR MAN', 0x20242c, [
            'Five pieces of business before anyone gets near Voss. That is the rule.',
            'The east side is watched. The west side is worse.',
          ], 0x1f1f24),
          civilian(-38, 20, [{ x: -38, z: 20 }, { x: -38, z: 6 }], 'NEWS VENDOR', 0x3b342b, [
            'The surveillance feed runs through the old relay. Cut it and the cameras go blind.',
            'If a guard sees you drop one of his friends, the radio will sing.',
          ], 0x4d3a27),
          civilian(57, 23, [{ x: 57, z: 23 }, { x: 63, z: 23 }], 'PARK WATCHER', 0x2d3b2d, [
            'Quiet park. Loud city. Watch the avenue before you cross.',
            'The blackmail file is in the east block. Do not ask how I know.',
          ], 0x6a2e33),
          civilian(-60, 20, [{ x: -60, z: 20 }, { x: -60, z: 30 }], 'NIGHT NURSE', 0x33404c, [
            'Voss owns the plaza, the port, and half the cops. Be careful.',
            'I heard the tracking beacon goes on the south relay. That is all I know.',
          ], 0x2b2b33),
          civilian(16, -50, [{ x: 16, z: -50 }, { x: 16, z: -66 }], 'STREET MUSICIAN', 0x4b2a30, [
            'You can hear the traffic before you see it. Listen for the engines.',
            'The boss does not run unless he knows. Make sure he does not know.',
          ], 0x7c1b21),
          civilian(-16, -50, [{ x: -16, z: -50 }, { x: -16, z: -34 }], 'DELIVERY COOK', 0x2f3a2d, [
            'The south relay is past the last block. Nobody watches it but the snow.',
            'Five objectives. Five chances to get caught.',
          ], 0x3e2c22),
          civilian(24, 88, [{ x: 24, z: 88 }, { x: 24, z: 76 }], 'HOTEL CLERK', 0x2c3040, [
            'The plaza tree is where he holds court. The bodyguard never leaves him.',
            'The east file is in the block past the park. Mind the cars.',
          ], 0x5a3f2c),
          civilian(-24, 88, [{ x: -24, z: 88 }, { x: -24, z: 74 }], 'SLEIGH DRIVER', 0x3c2f28, [
            'I have seen the city from the river. There is no way out except the avenue.',
            'When the radio crackles, every guard in the district comes running.',
          ], 0x4d3434),
          civilian(48, -62, [{ x: 48, z: -62 }, { x: 56, z: -62 }], 'LATE COURIER', 0x28342e, [
            'The east block has a service door. The file is inside the second room.',
            'Do not let the boss see you work. He remembers faces.',
          ], 0x2f2f35),
        ],
      };
    },
  },
];

export const MAP_COUNT = MAPS.length;
