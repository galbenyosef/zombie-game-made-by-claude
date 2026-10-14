// assets__index-Db-AsSxU 13 — math
// Lines 4908-5082 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
const ye = {
    hips: 0,
    spine: 1,
    chest: 2,
    neck: 3,
    head: 4,
    jaw: 5,
    shoulderL: 6,
    upperArmL: 7,
    foreArmL: 8,
    handL: 9,
    shoulderR: 10,
    upperArmR: 11,
    foreArmR: 12,
    handR: 13,
    thighL: 14,
    shinL: 15,
    footL: 16,
    thighR: 17,
    shinR: 18,
    footR: 19,
  },
  Se = (e) => (e > 0 ? "L" : "R"),
  kt = 15;
function Rt(e, o, n, c) {
  const t = [];
  for (let u = 0; u < e.length - 1; u++) {
    const f = e[u],
      d = e[u + 1],
      v = j0.norm(j0.sub(d, f)),
      C = j0.len(j0.sub(d, f)),
      p = c(u, f, d),
      F = j0.norm(j0.sub(p, j0.mul(v, j0.dot(p, v))));
    t.push({ a: f, U: v, N: F, W: j0.cross(v, F), hl: C / 2 });
  }
  const s = Math.min(o, n) * 0.9,
    i = (u, f, d) => {
      let v = 1e9;
      for (const C of t) {
        const p = u - C.a[0],
          F = f - C.a[1],
          J = d - C.a[2],
          n0 = p * C.U[0] + F * C.U[1] + J * C.U[2] - C.hl,
          _ = p * C.W[0] + F * C.W[1] + J * C.W[2],
          G = p * C.N[0] + F * C.N[1] + J * C.N[2];
        v = B(v, W0(n0, _, G, 0, 0, 0, C.hl + n, o, n, s), n);
      }
      return v;
    },
    r = o + n + 0.01,
    l = [0, 1, 2].map((u) => Math.min(...e.map((f) => f[u])) - r),
    a = [0, 1, 2].map((u) => Math.max(...e.map((f) => f[u])) + r);
  return { sdf: i, min: l, max: a };
}
const wo = (...e) => ({
  min: [0, 1, 2].map((o) => Math.min(...e.map((n) => n.min[o]))),
  max: [0, 1, 2].map((o) => Math.max(...e.map((n) => n.max[o]))),
});
function Jt(e) {
  const o = e.x,
    n = e.ankle,
    c = e.len,
    t = e.width,
    s = e.top,
    i = n[2] - 0.078,
    r = i + c,
    l = -Math.sign(o) || 1,
    a = o + l * 0.004,
    u = n[2] + 0.052,
    f = (C, p, F) => {
      let J = _0(C, p, F, o, 0.078, i + 0.05, 0.05, a, 0.06, r - 0.07, 0.046);
      if (
        ((J = B(
          J,
          b0(C, p, F, a, 0.054, r - 0.056, t * 0.53, 0.048, 0.066),
          0.024,
        )),
        (J = B(
          J,
          W0(
            C,
            p,
            F,
            a,
            0.018,
            (i + r) / 2 + 0.002,
            t * 0.57,
            0.018,
            c * 0.5,
            0.01,
          ),
          0.008,
        )),
        (J -= 0.0022 * h(0.03, 0.036, p) * h(0.042, 0.036, p)),
        (J = B(
          J,
          _0(
            C,
            p,
            F,
            n[0],
            n[1] - 0.012,
            n[2] - 0.006,
            0.057,
            n[0],
            s - 0.012,
            n[2] + 0.006,
            0.058,
          ),
          0.035,
        )),
        (J = B(
          J,
          Math.hypot(
            Math.hypot(C - n[0], F - n[2] - 0.006) - 0.057,
            p - s + 0.013,
          ) - 0.0095,
          0.006,
        )),
        (J = f0(J, p - s, 0.006)),
        F > n[2] + 0.02 && Math.abs(C - o) < 0.035 && p > 0.06)
      ) {
        const n0 = p < 0.13 ? d(p) : u + (p - 0.13) * 0.04;
        J = B(
          J,
          W0(
            C,
            p,
            F,
            o,
            (0.085 + s) / 2,
            n0,
            0.014,
            (s - 0.085) / 2,
            0.012,
            0.006,
          ),
          0.012,
        );
        const _ = Math.round((p - 0.09) / 0.021);
        if (_ >= 0 && _ <= Math.floor((s - 0.1) / 0.021)) {
          const G = 0.09 + _ * 0.021,
            y = (G < 0.13 ? d(G) : u + (G - 0.13) * 0.04) + 0.011;
          J = B(
            J,
            K0(
              C,
              p,
              F,
              o - 0.02,
              G - 0.004,
              y - 0.004,
              o + 0.02,
              G + 0.004,
              y - 0.004,
              0.0032,
            ),
            0.003,
          );
        }
      }
      return Math.max(J, -p);
    };
  function d(C) {
    const p = I0((C - 0.085) / 0.045);
    return r - 0.14 + (u - (r - 0.14)) * p;
  }
  return {
    sdf: f,
    lace: (C, p, F) =>
      F > n[2] + 0.045 && Math.abs(C - o) < 0.024 && p > 0.07 && p < s - 0.006,
    min: [o - 0.085, -0.005, i - 0.03],
    max: [o + 0.085, s + 0.02, r + 0.03],
  };
}
