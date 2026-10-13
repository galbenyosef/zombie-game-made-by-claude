// assets__index-Db-AsSxU 15 — assets__index-db-assxu
// Lines 6216-6229 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
const Ne = (e) => (e > 0 ? "L" : "R"),
  Qt = 15;
function Xt(e) {
  return (o, n) => {
    let c = 0;
    for (; c < e.length - 2 && o < e[c + 1][0];) c++;
    const t = e[c],
      s = e[c + 1],
      i = I0((o - t[0]) / (s[0] - t[0])),
      r = i * i * (3 - 2 * i);
    for (let l = 1; l < t.length; l++) n[l - 1] = t[l] + (s[l] - t[l]) * r;
    return n;
  };
}
