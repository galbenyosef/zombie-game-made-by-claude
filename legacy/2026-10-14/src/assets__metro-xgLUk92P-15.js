// assets__metro-xgLUk92P 15 — add
// Lines 5376-5677 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function ma(c, a, o) {
  const { B: s, M: f, L: h, D: d } = c,
    l = { chunk: "ash" },
    i = u0,
    t = 0.92,
    e = 0.78,
    n = 1.86;
  (s.add(T(a - t / 2, i, o, a + t / 2, i + n, o + e, 0.02), f.machine, l),
    s.add(
      T(
        a - t / 2 + 0.04,
        i + 0.08,
        o + e,
        a + t / 2 - 0.04,
        i + 0.32,
        o + e + 0.01,
      ),
      f.black,
      l,
    ),
    s.add(
      T(
        a + t / 2 - 0.2,
        i + 0.45,
        o + e,
        a + t / 2 - 0.04,
        i + 1.75,
        o + e + 0.03,
        0.006,
      ),
      f.plastic,
      l,
    ));
  for (let u = 0; u < 4; u++)
    s.add(
      T(
        a + t / 2 - 0.16,
        i + 1.2 - u * 0.12,
        o + e + 0.03,
        a + t / 2 - 0.08,
        i + 1.26 - u * 0.12,
        o + e + 0.04,
        0.004,
      ),
      f.galv,
      l,
    );
  const r = h.fixId();
  return (
    d.glow("drinks", [a - 0.09, i + 1.08, o + e], 0.62, 1.24, "+z", {
      fx: r,
      chunk: "ash",
    }),
    h.add({
      a: [a - 0.09, i + 0.55, o + e + 0.15],
      b: [a - 0.09, i + 1.6, o + e + 0.15],
      col: [1, 0.62, 0.55],
      cd: 7,
      reach: 4.2,
      zone: "ashwood",
      fix: r,
      state: "on",
      dir: [0, -0.25, 1],
      dirK: 0.95,
      box: [a - 4, i - 0.2, m.zN - 0.05, a + 4, i + 4, o + 5],
      weight: 1.3,
      point: { cd: 5, dist: 4.5, below: 0 },
    }),
    c.sounds.hums.push({
      id: "metro_drinks_hum",
      pos: [a, i + 0.6, o + e],
      zone: "ashwood",
    }),
    [
      {
        x0: a - t / 2,
        x1: a + t / 2,
        z0: o,
        z1: o + e + 0.04,
        y0: i,
        y1: i + n,
      },
    ]
  );
}
function za(c, a, o) {
  const { B: s, M: f, D: h, group: d } = c,
    l = { chunk: "ash" },
    i = u0,
    t = m.zN,
    e = m.zN + 1.9,
    n = i + 2.7;
  (s.add(T(a, i, t, a + 0.08, n, e, 0.01), f.woodDark, l),
    s.add(T(o - 0.08, i, t, o, n, e, 0.01), f.woodDark, l),
    s.add(T(a, i, e - 0.08, o, i + 1, e, 0.01), f.woodDark, l),
    s.add(
      T(a - 0.04, i + 1, e - 0.12, o + 0.04, i + 1.05, e + 0.18, 0.01),
      f.woodDark,
      l,
    ),
    s.add(T(a, n - 0.42, e - 0.08, o, n, e + 0.04, 0.01), f.woodDark, l),
    s.add(T(a, n, t, o, n + 0.06, e + 0.04, 0.01), f.woodDark, l),
    h.sign("kiosk", [(a + o) / 2, n - 0.21, e + 0.04], 2.6, 0.39, "+z", {
      depth: 0.004,
      plate: !1,
    }));
  for (let x = 0; x < 3; x++) {
    const w = i + 1.1 + x * 0.36;
    s.add(T(a + 0.1, w, t + 0.05, o - 0.1, w + 0.02, t + 0.35), f.woodDark, l);
    for (let p = 0; p < 9; p++)
      s.add(
        T(
          a + 0.15 + p * 0.34,
          w + 0.02,
          t + 0.12,
          a + 0.38 + p * 0.34,
          w + 0.3,
          t + 0.14,
        ),
        [f.fabricR, f.paper, f.fabric, f.plastic, f.print][(p * 3 + x) % 5],
        l,
      );
  }
  const r = [],
    u = (o - a) / 2 - 0.08;
  for (let x = 0; x < 0.62; x += 0.05)
    r.push(T(-u, -x - 0.045, -0.012, u, -x, 0.012, 0.01));
  const b = q0(r),
    M = new bt(b, f.galvDark);
  return (
    (M.castShadow = !0),
    (M.receiveShadow = !0),
    M.position.set((a + o) / 2, n - 0.42, e + 0.02),
    (M.rotation.z = 0.02),
    d.add(M),
    s.add(
      T(a + 0.04, n - 0.5, e - 0.02, o - 0.04, n - 0.42, e + 0.08, 0.02),
      f.galvDark,
      l,
    ),
    [{ x0: a, x1: o, z0: t, z1: e + 0.2, y0: i, y1: n }]
  );
}
function ya(c, a, o) {
  const { B: s, M: f, L: h, A: d, group: l } = c,
    i = { chunk: "ash" },
    t = m.ceil,
    e = 1.8,
    n = e / d.board.aspect + 0.06,
    r = t - 0.95;
  s.add(
    T(
      a - 0.06,
      r - n / 2 - 0.04,
      o - e / 2 - 0.04,
      a + 0.06,
      r + n / 2 + 0.04,
      o + e / 2 + 0.04,
      0.012,
    ),
    f.black,
    i,
  );
  for (const M of [-1, 1])
    s.add(
      j([a, t, o + M * 0.7], [a, r + n / 2 + 0.04, o + M * 0.7], 0.008, 5),
      f.galvDark,
      i,
    );
  const u = h.fixId(),
    b = c.boardMaterial;
  for (const [M, x] of [
    ["+x", 0.061],
    ["-x", -0.061],
  ]) {
    const w = Rt([0, 0, 1, 1], [a + x, r, o], e - 0.04, n - 0.08, M, 0, 0.001),
      p = w.attributes.position.count;
    (w.setAttribute("aFix", new gt(new Float32Array(p).fill(u), 1)),
      s.add(w, b, { chunk: "ash", cast: !1 }));
  }
  return (
    h.add({
      a: [a, r, o - 0.8],
      b: [a, r, o + 0.8],
      col: [1, 0.6, 0.15],
      cd: 2.5,
      reach: 4,
      zone: "ashwood",
      fix: u,
      state: "on",
      box: [a - 5, u0 - 0.2, m.zN - 0.05, a + 5, t, m.edgeN + 2],
      spec: 0.8,
    }),
    d.board
  );
}
function ga(c, a, o, s, f) {
  const { B: h, M: d, D: l } = c,
    i = { chunk: "ash" },
    t = m.ceil,
    e = t - 0.9,
    n = 0.26;
  (h.add(
    new D0(n + 0.03, n + 0.03, 0.14, 32)
      .rotateZ(Math.PI / 2)
      .translate(a, e, o),
    d.black,
    i,
  ),
    h.add(j([a, t, o], [a, e + n + 0.02, o], 0.012, 6), d.galvDark, i));
  for (const [r, u] of [
    ["+x", 0.071],
    ["-x", -0.071],
  ]) {
    l.sign("clock", [a + u, e, o], n * 2, n * 2, r, { depth: 0, plate: !1 });
    const b = r === "+x" ? 1 : -1,
      M = -0.3986111111111111 * Math.PI * 2,
      x = -0.7833333333333333 * Math.PI * 2;
    for (const [w, p, S] of [
      [M, n * 0.55, 0.018],
      [x, n * 0.85, 0.012],
    ]) {
      const y = T(-S / 2, -0.03, -0.002, S / 2, p, 0.002);
      (y.applyMatrix4(
        K0(
          [a + u + b * 0.004, e, o],
          [0, b > 0 ? Math.PI / 2 : -Math.PI / 2, 0],
        ).multiply(new rt().makeRotationZ(w)),
      ),
        h.add(y, d.black, i));
    }
  }
}
const ba = [
    [-0.075, -0.172],
    [0.075, -0.172],
    [0.075, -0.162],
    [0.012, -0.145],
    [0.008, -0.05],
    [0.036, -0.042],
    [0.036, -0.008],
    [0.03, 0],
    [-0.03, 0],
    [-0.036, -0.008],
    [-0.036, -0.042],
    [-0.008, -0.05],
    [-0.012, -0.145],
    [-0.075, -0.162],
  ],
  Ma = [
    [0.029, 6e-4],
    [-0.029, 6e-4],
  ],
  Dt = 0.7535;
