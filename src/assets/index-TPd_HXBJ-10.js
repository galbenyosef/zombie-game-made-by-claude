// assets/index-TPd_HXBJ 10 — add
// Lines 2948-3285 of readable/assets/index-TPd_HXBJ.pretty.js (statement-aligned).
function ua(t, e) {
  const { x0: o, x1: n } = e,
    [a, l] = h.led;
  for (const r of [1, -1]) {
    const p = n - o - 0.3,
      f = Math.max(1, Math.round(p / 1.2)),
      c = p / f;
    for (let d = 0; d < f; d++) {
      const i = o + 0.15 + d * c + 0.03,
        s = o + 0.15 + (d + 1) * c - 0.03,
        m = r * (a[0] + 0.02),
        v = r * (l[0] - 0.02),
        y = a[1] - 0.004 + 0.001,
        w = l[1] - 0.003,
        M =
          r > 0
            ? h0(
                [s, y, m],
                [s, w, v],
                [i, w, v],
                [i, y, m],
                [
                  [0, 0],
                  [0, 1],
                  [1, 1],
                  [1, 0],
                ],
              )
            : h0(
                [i, y, m],
                [i, w, v],
                [s, w, v],
                [s, y, m],
                [
                  [0, 0],
                  [0, 1],
                  [1, 1],
                  [1, 0],
                ],
              );
      t.add(M, null, g.led);
    }
    t.add(
      $0(
        [
          [r * (a[0] + 0.01), a[1] - 0.004],
          [r * (a[0] + 0.01), a[1] + 0.006],
        ],
        o,
        n,
        { out: -r },
      ),
      null,
      g.grille,
    );
  }
}
function pa(t, e) {
  const { x1: o, rng: n } = e,
    [a, l] = h.cove,
    r = ["ad0", "ad1", "ad2", "ad3", "ad4", "ad5", "ad6", "ad7"];
  let p = Math.floor(n() * 8);
  for (const f of [1, -1]) {
    const c = b(0, a[1] - l[1], f * (a[0] - l[0])).normalize(),
      d = b(0, -(l[0] - a[0]), -f * (a[1] - l[1])).normalize(),
      i = b(-f, 0, 0),
      s = (m) => b(0, l[1] + (a[1] - l[1]) * m, f * (l[0] + (a[0] - l[0]) * m));
    for (const [m, v] of be) {
      if (v > o - 0.05) continue;
      const w =
        v - m > 1.2 ? [(m + v) / 2 - 0.35, (m + v) / 2 + 0.35] : [(m + v) / 2];
      for (const M of w) {
        const k = s(0.5);
        ((k.x = M), k.addScaledVector(d, 0.004));
        let P = R[r[p++ % r.length]];
        (e.type === "mid" && f < 0 && Math.abs(M - 2.5) < 0.6 && (P = R.notice),
          t.add(
            U(-0.33, -0.125, -0.006, 0.33, 0.125, 0, 0.004).applyMatrix4(
              new i0()
                .makeBasis(i, c, d.clone())
                .setPosition(k.clone().addScaledVector(d, -0.002)),
            ),
            null,
            g.steel,
          ),
          X(
            t,
            k.clone().addScaledVector(d, 0.001),
            i,
            c,
            0.62,
            0.232,
            P,
            g.decal,
          ));
      }
    }
    for (const m of h.doors) {
      const v = s(0.52);
      ((v.x = m),
        v.addScaledVector(d, 0.004),
        X(t, v, i, c, 1.02, 0.1275, R.route, g.route));
      const y = b(m, 3.035, f * (h.IW - 0.0205));
      (t.add(
        U(m - 0.08, 3.02, f * (h.IW - 0.02), m + 0.08, 3.05, f * h.IW, 0.006),
        null,
        g.black,
      ),
        X(
          t,
          y,
          i,
          b(0, 1, 0),
          0.13,
          0.022,
          [0.45, 0.45, 0.55, 0.55],
          g.doorLamp(f),
          { uv: (w, M, k, P) => [k, P] },
        ));
      for (const w of [m - 0.72, m + 0.72])
        w > e.x1 - 0.05 ||
          (t.add(
            U(
              w - 0.045,
              2.1,
              f * (h.IW - 0.012),
              w + 0.045,
              2.19,
              f * h.IW,
              0.008,
            ),
            null,
            g.alu,
          ),
          X(
            t,
            b(w, 2.145, f * (h.IW - 0.0132)),
            i,
            b(0, 1, 0),
            0.07,
            0.07,
            R.btnOpen,
            g.button(f),
          ));
    }
  }
}
const Ye = [
    [0.86, 1.47],
    [1.2, 1.465],
    [1.228, 1.49],
    [1.232, 1.52],
    [1.215, 1.538],
    [1.1, 1.545],
    [0.95, 1.552],
    [0.875, 1.553],
    [0.842, 1.547],
    [0.824, 1.53],
    [0.82, 1.505],
    [0.828, 1.483],
    [0.845, 1.472],
    [0.86, 1.47],
  ],
  Xe = [
    [1.165, 1.585],
    [1.245, 1.575],
    [1.275, 1.6],
    [1.29, 1.98],
    [1.28, 2],
    [1.255, 2.008],
    [1.228, 2],
    [1.205, 1.96],
    [1.175, 1.66],
    [1.163, 1.61],
    [1.165, 1.585],
  ];
