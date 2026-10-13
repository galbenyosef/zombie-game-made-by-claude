// assets__index-Db-AsSxU 24 — math
// Lines 10296-10632 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
function Oo(e, o, n, c) {
  const t = this,
    s = R0(0.12, 0.35, o) * (1 - R0(1, 1.42, o)),
    i = Math.sin((o - 0.18) * 2 * Math.PI * 1.3) * 16 * s;
  (Xe(t, e, n, c, { hy2: i, hp2: 5 * s, hr2: -2 * s }),
    Qe(t, e),
    Me(t, e, -1),
    Oe(
      t,
      e,
      -1,
      d0.chest,
      -0.11,
      0.03,
      0.3,
      0.06,
      1,
      0.12,
      0.05,
      0.12,
      -1,
      -0.9,
      -0.45,
      -0.2,
    ),
    Le(t, e, -1, R0(0.04, 0.38, o) * (1 - R0(1.05, 1.5, o))));
}
function Po(e, o, n, c) {
  const t = this,
    s = t.st,
    i = s.shamble;
  t.gait(e, i, t.speed, n);
  const r = t.cyc;
  (Ee(t, e, n, c, {
    lean: i.lean ?? 3,
    cr: Math.sin(2 * Math.PI * (r - 0.25)) * 1.5,
  }),
    t.tq.setFromAxisAngle(
      Ke,
      (i.yaw ?? 3) * Math.cos(2 * Math.PI * r) * t.speed * 1.4 * te,
    ),
    e.q[d0.chest].premultiply(t.tq));
  const l = (i.armSwing ?? 9) * t.speed;
  for (const a of [1, -1]) {
    const u = Math.sin(2 * Math.PI * (r + (a > 0 ? 0.5 : 0))) * l;
    (t.dangle(e, a, 4 + u, 7, 14 + Math.max(0, u) * 0.6),
      t.hand(e, a, 10, 0, 0));
  }
}
function Bo(e, o, n, c) {
  const t = this;
  Xe(t, e, n, c, { lean: -4, hp2: -7, breath: 1.4, shift: 0.5 });
  for (const s of [1, -1]) {
    (t.dangle(e, s, 5, 17, 12), t.fkTo(e, s > 0 ? d0.foreArmL : d0.foreArmR));
    const i = ae(t),
      r = i.a.set(s * 0.25, -1, 0.08);
    st(t, e, s, r.x, r.y, r.z, s * 0.5, 0.1, -1);
  }
}
const S1 = { 1: [0.165, 0.045, 0.24], [-1]: [-0.17, -0.065, -0.26] },
  Ye = { 1: [0.135, 0.075, 0.2], [-1]: [-0.145, -0.135, -0.24] },
  Wo = (e) => (e === "shield" ? S1 : e === "grabbed" ? Ye : pe),
  Ze = (e, o) =>
    Math.sin(e * 61 + o * 1.7) * 0.45 +
    Math.sin(e * 47.3 + o * 4.1) * 0.35 +
    Math.sin(e * 73.9 + o * 2.9) * 0.2,
  jo = (e) => (e.look && e.look.z > 0.25 ? 1 : 0);
