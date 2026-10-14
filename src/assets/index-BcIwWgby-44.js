// assets/index-BcIwWgby 44 — math
// Lines 13203-13330 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Le(
  s,
  o,
  t,
  u,
  e,
  r,
  a,
  {
    steps: p = 7,
    crook: i = 0.22,
    sag: d = 0,
    ground: y = null,
    cap: w = !0,
    seg: g = 7,
    snap: z = !0,
  } = {},
) {
  const x = [s.clone()],
    v = o.clone().normalize(),
    n = s.clone();
  for (let h = 1; h <= p; h++) {
    (v
      .addScaledVector(at(r() - 0.5, (r() - 0.5) * 0.6 - d, r() - 0.5), i)
      .normalize(),
      n.addScaledVector(v, t / p));
    const c = u + (e - u) * (h / p);
    if (y) {
      const M = y(n.x, n.z) + c * 0.85;
      n.y < M && ((n.y = M), v.y < 0 && ((v.y *= 0.2), v.normalize()));
    }
    if (a && !a(n, c)) break;
    x.push(n.clone());
  }
  if (x.length < 2) return null;
  const l = (h) =>
      (u + ((e - u) * h * (x.length - 1)) / p) *
      (1 + 0.08 * Math.sin(h * 9 + u * 50)),
    f = Vt(x, (h) => l(h) + 0.004, g, { cap: w });
  if (w && z) {
    const h = f.attributes.position,
      c = x.length,
      M = (c - 1) * (g + 1),
      m = x[c - 1]
        .clone()
        .sub(x[c - 2])
        .normalize(),
      k = l(1);
    for (let A = 0; A <= g; A++) {
      const b =
        (A === 0 || A === g ? 0.3 : Math.pow(r(), 1.6)) * k * 2.6 - k * 0.3;
      h.setXYZ(
        M + A,
        h.getX(M + A) + m.x * b,
        h.getY(M + A) + m.y * b,
        h.getZ(M + A) + m.z * b,
      );
    }
    const S = h.count - 1;
    h.setXYZ(
      S,
      h.getX(S) - m.x * k * 0.5,
      h.getY(S) - m.y * k * 0.5,
      h.getZ(S) - m.z * k * 0.5,
    );
  }
  return { pts: x, rad: l, geo: f };
}
function Ua(s, o, t, u = []) {
  const e = o.map(([y, w, g, z, x]) => {
      const [v, n] = ze(s, y, g);
      return [v, n, w, z, x];
    }),
    r = u.map((y) => {
      const [w, g] = ze(s, y.x, y.z);
      return [w, g, 0.5, y.r, !1];
    }),
    a = [...e, ...r],
    p = (y, w) => {
      const [, g, z, x, v] = y,
        n = Math.abs(g - w) - x;
      return v
        ? z > 1.85 || n >= (z > 1.25 ? 0.2 : 0.45)
        : z - x > 1.95 || n >= 0.55;
    },
    i = (y, w, g, z) => t * xs((y - (w - z)) / z) * xs((g + z - y) / z);
  let d = null;
  for (const y of [7, 6.5, 7.5, 6, 8]) {
    let w = 1e9,
      g = -1e9;
    for (const v of a)
      p(v, 0) || ((w = Math.min(w, v[0])), (g = Math.max(g, v[0])));
    w > g && ((w = -0.5), (g = 0.5));
    for (let v = 0; v < 80; v++) {
      let n = null;
      for (const l of a)
        if (!p(l, i(l[0], w, g, y))) {
          n = l;
          break;
        }
      if (!n) break;
      n[0] < (w + g) / 2 ? (w -= 0.25) : (g += 0.25);
    }
    let z = 9;
    for (const v of a) {
      const [, n, l, f, h] = v;
      h ||
        l - f > 1.95 ||
        (z = Math.min(z, Math.abs(n - i(v[0], w, g, y)) - f));
    }
    if (z < 0.55) continue;
    const x = g - w + 2 * y;
    (!d || x < d.span - 0.5) &&
      (d = { ua: w, ub: g, ease: y, span: x, clear: z });
  }
  return (
    d || (d = { ua: -6, ub: 6, ease: 7, clear: 0 }),
    {
      s0: +(s.s + d.ua - d.ease).toFixed(2),
      s1: +(s.s + d.ub + d.ease).toFixed(2),
      ease: d.ease,
      off: t,
      ua: d.ua,
      ub: d.ub,
      clear: +d.clear.toFixed(2),
    }
  );
}
