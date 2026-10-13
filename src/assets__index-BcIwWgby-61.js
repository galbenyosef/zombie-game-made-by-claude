// assets__index-BcIwWgby 61 — math
// Lines 18543-18613 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function oi(s, o = null, t = 0) {
  const u = s.attributes.position,
    e = new Float32Array(u.count * 2);
  for (let r = 0; r < u.count; r++)
    ((e[r * 2] = o ? o(u.getX(r), u.getY(r), u.getZ(r)) : 0),
      (e[r * 2 + 1] = t));
  return (s.setAttribute("aSway", new vt(e, 2)), s);
}
const si = (s) => ((s = (s + Math.PI) % ne), s < 0 && (s += ne), s - Math.PI);
function Be(s, o, t, u, e, r, a, p = (i, d) => 0) {
  const i = [],
    d = [],
    y = [],
    w = [];
  let g = (Math.floor(a * 1013) % 2147483646) + 1;
  const z = () => (g = (g * 16807) % 2147483647) / 2147483647,
    x = Array.from({ length: 4 }, () => ({
      a: z() * Math.PI,
      f: 7 + z() * 11,
      ph: z() * ne,
      A: r * (0.9 + z() * 1.4),
    }));
  for (let n = 0; n <= u; n++)
    for (let l = 0; l <= t; l++) {
      const f = n / u,
        h = l / t - 0.5,
        c = s * e(f) * (1 + 0.08 * It(f * 5 + a, h * 2)),
        M = h * c + 0.012 * It(f * 9, a),
        m = (f - 0.5) * o + 0.012 * It(h * 9 + a, 3);
      let k = 0.01 + Math.abs(It(M * 13 + a, m * 13 - a)) * r * 0.35 + p(h, f);
      for (const S of x)
        k +=
          S.A *
          Math.pow(
            0.5 +
              0.5 *
                Math.sin(S.f * (M * Math.cos(S.a) + m * Math.sin(S.a)) + S.ph),
            3,
          );
      (i.push(M, k, m), d.push(0, 1, 0), y.push(M * 2, m * 2));
    }
  for (let n = 0; n < u; n++)
    for (let l = 0; l < t; l++) {
      const f = n * (t + 1) + l,
        h = f + 1,
        c = f + t + 1,
        M = c + 1;
      w.push(f, c, h, h, c, M);
    }
  const v = new Rt();
  return (
    v.setAttribute("position", new xt(i, 3)),
    v.setAttribute("normal", new xt(d, 3)),
    v.setAttribute("uv", new xt(y, 2)),
    v.setIndex(w),
    v.computeVertexNormals(),
    v
  );
}
function ya(s, o, t, u, e = 0.05, r = 0.04) {
  const a = new s0(s, t, 6, 28),
    p = new Pt(e, e, r * 1.6, 10).rotateX(Math.PI / 2),
    i = [];
  for (let d = 0; d < o; d++) {
    const y = (d / o) * ne;
    i.push(
      new Pt(u, u * 1.2, s - e, 5).translate(0, e + (s - e) / 2, 0).rotateZ(y),
    );
  }
  return { rim: a, hub: p, spokes: i };
}
