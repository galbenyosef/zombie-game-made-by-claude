// assets/lab-Cas1v10u 03 — fillrect
// Lines 653-701 of readable/assets/lab-Cas1v10u.pretty.js (statement-aligned).
function Oe() {
  const p = document.createElement("canvas"),
    j = document.createElement("canvas");
  p.width = p.height = j.width = j.height = 512;
  const v = p.getContext("2d"),
    g = j.getContext("2d");
  ((v.fillStyle = "#6c6962"),
    v.fillRect(0, 0, 512, 512),
    (g.fillStyle = "#000"),
    g.fillRect(0, 0, 512, 512));
  let P = 3;
  const h = () => ((P = (P * 16807) % 2147483647), P / 2147483647),
    s = 8,
    r = 6,
    E = 512 / s,
    z = 512 / r;
  for (let G = 0; G < s; G++)
    for (let Y = 0; Y < r; Y++) {
      const _ = Y * z + z * 0.14,
        M = G * E + E * 0.22,
        I = z * 0.72,
        b = E * 0.56;
      ((v.fillStyle = "#121519"),
        v.fillRect(_, M, I, b),
        (v.fillStyle = "rgba(120,140,170,0.18)"),
        v.fillRect(_, M, I, b * 0.3));
      const X = h();
      if (X < 0.07)
        ((g.fillStyle = "#c87830"),
          g.fillRect(_, M, I, b),
          (v.fillStyle = "#5a3a20"),
          v.fillRect(_, M, I, b));
      else if (X < 0.1) {
        const w = g.createLinearGradient(0, M + b, 0, M);
        (w.addColorStop(0, "#ff7a20"),
          w.addColorStop(1, "#a02008"),
          (g.fillStyle = w),
          g.fillRect(_, M, I, b));
      }
    }
  const C = new q(p);
  ((C.colorSpace = $), (C.wrapS = C.wrapT = ce), (C.anisotropy = 8));
  const k = new q(j);
  return (
    (k.colorSpace = $),
    (k.wrapS = k.wrapT = ce),
    { map: C, emissive: k }
  );
}
