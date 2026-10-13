// assets__index-BcIwWgby 20 — math
// Lines 5537-5875 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Wo(s, o, t, { stop: u = 0, small: e = !1, rng: r }) {
  const a = u || 0.62,
    p = Z0 - 0.68,
    i = e ? 0.17 : 0.3,
    d = e ? 0.1 : 0.13,
    y = e ? 0 : 0.075,
    w = (f, h, c, M) => {
      const m = new Pt(c, c, p - a, M, 1, !0);
      m.translate(o + f, (a + p) / 2, t + h);
      const k = m.attributes.uv,
        S = m.attributes.position,
        A = Math.max(1, Math.round((2 * Math.PI * c) / 0.5)) * 0.5,
        b = (o * 3.1 + t * 1.7) % 2;
      for (let P = 0; P < k.count; P++)
        k.setXY(P, k.getX(P) * A + b, S.getY(P));
      s("stone", m);
    };
  w(0, 0, i, 20);
  for (let f = 0; f < 4; f++) {
    const h = (f * Math.PI) / 2;
    w(Math.cos(h) * i, Math.sin(h) * i, d, 14);
  }
  if (y)
    for (let f = 0; f < 4; f++) {
      const h = Math.PI / 4 + (f * Math.PI) / 2;
      w(Math.cos(h) * (i + 0.04), Math.sin(h) * (i + 0.04), y, 10);
    }
  const g = i + d;
  if (u)
    (s(
      "stone",
      Wt(
        [
          [0, u - 0.75],
          [0.06, u - 0.74],
          [g * 0.45, u - 0.55],
          [g * 0.8, u - 0.3],
          [g + 0.08, u - 0.12],
          [g + 0.1, u - 0.04],
          [g + 0.04, u],
          [0, u],
        ],
        o,
        0,
        t,
        { segs: 24, tile: 1 },
      ),
    ),
      s(
        "stone",
        A0(
          (f, h) =>
            g * (0.35 + 0.6 * h) +
            0.05 *
              Math.pow(Math.max(0, Math.cos(f * 4 + 0.4)), 0.6) *
              Math.sin(Math.PI * h),
          (f) => u - 0.7 + f * 0.55,
          32,
          6,
          o,
          t,
        ),
      ));
  else {
    const f = new Pt(g + 0.19, g + 0.21, 0.32, 8, 1);
    (f.rotateY(Math.PI / 8),
      f.translate(o, 0.16, t),
      s("stone", f),
      s(
        "stone",
        Wt(
          [
            [0, 0.32],
            [g + 0.16, 0.32],
            [g + 0.17, 0.35],
            [g + 0.16, 0.39],
            [g + 0.12, 0.41],
            [g + 0.07, 0.44],
            [g + 0.06, 0.47],
            [g + 0.09, 0.5],
            [g + 0.1, 0.53],
            [g + 0.08, 0.56],
            [g + 0.03, 0.59],
            [g, 0.62],
            [0, 0.62],
          ],
          o,
          0,
          t,
          { segs: 32, tile: 1 },
        ),
      ));
  }
  const z = p;
  s(
    "stone",
    Wt(
      [
        [g + 0.005, z - 0.01],
        [g + 0.035, z + 0.01],
        [g + 0.04, z + 0.035],
        [g + 0.01, z + 0.06],
        [0, z + 0.06],
      ],
      o,
      0,
      t,
      { segs: 28, tile: 1 },
    ),
  );
  const x = e ? 6 : 10,
    v = r() * 6;
  s(
    "stone",
    A0(
      (f, h) => {
        const c = g - 0.02 + 0.2 * h * h,
          M = Math.pow(Math.max(0, Math.cos(f * x + v)), 0.7),
          m = Math.pow(Math.max(0, Math.cos(f * x + v + Math.PI)), 0.9),
          k = h > 0.62 ? Math.sin(((h - 0.62) / 0.38) * Math.PI) : 0;
        return (
          c +
          0.035 * M * Math.sin(Math.PI * Math.min(1, h * 1.3)) +
          0.09 * M * k +
          0.03 * m * Math.sin(Math.PI * h)
        );
      },
      (f) => z + 0.06 + f * 0.4,
      e ? 36 : 60,
      10,
      o,
      t,
    ),
  );
  const n = new Pt(g + 0.24, g + 0.2, 0.2, 8, 1);
  (n.rotateY(Math.PI / 8), n.translate(o, Z0 - 0.1, t), s("stone", n));
  const l = new Pt(g + 0.2, g + 0.14, 0.06, 8, 1);
  (l.rotateY(Math.PI / 8), l.translate(o, Z0 - 0.23, t), s("stone", l));
}
const ir = [
    [-0.1, -0.06],
    [-0.1, 0.06],
    [-0.055, 0.13],
    [-0.055, 0.17],
    [-0.02, 0.24],
    [0.02, 0.24],
    [0.055, 0.17],
    [0.055, 0.13],
    [0.1, 0.06],
    [0.1, -0.06],
  ],
  lr = [
    [-0.15, -0.06],
    [-0.15, 0.08],
    [-0.1, 0.14],
    [-0.1, 0.22],
    [-0.05, 0.28],
    [-0.05, 0.33],
    [0.05, 0.33],
    [0.05, 0.28],
    [0.1, 0.22],
    [0.1, 0.14],
    [0.15, 0.08],
    [0.15, -0.06],
  ],
  hr = [
    [-0.24, -0.06],
    [-0.24, 0.1],
    [-0.18, 0.16],
    [-0.18, 0.28],
    [-0.11, 0.34],
    [-0.11, 0.44],
    [0.11, 0.44],
    [0.11, 0.34],
    [0.18, 0.28],
    [0.18, 0.16],
    [0.24, 0.1],
    [0.24, -0.06],
  ],
  ia = [
    [-0.12, -0.06],
    [-0.12, 0.05],
    [-0.07, 0.1],
    [0.07, 0.1],
    [0.12, 0.05],
    [0.12, -0.06],
  ];
