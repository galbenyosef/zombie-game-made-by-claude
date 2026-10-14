// assets__living-DeOLLwnx 01 — math
// Lines 1-311 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
import { a as vt } from "./BufferGeometryUtils-Qxvmd-vM.js";
import {
  o as b0,
  h as q0,
  c as u0,
  M as C0,
  B as Vt,
  Q as L0,
  E as St,
  V as f0,
  ah as X0,
  a9 as rt,
  a8 as Ft,
  a5 as $0,
  a6 as Wt,
  a7 as it,
  af as zt,
  ab as Lt,
  m as N0,
  d as _0,
  f as ct,
  g as ft,
  N as Dt,
  al as Ot,
  G as y0,
  p as U0,
  A as Tt,
  C as H0,
  $ as D0,
  i as qt,
  n as tt,
  P as _t,
  a1 as et,
  J as at,
  q as pt,
  b as Z0,
  aa as kt,
  ag as jt,
  w as Et,
} from "./index-DaQlAVPp.js";
const mt = ["x", "y", "z"];
function F(a = 0, t = 0, r = 0, e = 0, o = 0, s = 0, n = 1) {
  const l = new L0().setFromEuler(new St(o, e, s, "YXZ")),
    p = typeof n == "number" ? new f0(n, n, n) : new f0(n[0], n[1], n[2]);
  return new b0().compose(new f0(a, t, r), l, p);
}
function Nt(a, t = "x", r = [0, 0], e = 0) {
  const o = a.attributes.position,
    s = a.attributes.normal,
    n = new Float32Array(o.count * 2),
    l = Math.cos(e),
    p = Math.sin(e),
    d = { x: 0, y: 0, z: 0 };
  for (let c = 0; c < o.count; c++) {
    ((d.x = o.getX(c)), (d.y = o.getY(c)), (d.z = o.getZ(c)));
    const u = Math.abs(s.getX(c)),
      b = Math.abs(s.getY(c)),
      k = Math.abs(s.getZ(c)),
      S = u >= b && u >= k ? "x" : b >= k ? "y" : "z";
    let h, y;
    if (S === t) {
      const [C, z] = mt.filter((w) => w !== S);
      ((h = d[C]), (y = d[z]));
    } else {
      const C = mt.find((z) => z !== S && z !== t);
      ((h = d[t]), (y = d[C]));
    }
    ((n[c * 2] = h * l - y * p + r[0]), (n[c * 2 + 1] = h * p + y * l + r[1]));
  }
  return (a.setAttribute("uv", new q0(n, 2)), a);
}
function lt(a, t, r, e) {
  const o = a / 2,
    s = o - t,
    n = Math.max(1, Math.round((2 * s) / e)),
    l = [];
  for (let p = 0; p <= r; p++) l.push(-o + (t * p) / r);
  for (let p = 1; p < n; p++) l.push(-s + (2 * s * p) / n);
  for (let p = 0; p <= r; p++) l.push(s + (t * p) / r);
  return l;
}
function _(a, t, r, e = {}) {
  const o = Math.max(
      1e-4,
      Math.min(e.r ?? 0.006, a / 2 - 1e-4, t / 2 - 1e-4, r / 2 - 1e-4),
    ),
    s = e.m ?? 2,
    n = !!(e.puff || e.sag || e.lumps),
    l = e.res ?? (n ? 0.06 : 1e9),
    p = lt(a, o, s, l),
    d = lt(t, o, s, l),
    c = lt(r, o, s, l),
    u = new X0(1, 1, 1, p.length - 1, d.length - 1, c.length - 1),
    b = u.attributes.position,
    k = a / 2,
    S = t / 2,
    h = r / 2,
    y = k - o,
    C = S - o,
    z = h - o,
    w = (v, T) => Math.round((v + 0.5) * T),
    f = e.puff || [0, 0, 0],
    i = e.rng || (() => 0.5),
    m = e.lumps ? [i() * 6.28, i() * 6.28, i() * 6.28, i() * 6.28] : null;
  for (let v = 0; v < b.count; v++) {
    let T = p[w(b.getX(v), p.length - 1)],
      I = d[w(b.getY(v), d.length - 1)],
      A = c[w(b.getZ(v), c.length - 1)];
    const D = Math.max(-y, Math.min(y, T)),
      q = Math.max(-C, Math.min(C, I)),
      G = Math.max(-z, Math.min(z, A));
    let J = T - D,
      E = I - q,
      U = A - G;
    const B = Math.hypot(J, E, U) || 1;
    if (
      ((T = D + (J / B) * o), (I = q + (E / B) * o), (A = G + (U / B) * o), n)
    ) {
      const o0 = T / k,
        x = I / S,
        Y = A / h,
        n0 = 1 - o0 * o0,
        c0 = 1 - x * x,
        W = 1 - Y * Y;
      let X = f[0] * o0 * c0 * W,
        N = f[1] * x * n0 * W,
        K = f[2] * Y * n0 * c0;
      if ((e.bottom === !1 && x < 0 && (N = 0), e.sag && x > 0))
        for (const r0 of Array.isArray(e.sag) ? e.sag : [e.sag]) {
          const m0 = Math.exp(
            -((T - r0.x) ** 2 + (A - r0.z) ** 2) / (2 * r0.r * r0.r),
          );
          N -= r0.d * m0 * x * x;
        }
      if (m) {
        const r0 = e.lumps * n0 * W;
        ((N +=
          r0 *
          x *
          (Math.sin(T * 9 + m[0]) * Math.sin(A * 7 + m[1]) +
            0.5 * Math.sin(T * 17 + A * 13 + m[2]))),
          (X += r0 * 0.5 * o0 * Math.sin(I * 11 + A * 9 + m[3])));
      }
      ((T += X), (I += N), (A += K));
    }
    b.setXYZ(v, T, I, A);
  }
  (u.deleteAttribute("normal"), u.deleteAttribute("uv"));
  const M = vt(u, 1e-6);
  return (M.computeVertexNormals(), u.dispose(), M);
}
function j(a, t = 24, r = !0) {
  const e = [];
  r && a[0][0] > 0 && e.push(new rt(0, a[0][1]));
  for (const [l, p] of a) e.push(new rt(Math.max(l, 1e-4), p));
  const o = a[a.length - 1];
  r && o[0] > 0 && e.push(new rt(0, o[1]));
  const s = new Ft(e, t);
  s.deleteAttribute("normal");
  const n = vt(s, 1e-6);
  return (n.computeVertexNormals(), n);
}
function G0(a, t, r = 0.005, e = 8) {
  const o = Math.min(r, t * 0.45),
    s = new Wt(a, {
      depth: t - 2 * o,
      bevelEnabled: o > 0,
      bevelThickness: o,
      bevelSize: o,
      bevelOffset: -o,
      bevelSegments: 2,
      curveSegments: e,
    });
  return (s.translate(0, 0, o), s.computeVertexNormals(), s);
}
function z0(a, t, r, e = 0, o = 0) {
  const s = new $0(),
    n = e - a / 2,
    l = o - t / 2;
  return (
    (r = Math.min(r, a / 2, t / 2)),
    s.moveTo(n + r, l),
    s.lineTo(n + a - r, l),
    s.quadraticCurveTo(n + a, l, n + a, l + r),
    s.lineTo(n + a, l + t - r),
    s.quadraticCurveTo(n + a, l + t, n + a - r, l + t),
    s.lineTo(n + r, l + t),
    s.quadraticCurveTo(n, l + t, n, l + t - r),
    s.lineTo(n, l + r),
    s.quadraticCurveTo(n, l, n + r, l),
    s
  );
}
function T0(a, t = 0.005, r = 32, e = 6, o = !1) {
  const s = new it(
    a.map((n) => (n.isVector3 ? n : new f0(n[0], n[1], n[2]))),
    o,
  );
  return new zt(s, r, t, e, o);
}
function F0(a) {
  let t = 0;
  const r = a.map((c) => (c.index ? c.toNonIndexed() : c));
  for (const c of r) t += c.attributes.position.count;
  const e = new Float32Array(t * 3),
    o = new Float32Array(t * 3),
    s = new Float32Array(t * 2),
    l = r.every((c) => c.attributes.color) ? new Float32Array(t * 3) : null;
  let p = 0;
  for (const c of r) {
    const u = c.attributes.position.count;
    (e.set(c.attributes.position.array, p * 3),
      c.attributes.normal && o.set(c.attributes.normal.array, p * 3),
      c.attributes.uv && s.set(c.attributes.uv.array, p * 2),
      l && l.set(c.attributes.color.array, p * 3),
      (p += u));
  }
  const d = new Vt();
  return (
    d.setAttribute("position", new q0(e, 3)),
    d.setAttribute("normal", new q0(o, 3)),
    d.setAttribute("uv", new q0(s, 2)),
    l && d.setAttribute("color", new q0(l, 3)),
    d.computeBoundingSphere(),
    d.computeBoundingBox(),
    d
  );
}
class st {
  constructor(t, r) {
    ((this.mats = t),
      (this.rng = r || Math.random),
      (this.map = new Map()),
      (this.m = new b0()));
  }
  frame(t) {
    return ((this.m = t), this);
  }
  mat(t) {
    return typeof t == "string" ? this.mats.get(t) : t;
  }
  part(t, r, e = {}) {
    (e.uv !== "keep" &&
      Nt(t, e.grain || "x", [this.rng() * 3, this.rng() * 3], e.rot || 0),
      t.applyMatrix4(
        e.local ? new b0().multiplyMatrices(this.m, e.local) : this.m,
      ));
    let o = this.mat(r);
    const s = e.cast ?? !0,
      n = e.receive ?? !0;
    if (o.userData.flat) {
      const d = o.color,
        c = t.attributes.position.count,
        u = new Float32Array(c * 3);
      for (let b = 0; b < c; b++)
        ((u[b * 3] = d.r), (u[b * 3 + 1] = d.g), (u[b * 3 + 2] = d.b));
      (t.setAttribute("color", new q0(u, 3)), (o = Ht(!!o.userData.metal)));
    }
    const l = o.uuid;
    this.map.has(l) || this.map.set(l, { M: o, cast: !1, recv: !1, geos: [] });
    const p = this.map.get(l);
    return ((p.cast = p.cast || s), (p.recv = p.recv || n), p.geos.push(t), t);
  }
  flush(t, r = "part") {
    const e = [];
    for (const { M: o, cast: s, recv: n, geos: l } of this.map.values()) {
      const p = new u0(F0(l), o);
      ((p.castShadow = s && Ut(o)),
        (p.receiveShadow = n),
        (p.name = r + ":" + (o.userData.catalog || o.name || "mat")),
        t.add(p),
        e.push(p));
      for (const d of l) d.dispose();
    }
    return (this.map.clear(), e);
  }
}
const J0 = {};
function Ht(a) {
  const t = a ? "m" : "p";
  return (
    J0[t] ||
      ((J0[t] = new C0({
        vertexColors: !0,
        roughness: a ? 0.3 : 0.55,
        metalness: a ? 1 : 0,
      })),
      (J0[t].name = a ? "metal_shared" : "flat_shared")),
    J0[t]
  );
}
let x0 = null;
function ot() {
  return (
    x0 ||
      ((x0 = new Lt({
        color: 11845818,
        roughness: 0.07,
        metalness: 0,
        transparent: !0,
        opacity: 0.24,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        depthWrite: !1,
        side: N0,
        envMapIntensity: 0.5,
      })),
      (x0.name = "glass")),
    x0
  );
}
