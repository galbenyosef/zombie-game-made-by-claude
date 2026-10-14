// assets/index-Db-AsSxU 23 — math
// Lines 9972-10295 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function No(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = t.J;
  t.seed;
  const r = y1(o),
    l =
      s.rf ||
      (s.rf = { x: 0, z: 0, yaw: 0, pitch: 0, lift: 0, flat: 0, mode: "" }),
    a =
      s.lf ||
      (s.lf = { x: 0, z: 0, yaw: 0, pitch: 0, lift: 0, flat: 0, mode: "" }),
    u = (O, i0, m0, S, P, s0, o0, g0, w0, k0, q0 = 0.16, B0 = 0) => {
      const P0 = I0((o - i0) / (m0 - i0)),
        y0 = R0(q0, 0.86, P0);
      ((O.x = T0(S, o0, y0) + B0 * Math.sin(Math.PI * y0)),
        (O.z = T0(P, g0, y0)),
        (O.yaw = T0(s0, w0, R0(0.1, 0.9, P0))),
        (O.lift = Math.pow(Math.sin(Math.PI * P0), 0.75) * k0),
        (O.pitch = 0),
        (O.mode = "fly"));
    },
    f = (O, i0, m0, S) => {
      ((O.x = i0),
        (O.z = m0),
        (O.yaw = S),
        (O.pitch = 0),
        (O.lift = 0),
        (O.flat = 0),
        (O.mode = "plant"));
    },
    d = s.a.set(ee[2] - et * Math.sin(ee[4]), 0, ee[3] - et * Math.cos(ee[4])),
    v = d.x + et * Math.sin(Te[2]),
    C = d.z + et * Math.cos(Te[2]);
  if (o < ee[0])
    ((l.x = xe[-1][0]),
      (l.z = xe[-1][1]),
      (l.yaw = 0),
      (l.flat = 1),
      (l.lift = 0),
      (l.mode = "kneel"));
  else if (o < ee[1])
    (u(
      l,
      ee[0],
      ee[1],
      xe[-1][0],
      xe[-1][1],
      ee[4],
      ee[2],
      ee[3],
      ee[4],
      0.17,
      0.3,
    ),
      (l.flat = 1 - R0(ee[0], ee[0] + 0.3, o)));
  else if (o < Te[0]) f(l, ee[2], ee[3], ee[4]);
  else if (o < ge[0]) {
    const O = R0(Te[0], Te[1], o),
      i0 = 0.3 * Math.sin(Math.PI * I0((o - Te[0]) / (Te[1] - Te[0]))),
      m0 = T0(ee[4], Te[2], O),
      S = t.ankleShift(-1, i0);
    (f(l, d.x + (et + S) * Math.sin(m0), d.z + (et + S) * Math.cos(m0), m0),
      (l.pitch = i0));
  } else
    o < ge[1]
      ? u(l, ge[0], ge[1], v, C, Te[2], ge[2], ge[3], ge[4], 0.07, 0.16)
      : f(l, ge[2], ge[3], ge[4]);
  o < Io
    ? ((a.x = xe[1][0]),
      (a.z = xe[1][1]),
      (a.yaw = 0),
      (a.flat = 1),
      (a.lift = 0),
      (a.mode = "kneel"))
    : o < ce[0]
      ? ((a.x = xe[1][0]),
        (a.z = xe[1][1]),
        (a.yaw = 0),
        (a.flat = 1),
        (a.lift = 0),
        (a.mode = "fly"))
      : o < ce[1]
        ? (u(
            a,
            ce[0],
            ce[1],
            xe[1][0],
            xe[1][1],
            0,
            ce[2],
            ce[3],
            ce[4],
            0.14,
            0.2,
          ),
          (a.flat = 1 - R0(ce[0], ce[0] + 0.25, o)))
        : o < le[0]
          ? f(a, ce[2], ce[3], ce[4])
          : o < le[1]
            ? (u(
                a,
                le[0],
                le[1],
                ce[2],
                ce[3],
                ce[4],
                le[2],
                le[3],
                le[4],
                0.07,
                0.16,
                -0.04,
              ),
              (a.z +=
                Math.sin(Math.PI * I0((o - le[0]) / (le[1] - le[0]))) * 0.04))
            : f(a, le[2], le[3], le[4]);
  const p = l.x,
    F = l.z,
    J = l.yaw,
    n0 = a.x,
    _ = a.z,
    G = a.yaw,
    y = -0.012,
    E = at + t.legs[1].l1 * Math.cos(-6 * te) + (i.hips[1] - i.thighL[1]),
    c0 = _e + t.legs[1].l1 * Math.sin(-6 * te),
    u0 = R0(0.5, 1.3, o),
    q =
      T0(E, i.hips[1] - 0.022, u0) +
      Math.sin(Math.PI * R0(0.45, 0.85, o)) * -0.03,
    $ = (p + n0) * 0.5,
    x = (F + _) * 0.5,
    e0 = R0(0.4, 0.8, o) * (1 - R0(1.05, 1.32, o));
  let H = T0(y, $, R0(0.45, 1.3, o)),
    z = T0(c0, x, R0(0.45, 1.3, o));
  ((H = T0(H, p * 0.8, e0 * 0.6)), (z = T0(z, F, e0 * 0.55)));
  const Z = Math.sin(Math.PI * R0(ge[0], ge[1], o)),
    p0 = Math.sin(Math.PI * R0(le[0], le[1], o));
  ((H = T0(H, n0, Z * 0.35)),
    (z = T0(z, _, Z * 0.35)),
    (H = T0(H, p, p0 * 0.35)),
    (z = T0(z, F, p0 * 0.35)));
  const j = R0(1.92, 2.35, o);
  ((H = T0(H, 0, j)), (z = T0(z, i.hips[2] * -1 - 0.005, j)));
  const t0 = T0(T0(J * 0.5 + G * 0.5, 0, R0(1.1, 0.8, o)), -Math.PI, j),
    A = 10 * R0(0.35, 0.75, o) * (1 - R0(1, 1.3, o)) + T0(3, 1.5, u0);
  (e.hp.set(H, q, z),
    t.qe(e.q[d0.hips], A, t0 / te - 9 * (1 - R0(0.4, 0.9, o)), 0),
    t.look ? s.lb.copy(t.look).applyAxisAngle(Ke, r) : R1(s.lb));
  const w = Math.sin(Math.PI * R0(0.4, 1.3, o));
  Ee(t, e, n, c, {
    sp: 3 + w * 16,
    cp: 2 + w * 12,
    lean: 0,
    hp: 3 + w * 4,
    comp: 0.6,
    target: s.lb,
    targetW: 1 - w * 0.18,
    right: !0,
    torso: 1.15,
    breath: 0.4,
  });
  for (const O of [1, -1]) {
    const i0 = t.legs[O],
      m0 = O > 0 ? a : l;
    if (m0.mode === "kneel") {
      k1(t, e, O, O * 0.098, _e);
      continue;
    }
    if (m0.mode === "plant") {
      t.leg(e, O, m0.x, t.ankleFor(O, m0.pitch), m0.z, m0.pitch, m0.yaw);
      continue;
    }
    const S = s.fq[O];
    (L1(O, s.q2), S.setFromAxisAngle(Ke, m0.yaw), S.slerp(s.q2, m0.flat));
    const P = Math.max(
        T0(t.ankleFor(O, 0), 0.047, m0.flat) + m0.lift,
        n1(t, O, S) + m0.lift * 0.3,
      ),
      s0 = s.k.set(m0.x + (m0.flat > 0.5 ? O * 0.012 : 0), P, m0.z),
      o0 = s.e
        .set(0, O < 0 || m0.flat <= 0.5 ? 0.6 : -0.6, 1)
        .applyAxisAngle(Ke, m0.yaw * (1 - m0.flat))
        .normalize();
    if (O < 0 && o < ee[1]) {
      const g0 = I0((o - ee[0]) / (ee[1] - ee[0]));
      t.fkTo(e, i0.b1);
      const w0 = t.wp[i0.b1],
        k0 = Math.atan2(_e - w0.z, w0.y - at),
        q0 = k0 + Math.atan2(i0.l2 * 0.995, at - 0.047),
        B0 = T0(k0, 1.3, Math.pow(R0(0, 0.8, g0), 0.8)),
        P0 =
          T0(q0, 1.7, R0(0.3, 1, g0)) +
          0.55 * Math.sin(Math.PI * R0(0, 0.85, g0)),
        y0 = w0.x - 0.01,
        x0 = w0.y - i0.l1 * Math.cos(B0),
        Y0 = w0.z + i0.l1 * Math.sin(B0),
        R = R0(0.55, 1, g0);
      (s0.set(
        T0(y0, s0.x, R),
        T0(x0 - i0.l2 * Math.cos(B0 - P0), t.ankleFor(O, 0), R),
        T0(Y0 + i0.l2 * Math.sin(B0 - P0), s0.z, R),
      ),
        o0.set(y0 - w0.x, x0 - w0.y, Y0 - w0.z).normalize());
      const T = T0(1.36, 0, R0(0.15, 0.6, g0)),
        K = R0(0.75, 1, g0);
      for (let l0 = 0; l0 < 2; l0++) {
        (t.ik(e, i0, s0, o0),
          t.fkTo(e, i0.b2),
          S.copy(t.wq[i0.b2]).multiply(s.q2.setFromAxisAngle(Ao, T)),
          S.slerp(s.q3.setFromAxisAngle(Ke, m0.yaw), K));
        const h0 =
          n1(t, O, S) + (0.006 + 0.03 * Math.sin(Math.PI * g0)) * (1 - K);
        if ((t.fkTo(e, i0.b2 + 1), l0 === 0 && t.wp[i0.b2 + 1].y < h0))
          s0.y += h0 - t.wp[i0.b2 + 1].y;
        else break;
      }
      Nt(t, e, O, S);
      continue;
    }
    (t.ik(e, i0, s0, o0), Nt(t, e, O, S));
  }
  ct(t, e, -0.07, -0.04);
  for (const O of [1, -1]) Me(t, e, O);
  t.fkTo(e, d0.shinR);
  const Y = s.h.copy(t.wp[d0.shinR]);
  t.fkTo(e, d0.thighR);
  const b = s.g.copy(t.wp[d0.shinR]).sub(t.wp[d0.thighR]).normalize(),
    g = s.f
      .copy(Y)
      .addScaledVector(b, -0.07)
      .add(s.e.set(0, 0.06, 0));
  (t.armIK(e, -1, g.x, g.y, g.z, -0.9, 0.2, -0.3),
    st(t, e, -1, b.x * 0.6, -0.8, b.z * 0.6 + 0.2, 0, 1, 0));
  const N = R0(0.22, 0.55, o);
  if (
    (Le(t, e, -1, N),
    Me(t, e, -1),
    t.dangle(e, 1, 12 * w, 14, 18 + w * 10),
    t.hand(e, 1, 8, 0, 0),
    Le(t, e, 1, R0(0.25, 0.6, o)),
    Me(t, e, 1),
    o > 1.05 &&
      (t.dangle(e, -1, 6, 10, 16),
      t.hand(e, -1, 8, 0, 0),
      Le(t, e, -1, R0(1.05, 1.4, o)),
      Me(t, e, -1)),
    o > 1.7)
  ) {
    Qe(t, e);
    for (const O of [1, -1]) Le(t, e, O, R0(1.7, 2.35, o));
  }
  const V = s.q3.setFromAxisAngle(Ke, -r);
  (e.hp.applyQuaternion(V),
    e.q[d0.hips].premultiply(V),
    s.eyeOn && s.eyeT.applyAxisAngle(Ke, -r));
}
function Do(e, o, n, c) {
  (Xe(this, e, n, c), Qe(this, e));
}
function Ho(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = 3.1,
    r = Math.floor(n / i),
    l = n - r * i - qe(r, s) * 0.7,
    a =
      R0(0, 0.45, l) * (1 - R0(1.45, 2.05, l)) * (qe(r + 3, s) > 0.15 ? 1 : 0),
    u = t.mouth ?? 0;
  if (
    (Xe(t, e, n, c, {
      hp2: Math.sin(n * 3.3) * 1.6 * (0.3 + u) + a * 2.5,
      hy2: de(n * 0.5, s + 11) * 2.5,
      hr2: de(n * 0.4, s + 13) * 2.4 + a * 2,
    }),
    Qe(t, e),
    a > 0.001)
  ) {
    Me(t, e, -1);
    const f = Math.sin(I0(l / 1.6) * Math.PI) * 0.05,
      d = Math.sin(l * 7.5) * 0.012 * u;
    (Oe(
      t,
      e,
      -1,
      d0.chest,
      -0.13 - f,
      0.02 + d,
      0.31,
      -0.35,
      0.12,
      1,
      0.15,
      -1,
      0.25,
      -0.9,
      -0.45,
      -0.3,
    ),
      Le(t, e, -1, a));
  }
}
const _o = new H0(-1.6, 1.3, 1.2);
function qo(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = R0(0.06, 0.8, o),
    r = t.pointOn ? t.pointPt : _o,
    l = Math.atan2(r.x - e.hp.x, r.z - e.hp.z) / te,
    a = I0(l, -80, 80) * i;
  (Xe(t, e, n, c, {
    syaw: a * 0.12,
    cyaw: a * 0.22,
    ...(t.look ? {} : { target: r, targetW: i * 0.9 }),
  }),
    Qe(t, e),
    Me(t, e, -1),
    t.fkTo(e, d0.upperArmR));
  const u = s.a.copy(r).sub(t.wp[d0.upperArmR]).normalize();
  (u.y < -0.4 && ((u.y = -0.4), u.normalize()),
    t.armDir(e, -1, u.x, u.y, u.z, 0, -1, 0, 9, 0),
    st(t, e, -1, u.x, u.y - 0.1, u.z, 0.25, 1, 0),
    Le(t, e, -1, i));
}