function jt(
  c,
  {
    step: a = 2,
    off: o = 0,
    up: s = 0,
    chunkLen: f = 60,
    from: h = 0,
    to: d = 1 / 0,
    tag: l = "t",
  } = {},
) {
  const i = [];
  let t = 0,
    e = null,
    n = -1e9,
    r = 0;
  const u = new ot(),
    b = new ot(0, 1, 0),
    M = new ot();
  for (let x = 0; x < c.length; x++) {
    if (
      (x > 0 && (t += Math.hypot(c[x][0] - c[x - 1][0], c[x][2] - c[x - 1][2])),
      t < h - a || t > d + a)
    )
      continue;
    const w = x === c.length - 1 || t >= d;
    if (t - n < a && !w) continue;
    const p = c[Math.max(0, x - 1)],
      S = c[Math.min(c.length - 1, x + 1)],
      y = S[0] - p[0],
      L = S[2] - p[2],
      v = Math.hypot(y, L) || 1;
    if (
      (u.set(-L / v, 0, y / v),
      M.set(c[x][0] + u.x * o, c[x][1] + s, c[x][2] + u.z * o),
      (!e || t - e.t0 > f) &&
        (e && e.frames.push({ p: M.clone(), s: u.clone(), u: b.clone(), t }),
        (e = { chunk: l + r++, t0: t, frames: [] }),
        i.push(e)),
      e.frames.push({ p: M.clone(), s: u.clone(), u: b.clone(), t }),
      (n = t),
      w)
    )
      break;
  }
  return i.filter((x) => x.frames.length > 1);
}
