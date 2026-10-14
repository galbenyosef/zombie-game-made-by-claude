// assets/index-BcIwWgby 32 — imul
// Lines 10108-10144 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
const ua = 0.16,
  Kr = 420,
  rs = 4,
  k0 = Kr + rs,
  Ur = 9.81;
function fa(s) {
  return () => {
    ((s |= 0), (s = (s + 1831565813) | 0));
    let o = Math.imul(s ^ (s >>> 15), 1 | s);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Er() {
  const s = [-0.03, 0, -0.012],
    o = [0.032, 0, -0.005],
    t = [0.006, 0, 0.027],
    u = [-0.009, 0, 0.013],
    e = [
      [s, t, o, 1],
      [s, u, t, 1],
      [s, o, t, -1],
      [s, t, u, -1],
    ],
    r = [],
    a = [];
  for (const [i, d, y, w] of e)
    for (const g of [i, d, y]) (r.push(g[0], g[1], g[2]), a.push(0, w, 0));
  const p = new Rt();
  return (
    p.setAttribute("position", new xt(r, 3)),
    p.setAttribute("normal", new xt(a, 3)),
    p
  );
}
