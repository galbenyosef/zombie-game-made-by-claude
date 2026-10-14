// assets/metro-xgLUk92P 19 — add
// Lines 6355-7930 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function buildParkgateConcourse(c, a) {
  const { B: o, M: s, L: f, D: h, group: d, rng: l } = c,
    i = [],
    t = [],
    e = u0,
    n = P.ceil,
    r = "pg",
    u = { chunk: r },
    b = P.hallX0,
    M = P.hallX1,
    x = P.hallZ0,
    w = P.hallZ1,
    p = P.mezz,
    S = P.stair,
    y = P.exit,
    L = [b - 0.05, q - 0.5, x - 0.3, M + 0.05, n + 0.05, w + 0.05],
    v = [
      p.x0 - 0.05,
      p.y - 0.6,
      p.z0 - 0.05,
      p.x1 + 0.05,
      p.ceil + 0.05,
      p.z1 + 0.6,
    ],
    C = { x0: P.esc[0].x0 - 0.15, x1: S.x1 + 0.3 },
    k = 0.3,
    R = 0.4,
    W = P.edge - k,
    Y = W - R;
  (o.add(T0(P.platX0, x, P.platX1, Y, e, !0), s.stone, u),
    o.add(T(P.platX0, e - 0.02, Y, P.platX1, e + 0.004, W), s.tactile, u),
    o.add(T(P.platX0, e - 0.2, W, P.platX1, e, P.edge, 0.012), s.coping, u),
    o.add(r0("+z", W, P.platX0, P.platX1, q, e - 0.2), s.concDark, u));
  for (let z = 0; z < 3; z++)
    o.add(
      j(
        [P.platX0, e - 0.42 - z * 0.09, W + 0.06],
        [P.platX1, e - 0.42 - z * 0.09, W + 0.06],
        0.018,
        6,
      ),
      s.cable,
      { chunk: r, cast: !1 },
    );
  (o.add(T0(b, W, M, w, q, !0), s.bed, u),
    o.add(r0("-x", P.platX0, x, P.edge, q, e), s.concDark, u),
    o.add(T0(b, x, P.platX0, W, q, !0), s.bed, u),
    o.add(T0(P.platX1, x, M, W, e, !0), s.stone, u),
    o.add(r0("+z", x, b, C.x0, e, p.y - 0.5), s.enamel, u),
    o.add(r0("+z", x, C.x1, M, e, p.y - 0.5), s.enamel, u),
    o.add(r0("+z", x, b, p.x0, p.y - 0.5, n), s.enamel, u),
    o.add(r0("+z", x, p.x1, M, p.y - 0.5, n), s.enamel, u),
    o.add(T(p.x0, p.y - 0.5, x - 0.02, C.x0, p.y, x + 0.04), s.stainless, u),
    o.add(T(C.x1, p.y - 0.5, x - 0.02, p.x1, p.y, x + 0.04), s.stainless, u),
    o.add(r0("-z", w, b, M, q, n), s.enamel, u),
    o.add(r0("-x", M, x, w, q, n), s.enamel, u));
  {
    const z = V0 + W0.cy,
      _ = new po();
    (_.moveTo(x, q),
      _.lineTo(w, q),
      _.lineTo(w, n),
      _.lineTo(x, n),
      _.lineTo(x, q));
    const D = new xo(),
      B = Math.asin((q - z) / W0.r);
    D.moveTo(P.track + W0.r * Math.cos(B), q);
    for (let a0 = 0; a0 <= 40; a0++) {
      const z0 = B + (Math.PI - 2 * B) * (a0 / 40);
      D.lineTo(P.track + W0.r * Math.cos(z0), z + W0.r * Math.sin(z0));
    }
    (D.lineTo(P.track + W0.r * Math.cos(B), q), _.holes.push(D));
    const U = new mo(_, 8),
      n0 = U.attributes.position,
      t0 = U.attributes.uv;
    for (let a0 = 0; a0 < n0.count; a0++) {
      const z0 = n0.getX(a0),
        w0 = n0.getY(a0);
      (n0.setXYZ(a0, b, w0, z0), t0.setXY(a0, z0, w0));
    }
    const i0 = U.attributes.normal;
    for (let a0 = 0; a0 < i0.count; a0++) i0.setXYZ(a0, 1, 0, 0);
    (pe(U), o.add(U, s.enamel, u));
  }
  o.add(T0(b, x, M, w, n, !1), s.ceilPanel, u);
  for (const [z, _, D] of [
    [409.5, 226.6, 0.5],
    [447, 231.3, -0.62],
  ])
    o.add(
      T(-0.6, -0.01, -0.3, 0.6, 0.01, 0.3).applyMatrix4(
        K0([z, n - 0.25, _], [D, 0.3, 0.2]),
      ),
      s.ceilPanel,
      u,
    );
  const $ = [395, 404, 413, 440, 449],
    Z = 229.6;
  for (const z of $) {
    const _ = new D0(0.26, 0.26, 2.4, 28);
    (_.translate(z, e + 1.2, Z), it(_), o.add(_, s.stainless, u));
    const D = new D0(0.25, 0.25, n - e - 2.4, 28, 1, !0);
    (D.translate(z, e + 2.4 + (n - e - 2.4) / 2, Z),
      it(D),
      o.add(D, s.enamel, u));
    const B = new D0(0.5, 0.25, 0.5, 28, 1, !0);
    (B.translate(z, n - 0.25, Z),
      o.add(B, s.stainless, u),
      i.push({
        x0: z - 0.27,
        x1: z + 0.27,
        z0: Z - 0.27,
        z1: Z + 0.27,
        y0: q,
        y1: n,
      }));
  }
  for (const [z, _] of [
    [404, "on"],
    [440, "dying"],
  ]) {
    const D = f.fixId();
    (o.add(
      O0(new D0(0.34, 0.3, 0.06, 28, 1, !0).translate(z, n - 0.62, Z), D),
      s.diffuser,
      { chunk: r, cast: !1 },
    ),
      f.add({
        a: [z, n - 0.7, Z],
        col: [1, 0.92, 0.8],
        cd: 30,
        reach: 9,
        zone: "parkgate",
        fix: D,
        state: _,
        dir: [0, 1, 0],
        dirK: 0.9,
        lobe: 0,
        box: L,
        spec: 0.4,
      }));
  }
  const H = (z, _, D, B, U, n0, t0 = "side") => {
      const i0 = Math.max(1, Math.ceil((B - D) / 0.8));
      for (let a0 = 0; a0 < i0; a0++) {
        const z0 = D + ((B - D) * a0) / i0,
          w0 = D + ((B - D) * (a0 + 1)) / i0,
          I0 = U(z0 + 0.001),
          E0 = U(w0 - 0.001),
          x0 = {
            x0: z,
            x1: _,
            z0,
            z1: w0,
            y0: n0 ?? Math.min(I0, E0) - 0.5,
            y1: Math.max(I0, E0) + 1.1,
          };
        (t0 === "rail" ? (x0.shot = !1) : (x0.shotY1 = Math.min(I0, E0) - 0.05),
          i.push(x0));
      }
    },
    V = (z, _, D, B, U, n0, t0 = !0) => {
      for (let i0 = 0; i0 < D; i0++) {
        const a0 = z - i0 * S.tread,
          z0 = _ + (i0 + 1) * S.rise;
        (o.add(
          T(B, _ + i0 * S.rise - 0.001, a0 - S.tread - 0.001, U, z0, a0),
          s.stone,
          { chunk: n0 },
        ),
          t0 &&
            (o.add(
              T(B, z0 - 0.02, a0 - 0.06, U, z0 + 0.006, a0 + 0.003, 0.002),
              s.stainless,
              { chunk: n0, cast: !1 },
            ),
            o.add(
              T(
                B + 0.05,
                z0 + 0.006,
                a0 - 0.05,
                U - 0.05,
                z0 + 0.011,
                a0 - 0.012,
              ),
              s.nosing,
              { chunk: n0, cast: !1 },
            )));
      }
    },
    I = S.flights,
    E = (I - 1) * S.tread;
  V(S.zBot, e, I - 1, S.x0, S.x1, r);
  const N = e + I * S.rise,
    Q = S.zBot - E,
    K = Q - S.landing;
  (o.add(T(S.x0, e, K, S.x1, N, Q - 0.001), s.stone, u),
    o.add(
      T(S.x0, N - 0.02, Q - 0.06, S.x1, N + 0.006, Q + 0.003),
      s.stainless,
      { chunk: r, cast: !1 },
    ),
    V(K, N, I - 1, S.x0, S.x1, r),
    o.add(T(S.x0, e, S.zTop, S.x1, p.y, S.zTop + S.tread + 0.001), s.stone, u));
  const s0 = (z) =>
      u0 +
      (S.zBot - z <= 0
        ? 0
        : S.zBot - z < E
          ? ((S.zBot - z) / E) * I * S.rise
          : S.zBot - z < E + S.landing
            ? I * S.rise
            : Math.min(
                2 * I * S.rise,
                I * S.rise + ((S.zBot - z - E - S.landing) / E) * I * S.rise,
              )),
    f0 = [S.zBot, Q, K, S.zTop];
  for (const [z, _] of [
    [S.x0 - 0.012, "-x"],
    [S.x1 + 0.012, "+x"],
  ]) {
    for (let D = 0; D < 3; D++) {
      const B = f0[D],
        U = f0[D + 1],
        n0 = s0(B + 0.001),
        t0 = s0(U + 0.001),
        i0 =
          _ === "+x"
            ? k0([z, e, B], [z, e, U], [z, t0, U], [z, n0, B])
            : k0([z, e, U], [z, e, B], [z, n0, B], [z, t0, U]);
      o.add(i0, s.enamel, u);
      const a0 =
        _ === "+x"
          ? k0([z, n0, B], [z, t0, U], [z, t0 + 1, U], [z, n0 + 1, B])
          : k0([z, t0, U], [z, n0, B], [z, n0 + 1, B], [z, t0 + 1, U]);
      (o.add(a0, s.glass, { chunk: r, cast: !1 }),
        o.add(
          j([z, n0 + 1.02, B], [z, t0 + 1.02, U], 0.025, 10),
          s.stainless,
          u,
        ),
        o.add(
          j([z, n0 + 0.04, B], [z, t0 + 0.04, U], 0.018, 8),
          s.stainless,
          u,
        ));
    }
    for (let D = S.zBot - 0.2; D > S.zTop; D -= 1.4) {
      const B = s0(D);
      o.add(j([z, B, D], [z, B + 1.02, D], 0.02, 8), s.stainless, u);
    }
  }
  {
    const z = (S.x0 + S.x1) / 2;
    for (let _ = 0; _ < 3; _++) {
      const D = f0[_],
        B = f0[_ + 1];
      o.add(
        j(
          [z, s0(D + 0.001) + 0.95, D],
          [z, s0(B + 0.001) + 0.95, B],
          0.024,
          10,
        ),
        s.stainless,
        u,
      );
    }
    for (let _ = S.zBot - 0.3; _ > S.zTop; _ -= 2) {
      const D = s0(_);
      o.add(j([z, D, _], [z, D + 0.95, _], 0.022, 8), s.stainless, u);
    }
  }
  (H(S.x0 - 0.3, S.x0 + 0.02, S.zTop, S.zBot, s0, e - 0.5),
    H(S.x1 - 0.02, S.x1 + 0.3, S.zTop, S.zBot, s0, e - 0.5),
    H(
      (S.x0 + S.x1) / 2 - 0.04,
      (S.x0 + S.x1) / 2 + 0.04,
      S.zTop + 0.3,
      S.zBot - 0.3,
      s0,
      e - 0.5,
      "rail",
    ));
  const p0 = 1.1,
    o0 = S.zBot,
    M0 = S.zTop,
    S0 = o0 - M0 - 2 * p0,
    m0 = (z) => e + Math.max(0, Math.min(1, (o0 - p0 - z) / S0)) * (p.y - e);
  for (const z of P.esc) {
    const _ = z.x0,
      D = z.x1,
      B = _ - 0.15,
      U = D + 0.15,
      n0 = Math.round(S0 / 0.4);
    for (let t0 = 0; t0 < n0; t0++) {
      const i0 = o0 - p0 - t0 * (S0 / n0),
        a0 = m0(i0 + 0.001),
        z0 = m0(i0 - S0 / n0);
      o.add(T(_, a0 - 0.05, i0 - S0 / n0, D, z0, i0), s.stainless, {
        chunk: r,
      });
    }
    (o.add(T(_, e - 0.05, o0 - p0, D, e + 0.012, o0), s.stainless, u),
      o.add(T(_, p.y - 0.05, M0, D, p.y + 0.012, M0 + p0), s.stainless, u));
    for (const [t0, i0] of [
      [B, "-x"],
      [U, "+x"],
    ]) {
      const a0 = [
        [o0, e],
        [o0 - p0, e],
        [M0 + p0, p.y],
        [M0, p.y],
      ];
      for (let z0 = 0; z0 < 3; z0++) {
        const [w0, I0] = a0[z0],
          [E0, x0] = a0[z0 + 1],
          Q0 =
            i0 === "+x"
              ? k0(
                  [t0, (Math.min(I0, x0) === I0, e), w0],
                  [t0, e, E0],
                  [t0, x0 + 0.1, E0],
                  [t0, I0 + 0.1, w0],
                )
              : k0(
                  [t0, e, E0],
                  [t0, e, w0],
                  [t0, I0 + 0.1, w0],
                  [t0, x0 + 0.1, E0],
                );
        o.add(Q0, s.stainless, u);
        const ae =
          i0 === "+x"
            ? k0(
                [t0, I0 + 0.1, w0],
                [t0, x0 + 0.1, E0],
                [t0, x0 + 0.95, E0],
                [t0, I0 + 0.95, w0],
              )
            : k0(
                [t0, x0 + 0.1, E0],
                [t0, I0 + 0.1, w0],
                [t0, I0 + 0.95, w0],
                [t0, x0 + 0.95, E0],
              );
        (o.add(ae, s.glass, { chunk: r, cast: !1 }),
          o.add(j([t0, I0 + 1, w0], [t0, x0 + 1, E0], 0.04, 10), s.rubber, u));
      }
      o.add(
        new Ot(0.22, 0.04, 8, 16, Math.PI)
          .rotateY(Math.PI / 2)
          .rotateX((Math.PI / 2) * 0)
          .translate(t0, e + 0.78, o0 + 0),
        s.rubber,
        u,
      );
    }
    (H(B - 0.05, B + 0.05, M0, o0 - 0.2, m0, e - 0.5),
      H(U - 0.05, U + 0.05, M0, o0 - 0.2, m0, e - 0.5));
  }
  {
    const z = P.esc[0].x1 + 0.15,
      _ = P.esc[1].x0 - 0.15,
      D = [
        [o0, e],
        [o0 - p0, e],
        [M0 + p0, p.y],
        [M0, p.y],
      ];
    for (let B = 0; B < 3; B++) {
      const [U, n0] = D[B],
        [t0, i0] = D[B + 1];
      o.add(
        k0(
          [z, n0 + 0.12, U],
          [_, n0 + 0.12, U],
          [_, i0 + 0.12, t0],
          [z, i0 + 0.12, t0],
        ),
        s.stainless,
        u,
      );
    }
  }
  const g = { chunk: "pgm" };
  (o.add(T0(p.x0, p.z0, p.x1, p.z1, p.y, !0), s.stone, g),
    o.add(T0(p.x0, p.z0, p.x1, p.z1, p.ceil, !1), s.ceilPanel, g),
    o.add(r0("+z", p.z0, p.x0, y.x0, p.y, p.ceil), s.enamel, g),
    o.add(r0("+z", p.z0, y.x1, p.x1, p.y, p.ceil), s.enamel, g),
    o.add(r0("+x", p.x0, p.z0, p.z1, p.y, p.ceil), s.enamel, g),
    o.add(r0("-x", p.x1, p.z0, p.z1, p.y, p.ceil), s.enamel, g));
  for (const [z, _] of [
    [p.x0, C.x0],
    [C.x1, p.x1],
  ]) {
    (o.add(
      k0(
        [z, p.y + 0.12, x],
        [_, p.y + 0.12, x],
        [_, p.ceil, x],
        [z, p.ceil, x],
      ),
      s.glass,
      { chunk: "pgm", cast: !1 },
    ),
      o.add(T(z, p.y, x - 0.03, _, p.y + 0.12, x + 0.03), s.stainless, g));
    for (
      let D = z;
      D <= _ + 1e-6;
      D += (_ - z) / Math.max(1, Math.round((_ - z) / 1.5))
    )
      o.add(
        T(D - 0.03, p.y, x - 0.04, D + 0.03, p.ceil, x + 0.04),
        s.stainless,
        g,
      );
    (o.add(T(z, p.y + 1.05, x - 0.06, _, p.y + 1.1, x - 0.02), s.stainless, g),
      i.push({ x0: z, x1: _, z0: x - 0.15, z1: x + 0.15, y0: q, y1: p.ceil }));
  }
  i.push(
    { x0: b, x1: C.x0, z0: x - 0.3, z1: x, y0: q, y1: p.y },
    { x0: C.x1, x1: M, z0: x - 0.3, z1: x, y0: q, y1: p.y },
  );
  const A = P.gatesZ - 0.7,
    O = P.gatesZ + 0.7,
    X = 421.4,
    G = 11,
    l0 = 1;
  for (let z = 0; z < G; z++) {
    const _ = X + z * l0;
    (o.add(T(_ - 0.1, p.y, A, _ + 0.1, p.y + 1, O, 0.015), s.stainless, g),
      o.add(
        T(_ - 0.1, p.y + 1, A + 0.3, _ + 0.1, p.y + 1.03, O - 0.3, 0.01),
        s.panelDark,
        g,
      ),
      o.add(
        new D0(0.045, 0.045, 0.006, 16).translate(
          _,
          p.y + 1.035,
          P.gatesZ + 0.15,
        ),
        s.yellow,
        g,
      ));
    const D = f.fixId();
    for (const [B, U] of [
      [A, "-z"],
      [O, "+z"],
    ])
      c.D.glow(
        z % 4 === 3 ? "gate_no" : "gate_ok",
        [_, p.y + 0.82, B],
        0.12,
        0.12,
        U,
        { fx: D, chunk: "pgm" },
      );
    i.push({
      x0: _ - 0.11,
      x1: _ + 0.11,
      z0: A,
      z1: O,
      y0: u0 - 0.5,
      y1: p.y + 1.1,
    });
  }
  const h0 = X + (G - 1) * l0;
  for (const [z, _] of [
    [p.x0, X - 0.1],
    [h0 + 1.25, p.x1],
  ]) {
    (o.add(
      k0(
        [z, p.y + 0.08, P.gatesZ],
        [_, p.y + 0.08, P.gatesZ],
        [_, p.y + 1.1, P.gatesZ],
        [z, p.y + 1.1, P.gatesZ],
      ),
      s.glass,
      { chunk: "pgm", cast: !1 },
    ),
      o.add(
        T(z, p.y + 1.08, P.gatesZ - 0.03, _, p.y + 1.12, P.gatesZ + 0.03),
        s.stainless,
        g,
      ));
    for (
      let D = z;
      D <= _ + 1e-6;
      D += (_ - z) / Math.max(1, Math.round((_ - z) / 1.6))
    )
      o.add(
        T(
          D - 0.025,
          p.y,
          P.gatesZ - 0.025,
          D + 0.025,
          p.y + 1.12,
          P.gatesZ + 0.025,
        ),
        s.stainless,
        g,
      );
    i.push({
      x0: z,
      x1: _,
      z0: P.gatesZ - 0.08,
      z1: P.gatesZ + 0.08,
      y0: u0 - 0.5,
      y1: p.y + 1.15,
    });
  }
  for (const [z, _] of [
    [h0 + 0.1, -1.2],
    [h0 + 1.25, 1.2 + Math.PI],
  ])
    o.add(
      T(0, p.y + 0.1, -0.02, 0.5, p.y + 1, 0.02, 0.01).applyMatrix4(
        K0([z, 0, P.gatesZ], [0, _, 0]),
      ),
      s.glass,
      { chunk: "pgm", cast: !1 },
    );
  {
    const D = p.z0 + 2.1,
      B = p.y,
      U = p.y + 2.7;
    (o.add(T(404.6, B, D - 0.12, 414.6, B + 1, D, 0.01), s.panelDark, g),
      o.add(
        T(404.6 - 0.05, B + 1, D - 0.3, 414.6 + 0.05, B + 1.05, D + 0.12, 0.01),
        s.stainless,
        g,
      ),
      o.add(T(404.6, U - 0.45, D - 0.12, 414.6, U, D, 0.01), s.panelDark, g),
      o.add(T(414.6 - 0.12, B, p.z0, 414.6, U, D, 0.01), s.panelDark, g),
      o.add(T(404.6, U, p.z0, 414.6, U + 0.05, D, 0.01), s.panelDark, g),
      o.add(
        k0(
          [404.6, B + 1.05, D - 0.06],
          [414.6 - 0.12, B + 1.05, D - 0.06],
          [414.6 - 0.12, U - 0.45, D - 0.06],
          [404.6, U - 0.45, D - 0.06],
        ),
        s.glass,
        { chunk: "pgm", cast: !1 },
      ));
    for (let t0 = U - 0.5; t0 > B + 1.6; t0 -= 0.05)
      o.add(
        T(404.6 + 0.05, t0 - 0.02, D - 0.2, 414.6 - 0.2, t0, D - 0.18),
        s.plasticW,
        { chunk: "pgm", cast: !1 },
      );
    h.sign("pg_tickets", [(404.6 + 414.6) / 2, U - 0.22, D], 1.6, 0.4, "+z", {
      depth: 0.006,
      plate: !1,
    });
    const n0 = f.fixId();
    (o.add(
      T(404.6 + 2, B + 1.1, D - 0.7, 404.6 + 2.42, B + 1.4, D - 0.66),
      s.black,
      g,
    ),
      c.D.glow(
        "monitor",
        [404.6 + 2.21, B + 1.25, D - 0.655],
        0.38,
        0.25,
        "+z",
        { fx: n0, chunk: "pgm" },
      ),
      f.add({
        a: [404.6 + 2.21, B + 1.25, D - 0.5],
        col: [0.4, 0.55, 1],
        cd: 1.2,
        reach: 3.5,
        zone: "concourse",
        fix: n0,
        state: "flicker",
        box: v,
        spec: 0.5,
      }),
      i.push({
        x0: 404.6,
        x1: 414.6,
        z0: p.z0,
        z1: D + 0.15,
        y0: u0 - 0.5,
        y1: U,
      }));
  }
  ([435, 436.3].forEach((z, _) => {
    if (
      (o.add(
        T(z - 0.6, p.y, p.z0, z + 0.6, p.y + 1.85, p.z0 + 0.5, 0.02),
        s.panelDark,
        g,
      ),
      o.add(
        T(
          z - 0.6,
          p.y + 1.62,
          p.z0 + 0.5,
          z + 0.6,
          p.y + 1.85,
          p.z0 + 0.58,
          0.01,
        ),
        s.nosing,
        g,
      ),
      o.add(
        T(z - 0.5, p.y + 1, p.z0 + 0.5, z + 0.2, p.y + 1.5, p.z0 + 0.53),
        s.black,
        g,
      ),
      o.add(
        T(
          z + 0.28,
          p.y + 1.05,
          p.z0 + 0.5,
          z + 0.5,
          p.y + 1.35,
          p.z0 + 0.56,
          0.01,
        ),
        s.stainless,
        g,
      ),
      o.add(
        T(
          z - 0.4,
          p.y + 0.55,
          p.z0 + 0.5,
          z + 0.4,
          p.y + 0.7,
          p.z0 + 0.6,
          0.01,
        ),
        s.stainless,
        g,
      ),
      _ === 0)
    ) {
      const D = f.fixId();
      (c.D.glow(
        "monitor",
        [z - 0.15, p.y + 1.25, p.z0 + 0.535],
        0.62,
        0.42,
        "+z",
        { fx: D, chunk: "pgm" },
      ),
        f.add({
          a: [z - 0.15, p.y + 1.25, p.z0 + 0.8],
          col: [0.4, 0.55, 1],
          cd: 1,
          reach: 3,
          zone: "concourse",
          fix: D,
          state: "dying",
          dir: [0, 0, 1],
          dirK: 0.9,
          box: v,
          spec: 0.5,
        }));
    }
    i.push({
      x0: z - 0.62,
      x1: z + 0.62,
      z0: p.z0,
      z1: p.z0 + 0.62,
      y0: u0 - 0.5,
      y1: p.y + 1.9,
    });
  }),
    h.sign("route", [418, p.y + 1.7, p.z0], 1.8, 0.45, "+z", { depth: 0.015 }),
    h.sign(
      "pg_wayout",
      [(y.x0 + y.x1) / 2, p.ceil - 0.5, p.z0 + 0.02],
      1.92,
      0.4,
      "+z",
      { depth: 0.02 },
    ),
    h.sign("pg_quarantine", [445, p.y + 1.5, p.z0], 0.7, 0.5, "+z", {
      depth: 0.003,
      plate: !1,
    }),
    h.sign("notice_evac", [410.5, p.y + 1.55, x - 0.06], 0.56, 0.8, "-z", {
      depth: 0.003,
      plate: !1,
    }),
    i.push(
      {
        x0: p.x0,
        x1: y.x0 - 0.25,
        z0: p.z0 - 0.3,
        z1: p.z0,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
      {
        x0: y.x1 + 0.25,
        x1: p.x1,
        z0: p.z0 - 0.3,
        z1: p.z0,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
    ),
    i.push(
      {
        x0: p.x0 - 0.3,
        x1: p.x0,
        z0: p.z0,
        z1: p.z1,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
      {
        x0: p.x1,
        x1: p.x1 + 0.3,
        z0: p.z0,
        z1: p.z1,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
    ));
  const F = { chunk: "pgx" },
    e0 = y.flights,
    g0 = (e0 - 1) * y.tread,
    N0 = p.y + e0 * y.rise,
    F0 = y.zBot - g0,
    $0 = F0 - y.landing,
    G0 = (z, _) => {
      for (let D = 0; D < e0 - 1; D++) {
        const B = z - D * y.tread,
          U = _ + (D + 1) * y.rise;
        (o.add(T(y.x0, p.y - 0.3, B - y.tread - 0.001, y.x1, U, B), s.stone, F),
          o.add(
            T(y.x0, U - 0.02, B - 0.06, y.x1, U + 0.006, B + 0.003, 0.002),
            s.stainless,
            { chunk: "pgx", cast: !1 },
          ),
          o.add(
            T(
              y.x0 + 0.05,
              U + 0.006,
              B - 0.05,
              y.x1 - 0.05,
              U + 0.011,
              B - 0.012,
            ),
            s.nosing,
            { chunk: "pgx", cast: !1 },
          ));
      }
    };
  (G0(y.zBot, p.y),
    o.add(T(y.x0, p.y - 0.3, $0, y.x1, N0, F0 - 0.001), s.stone, F),
    o.add(
      T(y.x0, N0 - 0.02, F0 - 0.06, y.x1, N0 + 0.006, F0 + 0.003),
      s.stainless,
      { chunk: "pgx", cast: !1 },
    ),
    G0($0, N0));
  const L0 = (z) =>
      p.y +
      (y.zBot - z <= 0
        ? 0
        : y.zBot - z < g0
          ? ((y.zBot - z) / g0) * e0 * y.rise
          : y.zBot - z < g0 + y.landing
            ? e0 * y.rise
            : Math.min(
                2 * e0 * y.rise,
                e0 * y.rise +
                  ((y.zBot - z - g0 - y.landing) / g0) * e0 * y.rise,
              )),
    xt = [y.zBot, F0, $0, y.zTop],
    oe = -0.5,
    _o = (z) => (z > y.openZ ? oe : 0);
  for (const [z, _] of [
    [y.x0, "+x"],
    [y.x1, "-x"],
  ]) {
    for (let D = 0; D < 3; D++) {
      const B = xt[D],
        U = xt[D + 1],
        n0 = L0(B + 0.001) - 0.3,
        t0 = L0(U + 0.001) - 0.3,
        i0 = [B, ...(y.openZ < B && y.openZ > U ? [y.openZ] : []), U];
      for (let a0 = 0; a0 < i0.length - 1; a0++) {
        const z0 = i0[a0],
          w0 = i0[a0 + 1],
          I0 = _o(z0 - 0.001),
          E0 = n0 + ((t0 - n0) * (B - z0)) / (B - U),
          x0 = n0 + ((t0 - n0) * (B - w0)) / (B - U),
          Q0 =
            _ === "+x"
              ? k0([z, E0, z0], [z, x0, w0], [z, I0, w0], [z, I0, z0])
              : k0([z, x0, w0], [z, E0, z0], [z, I0, z0], [z, I0, w0]);
        o.add(Q0, s.enamel, F);
      }
    }
    for (let D = 0; D < 3; D++) {
      const B = xt[D],
        U = xt[D + 1],
        n0 = z + (_ === "+x" ? 0.07 : -0.07);
      o.add(
        j(
          [n0, L0(B + 0.001) + 0.9, B],
          [n0, L0(U + 0.001) + 0.9, U],
          0.022,
          10,
        ),
        s.stainless,
        F,
      );
    }
    for (let D = y.zBot - 0.3; D > y.zTop; D -= 1.3) {
      const B = L0(D) + 0.9;
      o.add(
        j([z, B, D], [z + (_ === "+x" ? 0.07 : -0.07), B, D], 0.01, 6),
        s.stainless,
        F,
      );
    }
  }
  {
    const z = (y.x0 + y.x1) / 2;
    for (let _ = 0; _ < 3; _++) {
      const D = xt[_],
        B = xt[_ + 1];
      o.add(
        j(
          [z, L0(D + 0.001) + 0.95, D],
          [z, L0(B + 0.001) + 0.95, B],
          0.024,
          10,
        ),
        s.stainless,
        F,
      );
    }
    for (let _ = y.zBot - 0.4; _ > y.zTop + 0.2; _ -= 1.9) {
      const D = L0(_);
      o.add(j([z, D, _], [z, D + 0.95, _], 0.022, 8), s.stainless, F);
    }
    H(z - 0.04, z + 0.04, y.zTop + 0.6, y.zBot - 0.3, L0, void 0, "rail");
  }
  (o.add(T0(y.x0, y.openZ, y.x1, y.zBot, oe, !1), s.ceilPanel, F),
    o.add(r0("-z", y.openZ, y.x0, y.x1, oe, 0), s.coping, F),
    o.add(r0("+z", y.zBot, y.x0, y.x1, p.ceil, oe), s.enamel, F),
    i.push(
      {
        x0: y.x0 - 0.3,
        x1: y.x0,
        z0: y.zTop,
        z1: y.zBot,
        y0: u0 - 0.5,
        y1: 1.2,
      },
      {
        x0: y.x1,
        x1: y.x1 + 0.3,
        z0: y.zTop,
        z1: y.zBot,
        y0: u0 - 0.5,
        y1: 1.2,
      },
    ));
  const Y0 = { chunk: "pgs" },
    kt = y.x0 - 0.3,
    St = y.x1 + 0.3,
    j0 = y.openZ + 0.3,
    yt = 0.4;
  (o.add(T(kt, -0.3, y.zTop, y.x0 + 0.02, yt, j0, 0.02), s.coping, Y0),
    o.add(T(y.x1 - 0.02, -0.3, y.zTop, St, yt, j0, 0.02), s.coping, Y0),
    o.add(
      T(y.x0 + 0.02, -0.3, y.openZ - 0.02, y.x1 - 0.02, yt, j0, 0.02),
      s.coping,
      Y0,
    ));
  const ze = [],
    ye = (z, _) => {
      const D = Math.hypot(_[0] - z[0], _[2] - z[2]),
        B = Math.max(1, Math.round(D / 0.12));
      ze.push(
        j([z[0], yt + 1, z[2]], [_[0], yt + 1, _[2]], 0.022, 8),
        j([z[0], yt + 0.08, z[2]], [_[0], yt + 0.08, _[2]], 0.014, 6),
      );
      for (let U = 0; U <= B; U++) {
        const n0 = U / B,
          t0 = z[0] + (_[0] - z[0]) * n0,
          i0 = z[2] + (_[2] - z[2]) * n0;
        ze.push(
          j(
            [t0, yt, i0],
            [t0, yt + 1, i0],
            U % 8 === 0 ? 0.02 : 0.008,
            U % 8 === 0 ? 8 : 5,
          ),
        );
      }
    };
  (ye([kt + 0.15, 0, y.zTop + 0.05], [kt + 0.15, 0, j0 - 0.15]),
    ye([St - 0.15, 0, y.zTop + 0.05], [St - 0.15, 0, j0 - 0.15]),
    ye([kt + 0.15, 0, j0 - 0.15], [St - 0.15, 0, j0 - 0.15]),
    o.add(q0(ze), s.iron, Y0),
    i.push(
      { x0: kt, x1: y.x0, z0: y.zTop, z1: j0, y0: u0, y1: 1.6 },
      { x0: y.x1, x1: St, z0: y.zTop, z1: j0, y0: u0, y1: 1.6 },
      { x0: kt, x1: St, z0: y.openZ, z1: j0, y0: -0.35, y1: 1.6 },
    ));
  const X0 = kt - 0.25,
    B0 = St + 0.25,
    A0 = y.zTop - 0.6,
    C0 = j0 + 0.3,
    at = 3.05,
    Z0 = 3.3;
  for (const [z, _] of [
    [X0 + 0.08, A0 + 0.08],
    [B0 - 0.08, A0 + 0.08],
    [X0 + 0.08, C0 - 0.08],
    [B0 - 0.08, C0 - 0.08],
  ])
    (o.add(j([z, 0, _], [z, at, _], 0.065, 14), s.panelDark, Y0),
      i.push({
        x0: z - 0.08,
        x1: z + 0.08,
        z0: _ - 0.08,
        z1: _ + 0.08,
        y0: u0,
        y1: at,
      }));
  (o.add(T(X0, at, A0, B0, Z0, A0 + 0.16), s.panelDark, Y0),
    o.add(T(X0, at, C0 - 0.16, B0, Z0, C0), s.panelDark, Y0),
    o.add(T(X0, at, A0, X0 + 0.16, Z0, C0), s.panelDark, Y0),
    o.add(T(B0 - 0.16, at, A0, B0, Z0, C0), s.panelDark, Y0));
  for (let z = A0 + 1.2; z < C0 - 0.5; z += 1.2)
    o.add(T(X0, Z0 - 0.12, z - 0.04, B0, Z0 - 0.02, z + 0.04), s.panelDark, Y0);
  (o.add(
    k0(
      [X0, Z0 - 0.02, C0],
      [B0, Z0 - 0.02, C0],
      [B0, Z0 - 0.02, A0],
      [X0, Z0 - 0.02, A0],
    ),
    s.glass,
    { chunk: "pgs", cast: !1 },
  ),
    o.add(
      T(X0, Z0, A0 - 0.02, B0, Z0 + 0.62, A0 + 0.14, 0.01),
      s.panelDark,
      Y0,
    ));
  const Re = f.fixId();
  o.add(
    O0(
      Rt(
        c.A.signs.rect("pg_name"),
        [(X0 + B0) / 2, Z0 + 0.31, A0 - 0.025],
        3.6,
        0.54,
        "-z",
        0,
        0,
      ),
      Re,
    ),
    s.glowSigns,
    { chunk: "pgs", cast: !1 },
  );
  for (const [z, _] of [
    [
      [X0 + 0.08, A0 + 0.1],
      [X0 + 0.08, C0 - 0.1],
    ],
    [
      [B0 - 0.08, A0 + 0.1],
      [B0 - 0.08, C0 - 0.1],
    ],
    [
      [X0 + 0.1, C0 - 0.08],
      [B0 - 0.1, C0 - 0.08],
    ],
  ]) {
    const D = k0(
      [z[0], 1.55, z[1]],
      [_[0], 1.55, _[1]],
      [_[0], at - 0.05, _[1]],
      [z[0], at - 0.05, z[1]],
    );
    (o.add(D, s.glass, { chunk: "pgs", cast: !1 }),
      o.add(
        j([z[0], 1.55, z[1]], [_[0], 1.55, _[1]], 0.03, 8),
        s.panelDark,
        Y0,
      ));
  }
  {
    const z = B0 + 1.6,
      _ = A0 + 0.9;
    o.add(T(z - 0.2, 0, _ - 0.13, z + 0.2, 3, _ + 0.13, 0.02), s.panelDark, Y0);
    const D = f.fixId();
    for (const [B, U] of [
      ["-z", -0.131],
      ["+z", 0.131],
    ])
      o.add(
        O0(
          Rt(c.A.signs.rect("badge"), [z, 2.65, _ + U], 0.36, 0.36, B, 0, 0),
          D,
        ),
        s.glowSigns,
        { chunk: "pgs", cast: !1 },
      );
    (f.add({
      a: [z, 2.65, _ - 0.3],
      col: [1, 0.8, 0.7],
      cd: 1.5,
      reach: 4,
      zone: "stairs",
      fix: D,
      state: "on",
      box: [z - 4, -0.2, _ - 5, z + 4, 4, _ + 5],
    }),
      i.push({
        x0: z - 0.22,
        x1: z + 0.22,
        z0: _ - 0.15,
        z1: _ + 0.15,
        y0: u0,
        y1: 3,
      }));
  }
  const De = f.fixId();
  (o.add(
    O0(
      j(
        [X0 + 1, at - 0.06, (A0 + C0) / 2 - 2],
        [B0 - 1, at - 0.06, (A0 + C0) / 2 - 2],
        0.02,
        8,
      ),
      De,
    ),
    s.tube,
    { chunk: "pgs", cast: !1 },
  ),
    f.add({
      a: [X0 + 1.1, at - 0.1, (A0 + C0) / 2 - 2],
      b: [B0 - 1.1, at - 0.1, (A0 + C0) / 2 - 2],
      col: [0.85, 0.93, 1],
      cd: 12,
      reach: 9,
      zone: "stairs",
      fix: De,
      state: "dying",
      down: !0,
      box: [X0 - 6, -6, A0 - 8, B0 + 6, Z0, C0 + 2],
      point: { cd: 16, dist: 10, below: 0.3 },
    }),
    f.add({
      a: [X0 + 0.5, Z0 + 0.31, A0 - 0.3],
      b: [B0 - 0.5, Z0 + 0.31, A0 - 0.3],
      col: [1, 0.95, 0.88],
      cd: 3,
      reach: 6,
      zone: "stairs",
      fix: Re,
      state: "on",
      box: [X0 - 6, -0.2, A0 - 8, B0 + 6, Z0 + 1, A0 + 0.1],
    }));
  const Ee = 0.02,
    wt = 424,
    Pt = 436,
    Xt = 196,
    Ct = 212;
  for (const [z, _, D, B] of [
    [wt, Xt, Pt, y.zTop],
    [wt, y.zTop, kt, j0],
    [St, y.zTop, Pt, j0],
    [wt, j0, Pt, Ct],
  ])
    o.add(T0(z, _, D, B, Ee, !0), s.pavers, Y0);
  for (const [z, _, D, B] of [
    [wt, Xt, Pt, Xt + 0.1],
    [wt, Ct - 0.1, Pt, Ct],
    [wt, Xt, wt + 0.1, Ct],
    [Pt - 0.1, Xt, Pt, Ct],
  ])
    o.add(T(z, -0.1, _, D, Ee + 0.03, B), s.coping, Y0);
  const Ne = [
      [230.8, [3, 6, 9, 10, 15, 19]],
      [224.6, [2, 12, 17]],
    ],
    wo = (z, _) =>
      Ne[z][1].includes(_)
        ? (z === 0 && _ === 10) || (z === 1 && _ === 12)
          ? "flicker"
          : z === 0 && _ === 6
            ? "dying"
            : "on"
        : "off",
    At = e + 3.9;
  Ne.forEach(([z, _], D) => {
    for (let B = 0; B < 21; B++) {
      const U = 389.6 + B * 3.1;
      if (D === 1 && U > C.x0 - 1.4 && U < C.x1 + 1.4) continue;
      const n0 = U - 1.2,
        t0 = U + 1.2,
        i0 = f.fixId(),
        a0 = wo(D, B);
      (o.add(T(n0, At, z - 0.05, t0, At + 0.07, z + 0.05, 0.01), s.housing, u),
        o.add(
          O0(T(n0 + 0.02, At - 0.012, z - 0.04, t0 - 0.02, At, z + 0.04), i0),
          s.led,
          { chunk: r, cast: !1 },
        ));
      for (const z0 of [-0.9, 0.9])
        o.add(j([U + z0, n, z], [U + z0, At + 0.07, z], 0.003, 3), s.galvDark, {
          chunk: r,
          cast: !1,
        });
      a0 !== "off" &&
        f.add({
          a: [n0 + 0.05, At - 0.03, z],
          b: [t0 - 0.05, At - 0.03, z],
          col: [0.92, 0.96, 1],
          cd: 34,
          reach: 11,
          zone: "parkgate",
          fix: i0,
          state: a0,
          down: !0,
          box: L,
          point: { cd: 24, dist: 10, below: 0.5 },
          buzz: a0 !== "on",
        });
    }
  });
  const Po = new Set([1, 6, 9, 14, 19]);
  for (let z = 0, _ = 0; z < 12; z++)
    for (const D of [p.z0 + 1.6, p.z1 - 1.4]) {
      const B = 404 + z * 4,
        U = f.fixId();
      (o.add(
        O0(T(B - 0.3, p.ceil - 0.012, D - 0.3, B + 0.3, p.ceil, D + 0.3), U),
        s.diffuser,
        { chunk: "pgm", cast: !1 },
      ),
        Po.has(_) &&
          f.add({
            a: [B, p.ceil - 0.05, D],
            col: [0.93, 0.96, 1],
            cd: 14,
            reach: 7,
            zone: "concourse",
            fix: U,
            state: _ === 9 ? "flicker" : "on",
            down: !0,
            box: v,
            point: { cd: 14, dist: 7, below: 0.4 },
          }),
        _++);
    }
  const Zt = (z, _, D, B, U, n0, t0) => {
    const i0 = f.fixId(),
      a0 =
        B === "+x"
          ? [1, 0, 0]
          : B === "-x"
            ? [-1, 0, 0]
            : B === "+z"
              ? [0, 0, 1]
              : [0, 0, -1],
      z0 = K0([z, _, D], [0, Math.atan2(a0[0], a0[2]), 0]);
    (o.add(
      T(-0.18, -0.07, 0, 0.18, 0.07, 0.06, 0.02).applyMatrix4(z0),
      s.plasticW,
      u,
    ),
      o.add(
        O0(
          T(-0.15, -0.045, 0.06, 0.15, 0.045, 0.07, 0.01).applyMatrix4(z0),
          i0,
        ),
        s.diffuser,
        { chunk: r, cast: !1 },
      ),
      f.add({
        a: [z + a0[0] * 0.25, _ - 0.05, D + a0[2] * 0.25],
        col: [1, 0.86, 0.66],
        cd: 5,
        reach: 6,
        zone: n0,
        fix: i0,
        state: U,
        box: t0,
        point: { cd: 6, dist: 6, below: 0.1 },
      }));
  };
  (Zt(b + 0.01, e + 2.6, 221.5, "+x", "on", "parkgate", L),
    Zt(M - 0.01, e + 2.6, 224, "-x", "dying", "parkgate", L),
    Zt(S.x1 + 1.6, e + 2.6, x + 0.01, "+z", "flicker", "parkgate", L),
    Zt(p.x1 - 0.01, p.y + 2.4, 215.5, "-x", "on", "concourse", v),
    Zt(y.x0 + 0.01, N0 + 2.2, (F0 + $0) / 2, "+x", "flicker", "stairs", [
      y.x0 - 0.1,
      p.y - 0.5,
      y.zTop - 1,
      y.x1 + 0.1,
      1.5,
      y.zBot + 1.5,
    ]));
  {
    const z = f.fixId(),
      _ = (y.x0 + y.x1) / 2;
    (o.add(
      T(_ - 0.2, p.ceil - 0.9, p.z0, _ + 0.2, p.ceil - 0.7, p.z0 + 0.07, 0.006),
      s.housing,
      g,
    ),
      c.D.glow("exit", [_, p.ceil - 0.8, p.z0 + 0.07], 0.36, 0.18, "+z", {
        fx: z,
        chunk: "pgm",
      }),
      f.add({
        a: [_ - 0.15, p.ceil - 0.8, p.z0 + 0.15],
        b: [_ + 0.15, p.ceil - 0.8, p.z0 + 0.15],
        col: [0.22, 1, 0.45],
        cd: 1.2,
        reach: 4.5,
        zone: "concourse",
        fix: z,
        state: "on",
        box: v,
        spec: 0.5,
      }));
  }
  for (const [z, _, D] of [
    [397.5, "lit", "on"],
    [409.5, "print", ""],
    [436.5, "lit", "flicker"],
    [446.5, "print2", ""],
  ]) {
    const B = e + 2.2,
      U = 2.4,
      n0 = 1.6,
      t0 = w;
    if (
      (o.add(
        T(
          z - U / 2 - 0.08,
          B - n0 / 2 - 0.08,
          t0 - 0.14,
          z + U / 2 + 0.08,
          B + n0 / 2 + 0.08,
          t0,
          0.02,
        ),
        s.stainless,
        u,
      ),
      _ === "lit")
    ) {
      const i0 = f.fixId();
      (c.D.glow("adlit", [z, B, t0 - 0.14], U, n0, "-z", { fx: i0, chunk: r }),
        f.add({
          a: [z - 0.9, B, t0 - 0.4],
          b: [z + 0.9, B, t0 - 0.4],
          col: [0.95, 0.95, 0.92],
          cd: 6,
          reach: 6,
          zone: "parkgate",
          fix: i0,
          state: D,
          box: L,
          spec: 0.6,
        }));
    } else
      h.sign(
        _ === "print" ? "pg_ad1" : "pg_ad2",
        [z, B, t0 - 0.14],
        U,
        n0,
        "-z",
        { depth: 0.003, plate: !1 },
      );
  }
  for (const z of [403.5, 422, 441])
    h.sign("pg_name", [z, e + 2.45, w], 3.6, 0.54, "-z", { depth: 0.02 });
  for (const z of [391.5, 429, 450.5])
    h.sign("pg_name", [z, e + 4.9, w], 4.4, 0.66, "-z", { depth: 0.02 });
  (h.sign("pg_terminate", [M, e + 4.2, 228], 3, 0.5, "-x", { depth: 0.02 }),
    h.sign("pg_platform", [416, e + 3.2, 225], 1.6, 0.5, "-z", {
      depth: 0.04,
    }));
  for (const z of [-0.6, 0.6])
    o.add(
      j([416 + z, n, 225], [416 + z, e + 3.45, 225], 0.006, 4),
      s.galvDark,
      { chunk: r, cast: !1 },
    );
  h.sign("pg_wayout", [S.x1 + 0.6, e + 3.6, S.zBot + 0.1], 1.92, 0.4, "-z", {
    depth: 0.04,
  });
  for (const z of [-0.85, 0.85])
    o.add(
      j(
        [S.x1 + 0.6 + z, n, S.zBot + 0.1],
        [S.x1 + 0.6 + z, e + 3.8, S.zBot + 0.1],
        0.006,
        4,
      ),
      s.galvDark,
      { chunk: r, cast: !1 },
    );
  (f.add({
    a: [y.x0 + 0.6, 2.6, y.zTop + 1.5],
    b: [y.x1 - 0.6, 2.6, y.zTop + 1.5],
    col: [0.58, 0.7, 0.95],
    cd: 26,
    reach: 14,
    zone: "stairs",
    state: "on",
    r: 1.2,
    box: [y.x0 - 0.3, p.y - 0.6, y.zTop - 3, y.x1 + 0.3, 5, y.zBot + 3.5],
    weight: 1.5,
    spec: 0.6,
    spot: {
      cd: 55,
      dist: 19,
      angle: 0.62,
      pen: 0.95,
      dir: [0, -0.48, 1],
      at: [(y.x0 + y.x1) / 2, 3.6, y.zTop - 0.6],
    },
  }),
    f.add({
      a: [y.x0 + 1, p.y + 2.4, y.zBot - 0.5],
      b: [y.x1 - 1, p.y + 2.4, y.zBot - 0.5],
      col: [0.5, 0.62, 0.88],
      cd: 6,
      reach: 9,
      zone: "concourse",
      state: "on",
      r: 0.8,
      box: v,
      spec: 0.3,
    }),
    i.push(...Ft(c, 419.4, e, 229.9, 0.06, { chunk: r })),
    i.push(...Ft(c, 436.8, e, 229.3, -0.18, { chunk: r })),
    i.push(...Ft(c, 440.4, e, 227.6, 1.2, { chunk: r })),
    Ft(c, 425.2, e, 230.6, 0.3, { chunk: r, down: 1 }),
    Ft(c, 431.6, e, 230.2, -0.5, { chunk: r, down: 1 }),
    Je(c, 427, e, 231.4, 0.7, { chunk: r }),
    Je(c, 433.6, e, 227.9, -1.9, { chunk: r }));
  const ge = (z, _, D = 0.12, B = 0.06) => {
    const n0 = [],
      t0 = [];
    for (let x0 = 0; x0 <= 12; x0++) {
      const Q0 = x0 / 12;
      n0.push([
        z[0] + (_[0] - z[0]) * Q0,
        z[1] + (_[1] - z[1]) * Q0 - D * 4 * Q0 * (1 - Q0),
        z[2] + (_[2] - z[2]) * Q0,
      ]);
    }
    const i0 = Math.hypot(_[0] - z[0], _[2] - z[2]),
      a0 = c.A.signs.rect("police_tape");
    for (let x0 = 0; x0 < 12; x0++) {
      const [Q0, ae, Be] = n0[x0],
        [Oe, Xe, Ce] = n0[x0 + 1],
        be = a0[0] + (a0[2] - a0[0]) * ((((x0 / 12) * i0) / 1.6) % 1),
        Ze = be + (a0[2] - a0[0]) * (i0 / 12 / 1.6);
      t0.push(
        k0(
          [Q0, ae - B / 2, Be],
          [Oe, Xe - B / 2, Ce],
          [Oe, Xe + B / 2, Ce],
          [Q0, ae + B / 2, Be],
          [
            [be, a0[1]],
            [Ze, a0[1]],
            [Ze, a0[3]],
            [be, a0[3]],
          ],
        ),
      );
    }
    const z0 = q0(t0);
    o.add(z0, s.signs, { chunk: r, cast: !1 });
    const w0 = z0.clone(),
      I0 = w0.attributes.normal;
    for (let x0 = 0; x0 < I0.count; x0++)
      I0.setXYZ(x0, -I0.getX(x0), -I0.getY(x0), -I0.getZ(x0));
    const E0 = w0.index.array;
    for (let x0 = 0; x0 < E0.length; x0 += 3) {
      const Q0 = E0[x0 + 1];
      ((E0[x0 + 1] = E0[x0 + 2]), (E0[x0 + 2] = Q0));
    }
    o.add(w0, s.signs, { chunk: r, cast: !1 });
  };
  (ge([413.27, e + 1.05, 229.6], [418.3, e + 1, 229.9], 0.18),
    ge([440, e + 1, 229.45], [444, e + 0.85, 228.2], 0.22),
    ge(
      [S.x1 + 0.02, e + 1, S.zBot - 0.2],
      [S.x1 + 0.9, e + 0.2, S.zBot + 0.5],
      0.1,
    ),
    Gt(c, 418.4, e, 226.8, 1.35, { chunk: r, rng: l }),
    Gt(c, 433.6, e, 231.4, -2.05, { chunk: r, rng: l, foil: !0 }),
    Gt(c, 444.4, e, 227, 0.45, { chunk: r, rng: l }),
    Gt(c, 407.9, e, 230, 1.57, { chunk: r, bag: !0, rng: l }),
    Gt(c, 441.6, p.y, 217, -0.9, { chunk: "pgm", rng: l, foil: !0 }),
    h.decal("b_pool", [418.9, e, 227.2], 1.6, 1.4, "+y", {
      rot: 0.3,
      chunk: r,
    }),
    h.decal("b_pool", [433.2, e, 231], 1.5, 1.3, "+y", { rot: 1.9, chunk: r }),
    h.decal("b_pool", [444, e, 227.5], 1.2, 1.1, "+y", { rot: 0.8, chunk: r }),
    h.decal("b_drag", [428.4, e, 229.4], 2.6, 0.7, "+y", {
      rot: 1.4,
      chunk: r,
    }),
    h.decal("steps", [429, e, 231.5], 1, 1, "+y", { rot: 2.6, chunk: r }),
    h.decal("b_spatter", [S.x1 + 0.02, e + 0.6, 226], 0.9, 0.9, "+x", {
      chunk: r,
      off: 0.01,
    }),
    h.decal("b_hand", [p.x0 + 9, p.y + 1.3, x - 0.045], 0.18, 0.22, "-z", {
      chunk: "pgm",
      rot: 0.2,
    }),
    h.decal("b_smear", [p.x0 + 9.6, p.y + 1.05, x - 0.045], 1.1, 0.55, "-z", {
      chunk: "pgm",
    }),
    h.decal("b_pool", [441.3, p.y, 217.4], 1.2, 1, "+y", {
      rot: 0.6,
      chunk: "pgm",
    }),
    h.decal("graf2", [M - 0.02, e + 2.6, 233], 1.8, 0.6, "-x", {
      chunk: r,
      matt: !0,
    }),
    h.decal("b_spatter", [$[3], e + 1.4, Z - 0.27], 0.6, 0.6, "-z", {
      chunk: r,
      off: 0.02,
    }));
  const Le = [];
  for (let z = 0; z < 40; z++)
    Le.push(
      K0(
        [424 + l() * 9, e + 0.006, 228.8 + l() * 3],
        [Math.PI / 2, l() * 6.28, 0],
      ),
    );
  d.add(
    Bt(new D0(0.0045, 0.0045, 0.019, 6), s.yellow, Le, { name: "pg:shells" }),
  );
  for (let z = 0; z < 18; z++)
    $t(c, 390 + l() * 62, e, x + 0.6 + l() * 13, l() * 6.28, {
      chunk: r,
      w: 0.21,
      l: 0.3,
    });
  for (let z = 0; z < 9; z++)
    $t(c, p.x0 + 1 + l() * 48, p.y, p.z0 + 0.5 + l() * 5, l() * 6.28, {
      chunk: "pgm",
      w: 0.21,
      l: 0.3,
    });
  for (let z = 0; z < 8; z++)
    xe(c, 390 + l() * 60, e, x + 0.8 + l() * 13, l, r);
  for (const z of [393, 409.6, 444.6]) i.push(..._a(c, z, x + 0.4, r));
  for (const [z, _] of [
    [400, x + 0.35],
    [434.4, x + 0.35],
  ])
    i.push(...To(c, z, e, _, { chunk: r, rng: l, spill: 0.6 }));
  (i.push(
    { x0: b - 0.3, x1: b, z0: x, z1: w, y0: q, y1: n },
    { x0: M, x1: M + 0.3, z0: x, z1: w, y0: q, y1: n },
    { x0: b, x1: M, z0: w, z1: w + 0.3, y0: q, y1: n },
  ),
    i.push({
      x0: P.platX0 - 0.1,
      x1: P.platX0,
      z0: x,
      z1: P.edge,
      y0: q,
      y1: e + 1.1,
    }));
  for (const z of [P.platX0 + 0.4]) {
    for (const _ of [e + 0.15, e + 1])
      o.add(j([z, _, x + 0.2], [z, _, P.edge - 0.05], 0.02, 8), s.stainless, u);
    h.sign(
      "no_entry",
      [z - 0.03, e + 0.62, (x + P.edge) / 2],
      0.36,
      0.18,
      "-x",
      { depth: 0.006, plate: !1 },
    );
  }
  for (let z = P.platX0; z < P.platX1 - 1e-6; z += 2)
    t.push({
      x0: z,
      x1: Math.min(P.platX1, z + 2),
      z0: P.edge - 0.05,
      z1: P.edge + 0.15,
      y0: e - 1.5,
      y1: e + 2.2,
      on: !0,
      edge: "parkgate",
      shot: !1,
    });
  (i.push(...t),
    c.sounds.hums.push(
      { id: "metro_hum_parkgate", pos: [425, e + 3, 226], zone: "parkgate" },
      {
        id: "metro_gate_alarm",
        pos: [426.4, p.y + 1, P.gatesZ],
        zone: "concourse",
      },
      { id: "metro_exit_wind", pos: [430, -1.5, 206], zone: "stairs" },
    ),
    c.sounds.drips.push(
      [396, e + 0.02, 222],
      [450, q + 0.02, 236],
      [430, p.y + 0.02, 213],
    ));
  const Ao = [
      [422.5, 232.4],
      [423.9, 230.1],
      [425.8, 229],
      [427.2, 228.4],
      [427.2, 225.5],
      [427.2, 222.6],
      [427.2, 219.7],
      [427.9, 217.4],
      [428.9, P.gatesZ],
      [429, 213.6],
      [429, 210.6],
      [429, 207.7],
      [429, 204.8],
      [lt[0], lt[2]],
    ],
    Io = {
      dead: [
        [395.5, 225.8, 1.4],
        [403.8, 231.2, -0.6],
        [411.2, 222.4, 2.6],
        [437.4, 225.5, -1.9],
        [443.6, 230.9, 0.5],
        [449.8, 223.6, -2.3],
        [433.8, 220.6, 3],
      ],
      route: Ao,
      stairsDead: [
        [446.5, 214.2],
        [449.2, 217.1],
        [406, 217],
        [418.6, 213.6],
        [431, 205.6],
        [429.3, 223.5],
      ],
      mezzanine: [430, p.y, 216.8],
    };
  return { colliders: i, edges: t, points: Io };
}
