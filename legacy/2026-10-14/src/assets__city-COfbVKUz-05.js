// assets__city-COfbVKUz 05 — math
// Lines 1044-1488 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
function Se(m, e, d = []) {
  const n = (o, l) => o + (l - o) * m(),
    h = (o) => o[Math.floor(m() * o.length)],
    c = we(),
    w = xe(),
    s = Ae(e.samples),
    x = [],
    k = [],
    P = [],
    _ = [],
    g = [],
    M = [],
    N = e.FRAME.skidDown,
    T = e.FRAME.rotorR + 3.5,
    S = 2.6,
    v = e.samples.filter((o, l) => l % 20 === 0),
    a = (o, l, f, z) => {
      let A = 1e9;
      for (const F of v) {
        const E = Math.max(o - F.x, 0, F.x - l),
          K = Math.max(f - F.z, 0, F.z - z);
        A = Math.min(A, Math.hypot(E, K));
      }
      return A;
    };
  let r = 0;
  const y = (o) => {
      const l = {
        rot: 0,
        base: 0,
        flH: 3.4,
        bay: 3.1,
        style: 0,
        tone: m(),
        seed: 1 + m() * 97,
        lit: 0.05,
        burnF: 0,
        burnN: 0,
        dmg: 0.08,
        groundH: 0,
        tint: m(),
        faces: 15,
        flags: 4,
        tier: "mid",
        region: "down",
        kind: "pre",
        ...o,
      };
      if (!o.exempt) {
        const z =
          s.lowest(
            l.x - l.w / 2,
            l.x + l.w / 2,
            l.z - l.d / 2,
            l.z + l.d / 2,
            T,
          ) -
          N -
          S -
          (l.flags & 16 ? 9 : 2.5);
        if (l.h > z) {
          if (z < 4) return null;
          const A = Math.max(
            1,
            Math.floor((z - (l.groundH || l.flH * 1.3) - 1.2) / l.flH) + 1,
          );
          ((l.h = Math.min(
            z,
            (l.groundH || l.flH * 1.3) + (A - 1) * l.flH + 1.2,
          )),
            (l.flags &= -25),
            (l.capped = !0));
        }
      }
      return ((l.id = r++), x.push(l), l);
    },
    b = (o, l, f) => f + Math.max(0, o - 1) * l + 1.2;
  for (const o of w) {
    if (o.superName) continue;
    const l = d.find(
      (U) =>
        Math.min(o.x1, U.x1) - Math.max(o.x0, U.x0) > (o.x1 - o.x0) * 0.5 &&
        Math.min(o.z1, U.z1) - Math.max(o.z0, U.z0) > (o.z1 - o.z0) * 0.5,
    );
    if (l) {
      ((o.claim = l.name), (o.ground = l.ground));
      continue;
    }
    const { x0: f, x1: z, z0: A, z1: F } = o,
      E = (f + z) / 2,
      K = (A + F) / 2,
      L = z - f,
      q = F - A;
    if (z > d0.x0 && f < d0.x1 && F > d0.z0 && A < d0.z1) continue;
    const R = a(f, z, A, F),
      V = Math.max(h0.x0 - z, 0, f - h0.x1) + Math.max(h0.z0 - F, 0, A - h0.z1),
      H = V < 30,
      I = o.region,
      W = _e(E, K),
      D = R < 520 || V < 160 ? 2 : R < 1250 ? 1 : 0;
    if (m() < (I === "old" ? 0.03 : 0.04) && R > 160 && !H) {
      k.push({ type: "lot", x: E, z: K, w: L, d: q });
      continue;
    }
    if (D === 0) {
      const U = 1 + Math.floor(m() * 3);
      for (let B = 0; B < U; B++) {
        const j = f + (L * B) / U,
          O = f + (L * (B + 1)) / U;
        let Z = Math.round(
          I === "old"
            ? n(3, 8)
            : I === "south"
              ? n(4, 13)
              : n(5, 14) + W * n(6, 30),
        );
        m() < 0.05 && (Z += Math.round(n(10, 30)));
        const n0 =
            Z > 18
              ? h([2, 3, 3, 5, 1])
              : h(I === "old" ? [0, 0, 0, 6, 1] : [0, 0, 1, 2, 4]),
          t0 = n0 === 3 || n0 === 5 ? 3.9 : n0 === 4 ? 3 : 3.3;
        y({
          x: (j + O) / 2,
          z: K,
          w: O - j - 1,
          d: q - 1,
          h: b(Z, t0, t0 * 1.3),
          flH: t0,
          bay: n0 === 3 ? 3 : 3.2,
          style: n0,
          tier: "far",
          region: I,
          kind: "mass",
          lit: n(0.01, 0.07),
        });
      }
      continue;
    }
    const G = (U, B, j, O) =>
        s.dist(U, B, j, O, 90) < 75 ? "near" : D === 2 ? "mid" : "far",
      a0 =
        I === "down"
          ? Math.min(0.85, W * 1.2 + (R < 120 ? 0.25 : 0)) * (H ? 0.25 : 1)
          : I === "south"
            ? W * 0.6
            : 0;
    if (L > 50 && q > 40 && m() < a0) {
      const U = n(2, 5),
        B = Math.min(L - U * 2, n(34, 62)),
        j = Math.min(q - U * 2, n(28, 52)),
        O = E + (n(-1, 1) * (L - U * 2 - B)) / 2,
        Z = K + (n(-1, 1) * (q - U * 2 - j)) / 2;
      let n0 = Math.round(n(16, 26) + W * n(10, 32) + (R < 140 ? n(4, 14) : 0));
      const t0 = h([3, 3, 3, 5, 2, 1, 5]),
        c0 = t0 === 1 ? 3.8 : 4,
        D0 = y({
          x: O,
          z: Z,
          w: B,
          d: j,
          h: b(n0, c0, c0 * 1.5),
          flH: c0,
          groundH: c0 * 1.5,
          bay: t0 === 3 ? 3 : t0 === 5 ? 2.4 : 3.4,
          style: t0,
          tier: G(O - B / 2, O + B / 2, Z - j / 2, Z + j / 2),
          region: I,
          kind: "tower",
          lit: n(0, 0.05),
          flags: 4 | (m() < 0.4 ? 8 : 0) | 32,
          dmg: n(0.04, 0.2),
        });
      if (D0 && m() < 0.7) {
        const at = Math.round(n(2, 5));
        y({
          x: E,
          z: K,
          w: L - 1,
          d: q - 1,
          h: b(at, 4.2, 5),
          flH: 4.2,
          groundH: 5,
          bay: 4,
          style: h([1, 2, 3]),
          tier: G(f, z, A, F),
          region: I,
          kind: "podium",
          flags: 38,
          lit: 0.02,
        });
      }
      if (D0) continue;
    }
    const o0 = Math.min(q / 2, I === "old" ? n(14, 20) : n(15, 24)),
      p0 = Math.min(L / 2, o0),
      b0 =
        I === "old"
          ? n(3, 6.5)
          : H
            ? n(5, 9.5)
            : I === "south"
              ? n(5, 11)
              : n(6, 12) + W * n(4, 16),
      P0 =
        I === "old"
          ? [0, 0, 0, 0, 6, 1]
          : H
            ? [0, 1, 1, 0, 2]
            : I === "south"
              ? [0, 4, 4, 2, 1, 0]
              : [1, 0, 2, 4, 1, 3],
      H0 = (U, B) => {
        const j = [];
        let O = U;
        for (; O < B - 6;) {
          let Z = n(I === "old" ? 9 : 13, I === "old" ? 20 : 30);
          (B - (O + Z) < 9 && (Z = B - O), j.push([O, O + Z]), (O += Z));
        }
        return j;
      },
      x0 = (U, B, j, O, Z, n0) => {
        const t0 = h(P0);
        let c0 = Math.max(
          2,
          Math.round(b0 + n(-1.5, 2.5) + (n0 ? n(0, 2) : 0)),
        );
        R < 70 && I !== "old" && (c0 += Math.round(n(2, 8)));
        const D0 =
            t0 === 4
              ? 3
              : t0 === 1
                ? 3.7
                : t0 === 3
                  ? 3.9
                  : I === "old"
                    ? n(3.1, 3.5)
                    : n(3.2, 3.6),
          at = t0 === 4 ? 3.6 : D0 * 1.3,
          te =
            4 |
            (I !== "south" || m() < 0.6 ? 2 : 0) |
            (t0 === 0 && m() < (I === "old" ? 0.75 : 0.35) ? 1 : 0) |
            (m() < (I === "old" ? 0.45 : 0.22) ? 16 : 0) |
            (m() < 0.6 ? 32 : 0) |
            (t0 === 4 ? 64 : 0);
        return y({
          x: (U + B) / 2,
          z: (j + O) / 2,
          w: B - U,
          d: O - j,
          h: b(c0, D0, at),
          flH: D0,
          groundH: at,
          bay: t0 === 1 ? 3.4 : t0 === 4 ? 3.6 : n(2.8, 3.4),
          style: t0,
          faces: Z,
          flags: te,
          tier: G(U, B, j, O),
          region: I,
          kind: I === "old" ? "old" : "pre",
          lit: n(0.01, 0.09),
          dmg: n(0.03, 0.2),
        });
      },
      R0 = m() < 0.15,
      B0 = m() < 0.15;
    for (const [U, B] of H0(f, z)) {
      const j = U === f || B === z,
        O = 8 | (U === f ? 2 : 0) | (B === z ? 1 : 0),
        Z = 4 | (U === f ? 2 : 0) | (B === z ? 1 : 0);
      ((R0 && !j && m() < 0.35) ||
        x0(U + 0.3, B - 0.3, A + 0.4, A + o0, O | 4, j),
        q > o0 * 2 + 6 &&
          !(B0 && !j && m() < 0.35) &&
          x0(U + 0.3, B - 0.3, F - o0, F - 0.4, Z | 8, j));
    }
    if (q > o0 * 2 + 10) {
      for (const [U, B] of H0(A + o0 + 0.3, F - o0 - 0.3))
        (x0(f + 0.4, f + p0, U + 0.3, B - 0.3, 3, !1),
          L > p0 * 2 + 6 && x0(z - p0, z - 0.4, U + 0.3, B - 0.3, 3, !1));
      L > p0 * 2 + 16 &&
        q > o0 * 2 + 16 &&
        m() < 0.3 &&
        y({
          x: E,
          z: K,
          w: L - p0 * 2 - 8,
          d: q - o0 * 2 - 8,
          h: b(Math.round(n(1, 3)), 4, 4.5),
          flH: 4,
          groundH: 4.5,
          style: 6,
          faces: 15,
          flags: 36,
          tier: D === 2 ? "mid" : "far",
          region: I,
          kind: "low",
          lit: 0,
        });
    }
  }
  const p = (o, l) => {
    let f = 0.05;
    return (
      (f +=
        0.35 * Math.exp(-(((o - 800) / 500) ** 2 + ((l + 1300) / 420) ** 2))),
      (f += 0.3 * Math.exp(-(((o + 400) / 380) ** 2 + ((l + 300) / 600) ** 2))),
      (f += 0.3 * Math.exp(-(((o - 600) / 600) ** 2 + ((l - 950) / 350) ** 2))),
      (f +=
        0.14 * Math.exp(-(((o - 900) / 420) ** 2 + ((l + 260) / 260) ** 2))),
      f
    );
  };
  for (const o of x) {
    if (o.exempt || o.kind === "low") continue;
    const l = Math.max(
      1,
      Math.floor((o.h - (o.groundH || o.flH * 1.3) - 1.2) / o.flH) + 1,
    );
    if (l < 2) continue;
    const f = p(o.x, o.z) * (o.tier === "near" ? 0.75 : 1);
    m() > f ||
      ((o.burnF = 1 + Math.floor(m() * Math.max(1, l - 1))),
      (o.burnN = Math.min(
        l - o.burnF + 1,
        1 + Math.floor(m() * (o.kind === "tower" ? 4 : 2.5)),
      )),
      (o.dmg = Math.max(o.dmg, 0.35)),
      (o.lit = 0));
  }
  const i = x
    .filter((o) => o.kind === "tower" && o.h > 70 && o.tier !== "near")
    .sort((o, l) => l.h - o.h);
  for (let o = 0, l = 0; o < i.length && l < 5; o++) {
    const f = i[o];
    if (m() < 0.55) continue;
    const z = Math.floor((f.h - (f.groundH || 6)) / f.flH);
    ((f.burnF = Math.max(2, Math.floor(z * n(0.35, 0.6)))),
      (f.burnN = Math.min(z - f.burnF, Math.round(n(6, 14)))),
      (f.dmg = 0.6),
      (f.lit = 0),
      (f.engulfed = !0),
      l++);
  }
  for (const o of x) {
    if (!o.burnN) continue;
    const l = o.groundH || o.flH * 1.3,
      f = o.base + l + (o.burnF - 1) * o.flH,
      z = f + o.burnN * o.flH,
      A = (f + z) / 2;
    [
      [1, 0, o.d],
      [-1, 0, o.d],
      [0, 1, o.w],
      [0, -1, o.w],
    ].forEach(([E, K, L], q) => {
      o.faces & (1 << q) &&
        P.push({
          x: o.x + E * (o.w / 2 + 9),
          y: A,
          z: o.z + K * (o.d / 2 + 9),
          I: 4 + Math.min(L, 40) * Math.min(o.burnN, 6) * 0.3,
          kind: "storey",
          bld: o.id,
          nx: E,
          nz: K,
          w: L,
          yb: f,
          yt: z,
          engulfed: !!o.engulfed,
        });
    });
  }
  const t = (o, l) => {
      const f =
        Math.sin(Math.floor(o / 260) * 12.9898 + Math.floor(l / 260) * 78.233) *
        43758.5453;
      return f - Math.floor(f) < 0.32;
    },
    u = (o, l) =>
      o > h0.x0 - 60 && o < h0.x1 + 60 && l > h0.z0 - 60 && l < h0.z1 + 60;
  for (const o of c.ns) {
    const l = o.hw > 15 ? 5.5 : 4;
    for (let f = o.z0 + 8; f < o.z1 - 4; f += 32)
      for (const z of [-1, 1]) {
        const A = f + (z > 0 ? 16 : 0);
        if (A > o.z1 - 4) continue;
        const F = o.x + z * (o.hw - l + 0.55),
          E = t(F, A) || u(F, A) ? m() < 0.75 : m() < 0.05;
        a(F, F, A, A) > 1500 ||
          g.push({
            x: F,
            y: 8.2,
            z: A,
            on: E,
            ax: -z,
            az: 0,
            flick: m() < 0.12,
          });
      }
  }
  for (const o of c.ew) {
    const l = o.kind === "quay" ? 4 : o.hw > 15 ? 5.5 : 4;
    for (let f = o.x0 + 8; f < o.x1 - 4; f += 32)
      for (const z of [-1, 1]) {
        const A = f + (z > 0 ? 16 : 0);
        if (A > o.x1 - 4) continue;
        const F = o.z + z * (o.hw - l + 0.55),
          E = t(A, F) || u(A, F) ? m() < 0.75 : m() < 0.05;
        a(A, A, F, F) > 1500 ||
          g.push({
            x: A,
            y: 8.2,
            z: F,
            on: E,
            ax: 0,
            az: -z,
            flick: m() < 0.12,
          });
      }
  }
  for (let o = g.length - 1; o >= 0; o--) {
    const l = g[o];
    (s.lowest(l.x - 1.5, l.x + 1.5, l.z - 1.5, l.z + 1.5, 10) < 14 ||
      st(l.x, l.z, 1) ||
      it(l.x, l.z, 1)) &&
      g.splice(o, 1);
  }
  return {
    blds: x,
    roofs: k,
    fires: P,
    plumes: _,
    lamps: g,
    cars: M,
    streets: c,
    blocks: w,
    corridor: s,
    add: y,
    R: n,
    pick: h,
    districtHeat: p,
  };
}
