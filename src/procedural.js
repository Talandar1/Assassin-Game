import * as THREE from 'three';

const cache = new Map();

const clampByte = (v) => (v < 0 ? 0 : v > 255 ? 255 : v);

function hash2(x, y, s) {
  const n = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453123;
  return n - Math.floor(n);
}

function vnoise(x, y, s) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi, s);
  const b = hash2(xi + 1, yi, s);
  const c = hash2(xi, yi + 1, s);
  const d = hash2(xi + 1, yi + 1, s);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

export function fbm(x, y, s, octaves = 4) {
  let amp = 0.5;
  let freq = 1;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += vnoise(x * freq, y * freq, s + i * 17.31) * amp;
    norm += amp;
    amp *= 0.5;
    freq *= 2.03;
  }
  return sum / norm;
}

function pixelTexture(key, size, paint, { srgb = true, repeat = [1, 1] } = {}) {
  if (cache.has(key)) return cache.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  const data = image.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const rgb = paint(x / size, y / size, x, y);
      const i = (y * size + x) * 4;
      data[i] = clampByte(rgb[0]);
      data[i + 1] = clampByte(rgb[1]);
      data[i + 2] = clampByte(rgb[2]);
      data[i + 3] = 255;
    }
  }

  ctx.putImageData(image, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.anisotropy = 8;
  cache.set(key, tex);
  return tex;
}

