// assets/living-DeOLLwnx 12 — part
// Lines 3338-4064 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
function we(a, t, r, e) {
  const o = new y0();
  ((o.name = "walls"), r.add(o));
  const s = [],
    n = [],
    l = {},
    p = [],
    d = new gt(1024),
    c = new gt(2048),
    u = [],
    b = [],
    k = (h, y, C, z, w, f, i = {}) =>
      u.push({
        cell: d.add(y, C, h),
        at: z,
        size: w,
        kind: f,
        rot: i.rot || 0,
        m: i.m || null,
      }),
    S = (h, y, C, z, w, f, i, m = {}) =>
      b.push({ cell: c.add(y, C, h), m: Me(a, t, z, w, f, i, m), w: f, h: i });
  {
    const w = g0.north + 0.06,
      f = F(7.62, 0, w + 0.34 / 2, 0);
    t.frame(f);
    const i = It(t, e, 0.9, 2.05, 0.34);
    i.forEach((m, M) => {
      if (M === i.length - 1) return;
      const v = At(
        e,
        -0.9 / 2 + 0.03,
        0.9 / 2 - 0.03,
        m + 0.011,
        0.34 - 0.04,
        0.34 / 2 - 0.01,
        { gap: M === 2 || M === 1, hMin: M === 0 ? 0.26 : 0.19 },
      );
      for (const T of v) (T.applyMatrix4(f), p.push(T));
    });
    for (let m = 0; m < 3; m++) {
      const M = B0(0.04, 0.24, 0.17, (e() * 10) | 0);
      (M.rotateZ(e0 / 2),
        M.translate(-0.2 + e() * 0.05, 2.05 + 0.02 + m * 0.04, 0),
        M.rotateY((e() - 0.5) * 0.2),
        M.applyMatrix4(f),
        p.push(M));
    }
    s.push({
      x0: 7.62 - 0.9 / 2 - 0.03,
      x1: 7.62 + 0.9 / 2 + 0.03,
      z0: g0.north,
      z1: w + 0.34 + 0.03,
      y0: 0,
      y1: 2.05,
    });
    for (let m = 0; m < 5; m++) {
      const M = B0(
        0.03 + e() * 0.02,
        0.2 + e() * 0.06,
        0.15 + e() * 0.03,
        (e() * 10) | 0,
      );
      (M.rotateZ(e0 / 2),
        M.rotateY(e() * e0),
        M.translate(
          8.4 + e() * 0.8,
          0.018 + (m === 3 ? 0.035 : 0),
          14.05 + e() * 0.35,
        ),
        p.push(M));
    }
  }
  (k(
    W0(oe(e, 256, 256, !0), "#c4b484", 0.5),
    256,
    256,
    [8.66, 1.62, g0.north + 0.0035],
    [0.92, 1.02],
    "wall_n",
  ),
    k(
      W0(ne(e, 1e3, 250), "#d8c29a", 0.34),
      1e3,
      250,
      [9.95, 0.0025, 15.45],
      [3.9, 0.85],
      "floor",
      { rot: -Math.atan2(16.8 - 14.1, 11.2 - 8.7) },
    ));
  for (let h = 0; h < 6; h++) {
    const y = B0(
      0.025 + e() * 0.02,
      0.19 + e() * 0.06,
      0.14 + e() * 0.04,
      (e() * 10) | 0,
    );
    (h === 2 ? (y.rotateX(-1.2), y.translate(0, 0.07, 0)) : y.rotateZ(e0 / 2),
      y.rotateY(e() * e0 * 2),
      y.translate(
        10.85 + e() * 0.3,
        0.017 + (h === 4 ? 0.03 : 0),
        15.95 + e() * 0.9,
      ),
      p.push(y));
  }
  {
    const w = g0.north + 0.035,
      f = F(10.28, 0, w + 0.5 / 2, 0);
    (t.frame(f), Gt(t, e, 1.6, 0.88, 0.5));
    const i = new b0().multiplyMatrices(f, F(-0.28, 0.88, 0, 0.12)),
      m = t;
    (m.frame(i),
      m.part(
        _(0.42, 0.11, 0.34, { r: 0.012 }).translate(0, 0.055, 0),
        "leather_brown",
        { grain: "x" },
      ),
      m.part(
        _(0.39, 0.012, 0.31, { r: 0.003 }).translate(0, 0.106, 0),
        a0(a, "#2a2622"),
        { grain: "x", cast: !1 },
      ),
      m.part(_(0.42, 0.05, 0.34, { r: 0.012 }), "leather_brown", {
        grain: "x",
        local: F(0, 0.13, -0.17, 0, -1.9).multiply(F(0, 0, 0.17)),
      }),
      m.part(
        T0(
          [
            [0.15, 0.13, -0.1],
            [0.155, 0.135, 0.02],
            [0.1, 0.13, 0.09],
          ],
          0.004,
          8,
          6,
        ),
        I0(a, "#b0aa9c"),
        { cast: !1 },
      ),
      m.part(
        new Z0(0.012, 0.014, 0.02, 12).translate(0.15, 0.12, -0.1),
        I0(a, "#b0aa9c"),
        { cast: !1 },
      ));
    const M = new y0();
    (M.position.set(-0.04, 0.113, 0),
      M.applyMatrix4(i),
      (M.name = "record_player"));
    const v = new u0(
      new Z0(0.15, 0.15, 0.003, 48),
      new C0({ map: se(), roughness: 0.28 }),
    );
    {
      const A = v.geometry.attributes.uv,
        D = v.geometry.attributes.position;
      for (let q = 0; q < A.count; q++)
        A.setXY(q, 0.5 + D.getX(q) / 0.3, 0.5 - D.getZ(q) / 0.3);
    }
    (M.add(v), o.add(M));
    let T = 0;
    ((l.recordPlayer = {
      group: M,
      setSpinning(A) {
        T = A ? 1 : 0;
      },
      pos: [10.28 - 0.28, 0.88 + 0.15, w + 0.5 / 2],
    }),
      n.push((A) => {
        T && (M.rotation.y -= A * 3.49);
      }),
      t.frame(f));
    const I = ot();
    (t.part(
      j(
        [
          [0, 0],
          [0.055, 0],
          [0.07, 0.05],
          [0.07, 0.14],
          [0.03, 0.2],
          [0.02, 0.26],
          [0.026, 0.27],
        ],
        20,
        !1,
      ).translate(0.42, 0.88, 0.02),
      I,
      { grain: "y", cast: !1 },
    ),
      t.part(
        j(
          [
            [0, 0],
            [0.066, 0],
            [0.066, 0.06],
            [0, 0.06],
          ],
          20,
        ).translate(0.42, 0.88 + 0.004, 0.02),
        a0(a, "#3a1606"),
        { cast: !1 },
      ),
      t.part(
        j(
          [
            [0, 0.2],
            [0.02, 0.2],
            [0.03, 0.235],
            [0.012, 0.26],
            [0, 0.26],
          ],
          12,
        ).translate(0.42, 0.88 + 0.02, 0.02),
        I,
        { cast: !1 },
      ),
      t.part(
        j(
          [
            [0, 0],
            [0.03, 0],
            [0.034, 0.08],
            [0, 0.08],
          ],
          16,
          !1,
        ).translate(0.57, 0.88, 0.1),
        I,
        { cast: !1 },
      ));
    for (let A = 0; A < 5; A++)
      t.part(
        new X0(0.16, 0.003, 0.1)
          .translate(0, 0, 0)
          .rotateY((e() - 0.5) * 0.4)
          .translate(0.15, 0.88 + 0.0015 + A * 0.003, 0.08),
        "paper_old",
        { cast: !1 },
      );
    s.push({
      x0: 10.28 - 1.6 / 2 - 0.02,
      x1: 10.28 + 1.6 / 2 + 0.02,
      z0: g0.north,
      z1: w + 0.5 + 0.02,
      y0: 0,
      y1: 0.88,
    });
  }
  S(xt(e, !0), 480, 600, [10.28, 1.93, g0.north], 0, 0.62, 0.78, { tilt: 0 });
  {
    const y = F(g0.east, 0, 14.9, -e0 / 2);
    t.frame(y);
    const C = "wood_painted_white";
    for (const i of [-1, 1])
      (t.part(
        _(0.2, 1.08, 0.26, { r: 0.008 }).translate(
          i * 0.6,
          0.54 + 0.04,
          0.03 + 0.13,
        ),
        C,
        { grain: "y" },
      ),
        t.part(
          _(0.24, 0.1, 0.3, { r: 0.008 }).translate(
            i * 0.6,
            0.05 + 0.04,
            0.03 + 0.15,
          ),
          C,
          { grain: "x" },
        ),
        t.part(
          _(0.24, 0.06, 0.3, { r: 0.008 }).translate(i * 0.6, 1.1, 0.03 + 0.15),
          C,
          { grain: "x" },
        ));
    (t.part(
      _(1.4, 0.22, 0.26, { r: 0.008 }).translate(0, 1.07, 0.03 + 0.13),
      C,
      { grain: "x" },
    ),
      t.part(
        _(1.6, 0.05, 0.38, { r: 0.012, m: 3 }).translate(0, 1.205, 0.03 + 0.19),
        C,
        { grain: "x" },
      ),
      t.part(
        _(1.5, 0.03, 0.33, { r: 0.008 }).translate(0, 1.165, 0.03 + 0.165),
        C,
        { grain: "x" },
      ));
    {
      const i = z0(1, 0.96, 0.01, 0, 0.52),
        m = new kt();
      (m.moveTo(-0.3, 0.06),
        m.lineTo(0.3, 0.06),
        m.lineTo(0.3, 0.55),
        m.absarc(0, 0.55, 0.3, 0, e0, !1),
        m.lineTo(-0.3, 0.06),
        i.holes.push(m));
      const M = G0(i, 0.04, 0.006, 16);
      (M.translate(0, 0, 0.22),
        t.part(M, "iron_black", { grain: "x" }),
        t.part(
          _(0.62, 0.86, 0.02, { r: 0.004 }).translate(0, 0.48, 0.035),
          a0(a, "#0b0908"),
          { cast: !1 },
        ));
      for (const v of [-1, 1])
        t.part(
          _(0.02, 0.84, 0.2, { r: 0.004 }).translate(v * 0.31, 0.48, 0.13),
          a0(a, "#0e0c0b"),
          { cast: !1 },
        );
      (t.part(
        _(0.62, 0.02, 0.2, { r: 0.004 }).translate(0, 0.06, 0.13),
        a0(a, "#161412"),
        { cast: !1 },
      ),
        t.part(
          _(0.62, 0.02, 0.2, { r: 0.004 }).translate(0, 0.9, 0.13),
          a0(a, "#0b0908"),
          { cast: !1 },
        ));
    }
    for (let i = 0; i < 6; i++)
      t.part(
        new Z0(0.006, 0.006, 0.2, 6)
          .rotateX(e0 / 2 - 0.3)
          .translate(-0.2 + i * 0.08, 0.16, 0.13),
        "iron_black",
        { cast: !1 },
      );
    (t.part(new X0(0.46, 0.012, 0.012).translate(0, 0.11, 0.2), "iron_black", {
      cast: !1,
    }),
      t.part(new X0(0.46, 0.012, 0.012).translate(0, 0.2, 0.2), "iron_black", {
        cast: !1,
      }));
    for (let i = 0; i < 3; i++) {
      const m = _(0.07, 0.07, 0.36 - i * 0.05, {
        r: 0.03,
        m: 3,
        lumps: 0.008,
        rng: e,
        res: 0.03,
      });
      t.part(m, "wood_ebony", {
        grain: "z",
        local: F(
          -0.08 + i * 0.09,
          0.15 + (i === 1 ? 0.05 : 0),
          0.14,
          e0 / 2 + (e() - 0.5) * 0.5,
          (e() - 0.5) * 0.2,
        ),
        cast: !1,
      });
    }
    (t.part(
      _(0.5, 0.05, 0.22, {
        r: 0.02,
        m: 3,
        puff: [0.01, 0.02, 0.01],
        lumps: 0.01,
        rng: e,
        res: 0.03,
      }).translate(0, 0.075, 0.14),
      a0(a, "#3b3632"),
      { grain: "x", cast: !1 },
    ),
      t.part(
        _(1.66, 0.045, 0.58, { r: 0.008 }).translate(0, 0.0225, 0.29),
        "concrete_grey",
        { grain: "x" },
      ),
      t.part(
        T0(
          [
            [-0.62, 0.07, 0.52],
            [-0.4, 0.07, 0.55],
            [0.4, 0.07, 0.55],
            [0.62, 0.07, 0.52],
          ],
          0.012,
          24,
          8,
        ),
        "brass_aged",
        { cast: !1 },
      ));
    for (const i of [-1, 1])
      t.part(
        new D0(0.02, 10, 8).translate(i * 0.62, 0.07, 0.52),
        "brass_aged",
        { cast: !1 },
      );
    for (const i of [-1, 1])
      (t.part(
        j(
          [
            [0, 0],
            [0.045, 0],
            [0.045, 0.01],
            [0.015, 0.03],
            [0.012, 0.16],
            [0.022, 0.17],
            [0.012, 0.18],
          ],
          18,
        ).translate(i * 0.62, 1.23, 0.2),
        "brass_aged",
        { grain: "y" },
      ),
        t.part(
          j(
            [
              [0.012, 0],
              [0.012, 0.09 - i * 0.03],
              [0, 0.092 - i * 0.03],
            ],
            12,
          ).translate(i * 0.62, 1.41, 0.2),
          "wax_candle",
          { grain: "y", cast: !1 },
        ));
    (t.part(_(0.12, 0.16, 0.012, { r: 0.004 }), "brass_aged", {
      local: F(0.32, 1.31, 0.24, 0.3, -0.12),
    }),
      t.part(
        j(
          [
            [0, 0],
            [0.04, 0],
            [0.055, 0.06],
            [0.045, 0.14],
            [0.025, 0.18],
            [0.03, 0.2],
          ],
          18,
        ).translate(-0.3, 1.23, 0.2),
        "porcelain_cracked",
        { grain: "y" },
      ));
    for (let i = 0; i < 7; i++) {
      const m = e() * e0 * 2,
        M = 0.18 + e() * 0.12,
        v = 0.05 + e() * 0.08,
        T = [
          [-0.3, 1.41, 0.2],
          [-0.3 + Math.cos(m) * 0.03, 1.41 + M * 0.6, 0.2 + Math.sin(m) * 0.03],
          [-0.3 + Math.cos(m) * 0.08, 1.41 + M, 0.2 + Math.sin(m) * 0.08],
          [
            -0.3 + Math.cos(m) * (0.1 + v),
            1.41 + M - v,
            0.2 + Math.sin(m) * (0.1 + v),
          ],
        ];
      t.part(T0(T, 0.0025, 10, 4), a0(a, "#3a2c1a"), { cast: !1 });
      const I = T[3];
      t.part(
        new D0(0.018, 8, 6).scale(1, 0.7, 1).translate(I[0], I[1] - 0.01, I[2]),
        a0(a, "#4a2a22"),
        { cast: !1 },
      );
    }
    (k(
      W0(re(e, 256, 256), "#080605", 0.9),
      256,
      256,
      [0, 0.97, 0.262],
      [0.5, 0.35],
      "local",
      { m: y },
    ),
      s.push({
        x0: g0.east - 0.42,
        x1: g0.east,
        z0: 14.9 - 0.8,
        z1: 14.9 + 0.8,
        y0: 0,
        y1: 1.25,
      }));
    const z = F(g0.east - 0.03, 1.95, 14.9, -e0 / 2);
    t.frame(z);
    const w = z0(0.96, 1.24, 0.03, 0, 0);
    (w.holes.push(z0(0.8, 1.08, 0.024, 0, 0)),
      t.part(G0(w, 0.05, 0.008, 8), "brass_aged", { grain: "x" }),
      t.part(
        G0(
          (() => {
            const i = z0(0.85, 1.13, 0.024, 0, 0);
            return (i.holes.push(z0(0.79, 1.07, 0.02, 0, 0)), i);
          })(),
          0.062,
          0.004,
          8,
        ),
        "brass_aged",
        { grain: "x" },
      ));
    const f = new u0(
      new _0(0.8, 1.08),
      new C0({
        color: 1711388,
        roughness: 0.22,
        metalness: 0.85,
        envMapIntensity: 0.5,
      }),
    );
    (f.position.set(0, 0, 0.02),
      f.applyMatrix4(z),
      o.add(f),
      k(
        W0(le(e, 256, 512), "#a39c8c", 1),
        256,
        512,
        [0, 0, 0.022],
        [0.8, 1.08],
        "local",
        { m: z },
      ),
      (l.mirror = f));
  }
  {
    t.frame(F(11.72, 0, 13.93, 0.3));
    const h = j(
      [
        [0, 0],
        [0.2, 0],
        [0.22, 0.05],
        [0.23, 0.3],
        [0.21, 0.3],
        [0.2, 0.06],
        [0, 0.03],
      ],
      24,
      !1,
    );
    t.part(h.scale(1, 1, 0.75), "wood_oak_pale", { grain: "y" });
    for (let y = 0; y < 5; y++)
      t.part(
        _(0.08, 0.08, 0.42, {
          r: 0.035,
          m: 3,
          lumps: 0.006,
          rng: e,
          res: 0.04,
        }),
        "wood_oak_pale",
        {
          grain: "z",
          local: F(
            -0.1 + (y % 3) * 0.1,
            0.12 + Math.floor(y / 3) * 0.08,
            0,
            (e() - 0.5) * 0.3,
            0.1 + (e() - 0.5) * 0.2,
          ),
        },
      );
    s.push({ x0: 11.5, x1: 11.95, z0: 13.75, z1: 14.12, y0: 0, y1: 0.4 });
  }
  (S(Jt(e), 640, 480, [g0.west, 2.08, 16.5], e0 / 2, 0.98, 0.74, {}),
    S(Bt(e, !0), 640, 440, [6, 1.66, g0.south], e0, 0.84, 0.58, { tilt: 0.12 }),
    (l.clock = ve(a, o, t, e, [g0.west + 0.06, 0, 19.3])),
    n.push(l.clock.anim),
    s.push({
      x0: 0,
      x1: 0.4,
      z0: 19.3 - 0.29,
      z1: 19.3 + 0.29,
      y0: 0,
      y1: 2.2,
    }));
  {
    t.frame(F(6, 0, g0.south - 0.03 - 0.1, e0));
    for (let w = 0; w < 13; w++) {
      const f = (w - 6) * 0.075;
      for (const i of [-0.035, 0.035])
        t.part(
          new et(0.018, 0.64 - 0.16, 4, 10).translate(f, 0.64 / 2 + 0.04, i),
          "iron_black",
          { grain: "y", cast: w % 3 === 0 },
        );
      (t.part(
        _(0.06, 0.05, 0.1, { r: 0.012 }).translate(f, 0.64 - 0.02, 0),
        "iron_black",
        { cast: !1 },
      ),
        t.part(
          _(0.06, 0.05, 0.1, { r: 0.012 }).translate(f, 0.1, 0),
          "iron_black",
          { cast: !1 },
        ));
    }
    for (const w of [-1, 1])
      t.part(
        _(0.05, 0.08, 0.14, { r: 0.01 }).translate(
          w * ((13 * 0.075) / 2 - 0.05),
          0.04,
          0,
        ),
        "iron_black",
        { cast: !1 },
      );
    (t.part(
      T0(
        [
          [(13 * 0.075) / 2 + 0.02, 0.1, 0],
          [(13 * 0.075) / 2 + 0.07, 0.1, 0],
          [(13 * 0.075) / 2 + 0.08, 0.05, 0],
          [(13 * 0.075) / 2 + 0.08, -0.01, 0],
        ],
        0.012,
        12,
        8,
      ),
      "rust_metal",
      { cast: !1 },
    ),
      t.part(
        j(
          [
            [0.02, 0],
            [0.028, 0.01],
            [0.028, 0.04],
            [0.012, 0.05],
            [0.03, 0.06],
            [0.03, 0.075],
          ],
          12,
        )
          .rotateZ(e0 / 2)
          .translate((13 * 0.075) / 2 + 0.03, 0.1, 0),
        "brass_aged",
        { cast: !1 },
      ),
      s.push({
        x0: 6 - (13 * 0.075) / 2 - 0.06,
        x1: 6 + (13 * 0.075) / 2 + 0.1,
        z0: g0.south - 0.2,
        z1: g0.south,
        y0: 0,
        y1: 0.64 + 0.02,
      }),
      t.frame(F(6 - 0.25, 0.64 + 0.005, g0.south - 0.13, 0)),
      wt(a, t, e, 0.07, 0.11, 5, 0.22));
  }
  (t.frame(F(0.42, 0, 20, 0.4)),
    wt(a, t, e, 0.17, 0.36, 9, 0.9),
    s.push({ x0: 0.2, x1: 0.64, z0: 19.78, z1: 20.4, y0: 0, y1: 1 }),
    k(
      W0(bt(e, 256, 256), "#6a5634", 0.55),
      256,
      256,
      [3.1, 3.197, 19.6],
      [1.4, 1.2],
      "ceiling",
    ),
    k(
      W0(bt(e, 256, 256), "#5a4a2a", 0.4),
      256,
      256,
      [g0.west + 0.0035, 2.55, 14.3],
      [0.9, 1.1],
      "wall_w",
    ),
    k(
      W0(ce(e, 256, 256), "#4a0610", 0.9),
      256,
      256,
      [10.1, 0.7645, 19.2],
      [0.42, 0.42],
      "floor",
    ),
    d.pack(),
    c.pack());
  {
    const h = u.map((z) => {
        const w = d.quad(z.cell, z.size[0], z.size[1]);
        return (
          z.kind === "floor"
            ? (w.rotateZ(z.rot), w.rotateX(-e0 / 2))
            : z.kind === "ceiling"
              ? (w.rotateZ(z.rot), w.rotateX(e0 / 2))
              : z.kind === "wall_s"
                ? w.rotateY(e0)
                : z.kind === "wall_w"
                  ? w.rotateY(e0 / 2)
                  : z.kind === "wall_e" && w.rotateY(-e0 / 2),
          w.translate(z.at[0], z.at[1], z.at[2]),
          z.m && w.applyMatrix4(z.m),
          w
        );
      }),
      y = new C0({
        map: d.tex,
        transparent: !0,
        depthWrite: !1,
        roughness: 0.95,
        polygonOffset: !0,
        polygonOffsetFactor: -3,
        polygonOffsetUnits: -3,
      }),
      C = new u0(F0(h), y);
    ((C.receiveShadow = !0),
      (C.renderOrder = 1),
      (C.name = "decals"),
      o.add(C));
  }
  {
    const h = b.map((C) =>
        c.quad(C.cell, C.w, C.h).translate(0, 0, 0.02).applyMatrix4(C.m),
      ),
      y = new u0(F0(h), new C0({ map: c.tex, roughness: 0.55 }));
    ((y.receiveShadow = !0), (y.name = "paintings"), o.add(y));
  }
  if (p.length) {
    const h = new u0(F0(p), Rt());
    ((h.castShadow = !0), (h.receiveShadow = !0), (h.name = "books"), o.add(h));
  }
  return { group: o, colliders: s, anim: n, props: l };
}
