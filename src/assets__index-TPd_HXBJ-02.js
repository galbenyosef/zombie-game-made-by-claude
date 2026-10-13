// assets__index-TPd_HXBJ 02 — push
// Lines 321-575 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function $0(t, e, o, n = {}) {
  const a = n.nx || 1,
    l = t.length,
    r = n.out ?? 1,
    p = new Set(n.hard || []),
    f = [],
    c = [],
    d = [];
  let i = 0;
  const s = (P) => {
    const C = t[P],
      F = t[P + 1],
      D = F[0] - C[0],
      z = F[1] - C[1],
      q = Math.hypot(D, z) || 1;
    return [(z / q) * r, (-D / q) * r];
  };
  for (let P = 0; P < l; P++) {
    P > 0 && (i += Math.hypot(t[P][0] - t[P - 1][0], t[P][1] - t[P - 1][1]));
    const C = P > 0 ? s(P - 1) : null,
      F = P < l - 1 ? s(P) : null;
    if (p.has(P) && C && F)
      (f.push(t[P]), c.push(C), d.push(i), f.push(t[P]), c.push(F), d.push(i));
    else {
      const D = C || F,
        z = F || C,
        q = D[0] + z[0],
        Y = D[1] + z[1],
        Z0 = Math.hypot(q, Y) || 1;
      (f.push(t[P]), c.push([q / Z0, Y / Z0]), d.push(i));
    }
  }
  const m = f.length,
    v = [],
    y = [],
    w = [],
    M = [];
  for (let P = 0; P <= a; P++) {
    const C = P / a,
      F = e + (o - e) * C;
    for (let D = 0; D < m; D++) {
      let z = f[D][0],
        q = f[D][1];
      if (n.disp) {
        const Y = n.disp(F, z, q, C, d[D]);
        ((z += Y[0]), (q += Y[1]));
      }
      (v.push(F, q, z), y.push(0, c[D][1], c[D][0]), w.push(F, d[D]));
    }
  }
  for (let P = 0; P < a; P++)
    for (let C = 0; C < m - 1; C++) {
      if (p.size && f[C] === f[C + 1]) continue;
      const F = P * m + C,
        D = F + m;
      r > 0
        ? M.push(F, D, F + 1, F + 1, D, D + 1)
        : M.push(F, F + 1, D, F + 1, D + 1, D);
    }
  const k = new q0();
  return (
    k.setAttribute("position", new e0(v, 3)),
    k.setAttribute("normal", new e0(y, 3)),
    k.setAttribute("uv", new e0(w, 2)),
    k.setIndex(M),
    n.disp && k.computeVertexNormals(),
    k
  );
}
function y0(t, e, o, n, a, l = 4) {
  a = Math.min(a, (o - t) / 2, (n - e) / 2);
  const r = [],
    p = (f, c, d) => {
      for (let i = 0; i <= l; i++) {
        const s = d + ((i / l) * Math.PI) / 2;
        r.push([f + Math.cos(s) * a, c + Math.sin(s) * a]);
      }
    };
  return a <= 1e-4
    ? [
        [t, e],
        [o, e],
        [o, n],
        [t, n],
      ]
    : (p(o - a, e + a, -Math.PI / 2),
      p(o - a, n - a, 0),
      p(t + a, n - a, Math.PI / 2),
      p(t + a, e + a, Math.PI),
      r);
}
function St(t, e, o, n = 1) {
  const a = new Q0(t.map(([c, d]) => new c0(c, d)));
  for (const c of e)
    a.holes.push(
      new qo(
        c
          .slice()
          .reverse()
          .map(([d, i]) => new c0(d, i)),
      ),
    );
  const l = new F0(a, 2),
    r = l.attributes.position,
    p = l.attributes.uv,
    f = l.attributes.normal;
  for (let c = 0; c < r.count; c++)
    (r.setZ(c, o), p.setXY(c, r.getX(c), r.getY(c)), f.setXYZ(c, 0, 0, n));
  if (n < 0) {
    const c = l.index.array;
    for (let d = 0; d < c.length; d += 3) {
      const i = c[d + 1];
      ((c[d + 1] = c[d + 2]), (c[d + 2] = i));
    }
  }
  return l;
}
function C0(t, e, o, n = 1) {
  const a = St(t, e, 0, 1),
    l = a.attributes.position,
    r = a.attributes.normal,
    p = a.attributes.uv;
  for (let c = 0; c < l.count; c++) {
    const d = l.getX(c),
      i = l.getY(c);
    (l.setXYZ(c, o, i, d), r.setXYZ(c, n, 0, 0), p.setXY(c, d, i));
  }
  const f = a.index.array;
  if (n > 0)
    for (let c = 0; c < f.length; c += 3) {
      const d = f[c + 1];
      ((f[c + 1] = f[c + 2]), (f[c + 2] = d));
    }
  return a;
}
function Y0(t, e, o) {
  const n = t.length,
    a = [],
    l = [],
    r = [],
    p = [];
  let f = 0;
  for (let d = 0; d <= n; d++) {
    const i = t[d % n],
      s = t[(d - 1 + n) % n],
      m = t[(d + 1) % n];
    d > 0 && (f += Math.hypot(i[0] - s[0], i[1] - s[1]));
    const v = [i[0] - s[0], i[1] - s[1]],
      y = [m[0] - i[0], m[1] - i[1]],
      w = Math.hypot(...v) || 1,
      M = Math.hypot(...y) || 1;
    let k = -v[1] / w - y[1] / M,
      P = v[0] / w + y[0] / M;
    const C = Math.hypot(k, P) || 1;
    ((k /= C),
      (P /= C),
      a.push(i[0], i[1], e, i[0], i[1], o),
      l.push(k, P, 0, k, P, 0),
      r.push(f, e, f, o));
  }
  for (let d = 0; d < n; d++) {
    const i = d * 2,
      s = i + 2;
    o > e
      ? p.push(i, i + 1, s, i + 1, s + 1, s)
      : p.push(i, s, i + 1, i + 1, s, s + 1);
  }
  const c = new q0();
  return (
    c.setAttribute("position", new e0(a, 3)),
    c.setAttribute("normal", new e0(l, 3)),
    c.setAttribute("uv", new e0(r, 2)),
    c.setIndex(p),
    c
  );
}
function po(t, e, o, n) {
  const a = t.length,
    l = [],
    r = [],
    p = [],
    f = [];
  let c = 0;
  for (let i = 0; i <= a; i++) {
    const s = t[i % a],
      m = o[i % a],
      v = t[(i - 1 + a) % a];
    (t[(i + 1) % a],
      i > 0 && (c += Math.hypot(s[0] - v[0], s[1] - v[1])),
      l.push(s[0], s[1], e, m[0], m[1], n),
      r.push(0, 0, 0, 0, 0, 0),
      p.push(c, e, c, n));
  }
  for (let i = 0; i < a; i++) {
    const s = i * 2,
      m = s + 2;
    f.push(s, s + 1, m, s + 1, m + 1, m);
  }
  const d = new q0();
  return (
    d.setAttribute("position", new e0(l, 3)),
    d.setAttribute("normal", new e0(r, 3)),
    d.setAttribute("uv", new e0(p, 2)),
    d.setIndex(f),
    d.computeVertexNormals(),
    d
  );
}
function h0(
  t,
  e,
  o,
  n,
  a = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1],
  ],
) {
  const l = new q0();
  return (
    l.setAttribute("position", new e0([...t, ...e, ...o, ...n], 3)),
    l.setAttribute("uv", new e0(a.flat(), 2)),
    l.setIndex([0, 1, 2, 0, 2, 3]),
    l.computeVertexNormals(),
    l
  );
}
function he(t, e, o, n = !1) {
  const a = [],
    l = [],
    r = [];
  for (let f = 0; f <= o; f++)
    for (let c = 0; c <= e; c++) {
      const d = t(c / e, f / o);
      (a.push(d[0], d[1], d[2]), l.push(c / e, f / o));
    }
  for (let f = 0; f < o; f++)
    for (let c = 0; c < e; c++) {
      const d = f * (e + 1) + c,
        i = d + e + 1;
      n
        ? r.push(d, i, d + 1, d + 1, i, i + 1)
        : r.push(d, d + 1, i, d + 1, i + 1, i);
    }
  const p = new q0();
  return (
    p.setAttribute("position", new e0(a, 3)),
    p.setAttribute("uv", new e0(l, 2)),
    p.setIndex(r),
    p.computeVertexNormals(),
    p
  );
}
