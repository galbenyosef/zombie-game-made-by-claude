// assets/kit-CFeM0oZ2 02 — math
// Lines 346-545 of readable/assets/kit-CFeM0oZ2.pretty.js (statement-aligned).
function jt(n = 1) {
  const t = (s, a, u) => {
      let r =
        (Math.imul(s | 0, 374761393) +
          Math.imul(a | 0, 668265263) +
          Math.imul(u | 0, 2147483647) +
          Math.imul(n, 1442695041)) |
        0;
      return (
        (r = Math.imul(r ^ (r >>> 13), 1274126177)),
        (r ^= r >>> 16),
        (r >>> 0) / 4294967296
      );
    },
    e = (s) => s * s * (3 - 2 * s),
    o = (s, a) => {
      const u = Math.floor(s),
        r = Math.floor(a),
        l = e(s - u),
        h = e(a - r),
        i = t(u, r, 0),
        p = t(u + 1, r, 0),
        d = t(u, r + 1, 0),
        b = t(u + 1, r + 1, 0);
      return (i + (p - i) * l + (d - i) * h + (i - p - d + b) * l * h) * 2 - 1;
    };
  return {
    n2: o,
    n3: (s, a, u) => {
      const r = Math.floor(u),
        l = e(u - r),
        h = o(s + r * 17.13, a + r * 31.7),
        i = o(s + (r + 1) * 17.13, a + (r + 1) * 31.7);
      return h + (i - h) * l;
    },
    fbm2: (s, a, u = 4) => {
      let r = 0,
        l = 0.5,
        h = 1,
        i = 0;
      for (let p = 0; p < u; p++)
        ((r += l * o(s * h, a * h)), (i += l), (l *= 0.5), (h *= 2.03));
      return r / i;
    },
    hash: t,
  };
}
const nt = (n, t = 0, e = 1) => (n < t ? t : n > e ? e : n),
  qt = (n, t, e) => {
    const o = nt((e - n) / (t - n));
    return o * o * (3 - 2 * o);
  },
  Ct = (n, t, e) => n + (t - n) * e;
function Gt(n) {
  const {
      x0: t,
      x1: e,
      z0: o,
      z1: c,
      top: f,
      r: s = 0.03,
      res: a = 0.02,
      floor: u = 0.004,
    } = n,
    r = { w: 0, e: 0, n: 0, s: 0, ...n.hang },
    l = n.fold || (() => 0),
    h = n.hem || (() => 1),
    i = t - r.w,
    p = e + r.e,
    d = o - r.n,
    b = c + r.s,
    y = Math.max(2, Math.ceil((p - i) / a)),
    v = Math.max(2, Math.ceil((b - d) / a)),
    I = new Float32Array((y + 1) * (v + 1) * 3),
    _ = (s * Math.PI) / 2;
  let P = 0;
  for (let x = 0; x <= v; x++)
    for (let m = 0; m <= y; m++) {
      const w = i + ((p - i) * m) / y,
        g = d + ((b - d) * x) / v,
        M = nt(w, t, e),
        z = nt(g, o, c);
      let V = w - M,
        j = g - z,
        A = Math.hypot(V, j),
        Y = w,
        S,
        U = g;
      if (A < 1e-6) S = f(w, g);
      else {
        const q = V / A,
          Z = j / A,
          E = Math.abs(q),
          X = Math.abs(Z),
          W = q > 0 ? "e" : "w",
          C = Z > 0 ? "s" : "n",
          L = h(W, z),
          G = h(C, M),
          $ = (E * L + X * G) / (E + X);
        A *= $;
        const H = f(M, z);
        let J, tt;
        if (A < _) {
          const K = A / s;
          ((J = s * Math.sin(K)), (tt = -s * (1 - Math.cos(K))));
        } else ((J = s), (tt = -s - (A - _)));
        const ft = (E * l(W, z, A) + X * l(C, M, A)) / (E + X);
        if (
          ((J += ft), (Y = M + q * J), (U = z + Z * J), (S = H + tt), S < u)
        ) {
          const K = u - S;
          ((S = u), (Y += q * K * 0.6), (U += Z * K * 0.6));
        }
      }
      ((I[P++] = Y), (I[P++] = S), (I[P++] = U));
    }
  const D = [];
  for (let x = 0; x < v; x++)
    for (let m = 0; m < y; m++) {
      const w = x * (y + 1) + m,
        g = w + 1,
        M = w + y + 1,
        z = M + 1;
      D.push(w, M, g, g, M, z);
    }
  const F = new O();
  (F.setAttribute("position", new k(I, 3)),
    F.setIndex(D),
    F.computeVertexNormals());
  const N = F.attributes.normal;
  let Q = 0;
  for (let x = 0; x < N.count; x++) Q += N.getY(x);
  if (Q < 0) {
    const x = F.index.array;
    for (let m = 0; m < x.length; m += 3) {
      const w = x[m + 1];
      ((x[m + 1] = x[m + 2]), (x[m + 2] = w));
    }
    F.computeVertexNormals();
  }
  const T = new Float32Array((y + 1) * (v + 1) * 2);
  for (let x = 0; x <= v; x++)
    for (let m = 0; m <= y; m++) {
      const w = x * (y + 1) + m;
      ((T[w * 2] = i + ((p - i) * m) / y),
        (T[w * 2 + 1] = d + ((b - d) * x) / v));
    }
  return (F.setAttribute("uv", new k(T, 2)), F);
}
function Pt(n, t, e, o = 1, c = 1, f = !1, s = !1) {
  const a = new Float32Array((t + 1) * (e + 1) * 3),
    u = new Float32Array((t + 1) * (e + 1) * 2);
  let r = 0,
    l = 0;
  for (let p = 0; p <= e; p++)
    for (let d = 0; d <= t; d++) {
      const b = n(d / t, p / e);
      ((a[r++] = b[0]),
        (a[r++] = b[1]),
        (a[r++] = b[2]),
        (u[l++] = (d / t) * o),
        (u[l++] = (p / e) * c));
    }
  const h = [];
  for (let p = 0; p < e; p++)
    for (let d = 0; d < t; d++) {
      const b = p * (t + 1) + d,
        y = b + 1,
        v = b + t + 1,
        I = v + 1;
      s ? h.push(b, v, y, y, v, I) : h.push(b, y, v, y, I, v);
    }
  const i = new O();
  return (
    i.setAttribute("position", new k(a, 3)),
    i.setAttribute("uv", new k(u, 2)),
    i.setIndex(h),
    i.computeVertexNormals(),
    f && zt(i, t, e),
    i
  );
}
function zt(n, t, e) {
  const o = n.attributes.normal;
  for (let c = 0; c <= e; c++) {
    const f = c * (t + 1),
      s = f + t,
      a = o.getX(f) + o.getX(s),
      u = o.getY(f) + o.getY(s),
      r = o.getZ(f) + o.getZ(s),
      l = Math.hypot(a, u, r) || 1;
    (o.setXYZ(f, a / l, u / l, r / l), o.setXYZ(s, a / l, u / l, r / l));
  }
}
function Et(n, t = {}) {
  const e = n.clone();
  for (const [o, c] of Object.entries(t))
    e[o] && e[o].isColor && !(c && c.isColor) ? e[o].set(c) : (e[o] = c);
  return ((e.userData = { ...n.userData }), e);
}
