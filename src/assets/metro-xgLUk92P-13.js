// assets/metro-xgLUk92P 13 — add
// Lines 4178-4919 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function pa(c) {
  const { B: a, M: o, L: s, D: f, group: h, rng: d, A: l } = c,
    i = [],
    t = [],
    e = [],
    n = { chunk: "ash" },
    r = u0,
    u = m.ceil,
    b = [-6, 12, 24, 36],
    M = [0, 18, 30, 42],
    x = 4.8,
    w = 0.6,
    p = (g, A) => g.map((O) => [O - x / 2, O + x / 2, r + 2.4, r + 3]),
    S = [y0.x0, y0.x1, r, y0.y1];
  (le(c, "+z", m.zN, m.x0, m.x1, r, u, [S, ...p(b)]),
    le(c, "-z", m.zS, m.x0, m.x1, r, u, p(M)));
  for (const g of b)
    f.sign("frieze", [g, r + 2.7, m.zN], x, w, "+z", {
      atlas: "frieze",
      plate: !1,
      depth: 0,
    });
  for (const g of M)
    f.sign("frieze", [g, r + 2.7, m.zS], x, w, "-z", {
      atlas: "frieze",
      plate: !1,
      depth: 0,
    });
  const y = [d0.z0, d0.z1, q - 0.5, d0.roof];
  (le(c, "+x", m.x0, m.zN, m.zS, r, u, [y]),
    le(c, "-x", m.x1, m.zN, m.zS, r, u, [
      [c0.z0, c0.z1, r, u],
      y,
      [Lt.z0, Lt.z1, r, u],
    ]));
  for (const g of m.cols)
    (a.add(T(g - 0.22, r, m.zN, g + 0.22, u, m.zN + 0.1), o.tileTeal, n),
      a.add(T(g - 0.22, r, m.zS - 0.1, g + 0.22, u, m.zS), o.tileTeal, n));
  const L = 0.3,
    v = 0.4,
    C = (g, A) => {
      const O = A > 0 ? m.zN : m.zS,
        X = g - A * L,
        G = X - A * v,
        l0 = (e0, g0) => Math.min(e0, g0),
        h0 = (e0, g0) => Math.max(e0, g0);
      (a.add(T0(m.x0, l0(O, G), m.x1, h0(O, G), r, !0), o.floor, n),
        a.add(
          T(m.x0, r - 0.02, l0(G, X), m.x1, r + 0.004, h0(G, X)),
          o.tactile,
          n,
        ),
        a.add(
          T(m.x0, r - 0.2, l0(X, g), m.x1, r, h0(X, g), 0.012),
          o.coping,
          n,
        ));
      const F = X;
      a.add(r0(A > 0 ? "+z" : "-z", F, m.x0, m.x1, q, r - 0.2), o.concDark, n);
      for (let e0 = 0; e0 < 3; e0++)
        a.add(
          j(
            [m.x0, r - 0.42 - e0 * 0.09, F + A * 0.06],
            [m.x1, r - 0.42 - e0 * 0.09, F + A * 0.06],
            0.018,
            6,
          ),
          o.cable,
          { chunk: "ash", cast: !1 },
        );
      for (let e0 = m.x0 + 1; e0 < m.x1; e0 += 2.5)
        a.add(
          T(
            e0 - 0.01,
            r - 0.7,
            l0(F, F + A * 0.1),
            e0 + 0.01,
            r - 0.32,
            h0(F, F + A * 0.1),
          ),
          o.galvDark,
          n,
        );
      for (const [e0, g0] of [
        [m.x0, "-x"],
        [m.x1, "+x"],
      ])
        a.add(
          r0(
            g0,
            e0,
            l0(g, A > 0 ? d0.z0 : d0.z1),
            h0(g, A > 0 ? d0.z0 : d0.z1),
            q,
            r,
          ),
          o.concDark,
          n,
        );
    };
  (C(m.edgeN, 1),
    C(m.edgeS, -1),
    a.add(T0(m.x0, m.edgeN - L, m.x1, m.edgeS + L, q, !0), o.bed, n),
    a.add(T0(m.x0, m.zN, m.x1, m.zS, u, !1), o.ceil, n));
  const k = je(u - m.girderBot, 0.46, 0.03, 0.016),
    R = (u + m.girderBot) / 2;
  a.add($e(k, [m.x0, R, m.colZ], [m.x1, R, m.colZ], [0, 0, 1]), o.steel, n);
  const W = je(u - m.beamBot, 0.32, 0.024, 0.014),
    Y = (u + m.beamBot) / 2;
  for (const g of m.cols)
    a.add($e(W, [g, Y, m.zN + 0.1], [g, Y, m.zS - 0.1], [1, 0, 0]), o.steel, n);
  const $ = [];
  for (const [g, A] of [
    [m.zN + 0.1, 1],
    [m.zS - 0.1, -1],
  ]) {
    const O = m.beamBot - 0.16,
      X = g + A * 0.04,
      G = g + A * 0.36,
      l0 = Math.min(X, G),
      h0 = Math.max(X, G);
    (a.add(T(m.x0, O, l0, m.x1, O + 0.012, h0), o.galvDark, n),
      a.add(
        T(
          m.x0,
          O,
          A > 0 ? h0 - 0.012 : l0,
          m.x1,
          O + 0.07,
          A > 0 ? h0 : l0 + 0.012,
        ),
        o.galvDark,
        n,
      ));
    for (let F = 0; F < 5; F++)
      a.add(
        j(
          [m.x0, O + 0.03, g + A * (0.08 + F * 0.055)],
          [m.x1, O + 0.03, g + A * (0.08 + F * 0.055)],
          0.017 + (F % 2) * 0.006,
          6,
        ),
        F === 3 ? o.cableR : o.cable,
        { chunk: "ash", cast: !1 },
      );
    for (let F = m.x0 + 0.75; F < m.x1; F += 1.5)
      a.add(
        T(
          F - 0.015,
          O - 0.04,
          Math.min(g, g + A * 0.38),
          F + 0.015,
          O,
          Math.max(g, g + A * 0.38),
        ),
        o.galvDark,
        n,
      );
    a.add(
      j(
        [m.x0, O + 0.25, g + A * 0.05],
        [m.x1, O + 0.25, g + A * 0.05],
        0.022,
        8,
      ),
      o.galvDark,
      { chunk: "ash", cast: !1 },
    );
  }
  const Z = (g, A, O, X, G, l0) => {
    const h0 = new fo().setFromUnitVectors(new ot(0, 1, 0), new ot(X, G, l0));
    $.push(new rt().compose(new ot(g, A, O), h0, new ot(1, 1, 1)));
  };
  for (let g = m.x0 + 0.05; g < m.x1; g += 0.11)
    for (const A of [-0.17, 0.17])
      Z(g, m.girderBot - 0.001, m.colZ + A, 0, -1, 0);
  for (const g of m.cols)
    for (let A = m.zN + 0.2; A < m.zS - 0.1; A += 0.11)
      for (const O of [-0.11, 0.11]) Z(g + O, m.beamBot - 0.001, A, 0, -1, 0);
  const H = m.girderBot,
    V = q + 0.5;
  for (const g of m.cols) {
    const A = m.colZ;
    (a.add(T(g - 0.34, q, A - 0.34, g + 0.34, V, A + 0.34, 0.03), o.coping, n),
      a.add(
        T(g - 0.18, V, A - 0.18, g + 0.18, V + 0.025, A + 0.18, 0.004),
        o.steel,
        n,
      ));
    for (const O of [-1, 1])
      a.add(
        T(
          g - 0.18,
          V,
          A + O * 0.18 - (O > 0 ? 0.022 : 0),
          g + 0.18,
          H,
          A + O * 0.18 + (O < 0 ? 0.022 : 0),
          0.004,
        ),
        o.steel,
        n,
      );
    (a.add(T(g - 0.008, V, A - 0.16, g + 0.008, H, A + 0.16), o.steel, n),
      a.add(
        T(g - 0.24, H - 0.03, A - 0.24, g + 0.24, H, A + 0.24, 0.004),
        o.steel,
        n,
      ));
    for (const O of [-1, 1])
      a.add(
        k0(
          [g - 0.008 * O, H - 0.5, A],
          [g + 0.008, H - 0.5, A],
          [g + 0.008, H - 0.03, A + O * 0.22],
          [g - 0.008, H - 0.03, A + O * 0.22],
        ),
        o.steel,
        n,
      );
    for (let O = V + 0.12; O < H - 0.08; O += 0.1)
      for (const X of [-1, 1])
        for (const G of [-0.13, 0.13]) Z(g + G, O, A + X * 0.202, 0, 0, X);
    i.push({
      x0: g - 0.35,
      x1: g + 0.35,
      z0: A - 0.35,
      z1: A + 0.35,
      y0: q,
      y1: H,
    });
  }
  const I = new U0(0.012, 6, 2, 0, Math.PI * 2, 0, Math.PI / 2);
  (I.scale(1, 0.55, 1),
    h.add(Bt(I, o.steel, $, { name: "ash:rivets", cast: !1 })));
  const E = [
      ["off", "off"],
      ["on", "off"],
      ["dying", "off"],
      ["off", "on"],
      ["on", "off"],
      ["on", "flicker"],
      ["on", "off"],
      ["flicker", "on"],
      ["dying", "off"],
      ["on", "dying"],
      ["flicker", "off"],
    ],
    N = [m.zN + 2.9, m.zS - 2.9],
    Q = u - 0.26,
    K = [m.x0 - 0.05, q - 0.2, m.zN - 0.05, m.x1 + 0.05, u + 0.05, m.zS + 0.05];
  vo.forEach(([g, A], O) => {
    const X = (g + A) / 2;
    N.forEach((G, l0) => {
      const h0 = E[O][l0],
        F = s.fixId(),
        e0 = X - 0.76,
        g0 = X + 0.76,
        N0 = O === 6 && l0 === 1,
        F0 = N0
          ? new rt()
              .makeTranslation(g0, Q + 0.12, G)
              .multiply(new rt().makeRotationZ(0.62))
              .multiply(new rt().makeTranslation(-g0, 4.9399999999999995, -G))
          : null,
        $0 = (G0, L0, xt) => a.add(F0 ? G0.applyMatrix4(F0) : G0, L0, xt);
      ($0(
        T(e0, Q + 0.03, G - 0.09, g0, Q + 0.12, G + 0.09, 0.012),
        o.housing,
        n,
      ),
        $0(
          T(e0 - 0.02, Q - 0.02, G - 0.1, e0 + 0.02, Q + 0.12, G + 0.1, 0.006),
          o.housing,
          n,
        ),
        $0(
          T(g0 - 0.02, Q - 0.02, G - 0.1, g0 + 0.02, Q + 0.12, G + 0.1, 0.006),
          o.housing,
          n,
        ));
      for (const G0 of N0 ? [0.045] : [-0.045, 0.045])
        $0(
          O0(j([e0 + 0.02, Q, G + G0], [g0 - 0.02, Q, G + G0], 0.0135, 8), F),
          o.tube,
          { chunk: "ash", cast: !1 },
        );
      for (const G0 of N0 ? [0.5] : [-0.5, 0.5])
        a.add(j([X + G0, u, G], [X + G0, Q + 0.12, G], 0.005, 4), o.galvDark, {
          chunk: "ash",
          cast: !1,
        });
      (N0 &&
        (a.add(
          j([X - 0.5, u, G], [X - 0.5, u - 0.18, G], 0.005, 4),
          o.galvDark,
          { chunk: "ash", cast: !1 },
        ),
        xe(c, X - 0.9, r, G + 0.4, d, "ash"),
        a.add(
          O0(
            j(
              [X - 0.6, r + 0.015, G + 0.3],
              [X + 0.5, r + 0.015, G + 0.15],
              0.0135,
              8,
            ),
            s.fixId(),
          ),
          o.tube,
          { chunk: "ash", cast: !1 },
        )),
        s.add({
          a: [e0 + 0.05, Q - 0.03, G],
          b: [g0 - 0.05, Q - 0.03, G],
          col: [0.87, 0.94, 0.9],
          cd: 22,
          reach: 10,
          zone: "ashwood",
          fix: F,
          state: h0,
          r: 0.05,
          down: !0,
          box: K,
          point: { cd: 16, dist: 9, below: 0.75 },
          buzz: h0 === "flicker" || h0 === "dying",
        }));
    });
  });
  const s0 = xa(c),
    f0 = d;
  for (const g of [-6.2, 14.4, 29.6, 41.2])
    i.push(...Qe(c, g, r, m.zN + 0.45, 0, { chunk: "ash" }));
  for (const g of [3.2, 21, 38.4])
    i.push(...Qe(c, g, r, m.zS - 0.45, Math.PI, { chunk: "ash" }));
  for (const [g, A] of [
    [-1.2, m.zN + 0.35],
    [19.2, m.zN + 0.35],
    [40, m.zN + 0.35],
    [9.5, m.zS - 0.35],
    [27.5, m.zS - 0.35],
  ])
    i.push(...To(c, g, r, A, { chunk: "ash", rng: f0, spill: 1 }));
  (i.push(...ma(c, 10, m.zN + 0.02)), i.push(...za(c, 33, 36.4)));
  const p0 = (g, A, O, X, G, l0, h0 = r + 1.85) => {
    f.sign(g, [A, h0, O], G, l0, X, { depth: 0.018 });
    const F = X === "+z" ? 1 : -1;
    for (const [e0, g0, N0, F0] of [
      [A - G / 2 - 0.03, h0 - l0 / 2 - 0.03, A + G / 2 + 0.03, h0 - l0 / 2],
      [A - G / 2 - 0.03, h0 + l0 / 2, A + G / 2 + 0.03, h0 + l0 / 2 + 0.03],
      [A - G / 2 - 0.03, h0 - l0 / 2, A - G / 2, h0 + l0 / 2],
      [A + G / 2, h0 - l0 / 2, A + G / 2 + 0.03, h0 + l0 / 2],
    ])
      a.add(
        T(
          e0,
          g0,
          Math.min(O, O + F * 0.03),
          N0,
          F0,
          Math.max(O, O + F * 0.03),
          0.004,
        ),
        o.galvDark,
        n,
      );
  };
  (p0("poster_cola", 2, m.zN, "+z", 0.62, 0.93),
    p0("poster_coast", 4, m.zN, "+z", 0.62, 0.93),
    p0("notice_service", 11.2, m.zN, "+z", 0.7, 0.5, r + 1.65),
    p0("poster_film", 17, m.zN, "+z", 0.62, 0.93),
    p0("poster_missing", 22.4, m.zN, "+z", 0.5, 0.71, r + 1.6),
    p0("notice_evac", 25.2, m.zN, "+z", 0.56, 0.8),
    p0("route", 31.2, m.zN, "+z", 1.6, 0.4, r + 1.95),
    p0("poster_coast", 44.6, m.zN, "+z", 0.62, 0.93),
    p0("poster_missing", 26.15, m.zN, "+z", 0.36, 0.51, r + 1.2),
    p0("poster_cola", 6, m.zS, "-z", 1.6, 2.4, r + 1.55),
    p0("poster_film", 12, m.zS, "-z", 1.6, 2.4, r + 1.55),
    p0("poster_coast", 24, m.zS, "-z", 1.6, 2.4, r + 1.55),
    p0("notice_evac", 36, m.zS, "-z", 1, 1.43, r + 1.6),
    p0("poster_cola", 48, m.zS, "-z", 1.6, 2.4, r + 1.55));
  for (const g of [0, 18, 30, 42])
    f.sign("ash_name", [g + 0.02, r + 1.95, m.zN], 1.6, 0.31, "+z", {
      depth: 0.02,
    });
  for (const g of [6, 12, 24, 36])
    f.sign("ash_name", [g, r + 1.95, m.zS], 1.6, 0.31, "-z", { depth: 0.02 });
  (m.cols.forEach((g, A) => {
    A % 2 === 0 &&
      (f.sign("ash_name_s", [g, r + 2.15, m.colZ - 0.205], 0.9, 0.225, "-z", {
        depth: 0.012,
      }),
      f.sign("ash_name_s", [g, r + 2.15, m.colZ + 0.205], 0.9, 0.225, "+z", {
        depth: 0.012,
      }));
  }),
    m.cols.forEach((g, A) => {
      A % 2 === 1 &&
        (f.sign(
          A % 4 === 1 ? "ash_plat1" : "ash_name_s",
          [g, r + 2.15, m.colZ - 0.205],
          A % 4 === 1 ? 0.6 : 0.9,
          A % 4 === 1 ? 0.3 : 0.225,
          "-z",
          { depth: 0.012 },
        ),
        f.sign(
          A % 4 === 1 ? "ash_plat2" : "ash_name_s",
          [g, r + 2.15, m.colZ + 0.205],
          A % 4 === 1 ? 0.6 : 0.9,
          A % 4 === 1 ? 0.3 : 0.225,
          "+z",
          { depth: 0.012 },
        ));
    }));
  for (const [g, A] of [
    [m.x0 + 0.5, [d0.z0, m.edgeN - 0.02]],
    [m.x1 - 0.5, [d0.z0, m.edgeN - 0.02]],
    [m.x0 + 0.5, [m.edgeS + 0.02, d0.z1]],
    [m.x1 - 0.5, [m.edgeS + 0.02, d0.z1]],
  ]) {
    const O = A[0],
      X = A[1];
    for (const G of [r + 0.15, r + 1])
      a.add(j([g, G, O], [g, G, X], 0.02, 8), o.steel, n);
    for (const G of [O + 0.02, X - 0.02])
      a.add(j([g, r, G], [g, r + 1.05, G], 0.024, 8), o.steel, n);
    for (let G = O + 0.12; G < X - 0.05; G += 0.12)
      a.add(j([g, r + 0.15, G], [g, r + 1, G], 0.008, 5), o.steel, n);
    (f.sign(
      "danger_rail",
      [g + (g < 0 ? -0.03 : 0.03), r + 0.62, (O + X) / 2],
      0.3,
      0.2,
      g < 0 ? "-x" : "+x",
      { depth: 0.006, plate: !1 },
    ),
      f.sign(
        "no_entry",
        [g + (g < 0 ? 0.03 : -0.03), r + 0.62, (O + X) / 2],
        0.3,
        0.15,
        g < 0 ? "+x" : "-x",
        { depth: 0.006, plate: !1 },
      ),
      i.push({ x0: g - 0.05, x1: g + 0.05, z0: O, z1: X, y0: r, y1: r + 1.1 }));
  }
  (a.add(
    T(-3.6, r + 1.1, m.zN, -3.25, r + 1.6, m.zN + 0.12, 0.01),
    o.yellow,
    n,
  ),
    a.add(
      T(-3.55, r + 1.35, m.zN + 0.12, -3.3, r + 1.5, m.zN + 0.125),
      o.black,
      n,
    ),
    a.add(T(43, r + 0.9, m.zN, 43.7, r + 1.8, m.zN + 0.22, 0.01), o.pipeRed, n),
    a.add(
      j(
        [43.95, r + 0.25, m.zN + 0.12],
        [43.95, r + 0.8, m.zN + 0.12],
        0.075,
        12,
      ),
      o.pipeRed,
      n,
    ),
    i.push({
      x0: 42.95,
      x1: 44.1,
      z0: m.zN,
      z1: m.zN + 0.25,
      y0: r,
      y1: r + 1.8,
    }));
  const o0 = ya(c, 16.5, N[0] - 0.2);
  (ga(c, 27, N[0] - 0.2),
    f.sign(
      "ash_wayout",
      [m.x1 + 0.35, u - 0.45, (c0.z0 + c0.z1) / 2],
      0.96,
      0.24,
      "-x",
      { depth: 0.02 },
    ));
  for (const g of [-1, 1])
    a.add(
      j(
        [m.x1 + 0.35, u, (c0.z0 + c0.z1) / 2 + g * 0.4],
        [m.x1 + 0.35, u - 0.33, (c0.z0 + c0.z1) / 2 + g * 0.4],
        0.006,
        4,
      ),
      o.galvDark,
      n,
    );
  const M0 = s.fixId();
  (a.add(
    T(m.x1 - 0.08, u - 0.4, c0.z1 + 0.06, m.x1, u - 0.2, c0.z1 + 0.42, 0.006),
    o.housing,
    n,
  ),
    f.glow("exit", [m.x1 - 0.08, u - 0.3, c0.z1 + 0.24], 0.34, 0.17, "-x", {
      fx: M0,
      chunk: "ash",
    }),
    s.add({
      a: [m.x1 - 0.15, u - 0.3, c0.z1 + 0.1],
      b: [m.x1 - 0.15, u - 0.3, c0.z1 + 0.38],
      col: [0.22, 1, 0.45],
      cd: 1.2,
      reach: 4.5,
      zone: "ashwood",
      fix: M0,
      state: "on",
      box: K,
      spec: 0.5,
    }));
  for (const [g, A, O] of [
    [m.x0 + 0.09, m.zN + 1.6, "+x"],
    [m.x0 + 0.09, m.zS - 1.6, "+x"],
  ]) {
    const X = s.fixId();
    (a.add(
      T(g - 0.09, r + 2.95, A - 0.12, g, r + 3.15, A + 0.12, 0.02),
      o.iron,
      n,
    ),
      a.add(
        O0(
          new U0(0.07, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
            .rotateZ(-Math.PI / 2)
            .scale(0.7, 1, 1.3)
            .translate(g, r + 3.05, A),
          X,
        ),
        o.redLamp,
        { chunk: "ash", cast: !1 },
      ),
      s.add({
        a: [g + 0.1, r + 3.05, A],
        col: [1, 0.25, 0.08],
        cd: 5,
        reach: 7,
        zone: "ashwood",
        fix: X,
        state: "dying",
        box: K,
        point: { cd: 6, dist: 7 },
      }));
  }
  {
    const g = (y0.x0 + y0.x1) / 2,
      A = s.fixId();
    (a.add(
      new D0(0.1, 0.1, 0.06, 20)
        .rotateX(Math.PI / 2)
        .translate(g, y0.y1 + 0.45, m.zN + 0.03),
      o.iron,
      n,
    ),
      a.add(
        O0(
          new U0(0.075, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
            .rotateX(Math.PI / 2)
            .translate(g, y0.y1 + 0.45, m.zN + 0.06),
          A,
        ),
        o.warmBulb,
        { chunk: "ash", cast: !1 },
      ),
      s.add({
        a: [g, y0.y1 + 0.45, m.zN + 0.15],
        col: [1, 0.7, 0.42],
        cd: 3,
        reach: 6,
        zone: "ashwood",
        fix: A,
        state: "dying",
        box: K,
        dir: [0, -0.4, 1],
        dirK: 0.9,
        point: { cd: 3.5, dist: 6, at: [g, y0.y1 + 0.2, m.zN + 0.7] },
      }));
  }
  for (const [g, A, O] of [
    [8.6, m.zN + 0.3, 0.6],
    [47.8, m.zN + 0.3, -0.9],
  ])
    (a.add(j([g, u, A], [g, u - 0.3, A], 0.015, 6), o.galvDark, n),
      a.add(
        T(-0.06, -0.06, -0.15, 0.06, 0.06, 0.15, 0.01).applyMatrix4(
          K0([g, u - 0.36, A + 0.1], [0.35, O, 0]),
        ),
        o.plasticW,
        n,
      ));
  (i.push(...ia(c, 18.2, r, 215.2, 0.5, { chunk: "ash", rng: f0 })),
    i.push(...da(c, 24.8, r, 215, 2.4, { chunk: "ash" })),
    fa(c, 21.3, r, 217, 1.1, { chunk: "ash" }),
    ua(c, 12.6, r, 216.4, 0.4, { chunk: "ash" }));
  for (let g = 0; g < 16; g++)
    $t(c, -8 + f0() * 56, r, m.zN + 0.8 + f0() * 3.4, f0() * 6.28, {
      chunk: "ash",
      w: 0.3 + f0() * 0.15,
      l: 0.4 + f0() * 0.2,
    });
  for (let g = 0; g < 6; g++)
    $t(c, -8 + f0() * 56, r, m.zS - 0.8 - f0() * 3.4, f0() * 6.28, {
      chunk: "ash",
    });
  for (let g = 0; g < 14; g++)
    xe(c, -10 + f0() * 58, r, m.zN + 0.5 + f0() * 3.8, f0, "ash");
  for (let g = 0; g < 10; g++)
    $t(c, -10 + f0() * 60, q, m.edgeN + 0.6 + f0() * 5.6, f0() * 6.28, {
      chunk: "ash",
      w: 0.25,
      l: 0.35,
    });
  (f.decal("b_pool", [18.9, r, 216.2], 1.2, 1.1, "+y", {
    rot: 0.4,
    chunk: "ash",
  }),
    f.decal("b_drag", [45, r, 214.6], 3.4, 0.8, "+y", {
      rot: 0.12,
      chunk: "ash",
    }),
    f.decal("steps", [47.6, r, 215.6], 1, 1, "+y", { rot: -1.2, chunk: "ash" }),
    f.decal("b_smear", [44.6, r + 1.2, m.zN], 1.2, 0.6, "+z", { chunk: "ash" }),
    f.decal("b_hand", [45.4, r + 1.45, m.zN], 0.18, 0.22, "+z", {
      chunk: "ash",
      rot: -0.2,
    }),
    f.decal("b_spatter", [m.cols[3], r + 1.6, m.colZ - 0.205], 0.6, 0.6, "-z", {
      chunk: "ash",
      off: 0.014,
    }),
    f.decal("b_pool", [5.2, r, 228.6], 1.4, 1.2, "+y", {
      rot: 1,
      chunk: "ash",
    }),
    f.decal("b_hand", [8, r + 1.3, m.zN], 0.18, 0.22, "+z", {
      chunk: "ash",
      rot: 0.25,
    }),
    f.decal("graf1", [33, r + 3.4, m.zS], 2.4, 0.75, "-z", {
      chunk: "ash",
      matt: !0,
    }));
  for (const [g, A, O, X] of [
    [-1.5, 214.4, 2.6, 0.3],
    [11, 228.6, 3.2, 1.2],
    [23.5, 221, 3.6, 2.1],
    [37.8, 214.2, 2.4, 0.8],
    [44, 222.4, 3, 2.6],
    [5.5, 219.6, 2.2, 0.5],
  ])
    f.decal("damp", [g, u - 0.003, A], O, O * 0.8, "-y", {
      rot: X,
      chunk: "ash",
      matt: !0,
    });
  for (const [g, A, O] of [
    [16.2, m.zN, "+z"],
    [35.4, m.zS, "-z"],
    [-8.2, m.zS, "-z"],
  ])
    f.decal("damp", [g, r + 3.2, A], 1.6, 2.4, O, { chunk: "ash", matt: !0 });
  f.decal("b_spatter", [28.4, r, m.edgeN - 1], 0.9, 0.9, "+y", {
    rot: 2,
    chunk: "ash",
  });
  const S0 = q - 0.2,
    m0 = u;
  (i.push(
    { x0: m.x0, x1: y0.x0, z0: m.zN - 0.3, z1: m.zN, y0: S0, y1: m0 },
    { x0: y0.x1, x1: m.x1, z0: m.zN - 0.3, z1: m.zN, y0: S0, y1: m0 },
  ),
    i.push({ x0: m.x0, x1: m.x1, z0: m.zS, z1: m.zS + 0.3, y0: S0, y1: m0 }),
    i.push(
      { x0: m.x0 - 0.3, x1: m.x0, z0: m.zN, z1: d0.z0, y0: S0, y1: m0 },
      { x0: m.x0 - 0.3, x1: m.x0, z0: d0.z1, z1: m.zS, y0: S0, y1: m0 },
    ),
    i.push(
      { x0: m.x1, x1: m.x1 + 0.3, z0: c0.z1, z1: d0.z0, y0: S0, y1: m0 },
      { x0: m.x1, x1: m.x1 + 0.3, z0: d0.z1, z1: Lt.z0, y0: S0, y1: m0 },
    ));
  for (const g of m.cols)
    i.push(
      { x0: g - 0.22, x1: g + 0.22, z0: m.zN, z1: m.zN + 0.1, y0: S0, y1: m0 },
      { x0: g - 0.22, x1: g + 0.22, z0: m.zS - 0.1, z1: m.zS, y0: S0, y1: m0 },
    );
  for (let g = m.x0; g < m.x1 - 1e-6; g += 2)
    (t.push({
      x0: g,
      x1: Math.min(m.x1, g + 2),
      z0: m.edgeN - 0.05,
      z1: m.edgeN + 0.15,
      y0: r - 1.5,
      y1: r + 2.2,
      on: !0,
      edge: "ashwood_n",
      shot: !1,
    }),
      e.push({
        x0: g,
        x1: Math.min(m.x1, g + 2),
        z0: m.edgeS - 0.15,
        z1: m.edgeS + 0.05,
        y0: r - 1.5,
        y1: r + 2.2,
        on: !0,
        edge: "ashwood_s",
        shot: !1,
      }));
  return (
    i.push(...t, ...e, ...s0.colliders),
    c.sounds.hums.push({
      id: "metro_hum_ashwood",
      pos: [19, r + 3, 216.5],
      zone: "ashwood",
    }),
    c.sounds.drips.push(
      [2.5, r + 0.02, 214],
      [33.5, q + 0.02, 221],
      [-8, q + 0.02, 223],
      [52, r + 0.4, 214.5],
    ),
    {
      colliders: i,
      edges: [...t, ...e],
      edgesN: t,
      edgesS: e,
      board: o0,
      shutter: s0.shutter,
      gate: s0.gate,
      hall: K,
      points: s0.points,
    }
  );
}
