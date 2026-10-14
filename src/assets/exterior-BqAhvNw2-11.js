// assets/exterior-BqAhvNw2 11 — math
// Lines 2607-2972 of readable/assets/exterior-BqAhvNw2.pretty.js (statement-aligned).
function buildCityStreet(t, i, a) {
  const e = new b0();
  e.name = "street";
  const s = (r, S) => r + (S - r) * a(),
    l = l0,
    d = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 }),
    v = new a0(),
    x = new s0(),
    n = new B(),
    k = new B(),
    m = (r, S = 0.55, V = 3) => ({
      aOrigin: [0, l, 0, 0],
      aDims: [1, 1, 1, V],
      aStyle: [3, 3, S, r],
      aLight: [0, 0, 0, 0],
    }),
    p = (r, S, V, O, W, X, Z) => {
      (v.compose(
        k.set((r + O) / 2, (S + W) / 2, (V + X) / 2),
        x.identity(),
        n.set(O - r, W - S, X - V),
      ),
        d.add(J0, v, Z));
    },
    b = (r, S, V, O, W, X) => {
      (v.compose(k.set(S, V, O), x.setFromAxisAngle(ne, W), n.set(1, 1, 1)),
        d.add(r, v, X));
    },
    N = m(4, 0.62),
    o = m(1, 0.62),
    u = m(3),
    z = m(5, 0.3),
    f = -262,
    L = 262,
    P = Y.x0,
    F = Y.x1,
    I = [
      [C.zS - 5, C.zS],
      [C.zN, C.zN + 5],
    ];
  for (const [r, S] of I)
    for (const [V, O] of [
      [f, P],
      [F, L],
    ])
      p(V, l - 0.3, r, O, l + C.curbH, S, N);
  for (const [r, S] of [
    [f, P - 4],
    [F + 4, L],
  ])
    p(r, l - 0.3, C.med0, S, l + 0.22, C.med1, o);
  for (const [r, S] of [
    [f, P - 4],
    [F + 4, L],
  ])
    p(r + 0.3, l + 0.22, C.med0 + 0.3, S - 0.3, l + 0.26, C.med1 - 0.3, z);
  for (let r = C.zN; r > -205; r -= 6) {
    const S = r - 6,
      V = t0(P, r),
      O = t0(P, S);
    for (const [W, X] of [
      [P, P + 3.2],
      [F - 3.2, F],
    ]) {
      const Z = Math.hypot(6, V - O),
        h0 = Math.atan2(V - O, 6);
      (v.compose(
        k.set((W + X) / 2, (V + O) / 2 - 0.07, (r + S) / 2),
        x.setFromAxisAngle(new B(1, 0, 0), -h0),
        n.set(X - W, 0.46, Z + 0.05),
      ),
        d.add(J0, v, N));
    }
  }
  const T = [],
    y = (r, S, V, O = 1.7) => {
      const W =
        t0(r, S) + (Math.abs(S - (C.med0 + C.med1) / 2) < 2.5 ? 0.22 : C.curbH);
      (p(r - 0.09, W, S - 0.09, r + 0.09, W + 7.9, S + 0.09, u),
        p(r - 0.16, W, S - 0.16, r + 0.16, W + 1.1, S + 0.16, u));
      const [X, Z] = V;
      p(
        Math.min(r, r + X * O) - 0.05,
        W + 7.75,
        Math.min(S, S + Z * O) - 0.05,
        Math.max(r, r + X * O) + 0.05,
        W + 7.85,
        Math.max(S, S + Z * O) + 0.05,
        u,
      );
      const h0 = r + X * O,
        x0 = S + Z * O;
      p(
        h0 - 0.32 * (X ? 1 : 0.55),
        W + 7.62,
        x0 - 0.32 * (Z ? 1 : 0.55),
        h0 + 0.32 * (X ? 1 : 0.55),
        W + 7.8,
        x0 + 0.32 * (Z ? 1 : 0.55),
        u,
      );
      const L0 = a();
      T.push({
        x: h0,
        y: W + 7.58,
        z: x0,
        state: L0 < 0.6 ? 1 : L0 < 0.72 ? 2 : 0,
        phase: a() * 10,
        rate: s(5, 12),
      });
    };
  for (let r = -150; r <= 170; r += 28)
    (r < P - 3 || r > F + 3) && y(r, C.zS - 4.5, [0, -1]);
  for (let r = -136; r <= 170; r += 28)
    (r < P - 3 || r > F + 3) && y(r, C.zN + 4.5, [0, 1]);
  let H = 1;
  for (let r = -130; r <= 160; r += 36)
    (r < P - 6 || r > F + 6) &&
      (y(r, (C.med0 + C.med1) / 2, [0, H], 1.5), (H = -H));
  for (let r = 0; r < 6; r++)
    (y(P + 0.9, -48 - 30 * r, [1, 0]), y(F - 0.9, -63 - 30 * r, [-1, 0]));
  T.length = Math.min(T.length, 48);
  for (const r of T) Math.abs(r.x - 3) < 62 && r.z > C.zN - 1 && (r.state = 1);
  const c = T.filter((r) => r.z > C.zS - 8 && Math.abs(r.x - 3) < 30).sort(
    (r, S) => Math.abs(r.x - 3) - Math.abs(S.x - 3),
  )[0];
  c && (c.state = 2);
  for (let r = -120; r <= 150; r += 18)
    (r > P - 8 && r < F + 8) ||
      a() < 0.25 ||
      et(
        d,
        r + s(-3, 3),
        l + 0.24,
        (C.med0 + C.med1) / 2 + s(-0.5, 0.5),
        a,
        m(3, 0.3, 9),
      );
  const w = m(3, 0.5, 5),
    h = (r, S, V, O) => {
      const W = new $(O ? 1.3 : 1.9, O ? 1.9 : 1.3, 1.1);
      b(W, r, l + (O ? 0.95 : 0.65), S, V, w);
    };
  (h(-18, -3.2, 0.2, !0), h(44, -37.4, -0.1, !1), h(-64, -36.8, 1.4, !0));
  for (let r = 0; r < 14; r++) {
    const S = s(-120, 150),
      V = a() < 0.5 ? s(-4.4, -1) : s(-39, -35.6);
    (S > P - 2 && S < F + 2) ||
      b(
        new d0(0.3, 0.27, 0.9, 10).rotateZ(a() < 0.5 ? Math.PI / 2 : 0),
        S,
        l + C.curbH + 0.45,
        V,
        a() * 6,
        w,
      );
  }
  const g = (r, S, V) => {
    const O = new p0({});
    O.add(new $(2.2, 0.28, 0.05).translate(0, 0.95, 0), new a0(), {});
    for (const W of [-0.95, 0.95])
      O.add(new $(0.06, 1.1, 0.5).translate(W, 0.55, 0), new a0(), {});
    b(O.build(), r, l, S, V, m(1, 0.62, 12));
  };
  (g(8, -24.5, 0.3),
    g(11, -26.8, -0.2),
    g(36, -12, 1.2),
    g(21, -44, 0.1),
    g(24.5, -44.5, -0.25));
  const M = (r, S, V) => {
    const O = t0(r, S);
    (b(new $(1.7, 0.22, 0.5), r, O + 0.11, S, V, m(3, 0.2, 21)),
      b(
        new R0(0.13, 8, 6),
        r + Math.cos(V) * 0.95,
        O + 0.12,
        S - Math.sin(V) * 0.95,
        V,
        m(3, 0.2, 21),
      ));
  };
  (M(-6, -9.5, 0.7),
    M(15, -31, 2.1),
    M(31, -8, -0.4),
    M(19, -88, 1.2),
    M(24, -97, 2.9),
    M(-37, -28, 0.3));
  const R = new e0(d.build(), S0(i, 1));
  ((R.name = "street_static"), e.add(R));
  const A = new $(0.5, 0.05, 0.26),
    _ = new W0(
      A,
      n0({ vertexShader: Ze, fragmentShader: Qe, uniforms: {} }),
      T.length,
    ),
    D = new f0(new Float32Array(T.length), 1);
  (A.setAttribute("aOn", D),
    T.forEach((r, S) => {
      (v.compose(k.set(r.x, r.y, r.z), x.identity(), n.set(1, 1, 1)),
        _.setMatrixAt(S, v),
        (D.array[S] = r.state ? 1 : 0));
    }),
    (_.name = "street_lamps"),
    (_.frustumCulled = !1),
    e.add(_));
  const j = [],
    U = [],
    K = [
      [0.02, 0.02, 0.022],
      [0.3, 0.3, 0.31],
      [0.12, 0.012, 0.012],
      [0.02, 0.035, 0.08],
      [0.2, 0.17, 0.12],
      [0.45, 0.45, 0.44],
      [0.035, 0.06, 0.045],
      [0.25, 0.1, 0.03],
    ],
    E = (r, S, V, O = {}) => {
      const X = Math.cos(V),
        Z = -Math.sin(V),
        h0 = t0(r + X * 2.3, S + Z * 2.3),
        x0 = t0(r - X * 2.3, S - Z * 2.3),
        L0 = (S > C.zS - 5 && S < C.zS) || (S > C.zN && S < C.zN + 5),
        ie = (h0 + x0) / 2 + (L0 ? C.curbH : 0),
        _0 = {
          x: r,
          y: ie,
          z: S,
          yaw: V,
          pitch: Math.atan2(h0 - x0, 2 * 2.3),
          roll: 0,
          paint: K[Math.floor(a() * K.length)],
          state: 0,
          hazard: a() < 0.3,
          phase: a(),
          lights: !1,
          dirt: s(0.2, 0.7),
          ...O,
        };
      return ((_0.state === 2 ? U : j).push(_0), _0);
    };
  (E(9, -24, 0.4),
    E(12.8, -21.2, 2.3, { roll: 0.08 }),
    E(5.5, -28.5, -0.25, { hazard: !0 }),
    E(34, -15.5, Math.PI + 0.3, { hazard: !0 }),
    E(26, -9.5, 1.9));
  const Q = [-32.6, -28.5, -24.3, -15.9, -11.7, -7.4];
  for (let r = 0; r < 20; r++) {
    let S = s(-150, 170);
    S > P - 6 && S < F + 6 && (S += 40);
    const V = Q[Math.floor(a() * Q.length)] + s(-0.6, 0.6),
      O = V < C.med0;
    E(
      S,
      V,
      (O ? 0 : Math.PI) + s(-0.35, 0.35) + (a() < 0.12 ? s(-1.4, 1.4) : 0),
    );
  }
  (E(-44, -2.6, 0.12, { hazard: !0 }),
    E(71, -37.6, Math.PI - 0.1),
    E(-95, -2.9, -0.05),
    E(4.5, -6.6, Math.PI * 0.5 + 0.35, {
      lights: !0,
      hazard: !0,
      paint: K[2],
    }));
  const G = E(22.2, -84, Math.PI / 2 + 0.5, {
    state: 1,
    hazard: !1,
    paint: K[0],
  });
  (E(18.4, -78, Math.PI / 2 - 0.3),
    E(26.5, -104, -Math.PI / 2 + 0.25, { hazard: !0 }),
    E(17.2, -131, Math.PI / 2 + 0.1),
    E(25.8, -150, -Math.PI / 2 - 0.4),
    E(19, -171, Math.PI / 2, { hazard: !0 }),
    E(21.5, -60, 0.9));
  const i0 = E(20.5, -118, Math.PI / 2 + 1.1, {
    state: 2,
    paint: [0.02, 0.02, 0.025],
    hazard: !1,
    lights: !0,
    phase: 0,
  });
  e.add(Q0(i, j, !1), Q0(i, U, !0));
  const r0 = T.filter((r) => r.state)
      .map((r) => ({ h: r, d: Math.hypot(r.x - 3, r.z + 20) }))
      .sort((r, S) => r.d - S.d)
      .slice(0, 11)
      .map((r) => r.h),
    J = [];
  for (const r of r0)
    J.push({
      type: "lamp",
      h: r,
      p: [r.x, r.y - 0.1, r.z],
      c: [1, 0.42, 0.11],
      I: 22,
      cone: 1,
    });
  (J.push({
    type: "fire",
    p: [G.x, G.y + 1.6, G.z],
    c: [1, 0.38, 0.09],
    I: 60,
    cone: 0,
  }),
    J.push({
      type: "copR",
      p: [i0.x, i0.y + 1.7, i0.z - 0.3],
      c: [1, 0.04, 0.02],
      I: 30,
      cone: 0,
    }),
    J.push({
      type: "copB",
      p: [i0.x, i0.y + 1.7, i0.z + 0.3],
      c: [0.05, 0.15, 1],
      I: 38,
      cone: 0,
    }),
    J.forEach((r, S) => {
      (i.uLampPos.value[S].set(...r.p, r.I),
        i.uLampCol.value[S].set(...r.c, r.cone));
    }));
  const v0 = [],
    u0 = [];
  for (let r = 0; r < 5; r++)
    v0.push({
      p: [G.x + s(-1.3, 1.3), G.y + 0.9, G.z + s(-0.6, 0.6)],
      w: s(1.4, 2.4),
      h: s(2.2, 4.2),
      i: s(0.9, 1.3),
      seed: a() * 40,
      lean: s(-0.5, 0.1),
    });
  u0.push({
    p: [G.x, G.y + 3, G.z],
    h: 60,
    w0: 2.5,
    w1: 26,
    dx: -38,
    dz: 6,
    seed: 4.4,
    dens: 0.85,
    fire: 1,
    speed: 2.2,
  });
  const q = [
    { p: [G.x, G.y + 1.5, G.z], n: 70, rise: 3.2, life: 11, spread: 2 },
  ];
  return {
    group: e,
    heads: T,
    slots: J,
    lens: _,
    onAttr: D,
    burning: G,
    cop: i0,
    flames: v0,
    plumes: u0,
    embers: q,
    cars: j,
    police: U,
  };
}
