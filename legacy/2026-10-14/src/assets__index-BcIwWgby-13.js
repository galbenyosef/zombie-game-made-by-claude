// assets__index-BcIwWgby 13 — math
// Lines 3284-3604 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Fa(s, o, t, u, e = 2, r = 0.12, a = 0.1, p = 0.35) {
  const i = t - u,
    d = s / 2 - r / 2,
    y = _a(s / 2, u),
    w = y.R - r / 2,
    g = i + Math.sqrt(Math.max(0, (w - p) ** 2 - y.c ** 2 - 0)),
    z = (2 * d) / e,
    x = [],
    v = z * 0.866;
  let n;
  if (e % 2 === 0) {
    const h = z;
    n = g - Math.sqrt(Math.max(0, (z + p) ** 2 - h * h));
  } else n = g - p - a * 0.6 - v;
  for (let h = 0; h < e; h++) {
    const c = -d + h * z,
      M = c + z;
    x.push({ x0: c, x1: M, spring: n, apex: n + v, pts: aa(c, M, n, v) });
  }
  const l = aa(-d, d, i, w - y.c > 0 ? Math.sqrt(w * w - y.c * y.c) : u, 20);
  (l.unshift([-d, o + r / 2]), l.push([d, o + r / 2]));
  const f = [];
  for (let h = 1; h < e; h++) f.push([-d + h * z, o + r / 2, n]);
  return {
    w: s,
    sill: o,
    apex: t,
    spring: i,
    fb: r,
    bar: a,
    hw: d,
    frame: l,
    lights: x,
    mullions: f,
    circle: { cx: 0, cy: g, r: p },
    lw: z,
  };
}
const Wa = Fa(e0.w, e0.sill, e0.apex, e0.w * 0.866, 2, 0.12, 0.1, 0.35),
  co = (() => {
    const s = Wa,
      o = fs[2],
      t = s.lights[0],
      u = o - t.x1 + s.bar / 2,
      e = o - t.x0 - s.fb / 2;
    return {
      zc: o,
      u: (t.x0 + t.x1) / 2,
      z0: u,
      z1: e,
      zm: (u + e) / 2,
      half: (e - u) / 2,
      sill: e0.sill,
      spring: t.spring,
      xg: pt.x0 - 0.45,
    };
  })(),
  On = Fa(z0.w, z0.sill, z0.apex, z0.rise, 3, 0.14, 0.11, 0.5),
  jn = {
    r: G0.r,
    hub: 0.36,
    mid: 1.1,
    petal: 1.62,
    frame: G0.r - 0.07,
    spokes: 12,
    bar: 0.085,
  };
function ds(s, o) {
  const a = Math.atan2((o - 51.4) / 2.05, (s - -3) / 2.55),
    p = Math.hypot((s - -3) / 2.55, (o - 51.4) / 2.05);
  return (
    1 +
    (0.12 * Math.sin(a * 5 + 1.3) +
      0.07 * Math.sin(a * 11 + 0.4) +
      0.05 * Math.sin(a * 23 + 2.1) +
      0.03 * Math.sin(a * 41)) -
    p
  );
}
function ue(s, o) {
  const t = (s * s + o * o) / (2 * s),
    u = t - s,
    e = Math.acos(Math.max(-1, Math.min(1, u / t)));
  return {
    a: s,
    rise: o,
    R: t,
    h: (r) => {
      const a = Math.abs(r) + u;
      return Math.sqrt(Math.max(0, t * t - a * a));
    },
    inv: (r) => {
      const a = Math.max(0, Math.min(o, r));
      return t - Math.sqrt(Math.max(0, t * t - a * a));
    },
    dh: (r) => {
      const a = Math.abs(r) + u,
        p = Math.sqrt(Math.max(1e-6, t * t - a * a));
      return ((r < 0 ? 1 : -1) * a) / p;
    },
    pts(r = 16) {
      const a = [];
      for (let p = 0; p <= r; p++) {
        const i = (e * p) / r;
        a.push([-s + t - t * Math.cos(i), t * Math.sin(i)]);
      }
      for (let p = r - 1; p >= 0; p--) {
        const i = (e * p) / r;
        a.push([s - t + t * Math.cos(i), t * Math.sin(i)]);
      }
      return a;
    },
    inward(r, a) {
      const i = (r < 0 ? u : -u) - r,
        d = -a,
        y = Math.hypot(i, d) || 1;
      return [i / y, d / y];
    },
  };
}
function Uo(s, o, t, u, e = 14) {
  const r = ue(s / 2, u - t),
    a = [[-s / 2, o]];
  for (const [p, i] of r.pts(e)) a.push([p, t + i]);
  return (a.push([s / 2, o]), a);
}
function Ra(s, o = new Lo()) {
  o.moveTo(s[0][0], s[0][1]);
  for (let t = 1; t < s.length; t++) o.lineTo(s[t][0], s[t][1]);
  return (o.closePath(), o);
}
function qs(s) {
  return Ra(s, new he());
}
const se = new dt(),
  Io = new dt(),
  na = new dt(),
  _o = new dt();
