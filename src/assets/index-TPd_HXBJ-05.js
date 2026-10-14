// assets/index-TPd_HXBJ 05 — fillstyle
// Lines 1333-1622 of readable/assets/index-TPd_HXBJ.pretty.js (statement-aligned).
function Fn(t) {
  t.clearRect(0, 0, ft, ft);
  const e = Cn(4041);
  (_n(t, 0, 0, 1024, 128),
    me(t, 1024, 0, 1024, 128, "4  PARKGATE", {
      color: [255, 170, 40],
      rows: 16,
      bg: "#060403",
      glow: !0,
      roundel: !0,
    }),
    On(t, 0, 128, 2048, 64));
  for (const [o, n] of [
    [0, "4012"],
    [1, "4013"],
    [2, "4014"],
  ])
    Rn(t, o * 256, 192, 256, 64, n);
  (J(t, 768, 192, 64, 64, "#245a60"),
    Qt(t, 768, 192, 64, 64),
    wt(t, 832, 192, 192, 64, "NO SMOKING", { icon: "nosmoke" }),
    wt(t, 1024, 192, 256, 64, "PRIORITY SEATING", {
      sub: "Please offer this seat",
      bg: "#1c4a52",
    }),
    wt(t, 1280, 192, 256, 64, "MIND THE GAP", { bg: "#e8c228", fg: "#151515" }),
    wt(t, 1536, 192, 256, 64, "DO NOT LEAN ON DOORS", {
      bg: "#e8c228",
      fg: "#151515",
      small: !0,
    }),
    wt(t, 1792, 192, 256, 64, "EMERGENCY ALARM", {
      sub: "Pull handle - speak to driver",
      bg: "#a3201c",
    }),
    Bn(t, e),
    Gn(t, 0, 640, 512, 384, e),
    Un(t, 512, 640, 192, 384),
    xn(t, 704, 640, 320, 384, e),
    Vn(t, 1024, 640, 512, 384, e),
    $n(t, 1536, 640, 512, 384, e),
    qn(t, 0, 1024, 1024, 256),
    Zn(t, 1024, 1024, 128, 256),
    Kn(t, 1152, 1024, 256, 256),
    je(t, 1408, 1024, 128, 128, !0),
    je(t, 1408, 1152, 128, 128, !1),
    Wn(t, 1536, 1024, 256, 256),
    Hn(t, 1792, 1024, 256, 128),
    jn(t, 1792, 1152, 256, 128),
    Qn(t, 0, 1280, 512, 256, e),
    Jn(t, 512, 1280, 256, 128),
    me(t, 768, 1280, 512, 64, "4 PARKGATE", {
      color: [255, 170, 40],
      rows: 9,
      bg: "#050403",
      glow: !0,
    }),
    Yn(t, 768, 1344, 256, 64),
    wt(t, 768, 1408, 256, 76, "STAFF ONLY", {
      sub: "No entry - driving cab",
      bg: "#a3201c",
    }),
    Xn(t, 1280, 1280, 384, 256, e),
    ta(t, 1664, 1280, 384, 128),
    ea(t, 1664, 1408, 384, 128),
    oa(t, 0, 1536, 512, 512, e),
    na(t, 512, 1536, 512, 512, e),
    aa(t, 1024, 1536, 256, 256, e),
    la(t, 1280, 1536, 768, 256, e));
}
function J(t, e, o, n, a, l) {
  ((t.globalAlpha = 1), (t.fillStyle = l), t.fillRect(e, o, n, a));
}
function E0(t, e, o, n, a, l, r = 1) {
  (t.save(),
    t.beginPath(),
    t.rect(e, o, n, a),
    t.clip(),
    (t.globalCompositeOperation = "source-atop"));
  const p = t.createLinearGradient(0, o, 0, o + a);
  (p.addColorStop(0, "rgba(40,32,22,0)"),
    p.addColorStop(1, `rgba(40,32,22,${0.18 * r})`),
    (t.fillStyle = p),
    t.fillRect(e, o, n, a));
  for (let f = 0; f < 14 * r; f++) {
    const c = e + l() * n,
      d = o + l() * a,
      i = 4 + l() * 24,
      s = t.createRadialGradient(c, d, 0, c, d, i);
    (s.addColorStop(0, `rgba(30,24,18,${0.1 * r})`),
      s.addColorStop(1, "rgba(30,24,18,0)"),
      (t.fillStyle = s),
      t.fillRect(c - i, d - i, i * 2, i * 2));
  }
  ((t.strokeStyle = `rgba(255,255,255,${0.12 * r})`), (t.lineWidth = 1));
  for (let f = 0; f < 8 * r; f++) {
    const c = e + l() * n,
      d = o + l() * a,
      i = l() * Math.PI,
      s = 8 + l() * 50;
    (t.beginPath(),
      t.moveTo(c, d),
      t.lineTo(c + Math.cos(i) * s, d + Math.sin(i) * s),
      t.stroke());
  }
  t.restore();
}
function Mt(t, e, o, n, a, l) {
  const r = t.getImageData(e, o, n, a),
    p = r.data;
  for (let f = 0; f < a; f++)
    for (let c = 0; c < n; c++) {
      const d = (f * n + c) * 4;
      p[d + 3] = l(p[d], p[d + 1], p[d + 2], c, f) ? 255 : 128;
    }
  t.putImageData(r, e, o);
}
function Dn(t, e, o, n, a) {
  let l = a;
  do {
    if (((t.font = n.replace("%", String(l))), t.measureText(e).width <= o))
      break;
    l -= 1;
  } while (l > 6);
  return l;
}
function _n(t, e, o, n, a) {
  J(t, e, o, n, a, "#ece6d6");
  const l = o + a * 0.47;
  ((t.fillStyle = "#1f5e66"),
    t.fillRect(e + n * 0.1, l - 7, n * 0.8, 14),
    (t.fillStyle = "#6e1c22"),
    t.fillRect(e + n * 0.1, l + 9, n * 0.8, 3),
    Qt(t, e + 10, o + 24, 80, 80),
    (t.fillStyle = "#1f5e66"),
    t.beginPath(),
    t.moveTo(e + n * 0.93, l - 16),
    t.lineTo(e + n * 0.975, l),
    t.lineTo(e + n * 0.93, l + 16),
    t.fill(),
    We.names.forEach((r, p) => {
      const f = e + n * We.lampU[p];
      ((t.fillStyle = "#ffffff"),
        t.beginPath(),
        t.arc(f, l, 21, 0, 7),
        t.fill(),
        (t.fillStyle = "#1f5e66"),
        t.beginPath(),
        t.arc(f, l, 18, 0, 7),
        t.fill(),
        (t.fillStyle = "#2a1210"),
        t.beginPath(),
        t.arc(f, l, 13, 0, 7),
        t.fill(),
        (t.fillStyle = "#1b1b1b"),
        (t.textAlign = "center"),
        (t.textBaseline = "alphabetic"),
        (t.font = `bold 21px ${x}`),
        t.fillText(r, f, o + 28),
        p === 3 &&
          ((t.font = `bold 13px ${x}`),
          (t.fillStyle = "#6e1c22"),
          t.fillText("TERMINUS", f, o + a - 14)),
        p === 2 &&
          ((t.font = `12px ${x}`),
          (t.fillStyle = "#444"),
          t.fillText("Ashwood Park", f, o + a - 14)));
    }),
    (t.font = `bold 13px ${x}`),
    (t.fillStyle = "#1f5e66"),
    (t.textAlign = "left"),
    t.fillText("LINE 4", e + 98, o + a - 14),
    (t.fillStyle = "#555"),
    (t.font = `11px ${x}`),
    (t.textAlign = "right"),
    t.fillText(
      "Trains every 4 min  -  Last train 00:40",
      e + n - 12,
      o + a - 14,
    ));
}
function Qt(t, e, o, n, a) {
  const l = e + n / 2,
    r = o + a / 2,
    p = Math.min(n, a) * 0.46;
  ((t.fillStyle = "#1f5e66"),
    t.beginPath(),
    t.arc(l, r, p, 0, 7),
    t.fill(),
    (t.strokeStyle = "#ece6d6"),
    (t.lineWidth = p * 0.12),
    t.beginPath(),
    t.arc(l, r, p * 0.82, 0, 7),
    t.stroke(),
    (t.fillStyle = "#ece6d6"),
    (t.font = `bold ${Math.round(p * 1.25)}px ${x}`),
    (t.textAlign = "center"),
    (t.textBaseline = "middle"),
    t.fillText("4", l, r + p * 0.06),
    (t.textBaseline = "alphabetic"));
}
function me(t, e, o, n, a, l, r) {
  J(t, e, o, n, a, r.bg || "#050403");
  const p = r.rows || 16,
    f = a / p,
    c = Math.floor(n / f),
    d = document.createElement("canvas");
  ((d.width = c), (d.height = p));
  const i = d.getContext("2d");
  ((i.fillStyle = "#000"),
    i.fillRect(0, 0, c, p),
    (i.fillStyle = "#fff"),
    (i.textBaseline = "middle"),
    (i.textAlign = r.align || "center"),
    (i.font = `bold ${Math.round(p * 0.82)}px ${Wt}`));
  let s = r.align === "left" ? 2 : c / 2;
  (r.roundel && (i.font = `bold ${Math.round(p * 0.82)}px ${Wt}`),
    i.fillText(l, s, p / 2 + 0.5));
  const m = i.getImageData(0, 0, c, p).data,
    [v, y, w] = r.color;
  for (let M = 0; M < p; M++)
    for (let k = 0; k < c; k++) {
      const P = m[(M * c + k) * 4] / 255,
        C = e + (k + 0.5) * f,
        F = o + (M + 0.5) * f;
      (P > 0.35
        ? ((t.fillStyle = `rgb(${v},${y},${w})`), (t.globalAlpha = 1))
        : ((t.fillStyle = "rgb(40,24,8)"), (t.globalAlpha = 1)),
        t.beginPath(),
        t.arc(C, F, f * 0.36, 0, 7),
        t.fill());
    }
  ((t.globalAlpha = 1), r.glow && Mt(t, e, o, n, a, (M) => M > 120));
}
function On(t, e, o, n, a) {
  me(
    t,
    e,
    o,
    n,
    a,
    "LINE 4 TO PARKGATE   -   NEXT STOP: PARKGATE   -   THIS TRAIN TERMINATES AT PARKGATE   -   PLEASE TAKE ALL YOUR BELONGINGS   -   ",
    { color: [255, 160, 36], rows: 12, bg: "#040302", glow: !0, align: "left" },
  );
}
function Rn(t, e, o, n, a, l) {
  (J(t, e, o, n, a, "#d8d2c2"),
    (t.fillStyle = "#1a1a1a"),
    (t.font = `bold ${a * 0.62}px ${Wt}`),
    (t.textAlign = "center"),
    (t.textBaseline = "middle"),
    t.fillText(l, e + n / 2, o + a / 2 + 2),
    (t.textBaseline = "alphabetic"));
}
function wt(t, e, o, n, a, l, r = {}) {
  J(t, e, o, n, a, r.bg || "#f0ebe0");
  const p = r.fg || (r.bg ? "#f4efe4" : "#1a1a1a");
  let f = e + n / 2;
  if (r.icon === "nosmoke") {
    const d = e + a / 2,
      i = o + a / 2,
      s = a * 0.38;
    ((t.fillStyle = "#222"),
      t.fillRect(d - s * 0.7, i - 3, s * 1.2, 7),
      (t.strokeStyle = "#c0201c"),
      (t.lineWidth = 6),
      t.beginPath(),
      t.arc(d, i, s, 0, 7),
      t.stroke(),
      t.beginPath(),
      t.moveTo(d - s * 0.7, i - s * 0.7),
      t.lineTo(d + s * 0.7, i + s * 0.7),
      t.stroke(),
      (f = e + a + (n - a) / 2));
  }
  ((t.fillStyle = p), (t.textAlign = "center"), (t.textBaseline = "middle"));
  const c = Dn(
    t,
    l,
    (r.icon ? n - a : n) - 16,
    `bold %px ${x}`,
    r.small ? 22 : 28,
  );
  ((t.font = `bold ${c}px ${x}`),
    t.fillText(l, f, o + a / 2 - (r.sub ? 8 : 0)),
    r.sub &&
      ((t.font = `${Math.round(c * 0.55)}px ${x}`),
      t.fillText(r.sub, f, o + a / 2 + 16)),
    (t.textBaseline = "alphabetic"));
}
