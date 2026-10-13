// assets__index-TPd_HXBJ 07 — fillstyle
// Lines 1966-2310 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function xn(t, e, o, n, a, l) {
  (_0(t, e, o, n, a),
    t.save(),
    t.translate(e + n * 0.5, o + a * 0.36),
    t.rotate(-0.12));
  const r = (d, i, s, m, v, y = 0) => {
    ((t.fillStyle = He(v)),
      t.beginPath(),
      t.ellipse(d, i, s, m, y, 0, 7),
      t.fill());
  };
  for (let d = 0; d < 14; d++)
    r(
      (l() - 0.5) * 70,
      18 + (l() - 0.5) * 60,
      22 + l() * 30,
      18 + l() * 30,
      0.16 + l() * 0.2,
      l() * 3,
    );
  r(-6, 26, 54, 48, 0.42);
  const p = [
    [-62, -38, -0.5],
    [-30, -74, -0.16],
    [4, -84, 0.02],
    [36, -74, 0.18],
    [66, -22, 0.7],
  ];
  for (const [d, i, s] of p) {
    r(d, i, 13, 20, 0.5, s);
    for (let m = 0; m < 9; m++) {
      const v = m / 8;
      r(
        d + Math.sin(s) * 8 * v + (l() - 0.5) * 3,
        i + 18 + v * 70,
        10 - v * 5,
        12,
        0.22 * (1 - v) + 0.05,
        0,
      );
    }
  }
  for (let d = 0; d < 7; d++)
    ((t.fillStyle = He(0.18 + l() * 0.2)),
      t.fillRect(-48 + d * 14 + l() * 6, 64, 5 + l() * 4, 70 + l() * 110));
  t.restore();
  const f = t.getImageData(e, o, n, a),
    c = f.data;
  for (let d = 0; d < c.length; d += 4)
    if (c[d + 3] > 0) {
      const i = l();
      ((c[d + 3] = Math.max(
        0,
        c[d + 3] * (0.75 + 0.25 * i) - (i < 0.1 ? 60 : 0),
      )),
        (c[d] = 64 + ((i * 16) | 0)),
        (c[d + 1] = 6),
        (c[d + 2] = 5));
    }
  t.putImageData(f, e, o);
}
function Vn(t, e, o, n, a, l) {
  _0(t, e, o, n, a);
  const r = e + n / 2,
    p = o + a / 2;
  for (let f = 0; f < 26; f++) {
    const c = l() * 7,
      d = l() * 110,
      i = 36 + l() * 80,
      s = 28 + l() * 60;
    ((t.fillStyle = `rgba(48,6,4,${0.45 + l() * 0.3})`),
      t.beginPath(),
      t.ellipse(
        r + Math.cos(c) * d,
        p + Math.sin(c) * d * 0.7,
        i,
        s,
        l() * 3,
        0,
        7,
      ),
      t.fill());
  }
  ((t.fillStyle = "rgba(38,3,3,0.96)"),
    t.beginPath(),
    t.ellipse(r, p, 150, 100, 0.2, 0, 7),
    t.fill(),
    (t.fillStyle = "rgba(30,2,2,0.98)"),
    t.beginPath(),
    t.ellipse(r + 10, p - 5, 110, 70, 0.3, 0, 7),
    t.fill());
  for (let f = 0; f < 46; f++) {
    const c = l() * 7,
      d = 165 + l() * 70;
    ((t.fillStyle = `rgba(50,6,4,${0.6 + l() * 0.35})`),
      t.beginPath(),
      t.arc(r + Math.cos(c) * d, p + Math.sin(c) * d * 0.72, 2 + l() * 7, 0, 7),
      t.fill());
  }
}
function $n(t, e, o, n, a, l) {
  _0(t, e, o, n, a);
  for (let r = 0; r < 70; r++) {
    const p = r / 70,
      f = o + a / 2 + Math.sin(p * 3) * 20,
      c = 90 * (1 - p * 0.65);
    ((t.fillStyle = `rgba(52,6,4,${0.3 + 0.35 * (1 - p)})`),
      t.fillRect(e + 20 + p * (n - 60), f - c / 2, 12, c));
  }
  for (let r = 0; r < 34; r++) {
    const p = o + a / 2 + (l() - 0.5) * 76;
    ((t.fillStyle = `rgba(40,4,3,${0.35 + l() * 0.35})`),
      t.fillRect(e + 20, p, n * (0.35 + l() * 0.55), 2 + l() * 3));
  }
  ((t.fillStyle = "rgba(38,3,3,0.95)"),
    t.beginPath(),
    t.ellipse(e + 62, o + a / 2, 58, 74, 0, 0, 7),
    t.fill());
}
function qn(t, e, o, n, a) {
  (J(t, e, o, n, a, "#2a2c2e"),
    (t.fillStyle = "#1e2022"),
    t.fillRect(e + 8, o + 8, n - 16, a - 16));
  const l = [],
    r = (c, d, i, s, m, v) => {
      ((t.fillStyle = "#111"),
        t.beginPath(),
        t.arc(c, d, i + 4, 0, 7),
        t.fill(),
        (t.fillStyle = m ? s : "#3a3a3a"),
        t.beginPath(),
        t.arc(c, d, i, 0, 7),
        t.fill(),
        m && l.push([c, d, i]),
        v &&
          ((t.fillStyle = "#b8b8b0"),
          (t.font = `bold 11px ${x}`),
          (t.textAlign = "center"),
          t.fillText(v, c, d + i + 16)));
    };
  (r(e + 60, o + 70, 16, "#3cff6a", !0, "ATO"),
    r(e + 120, o + 70, 16, "#ffb020", !1, "MAN"),
    r(e + 60, o + 170, 18, "#ffb020", !1, "DOORS L"),
    r(e + 130, o + 170, 18, "#ffb020", !1, "DOORS R"),
    r(e + 200, o + 70, 14, "#e82020", !0, "FAULT"),
    r(e + 250, o + 70, 14, "#3cff6a", !0, "PWR"),
    r(e + 940, o + 70, 22, "#e82020", !1, "EMERG"),
    r(e + 880, o + 170, 14, "#e8e8e0", !0, "HL"),
    r(e + 930, o + 170, 14, "#3c8cff", !1, "CAB"));
  const p = (c, d, i, s) => {
    ((t.fillStyle = "#020403"),
      t.fillRect(c, d, i, s),
      l.push(["r", c, d, i, s]));
  };
  (p(e + 320, o + 40, 280, 170),
    (t.fillStyle = "#3cff6a"),
    (t.font = 'bold 20px "Courier New", monospace'),
    (t.textAlign = "left"),
    [
      "ATO   AUTO",
      "LINE 4  -> PARKGATE",
      "SPD   0 km/h",
      "DOORS CLOSED",
      "NO DRIVER",
    ].forEach((c, d) => t.fillText(c, e + 336, o + 72 + d * 30)),
    p(e + 630, o + 40, 200, 170));
  const f = t.createLinearGradient(0, o + 40, 0, o + 210);
  (f.addColorStop(0, "#1a1e1c"),
    f.addColorStop(1, "#3a403c"),
    (t.fillStyle = f),
    t.fillRect(e + 634, o + 44, 192, 162),
    (t.fillStyle = "#0c0e0d"),
    t.fillRect(e + 700, o + 120, 60, 86),
    (t.fillStyle = "#9a9a92"),
    (t.font = `10px ${x}`),
    t.fillText("CAM 2 - PLATFORM", e + 638, o + 58),
    Mt(t, e, o, n, a, (c, d, i, s, m) =>
      l.some((v) =>
        v[0] === "r"
          ? s + e >= v[1] &&
            s + e < v[1] + v[3] &&
            m + o >= v[2] &&
            m + o < v[2] + v[4]
          : Math.hypot(s + e - v[0], m + o - v[1]) < v[2],
      ),
    ));
}
function Zn(t, e, o, n, a) {
  (J(t, e, o, n, a, "#b3201c"),
    (t.fillStyle = "#f2ece0"),
    t.fillRect(e + 14, o + 60, n - 28, 120),
    (t.fillStyle = "#1a1a1a"),
    (t.font = `bold 16px ${x}`),
    (t.textAlign = "center"),
    t.fillText("FIRE", e + n / 2, o + 90),
    t.fillText("EXT.", e + n / 2, o + 110),
    (t.font = `10px ${x}`),
    t.fillText("6 kg  ABC", e + n / 2, o + 134),
    t.fillText("PULL PIN", e + n / 2, o + 152),
    t.fillText("SQUEEZE", e + n / 2, o + 166));
}
function Kn(t, e, o, n, a) {
  (J(t, e, o, n, a, "#c9c4b8"),
    (t.fillStyle = "#a3201c"),
    t.fillRect(e, o, n, 54),
    (t.fillStyle = "#f4efe4"),
    (t.font = `bold 20px ${x}`),
    (t.textAlign = "center"),
    t.fillText("EMERGENCY", e + n / 2, o + 34),
    (t.fillStyle = "#2a2a2a"));
  for (let l = 0; l < 6; l++)
    for (let r = 0; r < 9; r++)
      (t.beginPath(),
        t.arc(e + 64 + r * 16, o + 84 + l * 14, 3.5, 0, 7),
        t.fill());
  ((t.fillStyle = "#1a1a1a"),
    (t.font = `bold 14px ${x}`),
    t.fillText("PRESS AND SPEAK", e + n / 2, o + 186),
    (t.fillStyle = "#e8c228"),
    t.beginPath(),
    t.arc(e + n / 2, o + 222, 22, 0, 7),
    t.fill(),
    (t.fillStyle = "#151515"),
    (t.font = `bold 11px ${x}`),
    t.fillText("TALK", e + n / 2, o + 226));
}
function je(t, e, o, n, a, l) {
  (J(t, e, o, n, a, "#b8b6b0"),
    (t.fillStyle = "#2a2a2a"),
    t.beginPath(),
    t.arc(e + n / 2, o + a / 2, n * 0.4, 0, 7),
    t.fill(),
    (t.strokeStyle = l ? "#3cff6a" : "#e8e8e0"),
    (t.lineWidth = 9),
    t.beginPath(),
    t.arc(e + n / 2, o + a / 2, n * 0.32, 0, 7),
    t.stroke(),
    (t.fillStyle = "#d8d8d0"),
    (t.font = `bold 20px ${x}`),
    (t.textAlign = "center"),
    (t.textBaseline = "middle"),
    l &&
      (t.beginPath(),
      t.moveTo(e + n / 2 - 22, o + a / 2),
      t.lineTo(e + n / 2 - 6, o + a / 2 - 12),
      t.lineTo(e + n / 2 - 6, o + a / 2 + 12),
      t.fill(),
      t.beginPath(),
      t.moveTo(e + n / 2 + 22, o + a / 2),
      t.lineTo(e + n / 2 + 6, o + a / 2 - 12),
      t.lineTo(e + n / 2 + 6, o + a / 2 + 12),
      t.fill()),
    (t.textBaseline = "alphabetic"),
    Mt(t, e, o, n, a, (r, p) => l && p > 200 && r < 120));
}
function Wn(t, e, o, n, a) {
  (J(t, e, o, n, a, "#e9e5da"),
    (t.fillStyle = "#2f7a3a"),
    (t.font = `bold 46px ${x}`),
    (t.textAlign = "center"),
    t.fillText("freshway", e + n / 2, o + a / 2 + 10),
    (t.fillStyle = "#e07a1c"),
    t.beginPath(),
    t.arc(e + n / 2, o + 60, 20, 0, 7),
    t.fill(),
    (t.fillStyle = "#5a5a50"),
    (t.font = `14px ${x}`),
    t.fillText("Fresh every day.", e + n / 2, o + 186));
}
function Hn(t, e, o, n, a) {
  (J(t, e, o, n, a, "#b3261e"),
    (t.fillStyle = "#f4efe4"),
    t.fillRect(e, o + 40, n, 48),
    (t.fillStyle = "#b3261e"),
    (t.font = `bold 26px ${N0}`),
    (t.textAlign = "center"),
    t.fillText("TOMATO SOUP", e + n / 2, o + 74));
}
function jn(t, e, o, n, a) {
  (J(t, e, o, n, a, "#e8c440"),
    (t.fillStyle = "#7a2410"),
    (t.font = `bold 30px ${x}`),
    (t.textAlign = "center"),
    t.fillText("CORN FLAKES", e + n / 2, o + 56),
    (t.fillStyle = "#ffffff"),
    t.beginPath(),
    t.ellipse(e + n / 2, o + 96, 50, 20, 0, 0, 7),
    t.fill());
}
function Qn(t, e, o, n, a, l) {
  (_0(t, e, o, n, a),
    (t.strokeStyle = "rgba(255,255,255,0.85)"),
    (t.lineWidth = 2),
    (t.lineCap = "round"),
    (t.font = `italic 64px ${N0}`),
    t.save(),
    t.translate(e + 40, o + 150),
    t.rotate(-0.12),
    (t.lineWidth = 1.6),
    t.strokeText("KRAY 07", 0, 0),
    t.restore());
  for (let r = 0; r < 9; r++) {
    const p = e + 20 + l() * (n - 40),
      f = o + 20 + l() * (a - 40),
      c = l() * Math.PI,
      d = 30 + l() * 140;
    (t.beginPath(),
      t.moveTo(p, f),
      t.lineTo(p + Math.cos(c) * d, f + Math.sin(c) * d),
      t.stroke());
  }
  (t.beginPath(), t.arc(e + 420, o + 70, 30, 0.3, 5.9), t.stroke());
}
function Jn(t, e, o, n, a) {
  (_0(t, e, o, n, a),
    Qt(t, e + 4, o + 4, a - 8, a - 8),
    (t.fillStyle = "#ece6d6"),
    (t.font = `bold 34px ${x}`),
    (t.textAlign = "left"),
    t.fillText("LINE 4", e + a + 4, o + a / 2 + 12));
}
function Yn(t, e, o, n, a) {
  (J(t, e, o, n, a, "#0f7a3a"),
    (t.fillStyle = "#eaf6ea"),
    (t.font = `bold 34px ${x}`),
    (t.textAlign = "center"),
    t.fillText("EXIT", e + n / 2 + 30, o + 46),
    t.fillRect(e + 40, o + 18, 10, 28),
    Mt(t, e, o, n, a, () => !0));
}
function Xn(t, e, o, n, a, l) {
  (J(t, e, o, n, a, "#e9e4d6"),
    (t.fillStyle = "#161616"),
    (t.textAlign = "center"),
    (t.font = `bold 40px "Comic Sans MS", "Segoe Print", ${x}`),
    t.fillText("SERVICE", e + n / 2, o + 74),
    t.fillText("SUSPENDED", e + n / 2, o + 122),
    (t.font = `22px "Comic Sans MS", "Segoe Print", ${x}`),
    t.fillText("until further notice", e + n / 2, o + 166),
    t.fillText("- Line 4 staff", e + n / 2 + 60, o + 212),
    (t.fillStyle = "rgba(220,210,170,0.7)"),
    t.fillRect(e + 10, o, 80, 26),
    t.fillRect(e + n - 90, o, 80, 26),
    E0(t, e, o, n, a, l, 1.4));
}
