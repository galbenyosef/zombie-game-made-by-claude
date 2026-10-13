// assets__metro-xgLUk92P 14 — add
// Lines 4920-5375 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function xa(c, a) {
  const { B: o, M: s, L: f, D: h, group: d } = c,
    l = [],
    i = { chunk: "astair" },
    t = c0,
    e = u0,
    n = t.z0,
    r = t.z1,
    u = t.x0,
    b = (g) => {
      if (g < u) return e;
      const A = Math.min(13, Math.floor((g - u) / t.tread) + 1);
      if (g < t.landing[0]) return e + A * t.rise;
      if (g < t.landing[1]) return e + 13 * t.rise;
      const O = Math.min(13, Math.floor((g - t.landing[1]) / t.tread) + 1);
      return e + (13 + O) * t.rise;
    },
    M = (g, A, O) => {
      for (let X = 0; X < A; X++) {
        const G = g + X * t.tread,
          l0 = O + (X + 1) * t.rise;
        (o.add(T(G, O, n, G + t.tread + 0.001, l0, r), s.concFloor, i),
          o.add(
            T(G - 0.004, l0 - 0.025, n, G + 0.045, l0 + 0.006, r, 0.003),
            s.galvDark,
            i,
          ));
      }
    };
  (M(u, 12, e),
    o.add(
      T(u + 12 * t.tread, e, n, t.landing[1], e + 13 * t.rise, r),
      s.concFloor,
      i,
    ),
    o.add(
      T(
        u + 12 * t.tread - 0.004,
        e + 13 * t.rise - 0.025,
        n,
        u + 12 * t.tread + 0.045,
        e + 13 * t.rise + 0.003,
        r,
        0.003,
      ),
      s.galvDark,
      i,
    ),
    M(t.landing[1], 12, e + 13 * t.rise),
    o.add(
      T(t.landing[1] + 12 * t.tread, e + 13 * t.rise, n, t.hall.x1, t.topY, r),
      s.concFloor,
      i,
    ),
    o.add(
      T(
        t.landing[1] + 12 * t.tread - 0.004,
        t.topY - 0.025,
        n,
        t.landing[1] + 12 * t.tread + 0.045,
        t.topY + 0.003,
        r,
        0.003,
      ),
      s.galvDark,
      i,
    ));
  const x = m.ceil,
    w = t.topY + 2.45,
    p = (g) =>
      g < t.landing[1]
        ? x
        : Math.min(
            w,
            x + ((g - t.landing[1]) / (t.topX - t.landing[1])) * (w - x),
          ),
    S = [u, t.landing[0], t.landing[1], t.topX, t.hall.x0];
  for (const [g, A] of [
    ["+z", n],
    ["-z", r],
  ])
    for (let O = 0; O < S.length - 1; O++) {
      const X = S[O],
        G = S[O + 1],
        l0 = b(X + 0.001) - (O === 0 ? t.rise : 0),
        h0 = b(G - 0.001),
        F = p(X),
        e0 = p(G),
        g0 =
          g === "+z"
            ? k0(
                [X, Math.min(l0, e), A],
                [G, Math.min(l0, e), A],
                [G, e0, A],
                [X, F, A],
              )
            : k0(
                [G, Math.min(l0, e), A],
                [X, Math.min(l0, e), A],
                [X, F, A],
                [G, e0, A],
              );
      o.add(g0, s.tileCream, i);
      const N0 = O === 1 || O === 3 ? l0 : e + (O === 0 ? 0 : 13 * t.rise),
        F0 = O === 1 || O === 3 ? h0 : e + (O === 0 ? 13 : 26) * t.rise,
        $0 = O === 0 ? e : O === 2 ? e + 13 * t.rise : N0,
        G0 = O === 0 ? e + 13 * t.rise : O === 2 ? t.topY : F0,
        L0 = g === "+z" ? 0.003 : -0.003,
        xt =
          g === "+z"
            ? k0(
                [X, $0 - 0.02, A + L0],
                [G, G0 - 0.02, A + L0],
                [G, G0 + 0.16, A + L0],
                [X, $0 + 0.16, A + L0],
              )
            : k0(
                [G, G0 - 0.02, A + L0],
                [X, $0 - 0.02, A + L0],
                [X, $0 + 0.16, A + L0],
                [G, G0 + 0.16, A + L0],
              );
      o.add(xt, s.tileTeal, i);
    }
  (o.add(T0(u, n, t.landing[1], r, x, !1), s.ceil, i),
    o.add(
      k0(
        [t.landing[1], x, n],
        [t.topX, w, n],
        [t.topX, w, r],
        [t.landing[1], x, r],
      ),
      s.ceil,
      i,
    ));
  for (const g of [n + 0.07, r - 0.07]) {
    const A = [
      [u - 0.3, e + 0.9],
      [t.landing[0], e + 13 * t.rise + 0.9],
      [t.landing[1], e + 13 * t.rise + 0.9],
      [t.topX, t.topY + 0.9],
      [t.topX + 0.4, t.topY + 0.9],
    ];
    for (let O = 0; O < A.length - 1; O++)
      o.add(
        j([A[O][0], A[O][1], g], [A[O + 1][0], A[O + 1][1], g], 0.022, 10),
        s.steel,
        i,
      );
    for (let O = u; O < t.topX; O += 1.1) {
      const X = b(O) + 0.9 + 0.04;
      o.add(
        j(
          [O, X - 0.05, g],
          [O, X - 0.05, g + (g < 214 ? -0.07 : 0.07)],
          0.009,
          5,
        ),
        s.steel,
        i,
      );
    }
  }
  const y = t.hall,
    L = t.topY,
    v = L + 3.2,
    C = [
      ["+z", y.z0, t.topX, y.x1],
      ["-z", y.z1, t.topX, y.x1],
    ];
  for (const [g, A, O, X] of C) o.add(r0(g, A, O, X, L, v), s.paintHigh, i);
  (o.add(r0("-x", y.x1, y.z0, y.z1, L, v), s.paintHigh, i),
    o.add(T0(t.topX, y.z0, y.x1, y.z1, L, !0), s.concFloor, i),
    o.add(T0(t.topX, y.z0, y.x1, y.z1, v, !1), s.ceil, i),
    o.add(r0("-x", t.topX, y.z0, n, w, v), s.paintHigh, i),
    o.add(r0("-x", t.topX, r, y.z1, w, v), s.paintHigh, i),
    o.add(r0("-x", t.topX, y.z0, n, L, w), s.paintHigh, i),
    o.add(r0("-x", t.topX, r, y.z1, L, w), s.paintHigh, i),
    o.add(
      k0([t.topX, w, n], [t.topX, w, r], [t.topX, v, r], [t.topX, v, n]),
      s.paintHigh,
      i,
    ));
  const k = t.shutterX,
    R = new Jt();
  ((R.name = "ash_shutter"), d.add(R));
  const W = [];
  for (let g = 0; g < v - 0.35 - (L + 0.02); g += 0.075)
    W.push(
      T(k - 0.025, g, y.z0 + 0.05, k + 0.025, g + 0.07, y.z1 - 0.05, 0.02),
    );
  const Y = q0(W),
    $ = new bt(Y, s.galvDark);
  (($.castShadow = !0),
    ($.receiveShadow = !0),
    R.add($),
    o.add(T(k - 0.18, v - 0.42, y.z0, k + 0.18, v, y.z1), s.galvDark, i));
  for (const g of [y.z0, y.z1 - 0.08])
    o.add(T(k - 0.06, L, g, k + 0.06, v - 0.4, g + 0.08), s.galvDark, i);
  const Z = {
      k: 0.5,
      goal: 0.5,
      rate: 0,
      set(g) {
        ((Z.k = Z.goal = g), V());
      },
      to(g, A = 2) {
        ((Z.goal = g),
          (Z.rate = Math.abs(g - Z.k) / Math.max(0.05, A)),
          c.audio?.play?.("metro_shutter_" + (g > Z.k ? "up" : "down"), {
            pos: [k, L + 1.5, (y.z0 + y.z1) / 2],
            vol: 0.9,
          }));
      },
      rattle() {
        (c.audio?.play?.("metro_shutter_rattle", {
          pos: [k, L + 1.2, (y.z0 + y.z1) / 2],
          vol: 1,
        }),
          (Z.shake = 0.6));
      },
      shake: 0,
    },
    H = v - 0.35 - (L + 0.02),
    V = () => {
      R.position.set(0, L + 0.02 + Z.k * H, 0);
    };
  (Z.set(0.5),
    c.anim.push((g, A) => {
      if (Z.k !== Z.goal) {
        const O = Z.goal - Z.k;
        ((Z.k += Math.sign(O) * Math.min(Math.abs(O), Z.rate * g)), V());
      }
      Z.shake > 0 &&
        ((Z.shake = Math.max(0, Z.shake - g)),
        (R.position.x = Math.sin(A * 70) * 0.012 * Z.shake));
    }));
  const I = [u - 0.5, e - 0.5, y.z0 - 0.1, y.x1 + 0.1, v + 0.1, y.z1 + 0.1],
    E = f.fixId(),
    N = (t.landing[0] + t.landing[1]) / 2;
  (o.add(
    new D0(0.11, 0.11, 0.06, 20).translate(N, x - 0.03, (n + r) / 2),
    s.iron,
    i,
  ),
    o.add(
      O0(
        new U0(
          0.085,
          14,
          8,
          0,
          Math.PI * 2,
          Math.PI / 2,
          Math.PI / 2,
        ).translate(N, x - 0.06, (n + r) / 2),
        E,
      ),
      s.warmBulb,
      { chunk: "astair", cast: !1 },
    ),
    f.add({
      a: [N, x - 0.14, (n + r) / 2],
      col: [1, 0.72, 0.45],
      cd: 9,
      reach: 7,
      zone: "ashwood",
      fix: E,
      state: "flicker",
      box: I,
      point: { cd: 9, dist: 7 },
    }));
  const Q = f.fixId(),
    K = k - 0.7,
    s0 = v,
    f0 = (y.z0 + y.z1) / 2 - 0.4;
  (o.add(new D0(0.12, 0.12, 0.07, 20).translate(K, s0 - 0.035, f0), s.iron, i),
    o.add(
      O0(
        new U0(0.09, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).translate(
          K,
          s0 - 0.07,
          f0,
        ),
        Q,
      ),
      s.warmBulb,
      { chunk: "astair", cast: !1 },
    ));
  for (let g = 0; g < 4; g++)
    o.add(
      new Ot(0.1, 0.004, 4, 20, Math.PI)
        .rotateY((g / 4) * Math.PI)
        .rotateX(Math.PI)
        .translate(K, s0 - 0.07, f0),
      s.iron,
      i,
    );
  f.add({
    a: [K, s0 - 0.2, f0],
    col: [1, 0.75, 0.5],
    cd: 9,
    reach: 9,
    zone: "ashwood",
    fix: Q,
    state: "on",
    box: I,
    weight: 1.2,
    down: !0,
    lobe: 0,
    spot: {
      cd: 24,
      dist: 14,
      angle: 1.15,
      pen: 0.85,
      dir: [-1, -1.05, 0.05],
      at: [K, s0 - 0.16, f0],
    },
  });
  const p0 = f.fixId();
  (o.add(
    O0(
      new U0(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
        .rotateZ(Math.PI / 2)
        .translate(y.x1 - 0.01, L + 2.5, (y.z0 + y.z1) / 2 + 1.2),
      p0,
    ),
    s.redLamp,
    { chunk: "astair", cast: !1 },
  ),
    f.add({
      a: [y.x1 - 0.12, L + 2.5, (y.z0 + y.z1) / 2 + 1.2],
      col: [1, 0.2, 0.08],
      cd: 3,
      reach: 6,
      zone: "ashwood",
      fix: p0,
      state: "dying",
      box: [k, L - 0.2, y.z0, y.x1, v, y.z1],
    }),
    h.decal("b_smear", [t.topX + 0.4, L + 1, y.z0 + 0.004], 1.4, 0.7, "+z", {
      chunk: "astair",
    }),
    h.decal("graf2", [k + 0.03, L + 2, (y.z0 + y.z1) / 2], 1.6, 0.53, "-x", {
      chunk: "astair",
      matt: !0,
    }),
    h.decal(
      "b_hand",
      [t.landing[0] + 0.6, e + 13 * t.rise + 1.1, r - 0.004],
      0.18,
      0.22,
      "-z",
      { chunk: "astair", rot: 0.4 },
    ));
  const o0 = Lt;
  for (let g = 0; g < 12; g++) {
    const A = o0.x0 + g * 0.3,
      O = e + (g + 1) * 0.17;
    o.add(T(A, e, o0.z0, A + 0.301, O, o0.z1), s.concFloor, {
      chunk: "astair",
    });
  }
  o.add(
    T(o0.x0 + 3.6, e, o0.z0, o0.x0 + 5, e + 13 * 0.17, o0.z1),
    s.concFloor,
    { chunk: "astair" },
  );
  for (const [g, A] of [
    ["+z", o0.z0],
    ["-z", o0.z1],
  ])
    o.add(r0(g, A, o0.x0, o0.x0 + 5, e, m.ceil), s.tileCream, {
      chunk: "astair",
    });
  (o.add(
    r0("-x", o0.x0 + 5, o0.z0, o0.z1, e + 13 * 0.17, m.ceil),
    s.paintHigh,
    { chunk: "astair" },
  ),
    o.add(T0(o0.x0, o0.z0, o0.x0 + 5, o0.z1, m.ceil, !1), s.ceil, {
      chunk: "astair",
    }));
  const M0 = o0.gateX,
    S0 = [];
  for (let g = o0.z0 + 0.05; g < o0.z1 - 0.02; g += 0.18)
    S0.push(j([M0, e + 0.02, g], [M0, e + 2.3, g], 0.009, 5));
  for (let g = o0.z0 + 0.05; g < o0.z1 - 0.2; g += 0.18)
    (S0.push(j([M0, e + 0.1, g], [M0, e + 2.2, g + 0.18], 0.006, 4)),
      S0.push(j([M0, e + 0.1, g + 0.18], [M0, e + 2.2, g], 0.006, 4)));
  (S0.push(j([M0, e + 2.32, o0.z0], [M0, e + 2.32, o0.z1], 0.03, 6)),
    o.add(q0(S0), s.steel, { chunk: "astair" }),
    o.add(
      T(
        M0 - 0.04,
        e + 1,
        (o0.z0 + o0.z1) / 2 - 0.04,
        M0 + 0.04,
        e + 1.1,
        (o0.z0 + o0.z1) / 2 + 0.04,
        0.01,
      ),
      s.galv,
      { chunk: "astair" },
    ),
    h.sign(
      "no_entry",
      [M0 - 0.03, e + 1.45, (o0.z0 + o0.z1) / 2 + 0.6],
      0.42,
      0.21,
      "-x",
      { depth: 0.01 },
    ),
    l.push({
      x0: M0 - 0.1,
      x1: M0 + 0.1,
      z0: o0.z0,
      z1: o0.z1,
      y0: e,
      y1: e + 2.4,
    }),
    l.push(
      { x0: u, x1: t.topX, z0: n - 0.3, z1: n, y0: e - 0.5, y1: t.topY + 3 },
      { x0: u, x1: t.topX, z0: r, z1: r + 0.3, y0: e - 0.5, y1: t.topY + 3 },
    ),
    l.push(
      { x0: t.topX, x1: y.x1, z0: y.z0 - 0.3, z1: y.z0, y0: e - 0.5, y1: v },
      { x0: t.topX, x1: y.x1, z0: y.z1, z1: y.z1 + 0.3, y0: e - 0.5, y1: v },
      { x0: y.x1, x1: y.x1 + 0.3, z0: y.z0, z1: y.z1, y0: e - 0.5, y1: v },
    ),
    l.push(
      { x0: t.topX - 0.3, x1: t.topX, z0: y.z0, z1: n, y0: e - 0.5, y1: v },
      { x0: t.topX - 0.3, x1: t.topX, z0: r, z1: y.z1, y0: e - 0.5, y1: v },
    ));
  const m0 = {
    stairs: [
      [y.x1 - 0.8, y.z0 + 0.9],
      [y.x1 - 1.2, y.z1 - 0.9],
      [y.x1 - 2.4, (y.z0 + y.z1) / 2],
      [k + 1, y.z0 + 1],
      [k + 1, y.z1 - 1],
      [t.topX + 1.2, (n + r) / 2 - 0.8],
      [t.landing[1] + 2.6, (n + r) / 2 + 0.7],
      [t.landing[1] + 1.4, (n + r) / 2 - 0.6],
      [u + 0.4, (n + r) / 2],
    ],
  };
  return {
    colliders: l,
    shutter: Z,
    gate: null,
    points: m0,
    stepAt: b,
    ceilAt: p,
  };
}
