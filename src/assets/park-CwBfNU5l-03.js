// assets/park-CwBfNU5l 03 — math
// Lines 682-1010 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
const d0 = Math.PI * 2,
  i0 = (e, a) =>
    "a" + Math.floor((e - 350) / 45) + "_" + Math.floor((a - 30) / 45),
  ee = (e, a) =>
    "c" + Math.floor((e - 350) / 45) + "_" + Math.floor((a - 30) / 45),
  t0 = {
    bareA: 0,
    bareB: 1,
    planeLeaf: 2,
    oakLeaf: 3,
    bareC: 4,
    ivy: 5,
    youngTwig: 6,
    hedge: 7,
  };
function Wa(e) {
  const a = e % 4,
    t = Math.floor(e / 4);
  return [a / 4, 1 - (t + 1) / 2, (a + 1) / 4, 1 - t / 2];
}
function Ya() {
  return ye(2048, 1024, (e) => {
    e.clearRect(0, 0, 2048, 1024);
    let a = 7741;
    const t = () => (a = (a * 16807) % 2147483647) / 2147483647,
      r = 512,
      o = (w, s) => {
        (e.save(),
          e.translate((w % 4) * r, Math.floor(w / 4) * r),
          e.beginPath(),
          e.rect(2, 2, r - 4, r - 4),
          e.clip(),
          s(),
          e.restore());
      };
    e.lineCap = "round";
    const n = (w, s, l, u, c, M, h, v = 0.9, S = 0) => {
        const y = [[w, s]];
        let m = w,
          F = s,
          C = l;
        for (let z = 0; z < 4; z++)
          ((C += (t() - 0.5) * 0.35 - S * 0.06),
            (m += (Math.cos(C) * u) / 4),
            (F += (Math.sin(C) * u) / 4),
            y.push([m, F]));
        e.strokeStyle = h;
        for (let z = 0; z < 4; z++)
          ((e.lineWidth = Math.max(0.8, c * (1 - (z / 4) * 0.6))),
            e.beginPath(),
            e.moveTo(y[z][0], y[z][1]),
            e.lineTo(y[z + 1][0], y[z + 1][1]),
            e.stroke());
        const L = [[m, F, C]];
        if (M > 0) {
          const z = 2 + (t() < 0.4 ? 1 : 0);
          for (let W = 0; W < z; W++) {
            const D = 0.35 + t() * 0.6,
              V = Math.min(3, Math.floor(D * 4)),
              A = W % 2 ? 1 : -1;
            L.push(
              ...n(
                y[V][0],
                y[V][1],
                C + A * v * (0.45 + t() * 0.5),
                u * (0.5 + t() * 0.25),
                c * 0.62,
                M - 1,
                h,
                v,
                S,
              ),
            );
          }
        }
        return L;
      },
      i = ["rgb(52,46,40)", "rgb(60,54,46)", "rgb(46,42,38)"];
    (o(t0.bareA, () => {
      for (let w = 0; w < 3; w++)
        n(
          8,
          r / 2 + (t() - 0.5) * 60,
          (t() - 0.5) * 0.4,
          r * 0.42,
          7,
          4,
          i[w % 3],
          0.85,
          1,
        );
    }),
      o(t0.bareB, () => {
        for (let w = 0; w < 4; w++)
          n(
            8,
            r / 2 + (t() - 0.5) * 90,
            (t() - 0.5) * 0.7,
            r * 0.36,
            6,
            4,
            i[(w + 1) % 3],
            1.05,
            0,
          );
      }),
      o(t0.bareC, () => {
        for (let w = 0; w < 3; w++) {
          const s = n(
            8,
            r / 2 + (t() - 0.5) * 70,
            (t() - 0.5) * 0.5,
            r * 0.3,
            7,
            3,
            i[w % 3],
            1.3,
            0,
          );
          for (const [l, u, c] of s)
            n(l, u, c + (t() - 0.5) * 1.6, 30 + t() * 30, 2, 1, i[1], 1.2);
        }
      }),
      o(t0.youngTwig, () => {
        for (let w = 0; w < 5; w++)
          n(
            8,
            r / 2 + (t() - 0.5) * 120,
            (t() - 0.5) * 0.9,
            r * 0.5,
            4,
            3,
            "rgb(64,56,46)",
            0.6,
            2,
          );
      }));
    const f = (w, s, l, u, c) => {
      (e.save(),
        e.translate(w, s),
        e.rotate(u),
        (e.fillStyle = c),
        e.beginPath());
      const M = [
        [-90, 1],
        [-35, 0.85],
        [-145, 0.85],
        [15, 0.55],
        [165, 0.55],
      ];
      for (let h = 0; h <= 40; h++) {
        const v = -Math.PI / 2 + (h / 40) * d0;
        let S = 0.4;
        for (const [m, F] of M) {
          const C = Math.atan2(
            Math.sin(v - (m * Math.PI) / 180),
            Math.cos(v - (m * Math.PI) / 180),
          );
          S = Math.max(S, F * Math.max(0, 1 - Math.abs(C) / 0.45));
        }
        const d = Math.cos(v) * S * l,
          y = Math.sin(v) * S * l;
        h ? e.lineTo(d, y) : e.moveTo(d, y);
      }
      (e.closePath(),
        e.fill(),
        (e.strokeStyle = "rgba(60,40,20,0.5)"),
        (e.lineWidth = 1.5));
      for (const [h, v] of M)
        (e.beginPath(),
          e.moveTo(0, l * 0.1),
          e.lineTo(
            Math.cos((h * Math.PI) / 180) * v * l * 0.8,
            Math.sin((h * Math.PI) / 180) * v * l * 0.8,
          ),
          e.stroke());
      e.restore();
    };
    (o(t0.planeLeaf, () => {
      const w = [];
      for (let l = 0; l < 3; l++)
        w.push(
          ...n(
            8,
            r / 2 + (t() - 0.5) * 60,
            (t() - 0.5) * 0.4,
            r * 0.4,
            6,
            3,
            i[l % 3],
            0.9,
            1,
          ),
        );
      const s = [
        "#a8823e",
        "#94702e",
        "#b8964c",
        "#7c6028",
        "#8a8a3a",
        "#6e5226",
      ];
      for (let l = 0; l < 9; l++) {
        const u = w[Math.floor(t() * w.length)];
        f(
          u[0] + (t() - 0.5) * 30,
          u[1] + 30 + t() * 30,
          34 + t() * 22,
          t() * d0,
          s[Math.floor(t() * s.length)],
        );
      }
      for (let l = 0; l < 6; l++) {
        const u = w[Math.floor(t() * w.length)],
          c = 40 + t() * 50;
        ((e.strokeStyle = "rgb(60,50,40)"),
          (e.lineWidth = 1.5),
          e.beginPath(),
          e.moveTo(u[0], u[1]),
          e.lineTo(u[0] + (t() - 0.5) * 20, u[1] + c),
          e.stroke(),
          (e.fillStyle = "rgb(84,64,38)"),
          e.beginPath(),
          e.arc(u[0] + (t() - 0.5) * 20, u[1] + c + 9, 10, 0, d0),
          e.fill());
      }
    }),
      o(t0.oakLeaf, () => {
        const w = [];
        for (let l = 0; l < 3; l++)
          w.push(
            ...n(
              8,
              r / 2 + (t() - 0.5) * 70,
              (t() - 0.5) * 0.5,
              r * 0.32,
              6,
              3,
              i[l % 3],
              1.2,
              0,
            ),
          );
        const s = ["#6a4422", "#7a5028", "#5a3a1e", "#84582c", "#4e3218"];
        for (let l = 0; l < 30; l++) {
          const u = w[Math.floor(t() * w.length)],
            c = 22 + t() * 16,
            M = u[0] + (t() - 0.5) * 50,
            h = u[1] + (t() - 0.5) * 50;
          (e.save(),
            e.translate(M, h),
            e.rotate(t() * d0),
            (e.fillStyle = s[Math.floor(t() * s.length)]),
            e.beginPath());
          for (let v = 0; v <= 32; v++) {
            const S = (v / 32) * d0,
              d = 1 + 0.25 * Math.pow(Math.abs(Math.sin(S * 4.5)), 2),
              y = Math.cos(S) * c * 0.36 * d,
              m = Math.sin(S) * c * 0.6;
            v ? e.lineTo(y, m) : e.moveTo(y, m);
          }
          (e.closePath(),
            e.fill(),
            (e.strokeStyle = "rgba(30,18,8,0.5)"),
            (e.lineWidth = 1.2),
            e.beginPath(),
            e.moveTo(0, -c * 0.6),
            e.lineTo(0, c * 0.6),
            e.stroke(),
            e.restore());
        }
      }),
      o(t0.ivy, () => {
        ((e.strokeStyle = "rgb(50,40,28)"),
          (e.lineWidth = 3),
          e.beginPath(),
          e.moveTo(10, r / 2),
          e.bezierCurveTo(r * 0.3, r * 0.3, r * 0.6, r * 0.7, r - 10, r / 2),
          e.stroke());
        for (let w = 0; w < 22; w++) {
          const s = w / 22,
            l = 10 + s * (r - 20) + (t() - 0.5) * 40,
            u = r / 2 + Math.sin(s * d0) * r * 0.12 + (t() - 0.5) * 70,
            c = 30 + t() * 22,
            M = [
              [22, 40, 20],
              [30, 50, 26],
              [18, 34, 18],
            ][Math.floor(t() * 3)];
          (e.save(),
            e.translate(l, u),
            e.rotate(t() * d0),
            (e.fillStyle = `rgb(${M[0]},${M[1]},${M[2]})`),
            e.beginPath());
          for (let h = 0; h <= 10; h++) {
            const v = (h / 10) * d0,
              S = c * (h % 2 ? 0.45 : 1);
            e.lineTo(Math.cos(v) * S * 0.6, Math.sin(v) * S * 0.6);
          }
          (e.closePath(), e.fill(), e.restore());
        }
      }),
      o(t0.hedge, () => {
        for (let w = 0; w < 340; w++) {
          const s = t() * d0,
            l = Math.pow(t(), 0.6) * r * 0.44,
            u = r / 2 + Math.cos(s) * l,
            c = r / 2 + Math.sin(s) * l * 0.8,
            M = 16 + t() * 16,
            h = [
              [20, 36, 18],
              [26, 44, 22],
              [32, 52, 26],
              [18, 30, 16],
              [40, 60, 30],
            ][Math.floor(t() * 5)],
            v = 0.8 + t() * 0.45 - (l / r) * 0.5;
          (e.save(),
            e.translate(u, c),
            e.rotate(t() * d0),
            (e.fillStyle = `rgb(${(h[0] * v) | 0},${(h[1] * v) | 0},${(h[2] * v) | 0})`),
            e.beginPath(),
            e.ellipse(0, 0, M, M * 0.42, 0, 0, d0),
            e.fill(),
            e.restore());
        }
      }));
  });
}
