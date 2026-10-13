// assets__index-BcIwWgby 38 — math
// Lines 11641-11785 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
{
  const s = Hr(20261001),
    o = [];
  for (const p of [
    ...Object.values(Ka),
    ...Object.values(Hs),
    ...Object.values(ys),
  ])
    for (let i = 0; i < p.length - 1; i++)
      o.push([p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]]);
  const t = (p, i, d) => {
      for (const y of o) if (fe(p, i, y[0], y[1], y[2], y[3]) < d) return !0;
      return !1;
    },
    u = Object.values(Nt),
    e = (p, i) => {
      for (let d = 0; d < p.length - 1; d++) {
        const [y, w] = p[d],
          [g, z] = p[d + 1],
          x = Math.hypot(g - y, z - w),
          v = Math.ceil(x / 0.5);
        for (let n = 0; n <= v; n++) {
          const l = y + ((g - y) * n) / v,
            f = w + ((z - w) * n) / v,
            h =
              (d === 0 ? 0 : Math.hypot(p[1][0] - p[0][0], p[1][1] - p[0][1])) +
              (x * n) / v;
          if (
            Math.abs(l) > 43.6 ||
            f < St.z + 2.5 ||
            f > 211 ||
            Ls(l, f) < we.rim + 1.9 ||
            Ns(l, f) < 3 ||
            Ee(l, f) < 1.2 ||
            (h > 2.5 && yo(l, f) < Oe(i) + 1.3) ||
            yo(l, f, i - 24, i + 24) < 10 ||
            (h > 1.5 && (t(l, f, 3.2) || Bs(l, f) < 1.5))
          )
            return !1;
          for (const c of je)
            if (Math.hypot(l - c.x, f - c.z) < c.r * 1.12 + 1.7) return !1;
          for (const c of u) if (Math.hypot(l - c.x, f - c.z) < 9.5) return !1;
        }
      }
      return !0;
    },
    r = (p, i) => {
      for (let d = 0; d < 70; d++) {
        const y = p + (s() - 0.5) * 7,
          w = O0(y),
          g = Ko(w, i),
          z = Oe(y);
        if (
          y < C0.gate + 8 ||
          y > C0.end - 8 ||
          (y > C0.bridgeN - 9 && y < C0.bridgeS + 4) ||
          ms(y)
        )
          continue;
        const x = [w.x + g[0] * (z - 0.4), w.z + g[1] * (z - 0.4)],
          v = (s() - 0.5) * 1.5,
          n = Math.cos(v),
          l = Math.sin(v),
          f = [g[0] * n + w.tx * l, g[1] * n + w.tz * l],
          h = 4.5 + s() * 3,
          c = [x[0] + f[0] * h, x[1] + f[1] * h],
          M = (s() < 0.5 ? -1 : 1) * (1.1 + s() * 0.75),
          m = Math.cos(M),
          k = Math.sin(M),
          S = [f[0] * m - f[1] * k, f[0] * k + f[1] * m],
          A = 5 + s() * 4,
          b = [c[0] + S[0] * A, c[1] + S[1] * A];
        if (
          !(h + A < 10 || h + A > 16 || yo(b[0], b[1]) < 9) &&
          e([x, c, b], y)
        )
          return { pts: [b, c, x], s: y };
      }
      for (const d of [8.4, 7.6, 9])
        for (const y of [0, 0.22, -0.22])
          for (const w of [Math.PI / 2, -Math.PI / 2, 1.3, -1.3])
            for (const g of [6.5, 5.2]) {
              const z = O0(p),
                x = Ko(z, i),
                v = Oe(p),
                n = [z.x + x[0] * (v - 0.4), z.z + x[1] * (v - 0.4)];
              if (
                p < C0.gate + 8 ||
                p > C0.end - 8 ||
                (p > C0.bridgeN - 9 && p < C0.bridgeS + 4) ||
                ms(p)
              )
                return null;
              const l = Math.cos(y),
                f = Math.sin(y),
                h = [x[0] * l + z.tx * f, x[1] * l + z.tz * f],
                c = [n[0] + h[0] * d, n[1] + h[1] * d],
                M = Math.cos(w),
                m = Math.sin(w),
                k = [h[0] * M - h[1] * m, h[0] * m + h[1] * M],
                S = [c[0] + k[0] * g, c[1] + k[1] * g];
              if (
                !(d + g < 10 || d + g > 16 || yo(S[0], S[1]) < 9) &&
                e([n, c, S], p)
              )
                return { pts: [S, c, n], s: p };
            }
      return null;
    },
    a = [];
  for (const [p, i] of [
    [1, C0.gate + 13],
    [-1, C0.gate + 21.5],
  ])
    for (let d = i; d < C0.end - 8; d += 16.5 + s() * 3) a.push([d, p]);
  a.sort((p, i) => p[0] - i[0]);
  for (const [p, i] of a) {
    const d = r(p, i) || r(p + 6, i) || r(p - 6, i);
    if (!d) continue;
    const y = O0(d.s),
      w = d.pts[2],
      g = (w[0] - y.x) * y.tz - (w[1] - y.z) * y.tx > 0 ? "L" : "R";
    let z = "t" + String(Math.round(d.s)).padStart(3, "0") + g;
    (is[z] && (z += "b"), (is[z] = d.pts.map((v) => [c0(v[0]), c0(v[1])])));
    const x = is[z];
    for (let v = 0; v < x.length - 1; v++)
      o.push([x[v][0], x[v][1], x[v + 1][0], x[v + 1][1]]);
  }
}
const be = { ...Ka, ...is, ...Hs, ...ys },
  ac = Object.entries(be)
    .filter(([s, o]) => /^t\d/.test(s) && o.length === 3)
    .map(([s, [o, t, u]]) => {
      const e = [o[0] - t[0], o[1] - t[1]],
        r = [u[0] - t[0], u[1] - t[1]],
        a = Math.hypot(...e),
        p = Math.hypot(...r),
        i = [e[0] / a + r[0] / p, e[1] / a + r[1] / p],
        d = Math.hypot(...i) || 1;
      return {
        name: s,
        x: +(t[0] + (i[0] / d) * 2.3).toFixed(2),
        z: +(t[1] + (i[1] / d) * 2.3).toFixed(2),
      };
    });
