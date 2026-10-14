// assets/park-CwBfNU5l 20 — math
// Lines 8229-8356 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function ko(e, { solid: a, hedges: t, yews: r, trees: o, tents: n }) {
  const i = [];
  for (const c of t)
    c.h > 1.75 &&
      i.push({
        type: "seg",
        cx: c.cx,
        cz: c.cz,
        c: Math.cos(c.yaw),
        s: Math.sin(c.yaw),
        hl: c.L / 2,
        hw: c.W / 2,
      });
  for (const c of r) i.push({ type: "circle", x: c.x, z: c.z, r: c.r * 0.8 });
  for (const c of o)
    c.kind !== "young" &&
      i.push({ type: "circle", x: c.x, z: c.z, r: c.r * 1.15 });
  for (const c of n)
    i.push({
      type: "seg",
      cx: c.x,
      cz: c.z,
      c: Math.cos(c.yaw),
      s: Math.sin(c.yaw),
      hl: c.L / 2,
      hw: c.W / 2,
    });
  (i.push(
    { type: "circle", x: I0.x, z: I0.z, r: I0.r },
    { type: "circle", x: L0.x, z: L0.z, r: 1.3 },
  ),
    i.push({
      type: "seg",
      cx: Nt.x,
      cz: Nt.z,
      c: Math.cos(Nt.yaw + Math.PI / 2),
      s: Math.sin(Nt.yaw + Math.PI / 2),
      hl: 2.3,
      hw: 0.9,
    }));
  const f = (c, M, h, v, S) => {
      const d = (D, V) => (D - S.cx) * S.c - (V - S.cz) * S.s,
        y = (D, V) => (D - S.cx) * S.s + (V - S.cz) * S.c,
        m = d(c, M),
        F = y(c, M),
        C = d(h, v),
        L = y(h, v);
      let z = 0,
        W = 1;
      for (const [D, V, A] of [
        [m, C - m, S.hl],
        [F, L - F, S.hw],
      ]) {
        if (Math.abs(V) < 1e-9) {
          if (Math.abs(D) > A) return !1;
          continue;
        }
        let K = (-A - D) / V,
          J = (A - D) / V;
        if (
          (K > J && ([K, J] = [J, K]),
          (z = Math.max(z, K)),
          (W = Math.min(W, J)),
          z > W)
        )
          return !1;
      }
      return W > 0.02 && z < 0.98;
    },
    w = (c, M, h, v, S) =>
      se(S.x, S.z, c, M, h, v) < S.r &&
      Math.hypot(h - S.x, v - S.z) > S.r * 0.9,
    s = (c, M) => {
      let h = 0,
        v = 0;
      for (const S of N0.filter((d, y) => y % 6 === 0)) {
        if (Math.hypot(S[0] - c, S[1] - M) > 38) continue;
        v++;
        let y = !1;
        for (const m of i)
          if (
            m.type === "circle"
              ? w(S[0], S[1], c, M, m)
              : f(S[0], S[1], c, M, m)
          ) {
            y = !0;
            break;
          }
        y || h++;
      }
      return v > 0 ? 1 - h / v : 0;
    },
    l = [];
  for (let c = 32; c < 203; c += 1.5)
    for (let M = 352; M < 528; M += 1.5) {
      const h = G0(M, c);
      if (h < 12 || h > 30 || (ve(M, c) && !(c > 110)) || a(M, c, 0.5))
        continue;
      const v = s(M, c);
      if (v < 0.62) continue;
      let S = 0,
        d = 1e9;
      T0.forEach((C, L) => {
        const z = (C[0] - M) ** 2 + (C[1] - c) ** 2;
        z < d && ((d = z), (S = L));
      });
      const y = T0[Math.max(0, S - 1)],
        m = T0[Math.min(T0.length - 1, S + 1)],
        F = Math.sign((m[0] - y[0]) * (c - y[1]) - (m[1] - y[1]) * (M - y[0]));
      l.push({ x: M, z: c, h: v, bi: S, side: F });
    }
  const u = [];
  for (let c = 0; c < 2 && u.length < 26; c++)
    for (let M = c; M < T0.length && u.length < 26; M += 2)
      for (const h of [-1, 1]) {
        const v = l.filter(
          (d) =>
            Math.abs(d.bi - M) <= 2 &&
            d.side === h &&
            u.every((y) => Math.hypot(y[0] - d.x, y[1] - d.z) > 7),
        );
        if (!v.length) continue;
        v.sort((d, y) => y.h - d.h || d.x - y.x);
        const S = v[Math.floor(e() * Math.min(2, v.length))];
        if ((u.push([+S.x.toFixed(1), +S.z.toFixed(1)]), u.length >= 26)) break;
      }
  return u;
}
