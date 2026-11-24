export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.noiseBuffer = null;
    this.muted = false;
    this.chimeTimer = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;

    try {
      this.ctx = new Ctx();
    } catch {
      return;
    }

    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.7;
    this.master.connect(this.ctx.destination);

    const length = Math.floor(this.ctx.sampleRate * 2);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buffer;

    const wind = this.ctx.createBufferSource();
    wind.buffer = buffer;
    wind.loop = true;

    const windFilter = this.ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 380;
    windFilter.Q.value = 0.7;

    const windGain = this.ctx.createGain();
    windGain.gain.value = 0.06;

    wind.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.master);
    wind.start();

    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 150;
    lfo.connect(lfoGain);
    lfoGain.connect(windFilter.frequency);
    lfo.start();

    this.chimeTimer = window.setInterval(() => this.playChime(), 5200);
    window.setTimeout(() => this.playChime(), 1200);
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.master) {
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.7, this.ctx.currentTime, 0.05);
    }
    return this.muted;
  }

  playChime() {
    if (!this.ctx || this.ctx.state !== 'running' || this.muted) return;
    const notes = [523.25, 587.33, 622.25, 698.46, 783.99, 932.33, 1046.5];
    const freq = notes[Math.floor(Math.random() * notes.length)];
    const now = this.ctx.currentTime;

    [1, 2.01, 2.99].forEach((mult, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq * mult;
      const gain = this.ctx.createGain();
      const vol = 0.026 / (i + 1);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(vol, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.1);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(now + i * 0.012);
      osc.stop(now + 3.3);
    });
  }

  noise(duration = 0.2, volume = 0.2, frequency = 900, type = 'bandpass', q = 0.9) {
    if (!this.ctx || this.muted || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;

    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = frequency;
    filter.Q.value = q;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    src.start(now);
    src.stop(now + duration + 0.03);
  }

  tone(freq, duration, volume, type = 'sine', glideTo = null) {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, now + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.master);
    osc.start(now);
    osc.stop(now + duration + 0.04);
  }

  footstep(crouching = false) {
    if (!this.ctx) return;
    this.noise(crouching ? 0.05 : 0.09, crouching ? 0.035 : 0.08, 620, 'lowpass');
    this.tone(crouching ? 60 : 82, 0.07, crouching ? 0.025 : 0.05, 'sine');
  }

  whoosh() {
    this.noise(0.18, 0.08, 2400, 'bandpass', 0.8);
  }

  stabHit() {
    this.noise(0.14, 0.18, 420, 'lowpass');
    this.tone(95, 0.18, 0.16, 'sine', 48);
  }

  bodyFall() {
    if (!this.ctx) return;
    this.noise(0.25, 0.12, 220, 'lowpass');
    this.tone(55, 0.3, 0.12, 'sine', 32);
  }

  gunshot(distance = 10) {
    if (!this.ctx) return;
    const vol = Math.max(0.05, 0.32 * (1 - distance / 45));
    this.noise(0.16, vol, 1400, 'lowpass');
    this.tone(120, 0.22, vol * 0.6, 'square', 45);
  }

  pistol() {
    this.noise(0.12, 0.3, 2600, 'lowpass');
    this.tone(170, 0.16, 0.16, 'square', 62);
  }

  sniper() {
    this.noise(0.3, 0.48, 1500, 'lowpass');
    this.tone(74, 0.52, 0.3, 'sine', 34);
    window.setTimeout(() => {
      this.noise(0.2, 0.09, 700, 'lowpass');
    }, 210);
  }

  dryFire() {
    this.noise(0.05, 0.12, 2200, 'highpass');
    this.tone(320, 0.04, 0.04, 'square', 240);
  }

  reload() {
    this.noise(0.07, 0.12, 1800, 'bandpass');
    this.tone(210, 0.06, 0.035, 'square', 160);
    window.setTimeout(() => {
      this.noise(0.08, 0.13, 1300, 'bandpass');
      this.tone(140, 0.07, 0.04, 'square', 110);
    }, 320);
  }

  weaponSwitch() {
    this.noise(0.05, 0.08, 1600, 'bandpass');
  }

  objective() {
    if (!this.ctx) return;
    [659.25, 880].forEach((freq, i) => {
      window.setTimeout(() => this.tone(freq, 0.5, 0.035, 'sine'), i * 130);
    });
  }

  radioCall() {
    if (!this.ctx) return;
    this.noise(0.08, 0.16, 1900, 'bandpass', 1.4);
    this.tone(880, 0.09, 0.035, 'square', 660);
    window.setTimeout(() => {
      this.noise(0.34, 0.055, 850, 'bandpass', 0.8);
      this.tone(520, 0.18, 0.022, 'triangle', 640);
    }, 120);
    window.setTimeout(() => this.noise(0.06, 0.12, 1700, 'bandpass'), 520);
  }

  chatter() {
    this.noise(0.12, 0.03, 1100, 'bandpass', 0.7);
    this.tone(230, 0.1, 0.018, 'triangle', 280);
  }

  horn() {
    if (!this.ctx) return;
    this.tone(330, 0.32, 0.11, 'sawtooth');
    this.tone(392, 0.3, 0.09, 'square');
    window.setTimeout(() => this.tone(330, 0.26, 0.07, 'sawtooth'), 220);
  }

  impact() {
    this.noise(0.2, 0.16, 300, 'lowpass');
    this.tone(70, 0.24, 0.14, 'sine', 38);
  }

  alarm() {
    if (!this.ctx) return;
    this.tone(392, 0.4, 0.045, 'sawtooth');
    window.setTimeout(() => this.tone(523.25, 0.5, 0.045, 'sawtooth'), 160);
  }

  scream() {
    if (!this.ctx) return;
    this.tone(740, 0.35, 0.035, 'triangle', 420);
  }

  success() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [261.63, 329.63, 392.0, 523.25].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.03 + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.4);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(now + i * 0.08);
      osc.stop(now + 3.6);
    });
    this.tone(1046.5, 0.8, 0.02, 'triangle');
  }

  fail() {
    if (!this.ctx) return;
    this.tone(110, 1.8, 0.08, 'sawtooth', 55);
    this.tone(82, 2.2, 0.06, 'sine', 41);
  }
}
