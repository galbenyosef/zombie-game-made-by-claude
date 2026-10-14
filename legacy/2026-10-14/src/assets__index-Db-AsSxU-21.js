// assets__index-Db-AsSxU 21 — math
// Lines 9486-9822 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
function yo(e, o) {
  const [n, c, t, s] = e.head.rect,
    i = 1024,
    r = Math.round((i * s) / t),
    l = o
      ? o(i, r)
      : Object.assign(document.createElement("canvas"), {
          width: i,
          height: r,
        }),
    a = l.getContext("2d"),
    u = i / (t * 1e3);
  (a.setTransform(u, 0, 0, -u, -n * 1e3 * u, (c + s) * 1e3 * u),
    a.clearRect(n * 1e3, c * 1e3, t * 1e3, s * 1e3));
  const f = e.head.features,
    d = f.mouthY,
    v = f.mouthW,
    C = f.noseTip;
  ((a.fillStyle = "rgba(206,160,146,0.45)"),
    Z0(
      a,
      J0(
        [-v - 1, d + 0.4],
        [-v * 0.4, d + 4.6],
        [v * 0.4, d + 4.6],
        [v + 1, d + 0.4],
      ),
      (p) => Math.sin(p * Math.PI) * 3.2 + 0.4,
    ),
    Z0(
      a,
      J0([-v, d - 0.9], [-v * 0.4, d - 6.6], [v * 0.4, d - 6.6], [v, d - 0.9]),
      (p) => Math.sin(p * Math.PI) * 4 + 0.4,
    ),
    (a.fillStyle = "rgba(48,20,20,0.95)"),
    Z0(
      a,
      J0(
        [-v - 1.8, d - 0.9],
        [-v * 0.4, d + 0.3],
        [v * 0.4, d + 0.3],
        [v + 1.8, d - 0.9],
      ),
      (p) => 0.85 + Math.pow(Math.abs(p - 0.5) * 2, 2) * 1.1,
    ));
  for (const p of [1, -1])
    ((a.fillStyle = "rgba(54,24,22,0.88)"),
      Z0(
        a,
        J0(
          [p * (v + 1.2), d - 0.8],
          [p * (v + 3.2), d + 0.2],
          [p * (v + 4.6), d + 2.6],
          [p * (v + 5.4), d + 5.6],
        ),
        (F) => 1.8 * (1 - F) + 0.15,
      ),
      (a.fillStyle = "rgba(96,52,46,0.35)"),
      Z0(
        a,
        J0(
          [p * (v + 0.5), d - 2.4],
          [p * (v + 3.5), d - 2.2],
          [p * (v + 5.5), d + 0.5],
          [p * (v + 7), d + 4],
        ),
        (F) => Math.sin(F * Math.PI) * 2.4,
      ),
      (a.fillStyle = "rgba(78,40,36,0.55)"),
      Z0(
        a,
        J0(
          [p * 15.5, C + 1],
          [p * 22, C - 15],
          [p * 27, d + 8],
          [p * 28.5, d - 9],
        ),
        (F) => Math.sin(Math.pow(F, 0.8) * Math.PI) * 1.7 + 0.25,
      ),
      (a.fillStyle = "rgba(244,206,184,0.3)"),
      Z0(
        a,
        J0([p * 19, C - 1], [p * 26, C - 16], [p * 31, d + 7], [p * 32, d - 6]),
        (F) => Math.sin(F * Math.PI) * 3.2,
      ),
      fe(a, p * 36, -50, 10, 7, "246,212,192", 0.22, p * 0.5),
      fe(a, p * 33, d - 6, 8, 5, "120,70,62", 0.16, p * -0.4));
  return l;
}
const te = Math.PI / 180,
  R0 = (e, o, n) => {
    const c = I0((n - e) / (o - e));
    return c * c * (3 - 2 * c);
  },
  So = (e) => e - Math.floor(e),
  de = (e, o) =>
    Math.sin(e * 1.31 + o) * 0.5 +
    Math.sin(e * 2.27 + o * 2.1) * 0.3 +
    Math.sin(e * 0.53 + o * 3.7) * 0.2,
  wt = (e, o) => (e <= 0 ? 0 : (e / o) * Math.exp(1 - e / o)),
  qe = (e, o) => So(Math.sin(e * 12.9898 + o * 78.233) * 43758.5453),
  Ke = new H0(0, 1, 0),
  Ao = new H0(1, 0, 0),
  at = 0.056,
  pe = { 1: [0.1, 0.012, 0.1], [-1]: [-0.1, -0.018, -0.1] },
  M1 = {
    1: [d0.upperArmL, d0.foreArmL, d0.handL],
    [-1]: [d0.upperArmR, d0.foreArmR, d0.handR],
  };
