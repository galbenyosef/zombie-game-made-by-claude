// assets/akane-CN21eJhw 07 — math
// Lines 2298-2495 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
const ce = 28.5,
  ue = -5.5,
  H0 = 1.15;
function Ze(e, t, a, o, r = 0, i = null, n = null) {
  const s = [],
    u = (y) => {
      const k = y.canvas.width,
        G = k / (U0[2] * Ye);
      (y.setTransform(1, 0, 0, 1, 0, 0),
        n || y.clearRect(0, 0, k, k),
        y.setTransform(G, 0, 0, -G, -U0[0] * Ye * G, (U0[1] + U0[3]) * Ye * G),
        n &&
          (y.save(),
          y.beginPath(),
          y.rect(n[0], n[1], n[2] - n[0], n[3] - n[1]),
          y.clip(),
          y.clearRect(n[0], n[1], n[2] - n[0], n[3] - n[1]),
          s.push(y)));
    };
  (u(e),
    a && u(a),
    i && (u(i), (i.fillStyle = "#000"), i.fillRect(-100, -130, 200, 200)));
  const l = Z(o.anger),
    v = Z(o.sad),
    g = Z(o.blush + v * 0.15 + Z(o.tears) * 0.2 + l * 0.15);
  for (const y of [-1, 1]) {
    const k = y * 31,
      G = -25,
      d = e.createRadialGradient(k, G, 0, k, G, 15);
    if (
      (d.addColorStop(0, `rgba(232,138,154,${0.7 * g})`),
      d.addColorStop(0.6, `rgba(232,138,154,${0.32 * g})`),
      d.addColorStop(1, "rgba(232,138,154,0)"),
      (e.fillStyle = d),
      e.save(),
      e.translate(k, G),
      e.scale(1, 0.55),
      e.translate(-k, -G),
      e.beginPath(),
      e.arc(k, G, 15, 0, Math.PI * 2),
      e.fill(),
      e.restore(),
      g > 0.35)
    ) {
      e.fillStyle = `rgba(217,96,122,${Z((g - 0.35) * 1.6) * 0.8})`;
      for (let w = 0; w < 3; w++) {
        const f = k + y * (w - 1) * 3.4 - 1.2,
          C = G + 0.5;
        y0(
          e,
          [
            [f + 1.2, C + 2.2],
            [f - 1.2, C - 2.2],
          ],
          (x) => Math.sin(x * Math.PI) * 0.8 + 0.1,
        );
      }
    }
  }
  if (l > 0.02) {
    const y = e.createLinearGradient(0, 60, 0, -4);
    (y.addColorStop(0, "rgba(30,12,30,0)"),
      y.addColorStop(0.3, `rgba(30,12,30,${0.5 * l})`),
      y.addColorStop(0.7, `rgba(30,12,30,${0.36 * l})`),
      y.addColorStop(1, "rgba(30,12,30,0)"),
      (e.fillStyle = y),
      e.fillRect(-70, -4, 140, 80),
      (e.fillStyle = `rgba(150,70,110,${0.55 * l})`));
    for (const k of [-1, 1])
      y0(
        e,
        C0(
          [k * 21, -19.5],
          [k * 25, -20.5],
          [k * 30, -20.8],
          [k * 35, -19.6],
          10,
        ),
        (G) => Math.sin(G * Math.PI) * 0.7,
      );
  }
  if (v > 0.3) {
    e.fillStyle = `rgba(160,120,170,${(v - 0.3) * 0.5})`;
    for (const y of [-1, 1])
      y0(
        e,
        C0([y * 6, 20], [y * 7.5, 22], [y * 8.5, 23.5], [y * 9, 26], 8),
        (k) => Math.sin(k * Math.PI) * 0.6,
      );
  }
  ((e.fillStyle = k0.nose),
    y0(
      e,
      C0([1.8, -31.2], [2.4, -32], [1.8, -32.8], [0.6, -33.1], 10),
      (y) => Math.sin(y * Math.PI) * 0.9,
    ));
  const m = e.createRadialGradient(0, -30.5, 0, 0, -30.5, 3.5);
  (m.addColorStop(0, `rgba(232,138,154,${0.45 * Z(g + 0.2)})`),
    m.addColorStop(1, "rgba(232,138,154,0)"),
    (e.fillStyle = m),
    e.beginPath(),
    e.arc(0, -30.5, 3.5, 0, Math.PI * 2),
    e.fill());
  for (const y of [-1, 1])
    (vt(e, o, y, y * ce, ue, r, !1, i),
      wt(e, o, y, y * ce, ue),
      a && (vt(a, o, y, y * ce, ue, r, !0), wt(a, o, y, y * ce, ue)));
  if (l > 0.02) {
    const y = e.createLinearGradient(0, 30, 0, -6);
    (y.addColorStop(0, "rgba(30,12,30,0)"),
      y.addColorStop(0.55, `rgba(30,12,30,${0.3 * l})`),
      y.addColorStop(1, "rgba(30,12,30,0)"),
      (e.fillStyle = y),
      e.fillRect(-60, -6, 120, 36));
  }
  if (l > 0.4) {
    e.fillStyle = `rgba(150,70,110,${(l - 0.4) * 0.9})`;
    for (const y of [-1, 1])
      y0(
        e,
        C0([y * 4.5, 13], [y * 5.5, 15.5], [y * 6.5, 17.5], [y * 8, 19.5], 8),
        (k) => Math.sin(k * Math.PI) * 0.75,
      );
  }
  (yo(e, o), Mo(e, o), So(e, Z(o.wounds ?? 0)));
  for (const y of s) y.restore();
}
function So(e, t) {
  if (!(t > 0.01)) return;
  (e.save(), (e.lineCap = "round"));
  const a = e.createRadialGradient(-27, -13, 0, -27, -13, 11);
  (a.addColorStop(0, `rgba(58,40,34,${0.3 * t})`),
    a.addColorStop(1, "rgba(58,40,34,0)"),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(-27, -13, 11, 0, Math.PI * 2),
    e.fill());
  const o = (i, n, s, u, l, v) => {
    ((e.strokeStyle = `rgba(118,20,30,${v})`),
      (e.lineWidth = l),
      e.beginPath(),
      e.moveTo(i, n),
      e.quadraticCurveTo((i + s) / 2 + 1.3, (n + u) / 2 + 0.7, s, u),
      e.stroke());
  };
  (o(-34, -17, -24, -27.5, 0.62, 0.92 * t),
    o(-32.6, -15.2, -24.8, -25.2, 0.38, 0.62 * t),
    o(-31, -19.4, -25.5, -28.2, 0.3, 0.5 * t),
    (e.strokeStyle = `rgba(230,120,120,${0.35 * t})`),
    (e.lineWidth = 0.9),
    e.beginPath(),
    e.moveTo(-34.6, -17.4),
    e.quadraticCurveTo(-29, -23, -24.6, -28.2),
    e.stroke(),
    e.translate(30.5, -26.5),
    e.rotate(-0.38));
  const r = (i, n, s, u, l) => {
    (e.beginPath(),
      e.moveTo(i + l, n),
      e.arcTo(i + s, n, i + s, n + u, l),
      e.arcTo(i + s, n + u, i, n + u, l),
      e.arcTo(i, n + u, i, n, l),
      e.arcTo(i, n, i + s, n, l),
      e.closePath());
  };
  ((e.fillStyle = `rgba(205,166,128,${0.96 * t})`),
    r(-8.4, -2.7, 16.8, 5.4, 1.5),
    e.fill(),
    (e.fillStyle = `rgba(232,208,178,${0.95 * t})`),
    e.fillRect(-2.7, -2.7, 5.4, 5.4),
    (e.fillStyle = `rgba(140,98,70,${0.55 * t})`));
  for (let i = 0; i < 6; i++)
    for (const n of [-1, 1])
      (e.beginPath(),
        e.arc(
          n * (4.4 + (i % 3) * 1.3),
          -1.4 + Math.floor(i / 3) * 2.8,
          0.28,
          0,
          Math.PI * 2,
        ),
        e.fill());
  e.restore();
}
const xo = [0, 0.012, -0.004];
function R0(e, t, a) {
  const o = N0(e, t, a, 0, 0.024, -0.008, 0.0705, 0.087, 0.086),
    r = N0(e, t, a, 0, -0.032, 0.004, 0.061, 0.056, 0.068);
  let i = S0(o, r, 0.02);
  const n = Math.abs(e);
  return (
    (i = B0(i, (n - 0.019 - (t + 0.0805) * 0.86) * 0.758, 0.022)),
    (i = B0(i, (-(t + 0.0825) + (0.028 - a) * 0.62) * 0.85, 0.016)),
    (i = B0(i, a - 0.0745, 0.035)),
    (i = S0(i, N0(e, t, a, 0, -0.029, 0.0655, 0.0042, 0.0095, 0.006), 0.009)),
    i
  );
}
