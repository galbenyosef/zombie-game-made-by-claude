// assets/index-TPd_HXBJ 14 — col
// Lines 4270-4488 of readable/assets/index-TPd_HXBJ.pretty.js (statement-aligned).
function Aa(t, e) {
  const o = t.audio,
    n = { nodes: null, building: !1, t: 0, now: 0 },
    a = (d, i, s = 0.05) => {
      try {
        d.setTargetAtTime(i, n.now, s);
      } catch {}
    },
    l = { run: 0.8, motor: 0.55, hum: 0.35, flange: 0.4 },
    r = {
      run: 0,
      motor: 0,
      hum: 0,
      flange: 0,
      rRun: 1,
      rMotor: 1,
      ob: 0,
      duck: 0,
    },
    p = new D0(),
    f = async () => {
      if (!(n.nodes || n.building || !o?.ctx || !o.buffer)) {
        n.building = !0;
        try {
          const d = o.ctx,
            i = d.createGain();
          i.gain.value = 1;
          const s = d.createPanner();
          ((s.panningModel = "HRTF"),
            (s.distanceModel = "inverse"),
            (s.refDistance = 4),
            (s.rolloffFactor = 1),
            (s.maxDistance = 120));
          const m = d.createGain(),
            v = d.createGain();
          ((m.gain.value = 1),
            (v.gain.value = 0),
            i.connect(m),
            m.connect(s),
            s.connect(o.bus.sfx),
            i.connect(v),
            v.connect(o.bus.sfx));
          const y = {};
          for (const w of Ma) {
            const M = await o.buffer(w);
            if (!M) continue;
            const k = M._seam || (M._seam = Sa(M)),
              P = d.createBufferSource();
            ((P.buffer = k.buf),
              (P.loop = !0),
              (P.loopStart = k.start),
              (P.loopEnd = k.end));
            const C = d.createGain();
            ((C.gain.value = 0),
              P.connect(C),
              C.connect(i),
              P.start(
                d.currentTime + 0.02,
                k.start + Math.random() * (k.end - k.start),
              ),
              (y[w] = { s: P, g: C, norm: M._norm ?? 1 }));
          }
          n.nodes = { c: d, out: i, pan: s, gP: m, gD: v, layers: y };
        } catch {
          n.nodes = null;
        }
        n.building = !1;
      }
    };
  return {
    shot: (d, i, s = 0.8, m = {}) => {
      if (!o?.play) return null;
      try {
        return o.play(d, {
          ...(e.onboard
            ? {}
            : { pos: [i.x, i.y, i.z], ref: m.ref ?? 4, rolloff: 1 }),
          vol: s,
          ...m,
        });
      } catch {
        return null;
      }
    },
    update(d, i) {
      ((n.t += d), !n.nodes && !n.building && o?.ctx && f());
      const s = n.nodes;
      if (!s) return;
      const m = Math.abs(i.speed);
      ((r.run = kt(r.run, V0(0.2, 5, m) * (0.45 + 0.55 * V0(4, 16, m)), 3, d)),
        (r.rRun = 0.6 + 0.6 * qt(m / 17)));
      const v = V0(0.1, 0.6, i.accel),
        y = V0(0.1, 0.6, -i.accel);
      ((r.motor = kt(
        r.motor,
        i.power * V0(0.05, 1.2, m) * (0.3 + 0.7 * Math.max(v, y * 0.85)) +
          i.power * v * (1 - V0(0, 0.5, m)) * 0.6,
        2.5,
        d,
      )),
        (r.rMotor = 0.55 + 0.75 * qt(m / 18) + 0.06 * v),
        (r.hum = kt(
          r.hum,
          i.power * (0.7 + 0.3 * (1 - V0(0.5, 5, m))),
          1.5,
          d,
        )),
        (r.flange = kt(
          r.flange,
          V0(0.0016, 0.004, Math.abs(i.curve)) * V0(3, 9, m),
          2,
          d,
        )),
        (r.ob = kt(r.ob, e.onboard ? 1 : 0, 6, d)),
        (r.duck = kt(r.duck, o.speaking ? 1 : 0, o.speaking ? 10 : 2.2, d)));
      const w = s.c.currentTime;
      n.now = w;
      const M = (e.engineVol ?? 1) * (1 - 0.45 * r.duck),
        k = s.layers;
      (k.train_run &&
        (a(k.train_run.g.gain, k.train_run.norm * l.run * r.run * M),
        a(k.train_run.s.playbackRate, r.rRun, 0.15)),
        k.train_motor &&
          (a(k.train_motor.g.gain, k.train_motor.norm * l.motor * r.motor * M),
          a(k.train_motor.s.playbackRate, r.rMotor, 0.12)),
        k.train_hum &&
          a(k.train_hum.g.gain, k.train_hum.norm * l.hum * r.hum * M),
        k.train_flange &&
          (a(
            k.train_flange.g.gain,
            k.train_flange.norm * l.flange * r.flange * M,
          ),
          a(k.train_flange.s.playbackRate, 0.9 + 0.2 * qt(m / 15), 0.3)),
        a(s.gP.gain, 1 - r.ob, 0.08),
        a(s.gD.gain, r.ob, 0.08),
        p.copy(i.near));
      const P = s.pan;
      ((P.positionX.value = p.x),
        (P.positionY.value = p.y),
        (P.positionZ.value = p.z));
    },
    mix: l,
    dispose() {
      const d = n.nodes;
      if (d) {
        n.nodes = null;
        try {
          for (const i of Object.values(d.layers)) i.s.stop();
          (d.out.disconnect(), d.pan.disconnect());
        } catch {}
      }
    },
  };
}
const K = {
  paper: _({ col: "#b4b0a6", rough: 0.9, kind: O.DECAL }),
  paperBack: _({ col: "#b8b2a2", rough: 0.9, kind: O.PAINT }),
  canopy: _({ col: "#1a2233", rough: 0.55, kind: O.PAINT }),
  shaft: _({ col: "#2a2a2c", rough: 0.4, metal: 0.8, kind: O.PLAIN }),
  wood: _({ col: "#3b2416", rough: 0.45, kind: O.PAINT }),
  phone: _({ col: "#0c0d0f", rough: 0.25, metal: 0.4, kind: O.PLAIN }),
  screen: _({ col: "#ffffff", rough: 0.15, kind: O.GLOW, param: 1.6 }),
  bag: _({ col: "#c4bcac", rough: 0.85, kind: O.DECAL }),
  bagIn: _({ col: "#9a8f78", rough: 0.9, kind: O.PAINT }),
  orange: _({ col: "#c4560e", rough: 0.55, kind: O.PAINT }),
  apple: _({ col: "#7a1410", rough: 0.4, kind: O.PAINT }),
  can: _({ col: "#ffffff", rough: 0.35, metal: 0.3, kind: O.DECAL }),
  tin: _({ col: "#8a8a86", rough: 0.3, metal: 1, kind: O.PLAIN }),
  box: _({ col: "#ffffff", rough: 0.6, kind: O.DECAL }),
  cup: _({ col: "#d8d0bc", rough: 0.6, kind: O.PAINT }),
  lid: _({ col: "#222222", rough: 0.5, kind: O.PAINT }),
  fabric: _({ col: [0.5, 0.5, 0.5], rough: 0.9, kind: O.FABRIC }),
  foam: _({ col: "#8a7a52", rough: 0.95, kind: O.FOAM }),
  shoe: _({ col: "#1c1512", rough: 0.45, kind: O.PAINT }),
  sole: _({ col: "#2a2724", rough: 0.85, kind: O.RUBBER }),
  blood: _({ col: [0.42, 0.38, 0.38], rough: 0.3, kind: O.SMEAR, param: 1 }),
  bloodDry: _({
    col: [0.36, 0.33, 0.33],
    rough: 0.62,
    kind: O.SMEAR,
    param: 0.95,
  }),
};
function ue(t, e, o, n, a, l, r, p, f = {}) {
  const c = f.lift ?? 0.004,
    d = f.crumple ?? 0.01,
    i = h.FL + c,
    s = Math.cos(l),
    m = Math.sin(l),
    v = (k, P) => {
      const C = (k - 0.5) * n,
        F = (P - 0.5) * a,
        D =
          d *
            (Math.sin(k * 7.1 + P * 2.3) * 0.5 +
              Math.sin(P * 9.7 - k * 3.1) * 0.35 +
              (f.fold ? Math.abs(k - 0.5) * -1.2 + 0.6 : 0)) +
          d * 0.6;
      return [e + C * s - F * m, i + Math.max(0, D), o + C * m + F * s];
    },
    y = he(v, 8, 6, !0),
    w = ct(r);
  t.add(y, null, f.surf || K.paper, { uv: (k, P, C, F) => w(k, P, C, 1 - F) });
  const M = he(v, 8, 6, !1);
  t.add(M, null, K.paperBack);
}
function T0(t, e, o, n, a, l, r, p, f = 0) {
  const c = (d, i) => [
    e.x + o.x * d + n.x * i,
    e.y + o.y * d + n.y * i,
    e.z + o.z * d + n.z * i,
  ];
  t.add(
    h0(c(-a / 2, -l / 2), c(a / 2, -l / 2), c(a / 2, l / 2), c(-a / 2, l / 2)),
    null,
    p,
    { uv: ct(r), anim: f },
  );
}
