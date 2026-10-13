// assets__index-BcIwWgby 30 — math
// Lines 8921-9216 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function ha(s, o, t, u, e, r, a = 0, p = 0, i = null) {
  const d = [],
    y = [],
    w = [];
  for (let z = 0; z <= r; z++) {
    const x = z / r,
      v = o(x),
      n = i ? i(x) : t,
      l = i ? Math.PI * 2 - i(x) : u;
    for (let f = 0; f <= e; f++) {
      const h = n + ((l - n) * f) / e,
        c = s(h, x);
      (d.push(a + Math.sin(h) * c, v, p + Math.cos(h) * c),
        y.push((f / e) * 1.5, v));
    }
  }
  for (let z = 0; z < r; z++)
    for (let x = 0; x < e; x++) {
      const v = z * (e + 1) + x,
        n = v + 1,
        l = v + e + 1,
        f = l + 1;
      w.push(v, n, l, n, f, l);
    }
  const g = new Rt();
  return (
    g.setAttribute("position", new xt(d, 3)),
    g.setAttribute("uv", new xt(y, 2)),
    g.setIndex(w),
    g.computeVertexNormals(),
    g
  );
}
const Dr = (s, o, t) =>
    1 / Math.sqrt((Math.sin(s) / o) ** 2 + (Math.cos(s) / t) ** 2),
  Br = (s, o) => {
    for (let u = 1; u < s.length; u++)
      if (o <= s[u][0]) {
        const [e, r, a] = s[u - 1],
          [p, i, d] = s[u],
          y = (o - e) / (p - e);
        return [r + (i - r) * y, a + (d - a) * y];
      }
    const t = s[s.length - 1];
    return [t[1], t[2]];
  };
