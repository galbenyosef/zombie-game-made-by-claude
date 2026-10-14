// assets/living-DeOLLwnx 03 — fillstyle
// Lines 634-941 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
function Jt(a, t) {
  return (e, o, s) => {
    const n = e.createLinearGradient(0, 0, 0, s * 0.62);
    (n.addColorStop(0, "#16262a"),
      n.addColorStop(0.7, "#3a4842"),
      n.addColorStop(1, "#6e6a4a"),
      (e.fillStyle = n),
      e.fillRect(0, 0, o, s));
    for (let u = 0; u < 26; u++)
      k0(
        e,
        a() * o,
        a() * s * 0.45,
        40 + a() * 90,
        8 + a() * 16,
        `rgba(${(20 + a() * 25) | 0},${(28 + a() * 25) | 0},${(28 + a() * 20) | 0},0.5)`,
        8,
      );
    const l = o * 0.7,
      p = s * 0.24,
      d = e.createRadialGradient(l, p, 10, l, p, 120);
    (d.addColorStop(0, "rgba(200,196,160,0.45)"),
      d.addColorStop(1, "rgba(200,196,160,0)"),
      (e.fillStyle = d),
      e.fillRect(0, 0, o, s),
      k0(e, l, p, 26, 26, "#e8e2bc", 1.5),
      (e.fillStyle = "#141a14"),
      e.beginPath(),
      e.moveTo(0, s * 0.6));
    for (let u = 0; u <= 20; u++)
      e.lineTo(
        (u / 20) * o,
        s * (0.58 + 0.06 * Math.sin(u * 0.9 + 1) + 0.02 * a()),
      );
    (e.lineTo(o, s),
      e.lineTo(0, s),
      e.fill(),
      (e.fillStyle = "#0b0e0a"),
      e.beginPath(),
      e.moveTo(0, s * 0.72));
    for (let u = 0; u <= 20; u++)
      e.lineTo((u / 20) * o, s * (0.7 + 0.05 * Math.sin(u * 0.6 + 3)));
    (e.lineTo(o, s),
      e.lineTo(0, s),
      e.fill(),
      (e.fillStyle = "#070807"),
      e.fillRect(o * 0.26, s * 0.5, 70, 48),
      e.beginPath(),
      e.moveTo(o * 0.26 - 8, s * 0.5),
      e.lineTo(o * 0.26 + 35, s * 0.5 - 34),
      e.lineTo(o * 0.26 + 78, s * 0.5),
      e.fill(),
      (e.fillStyle = "#d99a3a"),
      e.fillRect(o * 0.26 + 22, s * 0.5 + 14, 9, 11),
      k0(e, o * 0.26 + 26, s * 0.5 + 20, 16, 14, "rgba(220,150,60,0.25)", 6),
      (e.strokeStyle = "rgba(120,120,95,0.35)"),
      (e.lineWidth = 5),
      e.beginPath(),
      e.moveTo(o * 0.55, s),
      e.bezierCurveTo(o * 0.45, s * 0.8, o * 0.36, s * 0.66, o * 0.3, s * 0.6),
      e.stroke());
    const c = (u, b, k) => {
      ((e.strokeStyle = "#050605"), (e.lineCap = "round"));
      const S = (h, y, C, z, w, f) => {
        if (f > 6 || z < 3) return;
        const i = h + Math.cos(C) * z,
          m = y + Math.sin(C) * z;
        ((e.lineWidth = w),
          e.beginPath(),
          e.moveTo(h, y),
          e.lineTo(i, m),
          e.stroke(),
          S(i, m, C - 0.3 - a() * 0.4, z * (0.62 + a() * 0.2), w * 0.68, f + 1),
          S(
            i,
            m,
            C + 0.3 + a() * 0.4,
            z * (0.62 + a() * 0.2),
            w * 0.68,
            f + 1,
          ));
      };
      S(u, b, -Math.PI / 2 + (a() - 0.5) * 0.2, 60 * k, 7 * k, 0);
    };
    (c(o * 0.12, s * 0.74, 1.3),
      c(o * 0.84, s * 0.7, 1),
      c(o * 0.93, s * 0.76, 0.8),
      ut(e, o, s, a));
  };
}
function xt(a, t) {
  const r = (e, o, s) => {
    const n = e.createRadialGradient(
      o * 0.5,
      s * 0.35,
      30,
      o * 0.5,
      s * 0.4,
      o * 0.9,
    );
    (n.addColorStop(0, "#4e4c32"),
      n.addColorStop(1, "#15160f"),
      (e.fillStyle = n),
      e.fillRect(0, 0, o, s),
      (e.fillStyle = "#0a0909"),
      e.beginPath(),
      e.moveTo(o * 0.1, s),
      e.bezierCurveTo(o * 0.12, s * 0.62, o * 0.3, s * 0.5, o * 0.5, s * 0.5),
      e.bezierCurveTo(o * 0.7, s * 0.5, o * 0.88, s * 0.62, o * 0.9, s),
      e.fill(),
      (e.fillStyle = "rgba(70,60,50,0.4)"),
      e.fillRect(o * 0.47, s * 0.52, 3, s * 0.4),
      k0(e, o * 0.5, s * 0.84, 46, 22, "#a89a86", 2),
      k0(e, o * 0.46, s * 0.83, 24, 16, "#8a7c6a", 2),
      (e.fillStyle = "rgba(200,190,170,0.55)"),
      e.beginPath(),
      e.ellipse(o * 0.5, s * 0.5, 44, 16, 0, 0, s0),
      e.fill(),
      k0(e, o * 0.5, s * 0.2, 58, 44, "#595650", 3),
      k0(e, o * 0.5, s * 0.33, 56, 74, "#b8a893", 2),
      e.save(),
      e.beginPath(),
      e.ellipse(o * 0.5, s * 0.34, 50, 66, 0, 0, s0),
      e.clip(),
      (e.fillStyle = "#d7cdb8"),
      e.fillRect(0, 0, o, s),
      (e.strokeStyle = "rgba(25,20,15,0.8)"));
    for (let l = 0; l < 140; l++) {
      const p = o * 0.5 + (a() - 0.5) * 100,
        d = s * 0.34 + (a() - 0.5) * 130,
        c = (a() - 0.5) * 1.2 + (a() < 0.5 ? 0 : 1.5);
      ((e.lineWidth = 0.6 + a() * 2.2),
        e.beginPath(),
        e.moveTo(p - Math.cos(c) * 40, d - Math.sin(c) * 40),
        e.lineTo(p + Math.cos(c) * 40, d + Math.sin(c) * 40),
        e.stroke());
    }
    (e.restore(), ut(e, o, s, a, { cracks: 90 }));
  };
  return t ? r : Y0(480, 600, r);
}
function Bt(a, t) {
  const r = (e, o, s) => {
    const n = e.createLinearGradient(0, 0, 0, s * 0.55);
    (n.addColorStop(0, "#18201c"),
      n.addColorStop(1, "#5a5440"),
      (e.fillStyle = n),
      e.fillRect(0, 0, o, s));
    for (let p = 0; p < 30; p++)
      k0(
        e,
        a() * o,
        a() * s * 0.5,
        50 + a() * 110,
        10 + a() * 22,
        `rgba(${(14 + a() * 20) | 0},${(16 + a() * 18) | 0},${(14 + a() * 12) | 0},0.6)`,
        10,
      );
    k0(e, o * 0.3, s * 0.42, 90, 18, "rgba(160,140,90,0.35)", 16);
    const l = e.createLinearGradient(0, s * 0.55, 0, s);
    (l.addColorStop(0, "#1a201c"),
      l.addColorStop(1, "#070908"),
      (e.fillStyle = l),
      e.fillRect(0, s * 0.55, o, s * 0.45),
      (e.strokeStyle = "rgba(150,150,120,0.25)"));
    for (let p = 0; p < 60; p++) {
      const d = s * (0.58 + a() * 0.4),
        c = a() * o;
      ((e.lineWidth = 1 + a() * 2),
        e.beginPath(),
        e.moveTo(c, d),
        e.quadraticCurveTo(c + 20, d - 6 - a() * 8, c + 40 + a() * 30, d),
        e.stroke());
    }
    (e.save(),
      e.translate(o * 0.62, s * 0.6),
      e.rotate(-0.16),
      (e.fillStyle = "#060606"),
      e.beginPath(),
      e.moveTo(-60, 0),
      e.lineTo(60, 0),
      e.lineTo(46, 16),
      e.lineTo(-50, 16),
      e.fill(),
      e.fillRect(-4, -110, 4, 110),
      e.fillRect(-40, -80, 3, 80),
      e.beginPath(),
      e.moveTo(2, -104),
      e.lineTo(44, -30),
      e.lineTo(2, -24),
      e.fill(),
      e.beginPath(),
      e.moveTo(-37, -76),
      e.lineTo(-8, -24),
      e.lineTo(-37, -20),
      e.fill(),
      e.restore(),
      ut(e, o, s, a));
  };
  return t ? r : Y0(640, 440, r);
}
function te() {
  return Y0(512, 512, (a, t, r) => {
    const e = a.createRadialGradient(t / 2, r / 2, 20, t / 2, r / 2, t / 2);
    (e.addColorStop(0, "#d9ceb0"),
      e.addColorStop(0.85, "#b8a883"),
      e.addColorStop(1, "#6d5a36"),
      (a.fillStyle = e),
      a.fillRect(0, 0, t, r),
      a.translate(t / 2, r / 2),
      (a.strokeStyle = "#2a2016"),
      (a.lineWidth = 3),
      a.beginPath(),
      a.arc(0, 0, 225, 0, s0),
      a.stroke(),
      a.beginPath(),
      a.arc(0, 0, 178, 0, s0),
      a.stroke());
    for (let s = 0; s < 60; s++) {
      const n = (s / 60) * s0;
      ((a.lineWidth = s % 5 === 0 ? 4 : 1.5),
        a.beginPath(),
        a.moveTo(Math.sin(n) * 214, -Math.cos(n) * 214),
        a.lineTo(Math.sin(n) * 226, -Math.cos(n) * 226),
        a.stroke());
    }
    const o = [
      "XII",
      "I",
      "II",
      "III",
      "IIII",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
    ];
    ((a.fillStyle = "#20180f"),
      (a.font = "bold 40px Georgia, serif"),
      (a.textAlign = "center"),
      (a.textBaseline = "middle"),
      o.forEach((s, n) => {
        const l = (n / 12) * s0;
        (a.save(),
          a.translate(Math.sin(l) * 196, -Math.cos(l) * 196),
          a.rotate(l),
          a.fillText(s, 0, 0),
          a.restore());
      }),
      (a.fillStyle = "rgba(90,70,30,0.25)"),
      a.beginPath(),
      a.ellipse(60, 90, 70, 40, 0.6, 0, s0),
      a.fill());
  });
}
function ee(a) {
  return Y0(512, 384, (t, r, e) => {
    ((t.fillStyle = "#2a2118"), t.fillRect(0, 0, r, e));
    const o = document.createElement("canvas");
    ((o.width = r), (o.height = e));
    const s = o.getContext("2d"),
      n = s.createLinearGradient(0, 0, 0, e * 0.5);
    (n.addColorStop(0, "#6f93a8"),
      n.addColorStop(1, "#bcc9b8"),
      (s.fillStyle = n),
      s.fillRect(0, 0, r, e),
      (s.fillStyle = "#5c7a3a"),
      s.fillRect(0, e * 0.5, r, e * 0.5),
      (s.fillStyle = "#c9b490"),
      s.fillRect(r * 0.35, e * 0.28, 150, 110),
      (s.fillStyle = "#7a3a2a"),
      s.beginPath(),
      s.moveTo(r * 0.33, e * 0.29),
      s.lineTo(r * 0.35 + 75, e * 0.1),
      s.lineTo(r * 0.35 + 162, e * 0.29),
      s.fill(),
      (s.fillStyle = "#3a2a1a"),
      s.fillRect(r * 0.35 + 60, e * 0.28 + 60, 28, 50));
    for (let u = 0; u < 140; u++)
      ((s.fillStyle = ["#b04050", "#d0a040", "#e0d0c0", "#8050a0", "#c06030"][
        u % 5
      ]),
        s.beginPath(),
        s.arc(a() * r, e * (0.55 + a() * 0.45), 3 + a() * 5, 0, s0),
        s.fill());
    const l = 12,
      p = 9,
      d = r / l,
      c = e / p;
    for (let u = 0; u < p; u++)
      for (let b = 0; b < l; b++)
        (!(b === 0 || u === 0 || b === l - 1 || u === p - 1) &&
          ((b > 4 && u > 1 && u < 7 && a() < 0.85) || a() < 0.2)) ||
          (t.drawImage(o, b * d, u * c, d, c, b * d, u * c, d, c),
          (t.strokeStyle = "rgba(30,25,20,0.55)"),
          (t.lineWidth = 1),
          t.strokeRect(b * d + 0.5, u * c + 0.5, d - 1, c - 1),
          (t.fillStyle = "rgba(30,25,20,0.4)"),
          b < l - 1 &&
            (t.beginPath(),
            t.arc((b + 1) * d, u * c + c / 2, 4, 0, s0),
            t.fill()));
    ((t.fillStyle = "rgba(0,0,0,0.18)"), t.fillRect(0, 0, r, e));
  });
}
