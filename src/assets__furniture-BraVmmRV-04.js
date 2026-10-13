// assets__furniture-BraVmmRV 04 — math
// Lines 1498-1838 of readable/assets__furniture-BraVmmRV.pretty.js (statement-aligned).
function ro(z) {
  const t = [],
    k = [],
    o = [],
    d = [];
  let i = 0;
  for (const Y of z) {
    const n = Y.attributes.position,
      s = Y.attributes.normal,
      c = Y.attributes.uv;
    for (let r = 0; r < n.count; r++)
      (t.push(n.getX(r), n.getY(r), n.getZ(r)),
        k.push(s.getX(r), s.getY(r), s.getZ(r)),
        o.push(c.getX(r), c.getY(r)));
    for (const r of Y.index.array) d.push(r + i);
    i += n.count;
  }
  const f = new E0();
  return (
    f.setAttribute("position", new u0(t, 3)),
    f.setAttribute("normal", new u0(k, 3)),
    f.setAttribute("uv", new u0(o, 2)),
    f.setIndex(d),
    f
  );
}
function io(z, t, k) {
  const o = new R0();
  o.name = "house_bed";
  const d = k,
    i = C0(77),
    { x0: f, x1: Y, z0: n, z1: s } = oo,
    c = (m, I, V) => {
      const G = [
        [0, 0],
        [0.04, 0],
        [0.042, 0.02],
        [0.04, 0.26],
        [0.03, 0.29],
        [0.036, 0.315],
        [0.028, 0.34],
        [0.027, V - 0.14],
        [0.034, V - 0.12],
        [0.036, V - 0.095],
        [0.03, V - 0.075],
        [0.022, V - 0.06],
        [0.028, V - 0.04],
        [0.026, V - 0.02],
        [0.012, V - 0.004],
        [0, V],
      ];
      d.add(H(G, m, 0, I, { segs: 16, tile: 0.8 }), t.wood);
    },
    r = 1.06,
    y = 0.68,
    l = 0.045;
  (c(f + l, s - l, r),
    c(Y - l, s - l, r),
    c(f + l, n + l, y),
    c(Y - l, n + l, y),
    d.add(
      Z(
        f + 0.02,
        0.22,
        n + l + 0.03,
        f + 0.055,
        0.39,
        s - l - 0.03,
        0.006,
        "z",
      ),
      t.wood,
    ),
    d.add(
      Z(
        Y - 0.055,
        0.22,
        n + l + 0.03,
        Y - 0.02,
        0.39,
        s - l - 0.03,
        0.006,
        "z",
      ),
      t.wood,
    ));
  const N = s - l,
    b = f + l + 0.03,
    A = Y - l - 0.03;
  d.add(Z(b, 0.3, N - 0.018, A, 0.37, N + 0.018, 0.006, "x"), t.wood);
  for (let m = 0; m < 5; m++) {
    const I = b + (m * (A - b)) / 5 + 0.004,
      V = b + ((m + 1) * (A - b)) / 5 - 0.004,
      G = 0.86 + 0.08 * Math.sin(Math.PI * (((I + V) / 2 - b) / (A - b)));
    d.add(Z(I, 0.36, N - 0.012, V, G, N + 0.012, 0.004, "y"), t.wood);
  }
  {
    const m = [];
    for (let G = 0; G <= 24; G++) {
      const _ = G / 24,
        j = b - 0.02 + _ * (A - b + 0.04);
      m.push([j, 0.86 + 0.085 * Math.sin(Math.PI * _)]);
    }
    const V = lo(m, N, 0.075, 0.032);
    d.add(V, t.wood);
  }
  const P = n + l;
  for (let m = 0; m < 3; m++) {
    const I = b + (m * (A - b)) / 3 + 0.004,
      V = b + ((m + 1) * (A - b)) / 3 - 0.004;
    d.add(Z(I, 0.3, P - 0.012, V, 0.55, P + 0.012, 0.004, "y"), t.wood);
  }
  d.add(
    Z(b - 0.02, 0.55, P - 0.024, A + 0.02, 0.6, P + 0.024, 0.008, "x"),
    t.wood,
  );
  for (let m = n + 0.2; m < s - 0.1; m += 0.28)
    d.add(Z(f + 0.05, 0.33, m, Y - 0.05, 0.36, m + 0.09, 0.004, "x"), t.plank);
  const w = f + 0.07,
    E = Y - 0.07,
    X = n + 0.075,
    v = s - 0.075,
    W = 0.56;
  d.add(Z(w, 0.36, X, E, W - 0.02, v, 0.05, "z", 3), t.ticking);
  const R = (m, I, V) =>
      V *
      (i.fbm2(m * 3.1, I * 3.1, 3) * 0.6 +
        Math.pow(1 - Math.abs(i.n2(m * 6.5 + 3, I * 2.7)), 6) * 0.8),
    a = (m, I) =>
      -0.018 *
      Math.exp(-(((m - 8.6) / 0.28) ** 2)) *
      r0(204.8, 205.3, I) *
      (1 - r0(206, 206.4, I)),
    e = (m, I) => W + 0.004 + a(m, I) + R(m, I, 0.004),
    h = wt({
      x0: w + 0.01,
      x1: E - 0.01,
      z0: X + 0.01,
      z1: v - 0.01,
      top: e,
      hang: { w: 0.14, e: 0.14, n: 0.05, s: 0.05 },
      r: 0.05,
      res: 0.03,
      floor: 0.34,
    });
  d.add(h, t.linen);
  const g = v - 0.56,
    M = (m, I) => {
      const V = e(m, I) + 0.035,
        G = 0.006 * i.fbm2(m * 5 + 2, I * 5 - 1, 3),
        _ =
          0.012 *
          Math.pow(Math.max(0, i.n2(m * 2.2 + 7, I * 5.5)), 2) *
          r0(n + 0.1, n + 0.6, I);
      return V + G + _;
    },
    u = (m, I, V) => (G, _, j) =>
      m *
        (Math.sin(
          _ * (6.2831 / I) + V + (G === "e" ? 1.3 : G === "w" ? 2.9 : 0.4),
        ) *
          0.6 +
          i.n2(_ * 7 + V, G.charCodeAt(0)) * 0.4) *
        r0(0.02, 0.2, j) +
      0.012 * r0(0, 0.1, j),
    p = wt({
      x0: w - 0.005,
      x1: E + 0.005,
      z0: X - 0.005,
      z1: g,
      top: M,
      hang: { w: 0.3, e: 0.3, n: 0.26, s: 0 },
      r: 0.07,
      res: 0.02,
      floor: 0.08,
      fold: u(0.03, 0.34, 1.7),
      hem: (m, I) => 0.92 + 0.08 * i.n2(I * 4 + (m === "n" ? 5 : 1), 3),
    });
  d.add(p, t.quilt);
  {
    const m = V0(
      (I, V) => {
        const G = w - 0.02 + I * (E - w + 0.04),
          _ = g - 0.2 + V * 0.215,
          j =
            0.018 * Math.sin(Math.PI * tt((_ - (g - 0.2)) / 0.215, 0, 1)) +
            0.012 * r0(g - 0.05, g + 0.01, _);
        return [
          G,
          M(tt(G, w, E), Math.min(_, g)) +
            0.01 +
            j +
            0.002 * i.n2(G * 9, _ * 9),
          _,
        ];
      },
      60,
      10,
      1.3,
      0.22,
      !1,
      !1,
    );
    (yt(m), st(m, "xz", 1), d.add(m, t.backing));
    for (const I of [-1, 1]) {
      const V = V0(
        (G, _) => {
          const j = g - 0.2 + G * 0.215,
            L = I < 0 ? w - 0.02 : E + 0.02,
            J = M(tt(L, w, E), Math.min(j, g)) + 0.012;
          return [L + I * (0.01 + 0.015 * _), J - _ * 0.26, j];
        },
        8,
        10,
        0.22,
        0.26,
        !1,
        I > 0,
      );
      (st(V, "zy", 1), d.add(V, t.backing));
    }
  }
  const x = v - 0.33,
    S = (w + E) / 2;
  (vt(
    d,
    t.linen,
    i,
    S + 0.04,
    x,
    0.33,
    0.2,
    0.085,
    { x: 0.05, z: 0.02, r: 0.12, d: 0.035 },
    e(S, x) + 0.02,
    0,
    0.03,
  ),
    vt(
      d,
      t.linen,
      i,
      S - 0.03,
      v - 0.07,
      0.31,
      0.19,
      0.075,
      null,
      W + 0.2,
      -1.2,
      -0.04,
    ));
  {
    const m = X + 0.06,
      I = X + 0.42,
      V = V0(
        (G, _) => {
          const j = w - 0.03 + G * (E - w + 0.06),
            L = m + _ * (I - m),
            J = Math.sin(Math.PI * _);
          return [
            j,
            M(tt(j, w, E), L) +
              0.004 +
              0.045 * Math.pow(J, 0.4) +
              0.006 * i.n2(j * 7, L * 11),
            L,
          ];
        },
        40,
        14,
        1.4,
        0.36,
        !1,
        !1,
      );
    (yt(V), st(V, "xz", 1), d.add(V, t.wool));
  }
  return {
    group: o,
    colliders: [{ x0: f, x1: Y, z0: n, z1: s, y0: 0, y1: 0.7 }],
    sheetTop: e,
    quiltTop: M,
  };
}
function lo(z, t, k, o) {
  const d = [],
    i = [];
  for (const [s, c] of z)
    d.push(
      s,
      c + 0.01,
      t - o / 2,
      s,
      c + 0.01,
      t + o / 2,
      s,
      c - k,
      t + o / 2,
      s,
      c - k,
      t - o / 2,
    );
  const f = z.length;
  for (let s = 0; s < f - 1; s++)
    for (let c = 0; c < 4; c++) {
      const r = s * 4 + c,
        y = s * 4 + ((c + 1) % 4),
        l = (s + 1) * 4 + c,
        N = (s + 1) * 4 + ((c + 1) % 4);
      i.push(r, l, y, y, l, N);
    }
  const Y = new E0();
  (Y.setAttribute("position", new u0(d, 3)),
    Y.setIndex(i),
    Y.computeVertexNormals());
  const n = new Float32Array((d.length / 3) * 2);
  for (let s = 0; s < d.length / 3; s++)
    ((n[s * 2] = d[s * 3]), (n[s * 2 + 1] = d[s * 3 + 1]));
  return (Y.setAttribute("uv", new K0(n, 2)), uo(Y));
}
function uo(z) {
  const t = z.attributes.position,
    k = z.attributes.normal;
  let o = 0,
    d = 0;
  for (let f = 0; f < t.count; f++) ((o += t.getY(f)), (d += t.getZ(f)));
  ((o /= t.count), (d /= t.count));
  let i = 0;
  for (let f = 0; f < t.count; f++)
    i += (t.getY(f) - o) * k.getY(f) + (t.getZ(f) - d) * k.getZ(f);
  if (i < 0) {
    const f = z.index.array;
    for (let Y = 0; Y < f.length; Y += 3) {
      const n = f[Y + 1];
      ((f[Y + 1] = f[Y + 2]), (f[Y + 2] = n));
    }
    z.computeVertexNormals();
  }
  return z;
}
