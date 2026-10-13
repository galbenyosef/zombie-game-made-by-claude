// assets__akane-CN21eJhw 17 — spread
// Lines 5703-6044 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function Yo(e, t = {}) {
  const a = t.kit || null,
    o = dt(e, a),
    r = new e.Group();
  r.name = "phone";
  const i = 0.071,
    n = 0.148,
    s = 0.008,
    u = 0.009,
    l = new e.Shape();
  (l.moveTo(-i / 2 + u, -n / 2),
    l.lineTo(i / 2 - u, -n / 2),
    l.quadraticCurveTo(i / 2, -n / 2, i / 2, -n / 2 + u),
    l.lineTo(i / 2, n / 2 - u),
    l.quadraticCurveTo(i / 2, n / 2, i / 2 - u, n / 2),
    l.lineTo(-i / 2 + u, n / 2),
    l.quadraticCurveTo(-i / 2, n / 2, -i / 2, n / 2 - u),
    l.lineTo(-i / 2, -n / 2 + u),
    l.quadraticCurveTo(-i / 2, -n / 2, -i / 2 + u, -n / 2));
  const v = new e.ExtrudeGeometry(l, {
    depth: s - 0.002,
    bevelEnabled: !0,
    bevelThickness: 0.001,
    bevelSize: 0.001,
    bevelSegments: 2,
    curveSegments: 8,
  });
  (v.translate(0, 0, -0.006 / 2), M0(e, a, o, r, v, o.body, 0.6));
  const g = new e.MeshBasicMaterial({
      color: new e.Color(0.5, 0.62, 0.9),
      toneMapped: !1,
    }),
    m = new e.Mesh(new e.PlaneGeometry(i - 0.006, n - 0.008), g);
  ((m.position.z = s / 2 + 4e-4), r.add(m));
  const y = new e.CylinderGeometry(0.006, 0.006, 0.0025, 16);
  return (
    y.rotateX(Math.PI / 2),
    y.translate(-i / 2 + 0.016, n / 2 - 0.016, -s / 2 - 0.001),
    M0(e, a, o, r, y, o.chrome, 0.4),
    {
      group: r,
      screen: m,
      setScreen(k) {
        g.color.setRGB(k[0], k[1], k[2]);
      },
      dispose() {
        (r.traverse((k) => k.geometry && k.geometry.dispose()), g.dispose());
      },
    }
  );
}
function qo(e, t = {}) {
  const a = t.kit || null,
    o = dt(e, a),
    r = new e.Group();
  r.name = "pen";
  const i = I0(
    e,
    [
      [0, 0.012, 0],
      [0, 0.14, 0],
    ],
    (l) => 0.0042 - 4e-4 * l,
    { segs: 8, radial: 12, capEnd: !0, capStart: !0 },
  );
  M0(e, a, o, r, i, o.body, 0.5);
  const n = new e.ConeGeometry(0.0038, 0.013, 12);
  (n.rotateX(Math.PI),
    n.translate(0, 0.0065, 0),
    M0(e, a, o, r, n, o.chrome, 0.4));
  const s = new e.BoxGeometry(0.0016, 0.045, 0.003);
  (s.translate(0, 0.115, 0.0048), M0(e, a, o, r, s, o.chrome, 0.4));
  const u = new e.CylinderGeometry(0.0045, 0.0045, 0.006, 12);
  return (
    u.translate(0, 0.135, 0),
    M0(e, a, o, r, u, o.red, 0.4),
    {
      group: r,
      dispose() {
        r.traverse((l) => l.geometry && l.geometry.dispose());
      },
    }
  );
}
const ve = 0.27,
  Ee = 0.245,
  L0 = [0.136, 0.08, -0.016],
  se = [
    { k: [0.0235, 0.001, 0.074], L: [0.034, 0.022, 0.018], r: 0.0082 },
    { k: [0.0075, 0.002, 0.077], L: [0.037, 0.024, 0.019], r: 0.0083 },
    { k: [-0.0085, 0.001, 0.074], L: [0.034, 0.022, 0.018], r: 0.0079 },
    { k: [-0.0235, -0.001, 0.068], L: [0.027, 0.018, 0.016], r: 0.0071 },
  ],
  q0 = { k: [0.024, -0.007, 0.02], L: [0.03, 0.026, 0.022], r: 0.0092 },
  F0 = [0.82, 0.76, 0.68, 0.6],
  ne = [1.08, 0.84, 0.76, 0.67],
  oe = 0.0011,
  ct = 0.3,
  et = 0.0042,
  Gt = {
    relaxed: {
      c: [
        [0.3, 0.45, 0.3],
        [0.35, 0.5, 0.3],
        [0.4, 0.55, 0.32],
        [0.45, 0.55, 0.3],
      ],
      spread: 0.05,
      thumb: [0.55, 0.25, 0.2, 0.25],
    },
    fist: {
      c: [
        [1.45, 1.6, 1.1],
        [1.5, 1.65, 1.1],
        [1.5, 1.65, 1.1],
        [1.45, 1.6, 1.05],
      ],
      spread: 0,
      thumb: [0.9, 0.6, 0.5, 0.6],
      thumbTo: "fist",
    },
    open: {
      c: [
        [0.04, 0.06, 0.04],
        [0.03, 0.05, 0.04],
        [0.05, 0.06, 0.04],
        [0.08, 0.08, 0.05],
      ],
      spread: 0.16,
      thumb: [0.2, 0.05, 0.05, 0.1],
    },
    pick: {
      c: [
        [0.8, 1.6, 0.65],
        [0.72, 1.55, 0.75],
        [0.78, 1.55, 0.75],
        [0.85, 1.5, 0.7],
      ],
      spread: 0.05,
      thumb: [0.75, 0.2, 0.25, 0.35],
      pick: !0,
      thumbTo: "pick",
    },
    fret: {
      c: [
        [0.5, 1.75, 0.55],
        [0.55, 1.8, 0.55],
        [0.6, 1.75, 0.5],
        [0.7, 1.5, 0.45],
      ],
      spread: 0.12,
      thumb: [0, 0.2, 0.25, 0.15],
      thumbDir: [0.35, -0.9, 0.25],
    },
    reach: {
      c: [
        [0.12, 0.18, 0.1],
        [0.14, 0.2, 0.1],
        [0.18, 0.22, 0.12],
        [0.24, 0.26, 0.14],
      ],
      spread: 0.12,
      thumb: [0.3, 0.1, 0.1, 0.15],
    },
    point: {
      c: [
        [0, 0.02, 0.01],
        [1.5, 1.7, 1.05],
        [1.5, 1.7, 1.05],
        [1.45, 1.65, 1],
      ],
      spread: 0.02,
      thumb: [0.95, 0.45, 0.45, 0.45],
      thumbTo: "tuck",
    },
    wipe: {
      c: [
        [0.55, 0.7, 0.45],
        [0.6, 0.75, 0.5],
        [0.65, 0.8, 0.5],
        [0.7, 0.8, 0.5],
      ],
      spread: 0.03,
      thumb: [0.45, 0.25, 0.2, 0.2],
    },
    grip: {
      c: [
        [1.15, 1.25, 0.8],
        [1.2, 1.3, 0.85],
        [1.2, 1.3, 0.85],
        [1.15, 1.25, 0.8],
      ],
      spread: 0,
      thumb: [1, 0.35, 0.3, 0.25],
    },
    phone: {
      c: [
        [0.35, 0.8, 0.5],
        [0.4, 0.85, 0.55],
        [0.45, 0.9, 0.55],
        [0.5, 0.9, 0.5],
      ],
      spread: 0.02,
      thumb: [0.25, 0.1, 0.15, 0.1],
      phone: !0,
    },
    pen: {
      c: [
        [0.45, 0.75, 0.4],
        [0.8, 0.95, 0.5],
        [1.25, 1.4, 0.9],
        [1.3, 1.4, 0.85],
      ],
      spread: 0.02,
      thumb: [0.85, 0.3, 0.3, 0.3],
      pen: !0,
      thumbTo: "pen",
    },
    flat: {
      c: [
        [0.08, 0.1, 0.06],
        [0.08, 0.1, 0.06],
        [0.1, 0.12, 0.06],
        [0.12, 0.12, 0.06],
      ],
      spread: 0.08,
      thumb: [0.15, 0.05, 0.05, 0.05],
    },
    pistol: {
      c: [
        [0.16, 0.12, 0.06],
        [1.05, 1.15, 0.8],
        [1.08, 1.18, 0.82],
        [1, 1.1, 0.75],
      ],
      spread: 0,
      thumb: [0.62, 0.22, 0.2, 0.18],
      thumbDir: [0.42, -0.62, 0.66],
    },
    support: {
      c: [
        [1, 1.1, 0.7],
        [1.05, 1.15, 0.78],
        [1.08, 1.18, 0.82],
        [1, 1.1, 0.75],
      ],
      spread: 0,
      thumb: [0.3, 0.12, 0.1, 0.1],
      thumbDir: [0.45, -0.5, 0.74],
    },
    torch: {
      c: [
        [1.15, 1.25, 0.8],
        [1.2, 1.3, 0.85],
        [1.2, 1.3, 0.85],
        [1.15, 1.25, 0.8],
      ],
      spread: 0,
      thumb: [0.9, 0.6, 0.5, 0.6],
      thumbTo: "fist",
    },
  },
  Dt = [-0.02, -0.026, 0.067],
  c = {
    add: (e, t) => [e[0] + t[0], e[1] + t[1], e[2] + t[2]],
    sub: (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
    mul: (e, t) => [e[0] * t, e[1] * t, e[2] * t],
    dot: (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
    cross: (e, t) => [
      e[1] * t[2] - e[2] * t[1],
      e[2] * t[0] - e[0] * t[2],
      e[0] * t[1] - e[1] * t[0],
    ],
    len: (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]),
    norm: (e) => {
      const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]) || 1;
      return [e[0] / t, e[1] / t, e[2] / t];
    },
    lerp: (e, t, a) => [
      n0(e[0], t[0], a),
      n0(e[1], t[1], a),
      n0(e[2], t[2], a),
    ],
  },
  Y0 = (e, t, a) => {
    const o = Math.cos(a),
      r = Math.sin(a),
      i = c.dot(t, e),
      n = c.cross(t, e);
    return [
      e[0] * o + n[0] * r + t[0] * i * (1 - o),
      e[1] * o + n[1] * r + t[1] * i * (1 - o),
      e[2] * o + n[2] * r + t[2] * i * (1 - o),
    ];
  };
