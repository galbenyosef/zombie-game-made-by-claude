// assets__script2-Chjgntzz 12 — math
// Lines 3379-3387 of readable/assets__script2-Chjgntzz.pretty.js (statement-aligned).
const Y = O0,
  v0 = Math.PI / 180,
  M0 = (p = 0, e = 1) => p + Math.random() * (e - p),
  Lt = (p, e) => {
    let o = e - p;
    for (; o > Math.PI;) o -= 2 * Math.PI;
    for (; o < -Math.PI;) o += 2 * Math.PI;
    return o;
  };
