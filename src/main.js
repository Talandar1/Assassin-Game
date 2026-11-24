import './style.css';
import { Game } from './game.js';
import { MAPS } from './maps.js';

const $ = (id) => document.getElementById(id);

const canvas = $('scene');
const hud = $('hud');
const menu = $('menu');
const pauseOverlay = $('pause');
const resultOverlay = $('result');
const loadingOverlay = $('loading');
const loadingText = $('loading-text');
const captureHint = $('capture-hint');
const eventToast = $('event-toast');
const radioToast = $('radio-toast');
const radioLine = $('radio-line');
const dialogue = $('dialogue');
const dialogueName = $('dialogue-name');
const dialogueLine = $('dialogue-line');
const interactPrompt = $('interact-prompt');
const interactLabel = $('interact-label');
const interactFill = $('interact-fill');
const scopeOverlay = $('scope-overlay');
const missionList = $('mission-list');
const contractProgress = $('contract-progress');

const hudIndex = $('hud-index');
const hudMission = $('hud-mission');
const hudTarget = $('hud-target');
const hudObjective = $('hud-objective');
const hudDistance = $('hud-distance');
const hudStatus = $('hud-status');
const taskList = $('task-list');
const targetLock = $('hud-target-lock');
const strikeHint = $('strike-hint');
const reticle = $('reticle');
const healthBar = $('health-bar');
const healthValue = $('health-value');
const damageFlash = $('damage-flash');
const weaponPanel = $('weapon-panel');
const weaponSlot = $('weapon-slot');
const weaponName = $('weapon-name');
const weaponAmmo = $('weapon-ammo');

const resultKicker = $('result-kicker');
const resultTitle = $('result-title');
const resultTarget = $('result-target');
const resultCopy = $('result-copy');
const resultStats = $('result-stats');
const nextBtn = $('next-btn');
const resultMenuBtn = $('result-menu-btn');
const resumeBtn = $('resume-btn');
const abortBtn = $('abort-btn');

const STORAGE_KEY = 'silent-night-cleared-v1';

let currentIndex = 0;
let damageTimeout = null;
let toastTimeout = null;
let radioTimeout = null;
let dialogueTimeout = null;
let taskRows = [];

const loadCleared = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(raw)) return new Set(raw.filter((n) => Number.isInteger(n) && n >= 0 && n < MAPS.length));
  } catch {
    /* ignore corrupt saves */
  }
  return new Set();
};

const completed = loadCleared();

const saveCleared = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  } catch {
    /* storage may be unavailable */
  }
};