function ha(t, e, o) {
  const { hi: n, x1: a } = o,
    l = ho(o.type),
    r = n ? 6 : 3;
  for (const p of [1, -1]) {
    const f = At(p);
    for (const [d, i, s] of l) {
      const m = (i - d) / s,
        v = (F) => {
          const D = ((F - d) / m) % 1;
          return Math.sin(Math.PI * fo(D));
        },
        y = (F) => {
          const D = ((F - d) / m) % 1,
            z = Math.min(D, 1 - D) * m;
          return 1 - rt(0, 0.03, z);
        },
        w = (F, D, z) => [
          0,
          -(rt(1.53, 1.55, z) * rt(0.83, 0.9, D) * (1 - rt(1.18, 1.23, D))) *
            (0.012 * v(F) + 0.01 * y(F)),
        ],
        M = (F, D, z) => [
          (1 - rt(1.2, 1.24, D)) *
            rt(1.6, 1.7, z) *
            (1 - rt(1.93, 1.99, z)) *
            (0.01 * v(F) + 0.008 * y(F)),
          0,
        ],
        k = $0(Ye, d + 0.01, i - 0.01, { out: 1, nx: s * r, disp: w }),
        P = $0(Xe, d + 0.01, i - 0.01, { out: 1, nx: s * r, disp: M }),
        C = (F) => [F.x, F.y + F.z * 1];
      (t.add(k, f, g.fabric, { uv: (F, D, z, q) => [F.x, q] }),
        t.add(P, f, g.fabric, { uv: (F, D, z, q) => [F.x, q + 0.3] }));
      for (const F of [d + 0.01, i - 0.01])
        (t.add(to(Ye, F, F < (d + i) / 2 ? -1 : 1), f, g.fabric, { uv: C }),
          t.add(to(Xe, F, F < (d + i) / 2 ? -1 : 1), f, g.fabric, { uv: C }));
      (t.add(U(d, 1.43, 0.84, i, 1.47, 1.25, 0.012), f, g.shell),
        t.add(U(d + 0.02, h.FL, 0.9, i - 0.02, 1.44, 0.93, 0.006), f, g.kick),
        t.add(
          s0(d + 0.08, h.FL + 0.04, 0.897, i - 0.08, h.FL + 0.13, 0.9),
          f,
          g.heater,
        ),
        t.add(U(d, 1.56, 1.27, i, 2, 1.3, 0.01), f, g.shell));
    }
    const c = [];
    for (const [d, i] of l)
      for (const s of [d, i]) Math.abs(Math.abs(s) - h.END) > 0.3 && c.push(s);
    for (const d of c) {
      const i =
          c.includes(d) && l.some(([M]) => Math.abs(M - d) < 1e-6) ? -1 : 1,
        s = d + i * 0.015,
        m = h.railZ;
      (t.add(
        U(s - 0.012, 1.18, 0.86, s + 0.012, 1.75, h.IW - 0.005, 0.01),
        f,
        g.shell,
      ),
        t.add(
          j0(
            [b(s, 1.75, h.IW - 0.005), b(s, 1.75, 0.86), b(s, 1.79, 0.82)],
            0.013,
            8,
          ),
          f,
          g.railS,
        ),
        t.add(
          j0(
            [b(s, 2.36, h.IW - 0.005), b(s, 2.36, 0.86), b(s, 2.32, 0.82)],
            0.013,
            8,
          ),
          f,
          g.railS,
        ));
      const v = new en(h.IW - 0.86 - 0.005, 2.35 - 1.76);
      (v.rotateY(Math.PI / 2),
        v.translate(s, (1.76 + 2.35) / 2, (h.IW + 0.86) / 2),
        e.add(v, f, g.screen, { both: !0 }));
      const y = h.railY,
        w = [
          b(s, h.FL, m),
          b(s, y - 0.12, m),
          b(s + i * -0.02, y - 0.04, m),
          b(s + i * -0.1, y, m),
        ];
      (t.add(j0(w, 0.0175, n ? 12 : 8, { cap0: !1 }), f, g.pole),
        t.add(
          L0(
            [
              [0, 0],
              [0.04, 0],
              [0.042, 0.01],
              [0.022, 0.03],
              [0, 0.03],
            ],
            12,
          ).applyMatrix4(J0(s, h.FL, m)),
          f,
          g.steel,
        ));
    }
    for (const [d, i] of l) {
      const s = Math.max(d, o.x0 + 0.15),
        m = Math.min(i, a - 0.15);
      t.add(
        j0(
          [b(s - 0.1, h.railY, h.railZ), b(m + 0.1, h.railY, h.railZ)],
          0.0165,
          n ? 12 : 8,
          { cap0: !0, cap1: !0 },
        ),
        f,
        g.railS,
      );
      const v = Math.max(2, Math.round((m - s) / 1.3) + 1);
      for (let y = 0; y < v; y++) {
        const w = s + ((m - s) * y) / (v - 1);
        (t.add(
          d0(b(w, h.railY, h.railZ), b(w, 3.29, h.railZ - 0.01), 0.012, 8),
          f,
          g.railS,
        ),
          t.add(
            L0(
              [
                [0, 0],
                [0.03, 0],
                [0.03, 0.01],
                [0, 0.01],
              ],
              10,
            ).applyMatrix4(J0(w, 3.282, h.railZ - 0.01)),
            f,
            g.steel,
          ));
      }
      if (o.hi)
        for (let y = s + 0.22; y < m - 0.1; y += 0.42) ma(t, f, y, o.rng);
    }
  }
}
function to(t, e, o) {
  const n = new Q0(t.map(([f, c]) => new c0(f, c))),
    a = new F0(n, 2),
    l = a.attributes.position,
    r = a.attributes.normal;
  for (let f = 0; f < l.count; f++) {
    const c = l.getX(f),
      d = l.getY(f);
    (l.setXYZ(f, e, d, c), r.setXYZ(f, o, 0, 0));
  }
  const p = a.index.array;
  if (o > 0)
    for (let f = 0; f < p.length; f += 3) {
      const c = p[f + 1];
      ((p[f + 1] = p[f + 2]), (p[f + 2] = c));
    }
  return a;
}
