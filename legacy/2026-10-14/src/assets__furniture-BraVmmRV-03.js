// assets__furniture-BraVmmRV 03 — add
// Lines 557-1497 of readable/assets__furniture-BraVmmRV.pretty.js (statement-aligned).
function wo(z, t, k, o) {
  const d = new R0();
  d.name = "house_shell";
  const i = o,
    f = [];
  let Y = 1;
  const n = [
    { id: "N", axis: "x", c: q.N, s0: q.W - v0, s1: q.E + v0, n: nt, y: ht },
    { id: "S", axis: "x", c: q.S, s0: q.W - v0, s1: q.E + v0, n: nt, y: ht },
    { id: "W", axis: "z", c: q.W, s0: q.N - v0, s1: q.S + v0, n: et, y: gt },
    { id: "E", axis: "z", c: q.E, s0: q.N - v0, s1: q.S + v0, n: et, y: gt },
  ];
  for (const a of n) {
    const e = Yt(a.id);
    for (let h = a.n[0]; h <= a.n[1]; h++) {
      const g = a.y(h),
        M = a.s0;
      for (const [u, p] of ao(M, a.s1, g, e)) {
        const x = Math.abs(u - M) < 1e-6,
          S = Math.abs(p - a.s1) < 1e-6,
          m = S0 * (0.96 + k() * 0.08);
        i.add(
          j0({
            axis: a.axis,
            a: u,
            b: p,
            c: a.c,
            y: g,
            r: m,
            seed: Y++,
            flip: (h & 1) === 1,
            caps: [x, S],
            tint: z0,
          }),
          t.log,
        );
      }
    }
  }
  for (const a of n) {
    const e = Yt(a.id).map((u) => ({
        a: u.a,
        b: u.b,
        y0: Math.max(0, u.y0 - 0.05),
        y1: u.y1 + 0.03,
      })),
      h = a.y(a.n[1]),
      g = a.axis === "x" ? q.W : q.N,
      M = a.axis === "x" ? q.E : q.S;
    for (const [u, p, x, S] of co(g, M, 0, h, e))
      for (const m of [-1, 1]) {
        const I = a.c + m * x0;
        let V;
        (a.axis === "x"
          ? (V =
              m > 0
                ? s0([u, x, I], [p, x, I], [p, S, I], [u, S, I])
                : s0([p, x, I], [u, x, I], [u, S, I], [p, S, I]))
          : (V =
              m > 0
                ? s0([I, x, p], [I, x, u], [I, S, u], [I, S, p])
                : s0([I, x, u], [I, x, p], [I, S, p], [I, S, u])),
          A0(V),
          T(V, no),
          i.add(V, t.chink, { cast: !0, receive: !0 }));
      }
  }
  const s = (a, e, h, g) =>
    f.push({ x0: a, x1: e, z0: h, z1: g, y0: 0, y1: 2.6 });
  for (const [a, e] of [
    ["N", [$.z0, K.z0]],
    ["S", [K.z1, $.z1]],
  ]) {
    const h = Object.values(bt).find((g) => g.wall === a && !g.win);
    (s($.x0 - 0.15, h.a, e[0], e[1]), s(h.b, $.x1 + 0.15, e[0], e[1]));
  }
  (s($.x0, K.x0, $.z0 - 0.15, $.z1 + 0.15),
    s(K.x1, $.x1, $.z0 - 0.15, $.z1 + 0.15));
  {
    const a = s0(
      [K.x0 - 0.12, ot, K.z1 + 0.12],
      [K.x1 + 0.12, ot, K.z1 + 0.12],
      [K.x1 + 0.12, ot, K.z0 - 0.12],
      [K.x0 - 0.12, ot, K.z0 - 0.12],
    );
    A0(a);
    const e = new J0(a, t.floor);
    ((e.name = "house:floor"), (e.receiveShadow = !0), d.add(e));
  }
  const c = Math.cos(q0),
    r = t0.T / c,
    y = (a, e, h, g) => {
      const M = [0, 0.8, 1.6, 2.4, 3, 3.25, 3.35, 3.5, g].filter(
          (C) => C <= g + 1e-6,
        ),
        u = [e];
      for (let C = Math.ceil(e * 4) / 4; C < h; C += 0.25)
        C > e + 0.01 && u.push(C);
      u.push(h);
      const p = [],
        x = [],
        S = [];
      for (let C = 0; C < u.length; C++)
        for (let D = 0; D < M.length; D++) {
          const F = U + a * M[D],
            o0 = e0(F);
          (p.push(F, o0, u[C]), x.push(u[C], M[D] / c));
        }
      const m = M.length;
      for (let C = 0; C < u.length - 1; C++)
        for (let D = 0; D < m - 1; D++) {
          const F = C * m + D,
            o0 = F + 1,
            f0 = F + m,
            D0 = f0 + 1;
          S.push(F, o0, f0, o0, D0, f0);
        }
      const I = new E0();
      (I.setAttribute("position", new u0(p, 3)),
        I.setAttribute("uv", new u0(x, 2)),
        I.setIndex(S),
        I.computeVertexNormals());
      {
        const C = I.attributes.normal;
        let D = 0;
        for (let F = 0; F < C.count; F++) D += C.getY(F);
        if (D > 0) {
          const F = I.index.array;
          for (let o0 = 0; o0 < F.length; o0 += 3) {
            const f0 = F[o0 + 1];
            ((F[o0 + 1] = F[o0 + 2]), (F[o0 + 2] = f0));
          }
          I.computeVertexNormals();
        }
      }
      (T(I, _0), i.add(I, t.plank, { cast: !1, receive: !0 }));
      const V = U + a * g,
        G = e0(U) + r,
        _ = e0(V) + r,
        j = -g / c,
        L =
          a < 0
            ? s0(
                [U, G, e],
                [V, _, e],
                [V, _, h],
                [U, G, h],
                [
                  [e, 0],
                  [e, j],
                  [h, j],
                  [h, 0],
                ],
              )
            : s0(
                [U, G, h],
                [V, _, h],
                [V, _, e],
                [U, G, e],
                [
                  [-h, 0],
                  [-h, j],
                  [-e, j],
                  [-e, 0],
                ],
              );
      i.add(L, t.shingle, { cast: !0, receive: !0 });
      const J = e0(V),
        n0 =
          a < 0
            ? s0([V, J, h], [V, J, e], [V, _, e], [V, _, h])
            : s0([V, J, e], [V, J, h], [V, _, h], [V, _, e]);
      return (
        A0(n0),
        Q(n0, [0.66, 0.64, 0.6]),
        i.add(n0, t.plank, { cast: !1 }),
        { xE: V }
      );
    },
    l = O.stack.z0 - 0.08,
    N = O.stack.z1 + 0.08,
    b = U - t0.x0,
    A = U - $.x0 - 0.02;
  (y(-1, t0.z0, l, b),
    y(-1, l, N, A),
    y(-1, N, t0.z1, b),
    y(1, t0.z0, t0.z1, t0.x1 - U));
  const P = (a, e, h, g) => {
    const M = U + e * h,
      u = [U, e0(U), a],
      p = [M, e0(M), a],
      x = [M, e0(M) + r, a],
      S = [U, e0(U) + r, a],
      m = g < 0 == e < 0 ? s0(u, p, x, S) : s0(p, u, S, x);
    (A0(m), Q(m, [0.66, 0.64, 0.6]), i.add(m, t.plank, { cast: !1 }));
  };
  (P(t0.z0, -1, b, -1),
    P(t0.z0, 1, t0.x1 - U, -1),
    P(t0.z1, -1, b, 1),
    P(t0.z1, 1, t0.x1 - U, 1));
  for (const a of [t0.z0 + 0.02, t0.z1 - 0.02])
    for (const e of [-1, 1]) {
      const h = e < 0 ? b : t0.x1 - U,
        g = U + e * h,
        M = new m0(U, e0(U) + r * 0.55, a),
        u = new m0(g, e0(g) + r * 0.55, a),
        p = M.distanceTo(u),
        x = Z(-p / 2, -0.11, -0.02, p / 2, 0.11, 0.02, 0.006, "x"),
        S = new F0().makeRotationZ(e < 0 ? q0 : -q0);
      (S.setPosition((M.x + u.x) / 2, (M.y + u.y) / 2, a),
        x.applyMatrix4(S),
        Q(x, [0.62, 0.6, 0.56]),
        i.add(x, t.plank));
    }
  for (const a of [-1, 1]) {
    const e = Z(
        -0.13,
        -0.012,
        t0.z0 - 0.02,
        0.13,
        0.012,
        t0.z1 + 0.02,
        0.005,
        "z",
      ),
      h = new F0().makeRotationZ(a < 0 ? q0 : -q0);
    (h.setPosition(U + a * 0.095 * c, e0(U) + r + 0.03 + 0.012, 0),
      e.applyMatrix4(h),
      Q(e, [0.55, 0.53, 0.5]),
      i.add(e, t.plank));
  }
  const w = (a, e, h) => z0(a, e, h);
  for (const a of to)
    for (const e of [-1, 1]) {
      const h =
          e < 0 && a > l && a < N ? A - 0.03 : (e < 0 ? b : t0.x1 - U) - 0.04,
        g = U + e * h,
        M = U + e * 0.1;
      i.add(
        U0([g, e0(g) - ft / c, a], [M, e0(M) - ft / c, a], ft, {
          seed: Y++,
          tint: w,
        }),
        t.log,
      );
    }
  i.add(
    j0({
      axis: "z",
      a: t0.z0 - 0.12,
      b: t0.z1 + 0.12,
      c: U,
      y: Pt - 0.14,
      r: 0.13,
      seed: Y++,
      tint: z0,
    }),
    t.log,
  );
  for (const a of Et)
    i.add(
      j0({
        axis: "x",
        a: $.x0 + 0.02,
        b: $.x1 - 0.02,
        c: a,
        y: Xt,
        r: jt,
        seed: Y++,
        taper: 0.04,
        tint: z0,
      }),
      t.log,
    );
  for (const a of [-1, 1]) {
    const e = a < 0 ? K.x0 + 0.01 : K.x1 - 0.01,
      h = 2.56,
      g = e0(e) + 0.01,
      M =
        a < 0
          ? s0([e, h, q.S], [e, h, q.N], [e, g, q.N], [e, g, q.S])
          : s0([e, h, q.N], [e, h, q.S], [e, g, q.S], [e, g, q.N]),
      u = M.attributes.uv;
    for (let p = 0; p < 4; p++)
      u.setXY(p, M.attributes.position.getZ(p), M.attributes.position.getY(p));
    (T(M, _0), i.add(M, t.plank, { cast: !1 }));
  }
  const E = [],
    X = (a, e, h, g, M, u, p, x = null) => {
      const S = new kt(),
        m = e0(g),
        I = e0(M);
      if (
        (S.moveTo(g, u),
        S.lineTo(M, u),
        S.lineTo(M, I + 0.02),
        S.lineTo(U, Pt + 0.02),
        S.lineTo(g, m + 0.02),
        S.lineTo(g, u),
        x)
      ) {
        const j = new Qt();
        (j.moveTo(x.x0, x.y0),
          j.lineTo(x.x0, x.y1),
          j.lineTo(x.x1, x.y1),
          j.lineTo(x.x1, x.y0),
          j.lineTo(x.x0, x.y0),
          S.holes.push(j));
      }
      const V = new It(S, { depth: Math.abs(e - h), bevelEnabled: !1 });
      V.translate(0, 0, Math.min(e, h));
      const G = V.attributes.position,
        _ = V.attributes.uv;
      for (let j = 0; j < G.count; j++) _.setXY(j, G.getY(j), G.getX(j));
      (T(V, _0), i.add(V, t.plank));
      {
        const j = h + (h < e ? -0.012 : 0.012);
        for (let L = g + 0.2; L < M - 0.05; L += 0.2) {
          const J = e0(L) - 0.02;
          if (J - u < 0.12) continue;
          const n0 =
            x && L > x.x0 - 0.1 && L < x.x1 + 0.1
              ? [
                  [u + 0.03, x.y0 - 0.09],
                  [x.y1 + 0.09, J],
                ]
              : [[u + 0.03, J]];
          for (const [C, D] of n0) {
            if (D - C < 0.05) continue;
            const F = g0(
              L - 0.022,
              C,
              Math.min(j, h),
              L + 0.022,
              D,
              Math.max(j, h),
              0.003,
              "y",
            );
            (Q(F, [0.64, 0.62, 0.58]), i.add(F, t.plank, { cast: !1 }));
          }
        }
      }
    },
    v = { x0: U - 0.25, x1: U + 0.25, y0: 3.48, y1: 3.98 };
  X(q.N, q.N + x0, q.N - x0, q.W, q.E, 2.42, !0, v);
  {
    const a = q.N,
      e = 0.025,
      h = [];
    for (const u of [-1, 1]) {
      const p = a + u * x0,
        x = p + u * 0.025,
        S = Math.min(p, x),
        m = Math.max(p, x);
      (h.push(
        g0(v.x0 - 0.07, v.y0 - 0.07, S, v.x1 + 0.07, v.y0, m, 0.004, "x"),
        g0(v.x0 - 0.07, v.y1, S, v.x1 + 0.07, v.y1 + 0.07, m, 0.004, "x"),
      ),
        h.push(
          g0(v.x0 - 0.07, v.y0, S, v.x0, v.y1, m, 0.004, "y"),
          g0(v.x1, v.y0, S, v.x1 + 0.07, v.y1, m, 0.004, "y"),
        ));
    }
    (h.push(
      g0(v.x0, v.y0, a - x0, v.x1, v.y0 + e, a + x0, 0.003, "x"),
      g0(v.x0, v.y1 - e, a - x0, v.x1, v.y1, a + x0, 0.003, "x"),
    ),
      h.push(
        g0(v.x0, v.y0, a - x0, v.x0 + e, v.y1, a + x0, 0.003, "y"),
        g0(v.x1 - e, v.y0, a - x0, v.x1, v.y1, a + x0, 0.003, "y"),
      ));
    const g = U,
      M = (v.y0 + v.y1) / 2;
    h.push(
      g0(g - 0.012, v.y0, a - 0.015, g + 0.012, v.y1, a + 0.015, 0.003, "y"),
      g0(v.x0, M - 0.012, a - 0.015, v.x1, M + 0.012, a + 0.015, 0.003, "x"),
    );
    for (const u of h) (T(u, _0), i.add(u, t.plank));
    E.push(
      s0(
        [v.x0 + e, v.y0 + e, a],
        [v.x1 - e, v.y0 + e, a],
        [v.x1 - e, v.y1 - e, a],
        [v.x0 + e, v.y1 - e, a],
        [
          [0, 0],
          [0.8, 0],
          [0.8, 0.8],
          [0, 0.8],
        ],
      ),
    );
  }
  X(q.S, q.S - x0, q.S + x0, q.W, q.E, 2.42);
  {
    const a = l0.roof,
      e = [0.72, 0.7, 0.66],
      h = Z(l0.x0, -0.05, l0.z0, l0.x1, l0.y, l0.z1, 0.01, "x", 2);
    (Q(h, e),
      i.add(h, t.plank, { cast: !1 }),
      i.add(
        j0({
          axis: "x",
          a: l0.x0 - 0.05,
          b: l0.x1 + 0.05,
          c: l0.z0 + 0.02,
          y: -0.085,
          r: 0.12,
          seed: Y++,
          tint: () => [0.66, 0.64, 0.6],
        }),
        t.log,
      ));
    const g = 0.125,
      M = G0(l0.beamZ) - g;
    for (const [j, L] of l0.posts) {
      i.add(
        U0([j, -0.02, L], [j, M - 0.06, L], l0.postR, {
          seed: Y++,
          radial: 16,
          taper: 0.05,
          tint: z0,
        }),
        t.log,
      );
      const J = ut(j - 0.2, -0.04, L - 0.19, j + 0.2, 0.05, L + 0.19, 0.03);
      (Q(J, [0.8, 0.8, 0.78]), i.add(J, t.stone));
      const n0 = j < U ? 1 : -1;
      (i.add(
        U0([j + n0 * 0.07, M - 0.62, L], [j + n0 * 0.6, M - 0.08, L], 0.045, {
          seed: Y++,
          radial: 8,
          tint: () => e,
        }),
        t.log,
      ),
        f.push({
          x0: j - 0.16,
          x1: j + 0.16,
          z0: L - 0.16,
          z1: L + 0.16,
          y0: 0,
          y1: 2.4,
        }));
    }
    i.add(
      j0({
        axis: "x",
        a: a.x0 + 0.06,
        b: a.x1 - 0.06,
        c: l0.beamZ,
        y: M,
        r: g,
        seed: Y++,
        tint: () => e,
      }),
      t.log,
    );
    const u = Math.cos(Math.atan(a.slope)),
      p = a.T / u,
      x = a.z0,
      S = $.z0 - 0.005,
      m = G0(x),
      I = G0(S),
      V = s0(
        [a.x0, m, x],
        [a.x1, m, x],
        [a.x1, I, S],
        [a.x0, I, S],
        [
          [a.x0, x / u],
          [a.x1, x / u],
          [a.x1, S / u],
          [a.x0, S / u],
        ],
      );
    (Q(V, [0.7, 0.68, 0.64]), i.add(V, t.plank, { cast: !1 }));
    const G = s0(
      [a.x0, I + p, S],
      [a.x1, I + p, S],
      [a.x1, m + p, x],
      [a.x0, m + p, x],
      [
        [a.x0, 0],
        [a.x1, 0],
        [a.x1, -1.8149999999999977 / u],
        [a.x0, -1.8149999999999977 / u],
      ],
    );
    i.add(G, t.shingle);
    const _ = s0(
      [a.x1, m, x],
      [a.x0, m, x],
      [a.x0, m + p, x],
      [a.x1, m + p, x],
    );
    (A0(_), Q(_, [0.64, 0.62, 0.58]), i.add(_, t.plank, { cast: !1 }));
    for (const [j, L] of [
      [a.x0, -1],
      [a.x1, 1],
    ]) {
      const J =
        L < 0
          ? s0([j, m, x], [j, I, S], [j, I + p, S], [j, m + p, x])
          : s0([j, I, S], [j, m, x], [j, m + p, x], [j, I + p, S]);
      (A0(J), Q(J, [0.64, 0.62, 0.58]), i.add(J, t.plank, { cast: !1 }));
      const n0 = Math.hypot(S - x, I - m),
        C = Z(-0.02, -0.09, -n0 / 2, 0.02, 0.09, n0 / 2, 0.005, "z");
      (C.rotateX(Math.atan2(I - m, S - x) * -1),
        C.translate(j + L * 0.02, (m + I) / 2 + p * 0.5, (x + S) / 2),
        Q(C, [0.6, 0.58, 0.55]),
        i.add(C, t.plank));
    }
    {
      const j = Z(
        a.x0 + 0.1,
        I + p - 0.02,
        $.z0 - 0.05,
        a.x1 - 0.1,
        I + p + 0.13,
        $.z0 + 0.012,
        0.006,
        "x",
      );
      (Q(j, [0.55, 0.53, 0.5]), i.add(j, t.plank));
    }
    for (let j = a.x0 + 0.22; j < a.x1 - 0.1; j += 0.76) {
      const L = x + 0.05,
        J = $.z0 - 0.02;
      i.add(
        U0([j, G0(L) - 0.055, L], [j, G0(J) - 0.055, J], 0.055, {
          seed: Y++,
          radial: 9,
          tint: () => e,
        }),
        t.log,
      );
    }
    i.add(
      j0({
        axis: "x",
        a: a.x0 + 0.15,
        b: a.x1 - 0.15,
        c: $.z0 - 0.07,
        y: G0($.z0) - 0.14,
        r: 0.075,
        seed: Y++,
        tint: () => e,
      }),
      t.log,
    );
  }
  {
    const a = (p, x, S) => {
        if (
          p > O.box.back - 0.05 &&
          p < O.front + 0.01 &&
          S > O.box.z0 - 0.02 &&
          S < O.box.z1 + 0.02 &&
          x < O.box.y1 + 0.02
        )
          return [0.16, 0.14, 0.13];
        const V =
          1 -
          0.55 *
            (Math.exp(-(((S - (O.box.z0 + O.box.z1) / 2) / 0.45) ** 2)) *
              r0(O.box.y1 - 0.05, O.box.y1 + 0.1, x) *
              (1 - r0(1, 1.6, x)) *
              r0(3, 3.3, p));
        return p < $.x0 + 0.01
          ? [0.84 * V, 0.83 * V, 0.8 * V]
          : [0.98 * V, 0.93 * V, 0.86 * V];
      },
      e = (p, x, S, m, I, V, G = 0.035) => {
        const _ = ut(p, x, S, m, I, V, G, 2);
        return (T(_, a), i.add(_, t.stone), _);
      },
      h = O.box,
      g = O;
    (e($.x0 - 0.02, 0, g.z0, g.front, g.mantelY, h.z0),
      e($.x0 - 0.02, 0, h.z1, g.front, g.mantelY, g.z1),
      e($.x0 - 0.02, h.y1, h.z0 - 0.01, g.front, g.mantelY, h.z1 + 0.01, 0.02),
      e($.x0 - 0.02, 0, h.z0, h.back, h.y1 + 0.01, h.z1, 0.01),
      e(
        h.back - 0.01,
        0,
        h.z0 + 0.005,
        g.front - 0.02,
        0.07,
        h.z1 - 0.005,
        0.01,
      ));
    {
      const p = Z(
        g.front - 0.06,
        h.y1 - 0.03,
        h.z0 - 0.06,
        g.front + 0.008,
        h.y1 + 0.02,
        h.z1 + 0.06,
        0.004,
        "z",
      );
      i.add(p, t.iron);
    }
    (e(
      $.x0 - 0.02,
      g.mantelY + 0.1,
      g.breast[2],
      g.breast[1],
      e0(g.breast[1]) + 0.08,
      g.breast[3],
      0.03,
    ),
      e($.x0 - 0.02, g.mantelY + 0.04, g.z0, K.x0 + 0.1, 2.12, g.z1, 0.02));
    {
      const p = ut(
        g.front - 0.02,
        -0.01,
        g.hearth.z0,
        g.hearth.x1,
        0.035,
        g.hearth.z1,
        0.012,
      );
      (T(p, () => [0.9, 0.88, 0.84]), i.add(p, t.stone));
    }
    {
      const p = Z(
        K.x0 - 0.02,
        g.mantelY,
        g.z0 - 0.14,
        g.front + 0.16,
        g.mantelY + 0.1,
        g.z1 + 0.14,
        0.012,
        "z",
      );
      (T(p, (x, S, m) => {
        const I = z0(x, S, m);
        return [I[0] * 0.8, I[1] * 0.78, I[2] * 0.76];
      }),
        i.add(p, t.plank));
    }
    const M = g.base,
      u = g.stack;
    e(M.x0, -0.05, M.z0, $.x0 + 0.02, M.top, M.z1, 0.05);
    {
      const p = new kt();
      (p.moveTo(M.z0, 0),
        p.lineTo(M.z1, 0),
        p.lineTo(u.z1, 0.55),
        p.lineTo(u.z0, 0.55),
        p.lineTo(M.z0, 0));
      const x = new It(p, {
          depth: $.x0 + 0.02 - (M.x0 + 0.06),
          bevelEnabled: !0,
          bevelThickness: 0.02,
          bevelSize: 0.02,
          bevelSegments: 1,
        }),
        S = x.attributes.position;
      for (let m = 0; m < S.count; m++) {
        const I = S.getX(m),
          V = S.getY(m),
          G = S.getZ(m);
        S.setXYZ(m, M.x0 + 0.06 + G, M.top + V, I);
      }
      (x.computeVertexNormals(), A0(x), T(x, a), i.add(x, t.stone));
    }
    (e(u.x0, M.top + 0.3, u.z0, $.x0 + 0.03, u.top, u.z1, 0.04),
      e(
        u.x0 - 0.05,
        u.top,
        u.z0 - 0.05,
        $.x0 + 0.08,
        u.top + 0.08,
        u.z1 + 0.05,
        0.02,
      ));
    {
      const p = Z(
        u.x0 + 0.1,
        u.top + 0.02,
        u.z0 + 0.12,
        $.x0 - 0.06,
        u.top + 0.09,
        u.z1 - 0.12,
        0.01,
        "z",
      );
      i.add(p, t.dark, { cast: !1 });
    }
    (f.push({ x0: M.x0, x1: $.x0, z0: M.z0, z1: M.z1, y0: 0, y1: 3 }),
      f.push({ x0: K.x0, x1: g.front, z0: g.z0, z1: g.z1, y0: 0, y1: 2.5 }));
  }
  const W = {};
  for (const [a, e] of Object.entries(bt)) {
    if (!e.win) continue;
    const h = e.wall === "N" || e.wall === "S" ? "x" : "z",
      g = q[e.wall],
      M = e.wall === "N" ? 1 : e.wall === "S" ? -1 : e.wall === "W" ? 1 : -1,
      u = (a0, c0, B) =>
        h === "x" ? [a0, c0, g + M * B] : [g + M * B, c0, a0],
      p = (a0, c0, B, M0, h0, w0, k0 = 0.004, W0 = null) => {
        const b0 = u(a0, c0, B),
          I0 = u(M0, h0, w0);
        return g0(
          Math.min(b0[0], I0[0]),
          Math.min(b0[1], I0[1]),
          Math.min(b0[2], I0[2]),
          Math.max(b0[0], I0[0]),
          Math.max(b0[1], I0[1]),
          Math.max(b0[2], I0[2]),
          k0,
          W0,
        );
      },
      x = 0.03,
      S = S0 + 0.035,
      m = e.a,
      I = e.b,
      V = e.y0,
      G = e.y1,
      _ = [
        p(m - x, V - x, -S, m, G + x, S),
        p(I, V - x, -S, I + x, G + x, S),
        p(m - x, G, -S, I + x, G + x, S),
        p(m - x, V - x, -S + 0.005, I + x, V, S),
      ];
    for (const a0 of [-1, 1]) {
      const c0 = a0 * (S - 0.005),
        B = a0 * (S + 0.018);
      (_.push(
        p(
          m - x - 0.075,
          V - x - 0.02,
          Math.min(c0, B),
          m - x,
          G + x + 0.075,
          Math.max(c0, B),
          0.004,
        ),
      ),
        _.push(
          p(
            I + x,
            V - x - 0.02,
            Math.min(c0, B),
            I + x + 0.075,
            G + x + 0.075,
            Math.max(c0, B),
            0.004,
          ),
        ),
        _.push(
          p(
            m - x - 0.075,
            G + x,
            Math.min(c0, B),
            I + x + 0.075,
            G + x + 0.08,
            Math.max(c0, B),
            0.004,
          ),
        ),
        a0 > 0 &&
          _.push(
            p(
              m - x - 0.05,
              V - x - 0.035,
              S - 0.01,
              I + x + 0.05,
              V - x + 0.01,
              S + 0.045,
              0.006,
            ),
          ));
    }
    _.push(
      p(
        m - x - 0.06,
        V - x - 0.045,
        -0.255,
        I + x + 0.06,
        V - x + 0.004,
        -0.12,
        0.006,
      ),
    );
    const { top: j, bot: L } = eo(e);
    (j > G + x + 0.01 &&
      _.push(
        p(
          m - x,
          G + x - 0.005,
          -0.13799999999999998,
          I + x,
          j + 0.03,
          S0 - 0.012,
          0.008,
        ),
      ),
      L < V - x - 0.01 &&
        _.push(
          p(
            m - x,
            L - 0.03,
            -0.13799999999999998,
            I + x,
            V - x + 0.005,
            S0 - 0.012,
            0.008,
          ),
        ));
    for (const a0 of _) (T(a0, _0), i.add(a0, t.plank));
    const J = [],
      n0 = 0.045,
      C = 0.022,
      D = m,
      F = I,
      o0 = V,
      f0 = G;
    J.push(
      p(D, o0, -C, D + n0, f0, C),
      p(F - n0, o0, -C, F, f0, C),
      p(D, o0, -C, F, o0 + n0 * 1.3, C),
      p(D, f0 - n0, -C, F, f0, C),
    );
    const D0 = (D + F) / 2,
      zt = (o0 + f0) / 2 + 0.01;
    J.push(
      p(D0 - 0.013, o0, -C * 0.7, D0 + 0.013, f0, C * 0.7),
      p(D, zt - 0.013, -C * 0.7, F, zt + 0.013, C * 0.7),
    );
    for (const a0 of J)
      (T(a0, (c0, B, M0) => {
        const h0 = _0(c0, B, M0);
        return [h0[0] * 0.85, h0[1] * 0.83, h0[2] * 0.8];
      }),
        i.add(a0, t.plank));
    const Wt = u(D, o0, 0.004),
      Zt = u(F, o0, 0.004),
      Gt = u(F, f0, 0.004),
      _t = u(D, f0, 0.004),
      Lt = s0(Wt, Zt, Gt, _t, [
        [0, 0],
        [1.3, 0],
        [1.3, 1.4],
        [0, 1.4],
      ]);
    if ((E.push(Lt), e.shutters)) {
      const a0 = [0.56, 0.25, 0.2],
        c0 = [];
      for (const B of [-1, 1]) {
        const M0 = (I - m) / 2 + 0.05,
          h0 = B < 0 ? m - x - 0.07 : I + x + 0.07,
          w0 = B < 0 ? h0 - M0 : h0,
          k0 = B < 0 ? h0 : h0 + M0,
          W0 = V - x - 0.02,
          b0 = G + x + 0.03,
          I0 = -0.209,
          B0 = -0.235;
        for (let P0 = 0; P0 < 3; P0++) {
          const qt = w0 + (P0 * M0) / 3 + 0.002,
            Ct = w0 + ((P0 + 1) * M0) / 3 - 0.002;
          c0.push(
            p(
              qt,
              W0 + (P0 === 1 ? 0 : 0.006),
              B0,
              Ct,
              b0 - (P0 % 2) * 0.012,
              I0,
              0.004,
              "y",
            ),
          );
        }
        for (const P0 of [W0 + 0.13, b0 - 0.13])
          c0.push(
            p(
              w0 + 0.03,
              P0 - 0.045,
              B0 - 0.02,
              k0 - 0.03,
              P0 + 0.045,
              B0,
              0.004,
            ),
          );
        const at = B < 0 ? k0 - 0.07 : w0 + 0.07,
          ct = B < 0 ? w0 + 0.07 : k0 - 0.07,
          rt = W0 + 0.2,
          it = b0 - 0.2,
          Mt = Math.hypot(ct - at, it - rt),
          T0 = Z(-Mt / 2, -0.04, -0.01, Mt / 2, 0.04, 0.01, 0.004, "x");
        (T0.rotateZ(Math.atan2(it - rt, ct - at)),
          h === "z" && T0.rotateY(-Math.PI / 2));
        const lt = u((at + ct) / 2, (rt + it) / 2, B0 - 0.01);
        (T0.translate(lt[0], lt[1], lt[2]), c0.push(T0));
        const Z0 = u(B < 0 ? w0 + 0.02 : k0 - 0.02, (W0 + b0) / 2, I0 + 0.02);
        i.add(
          Z(
            Z0[0] - 0.006,
            Z0[1] - 0.006,
            Z0[2] - 0.006,
            Z0[0] + 0.006,
            Z0[1] + 0.006,
            Z0[2] + 0.006,
            0.002,
          ),
          t.iron,
          { cast: !1 },
        );
      }
      for (const B of c0)
        (T(B, (M0, h0, w0) => {
          const k0 =
            0.85 + 0.3 * Math.abs(Math.sin(M0 * 13.1 + h0 * 7.7 + w0 * 11.3));
          return [a0[0] * k0, a0[1] * k0, a0[2] * k0];
        }),
          i.add(B, t.plank));
    }
    W[a] = {
      center: u((m + I) / 2, (V + G) / 2, 0),
      inward: h === "x" ? [0, 0, M] : [M, 0, 0],
      P: u,
    };
  }
  const R = new J0(ro(E), t.glass);
  return (
    (R.name = "house:glass"),
    (R.castShadow = !1),
    (R.receiveShadow = !1),
    (R.renderOrder = 2),
    d.add(R),
    { group: d, colliders: f, glass: R, winFrames: W }
  );
}