function qt(e) {
  const t = Z(e || 0);
  return t < 0.001
    ? { defs: se, map: [0, 1, 2, 3] }
    : {
        defs: [
          se[0],
          se[1],
          se[2],
          {
            k: [-0.0168, 0, 0.0715],
            L: se[2].L.map((a) => a * (0.3 + 0.72 * t)),
            r: 0.0074 * (0.55 + 0.45 * t),
          },
          { ...se[3], k: [-0.0235 - 0.0075 * t, -0.0012, 0.067 - 0.002 * t] },
        ],
        map: [0, 1, 2, 2, 3],
      };
}
function Zt(e, t, a) {
  const o = c.norm(c.add(c.add(c.mul(e, 0.85), c.mul(t, 0.12)), c.mul(a, 0.5)));
  let r = c.norm(c.add(c.add(c.mul(e, 0.1), c.mul(t, -1)), c.mul(a, -0.42)));
  const i = c.norm(c.cross(r, o));
  r = c.norm(c.sub(r, c.mul(i, c.dot(r, i))));
  let n = c.cross(i, r);
  return (c.dot(n, e) < 0 && (n = c.mul(n, -1)), { X: n, Y: i, Z: r });
}
const tt = Zt([1, 0, 0], [0, 1, 0], [0, 0, 1]),
  $t = (e) => [c.dot(e, tt.X), c.dot(e, tt.Y), c.dot(e, tt.Z)],
  Zo = $t([0, 0, 1]),
  Bt = $t([0, -1, 0]);
function ot(e, t, a) {
  let o = Y0([0, 0, 1], [0, 1, 0], a);
  const r = Y0([1, 0, 0], [0, 1, 0], a);
  let i = [0, 1, 0];
  const n = [e.k],
    s = [],
    u = o;
  let l = e.k;
  for (let v = 0; v < 3; v++)
    ((o = Y0(o, r, t[v])),
      (i = Y0(i, r, t[v])),
      (l = c.add(l, c.mul(o, e.L[v]))),
      n.push(l),
      s.push(i));
  return { pts: n, ups: s, axis: r, base: u };
}
