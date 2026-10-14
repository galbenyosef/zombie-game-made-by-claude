// assets/frames-D6Ub_iDK 02 — mat
// Lines 336-681 of readable/assets/frames-D6Ub_iDK.pretty.js (statement-aligned).
function zt(o, e, t) {
  const s = o / 2,
    i = e / 2,
    c = [
      [-s, -i],
      [s, -i],
      [s, i],
      [-s, i],
    ],
    f = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ],
    h = [];
  for (let u = 0; u < 4; u++) {
    const r = c[u],
      d = c[(u + 1) % 4],
      w = f[u],
      l = f[(u + 3) % 4],
      a = f[(u + 1) % 4],
      m = [],
      p = (A, M, B, v) => [
        A[0] + (w[0] + M[0]) * B,
        A[1] + (w[1] + M[1]) * B,
        v,
      ];
    for (let A = 0; A < t.length - 1; A++) {
      const [M, B] = t[A],
        [v, k] = t[A + 1],
        S = p(r, l, M, B),
        F = p(d, a, M, B),
        E = p(r, l, v, k),
        G = p(d, a, v, k);
      m.push(...S, ...G, ...F, ...S, ...E, ...G);
    }
    const [n] = t[t.length - 1],
      [b] = t[0],
      y = p(r, l, b, 0),
      x = p(d, a, b, 0),
      g = p(r, l, n, 0),
      _ = p(d, a, n, 0);
    m.push(...y, ...x, ..._, ...y, ..._, ...g);
    let V = new j();
    (V.setAttribute("position", new L(m, 3)),
      V.computeVertexNormals(),
      (V = rt(V, 0.6)),
      (V.userData.axis = new P(d[0] - r[0], d[1] - r[1], 0).normalize()),
      h.push(V));
  }
  return h;
}
function At(o, e, t = 0.001, { seg: s = 2, curveSegments: i = 12 } = {}) {
  const c = new ft(o, {
    depth: Math.max(1e-4, e - 2 * t),
    bevelEnabled: t > 0,
    bevelThickness: t,
    bevelSize: t,
    bevelOffset: -t * 0,
    bevelSegments: s,
    curveSegments: i,
    steps: 1,
  });
  return (c.translate(0, 0, -(e - 2 * t) / 2), c);
}
function Bt(o, e = []) {
  const t = new ut(o.map((s) => new R(s[0], s[1])));
  for (const s of e) t.holes.push(new ht(s.map((i) => new R(i[0], i[1]))));
  return t;
}
function Rt(o, e, t, s = {}) {
  const i = new pt({ toneMapped: !1, ...s });
  return (i.color.setRGB(o, e, t), (i.name = s.name || "glow"), i);
}
function Pt(o = 12110020, e = 0.16, t = {}) {
  const s = new dt({
    color: o,
    roughness: 0.06,
    metalness: 0,
    transparent: !0,
    opacity: e,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    depthWrite: !1,
    side: st,
    envMapIntensity: 1.6,
    ...t,
  });
  return ((s.name = t.name || "glass"), s);
}
function $(o, e, t) {
  const s = new U(o, e),
    i = s.attributes.uv;
  for (let c = 0; c < i.count; c++)
    i.setXY(
      c,
      t[0] + i.getX(c) * (t[2] - t[0]),
      t[1] + i.getY(c) * (t[3] - t[1]),
    );
  return s;
}
function tt(o, e, t = "L", s = 0) {
  const c = o * 683,
    f = e * 683;
  let h, u, r, d;
  return (
    t === "L"
      ? ((h = c), (u = f + 85), (r = 682), (d = 512))
      : ((h = c + 85), (u = f), (r = 512), (d = 682)),
    (h += r * s),
    (u += d * s),
    (r *= 1 - 2 * s),
    (d *= 1 - 2 * s),
    [h / 2048, 1 - (u + d) / 2048, (h + r) / 2048, 1 - u / 2048]
  );
}
class Xt {
  constructor(e, { amount: t = 0.4, rate: s = 1 } = {}) {
    ((this.rng = e),
      (this.amount = t),
      (this.rate = s),
      (this.on = !0),
      (this.t = 0),
      (this.next = 0.22),
      (this.burst = 0),
      (this.burstT = 0),
      (this.dip = 0),
      (this.dipV = 0),
      (this.snapT = 0),
      (this.level = 1),
      (this.hum = 0));
  }
  snap(e = 0.3) {
    this.snapT = e;
  }
  update(e) {
    const t = this.rng,
      s = this.amount;
    if (((this.t += e), this.snapT > 0))
      return ((this.snapT -= e), (this.level = 0), 0);
    if (!this.on) return ((this.level = 0), 0);
    if (s <= 0.001) return ((this.level = 1), 1);
    ((this.next -= e * this.rate),
      this.next <= 0 &&
        (t() < 0.45 * s + 0.08
          ? ((this.burst = 0.2 + t() * 0.5 * (0.4 + s)), (this.burstT = 0))
          : ((this.dipV = 0.2 + t() * 0.5 * s), (this.dip = 0.08 + t() * 0.25)),
        (this.next = (0.6 + t() * 3.2) / (0.35 + s))));
    let i = 1;
    return (
      this.burst > 0
        ? ((this.burst -= e),
          (this.burstT -= e),
          this.burstT <= 0 &&
            ((this.hum = t() < 0.5 ? 0.15 + t() * 0.3 : 0.78 + t() * 0.22),
            (this.burstT = 0.05 + t() * 0.1)),
          (i = this.hum))
        : this.dip > 0 && ((this.dip -= e), (i = 1 - this.dipV)),
      (i *=
        1 -
        s *
          0.06 *
          (0.5 + 0.5 * Math.sin(this.t * 47) * Math.sin(this.t * 13.3))),
      (this.level += (i - this.level) * Math.min(1, e * 20)),
      this.level
    );
  }
}
function Yt(o, e, t) {
  if (!(typeof location > "u" || !/[?&]solo=/.test(location.search))) {
    if (!o.__hsBeats) {
      o.__hsBeats = {};
      const s = o.beats;
      o.beats = {
        goto: async (i) => (o.__hsBeats[i] ? o.__hsBeats[i]() : s?.goto?.(i)),
      };
    }
    o.__hsBeats[e] = t;
  }
}
class Vt {
  constructor(e = 30, t = 2.5) {
    ((this.k = e), (this.d = t), (this.x = 0), (this.v = 0));
  }
  kick(e) {
    this.v += e;
  }
  update(e) {
    const t = Math.max(1, Math.ceil(e / 0.01)),
      s = e / t;
    for (let i = 0; i < t; i++)
      ((this.v += (-this.k * this.x - this.d * this.v) * s),
        (this.x += this.v * s));
    return this.x;
  }
}
const O = {
    plain: [
      [0, 0],
      [0, 0.011],
      [0.003, 0.014],
      [0.006, 0.015],
      [0.016, 0.02],
      [0.026, 0.019],
      [0.032, 0.014],
      [0.034, 0.008],
      [0.034, 0],
    ],
    wide: [
      [0, 0],
      [0, 0.01],
      [0.005, 0.012],
      [0.007, 0.017],
      [0.013, 0.019],
      [0.028, 0.027],
      [0.044, 0.029],
      [0.053, 0.025],
      [0.058, 0.017],
      [0.058, 0],
    ],
    gilt: [
      [0, 0],
      [0, 0.012],
      [0.004, 0.014],
      [0.006, 0.019],
      [0.011, 0.021],
      [0.018, 0.019],
      [0.026, 0.028],
      [0.038, 0.034],
      [0.05, 0.033],
      [0.058, 0.027],
      [0.062, 0.029],
      [0.068, 0.023],
      [0.068, 0],
    ],
  },
  St = { W: { x: 5.4, rot: Math.PI / 2 }, E: { x: 6.8, rot: -Math.PI / 2 } },
  It = [
    {
      id: "man",
      wall: "W",
      z: 4.975,
      y: 1.64,
      w: 0.24,
      h: 0.32,
      cell: [0, 1, "P"],
      prof: "wide",
      fm: "wood_ebony",
      mat: 0.035,
    },
    {
      id: "family",
      wall: "W",
      z: 7.45,
      y: 1.6,
      w: 0.48,
      h: 0.36,
      cell: [0, 0, "L"],
      prof: "wide",
      fm: "wood_walnut",
      mat: 0.045,
    },
    {
      id: "girl",
      wall: "W",
      z: 8.66,
      y: 1.76,
      w: 0.18,
      h: 0.24,
      cell: [1, 1, "P"],
      prof: "plain",
      fm: "wood_ebony",
      mat: 0.026,
    },
    {
      id: "baby",
      wall: "W",
      z: 8.66,
      y: 1.36,
      w: 0.18,
      h: 0.24,
      cell: [1, 2, "P"],
      prof: "plain",
      fm: "wood_ebony",
      mat: 0.026,
    },
    {
      id: "wedding",
      wall: "W",
      z: 11.72,
      y: 1.62,
      w: 0.3,
      h: 0.4,
      cell: [1, 0, "P"],
      prof: "wide",
      fm: "wood_ebony",
      mat: 0.04,
      crooked: -0.085,
    },
    {
      id: "couple",
      wall: "E",
      z: 3.78,
      y: 1.63,
      w: 0.24,
      h: 0.32,
      cell: [0, 2, "P"],
      prof: "plain",
      fm: "wood_walnut",
      mat: 0.032,
    },
    {
      id: "pony",
      wall: "E",
      z: 5.1,
      y: 1.57,
      w: 0.28,
      h: 0.21,
      cell: [2, 0, "L"],
      prof: "plain",
      fm: "wood_ebony",
      mat: 0.03,
    },
    {
      id: "painting",
      wall: "E",
      z: 8.78,
      y: 1.62,
      w: 0.44,
      h: 0.33,
      cell: [2, 1, "L"],
      prof: "gilt",
      fm: "brass_aged",
      mat: 0,
    },
  ],
  Tt = {
    wall: "E",
    z: 10.4,
    y: 1.62,
    w: 0.2,
    h: 0.26,
    prof: "plain",
    mat: 0.03,
  };
