// assets/index-Db-AsSxU 20 — math
// Lines 9152-9485 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function Z0(e, o, n) {
  const c = o.length;
  if (c < 2) return;
  const t = [],
    s = [];
  for (let i = 0; i < c; i++) {
    const r = o[Math.max(0, i - 1)],
      l = o[Math.min(c - 1, i + 1)];
    let a = l[0] - r[0],
      u = l[1] - r[1];
    const f = Math.hypot(a, u) || 1;
    ((a /= f), (u /= f));
    const d = (typeof n == "function" ? n(i / (c - 1)) : n) * 0.5;
    (t.push([o[i][0] - u * d, o[i][1] + a * d]),
      s.push([o[i][0] + u * d, o[i][1] - a * d]));
  }
  (e.beginPath(), e.moveTo(t[0][0], t[0][1]));
  for (let i = 1; i < c; i++) e.lineTo(t[i][0], t[i][1]);
  for (let i = c - 1; i >= 0; i--) e.lineTo(s[i][0], s[i][1]);
  (e.closePath(), e.fill());
}
const J0 = (e, o, n, c, t = 18) => {
  const s = [];
  for (let i = 0; i <= t; i++) {
    const r = i / t,
      l = 1 - r;
    s.push([
      l * l * l * e[0] +
        3 * l * l * r * o[0] +
        3 * l * r * r * n[0] +
        r * r * r * c[0],
      l * l * l * e[1] +
        3 * l * l * r * o[1] +
        3 * l * r * r * n[1] +
        r * r * r * c[1],
    ]);
  }
  return s;
};
function fe(e, o, n, c, t, s, i, r = 0, l = 0) {
  (e.save(), e.translate(o, n), e.rotate(r), e.scale(1, t / c));
  const a = e.createRadialGradient(0, 0, 0, 0, 0, c);
  (a.addColorStop(0, `rgba(${s},${i})`),
    a.addColorStop(Math.max(0.01, l), `rgba(${s},${i})`),
    a.addColorStop(1, `rgba(${s},0)`),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(0, 0, c, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function Ro(e, o) {
  const [n, c, t, s] = e.head.rect,
    i = 1024,
    r = Math.round((i * s) / t),
    l = o
      ? o(i, r)
      : Object.assign(document.createElement("canvas"), {
          width: i,
          height: r,
        }),
    a = l.getContext("2d"),
    u = i / (t * 1e3);
  (a.setTransform(u, 0, 0, -u, -n * 1e3 * u, (c + s) * 1e3 * u),
    a.clearRect(n * 1e3, c * 1e3, t * 1e3, s * 1e3));
  const f = e.head.features,
    d = ot(57),
    v = [
      [f.eyeL[0], f.eyeL[1], 1],
      [f.eyeR[0], f.eyeR[1], -1],
    ],
    C = f.mouthY,
    p = f.mouthW,
    F = f.noseTip,
    J = "128,78,68",
    n0 = "98,56,50";
  for (const [_, G, y] of v)
    (fe(a, y * 40, -40, 20, 15, "196,120,108", 0.15),
      fe(a, y * 57, 16, 16, 26, "150,104,92", 0.18),
      fe(a, _, G - 2, 17, 12, "214,130,120", 0.15));
  (fe(a, 0, F + 4, 11, 9, "200,110,100", 0.22),
    fe(a, 0, 62, 42, 22, "222,178,150", 0.12));
  for (const [_, G, y] of v) {
    (fe(a, _, G + 5, 14, 5, "214,168,148", 0.28),
      fe(a, _ + y * 2, G - 14, 13, 5.5, "150,100,92", 0.14, y * -0.1),
      (a.fillStyle = `rgba(${J},0.3)`),
      Z0(
        a,
        J0(
          [_ - y * 11, G - 17],
          [_ - y * 4, G - 21.5],
          [_ + y * 6, G - 21.5],
          [_ + y * 14, G - 16],
        ),
        (E) => Math.sin(E * Math.PI) * 1.1 + 0.15,
      ),
      (a.fillStyle = "rgba(232,190,166,0.22)"),
      Z0(
        a,
        J0(
          [_ - y * 10, G - 20],
          [_ - y * 3, G - 24.5],
          [_ + y * 6, G - 24.5],
          [_ + y * 13, G - 19],
        ),
        (E) => Math.sin(E * Math.PI) * 1.6,
      ),
      (a.fillStyle = `rgba(${J},0.5)`),
      Z0(
        a,
        J0(
          [_ - y * 12, G + 2.2],
          [_ - y * 6, G + 8.8],
          [_ + y * 6, G + 8.8],
          [_ + y * 14, G + 1.4],
        ),
        (E) => Math.sin(E * Math.PI) * 1.1 + 0.2,
      ),
      (a.fillStyle = "rgba(70,46,42,0.6)"),
      Z0(
        a,
        J0(
          [_ - y * 10.5, G - 0.4],
          [_ - y * 4, G + 2.4],
          [_ + y * 5, G + 2.4],
          [_ + y * 11.5, G - 1],
        ),
        (E) => Math.sin(E * Math.PI) * 0.9 + 0.25,
      ),
      (a.fillStyle = "rgba(214,112,112,0.62)"),
      Z0(
        a,
        J0(
          [_ - y * 10, G - 2.4],
          [_ - y * 4, G - 5.2],
          [_ + y * 5, G - 5.2],
          [_ + y * 11, G - 1.8],
        ),
        (E) => Math.sin(E * Math.PI) * 1.2 + 0.25,
      ),
      (a.fillStyle = "rgba(120,80,72,0.22)"),
      Z0(
        a,
        J0(
          [_ - y * 9, G - 4.8],
          [_ - y * 3, G - 7.2],
          [_ + y * 5, G - 7.2],
          [_ + y * 11, G - 3.6],
        ),
        (E) => Math.sin(E * Math.PI) * 0.7,
      ),
      fe(a, _ - y * 11.2, G - 0.6, 2.4, 2, "222,120,122", 0.75, 0, 0.35),
      (a.fillStyle = `rgba(${J},0.38)`));
    for (let E = 0; E < 3; E++) {
      const c0 = G + 3 - E * 4.2;
      Z0(
        a,
        J0(
          [_ + y * 15, c0],
          [_ + y * 19, c0 + (1 - E) * 0.8],
          [_ + y * 22, c0 + (1 - E) * 1.8],
          [_ + y * 26, c0 + (1 - E) * 3.2],
        ),
        (u0) => Math.sin(u0 * Math.PI) * 0.8,
      );
    }
  }
  for (const [_, G, y] of v) {
    const E = J0([y * 10, 16], [y * 20, 20.5], [y * 36, 20], [y * 50, 11]);
    ((a.fillStyle = "rgba(120,114,108,0.55)"),
      Z0(a, E, (c0) => (c0 < 0.15 ? 3 + c0 * 16 : 5.5 * (1 - c0) + 1.2)));
    for (let c0 = 0; c0 < 70; c0++) {
      const u0 = d(),
        q = E[Math.floor(u0 * (E.length - 1))],
        $ = q[0] + (d() - 0.5) * 3,
        x = q[1] + (d() - 0.6) * 4 * (1 - u0 * 0.5),
        e0 = 3 + d() * 5,
        H = (y > 0 ? 0.25 : Math.PI - 0.25) + (d() - 0.5) * 0.7 - y * u0 * 0.5;
      ((a.fillStyle =
        d() < 0.6 ? "rgba(214,210,202,0.75)" : "rgba(88,82,78,0.65)"),
        Z0(
          a,
          [
            [$, x],
            [$ + Math.cos(H) * e0 * 0.5, x + Math.sin(H) * e0 * 0.5 + 0.4],
            [$ + Math.cos(H) * e0, x + Math.sin(H) * e0],
          ],
          (z) => 0.42 * (1 - z * 0.7),
        ));
    }
  }
  a.fillStyle = `rgba(${J},0.4)`;
  for (let _ = 0; _ < 4; _++) {
    const G = 44 + _ * 7.5 + (d() - 0.5) * 1.5,
      y = 30 - _ * 2;
    Z0(
      a,
      J0([-y, G - 1.5], [-y * 0.35, G + 1.8], [y * 0.35, G + 1.2], [y, G - 2]),
      (E) => Math.sin(E * Math.PI) * (0.9 + (d() - 0.5) * 0.3),
    );
  }
  for (const _ of [1, -1])
    ((a.fillStyle = `rgba(${J},0.45)`),
      Z0(
        a,
        J0([_ * 5, 14], [_ * 5.5, 20], [_ * 5, 25], [_ * 6.5, 30]),
        (G) => Math.sin(G * Math.PI) * 1,
      ),
      (a.fillStyle = `rgba(${n0},0.22)`),
      Z0(
        a,
        J0([_ * 16, F + 2], [_ * 23, F - 16], [_ * 27, C + 6], [_ * 29, C - 8]),
        (G) => Math.sin(G * Math.PI) * 1.6 + 0.2,
      ),
      (a.fillStyle = "rgba(236,190,164,0.1)"),
      Z0(
        a,
        J0([_ * 19, F + 1], [_ * 26, F - 16], [_ * 30, C + 6], [_ * 32, C - 6]),
        (G) => Math.sin(G * Math.PI) * 2.2,
      ),
      (a.fillStyle = `rgba(${J},0.18)`),
      Z0(
        a,
        J0(
          [_ * (p + 1.5), C - 2],
          [_ * (p + 3), C - 9],
          [_ * (p + 4), C - 16],
          [_ * (p + 6), C - 25],
        ),
        (G) => Math.sin(G * Math.PI) * 1.2,
      ),
      Z0(
        a,
        J0([_ * 38, -32], [_ * 40, -45], [_ * 40, -58], [_ * 38, -70]),
        (G) => Math.sin(G * Math.PI) * 0.9,
      ));
  ((a.fillStyle = `rgba(${J},0.28)`),
    Z0(
      a,
      J0([-11, -111], [-4, -108], [4, -108], [11, -111]),
      (_) => Math.sin(_ * Math.PI) * 1.4,
    ),
    fe(a, 0, F - 7, 10, 3.8, "110,62,56", 0.55));
  for (const _ of [1, -1])
    (fe(a, _ * 5.6, F - 6, 2.7, 1.7, "40,18,18", 0.9, 0, 0.45),
      (a.fillStyle = `rgba(${J},0.4)`),
      Z0(
        a,
        J0(
          [_ * 10, F + 5],
          [_ * 13.5, F + 1],
          [_ * 13.5, F - 4],
          [_ * 10, F - 7],
        ),
        (G) => Math.sin(G * Math.PI) * 1,
      ));
  for (let _ = 0; _ < 5200; _++) {
    const G = (d() - 0.5) * 104,
      y = C + 34 - d() * 72,
      E = Math.hypot(G / 52, (y - C + 8) / 44);
    if (
      E > 1 ||
      d() > 1.25 - E * 1.1 ||
      (Math.abs(G) < p + 2.5 && Math.abs(y - C) < 5.5) ||
      (y > F - 9 && Math.abs(G) < 17) ||
      (y > F + 4 - Math.abs(G) * 0.35 && Math.abs(G) > 17)
    )
      continue;
    const c0 = d() < 0.4,
      u0 = y > C && Math.abs(G) < p + 4 ? 0.55 : 1;
    ((a.fillStyle = c0
      ? `rgba(196,192,186,${0.42 * u0})`
      : `rgba(92,84,80,${0.42 * u0})`),
      a.beginPath(),
      a.arc(G, y, 0.24 + d() * 0.22, 0, Math.PI * 2),
      a.fill());
  }
  ((a.fillStyle = "rgba(168,98,92,0.6)"),
    Z0(
      a,
      J0(
        [-p - 1, C + 0.2],
        [-p * 0.4, C + 4.8],
        [p * 0.4, C + 4.8],
        [p + 1, C + 0.2],
      ),
      (_) => Math.sin(_ * Math.PI) * 3.2 + 0.5,
    ),
    (a.fillStyle = "rgba(178,108,102,0.58)"),
    Z0(
      a,
      J0([-p, C - 0.8], [-p * 0.4, C - 7], [p * 0.4, C - 7], [p, C - 0.8]),
      (_) => Math.sin(_ * Math.PI) * 4.2 + 0.5,
    ),
    (a.fillStyle = "rgba(84,40,40,0.8)"),
    Z0(
      a,
      J0(
        [-p - 1.5, C - 1.4],
        [-p * 0.4, C + 0.6],
        [p * 0.4, C + 0.6],
        [p + 1.5, C - 1.4],
      ),
      (_) => 0.5 + Math.sin(_ * Math.PI) * 0.7,
    ),
    fe(a, 0, C + 9, 4, 5, "150,96,84", 0.2));
  for (let _ = 0; _ < 7; _++) {
    const G = _ % 2 ? 1 : -1;
    fe(
      a,
      G * (30 + d() * 28),
      20 + d() * 45,
      1.6 + d() * 2.2,
      1.4 + d() * 1.8,
      "150,100,70",
      0.28,
      d() * 3,
      0.3,
    );
  }
  for (const [_, G, y] of v)
    ((a.fillStyle = "rgba(232,168,158,0.2)"),
      Z0(
        a,
        J0(
          [_ - y * 3, G - 8],
          [_ - y * 4, G - 20],
          [_ - y * 2, G - 32],
          [_ - y * 4, G - 44],
        ),
        (E) => 1.4 * (1 - E * 0.6),
      ));
  return l;
}
