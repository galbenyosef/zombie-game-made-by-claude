// assets__metro-xgLUk92P 12 — math
// Lines 4056-4177 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function Gt(
  c,
  a,
  o,
  s,
  f,
  { chunk: h = "", bag: d = !1, foil: l = !1, rng: i } = {},
) {
  const { B: t, M: e } = c,
    n = Mt(a, o, s, f),
    r = i || Math.random,
    u = (r() - 0.5) * 0.2,
    b = 0.04 + r() * 0.08,
    M = r() * 6.28,
    x = [
      [0.02, -0.82, 0.12, 0.14, 0.17],
      [0, -0.48, 0.25, 0.17, 0.2],
      [u * 0.3, -0.12, 0.22, 0.24, 0.17],
      [u * 0.5, 0.2, 0.2, 0.16, 0.15],
      [-0.1 - b * 0.5, 0.55, 0.09, 0.26, 0.11],
      [0.1 + b * 0.5, 0.55, 0.09, 0.26, 0.11],
      [-0.11 - b, 0.92, 0.07, 0.08, 0.17],
      [0.11 + b, 0.92, 0.07, 0.08, 0.17],
    ];
  d || x.push([0.33, -0.3 + r() * 0.2, 0.07, 0.24, 0.07]);
  const w = d ? 0.62 : 0.95,
    p = d ? 2 : 2.15,
    S = 26,
    y = 54,
    L = (k, R) => {
      let W = 0;
      for (const [Y, $, Z, H, V] of x) {
        const I =
          ((k - Y) / (Z + (d ? 0.04 : 0.1))) ** 2 +
          ((R - $) / (H + (d ? 0.04 : 0.1))) ** 2;
        if (I < 1) {
          const E = 1 - I,
            N = V * Math.sqrt(E) * (0.65 + 0.35 * E);
          W = Math.max(W, N) + 0.25 * Math.min(W, N) * E;
        }
      }
      return W;
    },
    v = new ho(w, p, S, y).rotateX(-Math.PI / 2),
    C = v.attributes.position;
  for (let k = 0; k < C.count; k++) {
    const R = C.getX(k),
      W = C.getZ(k),
      Y = Math.min(w / 2 - Math.abs(R), p / 2 - Math.abs(W));
    let $ = L(R, W);
    (d ||
      ($ +=
        (l ? 0.006 : 0.01) *
          Math.sin(R * 17 + W * 6 + M) *
          Math.min(1, $ * 12) +
        0.005 * Math.sin(W * 23 - R * 5 + M * 2)),
      ($ = Math.max(0.006, $ * Math.min(1, Y / 0.06))),
      C.setY(k, $));
  }
  if (
    (v.computeVertexNormals(),
    it(v, 1.5),
    v0(t, v, d ? e.rubber : l ? e.foil : e.sheet, n, { chunk: h }),
    d)
  )
    v0(
      t,
      T(-0.008, 0, -0.9, 0.008, 0.012, 0.9).translate(0, 0.205, 0),
      e.galvDark,
      n,
      { chunk: h, cast: !1 },
    );
  else
    for (const k of [-1, 1]) {
      const R = new U0(1, 10, 6)
        .scale(0.05, 0.05, 0.12)
        .translate(k * (0.11 + b), 0.05, 1.12);
      v0(t, R, e.black, n, { chunk: h });
    }
  return [];
}
const ha = [
    [0, 0.15, "tileTeal"],
    [0.15, 1.2, "tileCream"],
    [1.2, 1.275, "tileTeal"],
    [1.275, 2.4, "tileCream"],
    [2.4, 3, "tileTeal"],
    [3, 3.075, "tileCream"],
    [3.075, 3.15, "tileTeal"],
    [3.15, 4.2, "tileCream"],
  ],
  vo = [];
for (let c = 0; c <= m.cols.length; c++)
  vo.push([
    c === 0 ? m.x0 : m.cols[c - 1],
    c === m.cols.length ? m.x1 : m.cols[c],
  ]);
function le(c, a, o, s, f, h, d, l = [], i = "ash") {
  const { B: t, M: e } = c;
  for (const [n, r, u] of ha) {
    const b = h + n,
      M = Math.min(h + r, d);
    if (M <= b) continue;
    const x = l
      .filter((S) => S[2] < M - 1e-4 && S[3] > b + 1e-4)
      .sort((S, y) => S[0] - y[0]);
    let w = s;
    const p = (S, y, L, v) => {
      y - S > 0.001 &&
        v - L > 0.001 &&
        t.add(r0(a, o, S, y, L, v), e[u], { chunk: i });
    };
    for (const S of x)
      (p(w, Math.max(w, S[0]), b, M),
        S[2] > b &&
          p(Math.max(w, S[0]), Math.min(f, S[1]), b, Math.min(M, S[2])),
        S[3] < M &&
          p(Math.max(w, S[0]), Math.min(f, S[1]), Math.max(b, S[3]), M),
        (w = Math.max(w, S[1])));
    p(w, f, b, M);
  }
}
