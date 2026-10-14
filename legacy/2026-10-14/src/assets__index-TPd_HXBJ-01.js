// assets__index-TPd_HXBJ 01 — push
// Lines 1-320 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
import {
  ai as lo,
  V as D0,
  B as q0,
  h as S0,
  aK as Uo,
  aL as xo,
  a8 as Vo,
  a9 as c0,
  b as ro,
  I as e0,
  ah as so,
  o as i0,
  Q as Ot,
  E as $o,
  a5 as Q0,
  aa as qo,
  ag as F0,
  J as Zo,
  x as Kt,
  M as Ko,
  ae as Wo,
  aM as Ho,
  aN as _e,
  aO as Oe,
  aC as jo,
  a4 as Qo,
  a2 as Jo,
  f as Yo,
  g as io,
  aw as Xo,
  a6 as tn,
  q as co,
  d as en,
  $ as Re,
  a0 as Be,
  G as Ge,
  U as Ue,
  al as xe,
  K as on,
  D as ie,
  c as Ft,
  n as nn,
  P as Ve,
  i as $e,
  C as qe,
  A as Ze,
  m as an,
  l as ln,
  y as rn,
  ar as sn,
  aI as cn,
  O as fn,
} from "./index-DaQlAVPp.js";
import { R as dn } from "./RoundedBoxGeometry-D0zz8qHa.js";
const b = (t, e, o) => new D0(t, e, o),
  fo = (t, e = 0, o = 1) => (t < e ? e : t > o ? o : t),
  rt = (t, e, o) => {
    const n = fo((o - t) / (e - t));
    return n * n * (3 - 2 * n);
  },
  ce = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function un(t) {
  const e = parseInt(t.slice(1), 16);
  return [
    ce(((e >> 16) & 255) / 255),
    ce(((e >> 8) & 255) / 255),
    ce((e & 255) / 255),
  ];
}
function _(t) {
  return {
    rough: 0.6,
    metal: 0,
    kind: 0,
    param: 0,
    ...t,
    col: typeof t.col == "string" ? un(t.col) : t.col || [0.5, 0.5, 0.5],
  };
}
const U0 = new D0(),
  x0 = new D0(),
  Ke = new lo();
