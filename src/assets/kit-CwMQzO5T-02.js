// assets/kit-CwMQzO5T 02 — push
// Lines 351-501 of readable/assets/kit-CwMQzO5T.pretty.js (statement-aligned).
function bt(t, n = {}) {
  const e = t.length,
    o = t[0].length,
    i = [],
    s = [],
    c = [];
  for (let r = 0; r < e; r++)
    for (let a = 0; a <= o; a++) {
      const d = t[r][a % o];
      (i.push(d.x, d.y, d.z), s.push(a / o, r / (e - 1)));
    }
  for (let r = 0; r < e - 1; r++)
    for (let a = 0; a < o; a++) {
      const d = r * (o + 1) + a,
        p = d + o + 1;
      n.flipW
        ? c.push(d, d + 1, p, d + 1, p + 1, p)
        : c.push(d, p, d + 1, d + 1, p, p + 1);
    }
  const f = new k();
  (f.setAttribute("position", new v(i, 3)),
    f.setAttribute("uv", new v(s, 2)),
    f.setIndex(c),
    f.computeVertexNormals());
  const y = f.attributes.normal;
  for (let r = 0; r < e; r++) {
    const a = r * (o + 1),
      d = a + o,
      p = y.getX(a) + y.getX(d),
      u = y.getY(a) + y.getY(d),
      l = y.getZ(a) + y.getZ(d),
      h = Math.hypot(p, u, l) || 1;
    (y.setXYZ(a, p / h, u / h, l / h), y.setXYZ(d, p / h, u / h, l / h));
  }
  const x = [f],
    b = (r, a) => {
      const d = t[r],
        p = z();
      for (const w of d) p.add(w);
      p.divideScalar(o);
      const u = [p.x, p.y, p.z],
        l = [],
        h = [0.5, 0.5];
      for (const w of d) (u.push(w.x, w.y, w.z), h.push(0, 0));
      for (let w = 0; w < o; w++)
        a
          ? l.push(0, 1 + w, 1 + ((w + 1) % o))
          : l.push(0, 1 + ((w + 1) % o), 1 + w);
      const m = new k();
      (m.setAttribute("position", new v(u, 3)),
        m.setAttribute("uv", new v(h, 2)),
        m.setIndex(l),
        m.computeVertexNormals(),
        x.push(m));
    };
  return (
    n.cap0 && b(0, !n.flipW),
    n.cap1 && b(e - 1, !!n.flipW),
    x.length === 1 ? f : at(x)
  );
}
function at(t) {
  const n = [],
    e = [],
    o = [],
    i = [];
  let s = 0;
  for (const f of t) {
    const y = f;
    y.attributes.normal || y.computeVertexNormals();
    const x = y.attributes.position,
      b = y.attributes.normal,
      r = y.attributes.uv;
    for (let a = 0; a < x.count; a++)
      (n.push(x.getX(a), x.getY(a), x.getZ(a)),
        e.push(b.getX(a), b.getY(a), b.getZ(a)),
        o.push(r ? r.getX(a) : 0, r ? r.getY(a) : 0));
    if (y.index) for (const a of y.index.array) i.push(a + s);
    else for (let a = 0; a < x.count; a++) i.push(a + s);
    s += x.count;
  }
  const c = new k();
  return (
    c.setAttribute("position", new v(n, 3)),
    c.setAttribute("normal", new v(e, 3)),
    c.setAttribute("uv", new v(o, 2)),
    c.setIndex(i),
    c
  );
}
function At(t, n, e = 0.002, o = 12, i = 2) {
  const s = new $(t, {
    depth: Math.max(1e-4, n - 2 * e),
    bevelEnabled: e > 0,
    bevelThickness: e,
    bevelSize: e,
    bevelSegments: i,
    curveSegments: o,
  });
  return (s.translate(0, 0, -(n - 2 * e) / 2), s);
}
function gt(t, n, e) {
  const o = new E(),
    i = -t / 2,
    s = -n / 2;
  return (
    (e = Math.min(e, t / 2, n / 2)),
    o.moveTo(i + e, s),
    o.lineTo(i + t - e, s),
    o.quadraticCurveTo(i + t, s, i + t, s + e),
    o.lineTo(i + t, s + n - e),
    o.quadraticCurveTo(i + t, s + n, i + t - e, s + n),
    o.lineTo(i + e, s + n),
    o.quadraticCurveTo(i, s + n, i, s + n - e),
    o.lineTo(i, s + e),
    o.quadraticCurveTo(i, s, i + e, s),
    o
  );
}
function Mt(t, n) {
  const e = new E(),
    o = t.length,
    i = (s) => t[(s + o) % o];
  for (let s = 0; s < o; s++) {
    const c = i(s - 1),
      f = i(s),
      y = i(s + 1),
      x = c[0] - f[0],
      b = c[1] - f[1],
      r = y[0] - f[0],
      a = y[1] - f[1],
      d = Math.hypot(x, b),
      p = Math.hypot(r, a),
      u = Math.min(Array.isArray(n) ? n[s] : n, d * 0.45, p * 0.45),
      l = [f[0] + (x / d) * u, f[1] + (b / d) * u],
      h = [f[0] + (r / p) * u, f[1] + (a / p) * u];
    (s === 0 ? e.moveTo(l[0], l[1]) : e.lineTo(l[0], l[1]),
      e.quadraticCurveTo(f[0], f[1], h[0], h[1]));
  }
  return (e.closePath(), e);
}
function zt(t, n, e, o, i, s = 6, c = 20) {
  const f = [],
    y = Math.round(e * c);
  for (let x = 0; x <= y; x++) {
    const b = x / y,
      r = b * e * Math.PI * 2;
    f.push(z(Math.cos(r) * t, o + (i - o) * b, Math.sin(r) * t));
  }
  return rt(f, n, s);
}
