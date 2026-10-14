// assets/index-DQDjAbEY 09 — math
// Lines 2439-2769 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function Ra(e, l, a) {
  const s = [],
    n = [],
    c = [];
  for (let f = 0; f <= 46; f++) {
    const p = f / 46;
    c.push(
      x0(it.z0, it.z1, p - (0.12 * Math.sin(2 * Math.PI * p)) / (2 * Math.PI)),
    );
  }
  const i = (f, p) => {
    const m = Ut(f);
    let x = m.W,
      w = m.T - m.B;
    if (f > 0.86) {
      const F = m0((f - 0.86) / (it.z1 - 0.86)),
        A = Math.pow(Math.max(0, 1 - Math.pow(F, 2.2)), 1 / 2.2);
      ((x *= Math.max(A, 0.02)), (w *= Math.max(A, 0.05)));
    }
    const v = Math.cos(p),
      u = Math.sin(p),
      g = x * Math.sign(v) * Math.pow(Math.abs(v), 2 / m.p),
      P = he(Math.min(Math.abs(g), 0.8), f),
      k = Number.isFinite(P) ? Math.max(P - 0.012, 2) : 2.12,
      y = m.B + w,
      M = k + (y - k) * Math.pow(Math.abs(u), 2 / m.p);
    return h(g, M, f);
  };
  for (let f = 0; f <= 46; f++)
    for (let p = 0; p <= 34; p++) {
      const m = i(c[f], (p / 34) * Math.PI);
      s.push(m.x, m.y, m.z);
    }
  for (let f = 0; f < 46; f++)
    for (let p = 0; p < 34; p++) {
      const m = f * 35 + p,
        x = m + 34 + 1;
      n.push(m, m + 1, x, m + 1, x + 1, x);
    }
  const d = new K0();
  (d.setAttribute("position", new L0(s, 3)),
    d.setIndex(n),
    d.computeVertexNormals(),
    e.add(d, null, l));
  for (const f of [1, -1]) {
    const v = Ut(-0.6).W,
      u = new de(-0.22 - -0.92, 2.62 - 2.3, 4, 3),
      g = new b0()
        .makeRotationY((f * Math.PI) / 2)
        .setPosition(f * (v - 0.004), (2.3 + 2.62) / 2, (-0.92 + -0.22) / 2);
    e.add(u, g, S.grille);
    const P = [
      h(f * v, 2.3, -0.92),
      h(f * v, 2.3, -0.22),
      h(f * v, 2.62, -0.22),
      h(f * v, 2.62, -0.92),
    ];
    e.add(
      v0(fe([...P, P[0], P[1]], 0.04, 4), 0.012, 6),
      null,
      a ? S.odPaint : S.whitePaint,
    );
  }
  for (const f of [1, -1]) {
    const p = we(
        [
          h(f * 0.26, 2.62, -1.78),
          h(f * 0.31, 2.74, -1.98),
          h(f * 0.37, 2.86, -2.2),
          h(f * 0.41, 2.93, -2.34),
        ],
        10,
      ),
      m = v0(p, (k) => [0.12 - 0.01 * k, 0.09], 18, { up: h(0, 1, 0) });
    e.add(m, null, S.dark, { both: S.sootInside, wear: () => [0.6, 0, 1, 0] });
    const x = [],
      w = p[p.length - 1],
      v = w
        .clone()
        .sub(p[p.length - 2])
        .normalize(),
      u = h(0, 1, 0),
      g = u.clone().cross(v).normalize(),
      P = v.clone().cross(g).normalize();
    for (let k = 0; k <= 24; k++) {
      const y = (k / 24) * Math.PI * 2;
      x.push(
        w
          .clone()
          .addScaledVector(g, Math.cos(y) * 0.11)
          .addScaledVector(P, Math.sin(y) * 0.09),
      );
    }
    e.add(v0(x, 0.012, 6), null, S.dark, { wear: () => [0.5, 0, 1, 0] });
  }
  (e.add(
    W0(
      [
        [0.33, 2.78],
        [0.31, 2.86],
        [0.25, 2.93],
        [0.17, 2.98],
        [0.12, 3],
        [0, 3],
      ],
      40,
    ),
    z(0, 0, 0.02),
    l,
  ),
    e.add(
      new de(0.42, 0.34, 2, 2),
      z(0, 2.885, -0.62, -Math.PI / 2),
      S.grille,
    ));
}
function ka(e, l, a, o) {
  const s = (i) => {
      const d = ie(i),
        f = [];
      for (let p = 0; p < 28; p++) {
        const m = (p / 28) * Math.PI * 2;
        f.push(h(Math.cos(m) * d.rx, d.C + Math.sin(m) * d.ry, i));
      }
      return f;
    },
    n = (i, d, f, p, m) => {
      const x = [],
        w = [];
      for (let u = 0; u <= p; u++) {
        const g = x0(d, f, u / p);
        for (const P of s(g)) x.push(P.x, P.y, P.z);
      }
      for (let u = 0; u < p; u++)
        for (let g = 0; g < 28; g++) {
          const P = u * 28 + g,
            k = u * 28 + ((g + 1) % 28),
            y = P + 28,
            M = k + 28;
          w.push(P, y, k, k, y, M);
        }
      const v = new K0();
      (v.setAttribute("position", new L0(x, 3)),
        v.setIndex(w),
        v.computeVertexNormals(),
        i.add(v, null, a, m));
    };
  (n(e, O0.z0 + 0.05, O0.brk + 0.6, 22, {}),
    n(e, O0.brk + 0.6, O0.brk, 6, { both: S.sootInside }),
    n(l, O0.brk, O0.brk - 0.6, 6, { both: S.sootInside }),
    n(l, O0.brk - 0.6, O0.z1, 8, {}));
  {
    const i = ie(O0.z1);
    l.add(
      new ue(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2),
      z(0, i.C, O0.z1, -Math.PI / 2, 0, 0, i.rx, 0.1, i.ry),
      a,
    );
  }
  const c = (i, d, f) => {
    const p = [];
    for (let m = 0; m <= 12; m++) {
      const x = x0(d, f, m / 12),
        w = ie(x);
      p.push(h(0, w.C + w.ry - 0.012, x));
    }
    i.add(v0(p, [0.075, 0.05], 14, { up: h(1, 0, 0) }), null, a);
  };
  (c(e, -2.55, O0.brk), c(l, O0.brk, -6.2));
  {
    const i = [];
    for (let d = 0; d <= 10; d++) {
      const f = x0(-3.2, -2.3, d / 10),
        p = ie(f);
      i.push(h(0, p.C + 0.01, f));
    }
    e.add(
      v0(
        i,
        (d) => {
          const f = ie(x0(-3.2, -2.3, d));
          return [f.rx * (1 + 0.06 * d), f.ry * (1 + 0.06 * d)];
        },
        28,
        { up: h(1, 0, 0) },
      ),
      null,
      a,
    );
  }
}
function za(e, l, a) {
  e.add(
    Le(
      [
        {
          o: h(-1.2, 1.985, -4.76 - 0.03),
          c: 0.47,
          t: 0.12,
          chord: h(0, 0, -1),
          up: h(0, 1, 0),
        },
        {
          o: h(0, 1.985, -4.76),
          c: 0.54,
          t: 0.12,
          chord: h(0, 0, -1),
          up: h(0, 1, 0),
        },
        {
          o: h(1.2, 1.985, -4.76 - 0.03),
          c: 0.47,
          t: 0.12,
          chord: h(0, 0, -1),
          up: h(0, 1, 0),
        },
      ],
      12,
    ),
    null,
    a,
  );
  for (const n of [1, -1]) {
    const c = 3 * je * n,
      i = h(-Math.sin(c), 0, -Math.cos(c)),
      d = h(n, 0, 0);
    e.add(
      Le(
        [
          {
            o: h(n * (1.2 + 0.012), 1.76, -4.76 + 0.06),
            c: 0.36,
            t: 0.1,
            chord: i,
            up: d,
          },
          {
            o: h(n * (1.2 + 0.012), 2, -4.76 + 0.01),
            c: 0.46,
            t: 0.1,
            chord: i,
            up: d,
          },
          {
            o: h(n * (1.2 + 0.03), 2.3, -4.76 - 0.07),
            c: 0.36,
            t: 0.1,
            chord: i,
            up: d,
          },
        ],
        10,
      ),
      null,
      a,
    );
  }
  (l.add(
    Le(
      [
        {
          o: h(0, 1.98, -6.1),
          c: 0.98,
          t: 0.11,
          chord: h(0, 0, -1),
          up: h(1, 0, 0),
        },
        {
          o: h(0, 2.6, -6.4),
          c: 0.74,
          t: 0.11,
          chord: h(0, 0, -1),
          up: h(1, 0, 0),
        },
        {
          o: h(0, 3.24, -6.74),
          c: 0.52,
          t: 0.11,
          chord: h(0, 0, -1),
          up: h(1, 0, 0),
        },
      ],
      12,
    ),
    null,
    a,
  ),
    l.add(new ue(1, 16, 8), z(0, 3.24, -7, 0, 0, 0, 0.03, 0.04, 0.27), a),
    l.add(
      Le(
        [
          {
            o: h(0, 2.02, -6.48),
            c: 0.5,
            t: 0.12,
            chord: h(0, 0, -1),
            up: h(1, 0, 0),
          },
          {
            o: h(0, 1.55, -6.66),
            c: 0.34,
            t: 0.12,
            chord: h(0, 0, -1),
            up: h(1, 0, 0),
          },
        ],
        10,
      ),
      null,
      a,
    ),
    l.add(
      v0(
        fe(
          [
            h(0, 1.58, -6.7),
            h(0, 1.42, -6.86),
            h(0, 1.42, -7.08),
            h(0, 1.5, -7.2),
          ],
          0.06,
          5,
        ),
        0.016,
        8,
        { cap0: !0, cap1: !0 },
      ),
      null,
      S.steel,
    ));
}
