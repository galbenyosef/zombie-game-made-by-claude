// assets/district-BhfbivMT 05 — math
// Lines 1320-1643 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function Uo() {
  const n = bakeSignTextures(),
    t = new P0(),
    e = new Cn(0.5, 0.3, 8, 1, !0);
  return (
    e.translate(0, -0.15, 0),
    e.rotateZ(Math.PI / 2 + 0.3),
    e.translate(0.1, 0.42, 0),
    X(Q(e), n.umbrella, t),
    X(
      Q(
        new b0(0.008, 0.008, 0.85, 6)
          .rotateZ(Math.PI / 2 + 0.3)
          .translate(-0.2, 0.3, 0),
      ),
      n.chrome,
      t,
    ),
    X(
      Q(
        new Ve(0.05, 0.012, 6, 12, Math.PI)
          .rotateZ(Math.PI)
          .translate(-0.62, 0.16, 0),
      ),
      n.dark,
      t,
    ),
    { group: t, size: [1, 1] }
  );
}
function Ct() {
  const n = bakeSignTextures(),
    t = new P0();
  return (
    X(Q(w0(0.1, 0.07, 0.26, 0, 0.035, 0)), n.white, t),
    X(Q(w0(0.09, 0.05, 0.12, 0, 0.09, -0.05)), n.white, t),
    X(Q(w0(0.105, 0.02, 0.27, 0, 0.01, 0)), n.rubber, t),
    { group: t, size: [0.3, 0.3] }
  );
}
function no() {
  const n = bakeSignTextures(),
    t = new P0();
  (X(Q(new b0(0.33, 0.33, 0.012, 24).translate(0, 0.006, 0)), n.iron, t),
    X(
      Q(new Ve(0.33, 0.02, 4, 24).rotateX(Math.PI / 2).translate(0, 0.006, 0)),
      n.rust,
      t,
    ));
  for (let e = 0; e < 6; e++)
    X(
      Q(w0(0.5, 0.008, 0.03, 0, 0.012, 0).rotateY((e * Math.PI) / 6)),
      n.rust,
      t,
    );
  return { group: t, size: [0.7, 0.7] };
}
function oo() {
  const n = bakeSignTextures(),
    t = new P0();
  X(Q(w0(0.5, 0.01, 0.36, 0, 0.005, 0)), n.dark, t);
  for (let e = 0; e < 7; e++)
    X(Q(w0(0.03, 0.012, 0.34, -0.21 + e * 0.07, 0.01, 0)), n.iron, t);
  return { group: t, size: [0.5, 0.36] };
}
function ro({ fallen: n = !1 } = {}) {
  const t = bakeSignTextures(),
    e = new P0();
  e.name = "scooter";
  const r = 0.28,
    o = 1.2;
  for (const l of [-o / 2, o / 2])
    (X(
      new Ve(r, 0.05, 10, 24).rotateY(Math.PI / 2).translate(0, r, l),
      t.rubber,
      e,
    ),
      X(
        Q(new b0(0.12, 0.12, 0.08, 14).rotateZ(Math.PI / 2).translate(0, r, l)),
        t.chrome,
        e,
      ));
  return (
    X(Q(w0(0.16, 0.12, 0.9, 0, 0.42, -0.05).rotateX(0.12)), t.paintR, e),
    X(Q(w0(0.44, 0.62, 0.06, 0, 0.62, 0.34).rotateX(-0.18)), t.paintR, e),
    X(Q(w0(0.3, 0.26, 0.5, 0, 0.5, -0.32)), t.paintW, e),
    X(Q(w0(0.26, 0.08, 0.56, 0, 0.72, -0.28)), t.rubber, e),
    X(Q(w0(0.36, 0.03, 0.4, 0, 0.8, -0.72)), t.iron, e),
    X(Q(w0(0.44, 0.4, 0.42, 0, 1.02, -0.74)), t.white, e),
    X(Q(w0(0.445, 0.06, 0.425, 0, 1.02, -0.74)), t.paintR, e),
    X(Q(w0(0.05, 0.62, 0.05, 0, 0.72, 0.5).rotateX(-0.3)), t.chrome, e),
    X(Q(w0(0.66, 0.03, 0.03, 0, 1, 0.44)), t.chrome, e),
    X(
      Q(
        new b0(0.07, 0.06, 0.08, 14)
          .rotateX(Math.PI / 2)
          .translate(0, 0.94, 0.52),
      ),
      t.chrome,
      e,
    ),
    X(
      Q(
        new b0(0.3, 0.3, 0.12, 14, 1, !0, -1.2, 2.4)
          .rotateZ(Math.PI / 2)
          .translate(0, r, o / 2),
      ),
      t.paintR,
      e,
    ),
    n && ((e.rotation.z = Math.PI / 2 - 0.2), (e.position.y = 0.3)),
    { group: e, size: [0.7, 1.9] }
  );
}
function Ye(n, t, e = 0) {
  let r =
    (Math.imul(n, 374761393) +
      Math.imul(t, 668265263) +
      Math.imul(e, 1442695041)) |
    0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    (r ^= r >>> 16),
    (r >>> 0) / 4294967296
  );
}
const Be = (n, t) => (t > 0 ? ((n % t) + t) % t : n);
class qt {
  constructor(t = 1) {
    this.seed = t | 0;
  }
  _g(t, e, r, o) {
    return Ye(Be(t, r), Be(e, o), this.seed) * 6.283185307179586;
  }
  perlin(t, e, r = 0, o = 0) {
    const l = Math.floor(t),
      s = Math.floor(e),
      c = t - l,
      a = e - s,
      h = this._g(l, s, r, o),
      f = this._g(l + 1, s, r, o),
      y = this._g(l, s + 1, r, o),
      m = this._g(l + 1, s + 1, r, o),
      b = Math.cos(h) * c + Math.sin(h) * a,
      v = Math.cos(f) * (c - 1) + Math.sin(f) * a,
      p = Math.cos(y) * c + Math.sin(y) * (a - 1),
      d = Math.cos(m) * (c - 1) + Math.sin(m) * (a - 1),
      i = c * c * c * (c * (c * 6 - 15) + 10),
      u = a * a * a * (a * (a * 6 - 15) + 10);
    return (
      (b + (v - b) * i + (p + (d - p) * i - (b + (v - b) * i)) * u) * 1.4142
    );
  }
  fbm(t, e, r = 5, o = 0, l = 0, s = 2, c = 0.5) {
    let a = 0,
      h = 1,
      f = 1,
      y = 0;
    for (let m = 0; m < r; m++)
      ((a += h * this.perlin(t * f, e * f, o ? o * f : 0, l ? l * f : 0)),
        (y += h),
        (h *= c),
        (f *= s));
    return a / y;
  }
  ridged(t, e, r = 5, o = 0, l = 0) {
    let s = 0,
      c = 0.5,
      a = 1;
    for (let h = 0; h < r; h++) {
      const f =
        1 - Math.abs(this.perlin(t * a, e * a, o ? o * a : 0, l ? l * a : 0));
      ((s += c * f * f), (c *= 0.5), (a *= 2));
    }
    return s;
  }
  cell(t, e, r = 0, o = 0) {
    const l = Math.floor(t),
      s = Math.floor(e);
    let c = 9,
      a = 9,
      h = 0;
    for (let f = -1; f <= 1; f++)
      for (let y = -1; y <= 1; y++) {
        const m = l + y,
          b = s + f,
          v = Be(m, r),
          p = Be(b, o),
          d = m + Ye(v, p, this.seed + 11),
          i = b + Ye(v, p, this.seed + 29),
          u = Math.hypot(d - t, i - e);
        u < c
          ? ((a = c), (c = u), (h = Ye(v, p, this.seed + 53)))
          : u < a && (a = u);
      }
    return { d1: c, d2: a, id: h };
  }
  cell2(t, e, r = 0, o = 0) {
    const l = Math.floor(t),
      s = Math.floor(e);
    let c = 9,
      a = 9,
      h = 0,
      f = 0,
      y = 0,
      m = 0;
    for (let v = -1; v <= 1; v++)
      for (let p = -1; p <= 1; p++) {
        const d = l + p,
          i = s + v,
          u = Be(d, r),
          x = Be(i, o),
          w = d + Ye(u, x, this.seed + 11),
          _ = i + Ye(u, x, this.seed + 29),
          M = Math.hypot(w - t, _ - e),
          C = u * 7919 + x * 104729;
        M < c
          ? ((a = c),
            (f = h),
            (m = y),
            (c = M),
            (h = Ye(u, x, this.seed + 53)),
            (y = C))
          : M < a && ((a = M), (f = Ye(u, x, this.seed + 53)), (m = C));
      }
    const b = Ye(Math.min(y, m), Math.max(y, m), this.seed + 71);
    return { d1: c, d2: a, id: h, id2: f, edge: b };
  }
}
const z = ke,
  ie = (n, t = 0, e = 1) => (n < t ? t : n > e ? e : n),
  A0 = (n, t, e) => n + (t - n) * e,
  ao = (n, t, e) => {
    const r = ie((e - n) / (t - n));
    return r * r * (3 - 2 * r);
  };