const formatTime = (seconds) => {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${minutes}:${String(secs).padStart(2, '0')}`;
};

const game = new Game(canvas, {
  onHud(data) {
    const pct = Math.max(0, Math.min(100, data.health));
    healthBar.style.width = `${pct}%`;
    healthValue.textContent = String(Math.round(pct));
    healthBar.style.background =
      pct < 34
        ? 'linear-gradient(90deg, #5e0d0d, #ff4a3a)'
        : 'linear-gradient(90deg, #6e1616, #d94b3c 70%, #f5b28f)';

    hudDistance.textContent = data.distance != null ? `${Math.round(data.distance)} m` : '— m';
    hudStatus.textContent = data.status;
    hudStatus.className =
      'status-line' +
      (data.status === 'SPOTTED' ? ' spotted' : data.status === 'SUSPICIOUS' ? ' suspicious' : '');

    if (data.weapon) {
      weaponSlot.textContent = data.weapon.slot;
      weaponName.textContent = data.weapon.name;
      weaponPanel.classList.toggle('reloading', Boolean(data.weapon.reloading));
      weaponAmmo.textContent =
        data.weapon.ammo == null
          ? '—'
          : data.weapon.reloading
            ? 'RELOADING'
            : `${data.weapon.ammo} / ${data.weapon.reserve}`;
    }

    if (data.tasks) {
      data.tasks.forEach((task, index) => {
        const row = taskRows[index];
        if (!row) return;
        row.root.classList.toggle('complete', task.complete);
        row.root.classList.toggle(
          'active',
          !task.complete && data.interact && data.interact.label === task.label
        );
        row.dist.textContent = task.complete ? 'DONE' : `${Math.round(task.distance)} m`;
      });
    }

    if (data.objectivesComplete !== undefined) {
      const total = data.totalTasks || data.tasks?.length || 0;
      const done = data.completedTasks || 0;
      if (data.objectivesComplete) {
        targetLock.textContent = 'TARGET VULNERABLE';
        targetLock.className = 'target-lock ready';
        hudObjective.textContent = `Eliminate ${data.targetName}`;
      } else {
        targetLock.textContent = `OBJECTIVES ${done}/${total} · LOCKED`;
        targetLock.className = 'target-lock locked';
        hudObjective.textContent = `Secure ${total - done} more objective${
          total - done === 1 ? '' : 's'
        } before the hit`;
      }
    }

    if (data.interact) {
      const talk = data.interact.kind === 'talk';
      interactLabel.textContent = talk
        ? `E · ${data.interact.label}`
        : `HOLD E · ${data.interact.label}`;
      interactFill.style.width = talk
        ? '0%'
        : `${Math.round(data.interact.progress * 100)}%`;
      interactPrompt.classList.toggle('talk', talk);
      interactPrompt.classList.remove('hidden');
    } else {
      interactPrompt.classList.add('hidden');
      interactPrompt.classList.remove('talk');
      interactFill.style.width = '0%';
    }

    const inRange = Boolean(data.inRange);
    const ready = data.targetReady !== false;
    const canStrike = Boolean(data.canStrike) && ready;
    strikeHint.textContent = canStrike
      ? 'LMB · ASSASSINATE'
      : inRange && !ready
        ? 'COMPLETE OBJECTIVES FIRST'
        : 'FLANK THE TARGET';
    strikeHint.classList.toggle('hidden', !inRange);
    strikeHint.classList.toggle('blocked', inRange && !canStrike);
    reticle.classList.toggle('in-range', inRange && canStrike);
    reticle.classList.toggle('blocked', inRange && !canStrike);
  },

  onScope(active) {
    scopeOverlay.classList.toggle('hidden', !active);
    hud.classList.toggle('scoped', Boolean(active));
  },

  onToast(text) {
    showToast(text);
  },

  onRadio(data) {
    if (!data) {
      radioToast.classList.add('hidden');
      return;
    }
    radioLine.textContent = `“${data.line}”`;
    radioToast.classList.remove('hidden');
    clearTimeout(radioTimeout);
    radioTimeout = window.setTimeout(() => radioToast.classList.add('hidden'), 4300);
  },

  onDialogue(data) {
    clearTimeout(dialogueTimeout);
    if (!data) {
      dialogue.classList.add('hidden');
      return;
    }
    dialogueName.textContent = data.name;
    dialogueLine.textContent = `“${data.line}”`;
    dialogue.classList.remove('hidden');
    dialogueTimeout = window.setTimeout(() => dialogue.classList.add('hidden'), 4400);
  },

  onDamage() {
    damageFlash.classList.add('hit');
    clearTimeout(damageTimeout);
    damageTimeout = window.setTimeout(() => damageFlash.classList.remove('hit'), 110);
  },

  onComplete(data) {
    completed.add(data.levelIndex);
    saveCleared();
    renderMissions();
    showResult(data);
  },

  onFail(data) {
    hud.classList.add('hidden');
    hideAllOverlays();
    resultOverlay.classList.remove('hidden');

    resultKicker.textContent = 'CONTRACT FAILED';
    resultTitle.textContent = 'MISSION FAILED';
    const levelIndex = Number.isInteger(data.levelIndex) ? data.levelIndex : currentIndex;
    const map = MAPS[levelIndex];
    resultTarget.textContent = `${map.target} — ${map.targetTitle}`;
    resultCopy.textContent = data.reason;
    resultStats.innerHTML = `
      <span><b>${formatTime(data.seconds)}</b>TIME</span>
      <span><b>${data.alerts}</b>ALERTS</span>
      <span><b>OPEN</b>CONTRACT</span>
    `;

    nextBtn.textContent = 'RETRY CONTRACT';
    nextBtn.onclick = () => startMission(levelIndex);
    resultMenuBtn.onclick = goToMenu;
  },
});

if (import.meta.env.DEV) {
  window.__silentNight = game;
}

function hideAllOverlays() {
  menu.classList.add('hidden');
  pauseOverlay.classList.add('hidden');
  resultOverlay.classList.add('hidden');
  loadingOverlay.classList.add('hidden');
  captureHint.classList.add('hidden');
  eventToast.classList.add('hidden');
  radioToast.classList.add('hidden');
  dialogue.classList.add('hidden');
  interactPrompt.classList.add('hidden');
  interactPrompt.classList.remove('talk');
  scopeOverlay.classList.add('hidden');
  hud.classList.remove('scoped');
  clearTimeout(toastTimeout);
  clearTimeout(radioTimeout);
  clearTimeout(dialogueTimeout);
}

function showToast(text) {
  if (!text) return;
  eventToast.textContent = text;
  eventToast.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => eventToast.classList.add('hidden'), 1900);
}

function showCaptureHint() {
  if (game.state === 'playing') captureHint.classList.remove('hidden');
}

function clearCaptureHint() {
  captureHint.classList.add('hidden');
}

function requestLock() {
  if (document.pointerLockElement === canvas) return;
  try {
    const request = canvas.requestPointerLock();
    if (request && typeof request.catch === 'function') request.catch(() => {});
  } catch {
    /* pointer lock unavailable */
  }
}

function setMissionHud(index) {
  const map = MAPS[index];
  hudIndex.textContent = String(index + 1).padStart(2, '0');
  hudMission.textContent = map.name;
  hudTarget.textContent = map.target;
  hudObjective.textContent = `Eliminate ${map.target}`;
  hudDistance.textContent = '— m';
  hudStatus.textContent = 'UNDETECTED';
  hudStatus.className = 'status-line';
  const total = game.tasks?.length ?? 0;
  hudObjective.textContent = `Secure ${total} objective${total === 1 ? '' : 's'} before the hit`;
  targetLock.textContent = `OBJECTIVES 0/${total} · LOCKED`;
  targetLock.className = 'target-lock locked';
  strikeHint.textContent = 'LMB · ELIMINATE';
  strikeHint.classList.add('hidden');
  strikeHint.classList.remove('blocked');
  reticle.classList.remove('in-range', 'blocked');
  healthBar.style.width = '100%';
  healthValue.textContent = '100';
  weaponSlot.textContent = '1';
  weaponName.textContent = 'KNIFE';
  weaponAmmo.textContent = '—';
  weaponPanel.classList.remove('reloading');
  interactPrompt.classList.add('hidden');
  interactPrompt.classList.remove('talk');
  interactFill.style.width = '0%';
  scopeOverlay.classList.add('hidden');
  hud.classList.remove('scoped');
  radioToast.classList.add('hidden');
  dialogue.classList.add('hidden');

  taskList.innerHTML = '';
  taskRows = (game.tasks ?? []).map((task, taskIndex) => {
    const label =
      task.label ?? (task.type === 'relay' ? 'DISABLE SECURITY RELAY' : 'RECOVER THE LEDGER');
    const row = document.createElement('div');
    row.className = 'task-row';
    row.innerHTML = `
      <span class="task-check"></span>
      <span class="task-label">${String(taskIndex + 1).padStart(2, '0')} ${label}</span>
      <span class="task-dist">— m</span>
    `;
    taskList.appendChild(row);
    return { root: row, dist: row.querySelector('.task-dist') };
  });
}

function startMission(index) {
  currentIndex = index;
  game.audio.init();
  requestLock();

  hideAllOverlays();
  hud.classList.add('hidden');
  damageFlash.classList.remove('hit');
  loadingOverlay.classList.remove('hidden');
  loadingText.textContent = `PREPARING CONTRACT ${String(index + 1).padStart(2, '0')} · ${MAPS[index].name.toUpperCase()}`;

  window.setTimeout(() => {
    try {
      game.loadLevel(index);
      setMissionHud(index);
      game.begin();
    } catch (error) {
      console.error(error);
      loadingText.textContent = 'CONTRACT FAILED TO LOAD';
      return;
    }

    loadingOverlay.classList.add('hidden');
    hud.classList.remove('hidden');

    if (document.pointerLockElement !== canvas) {
      game.pause();
      pauseOverlay.classList.remove('hidden');
      hud.classList.add('hidden');
    }
  }, 140);
}

function showResult(data) {
  hud.classList.add('hidden');
  hideAllOverlays();
  resultOverlay.classList.remove('hidden');

  const map = MAPS[data.levelIndex];
  const isLast = data.levelIndex >= MAPS.length - 1;
  const allCleared = completed.size >= MAPS.length;

  resultKicker.textContent =
    isLast && allCleared ? 'ALL CONTRACTS FULFILLED' : 'CONTRACT COMPLETE';
  resultTitle.textContent = isLast && allCleared ? 'THE NIGHT IS YOURS' : 'TARGET ELIMINATED';
  resultTarget.textContent = `${map.target} — ${map.targetTitle}`;

  const rankCopy = {
    GHOST: 'No one saw you. No one will remember you. The snow kept your secret.',
    SHADOW: 'The contract is fulfilled. A few heads turned, but none will speak of it.',
    BRUTE: 'The target is dead. The night was loud, but the night is over.',
  };
  resultCopy.textContent =
    isLast && allCleared
      ? 'Six names. Six silent endings. By morning the snow will have covered everything.'
      : rankCopy[data.rank] || 'The contract is complete.';

  resultStats.innerHTML = `
    <span><b>${formatTime(data.seconds)}</b>TIME</span>
    <span><b>${data.alerts}</b>ALERTS</span>
    <span><b>${data.rank}</b>RANK</span>
  `;

  nextBtn.textContent = isLast ? 'RETURN TO MISSION SELECT' : 'NEXT CONTRACT';
  nextBtn.onclick = () => {
    if (isLast) goToMenu();
    else startMission(data.levelIndex + 1);
  };
  resultMenuBtn.onclick = goToMenu;
}

function goToMenu() {
  if (document.pointerLockElement) document.exitPointerLock();
  hideAllOverlays();
  hud.classList.add('hidden');
  damageFlash.classList.remove('hit');
  menu.classList.remove('hidden');
  renderMissions();
  game.returnToMenu();
}

function renderMissions() {
  missionList.innerHTML = '';
  MAPS.forEach((map, index) => {
    const cleared = completed.has(index);
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'mission-card';
    card.style.setProperty('--accent', map.accent);
    card.innerHTML = `
      <span class="mission-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="mission-info">
        <strong>${map.name}</strong>
        <em>${map.target} · ${map.targetTitle}</em>
      </span>
      <span class="mission-meta">
        <span class="mission-risk">${map.difficulty}</span>
        <span class="mission-status${cleared ? ' done' : ''}">${cleared ? 'FULFILLED' : 'OPEN'}</span>
      </span>
    `;
    card.addEventListener('click', () => startMission(index));
    missionList.appendChild(card);
  });
  contractProgress.textContent = `${completed.size} / ${MAPS.length} FULFILLED`;
}

document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (locked) {
    clearCaptureHint();
    if (game.state === 'paused') {
      game.resume();
      pauseOverlay.classList.add('hidden');
      hud.classList.remove('hidden');
    }
  } else if (game.state === 'playing') {
    game.pause();
    clearCaptureHint();
    interactPrompt.classList.add('hidden');
    pauseOverlay.classList.remove('hidden');
    hud.classList.add('hidden');
  }
});

document.addEventListener('pointerlockerror', () => {
  if (game.state === 'playing') showCaptureHint();
});

document.addEventListener('keydown', (event) => {
  if (event.code !== 'Escape') return;
  if (game.state !== 'playing' || document.pointerLockElement === canvas) return;

  game.pause();
  clearCaptureHint();
  interactPrompt.classList.add('hidden');
  scopeOverlay.classList.add('hidden');
  hud.classList.remove('scoped');
  hud.classList.add('hidden');
  pauseOverlay.classList.remove('hidden');
});

resumeBtn.addEventListener('click', () => {
  game.audio.init();
  game.resume();
  pauseOverlay.classList.add('hidden');
  hud.classList.remove('hidden');
  clearCaptureHint();
  requestLock();

  window.setTimeout(() => {
    if (game.state === 'playing' && document.pointerLockElement !== canvas) {
      showCaptureHint();
    }
  }, 300);
});

canvas.addEventListener('click', () => {
  if (game.state === 'playing' && document.pointerLockElement !== canvas) {
    requestLock();
    window.setTimeout(() => {
      if (game.state === 'playing' && document.pointerLockElement !== canvas) {
        showCaptureHint();
      }
    }, 300);
  }
});

abortBtn.addEventListener('click', goToMenu);

renderMissions();

loadingOverlay.classList.remove('hidden');
menu.classList.add('hidden');

window.setTimeout(() => {
  try {
    game.loadLevel(0, { preview: true });
    loadingOverlay.classList.add('hidden');
    menu.classList.remove('hidden');
  } catch (error) {
    console.error(error);
    loadingText.textContent = 'FAILED TO BUILD THE FIRST CONTRACT';
  }
}, 80);