function ae(e) {
  if (e._pr) return e._pr;
  const o = () => new H0(),
    n = () => new Ht();
  return (e._pr = {
    lw: 0,
    look: o(),
    lookOn: !1,
    eyeT: o(),
    eyeOn: !1,
    lb: o(),
    a: o(),
    b: o(),
    c: o(),
    d: o(),
    e: o(),
    f: o(),
    g: o(),
    h: o(),
    k: o(),
    h0: o(),
    h1: o(),
    h2: o(),
    h3: o(),
    h4: o(),
    h5: o(),
    q0: n(),
    q1: n(),
    q2: n(),
    q3: n(),
    m0: new Je(),
    m1: new Je(),
    snap: { 1: [n(), n(), n()], [-1]: [n(), n(), n()] },
    fq: { 1: n(), [-1]: n() },
  });
}
function st(e, o, n, c, t, s, i, r, l) {
  const a = ae(e),
    u = n > 0 ? d0.foreArmL : d0.foreArmR,
    f = n > 0 ? d0.handL : d0.handR;
  e.fkTo(o, u);
  const d = a.h0.set(n * 0.6428, -0.766, 0),
    v = a.h1.set(n * 0.766, 0.6428, 0),
    C = a.h2.crossVectors(d, v),
    p = a.h3.set(c, t, s).normalize(),
    F = a.h4.set(i, r, l);
  F.addScaledVector(p, -F.dot(p)).normalize();
  const J = a.h5.crossVectors(p, F);
  (a.m0.makeBasis(p, F, J),
    a.m1.makeBasis(d, v, C).transpose(),
    a.m0.multiply(a.m1),
    o.q[f].copy(e.wq[u]).invert().multiply(a.q0.setFromRotationMatrix(a.m0)));
}
function Oe(e, o, n, c, t, s, i, r, l, a, u, f, d, v, C, p) {
  const F = ae(e);
  e.fkTo(o, c);
  const J = F.q1.copy(e.wq[c]),
    n0 = F.a.set(t, s, i).applyQuaternion(J).add(e.wp[c]),
    _ = F.b.set(v, C, p).applyQuaternion(J);
  e.armIK(o, n, n0.x, n0.y, n0.z, _.x, _.y, _.z);
  const G = F.c.set(r, l, a).applyQuaternion(J),
    y = F.d.set(u, f, d).applyQuaternion(J);
  st(e, o, n, G.x, G.y, G.z, y.x, y.y, y.z);
}
function Me(e, o, n) {
  const c = M1[n],
    t = ae(e).snap[n];
  for (let s = 0; s < 3; s++) t[s].copy(o.q[c[s]]);
}
const t1 = new Ht();
function Le(e, o, n, c) {
  const t = M1[n],
    s = ae(e).snap[n];
  for (let i = 0; i < 3; i++)
    (t1.copy(o.q[t[i]]), o.q[t[i]].copy(s[i]).slerp(t1, c));
}
function Ee(e, o, n, c, t) {
  const s = e.st,
    i = e.seed,
    r = ae(e),
    l = Math.sin(n * 1.45 + i) * (t.breath ?? 1),
    a = 1 - (t.still ?? 0),
    u = (s.sway ?? 0.4) * a,
    f = de(n * 0.4, i) * 1.2 * u,
    d = de(n * 0.3, i + 4) * 1.6 * u,
    v = s.hunch + (t.lean ?? 0),
    C = s.chestHunch,
    p = v * 0.55 + (t.sp ?? 0),
    F = C + v * 0.45 + l * 0.9 + (t.cp ?? 0);
  let J = d * 0.4 + (t.syaw ?? 0),
    n0 = d * 0.6 + (t.cyaw ?? 0);
  const _ = f * 0.5 + (t.sr ?? 0),
    G = f * 0.5 + (t.cr ?? 0),
    y = t.target || null,
    E = !y && e.look && (t.look ?? 1) > 0 ? e.look : null,
    c0 = y
      ? (t.targetW ?? 1)
      : E
        ? Math.min(1, (e.lookW ?? 0.85) / 0.85) * (t.look ?? 1)
        : 0;
  (y || c <= 0
    ? (r.lw = y ? c0 : r.lw)
    : (r.lw += (c0 - r.lw) * (1 - Math.exp(-c * 5))),
    !y && c <= 0 && E && (r.lw = c0));
  const u0 = y || E;
  u0 &&
    (!r.lookOn || y || c <= 0
      ? r.look.copy(u0)
      : r.look.lerp(u0, 1 - Math.exp(-c * 7)),
    (r.lookOn = !0));
  const q = r.look,
    $ = r.lookOn ? r.lw : 0;
  if (
    ((r.eyeOn = $ > 0.3),
    r.eyeOn && r.eyeT.copy(q),
    $ > 0.002 && (t.torso ?? 1) > 0)
  ) {
    e.fkTo(o, d0.hips);
    const Z = r.e
      .copy(q)
      .sub(e.wp[0])
      .applyQuaternion(r.q2.copy(e.wq[0]).invert());
    let p0 = Math.atan2(Z.x, Z.z) / te;
    t.right && p0 > 100 && (p0 -= 360);
    const j = Math.sign(p0) * I0(Math.abs(p0) - 40, 0, 120),
      t0 = I0(j * 0.6, -58, 58) * $ * (t.torso ?? 1);
    ((J += t0 * 0.4), (n0 += t0 * 0.6));
  }
  (e.qe(o.q[d0.spine], p, J, _), e.qe(o.q[d0.chest], F, n0, G));
  let x =
      s.headPitch -
      (v + C) * (t.comp ?? s.comp ?? 0.55) +
      (t.hp ?? 0) -
      l * 0.4,
    e0 = (t.hy ?? 0) + de(n * 0.23, i + 2) * 2.2 * a,
    H = (t.hr ?? 0) + de(n * 0.19, i + 7) * 1.6 * a;
  if ($ > 0.002) {
    e.fkTo(o, d0.neck);
    const Z = r.e
      .copy(q)
      .sub(e.wp[d0.neck])
      .applyQuaternion(r.q2.copy(e.wq[d0.chest]).invert());
    Z.y -= 0.17;
    let p0 = Math.atan2(Z.x, Z.z) / te;
    const j = Math.atan2(-Z.y, Math.hypot(Z.x, Z.z)) / te;
    t.right && p0 > 100 && (p0 -= 360);
    const t0 = t.maxYaw ?? 76;
    ((x = T0(x, I0(j, -30, 42) + (t.hp ?? 0) * 0.3, $)),
      (e0 = T0(e0, I0(p0, -t0, t0) + (t.hy ?? 0) * 0.3, $)),
      (H *= 1 - 0.6 * $));
  }
  ((x += t.hp2 ?? 0), (e0 += t.hy2 ?? 0), (H += t.hr2 ?? 0));
  const z = s.neckFwd ?? 10;
  return (
    e.qe(o.q[d0.neck], x * 0.4 + z, e0 * 0.45, H * 0.45),
    e.qe(o.q[d0.head], x * 0.6 - z * 0.85, e0 * 0.55, H * 0.55),
    e.qe(o.q[d0.jaw], I0(I0(e.mouth ?? 0) * 9 + (t.jaw ?? 0), 0, 16), 0, 0),
    e.qe(o.q[d0.shoulderL], 0, -3, -4 + (t.shrugL ?? 0)),
    e.qe(o.q[d0.shoulderR], 0, 3, 4 - (t.shrugR ?? 0)),
    l
  );
}
function qt(e, o, n) {
  const c = e.J,
    t = ae(e),
    s = e.legs[1].l1,
    i = (n.lean ?? 0) * te,
    r = t.f.set(n.dx ?? 0, at + s * Math.cos(i), _e + s * Math.sin(i));
  (e.qe(o.q[d0.hips], n.pitch ?? 0, n.yaw ?? 0, n.roll ?? 0),
    o.hp.copy(
      t.g
        .set(0, c.hips[1] - c.thighL[1], c.hips[2] - c.thighL[2])
        .applyQuaternion(o.q[d0.hips])
        .add(r),
    ));
  for (const l of [1, -1]) k1(e, o, l, l * 0.098, _e);
}
function L1(e, o) {
  return (o.setFromEuler(xo.set(168 * te, e * 9 * te, 0, "YXZ")), o);
}
const xo = new j1();
function k1(e, o, n, c, t) {
  const s = ae(e),
    i = e.legs[n];
  e.fkTo(o, i.b1);
  const r = s.h.set(c, at, t),
    l = s.k.set(c + n * 0.012, 0.047, t - i.l2 * 0.995),
    a = s.e.copy(r).sub(e.wp[i.b1]);
  (e.ik(o, i, l, a), Nt(e, o, n, L1(n, s.q3)));
}
function Nt(e, o, n, c) {
  const t = e.legs[n];
  (e.fkTo(o, t.b2),
    o.q[n > 0 ? d0.footL : d0.footR].copy(e.wq[t.b2]).invert().multiply(c));
}
const o1 = new H0();
function n1(e, o, n) {
  let c = 0;
  for (const s of [e.heel[o], e.toe[o]])
    c = Math.min(c, o1.copy(s).applyQuaternion(n).y);
  const t = o > 0 ? d0.footL : d0.footR;
  for (const s of e.vols)
    if (s.bone === t)
      for (const i of [s.a, s.b])
        c = Math.min(c, o1.copy(i).applyQuaternion(n).y - s.r * 0.72);
  return -c + 0.004;
}
function ct(e, o, n = 0, c = 0) {
  for (const t of [1, -1])
    Oe(
      e,
      o,
      t,
      d0.chest,
      t * 0.0125,
      0.15 + n,
      0.225 + c,
      0,
      0.86,
      0.5,
      t,
      0,
      0,
      t * 0.9,
      -0.5,
      -0.25,
    );
}
