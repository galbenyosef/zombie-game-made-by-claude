// assets__index-BcIwWgby 51 — math
// Lines 15377-15602 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Ac() {
  const s = document.createElement("canvas");
  s.width = s.height = 256;
  const o = s.getContext("2d"),
    t = o.createRadialGradient(128, 128, 4, 128, 128, 128);
  (t.addColorStop(0, "#9a7e5a"),
    t.addColorStop(0.85, "#8a6c48"),
    t.addColorStop(0.93, "#5a4430"),
    t.addColorStop(1, "#3a2a1c"),
    (o.fillStyle = t),
    o.fillRect(0, 0, 256, 256),
    (o.strokeStyle = "rgba(70,50,30,0.45)"),
    (o.lineWidth = 1.4));
  for (let e = 6; e < 118; e += 4 + Math.sin(e) * 1.5)
    (o.beginPath(),
      o.ellipse(128 + Math.sin(e * 0.3) * 2, 128, e, e * 0.97, 0, 0, ke),
      o.stroke());
  ((o.strokeStyle = "rgba(30,20,12,0.8)"),
    (o.lineWidth = 2.5),
    o.beginPath(),
    o.moveTo(128, 128),
    o.lineTo(200, 60),
    o.stroke(),
    o.beginPath(),
    o.moveTo(128, 128),
    o.lineTo(70, 210),
    o.stroke(),
    (o.fillStyle = "rgba(120,120,110,0.25)"),
    o.fillRect(0, 0, 256, 256));
  const u = new io(s);
  return ((u.colorSpace = lo), new n0({ map: u, roughness: 0.9 }));
}
function Pc(s, o, t) {
  const u = new t0(1, 10, 6, 0, ke, 0, Math.PI * 0.5)
      .scale(1, 0.55, 1)
      .translate(0, 1, 0),
    e = new Pt(0.22, 0.3, 1, 6).translate(0, 0.5, 0),
    r = Tc(u, e),
    a = [];
  for (const [x, v, n] of s) {
    const l = 2 + Math.floor(o() * 5);
    for (let f = 0; f < l; f++)
      a.push([
        x + (o() - 0.5) * 0.35,
        v,
        n + (o() - 0.5) * 0.35,
        0.025 + o() * 0.03,
      ]);
  }
  const p = new l0(r, t, a.length);
  ((p.name = "forest_mushrooms"), (p.receiveShadow = !0));
  const i = new wt(),
    d = new w0(),
    y = new pe(),
    w = new dt(),
    g = new dt(),
    z = new Xt();
  return (
    a.forEach(([x, v, n, l], f) => {
      (d.setFromEuler(y.set((o() - 0.5) * 0.3, o() * ke, (o() - 0.5) * 0.3)),
        p.setMatrixAt(
          f,
          i.compose(
            g.set(x, v - 0.01, n),
            d,
            w.set(l * 1.6, l * (1.4 + o()), l * 1.6),
          ),
        ),
        p.setColorAt(
          f,
          z.setRGB(0.85 + o() * 0.15, 0.78 + o() * 0.12, 0.62 + o() * 0.1),
        ));
    }),
    p
  );
}
function Tc(s, o) {
  const t = new Rt();
  for (const a of ["position", "normal", "uv"]) {
    const p = s.attributes[a].itemSize,
      i = new Float32Array((s.attributes[a].count + o.attributes[a].count) * p);
    (i.set(s.attributes[a].array, 0),
      i.set(o.attributes[a].array, s.attributes[a].count * p),
      t.setAttribute(a, new vt(i, p)));
  }
  const u = s.attributes.position.count,
    e = Array.from(s.index.array),
    r = Array.from(o.index.array).map((a) => a + u);
  return (t.setIndex([...e, ...r]), t);
}
const vo = Math.PI * 2,
  Gt = (s, o, t, u, e, r) => new qt(s, o, t).translate(u, e, r);