function ur(s, o, t, u, e = 14, r = 7) {
  const a = ue((o - s) / 2, oo),
    p = ue((u - t) / 2, oo),
    i = (s + o) / 2,
    d = (t + u) / 2,
    y = Math.acos((p.R - p.a) / p.R),
    w = [];
  for (let l = 0; l <= e; l++) w.push(p.R * Math.sin((y * l) / e));
  w[e] = oo;
  const g = (l) => p.R * Math.asin(Math.min(1, l / p.R)),
    z = (l) => a.R * Math.asin(Math.min(1, l / a.R)),
    x = [];
  for (let l = 0; l <= e; l++) x.push([l, 1]);
  for (let l = e - 1; l >= 0; l--) x.push([l, -1]);
  const v = [];
  for (const l of [-1, 1]) {
    const f = [],
      h = [];
    for (const [c, M] of x) {
      const m = w[c],
        k = M > 0 ? t + p.inv(m) : u - p.inv(m),
        S = a.inv(m),
        A = M > 0 ? g(m) : 2 * g(oo) - g(m);
      for (let b = 0; b <= r; b++) {
        const P = b / r,
          _ = l < 0 ? s + P * S : o - P * S;
        (f.push([_, Z0 + m, k]), h.push([_, A]));
      }
    }
    v.push({ P: f, UV: h, cols: r + 1, rows: x.length });
  }
  for (const l of [-1, 1]) {
    const f = [],
      h = [];
    for (const [c, M] of x) {
      const m = w[c],
        k = M > 0 ? s + a.inv(m) : o - a.inv(m),
        S = p.inv(m),
        A = M > 0 ? z(m) : 2 * z(oo) - z(m);
      for (let b = 0; b <= r; b++) {
        const P = b / r,
          _ = l < 0 ? t + P * S : u - P * S;
        (f.push([k, Z0 + m, _]), h.push([_, A]));
      }
    }
    v.push({ P: f, UV: h, cols: r + 1, rows: x.length });
  }
  const n = [];
  for (const [l, f] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ]) {
    const h = [];
    for (let c = 0; c <= e; c++) {
      const M = w[c];
      h.push([
        l < 0 ? s + a.inv(M) : o - a.inv(M),
        Z0 + M,
        f < 0 ? t + p.inv(M) : u - p.inv(M),
      ]);
    }
    n.push(h);
  }
  return { A: a, B: p, xc: i, zc: d, webs: v, groins: n };
}
function fr(s, o) {
  const t = [],
    u = [],
    e = new Map(),
    r = [],
    a = (x, v, n) => x.base + v * x.cols + n;
  for (const x of s) {
    x.base = t.length / 3;
    for (let v = 0; v < x.P.length; v++)
      (t.push(...x.P[v]), u.push(x.UV[v][0], x.UV[v][1]));
    for (let v = 0; v < x.rows - 1; v++)
      for (let n = 0; n < x.cols - 1; n++) {
        const l = a(x, v, n),
          f = a(x, v, n + 1),
          h = a(x, v + 1, n),
          c = a(x, v + 1, n + 1);
        for (const M of [
          [l, f, h],
          [f, c, h],
        ]) {
          const m = (t[M[0] * 3] + t[M[1] * 3] + t[M[2] * 3]) / 3,
            k = (t[M[0] * 3 + 2] + t[M[1] * 3 + 2] + t[M[2] * 3 + 2]) / 3;
          (o && ds(m, k) > 0) || r.push(M);
        }
      }
  }
  const p = new Rt();
  (p.setAttribute("position", new xt(t, 3)),
    p.setAttribute("uv", new xt(u, 2)),
    p.setIndex(r.flat()),
    p.computeVertexNormals());
  const i = p.attributes.normal;
  let d = 0;
  for (let x = 0; x < i.count; x++) d += i.getY(x);
  if (d > 0) {
    const x = p.index.array;
    for (let v = 0; v < x.length; v += 3) {
      const n = x[v + 1];
      ((x[v + 1] = x[v + 2]), (x[v + 2] = n));
    }
    p.computeVertexNormals();
  }
  if (!o) return [p];
  for (const x of r)
    for (let v = 0; v < 3; v++) {
      const n = x[v],
        l = x[(v + 1) % 3],
        f = n < l ? n + "_" + l : l + "_" + n;
      e.set(f, (e.get(f) || 0) + 1);
    }
  const y = [],
    w = [],
    g = (x) => new dt(t[x * 3], t[x * 3 + 1], t[x * 3 + 2]);
  for (const x of r)
    for (let v = 0; v < 3; v++) {
      const n = x[v],
        l = x[(v + 1) % 3],
        f = n < l ? n + "_" + l : l + "_" + n;
      if (e.get(f) !== 1) continue;
      const h = g(n),
        c = g(l),
        M = (h.x + c.x) / 2,
        m = (h.z + c.z) / 2;
      if (ds(M, m) < -0.3) continue;
      const k = new dt(i.getX(n), i.getY(n), i.getZ(n)),
        S = new dt(i.getX(l), i.getY(l), i.getZ(l)),
        A = 0.22 + 0.08 * Math.sin(M * 13.1 + m * 7.3),
        b = h.clone().addScaledVector(k, -A),
        P = c.clone().addScaledVector(S, -A),
        _ = g(x[(v + 2) % 3]),
        I = new dt()
          .subVectors(h.clone().add(c).multiplyScalar(0.5), _)
          .normalize();
      let R = [h, c, P, h, P, b];
      new dt().subVectors(c, h).cross(new dt().subVectors(P, h)).dot(I) < 0 &&
        (R = [h, P, c, h, b, P]);
      for (const L of R) (y.push(L.x, L.y, L.z), w.push(I.x, I.y, I.z));
    }
  const z = new Rt();
  return (
    z.setAttribute("position", new xt(y, 3)),
    z.setAttribute("normal", new xt(w, 3)),
    [p, Ct(z)]
  );
}