function drawTexture(key, size, paint) {
  if (cache.has(key)) return cache.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  paint(ctx, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  cache.set(key, tex);
  return tex;
}

export function repeatTexture(tex, x, y) {
  const clone = tex.clone();
  clone.wrapS = clone.wrapT = THREE.RepeatWrapping;
  clone.repeat.set(x, y);
  clone.needsUpdate = true;
  return clone;
}

/* ------------------------------------------------------------------ */
/* Surfaces                                                            */
/* ------------------------------------------------------------------ */

const snowMap = pixelTexture('snow', 512, (u, v) => {
  const n = fbm(u * 9, v * 9, 3, 5);
  const fine = fbm(u * 44, v * 44, 11, 3);
  const sparkle = hash2(Math.floor(u * 512), Math.floor(v * 512), 5) > 0.995 ? 28 : 0;
  const base = 212 + n * 28 + fine * 12;
  return [base * 0.94 + sparkle, base * 0.975 + sparkle, base + 14 + sparkle];
});

const snowBump = pixelTexture(
  'snow-bump',
  512,
  (u, v) => {
    const n = fbm(u * 13, v * 13, 2, 4) * 0.7 + fbm(u * 56, v * 56, 7, 3) * 0.3;
    const b = 60 + n * 195;
    return [b, b, b];
  },
  { srgb: false }
);

const pineMap = pixelTexture('pine', 512, (u, v) => {
  const needles = fbm(u * 95, v * 95, 33, 2);
  const branch = fbm(u * 22, v * 22, 21, 4);
  const g = 22 + branch * 34 + needles * 26;
  return [g * 0.36, g * 0.98, g * 0.52];
});

const pineBump = pixelTexture(
  'pine-bump',
  512,
  (u, v) => {
    const n = fbm(u * 80, v * 80, 33, 3);
    const b = n * 255;
    return [b, b, b];
  },
  { srgb: false }
);

const woodMap = pixelTexture('wood', 512, (u, v) => {
  const plank = Math.floor(v * 6);
  const seed = hash2(plank, 3, 7);
  const local = (v * 6) % 1;
  const grain = 0.5 + 0.5 * Math.sin(u * 52 + seed * 11 + fbm(u * 3, v * 24, 4, 3) * 8);
  const fine = fbm(u * 24, v * 96, 9, 3);
  const seam = local < 0.025 ? 0.42 : 1;
  const base = (36 + grain * 17 + fine * 15) * seam;
  return [base * 1.32, base * 0.8, base * 0.49];
});

const woodBump = pixelTexture(
  'wood-bump',
  512,
  (u, v) => {
    const grain = 0.5 + 0.5 * Math.sin(u * 60 + fbm(u * 4, v * 30, 4, 3) * 9);
    const b = 70 + grain * 105 + fbm(u * 30, v * 110, 9, 2) * 60;
    return [b, b, b];
  },
  { srgb: false }
);

const barkMap = pixelTexture('bark', 512, (u, v) => {
  const ridge = 0.5 + 0.5 * Math.sin(u * 72 + fbm(u * 8, v * 5, 81, 3) * 11);
  const grain = fbm(u * 34, v * 118, 83, 3);
  const deepCrack = fbm(u * 7, v * 2.6, 85, 4);
  const crack = deepCrack < 0.34 ? 0.5 : deepCrack > 0.7 ? 0.78 : 1;
  const base = (38 + ridge * 42 + grain * 22) * crack;
  return [base * 0.94, base * 0.69, base * 0.47];
});

const barkBump = pixelTexture(
  'bark-bump',
  512,
  (u, v) => {
    const ridge = 0.5 + 0.5 * Math.sin(u * 72 + fbm(u * 8, v * 5, 81, 3) * 11);
    const fine = fbm(u * 42, v * 150, 83, 2);
    const deep = fbm(u * 7, v * 2.6, 85, 4) < 0.34 ? 46 : 180;
    const b = (70 + ridge * 100 + fine * 50) * (deep / 180);
    return [b, b, b];
  },
  { srgb: false }
);

const brickMap = pixelTexture('brick', 512, (u, v) => {
  const rows = 14;
  const cols = 7;
  const fy = v * rows;
  const row = Math.floor(fy);
  const fx = u * cols + (row % 2) * 0.5;
  const bx = Math.floor(fx);
  const ex = Math.min(fx - bx, 1 - (fx - bx));
  const ey = Math.min(fy - row, 1 - (fy - row));
  if (ex < 0.035 || ey < 0.07) {
    const m = 105 + fbm(u * 80, v * 80, 15, 2) * 38;
    return [m, m * 0.95, m * 0.9];
  }
  const tint = hash2(bx, row, 4);
  const n = fbm(u * 90, v * 90, 6, 2);
  const r = 92 + tint * 44 + n * 18;
  return [r, 39 + tint * 16 + n * 10, 33 + tint * 14 + n * 8];
});

const brickBump = pixelTexture(
  'brick-bump',
  512,
  (u, v) => {
    const rows = 14;
    const cols = 7;
    const fy = v * rows;
    const row = Math.floor(fy);
    const fx = u * cols + (row % 2) * 0.5;
    const bx = Math.floor(fx);
    const ex = Math.min(fx - bx, 1 - (fx - bx));
    const ey = Math.min(fy - row, 1 - (fy - row));
    const b = ex < 0.035 || ey < 0.07 ? 45 : 210;
    return [b, b, b];
  },
  { srgb: false }
);

const stoneMap = pixelTexture('stone', 512, (u, v) => {
  const cells = 7;
  const fy = v * cells;
  const row = Math.floor(fy);
  const fx = u * cells + (row % 2) * 0.5;
  const bx = Math.floor(fx);
  const ex = Math.min(fx - bx, 1 - (fx - bx));
  const ey = Math.min(fy - row, 1 - (fy - row));
  if (ex < 0.03 || ey < 0.05) return [52, 56, 64];
  const tint = hash2(bx, row, 9);
  const n = fbm(u * 64, v * 64, 14, 3);
  const g = 74 + tint * 32 + n * 26;
  return [g * 0.94, g * 0.99, g * 1.08];
});

const stoneBump = pixelTexture(
  'stone-bump',
  512,
  (u, v) => {
    const cells = 7;
    const fy = v * cells;
    const row = Math.floor(fy);
    const fx = u * cells + (row % 2) * 0.5;
    const bx = Math.floor(fx);
    const ex = Math.min(fx - bx, 1 - (fx - bx));
    const ey = Math.min(fy - row, 1 - (fy - row));
    const b = ex < 0.03 || ey < 0.05 ? 40 : 150 + hash2(bx, row, 9) * 90;
    return [b, b, b];
  },
  { srgb: false }
);

const plasterMap = pixelTexture('plaster', 512, (u, v) => {
  const n = fbm(u * 12, v * 12, 17, 5);
  const grain = fbm(u * 74, v * 74, 19, 2);
  const stain = fbm(u * 4, v * 4, 71, 3);
  const base = 176 + n * 26 + grain * 9 - Math.max(0, stain - 0.62) * 55;
  return [base, base * 0.945, base * 0.82];
});

const plasterBump = pixelTexture(
  'plaster-bump',
  512,
  (u, v) => {
    const n = fbm(u * 40, v * 40, 17, 4);
    const b = 100 + n * 90;
    return [b, b, b];
  },
  { srgb: false }
);

const roofMap = pixelTexture('roof', 512, (u, v) => {
  const rows = 17;
  const cols = 9;
  const fy = v * rows;
  const row = Math.floor(fy);
  const fx = u * cols + (row % 2) * 0.5;
  const bx = Math.floor(fx);
  const ex = Math.min(fx - bx, 1 - (fx - bx));
  const n = fbm(u * 40, v * 40, 23, 2);
  const tint = hash2(bx, row, 2);
  if (ex < 0.03) return [22, 20, 22];
  if (fy - row > 0.82) return [30, 25, 25];
  const r = 50 + tint * 20 + n * 12;
  return [r * 1.24, r * 0.71, r * 0.65];
});

const roofBump = pixelTexture(
  'roof-bump',
  512,
  (u, v) => {
    const rows = 17;
    const fy = v * rows;
    const row = Math.floor(fy);
    const b = fy - row > 0.82 || (v * 17) % 1 < 0.03 ? 55 : 175;
    return [b, b, b];
  },
  { srgb: false }
);

const iceMap = pixelTexture('ice', 512, (u, v) => {
  const n = fbm(u * 6, v * 6, 31, 5);
  const crackField = Math.abs(fbm(u * 8, v * 8, 37, 4) - 0.5);
  const crack = crackField < 0.012 ? 0.58 : 1;
  const b = (176 + n * 50) * crack;
  return [b * 0.8, b * 0.93, b * 1.06];
});

const metalMap = pixelTexture('metal', 512, (u, v) => {
  const brush = 0.5 + 0.5 * Math.sin(v * 900 + fbm(u * 10, v * 60, 41, 2) * 7);
  const n = fbm(u * 18, v * 18, 43, 3);
  const g = 88 + brush * 30 + n * 20;
  return [g, g * 1.02, g * 1.07];
});

const metalBump = pixelTexture(
  'metal-bump',
  512,
  (u, v) => {
    const brush = 0.5 + 0.5 * Math.sin(v * 900);
    const b = 90 + brush * 80;
    return [b, b, b];
  },
  { srgb: false }
);

const asphaltMap = pixelTexture('asphalt', 512, (u, v) => {
  const n = fbm(u * 16, v * 16, 51, 4);
  const grain = hash2(Math.floor(u * 512), Math.floor(v * 512), 9);
  let g = 32 + n * 22 + (grain > 0.965 ? 36 : 0);
  const patch = fbm(u * 4, v * 4, 55, 4);
  if (patch > 0.6) {
    g = 118 + (patch - 0.6) * 300;
    return [g * 0.92, g * 0.96, g];
  }
  return [g, g * 1.03, g * 1.09];
});

const asphaltBump = pixelTexture(
  'asphalt-bump',
  512,
  (u, v) => {
    const n = fbm(u * 60, v * 60, 51, 3);
    const b = n * 190;
    return [b, b, b];
  },
  { srgb: false }
);

/* ------------------------------------------------------------------ */
/* Facades, windows, sprites                                           */
/* ------------------------------------------------------------------ */

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeFacade(seed = 1) {
  const key = `facade-${seed}`;
  if (cache.has(key)) return cache.get(key);

  const size = 512;
  const mapCanvas = document.createElement('canvas');
  const emCanvas = document.createElement('canvas');
  mapCanvas.width = mapCanvas.height = size;
  emCanvas.width = emCanvas.height = size;
  const g = mapCanvas.getContext('2d');
  const e = emCanvas.getContext('2d');
  const rand = mulberry32(seed * 977 + 13);

  const baseTones = ['#242b38', '#282a31', '#1f2833', '#2b2724'];
  g.fillStyle = baseTones[seed % baseTones.length];
  g.fillRect(0, 0, size, size);

  for (let i = 0; i < 3200; i++) {
    const shade = 20 + Math.floor(rand() * 34);
    g.fillStyle = `rgba(${shade},${shade + 3},${shade + 8},${0.08 + rand() * 0.16})`;
    g.fillRect(rand() * size, rand() * size, 1 + rand() * 3, 1 + rand() * 3);
  }

  // stone base course (the shopfront geometry sits in front of this)
  g.fillStyle = '#3a3f49';
  g.fillRect(0, size - 54, size, 54);
  g.fillStyle = 'rgba(12,15,20,0.5)';
  for (let y = size - 54; y < size; y += 13) g.fillRect(0, y, size, 2);
  for (let x = 0; x < size; x += 62) g.fillRect(x, size - 54, 2, 54);
  g.fillStyle = 'rgba(255,255,255,0.06)';
  g.fillRect(0, size - 57, size, 3);

  // top cornice and shadow line
  g.fillStyle = '#39404c';
  g.fillRect(0, 0, size, 26);
  g.fillStyle = '#171c24';
  g.fillRect(0, 26, size, 5);

  // vertical pilaster shading
  for (let c = 0; c < 4; c++) {
    const x = 30 + c * 126;
    g.fillStyle = 'rgba(10,14,20,0.32)';
    g.fillRect(x, 31, 9, size - 88);
    g.fillStyle = 'rgba(190,205,225,0.06)';
    g.fillRect(x + 9, 31, 3, size - 88);
  }

  e.fillStyle = '#000';
  e.fillRect(0, 0, size, size);

  const cols = 5;
  const rows = 9;
  const floorOccupancy = [];
  for (let r = 0; r < rows; r++) floorOccupancy.push(0.14 + rand() * 0.72);

  for (let r = 0; r < rows; r++) {
    const floorY = 44 + r * 48;

    // spandrel band separating floors
    g.fillStyle = 'rgba(255,255,255,0.034)';
    g.fillRect(0, floorY + 34, size, 2);
    g.fillStyle = 'rgba(8,10,14,0.42)';
    g.fillRect(0, floorY + 37, size, 3);

    for (let c = 0; c < cols; c++) {
      const x = 34 + c * 94;
      const y = floorY;
      const w = 58;
      const h = 30;
      const lit = rand() < floorOccupancy[r];

      g.fillStyle = 'rgba(8,11,16,0.92)';
      g.fillRect(x - 6, y - 6, w + 12, h + 12);

      if (lit) {
        const warm = rand() < 0.78;
        const rC = warm ? 232 + Math.floor(rand() * 22) : 150 + Math.floor(rand() * 24);
        const gC = warm ? 158 + Math.floor(rand() * 52) : 192 + Math.floor(rand() * 26);
        const bC = warm ? 74 + Math.floor(rand() * 56) : 236;
        const color = `rgb(${rC},${gC},${bC})`;
        g.fillStyle = color;
        g.fillRect(x, y, w, h);
        e.fillStyle = color;
        e.fillRect(x, y, w, h);

        const style = rand();
        if (style < 0.22) {
          g.fillStyle = 'rgba(20,14,12,0.5)';
          for (let b = 0; b < 5; b++) g.fillRect(x, y + b * 6, w, 2);
          e.fillStyle = 'rgba(0,0,0,0.55)';
          for (let b = 0; b < 5; b++) e.fillRect(x, y + b * 6, w, 2);
        } else if (style < 0.44) {
          g.fillStyle = 'rgba(24,16,14,0.45)';
          g.fillRect(x, y, w * (0.18 + rand() * 0.2), h);
          e.fillStyle = 'rgba(0,0,0,0.7)';
          e.fillRect(x, y, w * 0.26, h);
          g.fillStyle = 'rgba(24,16,14,0.32)';
          g.fillRect(x + w * 0.78, y, w * 0.22, h);
          e.fillStyle = 'rgba(0,0,0,0.5)';
          e.fillRect(x + w * 0.8, y, w * 0.2, h);
        } else if (style < 0.56) {
          const lampGlow = g.createRadialGradient(
            x + w * 0.5,
            y + h * 0.2,
            2,
            x + w * 0.5,
            y + h * 0.45,
            w * 0.7
          );
          lampGlow.addColorStop(0, 'rgba(255,248,225,0.5)');
          lampGlow.addColorStop(1, 'rgba(255,248,225,0)');
          g.fillStyle = lampGlow;
          g.fillRect(x, y, w, h);
        }
        if (rand() < 0.3) {
          g.fillStyle = 'rgba(16,16,18,0.6)';
          g.fillRect(x + w * (0.2 + rand() * 0.5), y + h * 0.34, w * 0.11, h * 0.36);
        }

        g.strokeStyle = 'rgba(12,15,20,0.9)';
        g.lineWidth = 3;
        g.beginPath();
        g.moveTo(x + w / 2, y);
        g.lineTo(x + w / 2, y + h);
        g.moveTo(x, y + h * 0.56);
        g.lineTo(x + w, y + h * 0.56);
        g.stroke();

        e.strokeStyle = '#000';
        e.lineWidth = 3;
        e.beginPath();
        e.moveTo(x + w / 2, y);
        e.lineTo(x + w / 2, y + h);
        e.moveTo(x, y + h * 0.56);
        e.lineTo(x + w, y + h * 0.56);
        e.stroke();
      } else {
        const glass = g.createLinearGradient(x, y, x + w, y + h);
        glass.addColorStop(0, '#1d2732');
        glass.addColorStop(0.45, '#141b24');
        glass.addColorStop(1, '#0d1218');
        g.fillStyle = glass;
        g.fillRect(x, y, w, h);

        g.fillStyle = 'rgba(140,175,215,0.07)';
        g.beginPath();
        g.moveTo(x, y + h);
        g.lineTo(x + w * 0.55, y);
        g.lineTo(x + w * 0.78, y);
        g.lineTo(x + w * 0.24, y + h);
        g.closePath();
        g.fill();

        if (rand() < 0.16) {
          g.fillStyle = 'rgba(30,34,40,0.92)';
          g.fillRect(x - 4, y + h - 2, w + 8, 2);
          for (let b = 0; b <= 6; b++) {
            g.fillRect(x - 4 + (b * (w + 8)) / 6, y + h - 13, 1.5, 13);
          }
        }

        e.fillStyle = '#000';
        e.fillRect(x, y, w, h);
      }

      // sill, lintel and window frame
      g.fillStyle = 'rgba(210,222,238,0.16)';
      g.fillRect(x - 7, y + h + 4, w + 14, 3);
      g.fillStyle = 'rgba(0,0,0,0.45)';
      g.fillRect(x - 7, y - 9, w + 14, 3);
      g.strokeStyle = 'rgba(72,80,94,0.8)';
      g.lineWidth = 2;
      g.strokeRect(x - 3, y - 3, w + 6, h + 6);

      if (rand() < 0.45) {
        const streak = x + rand() * w;
        const grime = g.createLinearGradient(0, y + h, 0, y + h + 26);
        grime.addColorStop(0, 'rgba(6,9,13,0.32)');
        grime.addColorStop(1, 'rgba(6,9,13,0)');
        g.fillStyle = grime;
        g.fillRect(streak - 2, y + h, 4 + rand() * 4, 26);
      }
    }
  }

  const map = new THREE.CanvasTexture(mapCanvas);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;

  const emissive = new THREE.CanvasTexture(emCanvas);
  emissive.wrapS = emissive.wrapT = THREE.RepeatWrapping;
  emissive.colorSpace = THREE.SRGBColorSpace;
  emissive.anisotropy = 8;

  const result = { map, emissive };
  cache.set(key, result);
  return result;
}

const windowTex = drawTexture('window', 256, (ctx, s) => {
  const grad = ctx.createLinearGradient(0, 0, 0, s);
  grad.addColorStop(0, '#ffe6b4');
  grad.addColorStop(0.45, '#ffc078');
  grad.addColorStop(1, '#9a5320');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);

  const glow = ctx.createRadialGradient(s * 0.5, s * 0.62, 10, s * 0.5, s * 0.62, s * 0.55);
  glow.addColorStop(0, 'rgba(255,239,205,0.75)');
  glow.addColorStop(1, 'rgba(255,239,205,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, s, s);

  ctx.fillStyle = 'rgba(88,28,20,0.5)';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(s * 0.26, 0);
  ctx.lineTo(s * 0.17, s);
  ctx.lineTo(0, s);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(s, 0);
  ctx.lineTo(s * 0.82, 0);
  ctx.lineTo(s * 0.9, s);
  ctx.lineTo(s, s);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#24160c';
  ctx.lineWidth = 22;
  ctx.strokeRect(11, 11, s - 22, s - 22);
  ctx.lineWidth = 11;
  ctx.beginPath();
  ctx.moveTo(s / 2, 0);
  ctx.lineTo(s / 2, s);
  ctx.moveTo(0, s / 2);
  ctx.lineTo(s, s / 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(210,225,240,0.22)';
  ctx.lineWidth = 4;
  ctx.strokeRect(22, 22, s - 44, s - 44);
});

const flakeTex = drawTexture('flake', 64, (ctx, s) => {
  const grad = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(245,250,255,0.92)');
  grad.addColorStop(0.7, 'rgba(220,235,255,0.25)');
  grad.addColorStop(1, 'rgba(220,235,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);
});

const glowTex = drawTexture('glow', 128, (ctx, s) => {
  const grad = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(255,238,200,0.95)');
  grad.addColorStop(0.2, 'rgba(255,205,140,0.55)');
  grad.addColorStop(0.55, 'rgba(255,170,90,0.14)');
  grad.addColorStop(1, 'rgba(255,160,80,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);
});

const moonTex = drawTexture('moon', 256, (ctx, s) => {
  const grad = ctx.createRadialGradient(s / 2, s / 2, s * 0.16, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(250,252,255,1)');
  grad.addColorStop(0.19, 'rgba(238,246,255,0.95)');
  grad.addColorStop(0.28, 'rgba(205,225,255,0.35)');
  grad.addColorStop(0.62, 'rgba(160,195,255,0.08)');
  grad.addColorStop(1, 'rgba(140,180,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);

  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.beginPath();
  ctx.arc(s * 0.44, s * 0.45, s * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(s * 0.55, s * 0.55, s * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(s * 0.47, s * 0.61, s * 0.028, 0, Math.PI * 2);
  ctx.fill();
});

const markerTex = drawTexture('marker', 128, (ctx, s) => {
  ctx.translate(s / 2, s / 2);
  ctx.rotate(Math.PI / 4);
  ctx.shadowColor = 'rgba(226,72,56,0.95)';
  ctx.shadowBlur = 18;
  ctx.strokeStyle = 'rgba(255,225,190,0.95)';
  ctx.lineWidth = 4;
  ctx.strokeRect(-20, -20, 40, 40);
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(210,52,40,0.85)';
  ctx.fillRect(-7, -7, 14, 14);
});

const smokeTex = drawTexture('smoke', 128, (ctx, s) => {
  const grad = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(200,205,215,0.5)');
  grad.addColorStop(0.5, 'rgba(150,158,172,0.2)');
  grad.addColorStop(1, 'rgba(120,130,145,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);
});

/* ------------------------------------------------------------------ */
/* Text and stripes                                                    */
/* ------------------------------------------------------------------ */

const textCache = new Map();

export function makeTextTexture(text, color = '#ffd9a0', opts = {}) {
  const { width = 640, height = 200, font = '600 94px Georgia', glow = 26 } = opts;
  const key = `${text}|${color}|${width}|${height}|${font}|${glow}`;
  if (textCache.has(key)) return textCache.get(key);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = color;
  ctx.shadowBlur = glow;
  ctx.fillStyle = color;
  ctx.fillText(text, width / 2, height / 2 + 4);
  ctx.shadowBlur = glow * 2.2;
  ctx.globalAlpha = 0.6;
  ctx.fillText(text, width / 2, height / 2 + 4);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  textCache.set(key, tex);
  return tex;
}

const stripeCache = new Map();

export function makeStripeTexture(a = '#f3ede1', b = '#b63035', count = 7) {
  const key = `${a}|${b}|${count}`;
  if (stripeCache.has(key)) return stripeCache.get(key);

  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = a;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = b;
  const band = size / count;
  for (let i = 0; i < count; i += 2) {
    ctx.fillRect(i * band, 0, band, size);
  }
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  for (let i = 0; i < 500; i++) {
    ctx.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 2, 1);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  stripeCache.set(key, tex);
  return tex;
}

export const T = {
  snow: snowMap,
  snowBump,
  pine: pineMap,
  pineBump,
  wood: woodMap,
  woodBump,
  bark: barkMap,
  barkBump,
  brick: brickMap,
  brickBump,
  stone: stoneMap,
  stoneBump,
  plaster: plasterMap,
  plasterBump,
  roof: roofMap,
  roofBump,
  ice: iceMap,
  metal: metalMap,
  metalBump,
  asphalt: asphaltMap,
  asphaltBump,
  window: windowTex,
  flake: flakeTex,
  glow: glowTex,
  moon: moonTex,
  marker: markerTex,
  smoke: smokeTex,
};
