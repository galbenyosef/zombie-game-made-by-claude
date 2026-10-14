// assets/city-COfbVKUz 08 — box
// Lines 2149-2489 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function Re(m, e, d, n) {
  const h = He(e.seed + e.id * 0.0137),
    c = e.id,
    w = e.x - e.w / 2,
    s = e.x + e.w / 2,
    x = e.z - e.d / 2,
    k = e.z + e.d / 2,
    P = e.base,
    _ = P + e.h,
    g = A0(c, C.trim),
    M = A0(c, C.iron),
    N = A0(c, C.metal),
    T = A0(c, C.concrete),
    S = e.style === 3 || e.style === 5,
    v = [
      { bit: 1, n: [1, 0], at: s, a0: x, a1: k, W: e.d },
      { bit: 2, n: [-1, 0], at: w, a0: x, a1: k, W: e.d },
      { bit: 4, n: [0, 1], at: k, a0: w, a1: s, W: e.w },
      { bit: 8, n: [0, -1], at: x, a0: w, a1: s, W: e.w },
    ],
    a = (p, i, t, u, o, l, f, z = 0.02) => {
      if (p.n[0]) {
        const A = p.at - p.n[0] * z,
          F = p.at + p.n[0] * u;
        m.box(Math.min(A, F), o, i, Math.max(A, F), l, t, f);
      } else {
        const A = p.at - p.n[1] * z,
          F = p.at + p.n[1] * u;
        m.box(i, o, Math.min(A, F), t, l, Math.max(A, F), f);
      }
    },
    r = e.groundH || e.flH * 1.3,
    y = Math.max(1, Math.floor((e.h - r - 1.2) / e.flH) + 1);
  if (e.flags & 4) {
    const p = S ? 0.25 : 0.35,
      i = S ? 1.4 : 1.05;
    (m.box(w, _ - 0.02, x, s, _ + i, x + p, g),
      m.box(w, _ - 0.02, k - p, s, _ + i, k, g),
      m.box(w, _ - 0.02, x + p, w + p, _ + i, k - p, g),
      m.box(s - p, _ - 0.02, x + p, s, _ + i, k - p, g),
      S ||
        m.box(w - 0.06, _ + i, x - 0.06, s + 0.06, _ + i + 0.12, k + 0.06, g));
  }
  for (const p of v) {
    if (!(e.faces & p.bit)) continue;
    const i = Math.max(1, Math.floor(p.W / e.bay + 0.5)),
      t = p.W / i;
    if (S) a(p, p.a0, p.a1, 0.12, _ - 1.5, _ - 1.2, g);
    else {
      const u = _ - 1.2;
      (a(p, p.a0 - 0.05, p.a1 + 0.05, 0.22, u - 0.55, u - 0.35, g),
        a(p, p.a0 - 0.1, p.a1 + 0.1, 0.42, u - 0.35, u - 0.18, g),
        a(p, p.a0 - 0.15, p.a1 + 0.15, 0.62, u - 0.18, u + 0.02, g),
        a(p, p.a0, p.a1, 0.2, P + r - 0.3, P + r - 0.05, g));
    }
    for (let u = 1; u < y; u++) {
      const o = P + r + (u - 1) * e.flH;
      if (o > _ - 2) break;
      e.style === 1 && a(p, p.a0, p.a1, 0.1, o + 0.55, o + 0.7, g);
      for (let l = 0; l < i; l++) {
        const f = p.a0 + (l + 0.5) * t;
        if (e.style === 0 || e.style === 6) {
          const z = t * 0.44 + 0.16,
            A = e.style === 6 ? o + e.flH * 0.42 : o + 0.85;
          (a(p, f - z / 2, f + z / 2, 0.09, A - 0.1, A, g),
            a(
              p,
              f - z / 2 - 0.05,
              f + z / 2 + 0.05,
              0.05,
              o + e.flH - 0.55,
              o + e.flH - 0.35,
              g,
            ));
        }
        if (e.flags & 32 && e.style !== 3 && h() < 0.13) {
          const E = o + (e.style === 4 ? 1.1 : 0.85) - 0.12;
          (a(p, f - 0.72 / 2, f + 0.72 / 2, 0.55, E - 0.48, E, N, 0),
            a(
              p,
              f - 0.72 / 2 + 0.05,
              f - 0.72 / 2 + 0.09,
              0.55 * 0.9,
              E - 0.48 - 0.25,
              E - 0.48,
              M,
              0,
            ),
            a(
              p,
              f + 0.72 / 2 - 0.09,
              f + 0.72 / 2 - 0.05,
              0.55 * 0.9,
              E - 0.48 - 0.25,
              E - 0.48,
              M,
              0,
            ));
        }
        if (e.flags & 64) {
          const z = t * 0.82,
            A = 1.35;
          (a(p, f - z / 2, f + z / 2, A, o - 0.02, o + 0.16, T, 0),
            a(p, f - z / 2, f + z / 2, A, o + 0.95, o + 1, M, -A + 0.04),
            a(p, f - z / 2, f - z / 2 + 0.04, A, o + 0.16, o + 0.95, M, 0),
            a(p, f + z / 2 - 0.04, f + z / 2, A, o + 0.16, o + 0.95, M, 0),
            a(
              p,
              f - z / 2,
              f + z / 2,
              0.03,
              o + 0.16,
              o + 0.95,
              A0(c, C.glassRail),
              -A + 0.04,
            ));
        }
      }
    }
    if (e.flags & 1 && e.style === 0 && p.W > 9 && y > 2) {
      const u = p.W > 22 ? 2 : 1;
      for (let o = 0; o < u; o++) {
        const l = p.a0 + p.W * (u === 1 ? 0.5 : o === 0 ? 0.27 : 0.73),
          f = Math.min(5.2, t * 1.8),
          z = 1.25;
        for (let A = 1; A < y; A++) {
          const F = P + r + (A - 1) * e.flH + 0.2;
          if (F > _ - 2.2) break;
          if (
            (a(p, l - f / 2, l + f / 2, z, F - 0.05, F, M, 0),
            a(p, l - f / 2, l + f / 2, 0.035, F + 0.95, F + 1, M, -z + 0.035),
            a(p, l - f / 2, l - f / 2 + 0.035, z, F, F + 1, M, 0),
            a(p, l + f / 2 - 0.035, l + f / 2, z, F, F + 1, M, 0),
            A > 1)
          ) {
            const K = A % 2 ? 1 : -1;
            for (let L = 0; L < 6; L++) {
              const q = l + K * (-f / 2 + 0.3 + (L / 6) * (f - 0.9)),
                R = F - e.flH + 0.2 + ((L + 0.5) / 6) * (e.flH - 0.2);
              a(p, q - 0.18, q + 0.18, z * 0.55, R - 0.04, R, M, -0.1);
            }
          }
        }
        a(p, l - 0.25, l + 0.25, 0.9, P + r - 0.1, P + r + 0, M, -0.6);
      }
    }
  }
  const b = (p, i, t, u, o) => {
    const l = n.lowest(p - t / 2, p + t / 2, i - u / 2, i + u / 2, 9);
    return _ + o < l - 0.65 - 2.5;
  };
  if (e.w > 8 && e.d > 8) {
    const p = e.x + (h() - 0.5) * e.w * 0.4,
      i = e.z + (h() - 0.5) * e.d * 0.4,
      t = 3.2 + h() * 1.8,
      u = 2.6 + h() * 1.4,
      o = 2.8 + h() * 0.6;
    b(p, i, t, u, o) &&
      (d.push({ type: "hut", x: p, z: i, w: t, d: u, h: o, y: _, id: c }),
      m.box(p - t / 2, _, i - u / 2, p + t / 2, _ + o, i + u / 2, T),
      m.box(
        p - t / 2 - 0.15,
        _ + o,
        i - u / 2 - 0.15,
        p + t / 2 + 0.15,
        _ + o + 0.15,
        i + u / 2 + 0.15,
        g,
      ));
    const l = 1 + Math.floor(h() * (e.w * e.d > 900 ? 5 : 3));
    for (let f = 0; f < l; f++) {
      const z = e.x + (h() - 0.5) * (e.w - 3),
        A = e.z + (h() - 0.5) * (e.d - 3),
        F = 1.2 + h() * 2.2,
        E = 1 + h() * 1.6,
        K = 0.8 + h() * 1;
      b(z, A, F, E, K) &&
        (m.box(z - F / 2, _, A - E / 2, z + F / 2, _ + K, A + E / 2, N),
        m.box(
          z - F / 2 + 0.1,
          _ + K,
          A - E / 2 + 0.1,
          z - F / 2 + 0.5,
          _ + K + 0.35,
          A - E / 2 + 0.5,
          N,
        ));
    }
    if (e.flags & 16) {
      const f = e.x + (h() - 0.5) * e.w * 0.5,
        z = e.z + (h() - 0.5) * e.d * 0.5,
        A = 1.8 + h() * 0.9,
        F = 3.5 + h() * 2.5,
        E = 3.8 + h() * 1.2;
      if (b(f, z, A * 2.2, A * 2.2, F + E + 0.5)) {
        d.push({ type: "tank", x: f, z, r: A, legs: F, h: E, y: _, id: c });
        const K = new S0().compose(
          new X(f, _ + F, z),
          new G0(),
          new X(A * 2, E, A * 2),
        );
        m.geo(Te, A0(c, C.wood), K);
        for (const [L, q] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ])
          m.box(
            f + L * A * 0.7 - 0.09,
            _,
            z + q * A * 0.7 - 0.09,
            f + L * A * 0.7 + 0.09,
            _ + F + 0.1,
            z + q * A * 0.7 + 0.09,
            M,
          );
        for (const L of [_ + F * 0.4, _ + F * 0.8])
          (m.box(
            f - A * 0.7,
            L,
            z - A * 0.7 - 0.04,
            f + A * 0.7,
            L + 0.08,
            z - A * 0.7 + 0.04,
            M,
          ),
            m.box(
              f - A * 0.7,
              L,
              z + A * 0.7 - 0.04,
              f + A * 0.7,
              L + 0.08,
              z + A * 0.7 + 0.04,
              M,
            ));
        m.box(
          f - A * 0.78,
          _ + F - 0.12,
          z - A * 0.78,
          f + A * 0.78,
          _ + F + 0.04,
          z + A * 0.78,
          M,
        );
      }
    }
    if (h() < 0.35) {
      const f = e.x + (h() - 0.5) * e.w * 0.6,
        z = e.z + (h() - 0.5) * e.d * 0.6,
        A = 6 + h() * 10;
      b(f, z, 1, 1, A) &&
        (m.box(f - 0.07, _, z - 0.07, f + 0.07, _ + A, z + 0.07, M),
        m.box(
          f - 0.8,
          _ + A * 0.7,
          z - 0.03,
          f + 0.8,
          _ + A * 0.7 + 0.05,
          z + 0.03,
          M,
        ),
        d.push({ type: "mast", x: f, z, y: _, h: A, id: c }));
    }
  }
}
function Be(m, e, d) {
  const n = new T0();
  n.name = "city3_buildings";
  const h = Ne(d.blds),
    c = [W0(e, h, 0), W0(e, h, 1), W0(e, h, 2)],
    w = [],
    s = [],
    x = new Map();
  for (const T of d.blds) {
    if (T.tier === "near") continue;
    const S =
      (T.tier === "mid" ? "m" : "f") +
      Math.floor(T.x / 320) +
      "," +
      Math.floor(T.z / 320);
    (x.get(S) || x.set(S, []).get(S)).push(T);
  }
  const k = new S0(),
    P = new G0(),
    _ = new X(0, 1, 0),
    g = new X(),
    M = new X();
  for (const [T, S] of x) {
    const v = new v0();
    (v.setIndex(lt.index),
      v.setAttribute("position", lt.attributes.position),
      v.setAttribute("normal", lt.attributes.normal),
      v.setAttribute(
        "aPart",
        new m0(new Float32Array(S.map((r) => A0(r.id, 0))), 1),
      ));
    const a = new Mt(v, c[T[0] === "m" ? 1 : 0], S.length);
    (S.forEach((r, y) => {
      (P.setFromAxisAngle(_, r.rot || 0),
        a.setMatrixAt(
          y,
          k.compose(g.set(r.x, r.base, r.z), P, M.set(r.w, r.h, r.d)),
        ));
    }),
      (a.instanceMatrix.needsUpdate = !0),
      a.computeBoundingSphere(),
      a.computeBoundingBox?.(),
      (a.name = "city3_bld_" + T),
      n.add(a),
      w.push(a));
  }
  const N = new Map();
  for (const T of d.blds) {
    if (T.tier !== "near") continue;
    const S = Math.floor(T.x / 160) + "," + Math.floor(T.z / 160);
    (N.get(S) || N.set(S, []).get(S)).push(T);
  }
  for (const [T, S] of N) {
    const v = new l0();
    for (const r of S) {
      if (r.custom) {
        r.custom(v, A0, C);
        continue;
      }
      (v.box(
        r.x - r.w / 2,
        r.base,
        r.z - r.d / 2,
        r.x + r.w / 2,
        r.base + r.h,
        r.z + r.d / 2,
        A0(r.id, 0),
      ),
        Re(v, r, s, d.corridor));
    }
    const a = new s0(v.build(), c[2]);
    ((a.name = "city3_near_" + T), n.add(a), w.push(a));
  }
  return { group: n, meshes: w, roofItems: s, texture: h, mats: c };
}
