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
class gt {
  constructor(t = 1024, r = 6) {
    ((this.W = t), (this.pad = r), (this.cells = []), (this.tex = null));
  }
  add(t, r, e) {
    const o = { w: t, h: r, draw: e };
    return (this.cells.push(o), o);
  }
  pack(t = {}) {
    const r = this.pad,
      e = [...this.cells].sort((u, b) => b.h - u.h);
    let o = 0,
      s = 0,
      n = 0;
    for (const u of e)
      (o + u.w + r > this.W && ((o = 0), (s += n + r), (n = 0)),
        (u.x = o),
        (u.y = s),
        (o += u.w + r),
        (n = Math.max(n, u.h)));
    let l = 1;
    for (; l < s + n;) l *= 2;
    const p = document.createElement("canvas");
    ((p.width = this.W), (p.height = l));
    const d = p.getContext("2d");
    d.clearRect(0, 0, this.W, l);
    for (const u of e)
      (d.save(),
        d.beginPath(),
        d.rect(u.x, u.y, u.w, u.h),
        d.clip(),
        d.translate(u.x, u.y),
        u.draw(d, u.w, u.h),
        d.restore(),
        (u.uv = [
          (u.x + 0.5) / this.W,
          1 - (u.y + u.h - 0.5) / l,
          (u.x + u.w - 0.5) / this.W,
          1 - (u.y + 0.5) / l,
        ]));
    const c = new ct(p);
    return (
      (c.colorSpace = ft),
      (c.anisotropy = 8),
      (c.needsUpdate = !0),
      (this.tex = c),
      c
    );
  }
  quad(t, r, e) {
    const o = new _0(r, e),
      s = o.attributes.uv,
      [n, l, p, d] = t.uv;
    for (let c = 0; c < s.count; c++)
      s.setXY(c, n + s.getX(c) * (p - n), l + s.getY(c) * (d - l));
    return o;
  }
}
const Qt = new Set([
  "porcelain_cracked",
  "wax_candle",
  "paper_old",
  "brass_aged",
  "concrete_grey",
  "rust_metal",
  "blood_dark",
  "steel_gun",
]);
function Ut(a) {
  if (a.transparent) return !1;
  const t = a.userData.catalog || a.name || "";
  return !(Qt.has(t) || t.startsWith("flat") || t.startsWith("metal"));
}
function $t(a, t, r, e, o = {}) {
  const s = o.res ?? 0.035,
    n = o.rng || (() => 0.5),
    l = 2 * (a + r),
    p = 2 * (t + r),
    d = Math.ceil(l / s),
    c = Math.ceil(p / s),
    u = new _0(l, p, d, c);
  u.rotateX(-Math.PI / 2);
  const b = u.attributes.position,
    k = [n() * 6, n() * 6, n() * 6, n() * 6];
  for (let S = 0; S < b.count; S++) {
    const h = b.getX(S),
      y = b.getZ(S),
      C = Math.max(-a, Math.min(a, h)),
      z = Math.max(-t, Math.min(t, y)),
      w = h - C,
      f = y - z,
      i = Math.hypot(w, f);
    let m = C,
      M = e,
      v = z;
    if (i > 1e-6) {
      const T = w / i,
        I = f / i,
        A = 0.012,
        D = Math.min(i, (Math.PI / 2) * A),
        q = D / A;
      ((m += T * Math.sin(q) * A),
        (v += I * Math.sin(q) * A),
        (M += -(1 - Math.cos(q)) * A));
      const G = Math.max(0, i - D),
        J = Math.abs(T) > Math.abs(I) ? y : h,
        E =
          (Math.sin(J * 23 + k[0]) * 0.6 + Math.sin(J * 41 + k[1]) * 0.4) *
          Math.min(1, G / 0.2) *
          (o.fold ?? 0.012);
      if (
        ((m += T * (A + E * 0.5 + G * 0.02)),
        (v += I * (A + E * 0.5 + G * 0.02)),
        (M -= G),
        o.pull)
      ) {
        const U = Math.max(
          0,
          1 - Math.hypot(h - o.pull.x, y - o.pull.z) / o.pull.r,
        );
        M -= U * U * o.pull.d;
      }
    } else
      o.wrinkle &&
        (M += Math.sin(h * 13 + k[2]) * Math.sin(y * 11 + k[3]) * o.wrinkle);
    b.setXYZ(S, m, M, v);
  }
  return (u.deleteAttribute("normal"), u.computeVertexNormals(), u);
}
function Y0(a, t, r, e = {}) {
  const o = document.createElement("canvas");
  ((o.width = a), (o.height = t));
  const s = o.getContext("2d");
  r(s, a, t, o);
  const n = new ct(o);
  return (
    (n.colorSpace = e.linear ? Dt : ft),
    (n.anisotropy = 8),
    e.repeat && (n.wrapS = n.wrapT = Ot),
    (n.needsUpdate = !0),
    n
  );
}
const s0 = Math.PI * 2;
function ut(a, t, r, e, o = {}) {
  (a.save(),
    (a.globalCompositeOperation = "multiply"),
    (a.fillStyle = o.tint || "rgba(170,140,80,0.32)"),
    a.fillRect(0, 0, t, r));
  const s = a.createRadialGradient(
    t / 2,
    r / 2,
    Math.min(t, r) * 0.2,
    t / 2,
    r / 2,
    Math.max(t, r) * 0.75,
  );
  (s.addColorStop(0, "rgba(255,255,255,1)"),
    s.addColorStop(1, "rgba(125,108,86,1)"),
    (a.fillStyle = s),
    a.fillRect(0, 0, t, r),
    a.restore(),
    a.save(),
    (a.strokeStyle = "rgba(10,8,5,0.35)"),
    (a.lineWidth = 0.7));
  for (let n = 0; n < (o.cracks ?? 70); n++) {
    let l = e() * t,
      p = e() * r,
      d = e() * s0;
    (a.beginPath(), a.moveTo(l, p));
    for (let c = 0; c < 6 + e() * 10; c++)
      ((d += (e() - 0.5) * 1.6),
        (l += Math.cos(d) * (4 + e() * 9)),
        (p += Math.sin(d) * (4 + e() * 9)),
        a.lineTo(l, p));
    a.stroke();
  }
  ((a.globalAlpha = 0.07), (a.fillStyle = "#d8c8a0"));
  for (let n = 0; n < 900; n++) a.fillRect(e() * t, e() * r, 1, 1);
  a.restore();
}
function k0(a, t, r, e, o, s, n = 0, l = 0) {
  (a.save(),
    n && (a.filter = `blur(${n}px)`),
    (a.fillStyle = s),
    a.beginPath(),
    a.ellipse(t, r, e, o, l, 0, s0),
    a.fill(),
    a.restore());
}
function Kt(a) {
  return Y0(512, 384, (t, r, e) => {
    ((t.fillStyle = "#050505"), t.fillRect(0, 0, r, e));
    const o = t.createRadialGradient(
      r * 0.42,
      e * 0.45,
      20,
      r * 0.42,
      e * 0.45,
      r * 0.6,
    );
    (o.addColorStop(0, "#2a2c2e"),
      o.addColorStop(1, "#030303"),
      (t.fillStyle = o),
      t.fillRect(0, 0, r, e),
      k0(t, r * 0.4, e * 0.5, 120, 190, "#0a0a0b", 12),
      t.save(),
      t.translate(r * 0.4, e * 0.5),
      t.rotate(-0.1),
      (t.filter = "blur(2.5px)"));
    const s = new Path2D();
    (s.moveTo(0, -118),
      s.bezierCurveTo(58, -118, 76, -60, 70, -10),
      s.bezierCurveTo(66, 40, 44, 92, 0, 112),
      s.bezierCurveTo(-44, 92, -66, 40, -70, -10),
      s.bezierCurveTo(-76, -60, -58, -118, 0, -118));
    const n = t.createRadialGradient(-6, -26, 8, 0, 0, 118);
    (n.addColorStop(0, "#e6e8e3"),
      n.addColorStop(0.5, "#b4b8b3"),
      n.addColorStop(0.85, "#6c706c"),
      n.addColorStop(1, "#2c2e2e"),
      (t.fillStyle = n),
      t.fill(s),
      (t.filter = "blur(10px)"));
    for (const c of [-1, 1])
      ((t.fillStyle = "rgba(20,22,22,0.55)"),
        t.beginPath(),
        t.ellipse(c * 62, 0, 18, 80, 0, 0, s0),
        t.fill());
    t.filter = "blur(6px)";
    for (const c of [-1, 1])
      ((t.fillStyle = "rgba(25,26,26,0.9)"),
        t.beginPath(),
        t.ellipse(c * 27, -20, 20, 12, c * 0.15, 0, s0),
        t.fill());
    t.filter = "blur(1.5px)";
    for (const c of [-1, 1])
      ((t.fillStyle = "#060606"),
        t.beginPath(),
        t.ellipse(c * 27, -19, 9, 6.5, 0, 0, s0),
        t.fill(),
        (t.fillStyle = "#cfd2ce"),
        t.beginPath(),
        t.arc(c * 27 + 2.5, -21, 1.6, 0, s0),
        t.fill());
    ((t.filter = "blur(3px)"),
      (t.fillStyle = "rgba(235,237,232,0.55)"),
      t.beginPath(),
      t.ellipse(-2, 4, 5, 20, 0, 0, s0),
      t.fill(),
      (t.fillStyle = "rgba(30,32,32,0.6)"),
      t.beginPath(),
      t.ellipse(6, 10, 5, 18, 0.1, 0, s0),
      t.fill(),
      (t.fillStyle = "rgba(25,26,26,0.75)"),
      t.beginPath(),
      t.ellipse(0, 28, 12, 5, 0, 0, s0),
      t.fill(),
      (t.filter = "blur(2px)"),
      (t.fillStyle = "rgba(150,150,146,0.9)"),
      t.beginPath(),
      t.ellipse(0, 56, 20, 9, 0, 0, s0),
      t.fill(),
      (t.fillStyle = "#0b0b0b"),
      t.beginPath(),
      t.ellipse(0, 57, 14, 5.5, 0, 0, s0),
      t.fill(),
      (t.filter = "blur(2px)"),
      (t.strokeStyle = "rgba(8,8,9,0.9)"),
      (t.lineCap = "round"));
    const l = [
      [-60, -120, -20, -40, -38, 60, 3],
      [-30, -118, 10, -60, -8, 20, 2],
      [40, -120, 30, -50, 52, 40, 3.5],
      [-70, -80, -58, 10, -64, 110, 5],
      [58, -90, 64, 0, 56, 100, 5],
    ];
    for (const [c, u, b, k, S, h, y] of l)
      ((t.lineWidth = y),
        t.beginPath(),
        t.moveTo(c, u),
        t.quadraticCurveTo(b, k, S, h),
        t.stroke());
    (t.restore(),
      t.save(),
      t.translate(r * 0.76, e * 0.55),
      t.rotate(0.18),
      (t.filter = "blur(2.5px)"));
    const p = t.createRadialGradient(0, 10, 5, 0, 10, 70);
    (p.addColorStop(0, "#f2f3ee"),
      p.addColorStop(1, "#8a8e8a"),
      (t.fillStyle = p),
      t.beginPath(),
      t.ellipse(0, 18, 34, 40, 0, 0, s0),
      t.fill());
    const d = [
      [-30, -30, -0.35, 44],
      [-12, -48, -0.1, 56],
      [6, -50, 0.05, 58],
      [22, -42, 0.2, 50],
    ];
    for (const [c, u, b, k] of d)
      (t.save(),
        t.translate(c, u + 20),
        t.rotate(b),
        t.beginPath(),
        t.ellipse(0, -k / 2 + 8, 8.5, k / 2, 0, 0, s0),
        t.fill(),
        t.restore());
    (t.save(),
      t.translate(38, 22),
      t.rotate(0.9),
      t.beginPath(),
      t.ellipse(0, -18, 9, 26, 0, 0, s0),
      t.fill(),
      t.restore(),
      t.restore(),
      (t.globalAlpha = 0.25));
    for (let c = 0; c < e; c += 3)
      ((t.fillStyle = a() < 0.5 ? "#000" : "#222"), t.fillRect(0, c, r, 1));
  });
}
function Jt(a, t) {
  return (e, o, s) => {
    const n = e.createLinearGradient(0, 0, 0, s * 0.62);
    (n.addColorStop(0, "#16262a"),
      n.addColorStop(0.7, "#3a4842"),
      n.addColorStop(1, "#6e6a4a"),
      (e.fillStyle = n),
      e.fillRect(0, 0, o, s));
    for (let u = 0; u < 26; u++)
      k0(
        e,
        a() * o,
        a() * s * 0.45,
        40 + a() * 90,
        8 + a() * 16,
        `rgba(${(20 + a() * 25) | 0},${(28 + a() * 25) | 0},${(28 + a() * 20) | 0},0.5)`,
        8,
      );
    const l = o * 0.7,
      p = s * 0.24,
      d = e.createRadialGradient(l, p, 10, l, p, 120);
    (d.addColorStop(0, "rgba(200,196,160,0.45)"),
      d.addColorStop(1, "rgba(200,196,160,0)"),
      (e.fillStyle = d),
      e.fillRect(0, 0, o, s),
      k0(e, l, p, 26, 26, "#e8e2bc", 1.5),
      (e.fillStyle = "#141a14"),
      e.beginPath(),
      e.moveTo(0, s * 0.6));
    for (let u = 0; u <= 20; u++)
      e.lineTo(
        (u / 20) * o,
        s * (0.58 + 0.06 * Math.sin(u * 0.9 + 1) + 0.02 * a()),
      );
    (e.lineTo(o, s),
      e.lineTo(0, s),
      e.fill(),
      (e.fillStyle = "#0b0e0a"),
      e.beginPath(),
      e.moveTo(0, s * 0.72));
    for (let u = 0; u <= 20; u++)
      e.lineTo((u / 20) * o, s * (0.7 + 0.05 * Math.sin(u * 0.6 + 3)));
    (e.lineTo(o, s),
      e.lineTo(0, s),
      e.fill(),
      (e.fillStyle = "#070807"),
      e.fillRect(o * 0.26, s * 0.5, 70, 48),
      e.beginPath(),
      e.moveTo(o * 0.26 - 8, s * 0.5),
      e.lineTo(o * 0.26 + 35, s * 0.5 - 34),
      e.lineTo(o * 0.26 + 78, s * 0.5),
      e.fill(),
      (e.fillStyle = "#d99a3a"),
      e.fillRect(o * 0.26 + 22, s * 0.5 + 14, 9, 11),
      k0(e, o * 0.26 + 26, s * 0.5 + 20, 16, 14, "rgba(220,150,60,0.25)", 6),
      (e.strokeStyle = "rgba(120,120,95,0.35)"),
      (e.lineWidth = 5),
      e.beginPath(),
      e.moveTo(o * 0.55, s),
      e.bezierCurveTo(o * 0.45, s * 0.8, o * 0.36, s * 0.66, o * 0.3, s * 0.6),
      e.stroke());
    const c = (u, b, k) => {
      ((e.strokeStyle = "#050605"), (e.lineCap = "round"));
      const S = (h, y, C, z, w, f) => {
        if (f > 6 || z < 3) return;
        const i = h + Math.cos(C) * z,
          m = y + Math.sin(C) * z;
        ((e.lineWidth = w),
          e.beginPath(),
          e.moveTo(h, y),
          e.lineTo(i, m),
          e.stroke(),
          S(i, m, C - 0.3 - a() * 0.4, z * (0.62 + a() * 0.2), w * 0.68, f + 1),
          S(
            i,
            m,
            C + 0.3 + a() * 0.4,
            z * (0.62 + a() * 0.2),
            w * 0.68,
            f + 1,
          ));
      };
      S(u, b, -Math.PI / 2 + (a() - 0.5) * 0.2, 60 * k, 7 * k, 0);
    };
    (c(o * 0.12, s * 0.74, 1.3),
      c(o * 0.84, s * 0.7, 1),
      c(o * 0.93, s * 0.76, 0.8),
      ut(e, o, s, a));
  };
}
function xt(a, t) {
  const r = (e, o, s) => {
    const n = e.createRadialGradient(
      o * 0.5,
      s * 0.35,
      30,
      o * 0.5,
      s * 0.4,
      o * 0.9,
    );
    (n.addColorStop(0, "#4e4c32"),
      n.addColorStop(1, "#15160f"),
      (e.fillStyle = n),
      e.fillRect(0, 0, o, s),
      (e.fillStyle = "#0a0909"),
      e.beginPath(),
      e.moveTo(o * 0.1, s),
      e.bezierCurveTo(o * 0.12, s * 0.62, o * 0.3, s * 0.5, o * 0.5, s * 0.5),
      e.bezierCurveTo(o * 0.7, s * 0.5, o * 0.88, s * 0.62, o * 0.9, s),
      e.fill(),
      (e.fillStyle = "rgba(70,60,50,0.4)"),
      e.fillRect(o * 0.47, s * 0.52, 3, s * 0.4),
      k0(e, o * 0.5, s * 0.84, 46, 22, "#a89a86", 2),
      k0(e, o * 0.46, s * 0.83, 24, 16, "#8a7c6a", 2),
      (e.fillStyle = "rgba(200,190,170,0.55)"),
      e.beginPath(),
      e.ellipse(o * 0.5, s * 0.5, 44, 16, 0, 0, s0),
      e.fill(),
      k0(e, o * 0.5, s * 0.2, 58, 44, "#595650", 3),
      k0(e, o * 0.5, s * 0.33, 56, 74, "#b8a893", 2),
      e.save(),
      e.beginPath(),
      e.ellipse(o * 0.5, s * 0.34, 50, 66, 0, 0, s0),
      e.clip(),
      (e.fillStyle = "#d7cdb8"),
      e.fillRect(0, 0, o, s),
      (e.strokeStyle = "rgba(25,20,15,0.8)"));
    for (let l = 0; l < 140; l++) {
      const p = o * 0.5 + (a() - 0.5) * 100,
        d = s * 0.34 + (a() - 0.5) * 130,
        c = (a() - 0.5) * 1.2 + (a() < 0.5 ? 0 : 1.5);
      ((e.lineWidth = 0.6 + a() * 2.2),
        e.beginPath(),
        e.moveTo(p - Math.cos(c) * 40, d - Math.sin(c) * 40),
        e.lineTo(p + Math.cos(c) * 40, d + Math.sin(c) * 40),
        e.stroke());
    }
    (e.restore(), ut(e, o, s, a, { cracks: 90 }));
  };
  return t ? r : Y0(480, 600, r);
}
function Bt(a, t) {
  const r = (e, o, s) => {
    const n = e.createLinearGradient(0, 0, 0, s * 0.55);
    (n.addColorStop(0, "#18201c"),
      n.addColorStop(1, "#5a5440"),
      (e.fillStyle = n),
      e.fillRect(0, 0, o, s));
    for (let p = 0; p < 30; p++)
      k0(
        e,
        a() * o,
        a() * s * 0.5,
        50 + a() * 110,
        10 + a() * 22,
        `rgba(${(14 + a() * 20) | 0},${(16 + a() * 18) | 0},${(14 + a() * 12) | 0},0.6)`,
        10,
      );
    k0(e, o * 0.3, s * 0.42, 90, 18, "rgba(160,140,90,0.35)", 16);
    const l = e.createLinearGradient(0, s * 0.55, 0, s);
    (l.addColorStop(0, "#1a201c"),
      l.addColorStop(1, "#070908"),
      (e.fillStyle = l),
      e.fillRect(0, s * 0.55, o, s * 0.45),
      (e.strokeStyle = "rgba(150,150,120,0.25)"));
    for (let p = 0; p < 60; p++) {
      const d = s * (0.58 + a() * 0.4),
        c = a() * o;
      ((e.lineWidth = 1 + a() * 2),
        e.beginPath(),
        e.moveTo(c, d),
        e.quadraticCurveTo(c + 20, d - 6 - a() * 8, c + 40 + a() * 30, d),
        e.stroke());
    }
    (e.save(),
      e.translate(o * 0.62, s * 0.6),
      e.rotate(-0.16),
      (e.fillStyle = "#060606"),
      e.beginPath(),
      e.moveTo(-60, 0),
      e.lineTo(60, 0),
      e.lineTo(46, 16),
      e.lineTo(-50, 16),
      e.fill(),
      e.fillRect(-4, -110, 4, 110),
      e.fillRect(-40, -80, 3, 80),
      e.beginPath(),
      e.moveTo(2, -104),
      e.lineTo(44, -30),
      e.lineTo(2, -24),
      e.fill(),
      e.beginPath(),
      e.moveTo(-37, -76),
      e.lineTo(-8, -24),
      e.lineTo(-37, -20),
      e.fill(),
      e.restore(),
      ut(e, o, s, a));
  };
  return t ? r : Y0(640, 440, r);
}
function te() {
  return Y0(512, 512, (a, t, r) => {
    const e = a.createRadialGradient(t / 2, r / 2, 20, t / 2, r / 2, t / 2);
    (e.addColorStop(0, "#d9ceb0"),
      e.addColorStop(0.85, "#b8a883"),
      e.addColorStop(1, "#6d5a36"),
      (a.fillStyle = e),
      a.fillRect(0, 0, t, r),
      a.translate(t / 2, r / 2),
      (a.strokeStyle = "#2a2016"),
      (a.lineWidth = 3),
      a.beginPath(),
      a.arc(0, 0, 225, 0, s0),
      a.stroke(),
      a.beginPath(),
      a.arc(0, 0, 178, 0, s0),
      a.stroke());
    for (let s = 0; s < 60; s++) {
      const n = (s / 60) * s0;
      ((a.lineWidth = s % 5 === 0 ? 4 : 1.5),
        a.beginPath(),
        a.moveTo(Math.sin(n) * 214, -Math.cos(n) * 214),
        a.lineTo(Math.sin(n) * 226, -Math.cos(n) * 226),
        a.stroke());
    }
    const o = [
      "XII",
      "I",
      "II",
      "III",
      "IIII",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
    ];
    ((a.fillStyle = "#20180f"),
      (a.font = "bold 40px Georgia, serif"),
      (a.textAlign = "center"),
      (a.textBaseline = "middle"),
      o.forEach((s, n) => {
        const l = (n / 12) * s0;
        (a.save(),
          a.translate(Math.sin(l) * 196, -Math.cos(l) * 196),
          a.rotate(l),
          a.fillText(s, 0, 0),
          a.restore());
      }),
      (a.fillStyle = "rgba(90,70,30,0.25)"),
      a.beginPath(),
      a.ellipse(60, 90, 70, 40, 0.6, 0, s0),
      a.fill());
  });
}
function ee(a) {
  return Y0(512, 384, (t, r, e) => {
    ((t.fillStyle = "#2a2118"), t.fillRect(0, 0, r, e));
    const o = document.createElement("canvas");
    ((o.width = r), (o.height = e));
    const s = o.getContext("2d"),
      n = s.createLinearGradient(0, 0, 0, e * 0.5);
    (n.addColorStop(0, "#6f93a8"),
      n.addColorStop(1, "#bcc9b8"),
      (s.fillStyle = n),
      s.fillRect(0, 0, r, e),
      (s.fillStyle = "#5c7a3a"),
      s.fillRect(0, e * 0.5, r, e * 0.5),
      (s.fillStyle = "#c9b490"),
      s.fillRect(r * 0.35, e * 0.28, 150, 110),
      (s.fillStyle = "#7a3a2a"),
      s.beginPath(),
      s.moveTo(r * 0.33, e * 0.29),
      s.lineTo(r * 0.35 + 75, e * 0.1),
      s.lineTo(r * 0.35 + 162, e * 0.29),
      s.fill(),
      (s.fillStyle = "#3a2a1a"),
      s.fillRect(r * 0.35 + 60, e * 0.28 + 60, 28, 50));
    for (let u = 0; u < 140; u++)
      ((s.fillStyle = ["#b04050", "#d0a040", "#e0d0c0", "#8050a0", "#c06030"][
        u % 5
      ]),
        s.beginPath(),
        s.arc(a() * r, e * (0.55 + a() * 0.45), 3 + a() * 5, 0, s0),
        s.fill());
    const l = 12,
      p = 9,
      d = r / l,
      c = e / p;
    for (let u = 0; u < p; u++)
      for (let b = 0; b < l; b++)
        (!(b === 0 || u === 0 || b === l - 1 || u === p - 1) &&
          ((b > 4 && u > 1 && u < 7 && a() < 0.85) || a() < 0.2)) ||
          (t.drawImage(o, b * d, u * c, d, c, b * d, u * c, d, c),
          (t.strokeStyle = "rgba(30,25,20,0.55)"),
          (t.lineWidth = 1),
          t.strokeRect(b * d + 0.5, u * c + 0.5, d - 1, c - 1),
          (t.fillStyle = "rgba(30,25,20,0.4)"),
          b < l - 1 &&
            (t.beginPath(),
            t.arc((b + 1) * d, u * c + c / 2, 4, 0, s0),
            t.fill()));
    ((t.fillStyle = "rgba(0,0,0,0.18)"), t.fillRect(0, 0, r, e));
  });
}
function ae(a) {
  return Y0(512, 256, (t, r, e) => {
    ((t.fillStyle = "#1a1714"),
      t.fillRect(0, 0, r, e),
      (t.fillStyle = "#0c0a09"),
      t.fillRect(r / 2 - 3, 0, 6, e));
    const o = (n, l, p, d, c) => {
      ((t.fillStyle = "#e4dccb"), t.fillRect(n - 4, l - 4, p + 8, d + 8));
      const u = t.createLinearGradient(n, l, n, l + d);
      (u.addColorStop(0, "#a89272"),
        u.addColorStop(1, "#5a4832"),
        (t.fillStyle = u),
        t.fillRect(n, l, p, d),
        (t.fillStyle = "rgba(40,30,20,0.85)"));
      const b = c === 0 ? 1 : c === 1 ? 2 : 3;
      for (let k = 0; k < b; k++) {
        const S = n + p * (0.3 + 0.4 * (b === 1 ? 0.5 : k / (b - 1)));
        (k0(t, S, l + d * 0.36, 5, 6, "rgba(40,30,20,0.9)"),
          t.fillRect(S - 6, l + d * 0.45, 12, d * 0.5));
      }
      (c === 3 &&
        ((t.fillStyle = "rgba(20,15,10,0.9)"),
        t.fillRect(n + p * 0.25, l + d * 0.25, p * 0.5, d * 0.3)),
        (t.fillStyle = "#0b0908"));
      for (const [k, S, h, y] of [
        [n - 4, l - 4, 1, 1],
        [n + p + 4, l - 4, -1, 1],
        [n - 4, l + d + 4, 1, -1],
        [n + p + 4, l + d + 4, -1, -1],
      ])
        (t.beginPath(),
          t.moveTo(k, S),
          t.lineTo(k + 12 * h, S),
          t.lineTo(k, S + 12 * y),
          t.fill());
    };
    let s = 0;
    for (const n of [0, 1])
      for (let l = 0; l < 2; l++)
        for (let p = 0; p < 2; p++)
          o(
            (n * r) / 2 + 22 + p * 118,
            20 + l * 118,
            92,
            96,
            (s++ * 7 + ((a() * 3) | 0)) % 4,
          );
  });
}
function se() {
  return Y0(128, 128, (a, t, r) => {
    ((a.fillStyle = "#0b0b0c"),
      a.fillRect(0, 0, t, r),
      (a.fillStyle = "#7a1418"),
      a.beginPath(),
      a.arc(64, 64, 36, 0, s0),
      a.fill(),
      (a.strokeStyle = "#b89040"),
      (a.lineWidth = 2),
      a.beginPath(),
      a.arc(64, 64, 30, 0, s0),
      a.stroke(),
      (a.fillStyle = "#b89040"),
      a.fillRect(46, 50, 36, 4),
      a.fillRect(52, 74, 24, 3),
      (a.fillStyle = "#ddd"),
      a.beginPath(),
      a.arc(64, 64, 3, 0, s0),
      a.fill(),
      (a.strokeStyle = "rgba(255,255,255,0.05)"));
    for (let e = 40; e < 64; e += 1.5)
      (a.beginPath(), a.arc(64, 64, e, 0, s0), a.stroke());
  });
}
function oe(a, t = 256, r = 256, e) {
  const o = (s) => {
    (s.clearRect(0, 0, t, r),
      (s.filter = "blur(6px)"),
      (s.fillStyle = "rgba(255,245,220,0.9)"),
      s.fillRect(14, 14, t - 28, r - 28),
      (s.filter = "none"),
      (s.globalCompositeOperation = "destination-out"));
    for (let n = 0; n < 40; n++)
      k0(
        s,
        a() * t,
        a() * r,
        6 + a() * 20,
        4 + a() * 14,
        "rgba(0,0,0,0.25)",
        4,
      );
  };
  return e ? o : Y0(t, r, o);
}
function ne(a, t = 1024, r = 256, e) {
  return (s) => {
    s.clearRect(0, 0, t, r);
    for (let n = 0; n < 26; n++) {
      const l = r * (0.2 + a() * 0.6),
        p = 0.35 + a() * 0.6;
      ((s.strokeStyle = `rgba(230,210,170,${p})`),
        (s.lineWidth = 0.8 + a() * 1.8),
        s.beginPath(),
        s.moveTo(a() * 60, l));
      for (let d = 1; d <= 12; d++)
        s.lineTo(
          (d / 12) * (t - a() * 60),
          l + Math.sin(d * 0.6 + n) * 6 + (a() - 0.5) * 3,
        );
      s.stroke();
    }
  };
}
function re(a, t = 256, r = 256, e) {
  return (s) => {
    (s.clearRect(0, 0, t, r), (s.filter = "blur(10px)"));
    for (let n = 0; n < 14; n++)
      k0(
        s,
        t / 2 + (a() - 0.5) * 90,
        r * (0.6 + a() * 0.4),
        20 + a() * 40,
        40 + a() * 60,
        "rgba(10,8,6,0.35)",
        0,
      );
  };
}
function bt(a, t = 256, r = 256, e) {
  return (s) => {
    (s.clearRect(0, 0, t, r), (s.filter = "blur(3px)"));
    for (let n = 0; n < 3; n++)
      ((s.strokeStyle = `rgba(60,40,15,${0.35 - n * 0.08})`),
        (s.lineWidth = 5 - n),
        s.beginPath(),
        s.ellipse(
          t / 2 + (a() - 0.5) * 20,
          r / 2,
          90 - n * 18 + a() * 10,
          110 - n * 20,
          a(),
          0,
          s0,
        ),
        s.stroke());
    ((s.fillStyle = "rgba(60,45,20,0.12)"),
      s.beginPath(),
      s.ellipse(t / 2, r / 2, 88, 108, 0, 0, s0),
      s.fill());
  };
}
function le(a, t = 256, r = 512, e) {
  return (s) => {
    s.clearRect(0, 0, t, r);
    const n = s.createLinearGradient(0, 0, 0, r);
    (n.addColorStop(0, "rgba(160,150,130,0.35)"),
      n.addColorStop(1, "rgba(160,150,130,0.12)"),
      (s.fillStyle = n),
      s.fillRect(0, 0, t, r),
      (s.globalCompositeOperation = "destination-out"));
    for (let l = 0; l < 7; l++) {
      ((s.strokeStyle = "rgba(0,0,0,0.5)"),
        (s.lineWidth = 10 + a() * 18),
        s.beginPath());
      const p = a() * t;
      (s.moveTo(p, a() * r * 0.3),
        s.bezierCurveTo(
          p + 40,
          r * 0.4,
          p - 30,
          r * 0.6,
          p + (a() - 0.5) * 60,
          r * (0.7 + a() * 0.3),
        ),
        s.stroke());
    }
    ((s.globalCompositeOperation = "source-over"),
      (s.fillStyle = "rgba(190,180,160,0.3)"));
    for (let l = 0; l < 600; l++) s.fillRect(a() * t, a() * r, 1, 1);
  };
}
function ie() {
  return Y0(128, 32, (a, t, r) => {
    ((a.fillStyle = "#000"),
      a.fillRect(0, 0, t, r),
      (a.fillStyle = "#fff"),
      (a.font = "bold 26px monospace"),
      (a.textAlign = "center"),
      (a.textBaseline = "middle"),
      a.fillText("12:00", t / 2, r / 2 + 1));
  });
}
function ce(a, t = 256, r = 256, e) {
  return (s) => {
    (s.clearRect(0, 0, t, r), (s.filter = "blur(4px)"));
    const n = s.createRadialGradient(
      t * 0.45,
      r * 0.5,
      10,
      t * 0.5,
      r * 0.5,
      t * 0.45,
    );
    (n.addColorStop(0, "rgba(70,6,16,0.9)"),
      n.addColorStop(0.7, "rgba(90,10,20,0.6)"),
      n.addColorStop(1, "rgba(90,10,20,0)"),
      (s.fillStyle = n),
      s.beginPath(),
      s.ellipse(t * 0.5, r * 0.5, t * 0.44, r * 0.3, 0.3, 0, s0),
      s.fill(),
      (s.strokeStyle = "rgba(60,5,12,0.7)"),
      (s.lineWidth = 3),
      s.beginPath(),
      s.ellipse(t * 0.52, r * 0.5, t * 0.42, r * 0.3, 0.3, 0, s0),
      s.stroke(),
      (s.filter = "none"));
  };
}
function W0(a, t, r) {
  return (e, o, s) => {
    (e.save(),
      a(e, o, s),
      e.restore(),
      e.save(),
      (e.globalCompositeOperation = "source-in"),
      (e.fillStyle = t),
      e.fillRect(0, 0, o, s),
      (e.globalCompositeOperation = "destination-in"),
      (e.fillStyle = `rgba(0,0,0,${r})`),
      e.fillRect(0, 0, o, s),
      e.restore());
  };
}
const fe = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  pe = `
precision highp float;
varying vec2 vUv;
uniform float uFrame;
uniform float uTime;
uniform float uFace;
uniform float uGain;
uniform float uFlick;
uniform float uCollapse;
uniform float uOn;
uniform sampler2D uFaceTex;
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec2 c = vUv * 2.0 - 1.0;
  // the rounded CRT mask
  vec2 q = abs(c) - vec2(0.80, 0.74);
  float rr = length(max(q, 0.0)) - 0.2;
  float mask = 1.0 - smoothstep(-0.03, 0.01, rr);
  // switch-off collapse: squeeze to a line, then to a dot
  float sy = max(1.0 - uCollapse * 1.9, 0.006);
  float sx = uCollapse > 0.5 ? max(1.0 - (uCollapse - 0.5) * 2.1, 0.004) : 1.0;
  vec2 cc = c / vec2(sx, sy);
  float inside = step(abs(cc.x), 1.0) * step(abs(cc.y), 1.0);
  vec2 uv = cc * 0.5 + 0.5;
  float f = floor(uFrame);
  // static: horizontally smeared grains, per-line gain, rolling bars, scanlines
  float n1 = h21(floor(vec2(uv.x * 170.0, uv.y * 128.0)) + f * vec2(17.13, 31.71));
  float n2 = h21(floor(vec2(uv.x * 55.0, uv.y * 128.0)) + f * vec2(3.17, 7.77));
  float line = h21(vec2(floor(uv.y * 128.0), f * 1.31));
  float stat = pow(mix(n1, n2, 0.35), 1.35) * (0.7 + 0.6 * line);
  float roll = fract(uv.y * 0.85 + uTime * 0.23);
  float bar = 0.62 + 0.38 * smoothstep(0.0, 0.22, roll) * smoothstep(1.0, 0.6, roll);
  float roll2 = fract(uv.y * 2.3 - uTime * 0.61);
  bar *= 0.9 + 0.1 * smoothstep(0.0, 0.05, roll2);
  float scan = 0.8 + 0.2 * sin(uv.y * 256.0 * 3.14159);
  vec3 col = vec3(stat) * bar * scan * vec3(0.84, 0.93, 1.08);
  // the face shows through for a frame
  vec2 fuv = vec2(uv.x + (line - 0.5) * 0.012, uv.y);
  vec3 face = texture2D(uFaceTex, fuv).rgb;
  col = mix(col, face * (0.75 + 0.45 * stat) * scan * vec3(0.9, 0.97, 1.05), uFace * 0.9);
  // tube falloff toward the corners
  float vig = 1.0 - 0.38 * dot(c * vec2(0.85, 1.0), c * vec2(0.85, 1.0));
  col *= vig * uFlick * uGain;
  // a white-hot line / dot while collapsing
  col *= 1.0 + uCollapse * 5.0;
  col *= inside * uOn;
  vec3 glass = vec3(0.010, 0.013, 0.013);
  gl_FragColor = vec4(mix(glass, max(col, glass), mask), 1.0);
}
`;
function ue(a, t, r, e) {
  const o = new y0();
  ((o.name = "tv"), r.add(o));
  const s = 16.5,
    n = 0.045,
    l = { w: 1.2, h: 0.5, d: 0.48 },
    p = F(n + l.d / 2, 0, s, Math.PI / 2);
  t.frame(p);
  const d = "wood_walnut";
  t.part(
    _(l.w + 0.04, 0.032, l.d + 0.02, { r: 0.01 }).translate(
      0,
      l.h - 0.016,
      0.01,
    ),
    d,
    { grain: "x" },
  );
  for (const X of [-1, 1])
    t.part(
      _(0.032, l.h - 0.1, l.d - 0.02, { r: 0.006 }).translate(
        X * (l.w / 2 - 0.016),
        0.05 + (l.h - 0.1) / 2,
        0,
      ),
      d,
      { grain: "y" },
    );
  (t.part(
    _(l.w - 0.02, 0.03, l.d - 0.03, { r: 0.004 }).translate(0, 0.075, 0),
    d,
    { grain: "x" },
  ),
    t.part(
      _(l.w - 0.08, 0.055, l.d - 0.08, { r: 0.004 }).translate(
        0,
        0.0275,
        -0.02,
      ),
      "wood_ebony",
      { grain: "x", cast: !1 },
    ),
    t.part(
      _(l.w - 0.04, l.h - 0.1, 0.012, { r: 0.002 }).translate(
        0,
        0.05 + (l.h - 0.1) / 2,
        -0.48 / 2 + 0.02,
      ),
      d,
      { grain: "x", cast: !1 },
    ),
    t.part(
      _(0.028, l.h - 0.14, l.d - 0.04, { r: 0.004 }).translate(
        -0.02,
        0.09 + (l.h - 0.14) / 2,
        0,
      ),
      d,
      { grain: "y" },
    ),
    t.part(
      _(0.54, 0.02, l.d - 0.05, { r: 0.004 }).translate(-0.31, 0.27, -0.01),
      d,
      { grain: "x" },
    ));
  const c = _(0.54, 0.34, 0.022, { r: 0.006 }).translate(
    0.27,
    0.27,
    l.d / 2 - 0.015,
  );
  (t.part(c, d, { grain: "y" }),
    t.part(
      _(0.42, 0.24, 0.012, { r: 0.012, m: 3 }).translate(
        0.27,
        0.27,
        l.d / 2 + 0,
      ),
      d,
      { grain: "y" },
    ),
    t.part(
      j(
        [
          [0.012, 0],
          [0.014, 0.006],
          [0.009, 0.014],
          [0.013, 0.026],
          [0, 0.03],
        ],
        14,
      )
        .rotateX(Math.PI / 2)
        .translate(0.07, 0.27, l.d / 2 + 0.004),
      "brass_aged",
      { grain: "y", cast: !1 },
    ));
  for (const [X, N] of [
    [-0.55, 0.19],
    [0.55, 0.19],
    [-0.55, -0.19],
    [0.55, -0.19],
  ])
    t.part(
      j(
        [
          [0.022, 0],
          [0.028, 0.012],
          [0.024, 0.024],
          [0.018, 0.03],
        ],
        14,
      ).translate(X, 0, N),
      "wood_ebony",
      { grain: "y", cast: !1 },
    );
  (t.part(
    _(0.42, 0.085, 0.3, { r: 0.006 }).translate(-0.3, 0.09 + 0.0425, 0.02),
    a0(a, "#161514"),
    { grain: "x" },
  ),
    t.part(
      _(0.2, 0.012, 0.006, { r: 0.002 }).translate(-0.36, 0.15, 0.17),
      a0(a, "#050505"),
      { cast: !1 },
    ),
    [
      [-0.44, 0.35],
      [-0.31, -0.2],
      [-0.18, 0.1],
    ].forEach(([X, N], K) => {
      (t.part(
        _(0.105, 0.025, 0.19, { r: 0.003 })
          .translate(0, 0.0125, 0)
          .rotateY(N * 0.3)
          .translate(X, 0.28 + (K === 2 ? 0.025 : 0), 0),
        a0(a, "#121212"),
        { cast: !1 },
      ),
        t.part(
          _(0.08, 0.026, 0.004, { r: 0.001 })
            .translate(0, 0.0125, 0.096)
            .rotateY(N * 0.3)
            .translate(X, 0.28 + (K === 2 ? 0.025 : 0), 0),
          "paper_old",
          { cast: !1 },
        ));
    }));
  const b = new U0({
      map: ie(),
      color: new H0().setRGB(0.3, 1.6, 0.9),
      transparent: !0,
      blending: Tt,
      depthWrite: !1,
      toneMapped: !1,
    }),
    k = new u0(new _0(0.06, 0.015), b);
  (k.position.set(-0.19, 0.145, 0.171),
    k.applyMatrix4(p),
    (k.name = "vcr_clock"),
    o.add(k));
  const S = 0.66,
    h = 0.52,
    y = 0.46,
    C = l.h,
    z = F(n + 0.02 + y / 2, C, s, Math.PI / 2);
  (t.frame(z),
    t.part(
      _(S, h, 0.3, { r: 0.028, m: 3 }).translate(0, h / 2, y / 2 - 0.15),
      d,
      { grain: "x" },
    ));
  {
    const X = new X0(0.56, 0.44, 0.17, 1, 1, 1).toNonIndexed(),
      N = X.attributes.position;
    for (let K = 0; K < N.count; K++)
      N.getZ(K) < 0 &&
        N.setXYZ(K, N.getX(K) * 0.58, N.getY(K) * 0.62 - 0.03, N.getZ(K));
    (X.computeVertexNormals(),
      X.translate(0, h / 2 - 0.01, y / 2 - 0.3 - 0.085),
      t.part(X, a0(a, "#1d1915"), { grain: "x" }));
  }
  const w = 0.46,
    f = 0.36,
    i = -0.07,
    m = h / 2 + 0.015;
  {
    const X = z0(S - 0.062, h - 0.062, 0.02, 0, h / 2);
    X.holes.push(z0(w + 0.01, f + 0.01, 0.045, i, m));
    const N = G0(X, 0.016, 0.004, 6);
    (N.translate(0, 0, y / 2), t.part(N, a0(a, "#171615"), { grain: "x" }));
    const K = z0(w + 0.034, f + 0.034, 0.055, i, m);
    (K.holes.push(z0(w + 0.01, f + 0.01, 0.045, i, m)),
      t.part(
        G0(K, 0.006, 0.002, 6).translate(0, 0, y / 2 + 0.014),
        I0(a, "#6d6a64"),
        { grain: "x", cast: !1 },
      ));
  }
  const M = 0.235;
  (t.part(
    j(
      [
        [0.03, 0],
        [0.031, 0.01],
        [0.027, 0.03],
        [0.02, 0.034],
      ],
      24,
    )
      .rotateX(Math.PI / 2)
      .translate(M, m + 0.1, y / 2 + 0.014),
    a0(a, "#2a2724"),
    { grain: "y", cast: !1 },
  ),
    t.part(
      _(0.006, 0.04, 0.012, { r: 0.002 }).translate(M, m + 0.1, y / 2 + 0.05),
      I0(a, "#9a968c"),
      { cast: !1 },
    ),
    t.part(
      j(
        [
          [0.02, 0],
          [0.02, 0.01],
          [0.016, 0.024],
          [0.01, 0.026],
        ],
        20,
      )
        .rotateX(Math.PI / 2)
        .translate(M, m + 0.02, y / 2 + 0.014),
      a0(a, "#2a2724"),
      { grain: "y", cast: !1 },
    ));
  for (let X = 0; X < 4; X++)
    t.part(
      _(0.026, 0.012, 0.01, { r: 0.002 }).translate(
        M - 0.03 + X * 0.02,
        m - 0.045,
        y / 2 + 0.018,
      ),
      I0(a, "#77736a"),
      { cast: !1 },
    );
  for (let X = 0; X < 7; X++)
    t.part(
      _(0.07, 0.005, 0.004, { r: 0.0015 }).translate(
        M,
        m - 0.085 - X * 0.012,
        y / 2 + 0.0165,
      ),
      a0(a, "#050505"),
      { cast: !1 },
    );
  t.part(
    _(0.05, 0.012, 0.003, { r: 0.001 }).translate(
      i,
      m - f / 2 - 0.035,
      y / 2 + 0.017,
    ),
    I0(a, "#a39d90"),
    { cast: !1 },
  );
  const v = new u0(
    new D0(0.0035, 8, 6),
    new U0({ color: new H0().setRGB(4, 0.25, 0.1), toneMapped: !1 }),
  );
  (v.position.set(M + 0.03, m - 0.045, y / 2 + 0.018),
    v.applyMatrix4(z),
    o.add(v),
    t.part(
      j(
        [
          [0.06, 0],
          [0.058, 0.012],
          [0.04, 0.03],
          [0.012, 0.042],
          [0, 0.044],
        ],
        20,
      ).translate(0.02, h, -0.02),
      a0(a, "#1c1a18"),
      { grain: "y" },
    ));
  for (const X of [-1, 1]) {
    const N = X * 0.62,
      K = -0.2,
      r0 = 0.44,
      m0 = [
        0.02 + Math.sin(N) * r0,
        h + 0.04 + Math.cos(N) * r0 * Math.cos(K),
        -0.02 + Math.sin(K) * r0,
      ];
    (t.part(T0([[0.02, h + 0.04, -0.02], m0], 0.0025, 2, 6), I0(a, "#b8b4aa"), {
      grain: "y",
      cast: !1,
    }),
      t.part(
        new D0(0.006, 8, 6).translate(m0[0], m0[1], m0[2]),
        I0(a, "#b8b4aa"),
        { cast: !1 },
      ));
  }
  const T = new _0(w, f, 24, 18),
    I = T.attributes.position;
  for (let X = 0; X < I.count; X++) {
    const N = I.getX(X) / (w / 2),
      K = I.getY(X) / (f / 2);
    I.setZ(X, 0.022 * (1 - 0.55 * N * N) * (1 - 0.55 * K * K) - 0.004);
  }
  (T.computeVertexNormals(), T.translate(i, m, y / 2 + 0.008));
  const A = Kt(e),
    D = {
      uFrame: { value: 0 },
      uTime: { value: 0 },
      uFace: { value: 0 },
      uGain: { value: 1.55 },
      uFlick: { value: 1 },
      uCollapse: { value: 0 },
      uOn: { value: 1 },
      uFaceTex: { value: A },
    },
    q = new qt({
      vertexShader: fe,
      fragmentShader: pe,
      uniforms: D,
      toneMapped: !1,
    }),
    G = new u0(T, q);
  ((G.name = "tv_screen"),
    G.applyMatrix4(z),
    o.add(G),
    t
      .frame(z)
      .part(T.clone().translate(0, 0, 0.0015), ot(), { uv: "keep", cast: !1 }));
  const J = n + 0.02 + y + 0.07,
    E = C + m,
    U = s - i,
    B = new tt(11061503, 18, 13, 1.32, 0.95, 2);
  (B.position.set(J, E, U),
    B.target.position.set(J + 6, E - 0.35, U),
    (B.castShadow = !0),
    B.shadow.mapSize.set(1024, 1024),
    (B.shadow.bias = -6e-4),
    (B.shadow.normalBias = 0.025),
    (B.shadow.camera.near = 0.05),
    (B.shadow.camera.far = 13),
    (B.name = "tv_light"),
    o.add(B, B.target));
  const o0 = new _t(10469375, 1.6, 3.4, 2);
  (o0.position.set(J + 0.55, E + 0.55, U),
    (o0.name = "tv_halo"),
    (o0.userData.noActor = !0),
    o.add(o0));
  const x = a.rng(4242),
    Y = {
      channel: "static",
      level: 22,
      on: 1,
      collapse: 0,
      target: 1,
      flashPending: !1,
      nextFlash: 7 + x() * 5,
      t: 0,
      frame: 0,
    },
    n0 = {
      group: o,
      screen: G,
      light: B,
      halo: o0,
      get level() {
        return Y.level;
      },
      set level(X) {
        Y.level = X;
      },
      get channel() {
        return Y.channel;
      },
      setChannel(X) {
        ((Y.channel = X),
          X === "off" ? (Y.target = 0) : (Y.target = 1),
          X !== "off" && Y.on < 0.5 && ((Y.on = 1), (Y.collapse = 0)),
          (D.uFace.value = X === "face" ? 1 : 0));
      },
      power(X) {
        n0.setChannel(X ? "static" : "off");
      },
      flash() {
        Y.flashPending = !0;
      },
    },
    c0 = (X, N) => {
      ((Y.t = N),
        Y.frame++,
        (D.uTime.value = N),
        (D.uFrame.value = Y.frame),
        Y.target === 0 && Y.on > 0
          ? ((Y.collapse = Math.min(1, Y.collapse + X / 0.45)),
            Y.collapse >= 1 && (Y.on = 0))
          : Y.target === 1 &&
            ((Y.collapse = Math.max(0, Y.collapse - X / 0.12)), (Y.on = 1)),
        (D.uCollapse.value = Y.collapse),
        (D.uOn.value = Y.on),
        Y.channel === "static" &&
          (N >= Y.nextFlash &&
            ((Y.nextFlash = N + 7 + x() * 5), (Y.flashPending = !0)),
          (D.uFace.value = Y.flashPending ? 1 : 0),
          (Y.flashPending = !1)));
      const K = x();
      Y.dropT > 0
        ? (Y.dropT -= X)
        : K < X * 0.35 && (Y.dropT = 0.06 + x() * 0.08);
      const r0 =
        (0.84 + 0.2 * x() + 0.07 * Math.sin(N * 1.44)) *
        (Y.dropT > 0 ? 0.5 : 1);
      Y.fl = (Y.fl ?? 1) + (r0 - (Y.fl ?? 1)) * Math.min(1, X * 16);
      const m0 = Y.fl;
      D.uFlick.value = m0;
      const K0 = D.uFace.value > 0 ? 0.55 : 1,
        w0 = Y.on * (1 - Y.collapse * 0.85) * m0 * K0;
      ((B.intensity = Y.level * w0),
        (o0.intensity = Y.level * 0.09 * w0),
        (b.opacity = N % 1 < 0.55 ? 1 : 0.08));
    },
    W = {
      x0: n - 0.01,
      x1: n + l.d + 0.02,
      z0: s - l.w / 2 - 0.02,
      z1: s + l.w / 2 + 0.02,
      y0: 0,
      y1: 1.1,
    };
  return { tv: n0, anim: c0, colliders: [W], light: B, front: [1.6, 0, s] };
}
const E0 = new Map(),
  de = [
    ["#0d0c0b", 0.45],
    ["#1b1714", 0.45],
    ["#2a2622", 0.5],
    ["#15100e", 0.28],
    ["#0b0908", 0.95],
    ["#3b3632", 0.95],
    ["#2a170d", 0.55],
    ["#2a160a", 0.2],
    ["#46361f", 0.85],
    ["#5a2c18", 0.5],
    ["#8a7650", 0.7],
    ["#4e5030", 0.75],
    ["#6b3b26", 0.8],
    ["#1e150e", 1],
    ["#0e1a12", 0.12],
    ["#3a1606", 0.2],
  ],
  he = [
    ["#aaa59a", 0.28],
    ["#77736a", 0.35],
  ],
  yt = (a) => {
    const t = parseInt(a.slice(1), 16);
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
  };
