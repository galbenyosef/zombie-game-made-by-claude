// assets/bedroom-Se-_w21f 03 — math
// Lines 421-561 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
function Tt(N, t) {
  const w = N.attributes.position;
  for (let e = 0; e < w.count; e++)
    w.getX(e) > t && w.setX(e, t - (w.getX(e) - t) * 0.04);
  N.computeVertexNormals();
}
function Ae(N, t, w, e) {
  const o = N.attributes.position,
    M = N.index.array,
    s = [],
    h = (i) => Math.min(3.135, Math.max(1.665, i));
  for (let i = 0; i < M.length; i += 3) {
    let z = 0;
    for (let D = 0; D < 3; D++) {
      const C = M[i + D],
        V = o.getZ(C);
      o.getX(C) < t(h(V)) - 0.01 && (V < w + 0.001 || V > e - 0.001) && z++;
    }
    z === 0 && s.push(M[i], M[i + 1], M[i + 2]);
  }
  N.setIndex(s);
}
function Xe(N, t, w, e, o) {
  const s = (F, G) =>
      Math.pow(Math.max(0, 1 - Math.pow(Math.abs(F), 2.2)), 0.62) *
      Math.pow(Math.max(0, 1 - Math.pow(Math.abs(G), 2.4)), 0.55),
    h = (F, G, m) => {
      const S = F * 2 - 1,
        u = G * 2 - 1,
        c = S * N * (1 - 0.07 * (1 - u * u)),
        g = u * t * (1 - 0.05 * (1 - S * S)),
        b = s(S, u);
      let p;
      if (m) {
        if (((p = w * Math.pow(b, 0.75)), e)) {
          const v = ((c - e.x) ** 2 + (g - e.z) ** 2) / (e.r * e.r);
          p -= e.d * Math.exp(-v) * b;
        }
        p +=
          0.004 * o.n2(c * 18 + 3, g * 18) * b +
          0.003 * Math.pow(1 - Math.abs(o.n2(c * 9, g * 9 + 5)), 5) * b;
      } else p = -Math.min(w * b, w * 0.3);
      return [c, p, g];
    },
    i = bt((F, G) => h(F, G, !0), 40, 40, 2 * N, 2 * t, !1, !1),
    z = bt((F, G) => h(F, G, !1), 40, 40, 2 * N, 2 * t, !1, !0),
    D = (F, G) => {
      let m = 0;
      const S = F.attributes.normal;
      for (let u = 0; u < S.count; u++) m += S.getY(u);
      if (Math.sign(m) !== G) {
        const u = F.index.array;
        for (let c = 0; c < u.length; c += 3) {
          const g = u[c + 1];
          ((u[c + 1] = u[c + 2]), (u[c + 2] = g));
        }
        F.computeVertexNormals();
      }
    };
  (D(i, 1), D(z, -1));
  const C = new ot(),
    V = [i, z];
  let A = 0,
    x = 0;
  for (const F of V) ((A += F.attributes.position.count), (x += F.index.count));
  const k = new Float32Array(A * 3),
    _ = new Float32Array(A * 3),
    y = new Float32Array(A * 2),
    L = new Uint32Array(x);
  let W = 0,
    X = 0;
  for (const F of V) {
    (k.set(F.attributes.position.array, W * 3),
      _.set(F.attributes.normal.array, W * 3),
      y.set(F.attributes.uv.array, W * 2));
    const G = F.index.array;
    for (let m = 0; m < G.length; m++) L[X + m] = G[m] + W;
    ((W += F.attributes.position.count), (X += G.length));
  }
  return (
    C.setAttribute("position", new R0(k, 3)),
    C.setAttribute("normal", new R0(_, 3)),
    C.setAttribute("uv", new R0(y, 2)),
    C.setIndex(new R0(L, 1)),
    C
  );
}
function _e(N, t, w, e, o) {
  const M = N.attributes.position,
    s = N.attributes.normal,
    h = N.index.array,
    i = t - e / 2,
    z = w - o / 2,
    D = (k) => {
      const _ = M.getX(k),
        y = M.getZ(k);
      return (
        _ >= i - 0.02 && _ <= i + e + 0.02 && y >= z - 0.02 && y <= z + o + 0.02
      );
    },
    C = [],
    V = [],
    A = [];
  for (let k = 0; k < h.length; k += 3)
    if (!(!D(h[k]) || !D(h[k + 1]) || !D(h[k + 2])))
      for (let _ = 0; _ < 3; _++) {
        const y = h[k + _];
        (C.push(
          M.getX(y) + s.getX(y) * 4e-4,
          M.getY(y) + s.getY(y) * 4e-4,
          M.getZ(y) + s.getZ(y) * 4e-4,
        ),
          V.push(s.getX(y), s.getY(y), s.getZ(y)),
          A.push((M.getX(y) - i) / e, (M.getZ(y) - z) / o));
      }
  const x = new ot();
  return (
    x.setAttribute("position", new T0(C, 3)),
    x.setAttribute("normal", new T0(V, 3)),
    x.setAttribute("uv", new T0(A, 2)),
    x
  );
}
const Se = 0.012,
  Ce = [
    [0.72, 1.4, null, 0.22, 0.022, "saucer", 1],
    [1.06, 1.35, null, 0.14, 0.02, "bare", 1],
    [1.44, 1.41, null, 0.055, 0.025, "bare", 0],
    [1.8, 1.37, null, 0.17, 0.02, "stick", 1],
    [2.25, 1.45, null, 0.1, 0.024, "saucer", 1],
    [2.36, 1.73, null, 0.26, 0.019, "bare", 1],
    [2.33, 1.96, null, 0.12, 0.022, "chamber", 1],
    [2.32, 2.86, null, 0.2, 0.021, "saucer", 1],
    [2.27, 3.13, null, 0.065, 0.026, "bare", 0],
    [2.19, 3.42, null, 0.15, 0.02, "stick", 1],
    [1.84, 3.46, null, 0.24, 0.02, "bare", 1],
    [1.47, 3.42, null, 0.11, 0.022, "saucer", 0],
    [1.1, 3.47, null, 0.17, 0.023, "bare", 1],
    [0.74, 3.44, null, 0.2, 0.021, "chamber", 1],
  ],
  Ye = [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3];
