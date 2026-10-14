// assets__living-DeOLLwnx 16 — math
// Lines 4851-5588 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
function _e(a, t, r) {
  const e = new y0();
  ((e.name = "barricade"), t.add(e));
  const o = [],
    s = { p: new f0(), q: new L0(), q2: new L0(), e: new St(), s: new f0() };
  function n(g, R, V, Q, L) {
    const P = new y0();
    ((P.name = "barricade_" + g), e.add(P));
    const O = new st(a.mats, r);
    (O.frame(L.local || new b0()), R(O, P), O.flush(P, g));
    const Z = new f0(),
      $ = new L0(),
      p0 = new f0(),
      P0 = new L0();
    (V.decompose(Z, $, s.s), Q.decompose(p0, P0, s.s));
    const R0 = $.clone().slerp(P0, 0.5);
    L.tumble &&
      R0.multiply(
        new L0().setFromAxisAngle(
          new f0(...L.tumble[0]).normalize(),
          L.tumble[1],
        ),
      );
    const t0 = {
      name: g,
      group: P,
      restPos: Z,
      restQuat: $,
      finPos: p0,
      finQuat: P0,
      midQuat: R0,
      ctrl: new f0(...L.ctrl),
      a: L.a,
      b: L.b,
      ease: Te[L.ease || "fly"],
      bounce: L.bounce || 0,
      weight: L.weight ?? 1,
      seed: r() * 20,
    };
    return (P.position.copy(Z), P.quaternion.copy($), o.push(t0), t0);
  }
  const l = (g, R, V, Q) => {
    const L = new b0().makeBasis(
      new f0(...g).normalize(),
      new f0(...R).normalize(),
      new f0(...V).normalize(),
    );
    return (L.setPosition(Q[0], Q[1], Q[2]), L);
  };
  n(
    "sideboard",
    (g) => Gt(g, r, 1.22, 0.9, 0.5, { drawers: [0, 0.02, 0.15] }),
    F(11.23, 0.25, 16.41, -l0 / 2 + 0.06, -l0 / 2),
    F(11.18, 0.25, 18.28, -l0 / 2 + 0.12, -l0 / 2),
    { ctrl: [10.9, 0.28, 17.3], a: 0.22, b: 1, ease: "slide", weight: 0.6 },
  );
  const p = 0.84,
    d = 1.85,
    c = 0.3,
    u = 0.44;
  n(
    "bookcase",
    (g, R) => {
      const V = It(g, r, p, d, c, { shelves: [0.09, 0.47, 0.85, 1.22] }),
        Q = [];
      V.forEach((P, O) => {
        if (!(O === 3 || O === 1))
          for (const Z of At(
            r,
            -p / 2 + 0.03,
            -p / 2 + 0.03 + 0.3 + r() * 0.25,
            P + 0.011,
            c - 0.05,
            -c / 2 + 0.02 + (c - 0.05),
            { hMin: 0.2 },
          ))
            Q.push(Z);
      });
      const L = new u0(F0(Q), Rt());
      ((L.castShadow = !0),
        (L.receiveShadow = !0),
        (L.name = "books"),
        R.add(L));
    },
    F(
      11.36 - 0.15 * Math.cos(u),
      0.542 + 0.15 * Math.sin(u),
      16.5,
      -l0 / 2 + 0.07,
      -u,
    ),
    l([0, 0, 1], [-1, 0, 0], [0, -1, 0], [11.3, 0.19, 15.02]),
    {
      ctrl: [11.12, 0.3, 15.85],
      a: 0.12,
      b: 0.78,
      ease: "fall",
      bounce: 0.05,
      weight: 0.8,
    },
  );
  {
    const g = new b0().multiplyMatrices(
      F(11.74, 0, 17.27, -l0 / 2, -0.38),
      F(0, 0, 0.18),
    );
    n(
      "chair",
      (R) => {
        Ct(R, r);
      },
      g,
      l([0, 1, 0], [0.97, 0, 0.24], [0.24, 0, -0.97], [9.95, 0.225, 18.45]),
      {
        ctrl: [10.9, 0.75, 18],
        a: 0.05,
        b: 0.62,
        ease: "fly",
        bounce: 0.06,
        tumble: [[0, 1, 0], 1.2],
        weight: 1.2,
        local: new b0().makeScale(1, 1.12, 1),
      },
    );
  }
  [
    {
      zc: 16.95,
      yc: 1.62,
      len: 1.62,
      wid: 0.18,
      roll: 0,
      x: 12.128,
      fin: [10.2, 0.0125, 16.95, 0.06],
      mat: "boards_barricade",
    },
    {
      zc: 16.95,
      yc: 1.95,
      len: 1.56,
      wid: 0.17,
      roll: 0.03,
      x: 12.128,
      fin: [10.52, 0.0125, 17.1, -0.05],
      mat: "boards_barricade",
    },
    {
      zc: 16.95,
      yc: 1.31,
      len: 2.08,
      wid: 0.19,
      roll: 0.8,
      x: 12.101,
      fin: [10.84, 0.0125, 16.85, 0.04],
      mat: "wood_oak_pale",
    },
    {
      zc: 16.95,
      yc: 1.75,
      len: 1.72,
      wid: 0.17,
      roll: -0.54,
      x: 12.155,
      fin: [10.55, 0.038, 17.35, 0.95],
      mat: "wood_oak_pale",
    },
  ].forEach((g, R) => {
    n(
      "plank" + R,
      (V) => {
        const Q = new $0(),
          L = g.len / 2,
          P = g.wid / 2,
          O = () => (r() - 0.5) * 0.025;
        (Q.moveTo(-L, -P),
          Q.lineTo(L + O(), -P),
          Q.lineTo(L - 0.015, -P * 0.2),
          Q.lineTo(L + O(), P),
          Q.lineTo(-L + O(), P),
          Q.lineTo(-L - 0.012, P * 0.3),
          Q.lineTo(-L, -P));
        const Z = G0(Q, 0.025, 0.004, 1);
        (Z.translate(0, 0, -0.0125), V.part(Z, g.mat, { grain: "x" }));
        for (const $ of [-1, 1])
          for (const p0 of [-1, 1])
            V.part(
              new Z0(0.005, 0.005, 0.004, 8)
                .rotateX(l0 / 2)
                .translate($ * (L - 0.07), p0 * P * 0.45, 0.0135),
              "iron_black",
              { cast: !1 },
            );
      },
      F(g.x, g.yc, g.zc, -l0 / 2, 0, g.roll),
      F(g.fin[0], g.fin[1], g.fin[2], l0 / 2 + g.fin[3], -l0 / 2),
      {
        ctrl: [
          g.fin[0] + 0.7,
          1.4 + R * 0.15,
          (g.zc + g.fin[2]) / 2 + (R - 1.5) * 0.3,
        ],
        a: R * 0.04,
        b: 0.36 + R * 0.05,
        ease: "fly",
        bounce: 0.04,
        tumble: [[1, 0, 0], l0 * (R % 2 ? 1 : -1)],
        weight: 1.4,
      },
    );
  });
  const k = new U0({ color: new H0(0.9, 0.55, 0.28), toneMapped: !1, fog: !1 }),
    S = new u0(new _0(1.24, 2.4), k);
  (S.position.set(12.37, 1.18, 16.95),
    (S.rotation.y = -l0 / 2),
    (S.name = "door_glow"),
    e.add(S));
  const h = { level: 1.6, mesh: S },
    y = {
      intact: {
        x0: 11.2,
        x1: 12.2,
        z0: 15.75,
        z1: 17.52,
        y0: 0,
        y1: 2.3,
        on: !0,
      },
      sideboard: {
        x0: 11.12,
        x1: 12.2,
        z0: 17.6,
        z1: 18.98,
        y0: 0,
        y1: 0.55,
        on: !1,
      },
      bookcase: {
        x0: 9.42,
        x1: 11.34,
        z0: 14.56,
        z1: 15.48,
        y0: 0,
        y1: 0.4,
        on: !1,
      },
      chair: {
        x0: 9.93,
        x1: 10.97,
        z0: 18.25,
        z1: 18.95,
        y0: 0,
        y1: 0.45,
        on: !1,
      },
    },
    C = b0,
    z = f0,
    w = L0,
    f = l0 / 2,
    i = (g, R, V) => new C().makeTranslation(g, R, V),
    m = (g, R, V) =>
      i(g[0], g[1], g[2])
        .multiply(
          new C().makeRotationAxis(new z(R[0], R[1], R[2]).normalize(), V),
        )
        .multiply(i(-g[0], -g[1], -g[2])),
    M = (...g) => {
      const R = new C();
      for (const V of g) R.premultiply(V);
      return R;
    },
    v = (g, R, V, Q) =>
      new C()
        .makeBasis(new z(...g), new z(...R), new z(...V))
        .setPosition(Q[0], Q[1], Q[2]),
    T = {};
  for (const g of o)
    ((T[g.name] = g),
      (g.restM = new C().compose(g.restPos, g.restQuat, new z(1, 1, 1))),
      (g.finM = new C().compose(g.finPos, g.finQuat, new z(1, 1, 1))));
  const I = (g, R) => new C().multiplyMatrices(R, g.restM),
    A = new z(),
    D = new z(),
    q = new w(),
    G = new w(),
    J = new w(),
    E = new z(1, 1, 1),
    U = new z(),
    B = new z(),
    o0 = (g, R, V) => (
      g.decompose(A, q, U),
      R.decompose(D, G, U),
      new C().compose(A.lerp(D, V), q.slerp(G, V), E)
    ),
    x = (g, R, V, Q, L) => {
      (g.decompose(A, q, U), R.decompose(D, G, U));
      const P = 1 - V,
        O = Math.max(A.y, D.y) + Q,
        Z = P * P * A.y + 2 * P * V * O + V * V * D.y;
      return (
        q.slerp(G, V),
        L &&
          q.premultiply(
            J.setFromAxisAngle(
              B.set(L[0], L[1], L[2]).normalize(),
              L[3] * Math.sin(l0 * V),
            ),
          ),
        new C().compose(A.lerp(D, V).setY(Z), q, E)
      );
    },
    Y = (g, R, V) => (
      (g.elements[13] += Math.abs(Math.sin(R * l0 * 2)) * (1 - R) * V),
      g
    ),
    n0 = (g, R) => R.decompose(g.group.position, g.group.quaternion, U),
    c0 = (g, R) => new z(R[0], R[1], R[2]).applyMatrix4(g).toArray(),
    W = (g, R, V) => O0((g - R) / (V - R)),
    X = (g) => g * g * (3 - 2 * g),
    N = (g, R, V) => g + (R - g) * V,
    K = (g, R, V, Q) => {
      const L = c0(g, R),
        P = c0(g, V);
      return (Q === "north" ? L[0] <= P[0] : L[2] <= P[2]) ? [L, P] : [P, L];
    },
    r0 = [];
  {
    const g = T.chair,
      R = m([11.824, 0, 17.27], [0, 0, 1], 0.38),
      V = I(g, M(R, i(-0.34, 0.03, 0))),
      Q = I(
        g,
        M(
          R,
          i(-0.34, 0.03, 0),
          m([11.23, 0, 17.27], [0, 1, 0], 1.1),
          i(-0.25, 0.3, 0.34),
        ),
      ),
      L = v([0, 1, 0], [1, 0, 0], [0, 0, -1], [9.35, 0.222, 17.75]),
      P = [-0.18, 0.46, 0.17],
      O = [0.18, 0.46, 0.17];
    r0.push({
      id: "chair",
      piece: g,
      dur: 1,
      at: [11.08, 17.3, f],
      fin: L,
      dust: [[0.9, 9.85, 0.04, 17.78, 0.4, 0.6]],
      sounds: [
        [0.24, "chair_drag", 0.8],
        [0.9, "chair_clatter", 0.85],
      ],
      pose(Z, $) {
        let p0;
        (Z < 0.22
          ? (p0 = g.restM.clone())
          : Z < 0.52
            ? (p0 = o0(g.restM, V, X(W(Z, 0.22, 0.52))))
            : Z < 0.64
              ? (p0 = o0(V, Q, X(W(Z, 0.52, 0.64))))
              : Z < 0.9
                ? (p0 = x(Q, L, W(Z, 0.64, 0.9), 0.3, [1, 0, 0.4, 1.4]))
                : (p0 = Y(L.clone(), W(Z, 0.9, 1), 0.05)),
          n0(g, p0));
        const P0 = X(W(Z, 0.22, 0.52)),
          R0 = X(W(Z, 0.5, 0.64));
        (($.pos = [N(11.08, 10.82, P0), 17.3]),
          ($.yaw = f - 0.55 * R0),
          ($.crouch = N(0.45, 0.08, P0)),
          ($.lean =
            (Z < 0.22 ? 22 * X(W(Z, 0, 0.18)) : N(22, -6, P0)) +
            10 * R0 * (1 - X(W(Z, 0.66, 0.85)))),
          ($.hold = Z > 0.06 && Z < 0.64),
          ($.L = $.R = null),
          $.hold && ([$.L, $.R] = K(p0, P, O, "east")),
          ($.look = c0(p0, [0, 0.45, 0])));
      },
    });
  }
  {
    const g = T.bookcase,
      R = g.restPos.toArray(),
      V = new z(1, 0, 0).applyQuaternion(g.restQuat).toArray(),
      Q = I(g, M(m(R, V, 0.3), i(-0.05, 0.02, 0))),
      L = I(
        g,
        M(
          m(R, V, 0.42),
          i(0.126, 0.034, -0.95),
          m([11.35, 0.64, 15.55], [0, 1, 0], 0.08),
          m([11.35, 0.64, 15.55], [1, 0, 0], -0.08),
        ),
      ),
      P = v([0, 0, 1], [0, 1, 0], [-1, 0, 0], [11.45, 0, 15.25]),
      O = (t0) => m([11.27, 0, 15.25], [0, 0, 1], t0).multiply(P),
      Z = O(f),
      $ = [0.43, 0.85, 0.17],
      p0 = [0.43, 0.45, 0.17],
      P0 = [0.43, 1.3, 0.17],
      R0 = [0.43, 0.95, 0.17];
    r0.push({
      id: "bookcase",
      piece: g,
      dur: 1.9,
      at: [10.8, 16.6, f - 0.35],
      fin: Z,
      dust: [
        [0.53, 11.45, 0.04, 15.25, 0.45, 0.7],
        [0.9, 10.35, 0.06, 15.25, 1, 2.4],
      ],
      sounds: [
        [0.14, "floor_creak", 0.55, 0.8],
        [0.52, "bookcase_thud", 0.85],
        [0.9, "bookcase_crash", 1],
      ],
      pose(t0, S0) {
        let v0;
        if (t0 < 0.12) v0 = g.restM.clone();
        else if (t0 < 0.3) v0 = o0(g.restM, Q, X(W(t0, 0.12, 0.3)));
        else if (t0 < 0.46) v0 = o0(Q, L, X(W(t0, 0.3, 0.46)));
        else if (t0 < 0.52) {
          const h0 = W(t0, 0.46, 0.52);
          v0 = o0(L, P, h0 * h0);
        } else if (t0 < 0.66) {
          const h0 = W(t0, 0.52, 0.66);
          v0 = O(-0.05 * Math.sin(h0 * l0 * 2.5) * (1 - h0));
        } else if (t0 < 0.9) {
          const h0 = W(t0, 0.66, 0.9);
          v0 = O(f * h0 * h0);
        } else {
          const h0 = W(t0, 0.9, 1);
          v0 = O(f - 0.06 * Math.abs(Math.sin(h0 * l0 * 2)) * (1 - h0));
        }
        n0(g, v0);
        const d0 = X(W(t0, 0.3, 0.46)),
          M0 = X(W(t0, 0.7, 0.8));
        ((S0.pos = [
          N(10.8, 10.9, d0) - 0.15 * M0,
          N(16.6, 16.05, d0) + 0.5 * M0,
        ]),
          (S0.yaw = f - 0.35 + 0.35 * d0),
          (S0.crouch = 0.12 + 0.2 * M0),
          (S0.lean =
            t0 < 0.12
              ? 16 * X(W(t0, 0, 0.1))
              : t0 < 0.5
                ? N(16, -8, X(W(t0, 0.12, 0.3)))
                : t0 < 0.66
                  ? N(-8, 10, X(W(t0, 0.5, 0.62)))
                  : N(10, -10, X(W(t0, 0.66, 0.74)))),
          (S0.hold = (t0 > 0.06 && t0 < 0.47) || (t0 > 0.56 && t0 < 0.72)),
          (S0.L = S0.R = null),
          S0.hold &&
            ([S0.L, S0.R] =
              t0 > 0.5 ? K(v0, P0, R0, "east") : K(v0, $, p0, "east")),
          (S0.look = c0(v0, [0, 1, 0])));
      },
    });
  }
  {
    const g = T.sideboard,
      R = (P, O) => I(g, M(m([11.68, 0, 16.41], [0, 1, 0], O), i(0, 0, P))),
      V = R(1.9, 0),
      Q = [0.6, 0.25, 0.42],
      L = [0.6, 0.72, 0.42];
    r0.push({
      id: "sideboard",
      piece: g,
      dur: 1.6,
      at: [11.7, 17.42, l0],
      via: [[10.9, 17.36]],
      fin: V,
      dust: [[0.22, 11.68, 0.03, 16.4, 0.5, 0.5]],
      voice: [0.3, "v_strain"],
      sounds: [[0.16, "furniture_scrape", 0.9]],
      pose(P, O) {
        const Z = W(P, 0.15, 0.95),
          $ = 1.9 * (X(Z) + 0.025 * Math.sin(Z * l0 * 6) * Math.sin(Z * l0)),
          p0 = R($, 0.035 * Math.sin(Z * l0 * 4) * Math.sin(Z * l0));
        (n0(g, p0),
          (O.pos = [11.7, 17.42 + $]),
          (O.yaw = l0),
          (O.crouch = 0.5),
          (O.lean =
            P < 0.15 ? 26 * X(W(P, 0, 0.12)) : 26 - 8 * Math.sin(Z * l0)),
          (O.hold = P > 0.06 && P < 0.97),
          (O.L = O.R = null),
          O.hold && ([O.L, O.R] = K(p0, Q, L, "north")),
          (O.look = c0(p0, [0.3, 0.5, 0.4])));
      },
    });
  }
  const m0 = (g, R, V, Q, L, P, O = {}) => {
    const Z = T[g],
      $ = new z(1, 0, 0).applyQuaternion(Z.restQuat),
      p0 = new z(0, 1, 0).applyQuaternion(Z.restQuat).toArray(),
      P0 = Z.restPos
        .clone()
        .addScaledVector($, -R * L)
        .toArray(),
      R0 = -R * 0.32,
      t0 = (d0) => I(Z, m(P0, p0, d0)),
      S0 = I(Z, M(m(P0, p0, R0 * 1.35), i(-0.07, -0.04, 0))),
      v0 = Z.finM;
    r0.push({
      id: g,
      piece: Z,
      dur: 0.62,
      at: P,
      via: O.via,
      fin: v0,
      sounds: [
        [0.19, "nail_pry", 0.75],
        [0.52, "nail_pry", 0.35, 1.35],
        [0.88, "plank_drop", 0.7],
      ],
      pose(d0, M0) {
        let h0;
        if (d0 < 0.18) h0 = Z.restM.clone();
        else if (d0 < 0.5) {
          const nt = W(d0, 0.18, 0.5);
          h0 = t0(R0 * (nt + 0.1 * Math.sin(nt * l0 * 3) * (1 - nt)));
        } else
          d0 < 0.58
            ? (h0 = o0(t0(R0), S0, X(W(d0, 0.5, 0.58))))
            : d0 < 0.88
              ? (h0 = x(S0, v0, W(d0, 0.58, 0.88), 0.28, [0, 1, 0.3, 2.2]))
              : (h0 = Y(v0.clone(), W(d0, 0.88, 1), 0.035));
        (n0(Z, h0),
          (M0.pos = [P[0], P[1]]),
          (M0.yaw = P[2]),
          (M0.crouch = O.crouch ?? 0),
          (M0.hop = O.hop ? O.hop * Math.sin(l0 * W(d0, 0.03, 0.33)) : 0),
          (M0.lean =
            N(O.lean ?? 8, -10, X(W(d0, 0.2, 0.5))) +
            16 * X(W(d0, 0.55, 0.64)) * (1 - X(W(d0, 0.7, 0.9)))),
          (M0.hold = d0 > 0.05 && d0 < 0.6),
          (M0.L = M0.R = null),
          M0.hold && ([M0.L, M0.R] = K(h0, V, Q, "east")),
          (M0.look = c0(h0, [R * 0.6, 0, 0])));
      },
    });
  };
  (m0(
    "plank2",
    -1,
    [-0.95, 0, 0.02],
    [-0.72, 0, 0.02],
    0.97,
    [11.72, 16.5, f],
    {
      crouch: 0.5,
      lean: 18,
      via: [
        [10.96, 19.3],
        [10.96, 17.36],
      ],
    },
  ),
    m0("plank0", 1, [0.72, 0, 0.02], [0.45, 0, 0.02], 0.75, [11.74, 17.3, f], {
      lean: 8,
    }),
    m0("plank1", 1, [0.66, 0, 0.02], [0.36, 0, 0.02], 0.72, [11.74, 17.22, f], {
      hop: 0.55,
      lean: 4,
    }),
    m0("plank3", 1, [0.78, 0, 0.02], [0.52, 0, 0.02], 0.8, [11.74, 17.32, f], {
      crouch: 0.1,
      lean: 12,
    }));
  const K0 = (g, R) => {
    (n0(g, R), g.group.updateMatrixWorld(!0));
    const V = new Et().setFromObject(g.group);
    return {
      x0: V.min.x,
      x1: V.max.x,
      z0: V.min.z,
      z1: V.max.z,
      y0: 0,
      y1: V.max.y,
      on: !1,
    };
  };
  for (const g of r0)
    g.id.startsWith("plank") ||
      ((y["clr_" + g.id + "_rest"] = K0(g.piece, g.piece.restM)),
      (y["clr_" + g.id + "_down"] = K0(g.piece, g.fin)));
  for (const g of o) n0(g, g.restM);
  const w0 = a.shell?.doors?.D6,
    H = { t01: 0, applied: -1, play: null, jit: 0, clear: !1 },
    dt = {
      steps: r0,
      begin() {
        ((H.clear = !0), (H.play = null), (y.intact.on = !1));
        for (const g of r0) {
          const R = y["clr_" + g.id + "_rest"];
          R && (R.on = !0);
        }
      },
      pose(g, R, V = {}) {
        const Q = typeof g == "string" ? r0.find((O) => O.id === g) : g;
        ((R = O0(R)), Q.pose(R, V));
        const L = y["clr_" + Q.id + "_rest"],
          P = y["clr_" + Q.id + "_down"];
        return (L && (L.on = R < 0.2), P && (P.on = R >= 0.999), V);
      },
      reset() {
        ((H.clear = !1), (H.applied = -1));
        for (const g of o) n0(g, g.restM);
        for (const g of Object.keys(y)) g.startsWith("clr_") && (y[g].on = !1);
        y.intact.on = !0;
      },
    };
  function ht(g, R) {
    const V = g > 0.55 ? (g - 0.55) / 0.45 : 0,
      Q = Math.min(g / 0.55, 1);
    for (const P of o) {
      const O = O0((V - P.a) / (P.b - P.a));
      if (O <= 0) {
        const Z = Math.pow(Math.max(0, Math.sin(g * 64 + P.seed * 0.2)), 6),
          $ =
            ((g > 0 ? 0.004 + 0.05 * Q * Q : 0) * Z +
              H.jit * (0.6 + 0.4 * Math.sin(R * 71 + P.seed))) *
            P.weight;
        (s.p.set(
          -$,
          $ * 0.25 * Math.sin(g * 91 + P.seed),
          $ * 0.35 * Math.sin(g * 57 + P.seed * 2),
        ),
          P.group.position.copy(P.restPos).add(s.p),
          s.e.set(
            $ * 1.4 * Math.sin(g * 77 + P.seed),
            0,
            $ * 1.2 * Math.sin(g * 49 + P.seed * 3),
          ),
          s.q.setFromEuler(s.e),
          P.group.quaternion.copy(P.restQuat).multiply(s.q));
      } else {
        const Z = P.ease(O),
          $ = 1 - Z;
        (P.group.position.set(
          $ * $ * P.restPos.x + 2 * $ * Z * P.ctrl.x + Z * Z * P.finPos.x,
          $ * $ * P.restPos.y + 2 * $ * Z * P.ctrl.y + Z * Z * P.finPos.y,
          $ * $ * P.restPos.z + 2 * $ * Z * P.ctrl.z + Z * Z * P.finPos.z,
        ),
          P.bounce &&
            O > 0.7 &&
            (P.group.position.y +=
              ((Math.abs(Math.sin(((O - 0.7) / 0.3) * l0 * 2)) * (1 - O)) /
                0.3) *
              P.bounce),
          s.q.copy(P.restQuat).slerp(P.midQuat, Z),
          s.q2.copy(P.midQuat).slerp(P.finQuat, Z),
          P.group.quaternion.copy(s.q).slerp(s.q2, Z));
      }
    }
    y.intact.on = g < 0.6;
    const L = g >= 0.97;
    if (
      ((y.sideboard.on = L),
      (y.bookcase.on = L),
      (y.chair.on = L),
      w0 && w0.leaf)
    ) {
      const P =
        g < 0.55
          ? Math.pow(Math.max(0, Math.sin(g * 64)), 6) * (0.004 + 0.016 * Q)
          : 0;
      w0.leaf.position.x = -(P + H.jit * 1.5 * Math.abs(Math.sin(R * 71)));
    }
  }
  const Yt = {
      group: e,
      pieces: o,
      colliders: y,
      glow: h,
      work: dt,
      get t() {
        return H.t01;
      },
      breach(g = 1) {
        ((H.t01 = O0(g)), (H.play = null));
      },
      play(g = 1.4, R = H.t01) {
        ((H.t01 = O0(R)),
          (H.play = { from: H.t01, dur: Math.max(0.05, g), el: 0 }));
      },
      pound(g = 1) {
        H.jit = Math.max(H.jit, 0.012 * g);
      },
      reset() {
        ((H.t01 = 0), (H.play = null), (H.jit = 0), dt.reset());
      },
    },
    Zt = (g, R) => {
      (H.play &&
        ((H.play.el += g),
        (H.t01 = O0(
          H.play.from + ((1 - H.play.from) * H.play.el) / H.play.dur,
        )),
        H.t01 >= 1 && (H.play = null)),
        H.jit > 0 &&
          ((H.jit *= Math.exp(-g * 9)), H.jit < 2e-4 && (H.jit = 0)));
      const V = H.t01 > 0 && H.t01 < 0.55;
      {
        const Q =
            0.8 +
            0.12 * Math.sin(R * 0.9) +
            0.06 * Math.sin(R * 3.7 + 1.3) +
            0.04 * Math.sin(R * 11.1),
          L = Math.max(0, Math.sin(R * 0.37 + 2)) ** 12,
          P =
            Math.min(1, H.jit * 60) +
            (V ? 0.5 * Math.pow(Math.max(0, Math.sin(H.t01 * 64)), 2) : 0),
          O = h.level * Q * (1 - 0.7 * L) * (1 - 0.8 * Math.min(1, P));
        (k.color.setRGB(0.9 * O, 0.55 * O, 0.28 * O),
          (S.visible = h.level > 0));
      }
      H.clear
        ? w0 && w0.leaf && w0.leaf.position.x !== 0 && (w0.leaf.position.x = 0)
        : H.t01 !== H.applied || H.jit > 0 || V
          ? (ht(H.t01, R),
            (H.applied = H.t01),
            !H.jit &&
              !V &&
              w0 &&
              w0.leaf &&
              H.t01 >= 0.55 &&
              (w0.leaf.position.x = 0))
          : w0 &&
            w0.leaf &&
            w0.leaf.position.x !== 0 &&
            !H.jit &&
            (w0.leaf.position.x = 0);
    };
  return (ht(0, 0), { api: Yt, anim: Zt, colliders: Object.values(y) });
}
