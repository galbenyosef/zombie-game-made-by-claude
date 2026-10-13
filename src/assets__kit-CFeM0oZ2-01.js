// assets__kit-CFeM0oZ2 01 — attributes
// Lines 1-345 of readable/assets__kit-CFeM0oZ2.pretty.js (statement-aligned).
import { R as mt } from "./RoundedBoxGeometry-D0zz8qHa.js";
import {
  c as ht,
  V as B,
  b as pt,
  Q as at,
  a9 as ct,
  a8 as dt,
  a7 as bt,
  af as wt,
  B as O,
  I as R,
  aB as xt,
  h as k,
  $ as yt,
  E as gt,
  o as Mt,
} from "./index-DaQlAVPp.js";
const ot = new at(),
  st = new gt(),
  et = new B(),
  At = new B();
function ut(n = [0, 0, 0], t = [0, 0, 0], e = 1) {
  return (
    st.set(t[0] || 0, t[1] || 0, t[2] || 0, "YXZ"),
    ot.setFromEuler(st),
    typeof e == "number" ? et.set(e, e, e) : et.set(e[0], e[1], e[2]),
    new Mt().compose(At.set(n[0], n[1], n[2]), ot, et)
  );
}
const Vt = (n, t, e, o) => n.applyMatrix4(ut(t, e, o));
function vt(n, t = "x", e = [0, 0]) {
  const o = n.attributes.position,
    c = n.attributes.normal,
    f = new Float32Array(o.count * 2);
  for (let s = 0; s < o.count; s++) {
    const a = o.getX(s),
      u = o.getY(s),
      r = o.getZ(s),
      l = Math.abs(c.getX(s)),
      h = Math.abs(c.getY(s)),
      i = Math.abs(c.getZ(s));
    let p, d;
    (h >= l && h >= i
      ? t === "z"
        ? ((p = r), (d = a))
        : ((p = a), (d = r))
      : l >= i
        ? t === "y"
          ? ((p = u), (d = r))
          : ((p = r), (d = u))
        : t === "y"
          ? ((p = u), (d = a))
          : ((p = a), (d = u)),
      (f[s * 2] = p + e[0]),
      (f[s * 2 + 1] = d + e[1]));
  }
  return (n.setAttribute("uv", new k(f, 2)), n);
}
function it(n, t = 0.5, e = 0.3, o = 0) {
  const c = n.attributes.uv,
    f = n.attributes.position,
    s = Math.max(1, Math.round(e / t)) * t;
  for (let a = 0; a < c.count; a++) c.setXY(a, c.getX(a) * s, f.getY(a) + o);
  return ((c.needsUpdate = !0), n);
}
function Yt(n, t = "xz", e = 1, o = [0, 0]) {
  const c = n.attributes.position,
    f = new Float32Array(c.count * 2),
    s = (a, u) => (a === "x" ? c.getX(u) : a === "y" ? c.getY(u) : c.getZ(u));
  for (let a = 0; a < c.count; a++)
    ((f[a * 2] = s(t[0], a) * e + o[0]),
      (f[a * 2 + 1] = s(t[1], a) * e + o[1]));
  return (n.setAttribute("uv", new k(f, 2)), n);
}
function Ft(n, t, e, o, c, f, s = 0.006, a = "x", u = 2) {
  const r = o - n,
    l = c - t,
    h = f - e,
    i = new mt(
      r,
      l,
      h,
      u,
      Math.min(s, r / 2 - 1e-4, l / 2 - 1e-4, h / 2 - 1e-4),
    );
  return (i.translate((n + o) / 2, (t + c) / 2, (e + f) / 2), vt(i, a));
}
function St(
  n,
  t = 0,
  e = 0,
  o = 0,
  { segs: c = 24, tile: f = 0.3, rot: s = null, scale: a = null } = {},
) {
  const u = n.map(([h, i]) => new ct(Math.max(h, 0), i)),
    r = new dt(u, c),
    l = Math.max(...n.map((h) => h[0]));
  return (
    it(r, f, 2 * Math.PI * l),
    a && r.scale(a[0], a[1], a[2]),
    s && r.applyMatrix4(ut([0, 0, 0], s)),
    r.translate(t, e, o),
    r
  );
}
function Zt(n, t, e, o = 10, c = e) {
  const f = new B(...n),
    s = new B(...t),
    a = f.distanceTo(s),
    u = new pt(c, e, a, o, 1, !1);
  u.translate(0, a / 2, 0);
  const r = s.clone().sub(f).normalize(),
    l = new at().setFromUnitVectors(new B(0, 1, 0), r);
  return (
    u.applyQuaternion(l),
    u.translate(f.x, f.y, f.z),
    it(u, 0.3, 2 * Math.PI * e)
  );
}
function kt(n, t, e = 48, o = 8, c = !1, f = 0.5) {
  const s = new bt(
      n.map((l) => new B(...l)),
      c,
      "catmullrom",
      f,
    ),
    a = new wt(s, e, t, o, c),
    u = a.attributes.uv,
    r = s.getLength();
  for (let l = 0; l < u.count; l++)
    u.setXY(l, u.getX(l) * r, u.getY(l) * 2 * Math.PI * t);
  return a;
}
function It(n, t, e, o, c = 16, f = 12, s = null) {
  const a = new yt(o, c, f);
  return (s && a.scale(s[0], s[1], s[2]), a.translate(n, t, e), a);
}
function Nt(
  n,
  t,
  e,
  o,
  c = [0, 1, 0],
  { mitreA: f = 0, mitreB: s = 0, crease: a = 0.6, caps: u = !0 } = {},
) {
  const r = new B(...t),
    l = new B(...e),
    h = new B(...o).normalize(),
    i = new B(...c).normalize(),
    p = l.clone().sub(r),
    d = p.length();
  p.normalize();
  const b = n.length,
    y = [];
  for (let m = 0; m < b - 1; m++) {
    const w = n[m + 1][0] - n[m][0],
      g = n[m + 1][1] - n[m][1],
      M = Math.hypot(w, g) || 1;
    y.push([g / M, -w / M]);
  }
  const v = [],
    I = [],
    _ = [],
    P = [],
    D = (m, w, g) => {
      const M = g ? l : r,
        z = g ? s : f;
      return M.clone()
        .addScaledVector(h, m)
        .addScaledVector(i, w)
        .addScaledVector(p, (g ? 1 : -1) * z * m);
    };
  let F = 0;
  for (let m = 0; m < b - 1; m++) {
    const [w, g] = n[m],
      [M, z] = n[m + 1],
      V = y[m],
      j = m > 0 ? y[m - 1] : null,
      A = m < b - 2 ? y[m + 1] : null,
      Y = (X) => {
        if (!X || V[0] * X[0] + V[1] * X[1] < Math.cos(a)) return V;
        const C = V[0] + X[0],
          L = V[1] + X[1],
          G = Math.hypot(C, L) || 1;
        return [C / G, L / G];
      },
      S = Y(j),
      U = Y(A),
      q = Math.hypot(M - w, z - g),
      Z = v.length / 3,
      E = (X) => h.clone().multiplyScalar(X[0]).addScaledVector(i, X[1]);
    for (const [X, W, C, L] of [
      [w, g, S, F],
      [M, z, U, F + q],
    ])
      for (const G of [0, 1]) {
        const $ = D(X, W, G);
        v.push($.x, $.y, $.z);
        const H = E(C);
        (I.push(H.x, H.y, H.z), _.push(G ? d : 0, L));
      }
    ((F += q), P.push(Z, Z + 2, Z + 1, Z + 1, Z + 2, Z + 3));
  }
  const N = new O();
  if (
    (N.setAttribute("position", new R(v, 3)),
    N.setAttribute("normal", new R(I, 3)),
    N.setAttribute("uv", new R(_, 2)),
    N.setIndex(P),
    rt(N),
    !u)
  )
    return N;
  const Q = [N],
    T = n.map(([m, w]) => new ct(m, w)),
    x = xt.triangulateShape(T, []);
  for (const m of [0, 1]) {
    const w = [],
      g = [],
      M = [],
      z = [],
      V = p.clone().multiplyScalar(m ? 1 : -1),
      j = m ? s : f;
    (j && V.addScaledVector(h, -j).normalize(),
      n.forEach(([Y, S]) => {
        const U = D(Y, S, m);
        (w.push(U.x, U.y, U.z), g.push(V.x, V.y, V.z), M.push(Y, S));
      }));
    for (const Y of x) z.push(Y[0], Y[1], Y[2]);
    const A = new O();
    (A.setAttribute("position", new R(w, 3)),
      A.setAttribute("normal", new R(g, 3)),
      A.setAttribute("uv", new R(M, 2)),
      A.setIndex(z),
      rt(A),
      Q.push(A));
  }
  return lt(Q);
}
function rt(n) {
  const t = n.attributes.position,
    e = n.attributes.normal,
    o = n.index;
  if (!o) return n;
  const c = new B(),
    f = new B(),
    s = new B(),
    a = new B(),
    u = new B();
  for (let r = 0; r < o.count; r += 3) {
    const l = o.getX(r),
      h = o.getX(r + 1),
      i = o.getX(r + 2);
    (c.fromBufferAttribute(t, l),
      f.fromBufferAttribute(t, h),
      s.fromBufferAttribute(t, i),
      u.subVectors(f, c).cross(s.clone().sub(c)),
      a
        .fromBufferAttribute(e, l)
        .add(s.fromBufferAttribute(e, h))
        .add(f.fromBufferAttribute(e, i)),
      u.dot(a) < 0 && (o.setX(r + 1, i), o.setX(r + 2, h)));
  }
  return ((o.needsUpdate = !0), n);
}
function lt(n) {
  let t = 0,
    e = 0;
  const o = n.every((i) => i.attributes.color);
  for (const i of n)
    ((t += i.attributes.position.count),
      (e += i.index ? i.index.count : i.attributes.position.count));
  const c = new Float32Array(t * 3),
    f = new Float32Array(t * 3),
    s = new Float32Array(t * 2),
    a = o ? new Float32Array(t * 3) : null,
    u = new Uint32Array(e);
  let r = 0,
    l = 0;
  for (const i of n) {
    const p = i.attributes.position.count;
    if (
      (c.set(i.attributes.position.array.subarray(0, p * 3), r * 3),
      i.attributes.normal &&
        f.set(i.attributes.normal.array.subarray(0, p * 3), r * 3),
      i.attributes.uv && s.set(i.attributes.uv.array.subarray(0, p * 2), r * 2),
      a)
    ) {
      const d = i.attributes.color;
      for (let b = 0; b < p; b++)
        ((a[(r + b) * 3] = d.getX(b)),
          (a[(r + b) * 3 + 1] = d.getY(b)),
          (a[(r + b) * 3 + 2] = d.getZ(b)));
    }
    if (i.index) {
      const d = i.index.array;
      for (let b = 0; b < i.index.count; b++) u[l + b] = d[b] + r;
      l += i.index.count;
    } else {
      for (let d = 0; d < p; d++) u[l + d] = r + d;
      l += p;
    }
    r += p;
  }
  const h = new O();
  return (
    h.setAttribute("position", new k(c, 3)),
    h.setAttribute("normal", new k(f, 3)),
    h.setAttribute("uv", new k(s, 2)),
    a && h.setAttribute("color", new k(a, 3)),
    h.setIndex(new k(u, 1)),
    h.computeBoundingBox(),
    h.computeBoundingSphere(),
    h
  );
}
class Ut {
  constructor(t) {
    ((this.name = t), (this.m = new Map()));
  }
  add(t, e, { cast: o = !0, receive: c = !0 } = {}) {
    t.attributes.normal || t.computeVertexNormals();
    const f = e.uuid + "|" + o + "|" + c;
    let s = this.m.get(f);
    return (
      s || this.m.set(f, (s = { mat: e, cast: o, receive: c, geos: [] })),
      s.geos.push(t),
      t
    );
  }
  flush(t) {
    const e = [];
    for (const o of this.m.values()) {
      const c = new ht(lt(o.geos), o.mat);
      ((c.castShadow = o.cast),
        (c.receiveShadow = o.receive),
        (c.name =
          this.name + ":" + (o.mat.userData.catalog || o.mat.name || "mat")),
        t.add(c),
        e.push(c));
    }
    return (this.m.clear(), e);
  }
}
