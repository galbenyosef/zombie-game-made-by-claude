// assets/district-BhfbivMT 15 — bulge
// Lines 4542-5106 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function ko(n, t, e) {
  const r = n.dress,
    o = t.burnt,
    l = t.rng,
    s = t.o,
    c = t.sink("body"),
    a = (p, d = 1) =>
      p === "front"
        ? (i, u) => e.front(i, u)
        : p === "back"
          ? (i, u) => e.back(i, u)
          : p === "top"
            ? (i, u) => e.top(i, u)
            : (i, u) => e.side(i, u, d);
  for (const p of r.lamps || [])
    for (const d of [1, -1]) {
      const i = p.face === "side" ? p.pts : p.pts.map(([M, C]) => [M * d, C]),
        u = a(p.face, d),
        x = Math.min(p.nv ?? 2, 4),
        w = Math.max(1, Math.min(p.nu ?? 4, Math.floor(10 / x)));
      if (o) {
        T0(c, "char", u, i, {
          nu: w,
          nv: x,
          off: 0.002,
          bulge: -0.004,
          rim: 0.006,
        });
        continue;
      }
      const _ = p.hazard && s.hazards ? "hazard" : "lamp";
      T0(c, _, u, i, {
        nu: w,
        nv: x,
        off: p.off ?? 0.006,
        bulge: p.bulge ?? 0.006,
        col: st[p.col],
        rimCol: [0.04, 0.04, 0.042],
      });
    }
  for (const p of r.grilles || []) {
    const d = a(p.face),
      i = p.pts;
    if (
      (T0(c, o ? "iron" : "trim", d, i, {
        nu: 8,
        nv: 2,
        off: 0.003,
        bulge: 0,
        rim: 0.012,
        col: k0,
      }),
      o)
    )
      continue;
    if (p.mesh) {
      const w = Math.max(
          1,
          Math.round(
            Math.abs(i[1][0] - i[0][0]) / (2 * Math.abs(i[3][1] - i[0][1])),
          ),
        ),
        _ = (M, C, T) => [A0(M[0], C[0], T), A0(M[1], C[1], T)];
      for (let M = 0; M < w; M++) {
        const C = M / w,
          T = (M + 1) / w;
        T0(
          c,
          "decal",
          d,
          [
            _(i[0], i[1], C),
            _(i[0], i[1], T),
            _(i[3], i[2], T),
            _(i[3], i[2], C),
          ],
          {
            nu: 2,
            nv: 1,
            off: 0.0045,
            bulge: 0,
            rim: 0.001,
            uv: (N, K) => ze("grille_mesh", N, K),
          },
        );
      }
    }
    const u = p.slatKey === "chrome" ? "metal" : "trim",
      x = p.slatKey === "chrome" ? Ze : [0.07, 0.07, 0.075];
    for (let w = 1; w <= (p.slats || 0); w++) {
      const _ = w / (p.slats + 1),
        M = A0(i[0][1], i[3][1], _),
        C = A0(i[0][0], i[3][0], _) + 0.012,
        T = A0(i[1][0], i[2][0], _) - 0.012;
      T0(
        c,
        u,
        d,
        [
          [C, M - 0.005],
          [T, M - 0.005],
          [T, M + 0.005],
          [C, M + 0.005],
        ],
        { nu: 4, nv: 1, off: 0.01, bulge: 0.002, rim: 0.01, col: x },
      );
    }
    if (p.frame) {
      const w = p.frame === "chrome" ? "metal" : "trim",
        _ = p.frame === "chrome" ? Ze : [0.06, 0.06, 0.065],
        M = 0.011,
        C = (T, N) =>
          T0(
            c,
            w,
            d,
            [
              [T[0], T[1] - M],
              [N[0], N[1] - M],
              [N[0], N[1] + M],
              [T[0], T[1] + M],
            ],
            { nu: 8, nv: 1, off: 0.011, bulge: 0.003, rim: 0.012, col: _ },
          );
      (C(i[0], i[1]), C(i[3], i[2]));
      for (const [T, N] of [
        [i[0], i[3]],
        [i[1], i[2]],
      ])
        T0(
          c,
          w,
          d,
          [
            [T[0] - M, T[1]],
            [T[0] + M, T[1]],
            [N[0] + M, N[1]],
            [N[0] - M, N[1]],
          ],
          { nu: 1, nv: 3, off: 0.011, bulge: 0.003, rim: 0.012, col: _ },
        );
      p.frame === "chrome" &&
        T0(
          c,
          "metal",
          d,
          [
            [-0.035, (i[0][1] + i[3][1]) / 2 - 0.025],
            [0.035, (i[0][1] + i[3][1]) / 2 - 0.025],
            [0.035, (i[0][1] + i[3][1]) / 2 + 0.025],
            [-0.035, (i[0][1] + i[3][1]) / 2 + 0.025],
          ],
          { nu: 2, nv: 2, off: 0.016, bulge: 0.006, col: Ze },
        );
    }
  }
  const h = {};
  for (const p of r.bumpers || []) {
    const d = a(p.face),
      i = p.pts;
    if (
      (T0(c, o ? "burnt" : "trim", d, i, {
        nu: 14,
        nv: 2,
        off: 0.032,
        bulge: 0.01,
        rim: 0.03,
        col: o ? [0.05, 0.045, 0.04] : p.col,
      }),
      (h[p.face] = [i[0][1], i[3][1], 0.045]),
      p.strip && !o)
    ) {
      const u = (i[0][1] + i[3][1]) / 2;
      T0(
        c,
        "metal",
        d,
        [
          [i[0][0] + 0.02, u - 0.012],
          [i[1][0] - 0.02, u - 0.012],
          [i[1][0] - 0.02, u + 0.012],
          [i[0][0] + 0.02, u + 0.012],
        ],
        { nu: 14, nv: 1, off: 0.046, bulge: 0.003, rim: 0.02, col: p.strip },
      );
    }
  }
  const f = r.plates?.type,
    y = (p, d, i) => {
      const u = a(p)(d, i),
        x = u.n.clone();
      ((x.y = 0), x.normalize());
      const w = h[p],
        _ = w && i > w[0] - 0.05 && i < w[1] + 0.05 ? w[2] : 0.003,
        M = le(u.p.clone().addScaledVector(x, _), x);
      U(
        c,
        o ? "char" : "trim",
        g0(0.35, 0.18, 0.012, 0.006),
        M.clone().multiply(Z(0, 0, 0.006)),
        k0,
      );
      const C = o
        ? "plate_burnt"
        : f === "plate_k"
          ? "plate_k0"
          : f + (l() < 0.5 ? "0" : "1");
      j0(c, "decal", M, 0.33, 0.165, 0.0125, (T, N) => ze(C, T, N));
    };
  (r.plates?.front && y("front", ...r.plates.front),
    r.plates?.back && y("back", ...r.plates.back));
  const m = r.mirror;
  if (m) {
    for (const p of [1, -1])
      if (!(s.side && p < 0))
        if (m.type === "door") {
          const d = n.doors.find(
              (O) => O.side === p && O.lo[1] >= m.z && O.lo[0] <= m.z,
            ),
            i = t.sink(d ? d.key : "body"),
            u = m.z,
            x = n.belt(u) + 0.05,
            w = e.side(u, x, p),
            _ = m.big ? 1.3 : 1,
            M = 0.17 * _,
            C = 0.105 * _,
            T = 0.075;
          if (
            (U(
              i,
              o ? "iron" : "trim",
              g0(0.05, 0.05, 0.11, 0.015),
              Z(w.p.x + p * 0.02, w.p.y, w.p.z - 0.01),
              k0,
            ),
            o)
          )
            continue;
          const N = new z(
            w.p.x + p * (0.035 + M / 2),
            w.p.y + 0.04,
            w.p.z - 0.03,
          );
          U(
            i,
            "paint",
            g0(M, C, T, 0.03),
            Z(N.x, N.y, N.z, 0, p * 0.1, 0),
            t.paintC,
          );
          const K = le(new z(N.x, N.y, N.z - T / 2 - 0.0015), new z(0, 0, -1));
          j0(i, "glass", K, M - 0.025, C - 0.022, 0, (O, k) => de(0, O, k));
        } else {
          const d = m.z,
            i = p * (n.hw(d) - 0.11),
            u = e.yAt(d, i),
            x = new z(i, u, d),
            w = new z(i + p * 0.035, u + 0.16, d - 0.03);
          if (
            (f0(c, o ? "iron" : "trim", x, w, 0.012, 0.012, new z(0, 0, 1), k0),
            o)
          )
            continue;
          (U(
            c,
            "trim",
            g0(0.085, 0.06, 0.05, 0.018),
            Z(w.x + p * 0.02, w.y + 0.02, w.z, 0, p * 0.15, 0),
            k0,
          ),
            j0(
              c,
              "glass",
              le(
                new z(w.x + p * 0.02, w.y + 0.02, w.z - 0.0262),
                new z(0, 0, -1),
              ),
              0.07,
              0.045,
              0,
              (_, M) => de(0, _, M),
            ));
        }
  }
  const b =
      r.handle === "chrome" ? "metal" : r.handle === "trim" ? "trim" : "paint",
    v = r.handle === "chrome" ? Ze : r.handle === "trim" ? k0 : t.paintC;
  for (const p of n.doors) {
    const d = p.slide ? p.lo[1] - 0.12 : p.lo[0] + 0.16,
      i = n.belt(d) - (p.slide ? 0.12 : 0.1),
      u = e.side(d, i, p.side),
      x = le(u.p, u.n),
      w = t.sink(p.key);
    (j0(
      w,
      o ? "char" : "trim",
      x,
      0.11,
      0.042,
      0.0012,
      (_, M) => [_, M],
      [0.012, 0.012, 0.012],
    ),
      U(
        w,
        o ? "burnt" : b,
        g0(0.13, 0.026, 0.022, 0.009),
        x.clone().multiply(Z(0, 0, 0.011)),
        o ? [0.05, 0.045, 0.04] : v,
      ));
  }
  if (r.wipers && n.ws) {
    const p = r.wipers,
      d = p.z;
    for (const [i, u] of [
      [-0.62, p.len],
      [-0.02, p.len * 0.95],
    ]) {
      const x = e.top(i, d),
        w = e.top(i + u, d),
        _ = 0.014,
        M = x.p.clone().addScaledVector(x.n, _),
        C = w.p.clone().addScaledVector(w.n, _);
      (f0(c, o ? "iron" : "trim", M, C, 0.012, 0.012, x.n, k0),
        o ||
          f0(
            c,
            "trim",
            M.clone()
              .addScaledVector(x.n, -0.006)
              .add(new z(0.03, 0, 0)),
            C.clone()
              .addScaledVector(w.n, -0.006)
              .add(new z(0.04, 0, 0)),
            0.02,
            0.008,
            x.n,
            k0,
          ),
        U(
          c,
          o ? "iron" : "trim",
          new b0(0.018, 0.02, 0.03, 8),
          le(x.p.clone().addScaledVector(x.n, 0.012), x.n).multiply(
            Z(0, 0, 0, Math.PI / 2),
          ),
          k0,
        ));
    }
    if (!o && l() < 0.3) {
      const i = e.top(-0.32, d - 0.07),
        u = le(i.p, i.n).multiply(Z(0, 0, 0, 0, 0, (l() - 0.5) * 0.4));
      j0(c, "decal", u, 0.13, 0.13, 0.006, (x, w) => ze("note", x, w));
    }
  }
  if (r.hatch) {
    const { y0: p, x: d } = r.hatch,
      i = n.top(n.z0) - 0.08,
      u = a("back"),
      x = 0.004,
      w = o ? "char" : "trim";
    for (const _ of [-d, d])
      T0(
        c,
        w,
        u,
        [
          [_ - x, p],
          [_ + x, p],
          [_ + x, i],
          [_ - x, i],
        ],
        {
          nu: 1,
          nv: 6,
          off: 0.0012,
          bulge: 0,
          rim: 0.003,
          col: [0.015, 0.015, 0.015],
        },
      );
    T0(
      c,
      w,
      u,
      [
        [-d, p - x],
        [d, p - x],
        [d, p + x],
        [-d, p + x],
      ],
      {
        nu: 10,
        nv: 1,
        off: 0.0012,
        bulge: 0,
        rim: 0.003,
        col: [0.015, 0.015, 0.015],
      },
    );
  }
  if (n.backGlass && !o) {
    const [p, d, i, u] = n.backGlass,
      x = n.z0 + 0.012,
      w = le(new z(0, (d + u) / 2, x), new z(0, 0, -1));
    (j0(c, "glass", w, i - p, u - d, 0, (_, M) =>
      de(t.tiles.get("back") || 0, _, M),
    ),
      j0(
        c,
        "glass",
        le(new z(0, (d + u) / 2, x), new z(0, 0, 1)),
        i - p,
        u - d,
        0,
        (_, M) => de(0, _, M),
      ));
  }
  if (r.roofSign != null) {
    const p = r.roofSign,
      d = n.top(p) - 0.004;
    if (o)
      U(
        c,
        "char",
        g0(0.3, 0.07, 0.09, 0.03),
        Z(0.03, d + 0.03, p, 0.1, 0.2, 0.08),
      );
    else {
      U(c, "trim", g0(0.36, 0.03, 0.12, 0.01), Z(0, d + 0.012, p), k0);
      const i = new je([
          new ye(-0.21, 0),
          new ye(0.21, 0),
          new ye(0.15, 0.16),
          new ye(-0.15, 0.16),
        ]),
        u = new at(i, {
          depth: 0.1,
          bevelEnabled: !0,
          bevelThickness: 0.008,
          bevelSize: 0.008,
          bevelSegments: 1,
        });
      (U(c, "paint", u, Z(0, d + 0.034, p - 0.05), me("#e9dfc2")), u.dispose());
      for (const x of [1, -1]) {
        const w = p + x * 0.0591,
          _ = d + 0.04,
          M = d + 0.186,
          C = [
            new z(-0.195 * x, _, w),
            new z(0.195 * x, _, w),
            new z(0.137 * x, M, w),
            new z(-0.137 * x, M, w),
          ],
          T = [
            [0.03, 0.05],
            [0.97, 0.05],
            [0.84, 0.97],
            [0.16, 0.97],
          ].map(([N, K]) => ze("taxi_sign", N, K));
        c.quad(
          "decal",
          C[0],
          C[1],
          C[2],
          C[3],
          T[0],
          T[1],
          T[2],
          T[3],
          [1, 1, 1],
        );
      }
    }
  }
  if (r.sticker && !o)
    for (const p of [1, -1]) {
      const [d, i] = r.sticker,
        u = 0.48,
        x = 0.12,
        w = n.doors.find((M) => M.side === p && M.lo[0] <= d && M.lo[1] >= d),
        _ =
          p > 0
            ? [
                [d + u / 2, i],
                [d - u / 2, i],
                [d - u / 2, i + x],
                [d + u / 2, i + x],
              ]
            : [
                [d - u / 2, i],
                [d + u / 2, i],
                [d + u / 2, i + x],
                [d - u / 2, i + x],
              ];
      T0(t.sink(w ? w.key : "body"), "decal", a("side", p), _, {
        nu: 3,
        nv: 1,
        off: 0.0015,
        bulge: 0,
        rim: 0.002,
        uv: (M, C) => ze("taxi_door", M, C),
      });
    }
  if (r.logo && !o)
    for (const p of [1, -1]) {
      const d = p > 0 ? -1.44 : -0.72,
        i = 1.52,
        u = 1.2,
        x = 1.58,
        w =
          p > 0
            ? [
                [d + i / 2, u],
                [d - i / 2, u],
                [d - i / 2, x],
                [d + i / 2, x],
              ]
            : [
                [d - i / 2, u],
                [d + i / 2, u],
                [d + i / 2, x],
                [d - i / 2, x],
              ];
      T0(c, "decal", a("side", p), w, {
        nu: 6,
        nv: 2,
        off: 0.0015,
        bulge: 0,
        rim: 0.002,
        uv: (_, M) => ze("van_logo", _, M),
      });
    }
  if (r.engine) {
    const [p, d] = r.engine,
      i = n.belt(d) - 0.1;
    if (
      (U(
        c,
        o ? "char" : "trim",
        g0(0.58, i - 0.32, d - p - 0.25, 0.04),
        Z(-0.05, (i + 0.32) / 2, (p + d) / 2 - 0.05),
        o ? [1, 1, 1] : [0.05, 0.05, 0.05],
      ),
      U(
        c,
        o ? "iron" : "trim",
        g0(1.1, 0.34, 0.05, 0.01),
        Z(0, 0.52, d - 0.02),
        [0.02, 0.02, 0.02],
      ),
      n.cowl)
    ) {
      const x = n.cowl[0] - 0.03,
        w = n.hw(x) - 0.1;
      U(
        c,
        o ? "burnt" : "trim",
        g0(w * 2, n.belt(x) - 0.3, 0.03, 0.005),
        Z(0, (n.belt(x) + 0.3) / 2, x),
        o ? [0.05, 0.045, 0.04] : [0.03, 0.03, 0.03],
      );
    }
  }
}
