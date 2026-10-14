// assets__district-BhfbivMT 06 — math
// Lines 1644-1832 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function so() {
  if (Re) return Re;
  const n = 256,
    t = new qt(4242),
    e = new Uint8Array(n * n * 4);
  for (let r = 0; r < n; r++)
    for (let o = 0; o < n; o++) {
      const l = o / n,
        s = r / n,
        c = (r * n + o) * 4;
      ((e[c] = ie(t.fbm(l * 4, s * 4, 4, 4, 4) * 0.85 + 0.5) * 255),
        (e[c + 1] =
          ie(t.fbm(l * 16 + 3, s * 16, 3, 16, 16) * 0.85 + 0.5) * 255),
        (e[c + 2] = ie(t.fbm(l * 32 - 5, s * 4, 3, 32, 4) * 0.85 + 0.5) * 255),
        (e[c + 3] = 255));
    }
  return (
    (Re = new yn(e, n, n, vn)),
    (Re.wrapS = Re.wrapT = gt),
    (Re.magFilter = Mn),
    (Re.minFilter = gn),
    (Re.generateMipmaps = !0),
    (Re.colorSpace = Kt),
    (Re.needsUpdate = !0),
    Re
  );
}
function zt(n, t) {
  const e = document.createElement("canvas");
  return ((e.width = n), (e.height = t), e);
}
function kt(n, t = !0) {
  const e = new Dt(n);
  return (
    (e.colorSpace = t ? Pt : Kt),
    (e.anisotropy = 8),
    (e.wrapS = e.wrapT = En),
    e
  );
}
const lo = 8;
function io() {
  const e = zt(1024, 512),
    r = zt(1024, 512),
    o = e.getContext("2d"),
    l = r.getContext("2d");
  ((o.fillStyle = "#0b0d0f"),
    o.fillRect(0, 0, 1024, 512),
    (l.fillStyle = "rgb(255,14,0)"),
    l.fillRect(0, 0, 1024, 512));
  const s = Ot(77),
    c = (y, m, b, v) => {
      for (const [p, d, i] of [
        [o, b, m],
        [l, v, m + 1],
      ]) {
        ((p.strokeStyle = d),
          (p.lineWidth = i),
          p.beginPath(),
          p.moveTo(y[0][0], y[0][1]));
        for (const u of y) p.lineTo(u[0], u[1]);
        p.stroke();
      }
    },
    a = (y, m, b, v, p) => {
      const d = [[y, m]];
      let i = y,
        u = m,
        x = b;
      for (let w = 0; w < v; w += 6)
        ((x += (s() - 0.5) * p),
          (i += Math.cos(x) * 6),
          (u += Math.sin(x) * 6),
          d.push([i, u]));
      return d;
    };
  for (let y = 1; y < lo; y++) {
    const m = (y % 4) * 256,
      b = Math.floor(y / 4) * 256;
    for (const p of [o, l])
      (p.save(), p.beginPath(), p.rect(m + 2, b + 2, 252, 252), p.clip());
    const v = y % 3;
    if (v === 1) {
      const p = m + 60 + s() * 136,
        d = b + 60 + s() * 136,
        i = 11 + Math.floor(s() * 7),
        u = [];
      for (let w = 0; w < i; w++) {
        const _ = (w / i) * Math.PI * 2 + s() * 0.3,
          M = a(p, d, _, 60 + s() * 220, 0.35);
        (u.push(M), c(M, 1.2, "rgba(160,170,180,0.85)", "rgb(255,150,0)"));
      }
      for (const w of [10, 24, 44, 70]) {
        const _ = u.map((M) => M[Math.min(M.length - 1, Math.round(w / 6))]);
        (_.push(_[0]), c(_, 1, "rgba(150,160,170,0.7)", "rgb(255,130,0)"));
      }
      const x = o.createRadialGradient(p, d, 0, p, d, 14);
      (x.addColorStop(0, "rgba(200,205,210,0.9)"),
        x.addColorStop(1, "rgba(200,205,210,0)"),
        (o.fillStyle = x),
        o.fillRect(p - 16, d - 16, 32, 32),
        (l.fillStyle = "rgb(255,200,0)"),
        l.beginPath(),
        l.arc(p, d, 10, 0, 7),
        l.fill());
    } else if (v === 2)
      for (let p = 0; p < 3 + s() * 3; p++) {
        const d = Math.floor(s() * 4),
          i = d === 0 ? m : d === 1 ? m + 256 : m + s() * 256,
          u = d === 2 ? b : d === 3 ? b + 256 : b + s() * 256,
          x = Math.atan2(b + 128 - u, m + 128 - i) + (s() - 0.5) * 1.2,
          w = a(i, u, x, 120 + s() * 240, 0.5);
        c(w, 1.3, "rgba(160,170,180,0.8)", "rgb(255,140,0)");
        for (let _ = 0; _ < 3; _++) {
          const M = w[Math.floor(s() * w.length)];
          c(
            a(M[0], M[1], x + (s() - 0.5) * 2.4, 30 + s() * 80, 0.6),
            1,
            "rgba(150,160,170,0.7)",
            "rgb(255,120,0)",
          );
        }
      }
    else {
      const p = 11 + s() * 5,
        d = [];
      for (let i = -1; i < 256 / p + 2; i++) {
        const u = [];
        for (let x = -1; x < 256 / p + 2; x++)
          u.push([
            m + x * p + (s() - 0.5) * p * 0.8,
            b + i * p + (s() - 0.5) * p * 0.8,
          ]);
        d.push(u);
      }
      ((o.fillStyle = "rgba(120,128,136,0.25)"), o.fillRect(m, b, 256, 256));
      for (let i = 0; i < d.length - 1; i++)
        for (let u = 0; u < d[i].length - 1; u++)
          (c(
            [d[i][u], d[i][u + 1]],
            1,
            "rgba(175,182,190,0.75)",
            "rgb(255,170,0)",
          ),
            c(
              [d[i][u], d[i + 1][u]],
              1,
              "rgba(175,182,190,0.75)",
              "rgb(255,170,0)",
            ));
    }
    (o.restore(), l.restore());
  }
  const h = kt(e),
    f = kt(r, !1);
  return { map: h, rough: f };
}
const de = (n, t, e) => [
    ((n % 4) + 0.03 + ie(t) * 0.94) / 4,
    1 - (Math.floor(n / 4) + 0.03 + ie(e) * 0.94) / 2,
  ],
  et =
    '"Yu Gothic", "YuGothic", "Meiryo", "Hiragino Sans", "Noto Sans JP", "MS Gothic", sans-serif',
  Me = {
    plate_w0: [0, 0, 256, 128],
    plate_w1: [256, 0, 256, 128],
    plate_y0: [512, 0, 256, 128],
    plate_y1: [768, 0, 256, 128],
    plate_g0: [0, 128, 256, 128],
    plate_g1: [256, 128, 256, 128],
    plate_k0: [512, 128, 256, 128],
    plate_burnt: [768, 128, 256, 128],
    taxi_sign: [0, 256, 256, 128],
    taxi_door: [256, 256, 512, 128],
    bus_no: [768, 256, 128, 128],
    note: [896, 256, 128, 128],
    bus_front: [0, 384, 1024, 128],
    bus_side: [0, 512, 512, 128],
    bus_rear: [512, 512, 256, 128],
    bus_ad: [768, 512, 256, 128],
    van_logo: [0, 640, 1024, 256],
    army_no: [0, 896, 512, 128],
    army_mark: [512, 896, 256, 128],
    grille_mesh: [768, 896, 256, 128],
  };
function ze(n, t, e) {
  const [r, o, l, s] = Me[n];
  return [(r + ie(t) * l) / 1024, 1 - (o + (1 - ie(e)) * s) / 1024];
}
