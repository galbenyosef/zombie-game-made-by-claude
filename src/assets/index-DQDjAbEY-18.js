// assets/index-DQDjAbEY 18 — beginpath
// Lines 5241-5388 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function on() {
  if (ht) return ht;
  const e = document.createElement("canvas");
  ((e.width = ce), (e.height = ye));
  const l = e.getContext("2d");
  (l.clearRect(0, 0, ce, ye),
    an(l),
    (l.fillStyle = "#ffffff"),
    (l.textAlign = "center"),
    (l.textBaseline = "middle"),
    (l.font = 'bold 84px "Consolas", "Courier New", monospace'),
    "0123456789-. "
      .split("")
      .forEach((n, c) =>
        l.fillText(n, te.x + c * te.w + te.w / 2, te.y + te.h / 2 + 4),
      ));
  const a = Ze;
  let o = 1024,
    t = 110;
  ((l.font = "bold 40px Arial, sans-serif"),
    (l.textAlign = "left"),
    (l.textBaseline = "middle"));
  for (const n of a) {
    const c = Math.ceil(l.measureText(n).width) + 12;
    (o + c > ce - 4 && ((o = 1024), (t += 52)),
      l.fillText(n, o + 6, t + 26),
      (no[n] = [o / ce, 1 - (t + 50) / ye, (o + c) / ce, 1 - t / ye]),
      (o += c + 4));
  }
  const s = new Yt(e);
  return (
    (s.colorSpace = Jt),
    (s.anisotropy = 4),
    (s.generateMipmaps = !0),
    (s.minFilter = Xt),
    (s.flipY = !0),
    (ht = s),
    s
  );
}
const oe = { cx: 900, cz: 0, half: 1100 };
function an(e) {
  const a = 1024 / (oe.half * 2),
    o = (i) => (i - (oe.cx - oe.half)) * a,
    t = (i) => (i - (oe.cz - oe.half)) * a;
  ((e.fillStyle = "#060a12"), e.fillRect(0, 0, 1024, 1024));
  let s = 7;
  const n = () => ((s = (s * 16807) % 2147483647), s / 2147483647);
  ((e.strokeStyle = "#1c2533"), (e.lineWidth = 2));
  for (let i = -20; i <= 60; i++)
    (e.beginPath(),
      e.moveTo(o(-300 + i * 60), 0),
      e.lineTo(o(-300 + i * 60 + 140), 1024),
      e.stroke(),
      e.beginPath(),
      e.moveTo(0, t(-1200 + i * 55)),
      e.lineTo(1024, t(-1200 + i * 55 - 60)),
      e.stroke());
  ((e.strokeStyle = "#4a4434"), (e.lineWidth = 5));
  for (const i of [
    [-300, -1100, 2100, 1300],
    [200, -1100, 900, 1200],
    [-300, 400, 2100, 250],
    [1300, -1100, 1500, 1200],
  ])
    (e.beginPath(),
      e.moveTo(o(i[0]), t(i[1])),
      e.lineTo(o(i[2]), t(i[3])),
      e.stroke());
  ((e.strokeStyle = "#123050"),
    (e.lineWidth = 30),
    (e.lineCap = "round"),
    e.beginPath(),
    e.moveTo(o(-200), t(-900)),
    e.bezierCurveTo(o(500), t(-500), o(700), t(-320), o(1200), t(-420)),
    e.bezierCurveTo(o(1600), t(-500), o(1800), t(-250), o(2100), t(-300)),
    e.stroke(),
    (e.strokeStyle = "#3a3c44"),
    (e.lineWidth = 6));
  for (const i of [
    [640, -470, 610, -330],
    [1150, -480, 1160, -350],
    [1700, -420, 1690, -290],
  ])
    (e.beginPath(),
      e.moveTo(o(i[0]), t(i[1])),
      e.lineTo(o(i[2]), t(i[3])),
      e.stroke());
  ((e.fillStyle = "#0f2a17"),
    e.fillRect(o(350), t(30), 180 * a, 175 * a),
    (e.strokeStyle = "#2e6b3e"),
    (e.lineWidth = 2),
    e.strokeRect(o(350), t(30), 180 * a, 175 * a));
  for (let i = 0; i < 260; i++) {
    const d = -280 + n() * 2350,
      f = -1050 + n() * 2150;
    if (d > 330 && d < 550 && f > 10 && f < 225) continue;
    const p = 14 + n() * 40,
      m = 14 + n() * 40;
    ((e.fillStyle = n() < 0.12 ? "#3a1a0c" : "#111a26"),
      e.fillRect(o(d), t(f), p * a, m * a));
  }
  ((e.strokeStyle = "#7a5aa8"),
    (e.lineWidth = 4),
    e.setLineDash([10, 6]),
    e.beginPath(),
    e.moveTo(o(-150), t(380)),
    e.lineTo(o(6), t(219)),
    e.lineTo(o(452), t(219)),
    e.lineTo(o(1e3), t(600)),
    e.stroke(),
    e.setLineDash([]));
  const c = (i, d, f) => {
    ((e.fillStyle = "#c8b8e8"),
      e.beginPath(),
      e.arc(o(i), t(d), 6, 0, 7),
      e.fill(),
      (e.font = "bold 15px Arial"),
      (e.fillStyle = "#b8a8d8"),
      (e.textAlign = "left"),
      e.fillText(f, o(i) + 9, t(d) + 5));
  };
  (c(10, 219, "ASHWOOD"),
    c(420, 222, "PARKGATE"),
    c(-140, 372, "MILLBANK"),
    c(980, 588, "ST. AGNES"),
    (e.strokeStyle = "#38c0e0"),
    (e.lineWidth = 3),
    e.beginPath(),
    e.arc(o(1520), t(-760), 11, 0, 7),
    e.stroke(),
    (e.font = "bold 16px Arial"),
    (e.fillStyle = "#38c0e0"),
    (e.textAlign = "center"),
    e.fillText("H", o(1520), t(-760) + 6),
    e.fillText("ST. AGNES HOSP", o(1520), t(-760) - 18),
    (e.fillStyle = "#e0a020"),
    e.fillRect(o(452) - 4, t(92) - 4, 8, 8),
    (e.font = "bold 13px Arial"),
    e.fillText("EVAC PT", o(452), t(92) - 10),
    (e.strokeStyle = "#d040c0"),
    (e.lineWidth = 3),
    e.beginPath(),
    e.moveTo(o(452), t(92)),
    e.lineTo(o(900), t(-300)),
    e.lineTo(o(1520), t(-760)),
    e.stroke());
}