function I0(s, o, t, { closed: u = !0, caps: e = !0, crease: r = 0.5 } = {}) {
  const a = o.length,
    p = s.length,
    i = [],
    d = [],
    y = [];
  for (let k = 0; k < a; k++) {
    const S = o[Math.max(0, k - 1)],
      A = o[Math.min(a - 1, k + 1)];
    Io.set(A[0] - S[0], A[1] - S[1], A[2] - S[2]).normalize();
    const b = Array.isArray(t[0]) ? t[k] : t;
    (_o.set(b[0], b[1], b[2]),
      _o.addScaledVector(Io, -Io.dot(_o)).normalize(),
      na.crossVectors(Io, _o).normalize(),
      i.push(Io.clone()),
      d.push(na.clone()),
      y.push(_o.clone()));
  }
  let w = 0;
  for (let k = 0; k < p; k++) {
    const S = s[k],
      A = s[(k + 1) % p];
    w += S[0] * A[1] - A[0] * S[1];
  }
  const g = w >= 0 ? 1 : -1,
    z = u ? p : p - 1,
    x = [];
  for (let k = 0; k < z; k++) {
    const S = s[k],
      A = s[(k + 1) % p],
      b = A[0] - S[0],
      P = A[1] - S[1],
      _ = Math.hypot(b, P) || 1;
    x.push([(g * P) / _, (-g * b) / _]);
  }
  const v = (k, S) => {
      const A = x[k],
        b = S ? (u ? (k + 1) % z : k + 1) : u ? (k - 1 + z) % z : k - 1;
      if (b < 0 || b >= z) return A;
      const P = x[b];
      if (A[0] * P[0] + A[1] * P[1] < Math.cos(r)) return A;
      const I = A[0] + P[0],
        R = A[1] + P[1],
        V = Math.hypot(I, R) || 1;
      return [I / V, R / V];
    },
    n = [],
    l = [],
    f = [],
    h = [],
    c = [0];
  for (let k = 1; k < a; k++)
    c.push(
      c[k - 1] +
        Math.hypot(
          o[k][0] - o[k - 1][0],
          o[k][1] - o[k - 1][1],
          o[k][2] - o[k - 1][2],
        ),
    );
  let M = 0;
  for (let k = 0; k < z; k++) {
    const S = s[k],
      A = s[(k + 1) % p],
      b = v(k, 0),
      P = v(k, 1),
      _ = Math.hypot(A[0] - S[0], A[1] - S[1]),
      I = n.length / 3;
    for (let R = 0; R < a; R++)
      for (const [V, L, K] of [
        [S, b, M],
        [A, P, M + _],
      ])
        (se
          .set(o[R][0], o[R][1], o[R][2])
          .addScaledVector(d[R], V[0])
          .addScaledVector(y[R], V[1]),
          n.push(se.x, se.y, se.z),
          se
            .set(0, 0, 0)
            .addScaledVector(d[R], L[0])
            .addScaledVector(y[R], L[1])
            .normalize(),
          l.push(se.x, se.y, se.z),
          f.push(c[R], K));
    for (let R = 0; R < a - 1; R++) {
      const V = I + R * 2;
      h.push(V, V + 1, V + 2, V + 1, V + 3, V + 2);
    }
    M += _;
  }
  if (e && u) {
    const k = Aa.triangulateShape(
      s.map(([S, A]) => new re(S, A)),
      [],
    );
    for (const S of [0, a - 1]) {
      const A = n.length / 3,
        b = i[S].clone().multiplyScalar(S ? 1 : -1);
      for (const P of s)
        (se
          .set(o[S][0], o[S][1], o[S][2])
          .addScaledVector(d[S], P[0])
          .addScaledVector(y[S], P[1]),
          n.push(se.x, se.y, se.z),
          l.push(b.x, b.y, b.z),
          f.push(P[0], P[1]));
      for (const P of k) h.push(A + P[0], A + P[1], A + P[2]);
    }
  }
  const m = new Rt();
  return (
    m.setAttribute("position", new xt(n, 3)),
    m.setAttribute("normal", new xt(l, 3)),
    m.setAttribute("uv", new xt(f, 2)),
    m.setIndex(h),
    Mn(m)
  );
}
function A0(s, o, t, u, e = 0, r = 0, a = 0) {
  const p = [],
    i = [],
    d = [];
  for (let x = 0; x <= u; x++) {
    const v = x / u,
      n = o(v);
    for (let l = 0; l <= t; l++) {
      const f = a + (l / t) * Math.PI * 2,
        h = s(f, v);
      (p.push(e + Math.cos(f) * h, n, r + Math.sin(f) * h),
        i.push((l / t) * 2, n));
    }
  }
  for (let x = 0; x < u; x++)
    for (let v = 0; v < t; v++) {
      const n = x * (t + 1) + v,
        l = n + 1,
        f = n + t + 1,
        h = f + 1;
      d.push(n, f, l, l, f, h);
    }
  const y = new Rt();
  (y.setAttribute("position", new xt(p, 3)),
    y.setAttribute("uv", new xt(i, 2)),
    y.setIndex(d),
    y.computeVertexNormals());
  const w = y.attributes.normal,
    g = y.attributes.position;
  let z = 0;
  for (let x = 0; x < t; x++)
    z += (g.getX(x) - e) * w.getX(x) + (g.getZ(x) - r) * w.getZ(x);
  if (z < 0) {
    const x = y.index.array;
    for (let v = 0; v < x.length; v += 3) {
      const n = x[v + 1];
      ((x[v + 1] = x[v + 2]), (x[v + 2] = n));
    }
    y.computeVertexNormals();
  }
  return y;
}
const Ke = (s) => (s.index ? s.toNonIndexed() : s),
  Yn = (s) => {
    const o = e0.w * 0.866;
    return Uo(e0.w, e0.sill, e0.apex - o, e0.apex, 12).map(([t, u]) => [
      t + s,
      u,
    ]);
  },
  ra = () => Uo(z0.w, z0.sill, z0.apex - z0.rise, z0.apex, 14),
  Xn = () =>
    Uo(Qt.x1 - Qt.x0, 0, Qt.spring, Qt.h, 8).map(([s, o]) => [
      s + (Qt.x0 + Qt.x1) / 2,
      o,
    ]);
function Ne(s, o, t, u) {
  const e = qs(s);
  for (const a of o) e.holes.push(a instanceof Lo ? a : Ra(a));
  const r = new te(e, { depth: t, bevelEnabled: !1, curveSegments: 40 });
  return (r.applyMatrix4(u), r.deleteAttribute("uv"), Ct(Ke(r)));
}
const jo = (s) => new wt().set(0, 0, -1, s, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1),
  Yo = (s) => new wt().set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, s, 0, 0, 0, 1);
