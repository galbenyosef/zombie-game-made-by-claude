// assets/index-BcIwWgby 08 — math
// Lines 1703-1978 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Kn() {
  const u = document.createElement("canvas");
  ((u.width = 2048), (u.height = 1024));
  const e = u.getContext("2d");
  e.clearRect(0, 0, 2048, 1024);
  let r = 11;
  const a = () => ((r = (r * 16807) % 2147483647), r / 2147483647),
    p = (y, w) => {
      (e.save(),
        e.translate((y % 4) * 512, Math.floor(y / 4) * 512),
        e.beginPath(),
        e.rect(0, 0, 512, 512),
        e.clip(),
        w(),
        e.restore());
    },
    i = (y, w, g, z, x) => {
      (e.save(),
        e.translate(y, w),
        e.rotate(z),
        (e.fillStyle = x),
        e.beginPath());
      const v = 7;
      for (let n = 0; n <= v * 2; n++) {
        const l = -Math.PI / 2 + (n / (v * 2) - 0.5) * Math.PI * 1.75,
          f = n % 2 === 0,
          h =
            g *
            (f
              ? n === v
                ? 1
                : 0.62 + 0.38 * Math.sin((n / (v * 2)) * Math.PI)
              : 0.3),
          c = Math.cos(l) * h,
          M = Math.sin(l) * h;
        n === 0 ? e.moveTo(c, M) : e.lineTo(c, M);
      }
      (e.closePath(),
        e.fill(),
        (e.strokeStyle = "rgba(80,30,20,0.3)"),
        (e.lineWidth = 1.2));
      for (let n = 0; n < v; n++) {
        const l = -Math.PI / 2 + ((n + 0.5) / v - 0.5) * Math.PI * 1.75;
        (e.beginPath(),
          e.moveTo(0, 0),
          e.lineTo(Math.cos(l) * g * 0.8, Math.sin(l) * g * 0.8),
          e.stroke());
      }
      e.restore();
    };
  (p(0, () => {
    ((e.strokeStyle = "rgba(120,50,40,0.9)"), (e.lineWidth = 3));
    for (let y = 0; y < 16; y++) {
      const w = 512 * (0.14 + a() * 0.72),
        g = 512 * (0.14 + a() * 0.72),
        z = 512 * (0.075 + a() * 0.05);
      (e.beginPath(),
        e.moveTo(512 * 0.5, 512 * 0.52),
        e.lineTo(w, g),
        e.stroke());
      const x = 0.82 + a() * 0.18;
      i(
        w,
        g,
        z,
        a() * 6.28,
        `rgb(${Math.round(242 * x)},${Math.round(220 * x)},${Math.round(206 * x)})`,
      );
    }
  }),
    p(1, () => {
      for (let y = 0; y < 6; y++)
        ((e.fillStyle = `rgba(${90 + a() * 30},${120 + a() * 30},60,1)`),
          e.save(),
          e.translate(512 * (0.2 + a() * 0.6), 512 * (0.2 + a() * 0.6)),
          e.rotate(a() * 6.28),
          e.beginPath(),
          e.ellipse(0, 0, 512 * 0.06, 512 * 0.022, 0, 0, 7),
          e.fill(),
          e.restore());
      for (let y = 0; y < 16; y++) {
        const w = 512 * (0.12 + a() * 0.76),
          g = 512 * (0.12 + a() * 0.76),
          z = 512 * (0.05 + a() * 0.035),
          x = a() * 6.28;
        for (let v = 0; v < 5; v++) {
          const n = x + (v * Math.PI * 2) / 5;
          ((e.fillStyle = `rgb(250,${212 + a() * 24},${226 + a() * 16})`),
            e.beginPath(),
            e.ellipse(
              w + Math.cos(n) * z * 0.55,
              g + Math.sin(n) * z * 0.55,
              z * 0.56,
              z * 0.4,
              n,
              0,
              7,
            ),
            e.fill());
        }
        ((e.fillStyle = "#dc6a94"),
          e.beginPath(),
          e.arc(w, g, z * 0.22, 0, 7),
          e.fill(),
          (e.fillStyle = "#f7e37a"));
        for (let v = 0; v < 6; v++) {
          const n = v * 1.05;
          (e.beginPath(),
            e.arc(
              w + Math.cos(n) * z * 0.26,
              g + Math.sin(n) * z * 0.26,
              2,
              0,
              7,
            ),
            e.fill());
        }
      }
      for (let y = 0; y < 6; y++)
        ((e.fillStyle = "#e88aa8"),
          e.beginPath(),
          e.ellipse(
            512 * (0.15 + a() * 0.7),
            512 * (0.15 + a() * 0.7),
            512 * 0.018,
            512 * 0.026,
            a() * 6,
            0,
            7,
          ),
          e.fill());
    }),
    p(2, () => {
      for (let y = 0; y < 16; y++)
        (e.save(),
          e.translate(512 * (0.15 + a() * 0.7), 512 * (0.15 + a() * 0.7)),
          e.rotate(a() * 6.28),
          (e.fillStyle = `rgb(${50 + a() * 30},${95 + a() * 40},${35 + a() * 20})`),
          e.beginPath(),
          e.ellipse(0, 0, 512 * 0.085, 512 * 0.036, 0, 0, 7),
          e.fill(),
          (e.strokeStyle = "rgba(200,230,150,0.35)"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-512 * 0.08, 0),
          e.lineTo(512 * 0.08, 0),
          e.stroke(),
          e.restore());
    }),
    p(3, () => {
      for (let y = 0; y < 6; y++) {
        const w = 512 * (0.2 + a() * 0.6),
          g = 512 * (0.2 + a() * 0.6),
          z = 512 * (0.1 + a() * 0.04),
          x = a() * 6.28;
        for (let v = 0; v < 5; v++) {
          const n = x + (v * Math.PI * 2) / 5;
          ((e.fillStyle = "#f6eef0"),
            e.beginPath(),
            e.ellipse(
              w + Math.cos(n) * z * 0.5,
              g + Math.sin(n) * z * 0.5,
              z * 0.55,
              z * 0.42,
              n,
              0,
              7,
            ),
            e.fill());
        }
        e.fillStyle = "rgba(160,60,90,0.6)";
        for (let v = 0; v < 8; v++)
          (e.beginPath(),
            e.arc(w + (a() - 0.5) * z * 0.5, g - a() * z * 0.4, 2, 0, 7),
            e.fill());
      }
    }),
    p(4, () => {
      for (let g = 0; g < 11; g++) {
        const z = -0.1 - g * 0.13 + a() * 0.08,
          x = 512 * (0.48 + a() * 0.26);
        (e.save(),
          e.translate(92.16, 419.84),
          e.rotate(z),
          (e.fillStyle = `rgb(${70 + a() * 30},${120 + a() * 30},${45 + a() * 15})`),
          e.beginPath(),
          e.moveTo(0, 0),
          e.quadraticCurveTo(x * 0.5, -512 * 0.05, x, 0),
          e.quadraticCurveTo(x * 0.5, 512 * 0.05, 0, 0),
          e.fill(),
          e.restore());
      }
    }),
    p(5, () => {
      for (let g = 0; g < 140; g++) {
        const z = a() * 6.28,
          x = 512 * (0.2 + a() * 0.24);
        ((e.strokeStyle = `rgb(${30 + a() * 25},${60 + a() * 30},${30 + a() * 15})`),
          (e.lineWidth = 3),
          e.beginPath(),
          e.moveTo(256, 281.6),
          e.lineTo(256 + Math.cos(z) * x, 281.6 + Math.sin(z) * x * 0.6),
          e.stroke());
      }
    }),
    p(6, () => {
      ((e.strokeStyle = "#4a6a28"),
        (e.lineWidth = 4),
        e.beginPath(),
        e.moveTo(512 * 0.5, 512 * 0.98),
        e.quadraticCurveTo(512 * 0.46, 512 * 0.5, 512 * 0.52, 512 * 0.04),
        e.stroke());
      for (let y = 0; y < 22; y++) {
        const w = y / 22,
          g = 512 * (0.95 - w * 0.9),
          z = 512 * (0.5 - 0.03 * Math.sin(w * 3)),
          x =
            512 * 0.36 * Math.sin(Math.PI * (0.15 + w * 0.85)) * (1 - w * 0.4);
        for (const v of [-1, 1])
          ((e.fillStyle = `rgb(${60 + a() * 25},${110 + a() * 30},35)`),
            e.save(),
            e.translate(z, g),
            e.rotate(v * (1.2 - w * 0.3)),
            e.beginPath(),
            e.ellipse(x * 0.5, 0, x * 0.5, 512 * 0.018, 0, 0, 7),
            e.fill(),
            e.restore());
      }
    }),
    p(7, () => {
      const y = e.createLinearGradient(0, 512, 0, 0);
      (y.addColorStop(0, "#fbeef0"),
        y.addColorStop(0.7, "#f5b8c8"),
        y.addColorStop(1, "#e0708f"),
        (e.fillStyle = y),
        e.beginPath(),
        e.moveTo(512 * 0.5, 512 * 0.97),
        e.bezierCurveTo(
          512 * 0.05,
          512 * 0.7,
          512 * 0.2,
          512 * 0.12,
          512 * 0.5,
          512 * 0.03,
        ),
        e.bezierCurveTo(
          512 * 0.8,
          512 * 0.12,
          512 * 0.95,
          512 * 0.7,
          512 * 0.5,
          512 * 0.97,
        ),
        e.fill(),
        (e.strokeStyle = "rgba(200,110,140,0.35)"),
        (e.lineWidth = 2));
      for (let w = -3; w <= 3; w++)
        (e.beginPath(),
          e.moveTo(512 * 0.5, 512 * 0.95),
          e.quadraticCurveTo(
            512 * (0.5 + w * 0.05),
            512 * 0.5,
            512 * (0.5 + w * 0.07),
            512 * 0.1,
          ),
          e.stroke());
    }));
  const d = new io(u);
  return (
    (d.colorSpace = lo),
    (d.anisotropy = 8),
    (d.generateMipmaps = !0),
    (d.minFilter = vs),
    d
  );
}