function Cc() {
  const s = [],
    o = [];
  for (let r = 0; r <= 14; r++) {
    const a = r / 14,
      p = 1.18 - a * 1.18,
      i = 0.14 + 0.2 * Math.pow(a, 1.4) + 0.012 * Math.sin(a * 9);
    o.push(new re(i, p));
  }
  const t = new ro(o.reverse(), 28);
  {
    const r = t.attributes.position;
    for (let a = 0; a < r.count; a++) {
      const p = r.getX(a),
        i = r.getZ(a),
        d = r.getY(a),
        y = Math.atan2(i, p),
        w = Math.hypot(p, i),
        g =
          1 +
          0.07 * Math.sin(y * 9) * (1 - d / 1.2) +
          (i < 0 ? -0.08 * (1 - d / 1.3) : 0);
      r.setXYZ(a, Math.cos(y) * w * g, d, Math.sin(y) * w * g * 0.82);
    }
    t.computeVertexNormals();
  }
  (s.push(t),
    s.push(new t0(0.16, 16, 12).scale(1.15, 1.25, 0.8).translate(0, 1.2, 0)),
    s.push(new Pt(0.045, 0.055, 0.12, 10).translate(0, 1.37, 0.01)));
  const u = new t0(0.095, 16, 12).scale(0.92, 1.12, 1);
  (u.rotateX(0.45), u.translate(0, 1.49, 0.045), s.push(u));
  const e = new t0(0.105, 14, 10, 0, vo, 0, Math.PI * 0.62).scale(
    0.96,
    1.1,
    1.05,
  );
  (e.rotateX(-0.2),
    e.translate(0, 1.5, 0.02),
    s.push(e),
    s.push(new t0(0.06, 10, 8).translate(0, 1.47, -0.08)));
  for (const r of [-1, 1]) {
    const a = [
      at(r * 0.17, 1.28, 0),
      at(r * 0.19, 1.1, 0.04),
      at(r * 0.12, 0.98, 0.14),
      at(r * 0.035, 1.12, 0.2),
    ];
    (s.push(Vt(a, (p) => 0.052 - p * 0.02, 8)),
      s.push(
        new t0(0.036, 8, 6)
          .scale(0.6, 1.3, 0.9)
          .translate(r * 0.022, 1.17, 0.205),
      ),
      s.push(
        new no(0.09, 0.3, 10, 1, !0)
          .rotateX(Math.PI)
          .translate(r * 0.14, 0.95, 0.12),
      ));
  }
  for (const r of [-1, 1]) {
    const a = new he();
    (a.moveTo(0, 0), a.bezierCurveTo(0.18, 0.12, 0.32, 0.3, 0.3, 0.62));
    const p = 0.1,
      i = -0.72;
    for (let w = 1; w <= 7; w++) {
      const g = w / 7,
        z = 0.3 + (p - 0.3) * g + Math.sin(g * Math.PI) * 0.12,
        x = 0.62 + (i - 0.62) * g;
      a.quadraticCurveTo(z + 0.06, x + 0.07, z, x);
    }
    a.bezierCurveTo(0.04, -0.4, -0.02, -0.1, 0, 0);
    const d = new te(a, {
        depth: 0.05,
        bevelEnabled: !0,
        bevelThickness: 0.015,
        bevelSize: 0.012,
        bevelSegments: 1,
        curveSegments: 6,
      }),
      y = d.attributes.position;
    for (let w = 0; w < y.count; w++) {
      const g = y.getX(w),
        z = y.getY(w),
        x = y.getZ(w);
      y.setXYZ(w, g, z, x - g * g * 0.9);
    }
    (d.computeVertexNormals(),
      d.rotateY(r > 0 ? -0.35 : Math.PI + 0.35),
      d.translate(r * 0.06, 1.2, -0.12),
      s.push(d));
  }
  return a0(s.map((r) => d0((r.index || r.toNonIndexed, r))));
}
function Ic(s, o, t, u) {
  const e = new he(),
    r = o / 2;
  (e.moveTo(-r, 0),
    e.lineTo(r, 0),
    s === "round"
      ? (e.lineTo(r, t - r * 0.7),
        e.absellipse(0, t - r * 0.7, r, r * 0.7, 0, Math.PI, !1))
      : s === "gothic"
        ? (e.lineTo(r, t * 0.72),
          e.quadraticCurveTo(r * 0.9, t * 0.94, 0, t),
          e.quadraticCurveTo(-r * 0.9, t * 0.94, -r, t * 0.72))
        : s === "shoulder"
          ? (e.lineTo(r, t * 0.78),
            e.lineTo(r * 0.7, t * 0.8),
            e.quadraticCurveTo(r * 0.6, t, 0, t),
            e.quadraticCurveTo(-r * 0.6, t, -r * 0.7, t * 0.8),
            e.lineTo(-r, t * 0.78))
          : e.lineTo(r * 0.28, 0),
    e.lineTo(-r, 0));
  const a = new te(e, {
    depth: u,
    bevelEnabled: !0,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 2,
    curveSegments: 10,
  });
  return (a.translate(0, 0, -u / 2), a);
}
function _c(s, o) {
  const t = [
    Gt(0.16, s, 0.12, 0, s / 2, 0),
    Gt((0.62 * s) / 1.4, 0.15, 0.12, 0, s * 0.72, 0),
  ];
  return (
    t.push(new s0((0.2 * s) / 1.4, 0.035, 6, 20).translate(0, s * 0.72, 0)),
    t.push(Gt(0.36, 0.14, 0.26, 0, 0.07, 0)),
    a0(t.map((u) => d0(u)))
  );
}
