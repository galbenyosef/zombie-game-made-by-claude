// assets/bedroom-Se-_w21f 16 — add
// Lines 3707-4130 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
function buildDresser(N, t) {
  const w = new u0();
  w.name = "dresser";
  const e = new M0("dresser"),
    o = t.walnut,
    M = nt(31);
  (N.rng(515),
    e.add(
      R(
        L0 - 0.012,
        c0 - 0.026,
        kt - 0.01,
        O0 + 0.012,
        c0 - 0.008,
        ht + 0.018,
        0.008,
        "x",
      ),
      o,
    ),
    e.add(
      R(
        L0 - 0.004,
        c0 - 0.009,
        kt - 0.004,
        O0 + 0.004,
        c0,
        ht + 0.01,
        0.005,
        "x",
      ),
      o,
    ),
    e.add(R(L0, 0.11, kt, O0, c0 - 0.026, ht, 0.006, "y"), o),
    e.add(
      R(L0 - 0.01, 0.085, kt, O0 + 0.01, 0.115, ht + 0.012, 0.006, "x"),
      o,
    ));
  for (const I of [L0 + 0.04, O0 - 0.04])
    for (const Z of [kt + 0.05, ht - 0.03])
      e.add(
        E(
          [
            [0, 0],
            [0.024, 0],
            [0.034, 0.025],
            [0.034, 0.05],
            [0.026, 0.075],
            [0.022, 0.085],
            [0, 0.085],
          ],
          I,
          0,
          Z,
          { segs: 16, tile: 0.8 },
        ),
        o,
      );
  const s = ht,
    h = (I, Z, j, T, d) => {
      (e.add(
        R(
          I + 0.003,
          j + 0.003,
          s - 0.004,
          Z - 0.003,
          T - 0.003,
          s + 0.016,
          0.005,
          "x",
        ),
        o,
      ),
        e.add(
          R(
            I + 0.02,
            j + 0.02,
            s + 0.012,
            Z - 0.02,
            T - 0.02,
            s + 0.02,
            0.006,
            "x",
          ),
          o,
        ));
      for (const K of d) Re(e, t, K, (j + T) / 2 + 0.01, s + 0.02);
      e.add(
        R(
          (I + Z) / 2 - 0.01,
          (j + T) / 2 - 0.035,
          s + 0.019,
          (I + Z) / 2 + 0.01,
          (j + T) / 2 - 0.012,
          s + 0.022,
          0.002,
        ),
        t.brass,
      );
    },
    i = (L0 + O0) / 2;
  (h(L0 + 0.02, i - 0.004, 0.64, c0 - 0.035, [(L0 + i) / 2]),
    h(i + 0.004, O0 - 0.02, 0.64, c0 - 0.035, [(i + O0) / 2]),
    h(L0 + 0.02, O0 - 0.02, 0.4, 0.635, [L0 + 0.25, O0 - 0.25]),
    h(L0 + 0.02, O0 - 0.02, 0.125, 0.395, [L0 + 0.25, O0 - 0.25]));
  const z = 0.105,
    D = 4.25,
    C = 4.99,
    V = 0.93,
    A = 1.95,
    x = 0.05,
    k = 0.028;
  for (const I of [D - 0.035, C + 0.035])
    (e.add(
      R(I - 0.022, c0, z - 0.07, I + 0.022, c0 + 0.04, z + 0.07, 0.006, "z"),
      o,
    ),
      e.add(
        E(
          [
            [0, 0],
            [0.018, 0],
            [0.02, 0.03],
            [0.014, 0.06],
            [0.016, 0.2],
            [0.02, 0.26],
            [0.014, 0.32],
            [0.015, 0.5],
            [0.02, 0.55],
            [0.012, 0.6],
            [0.018, 0.64],
            [0.02, 0.66],
            [0.01, 0.7],
            [0, 0.705],
          ],
          I,
          c0 + 0.04,
          z,
          { segs: 16, tile: 0.8 },
        ),
        o,
      ),
      e.add(
        E(
          [
            [0, 0],
            [0.01, 0],
            [0.012, 0.006],
            [0, 0.012],
          ],
          0,
          0,
          0,
          { segs: 12, rot: [0, 0, Math.PI / 2] },
        ).translate(I + (I < 4.6 ? 0.02 : -0.02), c0 + 0.52, z),
        t.brass,
      ));
  const _ = [
      [0, 0],
      [0.004, 0],
      [0.006, 0.012],
      [0.014, 0.018],
      [0.026, 0.022],
      [0.04, 0.02],
      [0.048, 0.012],
      [0.05, 0],
      [0.05, -k + 0.004],
      [0, -k + 0.004],
    ].reverse(),
    y = z + k / 2,
    L = (I, Z, j) =>
      e.add(Q0(_, I, Z, j, [0, 0, 1], { mitreA: 1, mitreB: 1 }), o);
  (L([D + x, A - x, y], [C - x, A - x, y], [0, 1, 0]),
    L([C - x, V + x, y], [D + x, V + x, y], [0, -1, 0]),
    L([D + x, V + x, y], [D + x, A - x, y], [-1, 0, 0]),
    L([C - x, A - x, y], [C - x, V + x, y], [1, 0, 0]),
    e.add(
      R(
        D + 0.01,
        V + 0.01,
        z - k / 2 - 0.004,
        C - 0.01,
        A - 0.01,
        z - k / 2 + 0.004,
        0.003,
        "y",
      ),
      o,
    ));
  const W = new r0(
    new ut(C - D - 2 * x + 0.01, A - V - 2 * x + 0.01),
    t.mirrorGlass,
  );
  (W.position.set((D + C) / 2, (V + A) / 2, y - 0.01),
    (W.name = "mirror:glass"),
    (W.receiveShadow = !0));
  const X = D - 0.025,
    F = C + 0.025,
    G = A + 0.012,
    m = y + 0.03,
    S = 0.44,
    u = (I) => G - (I < S ? 0.21 * Math.pow(g0(0, 1, (S - I) / S), 1.15) : 0),
    c = (I) =>
      c0 +
      0.075 +
      0.035 * Math.sin(I * 9.1 + 1) +
      0.02 * M.n2(I * 11, 3) +
      0.05 * (1 - I) * 0.6,
    g = bt(
      (I, Z) => {
        const j = X + (F - X) * I,
          T = u(I),
          d = c(I),
          K = T - Z * (T - d),
          f = (1 - I) * 0.9,
          U = I * 34 + Z * f * 6 + M.n2(I * 6, Z * 2) * 1.4,
          O =
            (0.004 + 0.016 * Z) * Math.sin(U) + 0.006 * Z * M.n2(I * 14, Z * 5),
          l =
            0.012 *
            Math.sin(Math.PI * I) *
            Math.sin(Math.PI * Math.min(1, Z * 1.2)),
          a = I < S ? 0.004 * (1 - Z) : 0;
        return [j + 0.008 * Z * Math.sin(I * 5), K, m - 0.02 + O + l - a];
      },
      70,
      60,
      F - X,
      1,
      !1,
      !1,
    );
  ne(g, "z", 1);
  const b = bt(
    (I, Z) => {
      const j = S - 0.02 + (1 - S + 0.02) * I,
        T = X + (F - X) * j,
        d = 0.022,
        K = z,
        f = A - 0.004,
        U = Math.PI * d,
        O = U + 0.34,
        l = Z * O;
      let a, r;
      if (l < U) {
        const n = l / d;
        ((r = K + (m - 0.02 - K) * Math.cos(n) * 1.05),
          (a = f + 0.012 + d * Math.sin(n) * 0.9));
      } else ((r = K - (m - 0.02 - K) - 0.004), (a = f + 0.012 - (l - U)));
      return [T, a, r + 0.004 * M.n2(j * 20, Z * 4)];
    },
    50,
    24,
    1,
    1,
    !1,
    !1,
  );
  ne(b, "y", 1, !0);
  const p = new r0(Ue(g, b), t.cloth);
  ((p.name = "mirror:cloth"), (p.castShadow = !0), (p.receiveShadow = !0));
  {
    const I = mt([4.36, c0 + 0.022, 0.33], [0, 0.5, 0]),
      Z = new $0(1, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2);
    (Z.scale(0.045, 0.018, 0.065), Z.applyMatrix4(I), e.add(Z, t.ebony));
    const j = R(-0.011, -0.004, 0.06, 0.011, 0.01, 0.17, 0.005, "z");
    (j.applyMatrix4(I), e.add(j, t.ebony));
    const T = new Vt(1, 1, 1, 24);
    (T.scale(0.042, 0.02, 0.062),
      T.translate(0, -0.01, 0),
      T.applyMatrix4(I),
      e.add(T, t.bristle));
    const d = [];
    for (let K = 0; K < 14; K++) {
      const f = K / 13;
      d.push(
        new w0(
          Math.sin(f * 9) * 0.03,
          -0.012 - 0.008 * f,
          -0.05 + f * 0.12 + Math.cos(f * 7) * 0.01,
        )
          .applyMatrix4(I)
          .toArray(),
      );
    }
    e.add(h0(d, 6e-4, 40, 3), t.greyHair, { cast: !1 });
  }
  {
    e.add(
      R(
        4.92 - 0.085,
        c0,
        0.3 - 0.055,
        4.92 + 0.085,
        c0 + 0.07,
        0.3 + 0.055,
        0.004,
        "x",
      ),
      o,
    );
    const j = R(-0.087, 0, -0.112, 0.087, 0.022, 0, 0.005, "x");
    (j.applyMatrix4(mt([4.92, c0 + 0.07, 0.3 + 0.056], [0.42, 0, 0])),
      e.add(j, o));
    for (const d of [-1, 1])
      for (const K of [-1, 1])
        e.add(
          R(
            4.92 + d * 0.085 - 0.006,
            c0,
            0.3 + K * 0.055 - 0.006,
            4.92 + d * 0.085 + 0.006,
            c0 + 0.012,
            0.3 + K * 0.055 + 0.006,
            0.002,
          ),
          t.brass,
        );
    e.add(
      R(
        4.92 - 0.075,
        c0 + 0.066,
        0.3 - 0.045,
        4.92 + 0.075,
        c0 + 0.069,
        0.3 + 0.045,
        0.001,
      ),
      t.feltRed,
    );
    const T = [];
    for (let d = 0; d <= 22; d++) {
      const K = d / 22;
      T.push([
        4.92 - 0.04 + K * 0.02 - Math.sin(K * 3) * 0.02,
        c0 + 0.068 - g0(0.25, 0.55, K) * 0.068 + 0.004,
        0.3 - 0.05 - g0(0.2, 1, K) * 0.07 + Math.sin(K * 8) * 0.012,
      ]);
    }
    for (let d = 0; d < T.length; d++)
      e.add(
        J0(T[d][0], Math.max(c0 + 0.004, T[d][1]), T[d][2], 0.0042, 8, 6),
        t.pearl,
      );
  }
  {
    const j = new r0(
      E(
        [
          [0, 0],
          [0.028, 0],
          [0.032, 0.008],
          [0.032, 0.05],
          [0.02, 0.07],
          [0.008, 0.075],
          [0.008, 0.085],
          [0, 0.085],
        ],
        4.7,
        c0,
        0.2,
        { segs: 8 },
      ),
      t.glassPink,
    );
    ((j.name = "perfume"),
      (j.renderOrder = 3),
      w.add(j),
      e.add(
        E(
          [
            [0, 0],
            [0.009, 0],
            [0.01, 0.012],
            [0, 0.014],
          ],
          4.7,
          c0 + 0.083,
          0.2,
          { segs: 12 },
        ),
        t.brass,
      ),
      e.add(
        h0(
          [
            [4.7 + 0.008, c0 + 0.09, 0.2],
            [4.7 + 0.04, c0 + 0.085, 0.2 + 0.01],
            [4.7 + 0.06, c0 + 0.05, 0.2 + 0.02],
          ],
          0.0025,
          12,
          5,
        ),
        t.cord,
      ),
      e.add(
        J0(4.7 + 0.066, c0 + 0.028, 0.2 + 0.024, 0.016, 12, 10, [1, 1.3, 1]),
        t.feltRed,
      ));
  }
  e.flush(w);
  const v = new u0();
  return (
    (v.name = "mirror"),
    v.add(W, p),
    w.add(v),
    N.scene.add(w),
    {
      group: w,
      mirror: Object.assign(v, { cloth: p, glass: W }),
      colliders: [
        {
          x0: L0 - 0.015,
          x1: O0 + 0.015,
          z0: 0,
          z1: ht + 0.03,
          y0: 0,
          y1: 1.98,
        },
      ],
    }
  );
}
