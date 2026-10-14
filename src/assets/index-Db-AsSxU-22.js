// assets/index-Db-AsSxU 22 — math
// Lines 9823-9971 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function Qe(e, o) {
  (Oe(
    e,
    o,
    1,
    d0.hips,
    0.052,
    0.07,
    0.172,
    -0.82,
    -0.5,
    0.2,
    0.08,
    0.1,
    1,
    0.9,
    -0.2,
    -0.5,
  ),
    Oe(
      e,
      o,
      -1,
      d0.hips,
      -0.046,
      0.085,
      0.188,
      0.85,
      -0.42,
      0.22,
      -0.05,
      0.3,
      1,
      -0.9,
      -0.2,
      -0.5,
    ));
}
function To(e, o) {
  const c = Math.floor(o / 4.3),
    t = c * 4.3 + qe(c, e.seed) * 1.8,
    s = wt(o - t, 0.07) * (o > t ? Math.exp(-(o - t) * 3) * 2.2 : 0);
  return { k: I0(s), side: qe(c + 7, e.seed) > 0.5 ? 1 : -1 };
}
function Xe(e, o, n, c, t = {}) {
  const s = e.J,
    i = e.seed,
    r = 1 - (t.still ?? 0),
    l = de(n * 0.16, i + 1) * 0.018 * (t.shift ?? 1),
    a = Math.sin(n * 1.45 + i) * r;
  (o.hp.set(
    l,
    s.hips[1] - 0.022 - Math.abs(l) * 0.2 + a * 0.0015,
    s.hips[2] + 0.005,
  ),
    e.qe(o.q[d0.hips], 1.5, de(n * 0.14, i + 3) * 2 * r, -l * 90),
    Ee(e, o, n, c, { lean: 2, ...t }));
  for (const u of [1, -1]) {
    const f = pe[u];
    e.leg(o, u, f[0], e.ankleFor(u, 0), f[1], 0, f[2]);
  }
}
function Co(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = Math.sin(n * 2 * Math.PI * 0.4),
    r = de(n * 0.35, s + 3),
    l = To(t, n);
  (qt(t, e, {
    lean: -4 + i * 4.5,
    pitch: 10 + i * 3,
    roll: -2 + r * 2.2,
    yaw: r * 2,
  }),
    Ee(t, e, n, c, {
      sp: 14 + i * 4 + l.k * 2,
      cp: 12 + i * 3,
      sr: -3 + r * 2,
      cr: -4 + r * 2 + l.k * 4 * l.side,
      hp: 34 + i * 4 - l.k * 5,
      hr: 24 + r * 4 + l.k * 7 * l.side,
      hy: 6,
      comp: 0,
      look: 0,
      breath: 0.5,
      jaw:
        Math.max(0, Math.sin(n * 7.3) * Math.sin(n * 1.9 + 1)) *
        5 *
        (t.mouth ? 0 : 1),
      shrugL: 3 + (l.side > 0 ? l.k * 12 : 0),
      shrugR: -3 + (l.side < 0 ? l.k * 12 : 0),
    }),
    ct(t, e));
}
function Fo(e, o, n, c) {
  const t = this,
    s = R0(0.12, 1.2, o),
    i = R0(0.3, 1.2, o);
  (qt(t, e, { lean: T0(-4, 1.5, s), pitch: T0(10, 3, s), roll: T0(-2, 0, s) }),
    Ee(t, e, n, c, {
      sp: T0(14, 3, s),
      cp: T0(12, 2, s),
      sr: T0(-3, 0, s),
      cr: T0(-4, 0, s),
      hp: T0(34, 3, i),
      hr: T0(24, 3, s),
      hy: T0(6, 0, s),
      comp: i * 0.6,
      look: 0,
      breath: T0(0.5, 0.25, s),
      shrugL: T0(3, 0, s),
      shrugR: T0(-3, 0, s),
    }),
    ct(t, e, T0(0, -0.07, s), T0(0, -0.04, s)));
}
const R1 = (e) => e.set(0.05, 1.6, _e - 1.45);
function Eo(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = R0(0.22, 1.3, o);
  (qt(t, e, { lean: 1.5, pitch: 3, yaw: -9 * R0(0.4, 1.4, o), dx: -0.01 * i }),
    t.look && t.look.z < _e + 0.1 ? s.lb.copy(t.look) : R1(s.lb),
    Ee(t, e, n, c, {
      sp: 3,
      cp: 2,
      hp: 3,
      hr: 3 * (1 - i),
      comp: 0.6,
      target: s.lb,
      targetW: i,
      right: !0,
      torso: R0(0.3, 1.45, o),
      maxYaw: 84,
      breath: 0.35,
    }),
    ct(t, e, -0.07, -0.04));
}
const Dt = { dur: 2.4, t0: 0.8, t1: 2.05 };
function y1(e) {
  return -Math.PI * R0(Dt.t0, Dt.t1, e);
}
const xe = { 1: [0.11, _e - 0.4], [-1]: [-0.11, _e - 0.4] },
  ee = [0.05, 0.5, pe[-1][0], pe[-1][1], pe[-1][2]],
  Te = [0.98, 1.28, -Math.PI / 2],
  ge = [1.3, 1.64, -pe[-1][0], -pe[-1][1], pe[-1][2] - Math.PI],
  ce = [0.8, 1.28, -0.03, 0.15, -Math.PI / 2],
  le = [1.62, 1.96, -pe[1][0], -pe[1][1], pe[1][2] - Math.PI],
  Io = 0.68,
  et = 0.05;
