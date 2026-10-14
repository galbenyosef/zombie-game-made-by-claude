// assets__index-TPd_HXBJ 06 — fillstyle
// Lines 1623-1965 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function Bn(t, e) {
  const o = (n) => [(n % 4) * 512, 256 + Math.floor(n / 4) * 192, 512, 192];
  {
    const [n, a, l, r] = o(0),
      p = t.createLinearGradient(n, a, n + l, a + r);
    (p.addColorStop(0, "#13233d"),
      p.addColorStop(1, "#0a1424"),
      J(t, n, a, l, r, "#13233d"),
      (t.fillStyle = p),
      t.fillRect(n, a, l, r),
      (t.strokeStyle = "#c9a75a"),
      (t.lineWidth = 3));
    for (let f = 0; f < 6; f++)
      (t.beginPath(),
        t.arc(n + l * 0.8, a + r * 1.1, 60 + f * 26, Math.PI, Math.PI * 1.5),
        t.stroke());
    ((t.fillStyle = "#c9a75a"),
      (t.font = `bold 46px ${N0}`),
      (t.textAlign = "left"),
      t.fillText("ARCADIA BANK", n + 28, a + 78),
      (t.fillStyle = "#e6dcc4"),
      (t.font = `italic 24px ${N0}`),
      t.fillText("Your future, safely kept.", n + 30, a + 118),
      (t.font = `14px ${x}`),
      (t.fillStyle = "#9aa4b8"),
      t.fillText("Savings  -  Mortgages  -  Since 1891", n + 30, a + 160),
      E0(t, n, a, l, r, e, 0.8));
  }
  {
    const [n, a, l, r] = o(1);
    J(t, n, a, l, r, "#4a0e14");
    const p = t.createRadialGradient(
      n + l * 0.25,
      a + r * 0.5,
      4,
      n + l * 0.25,
      a + r * 0.5,
      170,
    );
    (p.addColorStop(0, "rgba(255,190,120,0.55)"),
      p.addColorStop(1, "rgba(255,190,120,0)"),
      (t.fillStyle = p),
      t.fillRect(n, a, l, r),
      (t.fillStyle = "#120406"),
      t.beginPath(),
      t.ellipse(n + 128, a + 62, 13, 15, 0, 0, 7),
      t.fill(),
      t.beginPath(),
      t.moveTo(n + 120, a + 76),
      t.lineTo(n + 138, a + 76),
      t.lineTo(n + 150, a + 118),
      t.quadraticCurveTo(n + 200, a + 160, n + 230, a + 178),
      t.lineTo(n + 40, a + 178),
      t.quadraticCurveTo(n + 80, a + 150, n + 108, a + 118),
      t.closePath(),
      t.fill(),
      (t.strokeStyle = "#120406"),
      (t.lineWidth = 7),
      t.beginPath(),
      t.moveTo(n + 136, a + 82),
      t.lineTo(n + 190, a + 40),
      t.stroke(),
      (t.fillStyle = "#f1d9a8"),
      (t.textAlign = "center"),
      (t.font = `italic bold 44px ${N0}`),
      t.fillText("The Last Waltz", n + 360, a + 80),
      (t.font = `16px ${x}`),
      (t.fillStyle = "#e8b9a0"),
      t.fillText('"Unforgettable" - The Herald', n + 360, a + 112),
      (t.font = `bold 15px ${x}`),
      (t.fillStyle = "#f1d9a8"),
      t.fillText("NOW PLAYING  -  REGENT THEATRE", n + 360, a + 156),
      E0(t, n, a, l, r, e, 1));
  }
  {
    const [n, a, l, r] = o(2);
    (J(t, n, a, l, r, "#f2efe6"),
      (t.fillStyle = "#2f7a3a"),
      t.fillRect(n, a, l, 54),
      (t.fillStyle = "#f2efe6"),
      (t.font = `bold 38px ${x}`),
      (t.textAlign = "left"),
      t.fillText("freshway", n + 22, a + 40),
      (t.fillStyle = "#e07a1c"),
      t.beginPath(),
      t.arc(n + 430, a + 118, 48, 0, 7),
      t.fill(),
      (t.fillStyle = "#c4581a"),
      t.beginPath(),
      t.arc(n + 418, a + 106, 10, 0, 7),
      t.fill(),
      (t.fillStyle = "#3a7a2a"),
      t.beginPath(),
      t.ellipse(n + 440, a + 70, 14, 6, -0.6, 0, 7),
      t.fill(),
      (t.fillStyle = "#23361f"),
      (t.font = `bold 34px ${x}`),
      t.fillText("Fresh every day.", n + 24, a + 106),
      (t.font = `20px ${x}`),
      (t.fillStyle = "#3c3c34"),
      t.fillText("Open late. Always local.", n + 26, a + 138),
      (t.font = `bold 15px ${x}`),
      (t.fillStyle = "#2f7a3a"),
      t.fillText("Next to Parkgate station", n + 26, a + 172),
      E0(t, n, a, l, r, e, 1.1));
  }
  {
    const [n, a, l, r] = o(3),
      p = t.createLinearGradient(n, a, n + l, a);
    (p.addColorStop(0, "#2b1046"),
      p.addColorStop(1, "#5a1f6e"),
      J(t, n, a, l, r, "#2b1046"),
      (t.fillStyle = p),
      t.fillRect(n, a, l, r),
      (t.strokeStyle = "rgba(255,255,255,0.25)"),
      (t.lineWidth = 2));
    for (let f = 1; f < 5; f++)
      (t.beginPath(), t.arc(n + 70, a + 120, f * 22, -1.1, -0.2), t.stroke());
    ((t.fillStyle = "#ffffff"),
      (t.font = `bold 50px ${x}`),
      (t.textAlign = "left"),
      t.fillText("NOVA", n + 150, a + 84),
      (t.font = `22px ${x}`),
      (t.fillStyle = "#e4cdf0"),
      t.fillText("Always connected.", n + 152, a + 120),
      (t.font = `bold 14px ${x}`),
      (t.fillStyle = "#c99ade"),
      t.fillText("5G NOW ON EVERY LINE 4 PLATFORM", n + 152, a + 160),
      E0(t, n, a, l, r, e, 0.9));
  }
  {
    const [n, a, l, r] = o(4);
    (J(t, n, a, l, r, "#ece6d6"),
      (t.fillStyle = "#1f5e66"),
      t.fillRect(n, a, l, 36),
      Qt(t, n + 6, a + 3, 30, 30),
      (t.fillStyle = "#ece6d6"),
      (t.font = `bold 20px ${x}`),
      (t.textAlign = "left"),
      t.fillText("PUBLIC NOTICE", n + 44, a + 26),
      (t.fillStyle = "#1a1a1a"),
      (t.font = `bold 19px ${x}`),
      t.fillText("In an emergency", n + 18, a + 66),
      (t.font = `15px ${x}`),
      [
        "Stay inside the train unless told to leave.",
        "Use the alarm handle to speak to the driver.",
        "Do not walk on the tracks: the rail is live.",
      ].forEach((p, f) => t.fillText("- " + p, n + 18, a + 94 + f * 24)),
      (t.fillStyle = "#6e1c22"),
      t.fillRect(n, a + r - 8, l, 8),
      E0(t, n, a, l, r, e, 0.7));
  }
  {
    const [n, a, l, r] = o(5);
    (J(t, n, a, l, r, "#f0c419"),
      (t.fillStyle = "#151515"),
      (t.font = `bold 40px ${x}`),
      (t.textAlign = "left"),
      t.fillText("SEE SOMETHING?", n + 24, a + 66),
      t.fillText("SAY SOMETHING.", n + 24, a + 112),
      (t.font = `bold 18px ${x}`),
      t.fillText("Text 61016  -  Line 4 Transit Police", n + 26, a + 156),
      (t.fillStyle = "#151515"),
      t.beginPath(),
      t.arc(n + 440, a + 86, 44, 0, 7),
      t.fill(),
      (t.fillStyle = "#f0c419"),
      t.beginPath(),
      t.ellipse(n + 440, a + 86, 30, 18, 0, 0, 7),
      t.fill(),
      (t.fillStyle = "#151515"),
      t.beginPath(),
      t.arc(n + 440, a + 86, 10, 0, 7),
      t.fill(),
      E0(t, n, a, l, r, e, 1));
  }
  {
    const [n, a, l, r] = o(6),
      p = t.createLinearGradient(n, a, n, a + r);
    (p.addColorStop(0, "#ffb43a"),
      p.addColorStop(1, "#f07a12"),
      J(t, n, a, l, r, "#ffb43a"),
      (t.fillStyle = p),
      t.fillRect(n, a, l, r),
      (t.fillStyle = "rgba(255,240,200,0.6)"),
      t.beginPath(),
      t.arc(n + 90, a + 60, 70, 0, 7),
      t.fill(),
      (t.fillStyle = "#fff6e0"),
      (t.font = `bold italic 46px ${N0}`),
      (t.textAlign = "left"),
      t.fillText("Sunny Days", n + 170, a + 82),
      (t.font = `20px ${x}`),
      (t.fillStyle = "#5a2a06"),
      t.fillText("100% squeezed sunshine", n + 174, a + 118),
      (t.fillStyle = "rgba(255,255,255,0.5)"),
      t.fillRect(n + 60, a + 90, 56, 84),
      (t.fillStyle = "#f58a1a"),
      t.fillRect(n + 64, a + 104, 48, 66),
      E0(t, n, a, l, r, e, 0.8));
  }
  {
    const [n, a, l, r] = o(7);
    (J(t, n, a, l, r, "#1d2a1e"),
      (t.fillStyle = "#3e5a36"),
      t.beginPath(),
      t.ellipse(n + 110, a + 100, 70, 42, -0.2, 0, 7),
      t.fill(),
      (t.fillStyle = "#1d2a1e"),
      t.beginPath(),
      t.ellipse(n + 90, a + 92, 14, 10, 0, 0, 7),
      t.fill(),
      (t.fillStyle = "#d6cfae"));
    for (let p = 0; p < 7; p++)
      (t.beginPath(),
        t.moveTo(n + 120 + p * 12, a + 128),
        t.lineTo(n + 126 + p * 12, a + 148),
        t.lineTo(n + 132 + p * 12, a + 128),
        t.fill());
    ((t.fillStyle = "#d6cfae"),
      (t.font = `bold 40px ${N0}`),
      (t.textAlign = "left"),
      t.fillText("DINOSAURS", n + 220, a + 76),
      (t.font = `italic 24px ${N0}`),
      t.fillText("Back from the dead!", n + 222, a + 112),
      (t.font = `bold 14px ${x}`),
      (t.fillStyle = "#9fb38e"),
      t.fillText("CITY MUSEUM  -  ST. AGNES", n + 222, a + 158),
      E0(t, n, a, l, r, e, 1));
  }
}
function Gn(t, e, o, n, a, l) {
  (J(t, e, o, n, a, "#d9d3c3"),
    (t.fillStyle = "#1a1a1a"),
    (t.textAlign = "center"),
    (t.font = `bold 40px ${N0}`),
    t.fillText("The City Herald", e + n / 2, o + 46),
    t.fillRect(e + 16, o + 56, n - 32, 2),
    (t.font = `11px ${N0}`),
    t.fillText("SUNDAY EDITION   -   50p", e + n / 2, o + 70),
    t.fillRect(e + 16, o + 76, n - 32, 1),
    (t.font = `bold 42px ${x}`),
    t.fillText("CITY SEALED", e + n / 2, o + 122),
    (t.font = `bold 18px ${x}`),
    t.fillText("Army closes bridges as outbreak spreads", e + n / 2, o + 148),
    (t.fillStyle = "#6c6a64"),
    t.fillRect(e + 16, o + 162, 250, 160),
    (t.fillStyle = "#4a4844"));
  for (let p = 0; p < 26; p++)
    (t.beginPath(),
      t.ellipse(e + 24 + l() * 236, o + 250 + l() * 60, 7, 16, 0, 0, 7),
      t.fill());
  ((t.fillStyle = "#8a8880"),
    t.fillRect(e + 16, o + 240, 250, 6),
    (t.fillStyle = "#2a2a2a"));
  const r = (p, f, c, d) => {
    for (let i = 0; i < d; i++)
      t.fillRect(p, f + i * 9, c * (i % 7 === 6 ? 0.6 : 0.92 + l() * 0.08), 4);
  };
  (r(e + 280, o + 166, 100, 17),
    r(e + 392, o + 166, 100, 17),
    r(e + 16, o + 334, 120, 5),
    r(e + 150, o + 334, 120, 5),
    r(e + 280, o + 334, 220, 5),
    (t.font = `bold 13px ${x}`),
    (t.textAlign = "left"),
    t.fillText("Stay indoors, say officials", e + 280, o + 160),
    E0(t, e, o, n, a, l, 1.6),
    (t.fillStyle = "rgba(0,0,0,0.12)"),
    t.fillRect(e + n / 2 - 1, o, 2, a),
    (t.fillStyle = "rgba(60,45,30,0.32)"),
    t.beginPath(),
    t.ellipse(e + 360, o + 270, 40, 90, 0.4, 0, 7),
    t.fill());
}
function Un(t, e, o, n, a) {
  J(t, e, o, n, a, "#05060a");
  const l = t.createLinearGradient(e, o, e + n, o + a);
  (l.addColorStop(0, "#1b2a4a"),
    l.addColorStop(1, "#3a1a3a"),
    (t.fillStyle = l),
    t.fillRect(e + 6, o + 6, n - 12, a - 12),
    (t.fillStyle = "#ffffff"),
    (t.textAlign = "center"),
    (t.font = `200 54px ${x}`),
    t.fillText("4:12", e + n / 2, o + 78),
    (t.font = `13px ${x}`),
    t.fillText("Sunday 14 October", e + n / 2, o + 100));
  const r = (p, f, c, d) => {
    ((t.fillStyle = "rgba(235,235,240,0.85)"),
      t.fillRect(e + 12, p, n - 24, 52),
      (t.fillStyle = d ? "#b01818" : "#222"),
      (t.textAlign = "left"),
      (t.font = `bold 11px ${x}`),
      t.fillText(f, e + 18, p + 16),
      (t.fillStyle = "#222"),
      (t.font = `11px ${x}`),
      c.forEach((i, s) => t.fillText(i, e + 18, p + 31 + s * 13)));
  };
  (r(
    o + 120,
    "EMERGENCY ALERT",
    ["Shelter in place. Do not", "travel. Await instructions."],
    !0,
  ),
    r(
      o + 180,
      "Mum  (14 missed calls)",
      ["where are you??", "please call me back"],
      !1,
    ),
    r(
      o + 240,
      "Dan",
      ["the trains are still running", "meet me at parkgate"],
      !1,
    ),
    (t.strokeStyle = "rgba(255,255,255,0.6)"),
    (t.lineWidth = 1.2),
    t.beginPath(),
    t.moveTo(e + 20, o + 330),
    t.lineTo(e + 80, o + 300),
    t.lineTo(e + 120, o + 318),
    t.lineTo(e + 180, o + 270),
    t.moveTo(e + 80, o + 300),
    t.lineTo(e + 70, o + 250),
    t.stroke(),
    Mt(
      t,
      e,
      o,
      n,
      a,
      (p, f, c, d, i) => d > 5 && d < n - 6 && i > 5 && i < a - 6,
    ));
}
function _0(t, e, o, n, a) {
  t.clearRect(e, o, n, a);
}
function He(t) {
  return `rgba(70,7,5,${t})`;
}
