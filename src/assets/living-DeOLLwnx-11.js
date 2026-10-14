// assets/living-DeOLLwnx 11 — fillrect
// Lines 3186-3337 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
const e0 = Math.PI,
  g0 = { north: 13.6, south: 20.4, west: 0, east: 12.2 },
  Xt = [
    ["#5a1a1c", "#c9a24e"],
    ["#1f3a2c", "#c9a24e"],
    ["#1c2438", "#b8b0a0"],
    ["#4a3020", "#c9a24e"],
    ["#161412", "#a08040"],
    ["#6e2a22", "#161412"],
    ["#3e4228", "#c9a24e"],
    ["#6a4a2a", "#2a1a10"],
    ["#50504a", "#161412"],
    ["#b8ab88", "#5a1a1c"],
  ];
let Q0 = null;
function Rt() {
  if (Q0) return Q0;
  const a = Y0(640, 256, (t, r, e) => {
    (Xt.forEach(([o, s], n) => {
      const l = n * 64;
      ((t.fillStyle = o), t.fillRect(l, 0, 64, 240));
      const p = t.createLinearGradient(l, 0, l + 64, 0);
      if (
        (p.addColorStop(0, "rgba(0,0,0,0.35)"),
        p.addColorStop(0.25, "rgba(255,255,255,0.06)"),
        p.addColorStop(0.7, "rgba(0,0,0,0)"),
        p.addColorStop(1, "rgba(0,0,0,0.35)"),
        (t.fillStyle = p),
        t.fillRect(l, 0, 64, 240),
        (t.fillStyle = s),
        n % 3 !== 2)
      ) {
        for (const d of [16, 24, 212, 220]) t.fillRect(l + 5, d, 54, 3);
        (t.fillRect(l + 12, 70, 40, 4),
          t.fillRect(l + 16, 82, 32, 3),
          t.fillRect(l + 18, 92, 28, 3));
      } else
        (t.fillRect(l + 8, 40, 48, 30),
          (t.fillStyle = o),
          t.fillRect(l + 12, 48, 40, 3),
          t.fillRect(l + 14, 56, 36, 3));
      t.fillStyle = "rgba(220,200,160,0.10)";
      for (let d = 0; d < 60; d++)
        t.fillRect(l + ((d * 37) % 64), (d * 53) % 240, 2, 1);
    }),
      (t.fillStyle = "#cfc4a6"),
      t.fillRect(0, 240, r, 16),
      (t.fillStyle = "rgba(90,70,40,0.25)"));
    for (let o = 0; o < r; o += 3) t.fillRect(o, 240, 1, 16);
  });
  return ((Q0 = new C0({ map: a, roughness: 0.75 })), (Q0.name = "books"), Q0);
}
function B0(a, t, r, e) {
  const o = new X0(a, t, r).toNonIndexed(),
    s = o.attributes.uv,
    n = ((e % Xt.length) * 64) / 640,
    l = 64 / 640,
    p = (d) =>
      d === 4
        ? [n + 0.004, 16 / 256, n + l - 0.004, 1]
        : d === 0 || d === 1
          ? [n + l * 0.4, 0.4, n + l * 0.6, 0.45]
          : [0.1, 0.005, 0.9, 12 / 256];
  for (let d = 0; d < 6; d++) {
    const [c, u, b, k] = p(d);
    for (let S = 0; S < 6; S++) {
      const h = d * 6 + S;
      s.setXY(h, c + s.getX(h) * (b - c), u + s.getY(h) * (k - u));
    }
  }
  return o;
}
function At(a, t, r, e, o, s, n = {}) {
  const l = [];
  let p = t + 0.01;
  const d = n.gap ? t + (r - t) * (0.3 + a() * 0.4) : -1;
  for (; p < r - 0.03;) {
    if (d > 0 && Math.abs(p - d) < 0.12) {
      p += 0.24;
      continue;
    }
    const c = 0.022 + a() * 0.03,
      u = (n.hMin ?? 0.2) + a() * (n.hVar ?? 0.1),
      b = o * (0.72 + a() * 0.22),
      k = (a() * 10) | 0;
    if (p + c > r - 0.005) break;
    const S = B0(c, u, b, k);
    if (a() < 0.06 && p < r - 0.2) {
      (S.rotateZ(e0 / 2),
        S.translate(p + u / 2, e + c / 2, s - b / 2),
        l.push(S),
        (p += u + 0.01));
      continue;
    }
    const h = a() < 0.08 ? 0.12 : 0;
    (S.translate(0, u / 2, 0),
      h && S.rotateZ(-h),
      S.translate(
        p + c / 2 + (h ? u * Math.sin(h) * 0.5 : 0),
        e,
        s - b / 2 - a() * 0.02,
      ),
      l.push(S),
      (p += c + 0.001 + (h ? u * 0.12 : 0)));
  }
  return l;
}
function It(a, t, r = 0.9, e = 2.05, o = 0.34, s = {}) {
  const n = "wood_walnut",
    l = s.shelves ?? [0.1, 0.5, 0.88, 1.24, 1.6];
  for (const p of [-1, 1])
    a.part(
      _(0.026, e - 0.06, o, { r: 0.004 }).translate(
        p * (r / 2 - 0.013),
        (e - 0.06) / 2,
        0,
      ),
      n,
      { grain: "y" },
    );
  (a.part(
    _(r + 0.06, 0.035, o + 0.04, { r: 0.008 }).translate(0, e - 0.0175, 0.01),
    n,
    { grain: "x" },
  ),
    a.part(
      _(r + 0.02, 0.05, o + 0.015, { r: 0.006 }).translate(0, e - 0.06, 0.004),
      n,
      { grain: "x" },
    ),
    a.part(
      _(r - 0.03, 0.08, 0.02, { r: 0.004 }).translate(0, 0.04, o / 2 - 0.015),
      n,
      { grain: "x" },
    ),
    a.part(
      _(r - 0.04, e - 0.1, 0.01, { r: 0.002 }).translate(
        0,
        (e - 0.1) / 2 + 0.04,
        -o / 2 + 0.008,
      ),
      n,
      { grain: "y", cast: !1 },
    ));
  for (const p of l)
    a.part(
      _(r - 0.05, 0.022, o - 0.03, { r: 0.004 }).translate(0, p, 0.004),
      n,
      { grain: "x" },
    );
  return l;
}
