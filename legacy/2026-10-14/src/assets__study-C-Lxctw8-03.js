// assets__study-C-Lxctw8 03 — add
// Lines 1167-1176 of readable/assets__study-C-Lxctw8.pretty.js (statement-aligned).
function O0(I, L, u, c, b, e, a, n, t) {
  const h = new f0(0.011, 8, 6);
  h.scale(1, 1, 0.55);
  for (let s = 0; s < t; s++)
    for (let M = 0; M < n + (s % 2 ? -1 : 0); M++) {
      const k = u + ((M + (s % 2 ? 1 : 0.5)) / n) * (c - u),
        P = b + ((s + 0.5) / t) * (e - b);
      I.add(h, L, { m: d([k, P, a]), uv: "keep", shadow: !1 });
    }
}
