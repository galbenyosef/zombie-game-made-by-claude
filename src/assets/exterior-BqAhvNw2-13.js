// assets/exterior-BqAhvNw2 13 — math
// Lines 3125-3396 of readable/assets/exterior-BqAhvNw2.pretty.js (statement-aligned).
function st(t, i, a, e) {
  const s = (c, w) => c + (w - c) * a(),
    l = [],
    d = (c, w, h = {}) =>
      l.push({
        x: c,
        z: w,
        head: s(-Math.PI, Math.PI),
        speed: s(0.22, 0.5),
        phase: a(),
        limp: a() < 0.45 ? s(0.3, 1) : s(0, 0.2),
        pose: 0,
        scale: s(0.9, 1.08),
        tilt: (a() < 0.5 ? -1 : 1) * s(0.1, 0.55),
        tint: a(),
        role: "drift",
        ox: s(-14, 14),
        oz: s(-10, 10),
        look: 0,
        ...h,
      }),
    v = e.cop;
  for (let c = 0; c < 120; c++) d(s(-110, 130), s(-37, -3.5));
  for (let c = 0; c < 60; c++) d(s(Y.x0 + 1, Y.x1 - 1), s(-200, -40));
  for (let c = 0; c < 34; c++) {
    const w = a() * 6.283,
      h = s(3, 13);
    d(v.x + Math.cos(w) * h * 0.6, v.z + Math.sin(w) * h, {
      speed: s(0.1, 0.25),
    });
  }
  const x = [
    [-6, -9.5],
    [15, -31],
    [31, -8],
    [19, -88],
    [24, -97],
    [-37, -28],
  ];
  for (const [c, w] of x)
    for (let h = 0; h < (a() < 0.5 ? 2 : 3); h++) {
      const g = a() * 6.283;
      d(c + Math.cos(g) * 0.75, w + Math.sin(g) * 0.75, {
        role: "feed",
        pose: 2,
        head: Math.atan2(-Math.cos(g), -Math.sin(g)),
        speed: 0,
      });
    }
  for (let c = 0; c < 9; c++)
    d(s(5.5, 9.5), s(-1.6, -0.55) - (c > 5 ? s(0.6, 1.8) : 0), {
      role: "door",
      pose: c > 5 ? 0 : 3,
      head: s(-0.3, 0.3),
      speed: 0,
    });
  for (const c of l) c.role === "drift" && a() < 0.18 && (c.pose = 1);
  const n = l.length,
    k = at(),
    m = new oe();
  m.index = k.index;
  for (const c of ["position", "normal", "aBone"])
    m.setAttribute(c, k.attributes[c]);
  const p = new f0(new Float32Array(n * 4), 4);
  p.setUsage($0);
  const b = new f0(new Float32Array(n * 4), 4),
    N = new f0(new Float32Array(n * 4), 4);
  (N.setUsage($0),
    l.forEach((c, w) => {
      (b.array.set([c.phase, c.speed * 1.05 + 0.08, c.limp, c.pose], w * 4),
        N.array.set([c.scale * s(0.96, 1.06), c.tilt, 0, c.tint], w * 4));
    }),
    m.setAttribute("aPos", p),
    m.setAttribute("aGait", b),
    m.setAttribute("aLook", N),
    (m.instanceCount = n));
  const o = n0({ vertexShader: tt, fragmentShader: ot, uniforms: { ...i } }),
    u = new e0(m, o);
  ((u.name = "city_dead"), (u.frustumCulled = !1));
  const z = [...e.cars, ...e.police].map((c) => [c.x, c.z, 2.6]),
    f = { p: [v.x, l0, v.z], up: 0 },
    L = (c, w) =>
      (w > C.zN + 0.5 && w < C.zS - 0.3 && c > -140 && c < 170) ||
      (c > Y.x0 + 0.5 && c < Y.x1 - 0.5 && w < C.zN + 2 && w > -215),
    P = 4096,
    F = new Int32Array(P),
    I = new Int32Array(n),
    T = (c, w) =>
      ((Math.imul(c, 73856093) ^ Math.imul(w, 19349663)) >>> 0) & (P - 1),
    y = new Float32Array(z.length * 3);
  z.forEach((c, w) => y.set(c, w * 3));
  function H(c) {
    ((c = Math.min(c, 0.1)), F.fill(-1));
    for (let w = 0; w < n; w++) {
      const h = l[w],
        g = T(Math.floor(h.x / 3), Math.floor(h.z / 3));
      ((I[w] = F[g]), (F[g] = w));
    }
    for (let w = 0; w < n; w++) {
      const h = l[w];
      if (h.role === "drift") {
        let R = f.p[0] + h.ox,
          A = f.p[2] + h.oz;
        const _ = h.x > Y.x0 && h.x < Y.x1;
        (A < C.zN - 2 &&
          !_ &&
          h.z > C.zN &&
          ((R = (Y.x0 + Y.x1) / 2 + h.ox * 0.2), (A = -30 + h.oz * 0.3)),
          A > C.zN + 2 &&
            _ &&
            h.z < C.zN &&
            ((R = (Y.x0 + Y.x1) / 2 + h.ox * 0.2), (A = C.zN + 6)));
        let D = R - h.x,
          j = A - h.z;
        const U = Math.hypot(D, j);
        let K = 0,
          E = 0;
        U > 1.2 && ((K = D / U), (E = j / U));
        const Q = Math.floor(h.x / 3),
          G = Math.floor(h.z / 3);
        for (let q = -1; q <= 1; q++)
          for (let r = -1; r <= 1; r++)
            for (let S = F[T(Q + q, G + r)]; S >= 0; S = I[S]) {
              if (S === w) continue;
              const V = l[S],
                O = h.x - V.x,
                W = h.z - V.z,
                X = O * O + W * W;
              if (X < 0.7 && X > 1e-6) {
                const Z = Math.sqrt(X);
                ((K += (O / Z) * (0.85 - Z) * 2.2),
                  (E += (W / Z) * (0.85 - Z) * 2.2));
              }
            }
        for (let q = 0; q < y.length; q += 3) {
          const r = h.x - y[q],
            S = h.z - y[q + 1],
            V = y[q + 2],
            O = r * r + S * S;
          if (O < V * V && O > 1e-6) {
            const W = Math.sqrt(O);
            ((K += (r / W) * (V - W) * 0.8), (E += (S / W) * (V - W) * 0.8));
          }
        }
        const i0 = Math.hypot(K, E),
          r0 = U > 1.2 ? 1 : 0.1;
        if (i0 > 1e-4) {
          let r = Math.atan2(K, E) - h.head;
          ((r = Math.atan2(Math.sin(r), Math.cos(r))),
            (h.head += r * Math.min(1, c * 0.9)));
        }
        const J = h.speed * r0 * (0.75 + 0.25 * Math.sin(h.phase * 40 + h.x)),
          v0 = h.x + Math.sin(h.head) * J * c,
          u0 = h.z + Math.cos(h.head) * J * c;
        L(v0, u0) ? ((h.x = v0), (h.z = u0)) : (h.head += c * 0.8);
      }
      const g =
        t0(h.x, h.z) +
        ((h.z > C.zS - 5 && h.z < C.zS) || (h.z > C.zN && h.z < C.zN + 5)
          ? C.curbH
          : 0);
      ((p.array[w * 4] = h.x),
        (p.array[w * 4 + 1] = g),
        (p.array[w * 4 + 2] = h.z),
        (p.array[w * 4 + 3] = h.head));
      const M =
        f.up *
        (h.role === "feed" ? 0.2 : 1) *
        Math.max(0, 1 - Math.hypot(h.x - f.p[0], h.z - f.p[2]) / 90);
      ((h.look += (M - h.look) * Math.min(1, c * 0.6)),
        (N.array[w * 4 + 2] = h.look));
    }
    ((p.needsUpdate = !0), (N.needsUpdate = !0));
  }
  return (
    H(0),
    {
      mesh: u,
      agents: l,
      update: H,
      setAttention(c) {
        if (!c) {
          ((f.p = [v.x, l0, v.z]), (f.up = 0));
          return;
        }
        ((f.p = [c[0], c[1] ?? l0, c[2]]),
          (f.up = (c[1] ?? l0) > l0 + 6 ? 1 : 0));
        for (const w of l)
          w.role === "drift" &&
            ((w.ox = s(-9, 9)),
            (w.oz = s(-6, 6)),
            f.up && (w.oz = Math.min(w.oz, 0) - s(1.5, 8)));
        if (f.up)
          for (const w of l)
            w.role === "drift" &&
              (w.oz = Math.max(
                C.zN + 1 - f.p[2],
                Math.min(w.oz, C.zS - 1.5 - f.p[2]),
              ));
      },
      attention: f,
    }
  );
}
function nt(t, i) {
  const a = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 }),
    e = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 });
  let s = a;
  const l = new a0(),
    d = new s0(),
    v = new B(),
    x = new B(),
    n = new $(1, 1, 1),
    k = -27.39,
    m = 3.3,
    p = 0.06,
    b = 17.3,
    N = (c, w, h, g, M, R, A = 0, _ = 0.07) => {
      const D = {
        aOrigin: [(c + g) / 2, k, (h + R) / 2, 0],
        aDims: [g - c, M - k + 1.25, R - h, b],
        aStyle: [m, 3.2, p, A],
        aLight: [_, 0, 0, 0.12],
      };
      (l.compose(
        x.set((c + g) / 2, (w + M) / 2, (h + R) / 2),
        d.identity(),
        v.set(g - c, M - w, R - h),
      ),
        s.add(n, l, D));
    },
    o = -0.2,
    u = 13.5,
    z = -0.2,
    f = 20.6;
  (N(o, k, z, u, -0.3, f, 0, 0.06),
    N(7, -0.3, z, u, 3.3, 4.4, 0, 0),
    N(7, -0.3, 9.2, u, 3.3, 13.4, 0, 0),
    N(12.4, -0.3, 13.4, u, 3.3, f, 0, 0));
  const L = (c, w, h, g, M, R) => N(c, w, h, g, M, R, 1);
  ((s = e),
    L(o, 3.3, z, u, 3.62, 4.4),
    L(o, 3.3, 9.2, u, 3.62, f),
    L(o, 3.3, 4.4, 11, 3.62, 9.2),
    L(o - 0.05, 3.62, z - 0.05, u + 0.05, 4.45, z + 0.28),
    L(o - 0.05, 3.62, f - 0.28, u + 0.05, 4.45, f + 0.05),
    L(o - 0.05, 3.62, z, o + 0.28, 4.45, f),
    L(u - 0.28, 3.62, z, u + 0.05, 4.45, 4.4),
    L(u - 0.28, 3.62, 9.2, u + 0.05, 4.45, f),
    L(o - 0.08, 4.45, z - 0.12, u + 0.08, 4.6, z + 0.3),
    (s = a),
    L(o - 0.05, 3.05, z - 0.62, u + 0.05, 3.25, z),
    L(o - 0.05, 3.25, z - 0.45, u + 0.05, 3.4, z),
    L(o - 0.03, -0.55, z - 0.22, u + 0.03, -0.3, z),
    L(o - 0.03, k + m * 1.3 - 0.3, z - 0.25, u + 0.03, k + m * 1.3, z));
  const P = 5.9,
    F = 8.1;
  (N(P, l0, z - 0.06, F, l0 + 2.7, z + 0.02, 3),
    L(P - 0.4, l0 + 2.95, z - 1.1, F + 0.4, l0 + 3.1, z));
  const I = S0(i, 1),
    T = new e0(a.build(), I);
  T.name = "our_building";
  const y = new e0(e.build(), I);
  ((y.name = "our_roof"),
    (y.userData.ceiling = !0),
    T.add(y),
    t.beforeRender(() => {
      y.visible = !t.game.flags.has("noceil");
    }));
  const H = { p: [(P + F) / 2, l0 + 2.8, z - 0.6], c: [1, 0.55, 0.2], I: 9 };
  return { mesh: T, doorLamp: H };
}
