// assets__living-DeOLLwnx 02 — math
// Lines 312-633 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
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
