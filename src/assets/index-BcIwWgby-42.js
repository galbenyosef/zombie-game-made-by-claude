// assets/index-BcIwWgby 42 — math
// Lines 12810-12908 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function cc() {
  const u = document.createElement("canvas");
  ((u.width = 256 * 4), (u.height = 1024));
  const e = u.getContext("2d");
  e.clearRect(0, 0, u.width, u.height);
  let r = 5519;
  const a = () => ((r = (r * 16807) % 2147483647), r / 2147483647);
  for (let i = 0; i < 4; i++) {
    (e.save(), e.translate(i * 256, 0));
    const d = 256 / 2 + (a() - 0.5) * 20,
      y = 14 + a() * 10,
      w = 1024 * (0.38 + a() * 0.15);
    ((e.fillStyle = "rgb(46,34,28)"),
      e.beginPath(),
      e.moveTo(d - y * 1.9, 1024),
      e.quadraticCurveTo(d - y * 0.6, 984, d - y * 0.5, 904),
      e.lineTo(d - y * 0.3, 60),
      e.lineTo(d + y * 0.3, 60),
      e.lineTo(d + y * 0.5, 904),
      e.quadraticCurveTo(d + y * 0.6, 984, d + y * 1.9, 1024),
      e.closePath(),
      e.fill());
    for (let g = 0; g < 70; g++) {
      const z = a() * 256,
        x = 1024 * (0.7 + a() * 0.14),
        v = 16 + a() * 30;
      ((e.fillStyle = ["rgb(14,22,16)", "rgb(18,28,20)", "rgb(11,18,13)"][
        Math.floor(a() * 3)
      ]),
        e.beginPath(),
        e.moveTo(z - v, 1024));
      for (let n = 0; n <= 8; n++) {
        const l = Math.PI + (n / 8) * Math.PI,
          f = v * (0.7 + a() * 0.5);
        e.lineTo(z + Math.cos(l) * f, x + Math.sin(l) * f * 1.6);
      }
      (e.lineTo(z + v, 1024), e.closePath(), e.fill());
    }
    ((e.fillStyle = "rgb(12,19,14)"),
      e.fillRect(0, 1024 * 0.84, 256, 1024 * 0.16),
      (e.strokeStyle = "rgb(40,30,24)"),
      (e.lineWidth = 3));
    for (let g = 0; g < 7; g++) {
      const z = w + a() * (839.68 - w),
        x = a() < 0.5 ? -1 : 1;
      (e.beginPath(),
        e.moveTo(d, z),
        e.lineTo(d + x * (16 + a() * 26), z + 12 + a() * 10),
        e.stroke());
    }
    for (let g = 0; g < 150; g++) {
      const z = 30 + Math.pow(a(), 0.8) * (w - 30),
        x = 256 * 0.42 * (0.12 + 0.88 * Math.pow((z - 30) / (w - 30), 0.75)),
        v = d + (a() - 0.5) * 2 * x * (0.3 + 0.7 * a()),
        n = 10 + a() * 22,
        l = [
          [18, 30, 20],
          [24, 38, 24],
          [14, 24, 16],
          [30, 44, 28],
        ][Math.floor(a() * 4)];
      ((e.fillStyle = `rgb(${l[0]},${l[1]},${l[2]})`), e.beginPath());
      for (let f = 0; f < 9; f++) {
        const h = (f / 9) * Math.PI * 2,
          c = n * (0.6 + a() * 0.5);
        e.lineTo(v + Math.cos(h) * c * 1.3, z + Math.sin(h) * c * 0.7);
      }
      (e.closePath(), e.fill());
    }
    e.restore();
  }
  const p = new io(u);
  return (
    (p.colorSpace = lo),
    (p.anisotropy = 4),
    (p.generateMipmaps = !0),
    (p.minFilter = vs),
    { tex: p, n: 4 }
  );
}
const F0 = Math.PI * 2,
  mo = (s, o, t) => {
    const u = Math.max(0, Math.min(1, (t - s) / (o - s)));
    return u * u * (3 - 2 * u);
  },
  ls = (s) => ((s = (s + Math.PI) % F0), s < 0 && (s += F0), s - Math.PI),
  xs = (s) => (s <= 0 ? 0 : s >= 1 ? 1 : s * s * (3 - 2 * s)),
  j0 = (s, o = 0, t = 0.25, u = 0) => [
    s,
    2 + Math.min(0.97, Math.max(0, o)),
    u > 0.004 ? 2 + Math.min(1, u) : t,
  ];
function xe(s, o) {
  const t = s.attributes.position,
    u = new Float32Array(t.count * 3);
  for (let e = 0; e < t.count; e++)
    u.set(o(t.getX(e), t.getY(e), t.getZ(e)), e * 3);
  return (s.setAttribute("aK", new vt(u, 3)), s);
}
