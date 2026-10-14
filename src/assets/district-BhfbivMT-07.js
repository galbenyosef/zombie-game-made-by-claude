// assets/district-BhfbivMT 07 — fillstyle
// Lines 1833-2123 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function buildBusStop() {
  const n = zt(1024, 1024),
    t = n.getContext("2d"),
    e = zt(1024, 1024),
    r = e.getContext("2d");
  ((t.fillStyle = "#808080"),
    t.fillRect(0, 0, 1024, 1024),
    (r.fillStyle = "#000"),
    r.fillRect(0, 0, 1024, 1024));
  const o = Ot(1234),
    l = (m, b, v, p, d) => {
      (t.beginPath(),
        t.moveTo(m + d, b),
        t.arcTo(m + v, b, m + v, b + p, d),
        t.arcTo(m + v, b + p, m, b + p, d),
        t.arcTo(m, b + p, m, b, d),
        t.arcTo(m, b, m + v, b, d),
        t.closePath());
    },
    s = (m, b, v, p, d, i = et, u = "bold", x = "center", w = t) => {
      ((w.fillStyle = d),
        (w.font = `${u} ${p}px ${i}`),
        (w.textAlign = x),
        (w.textBaseline = "middle"),
        w.fillText(m, b, v));
    },
    c = (m, b, v, p, d, i, u, x = 0.25) => {
      const [w, _, M, C] = Me[m];
      ((t.fillStyle = "#2a2a2a"),
        t.fillRect(w, _, M, C),
        l(w + 4, _ + 4, M - 8, C - 8, 10),
        (t.fillStyle = b),
        t.fill(),
        (t.strokeStyle = v),
        (t.lineWidth = 2),
        l(w + 9, _ + 9, M - 18, C - 18, 7),
        t.stroke(),
        s(`${p} ${d}`, w + M / 2, _ + 30, 26, v),
        s(i, w + 30, _ + 84, 26, v),
        t.save(),
        t.translate(w + M / 2 + 16, _ + 84),
        t.scale(0.82, 1),
        s(u, 0, 0, 58, v, "Arial Narrow, Arial, sans-serif"),
        t.restore());
      const T = t.createLinearGradient(0, _, 0, _ + C);
      (T.addColorStop(0, `rgba(40,34,28,${x * 0.4})`),
        T.addColorStop(1, `rgba(40,34,28,${x})`),
        (t.fillStyle = T),
        t.fillRect(w + 4, _ + 4, M - 8, C - 8));
      for (const [N] of [[w + 50], [w + M - 50]])
        ((t.fillStyle = "#9a9a92"),
          t.beginPath(),
          t.arc(N, _ + 30, 5, 0, 7),
          t.fill());
    },
    a = () => {
      const m = 1 + Math.floor(o() * 98),
        b = Math.floor(o() * 100);
      return `${m < 10 ? "・" + m : m}-${String(b).padStart(2, "0")}`;
    };
  (c("plate_w0", "#eeeee6", "#1c5a33", "品川", "330", "さ", a()),
    c("plate_w1", "#ecece2", "#1c5a33", "練馬", "500", "ね", a(), 0.4),
    c("plate_y0", "#efcf35", "#1a1a1a", "足立", "580", "あ", a()),
    c("plate_y1", "#eccb30", "#1a1a1a", "多摩", "480", "う", a(), 0.45),
    c("plate_g0", "#1e5c35", "#eeeee6", "品川", "500", "あ", a()),
    c("plate_g1", "#1d5a33", "#eeeee6", "足立", "400", "く", a(), 0.4),
    c("plate_k0", "#171717", "#e8c832", "横浜", "480", "く", a()));
  {
    c("plate_burnt", "#6b645c", "#2a2622", "品川", "300", "さ", a(), 0.3);
    const [m, b, v, p] = Me.plate_burnt;
    for (let i = 0; i < 900; i++) {
      const u = o();
      ((t.fillStyle =
        u < 0.5
          ? `rgba(12,10,9,${0.2 + o() * 0.5})`
          : `rgba(90,48,24,${0.2 + o() * 0.4})`),
        t.fillRect(m + o() * v, b + o() * p, 2 + o() * 10, 2 + o() * 8));
    }
    const d = t.createRadialGradient(
      m + v * 0.7,
      b + p * 0.2,
      5,
      m + v * 0.7,
      b + p * 0.2,
      160,
    );
    (d.addColorStop(0, "rgba(8,7,6,0.85)"),
      d.addColorStop(1, "rgba(8,7,6,0.1)"),
      (t.fillStyle = d),
      t.fillRect(m, b, v, p));
  }
  {
    const [m, b, v, p] = Me.taxi_sign,
      d = t.createLinearGradient(0, b, 0, b + p);
    (d.addColorStop(0, "#f4ecd0"),
      d.addColorStop(1, "#d8c89a"),
      (t.fillStyle = d),
      t.fillRect(m, b, v, p),
      s(
        "TAXI",
        m + v / 2,
        b + 52,
        58,
        "#b01818",
        "Arial Black, Arial, sans-serif",
        "900",
      ),
      s("さくら交通", m + v / 2, b + 102, 26, "#3a2a1a"));
  }
  {
    const [m, b, v, p] = Me.taxi_door;
    ((t.fillStyle = "#f2efe6"),
      t.fillRect(m, b, v, p),
      (t.fillStyle = "#c0283a"));
    for (let d = 0; d < 5; d++) {
      const i = (d / 5) * Math.PI * 2 - Math.PI / 2;
      (t.beginPath(),
        t.ellipse(
          m + 64 + Math.cos(i) * 22,
          b + 64 + Math.sin(i) * 22,
          17,
          11,
          i,
          0,
          7,
        ),
        t.fill());
    }
    ((t.fillStyle = "#f2d24a"),
      t.beginPath(),
      t.arc(m + 64, b + 64, 9, 0, 7),
      t.fill(),
      s("さくら交通", m + 290, b + 52, 58, "#1d2a4a"),
      s(
        "TEL 03-3812-5561",
        m + 290,
        b + 103,
        26,
        "#1d2a4a",
        "Arial, sans-serif",
      ));
  }
  const h = (m, b, v, p) => {
    const [d, i, u, x] = Me[m];
    ((t.fillStyle = "#0c0c0c"),
      t.fillRect(d, i, u, x),
      (r.fillStyle = "#000"),
      r.fillRect(d, i, u, x));
    for (const [w, _] of [
      [t, "#ff9a22"],
      [r, "#ff8a10"],
    ])
      (w.save(),
        w.beginPath(),
        w.rect(d + 4, i + 4, u - 8, x - 8),
        w.clip(),
        s(
          b,
          d + u / 2,
          i + (p ? x * 0.38 : x / 2),
          v,
          _,
          et,
          "bold",
          "center",
          w,
        ),
        p && s(p, d + u / 2, i + x * 0.82, v * 0.4, _, et, "bold", "center", w),
        w.restore());
    t.fillStyle = "rgba(0,0,0,0.55)";
    for (let w = i; w < i + x; w += 4) t.fillRect(d, w, u, 1.4);
    for (let w = d; w < d + u; w += 4) t.fillRect(w, i, 1.4, x);
  };
  (h("bus_no", "32", 84),
    h("bus_front", "回送", 74, "OUT OF SERVICE"),
    h("bus_side", "32  市民病院 行", 54),
    h("bus_rear", "32", 90));
  {
    const [m, b, v, p] = Me.bus_ad;
    ((t.fillStyle = "#e8e2d4"),
      t.fillRect(m, b, v, p),
      (t.fillStyle = "#2c6e8c"),
      t.fillRect(m, b, 80, p),
      s("みなと", m + 170, b + 44, 38, "#2c6e8c"),
      s("夏まつり", m + 170, b + 90, 34, "#c04030"));
  }
  {
    const [m, b, v, p] = Me.van_logo;
    ((t.fillStyle = "#eeeeea"),
      t.fillRect(m, b, v, p),
      (t.fillStyle = "#1f6b43"),
      t.fillRect(m, b + 150, v, 70),
      (t.fillStyle = "#1f6b43"),
      t.beginPath(),
      t.moveTo(m + 60, b + 110),
      t.quadraticCurveTo(m + 120, b + 30, m + 230, b + 40),
      t.quadraticCurveTo(m + 150, b + 60, m + 140, b + 80),
      t.lineTo(m + 250, b + 95),
      t.quadraticCurveTo(m + 150, b + 110, m + 60, b + 110),
      t.fill(),
      s("はやて便", m + 520, b + 78, 104, "#1f6b43"),
      s(
        "HAYATE EXPRESS  0120-38-5100",
        m + v / 2,
        b + 186,
        40,
        "#f2f2ea",
        "Arial Black, Arial, sans-serif",
        "900",
      ));
  }
  {
    const [m, b, v, p] = Me.army_no;
    ((t.fillStyle = "#141412"),
      t.fillRect(m, b, v, p),
      s(
        "21-4617",
        m + v / 2,
        b + p / 2,
        88,
        "#e8e4d8",
        'Consolas, "Courier New", monospace',
      ));
  }
  {
    const [m, b, v, p] = Me.army_mark;
    ((t.fillStyle = "#3c4128"),
      t.fillRect(m, b, v, p),
      (t.strokeStyle = "#e8e4d8"),
      (t.lineWidth = 6),
      t.strokeRect(m + 20, b + 20, 90, 88),
      s("4", m + 65, b + 66, 64, "#e8e4d8", "Consolas, monospace"),
      s("輸", m + 180, b + 64, 72, "#e8e4d8"));
  }
  {
    const [m, b, v, p] = Me.grille_mesh;
    ((t.fillStyle = "#050505"),
      t.fillRect(m, b, v, p),
      (t.strokeStyle = "#3a3a3a"),
      (t.lineWidth = 2));
    for (let d = 0; d < p / 10 + 1; d++)
      for (let i = 0; i < v / 12 + 1; i++)
        (t.beginPath(),
          t.arc(m + i * 12 + (d % 2) * 6, b + d * 10, 4.5, 0, 7),
          t.stroke());
  }
  {
    const [m, b, v, p] = Me.note;
    ((t.fillStyle = "#e9e3d0"),
      t.fillRect(m, b, v, p),
      (t.fillStyle = "rgba(120,100,60,0.25)"),
      t.fillRect(m, b + p - 30, v, 30),
      t.save(),
      t.translate(m + v / 2, b + p / 2),
      t.rotate(-0.06),
      s("避難所へ", 0, -22, 26, "#1a1a40", et, "normal"),
      s("行きます", 0, 8, 26, "#1a1a40", et, "normal"),
      s("ゆうこ", 20, 40, 18, "#1a1a40", et, "normal"),
      t.restore());
  }
  const f = kt(n),
    y = kt(e);
  return (
    (f.generateMipmaps = !0),
    (y.generateMipmaps = !0),
    { map: f, glow: y }
  );
}
function fo() {
  const t = new Uint8Array(65536),
    e = new qt(911);
  for (let o = 0; o < 128; o++)
    for (let l = 0; l < 128; l++) {
      const s = (o * 128 + l) * 4,
        c = ((l >> 1) + (o >> 1)) % 2 ? 0.92 : 1,
        a = e.fbm((l / 128) * 8, (o / 128) * 8, 3, 8, 8) * 0.25 + 0.9,
        h = ie(c * a) * 255;
      ((t[s] = h), (t[s + 1] = h), (t[s + 2] = h), (t[s + 3] = 255));
    }
  const r = new yn(t, 128, 128, vn);
  return (
    (r.wrapS = r.wrapT = gt),
    r.repeat.set(4, 4),
    (r.magFilter = Mn),
    (r.minFilter = gn),
    (r.generateMipmaps = !0),
    (r.colorSpace = Pt),
    (r.needsUpdate = !0),
    r
  );
}
