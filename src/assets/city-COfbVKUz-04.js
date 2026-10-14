// assets/city-COfbVKUz 04 — math
// Lines 991-1043 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function Ae(m, e = 24) {
  const d = new Map(),
    n = (h, c) => h * 100003 + c;
  for (const h of m) {
    const c = n(Math.floor(h.x / e), Math.floor(h.z / e));
    (d.get(c) || d.set(c, []).get(c)).push(h);
  }
  return {
    lowest(h, c, w, s, x) {
      let k = 1 / 0;
      const P = Math.floor((h - x) / e),
        _ = Math.floor((c + x) / e),
        g = Math.floor((w - x) / e),
        M = Math.floor((s + x) / e);
      for (let N = P; N <= _; N++)
        for (let T = g; T <= M; T++) {
          const S = d.get(n(N, T));
          if (S)
            for (const v of S) {
              const a = Math.max(h - v.x, 0, v.x - c),
                r = Math.max(w - v.z, 0, v.z - s);
              a * a + r * r < x * x && v.y < k && (k = v.y);
            }
        }
      return k;
    },
    dist(h, c, w, s, x = 200) {
      let k = x;
      const P = Math.floor((h - x) / e),
        _ = Math.floor((c + x) / e),
        g = Math.floor((w - x) / e),
        M = Math.floor((s + x) / e);
      for (let N = P; N <= _; N++)
        for (let T = g; T <= M; T++) {
          const S = d.get(n(N, T));
          if (S)
            for (const v of S) {
              const a = Math.max(h - v.x, 0, v.x - c),
                r = Math.max(w - v.z, 0, v.z - s),
                y = Math.sqrt(a * a + r * r);
              y < k && (k = y);
            }
        }
      return k;
    },
  };
}
function _e(m, e) {
  const d = Math.exp(-(((m - 900) / 520) ** 2 + ((e + 260) / 300) ** 2)),
    n = Math.exp(-(((m - 1900) / 450) ** 2 + ((e + 150) / 380) ** 2)) * 0.75,
    h = Math.exp(-(((m - 700) / 380) ** 2 + ((e - 480) / 260) ** 2)) * 0.45;
  return Math.max(d, n, h);
}
