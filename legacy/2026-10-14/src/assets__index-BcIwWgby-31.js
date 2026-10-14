// assets__index-BcIwWgby 31 — math
// Lines 9217-10107 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Vr(s, o, t, u, e, r, a) {
  const p = [],
    i = (d, y, w, g = 0.3) => {
      t(
        "stone",
        Wt(
          [
            [0, 0],
            [g + 0.08, 0],
            [g + 0.08, 0.1],
            [g, 0.16],
            [g - 0.04, 0.2],
            [g - 0.04, w - 0.16],
            [g + 0.02, w - 0.1],
            [g + 0.06, w - 0.04],
            [g + 0.06, w],
            [0, w],
          ],
          d,
          0,
          y,
          { segs: 8, tile: 1 },
        ),
      );
    };
  {
    const y = pt.z1 - 0.42;
    (i(-4.95, y, 1.05, 0.3),
      $o(
        t,
        f0([-4.95, 0, y], [0, Math.PI, 0]),
        1.05,
        1.55,
        {
          robe: "white",
          mantle: "blue",
          veil: "white",
          skin: "skin",
          crown: "gilt",
          halo: "gilt",
        },
        r,
      ),
      p.push({
        x0: -4.95 - 0.42,
        x1: -4.95 + 0.42,
        z0: y - 0.42,
        z1: pt.z1,
        y0: 0,
        y1: 2.8,
      }));
  }
  {
    const d = pt.x1 - 0.2,
      y = 47.7,
      w = 1.62;
    (t(
      "stone",
      Wt(
        [
          [0, -0.35],
          [0.05, -0.35],
          [0.18, -0.12],
          [0.25, 0],
          [0.25, 0.06],
          [0, 0.06],
        ],
        d,
        w - 0.06,
        y,
        { segs: 8 },
      ),
    ),
      $o(
        t,
        f0([d, 0, y], [0, -Math.PI / 2, 0]),
        w,
        1.2,
        {
          robe: "white",
          mantle: "brownR",
          veil: null,
          skin: "skin",
          halo: "gilt",
          hands: "lily",
          beard: !0,
        },
        r,
      ));
  }
  {
    const d = pt.x0 + 0.45,
      y = 57.5;
    (i(d, y, 0.8, 0.27),
      $o(
        t,
        f0([d, 0, y], [0, Math.PI / 2, 0]),
        0.8,
        1.45,
        { covered: "purple" },
        r,
      ),
      p.push({
        x0: pt.x0,
        x1: d + 0.45,
        z0: y - 0.42,
        z1: y + 0.42,
        y0: 0,
        y1: 2.4,
      }));
  }
  {
    const d = S0 - 0.5,
      y = 54,
      w = 2.35;
    (t(
      "stone",
      Wt(
        [
          [0, -0.4],
          [0.05, -0.4],
          [0.16, -0.18],
          [0.24, -0.04],
          [0.24, 0.05],
          [0, 0.05],
        ],
        d,
        w - 0.05,
        y,
        { segs: 8 },
      ),
    ),
      $o(
        t,
        f0([d - 0.02, 0, y], [0, -Math.PI / 2, 0]),
        w,
        1.15,
        {
          robe: "white",
          mantle: "redM",
          veil: null,
          skin: "skin",
          halo: "gilt",
          hands: "pray",
        },
        r,
      ));
  }
  [
    [-1.75, 43.15, 0.12, 0],
    [4.85, 50.6, 0, 1],
    [4.75, 56.2, 0.05, 2],
    [-4.85, 55.9, -0.04, 3],
    [-1.2, 56.35, 0, 1],
  ].forEach(([d, y, w, g]) => {
    const z = new m0(0.9, 1.8);
    (z.rotateX(-Math.PI / 2), z.rotateY(w), z.translate(d, 0.004, y));
    const x = z.attributes.uv;
    for (let v = 0; v < x.count; v++) x.setX(v, (g + x.getX(v)) / 4);
    t("ledger", z, { cast: !1 });
  });
  {
    (t(
      "stone",
      Wt(
        [
          [0, 0],
          [0.36, 0],
          [0.36, 0.1],
          [0.26, 0.2],
          [0.2, 0.3],
          [0.19, 1.1],
          [0.24, 1.18],
          [0.4, 1.36],
          [0.52, 1.45],
          [0, 1.45],
        ],
        -2.85,
        0,
        55.55,
        { segs: 8, tile: 1, rot: [0, Math.PI / 8, 0] },
      ),
    ),
      t(
        "oak",
        Wt(
          [
            [0, 1.45],
            [0.56 - 0.03, 1.45],
            [0.56, 1.45 + 0.08],
            [0.56, 2.5 - 0.1],
            [0.56 + 0.05, 2.5 - 0.05],
            [0.56 + 0.05, 2.5],
            [0.56 - 0.07, 2.5],
            [0.56 - 0.07, 1.45 + 0.1],
            [0, 1.45 + 0.1],
          ],
          -2.85,
          0,
          55.55,
          { segs: 8, tile: 0.8, rot: [0, Math.PI / 8, 0] },
        ),
      ));
    for (let n = 0; n < 8; n++) {
      const l = (n / 8) * Math.PI * 2,
        f = -2.85 + Math.cos(l) * (0.56 * Math.cos(Math.PI / 8) + 0.005),
        h = 55.55 + Math.sin(l) * (0.56 * Math.cos(Math.PI / 8) + 0.005),
        c = -Math.sin(l),
        M = Math.cos(l),
        m = ue(0.13, 0.2),
        k = [
          [-0.13, 0],
          ...m.pts(8).map(([S, A]) => [S, 0.5 + A]),
          [0.13, 0],
        ].map(([S, A]) => [f + c * S, 1.45 + 0.2 + A, h + M * S]);
      t(
        "gilt",
        I0(
          [
            [-0.012, 0],
            [0.012, 0],
            [0.012, 0.015],
            [-0.012, 0.015],
          ],
          k,
          [Math.cos(l), 0, Math.sin(l)],
          { crease: 0.8 },
        ),
      );
    }
    for (let n = 0; n < 7; n++) {
      const l = 57.3 - n * 0.2,
        f = (n + 1) * 0.2;
      (t(
        "oak",
        Mt(
          -2.85 - 0.62,
          f - 0.05,
          l - 0.12,
          -2.85 - 0.12,
          f,
          l + 0.12,
          0.01,
          "x",
        ),
      ),
        t(
          "oak",
          Mt(-2.85 - 0.62, 0, l - 0.12, -2.85 - 0.58, f, l + 0.12, 0.005, "z"),
        ));
    }
    t(
      "oak",
      Q0(
        [
          [-2.85 - 0.6, 1.1, 55.55 + 1.8],
          [-2.85 - 0.6, 2.2, 55.55 + 0.5],
        ],
        0.02,
        6,
        6,
      ),
    );
    const x = 4.35,
      v = 55.55 - 0.45;
    (t(
      "oak",
      Wt(
        [
          [0, x],
          [0.82, x],
          [0.84, x + 0.06],
          [0.8, x + 0.12],
          [0, x + 0.12],
        ],
        -2.85,
        0,
        v,
        { segs: 8, rot: [0, Math.PI / 8, 0] },
      ),
    ),
      t(
        "gilt",
        Wt(
          [
            [0.84, x - 0.12],
            [0.86, x - 0.12],
            [0.86, x],
            [0.84, x],
          ],
          -2.85,
          0,
          v,
          { segs: 8, rot: [0, Math.PI / 8, 0] },
        ),
      ),
      t(
        "oak",
        A0(
          (n, l) =>
            0.62 *
            (1 - l) *
            (1 +
              0.28 *
                Math.max(0, Math.cos(n * 8)) *
                Math.sin(Math.PI * l * 5) *
                (1 - l)),
          (n) => x + 0.12 + n * 1.3,
          32,
          12,
          -2.85,
          v,
        ),
      ),
      t(
        "gilt",
        Wt(
          [
            [0, 0],
            [0.04, 0],
            [0.06, 0.06],
            [0.03, 0.12],
            [0.05, 0.16],
            [0, 0.26],
          ],
          -2.85,
          x + 1.4,
          v,
          { segs: 8 },
        ),
      ),
      t("iron", ge([-S0, 5, 54.1], [-2.85, x + 0.1, v], 0.018, 6)));
    for (let n = 0; n < 5; n++)
      N0(
        e,
        -2.85 - 0.4 + r() * 0.1,
        (n + 1) * 0.2 + 0.2,
        55.55 + 1.75 - n * 0.4,
        0.08 + r() * 0.1,
        0.018,
        a.pulpit,
      );
    for (let n = 0; n < 4; n++) {
      const l = r() * 6.28;
      N0(
        e,
        -2.85 + Math.cos(l) * 0.45,
        0,
        55.55 + Math.sin(l) * 0.45,
        0.06 + r() * 0.12,
        0.02,
        a.pulpit,
      );
    }
    p.push({
      x0: -2.85 - 0.66,
      x1: -2.85 + 0.6,
      z0: 55.55 - 0.6,
      z1: 55.55 + 1.67,
      y0: 0,
      y1: 2.6,
    });
  }
  {
    (t(
      "stone",
      Wt(
        [
          [0, 0],
          [0.72, 0],
          [0.72, 0.12],
          [0.58, 0.12],
          [0.58, 0.24],
          [0.26, 0.24],
          [0.2, 0.32],
          [0.19, 0.62],
          [0.24, 0.66],
          [0.44, 0.72],
          [0.5, 0.92],
          [0.53, 0.96],
          [0.53, 1.02],
          [0.44, 1.02],
          [0.42, 0.86],
          [0, 0.86],
        ],
        -1.85,
        0,
        43.3,
        { segs: 8, tile: 1, rot: [0, Math.PI / 8, 0] },
      ),
    ),
      t(
        "oak",
        A0(
          (w, g) =>
            (0.46 * (1 - g) ** 1.3 + 0.03) *
            (1 +
              0.22 *
                Math.max(0, Math.cos(w * 8)) *
                Math.sin(Math.PI * g * 6) *
                (1 - g)),
          (w) => 1.02 + w * 1.45,
          32,
          14,
          -1.85,
          43.3,
        ),
      ),
      t(
        "gilt",
        Wt(
          [
            [0, 0],
            [0.05, 0],
            [0.07, 0.07],
            [0.03, 0.14],
            [0.06, 0.2],
            [0, 0.32],
          ],
          -1.85,
          2.45,
          43.3,
          { segs: 8 },
        ),
      ),
      t(
        "iron",
        Q0(
          [
            [-1.85, 2.8, 43.3],
            [-1.85, 4.4, 43.3],
          ],
          0.008,
          4,
          4,
        ),
        { cast: !1 },
      ));
    for (let w = 0; w < 6; w++) {
      const g = (w / 6) * Math.PI * 2 + 0.3;
      N0(
        e,
        -1.85 + Math.cos(g) * 0.64,
        0.12,
        43.3 + Math.sin(g) * 0.64,
        0.07 + r() * 0.12,
        0.018,
        a.door,
        { lit: r() > 0.2 },
      );
    }
    p.push({
      x0: -1.85 - 0.72,
      x1: -1.85 + 0.72,
      z0: 43.3 - 0.72,
      z1: 43.3 + 0.72,
      y0: 0,
      y1: 2.5,
    });
  }
  {
    const d = [43, 45.3, 50.3, 52.6, 55.2, 57.8, 60.2];
    let y = 0;
    for (const w of [1, -1])
      for (const g of w > 0 ? d : [...d].reverse()) {
        if ((w > 0 && Math.abs(g - 47.7) < 1) || (w < 0 && g > 59.5)) continue;
        const z = w * (pt.x1 - 0.02),
          x = 2.3,
          v = 0.36,
          n = 0.46,
          l = -w,
          f = [
            Mt(
              -v / 2 - 0.04,
              -n / 2 - 0.04,
              -0.025,
              v / 2 + 0.04,
              n / 2 + 0.04,
              0.025,
              0.008,
              "x",
            ),
            Mt(
              -0.012,
              n / 2 + 0.04,
              -0.012,
              0.012,
              n / 2 + 0.2,
              0.012,
              0.003,
              "y",
            ),
            Mt(
              -0.06,
              n / 2 + 0.11,
              -0.012,
              0.06,
              n / 2 + 0.135,
              0.012,
              0.003,
              "x",
            ),
          ];
        for (const m of f)
          (m.applyMatrix4(
            f0([z, x, g], [0, l > 0 ? Math.PI / 2 : -Math.PI / 2, 0]),
          ),
            t("oak", m));
        const h = new m0(v, n),
          c = h.attributes.uv,
          M = y % 5;
        for (let m = 0; m < c.count; m++)
          c.setXY(
            m,
            (M + 0.12 + c.getX(m) * 0.76) / 5,
            0.12 + c.getY(m) * 0.62,
          );
        (h.applyMatrix4(
          f0([z + l * 0.03, x, g], [0, l > 0 ? Math.PI / 2 : -Math.PI / 2, 0]),
        ),
          t("panel", h, { cast: !1 }),
          y++);
      }
  }
  for (const [d, y, w] of [
    [pt.x1 - 0.02, 42.4, 3.1],
    [pt.x0 + 0.02, 43.3, 3],
    [pt.x1 - 0.02, 58.9, 3.2],
    [pt.x0 + 0.02, 50.1, 3.25],
  ]) {
    const g = d > 0 ? -1 : 1,
      z = [0, g > 0 ? Math.PI / 2 : -Math.PI / 2, 0],
      x = Mt(-0.34, -0.46, -0.02, 0.34, 0.46, 0.02, 0.01, "x"),
      v = Mt(-0.27, -0.36, -0.015, 0.27, 0.34, 0.035, 0.012, "x"),
      n = A0(
        (l, f) => 0.12 * Math.sin(Math.PI * (0.5 + f * 0.5)) + 0.001,
        (l) => 0.46 + l * 0.14,
        12,
        4,
        0,
        0,
      );
    for (const [l, f] of [
      [x, "slate"],
      [v, "marble"],
      [n, "marble"],
    ])
      (l.applyMatrix4(f0([d + g * 0.03, w, y], z)), t(f, l));
  }
  for (const d of [-1, 1]) {
    const y = d * (S0 - 0.48),
      w = 44,
      g = 5.4,
      z = 0.62,
      x = 1.35,
      v = d < 0 ? 0 : 1,
      n = new m0(z, x, 8, 16),
      l = n.attributes.position,
      f = n.attributes.uv;
    for (let h = 0; h < l.count; h++) {
      const c = f.getX(h),
        M = f.getY(h);
      (l.setZ(
        h,
        Math.sin(c * Math.PI * 3 + v) * 0.025 * (1 - M * 0.6) + (1 - M) * 0.06,
      ),
        f.setX(h, (v + c) / 2));
    }
    (n.computeVertexNormals(),
      n.translate(0, -x / 2, 0),
      n.applyMatrix4(f0([y, g, w], [0, (-d * Math.PI) / 2 + d * 0.35, 0])),
      t("banner", n, { cast: !1 }),
      t(
        "iron",
        ge(
          [y - d * 0.02, g + 0.02, w - 0.34],
          [y - d * 0.02, g + 0.02, w + 0.34],
          0.012,
          6,
        ).applyMatrix4(new wt()),
        { cast: !1 },
      ),
      t("iron", ge([d * S0, g + 0.4, w], [y, g + 0.02, w], 0.01, 5), {
        cast: !1,
      }));
  }
  {
    const d = pt.x0 + 0.28,
      y = 42.1;
    for (const x of [-0.28, 0.28])
      t("iron", ge([d + 0.02, 0, y + x], [d - 0.2, 2.1, y + x], 0.017, 8));
    const w = new m0(0.52, 1.8, 1, 1);
    (w.rotateY(Math.PI / 2),
      w.rotateZ(-0.105),
      w.translate(d - 0.09, 1.1, y),
      t("canvas", w, { cast: !1 }));
    const g = -5.55,
      z = 42.78;
    (t(
      "olive",
      Mt(g - 0.33, 0, z - 0.22, g + 0.33, 0.36, z + 0.22, 0.012, "x"),
    ),
      t(
        "olive",
        Mt(g - 0.34, 0, z + 0.28, g + 0.34, 0.03, z + 0.72, 0.01, "x"),
      ),
      t(
        "paintW",
        Mt(g - 0.045, 0.1, z - 0.225, g + 0.045, 0.28, z - 0.215, 0.002, "x"),
        { cast: !1 },
      ),
      t(
        "paintW",
        Mt(g - 0.09, 0.145, z - 0.225, g + 0.09, 0.235, z - 0.215, 0.002, "x"),
        { cast: !1 },
      ),
      t(
        "iron",
        Wt(
          [
            [0, 0],
            [0.07, 0],
            [0.07, 0.03],
            [0.05, 0.05],
            [0.05, 0.2],
            [0.07, 0.22],
            [0.03, 0.26],
            [0, 0.26],
          ],
          g + 0.12,
          0.36,
          z,
          { segs: 10 },
        ),
      ),
      t(
        "linen",
        Mt(g - 0.28, 0.2, z - 0.18, g + 0.2, 0.34, z + 0.18, 0.02, "x"),
        { cast: !1 },
      ),
      t(
        "wool",
        A0(
          (x, v) =>
            (0.55 * (1 - v) + 0.05) *
            (1 + 0.25 * Math.sin(x * 3 + 1) + 0.12 * Math.sin(x * 7)),
          (x) =>
            0.005 +
            Math.sin((x * Math.PI) / 2) * (0.1 + 0.04 * Math.sin(x * 9)),
          40,
          8,
          -4.45,
          42.3,
        ),
        { cast: !1 },
      ),
      p.push({
        x0: g - 0.36,
        x1: g + 0.36,
        z0: z - 0.25,
        z1: z + 0.25,
        y0: 0,
        y1: 0.6,
      }));
  }
  {
    const w = new tn(1, 0),
      g = 110,
      z = new l0(w, u.web, g);
    ((z.name = "church_rubble"), (z.castShadow = !0), (z.receiveShadow = !0));
    for (let l = 0; l < g; l++) {
      const f = r() * 6.283,
        h = Math.sqrt(r()) * 2.1,
        c = -3.3 + Math.cos(f) * h * 1.2,
        M = 51.5 + Math.sin(f) * h,
        m = 0.05 + r() * r() * 0.28;
      z.setMatrixAt(
        l,
        f0(
          [c, m * 0.45, M],
          [r() * 3, r() * 3, r() * 3],
          [m * (0.8 + r() * 0.8), m * (0.5 + r() * 0.4), m * (0.8 + r() * 0.6)],
        ),
      );
    }
    (o.add(z),
      t(
        "ash",
        A0(
          (l, f) =>
            (1.9 * (1 - f) + 0.02) *
            (1 + 0.18 * Math.sin(l * 3 + 0.7) + 0.08 * Math.sin(l * 7)),
          (l) => 0.002 + Math.sin((l * Math.PI) / 2) * 0.13,
          48,
          6,
          -3.3 - 0.3,
          51.5 + 0.1,
        ),
        { cast: !1 },
      ));
    const x = [];
    for (let l = 0; l <= 14; l++) {
      const f = l / 14;
      x.push([
        -3.3 - 1.2 + f * 1.9,
        0.14 + Math.sin(f * Math.PI) * 0.05,
        51.5 + 0.6 - f * 0.9,
      ]);
    }
    (t(
      "rib",
      I0(
        [
          [-0.1, -0.06],
          [-0.1, 0.06],
          [-0.055, 0.13],
          [-0.02, 0.24],
          [0.02, 0.24],
          [0.055, 0.13],
          [0.1, 0.06],
          [0.1, -0.06],
        ],
        x,
        [0.2, 1, 0.1],
        { crease: 0.6 },
      ),
    ),
      t(
        "rib",
        A0(
          (l, f) =>
            (0.2 * Math.sin(Math.PI * (0.08 + 0.92 * f)) + 0.03) *
            (1 +
              0.18 *
                Math.pow(Math.max(0, Math.cos(l * 6)), 0.5) *
                Math.sin(Math.PI * f)),
          (l) => l * 0.4,
          36,
          8,
        ).applyMatrix4(f0([-3.3 + 0.9, 0.22, 51.5 - 0.8], [1.3, 0.4, 0.2])),
      ));
    for (const [l, f, h] of [
      [[-3.3 - 1.6, 0.05, 51.5 - 1.2], [-3.3 + 1.3, 0.55, 51.5 - 0.3], 0.22],
      [[-3.3 - 0.4, 0.08, 51.5 + 1.3], [-3.3 + 1.9, 0.12, 51.5 + 0.2], 0.18],
      [[-3.3 + 0.6, 0.05, 51.5 - 1.6], [-3.3 - 1.1, 0.35, 51.5 + 0.4], 0.14],
    ]) {
      const c = new dt(...l),
        M = new dt(...f),
        m = c.distanceTo(M),
        k = new qt(h, h * 0.8, m, 1, 1, 4),
        S = k.attributes.position;
      for (let A = 0; A < S.count; A++) {
        const b = S.getZ(A) / m + 0.5;
        S.setX(A, S.getX(A) * (1 - 0.3 * Math.max(0, b - 0.8) * 5));
      }
      (k.computeVertexNormals(),
        k.applyMatrix4(new wt().lookAt(M, c, new dt(0, 1, 0))),
        k.translate(
          (c.x + M.x) / 2,
          (c.y + M.y) / 2 + h * 0.4,
          (c.z + M.z) / 2,
        ),
        t("char", k));
    }
    const v = new qt(0.26, 0.008, 0.18),
      n = new l0(v, u.slate, 40);
    ((n.name = "church_slates"), (n.receiveShadow = !0));
    for (let l = 0; l < 40; l++) {
      const f = r() * 6.28,
        h = Math.sqrt(r()) * 2.4;
      n.setMatrixAt(
        l,
        f0(
          [
            -3.3 + Math.cos(f) * h * 1.2,
            0.01 + r() * 0.08,
            51.5 + Math.sin(f) * h,
          ],
          [(r() - 0.5) * 0.4, r() * 6.28, (r() - 0.5) * 0.4],
          [0.5 + r() * 0.8, 1, 0.5 + r() * 0.8],
        ),
      );
    }
    (o.add(n),
      p.push({
        x0: -3.3 - 1.9,
        x1: -3.3 + 1.5,
        z0: 51.5 - 1.3,
        z1: 51.5 + 1.3,
        y0: 0,
        y1: 0.6,
      }));
  }
  {
    const d = new Rt();
    (d.setAttribute(
      "position",
      new xt([0, 0, 0, 0.012, 0, 0.045, 0.05, 0, 0.012], 3),
    ),
      d.setAttribute("normal", new xt([0, 1, 0, 0, 1, 0, 0, 1, 0], 3)));
    const y = 90,
      w = new l0(d, u.shard, y);
    w.name = "church_shards";
    const g = [
      [0.55, 0.05, 0.05],
      [0.08, 0.14, 0.55],
      [0.75, 0.52, 0.12],
      [0.7, 0.72, 0.62],
      [0.12, 0.35, 0.12],
    ].map((z) => new Xt(...z));
    for (let z = 0; z < y; z++) {
      const x = pt.x0 + 0.25 + r() * r() * 1.8,
        v = 46.5 + (r() - 0.5) * 1.8;
      (w.setMatrixAt(
        z,
        f0(
          [x, 0.004, v],
          [(r() - 0.5) * 0.15, r() * 6.28, (r() - 0.5) * 0.15],
          0.6 + r() * 1.6,
        ),
      ),
        w.setColorAt(z, g[Math.floor(r() * g.length)]));
    }
    o.add(w);
  }
  for (const [d, y, w] of [
    [-5.45, 59.35, 7],
    [-4.45, 59.35, 6],
    [2.95, 58, 5],
    [-2.95, 58, 6],
  ]) {
    t(
      "brass",
      Wt(
        [
          [0, 0],
          [0.07, 0],
          [0.09, 0.05],
          [0.08, 0.14],
          [0.05, 0.2],
          [0.055, 0.25],
          [0.07, 0.28],
          [0, 0.26],
        ],
        d,
        0,
        y,
        { segs: 16 },
      ),
    );
    for (let g = 0; g < w; g++) {
      const z = (g / w) * 6.28 + r(),
        x = 0.08 + r() * 0.12,
        v = 0.35 + r() * 0.3,
        n = r(),
        l = [
          [d, 0.24, y],
          [
            d + Math.cos(z) * x * 0.5,
            0.24 + v * 0.6,
            y + Math.sin(z) * x * 0.5,
          ],
          [d + Math.cos(z) * x, 0.24 + v, y + Math.sin(z) * x],
          [
            d + Math.cos(z) * (x + 0.05 * n),
            0.24 + v - 0.08 * n,
            y + Math.sin(z) * (x + 0.05 * n),
          ],
        ];
      t("dry", Q0(l, 0.003, 8, 4), { cast: !1 });
      const f = l[3];
      t(
        "dry",
        Wt(
          [
            [0, 0],
            [0.02, 0.01],
            [0.025, 0.03],
            [0, 0.04],
          ],
          f[0],
          f[1] - 0.03,
          f[2],
          { segs: 6 },
        ),
        { cast: !1 },
      );
    }
  }
  return { colliders: p };
}
