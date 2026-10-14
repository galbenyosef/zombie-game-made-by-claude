// assets__kit-CwMQzO5T 01 — push
// Lines 1-350 of readable/assets__kit-CwMQzO5T.pretty.js (statement-aligned).
import { R as Q } from "./RoundedBoxGeometry-D0zz8qHa.js";
import {
  V as F,
  o as q,
  Q as U,
  E as R,
  ai as j,
  B as k,
  h as S,
  aK as K,
  aL as O,
  a8 as D,
  a9 as H,
  I as v,
  b as J,
  a6 as $,
  a7 as tt,
  a5 as E,
} from "./index-DaQlAVPp.js";
const z = (t, n, e) => new F(t, n, e),
  T = (t, n = 0, e = 1) => (t < n ? n : t > e ? e : t),
  I = (t, n, e) => {
    const o = T((e - t) / (n - t));
    return o * o * (3 - 2 * o);
  },
  B = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function et(t) {
  const n = parseInt(t.slice(1), 16);
  return [
    B(((n >> 16) & 255) / 255),
    B(((n >> 8) & 255) / 255),
    B((n & 255) / 255),
  ];
}
function nt(t, n) {
  const e = 1 - I(0.1, 0.72, t.y),
    o = n ? T(-n.y) : 0,
    i = Math.hypot(t.y - 0.33, t.z + 0.7),
    s =
      Math.exp(-(((i - 0.4) / 0.16) ** 2)) *
      I(0.25, 0.1, Math.abs(t.x)) *
      I(-0.35, -0.6, t.z),
    c =
      I(0.75, 0.45, t.y) *
      I(0.65, 0.4, t.z) *
      I(-0.1, 0.12, t.z) *
      I(0.24, 0.12, Math.abs(t.x)),
    f = Math.hypot(t.y - 0.345, t.z - 0.7),
    y = Math.exp(-(((f - 0.42) / 0.14) ** 2)) * I(0.2, 0.08, Math.abs(t.x));
  return T(e * 0.55 + o * 0.35 * (0.3 + e) + s * 0.9 + c * 0.55 + y * 0.6);
}
function lt(t) {
  return {
    rough: 0.6,
    metal: 0,
    clear: 0,
    kind: 0,
    chip: 0,
    rust: 0,
    mud: 1,
    dust: 0.6,
    ...t,
    col: typeof t.col == "string" ? et(t.col) : t.col || [0.5, 0.5, 0.5],
  };
}
const g = new F(),
  M = new F(),
  Z = new j();