function Pt(a, t) {
  const r = yt(a);
  let e = t[0],
    o = 1e9;
  for (const s of t) {
    const n = yt(s[0]),
      l = (r[0] - n[0]) ** 2 + (r[1] - n[1]) ** 2 + (r[2] - n[2]) ** 2;
    l < o && ((o = l), (e = s));
  }
  return e;
}
function a0(a, t) {
  const [r, e] = Pt(t, de),
    o = "p" + r;
  if (!E0.has(o)) {
    const s = new C0({ color: r, roughness: e, metalness: 0 });
    ((s.name = "flat" + r), (s.userData.flat = !0), E0.set(o, s));
  }
  return E0.get(o);
}
function I0(a, t) {
  const [r, e] = Pt(t, he),
    o = "m" + r;
  if (!E0.has(o)) {
    const s = new C0({ color: r, roughness: e, metalness: 1 });
    ((s.name = "metal" + r),
      (s.userData.flat = !0),
      (s.userData.metal = !0),
      E0.set(o, s));
  }
  return E0.get(o);
}
const i0 = Math.PI;
function me(a, t, r, e) {
  const o = new y0();
  ((o.name = "island"), r.add(o));
  const s = [],
    n = [],
    l = { x: 3.72, z: 17, w: 3.4, d: 2.8 };
  {
    const m = new _0(l.w, l.d, 85, 70);
    m.rotateX(-i0 / 2);
    const M = m.attributes.position;
    for (let A = 0; A < M.count; A++) {
      const D = M.getX(A),
        q = M.getZ(A),
        G = (D + 1.05) * 0.8 + (q + 0.55) * 0.6;
      let J =
          0.012 +
          0.03 *
            Math.exp((-G * G) / 0.02) *
            Math.max(0, Math.min(1, (0.2 - q) / 0.9)),
        E = D,
        U = q;
      const x = (0.42 - (D + l.w / 2 + (l.d / 2 - q))) / Math.SQRT2;
      if (x > 0) {
        let n0, c0;
        if (x <= Math.PI * 0.016) {
          const W = x / 0.016;
          ((n0 = 0.016 * Math.sin(W)), (c0 = 0.016 * (1 - Math.cos(W))));
        } else ((n0 = -(x - Math.PI * 0.016)), (c0 = 2 * 0.016));
        ((E = D + Math.SQRT1_2 * (x - n0)),
          (U = q - Math.SQRT1_2 * (x - n0)),
          (J = 0.012 + c0));
      }
      M.setXYZ(A, E + l.x, J, U + l.z);
    }
    m.computeVertexNormals();
    const v = m.attributes.uv;
    for (let A = 0; A < v.count; A++) v.setXY(A, v.getX(A) * 2, v.getY(A) * 2);
    const T = new u0(m, a.mats.get("rug_persian", { side: N0 }));
    ((T.receiveShadow = !0), (T.name = "rug"), o.add(T));
    const I = [];
    for (const A of [-1, 1]) {
      const D = l.x + A * (l.w / 2 + 0.002);
      for (let q = 0; q < 130; q++) {
        const G = l.z - l.d / 2 + 0.04 + (q / 129) * (l.d - 0.08);
        if (A < 0 && D - l.x + l.w / 2 + (l.d / 2 - (G - l.z)) < 0.5) continue;
        const J = 0.05 + e() * 0.03,
          E = (e() - 0.5) * 0.5,
          U = new X0(J, 0.003, 0.006);
        (U.translate(J / 2, 0.0035, 0),
          U.rotateY(E + (A < 0 ? i0 : 0)),
          U.translate(D, 0, G),
          I.push(U));
      }
    }
    for (const A of I) t.frame(new b0()).part(A, "linen_stained", { cast: !1 });
  }
  const p = { x: 4.83, z: 17, L: 2.1, D: 0.95 },
    d = F(p.x, 0, p.z, -i0 / 2);
  t.frame(d);
  const c = "upholstery_green",
    { L: u, D: b } = p;
  for (const [f, i] of [
    [-u / 2 + 0.09, b / 2 - 0.09],
    [u / 2 - 0.09, b / 2 - 0.09],
    [-u / 2 + 0.09, -b / 2 + 0.09],
    [u / 2 - 0.09, -b / 2 + 0.09],
  ])
    t.part(
      j(
        [
          [0.03, 0],
          [0.034, 0.02],
          [0.028, 0.05],
          [0.036, 0.075],
          [0.04, 0.1],
        ],
        16,
      ).translate(f, 0, i),
      "wood_walnut",
      { grain: "y", cast: !1 },
    );
  t.part(
    _(u - 0.02, 0.27, b - 0.04, {
      r: 0.04,
      m: 3,
      puff: [0.01, 0.004, 0.012],
      rng: e,
    }).translate(0, 0.235, 0),
    c,
    { grain: "x" },
  );
  for (const f of [-1, 1]) {
    t.part(
      _(0.2, 0.45, b - 0.03, {
        r: 0.05,
        m: 3,
        puff: [0.012, 0, 0.01],
        rng: e,
      }).translate(f * (u / 2 - 0.1), 0.325, 0),
      c,
      { grain: "y" },
    );
    const i = new et(0.105, b - 0.25, 6, 18);
    (i.rotateX(i0 / 2),
      i.translate(f * (u / 2 - 0.1) + f * 0.012, 0.565, 0.005),
      t.part(i, c, { grain: "z" }));
  }
  t.part(
    _(u - 0.36, 0.52, 0.22, {
      r: 0.06,
      m: 3,
      puff: [0, 0.015, 0.02],
      rng: e,
    }).translate(0, 0.62, -b / 2 + 0.11),
    c,
    { grain: "x" },
  );
  const k = (u - 0.4) / 3;
  for (let f = 0; f < 3; f++) {
    const i =
        f === 1
          ? { x: 0.02, z: 0.06, r: 0.16, d: 0.035 }
          : { x: (e() - 0.5) * 0.1, z: 0.05, r: 0.18, d: 0.012 },
      m = _(k - 0.012, 0.135, 0.7, {
        r: 0.05,
        m: 3,
        puff: [0.008, 0.026, 0.01],
        sag: i,
        lumps: 0.004,
        rng: e,
        res: 0.05,
      });
    t.part(m, c, {
      grain: "x",
      local: F(
        -k + f * k + (e() - 0.5) * 0.012,
        0.425,
        0.115 + (e() - 0.5) * 0.015,
        (e() - 0.5) * 0.03,
      ),
    });
  }
  for (let f = 0; f < 3; f++) {
    const i = _(k - 0.02, 0.46, 0.17, {
      r: 0.065,
      m: 3,
      puff: [0.008, 0.012, 0.035],
      lumps: 0.004,
      rng: e,
      res: 0.05,
    });
    t.part(i, c, {
      grain: "x",
      local: F(
        -k + f * k,
        0.72 - (f === 1 ? 0.025 : 0),
        -b / 2 + 0.3,
        (e() - 0.5) * 0.04,
        -0.2 - e() * 0.08,
        (e() - 0.5) * 0.04,
      ),
    });
  }
  t.part(
    _(0.4, 0.4, 0.13, {
      r: 0.07,
      m: 3,
      puff: [0.01, 0.01, 0.045],
      rng: e,
      res: 0.05,
    }),
    "velvet_red",
    { grain: "x", local: F(-u / 2 + 0.36, 0.66, -0.12, 0.5, -0.35, 0.25) },
  );
  {
    const T = u / 2 - 0.1 + 0.012,
      I = 0.565,
      A = 0.515,
      D = new _0(1.35, 0.86, 96, 52),
      q = D.attributes.position,
      G = D.attributes.uv,
      J = e() * 6.28,
      E = e() * 6.28;
    for (let o0 = 0; o0 < q.count; o0++) {
      const x = q.getX(o0) + 0.12,
        Y = q.getY(o0),
        n0 = (i0 / 2) * 0.124,
        c0 =
          Math.sin(Y * 17 + J + x * 2) * 0.7 +
          Math.sin(Y * 31 + x * 5 + E) * 0.3;
      let W,
        X,
        N = Y + 0.05;
      if (Math.abs(x) <= n0) {
        const K = x / 0.124;
        ((W = T + Math.sin(K) * (0.124 + 0.004)),
          (X = I + Math.cos(K) * (0.124 + 0.004)));
      } else if (x > 0) {
        const K = x - n0,
          r0 = Math.min(1, K / 0.25);
        ((W = T + 0.124 + 0.008 + K * 0.06 + c0 * 0.03 * r0),
          (X = I - K),
          X < 0.005 &&
            ((W += (0.005 - X) * 0.7), (X = 0.005 + Math.abs(c0) * 0.004)));
      } else {
        const K = -x - n0,
          r0 = Math.min(1, K / 0.1);
        if (((W = T - 0.124 - 0.008 - c0 * 0.012 * r0), (X = I - K), X < A)) {
          const m0 = A - X;
          ((X =
            A +
            0.008 +
            0.03 * Math.sin(m0 * 19 + J) ** 2 +
            Math.abs(c0) * 0.01),
            (W = T - 0.124 - 0.012 - m0 * 0.92),
            (N += Math.sin(m0 * 13 + Y * 4) * 0.015));
        }
      }
      (q.setXYZ(o0, W, X, N), G.setXY(o0, (x + 1.35 / 2) * 1, Y * 1));
    }
    D.computeVertexNormals();
    const U = a.mats.get("wool_grey", { side: N0, color: "#c09456", uv: 0.22 }),
      B = new u0(D, U);
    (B.applyMatrix4(d),
      (B.castShadow = !0),
      (B.receiveShadow = !0),
      (B.name = "throw"),
      o.add(B));
  }
  {
    const f = new C0({ map: ae(e), roughness: 0.8 }),
      i = new _0(0.44, 0.22, 8, 2);
    i.rotateX(-i0 / 2);
    const m = i.attributes.position;
    for (let T = 0; T < m.count; T++) {
      const I = m.getX(T);
      m.setY(
        T,
        0.012 +
          0.02 * (1 - Math.cos((Math.min(1, Math.abs(I) / 0.22) * i0) / 2)),
      );
    }
    i.computeVertexNormals();
    const M = new u0(i, f);
    M.receiveShadow = !0;
    const v = new y0();
    (v.add(M),
      (v.name = "album"),
      v.position.set(0.02, 0.476, 0.12),
      v.rotation.set(0.04, 0.35, 0.02),
      v.applyMatrix4(d),
      o.add(v),
      v.updateMatrixWorld(!0),
      t
        .frame(v.matrixWorld.clone())
        .part(
          _(0.46, 0.012, 0.235, { r: 0.004 }).translate(0, 0.006, 0),
          "leather_brown",
          { grain: "x" },
        ));
  }
  s.push({
    x0: p.x - b / 2,
    x1: p.x + b / 2,
    z0: p.z - u / 2,
    z1: p.z + u / 2,
    y0: 0,
    y1: 0.93,
  });
  const S = (f, i, m) => {
    const M = F(f, 0, i, m);
    t.frame(M);
    const v = "leather_brown";
    for (const [q, G] of [
      [-0.34, 0.34],
      [0.34, 0.34],
      [-0.34, -0.34],
      [0.34, -0.34],
    ])
      t.part(
        j(
          [
            [0.035, 0],
            [0.045, 0.025],
            [0.04, 0.055],
            [0.03, 0.07],
          ],
          14,
        ).translate(q, 0, G),
        "wood_walnut",
        { grain: "y", cast: !1 },
      );
    t.part(
      _(0.84, 0.31, 0.8, {
        r: 0.06,
        m: 3,
        puff: [0.012, 0.004, 0.012],
        rng: e,
      }).translate(0, 0.22, 0),
      v,
      { grain: "x" },
    );
    for (const q of [-1, 1])
      t.part(
        _(0.18, 0.32, 0.8, {
          r: 0.08,
          m: 3,
          puff: [0.014, 0.014, 0.006],
          rng: e,
          res: 0.05,
        }).translate(q * 0.33, 0.5, 0),
        v,
        { grain: "z" },
      );
    (t.part(
      _(0.84, 0.52, 0.2, {
        r: 0.085,
        m: 3,
        puff: [0.004, 0.012, 0.03],
        rng: e,
        res: 0.05,
      }),
      v,
      { grain: "x", local: F(0, 0.62, -0.31, 0, -0.1) },
    ),
      t.part(
        _(0.48, 0.12, 0.6, {
          r: 0.045,
          m: 3,
          puff: [0.006, 0.022, 0.006],
          sag: { x: 0, z: 0.05, r: 0.15, d: 0.02 },
          rng: e,
          res: 0.05,
        }),
        v,
        { grain: "x", local: F(0, 0.43, 0.07) },
      ));
    const T = Math.abs(Math.cos(m)),
      I = Math.abs(Math.sin(m)),
      A = 0.4 * T + 0.4 * I,
      D = 0.4 * I + 0.4 * T;
    s.push({
      x0: f - A + 0.06,
      x1: f + A - 0.06,
      z0: i - D + 0.06,
      z1: i + D - 0.06,
      y0: 0,
      y1: 0.85,
    });
  };
  (S(2.94, 16.15, -0.38), S(2.9, 17.88, i0 + 0.38));
  const h = { x: 3.52, z: 17, w: 1.2, d: 0.62, h: 0.44 };
  (t.frame(F(h.x, 0, h.z, i0 / 2)),
    t.part(
      _(h.w, 0.034, h.d, { r: 0.012, m: 3 }).translate(0, h.h - 0.017, 0),
      "wood_walnut",
      { grain: "x" },
    ));
  for (const f of [-1, 1])
    (t.part(
      _(h.w - 0.12, 0.06, 0.02, { r: 0.004 }).translate(
        0,
        h.h - 0.064,
        f * (h.d / 2 - 0.05),
      ),
      "wood_walnut",
      { grain: "x" },
    ),
      t.part(
        _(0.02, 0.06, h.d - 0.12, { r: 0.004 }).translate(
          f * (h.w / 2 - 0.05),
          h.h - 0.064,
          0,
        ),
        "wood_walnut",
        { grain: "z" },
      ));
  const y = [
    [0.02, 0],
    [0.024, 0.03],
    [0.018, 0.08],
    [0.022, 0.16],
    [0.028, 0.25],
    [0.02, 0.33],
    [0.024, 0.37],
    [0.026, 0.406],
  ];
  for (const [f, i] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    t.part(
      j(y, 16).translate(f * (h.w / 2 - 0.06), 0, i * (h.d / 2 - 0.06)),
      "wood_walnut",
      { grain: "y" },
    );
  t.part(
    _(h.w - 0.1, 0.018, h.d - 0.1, { r: 0.004 }).translate(0, 0.12, 0),
    "wood_walnut",
    { grain: "x" },
  );
  for (let f = 0; f < 4; f++)
    t.part(
      _(0.38, 0.006, 0.28, { r: 0.002 })
        .translate(0, 0.132 + f * 0.007, 0)
        .rotateY((e() - 0.5) * 0.3)
        .translate(-0.22 + f * 0.02, 0, 0.01),
      "paper_old",
      { grain: "x", cast: !1 },
    );
  s.push({
    x0: h.x - h.d / 2,
    x1: h.x + h.d / 2,
    z0: h.z - h.w / 2,
    z1: h.z + h.w / 2,
    y0: 0,
    y1: 0.46,
  });
  const C = h.h;
  {
    const f = new C0({ map: ee(e), roughness: 0.6 }),
      i = 0.34,
      m = 0.44,
      M = new _0(m, i);
    (M.rotateX(-i0 / 2),
      M.rotateY(i0 / 2),
      M.rotateY(0.04),
      M.translate(h.x - 0.06, C + 0.009, h.z + 0.02),
      t
        .frame(F(h.x - 0.06, C, h.z + 0.02, 0.04))
        .part(
          _(i + 0.02, 0.008, m + 0.02, { r: 0.002 }).translate(0, 0.004, 0),
          "wood_oak_pale",
          { grain: "z", cast: !1 },
        ));
    const v = [];
    for (let I = 0; I < 16; I++) {
      const A = new X0(0.028, 0.003, 0.036).toNonIndexed(),
        D = A.attributes.uv,
        q = e() * 0.9,
        G = e() * 0.9;
      for (let E = 0; E < D.count; E++)
        D.setXY(E, q + D.getX(E) * 0.08, G + D.getY(E) * 0.1);
      const J = I < 10 ? 1 : -1;
      (A.rotateY(e() * i0),
        I === 3 && A.rotateX(i0),
        A.translate(
          h.x + (J > 0 ? 0.17 + e() * 0.09 : -0.26 + e() * 0.05),
          C + 0.0015,
          h.z - 0.1 + e() * 0.45,
        ),
        v.push(A));
    }
    const T = new u0(F0([M, ...v]), f);
    ((T.name = "jigsaw"), (T.receiveShadow = !0), o.add(T));
  }
  {
    const f = h.x - 0.12,
      i = h.z + 0.45;
    (t.frame(F(f, C, i, 0.4)),
      t.part(
        j(
          [
            [0, 0],
            [0.07, 0],
            [0.074, 0.008],
            [0.068, 0.012],
            [0.03, 0.006],
            [0, 0.006],
          ],
          28,
          !1,
        ),
        "porcelain_cracked",
        { grain: "y", cast: !1 },
      ),
      t.part(
        j(
          [
            [0, 0.008],
            [0.025, 0.008],
            [0.03, 0.012],
            [0.042, 0.03],
            [0.046, 0.058],
            [0.043, 0.058],
            [0.039, 0.032],
            [0, 0.016],
          ],
          28,
          !1,
        ),
        "porcelain_cracked",
        { grain: "y", cast: !1 },
      ));
    const m = new at(0.016, 0.004, 6, 14, i0 * 1.2);
    (m.rotateZ(-i0 * 0.6),
      m.translate(0.048, 0.036, 0),
      t.part(m, "porcelain_cracked", { cast: !1 }));
    const M = new pt(0.041, 24);
    (M.rotateX(-i0 / 2),
      M.translate(0, 0.047, 0),
      t.part(M, a0(a, "#2a160a"), { cast: !1 }),
      t.part(
        new X0(0.004, 0.003, 0.09)
          .translate(0, 0.01, 0)
          .rotateY(0.9)
          .translate(0.02, 0, 0.05),
        I0(a, "#8a857a"),
        { cast: !1 },
      ),
      t.frame(F(h.x + 0.14, C, h.z + 0.42, -0.8)),
      t.part(
        j(
          [
            [0, 0],
            [0.05, 0],
            [0.075, 0.03],
            [0.082, 0.07],
            [0.07, 0.11],
            [0.04, 0.125],
            [0.035, 0.13],
            [0, 0.13],
          ],
          28,
        ),
        "porcelain_cracked",
        { grain: "y" },
      ),
      t.part(
        j(
          [
            [0.038, 0.128],
            [0.036, 0.14],
            [0.012, 0.152],
            [0.014, 0.165],
            [0, 0.17],
          ],
          20,
        ),
        "porcelain_cracked",
        { grain: "y", cast: !1 },
      ),
      t.part(
        T0(
          [
            [0.07, 0.05, 0],
            [0.1, 0.08, 0],
            [0.12, 0.12, 0],
            [0.135, 0.135, 0],
          ],
          0.009,
          10,
          8,
        ),
        "porcelain_cracked",
        { cast: !1 },
      ));
    const v = new at(0.04, 0.007, 8, 16, i0 * 1.1);
    (v.rotateZ(i0 * 0.45),
      v.translate(-0.075, 0.075, 0),
      t.part(v, "porcelain_cracked", { cast: !1 }));
  }
  {
    (t.frame(F(h.x + 0.17, C, h.z - 0.18, 0)),
      t.part(
        j(
          [
            [0, 0],
            [0.075, 0],
            [0.08, 0.008],
            [0.072, 0.012],
            [0, 0.006],
          ],
          24,
          !1,
        ),
        "brass_aged",
        { grain: "y", cast: !1 },
      ));
    const f = [
      [-0.03, -0.02, 0.09],
      [0.035, 0, 0.055],
      [0, 0.04, 0.035],
    ];
    for (const [i, m, M] of f) {
      t.part(
        j(
          [
            [0.022 + 0.006, 0.006],
            [0.022 + 0.002, 0.012],
            [0.022, 0.02],
            [0.022, M - 0.01],
            [0.022 + 0.001, M - 0.004],
            [0.022 * 0.7, M - 0.006],
            [0.022 * 0.3, M - 0.012],
            [0, M - 0.012],
          ],
          18,
          !0,
        ).translate(i, 0, m),
        "wax_candle",
        { grain: "y", cast: !1 },
      );
      for (let T = 0; T < 4; T++) {
        const I = e() * i0 * 2,
          A = 0.02 + e() * 0.03;
        t.part(
          new et(0.004, A, 3, 6).translate(
            i + Math.cos(I) * 0.022,
            M - 0.012 - A / 2,
            m + Math.sin(I) * 0.022,
          ),
          "wax_candle",
          { cast: !1 },
        );
      }
      t.part(
        new Z0(0.0012, 0.0012, 0.012, 5).translate(i, M - 0.006, m),
        a0(a, "#0a0908"),
        { cast: !1 },
      );
    }
  }
  const z = ge(
    a,
    o,
    t,
    e,
    [h.x + 0.1, C, h.z - 0.4],
    [h.x + 0.03, C - 0.2, h.z - h.w / 2 - 0.035],
  );
  n.push(z.anim);
  const w = be(a, o, t, [5.43, 0, 18.21]);
  return (
    n.push(w.anim),
    s.push({
      x0: 5.43 - 0.16,
      x1: 5.43 + 0.16,
      z0: 18.21 - 0.16,
      z1: 18.21 + 0.16,
      y0: 0,
      y1: 1.6,
    }),
    {
      group: o,
      colliders: s,
      anim: n,
      phone: z.api,
      lamp: w.api,
      sofa: { x: p.x, z: p.z },
      table: h,
    }
  );
}
function ge(a, t, r, e, o, s) {
  const n = new y0();
  ((n.name = "phone"), t.add(n));
  const l = a0(a, "#15100e");
  r.frame(F(o[0], o[1], o[2], i0 * 0.62));
  {
    const S = _(0.19, 0.085, 0.21, { r: 0.028, m: 3 }),
      h = S.attributes.position;
    for (let y = 0; y < h.count; y++) {
      const C = h.getY(y),
        z = h.getZ(y);
      C > 0 && h.setY(y, C - Math.max(0, z + 0.02) * 0.35);
    }
    (S.computeVertexNormals(),
      S.translate(0, 0.0425, 0),
      r.part(S, l, { grain: "x" }));
  }
  for (const S of [-1, 1])
    r.part(
      _(0.03, 0.03, 0.05, { r: 0.008 }).translate(S * 0.07, 0.09, -0.05),
      l,
      { cast: !1 },
    );
  r.part(
    j(
      [
        [0, 0],
        [0.055, 0],
        [0.056, 0.004],
        [0, 0.004],
      ],
      28,
      !1,
    ),
    I0(a, "#bdb7aa"),
    { grain: "y", cast: !1, local: F(0, 0.07, 0.055, 0, -0.33) },
  );
  for (let S = 0; S < 10; S++) {
    const h = -0.6 + (S / 10) * i0 * 1.65;
    r.part(
      new Z0(0.0085, 0.0085, 0.003, 10).translate(
        Math.cos(h) * 0.038,
        0.0055,
        Math.sin(h) * 0.038,
      ),
      a0(a, "#0a0a0a"),
      { cast: !1, local: F(0, 0.07, 0.055, 0, -0.33) },
    );
  }
  const p = new y0();
  p.name = "receiver";
  const d = new st(a.mats, e);
  (d.frame(new b0()),
    d.part(
      T0(
        [
          [-0.09, 0, 0],
          [-0.06, 0.018, 0],
          [0.06, 0.018, 0],
          [0.09, 0, 0],
        ],
        0.012,
        16,
        8,
      ),
      l,
      { grain: "x" },
    ));
  for (const S of [-1, 1])
    d.part(
      j(
        [
          [0, 0],
          [0.028, 0],
          [0.03, 0.012],
          [0.02, 0.028],
          [0.013, 0.03],
        ],
        18,
      )
        .rotateX(i0)
        .translate(S * 0.09, 0.005, 0),
      l,
      { grain: "y" },
    );
  d.flush(p, "receiver");
  const c = new y0();
  (c.position.set(s[0] + 0.02, s[1] + 0.2, s[2]),
    p.position.set(0, -0.2, 0),
    p.rotation.set(0.1, 0.4, i0 / 2 - 0.15),
    c.add(p),
    n.add(c));
  {
    const S = new f0(o[0] - 0.01, o[1] + 0.025, o[2] - 0.07),
      h = new f0(s[0] + 0.01, s[1] + 0.1, s[2] + 0.004),
      y = s[2] + 0.035,
      C = new f0((S.x + h.x) / 2 + 0.04, o[1] + 0.012, (S.z + y) / 2),
      z = new f0(h.x + 0.01, o[1] + 0.01, y + 0.004),
      w = new f0(h.x + 0.012, o[1] - 0.04, y - 0.012),
      f = new it([S, C, z, w, h]),
      i = [],
      m = 420,
      M = 44,
      v = new f0(),
      T = new f0(),
      I = new f0(),
      A = new f0(0, 1, 0);
    for (let D = 0; D <= m; D++) {
      const q = D / m,
        G = f.getPointAt(q);
      (f.getTangentAt(q, v),
        T.crossVectors(v, A),
        T.lengthSq() < 1e-6 && T.set(1, 0, 0),
        T.normalize(),
        I.crossVectors(v, T).normalize());
      const J = q * M * i0 * 2;
      i.push(
        G.clone()
          .addScaledVector(T, Math.cos(J) * 0.007)
          .addScaledVector(I, Math.sin(J) * 0.007),
      );
    }
    r.frame(new b0()).part(new zt(new it(i), m * 2, 0.0022, 4), l, {
      uv: "keep",
      cast: !1,
    });
  }
  let u = 0.05;
  return {
    api: {
      group: n,
      receiver: p,
      pivot: c,
      sway(S = 0.12) {
        u = Math.max(u, S);
      },
    },
    anim: (S, h) => {
      ((u = Math.max(0.02, u * Math.exp(-S * 0.6))),
        (c.rotation.x = Math.sin(h * 2.4) * u * 0.5),
        (c.rotation.z = Math.sin(h * 2.4 + 1.2) * u * 0.25));
    },
  };
}
function be(a, t, r, e) {
  const o = new y0();
  ((o.name = "lamp"), t.add(o));
  const [s, , n] = e;
  r.frame(F(s, 0, n, 0));
  const l = a.mats.get("brass_aged", { color: "#5e4a2c", rough: 0.62 });
  (r.part(
    j(
      [
        [0.16, 0],
        [0.165, 0.012],
        [0.15, 0.03],
        [0.07, 0.05],
        [0.03, 0.08],
        [0.018, 0.1],
      ],
      32,
    ),
    l,
    { grain: "y" },
  ),
    r.part(
      j(
        [
          [0.012, 0.09],
          [0.012, 1.3],
          [0.02, 1.32],
          [0.02, 1.36],
          [0.01, 1.38],
        ],
        12,
      ),
      "brass_aged",
      { grain: "y" },
    ),
    r.part(
      j(
        [
          [0.03, 1.36],
          [0.034, 1.38],
          [0.02, 1.4],
        ],
        12,
      ),
      "brass_aged",
      { grain: "y", cast: !1 },
    ));
  for (let w = 0; w < 3; w++) {
    const f = (w / 3) * i0 * 2 + 0.3;
    r.part(
      T0(
        [
          [0, 1.46, 0],
          [Math.cos(f) * 0.15, 1.675, Math.sin(f) * 0.15],
        ],
        0.003,
        2,
        5,
      ),
      "brass_aged",
      { cast: !1 },
    );
  }
  r.part(
    j(
      [
        [0.016, 1.38],
        [0.018, 1.43],
        [0.014, 1.45],
      ],
      12,
    ),
    "brass_aged",
    { cast: !1 },
  );
  const p = new U0({ color: new H0().setRGB(6, 3.6, 1.6), toneMapped: !1 }),
    d = new u0(
      j(
        [
          [0.012, 1.445],
          [0.028, 1.47],
          [0.03, 1.49],
          [0.02, 1.515],
          [0, 1.525],
        ],
        16,
      ),
      p,
    );
  (d.position.set(s, 0, n), (d.name = "bulb"), o.add(d));
  const c = Y0(256, 128, (w, f, i) => {
      ((w.fillStyle = "#d8c8a0"), w.fillRect(0, 0, f, i));
      for (let m = 0; m < 36; m++) {
        const M = (m / 36) * f,
          v = w.createLinearGradient(M, 0, M + f / 36, 0);
        (v.addColorStop(0, "rgba(90,70,40,0.35)"),
          v.addColorStop(0.5, "rgba(255,245,220,0.15)"),
          v.addColorStop(1, "rgba(90,70,40,0.1)"),
          (w.fillStyle = v),
          w.fillRect(M, 0, f / 36, i));
      }
      ((w.fillStyle = "#6a4a2a"),
        w.fillRect(0, 0, f, 9),
        w.fillRect(0, i - 11, f, 11),
        (w.fillStyle = "rgba(160,110,50,0.35)"),
        w.beginPath(),
        w.ellipse(f * 0.7, i * 0.6, 26, 18, 0.3, 0, Math.PI * 2),
        w.fill(),
        (w.strokeStyle = "rgba(120,80,30,0.45)"),
        (w.lineWidth = 2),
        w.stroke());
    }),
    u = new C0({
      color: 16777215,
      map: c,
      emissiveMap: c,
      roughness: 0.9,
      side: N0,
      emissive: new H0(1, 1, 1),
    }),
    b = new Z0(0.15, 0.25, 0.32, 72, 6, !0);
  {
    const w = b.attributes.position;
    for (let f = 0; f < w.count; f++) {
      const i = w.getX(f),
        m = w.getZ(f),
        M = Math.atan2(m, i),
        v = Math.hypot(i, m),
        T = 1 + 0.035 * Math.abs(Math.sin(M * 18));
      (w.setX(f, Math.cos(M) * v * T), w.setZ(f, Math.sin(M) * v * T));
    }
    b.computeVertexNormals();
  }
  const k = new u0(b, u);
  (k.position.set(s, 1.52, n),
    (k.rotation.z = 0.035),
    (k.name = "shade"),
    (k.castShadow = !1),
    (k.receiveShadow = !1),
    o.add(k),
    r.part(
      T0(
        [
          [0.05, 1.42, 0],
          [0.052, 1.3, 0.004],
          [0.05, 1.22, 0],
        ],
        0.0015,
        6,
        4,
      ),
      "brass_aged",
      { cast: !1 },
    ));
  const S = new tt(16756848, 30, 9, 1.18, 0.75, 2);
  (S.position.set(s, 1.49, n),
    S.target.position.set(s, 0, n),
    (S.name = "lamp_light"));
  const h = new tt(16754784, 2, 4.5, 0.62, 1, 2);
  (h.position.set(s, 1.5, n),
    h.target.position.set(s, 3, n),
    (h.name = "lamp_up"),
    (h.userData.noActor = !0),
    o.add(S, S.target, h, h.target));
  const y = { on: 1, level: 30, flick: 0 },
    C = {
      group: o,
      light: S,
      bulb: d,
      shade: k,
      get level() {
        return y.level;
      },
      set level(w) {
        y.level = w;
      },
      setOn(w) {
        y.on = w ? 1 : 0;
      },
      flicker(w = 0.6) {
        y.flick = Math.max(y.flick, w);
      },
    },
    z = (w, f) => {
      y.flick = Math.max(0, y.flick - w * 0.7);
      let i = 1 + 0.03 * Math.sin(f * 0.7) + 0.015 * Math.sin(f * 5.3);
      if (y.flick > 0) {
        const m = Math.sin(f * 43) * Math.sin(f * 17.3);
        i *= 1 - y.flick * (m > 0.2 ? 0.85 : 0.1);
      }
      ((i *= y.on),
        (S.intensity = y.level * i),
        (h.intensity = y.level * 0.055 * i),
        p.color.setRGB(6 * i, 3.6 * i, 1.6 * i),
        u.emissive.setRGB(0.5 * i, 0.27 * i, 0.1 * i));
    };
  return (z(0, 0), { api: C, anim: z });
}
const A0 = Math.PI;
function Ct(a, t, r = {}) {
  const e = r.wood || "wood_walnut",
    o = r.seat || "velvet_red",
    s = 0.44,
    n = 0.42,
    l = 0.47,
    p = [
      [0.017, 0],
      [0.02, 0.05],
      [0.016, 0.12],
      [0.02, 0.2],
      [0.024, 0.3],
      [0.018, 0.36],
      [0.022, 0.41],
      [0.022, l - 0.05],
    ];
  for (const c of [-1, 1])
    a.part(j(p, 12).translate(c * (s / 2 - 0.03), 0, n / 2 - 0.03), e, {
      grain: "y",
    });
  for (const c of [-1, 1])
    (a.part(_(0.032, 0.5, 0.034, { r: 0.006 }), e, {
      grain: "y",
      local: F(c * (s / 2 - 0.03), 0.25, -n / 2 + 0.03, 0, 0.04),
    }),
      a.part(_(0.03, 0.5, 0.032, { r: 0.006 }), e, {
        grain: "y",
        local: F(c * (s / 2 - 0.03), l + 0.22, -n / 2 + 0.005, 0, -0.1),
      }));
  for (const c of [-1, 1])
    (a.part(
      _(s - 0.05, 0.06, 0.02, { r: 0.004 }).translate(
        0,
        l - 0.06,
        c * (n / 2 - 0.03),
      ),
      e,
      { grain: "x" },
    ),
      a.part(
        _(0.02, 0.06, n - 0.05, { r: 0.004 }).translate(
          c * (s / 2 - 0.03),
          l - 0.06,
          0,
        ),
        e,
        { grain: "z" },
      ));
  for (const c of [-1, 1])
    a.part(
      _(0.018, 0.022, n - 0.06, { r: 0.004 }).translate(
        c * (s / 2 - 0.03),
        0.13,
        0,
      ),
      e,
      { grain: "z", cast: !1 },
    );
  (a.part(_(s - 0.06, 0.02, 0.018, { r: 0.004 }).translate(0, 0.14, 0), e, {
    grain: "x",
    cast: !1,
  }),
    a.part(
      _(s - 0.01, 0.05, n - 0.01, {
        r: 0.018,
        m: 3,
        puff: [0.004, 0.012, 0.004],
        sag: { x: 0, z: 0.02, r: 0.1, d: 0.006 },
        rng: t,
        res: 0.05,
      }).translate(0, l + 0.01, 0.005),
      o,
      { grain: "x" },
    ));
  const d = _(s - 0.02, 0.07, 0.026, {
    r: 0.008,
    res: 0.04,
    m: 2,
    puff: [0, 0, 1e-4],
  });
  {
    const c = d.attributes.position;
    for (let u = 0; u < c.count; u++) {
      const b = c.getX(u);
      c.setZ(u, c.getZ(u) - b * b * 0.35);
    }
    d.computeVertexNormals();
  }
  (a.part(d, e, { grain: "x", local: F(0, l + 0.44, -n / 2 - 0.03, 0, -0.1) }),
    a.part(_(s - 0.07, 0.03, 0.022, { r: 0.005 }), e, {
      grain: "x",
      local: F(0, l + 0.12, -n / 2 + 0, 0, -0.1),
    }));
  {
    const c = new $0();
    (c.moveTo(-0.035, 0),
      c.bezierCurveTo(-0.07, 0.08, -0.02, 0.14, -0.05, 0.22),
      c.bezierCurveTo(-0.075, 0.27, -0.06, 0.3, -0.07, 0.3),
      c.lineTo(0.07, 0.3),
      c.bezierCurveTo(0.06, 0.3, 0.075, 0.27, 0.05, 0.22),
      c.bezierCurveTo(0.02, 0.14, 0.07, 0.08, 0.035, 0),
      c.lineTo(-0.035, 0));
    const u = G0(c, 0.014, 0.003, 10);
    (u.translate(0, 0, -0.007),
      a.part(u, e, {
        grain: "y",
        local: F(0, l + 0.135, -n / 2 - 0.012, 0, -0.1),
      }));
  }
}
function ye(a, t, r, e) {
  const o = new y0();
  ((o.name = "dining"), r.add(o));
  const s = [],
    n = { x: 9.9, z: 19.15, w: 1.6, d: 0.9, h: 0.76 };
  (t.frame(F(n.x, 0, n.z, 0)),
    t.part(
      _(n.w, 0.035, n.d, { r: 0.012, m: 3 }).translate(0, n.h - 0.0175, 0),
      "wood_walnut",
      { grain: "x" },
    ));
  for (const f of [-1, 1])
    (t.part(
      _(n.w - 0.2, 0.1, 0.022, { r: 0.004 }).translate(
        0,
        n.h - 0.085,
        f * (n.d / 2 - 0.08),
      ),
      "wood_walnut",
      { grain: "x" },
    ),
      t.part(
        _(0.022, 0.1, n.d - 0.2, { r: 0.004 }).translate(
          f * (n.w / 2 - 0.08),
          n.h - 0.085,
          0,
        ),
        "wood_walnut",
        { grain: "z" },
      ));
  const l = [
    [0.028, 0],
    [0.034, 0.03],
    [0.026, 0.07],
    [0.03, 0.14],
    [0.05, 0.26],
    [0.052, 0.34],
    [0.034, 0.44],
    [0.028, 0.52],
    [0.036, 0.58],
    [0.034, n.h - 0.035],
  ];
  for (const [f, i] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    t.part(
      j(l, 18).translate(f * (n.w / 2 - 0.09), 0, i * (n.d / 2 - 0.09)),
      "wood_walnut",
      { grain: "y" },
    );
  {
    const f = $t(n.w / 2, n.d / 2, 0.27, n.h + 0.002, {
      rng: e,
      fold: 0.014,
      pull: { x: -1, z: 0.1, r: 0.55, d: 0.07 },
    });
    f.translate(n.x + 0.02, 0, n.z);
    const i = new u0(f, a.mats.get("linen_stained", { side: N0 })),
      m = f.attributes.uv,
      M = f.attributes.position;
    for (let v = 0; v < m.count; v++)
      m.setXY(v, M.getX(v) * 1, M.getZ(v) * 1 + M.getY(v) * 0.6);
    ((i.castShadow = !0),
      (i.receiveShadow = !0),
      (i.name = "tablecloth"),
      o.add(i));
  }
  const p = n.h + 0.004,
    d = [
      [-0.4, -0.3, 0],
      [0.4, -0.3, 0],
      [-0.4, 0.3, A0],
      [0.4, 0.3, A0],
      [-0.68, 0, A0 / 2],
      [0.68, 0, -A0 / 2],
    ],
    c = "porcelain_cracked",
    u = I0(a, "#9d978a"),
    b = ot(),
    k = a0(a, "#5a2c18"),
    S = a0(a, "#4e5030"),
    h = a0(a, "#8a7650");
  (d.forEach(([f, i, m], M) => {
    if (
      (t.frame(F(n.x + f, p, n.z + i, m + A0)),
      t.part(
        j(
          [
            [0, 0],
            [0.09, 0],
            [0.13, 0.012],
            [0.135, 0.016],
            [0.12, 0.014],
            [0.07, 0.006],
            [0, 0.006],
          ],
          32,
          !1,
        ),
        c,
        { grain: "y", cast: !1 },
      ),
      M !== 5)
    ) {
      (t.part(
        _(0.12, 0.035, 0.09, {
          r: 0.02,
          m: 3,
          puff: [0.01, 0.012, 0.01],
          lumps: 0.006,
          rng: e,
          res: 0.03,
        }).translate(0.01, 0.024, -0.01),
        k,
        { grain: "x", cast: !1 },
      ),
        t.part(
          _(0.06, 0.018, 0.05, {
            r: 0.012,
            m: 2,
            puff: [0.006, 0.006, 0.006],
            rng: e,
            res: 0.03,
          }).translate(-0.05, 0.016, 0.045),
          S,
          { grain: "x", cast: !1 },
        ));
      for (let T = 0; T < 2; T++)
        t.part(
          new D0(0.018, 8, 6)
            .scale(1, 0.7, 1)
            .translate(0.05 + T * 0.03, 0.018, 0.045 - T * 0.02),
          h,
          { cast: !1 },
        );
    }
    (t.part(new X0(0.012, 0.003, 0.2).translate(0.17, 0.0015, 0), u, {
      cast: !1,
    }),
      t.part(new X0(0.014, 0.003, 0.19).translate(-0.17, 0.0015, 0), u, {
        cast: !1,
      }),
      t.part(
        _(0.12, 0.012, 0.16, { r: 0.004 }).translate(-0.24, 0.006, 0.02),
        "linen_stained",
        { grain: "x", cast: !1 },
      ));
    const v = j(
      [
        [0, 0],
        [0.035, 0],
        [0.036, 0.004],
        [0.004, 0.01],
        [0.004, 0.09],
        [0.03, 0.12],
        [0.036, 0.16],
        [0.034, 0.19],
      ],
      18,
      !1,
    );
    (M === 1
      ? (v.rotateZ(A0 / 2), v.translate(0.2, 0.035, -0.2))
      : v.translate(0.16, 0, -0.17),
      t.part(v, b, { grain: "y", cast: !1 }));
  }),
    t.frame(F(n.x - 0.12, p, n.z, 0.2)),
    t.part(
      j(
        [
          [0, 0],
          [0.16, 0],
          [0.2, 0.014],
          [0.205, 0.02],
          [0.17, 0.016],
          [0, 0.01],
        ],
        32,
        !1,
      ).scale(1.3, 1, 0.8),
      c,
      { grain: "y", cast: !1 },
    ),
    t.part(
      _(0.24, 0.1, 0.15, {
        r: 0.05,
        m: 3,
        puff: [0.02, 0.03, 0.02],
        lumps: 0.012,
        rng: e,
        res: 0.03,
      }).translate(0, 0.065, 0),
      a0(a, "#5a2c18"),
      { grain: "x" },
    ),
    t.frame(F(n.x + 0.28, p, n.z - 0.02, 0.4)));
  const y = "brass_aged";
  t.part(
    j(
      [
        [0, 0],
        [0.08, 0],
        [0.082, 0.012],
        [0.05, 0.03],
        [0.02, 0.05],
        [0.014, 0.12],
        [0.022, 0.15],
        [0.012, 0.3],
        [0.02, 0.32],
        [0.014, 0.34],
      ],
      24,
    ),
    y,
    { grain: "y" },
  );
  const C = (f, i, m) => {
    t.part(
      j(
        [
          [0.006, 0],
          [0.02, 0.005],
          [0.024, 0.02],
          [0.022, 0.03],
        ],
        14,
      ).translate(f, i, m),
      y,
      { cast: !1 },
    );
  };
  C(0, 0.34, 0);
  for (const f of [-1, 1])
    (t.part(
      T0(
        [
          [0, 0.24, 0],
          [f * 0.08, 0.2, 0],
          [f * 0.15, 0.25, 0],
          [f * 0.16, 0.3, 0],
        ],
        0.006,
        16,
        6,
      ),
      y,
      { cast: !1 },
    ),
      C(f * 0.16, 0.3, 0));
  const z = (f, i, m, M) => {
    t.part(
      j(
        [
          [0.012, 0],
          [0.012, M - 0.008],
          [0.009, M - 0.004],
          [0, M - 0.006],
        ],
        12,
      ).translate(f, i + 0.02, m),
      "wax_candle",
      { grain: "y", cast: !1 },
    );
    for (let v = 0; v < 3; v++) {
      const T = e() * A0 * 2,
        I = 0.02 + e() * 0.04;
      t.part(
        new et(0.003, I, 3, 5).translate(
          f + Math.cos(T) * 0.012,
          i + 0.02 + M - I / 2 - 0.01,
          m + Math.sin(T) * 0.012,
        ),
        "wax_candle",
        { cast: !1 },
      );
    }
    t.part(
      new Z0(0.001, 0.001, 0.01, 4).translate(f, i + 0.02 + M - 0.002, m),
      a0(a, "#0a0908"),
      { cast: !1 },
    );
  };
  (z(0, 0.34, 0, 0.07),
    z(-0.16, 0.3, 0, 0.05),
    z(0.16, 0.3, 0, 0.11),
    t.frame(F(n.x + 0.22, p, n.z + 0.07, 1.1)),
    t.part(
      j(
        [
          [0, 0],
          [0.036, 0],
          [0.038, 0.2],
          [0.03, 0.23],
          [0.013, 0.26],
          [0.013, 0.31],
          [0.016, 0.315],
          [0, 0.315],
        ],
        18,
      )
        .rotateZ(A0 / 2)
        .translate(0.15, 0.037, 0),
      a0(a, "#0e1a12"),
      { grain: "y", cast: !1 },
    ),
    s.push({
      x0: n.x - n.w / 2 - 0.02,
      x1: n.x + n.w / 2 + 0.02,
      z0: n.z - n.d / 2 - 0.02,
      z1: n.z + n.d / 2 + 0.02,
      y0: 0,
      y1: 0.8,
    }));
  const w = (f, i) => {
    (t.frame(f), Ct(t, e), i && s.push(i));
  };
  (w(F(9.5, 0, 18.45, 0), {
    x0: 9.27,
    x1: 9.73,
    z0: 18.22,
    z1: 18.68,
    y0: 0,
    y1: 0.95,
  }),
    w(F(10.3, 0, 19.86, A0 + 0.06), {
      x0: 10.07,
      x1: 10.53,
      z0: 19.63,
      z1: 20.12,
      y0: 0,
      y1: 0.95,
    }));
  {
    const f = new b0().multiplyMatrices(
      F(8.98, 0.018, 19.02, A0 / 2 + 0.25),
      new b0().multiplyMatrices(F(0, 0, 0, 0, -A0 / 2 + 0.07), F(0, 0, 0.2)),
    );
    w(f, { x0: 8.05, x1: 9.2, z0: 18.72, z1: 19.35, y0: 0, y1: 0.5 });
  }
  return {
    group: o,
    colliders: s,
    table: { x: n.x, z: n.z, w: n.w, d: n.d, h: n.h },
  };
}
const e0 = Math.PI,
  g0 = { north: 13.6, south: 20.4, west: 0, east: 12.2 },
  Xt = [
    ["#5a1a1c", "#c9a24e"],
    ["#1f3a2c", "#c9a24e"],
    ["#1c2438", "#b8b0a0"],
    ["#4a3020", "#c9a24e"],
    ["#161412", "#a08040"],
    ["#6e2a22", "#161412"],
    ["#3e4228", "#c9a24e"],
    ["#6a4a2a", "#2a1a10"],
    ["#50504a", "#161412"],
    ["#b8ab88", "#5a1a1c"],
  ];
let Q0 = null;
function Rt() {
  if (Q0) return Q0;
  const a = Y0(640, 256, (t, r, e) => {
    (Xt.forEach(([o, s], n) => {
      const l = n * 64;
      ((t.fillStyle = o), t.fillRect(l, 0, 64, 240));
      const p = t.createLinearGradient(l, 0, l + 64, 0);
      if (
        (p.addColorStop(0, "rgba(0,0,0,0.35)"),
        p.addColorStop(0.25, "rgba(255,255,255,0.06)"),
        p.addColorStop(0.7, "rgba(0,0,0,0)"),
        p.addColorStop(1, "rgba(0,0,0,0.35)"),
        (t.fillStyle = p),
        t.fillRect(l, 0, 64, 240),
        (t.fillStyle = s),
        n % 3 !== 2)
      ) {
        for (const d of [16, 24, 212, 220]) t.fillRect(l + 5, d, 54, 3);
        (t.fillRect(l + 12, 70, 40, 4),
          t.fillRect(l + 16, 82, 32, 3),
          t.fillRect(l + 18, 92, 28, 3));
      } else
        (t.fillRect(l + 8, 40, 48, 30),
          (t.fillStyle = o),
          t.fillRect(l + 12, 48, 40, 3),
          t.fillRect(l + 14, 56, 36, 3));
      t.fillStyle = "rgba(220,200,160,0.10)";
      for (let d = 0; d < 60; d++)
        t.fillRect(l + ((d * 37) % 64), (d * 53) % 240, 2, 1);
    }),
      (t.fillStyle = "#cfc4a6"),
      t.fillRect(0, 240, r, 16),
      (t.fillStyle = "rgba(90,70,40,0.25)"));
    for (let o = 0; o < r; o += 3) t.fillRect(o, 240, 1, 16);
  });
  return ((Q0 = new C0({ map: a, roughness: 0.75 })), (Q0.name = "books"), Q0);
}
function B0(a, t, r, e) {
  const o = new X0(a, t, r).toNonIndexed(),
    s = o.attributes.uv,
    n = ((e % Xt.length) * 64) / 640,
    l = 64 / 640,
    p = (d) =>
      d === 4
        ? [n + 0.004, 16 / 256, n + l - 0.004, 1]
        : d === 0 || d === 1
          ? [n + l * 0.4, 0.4, n + l * 0.6, 0.45]
          : [0.1, 0.005, 0.9, 12 / 256];
  for (let d = 0; d < 6; d++) {
    const [c, u, b, k] = p(d);
    for (let S = 0; S < 6; S++) {
      const h = d * 6 + S;
      s.setXY(h, c + s.getX(h) * (b - c), u + s.getY(h) * (k - u));
    }
  }
  return o;
}
function At(a, t, r, e, o, s, n = {}) {
  const l = [];
  let p = t + 0.01;
  const d = n.gap ? t + (r - t) * (0.3 + a() * 0.4) : -1;
  for (; p < r - 0.03;) {
    if (d > 0 && Math.abs(p - d) < 0.12) {
      p += 0.24;
      continue;
    }
    const c = 0.022 + a() * 0.03,
      u = (n.hMin ?? 0.2) + a() * (n.hVar ?? 0.1),
      b = o * (0.72 + a() * 0.22),
      k = (a() * 10) | 0;
    if (p + c > r - 0.005) break;
    const S = B0(c, u, b, k);
    if (a() < 0.06 && p < r - 0.2) {
      (S.rotateZ(e0 / 2),
        S.translate(p + u / 2, e + c / 2, s - b / 2),
        l.push(S),
        (p += u + 0.01));
      continue;
    }
    const h = a() < 0.08 ? 0.12 : 0;
    (S.translate(0, u / 2, 0),
      h && S.rotateZ(-h),
      S.translate(
        p + c / 2 + (h ? u * Math.sin(h) * 0.5 : 0),
        e,
        s - b / 2 - a() * 0.02,
      ),
      l.push(S),
      (p += c + 0.001 + (h ? u * 0.12 : 0)));
  }
  return l;
}
function It(a, t, r = 0.9, e = 2.05, o = 0.34, s = {}) {
  const n = "wood_walnut",
    l = s.shelves ?? [0.1, 0.5, 0.88, 1.24, 1.6];
  for (const p of [-1, 1])
    a.part(
      _(0.026, e - 0.06, o, { r: 0.004 }).translate(
        p * (r / 2 - 0.013),
        (e - 0.06) / 2,
        0,
      ),
      n,
      { grain: "y" },
    );
  (a.part(
    _(r + 0.06, 0.035, o + 0.04, { r: 0.008 }).translate(0, e - 0.0175, 0.01),
    n,
    { grain: "x" },
  ),
    a.part(
      _(r + 0.02, 0.05, o + 0.015, { r: 0.006 }).translate(0, e - 0.06, 0.004),
      n,
      { grain: "x" },
    ),
    a.part(
      _(r - 0.03, 0.08, 0.02, { r: 0.004 }).translate(0, 0.04, o / 2 - 0.015),
      n,
      { grain: "x" },
    ),
    a.part(
      _(r - 0.04, e - 0.1, 0.01, { r: 0.002 }).translate(
        0,
        (e - 0.1) / 2 + 0.04,
        -o / 2 + 0.008,
      ),
      n,
      { grain: "y", cast: !1 },
    ));
  for (const p of l)
    a.part(
      _(r - 0.05, 0.022, o - 0.03, { r: 0.004 }).translate(0, p, 0.004),
      n,
      { grain: "x" },
    );
  return l;
}
function we(a, t, r, e) {
  const o = new y0();
  ((o.name = "walls"), r.add(o));
  const s = [],
    n = [],
    l = {},
    p = [],
    d = new gt(1024),
    c = new gt(2048),
    u = [],
    b = [],
    k = (h, y, C, z, w, f, i = {}) =>
      u.push({
        cell: d.add(y, C, h),
        at: z,
        size: w,
        kind: f,
        rot: i.rot || 0,
        m: i.m || null,
      }),
    S = (h, y, C, z, w, f, i, m = {}) =>
      b.push({ cell: c.add(y, C, h), m: Me(a, t, z, w, f, i, m), w: f, h: i });
  {
    const w = g0.north + 0.06,
      f = F(7.62, 0, w + 0.34 / 2, 0);
    t.frame(f);
    const i = It(t, e, 0.9, 2.05, 0.34);
    i.forEach((m, M) => {
      if (M === i.length - 1) return;
      const v = At(
        e,
        -0.9 / 2 + 0.03,
        0.9 / 2 - 0.03,
        m + 0.011,
        0.34 - 0.04,
        0.34 / 2 - 0.01,
        { gap: M === 2 || M === 1, hMin: M === 0 ? 0.26 : 0.19 },
      );
      for (const T of v) (T.applyMatrix4(f), p.push(T));
    });
    for (let m = 0; m < 3; m++) {
      const M = B0(0.04, 0.24, 0.17, (e() * 10) | 0);
      (M.rotateZ(e0 / 2),
        M.translate(-0.2 + e() * 0.05, 2.05 + 0.02 + m * 0.04, 0),
        M.rotateY((e() - 0.5) * 0.2),
        M.applyMatrix4(f),
        p.push(M));
    }
    s.push({
      x0: 7.62 - 0.9 / 2 - 0.03,
      x1: 7.62 + 0.9 / 2 + 0.03,
      z0: g0.north,
      z1: w + 0.34 + 0.03,
      y0: 0,
      y1: 2.05,
    });
    for (let m = 0; m < 5; m++) {
      const M = B0(
        0.03 + e() * 0.02,
        0.2 + e() * 0.06,
        0.15 + e() * 0.03,
        (e() * 10) | 0,
      );
      (M.rotateZ(e0 / 2),
        M.rotateY(e() * e0),
        M.translate(
          8.4 + e() * 0.8,
          0.018 + (m === 3 ? 0.035 : 0),
          14.05 + e() * 0.35,
        ),
        p.push(M));
    }
  }
  (k(
    W0(oe(e, 256, 256, !0), "#c4b484", 0.5),
    256,
    256,
    [8.66, 1.62, g0.north + 0.0035],
    [0.92, 1.02],
    "wall_n",
  ),
    k(
      W0(ne(e, 1e3, 250), "#d8c29a", 0.34),
      1e3,
      250,
      [9.95, 0.0025, 15.45],
      [3.9, 0.85],
      "floor",
      { rot: -Math.atan2(16.8 - 14.1, 11.2 - 8.7) },
    ));
  for (let h = 0; h < 6; h++) {
    const y = B0(
      0.025 + e() * 0.02,
      0.19 + e() * 0.06,
      0.14 + e() * 0.04,
      (e() * 10) | 0,
    );
    (h === 2 ? (y.rotateX(-1.2), y.translate(0, 0.07, 0)) : y.rotateZ(e0 / 2),
      y.rotateY(e() * e0 * 2),
      y.translate(
        10.85 + e() * 0.3,
        0.017 + (h === 4 ? 0.03 : 0),
        15.95 + e() * 0.9,
      ),
      p.push(y));
  }
  {
    const w = g0.north + 0.035,
      f = F(10.28, 0, w + 0.5 / 2, 0);
    (t.frame(f), Gt(t, e, 1.6, 0.88, 0.5));
    const i = new b0().multiplyMatrices(f, F(-0.28, 0.88, 0, 0.12)),
      m = t;
    (m.frame(i),
      m.part(
        _(0.42, 0.11, 0.34, { r: 0.012 }).translate(0, 0.055, 0),
        "leather_brown",
        { grain: "x" },
      ),
      m.part(
        _(0.39, 0.012, 0.31, { r: 0.003 }).translate(0, 0.106, 0),
        a0(a, "#2a2622"),
        { grain: "x", cast: !1 },
      ),
      m.part(_(0.42, 0.05, 0.34, { r: 0.012 }), "leather_brown", {
        grain: "x",
        local: F(0, 0.13, -0.17, 0, -1.9).multiply(F(0, 0, 0.17)),
      }),
      m.part(
        T0(
          [
            [0.15, 0.13, -0.1],
            [0.155, 0.135, 0.02],
            [0.1, 0.13, 0.09],
          ],
          0.004,
          8,
          6,
        ),
        I0(a, "#b0aa9c"),
        { cast: !1 },
      ),
      m.part(
        new Z0(0.012, 0.014, 0.02, 12).translate(0.15, 0.12, -0.1),
        I0(a, "#b0aa9c"),
        { cast: !1 },
      ));
    const M = new y0();
    (M.position.set(-0.04, 0.113, 0),
      M.applyMatrix4(i),
      (M.name = "record_player"));
    const v = new u0(
      new Z0(0.15, 0.15, 0.003, 48),
      new C0({ map: se(), roughness: 0.28 }),
    );
    {
      const A = v.geometry.attributes.uv,
        D = v.geometry.attributes.position;
      for (let q = 0; q < A.count; q++)
        A.setXY(q, 0.5 + D.getX(q) / 0.3, 0.5 - D.getZ(q) / 0.3);
    }
    (M.add(v), o.add(M));
    let T = 0;
    ((l.recordPlayer = {
      group: M,
      setSpinning(A) {
        T = A ? 1 : 0;
      },
      pos: [10.28 - 0.28, 0.88 + 0.15, w + 0.5 / 2],
    }),
      n.push((A) => {
        T && (M.rotation.y -= A * 3.49);
      }),
      t.frame(f));
    const I = ot();
    (t.part(
      j(
        [
          [0, 0],
          [0.055, 0],
          [0.07, 0.05],
          [0.07, 0.14],
          [0.03, 0.2],
          [0.02, 0.26],
          [0.026, 0.27],
        ],
        20,
        !1,
      ).translate(0.42, 0.88, 0.02),
      I,
      { grain: "y", cast: !1 },
    ),
      t.part(
        j(
          [
            [0, 0],
            [0.066, 0],
            [0.066, 0.06],
            [0, 0.06],
          ],
          20,
        ).translate(0.42, 0.88 + 0.004, 0.02),
        a0(a, "#3a1606"),
        { cast: !1 },
      ),
      t.part(
        j(
          [
            [0, 0.2],
            [0.02, 0.2],
            [0.03, 0.235],
            [0.012, 0.26],
            [0, 0.26],
          ],
          12,
        ).translate(0.42, 0.88 + 0.02, 0.02),
        I,
        { cast: !1 },
      ),
      t.part(
        j(
          [
            [0, 0],
            [0.03, 0],
            [0.034, 0.08],
            [0, 0.08],
          ],
          16,
          !1,
        ).translate(0.57, 0.88, 0.1),
        I,
        { cast: !1 },
      ));
    for (let A = 0; A < 5; A++)
      t.part(
        new X0(0.16, 0.003, 0.1)
          .translate(0, 0, 0)
          .rotateY((e() - 0.5) * 0.4)
          .translate(0.15, 0.88 + 0.0015 + A * 0.003, 0.08),
        "paper_old",
        { cast: !1 },
      );
    s.push({
      x0: 10.28 - 1.6 / 2 - 0.02,
      x1: 10.28 + 1.6 / 2 + 0.02,
      z0: g0.north,
      z1: w + 0.5 + 0.02,
      y0: 0,
      y1: 0.88,
    });
  }
  S(xt(e, !0), 480, 600, [10.28, 1.93, g0.north], 0, 0.62, 0.78, { tilt: 0 });
  {
    const y = F(g0.east, 0, 14.9, -e0 / 2);
    t.frame(y);
    const C = "wood_painted_white";
    for (const i of [-1, 1])
      (t.part(
        _(0.2, 1.08, 0.26, { r: 0.008 }).translate(
          i * 0.6,
          0.54 + 0.04,
          0.03 + 0.13,
        ),
        C,
        { grain: "y" },
      ),
        t.part(
          _(0.24, 0.1, 0.3, { r: 0.008 }).translate(
            i * 0.6,
            0.05 + 0.04,
            0.03 + 0.15,
          ),
          C,
          { grain: "x" },
        ),
        t.part(
          _(0.24, 0.06, 0.3, { r: 0.008 }).translate(i * 0.6, 1.1, 0.03 + 0.15),
          C,
          { grain: "x" },
        ));
    (t.part(
      _(1.4, 0.22, 0.26, { r: 0.008 }).translate(0, 1.07, 0.03 + 0.13),
      C,
      { grain: "x" },
    ),
      t.part(
        _(1.6, 0.05, 0.38, { r: 0.012, m: 3 }).translate(0, 1.205, 0.03 + 0.19),
        C,
        { grain: "x" },
      ),
      t.part(
        _(1.5, 0.03, 0.33, { r: 0.008 }).translate(0, 1.165, 0.03 + 0.165),
        C,
        { grain: "x" },
      ));
    {
      const i = z0(1, 0.96, 0.01, 0, 0.52),
        m = new kt();
      (m.moveTo(-0.3, 0.06),
        m.lineTo(0.3, 0.06),
        m.lineTo(0.3, 0.55),
        m.absarc(0, 0.55, 0.3, 0, e0, !1),
        m.lineTo(-0.3, 0.06),
        i.holes.push(m));
      const M = G0(i, 0.04, 0.006, 16);
      (M.translate(0, 0, 0.22),
        t.part(M, "iron_black", { grain: "x" }),
        t.part(
          _(0.62, 0.86, 0.02, { r: 0.004 }).translate(0, 0.48, 0.035),
          a0(a, "#0b0908"),
          { cast: !1 },
        ));
      for (const v of [-1, 1])
        t.part(
          _(0.02, 0.84, 0.2, { r: 0.004 }).translate(v * 0.31, 0.48, 0.13),
          a0(a, "#0e0c0b"),
          { cast: !1 },
        );
      (t.part(
        _(0.62, 0.02, 0.2, { r: 0.004 }).translate(0, 0.06, 0.13),
        a0(a, "#161412"),
        { cast: !1 },
      ),
        t.part(
          _(0.62, 0.02, 0.2, { r: 0.004 }).translate(0, 0.9, 0.13),
          a0(a, "#0b0908"),
          { cast: !1 },
        ));
    }
    for (let i = 0; i < 6; i++)
      t.part(
        new Z0(0.006, 0.006, 0.2, 6)
          .rotateX(e0 / 2 - 0.3)
          .translate(-0.2 + i * 0.08, 0.16, 0.13),
        "iron_black",
        { cast: !1 },
      );
    (t.part(new X0(0.46, 0.012, 0.012).translate(0, 0.11, 0.2), "iron_black", {
      cast: !1,
    }),
      t.part(new X0(0.46, 0.012, 0.012).translate(0, 0.2, 0.2), "iron_black", {
        cast: !1,
      }));
    for (let i = 0; i < 3; i++) {
      const m = _(0.07, 0.07, 0.36 - i * 0.05, {
        r: 0.03,
        m: 3,
        lumps: 0.008,
        rng: e,
        res: 0.03,
      });
      t.part(m, "wood_ebony", {
        grain: "z",
        local: F(
          -0.08 + i * 0.09,
          0.15 + (i === 1 ? 0.05 : 0),
          0.14,
          e0 / 2 + (e() - 0.5) * 0.5,
          (e() - 0.5) * 0.2,
        ),
        cast: !1,
      });
    }
    (t.part(
      _(0.5, 0.05, 0.22, {
        r: 0.02,
        m: 3,
        puff: [0.01, 0.02, 0.01],
        lumps: 0.01,
        rng: e,
        res: 0.03,
      }).translate(0, 0.075, 0.14),
      a0(a, "#3b3632"),
      { grain: "x", cast: !1 },
    ),
      t.part(
        _(1.66, 0.045, 0.58, { r: 0.008 }).translate(0, 0.0225, 0.29),
        "concrete_grey",
        { grain: "x" },
      ),
      t.part(
        T0(
          [
            [-0.62, 0.07, 0.52],
            [-0.4, 0.07, 0.55],
            [0.4, 0.07, 0.55],
            [0.62, 0.07, 0.52],
          ],
          0.012,
          24,
          8,
        ),
        "brass_aged",
        { cast: !1 },
      ));
    for (const i of [-1, 1])
      t.part(
        new D0(0.02, 10, 8).translate(i * 0.62, 0.07, 0.52),
        "brass_aged",
        { cast: !1 },
      );
    for (const i of [-1, 1])
      (t.part(
        j(
          [
            [0, 0],
            [0.045, 0],
            [0.045, 0.01],
            [0.015, 0.03],
            [0.012, 0.16],
            [0.022, 0.17],
            [0.012, 0.18],
          ],
          18,
        ).translate(i * 0.62, 1.23, 0.2),
        "brass_aged",
        { grain: "y" },
      ),
        t.part(
          j(
            [
              [0.012, 0],
              [0.012, 0.09 - i * 0.03],
              [0, 0.092 - i * 0.03],
            ],
            12,
          ).translate(i * 0.62, 1.41, 0.2),
          "wax_candle",
          { grain: "y", cast: !1 },
        ));
    (t.part(_(0.12, 0.16, 0.012, { r: 0.004 }), "brass_aged", {
      local: F(0.32, 1.31, 0.24, 0.3, -0.12),
    }),
      t.part(
        j(
          [
            [0, 0],
            [0.04, 0],
            [0.055, 0.06],
            [0.045, 0.14],
            [0.025, 0.18],
            [0.03, 0.2],
          ],
          18,
        ).translate(-0.3, 1.23, 0.2),
        "porcelain_cracked",
        { grain: "y" },
      ));
    for (let i = 0; i < 7; i++) {
      const m = e() * e0 * 2,
        M = 0.18 + e() * 0.12,
        v = 0.05 + e() * 0.08,
        T = [
          [-0.3, 1.41, 0.2],
          [-0.3 + Math.cos(m) * 0.03, 1.41 + M * 0.6, 0.2 + Math.sin(m) * 0.03],
          [-0.3 + Math.cos(m) * 0.08, 1.41 + M, 0.2 + Math.sin(m) * 0.08],
          [
            -0.3 + Math.cos(m) * (0.1 + v),
            1.41 + M - v,
            0.2 + Math.sin(m) * (0.1 + v),
          ],
        ];
      t.part(T0(T, 0.0025, 10, 4), a0(a, "#3a2c1a"), { cast: !1 });
      const I = T[3];
      t.part(
        new D0(0.018, 8, 6).scale(1, 0.7, 1).translate(I[0], I[1] - 0.01, I[2]),
        a0(a, "#4a2a22"),
        { cast: !1 },
      );
    }
    (k(
      W0(re(e, 256, 256), "#080605", 0.9),
      256,
      256,
      [0, 0.97, 0.262],
      [0.5, 0.35],
      "local",
      { m: y },
    ),
      s.push({
        x0: g0.east - 0.42,
        x1: g0.east,
        z0: 14.9 - 0.8,
        z1: 14.9 + 0.8,
        y0: 0,
        y1: 1.25,
      }));
    const z = F(g0.east - 0.03, 1.95, 14.9, -e0 / 2);
    t.frame(z);
    const w = z0(0.96, 1.24, 0.03, 0, 0);
    (w.holes.push(z0(0.8, 1.08, 0.024, 0, 0)),
      t.part(G0(w, 0.05, 0.008, 8), "brass_aged", { grain: "x" }),
      t.part(
        G0(
          (() => {
            const i = z0(0.85, 1.13, 0.024, 0, 0);
            return (i.holes.push(z0(0.79, 1.07, 0.02, 0, 0)), i);
          })(),
          0.062,
          0.004,
          8,
        ),
        "brass_aged",
        { grain: "x" },
      ));
    const f = new u0(
      new _0(0.8, 1.08),
      new C0({
        color: 1711388,
        roughness: 0.22,
        metalness: 0.85,
        envMapIntensity: 0.5,
      }),
    );
    (f.position.set(0, 0, 0.02),
      f.applyMatrix4(z),
      o.add(f),
      k(
        W0(le(e, 256, 512), "#a39c8c", 1),
        256,
        512,
        [0, 0, 0.022],
        [0.8, 1.08],
        "local",
        { m: z },
      ),
      (l.mirror = f));
  }
  {
    t.frame(F(11.72, 0, 13.93, 0.3));
    const h = j(
      [
        [0, 0],
        [0.2, 0],
        [0.22, 0.05],
        [0.23, 0.3],
        [0.21, 0.3],
        [0.2, 0.06],
        [0, 0.03],
      ],
      24,
      !1,
    );
    t.part(h.scale(1, 1, 0.75), "wood_oak_pale", { grain: "y" });
    for (let y = 0; y < 5; y++)
      t.part(
        _(0.08, 0.08, 0.42, {
          r: 0.035,
          m: 3,
          lumps: 0.006,
          rng: e,
          res: 0.04,
        }),
        "wood_oak_pale",
        {
          grain: "z",
          local: F(
            -0.1 + (y % 3) * 0.1,
            0.12 + Math.floor(y / 3) * 0.08,
            0,
            (e() - 0.5) * 0.3,
            0.1 + (e() - 0.5) * 0.2,
          ),
        },
      );
    s.push({ x0: 11.5, x1: 11.95, z0: 13.75, z1: 14.12, y0: 0, y1: 0.4 });
  }
  (S(Jt(e), 640, 480, [g0.west, 2.08, 16.5], e0 / 2, 0.98, 0.74, {}),
    S(Bt(e, !0), 640, 440, [6, 1.66, g0.south], e0, 0.84, 0.58, { tilt: 0.12 }),
    (l.clock = ve(a, o, t, e, [g0.west + 0.06, 0, 19.3])),
    n.push(l.clock.anim),
    s.push({
      x0: 0,
      x1: 0.4,
      z0: 19.3 - 0.29,
      z1: 19.3 + 0.29,
      y0: 0,
      y1: 2.2,
    }));
  {
    t.frame(F(6, 0, g0.south - 0.03 - 0.1, e0));
    for (let w = 0; w < 13; w++) {
      const f = (w - 6) * 0.075;
      for (const i of [-0.035, 0.035])
        t.part(
          new et(0.018, 0.64 - 0.16, 4, 10).translate(f, 0.64 / 2 + 0.04, i),
          "iron_black",
          { grain: "y", cast: w % 3 === 0 },
        );
      (t.part(
        _(0.06, 0.05, 0.1, { r: 0.012 }).translate(f, 0.64 - 0.02, 0),
        "iron_black",
        { cast: !1 },
      ),
        t.part(
          _(0.06, 0.05, 0.1, { r: 0.012 }).translate(f, 0.1, 0),
          "iron_black",
          { cast: !1 },
        ));
    }
    for (const w of [-1, 1])
      t.part(
        _(0.05, 0.08, 0.14, { r: 0.01 }).translate(
          w * ((13 * 0.075) / 2 - 0.05),
          0.04,
          0,
        ),
        "iron_black",
        { cast: !1 },
      );
    (t.part(
      T0(
        [
          [(13 * 0.075) / 2 + 0.02, 0.1, 0],
          [(13 * 0.075) / 2 + 0.07, 0.1, 0],
          [(13 * 0.075) / 2 + 0.08, 0.05, 0],
          [(13 * 0.075) / 2 + 0.08, -0.01, 0],
        ],
        0.012,
        12,
        8,
      ),
      "rust_metal",
      { cast: !1 },
    ),
      t.part(
        j(
          [
            [0.02, 0],
            [0.028, 0.01],
            [0.028, 0.04],
            [0.012, 0.05],
            [0.03, 0.06],
            [0.03, 0.075],
          ],
          12,
        )
          .rotateZ(e0 / 2)
          .translate((13 * 0.075) / 2 + 0.03, 0.1, 0),
        "brass_aged",
        { cast: !1 },
      ),
      s.push({
        x0: 6 - (13 * 0.075) / 2 - 0.06,
        x1: 6 + (13 * 0.075) / 2 + 0.1,
        z0: g0.south - 0.2,
        z1: g0.south,
        y0: 0,
        y1: 0.64 + 0.02,
      }),
      t.frame(F(6 - 0.25, 0.64 + 0.005, g0.south - 0.13, 0)),
      wt(a, t, e, 0.07, 0.11, 5, 0.22));
  }
  (t.frame(F(0.42, 0, 20, 0.4)),
    wt(a, t, e, 0.17, 0.36, 9, 0.9),
    s.push({ x0: 0.2, x1: 0.64, z0: 19.78, z1: 20.4, y0: 0, y1: 1 }),
    k(
      W0(bt(e, 256, 256), "#6a5634", 0.55),
      256,
      256,
      [3.1, 3.197, 19.6],
      [1.4, 1.2],
      "ceiling",
    ),
    k(
      W0(bt(e, 256, 256), "#5a4a2a", 0.4),
      256,
      256,
      [g0.west + 0.0035, 2.55, 14.3],
      [0.9, 1.1],
      "wall_w",
    ),
    k(
      W0(ce(e, 256, 256), "#4a0610", 0.9),
      256,
      256,
      [10.1, 0.7645, 19.2],
      [0.42, 0.42],
      "floor",
    ),
    d.pack(),
    c.pack());
  {
    const h = u.map((z) => {
        const w = d.quad(z.cell, z.size[0], z.size[1]);
        return (
          z.kind === "floor"
            ? (w.rotateZ(z.rot), w.rotateX(-e0 / 2))
            : z.kind === "ceiling"
              ? (w.rotateZ(z.rot), w.rotateX(e0 / 2))
              : z.kind === "wall_s"
                ? w.rotateY(e0)
                : z.kind === "wall_w"
                  ? w.rotateY(e0 / 2)
                  : z.kind === "wall_e" && w.rotateY(-e0 / 2),
          w.translate(z.at[0], z.at[1], z.at[2]),
          z.m && w.applyMatrix4(z.m),
          w
        );
      }),
      y = new C0({
        map: d.tex,
        transparent: !0,
        depthWrite: !1,
        roughness: 0.95,
        polygonOffset: !0,
        polygonOffsetFactor: -3,
        polygonOffsetUnits: -3,
      }),
      C = new u0(F0(h), y);
    ((C.receiveShadow = !0),
      (C.renderOrder = 1),
      (C.name = "decals"),
      o.add(C));
  }
  {
    const h = b.map((C) =>
        c.quad(C.cell, C.w, C.h).translate(0, 0, 0.02).applyMatrix4(C.m),
      ),
      y = new u0(F0(h), new C0({ map: c.tex, roughness: 0.55 }));
    ((y.receiveShadow = !0), (y.name = "paintings"), o.add(y));
  }
  if (p.length) {
    const h = new u0(F0(p), Rt());
    ((h.castShadow = !0), (h.receiveShadow = !0), (h.name = "books"), o.add(h));
  }
  return { group: o, colliders: s, anim: n, props: l };
}
function Gt(a, t, r = 1.6, e = 0.88, o = 0.5, s = {}) {
  const n = s.wood || "wood_walnut";
  a.part(
    _(r + 0.04, 0.035, o + 0.03, { r: 0.012, m: 3 }).translate(
      0,
      e - 0.0175,
      0.01,
    ),
    n,
    { grain: "x" },
  );
  for (const u of [-1, 1])
    a.part(
      _(0.03, e - 0.16, o, { r: 0.005 }).translate(
        u * (r / 2 - 0.015),
        0.12 + (e - 0.16) / 2,
        0,
      ),
      n,
      { grain: "y" },
    );
  (a.part(_(r - 0.02, 0.06, o - 0.03, { r: 0.006 }).translate(0, 0.12, 0), n, {
    grain: "x",
  }),
    a.part(
      _(r - 0.03, e - 0.2, 0.012, { r: 0.002 }).translate(
        0,
        0.14 + (e - 0.2) / 2,
        -o / 2 + 0.01,
      ),
      n,
      { grain: "x", cast: !1 },
    ));
  for (const [u, b] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    a.part(
      j(
        [
          [0.03, 0],
          [0.036, 0.02],
          [0.026, 0.05],
          [0.034, 0.08],
          [0.03, 0.095],
        ],
        14,
      ).translate(u * (r / 2 - 0.05), 0, b * (o / 2 - 0.06)),
      n,
      { grain: "y" },
    );
  const l = r * 0.3,
    p = r - 2 * l - 0.04,
    d = o / 2;
  for (const u of [-1, 1]) {
    const b = u * (r / 2 - 0.02 - l / 2);
    (a.part(
      _(l - 0.01, e - 0.23, 0.022, { r: 0.006 }).translate(
        b,
        0.15 + (e - 0.23) / 2,
        d - 0.005,
      ),
      n,
      { grain: "y" },
    ),
      a.part(
        _(l - 0.1, e - 0.34, 0.014, { r: 0.018, m: 3 }).translate(
          b,
          0.15 + (e - 0.23) / 2,
          d + 0.008,
        ),
        n,
        { grain: "y" },
      ),
      a.part(
        j(
          [
            [0.01, 0],
            [0.013, 0.006],
            [0.008, 0.014],
            [0.012, 0.024],
            [0, 0.027],
          ],
          12,
        )
          .rotateX(e0 / 2)
          .translate(b - u * (l / 2 - 0.05), 0.15 + (e - 0.23) / 2, d + 0.006),
        "brass_aged",
        { cast: !1 },
      ));
  }
  const c = s.drawers ?? [0, 0, 0];
  for (let u = 0; u < 3; u++) {
    const b = (e - 0.23) / 3,
      k = 0.15 + b * (u + 0.5),
      S = c[u] || 0;
    (a.part(
      _(p - 0.01, b - 0.012, 0.022, { r: 0.005 }).translate(
        0,
        k,
        d - 0.005 + S,
      ),
      n,
      { grain: "x" },
    ),
      S > 0 &&
        a.part(
          _(p - 0.04, b - 0.03, S + 0.01, { r: 0.003 }).translate(
            0,
            k - 0.004,
            d - 0.02 + S / 2 - 0.01,
          ),
          n,
          { grain: "z", cast: !1 },
        ),
      a.part(
        T0(
          [
            [-0.06, k, d + 0.012 + S],
            [-0.05, k - 0.012, d + 0.03 + S],
            [0.05, k - 0.012, d + 0.03 + S],
            [0.06, k, d + 0.012 + S],
          ],
          0.004,
          10,
          6,
        ),
        "brass_aged",
        { cast: !1 },
      ));
    for (const h of [-1, 1])
      a.part(
        new Z0(0.012, 0.012, 0.006, 12)
          .rotateX(e0 / 2)
          .translate(h * 0.06, k, d + 0.01 + S),
        "brass_aged",
        { cast: !1 },
      );
  }
}
function Me(a, t, r, e, o, s, n = {}) {
  const p = (s / 2 + 0.07) * Math.sin(0.05) + 0.004,
    d = new b0().multiplyMatrices(
      F(r[0], r[1], r[2], e),
      F(0, 0, p, 0, 0, 0).multiply(F(0, 0, 0, 0, 0.05, n.tilt || 0)),
    );
  t.frame(d);
  const c = 0.07,
    u = z0(o + c * 2, s + c * 2, 0.016, 0, 0);
  (u.holes.push(z0(o + 0.01, s + 0.01, 0.014, 0, 0)),
    t.part(G0(u, 0.045, 0.007, 6), "brass_aged", { grain: "x" }));
  const b = z0(o + 0.03, s + 0.03, 0.008, 0, 0);
  return (
    b.holes.push(z0(o, s, 0.006, 0, 0)),
    t.part(G0(b, 0.03, 0.002, 4), "wood_ebony", { grain: "x", cast: !1 }),
    t.part(
      T0(
        [
          [-o * 0.3, s / 2, 0.004],
          [0, s / 2 + 0.16, -0.001],
          [o * 0.3, s / 2, 0.004],
        ],
        0.0012,
        12,
        4,
      ),
      "brass_aged",
      { cast: !1 },
    ),
    d
  );
}
function wt(a, t, r, e, o, s, n) {
  (t.part(
    j(
      [
        [0, 0],
        [e * 0.7, 0],
        [e * 0.75, 0.02],
        [e, o * 0.85],
        [e * 1.08, o * 0.9],
        [e * 1.08, o],
        [e * 0.98, o],
        [e * 0.95, o * 0.9],
        [0, o * 0.86],
      ],
      24,
      !1,
    ),
    a0(a, "#6b3b26"),
    { grain: "y" },
  ),
    t.part(
      new pt(e * 0.95, 20).rotateX(-e0 / 2).translate(0, o * 0.88, 0),
      a0(a, "#1e150e"),
      { cast: !1 },
    ));
  const l = a0(a, "#4a3a22"),
    p = a0(a, "#5a4428");
  for (let d = 0; d < s; d++) {
    const c = (d / s) * e0 * 2 + r(),
      u = 0.15 + r() * 0.35,
      b = n * (0.6 + r() * 0.5),
      k = [
        Math.cos(c) * Math.sin(u) * b,
        o + Math.cos(u) * b,
        Math.sin(c) * Math.sin(u) * b,
      ],
      S = [k[0] * 1.35, k[1] - b * (0.25 + r() * 0.3), k[2] * 1.35];
    t.part(
      T0(
        [
          [Math.cos(c) * 0.02, o * 0.88, Math.sin(c) * 0.02],
          [k[0] * 0.5, o + b * 0.55, k[2] * 0.5],
          k,
          S,
        ],
        0.004 + n * 0.003,
        12,
        5,
      ),
      l,
      { cast: n > 0.5 },
    );
    for (let h = 0; h < 3; h++) {
      const y = 0.45 + h * 0.22,
        C = k[0] * y,
        z = o + (k[1] - o) * y,
        w = k[2] * y,
        f = new D0(0.04 + n * 0.04, 8, 4, 0, e0 * 2, 0, e0 * 0.35).scale(
          1.4,
          0.5,
          0.6,
        );
      (f.rotateZ(-0.9 - r() * 0.8),
        f.rotateY(c + (r() - 0.5)),
        f.translate(C, z - 0.02, w),
        t.part(f, p, { cast: !1 }));
    }
  }
}
function ve(a, t, r, e, o) {
  const [s, , n] = o,
    l = 0.27,
    p = F(s + l / 2, 0, n, e0 / 2);
  r.frame(p);
  const d = "wood_walnut";
  (r.part(
    _(0.56, 0.38, l + 0.04, { r: 0.008 }).translate(0, 0.19 + 0.04, 0),
    d,
    { grain: "y" },
  ),
    r.part(_(0.6, 0.05, l + 0.07, { r: 0.01 }).translate(0, 0.025, 0), d, {
      grain: "x",
    }),
    r.part(_(0.58, 0.04, l + 0.06, { r: 0.008 }).translate(0, 0.44, 0), d, {
      grain: "x",
    }));
  for (const v of [-1, 1])
    r.part(
      _(0.022, 1.02, l - 0.02, { r: 0.004 }).translate(
        v * 0.209,
        0.46 + 0.51,
        -0.01,
      ),
      d,
      { grain: "y" },
    );
  r.part(
    _(0.44, 1.02, 0.015, { r: 0.003 }).translate(0, 0.46 + 0.51, -l / 2 + 0.01),
    a0(a, "#140e0a"),
    { grain: "y", cast: !1 },
  );
  const c = z0(0.34, 0.84, 0.01, 0, 0.97),
    u = new kt();
  (u.moveTo(-0.11, 0.62),
    u.lineTo(0.11, 0.62),
    u.lineTo(0.11, 1.2),
    u.absarc(0, 1.2, 0.11, 0, e0, !1),
    u.lineTo(-0.11, 0.62),
    c.holes.push(u),
    r.part(G0(c, 0.02, 0.004, 12).translate(0, 0, l / 2 - 0.02), d, {
      grain: "y",
    }),
    r.part(_(0.54, 0.05, l + 0.05, { r: 0.008 }).translate(0, 1.5, 0), d, {
      grain: "x",
    }),
    r.part(_(0.5, 0.5, l + 0.02, { r: 0.008 }).translate(0, 1.78, 0), d, {
      grain: "y",
    }));
  for (const v of [-1, 1])
    r.part(
      j(
        [
          [0.018, 0],
          [0.02, 0.02],
          [0.014, 0.05],
          [0.014, 0.4],
          [0.02, 0.43],
          [0.018, 0.46],
        ],
        12,
      ).translate(v * 0.22, 1.54, l / 2 + 0.02),
      "brass_aged",
      { grain: "y", cast: !1 },
    );
  r.part(_(0.56, 0.06, l + 0.05, { r: 0.008 }).translate(0, 2.06, 0), d, {
    grain: "x",
  });
  for (const v of [-1, 1]) {
    const T = _(0.24, 0.05, l + 0.04, { r: 0.008 });
    (r.part(T, d, { grain: "x", local: F(v * 0.15, 2.14, 0, 0, 0, -v * 0.45) }),
      r.part(
        new D0(0.03, 12, 8).translate(v * 0.25, 2.12, 0.05),
        "brass_aged",
        { cast: !1 },
      ));
  }
  r.part(
    j(
      [
        [0.02, 0],
        [0.03, 0.03],
        [0.02, 0.06],
        [0, 0.08],
      ],
      12,
    ).translate(0, 2.13, 0.05),
    "brass_aged",
    { cast: !1 },
  );
  const b = new u0(new pt(0.165, 40), new C0({ map: te(), roughness: 0.6 }));
  (b.position.set(0, 1.78, l / 2 + 0.012),
    b.applyMatrix4(p),
    (b.name = "clock_dial"),
    t.add(b));
  const k = new at(0.17, 0.012, 8, 40).translate(0, 1.78, l / 2 + 0.016);
  r.part(k, "brass_aged", { cast: !1 });
  const S = a0(a, "#15110d"),
    h = (v, T) => {
      const I = new $0();
      return (
        I.moveTo(-T, -0.02),
        I.lineTo(T, -0.02),
        I.lineTo(T * 0.6, v * 0.8),
        I.lineTo(0, v),
        I.lineTo(-T * 0.6, v * 0.8),
        I.lineTo(-T, -0.02),
        new u0(new jt(I), S)
      );
    },
    y = new y0();
  (y.position.set(0, 1.78, l / 2 + 0.016), y.applyMatrix4(p), t.add(y));
  const C = h(0.09, 0.008),
    z = h(0.135, 0.006);
  ((z.position.z = 0.002), y.add(C, z));
  const w = new y0();
  (w.position.set(0, 1.42, l / 2 - 0.06), w.applyMatrix4(p), t.add(w));
  const f = new r.constructor(a.mats, e);
  (f.frame(new b0()),
    f.part(new X0(0.008, 0.62, 0.004).translate(0, -0.31, 0), "brass_aged", {
      cast: !1,
    }),
    f.part(
      j(
        [
          [0, -0.012],
          [0.055, -0.008],
          [0.06, 0],
          [0.055, 0.008],
          [0, 0.012],
        ],
        24,
      )
        .rotateX(e0 / 2)
        .translate(0, -0.64, 0),
      "brass_aged",
      { cast: !1 },
    ),
    f.flush(w, "pendulum"),
    r.frame(p).part(new _0(0.23, 0.72).translate(0, 0.97, l / 2 - 0.01), ot(), {
      uv: "keep",
      cast: !1,
    }));
  const i = { h: 3, m: 7, running: !0, phase: 0, t: 0 },
    m = () => {
      ((z.rotation.z = -(i.m / 60) * e0 * 2),
        (C.rotation.z = -((i.h % 12) / 12 + i.m / 720) * e0 * 2));
    };
  return (
    m(),
    {
      group: y.parent,
      hub: y,
      pendulum: w,
      pos: [s + 0.3, 1.2, n],
      setTime(v, T) {
        ((i.h = v), (i.m = T), m());
      },
      setRunning(v) {
        i.running = !!v;
      },
      get running() {
        return i.running;
      },
      anim: (v) => {
        i.running &&
          ((i.phase += v * e0),
          w.rotation.set(0, e0 / 2, Math.sin(i.phase) * 0.07),
          (i.t += v),
          i.t >= 60 &&
            ((i.t -= 60),
            (i.m = (i.m + 1) % 60),
            i.m === 0 && (i.h = (i.h % 12) + 1),
            m()));
      },
    }
  );
}
const j0 = Math.PI,
  V0 = 20.4,
  Mt = [
    { id: "W4", x0: 2.4, x1: 4.4 },
    { id: "W5", x0: 7.6, x1: 9.6 },
  ];
function Se(a) {
  const e = new _0(1, 1, 44, 64),
    o = e.attributes.position,
    s = e.attributes.uv,
    n = a.rng,
    l = n() * 6.28,
    p = n() * 6.28,
    d = [];
  for (let c = 0; c <= 44; c++) d.push(a.ragged ? n() * a.ragged : 0);
  for (let c = 0; c < o.count; c++) {
    const u = o.getX(c) + 0.5,
      b = 0.5 - o.getY(c),
      k = Math.round(u * 44),
      S = a.top ? a.top(u) : a.yTop,
      h = a.length - (a.shorten ? a.shorten(u) : 0) - d[k] * (b > 0.98 ? 1 : 0);
    let y = S - b * h,
      C;
    if (a.tieV != null) {
      const M = a.tieV;
      if (b < M) {
        const v = b / M;
        C = a.wTop + (a.wTie - a.wTop) * (v * v * (3 - 2 * v));
      } else {
        const v = (b - M) / (1 - M);
        C = a.wTie + (a.wBot - a.wTie) * Math.sqrt(v);
      }
    } else C = a.wTop + (a.wBot - a.wTop) * b;
    const z = a.xOut + a.dir * u * C,
      w = Math.sqrt(a.wTop / Math.max(C, 0.05)),
      f = a.tieV != null ? 1 - 0.6 * Math.exp(-((b - a.tieV) ** 2) / 0.002) : 1,
      i =
        Math.sin(u * a.folds * j0 * 2 + l + b * 1.3) * 0.7 +
        Math.sin(u * a.folds * j0 * 4.3 + p) * 0.3;
    let m = a.z - a.amp * w * f * (0.55 + 0.45 * i) * (0.6 + 0.4 * b);
    if (y < 0.012) {
      const M = 0.012 - y;
      ((y = 0.012 + Math.min(M, 0.03) * 0.4), (m -= Math.min(M, 0.3) * 0.8));
    }
    (o.setXYZ(c, z, y, m), s.setXY(c, u * a.wTop * 1.6, (S - b * h) * 1));
  }
  return (e.computeVertexNormals(), e);
}
function ze(a, t, r, e) {
  const o = new y0();
  ((o.name = "windows"), r.add(o));
  const s = [],
    n = [],
    l = a.mats.get("velvet_red", { side: N0 }),
    p = [],
    d = [];
  let c = null;
  const u = () => {
      c && (c.shadow.needsUpdate = !0);
    },
    b = 2.84,
    k = V0 - 0.165,
    S = V0 - 0.16;
  Mt.forEach((w, f) => {
    const i = (w.x0 + w.x1) / 2;
    t.frame(new b0());
    const m = i - 1.42,
      M = i + 1.42;
    t.part(
      new Z0(0.014, 0.014, M - m, 12).rotateZ(j0 / 2).translate(i, b, k),
      "brass_aged",
      { cast: !1 },
    );
    for (const G of [-1, 1])
      (t.part(
        j(
          [
            [0, 0],
            [0.02, 0.01],
            [0.032, 0.035],
            [0.024, 0.06],
            [0.006, 0.08],
            [0, 0.085],
          ],
          14,
        )
          .rotateZ((-G * j0) / 2)
          .translate(i + G * 1.42, b, k),
        "brass_aged",
        { cast: !1 },
      ),
        t.part(
          _(0.02, 0.05, 0.17, { r: 0.006 }).translate(
            i + G * 1.3,
            b + 0.01,
            V0 - 0.085,
          ),
          "brass_aged",
          { cast: !1 },
        ));
    const v = [];
    f === 1
      ? (v.push({
          xOut: i - 1.38,
          dir: 1,
          wTop: 0.62,
          wTie: 0.2,
          wBot: 0.46,
          tieV: 0.42,
          yTop: b - 0.03,
          length: b - 0.03,
          folds: 7,
          amp: 0.05,
        }),
        v.push({
          xOut: i + 1.38,
          dir: -1,
          wTop: 0.6,
          wTie: 0.22,
          wBot: 0.48,
          tieV: 0.45,
          yTop: b - 0.03,
          length: b - 0.03,
          folds: 7,
          amp: 0.05,
        }))
      : (v.push({
          xOut: i - 1.38,
          dir: 1,
          wTop: 0.5,
          wBot: 0.56,
          yTop: b - 0.03,
          length: b - 0.03 + 0.02,
          folds: 6,
          amp: 0.045,
          ragged: 0.08,
        }),
        v.push({
          xOut: i + 1.38,
          dir: -1,
          wTop: 0.62,
          wBot: 0.7,
          top: (G) => b - 0.03 - (Math.max(0, G - 0.3) / 0.7) * 1.05,
          length: b - 0.03 + 0.12,
          shorten: (G) => -Math.max(0, G - 0.3) * 0.2,
          folds: 5,
          amp: 0.06,
          ragged: 0.1,
        }));
    for (const G of v) {
      d.push(Se({ ...G, z: S, rng: e }));
      const J = 9;
      for (let E = 0; E < J; E++) {
        const U = E / (J - 1);
        (G.top ? G.top(U) : G.yTop) < b - 0.05 ||
          t.part(
            new at(0.022, 0.004, 6, 14).translate(
              G.xOut + G.dir * U * G.wTop,
              b,
              k,
            ),
            "brass_aged",
            { cast: !1 },
          );
      }
      if (G.tieV != null) {
        const E = G.yTop - G.tieV * G.length,
          U = G.xOut + G.dir * 0.06;
        (t.part(
          T0(
            [
              [U - G.dir * 0.05, E + 0.02, V0 - 0.02],
              [U, E, S - 0.09],
              [U + G.dir * G.wTie * 0.9, E - 0.01, S - 0.07],
              [U + G.dir * G.wTie, E + 0.01, S - 0.02],
            ],
            0.009,
            16,
            6,
          ),
          "brass_aged",
          { cast: !1 },
        ),
          t.part(
            j(
              [
                [0, 0],
                [0.02, 0.01],
                [0.03, 0.06],
                [0.01, 0.1],
                [0, 0.1],
              ],
              10,
            ).translate(U + G.dir * 0.03, E - 0.12, S - 0.09),
            "brass_aged",
            { cast: !1 },
          ));
      }
    }
    const T = new y0();
    ((T.name = "planks_" + w.id), o.add(T));
    const I = [],
      A = (G, J, E, U, B, o0, x) => {
        const Y = new $0(),
          n0 = () => (e() - 0.5) * 0.03;
        (Y.moveTo(-G / 2, -J / 2),
          Y.lineTo(G / 2 + n0(), -J / 2),
          Y.lineTo(G / 2 - 0.02, -J / 2 + J * 0.4),
          Y.lineTo(G / 2 + n0(), J / 2),
          Y.lineTo(-G / 2 + n0(), J / 2),
          Y.lineTo(-G / 2 - 0.015, 0),
          Y.lineTo(-G / 2, -J / 2));
        const c0 = G0(Y, 0.026, 0.004, 1);
        c0.translate(0, 0, -0.013);
        const W = new y0(),
          X = new st(a.mats, e);
        return (
          X.frame(new b0()),
          X.part(c0, "boards_barricade", { grain: "x" }),
          X.flush(W, "board"),
          W.position.set(E, U, V0 - 0.1 - o0 * 0.028),
          W.rotation.set(0, j0, B),
          x && (W.userData.hang = !0),
          (W.userData.base = {
            x: W.position.x,
            y: W.position.y,
            z: W.position.z,
            rz: B,
          }),
          T.add(W),
          I.push(W),
          W
        );
      };
    (A(2.2, 0.17, i, 1.62, 0.62 * (f ? -1 : 1), 0),
      A(2.1, 0.16, i + 0.05, 1.7, -0.55 * (f ? -1 : 1), 1),
      A(0.8, 0.15, i + (f ? -0.55 : 0.5), 1.05, 1.25 * (f ? -1 : 1), 2, !0));
    let D = 0;
    const q = {
      id: w.id,
      group: T,
      boards: I,
      spot: [i, 0, V0 - 0.4],
      get visible() {
        return T.visible;
      },
      show(G = !0) {
        ((T.visible = !!G), u());
      },
      hide() {
        ((T.visible = !1), u());
      },
      shake(G = 1) {
        D = Math.max(D, 0.02 * G);
      },
    };
    (s.push((G, J) => {
      if (!(D < 1e-4)) {
        ((D *= Math.exp(-G * 6)), u());
        for (const E of I) {
          const U = E.userData.base,
            B = Math.sin(J * 61 + U.x * 7) * D;
          ((E.position.z = U.z - Math.abs(B) * 0.8),
            (E.rotation.z = U.rz + B * (E.userData.hang ? 6 : 1.2)));
        }
        if (D < 1e-4)
          for (const E of I) {
            const U = E.userData.base;
            ((E.position.z = U.z), (E.rotation.z = U.rz));
          }
      }
    }),
      p.push(q));
  });
  {
    const w = new u0(F0(d), l);
    ((w.castShadow = !0),
      (w.receiveShadow = !0),
      (w.name = "curtains"),
      o.add(w));
  }
  const h = new tt(16742966, 600, 30, 0.5, 0.35, 2);
  (h.position.set(6, 11.5, V0 + 8.1),
    h.target.position.set(6, 0, V0 - 1.6),
    (h.castShadow = !0),
    h.shadow.mapSize.set(2048, 2048),
    (h.shadow.bias = -6e-4),
    (h.shadow.normalBias = 0.03),
    (h.shadow.camera.near = 6),
    (h.shadow.camera.far = 30),
    (h.shadow.autoUpdate = !1),
    (h.shadow.needsUpdate = !0),
    (h.name = "fire_gaps"),
    (c = h),
    o.add(h, h.target));
  const y = (() => {
      const w = document.createElement("canvas");
      ((w.width = 64), (w.height = 128));
      const f = w.getContext("2d"),
        i = f.createLinearGradient(0, 128, 0, 0);
      (i.addColorStop(0, "rgba(255,255,255,1)"),
        i.addColorStop(0.55, "rgba(150,150,150,1)"),
        i.addColorStop(1, "rgba(30,30,30,1)"),
        (f.fillStyle = i),
        f.fillRect(0, 0, 64, 128));
      for (let M = 0; M < 40; M++)
        ((f.fillStyle = `rgba(0,0,0,${0.15 + (M % 5) * 0.08})`),
          f.beginPath(),
          f.ellipse(
            (M * 37) % 64,
            (M * 53) % 128,
            6 + (M % 7) * 3,
            3 + (M % 4) * 2,
            0,
            0,
            Math.PI * 2,
          ),
          f.fill());
      const m = new ct(w);
      return ((m.colorSpace = ft), m);
    })(),
    C = new U0({
      map: y,
      color: new H0().setRGB(0.075, 0.022, 0.005),
      transparent: !0,
      blending: Tt,
      depthWrite: !1,
      toneMapped: !1,
      fog: !1,
    });
  {
    const w = Mt.map((i) =>
        new _0(i.x1 - i.x0, 1.8)
          .rotateY(j0)
          .translate((i.x0 + i.x1) / 2, 1.7, V0 + 0.17),
      ),
      f = new u0(F0(w), C);
    ((f.name = "fire_haze"), o.add(f));
  }
  const z = { level: 600, haze: 1 };
  return (
    s.push((w, f) => {
      const i =
        0.78 +
        0.1 * Math.sin(f * 1.7) +
        0.07 * Math.sin(f * 4.3 + 1.1) +
        0.05 * Math.sin(f * 9.1 + 2.3) +
        0.04 * Math.sin(f * 17.3);
      ((h.intensity = z.level * i),
        C.color.setRGB(
          0.075 * i * z.haze,
          0.022 * i * z.haze,
          0.005 * i * z.haze,
        ));
    }),
    { group: o, anim: s, colliders: n, plankSets: p, fireSpot: h, fire: z }
  );
}
const l0 = Math.PI,
  O0 = (a, t = 0, r = 1) => (a < t ? t : a > r ? r : a),
  Te = {
    slide: (a) => (a < 0.5 ? 4 * a * a * a : 1 - Math.pow(-2 * a + 2, 3) / 2),
    fall: (a) => a * a,
    fly: (a) => 1 - (1 - a) * (1 - a),
  };
function _e(a, t, r) {
  const e = new y0();
  ((e.name = "barricade"), t.add(e));
  const o = [],
    s = { p: new f0(), q: new L0(), q2: new L0(), e: new St(), s: new f0() };
  function n(g, R, V, Q, L) {
    const P = new y0();
    ((P.name = "barricade_" + g), e.add(P));
    const O = new st(a.mats, r);
    (O.frame(L.local || new b0()), R(O, P), O.flush(P, g));
    const Z = new f0(),
      $ = new L0(),
      p0 = new f0(),
      P0 = new L0();
    (V.decompose(Z, $, s.s), Q.decompose(p0, P0, s.s));
    const R0 = $.clone().slerp(P0, 0.5);
    L.tumble &&
      R0.multiply(
        new L0().setFromAxisAngle(
          new f0(...L.tumble[0]).normalize(),
          L.tumble[1],
        ),
      );
    const t0 = {
      name: g,
      group: P,
      restPos: Z,
      restQuat: $,
      finPos: p0,
      finQuat: P0,
      midQuat: R0,
      ctrl: new f0(...L.ctrl),
      a: L.a,
      b: L.b,
      ease: Te[L.ease || "fly"],
      bounce: L.bounce || 0,
      weight: L.weight ?? 1,
      seed: r() * 20,
    };
    return (P.position.copy(Z), P.quaternion.copy($), o.push(t0), t0);
  }
  const l = (g, R, V, Q) => {
    const L = new b0().makeBasis(
      new f0(...g).normalize(),
      new f0(...R).normalize(),
      new f0(...V).normalize(),
    );
    return (L.setPosition(Q[0], Q[1], Q[2]), L);
  };
  n(
    "sideboard",
    (g) => Gt(g, r, 1.22, 0.9, 0.5, { drawers: [0, 0.02, 0.15] }),
    F(11.23, 0.25, 16.41, -l0 / 2 + 0.06, -l0 / 2),
    F(11.18, 0.25, 18.28, -l0 / 2 + 0.12, -l0 / 2),
    { ctrl: [10.9, 0.28, 17.3], a: 0.22, b: 1, ease: "slide", weight: 0.6 },
  );
  const p = 0.84,
    d = 1.85,
    c = 0.3,
    u = 0.44;
  n(
    "bookcase",
    (g, R) => {
      const V = It(g, r, p, d, c, { shelves: [0.09, 0.47, 0.85, 1.22] }),
        Q = [];
      V.forEach((P, O) => {
        if (!(O === 3 || O === 1))
          for (const Z of At(
            r,
            -p / 2 + 0.03,
            -p / 2 + 0.03 + 0.3 + r() * 0.25,
            P + 0.011,
            c - 0.05,
            -c / 2 + 0.02 + (c - 0.05),
            { hMin: 0.2 },
          ))
            Q.push(Z);
      });
      const L = new u0(F0(Q), Rt());
      ((L.castShadow = !0),
        (L.receiveShadow = !0),
        (L.name = "books"),
        R.add(L));
    },
    F(
      11.36 - 0.15 * Math.cos(u),
      0.542 + 0.15 * Math.sin(u),
      16.5,
      -l0 / 2 + 0.07,
      -u,
    ),
    l([0, 0, 1], [-1, 0, 0], [0, -1, 0], [11.3, 0.19, 15.02]),
    {
      ctrl: [11.12, 0.3, 15.85],
      a: 0.12,
      b: 0.78,
      ease: "fall",
      bounce: 0.05,
      weight: 0.8,
    },
  );
  {
    const g = new b0().multiplyMatrices(
      F(11.74, 0, 17.27, -l0 / 2, -0.38),
      F(0, 0, 0.18),
    );
    n(
      "chair",
      (R) => {
        Ct(R, r);
      },
      g,
      l([0, 1, 0], [0.97, 0, 0.24], [0.24, 0, -0.97], [9.95, 0.225, 18.45]),
      {
        ctrl: [10.9, 0.75, 18],
        a: 0.05,
        b: 0.62,
        ease: "fly",
        bounce: 0.06,
        tumble: [[0, 1, 0], 1.2],
        weight: 1.2,
        local: new b0().makeScale(1, 1.12, 1),
      },
    );
  }
  [
    {
      zc: 16.95,
      yc: 1.62,
      len: 1.62,
      wid: 0.18,
      roll: 0,
      x: 12.128,
      fin: [10.2, 0.0125, 16.95, 0.06],
      mat: "boards_barricade",
    },
    {
      zc: 16.95,
      yc: 1.95,
      len: 1.56,
      wid: 0.17,
      roll: 0.03,
      x: 12.128,
      fin: [10.52, 0.0125, 17.1, -0.05],
      mat: "boards_barricade",
    },
    {
      zc: 16.95,
      yc: 1.31,
      len: 2.08,
      wid: 0.19,
      roll: 0.8,
      x: 12.101,
      fin: [10.84, 0.0125, 16.85, 0.04],
      mat: "wood_oak_pale",
    },
    {
      zc: 16.95,
      yc: 1.75,
      len: 1.72,
      wid: 0.17,
      roll: -0.54,
      x: 12.155,
      fin: [10.55, 0.038, 17.35, 0.95],
      mat: "wood_oak_pale",
    },
  ].forEach((g, R) => {
    n(
      "plank" + R,
      (V) => {
        const Q = new $0(),
          L = g.len / 2,
          P = g.wid / 2,
          O = () => (r() - 0.5) * 0.025;
        (Q.moveTo(-L, -P),
          Q.lineTo(L + O(), -P),
          Q.lineTo(L - 0.015, -P * 0.2),
          Q.lineTo(L + O(), P),
          Q.lineTo(-L + O(), P),
          Q.lineTo(-L - 0.012, P * 0.3),
          Q.lineTo(-L, -P));
        const Z = G0(Q, 0.025, 0.004, 1);
        (Z.translate(0, 0, -0.0125), V.part(Z, g.mat, { grain: "x" }));
        for (const $ of [-1, 1])
          for (const p0 of [-1, 1])
            V.part(
              new Z0(0.005, 0.005, 0.004, 8)
                .rotateX(l0 / 2)
                .translate($ * (L - 0.07), p0 * P * 0.45, 0.0135),
              "iron_black",
              { cast: !1 },
            );
      },
      F(g.x, g.yc, g.zc, -l0 / 2, 0, g.roll),
      F(g.fin[0], g.fin[1], g.fin[2], l0 / 2 + g.fin[3], -l0 / 2),
      {
        ctrl: [
          g.fin[0] + 0.7,
          1.4 + R * 0.15,
          (g.zc + g.fin[2]) / 2 + (R - 1.5) * 0.3,
        ],
        a: R * 0.04,
        b: 0.36 + R * 0.05,
        ease: "fly",
        bounce: 0.04,
        tumble: [[1, 0, 0], l0 * (R % 2 ? 1 : -1)],
        weight: 1.4,
      },
    );
  });
  const k = new U0({ color: new H0(0.9, 0.55, 0.28), toneMapped: !1, fog: !1 }),
    S = new u0(new _0(1.24, 2.4), k);
  (S.position.set(12.37, 1.18, 16.95),
    (S.rotation.y = -l0 / 2),
    (S.name = "door_glow"),
    e.add(S));
  const h = { level: 1.6, mesh: S },
    y = {
      intact: {
        x0: 11.2,
        x1: 12.2,
        z0: 15.75,
        z1: 17.52,
        y0: 0,
        y1: 2.3,
        on: !0,
      },
      sideboard: {
        x0: 11.12,
        x1: 12.2,
        z0: 17.6,
        z1: 18.98,
        y0: 0,
        y1: 0.55,
        on: !1,
      },
      bookcase: {
        x0: 9.42,
        x1: 11.34,
        z0: 14.56,
        z1: 15.48,
        y0: 0,
        y1: 0.4,
        on: !1,
      },
      chair: {
        x0: 9.93,
        x1: 10.97,
        z0: 18.25,
        z1: 18.95,
        y0: 0,
        y1: 0.45,
        on: !1,
      },
    },
    C = b0,
    z = f0,
    w = L0,
    f = l0 / 2,
    i = (g, R, V) => new C().makeTranslation(g, R, V),
    m = (g, R, V) =>
      i(g[0], g[1], g[2])
        .multiply(
          new C().makeRotationAxis(new z(R[0], R[1], R[2]).normalize(), V),
        )
        .multiply(i(-g[0], -g[1], -g[2])),
    M = (...g) => {
      const R = new C();
      for (const V of g) R.premultiply(V);
      return R;
    },
    v = (g, R, V, Q) =>
      new C()
        .makeBasis(new z(...g), new z(...R), new z(...V))
        .setPosition(Q[0], Q[1], Q[2]),
    T = {};
  for (const g of o)
    ((T[g.name] = g),
      (g.restM = new C().compose(g.restPos, g.restQuat, new z(1, 1, 1))),
      (g.finM = new C().compose(g.finPos, g.finQuat, new z(1, 1, 1))));
  const I = (g, R) => new C().multiplyMatrices(R, g.restM),
    A = new z(),
    D = new z(),
    q = new w(),
    G = new w(),
    J = new w(),
    E = new z(1, 1, 1),
    U = new z(),
    B = new z(),
    o0 = (g, R, V) => (
      g.decompose(A, q, U),
      R.decompose(D, G, U),
      new C().compose(A.lerp(D, V), q.slerp(G, V), E)
    ),
    x = (g, R, V, Q, L) => {
      (g.decompose(A, q, U), R.decompose(D, G, U));
      const P = 1 - V,
        O = Math.max(A.y, D.y) + Q,
        Z = P * P * A.y + 2 * P * V * O + V * V * D.y;
      return (
        q.slerp(G, V),
        L &&
          q.premultiply(
            J.setFromAxisAngle(
              B.set(L[0], L[1], L[2]).normalize(),
              L[3] * Math.sin(l0 * V),
            ),
          ),
        new C().compose(A.lerp(D, V).setY(Z), q, E)
      );
    },
    Y = (g, R, V) => (
      (g.elements[13] += Math.abs(Math.sin(R * l0 * 2)) * (1 - R) * V),
      g
    ),
    n0 = (g, R) => R.decompose(g.group.position, g.group.quaternion, U),
    c0 = (g, R) => new z(R[0], R[1], R[2]).applyMatrix4(g).toArray(),
    W = (g, R, V) => O0((g - R) / (V - R)),
    X = (g) => g * g * (3 - 2 * g),
    N = (g, R, V) => g + (R - g) * V,
    K = (g, R, V, Q) => {
      const L = c0(g, R),
        P = c0(g, V);
      return (Q === "north" ? L[0] <= P[0] : L[2] <= P[2]) ? [L, P] : [P, L];
    },
    r0 = [];
  {
    const g = T.chair,
      R = m([11.824, 0, 17.27], [0, 0, 1], 0.38),
      V = I(g, M(R, i(-0.34, 0.03, 0))),
      Q = I(
        g,
        M(
          R,
          i(-0.34, 0.03, 0),
          m([11.23, 0, 17.27], [0, 1, 0], 1.1),
          i(-0.25, 0.3, 0.34),
        ),
      ),
      L = v([0, 1, 0], [1, 0, 0], [0, 0, -1], [9.35, 0.222, 17.75]),
      P = [-0.18, 0.46, 0.17],
      O = [0.18, 0.46, 0.17];
    r0.push({
      id: "chair",
      piece: g,
      dur: 1,
      at: [11.08, 17.3, f],
      fin: L,
      dust: [[0.9, 9.85, 0.04, 17.78, 0.4, 0.6]],
      sounds: [
        [0.24, "chair_drag", 0.8],
        [0.9, "chair_clatter", 0.85],
      ],
      pose(Z, $) {
        let p0;
        (Z < 0.22
          ? (p0 = g.restM.clone())
          : Z < 0.52
            ? (p0 = o0(g.restM, V, X(W(Z, 0.22, 0.52))))
            : Z < 0.64
              ? (p0 = o0(V, Q, X(W(Z, 0.52, 0.64))))
              : Z < 0.9
                ? (p0 = x(Q, L, W(Z, 0.64, 0.9), 0.3, [1, 0, 0.4, 1.4]))
                : (p0 = Y(L.clone(), W(Z, 0.9, 1), 0.05)),
          n0(g, p0));
        const P0 = X(W(Z, 0.22, 0.52)),
          R0 = X(W(Z, 0.5, 0.64));
        (($.pos = [N(11.08, 10.82, P0), 17.3]),
          ($.yaw = f - 0.55 * R0),
          ($.crouch = N(0.45, 0.08, P0)),
          ($.lean =
            (Z < 0.22 ? 22 * X(W(Z, 0, 0.18)) : N(22, -6, P0)) +
            10 * R0 * (1 - X(W(Z, 0.66, 0.85)))),
          ($.hold = Z > 0.06 && Z < 0.64),
          ($.L = $.R = null),
          $.hold && ([$.L, $.R] = K(p0, P, O, "east")),
          ($.look = c0(p0, [0, 0.45, 0])));
      },
    });
  }
  {
    const g = T.bookcase,
      R = g.restPos.toArray(),
      V = new z(1, 0, 0).applyQuaternion(g.restQuat).toArray(),
      Q = I(g, M(m(R, V, 0.3), i(-0.05, 0.02, 0))),
      L = I(
        g,
        M(
          m(R, V, 0.42),
          i(0.126, 0.034, -0.95),
          m([11.35, 0.64, 15.55], [0, 1, 0], 0.08),
          m([11.35, 0.64, 15.55], [1, 0, 0], -0.08),
        ),
      ),
      P = v([0, 0, 1], [0, 1, 0], [-1, 0, 0], [11.45, 0, 15.25]),
      O = (t0) => m([11.27, 0, 15.25], [0, 0, 1], t0).multiply(P),
      Z = O(f),
      $ = [0.43, 0.85, 0.17],
      p0 = [0.43, 0.45, 0.17],
      P0 = [0.43, 1.3, 0.17],
      R0 = [0.43, 0.95, 0.17];
    r0.push({
      id: "bookcase",
      piece: g,
      dur: 1.9,
      at: [10.8, 16.6, f - 0.35],
      fin: Z,
      dust: [
        [0.53, 11.45, 0.04, 15.25, 0.45, 0.7],
        [0.9, 10.35, 0.06, 15.25, 1, 2.4],
      ],
      sounds: [
        [0.14, "floor_creak", 0.55, 0.8],
        [0.52, "bookcase_thud", 0.85],
        [0.9, "bookcase_crash", 1],
      ],
      pose(t0, S0) {
        let v0;
        if (t0 < 0.12) v0 = g.restM.clone();
        else if (t0 < 0.3) v0 = o0(g.restM, Q, X(W(t0, 0.12, 0.3)));
        else if (t0 < 0.46) v0 = o0(Q, L, X(W(t0, 0.3, 0.46)));
        else if (t0 < 0.52) {
          const h0 = W(t0, 0.46, 0.52);
          v0 = o0(L, P, h0 * h0);
        } else if (t0 < 0.66) {
          const h0 = W(t0, 0.52, 0.66);
          v0 = O(-0.05 * Math.sin(h0 * l0 * 2.5) * (1 - h0));
        } else if (t0 < 0.9) {
          const h0 = W(t0, 0.66, 0.9);
          v0 = O(f * h0 * h0);
        } else {
          const h0 = W(t0, 0.9, 1);
          v0 = O(f - 0.06 * Math.abs(Math.sin(h0 * l0 * 2)) * (1 - h0));
        }
        n0(g, v0);
        const d0 = X(W(t0, 0.3, 0.46)),
          M0 = X(W(t0, 0.7, 0.8));
        ((S0.pos = [
          N(10.8, 10.9, d0) - 0.15 * M0,
          N(16.6, 16.05, d0) + 0.5 * M0,
        ]),
          (S0.yaw = f - 0.35 + 0.35 * d0),
          (S0.crouch = 0.12 + 0.2 * M0),
          (S0.lean =
            t0 < 0.12
              ? 16 * X(W(t0, 0, 0.1))
              : t0 < 0.5
                ? N(16, -8, X(W(t0, 0.12, 0.3)))
                : t0 < 0.66
                  ? N(-8, 10, X(W(t0, 0.5, 0.62)))
                  : N(10, -10, X(W(t0, 0.66, 0.74)))),
          (S0.hold = (t0 > 0.06 && t0 < 0.47) || (t0 > 0.56 && t0 < 0.72)),
          (S0.L = S0.R = null),
          S0.hold &&
            ([S0.L, S0.R] =
              t0 > 0.5 ? K(v0, P0, R0, "east") : K(v0, $, p0, "east")),
          (S0.look = c0(v0, [0, 1, 0])));
      },
    });
  }
  {
    const g = T.sideboard,
      R = (P, O) => I(g, M(m([11.68, 0, 16.41], [0, 1, 0], O), i(0, 0, P))),
      V = R(1.9, 0),
      Q = [0.6, 0.25, 0.42],
      L = [0.6, 0.72, 0.42];
    r0.push({
      id: "sideboard",
      piece: g,
      dur: 1.6,
      at: [11.7, 17.42, l0],
      via: [[10.9, 17.36]],
      fin: V,
      dust: [[0.22, 11.68, 0.03, 16.4, 0.5, 0.5]],
      voice: [0.3, "v_strain"],
      sounds: [[0.16, "furniture_scrape", 0.9]],
      pose(P, O) {
        const Z = W(P, 0.15, 0.95),
          $ = 1.9 * (X(Z) + 0.025 * Math.sin(Z * l0 * 6) * Math.sin(Z * l0)),
          p0 = R($, 0.035 * Math.sin(Z * l0 * 4) * Math.sin(Z * l0));
        (n0(g, p0),
          (O.pos = [11.7, 17.42 + $]),
          (O.yaw = l0),
          (O.crouch = 0.5),
          (O.lean =
            P < 0.15 ? 26 * X(W(P, 0, 0.12)) : 26 - 8 * Math.sin(Z * l0)),
          (O.hold = P > 0.06 && P < 0.97),
          (O.L = O.R = null),
          O.hold && ([O.L, O.R] = K(p0, Q, L, "north")),
          (O.look = c0(p0, [0.3, 0.5, 0.4])));
      },
    });
  }
  const m0 = (g, R, V, Q, L, P, O = {}) => {
    const Z = T[g],
      $ = new z(1, 0, 0).applyQuaternion(Z.restQuat),
      p0 = new z(0, 1, 0).applyQuaternion(Z.restQuat).toArray(),
      P0 = Z.restPos
        .clone()
        .addScaledVector($, -R * L)
        .toArray(),
      R0 = -R * 0.32,
      t0 = (d0) => I(Z, m(P0, p0, d0)),
      S0 = I(Z, M(m(P0, p0, R0 * 1.35), i(-0.07, -0.04, 0))),
      v0 = Z.finM;
    r0.push({
      id: g,
      piece: Z,
      dur: 0.62,
      at: P,
      via: O.via,
      fin: v0,
      sounds: [
        [0.19, "nail_pry", 0.75],
        [0.52, "nail_pry", 0.35, 1.35],
        [0.88, "plank_drop", 0.7],
      ],
      pose(d0, M0) {
        let h0;
        if (d0 < 0.18) h0 = Z.restM.clone();
        else if (d0 < 0.5) {
          const nt = W(d0, 0.18, 0.5);
          h0 = t0(R0 * (nt + 0.1 * Math.sin(nt * l0 * 3) * (1 - nt)));
        } else
          d0 < 0.58
            ? (h0 = o0(t0(R0), S0, X(W(d0, 0.5, 0.58))))
            : d0 < 0.88
              ? (h0 = x(S0, v0, W(d0, 0.58, 0.88), 0.28, [0, 1, 0.3, 2.2]))
              : (h0 = Y(v0.clone(), W(d0, 0.88, 1), 0.035));
        (n0(Z, h0),
          (M0.pos = [P[0], P[1]]),
          (M0.yaw = P[2]),
          (M0.crouch = O.crouch ?? 0),
          (M0.hop = O.hop ? O.hop * Math.sin(l0 * W(d0, 0.03, 0.33)) : 0),
          (M0.lean =
            N(O.lean ?? 8, -10, X(W(d0, 0.2, 0.5))) +
            16 * X(W(d0, 0.55, 0.64)) * (1 - X(W(d0, 0.7, 0.9)))),
          (M0.hold = d0 > 0.05 && d0 < 0.6),
          (M0.L = M0.R = null),
          M0.hold && ([M0.L, M0.R] = K(h0, V, Q, "east")),
          (M0.look = c0(h0, [R * 0.6, 0, 0])));
      },
    });
  };
  (m0(
    "plank2",
    -1,
    [-0.95, 0, 0.02],
    [-0.72, 0, 0.02],
    0.97,
    [11.72, 16.5, f],
    {
      crouch: 0.5,
      lean: 18,
      via: [
        [10.96, 19.3],
        [10.96, 17.36],
      ],
    },
  ),
    m0("plank0", 1, [0.72, 0, 0.02], [0.45, 0, 0.02], 0.75, [11.74, 17.3, f], {
      lean: 8,
    }),
    m0("plank1", 1, [0.66, 0, 0.02], [0.36, 0, 0.02], 0.72, [11.74, 17.22, f], {
      hop: 0.55,
      lean: 4,
    }),
    m0("plank3", 1, [0.78, 0, 0.02], [0.52, 0, 0.02], 0.8, [11.74, 17.32, f], {
      crouch: 0.1,
      lean: 12,
    }));
  const K0 = (g, R) => {
    (n0(g, R), g.group.updateMatrixWorld(!0));
    const V = new Et().setFromObject(g.group);
    return {
      x0: V.min.x,
      x1: V.max.x,
      z0: V.min.z,
      z1: V.max.z,
      y0: 0,
      y1: V.max.y,
      on: !1,
    };
  };
  for (const g of r0)
    g.id.startsWith("plank") ||
      ((y["clr_" + g.id + "_rest"] = K0(g.piece, g.piece.restM)),
      (y["clr_" + g.id + "_down"] = K0(g.piece, g.fin)));
  for (const g of o) n0(g, g.restM);
  const w0 = a.shell?.doors?.D6,
    H = { t01: 0, applied: -1, play: null, jit: 0, clear: !1 },
    dt = {
      steps: r0,
      begin() {
        ((H.clear = !0), (H.play = null), (y.intact.on = !1));
        for (const g of r0) {
          const R = y["clr_" + g.id + "_rest"];
          R && (R.on = !0);
        }
      },
      pose(g, R, V = {}) {
        const Q = typeof g == "string" ? r0.find((O) => O.id === g) : g;
        ((R = O0(R)), Q.pose(R, V));
        const L = y["clr_" + Q.id + "_rest"],
          P = y["clr_" + Q.id + "_down"];
        return (L && (L.on = R < 0.2), P && (P.on = R >= 0.999), V);
      },
      reset() {
        ((H.clear = !1), (H.applied = -1));
        for (const g of o) n0(g, g.restM);
        for (const g of Object.keys(y)) g.startsWith("clr_") && (y[g].on = !1);
        y.intact.on = !0;
      },
    };
  function ht(g, R) {
    const V = g > 0.55 ? (g - 0.55) / 0.45 : 0,
      Q = Math.min(g / 0.55, 1);
    for (const P of o) {
      const O = O0((V - P.a) / (P.b - P.a));
      if (O <= 0) {
        const Z = Math.pow(Math.max(0, Math.sin(g * 64 + P.seed * 0.2)), 6),
          $ =
            ((g > 0 ? 0.004 + 0.05 * Q * Q : 0) * Z +
              H.jit * (0.6 + 0.4 * Math.sin(R * 71 + P.seed))) *
            P.weight;
        (s.p.set(
          -$,
          $ * 0.25 * Math.sin(g * 91 + P.seed),
          $ * 0.35 * Math.sin(g * 57 + P.seed * 2),
        ),
          P.group.position.copy(P.restPos).add(s.p),
          s.e.set(
            $ * 1.4 * Math.sin(g * 77 + P.seed),
            0,
            $ * 1.2 * Math.sin(g * 49 + P.seed * 3),
          ),
          s.q.setFromEuler(s.e),
          P.group.quaternion.copy(P.restQuat).multiply(s.q));
      } else {
        const Z = P.ease(O),
          $ = 1 - Z;
        (P.group.position.set(
          $ * $ * P.restPos.x + 2 * $ * Z * P.ctrl.x + Z * Z * P.finPos.x,
          $ * $ * P.restPos.y + 2 * $ * Z * P.ctrl.y + Z * Z * P.finPos.y,
          $ * $ * P.restPos.z + 2 * $ * Z * P.ctrl.z + Z * Z * P.finPos.z,
        ),
          P.bounce &&
            O > 0.7 &&
            (P.group.position.y +=
              ((Math.abs(Math.sin(((O - 0.7) / 0.3) * l0 * 2)) * (1 - O)) /
                0.3) *
              P.bounce),
          s.q.copy(P.restQuat).slerp(P.midQuat, Z),
          s.q2.copy(P.midQuat).slerp(P.finQuat, Z),
          P.group.quaternion.copy(s.q).slerp(s.q2, Z));
      }
    }
    y.intact.on = g < 0.6;
    const L = g >= 0.97;
    if (
      ((y.sideboard.on = L),
      (y.bookcase.on = L),
      (y.chair.on = L),
      w0 && w0.leaf)
    ) {
      const P =
        g < 0.55
          ? Math.pow(Math.max(0, Math.sin(g * 64)), 6) * (0.004 + 0.016 * Q)
          : 0;
      w0.leaf.position.x = -(P + H.jit * 1.5 * Math.abs(Math.sin(R * 71)));
    }
  }
  const Yt = {
      group: e,
      pieces: o,
      colliders: y,
      glow: h,
      work: dt,
      get t() {
        return H.t01;
      },
      breach(g = 1) {
        ((H.t01 = O0(g)), (H.play = null));
      },
      play(g = 1.4, R = H.t01) {
        ((H.t01 = O0(R)),
          (H.play = { from: H.t01, dur: Math.max(0.05, g), el: 0 }));
      },
      pound(g = 1) {
        H.jit = Math.max(H.jit, 0.012 * g);
      },
      reset() {
        ((H.t01 = 0), (H.play = null), (H.jit = 0), dt.reset());
      },
    },
    Zt = (g, R) => {
      (H.play &&
        ((H.play.el += g),
        (H.t01 = O0(
          H.play.from + ((1 - H.play.from) * H.play.el) / H.play.dur,
        )),
        H.t01 >= 1 && (H.play = null)),
        H.jit > 0 &&
          ((H.jit *= Math.exp(-g * 9)), H.jit < 2e-4 && (H.jit = 0)));
      const V = H.t01 > 0 && H.t01 < 0.55;
      {
        const Q =
            0.8 +
            0.12 * Math.sin(R * 0.9) +
            0.06 * Math.sin(R * 3.7 + 1.3) +
            0.04 * Math.sin(R * 11.1),
          L = Math.max(0, Math.sin(R * 0.37 + 2)) ** 12,
          P =
            Math.min(1, H.jit * 60) +
            (V ? 0.5 * Math.pow(Math.max(0, Math.sin(H.t01 * 64)), 2) : 0),
          O = h.level * Q * (1 - 0.7 * L) * (1 - 0.8 * Math.min(1, P));
        (k.color.setRGB(0.9 * O, 0.55 * O, 0.28 * O),
          (S.visible = h.level > 0));
      }
      H.clear
        ? w0 && w0.leaf && w0.leaf.position.x !== 0 && (w0.leaf.position.x = 0)
        : H.t01 !== H.applied || H.jit > 0 || V
          ? (ht(H.t01, R),
            (H.applied = H.t01),
            !H.jit &&
              !V &&
              w0 &&
              w0.leaf &&
              H.t01 >= 0.55 &&
              (w0.leaf.position.x = 0))
          : w0 &&
            w0.leaf &&
            w0.leaf.position.x !== 0 &&
            !H.jit &&
            (w0.leaf.position.x = 0);
    };
  return (ht(0, 0), { api: Yt, anim: Zt, colliders: Object.values(y) });
}
async function Ce(a) {
  const t = new y0();
  ((t.name = "living"), a.scene.add(t));
  const r = a.rng(1307),
    e = new st(a.mats, r),
    o = [],
    s = [],
    n = ue(a, e, t, a.rng(11));
  (o.push(...n.colliders), s.push(n.anim));
  const l = me(a, e, t, a.rng(23));
  (o.push(...l.colliders), s.push(...l.anim));
  const p = ye(a, e, t, a.rng(37));
  o.push(...p.colliders);
  const d = we(a, e, t, a.rng(41));
  (o.push(...d.colliders), s.push(...d.anim));
  const c = ze(a, e, t, a.rng(53));
  (o.push(...c.colliders), s.push(...c.anim));
  const u = _e(a, t, a.rng(67));
  (o.push(...u.colliders), s.push(u.anim));
  const b = e.flush(t, "living");
  for (const z of b) ((z.matrixAutoUpdate = !1), z.updateMatrix());
  const k = new _t(7308968, 0.6, 7, 2);
  (k.position.set(8.3, 1.9, 16.9),
    (k.name = "living_fill"),
    (k.userData.noActor = !0),
    t.add(k));
  const S = {
      tv: n.tv,
      barricade: u.api,
      sofa: {
        center: [l.sofa.x, 0, l.sofa.z],
        size: [0.95, 0.93, 2.1],
        facing: [-1, 0, 0],
      },
      table: {
        center: [p.table.x, 0, p.table.z],
        size: [p.table.w, p.table.h, p.table.d],
        coffee: {
          center: [l.table.x, 0, l.table.z],
          size: [l.table.d, l.table.h, l.table.w],
        },
      },
      plankSets: c.plankSets,
      lamp: l.lamp,
      clock: d.props.clock,
      phone: l.phone,
      recordPlayer: d.props.recordPlayer,
      mirror: d.props.mirror,
      fire: {
        spot: c.fireSpot,
        get level() {
          return c.fire.level;
        },
        set level(z) {
          c.fire.level = z;
        },
        setHaze(z) {
          c.fire.haze = z;
        },
        refreshShadow() {
          c.fireSpot.shadow.needsUpdate = !0;
        },
        dynamicShadow(z) {
          c.fireSpot.shadow.autoUpdate = !!z;
        },
      },
    },
    h = { tv: n.light, lamp: l.lamp.light, fireGaps: [c.fireSpot], fill: k },
    y = {
      tvFront: [1.6, 0, 16.5],
      tvScreen: [0.56, 1.03, 16.57],
      barricadeFront: [11.3, 0, 16.95],
      cover: [
        [5.75, 16.45],
        [5.75, 17.55],
        [10.35, 18.2],
        [2.45, 18.9],
      ],
      windowSpots: [
        [3.4, 20],
        [8.6, 20],
      ],
      kitchenDoor: [2.05, 0, 14.2],
      zombieFirst: [8.6, 0, 16.2],
      livingCentre: [6.1, 0, 17],
    };
  if (
    (new URLSearchParams(location.search).get("solo") || "")
      .split(",")
      .includes("living")
  ) {
    const z = a.game.beats,
      w = () => {
        (S.tv.setChannel("static"), S.barricade.reset());
        for (const i of S.plankSets) i.show(!0);
        S.lamp.setOn(!0);
      },
      f = (i, m, M, v, T, I = 75) =>
        a.game.debug.setCam({ x: i, y: m, z: M, yaw: v, pitch: T, fov: I });
    a.game.beats = {
      goto(i) {
        if (!i.startsWith("living")) return z?.goto?.(i);
        w();
        const m = i.split(":")[1] || "wide";
        m === "wide"
          ? f(6.1, 1.62, 14.3, 150, -2)
          : m === "tv"
            ? (S.tv.setChannel("face"), f(2.05, 1.18, 16.52, 90, -9, 55))
            : m === "flicker"
              ? f(3.6, 1.5, 15.2, 115, -10, 70)
              : m === "breach"
                ? (S.barricade.play(1.1, 0.4), f(7.4, 1.62, 17, -90, -4, 70))
                : m === "breached"
                  ? (S.barricade.breach(1), f(7.4, 1.62, 17, -90, -4, 75))
                  : m === "door"
                    ? f(7.2, 1.62, 17, -90, -3)
                    : m === "kitchen"
                      ? f(7.6, 1.62, 16.4, 66, -5)
                      : m === "centre" && f(6.1, 1.62, 17, 90, -4);
      },
    };
  }
  return {
    group: t,
    colliders: o,
    anim: s,
    points: y,
    props: S,
    lights: h,
    interact: [],
  };
}
export { Ce as build };
