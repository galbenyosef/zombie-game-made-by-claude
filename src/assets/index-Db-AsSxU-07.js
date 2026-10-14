// assets/index-Db-AsSxU 07 — math
// Lines 1847-2132 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function mo(e, o) {
  const [n, c, t, s] = e.head.rect,
    i = 1024,
    r = Math.round((i * s) / t),
    l = Object.assign(document.createElement("canvas"), {
      width: i,
      height: r,
    }),
    a = l.getContext("2d"),
    u = i / (t * 1e3);
  (a.setTransform(u, 0, 0, -u, -n * 1e3 * u, (c + s) * 1e3 * u),
    a.clearRect(n * 1e3, c * 1e3, t * 1e3, s * 1e3));
  const f = e.head.features,
    d = e.face || {},
    v = ot(d.seed ?? 7),
    C = [
      [f.eyeL[0], f.eyeL[1], 1],
      [f.eyeR[0], f.eyeR[1], -1],
    ],
    p = f.mouthY,
    F = f.mouthW,
    J = d.shadow ?? "46,26,44";
  for (const [y, E, c0] of C)
    (we(a, c0 * 58, 18, 22, 30, J, 0.28 * (d.gaunt ?? 1)),
      we(a, c0 * 44, p + 4, 16, 24, J, 0.32 * (d.gaunt ?? 1)));
  for (const [y, E, c0] of C) {
    const u0 = c0 > 0 ? (d.socketL ?? 1) : (d.socketR ?? 1);
    (we(a, y, E - 2, 22, 18, J, 0.55 * u0, 0, 0.2),
      we(
        a,
        y + c0 * 3,
        E - 9,
        17,
        9,
        d.bags ?? "60,30,48",
        0.6 * u0,
        c0 * -0.15,
        0.25,
      ),
      we(a, y, E + 1, 15, 11, "20,10,16", 0.7 * u0, 0, 0.35),
      (a.fillStyle = `rgba(${d.lidRed ?? "120,32,40"},${0.85 * u0})`),
      ie(
        a,
        Ie(
          [y - c0 * 12, E - 5],
          [y - c0 * 5, E - 10.5],
          [y + c0 * 6, E - 10.5],
          [y + c0 * 13, E - 6.5],
        ).map((q) => [q[0], q[1]]),
        (q) => Math.sin(q * Math.PI) * 2.6 + 0.3,
      ),
      (a.fillStyle = `rgba(20,12,16,${0.8 * u0})`),
      ie(
        a,
        Ie(
          [y - c0 * 13, E + 1],
          [y - c0 * 6, E + 9],
          [y + c0 * 6, E + 9],
          [y + c0 * 14, E + 1],
        ),
        (q) => Math.sin(q * Math.PI) * 1.4 + 0.2,
      ),
      (a.fillStyle = `rgba(${J},${0.6 * u0})`),
      ie(
        a,
        Ie(
          [y - c0 * 12, E + 7],
          [y - c0 * 5, E + 15],
          [y + c0 * 7, E + 15],
          [y + c0 * 15, E + 6],
        ),
        (q) => Math.sin(q * Math.PI) * 1,
      ));
  }
  if (d.brows !== !1) {
    const y = d.browCol ?? "34,26,24";
    for (const [E, c0, u0] of C) {
      const q = u0 > 0 ? (d.browDropL ?? 0) : (d.browDropR ?? 0),
        $ = Ie(
          [E - u0 * 15, c0 + 15 - q],
          [E - u0 * 6, c0 + 19 - q * 0.5],
          [E + u0 * 7, c0 + 19],
          [E + u0 * 18, c0 + 13],
        );
      ((a.fillStyle = `rgba(${y},${d.browA ?? 0.75})`),
        ie(
          a,
          $,
          (x) => (x < 0.2 ? 1.5 + x * 8 : 3.1 * (1 - x) + 0.4) * (d.browW ?? 1),
        ),
        (a.fillStyle = `rgba(${y},0.5)`));
      for (let x = 0; x < 14; x++) {
        const e0 = v(),
          H = $[Math.floor(e0 * ($.length - 1))];
        ie(
          a,
          [
            [H[0], H[1] - 1],
            [H[0] + u0 * (1.5 + v() * 2), H[1] + 1.2 + v()],
          ],
          0.35,
        );
      }
    }
  }
  a.fillStyle = `rgba(${J},${0.45 * (d.creases ?? 1)})`;
  for (let y = 0; y < 3; y++) {
    const E = 42 + y * 7 + (v() - 0.5) * 2;
    ie(
      a,
      Ie([-26, E - 1], [-10, E + 1.5], [10, E + 1.5], [26, E - 1.5]),
      (c0) => Math.sin(c0 * Math.PI) * 0.9,
    );
  }
  for (const y of [1, -1])
    ie(
      a,
      Ie(
        [y * 13, f.noseTip - 2],
        [y * 20, p + 4],
        [y * 23, p - 4],
        [y * 24, p - 16],
      ),
      (E) => Math.sin(E * Math.PI) * 1.6 * (d.creases ?? 1),
    );
  we(a, 0, f.noseTip - 8, 11, 4, "30,14,20", 0.6);
  for (const y of [1, -1])
    we(a, y * 6, f.noseTip - 6.5, 2.8, 1.8, "12,4,6", 0.9, 0, 0.4);
  d.noseBlood &&
    Lt(a, v, -4, f.noseTip - 7, 7, 10, d.blood ?? "70,10,14", 0.85);
  const n0 = d.veinCol ?? "52,40,76";
  for (let y = 0; y < (d.veins ?? 6); y++) {
    const E = y % 2 ? 1 : -1,
      c0 = E * (40 + v() * 20),
      u0 = 10 + v() * 30;
    pt(
      a,
      v,
      c0,
      u0,
      (E > 0 ? Math.PI : 0) + (v() - 0.5) * 1.6,
      18 + v() * 16,
      1.2,
      n0,
      0.55,
    );
  }
  for (const y of [1, -1])
    pt(a, v, y * 30, p - 6, -Math.PI / 2 + y * 0.4, 20, 1, n0, 0.45);
  for (const y of d.bruises || [])
    (we(a, y[0], y[1], y[2], y[3], "88,52,96", 0.55, y[4] ?? 0, 0.2),
      we(
        a,
        y[0] + y[2] * 0.3,
        y[1] - y[3] * 0.2,
        y[2] * 1.3,
        y[3] * 1.2,
        "120,120,60",
        0.25,
        0,
        0.1,
      ));
  if (d.stubble) {
    a.fillStyle = `rgba(${d.stubbleCol ?? "40,34,34"},0.5)`;
    for (let y = 0; y < 2600; y++) {
      const E = (v() - 0.5) * 100,
        c0 = p + 12 - v() * 60;
      Math.hypot(E / 50, (c0 - p + 5) / 40) > 1 ||
        (Math.abs(E) < F + 3 && Math.abs(c0 - p) < 7) ||
        (c0 > f.noseTip - 5 && Math.abs(E) < 16) ||
        (a.beginPath(), a.arc(E, c0, 0.28 + v() * 0.25, 0, tt), a.fill());
    }
  }
  const _ = d.lipCol ?? "62,30,44";
  ((a.fillStyle = `rgba(${_},0.92)`),
    ie(
      a,
      Ie(
        [-F - 2, p + 1],
        [-F * 0.4, p + 7.5],
        [F * 0.4, p + 7.5],
        [F + 2, p + 1],
      ),
      (y) => Math.sin(y * Math.PI) * 5 + 1,
    ),
    ie(
      a,
      Ie([-F - 1, p - 1], [-F * 0.4, p - 9], [F * 0.4, p - 9], [F + 1, p - 1]),
      (y) => Math.sin(y * Math.PI) * 6 + 1,
    ),
    (a.fillStyle = "rgba(20,6,10,0.8)"));
  for (let y = 0; y < 12; y++) {
    const E = (v() - 0.5) * F * 1.7,
      c0 = v() < 0.5,
      u0 = c0 ? p + 4 + v() * 3 : p - 5 - v() * 4;
    ie(
      a,
      [
        [E, u0],
        [E + (v() - 0.5) * 1.5, u0 + (c0 ? 2.5 : -3)],
      ],
      0.45,
    );
  }
  for (const y of d.tornCorner || []) {
    const E = y;
    ((a.fillStyle = "rgba(96,14,22,0.95)"),
      a.beginPath(),
      a.moveTo(E * (F - 1), p + 2),
      a.lineTo(E * (F + 12), p + 5 + v() * 2),
      a.lineTo(E * (F + 14), p - 1),
      a.lineTo(E * (F + 9), p - 5),
      a.lineTo(E * (F - 1), p - 3),
      a.closePath(),
      a.fill(),
      (a.fillStyle = "rgba(40,6,10,0.9)"),
      ie(
        a,
        [
          [E * F, p - 0.5],
          [E * (F + 12), p + 1.5],
        ],
        1.4,
      ),
      (a.fillStyle = "rgba(180,160,120,0.9)"));
    for (let c0 = 0; c0 < 3; c0++) {
      const u0 = E * (F + 2 + c0 * 3);
      a.fillRect(Math.min(u0, u0 + E * 2), p - 0.5, 2, 2.5);
    }
  }
  const G = d.blood ?? "70,10,14";
  for (const y of d.mouthBlood || [[0, 1]]) {
    const [E, c0] = y;
    Lt(a, v, E, p - 6, F * 1.4 * c0, (f.mouthY - f.chinY + 20) * c0, G, 0.9);
  }
  (Zt(a, v, 0, p - 10, 30, 40 * (d.spatter ?? 1), G, 0.8),
    we(a, 0, p - 2, F + 8, 9, G, 0.35));
  for (const y of d.wounds || []) {
    const [E, c0, u0, q] = y;
    (we(a, E, c0, u0 * 2.2, u0 * 1.6, G, 0.7, q),
      (a.fillStyle = "rgba(110,16,26,1)"),
      a.beginPath());
    for (let $ = 0; $ <= 14; $++) {
      const x = ($ / 14) * tt,
        e0 = u0 * (0.75 + v() * 0.45),
        H = E + Math.cos(x) * e0 * 1.4,
        z = c0 + Math.sin(x) * e0 * 0.7;
      $ ? a.lineTo(H, z) : a.moveTo(H, z);
    }
    (a.closePath(),
      a.fill(),
      (a.fillStyle = "rgba(40,4,8,0.95)"),
      ie(
        a,
        [
          [E - u0 * 1.1, c0],
          [E + u0 * 1.1, c0 + (v() - 0.5)],
        ],
        u0 * 0.5,
      ),
      (a.fillStyle = "rgba(200,150,140,0.5)"),
      ie(
        a,
        [
          [E - u0 * 0.9, c0 + u0 * 0.35],
          [E + u0 * 0.8, c0 + u0 * 0.4],
        ],
        0.6,
      ));
  }
  return (
    d.extra &&
      d.extra(a, {
        R: v,
        blob: we,
        vstroke: ie,
        bez: Ie,
        vein: pt,
        bloodRun: Lt,
        spatter: Zt,
        F: f,
      }),
    l
  );
}
const We = (e) => (e > 0 ? "L" : "R");
