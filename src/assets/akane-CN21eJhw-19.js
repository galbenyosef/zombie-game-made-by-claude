// assets/akane-CN21eJhw 19 — push
// Lines 6392-6491 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function en(e, t, a) {
  const o = [],
    r = (i, n, s, u) => {
      const l = i[2],
        v = i[3],
        g = c.len(c.sub(v, l)),
        m = c.norm(c.sub(v, l)),
        y = c.norm(c.sub(n[2], c.mul(m, c.dot(n[2], m)))),
        k = c.cross(y, m),
        G = n0(s * 0.97, u, 0.7),
        d = G * 0.7,
        w = G * 0.3,
        f = g * 0.36,
        C = c.add(c.add(l, c.mul(m, g * 0.7)), c.mul(y, G - w + 45e-5)),
        x = new e.SphereGeometry(1, 16, 10);
      x.scale(d, w, f);
      const p = new e.Matrix4().makeBasis(
        new e.Vector3(...k),
        new e.Vector3(...y),
        new e.Vector3(...m),
      );
      (p.setPosition(...C), x.applyMatrix4(p), o.push(x));
    };
  return (
    t.fingers.forEach((i, n) => r(i, t.ups[n], a[n].r * F0[2], a[n].r * F0[3])),
    r(t.thumb, t.thumbUps, q0.r * ne[2], q0.r * ne[3]),
    Eo(e, o)
  );
}
const Q0 = new Map();
function tn(e, t, a = 0, o = "") {
  if (o && Q0.has(o)) {
    const i = Q0.get(o);
    return (Q0.delete(o), Q0.set(o, i), i);
  }
  const r = on(e, t, a);
  if (o && (Q0.set(o, r), Q0.size > 16)) {
    const [i, n] = Q0.entries().next().value;
    Q0.delete(i);
    for (const s of Object.values(n)) s.dispose();
  }
  return r;
}
function on(e, t, a = 0) {
  const { defs: o } = qt(a),
    r = Jo(t, o),
    i = [],
    n = [],
    s = [],
    u = [];
  return (
    t.fingers.forEach((l, v) =>
      l.forEach((g, m) => {
        (i.push(g),
          n.push(o[v].r * F0[m]),
          m < 2 &&
            (s.push(m ? c.lerp(l[0], l[1], ct) : g),
            u.push(o[v].r * F0[0] + oe)));
      }),
    ),
    t.thumb.forEach((l, v) => {
      (i.push(l),
        n.push(q0.r * ne[v]),
        v < 3 &&
          (s.push(v < 2 ? l : c.lerp(t.thumb[1], t.thumb[2], 0.3)),
          u.push(q0.r * ne[v] + oe)));
    }),
    {
      skin: zt(e, r.skin, Tt(i, n)),
      glove: zt(e, r.glove, Tt(s, u)),
      nails: en(e, t, o),
    }
  );
}
function nn(e, t) {
  const a = new e.Shape();
  (a.moveTo(0, 0.0135),
    a.quadraticCurveTo(0.0162, 0.0105, 0.0138, -0.005),
    a.quadraticCurveTo(0.0078, -0.0152, 0, -0.0165),
    a.quadraticCurveTo(-0.0078, -0.0152, -0.0138, -0.005),
    a.quadraticCurveTo(-0.0162, 0.0105, 0, 0.0135));
  const o = new e.ExtrudeGeometry(a, {
    depth: 0.001,
    bevelEnabled: !0,
    bevelThickness: 3e-4,
    bevelSize: 3e-4,
    bevelSegments: 1,
    curveSegments: 8,
  });
  o.translate(0, 0, -5e-4);
  const r = t.dir,
    i = c.norm(c.sub(t.across, c.mul(r, c.dot(t.across, r)))),
    n = c.cross(i, c.mul(r, -1)),
    s = new e.Matrix4().makeBasis(
      new e.Vector3(...i),
      new e.Vector3(...c.mul(r, -1)),
      new e.Vector3(...n),
    );
  return (s.setPosition(...t.center), o.applyMatrix4(s), o);
}