class ht {
  constructor(n) {
    ((this.name = n),
      (this.P = []),
      (this.N = []),
      (this.UV = []),
      (this.C = []),
      (this.S = []),
      (this.W = []),
      (this.A = []),
      (this.I = []),
      (this.nv = 0));
  }
  add(n, e, o, i = {}) {
    let s = n;
    (i.flat &&
      ((s = s.index ? s.toNonIndexed() : s.clone()), s.computeVertexNormals()),
      s.attributes.normal || s.computeVertexNormals());
    const c = s.attributes.position,
      f = s.attributes.normal,
      y = s.attributes.uv;
    e && Z.getNormalMatrix(e);
    const x = e ? e.determinant() < 0 : !1,
      b = this.nv;
    for (let r = 0; r < c.count; r++) {
      (g.fromBufferAttribute(c, r),
        M.fromBufferAttribute(f, r),
        e && (g.applyMatrix4(e), M.applyMatrix3(Z).normalize()),
        this.P.push(g.x, g.y, g.z),
        this.N.push(M.x, M.y, M.z));
      let a = y ? y.getX(r) : 0,
        d = y ? y.getY(r) : 0;
      (i.uv && ([a, d] = i.uv(g, M, a, d)), this.UV.push(a, d));
      const p = i.pick ? i.pick(g, M) : o,
        u = i.col ? i.col(g, M) : p.col;
      (this.C.push(u[0], u[1], u[2]),
        this.S.push(p.rough, p.metal, p.clear, p.kind));
      let l = [p.chip, p.rust, T(nt(g, M) * p.mud), p.dust];
      (i.wear && (l = i.wear(g, M, l)),
        this.W.push(l[0], l[1], l[2], l[3]),
        this.A.push(i.anim || 0));
    }
    if (s.index) {
      const r = s.index.array;
      for (let a = 0; a < r.length; a += 3)
        this.I.push(b + r[a], b + r[a + (x ? 2 : 1)], b + r[a + (x ? 1 : 2)]);
    } else
      for (let r = 0; r + 2 < c.count; r += 3)
        this.I.push(b + r, b + r + (x ? 2 : 1), b + r + (x ? 1 : 2));
    if (((this.nv += c.count), i.both)) {
      const r = b,
        a = c.count,
        d = this.nv;
      for (let l = 0; l < a; l++) {
        const h = r + l;
        (this.P.push(this.P[h * 3], this.P[h * 3 + 1], this.P[h * 3 + 2]),
          this.N.push(-this.N[h * 3], -this.N[h * 3 + 1], -this.N[h * 3 + 2]),
          this.UV.push(this.UV[h * 2], this.UV[h * 2 + 1]),
          this.C.push(this.C[h * 3], this.C[h * 3 + 1], this.C[h * 3 + 2]));
        for (let m = 0; m < 4; m++)
          (this.S.push(this.S[h * 4 + m]), this.W.push(this.W[h * 4 + m]));
        this.A.push(this.A[h]);
      }
      const p = this.I.length,
        u = s.index ? s.index.count : a - (a % 3);
      for (let l = p - u; l < p; l += 3)
        this.I.push(
          this.I[l] - r + d,
          this.I[l + 2] - r + d,
          this.I[l + 1] - r + d,
        );
      this.nv += a;
    }
    return (s !== n && s.dispose(), this);
  }
  build(n = null) {
    const e = new k(),
      o = new Float32Array(this.P),
      i = new Float32Array(this.N);
    if (n) {
      const s = new j().getNormalMatrix(n);
      for (let c = 0; c < o.length; c += 3)
        (g.set(o[c], o[c + 1], o[c + 2]).applyMatrix4(n),
          (o[c] = g.x),
          (o[c + 1] = g.y),
          (o[c + 2] = g.z),
          M.set(i[c], i[c + 1], i[c + 2])
            .applyMatrix3(s)
            .normalize(),
          (i[c] = M.x),
          (i[c + 1] = M.y),
          (i[c + 2] = M.z));
    }
    return (
      e.setAttribute("position", new S(o, 3)),
      e.setAttribute("normal", new S(i, 3)),
      e.setAttribute("uv", new S(new Float32Array(this.UV), 2)),
      e.setAttribute("color", new S(new Float32Array(this.C), 3)),
      e.setAttribute("aSurf", new S(new Float32Array(this.S), 4)),
      e.setAttribute("aWear", new S(new Float32Array(this.W), 4)),
      e.setAttribute("aAnim", new S(new Float32Array(this.A), 1)),
      e.setIndex(this.nv > 65535 ? new K(this.I, 1) : new O(this.I, 1)),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
  get tris() {
    return this.I.length / 3;
  }
}
const st = new U(),
  ot = new R();
function ft(
  t = 0,
  n = 0,
  e = 0,
  o = 0,
  i = 0,
  s = 0,
  c = 1,
  f = 1,
  y = 1,
  x = "XYZ",
) {
  return new q().compose(
    z(t, n, e),
    st.setFromEuler(ot.set(o, i, s, x)),
    z(c, f, y),
  );
}
function it(t, n, e = 0) {
  const o = z(n.x - t.x, n.y - t.y, n.z - t.z),
    i = o.length(),
    s = new U().setFromUnitVectors(z(0, 1, 0), o.clone().divideScalar(i));
  return (
    e && s.multiply(new U().setFromAxisAngle(z(0, 1, 0), e)),
    new q().compose(
      z((t.x + n.x) / 2, (t.y + n.y) / 2, (t.z + n.z) / 2),
      s,
      z(1, 1, 1),
    )
  );
}
function pt(t, n, e, o) {
  return new q().makeBasis(n, e, o).setPosition(t);
}
function yt(t, n, e, o = 12, i = !0) {
  const s = Array.isArray(e) ? e[0] : e,
    c = Array.isArray(e) ? e[1] : e,
    f = t.distanceTo(n),
    y = new J(c, s, f, o, 1, !i);
  return (y.applyMatrix4(it(t, n)), y);
}
function mt(t, n, e, o = 0.006, i = 2) {
  return new Q(
    t,
    n,
    e,
    i,
    Math.min(o, t / 2 - 1e-4, n / 2 - 1e-4, e / 2 - 1e-4),
  );
}
function xt(t, n = 32, e = 0, o = Math.PI * 2) {
  return new D(
    t.map(([i, s]) => new H(i, s)),
    n,
    e,
    o,
  );
}
function dt(t, n, e = 6) {
  const o = [t[0].clone()];
  for (let i = 1; i < t.length - 1; i++) {
    const s = Array.isArray(n) ? (n[i - 1] ?? n[n.length - 1]) : n,
      c = t[i - 1],
      f = t[i],
      y = t[i + 1],
      x = c.clone().sub(f),
      b = y.clone().sub(f),
      r = x.length(),
      a = b.length();
    (x.divideScalar(r), b.divideScalar(a));
    const d = Math.acos(T(x.dot(b), -1, 1));
    if (s <= 0 || d > Math.PI - 0.001 || d < 0.001) {
      o.push(f.clone());
      continue;
    }
    let p = s / Math.tan(d / 2);
    p = Math.min(p, r * 0.48, a * 0.48);
    const u = f.clone().addScaledVector(x, p),
      l = f.clone().addScaledVector(b, p);
    for (let h = 0; h <= e; h++) {
      const m = h / e,
        w = 1 - m;
      o.push(
        z(
          w * w * u.x + 2 * w * m * f.x + m * m * l.x,
          w * w * u.y + 2 * w * m * f.y + m * m * l.y,
          w * w * u.z + 2 * w * m * f.z + m * m * l.z,
        ),
      );
    }
  }
  return (o.push(t[t.length - 1].clone()), o);
}
function wt(t, n = 32) {
  return new tt(t, !1, "centripetal").getPoints(n);
}
function rt(t, n, e = 12, o = {}) {
  const i = t.length,
    s = [],
    c = [],
    f = [],
    y = [],
    x = [];
  for (let u = 0; u < i; u++)
    x.push(
      t[Math.min(i - 1, u + 1)]
        .clone()
        .sub(t[Math.max(0, u - 1)])
        .normalize(),
    );
  const b = o.up
    ? o.up.clone()
    : Math.abs(x[0].y) < 0.9
      ? z(0, 1, 0)
      : z(1, 0, 0);
  let r = b.sub(x[0].clone().multiplyScalar(b.dot(x[0]))).normalize(),
    a = 0;
  for (let u = 0; u < i; u++) {
    u > 0 &&
      ((a += t[u].distanceTo(t[u - 1])),
      r.sub(x[u].clone().multiplyScalar(r.dot(x[u]))).normalize());
    const l = z().crossVectors(x[u], r),
      h = typeof n == "function" ? n(u / (i - 1), u) : n,
      m = Array.isArray(h) ? h[0] : h,
      w = Array.isArray(h) ? h[1] : h;
    for (let A = 0; A <= e; A++) {
      const V = (A / e) * Math.PI * 2,
        P = Math.cos(V),
        N = Math.sin(V),
        G = r.x * P * m + l.x * N * w,
        _ = r.y * P * m + l.y * N * w,
        L = r.z * P * m + l.z * N * w;
      s.push(t[u].x + G, t[u].y + _, t[u].z + L);
      const W = (r.x * P) / m + (l.x * N) / w,
        X = (r.y * P) / m + (l.y * N) / w,
        Y = (r.z * P) / m + (l.z * N) / w,
        C = Math.hypot(W, X, Y);
      (c.push(W / C, X / C, Y / C),
        f.push((A / e) * Math.PI * 2 * Math.max(m, w), a));
    }
  }
  for (let u = 0; u < i - 1; u++)
    for (let l = 0; l < e; l++) {
      const h = u * (e + 1) + l,
        m = h + e + 1;
      y.push(h, h + 1, m, h + 1, m + 1, m);
    }
  const d = (u, l) => {
    const h = s.length / 3,
      m = x[u].clone().multiplyScalar(l);
    (s.push(t[u].x, t[u].y, t[u].z), c.push(m.x, m.y, m.z), f.push(0, a));
    const w = s.length / 3;
    for (let A = 0; A <= e; A++) {
      const V = (u * (e + 1) + A) * 3;
      (s.push(s[V], s[V + 1], s[V + 2]), c.push(m.x, m.y, m.z), f.push(0, 0));
    }
    for (let A = 0; A < e; A++)
      l > 0 ? y.push(h, w + A, w + A + 1) : y.push(h, w + A + 1, w + A);
  };
  (o.cap0 && d(0, -1), o.cap1 && d(i - 1, 1));
  const p = new k();
  return (
    p.setAttribute("position", new v(s, 3)),
    p.setAttribute("normal", new v(c, 3)),
    p.setAttribute("uv", new v(f, 2)),
    p.setIndex(y),
    p
  );
}
