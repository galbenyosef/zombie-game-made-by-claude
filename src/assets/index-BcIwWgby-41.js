// assets/index-BcIwWgby 41 — math
// Lines 12334-12809 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function rc() {
  const o = 512 * ao,
    t = 512 * Vs,
    u = document.createElement("canvas");
  ((u.width = o), (u.height = t));
  const e = u.getContext("2d");
  e.clearRect(0, 0, o, t);
  let r = 9127;
  const a = () => ((r = (r * 16807) % 2147483647), r / 2147483647),
    p = (x, v) => {
      (e.save(),
        e.translate((x % ao) * 512, Math.floor(x / ao) * 512),
        e.beginPath(),
        e.rect(2, 2, 508, 508),
        e.clip(),
        v(),
        e.restore());
    },
    i = (x, v = 1) =>
      `rgb(${Math.round(x[0] * v)},${Math.round(x[1] * v)},${Math.round(x[2] * v)})`,
    d = (x, v, n) => [
      x[0] + (v[0] - x[0]) * n,
      x[1] + (v[1] - x[1]) * n,
      x[2] + (v[2] - x[2]) * n,
    ],
    y = (x, v, n, l, f, h, c) => [
      (1 - c) * (1 - c) * x + 2 * (1 - c) * c * n + c * c * f,
      (1 - c) * (1 - c) * v + 2 * (1 - c) * c * l + c * c * h,
    ],
    w = (x) => {
      const v = [22, 40, 24],
        n = [34, 58, 30],
        l = [66, 92, 44];
      e.lineCap = "round";
      const f = [],
        h = 17 + Math.floor(a() * 5);
      for (let c = 0; c < h; c++) {
        const M = c / (h - 1),
          m = 18 + M * 300 + a() * 30,
          k = 512 / 2 + (a() - 0.5) * 30,
          S = a() < 0.5 ? -1 : 1,
          A = (1 - M * 0.55) * (150 + a() * 90),
          b = m + A * (x ? 0.45 : 0.85),
          P =
            k +
            S * A * (x ? 0.45 : 0.62) * (0.5 + a() * 0.6) +
            (x ? A * 0.55 : 0);
        f.push([
          m,
          k,
          (m + b) / 2 + (a() - 0.5) * 40,
          (k + P) / 2 - S * 20,
          b,
          P,
        ]);
      }
      for (const c of f)
        for (let M = 0; M < 7; M++) {
          const m = 0.1 + (M / 7) * 0.85,
            [k, S] = y(c[0], c[1], c[2], c[3], c[4], c[5], m),
            A = (30 - m * 16) * (0.8 + a() * 0.4);
          ((e.fillStyle = i([16, 30, 18], 0.9 + a() * 0.3)), e.beginPath());
          for (let b = 0; b < 9; b++) {
            const P = (b / 9) * Math.PI * 2,
              _ = A * (0.65 + a() * 0.5);
            e.lineTo(k + Math.cos(P) * _, S + Math.sin(P) * _);
          }
          (e.closePath(), e.fill());
        }
      ((e.strokeStyle = "rgb(46,32,22)"),
        (e.lineWidth = 5),
        e.beginPath(),
        e.moveTo(10, 512 / 2),
        e.quadraticCurveTo(
          512 * 0.45,
          512 / 2 + (x ? 30 : -8),
          512 * 0.8,
          512 / 2 + (x ? 70 : 6),
        ),
        e.stroke());
      for (const c of f) {
        ((e.strokeStyle = "rgb(40,34,22)"),
          (e.lineWidth = 2.5),
          e.beginPath(),
          e.moveTo(c[0], c[1]),
          e.quadraticCurveTo(c[2], c[3], c[4], c[5]),
          e.stroke());
        const M = 120 + Math.floor(a() * 50);
        for (let m = 0; m < M; m++) {
          const k = a(),
            [S, A] = y(c[0], c[1], c[2], c[3], c[4], c[5], k),
            [b, P] = y(
              c[0],
              c[1],
              c[2],
              c[3],
              c[4],
              c[5],
              Math.min(1, k + 0.02),
            ),
            _ =
              Math.atan2(P - A, b - S) +
              (a() < 0.5 ? -1 : 1) * (0.5 + a() * 0.6),
            I = (7 + a() * 9) * (1.1 - k * 0.35),
            R = d(
              d(v, n, Math.min(1, k * 1.4)),
              l,
              Math.max(0, k - 0.55) * 1.8 * a(),
            );
          ((e.strokeStyle = i(R, 0.85 + a() * 0.3)),
            (e.lineWidth = 3.6 + a() * 1.8),
            e.beginPath(),
            e.moveTo(S, A),
            e.lineTo(S + Math.cos(_) * I, A + Math.sin(_) * I),
            e.stroke());
        }
      }
    };
  (p(Bt.cedar, () => w(!1)),
    p(Bt.cedarHang, () => w(!0)),
    p(Bt.broad, () => {
      ((e.strokeStyle = "rgb(58,44,30)"),
        (e.lineWidth = 4),
        (e.lineCap = "round"));
      const x = [
        [12, 512 / 2, 512 * 0.55, 512 / 2 - 20, 512 * 0.95, 512 / 2 + 10],
        [512 * 0.3, 512 / 2, 512 * 0.45, 512 * 0.2, 512 * 0.62, 512 * 0.1],
        [512 * 0.35, 512 / 2, 512 * 0.52, 512 * 0.8, 512 * 0.7, 512 * 0.9],
      ];
      for (const v of x)
        (e.beginPath(),
          e.moveTo(v[0], v[1]),
          e.quadraticCurveTo(v[2], v[3], v[4], v[5]),
          e.stroke());
      for (const v of x)
        for (let n = 0; n < 11; n++) {
          const l = 0.12 + (n / 11) * 0.88,
            [f, h] = y(v[0], v[1], v[2], v[3], v[4], v[5], l),
            c = n % 2 ? 1 : -1,
            M = Math.atan2(v[5] - v[1], v[4] - v[0]) + c * (0.55 + a() * 0.45),
            m = 34 + a() * 22,
            k = [
              [34, 50, 30],
              [40, 58, 32],
              [28, 42, 26],
              [50, 66, 38],
            ][Math.floor(a() * 4)];
          (e.save(),
            e.translate(f + Math.cos(M) * m * 0.5, h + Math.sin(M) * m * 0.5),
            e.rotate(M + (a() - 0.5) * 0.3));
          const S = e.createLinearGradient(0, -m * 0.2, 0, m * 0.2);
          (S.addColorStop(0, i(k, 1.2)),
            S.addColorStop(0.5, i(k, 1)),
            S.addColorStop(1, i(k, 0.72)),
            (e.fillStyle = S),
            e.beginPath(),
            e.moveTo(-m * 0.5, 0),
            e.bezierCurveTo(
              -m * 0.4,
              -m * 0.24,
              m * 0.15,
              -m * 0.2,
              m * 0.55,
              0,
            ),
            e.bezierCurveTo(m * 0.15, m * 0.2, -m * 0.4, m * 0.24, -m * 0.5, 0),
            e.fill(),
            (e.strokeStyle = "rgba(120,140,90,0.3)"),
            (e.lineWidth = 1.2),
            e.beginPath(),
            e.moveTo(-m * 0.5, 0),
            e.lineTo(m * 0.5, 0),
            e.stroke());
          for (let A = 1; A < 4; A++) {
            const b = -m * 0.5 + A * m * 0.25;
            (e.beginPath(),
              e.moveTo(b, 0),
              e.lineTo(b + m * 0.1, -m * 0.1),
              e.moveTo(b, 0),
              e.lineTo(b + m * 0.1, m * 0.1),
              e.stroke());
          }
          e.restore();
        }
    }));
  const g = (x) => {
    const v = x ? [74, 58, 40] : [44, 78, 30],
      n = x ? [98, 80, 58] : [70, 108, 40];
    ((e.strokeStyle = x ? "rgb(80,52,28)" : "rgb(50,74,28)"),
      (e.lineWidth = 4),
      (e.lineCap = "round"),
      e.beginPath(),
      e.moveTo(8, 512 / 2 + 6),
      e.quadraticCurveTo(512 * 0.5, 512 / 2 - 14, 500, 512 / 2 + 4),
      e.stroke());
    const l = 28;
    for (let f = 1; f < l; f++) {
      const h = f / l,
        [c, M] = y(
          8,
          512 / 2 + 6,
          512 * 0.5,
          512 / 2 - 14,
          500,
          512 / 2 + 4,
          h,
        ),
        m = 512 * 0.44 * Math.sin(Math.PI * (0.12 + h * 0.88)) * (1 - h * 0.3);
      for (const k of [-1, 1]) {
        const S = k * (1.15 - h * 0.35) + (a() - 0.5) * 0.12;
        (e.save(), e.translate(c, M), e.rotate(S));
        const A = d(v, n, a() * 0.6 + h * 0.3);
        ((e.fillStyle = i(A)), e.beginPath(), e.moveTo(0, -3));
        const b = 7;
        for (let P = 0; P <= b; P++) {
          const _ = P / b,
            I = (1 - _ * 0.8) * 512 * 0.036;
          e.lineTo(_ * m, -I - (P % 2 ? 2.5 : 0));
        }
        for (let P = b; P >= 0; P--) {
          const _ = P / b,
            I = (1 - _ * 0.8) * 512 * 0.036;
          e.lineTo(_ * m, I + (P % 2 ? 2.5 : 0));
        }
        (e.closePath(), e.fill(), e.restore());
      }
    }
  };
  (p(Bt.fern, () => g(!1)),
    p(Bt.fernDry, () => g(!0)),
    p(Bt.yew, () => {
      e.lineCap = "round";
      for (let x = 0; x < 10; x++) {
        const v = 14 + a() * 180,
          n = 512 / 2 + (a() - 0.5) * 120,
          l = (a() - 0.5) * 1.2,
          f = 180 + a() * 150,
          h = v + Math.cos(l) * f,
          c = n + Math.sin(l) * f;
        ((e.strokeStyle = "rgb(52,40,26)"),
          (e.lineWidth = 2.2),
          e.beginPath(),
          e.moveTo(v, n),
          e.lineTo(h, c),
          e.stroke());
        const M = 60;
        for (let m = 0; m < M; m++) {
          const k = m / M,
            S = v + (h - v) * k,
            A = n + (c - n) * k;
          for (const b of [-1, 1]) {
            const P = l + b * (1.35 + (a() - 0.5) * 0.2),
              _ = 16 + a() * 8;
            ((e.strokeStyle = i(
              d([18, 32, 20], [40, 60, 32], a() * 0.7 + k * 0.2),
            )),
              (e.lineWidth = 3.4),
              e.beginPath(),
              e.moveTo(S, A),
              e.lineTo(S + Math.cos(P) * _, A + Math.sin(P) * _),
              e.stroke());
          }
        }
      }
    }),
    p(Bt.bush, () => {
      for (let x = 0; x < 22; x++) {
        const v = a() * Math.PI * 2,
          n = a() * 512 * 0.3,
          l = 512 / 2 + Math.cos(v) * n,
          f = 512 / 2 + Math.sin(v) * n,
          h = 60 + a() * 50,
          c = v + (a() - 0.5) * 1.2,
          M = [
            [30, 58, 26],
            [40, 70, 32],
            [26, 48, 22],
            [56, 84, 40],
          ][Math.floor(a() * 4)];
        (e.save(), e.translate(l, f), e.rotate(c));
        const m = e.createLinearGradient(-h / 2, 0, h / 2, 0);
        if (
          (m.addColorStop(0, i(M, 0.8)),
          m.addColorStop(1, i(M, 1.2)),
          (e.fillStyle = m),
          e.beginPath(),
          e.ellipse(0, 0, h / 2, h * 0.2, 0, 0, Math.PI * 2),
          e.fill(),
          (e.strokeStyle = "rgba(170,190,130,0.3)"),
          (e.lineWidth = 1.5),
          e.beginPath(),
          e.moveTo(-h / 2, 0),
          e.lineTo(h / 2, 0),
          e.stroke(),
          a() < 0.3)
        ) {
          e.fillStyle = "rgba(200,190,90,0.35)";
          for (let k = 0; k < 6; k++)
            (e.beginPath(),
              e.arc((a() - 0.5) * h * 0.8, (a() - 0.5) * h * 0.25, 2, 0, 7),
              e.fill());
        }
        e.restore();
      }
    }),
    p(Bt.grass, () => {
      for (let x = 0; x < 70; x++) {
        const v = 256 + (a() - 0.5) * 60,
          n = (a() - 0.5) * 1.3,
          l = 512 * (0.45 + a() * 0.5),
          f = v + Math.sin(n) * l,
          h = 508 - Math.cos(n) * l,
          c = v + Math.sin(n) * l * 0.3,
          M = 512 - l * 0.5,
          m = a() < 0.25 ? [120, 108, 60] : d([36, 62, 24], [80, 104, 44], a());
        ((e.fillStyle = i(m)),
          e.beginPath(),
          e.moveTo(v - 4, 510),
          e.quadraticCurveTo(c, M, f, h),
          e.quadraticCurveTo(c + 2, M, v + 4, 510),
          e.closePath(),
          e.fill());
      }
    }),
    p(Bt.ivy, () => {
      ((e.strokeStyle = "rgb(60,48,30)"),
        (e.lineWidth = 3),
        (e.lineCap = "round"),
        e.beginPath(),
        e.moveTo(10, 512 / 2),
        e.bezierCurveTo(
          512 * 0.3,
          512 * 0.3,
          512 * 0.6,
          512 * 0.7,
          502,
          512 / 2,
        ),
        e.stroke());
      for (let x = 0; x < 16; x++) {
        const v = x / 16,
          n = 10 + v * 492,
          l = 512 / 2 + Math.sin(v * Math.PI * 2) * 512 * 0.12,
          f = 34 + a() * 20,
          h = a() * 6.28,
          c = [
            [26, 48, 24],
            [34, 58, 28],
            [22, 40, 20],
          ][Math.floor(a() * 3)];
        (e.save(),
          e.translate(n + (a() - 0.5) * 40, l + (a() - 0.5) * 60),
          e.rotate(h),
          (e.fillStyle = i(c)),
          e.beginPath());
        for (let M = 0; M <= 10; M++) {
          const m = (M / 10) * Math.PI * 2,
            k = f * (M % 2 ? 0.45 : 1) * (M === 0 || M === 10 ? 1.1 : 1);
          e.lineTo(Math.cos(m) * k * 0.6, Math.sin(m) * k * 0.6);
        }
        (e.closePath(),
          e.fill(),
          (e.strokeStyle = "rgba(160,180,140,0.45)"),
          (e.lineWidth = 1.2));
        for (let M = 0; M < 5; M++) {
          const m = (M / 5) * Math.PI * 2;
          (e.beginPath(),
            e.moveTo(0, 0),
            e.lineTo(Math.cos(m) * f * 0.5, Math.sin(m) * f * 0.5),
            e.stroke());
        }
        e.restore();
      }
    }),
    p(Bt.moss, () => {
      e.lineCap = "round";
      for (let x = 0; x < 90; x++) {
        const v = 20 + a() * 472,
          n = 512 * (0.3 + a() * 0.65),
          l = (a() - 0.5) * 50,
          f = d([96, 110, 84], [150, 160, 128], a());
        ((e.strokeStyle = i(f, 0.9)),
          (e.lineWidth = 1.5 + a() * 2.2),
          e.beginPath(),
          e.moveTo(v, 4),
          e.quadraticCurveTo(v + l, n * 0.5, v + l * 0.4 + (a() - 0.5) * 20, n),
          e.stroke());
        for (let h = 0; h < 5; h++) {
          const c = a(),
            M = v + l * c * 0.8,
            m = n * c;
          (e.beginPath(),
            e.moveTo(M, m),
            e.lineTo(M + (a() - 0.5) * 24, m + 10 + a() * 30),
            e.stroke());
        }
      }
    }),
    p(Bt.flowers, () => {
      for (let x = 0; x < 26; x++) {
        const v = 256 + (a() - 0.5) * 120,
          n = 512 * (0.4 + a() * 0.5),
          l = (a() - 0.5) * 0.7,
          f = v + Math.sin(l) * n,
          h = 512 - Math.cos(l) * n;
        ((e.strokeStyle = "rgb(58,84,36)"),
          (e.lineWidth = 2.2),
          e.beginPath(),
          e.moveTo(v, 512),
          e.quadraticCurveTo(v + Math.sin(l) * n * 0.2, 512 - n * 0.5, f, h),
          e.stroke());
        const c = [
            [236, 232, 220],
            [200, 190, 236],
            [240, 226, 150],
            [226, 214, 240],
          ][Math.floor(a() * 4)],
          M = 9 + a() * 7;
        e.fillStyle = i(c);
        for (let m = 0; m < 5; m++) {
          const k = (m / 5) * Math.PI * 2;
          (e.beginPath(),
            e.ellipse(
              f + Math.cos(k) * M * 0.55,
              h + Math.sin(k) * M * 0.55,
              M * 0.5,
              M * 0.34,
              k,
              0,
              Math.PI * 2,
            ),
            e.fill());
        }
        ((e.fillStyle = "rgb(220,190,70)"),
          e.beginPath(),
          e.arc(f, h, M * 0.25, 0, Math.PI * 2),
          e.fill());
      }
    }),
    p(Bt.twigs, () => {
      e.lineCap = "round";
      const x = (v, n, l, f, h, c) => {
        const M = v + Math.cos(l) * f,
          m = n + Math.sin(l) * f;
        if (
          ((e.strokeStyle = "rgb(50,38,28)"),
          (e.lineWidth = h),
          e.beginPath(),
          e.moveTo(v, n),
          e.lineTo(M, m),
          e.stroke(),
          c > 0)
        )
          for (let k = 0; k < 2; k++)
            x(
              v + (M - v) * (0.4 + a() * 0.5),
              n + (m - n) * (0.4 + a() * 0.5),
              l + (a() - 0.5) * 1.6,
              f * 0.6,
              h * 0.65,
              c - 1,
            );
      };
      for (let v = 0; v < 4; v++)
        x(10, 512 / 2 + (a() - 0.5) * 80, (a() - 0.5) * 0.8, 512 * 0.55, 5, 4);
      ((e.fillStyle = "rgb(20,36,22)"), e.fillRect(442, 442, 66, 66));
    }));
  const z = new io(u);
  return (
    (z.colorSpace = lo),
    (z.anisotropy = 8),
    (z.generateMipmaps = !0),
    (z.minFilter = vs),
    z
  );
}
