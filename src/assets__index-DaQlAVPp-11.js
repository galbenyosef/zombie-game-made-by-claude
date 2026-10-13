// assets__index-DaQlAVPp 11 — math
// Lines 38322-38774 of readable/assets__index-DaQlAVPp.pretty.js (statement-aligned).
class yS {
  constructor(e) {
    ((this.game = e),
      (this.ctx = null),
      (this.buffers = new Map()),
      (this.loading = new Map()),
      (this.loops = new Map()),
      (this.enabled = !e.service),
      (this.listenerPos = { x: 0, y: 0, z: 0 }),
      (this.manifest = {}),
      (this.voiceLevel = 0),
      (this.voiceFlux = 0),
      (this.speaking = null),
      (this._an = null),
      (this._an2 = null),
      (this._freq = null),
      (this._time = null));
  }
  unlock() {
    if (!this.enabled || this.ctx) return;
    const e = window.AudioContext || window.webkitAudioContext;
    if (!e) {
      this.enabled = !1;
      return;
    }
    let t;
    try {
      t = new e({ latencyHint: "interactive", sampleRate: 48e3 });
    } catch {
      t = new e({ latencyHint: "interactive" });
    }
    this.ctx = t;
    const n = (c) => {
      const h = t.createGain();
      return ((h.gain.value = c), h);
    };
    this.master = n(0.9);
    const i = t.createWaveShaper(),
      s = 2048,
      a = new Float32Array(s),
      o = 0.7,
      l = 0.89;
    for (let c = 0; c < s; c++) {
      const h = (c / (s - 1)) * 2 - 1,
        d = Math.abs(h);
      a[c] =
        Math.sign(h) * (d < o ? d : o + (l - o) * Math.tanh((d - o) / (l - o)));
    }
    ((i.curve = a),
      (i.oversample = "2x"),
      (this._lp = t.createBiquadFilter()),
      (this._lp.type = "lowpass"),
      (this._lp.Q.value = 0.9),
      (this._lp.frequency.value = t.sampleRate / 2),
      this.master.connect(this._lp),
      this._lp.connect(i),
      i.connect(t.destination),
      (this._ringG = n(0)));
    for (const [c, h] of [
      [2900, 0.6],
      [2900.4, 0.4],
      [5790, 0.12],
    ]) {
      const d = t.createOscillator();
      d.frequency.value = c;
      const u = n(h);
      (d.connect(u), u.connect(this._ringG), d.start());
    }
    (this._ringG.connect(i),
      (this.bus = {
        sfx: n(1),
        voice: n(1),
        amb: n(0.8),
        music: n(0.8),
        akane: n(1),
      }),
      (this.reverbSend = n(0)),
      (this.reverb = t.createConvolver()),
      (this.reverb.buffer = this._impulse(2.4, 2.6)),
      (this.reverbOut = n(0.6)),
      this.reverbSend.connect(this.reverb),
      this.reverb.connect(this.reverbOut),
      this.reverbOut.connect(this.master));
    for (const [c, h] of Object.entries(this.bus))
      c !== "akane" && h.connect(this.master);
    {
      const c = n(1.6),
        h = n(Cc),
        d = t.createDynamicsCompressor();
      ((d.threshold.value = -24),
        (d.knee.value = 12),
        (d.ratio.value = 2.5),
        (d.attack.value = 0.004),
        (d.release.value = 0.2));
      const u = t.createDynamicsCompressor();
      ((u.threshold.value = -12),
        (u.knee.value = 2),
        (u.ratio.value = 20),
        (u.attack.value = 0.001),
        (u.release.value = 0.08),
        this.bus.akane.connect(c),
        c.connect(d),
        d.connect(u),
        u.connect(h),
        h.connect(this.master),
        (this.akaneOut = h));
    }
    {
      ((this._bg = t.createAnalyser()),
        (this._bg.fftSize = 1024),
        (this._bgBuf = new Float32Array(1024)),
        (this._bgPow = 0),
        (this._bgDb = -60),
        (this._akG = Cc));
      for (const c of ["sfx", "amb", "music"]) this.bus[c].connect(this._bg);
    }
    ((this._an = t.createAnalyser()),
      (this._an.fftSize = 1024),
      (this._an.smoothingTimeConstant = 0.35),
      this.bus.voice.connect(this._an),
      this.bus.akane.connect(this._an),
      (this._freq = new Uint8Array(this._an.frequencyBinCount)),
      (this._time = new Float32Array(this._an.fftSize)),
      t.state === "suspended" && t.resume());
  }
  _impulse(e, t) {
    const n = this.ctx,
      i = Math.floor(n.sampleRate * e),
      s = n.createBuffer(2, i, n.sampleRate);
    for (let a = 0; a < 2; a++) {
      const o = s.getChannelData(a);
      let l = 0;
      for (let c = 0; c < i; c++) {
        const h = c / i;
        ((l += (Math.random() * 2 - 1 - l) * (0.25 + 0.6 * (1 - h))),
          (o[c] = l * Math.pow(1 - h, t) * (c < 400 ? c / 400 : 1)));
      }
    }
    return s;
  }
  async loadManifest() {
    try {
      this.manifest = await (
        await fetch(Gd + "audio/manifest.json", { cache: "no-store" })
      ).json();
    } catch {
      this.manifest = {};
    }
  }
  async buffer(e) {
    if (this.buffers.has(e)) return this.buffers.get(e);
    if (this.loading.has(e)) return this.loading.get(e);
    if (!this.ctx) return null;
    const t = this.manifest[e],
      n = t ? `${Gd}audio/${t.file}` : null;
    if (!n) return (this.buffers.set(e, null), null);
    const i = fetch(n)
      .then((s) => (s.ok ? s.arrayBuffer() : null))
      .then((s) => (s ? this.ctx.decodeAudioData(s) : null))
      .catch(() => null)
      .then(
        (s) => (
          s && (s._norm = this._normGain(e, s)),
          this.buffers.set(e, s),
          this.loading.delete(e),
          s
        ),
      );
    return (this.loading.set(e, i), i);
  }
  _normGain(e, t) {
    const n = t.getChannelData(0),
      i = 2048,
      s = [];
    let a = 0;
    for (let d = 0; d + i <= n.length; d += i) {
      let u = 0;
      for (let f = 0; f < i; f++) {
        const p = n[d + f];
        ((u += p * p), Math.abs(p) > a && (a = Math.abs(p)));
      }
      s.push(Math.sqrt(u / i));
    }
    if (!s.length) return 1;
    s.sort((d, u) => d - u);
    const o = Math.max(1e-4, s[Math.floor(s.length * 0.9)]),
      l = e.startsWith("gun_")
        ? 0.17
        : e.startsWith("amb_")
          ? 0.045
          : /^(v_|s2_|a2_)/.test(e)
            ? 0.12
            : e.startsWith("step_")
              ? 0.06
              : e.startsWith("piano_")
                ? 0.1
                : e.startsWith("zombie_")
                  ? 0.11
                  : e === "heartbeat"
                    ? 0.09
                    : e.startsWith("door_")
                      ? 0.12
                      : 0.09,
      c = e.startsWith("amb_")
        ? 16
        : e.startsWith("step_") ||
            e === "pickup_item" ||
            e === "lock_pick" ||
            e.startsWith("door_locked")
          ? 12
          : 4;
    let h = Math.min(c, Math.max(0.2, l / o));
    return (h * a > 1.5 && (h = 1.5 / a), h);
  }
  async preload(e) {
    this.ctx && (await Promise.all(e.map((t) => this.buffer(t))));
  }
  duration(e) {
    return this.manifest[e]?.dur ?? 0;
  }
  play(e, t = {}) {
    if (!this.ctx) return null;
    const n = this.buffers.get(e);
    if (n === void 0)
      return (
        this.buffer(e).then((h) => {
          h && !t.skipLate && this.play(e, { ...t, skipLate: !0 });
        }),
        null
      );
    if (!n) return null;
    const i = this.ctx,
      s = i.createBufferSource();
    ((s.buffer = n), (s.playbackRate.value = t.rate ?? 1), (s.loop = !!t.loop));
    const a = i.createGain();
    a.gain.value = (t.vol ?? 1) * (n._norm ?? 1);
    let o = a;
    s.connect(a);
    let l = null;
    if (t.pos)
      ((l = i.createPanner()),
        (l.panningModel = "HRTF"),
        (l.distanceModel = "inverse"),
        (l.refDistance = t.ref ?? 1.5),
        (l.rolloffFactor = t.rolloff ?? 1.2),
        (l.maxDistance = 60),
        (l.positionX.value = t.pos[0]),
        (l.positionY.value = t.pos[1]),
        (l.positionZ.value = t.pos[2]),
        a.connect(l),
        (o = l));
    else if (t.pan != null) {
      const h = i.createStereoPanner();
      ((h.pan.value = t.pan), a.connect(h), (o = h));
    }
    if ((o.connect(this.bus[t.bus || "sfx"]), t.reverb)) {
      const h = i.createGain();
      ((h.gain.value = t.reverb), o.connect(h), h.connect(this.reverbSend));
    }
    if (t.dur != null && !t.loop) {
      const h = i.currentTime + (t.delay ?? 0),
        d = Math.max(0.08, t.dur);
      (s.start(h, Math.max(0, t.offset ?? 0), d + 0.02),
        a.gain.setValueAtTime(a.gain.value, h + d - 0.06),
        a.gain.linearRampToValueAtTime(0, h + d));
    } else s.start(i.currentTime + (t.delay ?? 0), Math.max(0, t.offset ?? 0));
    const c = {
      source: s,
      gain: a,
      panner: l,
      stop: (h = 0.05) => {
        try {
          (a.gain.setTargetAtTime(0, i.currentTime, h / 3),
            s.stop(i.currentTime + h * 1.5));
        } catch {}
      },
    };
    return (
      (s.onended = () => {
        try {
          (o.disconnect(), a.disconnect());
        } catch {}
        t.onEnd && t.onEnd();
      }),
      c
    );
  }
  loop(e, t = {}) {
    if (this.loops.has(e)) return this.loops.get(e);
    const n = { id: e, handle: null, vol: 0, pending: !0 };
    this.loops.set(e, n);
    const i = () => {
      if (!this.buffers.get(e) || !this.ctx) return;
      const a = this.play(e, {
        vol: 0,
        loop: !0,
        bus: t.bus || "amb",
        pos: t.pos,
        reverb: t.reverb,
      });
      ((n.handle = a),
        (n.pending = !1),
        a && a.gain.gain.setTargetAtTime(n.vol, this.ctx.currentTime, 0.3));
    };
    return (
      (n.fadeTo = (s, a = 1.5) => {
        ((n.vol = s),
          n.handle &&
            this.ctx &&
            n.handle.gain.gain.setTargetAtTime(s, this.ctx.currentTime, a / 3));
      }),
      (n.stop = (s = 1.5) => {
        n.fadeTo(0, s);
        const a = n.handle;
        (setTimeout(
          () => {
            a && a.stop(0.1);
          },
          s * 1e3 + 200,
        ),
          this.loops.delete(e));
      }),
      this.buffers.get(e) ? i() : this.buffer(e).then(i),
      n.fadeTo(t.vol ?? 0.5, t.fade ?? 2),
      n
    );
  }
  voice(e, t = {}) {
    return new Promise((n) => {
      const i = () => {
        const s = this.play(e, {
          ...t,
          bus: t.bus || "voice",
          reverb: t.reverb ?? 0.25,
          vol: t.vol ?? 1,
          onEnd: () => {
            (this.speaking === s && (this.speaking = null), n());
          },
        });
        if (!s) {
          n();
          return;
        }
        ((this.speaking = s),
          (this.speakingId = e),
          t.onHandle && t.onHandle(s));
      };
      if (!this.ctx) {
        this.game.sched.wait(this.duration(e) || 1.5).then(n);
        return;
      }
      this.buffers.get(e)
        ? i()
        : this.buffer(e).then((s) => {
            s ? i() : n();
          });
    });
  }
  muffle(e = 0, t = 0.8, n = 0) {
    if (!this.ctx || !this._lp) return;
    ((e = Math.max(0, Math.min(1, +e || 0))), (t = Math.max(0.02, t)));
    const i = this.ctx,
      s = i.currentTime,
      a = i.sampleRate / 2,
      o = this._lp.frequency,
      l = this._ringG.gain,
      c = (d) => (d <= 0.001 ? a : 400 * Math.pow(a / 400, 1 - d)),
      h = (d) => 0.022 * d * d;
    (o.cancelScheduledValues(s),
      o.setValueAtTime(Math.max(30, o.value), s),
      o.exponentialRampToValueAtTime(c(e), s + t),
      l.cancelScheduledValues(s),
      l.setValueAtTime(l.value, s),
      l.linearRampToValueAtTime(h(e), s + t * 1.3),
      n > 0 &&
        (o.setValueAtTime(c(e), s + t + n),
        o.exponentialRampToValueAtTime(a, s + t + n + t * 1.5),
        l.setValueAtTime(h(e), s + t * 1.3 + n),
        l.linearRampToValueAtTime(0, s + t * 1.3 + n + t * 2)),
      (this._muffle = e),
      (this._muffleEnd = n > 0 ? s + t + n + t * 1.5 : 1 / 0));
  }
  get muffleK() {
    return !this.ctx ||
      !(this._muffle > 0) ||
      this.ctx.currentTime >= this._muffleEnd
      ? 0
      : this._muffle;
  }
  duck(e, t = 0.4, n = 1.2) {
    if (!this.ctx) return;
    const i = this.bus[e].gain,
      s = this.ctx.currentTime;
    (i.cancelScheduledValues(s),
      i.setTargetAtTime(t, s, 0.08),
      i.setTargetAtTime(1, s + n, 0.5));
  }
  setListener(e, t) {
    if (!this.ctx) return;
    const n = this.ctx.listener,
      i = this.ctx.currentTime,
      s = -Math.sin(t),
      a = -Math.cos(t);
    n.positionX
      ? (n.positionX.setValueAtTime(e.x, i),
        n.positionY.setValueAtTime(e.y, i),
        n.positionZ.setValueAtTime(e.z, i),
        n.forwardX.setValueAtTime(s, i),
        n.forwardY.setValueAtTime(0, i),
        n.forwardZ.setValueAtTime(a, i),
        n.upX.setValueAtTime(0, i),
        n.upY.setValueAtTime(1, i),
        n.upZ.setValueAtTime(0, i))
      : (n.setPosition(e.x, e.y, e.z), n.setOrientation(s, 0, a, 0, 1, 0));
  }
  _levelAkane(e) {
    const t = this._bgBuf;
    this._bg.getFloatTimeDomainData(t);
    let n = 0;
    for (let o = 0; o < t.length; o++) n += t[o] * t[o];
    const i = n / t.length;
    ((this._bgPow +=
      (i - this._bgPow) * (1 - Math.exp(-e / (i > this._bgPow ? 0.6 : 2.5)))),
      (this._bgDb = 10 * Math.log10(this._bgPow + 1e-12)));
    const s = Math.min(1, Math.max(0, (this._bgDb + 24) / 10)),
      a = Cc * Math.pow(10, (-4 + 4 * s) / 20);
    Math.abs(a - this._akG) > 0.004 &&
      ((this._akG = a),
      this.akaneOut.gain.setTargetAtTime(a, this.ctx.currentTime, 0.3));
  }
  update(e) {
    if (!this._an) return;
    if ((this._levelAkane(e), !this.speaking)) {
      ((this.voiceLevel *= Math.exp(-e * 12)),
        (this.voiceFlux *= Math.exp(-e * 8)));
      return;
    }
    this._an.getFloatTimeDomainData(this._time);
    let t = 0;
    for (let l = 0; l < this._time.length; l++)
      t += this._time[l] * this._time[l];
    const n = Math.sqrt(t / this._time.length);
    this._an.getByteFrequencyData(this._freq);
    let i = 0,
      s = 0;
    for (let l = 2; l < 180; l++)
      ((i += l * this._freq[l]), (s += this._freq[l]));
    const a = s > 0 ? i / s / 180 : 0,
      o = Math.min(1, n * 5.5);
    ((this.voiceLevel += (o - this.voiceLevel) * Math.min(1, e * 30)),
      (this.voiceFlux += (a - this.voiceFlux) * Math.min(1, e * 15)));
  }
}
