// assets/index-BcIwWgby 40 — math
// Lines 12204-12333 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function ma(s) {
  const { path: o, S: t } = s,
    u = s.S.gate - 1.6,
    e = s.at(u),
    r = [],
    a = Math.max(2, Math.ceil(Math.hypot(e.x - Y0.x, e.z - Y0.z) / 0.25));
  for (let f = 0; f < a; f++)
    r.push([Y0.x + ((e.x - Y0.x) * f) / a, Y0.z + ((e.z - Y0.z) * f) / a]);
  const p = t.end - 7;
  for (let f = u; f <= p + 1e-6; f += 0.25) {
    const h = s.at(f);
    r.push([h.x, h.z]);
  }
  const i = [0];
  for (let f = 1; f < r.length; f++)
    i.push(i[f - 1] + Math.hypot(r[f][0] - r[f - 1][0], r[f][1] - r[f - 1][1]));
  const d = i[i.length - 1],
    y = [];
  for (let f = 0, h = 0; ; f = Math.min(d, f + 1)) {
    for (; h < i.length - 2 && i[h + 1] < f;) h++;
    const c = i[h + 1] > i[h] ? (f - i[h]) / (i[h + 1] - i[h]) : 0;
    if (
      (y.push([
        c0(r[h][0] + (r[h + 1][0] - r[h][0]) * c),
        c0(r[h][1] + (r[h + 1][1] - r[h][1]) * c),
      ]),
      f >= d)
    )
      break;
  }
  const w = i[a],
    g = (f) => +(w + (f - u)).toFixed(1),
    z = s.at(p),
    x = [c0(z.x), c0(z.z), +Math.atan2(z.tx, z.tz).toFixed(3)],
    v = [
      [0, g(t.gate - 2.5), 2.5],
      [g(t.gate - 2.5), g(t.gate + 3), 3.5],
    ];
  {
    const h = Math.round(24),
      c = new Float32Array(o.n).fill(1e9);
    for (let m = h; m < o.n - h; m++) {
      const k = Math.atan2(o.z[m] - o.z[m - h], o.x[m] - o.x[m - h]);
      let A = Math.atan2(o.z[m + h] - o.z[m], o.x[m + h] - o.x[m]) - k;
      for (; A > Math.PI;) A -= 2 * Math.PI;
      for (; A < -Math.PI;) A += 2 * Math.PI;
      c[m] = Math.abs(A) > 1e-6 ? 6 / Math.abs(A) : 1e9;
    }
    let M = 0;
    for (; M < o.n;) {
      const m = o.s[M];
      if (
        c[M] < 14 &&
        m > t.gate + 3 &&
        m < p - 9 &&
        !(m > t.bridgeN - 4 && m < t.bridgeS + 3)
      ) {
        let k = M,
          S = c[M];
        for (; k < o.n && c[k] < 14;) ((S = Math.min(S, c[k])), k++);
        (v.push([
          g(m),
          g(o.s[Math.min(o.n - 1, k)]),
          +Math.sqrt(2.6 * S).toFixed(1),
        ]),
          (M = k));
      } else M++;
    }
  }
  v.push([g(t.bridgeN - 3), g(t.bridgeS + 2), 3]);
  {
    let f = p;
    for (let h = t.bridgeS + 2; h < p; h += 0.25) {
      const c = s.at(h);
      if (s.clearingSd(c.x, c.z) < 0) {
        f = h;
        break;
      }
    }
    v.push([g(f), g(p - 1), 2], [g(p - 1), g(p), 0]);
  }
  for (const f of s.dodges || [])
    v.push([+(g(f.s0) - 12).toFixed(1), g(f.s1), 5]);
  v.sort((f, h) => f[0] - h[0]);
  const n = (s.dodges || []).map((f) => ({
      kind: f.kind,
      s0: g(f.s0),
      s1: g(f.s1),
      ease: +f.ease.toFixed(1),
      off: +f.off.toFixed(2),
      at: (f.at || [f.o.x, f.o.z]).map(c0),
    })),
    l = (s.jumps || []).map((f) => ({
      s: g(f.s),
      h: +f.h.toFixed(2),
      at: (f.at || [f.o.x, f.o.z]).map(c0),
    }));
  return {
    line: y,
    bike: [Y0.x, Y0.z, +Y0.yaw.toFixed(3)],
    stop: x,
    slow: v,
    dodge: n,
    jump: l,
    length: +d.toFixed(1),
    pathAt: g(t.gate),
  };
}
const Bt = {
    cedar: 0,
    cedarHang: 1,
    broad: 2,
    fern: 3,
    yew: 4,
    bush: 5,
    grass: 6,
    ivy: 7,
    moss: 8,
    flowers: 9,
    fernDry: 10,
    twigs: 11,
  },
  ao = 4,
  Vs = 3,
  go = [(3 + 475 / 512) / 4, 1 - (2 + 475 / 512) / 3];
function Ao(s) {
  const o = s % ao,
    t = Math.floor(s / ao);
  return [o / ao, 1 - (t + 1) / Vs, (o + 1) / ao, 1 - t / Vs];
}