function $o(s, o, t, u, e, r) {
  const a = (n) => (n.applyMatrix4(o), n),
    p = [
      [0, 0.27, 0.23],
      [0.12, 0.24, 0.2],
      [0.35, 0.205, 0.17],
      [0.55, 0.17, 0.14],
      [0.7, 0.18, 0.14],
      [0.86, 0.205, 0.14],
      [0.95, 0.19, 0.12],
      [1, 0.065, 0.065],
    ],
    i = u * 0.84,
    d = r() * 6,
    y = (n, l, f = 1) => {
      const [h, c] = Br(p, l),
        M =
          (1 - l) ** 1.4 *
          0.14 *
          Math.cos(n * 7 + d) *
          (0.7 + 0.3 * Math.sin(l * 9 + d));
      return Dr(n, h, c) * f * (1 + M);
    },
    w = (n, l, f = 1) => y(Math.PI / 2 - n, l, f),
    g = (n) => t + n * i,
    z = (n) => {
      const l = (f) => Math.sin(Math.PI * Math.min(1, f * 1.02)) ** 0.75;
      s(
        n,
        a(
          A0(
            (f, h) => {
              const c = Math.cos(f - Math.PI / 2),
                M = Math.max(0, c) ** 6,
                m = Math.exp(-(((h - 0.62) / 0.05) ** 2)),
                k =
                  Math.exp(-(((h - 0.54) / 0.05) ** 2)) *
                  Math.max(0, Math.cos((f - Math.PI / 2) * 4)) ** 2,
                S =
                  Math.exp(-(((h - 0.44) / 0.09) ** 2)) * Math.max(0, c) ** 40,
                A = Math.exp(-(((h - 0.18) / 0.07) ** 2)) * M;
              return (
                0.085 *
                  l(h) *
                  (1 + 0.08 * M) *
                  (1 - 0.12 * Math.abs(Math.sin(f))) +
                0.01 * m * M -
                0.013 * k * M +
                0.024 * S +
                0.008 * A +
                (e.beard
                  ? 0.03 *
                    Math.exp(-(((h - 0.18) / 0.13) ** 2)) *
                    Math.max(0, c) ** 2
                  : 0)
              );
            },
            (f) => t + i - 0.03 + f * 0.22,
            28,
            16,
            0,
            0.015,
          ),
        ),
      );
    };
  if (e.covered) {
    s(
      e.covered,
      a(
        A0(
          (n, l) =>
            (l < 0.86
              ? w(n, (l / 0.86) * 0.96, 1.14)
              : 0.13 * Math.sqrt(Math.max(0, 1 - ((l - 0.86) / 0.14) ** 2)) +
                0.04) *
              (1 + 0.06 * Math.cos(n * 5 + l * 3)) +
            (l < 0.05 ? (0.05 - l) * 1.6 : 0),
          (n) => t + n * (i + 0.24),
          48,
          30,
        ),
      ),
      { cast: !0 },
    );
    return;
  }
  (s(e.robe, a(A0((n, l) => w(n, l), g, 44, 26))),
    e.mantle &&
      s(
        e.mantle,
        a(
          ha(
            (n, l) =>
              y(n, 0.2 + l * 0.76, 1.1) +
              0.015 +
              0.025 * (1 - l) * Math.cos(n * 5 + d),
            (n) => g(0.2 + n * 0.76),
            0,
            Math.PI * 2,
            34,
            18,
            0,
            0,
            (n) => 0.35 + (1 - n) * 0.55,
          ),
        ),
      ),
    z(e.skin),
    e.veil &&
      s(
        e.veil,
        a(
          ha(
            (n, l) =>
              (l < 0.5 ? 0.098 + l * 0.12 : 0.158 + (l - 0.5) * 0.36) *
              (1 + 0.05 * Math.cos(n * 6)),
            (n) => t + i + 0.205 - n * 0.44,
            0,
            Math.PI * 2,
            26,
            12,
            0,
            0,
            (n) => 0.62 + n * 0.15,
          ),
        ),
      ));
  const x = t + i * 0.8,
    v = 0.17;
  for (const n of [-1, 1])
    (s(
      e.robe,
      a(
        ge(
          [n * 0.175, t + i * 0.69, 0.04],
          [n * 0.035, x - 0.035, v - 0.035],
          0.052,
          10,
          0.04,
        ),
      ),
    ),
      s(
        e.robe,
        a(
          Wt(
            [
              [0, 0],
              [0.055, 0],
              [0.06, 0.03],
              [0, 0.03],
            ],
            n * 0.035,
            x - 0.06,
            v - 0.03,
            { segs: 10, rot: [1, 0, 0] },
          ),
        ),
      ));
  for (const n of [-1, 1])
    s(
      e.skin,
      a(
        Mt(
          n > 0 ? 0 : -0.024,
          0,
          -0.035,
          n > 0 ? 0.024 : 0,
          0.12,
          0.035,
          0.01,
          "y",
        )
          .rotateX(-0.25)
          .translate(0, x - 0.04, v),
      ),
    );
  if (e.halo) {
    const n = [];
    for (let l = 0; l <= 28; l++) {
      const f = (l / 28) * Math.PI * 2;
      n.push([Math.cos(f) * 0.17, t + i + 0.12 + Math.sin(f) * 0.17, -0.11]);
    }
    s(e.halo, a(Q0(n, 0.012, 28, 5, !0)));
  }
  if (e.crown) {
    for (let n = 0; n < 7; n++) {
      const l = (n / 7) * Math.PI * 2;
      s(
        e.crown,
        a(
          Wt(
            [
              [0, 0],
              [0.018, 0],
              [0.012, 0.05],
              [0, 0.06],
            ],
            Math.sin(l) * 0.085,
            t + i + 0.17,
            Math.cos(l) * 0.085,
            { segs: 6 },
          ),
        ),
      );
    }
    s(
      e.crown,
      a(
        Wt(
          [
            [0.088, 0],
            [0.095, 0],
            [0.095, 0.03],
            [0.088, 0.03],
          ],
          0,
          t + i + 0.16,
          0,
          { segs: 20 },
        ),
      ),
    );
  }
  if (e.hands === "lily") {
    s(
      "iron",
      a(ge([0.02, x - 0.1, v + 0.03], [0.08, x + 0.55, v + 0.06], 0.006, 5)),
    );
    for (let n = 0; n < 3; n++)
      s(
        "white",
        a(
          Wt(
            [
              [0, 0],
              [0.03, 0.03],
              [0.02, 0.06],
              [0, 0.05],
            ],
            0.06 + n * 0.01,
            x + 0.35 + n * 0.08,
            v + 0.06,
            { segs: 6 },
          ),
        ),
      );
  }
}
