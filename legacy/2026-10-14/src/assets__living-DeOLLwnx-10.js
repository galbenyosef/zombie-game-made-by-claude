// assets__living-DeOLLwnx 10 — part
// Lines 2838-3185 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
function ye(a, t, r, e) {
  const o = new y0();
  ((o.name = "dining"), r.add(o));
  const s = [],
    n = { x: 9.9, z: 19.15, w: 1.6, d: 0.9, h: 0.76 };
  (t.frame(F(n.x, 0, n.z, 0)),
    t.part(
      _(n.w, 0.035, n.d, { r: 0.012, m: 3 }).translate(0, n.h - 0.0175, 0),
      "wood_walnut",
      { grain: "x" },
    ));
  for (const f of [-1, 1])
    (t.part(
      _(n.w - 0.2, 0.1, 0.022, { r: 0.004 }).translate(
        0,
        n.h - 0.085,
        f * (n.d / 2 - 0.08),
      ),
      "wood_walnut",
      { grain: "x" },
    ),
      t.part(
        _(0.022, 0.1, n.d - 0.2, { r: 0.004 }).translate(
          f * (n.w / 2 - 0.08),
          n.h - 0.085,
          0,
        ),
        "wood_walnut",
        { grain: "z" },
      ));
  const l = [
    [0.028, 0],
    [0.034, 0.03],
    [0.026, 0.07],
    [0.03, 0.14],
    [0.05, 0.26],
    [0.052, 0.34],
    [0.034, 0.44],
    [0.028, 0.52],
    [0.036, 0.58],
    [0.034, n.h - 0.035],
  ];
  for (const [f, i] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    t.part(
      j(l, 18).translate(f * (n.w / 2 - 0.09), 0, i * (n.d / 2 - 0.09)),
      "wood_walnut",
      { grain: "y" },
    );
  {
    const f = $t(n.w / 2, n.d / 2, 0.27, n.h + 0.002, {
      rng: e,
      fold: 0.014,
      pull: { x: -1, z: 0.1, r: 0.55, d: 0.07 },
    });
    f.translate(n.x + 0.02, 0, n.z);
    const i = new u0(f, a.mats.get("linen_stained", { side: N0 })),
      m = f.attributes.uv,
      M = f.attributes.position;
    for (let v = 0; v < m.count; v++)
      m.setXY(v, M.getX(v) * 1, M.getZ(v) * 1 + M.getY(v) * 0.6);
    ((i.castShadow = !0),
      (i.receiveShadow = !0),
      (i.name = "tablecloth"),
      o.add(i));
  }
  const p = n.h + 0.004,
    d = [
      [-0.4, -0.3, 0],
      [0.4, -0.3, 0],
      [-0.4, 0.3, A0],
      [0.4, 0.3, A0],
      [-0.68, 0, A0 / 2],
      [0.68, 0, -A0 / 2],
    ],
    c = "porcelain_cracked",
    u = I0(a, "#9d978a"),
    b = ot(),
    k = a0(a, "#5a2c18"),
    S = a0(a, "#4e5030"),
    h = a0(a, "#8a7650");
  (d.forEach(([f, i, m], M) => {
    if (
      (t.frame(F(n.x + f, p, n.z + i, m + A0)),
      t.part(
        j(
          [
            [0, 0],
            [0.09, 0],
            [0.13, 0.012],
            [0.135, 0.016],
            [0.12, 0.014],
            [0.07, 0.006],
            [0, 0.006],
          ],
          32,
          !1,
        ),
        c,
        { grain: "y", cast: !1 },
      ),
      M !== 5)
    ) {
      (t.part(
        _(0.12, 0.035, 0.09, {
          r: 0.02,
          m: 3,
          puff: [0.01, 0.012, 0.01],
          lumps: 0.006,
          rng: e,
          res: 0.03,
        }).translate(0.01, 0.024, -0.01),
        k,
        { grain: "x", cast: !1 },
      ),
        t.part(
          _(0.06, 0.018, 0.05, {
            r: 0.012,
            m: 2,
            puff: [0.006, 0.006, 0.006],
            rng: e,
            res: 0.03,
          }).translate(-0.05, 0.016, 0.045),
          S,
          { grain: "x", cast: !1 },
        ));
      for (let T = 0; T < 2; T++)
        t.part(
          new D0(0.018, 8, 6)
            .scale(1, 0.7, 1)
            .translate(0.05 + T * 0.03, 0.018, 0.045 - T * 0.02),
          h,
          { cast: !1 },
        );
    }
    (t.part(new X0(0.012, 0.003, 0.2).translate(0.17, 0.0015, 0), u, {
      cast: !1,
    }),
      t.part(new X0(0.014, 0.003, 0.19).translate(-0.17, 0.0015, 0), u, {
        cast: !1,
      }),
      t.part(
        _(0.12, 0.012, 0.16, { r: 0.004 }).translate(-0.24, 0.006, 0.02),
        "linen_stained",
        { grain: "x", cast: !1 },
      ));
    const v = j(
      [
        [0, 0],
        [0.035, 0],
        [0.036, 0.004],
        [0.004, 0.01],
        [0.004, 0.09],
        [0.03, 0.12],
        [0.036, 0.16],
        [0.034, 0.19],
      ],
      18,
      !1,
    );
    (M === 1
      ? (v.rotateZ(A0 / 2), v.translate(0.2, 0.035, -0.2))
      : v.translate(0.16, 0, -0.17),
      t.part(v, b, { grain: "y", cast: !1 }));
  }),
    t.frame(F(n.x - 0.12, p, n.z, 0.2)),
    t.part(
      j(
        [
          [0, 0],
          [0.16, 0],
          [0.2, 0.014],
          [0.205, 0.02],
          [0.17, 0.016],
          [0, 0.01],
        ],
        32,
        !1,
      ).scale(1.3, 1, 0.8),
      c,
      { grain: "y", cast: !1 },
    ),
    t.part(
      _(0.24, 0.1, 0.15, {
        r: 0.05,
        m: 3,
        puff: [0.02, 0.03, 0.02],
        lumps: 0.012,
        rng: e,
        res: 0.03,
      }).translate(0, 0.065, 0),
      a0(a, "#5a2c18"),
      { grain: "x" },
    ),
    t.frame(F(n.x + 0.28, p, n.z - 0.02, 0.4)));
  const y = "brass_aged";
  t.part(
    j(
      [
        [0, 0],
        [0.08, 0],
        [0.082, 0.012],
        [0.05, 0.03],
        [0.02, 0.05],
        [0.014, 0.12],
        [0.022, 0.15],
        [0.012, 0.3],
        [0.02, 0.32],
        [0.014, 0.34],
      ],
      24,
    ),
    y,
    { grain: "y" },
  );
  const C = (f, i, m) => {
    t.part(
      j(
        [
          [0.006, 0],
          [0.02, 0.005],
          [0.024, 0.02],
          [0.022, 0.03],
        ],
        14,
      ).translate(f, i, m),
      y,
      { cast: !1 },
    );
  };
  C(0, 0.34, 0);
  for (const f of [-1, 1])
    (t.part(
      T0(
        [
          [0, 0.24, 0],
          [f * 0.08, 0.2, 0],
          [f * 0.15, 0.25, 0],
          [f * 0.16, 0.3, 0],
        ],
        0.006,
        16,
        6,
      ),
      y,
      { cast: !1 },
    ),
      C(f * 0.16, 0.3, 0));
  const z = (f, i, m, M) => {
    t.part(
      j(
        [
          [0.012, 0],
          [0.012, M - 0.008],
          [0.009, M - 0.004],
          [0, M - 0.006],
        ],
        12,
      ).translate(f, i + 0.02, m),
      "wax_candle",
      { grain: "y", cast: !1 },
    );
    for (let v = 0; v < 3; v++) {
      const T = e() * A0 * 2,
        I = 0.02 + e() * 0.04;
      t.part(
        new et(0.003, I, 3, 5).translate(
          f + Math.cos(T) * 0.012,
          i + 0.02 + M - I / 2 - 0.01,
          m + Math.sin(T) * 0.012,
        ),
        "wax_candle",
        { cast: !1 },
      );
    }
    t.part(
      new Z0(0.001, 0.001, 0.01, 4).translate(f, i + 0.02 + M - 0.002, m),
      a0(a, "#0a0908"),
      { cast: !1 },
    );
  };
  (z(0, 0.34, 0, 0.07),
    z(-0.16, 0.3, 0, 0.05),
    z(0.16, 0.3, 0, 0.11),
    t.frame(F(n.x + 0.22, p, n.z + 0.07, 1.1)),
    t.part(
      j(
        [
          [0, 0],
          [0.036, 0],
          [0.038, 0.2],
          [0.03, 0.23],
          [0.013, 0.26],
          [0.013, 0.31],
          [0.016, 0.315],
          [0, 0.315],
        ],
        18,
      )
        .rotateZ(A0 / 2)
        .translate(0.15, 0.037, 0),
      a0(a, "#0e1a12"),
      { grain: "y", cast: !1 },
    ),
    s.push({
      x0: n.x - n.w / 2 - 0.02,
      x1: n.x + n.w / 2 + 0.02,
      z0: n.z - n.d / 2 - 0.02,
      z1: n.z + n.d / 2 + 0.02,
      y0: 0,
      y1: 0.8,
    }));
  const w = (f, i) => {
    (t.frame(f), Ct(t, e), i && s.push(i));
  };
  (w(F(9.5, 0, 18.45, 0), {
    x0: 9.27,
    x1: 9.73,
    z0: 18.22,
    z1: 18.68,
    y0: 0,
    y1: 0.95,
  }),
    w(F(10.3, 0, 19.86, A0 + 0.06), {
      x0: 10.07,
      x1: 10.53,
      z0: 19.63,
      z1: 20.12,
      y0: 0,
      y1: 0.95,
    }));
  {
    const f = new b0().multiplyMatrices(
      F(8.98, 0.018, 19.02, A0 / 2 + 0.25),
      new b0().multiplyMatrices(F(0, 0, 0, 0, -A0 / 2 + 0.07), F(0, 0, 0.2)),
    );
    w(f, { x0: 8.05, x1: 9.2, z0: 18.72, z1: 19.35, y0: 0, y1: 0.5 });
  }
  return {
    group: o,
    colliders: s,
    table: { x: n.x, z: n.z, w: n.w, d: n.d, h: n.h },
  };
}
