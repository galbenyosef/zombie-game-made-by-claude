// assets__metro-xgLUk92P 18 — math
// Lines 6346-6354 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function ce(c, a) {
  const o = c.pts.length - 1,
    s = Math.max(0, Math.min(o, (a / c.length) * o)),
    f = Math.floor(s),
    h = s - f,
    d = c.pts[f],
    l = c.pts[Math.min(o, f + 1)];
  return d[0] + (l[0] - d[0]) * h;
}