class M0 {
  constructor(e) {
    ((this.name = e),
      (this.P = []),
      (this.N = []),
      (this.UV = []),
      (this.C = []),
      (this.S = []),
      (this.A = []),
      (this.I = []),
      (this.nv = 0));
  }
  add(e, o, n, a = {}) {
    let l = e;
    (a.flat &&
      ((l = l.index ? l.toNonIndexed() : l.clone()), l.computeVertexNormals()),
      l.attributes.normal || l.computeVertexNormals());
    const r = l.attributes.position,
      p = l.attributes.normal,
      f = l.attributes.uv;
    o && Ke.getNormalMatrix(o);
    const c = o ? o.determinant() < 0 : !1,
      d = this.nv;
    for (let i = 0; i < r.count; i++) {
      (U0.fromBufferAttribute(r, i),
        x0.fromBufferAttribute(p, i),
        o && (U0.applyMatrix4(o), x0.applyMatrix3(Ke).normalize()),
        this.P.push(U0.x, U0.y, U0.z),
        this.N.push(x0.x, x0.y, x0.z));
      let s = f ? f.getX(i) : 0,
        m = f ? f.getY(i) : 0;
      (a.uv && ([s, m] = a.uv(U0, x0, s, m)), this.UV.push(s, m));
      const v = a.pick ? a.pick(U0, x0) : n,
        y = a.col ? a.col(U0, x0) : v.col;
      (this.C.push(y[0], y[1], y[2]),
        this.S.push(
          v.rough,
          v.metal,
          v.kind,
          a.param ? a.param(U0, x0) : v.param,
        ),
        this.A.push(a.anim || 0));
    }
    if (l.index) {
      const i = l.index.array;
      for (let s = 0; s < i.length; s += 3)
        this.I.push(d + i[s], d + i[s + (c ? 2 : 1)], d + i[s + (c ? 1 : 2)]);
    } else
      for (let i = 0; i + 2 < r.count; i += 3)
        this.I.push(d + i, d + i + (c ? 2 : 1), d + i + (c ? 1 : 2));
    if (((this.nv += r.count), a.both)) {
      const i = d,
        s = r.count,
        m = this.nv;
      for (let w = 0; w < s; w++) {
        const M = i + w;
        (this.P.push(this.P[M * 3], this.P[M * 3 + 1], this.P[M * 3 + 2]),
          this.N.push(-this.N[M * 3], -this.N[M * 3 + 1], -this.N[M * 3 + 2]),
          this.UV.push(this.UV[M * 2], this.UV[M * 2 + 1]),
          this.C.push(this.C[M * 3], this.C[M * 3 + 1], this.C[M * 3 + 2]));
        for (let k = 0; k < 4; k++) this.S.push(this.S[M * 4 + k]);
        this.A.push(this.A[M]);
      }
      const v = this.I.length,
        y = l.index ? l.index.count : s - (s % 3);
      for (let w = v - y; w < v; w += 3)
        this.I.push(
          this.I[w] - i + m,
          this.I[w + 2] - i + m,
          this.I[w + 1] - i + m,
        );
      this.nv += s;
    }
    return (l !== e && l.dispose(), this);
  }
  merge(e) {
    const o = this.nv;
    for (const n of ["P", "N", "UV", "C", "S", "A"])
      for (const a of e[n]) this[n].push(a);
    for (const n of e.I) this.I.push(n + o);
    return ((this.nv += e.nv), this);
  }
  build() {
    const e = new q0();
    return (
      e.setAttribute("position", new S0(new Float32Array(this.P), 3)),
      e.setAttribute("normal", new S0(new Float32Array(this.N), 3)),
      e.setAttribute("uv", new S0(new Float32Array(this.UV), 2)),
      e.setAttribute("color", new S0(new Float32Array(this.C), 3)),
      e.setAttribute("aSurf", new S0(new Float32Array(this.S), 4)),
      e.setAttribute("aAnim", new S0(new Float32Array(this.A), 1)),
      e.setIndex(this.nv > 65535 ? new Uo(this.I, 1) : new xo(this.I, 1)),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
  get tris() {
    return this.I.length / 3;
  }
}
const pn = new Ot(),
  hn = new $o();
function J0(
  t = 0,
  e = 0,
  o = 0,
  n = 0,
  a = 0,
  l = 0,
  r = 1,
  p = 1,
  f = 1,
  c = "XYZ",
) {
  return new i0().compose(
    b(t, e, o),
    pn.setFromEuler(hn.set(n, a, l, c)),
    b(r, p, f),
  );
}
function mn(t, e, o = 0) {
  const n = b(e.x - t.x, e.y - t.y, e.z - t.z),
    a = n.length(),
    l = new Ot().setFromUnitVectors(b(0, 1, 0), n.clone().divideScalar(a));
  return (
    o && l.multiply(new Ot().setFromAxisAngle(b(0, 1, 0), o)),
    new i0().compose(
      b((t.x + e.x) / 2, (t.y + e.y) / 2, (t.z + e.z) / 2),
      l,
      b(1, 1, 1),
    )
  );
}
new i0().makeScale(-1, 1, 1);
const gn = new i0().makeScale(1, 1, -1);
function bn(t, e, o, n = 0.006, a = 1) {
  return new dn(
    t,
    e,
    o,
    a,
    Math.max(1e-4, Math.min(n, t / 2 - 1e-4, e / 2 - 1e-4, o / 2 - 1e-4)),
  );
}
function U(t, e, o, n, a, l, r = 0.006, p = 1) {
  const f = bn(Math.abs(n - t), Math.abs(a - e), Math.abs(l - o), r, p);
  return (f.translate((t + n) / 2, (e + a) / 2, (o + l) / 2), f);
}
function s0(t, e, o, n, a, l) {
  const r = new so(Math.abs(n - t), Math.abs(a - e), Math.abs(l - o));
  return (r.translate((t + n) / 2, (e + a) / 2, (o + l) / 2), r);
}
function d0(t, e, o, n = 12, a = !0) {
  const l = Array.isArray(o) ? o[0] : o,
    r = Array.isArray(o) ? o[1] : o,
    p = new ro(r, l, t.distanceTo(e), n, 1, !a);
  return (p.applyMatrix4(mn(t, e)), p);
}
function L0(t, e = 24, o = 0, n = Math.PI * 2) {
  return new Vo(
    t.map(([a, l]) => new c0(a, l)),
    e,
    o,
    n,
  );
}
function uo(t, e, o = 6, n = 16, a = Math.PI * 2) {
  return new Zo(t, e, o, n, a);
}
function j0(t, e, o = 10, n = {}) {
  const a = t.length,
    l = [],
    r = [],
    p = [],
    f = [],
    c = [];
  for (let y = 0; y < a; y++)
    c.push(
      t[Math.min(a - 1, y + 1)]
        .clone()
        .sub(t[Math.max(0, y - 1)])
        .normalize(),
    );
  const d = n.up
      ? n.up.clone()
      : Math.abs(c[0].y) < 0.9
        ? b(0, 1, 0)
        : b(1, 0, 0),
    i = d.sub(c[0].clone().multiplyScalar(d.dot(c[0]))).normalize();
  let s = 0;
  for (let y = 0; y < a; y++) {
    y > 0 &&
      ((s += t[y].distanceTo(t[y - 1])),
      i.sub(c[y].clone().multiplyScalar(i.dot(c[y]))).normalize());
    const w = b().crossVectors(c[y], i),
      M = typeof e == "function" ? e(y / (a - 1)) : e;
    for (let k = 0; k <= o; k++) {
      const P = (k / o) * Math.PI * 2,
        C = Math.cos(P),
        F = Math.sin(P),
        D = i.x * C + w.x * F,
        z = i.y * C + w.y * F,
        q = i.z * C + w.z * F;
      (l.push(t[y].x + D * M, t[y].y + z * M, t[y].z + q * M),
        r.push(D, z, q),
        p.push((k / o) * Math.PI * 2 * M, s));
    }
  }
  for (let y = 0; y < a - 1; y++)
    for (let w = 0; w < o; w++) {
      const M = y * (o + 1) + w,
        k = M + o + 1;
      f.push(M, M + 1, k, M + 1, k + 1, k);
    }
  const m = (y, w) => {
    const M = l.length / 3,
      k = c[y].clone().multiplyScalar(w);
    (l.push(t[y].x, t[y].y, t[y].z), r.push(k.x, k.y, k.z), p.push(0, s));
    const P = l.length / 3;
    for (let C = 0; C <= o; C++) {
      const F = (y * (o + 1) + C) * 3;
      (l.push(l[F], l[F + 1], l[F + 2]), r.push(k.x, k.y, k.z), p.push(0, 0));
    }
    for (let C = 0; C < o; C++)
      w > 0 ? f.push(M, P + C, P + C + 1) : f.push(M, P + C + 1, P + C);
  };
  (n.cap0 && m(0, -1), n.cap1 && m(a - 1, 1));
  const v = new q0();
  return (
    v.setAttribute("position", new e0(l, 3)),
    v.setAttribute("normal", new e0(r, 3)),
    v.setAttribute("uv", new e0(p, 2)),
    v.setIndex(f),
    v
  );
}
