// assets__study-C-Lxctw8 05 — push
// Lines 1585-1691 of readable/assets__study-C-Lxctw8.pretty.js (statement-aligned).
const g = {
  L: 3.15,
  baseD: 0.38,
  upD: 0.28,
  off: 0.055,
  plinth: 0.1,
  ledgeY: 0.895,
  shelves: [1.19, 1.48, 1.77, 2.06],
  topY: 2.35,
  t: 0.024,
};
function V0(I, L, u = 2) {
  const c = (I * 128 + u) / 2048,
    b = ((I + 1) * 128 - u) / 2048,
    e = 1 - (L * 1024 + 1024 - u) / 2048,
    a = 1 - (L * 1024 + u) / 2048;
  return [c, e, b, a];
}
function mo(I, L, u, c, b, e, a, n, t) {
  const h = b / 2,
    s = a / 2,
    M = [
      n[0] + (n[2] - n[0]) * 0.35,
      n[1] + (n[3] - n[1]) * 0.03,
      n[0] + (n[2] - n[0]) * 0.65,
      n[1] + (n[3] - n[1]) * 0.09,
    ],
    k = [
      [
        [0, 0, 1],
        [
          [-h, 0, s],
          [h, 0, s],
          [h, e, s],
          [-h, e, s],
        ],
        n,
      ],
      [
        [0, 0, -1],
        [
          [h, 0, -s],
          [-h, 0, -s],
          [-h, e, -s],
          [h, e, -s],
        ],
        M,
      ],
      [
        [1, 0, 0],
        [
          [h, 0, s],
          [h, 0, -s],
          [h, e, -s],
          [h, e, s],
        ],
        M,
      ],
      [
        [-1, 0, 0],
        [
          [-h, 0, -s],
          [-h, 0, s],
          [-h, e, s],
          [-h, e, -s],
        ],
        M,
      ],
      [
        [0, 1, 0],
        [
          [-h, e, s],
          [h, e, s],
          [h, e, -s],
          [-h, e, -s],
        ],
        [t[0], t[3], t[2], t[1]],
      ],
      [
        [0, -1, 0],
        [
          [-h, 0, -s],
          [h, 0, -s],
          [h, 0, s],
          [-h, 0, s],
        ],
        t,
      ],
    ],
    P = new J0(),
    i = new J0(),
    v = new Ao().getNormalMatrix(c);
  for (const [G, S, l] of k) {
    const m = [
      [l[0], l[1]],
      [l[2], l[1]],
      [l[2], l[3]],
      [l[0], l[3]],
    ];
    for (const r of [0, 1, 2, 0, 2, 3])
      (P.set(S[r][0], S[r][1], S[r][2]).applyMatrix4(c),
        I.push(P.x, P.y, P.z),
        i.set(G[0], G[1], G[2]).applyMatrix3(v).normalize(),
        L.push(i.x, i.y, i.z),
        u.push(m[r][0], m[r][1]));
  }
}
