// assets__index-Db-AsSxU 02 — math
// Lines 339-666 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
function nt(e) {
  const o = e.side,
    n = z1(e.wrist, e.dir, [0, 0, 1]),
    c = o,
    [t, s, i] = e.palm,
    r = e.curl ?? [0.5, 0.75, 0.45],
    l = ot(e.seed ?? 5),
    a = [],
    u = [s * 0.36, s * 0.12, -s * 0.12, -s * 0.36];
  for (let x = 0; x < 4; x++) {
    const [e0, H] = e.fingers[x],
      z = e0 * 0.45,
      Z = e0 * 0.3,
      p0 = e0 * 0.25,
      j = u[x],
      t0 = (e.spread ?? 0.08) * (1.5 - x),
      A = (l() - 0.5) * 0.25,
      w = r[0] + A + (x === 3 ? 0.15 : 0),
      Y = r[1] + (l() - 0.5) * 0.3,
      b = r[2] + (l() - 0.5) * 0.3,
      g = [t * (x === 0 || x === 3 ? 0.93 : 1), i * 0.05, j],
      N = (o0) => [Math.cos(o0), -Math.sin(o0), 0],
      V = g;
    let O = N(w);
    O[2] = t0 * 0.35;
    const i0 = [V[0] + O[0] * z, V[1] + O[1] * z, V[2] + O[2] * z];
    ((O = N(w + Y)), (O[2] = t0 * 0.2));
    const m0 = [i0[0] + O[0] * Z, i0[1] + O[1] * Z, i0[2] + O[2] * Z];
    O = N(w + Y + b);
    const S = [m0[0] + O[0] * p0, m0[1] + O[1] * p0, m0[2] + O[2] * p0],
      P = [(V[0] + S[0]) / 2, (V[1] + S[1]) / 2, (V[2] + S[2]) / 2],
      s0 =
        Math.max(
          j0.len(j0.sub(V, P)),
          j0.len(j0.sub(i0, P)),
          j0.len(j0.sub(m0, P)),
          j0.len(j0.sub(S, P)),
        ) +
        H * 1.4;
    a.push({ p0: V, p1: i0, p2: m0, p3: S, r: H, tipDir: O, bc: P, br: s0 });
  }
  const [f, d] = e.thumb,
    v = [t * 0.18, -i * 0.2, s * 0.45],
    C = [v[0] + f * 0.4, v[1] - f * 0.2, v[2] + f * 0.3],
    p = [C[0] + f * 0.35, C[1] - f * 0.3, C[2] + f * 0.02],
    F = [p[0] + f * 0.25, p[1] - f * 0.22, p[2] - f * 0.1],
    J = e.bony ?? 0.5,
    n0 = (x, e0, H, z, Z, p0, j) =>
      _0(x, e0, H, z[0], z[1], z[2], p0, Z[0], Z[1], Z[2], j);
  function _(x, e0, H) {
    return [n.lx(x, e0, H), c * n.ly(x, e0, H), n.lz(x, e0, H)];
  }
  function G(x, e0, H) {
    let z = W0(x, e0, H, t * 0.5, 0, 0, t * 0.5, i * 0.5, s * 0.5, i * 0.45);
    ((z = B(
      z,
      b0(x, e0, H, t * 0.3, -i * 0.25, s * 0.2, t * 0.35, i * 0.45, s * 0.4),
      0.01,
    )),
      (z = B(z, K0(x, e0, H, -0.03, 0, 0, t * 0.15, 0, 0, i * 0.62), 0.02)));
    for (let p0 = 0; p0 < 4; p0++) {
      const j = a[p0],
        t0 = j.r,
        A = x - j.bc[0],
        w = e0 - j.bc[1],
        Y = H - j.bc[2];
      if (Math.sqrt(A * A + w * w + Y * Y) - j.br > z + 0.01) continue;
      let b = n0(x, e0, H, j.p0, j.p1, t0 * 1.05, t0 * 0.95);
      ((b = Math.min(b, n0(x, e0, H, j.p1, j.p2, t0 * 0.97, t0 * 0.85))),
        (b = Math.min(b, n0(x, e0, H, j.p2, j.p3, t0 * 0.87, t0 * 0.62))),
        (b = B(
          b,
          se(
            x,
            e0,
            H,
            j.p1[0],
            j.p1[1] + t0 * 0.25,
            j.p1[2],
            t0 * (0.9 + 0.25 * J),
          ),
          0.004,
        )),
        (b = B(
          b,
          se(x, e0, H, j.p0[0], j.p0[1] + i * 0.2, j.p0[2], t0 * (1 + 0.3 * J)),
          0.006,
        )),
        (z = B(z, b, 0.007)));
    }
    let Z = n0(x, e0, H, v, C, d * 1.25, d * 1);
    ((Z = Math.min(Z, n0(x, e0, H, C, p, d * 1, d * 0.9))),
      (Z = Math.min(Z, n0(x, e0, H, p, F, d * 0.9, d * 0.65))),
      (z = B(z, Z, 0.012)));
    for (let p0 = 0; p0 < 4; p0++) {
      const j = a[p0];
      z = B(
        z,
        K0(
          x,
          e0,
          H,
          t * 0.1,
          i * 0.42,
          j.p0[2] * 0.6,
          j.p0[0],
          i * 0.35,
          j.p0[2],
          0.0028 + 0.002 * J,
        ),
        0.004,
      );
    }
    return z;
  }
  const y = (x, e0, H) => {
      const z = n.lx(x, e0, H),
        Z = c * n.ly(x, e0, H),
        p0 = n.lz(x, e0, H);
      return G(z, Z, p0);
    },
    E = (x, e0, H) => {
      const z = n.lx(x, e0, H),
        Z = c * n.ly(x, e0, H),
        p0 = n.lz(x, e0, H);
      for (let j = 0; j < 4; j++) {
        const t0 = a[j],
          A = [z - t0.p2[0], Z - t0.p2[1], p0 - t0.p2[2]],
          w = [t0.p3[0] - t0.p2[0], t0.p3[1] - t0.p2[1], t0.p3[2] - t0.p2[2]],
          Y = j0.len(w),
          b = j0.dot(A, w) / (Y * Y);
        if (b < 0.25 || b > 1.25) continue;
        const g = [-w[1] / Y, w[0] / Y, 0];
        if (
          j0.dot(A, g) > t0.r * 0.25 &&
          Math.abs(p0 - (t0.p2[2] + w[2] * b)) < t0.r * 0.85
        )
          return !0;
      }
      {
        const j = [z - p[0], Z - p[1], p0 - p[2]],
          t0 = j0.sub(F, p),
          A = j0.len(t0),
          w = j0.dot(j, t0) / (A * A);
        if (w > 0.3 && w < 1.3 && Z - (p[1] + t0[1] * w) > d * 0.2) return !0;
      }
      return !1;
    },
    c0 = [
      [-0.05, -i * 1.2, -s * 0.8],
      [t + Math.max(...e.fingers.map((x) => x[0])) + 0.01, i * 1.3, s * 0.95],
    ],
    u0 = [];
  for (const x of [c0[0][0], c0[1][0]])
    for (const e0 of [c0[0][1], c0[1][1]])
      for (const H of [c0[0][2], c0[1][2] + 0.03]) {
        const z = n.world(x, c * e0, H);
        u0.push(z);
      }
  const q = [0, 1, 2].map((x) => Math.min(...u0.map((e0) => e0[x])) - 0.01),
    $ = [0, 1, 2].map((x) => Math.max(...u0.map((e0) => e0[x])) + 0.01);
  return { sdf: y, nailAt: E, min: q, max: $, frame: n, local: _ };
}
function It(e) {
  const o = e.x,
    n = e.ankle,
    c = e.len,
    t = e.width,
    s = n[2] - 0.055,
    i = s + c * 0.72,
    r = s + c,
    l = -Math.sign(o) || 1;
  return {
    sdf: (u, f, d) => {
      let v = _0(
        u,
        f,
        d,
        o,
        0.034,
        s + 0.01,
        0.032,
        o + l * 0.005,
        0.026,
        i,
        0.028,
      );
      if (
        ((v = B(
          v,
          b0(u, f, d, o + l * 0.004, 0.028, i - 0.01, t * 0.5, 0.026, 0.05),
          0.02,
        )),
        (v = B(
          v,
          K0(
            u,
            f,
            d,
            n[0],
            n[1] + 0.07,
            n[2],
            n[0],
            n[1] - 0.01,
            n[2] - 0.005,
            0.034,
          ),
          0.03,
        )),
        (v = B(v, se(u, f, d, n[0] - l * 0.03, n[1], n[2], 0.012), 0.012)),
        (v = B(
          v,
          se(u, f, d, n[0] + l * 0.028, n[1] + 0.008, n[2] - 0.005, 0.012),
          0.012,
        )),
        e.toes)
      )
        for (let C = 0; C < 5; C++) {
          const p = o + l * (0.028 - C * 0.0135) * (t / 0.09),
            F = C === 0 ? 0.034 : 0.03 - C * 0.003,
            J = C === 0 ? 0.0115 : 0.0085 - C * 6e-4,
            n0 = i + 0.015 - C * 0.004;
          v = B(
            v,
            K0(
              u,
              f,
              d,
              p,
              0.022,
              n0,
              p - l * C * 0.002,
              0.012 + (C === 0 ? 0.002 : 0),
              n0 + F,
              J,
            ),
            0.006,
          );
        }
      else
        v = B(
          v,
          b0(u, f, d, o + l * 0.006, 0.021, r - 0.035, t * 0.44, 0.02, 0.04),
          0.02,
        );
      return Math.max(v, -f + 0.001);
    },
    min: [o - 0.075, -0.005, s - 0.05],
    max: [o + 0.075, n[1] + 0.11, r + 0.03],
    heelZ: s,
    toeZ: r,
  };
}
function gt(e) {
  const o = e.x,
    n = e.ankle,
    c = e.len,
    t = e.width,
    s = n[2] - 0.065,
    i = s + c,
    r = -Math.sign(o) || 1,
    l = e.kind !== "slipper",
    a = (f, d, v) => {
      let C = _0(
        f,
        d,
        v,
        o,
        0.05,
        s + 0.03,
        0.04,
        o + r * 0.006,
        0.035,
        i - 0.05,
        0.036,
      );
      return (
        (C = B(
          C,
          b0(f, d, v, o + r * 0.006, 0.03, i - 0.045, t * 0.52, 0.032, 0.05),
          0.02,
        )),
        l
          ? (C = B(
              C,
              W0(f, d, v, o, 0.012, (s + i) / 2, t * 0.5, 0.012, c * 0.5, 0.01),
              0.004,
            ))
          : (C = B(
              C,
              W0(f, d, v, o, 0.01, (s + i) / 2, t * 0.5, 0.01, c * 0.5, 0.009),
              0.01,
            )),
        (C = f0(
          C,
          d - (l ? 0.085 : 0.055) - (v - s) * (l ? -0.25 : -0.35),
          0.01,
        )),
        l &&
          (C = B(
            C,
            K0(
              f,
              d,
              v,
              n[0],
              n[1] + 0.06,
              n[2],
              n[0],
              n[1] - 0.005,
              n[2],
              0.035,
            ),
            0.012,
          )),
        Math.max(C, -d)
      );
    },
    u = (f, d, v) => d < 0.02;
  return {
    sdf: a,
    min: [o - 0.08, -0.005, s - 0.03],
    max: [o + 0.08, n[1] + 0.1, i + 0.03],
    soleY: u,
    heelZ: s,
    toeZ: i,
  };
}