function Ot(n) {
  let t = (n * 2654435761) >>> 0 || 1;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function W0(n) {
  const t = n.length,
    e = n.map((a) => a[0]),
    r = n.map((a) => a[1]),
    o = n.map((a) => a[2] === "c");
  if (t === 1) return () => r[0];
  const l = [];
  for (let a = 0; a < t - 1; a++) l.push((r[a + 1] - r[a]) / (e[a + 1] - e[a]));
  const s = new Array(t),
    c = new Array(t);
  for (let a = 0; a < t; a++) {
    if (a === 0) {
      s[a] = c[a] = l[0];
      continue;
    }
    if (a === t - 1) {
      s[a] = c[a] = l[t - 2];
      continue;
    }
    if (o[a]) {
      ((s[a] = l[a - 1]), (c[a] = l[a]));
      continue;
    }
    s[a] = c[a] = l[a - 1] * l[a] <= 0 ? 0 : (l[a - 1] + l[a]) / 2;
  }
  for (let a = 0; a < t - 1; a++) {
    if (l[a] === 0) {
      ((c[a] = 0), (s[a + 1] = 0));
      continue;
    }
    let h = c[a] / l[a],
      f = s[a + 1] / l[a];
    (h < 0 && ((c[a] = 0), (h = 0)), f < 0 && ((s[a + 1] = 0), (f = 0)));
    const y = h * h + f * f;
    if (y > 9) {
      const m = 3 / Math.sqrt(y);
      ((c[a] = m * h * l[a]), (s[a + 1] = m * f * l[a]));
    }
  }
  return (a) => {
    if (a <= e[0]) return r[0];
    if (a >= e[t - 1]) return r[t - 1];
    let h = 0;
    for (; h < t - 2 && a > e[h + 1];) h++;
    const f = e[h + 1] - e[h],
      y = (a - e[h]) / f,
      m = y * y,
      b = m * y;
    return (
      (2 * b - 3 * m + 1) * r[h] +
      (b - 2 * m + y) * f * c[h] +
      (-2 * b + 3 * m) * r[h + 1] +
      (b - m) * f * s[h + 1]
    );
  };
}
function tt(n) {
  return (t) => {
    if (t <= n[0][0]) return n[0][1];
    for (let e = 0; e < n.length - 1; e++)
      if (t <= n[e + 1][0])
        return A0(
          n[e][1],
          n[e + 1][1],
          (t - n[e][0]) / (n[e + 1][0] - n[e][0]),
        );
    return n[n.length - 1][1];
  };
}
const me = (n) => {
    const t = new Mt(n);
    return [t.r, t.g, t.b];
  },
  oe = (n, t) => [n[0] * t, n[1] * t, n[2] * t],
  ft = (n, t, e) => [A0(n[0], t[0], e), A0(n[1], t[1], e), A0(n[2], t[2], e)];
let Re = null;
