// assets/index-BcIwWgby 43 — math
// Lines 12909-13202 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Cs(s, o, t, u = {}) {
  const {
      seg: e = 26,
      step: r = 0.14,
      uvs: a = 0.42,
      ridgeA: p = 0.09,
      endBreak: i = !0,
      startBreak: d = !1,
      moss: y = 0.3,
      teeth: w = 0.7,
      rot: g = 0.06,
      bare: z = 0,
      bareDir: x = null,
    } = u,
    v = (t() - 0.5) * 0.45,
    n = [0];
  for (let C = 1; C < s.length; C++)
    n.push(n[C - 1] + s[C].distanceTo(s[C - 1]));
  const l = n[n.length - 1],
    f = (C) => {
      let T = 0;
      for (; T < s.length - 2 && n[T + 1] < C;) T++;
      const D = (C - n[T]) / Math.max(1e-6, n[T + 1] - n[T]);
      return s[T].clone().lerp(s[T + 1], Math.min(1, Math.max(0, D)));
    },
    h = Math.max(3, Math.ceil(l / r)),
    c = [],
    M = [];
  for (let C = 0; C <= h; C++) c.push(f((l * C) / h));
  for (let C = 0; C <= h; C++)
    M.push(
      c[Math.min(h, C + 1)]
        .clone()
        .sub(c[Math.max(0, C - 1)])
        .normalize(),
    );
  const m = [],
    k = [];
  {
    const C = at(0, 1, 0);
    let T = C.clone().addScaledVector(M[0], -C.dot(M[0]));
    (T.lengthSq() < 1e-4 && T.set(1, 0, 0), T.normalize(), m.push(T));
  }
  for (let C = 1; C <= h; C++) {
    const T = m[C - 1]
      .clone()
      .addScaledVector(M[C], -m[C - 1].dot(M[C]))
      .normalize();
    m.push(T);
  }
  for (let C = 0; C <= h; C++) k.push(M[C].clone().cross(m[C]).normalize());
  const S = 8 + Math.floor(t() * 5),
    A = t() * F0,
    b = t() * 50,
    P = Array.from({ length: 2 + Math.floor(t() * 3) }, () => ({
      a: t() * F0,
      w: 0.06 + t() * 0.07,
      d: 0.1 + t() * 0.14,
      t0: t() * 0.45,
      t1: 0.55 + t() * 0.45,
    })),
    _ = Array.from({ length: 1 + Math.floor(t() * 3) }, () => ({
      a: t() * F0,
      t: 0.1 + t() * 0.8,
      s: 0.18 + t() * 0.25,
      h: 0.05 + t() * 0.08,
    })),
    I = (C, T) => {
      const D = T - v * C * l;
      let N =
          1 + p * (Math.pow(Math.abs(Math.sin(S * 0.5 * D + A)), 0.6) - 0.6),
        H = 0;
      for (const Q of P) {
        const W = ls(D - Q.a) / Q.w;
        if (Math.abs(W) < 1) {
          const B =
            (1 - W * W) ** 2 *
            mo(Q.t0, Q.t0 + 0.06, C) *
            (1 - mo(Q.t1 - 0.06, Q.t1, C));
          ((N -= Q.d * B), (H = Math.max(H, B * 0.7)));
        }
      }
      for (const Q of _) {
        const W = ls(T - Q.a) * 0.5,
          B = (C - Q.t) * l,
          F = (W * W + B * B) / (Q.s * Q.s);
        F < 4 && (N += Q.h * Math.exp(-F * 1.5));
      }
      return [
        N +
          0.04 * It(D * 2.1 + b, C * l * 1.3) +
          0.02 * It(D * 6.3, C * l * 4.1 + b),
        H,
      ];
    },
    R = (C) => {
      const T = [];
      for (let D = 0, N = 2 + Math.floor(t() * 2); D < N; D++)
        T.push({
          a: t() * F0,
          h: (D === 0 ? 0.32 + t() * 0.38 : 0.07 + t() * 0.2) * w,
          w: D === 0 ? 0.3 + t() * 0.22 : 0.26 + t() * 0.36,
        });
      return (D) => {
        let N = 0.03 + 0.06 * Math.abs(It(D * 2.3 + C, C * 0.7));
        for (const H of T)
          N = Math.max(
            N,
            H.h * Math.pow(Math.max(0, 1 - Math.abs(ls(D - H.a)) / H.w), 0.85),
          );
        return N;
      };
    },
    V = R(b + 3),
    L = R(b + 9),
    K = [],
    j = (C) => ({
      c: c[C],
      nf: m[C],
      bf: k[C],
      tdir: M[C],
      t: C / h,
      along: (l * C) / h,
    });
  if (d)
    for (const C of [0.42, 0.26, 0.12]) {
      const T = j(0);
      K.push({
        ...T,
        c: c[0].clone().addScaledVector(M[0], -C),
        along: -C,
        brk: { e: C, f: L, sg: -1 },
      });
    }
  for (let C = 0; C <= h; C++) K.push(j(C));
  if (i)
    for (const C of [0.12, 0.26, 0.42, 0.62]) {
      const T = j(h);
      K.push({
        ...T,
        c: c[h].clone().addScaledVector(M[h], C),
        along: l + C,
        brk: { e: C, f: V, sg: 1 },
      });
    }
  const O = K.length,
    J = new Float32Array((O + (i ? 1 : 0) + (d ? 1 : 0)) * (e + 1) * 3),
    tt = new Float32Array((J.length / 3) * 2),
    st = new Float32Array(J.length),
    G = Math.max(1, Math.round(F0 * o(0.5) * a)) / (F0 * a);
  let q = 0;
  const U = (C, T, D, N, H, Q) => {
    ((J[q * 3] = C),
      (J[q * 3 + 1] = T),
      (J[q * 3 + 2] = D),
      (tt[q * 2] = N),
      (tt[q * 2 + 1] = H),
      st.set(Q, q * 3),
      q++);
  };
  if (d) {
    const C = K[0];
    for (let T = 0; T <= e; T++) {
      const D = (T / e) * F0,
        N = o(0) * 0.06;
      U(
        c[0].x +
          (C.nf.x * Math.cos(D) + C.bf.x * Math.sin(D)) * N +
          M[0].x * 0.1,
        c[0].y +
          (C.nf.y * Math.cos(D) + C.bf.y * Math.sin(D)) * N +
          M[0].y * 0.1,
        c[0].z +
          (C.nf.z * Math.cos(D) + C.bf.z * Math.sin(D)) * N +
          M[0].z * 0.1,
        0.31,
        0.62,
        j0(0.02, 0.97),
      );
    }
  }
  for (const C of K)
    for (let T = 0; T <= e; T++) {
      const D = (T / e) * F0,
        N = Math.min(1, Math.max(0, C.t));
      let [H, Q] = I(N, D),
        W = o(N) * H,
        B = 0,
        F = !1;
      if (C.brk) {
        const yt = C.brk.f(D);
        C.brk.e <= yt
          ? ((W *= 1 - (0.18 * C.brk.e) / Math.max(0.05, yt)),
            (Q = Math.max(Q, 0.48 + (0.32 * C.brk.e) / Math.max(0.05, yt))))
          : ((W *= 0.55 + 0.1 * Math.sin(D * 5 + b)),
            (B = -C.brk.sg * (C.brk.e - yt)),
            (Q = 0.93),
            (F = !0));
      }
      const E = C.c.x + C.tdir.x * B,
        Y = C.c.y + C.tdir.y * B,
        et = C.c.z + C.tdir.z * B,
        nt = C.nf.x * Math.cos(D) + C.bf.x * Math.sin(D),
        it = C.nf.y * Math.cos(D) + C.bf.y * Math.sin(D),
        lt = C.nf.z * Math.cos(D) + C.bf.z * Math.sin(D);
      let ht = 0;
      if (z > 0 && !C.brk) {
        const yt = E + nt * W,
          Ft = Y + it * W,
          Ut = et + lt * W,
          Lt =
            0.5 +
            0.5 * It(yt * 1.5 + Ft * 1.1 + b, Ut * 1.5 - Ft * 0.8 + b * 0.5);
        ((ht =
          z *
          mo(0.4, 0.54, Lt) *
          (x ? mo(-0.3, 0.5, nt * x.x + it * x.y + lt * x.z) : 1) *
          mo(0, 0.06, C.t) *
          (1 - mo(0.94, 1, C.t))),
          (W *= 1 - 0.035 * ht));
      }
      U(
        E + nt * W,
        Y + it * W,
        et + lt * W,
        F ? 0.31 + 0.015 * Math.cos(D) : (D - v * C.along) * G * a,
        F ? 0.62 + 0.015 * Math.sin(D) : C.along * a,
        j0(
          y * (0.45 + 0.55 * Math.max(0, it)) * (1 - ht),
          Math.max(Q, g + 0.05 * It(D * 1.7 + b, C.along * 0.8)),
          0.25,
          ht,
        ),
      );
    }
  if (i) {
    const C = K[O - 1];
    for (let T = 0; T <= e; T++) {
      const D = (T / e) * F0,
        N = o(1) * 0.06;
      U(
        c[h].x +
          (C.nf.x * Math.cos(D) + C.bf.x * Math.sin(D)) * N -
          M[h].x * 0.1,
        c[h].y +
          (C.nf.y * Math.cos(D) + C.bf.y * Math.sin(D)) * N -
          M[h].y * 0.1,
        c[h].z +
          (C.nf.z * Math.cos(D) + C.bf.z * Math.sin(D)) * N -
          M[h].z * 0.1,
        0.31,
        0.62,
        j0(0.02, 0.97),
      );
    }
  }
  const Z = q / (e + 1),
    ot = [];
  for (let C = 0; C < Z - 1; C++)
    for (let T = 0; T < e; T++) {
      const D = C * (e + 1) + T,
        N = D + e + 1;
      ot.push(D, N, D + 1, D + 1, N, N + 1);
    }
  const $ = new Rt();
  ($.setAttribute("position", new vt(J.subarray(0, q * 3), 3)),
    $.setAttribute("uv", new vt(tt.subarray(0, q * 2), 2)),
    $.setAttribute("aK", new vt(st.subarray(0, q * 3), 3)),
    $.setIndex(ot),
    $.computeVertexNormals());
  {
    const C = $.attributes.position,
      T = $.attributes.normal;
    let D = 0;
    const N = Math.floor(Z / 2) * (e + 1);
    for (let H = 0; H < e; H++) {
      const Q = N + H,
        W = c[Math.min(h, Math.floor(h / 2))];
      D +=
        (C.getX(Q) - W.x) * T.getX(Q) +
        (C.getY(Q) - W.y) * T.getY(Q) +
        (C.getZ(Q) - W.z) * T.getZ(Q);
    }
    if (D < 0) {
      const H = $.index.array;
      for (let Q = 0; Q < H.length; Q += 3) {
        const W = H[Q + 1];
        ((H[Q + 1] = H[Q + 2]), (H[Q + 2] = W));
      }
      $.computeVertexNormals();
    }
  }
  return { geo: $, C: c, T: M, L: l, R: o, n: h };
}
