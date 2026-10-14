// assets__frames-D6Ub_iDK 01 — push
// Lines 1-335 of readable/assets__frames-D6Ub_iDK.pretty.js (statement-aligned).
import { R as nt } from "./RoundedBoxGeometry-D0zz8qHa.js";
import { m as at, t as rt } from "./BufferGeometryUtils-Qxvmd-vM.js";
import {
  o as Q,
  ak as it,
  c as lt,
  E as ct,
  Q as et,
  V as P,
  a5 as ut,
  a9 as R,
  aa as ht,
  a6 as ft,
  B as j,
  I as L,
  p as pt,
  d as U,
  ab as dt,
  m as st,
  h as ot,
  ah as mt,
  G as C,
  b as Y,
  af as wt,
  a7 as bt,
} from "./index-DaQlAVPp.js";
const z = (o = 0, e = 0, t = 0) => new P(o, e, t),
  yt = { x: z(1, 0, 0), y: z(0, 1, 0), z: z(0, 0, 1) },
  q = new ct(),
  H = new et(),
  D = new P(),
  xt = new P();
function T(o = [0, 0, 0], e = [0, 0, 0], t = 1) {
  return (
    q.set(e[0] || 0, e[1] || 0, e[2] || 0, e[3] || "XYZ"),
    H.setFromEuler(q),
    typeof t == "number" ? D.set(t, t, t) : D.set(t[0], t[1], t[2]),
    new Q().compose(xt.set(o[0], o[1], o[2]), H, D)
  );
}
function gt(o) {
  o = o.index ? o.toNonIndexed() : o.clone();
  for (const e of Object.keys(o.attributes))
    e !== "position" && e !== "normal" && e !== "uv" && o.deleteAttribute(e);
  return (
    o.attributes.normal || o.computeVertexNormals(),
    o.attributes.uv ||
      o.setAttribute(
        "uv",
        new ot(new Float32Array(o.attributes.position.count * 2), 2),
      ),
    o.clearGroups(),
    o
  );
}
class J {
  constructor(e = "batch") {
    ((this.name = e), (this.buckets = new Map()), (this.stack = [new Q()]));
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  push(e) {
    return (this.stack.push(this.top.clone().multiply(e)), this);
  }
  pop() {
    return (this.stack.pop(), this);
  }
  at(e, t, s) {
    this.push(T(e, typeof t == "number" ? [0, t, 0] : t || [0, 0, 0]));
    try {
      s();
    } finally {
      this.pop();
    }
  }
  add(
    e,
    t,
    {
      m: s = null,
      uv: i = "world",
      uvScale: c = 1,
      uvRot: f = 0,
      shadow: h = !0,
    } = {},
  ) {
    let u = gt(e);
    const r = s ? this.top.clone().multiply(s) : this.top;
    if (
      (u.applyMatrix4(r),
      i === "world"
        ? it(u, null, f)
        : i && i.isVector3 && Mt(u, i.clone().transformDirection(r), f),
      c !== 1)
    ) {
      const w = u.attributes.uv.array;
      for (let l = 0; l < w.length; l++) w[l] *= c;
    }
    const d = t.uuid + (h ? "" : ":ns");
    return (
      this.buckets.has(d) ||
        this.buckets.set(d, { mat: t, shadow: h, list: [] }),
      this.buckets.get(d).list.push(u),
      u
    );
  }
  box(
    e,
    t,
    s,
    i,
    c,
    {
      rot: f = null,
      r: h = 0.006,
      seg: u = 1,
      grain: r = "x",
      shadow: d = !0,
    } = {},
  ) {
    const w = vt(t, s, i, h, u),
      l = r == null ? "world" : typeof r == "string" ? yt[r] : r;
    return this.add(w, e, { m: T(c, f || [0, 0, 0]), uv: l, shadow: d });
  }
  flush(e, { cast: t = !0, receive: s = !0 } = {}) {
    const i = [];
    for (const { mat: c, shadow: f, list: h } of this.buckets.values()) {
      const u = h.length === 1 ? h[0] : at(h, !1);
      (u.computeBoundingBox(), u.computeBoundingSphere());
      const r = new lt(u, c);
      ((r.name = this.name + ":" + (c.userData.catalog || c.name || "mat")),
        (r.castShadow = t && f && !c.transparent),
        (r.receiveShadow = s),
        e.add(r),
        i.push(r));
    }
    return (this.buckets.clear(), i);
  }
}
function vt(o, e, t, s = 0.006, i = 1) {
  return (
    (s = Math.min(s, o / 2 - 1e-4, e / 2 - 1e-4, t / 2 - 1e-4)),
    s <= 5e-4 ? new mt(o, e, t) : new nt(o, e, t, i, s)
  );
}
const I = new P(),
  W = new P(),
  K = new P(),
  N = new P(),
  Z = new P();
function Mt(o, e, t = 0) {
  e = e.clone().normalize();
  const s = o.attributes.position,
    i = o.attributes.normal,
    c = new Float32Array(s.count * 2);
  (N.set(0, 1, 0),
    Math.abs(e.y) > 0.9 && N.set(1, 0, 0),
    Z.crossVectors(e, N).normalize(),
    N.crossVectors(Z, e).normalize());
  const f = Math.cos(t),
    h = Math.sin(t);
  for (let u = 0; u < s.count; u++) {
    (W.fromBufferAttribute(s, u), I.fromBufferAttribute(i, u));
    let r, d;
    (Math.abs(I.dot(e)) < 0.92
      ? ((r = W.dot(e)), K.crossVectors(I, e).normalize(), (d = W.dot(K)))
      : ((r = W.dot(N)), (d = W.dot(Z))),
      (c[u * 2] = r * f - d * h),
      (c[u * 2 + 1] = r * h + d * f));
  }
  return (o.setAttribute("uv", new ot(c, 2)), o);
}
function Wt(
  o,
  e = 24,
  { phi0: t = 0, phi: s = Math.PI * 2, uvRef: i = null } = {},
) {
  const c = o.map((n) => new R(n[0], n[1])),
    f = c.length,
    h = [];
  for (let n = 0; n < f - 1; n++) {
    const b = c[n + 1].x - c[n].x,
      y = c[n + 1].y - c[n].y,
      x = Math.hypot(b, y);
    h.push(x < 1e-7 ? null : new R(y / x, -b / x));
  }
  const u = [];
  for (let n = 0; n < f; n++) {
    let b = n > 0 ? h[n - 1] : null,
      y = n < f - 1 ? h[n] : null;
    (n > 0 && !h[n - 1] && (b = null),
      n < f - 1 && !h[n] && (y = null),
      n > 0 && !h[n - 1] && n > 1 && (b = null));
    const x =
      b && y
        ? b.clone().add(y)
        : (b || y || (n > 0 ? h[n - 2] : h[n + 1]) || new R(1, 0)).clone();
    u.push(x.normalize());
  }
  const r = [0];
  for (let n = 1; n < f; n++) r.push(r[n - 1] + c[n].distanceTo(c[n - 1]));
  const d = i ?? Math.max(...c.map((n) => n.x), 0.01),
    w = [],
    l = [],
    a = [],
    m = [];
  for (let n = 0; n <= e; n++) {
    const b = t + (n / e) * s,
      y = Math.sin(b),
      x = Math.cos(b);
    for (let g = 0; g < f; g++)
      (w.push(c[g].x * y, c[g].y, c[g].x * x),
        l.push(u[g].x * y, u[g].y, u[g].x * x),
        a.push((n / e) * s * d, r[g]));
  }
  for (let n = 0; n < e; n++)
    for (let b = 0; b < f - 1; b++) {
      const y = n * f + b,
        x = (n + 1) * f + b,
        g = (n + 1) * f + b + 1,
        _ = n * f + b + 1;
      m.push(y, x, _, x, g, _);
    }
  const p = new j();
  return (
    p.setAttribute("position", new L(w, 3)),
    p.setAttribute("normal", new L(l, 3)),
    p.setAttribute("uv", new L(a, 2)),
    p.setIndex(m),
    p
  );
}
function kt(o, { capStart: e = !1, capEnd: t = !1 } = {}) {
  const s = o.length,
    i = o[0].length,
    c = [],
    f = [],
    h = [];
  let u = 0;
  for (let a = 0; a < s; a++) {
    if (a > 0) {
      let p = 0;
      for (let n = 0; n < i; n++) p += o[a][n].distanceTo(o[a - 1][n]);
      u += p / i;
    }
    let m = 0;
    for (let p = 0; p <= i; p++) {
      const n = o[a][p % i];
      (p > 0 && (m += n.distanceTo(o[a][p - 1])),
        c.push(n.x, n.y, n.z),
        f.push(m, u));
    }
  }
  const r = i + 1;
  for (let a = 0; a < s - 1; a++)
    for (let m = 0; m < i; m++) {
      const p = a * r + m,
        n = a * r + m + 1,
        b = (a + 1) * r + m + 1,
        y = (a + 1) * r + m;
      h.push(p, n, y, n, b, y);
    }
  const d = (a, m) => {
      const p = new P();
      for (const y of o[a]) p.add(y);
      p.divideScalar(i);
      const n = c.length / 3;
      (c.push(p.x, p.y, p.z), f.push(0, 0));
      const b = c.length / 3;
      for (let y = 0; y < i; y++) {
        const x = o[a][y];
        (c.push(x.x, x.y, x.z), f.push(x.x - p.x, x.y - p.y));
      }
      for (let y = 0; y < i; y++) {
        const x = b + y,
          g = b + ((y + 1) % i);
        m ? h.push(n, g, x) : h.push(n, x, g);
      }
    },
    w = new j();
  (e && d(0, !0),
    t && d(s - 1, !1),
    w.setAttribute("position", new L(c, 3)),
    w.setAttribute("uv", new L(f, 2)),
    w.setIndex(h),
    w.computeVertexNormals());
  const l = w.attributes.normal;
  for (let a = 0; a < s; a++) {
    const m = a * r,
      p = a * r + i;
    (I.set(
      l.getX(m) + l.getX(p),
      l.getY(m) + l.getY(p),
      l.getZ(m) + l.getZ(p),
    ).normalize(),
      l.setXYZ(m, I.x, I.y, I.z),
      l.setXYZ(p, I.x, I.y, I.z));
  }
  return w;
}
function _t(o, e, t, s, i, c = 16, f = null) {
  const h = [];
  for (let u = 0; u < c; u++) {
    const r = (u / c) * Math.PI * 2,
      d = Math.cos(r),
      w = Math.sin(r),
      l = f ? f(r) : 1;
    h.push(
      new P()
        .copy(o)
        .addScaledVector(e, d * s * l)
        .addScaledVector(t, w * i * l),
    );
  }
  return h;
}
function Nt(o, e, t = 24, s = 10, { capEnd: i = !0, uvMetres: c = !1 } = {}) {
  const f = o.computeFrenetFrames(t, !1),
    h = [];
  for (let r = 0; r <= t; r++) {
    const d = r / t,
      w = o.getPointAt(d),
      l = e(d);
    h.push(_t(w, f.normals[r], f.binormals[r], l, l, s));
  }
  const u = kt(h, { capEnd: i });
  if (!c) {
    const r = u.attributes.uv,
      d = s + 1;
    for (let w = 0; w <= t; w++)
      for (let l = 0; l <= s; l++) r.setXY(w * d + l, l / s, w / t);
  }
  return u;
}