function lt(e, o, n, c = 0, t = 0, s = 0, i = 0, r = 0) {
  for (const l of [1, -1]) {
    const a = n[l],
      u = l === c;
    e.leg(
      o,
      l,
      a[0] + (u ? t : 0),
      e.ankleFor(l, u ? r : 0) + (u ? i : 0),
      a[1] + (u ? s : 0),
      u ? r : 0,
      a[2],
    );
  }
}
function Ko(e, o) {
  const n = ae(e);
  return (
    (n.vt = (e.mouth ?? 0) > 0.02 ? 0 : (n.vt ?? 9) + Math.max(o, 0)),
    R0(0.5, 1.2, n.vt)
  );
}
function Yo(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = t.J,
    r = de(n * 0.3, s + 3),
    l = de(n * 0.22, s + 8),
    a = Math.sin(n * 1.25 + s),
    u = 5.8,
    f = Math.floor(n / u),
    d = n - f * u - qe(f, s) * 1.6,
    v = R0(0, 0.6, d) * (1 - R0(1.5, 2.2, d)) * (qe(f + 5, s) > 0.25 ? 1 : 0),
    C =
      Math.max(
        0,
        Math.sin(n * 6.1) * Math.sin(n * 1.7 + 1) +
          0.3 * Math.sin(n * 11.3 + 2),
      ) *
      7 *
      Ko(t, c);
  if (
    (e.hp.set(r * 0.012, i.hips[1] - 0.018 + a * 0.002, i.hips[2] + 0.004),
    t.qe(e.q[d0.hips], 1, l * 2, -r * 1.2),
    Ee(t, e, n, c, {
      lean: -4,
      sp: -1.5 + l * 0.8,
      cp: -3 + a * 1.6 - v * 2,
      sr: r * 1.2,
      cr: r * 1.6,
      hp: -9 - v * 5,
      hr: 2 + r * 3,
      hy: l * 3,
      comp: 0.5,
      look: 0,
      breath: 0.4,
      jaw: C,
      shrugL: v * 3 + a * 1.2,
      shrugR: v * 3 + a * 1.2,
    }),
    lt(t, e, pe),
    ct(t, e, -0.01, -0.01),
    v > 0.001)
  ) {
    for (const p of [1, -1]) Me(t, e, p);
    for (const p of [1, -1])
      Oe(
        t,
        e,
        p,
        d0.chest,
        p * 0.075,
        0.115,
        0.27,
        p * 0.12,
        0.5,
        0.86,
        p * 0.55,
        -0.82,
        0.12,
        p * 0.9,
        -0.5,
        -0.25,
      );
    for (const p of [1, -1]) Le(t, e, p, v);
  }
}
function Go(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = t.J,
    r = Math.sin(n * 2.7 + s),
    l = 0.5 + 0.5 * r,
    a = de(n * 0.5, s + 1) * 0.012;
  (e.hp.set(a, i.hips[1] - 0.062 + l * 0.006, i.hips[2] - 0.012),
    t.qe(e.q[d0.hips], 3, de(n * 0.3, s + 3) * 3, -a * 90));
  const u = Ze(n, 1);
  (Ee(t, e, n, c, {
    lean: 10,
    sp: 3,
    cp: 4 - l * 6,
    hp: -13 + u * 0.6,
    hr: u * 0.5,
    hy: de(n * 0.6, s + 5) * 4,
    comp: 0.8,
    breath: 0,
    look: jo(t),
    torso: 0,
    maxYaw: 55,
    jaw: 1 + l * 3.5,
    shrugL: 13 + l * 5 + u * 0.8,
    shrugR: 13 + l * 5 - u * 0.8,
  }),
    lt(t, e, S1));
  for (const f of [1, -1]) {
    const d = (41 + Ze(n, 3 + f) * 1.3 + l * 2) * te,
      v = (27 + Ze(n, 5 + f) * 1.2) * te;
    (t.armDir(
      e,
      f,
      f * Math.sin(d),
      -Math.cos(d) * Math.cos(v),
      Math.cos(d) * Math.sin(v),
      0,
      0.3,
      1,
      22 + Ze(n, 7 + f) * 2,
    ),
      st(t, e, f, f * 0.55, -0.8, 0.28, f * 0.25, 0.12, -1));
  }
}
const Uo = 0.8;
function $o(e, o, n, c) {
  const t = this,
    s = ae(t);
  ((s.flT == null || o < s.flT) &&
    ((s.flN = (s.flN ?? 0) + 1),
    (s.flSide = t.opts?.side ?? (s.flN % 2 ? -1 : 1))),
    (s.flT = o));
  const i = s.flSide,
    r = -i,
    l = x1[t.prevLoop];
  l && l.loop && !l.gait
    ? l.fn.call(t, e, o, n, c)
    : (Xe(t, e, n, c), Qe(t, e));
  const a = R0(0, 0.1, o) * (1 - R0(0.38, 0.8, o)),
    u = wt(o, 0.06),
    f = R0(0.03, 0.25, o),
    d = R0(0.42, 0.68, o),
    v = f - d,
    C =
      (o < 0.25 ? Math.sin(Math.PI * I0((o - 0.03) / 0.22)) * 0.055 : 0) +
      (o > 0.42 && o < 0.68
        ? Math.sin((Math.PI * (o - 0.42)) / 0.26) * 0.035
        : 0);
  if (c > 0)
    for (const _ of [0.25, 0.68])
      o >= _ && o - c < _ && t.events.push(["step", i > 0 ? "L" : "R"]);
  ((e.hp.x += i * 0.035 * v),
    (e.hp.y -= 0.03 * a + 0.012 * u),
    (e.hp.z -= 0.075 * v + 0.03 * u),
    e.q[d0.hips].premultiply(s.q0.setFromAxisAngle(Ke, i * 18 * a * te)));
  const p = (_, G, y, E) => e.q[_].multiply(t.qe(s.q1, G, y, E));
  (p(d0.spine, -8 * a - 5 * u, i * 12 * a, -i * 3 * a),
    p(d0.chest, -5 * a - 4 * u, i * 16 * a, 0));
  const F = 14 * a - 10 * u,
    J = i * 32 * a,
    n0 = -i * 8 * a;
  (p(d0.neck, F * 0.4, J * 0.45, n0 * 0.45),
    p(d0.head, F * 0.6, J * 0.55, n0 * 0.55),
    p(d0.jaw, 9 * a, 0, 0),
    p(d0.shoulderL, 0, 0, 10 * a),
    p(d0.shoulderR, 0, 0, -10 * a),
    lt(t, e, Wo(t.prevLoop), i, i * 0.02 * v, -0.24 * v, C, -0.16 * v),
    Me(t, e, r),
    Oe(
      t,
      e,
      r,
      d0.chest,
      -r * 0.07,
      0.32,
      0.22,
      -r * 0.75,
      0.55,
      0.2,
      0.05,
      0.15,
      1,
      r * 0.8,
      -0.4,
      0.5,
    ),
    Le(t, e, r, R0(0, 0.09, o) * (1 - R0(0.42, 0.78, o))),
    Me(t, e, i),
    t.dangle(e, i, -16, 28, 30),
    t.hand(e, i, 14, 0, 0),
    Le(t, e, i, a * 0.8));
}
function Vo(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = t.J,
    r = Math.floor(n / 0.85),
    l = n - r * 0.85,
    a = wt(l, 0.07) * (qe(r + 3, s) > 0.3 ? 1 : 0),
    u = qe(r, s) > 0.45 ? 1 : -1,
    f =
      Math.sin(n * 4.4 + s) * 0.5 +
      Math.sin(n * 6.9 + 1.3) * 0.25 +
      u * a * 0.9,
    d =
      Math.sin(n * 3.3 + 2.1) * 0.55 +
      Math.sin(n * 5.7) * 0.25 +
      (qe(r + 7, s) - 0.5) * a * 1.4,
    v = Math.max(0, Math.sin(n * 1.6 + 0.4)),
    C = Math.tanh(de(n * 0.22, s + 12) * 3),
    p = Ze(n, 2),
    F =
      Math.sin(n * 4.4 + s - 0.9) * 0.5 +
      Math.sin(n * 6.9 + 0.5) * 0.25 +
      u * wt(l - 0.05, 0.08) * 0.9;
  (e.hp.set(
    d * 0.045,
    i.hips[1] - 0.05 - v * 0.05,
    i.hips[2] + f * 0.07 - 0.01,
  ),
    t.qe(e.q[d0.hips], 5 + f * 6 + v * 5, d * 7, -d * 5),
    Ee(t, e, n, c, {
      lean: 3,
      sp: 2 + f * 8,
      cp: 1 + f * 12,
      sr: -d * 5,
      cr: -d * 8,
      syaw: d * 6 - C * 4,
      cyaw: d * 7 - C * 6,
      hy: C * 42,
      hp: -14 - F * 9 + p,
      hr: C * 9 + d * 4 + p * 0.6,
      comp: 0.6,
      look: 0,
      breath: 0,
      jaw: 7 + Math.abs(f) * 5,
      shrugL: 13 + f * 5,
      shrugR: 13 + f * 5,
      maxYaw: 80,
    }),
    lt(t, e, Ye));
  for (const J of [1, -1]) {
    const n0 = Math.sin(n * 5.2 + J * 1.3) * 0.025 - f * 0.035;
    Oe(
      t,
      e,
      J,
      d0.chest,
      J * 0.17,
      0.13 + p * 0.003,
      0.26 + n0,
      -J * 0.12,
      0.28,
      1,
      J * 0.85,
      0.45,
      -0.05,
      J * 0.85,
      -0.6,
      -0.1,
    );
  }
}
