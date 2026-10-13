// assets__metro-xgLUk92P 05 — fillstyle
// Lines 1244-1357 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function Tt(c, a, o, s, f, h, d = !0) {
  ((c.fillStyle = f), c.fillRect(0, 0, a, o));
  const l = Math.min(a, o) * 0.07;
  if (
    ((c.strokeStyle = h),
    (c.lineWidth = Math.max(2, l * 0.28)),
    c.strokeRect(l, l, a - 2 * l, o - 2 * l),
    d)
  )
    for (const [i, t] of [
      [l * 0.5, o / 2],
      [a - l * 0.5, o / 2],
    ])
      ((c.fillStyle = "#1a1714"),
        c.beginPath(),
        c.arc(i, t, l * 0.55, 0, Math.PI * 2),
        c.fill(),
        (c.fillStyle = "#5a4f44"),
        c.beginPath(),
        c.arc(i, t, l * 0.22, 0, Math.PI * 2),
        c.fill());
  for (let i = 0; i < 9; i++) {
    const t = Math.floor(s() * 4),
      e = s(),
      n = 2 + s() * l * 0.5,
      r = t === 0 ? e * a : t === 1 ? a : t === 2 ? e * a : 0,
      u = t === 0 ? 0 : t === 1 ? e * o : t === 2 ? o : e * o;
    ((c.fillStyle = "#16130f"),
      c.beginPath(),
      c.ellipse(r, u, n * 1.6, n, s() * 3, 0, Math.PI * 2),
      c.fill(),
      (c.fillStyle = "rgba(110,60,30,0.6)"),
      c.beginPath(),
      c.ellipse(r, u, n * 2.2, n * 1.3, s() * 3, 0, Math.PI * 2),
      c.fill());
  }
}
function J(
  c,
  a,
  o,
  s,
  f,
  {
    font: h = nt,
    weight: d = "bold",
    color: l = "#fff",
    align: i = "center",
    base: t = "middle",
    spacing: e = 0,
    maxW: n = 0,
  } = {},
) {
  if (
    ((c.font = `${d} ${f}px ${h}`),
    (c.fillStyle = l),
    (c.textAlign = i),
    (c.textBaseline = t),
    "letterSpacing" in c && (c.letterSpacing = e + "px"),
    n)
  ) {
    const r = c.measureText(a).width;
    if (r > n) {
      (c.save(),
        c.translate(o, s),
        c.scale(n / r, 1),
        c.fillText(a, 0, 0),
        c.restore(),
        "letterSpacing" in c && (c.letterSpacing = "0px"));
      return;
    }
  }
  (c.fillText(a, o, s), "letterSpacing" in c && (c.letterSpacing = "0px"));
}
function Wt(c, a, o, s, f, h, d = {}) {
  a.forEach((l, i) =>
    J(c, l, o, s + i * h, f, {
      align: "left",
      base: "top",
      weight: d.weight || "normal",
      font: d.font || ft,
      color: d.color || "#222",
      maxW: d.maxW || 0,
    }),
  );
}
function se(c, a, o, s, f = 0, h = "#fff") {
  (c.save(),
    c.translate(a, o),
    c.rotate(f),
    (c.fillStyle = h),
    c.beginPath(),
    c.moveTo(s * 0.5, 0),
    c.lineTo(0, -s * 0.42),
    c.lineTo(0, -s * 0.16),
    c.lineTo(-s * 0.5, -s * 0.16),
    c.lineTo(-s * 0.5, s * 0.16),
    c.lineTo(0, s * 0.16),
    c.lineTo(0, s * 0.42),
    c.closePath(),
    c.fill(),
    c.restore());
}
function vt(c, a, o, s) {
  ((c.fillStyle = "#e8dcc0"),
    c.beginPath(),
    c.arc(a, o, s, 0, Math.PI * 2),
    c.fill(),
    (c.fillStyle = "#6b1d1a"),
    c.beginPath(),
    c.arc(a, o, s * 0.86, 0, Math.PI * 2),
    c.fill(),
    J(c, "4", a, o + s * 0.06, s * 1.25, { font: R0, color: "#efe4c8" }));
}
