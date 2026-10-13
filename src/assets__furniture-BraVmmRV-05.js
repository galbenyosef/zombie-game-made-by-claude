// assets__furniture-BraVmmRV 05 — math
// Lines 1839-1950 of readable/assets__furniture-BraVmmRV.pretty.js (statement-aligned).
function yt(z) {
  const t = z.attributes.normal;
  let k = 0;
  for (let o = 0; o < t.count; o++) k += t.getY(o);
  if (k < 0) {
    const o = z.index.array;
    for (let d = 0; d < o.length; d += 3) {
      const i = o[d + 1];
      ((o[d + 1] = o[d + 2]), (o[d + 2] = i));
    }
    z.computeVertexNormals();
  }
  return z;
}
function vt(z, t, k, o, d, i, f, Y, n, s, c = 0, r = 0) {
  const l = (P, w) =>
      Math.pow(Math.max(0, 1 - Math.pow(Math.abs(P), 2.4)), 0.6) *
      Math.pow(Math.max(0, 1 - Math.pow(Math.abs(w), 2.2)), 0.6),
    N = (P, w, E) => {
      const X = P * 2 - 1,
        v = w * 2 - 1,
        W = X * i * (1 - 0.06 * (1 - v * v)),
        R = v * f * (1 - 0.05 * (1 - X * X)),
        a = l(X, v);
      let e;
      if (E) {
        if (((e = Y * Math.pow(a, 0.7)), n)) {
          const h = ((W - n.x) ** 2 + (R - n.z) ** 2) / (n.r * n.r);
          e -= n.d * Math.exp(-h) * a;
        }
        e +=
          0.004 * k.n2(W * 16 + o, R * 16) * a +
          0.003 * Math.pow(1 - Math.abs(k.n2(W * 8, R * 8 + 5)), 5) * a;
      } else e = -Math.min(Y * a, Y * 0.35);
      return [W, e, R];
    },
    b = V0((P, w) => N(P, w, !0), 30, 30, 2 * i, 2 * f, !1, !1),
    A = V0((P, w) => N(P, w, !1), 30, 30, 2 * i, 2 * f, !1, !0);
  yt(b);
  {
    const P = A.attributes.normal;
    let w = 0;
    for (let E = 0; E < P.count; E++) w += P.getY(E);
    if (w > 0) {
      const E = A.index.array;
      for (let X = 0; X < E.length; X += 3) {
        const v = E[X + 1];
        ((E[X + 1] = E[X + 2]), (E[X + 2] = v));
      }
      A.computeVertexNormals();
    }
  }
  for (const P of [b, A])
    (P.rotateX(c),
      P.rotateY(r),
      P.translate(o, s, d),
      st(P, "xz", 1),
      z.add(P, t));
}
function pt(z, t, k, o, d, { tilt: i = 0 } = {}) {
  const f = p0([k, 0, o], [0, d, 0]),
    Y = [],
    n = 0.46,
    s = (c, r, y, l = 0) => {
      const N = H(
        [
          [0, 0],
          [0.019, 0],
          [0.02, 0.02],
          [0.017, 0.12],
          [0.021, 0.14],
          [0.017, 0.16],
          [0.017, y - 0.06],
          [0.021, y - 0.04],
          [0.014, y - 0.015],
          [0, y],
        ],
        0,
        0,
        0,
        { segs: 10, tile: 0.8 },
      );
      return (
        l && N.applyMatrix4(new F0().makeRotationX(-l)),
        N.translate(c, 0, r),
        N
      );
    };
  (Y.push(
    s(-0.19, 0.17, n),
    s(0.19, 0.17, n),
    s(-0.18, -0.17, 1, 0.08),
    s(0.18, -0.17, 1, 0.08),
  ),
    Y.push(Z(-0.215, n - 0.03, -0.2, 0.215, n, 0.2, 0.012, "x", 2)));
  for (const c of [0.64, 0.77, 0.9]) {
    const r = -0.17 - 0.08 * c - 0.005;
    Y.push(
      Z(-0.17, c - 0.035, r - 0.012, 0.17, c + 0.035, r + 0.012, 0.005, "x"),
    );
  }
  Y.push(
    d0([-0.19, 0.17, 0.17], [0.19, 0.17, 0.17], 0.011, 8),
    d0([-0.19, 0.12, 0.17], [-0.18, 0.12, -0.17], 0.01, 8),
    d0([0.19, 0.12, 0.17], [0.18, 0.12, -0.17], 0.01, 8),
    d0([-0.18, 0.2, -0.18], [0.18, 0.2, -0.18], 0.01, 8),
  );
  for (const c of Y)
    (i && c.applyMatrix4(new F0().makeRotationZ(i)),
      c.applyMatrix4(f),
      z.add(c, t.wood));
}
