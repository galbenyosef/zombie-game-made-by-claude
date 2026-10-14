// assets/living-DeOLLwnx 07 — part
// Lines 1729-2384 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
function me(a, t, r, e) {
  const o = new y0();
  ((o.name = "island"), r.add(o));
  const s = [],
    n = [],
    l = { x: 3.72, z: 17, w: 3.4, d: 2.8 };
  {
    const m = new _0(l.w, l.d, 85, 70);
    m.rotateX(-i0 / 2);
    const M = m.attributes.position;
    for (let A = 0; A < M.count; A++) {
      const D = M.getX(A),
        q = M.getZ(A),
        G = (D + 1.05) * 0.8 + (q + 0.55) * 0.6;
      let J =
          0.012 +
          0.03 *
            Math.exp((-G * G) / 0.02) *
            Math.max(0, Math.min(1, (0.2 - q) / 0.9)),
        E = D,
        U = q;
      const x = (0.42 - (D + l.w / 2 + (l.d / 2 - q))) / Math.SQRT2;
      if (x > 0) {
        let n0, c0;
        if (x <= Math.PI * 0.016) {
          const W = x / 0.016;
          ((n0 = 0.016 * Math.sin(W)), (c0 = 0.016 * (1 - Math.cos(W))));
        } else ((n0 = -(x - Math.PI * 0.016)), (c0 = 2 * 0.016));
        ((E = D + Math.SQRT1_2 * (x - n0)),
          (U = q - Math.SQRT1_2 * (x - n0)),
          (J = 0.012 + c0));
      }
      M.setXYZ(A, E + l.x, J, U + l.z);
    }
    m.computeVertexNormals();
    const v = m.attributes.uv;
    for (let A = 0; A < v.count; A++) v.setXY(A, v.getX(A) * 2, v.getY(A) * 2);
    const T = new u0(m, a.mats.get("rug_persian", { side: N0 }));
    ((T.receiveShadow = !0), (T.name = "rug"), o.add(T));
    const I = [];
    for (const A of [-1, 1]) {
      const D = l.x + A * (l.w / 2 + 0.002);
      for (let q = 0; q < 130; q++) {
        const G = l.z - l.d / 2 + 0.04 + (q / 129) * (l.d - 0.08);
        if (A < 0 && D - l.x + l.w / 2 + (l.d / 2 - (G - l.z)) < 0.5) continue;
        const J = 0.05 + e() * 0.03,
          E = (e() - 0.5) * 0.5,
          U = new X0(J, 0.003, 0.006);
        (U.translate(J / 2, 0.0035, 0),
          U.rotateY(E + (A < 0 ? i0 : 0)),
          U.translate(D, 0, G),
          I.push(U));
      }
    }
    for (const A of I) t.frame(new b0()).part(A, "linen_stained", { cast: !1 });
  }
  const p = { x: 4.83, z: 17, L: 2.1, D: 0.95 },
    d = F(p.x, 0, p.z, -i0 / 2);
  t.frame(d);
  const c = "upholstery_green",
    { L: u, D: b } = p;
  for (const [f, i] of [
    [-u / 2 + 0.09, b / 2 - 0.09],
    [u / 2 - 0.09, b / 2 - 0.09],
    [-u / 2 + 0.09, -b / 2 + 0.09],
    [u / 2 - 0.09, -b / 2 + 0.09],
  ])
    t.part(
      j(
        [
          [0.03, 0],
          [0.034, 0.02],
          [0.028, 0.05],
          [0.036, 0.075],
          [0.04, 0.1],
        ],
        16,
      ).translate(f, 0, i),
      "wood_walnut",
      { grain: "y", cast: !1 },
    );
  t.part(
    _(u - 0.02, 0.27, b - 0.04, {
      r: 0.04,
      m: 3,
      puff: [0.01, 0.004, 0.012],
      rng: e,
    }).translate(0, 0.235, 0),
    c,
    { grain: "x" },
  );
  for (const f of [-1, 1]) {
    t.part(
      _(0.2, 0.45, b - 0.03, {
        r: 0.05,
        m: 3,
        puff: [0.012, 0, 0.01],
        rng: e,
      }).translate(f * (u / 2 - 0.1), 0.325, 0),
      c,
      { grain: "y" },
    );
    const i = new et(0.105, b - 0.25, 6, 18);
    (i.rotateX(i0 / 2),
      i.translate(f * (u / 2 - 0.1) + f * 0.012, 0.565, 0.005),
      t.part(i, c, { grain: "z" }));
  }
  t.part(
    _(u - 0.36, 0.52, 0.22, {
      r: 0.06,
      m: 3,
      puff: [0, 0.015, 0.02],
      rng: e,
    }).translate(0, 0.62, -b / 2 + 0.11),
    c,
    { grain: "x" },
  );
  const k = (u - 0.4) / 3;
  for (let f = 0; f < 3; f++) {
    const i =
        f === 1
          ? { x: 0.02, z: 0.06, r: 0.16, d: 0.035 }
          : { x: (e() - 0.5) * 0.1, z: 0.05, r: 0.18, d: 0.012 },
      m = _(k - 0.012, 0.135, 0.7, {
        r: 0.05,
        m: 3,
        puff: [0.008, 0.026, 0.01],
        sag: i,
        lumps: 0.004,
        rng: e,
        res: 0.05,
      });
    t.part(m, c, {
      grain: "x",
      local: F(
        -k + f * k + (e() - 0.5) * 0.012,
        0.425,
        0.115 + (e() - 0.5) * 0.015,
        (e() - 0.5) * 0.03,
      ),
    });
  }
  for (let f = 0; f < 3; f++) {
    const i = _(k - 0.02, 0.46, 0.17, {
      r: 0.065,
      m: 3,
      puff: [0.008, 0.012, 0.035],
      lumps: 0.004,
      rng: e,
      res: 0.05,
    });
    t.part(i, c, {
      grain: "x",
      local: F(
        -k + f * k,
        0.72 - (f === 1 ? 0.025 : 0),
        -b / 2 + 0.3,
        (e() - 0.5) * 0.04,
        -0.2 - e() * 0.08,
        (e() - 0.5) * 0.04,
      ),
    });
  }
  t.part(
    _(0.4, 0.4, 0.13, {
      r: 0.07,
      m: 3,
      puff: [0.01, 0.01, 0.045],
      rng: e,
      res: 0.05,
    }),
    "velvet_red",
    { grain: "x", local: F(-u / 2 + 0.36, 0.66, -0.12, 0.5, -0.35, 0.25) },
  );
  {
    const T = u / 2 - 0.1 + 0.012,
      I = 0.565,
      A = 0.515,
      D = new _0(1.35, 0.86, 96, 52),
      q = D.attributes.position,
      G = D.attributes.uv,
      J = e() * 6.28,
      E = e() * 6.28;
    for (let o0 = 0; o0 < q.count; o0++) {
      const x = q.getX(o0) + 0.12,
        Y = q.getY(o0),
        n0 = (i0 / 2) * 0.124,
        c0 =
          Math.sin(Y * 17 + J + x * 2) * 0.7 +
          Math.sin(Y * 31 + x * 5 + E) * 0.3;
      let W,
        X,
        N = Y + 0.05;
      if (Math.abs(x) <= n0) {
        const K = x / 0.124;
        ((W = T + Math.sin(K) * (0.124 + 0.004)),
          (X = I + Math.cos(K) * (0.124 + 0.004)));
      } else if (x > 0) {
        const K = x - n0,
          r0 = Math.min(1, K / 0.25);
        ((W = T + 0.124 + 0.008 + K * 0.06 + c0 * 0.03 * r0),
          (X = I - K),
          X < 0.005 &&
            ((W += (0.005 - X) * 0.7), (X = 0.005 + Math.abs(c0) * 0.004)));
      } else {
        const K = -x - n0,
          r0 = Math.min(1, K / 0.1);
        if (((W = T - 0.124 - 0.008 - c0 * 0.012 * r0), (X = I - K), X < A)) {
          const m0 = A - X;
          ((X =
            A +
            0.008 +
            0.03 * Math.sin(m0 * 19 + J) ** 2 +
            Math.abs(c0) * 0.01),
            (W = T - 0.124 - 0.012 - m0 * 0.92),
            (N += Math.sin(m0 * 13 + Y * 4) * 0.015));
        }
      }
      (q.setXYZ(o0, W, X, N), G.setXY(o0, (x + 1.35 / 2) * 1, Y * 1));
    }
    D.computeVertexNormals();
    const U = a.mats.get("wool_grey", { side: N0, color: "#c09456", uv: 0.22 }),
      B = new u0(D, U);
    (B.applyMatrix4(d),
      (B.castShadow = !0),
      (B.receiveShadow = !0),
      (B.name = "throw"),
      o.add(B));
  }
  {
    const f = new C0({ map: ae(e), roughness: 0.8 }),
      i = new _0(0.44, 0.22, 8, 2);
    i.rotateX(-i0 / 2);
    const m = i.attributes.position;
    for (let T = 0; T < m.count; T++) {
      const I = m.getX(T);
      m.setY(
        T,
        0.012 +
          0.02 * (1 - Math.cos((Math.min(1, Math.abs(I) / 0.22) * i0) / 2)),
      );
    }
    i.computeVertexNormals();
    const M = new u0(i, f);
    M.receiveShadow = !0;
    const v = new y0();
    (v.add(M),
      (v.name = "album"),
      v.position.set(0.02, 0.476, 0.12),
      v.rotation.set(0.04, 0.35, 0.02),
      v.applyMatrix4(d),
      o.add(v),
      v.updateMatrixWorld(!0),
      t
        .frame(v.matrixWorld.clone())
        .part(
          _(0.46, 0.012, 0.235, { r: 0.004 }).translate(0, 0.006, 0),
          "leather_brown",
          { grain: "x" },
        ));
  }
  s.push({
    x0: p.x - b / 2,
    x1: p.x + b / 2,
    z0: p.z - u / 2,
    z1: p.z + u / 2,
    y0: 0,
    y1: 0.93,
  });
  const S = (f, i, m) => {
    const M = F(f, 0, i, m);
    t.frame(M);
    const v = "leather_brown";
    for (const [q, G] of [
      [-0.34, 0.34],
      [0.34, 0.34],
      [-0.34, -0.34],
      [0.34, -0.34],
    ])
      t.part(
        j(
          [
            [0.035, 0],
            [0.045, 0.025],
            [0.04, 0.055],
            [0.03, 0.07],
          ],
          14,
        ).translate(q, 0, G),
        "wood_walnut",
        { grain: "y", cast: !1 },
      );
    t.part(
      _(0.84, 0.31, 0.8, {
        r: 0.06,
        m: 3,
        puff: [0.012, 0.004, 0.012],
        rng: e,
      }).translate(0, 0.22, 0),
      v,
      { grain: "x" },
    );
    for (const q of [-1, 1])
      t.part(
        _(0.18, 0.32, 0.8, {
          r: 0.08,
          m: 3,
          puff: [0.014, 0.014, 0.006],
          rng: e,
          res: 0.05,
        }).translate(q * 0.33, 0.5, 0),
        v,
        { grain: "z" },
      );
    (t.part(
      _(0.84, 0.52, 0.2, {
        r: 0.085,
        m: 3,
        puff: [0.004, 0.012, 0.03],
        rng: e,
        res: 0.05,
      }),
      v,
      { grain: "x", local: F(0, 0.62, -0.31, 0, -0.1) },
    ),
      t.part(
        _(0.48, 0.12, 0.6, {
          r: 0.045,
          m: 3,
          puff: [0.006, 0.022, 0.006],
          sag: { x: 0, z: 0.05, r: 0.15, d: 0.02 },
          rng: e,
          res: 0.05,
        }),
        v,
        { grain: "x", local: F(0, 0.43, 0.07) },
      ));
    const T = Math.abs(Math.cos(m)),
      I = Math.abs(Math.sin(m)),
      A = 0.4 * T + 0.4 * I,
      D = 0.4 * I + 0.4 * T;
    s.push({
      x0: f - A + 0.06,
      x1: f + A - 0.06,
      z0: i - D + 0.06,
      z1: i + D - 0.06,
      y0: 0,
      y1: 0.85,
    });
  };
  (S(2.94, 16.15, -0.38), S(2.9, 17.88, i0 + 0.38));
  const h = { x: 3.52, z: 17, w: 1.2, d: 0.62, h: 0.44 };
  (t.frame(F(h.x, 0, h.z, i0 / 2)),
    t.part(
      _(h.w, 0.034, h.d, { r: 0.012, m: 3 }).translate(0, h.h - 0.017, 0),
      "wood_walnut",
      { grain: "x" },
    ));
  for (const f of [-1, 1])
    (t.part(
      _(h.w - 0.12, 0.06, 0.02, { r: 0.004 }).translate(
        0,
        h.h - 0.064,
        f * (h.d / 2 - 0.05),
      ),
      "wood_walnut",
      { grain: "x" },
    ),
      t.part(
        _(0.02, 0.06, h.d - 0.12, { r: 0.004 }).translate(
          f * (h.w / 2 - 0.05),
          h.h - 0.064,
          0,
        ),
        "wood_walnut",
        { grain: "z" },
      ));
  const y = [
    [0.02, 0],
    [0.024, 0.03],
    [0.018, 0.08],
    [0.022, 0.16],
    [0.028, 0.25],
    [0.02, 0.33],
    [0.024, 0.37],
    [0.026, 0.406],
  ];
  for (const [f, i] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    t.part(
      j(y, 16).translate(f * (h.w / 2 - 0.06), 0, i * (h.d / 2 - 0.06)),
      "wood_walnut",
      { grain: "y" },
    );
  t.part(
    _(h.w - 0.1, 0.018, h.d - 0.1, { r: 0.004 }).translate(0, 0.12, 0),
    "wood_walnut",
    { grain: "x" },
  );
  for (let f = 0; f < 4; f++)
    t.part(
      _(0.38, 0.006, 0.28, { r: 0.002 })
        .translate(0, 0.132 + f * 0.007, 0)
        .rotateY((e() - 0.5) * 0.3)
        .translate(-0.22 + f * 0.02, 0, 0.01),
      "paper_old",
      { grain: "x", cast: !1 },
    );
  s.push({
    x0: h.x - h.d / 2,
    x1: h.x + h.d / 2,
    z0: h.z - h.w / 2,
    z1: h.z + h.w / 2,
    y0: 0,
    y1: 0.46,
  });
  const C = h.h;
  {
    const f = new C0({ map: ee(e), roughness: 0.6 }),
      i = 0.34,
      m = 0.44,
      M = new _0(m, i);
    (M.rotateX(-i0 / 2),
      M.rotateY(i0 / 2),
      M.rotateY(0.04),
      M.translate(h.x - 0.06, C + 0.009, h.z + 0.02),
      t
        .frame(F(h.x - 0.06, C, h.z + 0.02, 0.04))
        .part(
          _(i + 0.02, 0.008, m + 0.02, { r: 0.002 }).translate(0, 0.004, 0),
          "wood_oak_pale",
          { grain: "z", cast: !1 },
        ));
    const v = [];
    for (let I = 0; I < 16; I++) {
      const A = new X0(0.028, 0.003, 0.036).toNonIndexed(),
        D = A.attributes.uv,
        q = e() * 0.9,
        G = e() * 0.9;
      for (let E = 0; E < D.count; E++)
        D.setXY(E, q + D.getX(E) * 0.08, G + D.getY(E) * 0.1);
      const J = I < 10 ? 1 : -1;
      (A.rotateY(e() * i0),
        I === 3 && A.rotateX(i0),
        A.translate(
          h.x + (J > 0 ? 0.17 + e() * 0.09 : -0.26 + e() * 0.05),
          C + 0.0015,
          h.z - 0.1 + e() * 0.45,
        ),
        v.push(A));
    }
    const T = new u0(F0([M, ...v]), f);
    ((T.name = "jigsaw"), (T.receiveShadow = !0), o.add(T));
  }
  {
    const f = h.x - 0.12,
      i = h.z + 0.45;
    (t.frame(F(f, C, i, 0.4)),
      t.part(
        j(
          [
            [0, 0],
            [0.07, 0],
            [0.074, 0.008],
            [0.068, 0.012],
            [0.03, 0.006],
            [0, 0.006],
          ],
          28,
          !1,
        ),
        "porcelain_cracked",
        { grain: "y", cast: !1 },
      ),
      t.part(
        j(
          [
            [0, 0.008],
            [0.025, 0.008],
            [0.03, 0.012],
            [0.042, 0.03],
            [0.046, 0.058],
            [0.043, 0.058],
            [0.039, 0.032],
            [0, 0.016],
          ],
          28,
          !1,
        ),
        "porcelain_cracked",
        { grain: "y", cast: !1 },
      ));
    const m = new at(0.016, 0.004, 6, 14, i0 * 1.2);
    (m.rotateZ(-i0 * 0.6),
      m.translate(0.048, 0.036, 0),
      t.part(m, "porcelain_cracked", { cast: !1 }));
    const M = new pt(0.041, 24);
    (M.rotateX(-i0 / 2),
      M.translate(0, 0.047, 0),
      t.part(M, a0(a, "#2a160a"), { cast: !1 }),
      t.part(
        new X0(0.004, 0.003, 0.09)
          .translate(0, 0.01, 0)
          .rotateY(0.9)
          .translate(0.02, 0, 0.05),
        I0(a, "#8a857a"),
        { cast: !1 },
      ),
      t.frame(F(h.x + 0.14, C, h.z + 0.42, -0.8)),
      t.part(
        j(
          [
            [0, 0],
            [0.05, 0],
            [0.075, 0.03],
            [0.082, 0.07],
            [0.07, 0.11],
            [0.04, 0.125],
            [0.035, 0.13],
            [0, 0.13],
          ],
          28,
        ),
        "porcelain_cracked",
        { grain: "y" },
      ),
      t.part(
        j(
          [
            [0.038, 0.128],
            [0.036, 0.14],
            [0.012, 0.152],
            [0.014, 0.165],
            [0, 0.17],
          ],
          20,
        ),
        "porcelain_cracked",
        { grain: "y", cast: !1 },
      ),
      t.part(
        T0(
          [
            [0.07, 0.05, 0],
            [0.1, 0.08, 0],
            [0.12, 0.12, 0],
            [0.135, 0.135, 0],
          ],
          0.009,
          10,
          8,
        ),
        "porcelain_cracked",
        { cast: !1 },
      ));
    const v = new at(0.04, 0.007, 8, 16, i0 * 1.1);
    (v.rotateZ(i0 * 0.45),
      v.translate(-0.075, 0.075, 0),
      t.part(v, "porcelain_cracked", { cast: !1 }));
  }
  {
    (t.frame(F(h.x + 0.17, C, h.z - 0.18, 0)),
      t.part(
        j(
          [
            [0, 0],
            [0.075, 0],
            [0.08, 0.008],
            [0.072, 0.012],
            [0, 0.006],
          ],
          24,
          !1,
        ),
        "brass_aged",
        { grain: "y", cast: !1 },
      ));
    const f = [
      [-0.03, -0.02, 0.09],
      [0.035, 0, 0.055],
      [0, 0.04, 0.035],
    ];
    for (const [i, m, M] of f) {
      t.part(
        j(
          [
            [0.022 + 0.006, 0.006],
            [0.022 + 0.002, 0.012],
            [0.022, 0.02],
            [0.022, M - 0.01],
            [0.022 + 0.001, M - 0.004],
            [0.022 * 0.7, M - 0.006],
            [0.022 * 0.3, M - 0.012],
            [0, M - 0.012],
          ],
          18,
          !0,
        ).translate(i, 0, m),
        "wax_candle",
        { grain: "y", cast: !1 },
      );
      for (let T = 0; T < 4; T++) {
        const I = e() * i0 * 2,
          A = 0.02 + e() * 0.03;
        t.part(
          new et(0.004, A, 3, 6).translate(
            i + Math.cos(I) * 0.022,
            M - 0.012 - A / 2,
            m + Math.sin(I) * 0.022,
          ),
          "wax_candle",
          { cast: !1 },
        );
      }
      t.part(
        new Z0(0.0012, 0.0012, 0.012, 5).translate(i, M - 0.006, m),
        a0(a, "#0a0908"),
        { cast: !1 },
      );
    }
  }
  const z = ge(
    a,
    o,
    t,
    e,
    [h.x + 0.1, C, h.z - 0.4],
    [h.x + 0.03, C - 0.2, h.z - h.w / 2 - 0.035],
  );
  n.push(z.anim);
  const w = be(a, o, t, [5.43, 0, 18.21]);
  return (
    n.push(w.anim),
    s.push({
      x0: 5.43 - 0.16,
      x1: 5.43 + 0.16,
      z0: 18.21 - 0.16,
      z1: 18.21 + 0.16,
      y0: 0,
      y1: 1.6,
    }),
    {
      group: o,
      colliders: s,
      anim: n,
      phone: z.api,
      lamp: w.api,
      sofa: { x: p.x, z: p.z },
      table: h,
    }
  );
}
