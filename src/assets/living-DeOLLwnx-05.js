// assets/living-DeOLLwnx 05 — translate
// Lines 1233-1668 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
function ue(a, t, r, e) {
  const o = new y0();
  ((o.name = "tv"), r.add(o));
  const s = 16.5,
    n = 0.045,
    l = { w: 1.2, h: 0.5, d: 0.48 },
    p = F(n + l.d / 2, 0, s, Math.PI / 2);
  t.frame(p);
  const d = "wood_walnut";
  t.part(
    _(l.w + 0.04, 0.032, l.d + 0.02, { r: 0.01 }).translate(
      0,
      l.h - 0.016,
      0.01,
    ),
    d,
    { grain: "x" },
  );
  for (const X of [-1, 1])
    t.part(
      _(0.032, l.h - 0.1, l.d - 0.02, { r: 0.006 }).translate(
        X * (l.w / 2 - 0.016),
        0.05 + (l.h - 0.1) / 2,
        0,
      ),
      d,
      { grain: "y" },
    );
  (t.part(
    _(l.w - 0.02, 0.03, l.d - 0.03, { r: 0.004 }).translate(0, 0.075, 0),
    d,
    { grain: "x" },
  ),
    t.part(
      _(l.w - 0.08, 0.055, l.d - 0.08, { r: 0.004 }).translate(
        0,
        0.0275,
        -0.02,
      ),
      "wood_ebony",
      { grain: "x", cast: !1 },
    ),
    t.part(
      _(l.w - 0.04, l.h - 0.1, 0.012, { r: 0.002 }).translate(
        0,
        0.05 + (l.h - 0.1) / 2,
        -0.48 / 2 + 0.02,
      ),
      d,
      { grain: "x", cast: !1 },
    ),
    t.part(
      _(0.028, l.h - 0.14, l.d - 0.04, { r: 0.004 }).translate(
        -0.02,
        0.09 + (l.h - 0.14) / 2,
        0,
      ),
      d,
      { grain: "y" },
    ),
    t.part(
      _(0.54, 0.02, l.d - 0.05, { r: 0.004 }).translate(-0.31, 0.27, -0.01),
      d,
      { grain: "x" },
    ));
  const c = _(0.54, 0.34, 0.022, { r: 0.006 }).translate(
    0.27,
    0.27,
    l.d / 2 - 0.015,
  );
  (t.part(c, d, { grain: "y" }),
    t.part(
      _(0.42, 0.24, 0.012, { r: 0.012, m: 3 }).translate(
        0.27,
        0.27,
        l.d / 2 + 0,
      ),
      d,
      { grain: "y" },
    ),
    t.part(
      j(
        [
          [0.012, 0],
          [0.014, 0.006],
          [0.009, 0.014],
          [0.013, 0.026],
          [0, 0.03],
        ],
        14,
      )
        .rotateX(Math.PI / 2)
        .translate(0.07, 0.27, l.d / 2 + 0.004),
      "brass_aged",
      { grain: "y", cast: !1 },
    ));
  for (const [X, N] of [
    [-0.55, 0.19],
    [0.55, 0.19],
    [-0.55, -0.19],
    [0.55, -0.19],
  ])
    t.part(
      j(
        [
          [0.022, 0],
          [0.028, 0.012],
          [0.024, 0.024],
          [0.018, 0.03],
        ],
        14,
      ).translate(X, 0, N),
      "wood_ebony",
      { grain: "y", cast: !1 },
    );
  (t.part(
    _(0.42, 0.085, 0.3, { r: 0.006 }).translate(-0.3, 0.09 + 0.0425, 0.02),
    a0(a, "#161514"),
    { grain: "x" },
  ),
    t.part(
      _(0.2, 0.012, 0.006, { r: 0.002 }).translate(-0.36, 0.15, 0.17),
      a0(a, "#050505"),
      { cast: !1 },
    ),
    [
      [-0.44, 0.35],
      [-0.31, -0.2],
      [-0.18, 0.1],
    ].forEach(([X, N], K) => {
      (t.part(
        _(0.105, 0.025, 0.19, { r: 0.003 })
          .translate(0, 0.0125, 0)
          .rotateY(N * 0.3)
          .translate(X, 0.28 + (K === 2 ? 0.025 : 0), 0),
        a0(a, "#121212"),
        { cast: !1 },
      ),
        t.part(
          _(0.08, 0.026, 0.004, { r: 0.001 })
            .translate(0, 0.0125, 0.096)
            .rotateY(N * 0.3)
            .translate(X, 0.28 + (K === 2 ? 0.025 : 0), 0),
          "paper_old",
          { cast: !1 },
        ));
    }));
  const b = new U0({
      map: ie(),
      color: new H0().setRGB(0.3, 1.6, 0.9),
      transparent: !0,
      blending: Tt,
      depthWrite: !1,
      toneMapped: !1,
    }),
    k = new u0(new _0(0.06, 0.015), b);
  (k.position.set(-0.19, 0.145, 0.171),
    k.applyMatrix4(p),
    (k.name = "vcr_clock"),
    o.add(k));
  const S = 0.66,
    h = 0.52,
    y = 0.46,
    C = l.h,
    z = F(n + 0.02 + y / 2, C, s, Math.PI / 2);
  (t.frame(z),
    t.part(
      _(S, h, 0.3, { r: 0.028, m: 3 }).translate(0, h / 2, y / 2 - 0.15),
      d,
      { grain: "x" },
    ));
  {
    const X = new X0(0.56, 0.44, 0.17, 1, 1, 1).toNonIndexed(),
      N = X.attributes.position;
    for (let K = 0; K < N.count; K++)
      N.getZ(K) < 0 &&
        N.setXYZ(K, N.getX(K) * 0.58, N.getY(K) * 0.62 - 0.03, N.getZ(K));
    (X.computeVertexNormals(),
      X.translate(0, h / 2 - 0.01, y / 2 - 0.3 - 0.085),
      t.part(X, a0(a, "#1d1915"), { grain: "x" }));
  }
  const w = 0.46,
    f = 0.36,
    i = -0.07,
    m = h / 2 + 0.015;
  {
    const X = z0(S - 0.062, h - 0.062, 0.02, 0, h / 2);
    X.holes.push(z0(w + 0.01, f + 0.01, 0.045, i, m));
    const N = G0(X, 0.016, 0.004, 6);
    (N.translate(0, 0, y / 2), t.part(N, a0(a, "#171615"), { grain: "x" }));
    const K = z0(w + 0.034, f + 0.034, 0.055, i, m);
    (K.holes.push(z0(w + 0.01, f + 0.01, 0.045, i, m)),
      t.part(
        G0(K, 0.006, 0.002, 6).translate(0, 0, y / 2 + 0.014),
        I0(a, "#6d6a64"),
        { grain: "x", cast: !1 },
      ));
  }
  const M = 0.235;
  (t.part(
    j(
      [
        [0.03, 0],
        [0.031, 0.01],
        [0.027, 0.03],
        [0.02, 0.034],
      ],
      24,
    )
      .rotateX(Math.PI / 2)
      .translate(M, m + 0.1, y / 2 + 0.014),
    a0(a, "#2a2724"),
    { grain: "y", cast: !1 },
  ),
    t.part(
      _(0.006, 0.04, 0.012, { r: 0.002 }).translate(M, m + 0.1, y / 2 + 0.05),
      I0(a, "#9a968c"),
      { cast: !1 },
    ),
    t.part(
      j(
        [
          [0.02, 0],
          [0.02, 0.01],
          [0.016, 0.024],
          [0.01, 0.026],
        ],
        20,
      )
        .rotateX(Math.PI / 2)
        .translate(M, m + 0.02, y / 2 + 0.014),
      a0(a, "#2a2724"),
      { grain: "y", cast: !1 },
    ));
  for (let X = 0; X < 4; X++)
    t.part(
      _(0.026, 0.012, 0.01, { r: 0.002 }).translate(
        M - 0.03 + X * 0.02,
        m - 0.045,
        y / 2 + 0.018,
      ),
      I0(a, "#77736a"),
      { cast: !1 },
    );
  for (let X = 0; X < 7; X++)
    t.part(
      _(0.07, 0.005, 0.004, { r: 0.0015 }).translate(
        M,
        m - 0.085 - X * 0.012,
        y / 2 + 0.0165,
      ),
      a0(a, "#050505"),
      { cast: !1 },
    );
  t.part(
    _(0.05, 0.012, 0.003, { r: 0.001 }).translate(
      i,
      m - f / 2 - 0.035,
      y / 2 + 0.017,
    ),
    I0(a, "#a39d90"),
    { cast: !1 },
  );
  const v = new u0(
    new D0(0.0035, 8, 6),
    new U0({ color: new H0().setRGB(4, 0.25, 0.1), toneMapped: !1 }),
  );
  (v.position.set(M + 0.03, m - 0.045, y / 2 + 0.018),
    v.applyMatrix4(z),
    o.add(v),
    t.part(
      j(
        [
          [0.06, 0],
          [0.058, 0.012],
          [0.04, 0.03],
          [0.012, 0.042],
          [0, 0.044],
        ],
        20,
      ).translate(0.02, h, -0.02),
      a0(a, "#1c1a18"),
      { grain: "y" },
    ));
  for (const X of [-1, 1]) {
    const N = X * 0.62,
      K = -0.2,
      r0 = 0.44,
      m0 = [
        0.02 + Math.sin(N) * r0,
        h + 0.04 + Math.cos(N) * r0 * Math.cos(K),
        -0.02 + Math.sin(K) * r0,
      ];
    (t.part(T0([[0.02, h + 0.04, -0.02], m0], 0.0025, 2, 6), I0(a, "#b8b4aa"), {
      grain: "y",
      cast: !1,
    }),
      t.part(
        new D0(0.006, 8, 6).translate(m0[0], m0[1], m0[2]),
        I0(a, "#b8b4aa"),
        { cast: !1 },
      ));
  }
  const T = new _0(w, f, 24, 18),
    I = T.attributes.position;
  for (let X = 0; X < I.count; X++) {
    const N = I.getX(X) / (w / 2),
      K = I.getY(X) / (f / 2);
    I.setZ(X, 0.022 * (1 - 0.55 * N * N) * (1 - 0.55 * K * K) - 0.004);
  }
  (T.computeVertexNormals(), T.translate(i, m, y / 2 + 0.008));
  const A = Kt(e),
    D = {
      uFrame: { value: 0 },
      uTime: { value: 0 },
      uFace: { value: 0 },
      uGain: { value: 1.55 },
      uFlick: { value: 1 },
      uCollapse: { value: 0 },
      uOn: { value: 1 },
      uFaceTex: { value: A },
    },
    q = new qt({
      vertexShader: fe,
      fragmentShader: pe,
      uniforms: D,
      toneMapped: !1,
    }),
    G = new u0(T, q);
  ((G.name = "tv_screen"),
    G.applyMatrix4(z),
    o.add(G),
    t
      .frame(z)
      .part(T.clone().translate(0, 0, 0.0015), ot(), { uv: "keep", cast: !1 }));
  const J = n + 0.02 + y + 0.07,
    E = C + m,
    U = s - i,
    B = new tt(11061503, 18, 13, 1.32, 0.95, 2);
  (B.position.set(J, E, U),
    B.target.position.set(J + 6, E - 0.35, U),
    (B.castShadow = !0),
    B.shadow.mapSize.set(1024, 1024),
    (B.shadow.bias = -6e-4),
    (B.shadow.normalBias = 0.025),
    (B.shadow.camera.near = 0.05),
    (B.shadow.camera.far = 13),
    (B.name = "tv_light"),
    o.add(B, B.target));
  const o0 = new _t(10469375, 1.6, 3.4, 2);
  (o0.position.set(J + 0.55, E + 0.55, U),
    (o0.name = "tv_halo"),
    (o0.userData.noActor = !0),
    o.add(o0));
  const x = a.rng(4242),
    Y = {
      channel: "static",
      level: 22,
      on: 1,
      collapse: 0,
      target: 1,
      flashPending: !1,
      nextFlash: 7 + x() * 5,
      t: 0,
      frame: 0,
    },
    n0 = {
      group: o,
      screen: G,
      light: B,
      halo: o0,
      get level() {
        return Y.level;
      },
      set level(X) {
        Y.level = X;
      },
      get channel() {
        return Y.channel;
      },
      setChannel(X) {
        ((Y.channel = X),
          X === "off" ? (Y.target = 0) : (Y.target = 1),
          X !== "off" && Y.on < 0.5 && ((Y.on = 1), (Y.collapse = 0)),
          (D.uFace.value = X === "face" ? 1 : 0));
      },
      power(X) {
        n0.setChannel(X ? "static" : "off");
      },
      flash() {
        Y.flashPending = !0;
      },
    },
    c0 = (X, N) => {
      ((Y.t = N),
        Y.frame++,
        (D.uTime.value = N),
        (D.uFrame.value = Y.frame),
        Y.target === 0 && Y.on > 0
          ? ((Y.collapse = Math.min(1, Y.collapse + X / 0.45)),
            Y.collapse >= 1 && (Y.on = 0))
          : Y.target === 1 &&
            ((Y.collapse = Math.max(0, Y.collapse - X / 0.12)), (Y.on = 1)),
        (D.uCollapse.value = Y.collapse),
        (D.uOn.value = Y.on),
        Y.channel === "static" &&
          (N >= Y.nextFlash &&
            ((Y.nextFlash = N + 7 + x() * 5), (Y.flashPending = !0)),
          (D.uFace.value = Y.flashPending ? 1 : 0),
          (Y.flashPending = !1)));
      const K = x();
      Y.dropT > 0
        ? (Y.dropT -= X)
        : K < X * 0.35 && (Y.dropT = 0.06 + x() * 0.08);
      const r0 =
        (0.84 + 0.2 * x() + 0.07 * Math.sin(N * 1.44)) *
        (Y.dropT > 0 ? 0.5 : 1);
      Y.fl = (Y.fl ?? 1) + (r0 - (Y.fl ?? 1)) * Math.min(1, X * 16);
      const m0 = Y.fl;
      D.uFlick.value = m0;
      const K0 = D.uFace.value > 0 ? 0.55 : 1,
        w0 = Y.on * (1 - Y.collapse * 0.85) * m0 * K0;
      ((B.intensity = Y.level * w0),
        (o0.intensity = Y.level * 0.09 * w0),
        (b.opacity = N % 1 < 0.55 ? 1 : 0.08));
    },
    W = {
      x0: n - 0.01,
      x1: n + l.d + 0.02,
      z0: s - l.w / 2 - 0.02,
      z1: s + l.w / 2 + 0.02,
      y0: 0,
      y1: 1.1,
    };
  return { tv: n0, anim: c0, colliders: [W], light: B, front: [1.6, 0, s] };
}
