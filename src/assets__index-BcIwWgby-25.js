// assets__index-BcIwWgby 25 — math
// Lines 7276-7682 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Sr(s, o, t, u, e, r, a) {
  const p = [],
    i = Qe.x[1] - Qe.x[0],
    d = Qe.depth,
    y = Ba(i, d),
    w = [];
  for (let h = 0; h < Qe.rows; h++)
    for (const c of [-1, 1]) {
      const M = Qe.z0 + h * Qe.pitch;
      let m = c < 0 ? -2.95 : Qe.x[0],
        k = 0,
        S = 0,
        A = 0;
      (c < 0 && (h === 5 || h === 6)
        ? (A = h === 5 ? 1 : 2)
        : c < 0 && (h === 4 || h === 7)
          ? ((k = h === 4 ? 0.12 : -0.18), (S = h === 4 ? -0.12 : 0.2))
          : c > 0 && h === 9
            ? ((k = -0.07), (S = 0.08))
            : c > 0 && h === 2 && (k = 0.04),
        w.push({ x0: m, z: M + S, yaw: k, tip: A, side: c, r: h }));
    }
  const g = new l0(y, u.oak, w.length);
  ((g.name = "church_pews"), (g.castShadow = !0), (g.receiveShadow = !0));
  const z = new wt();
  (w.forEach((h, c) => {
    let M;
    (h.tip === 1
      ? (M = f0([h.x0 + 0.1, 0.36, h.z + 0.25], [-1.35, 0.25, 0.08]))
      : h.tip === 2
        ? (M = f0([h.x0 - 0.2, 0, h.z + 0.1], [0, -0.5, 0]).multiply(
            f0([0, 0.02, 0], [0, 0, -0.35]),
          ))
        : (M = f0([h.x0 + i / 2, 0, h.z + d / 2], [0, h.yaw, 0]).multiply(
            f0([-i / 2, 0, -d / 2]),
          )),
      g.setMatrixAt(c, z.copy(M)),
      (h.m = M.clone()));
  }),
    o.add(g));
  const x = new dt();
  for (const h of w) {
    let c = 1e9,
      M = -1e9,
      m = 1e9,
      k = -1e9;
    for (const [S, A, b] of [
      [0, 0, -0.16],
      [i, 0, -0.16],
      [0, 0, d],
      [i, 0, d],
      [0, 1, -0.16],
      [i, 1, d],
    ])
      (x.set(S, A, b).applyMatrix4(h.m),
        (c = Math.min(c, x.x)),
        (M = Math.max(M, x.x)),
        (m = Math.min(m, x.z)),
        (k = Math.max(k, x.z)));
    p.push({
      x0: Math.max(c, -S0 + 0.46),
      x1: Math.min(M, S0 - 0.46),
      z0: m,
      z1: k,
      y0: 0,
      y1: 0.95,
    });
  }
  for (const h of w) {
    if (h.tip) continue;
    const c = h.side < 0 ? i - 0.0325 : 0.0325,
      M = r() < 0.3 ? 2 : 1;
    for (let m = 0; m < M; m++) {
      const k = new dt(
        c + (m && h.side < 0 ? -0 : 0),
        0.72,
        0.36 + m * 0.17,
      ).applyMatrix4(h.m);
      N0(
        e,
        k.x,
        k.y,
        k.z,
        0.07 + r() * 0.16,
        0.017 + r() * 0.008,
        h.r < 4 ? a.pewsA : h.r < 8 ? a.pewsB : a.pewsC,
        { lit: r() > 0.07 },
      );
    }
  }
  const v = Mt(-0.075, 0, -0.1, 0.075, 0.028, 0.1, 0.004, "x"),
    n = [];
  for (const h of w) {
    if (h.tip) continue;
    const c = 1 + Math.floor(r() * 3);
    for (let M = 0; M < c; M++)
      n.push(
        new wt().multiplyMatrices(
          h.m,
          f0([0.3 + r() * (i - 0.6), 0.785, -0.07], [0, (r() - 0.5) * 0.4, 0]),
        ),
      );
  }
  for (let h = 0; h < 14; h++) {
    const c = -2.9 + r() * 2,
      M = 48.5 + r() * 6.5;
    n.push(
      f0([c, 0.014, M], [r() < 0.3 ? 0.3 : 0, r() * 6.28, r() < 0.2 ? 0.2 : 0]),
    );
  }
  for (let h = 0; h < 6; h++)
    n.push(f0([1.2 + r() * 1.6, 0.014, 45 + r() * 9], [0, r() * 6.28, 0]));
  const l = new l0(v, u.leather, n.length);
  ((l.name = "church_hymnals"),
    (l.castShadow = !1),
    (l.receiveShadow = !0),
    n.forEach((h, c) => l.setMatrixAt(c, h)),
    o.add(l));
  {
    const S = [],
      A = [],
      b = [];
    for (let R = 0; R <= 120; R++)
      for (let V = 0; V <= 6; V++) {
        const L = 41.35 + (15.699999999999996 * R) / 120,
          K = -1.1 / 2 + (1.1 * V) / 6,
          j =
            Math.exp(-(((L - 42.6) / 0.22) ** 2)) *
              0.035 *
              (0.7 + 0.3 * Math.sin(K * 3)) +
            Math.exp(-(((L - 43.2) / 0.15) ** 2)) * 0.015;
        (S.push(K + Math.sin(L * 0.9) * 0.01, 0.006 + j, L),
          A.push(((K + 1.1 / 2) * 0.8) / 1.1, L));
      }
    for (let R = 0; R < 120; R++)
      for (let V = 0; V < 6; V++) {
        const L = R * 7 + V,
          K = L + 1,
          j = L + 6 + 1,
          O = j + 1;
        b.push(L, j, K, K, j, O);
      }
    const P = new Rt();
    (P.setAttribute("position", new xt(S, 3)),
      P.setAttribute("uv", new xt(A, 2)),
      P.setIndex(b),
      P.computeVertexNormals());
    const _ = P.attributes.normal;
    let I = 0;
    for (let R = 0; R < _.count; R++) I += _.getY(R);
    if (I < 0) {
      const R = P.index.array;
      for (let V = 0; V < R.length; V += 3) {
        const L = R[V + 1];
        ((R[V + 1] = R[V + 2]), (R[V + 2] = L));
      }
      P.computeVertexNormals();
    }
    t("runner", P, { cast: !1 });
  }
  for (const h of [44, 49, 54])
    for (const c of [-1, 1]) {
      const M = c * S0,
        m = a["pier" + (c < 0 ? "W" : "E") + h],
        k = 4 + Math.floor(r() * 4);
      for (let S = 0; S < k; S++) {
        const A = (c < 0 ? 0 : Math.PI) + (r() - 0.5) * 2.2,
          b = r() < 0.6,
          P = b ? 0.5 + r() * 0.08 : 0.72 + r() * 0.25;
        N0(
          e,
          M + Math.cos(A) * P,
          b ? 0.32 : 0,
          h + Math.sin(A) * P,
          0.06 + r() * 0.22,
          0.016 + r() * 0.018,
          m,
          { lit: r() > 0.08 },
        );
      }
    }
  for (const h of [-1, 1]) {
    const c = h * 2.35,
      M = 56.35,
      m = 1.62;
    for (let S = 0; S < 3; S++) {
      const A = S * 2.094 + 0.3;
      t(
        "iron",
        Q0(
          [
            [c + Math.cos(A) * 0.3, 0, M + Math.sin(A) * 0.3],
            [c + Math.cos(A) * 0.2, 0.08, M + Math.sin(A) * 0.2],
            [c, 0.22, M],
          ],
          0.012,
          8,
          5,
        ),
      );
    }
    t(
      "iron",
      Wt(
        [
          [0, 0.2],
          [0.03, 0.2],
          [0.02, 0.3],
          [0.014, m - 0.3],
          [0.03, m - 0.26],
          [0.016, m - 0.22],
          [0.014, m - 0.02],
          [0, m - 0.02],
        ],
        c,
        0,
        M,
        { segs: 10 },
      ),
    );
    const k = [];
    for (let S = 0; S <= 28; S++) {
      const A = (S / 28) * Math.PI * 2;
      k.push([c + Math.cos(A) * 0.3, m, M + Math.sin(A) * 0.3]);
    }
    t("iron", Q0(k, 0.01, 28, 5, !0));
    for (let S = 0; S < 7; S++) {
      const A = (S / 7) * Math.PI * 2,
        b = c + Math.cos(A) * 0.3,
        P = M + Math.sin(A) * 0.3;
      (t("iron", ge([c, m - 0.18, M], [b, m, P], 0.007, 5)),
        t(
          "iron",
          Wt(
            [
              [0, 0],
              [0.035, 0],
              [0.038, 0.012],
              [0.02, 0.02],
              [0.02, 0.06],
              [0, 0.06],
            ],
            b,
            m,
            P,
            { segs: 10 },
          ),
        ),
        N0(
          e,
          b,
          m + 0.06,
          P,
          0.18 + r() * 0.2,
          0.017,
          h < 0 ? a.candW : a.candE,
        ));
    }
    p.push({
      x0: c - 0.32,
      x1: c + 0.32,
      z0: M - 0.32,
      z1: M + 0.32,
      y0: 0,
      y1: 1.9,
    });
  }
  for (const h of [44, 49, 54])
    for (const c of [-1, 1]) {
      const M = c * 6.2 - c * 0.43,
        m = 2.25,
        k = a["sc" + (c < 0 ? "W" : "E") + h];
      (t(
        "iron",
        Mt(
          M - 0.03 * c - 0.015,
          m - 0.2,
          h - 0.07,
          M - 0.03 * c + 0.015,
          m + 0.12,
          h + 0.07,
          0.004,
          "y",
        ),
      ),
        t(
          "iron",
          Q0(
            [
              [M, m - 0.1, h],
              [M - c * 0.16, m - 0.16, h],
              [M - c * 0.3, m - 0.08, h],
              [M - c * 0.34, m, h],
            ],
            0.012,
            12,
            6,
          ),
        ),
        t(
          "iron",
          Q0(
            [
              [M - c * 0.12, m - 0.13, h],
              [M - c * 0.1, m - 0.24, h],
              [M - c * 0.05, m - 0.26, h],
              [M - c * 0.03, m - 0.2, h],
            ],
            0.007,
            8,
            5,
          ),
        ));
      const S = M - c * 0.34;
      t(
        "iron",
        Wt(
          [
            [0, 0],
            [0.13, 0],
            [0.14, 0.02],
            [0.12, 0.025],
            [0, 0.015],
          ],
          S,
          m,
          h,
          { segs: 16 },
        ),
      );
      for (let A = 0; A < 3; A++) {
        const b = A * 2.09 + 0.4;
        N0(
          e,
          S + Math.cos(b) * 0.07,
          m + 0.015,
          h + Math.sin(b) * 0.07,
          0.12 + r() * 0.16,
          0.02,
          k,
          { lit: r() > 0.1 },
        );
      }
      for (let A = 0; A < 7; A++) {
        const b = (c < 0 ? 0 : Math.PI) + (r() - 0.5) * 2.4,
          P = 0.66 + r() * 0.3;
        N0(
          e,
          c * 6.2 + Math.cos(b) * P,
          0,
          h + Math.sin(b) * P,
          0.06 + r() * 0.2,
          0.017 + r() * 0.016,
          k,
          { lit: r() > 0.1 },
        );
      }
    }
  const f = (h, c, M, m, k = 3, S = 9) => {
    const A = S * 0.085 + 0.1,
      b = Math.cos(M),
      P = Math.sin(M),
      _ = (L, K, j) => [h + L * b + j * P, K, c - L * P + j * b],
      I = [];
    for (let L = 0; L < k; L++) {
      const K = 0.7 + L * 0.13,
        j = L * 0.13;
      I.push(Mt(-A / 2, K - 0.02, j - 0.05, A / 2, K, j + 0.05, 0.004, "x"));
      for (let O = 0; O < S; O++) {
        const J = -A / 2 + 0.09 + O * 0.085,
          tt = _(J, K, j);
        N0(e, tt[0], tt[1] + 0.006, tt[2], 0.035, 0.028, m, {
          votive: !0,
          lit: r() > 0.1,
        });
      }
    }
    for (const L of [-A / 2 + 0.02, A / 2 - 0.02])
      (I.push(Mt(L - 0.012, 0, -0.1, L + 0.012, 0.72, -0.076, 0.003, "y")),
        I.push(Mt(L - 0.012, 0, 0.28, L + 0.012, 1.02, 0.304, 0.003, "y")),
        I.push(Mt(L - 0.01, 0.62, -0.1, L + 0.01, 0.64, 0.3, 0.003, "z")));
    I.push(Mt(-A / 2, 0.66, -0.2, A / 2, 0.7, -0.08, 0.004, "x"));
    for (const L of I)
      (L.applyMatrix4(new wt().makeRotationY(M)),
        L.translate(h, 0, c),
        t("iron", L));
    for (let L = 0; L < 5; L++) {
      const K = _(-A / 2 + 0.1 + r() * (A - 0.2), 0.7, -0.14 + r() * 0.04);
      N0(e, K[0], K[1], K[2], 0.12 + r() * 0.12, 0.007, m, { lit: r() > 0.3 });
    }
    const R = A / 2 + 0.05,
      V = 0.35;
    p.push({
      x0: h - Math.abs(b * R) - Math.abs(P * V),
      x1: h + Math.abs(b * R) + Math.abs(P * V),
      z0: c - Math.abs(P * R) - Math.abs(b * V),
      z1: c + Math.abs(P * R) + Math.abs(b * V),
      y0: 0,
      y1: 1.1,
    });
  };
  return (
    f(-4.95, 59.7, Math.PI, a.lady, 3, 11),
    f(5.72, 47.7, Math.PI / 2, a.joseph, 3, 7),
    { colliders: p, pews: g, place: w }
  );
}
