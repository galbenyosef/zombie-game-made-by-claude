// assets__furniture-BraVmmRV 09 — math
// Lines 3496-3690 of readable/assets__furniture-BraVmmRV.pretty.js (statement-aligned).
function po(z, t, k, o) {
  const d = k() * Math.PI * 2,
    i = Math.PI * (0.5 + k() * 0.5),
    f = 8,
    Y = [],
    n = [],
    s = [],
    r = ((e) => {
      const h = [[0, 0]];
      for (let g = 0; g <= f; g++) {
        const M = d + (i * g) / f;
        h.push([Math.cos(M) * t, Math.sin(M) * t]);
      }
      return h;
    })(),
    y = (e, h, g, M, u, p, x, S) => {
      const m = Y.length / 3;
      (Y.push(...e, ...h, ...g, ...M),
        n.push(u, x, p, x, p, S, u, S),
        s.push(m, m + 1, m + 2, m, m + 2, m + 3));
    },
    l = z / 2;
  for (let e = 1; e < r.length - 1; e++) {
    const [h, g] = r[e],
      [M, u] = r[e + 1];
    y(
      [-l, h, g],
      [l, h, g],
      [l, M, u],
      [-l, M, u],
      o * 0.37,
      o * 0.37 + z / 1.8,
      0.1 + (e / f) * 0.2,
      0.1 + ((e + 1) / f) * 0.2,
    );
  }
  const N = r[1],
    b = r[r.length - 1];
  (y(
    [-l, 0, 0],
    [l, 0, 0],
    [l, N[0], N[1]],
    [-l, N[0], N[1]],
    0.2,
    0.2 + z / 1.8,
    0.4,
    0.46,
  ),
    y(
      [-l, b[0], b[1]],
      [l, b[0], b[1]],
      [l, 0, 0],
      [-l, 0, 0],
      0.5,
      0.5 + z / 1.8,
      0.4,
      0.46,
    ));
  for (const e of [-1, 1]) {
    const h = Y.length / 3,
      g = o % 4;
    for (const [M, u] of r)
      (Y.push(e * l, M, u),
        n.push((g + 0.5 + (M / t) * 0.45) / 4, 0.88 + (u / t) * 0.11));
    for (let M = 1; M < r.length - 1; M++) s.push(h, h + M, h + M + 1);
  }
  const A = new E0();
  (A.setAttribute("position", new u0(Y, 3)),
    A.setAttribute("uv", new u0(n, 2)),
    A.setIndex(s),
    A.computeVertexNormals());
  const P = A.attributes.position,
    w = A.index.array,
    E = new m0(0, Math.cos(d + i / 2) * t * 0.4, Math.sin(d + i / 2) * t * 0.4),
    X = new m0(),
    v = new m0(),
    W = new m0(),
    R = new m0(),
    a = new m0();
  for (let e = 0; e < w.length; e += 3)
    if (
      (X.fromBufferAttribute(P, w[e]),
      v.fromBufferAttribute(P, w[e + 1]),
      W.fromBufferAttribute(P, w[e + 2]),
      R.subVectors(v, X).cross(a.subVectors(W, X)),
      a
        .addVectors(X, v)
        .add(W)
        .multiplyScalar(1 / 3)
        .sub(E),
      R.dot(a) < 0)
    ) {
      const h = w[e + 1];
      ((w[e + 1] = w[e + 2]), (w[e + 2] = h));
    }
  return (A.computeVertexNormals(), Q(A, [0.95, 0.85, 0.7]), A);
}
const N0 = { cx: 6.72, cz: 204.95, rx: 1, rz: 0.66, rot: 0.08 };
function ko(z, t, k, o) {
  const d = new R0();
  d.name = "house_room";
  const i = new R0();
  ((i.name = "house_detail"), d.add(i));
  const f = new Ft("house_detail"),
    Y = [],
    n = io(z, t, o);
  d.add(n.group);
  const s = fo(z, t, o, f, Y);
  d.add(s.group);
  const c = xo(z, t, o, f, Y),
    r = new J0(At(Y), t.jar);
  ((r.name = "house:jars"),
    (r.renderOrder = 3),
    (r.receiveShadow = !0),
    i.add(r));
  {
    const l = C0(5),
      N = N0.rx - N0.rz,
      b = 10,
      A = 26,
      P = 18,
      w = Math.cos(N0.rot),
      E = Math.sin(N0.rot),
      X = [],
      v = [],
      W = [],
      R = (g) => {
        const M = [];
        for (let u = 0; u < b; u++) M.push([-N + (2 * N * u) / b, -g]);
        for (let u = 0; u < A; u++) {
          const p = -Math.PI / 2 + (Math.PI * u) / A;
          M.push([N + Math.cos(p) * g, Math.sin(p) * g]);
        }
        for (let u = 0; u < b; u++) M.push([N - (2 * N * u) / b, g]);
        for (let u = 0; u < A; u++) {
          const p = Math.PI / 2 + (Math.PI * u) / A;
          M.push([-N + Math.cos(p) * g, Math.sin(p) * g]);
        }
        return M;
      },
      a = 2 * b + 2 * A;
    for (let g = 0; g <= P; g++) {
      const M = g / P,
        u = R(M * N0.rz);
      for (const [p, x] of u) {
        const S =
          0.024 +
          0.006 * (1 - M * M) -
          0.012 * Math.pow(Math.max(0, (M - 0.93) / 0.07), 2) +
          0.0015 * l.n2(p * 6, x * 6);
        (X.push(N0.cx + p * w - x * E, S, N0.cz + p * E + x * w),
          v.push(0.5 + p / (2 * N0.rx), 0.5 + x / (2 * N0.rz)));
      }
    }
    for (let g = 0; g < P; g++)
      for (let M = 0; M < a; M++) {
        const u = g * a + M,
          p = g * a + ((M + 1) % a),
          x = u + a,
          S = p + a;
        W.push(u, x, p, p, x, S);
      }
    const e = new E0();
    (e.setAttribute("position", new u0(X, 3)),
      e.setAttribute("uv", new u0(v, 2)),
      e.setIndex(W),
      e.computeVertexNormals(),
      ho(e));
    const h = new J0(e, t.rug);
    ((h.name = "house:rug"), (h.receiveShadow = !0), d.add(h));
  }
  const y = [...n.colliders, ...s.colliders, ...c.colliders];
  return {
    group: d,
    detail: i,
    detailBucket: f,
    colliders: y,
    anim: null,
    props: { bed: n.group, table: s.group },
  };
}
function ho(z) {
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
