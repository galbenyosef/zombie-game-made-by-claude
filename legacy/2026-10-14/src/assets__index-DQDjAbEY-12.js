// assets__index-DQDjAbEY 12 — col
// Lines 3394-3711 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function Ia(e, l, a) {
  const o = O0.brk,
    t = ie(o),
    s = (n, c, i) => {
      for (let f = 0; f < 26; f++) {
        const p = (f / 26) * Math.PI * 2,
          m = ((f + 1) / 26) * Math.PI * 2,
          x = (p + m) / 2,
          w = 0.04 + a() * 0.14,
          v = a() < 0.3 ? 0.4 + a() * 0.5 : a() * 0.15,
          u = h(Math.cos(p) * t.rx, t.C + Math.sin(p) * t.ry, o),
          g = h(Math.cos(m) * t.rx, t.C + Math.sin(m) * t.ry, o),
          P = h(Math.cos(x), Math.sin(x), 0),
          k = h(
            Math.cos(x) * t.rx,
            t.C + Math.sin(x) * t.ry,
            o + i * w,
          ).addScaledVector(P, v * w),
          y = new K0();
        (y.setAttribute(
          "position",
          new L0([u.x, u.y, u.z, g.x, g.y, g.z, k.x, k.y, k.z], 3),
        ),
          y.setIndex(i > 0 ? [0, 1, 2] : [0, 2, 1]),
          y.computeVertexNormals(),
          n.add(y, null, S.skin, { part: c, both: S.sootInside }));
      }
      for (let f = 0; f < 7; f++) {
        const p = a() * Math.PI * 2,
          m = h(Math.cos(p) * t.rx * 0.92, t.C + Math.sin(p) * t.ry * 0.92, o),
          x = m
            .clone()
            .add(
              h((a() - 0.5) * 0.12, (a() - 0.5) * 0.12, i * (0.06 + a() * 0.2)),
            );
        n.add(g0(m, x, 0.008, 4), null, S.alu, { part: c });
      }
      n.add(
        g0(
          h(0, t.C + t.ry - 0.03, o),
          h(0, t.C + t.ry - 0.03 + (a() - 0.5) * 0.04, o + i * 0.18),
          0.022,
          8,
        ),
        null,
        S.steel,
        { part: c },
      );
    };
  (s(e, _.BRK_BODY, -1), s(l, _.BRK_TAIL, 1));
  for (let n = 0; n < 4; n++) {
    const c = -Math.PI / 2 + (a() - 0.5) * 1.6,
      i = h(Math.cos(c) * t.rx * 0.7, t.C + Math.sin(c) * t.ry * 0.7, o),
      d = [i];
    let f = i.clone();
    const p = 0.5 + a() * 0.9,
      m = 8;
    for (let x = 1; x <= m; x++) {
      const w = x / m;
      ((f = i
        .clone()
        .add(h((a() - 0.5) * 0.06 * w, -p * w * w * 0.8, -p * w * 0.6))),
        d.push(f));
    }
    e.add(
      v0(we(d, 24), 0.006 + a() * 0.004, 5),
      null,
      n % 2 ? S.dark : S.redPaint,
      { part: _.CABLES },
    );
  }
}
function qt(e, l) {
  const a = e.nv,
    o = new Float32Array(a).fill(1),
    t = l,
    s = t.NT,
    n = [],
    c = 4;
  for (let x = 0; x < t.NS; x += c)
    for (let w = 0; w < s; w += c) {
      const v = t.pos[x][w],
        u = t.pos[x + 1][(w + 1) % s],
        g = (v.x + u.x) / 2,
        P = (v.y + u.y) / 2,
        k = (v.z + u.z) / 2;
      if (oo(g, P, k) > -0.01) continue;
      const y = t.pos[x + 1][w].clone().sub(v),
        M = t.pos[x][(w + 1) % s].clone().sub(v),
        F = y.cross(M).length() * c * c,
        A = t.nrm[x][w];
      n.push([g, P, k, A.x, A.y, A.z, F]);
    }
  const i = [-0.78, 0.78, 1, 1.56, 2.28, 3.2],
    d = (x, w, v, u, g, P, k) => {
      let y = 0,
        M = k;
      for (const [F, A, W, N] of [
        [x, u, i[0], i[1]],
        [w, g, i[2], i[3]],
        [v, P, i[4], i[5]],
      ]) {
        if (Math.abs(A) < 1e-9) {
          if (F < W || F > N) return !1;
          continue;
        }
        let D = (W - F) / A,
          $ = (N - F) / A;
        if (D > $) {
          const u0 = D;
          ((D = $), ($ = u0));
        }
        if (((y = Math.max(y, D)), (M = Math.min(M, $)), y > M)) return !1;
      }
      return !0;
    },
    f = e.P,
    p = e.N,
    m = e.S;
  e.G;
  for (let x = 0; x < a; x++) {
    const w = f[x * 3],
      v = f[x * 3 + 1],
      u = f[x * 3 + 2],
      g = m[x * 4 + 3];
    if (
      g === 1 ||
      g === 14 ||
      g === 11 ||
      u < -2.66 ||
      u > 3.38 ||
      v < 0.6 ||
      v > 2.3
    )
      continue;
    const P = _0(u, v);
    if (!(P > 0) || Math.abs(w) > P - 0.006) continue;
    const k = p[x * 3],
      y = p[x * 3 + 1],
      M = p[x * 3 + 2];
    let F = 0;
    for (const A of n) {
      let W = A[0] - w,
        N = A[1] - v,
        D = A[2] - u;
      const $ = W * W + N * N + D * D,
        u0 = Math.sqrt($);
      ((W /= u0), (N /= u0), (D /= u0));
      const L = k * W + y * N + M * D;
      if (L <= 0) continue;
      const T = A[3] * W + A[4] * N + A[5] * D;
      T <= 0 ||
        d(w, v, u, W, N, D, u0 - 0.03) ||
        (F += (L * T * A[6]) / (Math.PI * ($ + 0.02)));
    }
    o[x] = Math.min(1, 0.15 + 1.1 * F);
  }
  e.O = Array.from(o);
}
const Ye = Math.PI / 180,
  t0 = {
    floorY: 0.7,
    seatX: 0.38,
    seatZ: 1.4,
    seatTop: 1.075,
    eye: h(0.38, 1.9, 1.5),
    cycBase: 1.88,
    cycTop: 1.2,
    colPivot: h(0.27, 0.82, 1.14),
    pedZ: 2.36,
    pedY: 0.84,
    panel: { y0: 1.19, z0: 2.29, h: 0.33, tilt: 11.6 * Ye, x: 0.76 },
  },
  R = {
    plastic: Z({
      col: "#17181a",
      rough: 0.62,
      kind: Q.PLASTIC,
      grime: 0.3,
      scuff: 0.3,
    }),
    plasticGrey: Z({
      col: "#3a3c3f",
      rough: 0.55,
      kind: Q.PLASTIC,
      grime: 0.35,
      scuff: 0.35,
    }),
    panelPaint: Z({
      col: "#232528",
      rough: 0.58,
      kind: Q.PLASTIC,
      grime: 0.3,
      scuff: 0.45,
    }),
    glareTop: Z({
      col: "#0b0b0c",
      rough: 0.92,
      kind: Q.PLASTIC,
      grime: 0.2,
      dust: 0.4,
    }),
    bezel: Z({
      col: "#1d1e21",
      rough: 0.45,
      kind: Q.PLASTIC,
      grime: 0.2,
      scuff: 0.25,
    }),
    button: Z({ col: "#2b2d31", rough: 0.5, kind: Q.PLASTIC, scuff: 0.6 }),
    knob: Z({ col: "#111214", rough: 0.4, kind: Q.PLASTIC, scuff: 0.5 }),
    alu: Z({
      col: "#9fa1a0",
      rough: 0.38,
      metal: 1,
      kind: Q.METAL,
      grime: 0.5,
    }),
    steel: Z({
      col: "#8a8b8c",
      rough: 0.3,
      metal: 1,
      kind: Q.METAL,
      grime: 0.4,
    }),
    chrome: Z({
      col: "#c4c4c2",
      rough: 0.15,
      metal: 1,
      kind: Q.METAL,
      grime: 0.2,
    }),
    dark: Z({
      col: "#1a1b1d",
      rough: 0.5,
      metal: 0.5,
      kind: Q.METAL,
      grime: 0.4,
    }),
    leather: Z({
      col: "#1a1513",
      rough: 0.55,
      clear: 0.15,
      kind: Q.FABRIC,
      scuff: 0.5,
    }),
    fabric: Z({ col: "#22262c", rough: 0.85, kind: Q.FABRIC, scuff: 0.3 }),
    web: Z({ col: "#1e2124", rough: 0.85, kind: Q.WEB }),
    webRed: Z({ col: "#5a0d10", rough: 0.85, kind: Q.WEB }),
    floor: Z({ col: "#1c1c1d", rough: 0.88, kind: Q.FLOOR, grime: 0.8 }),
    rubber: Z({ col: "#0e0e0f", rough: 0.85, kind: Q.RUBBER }),
    trim: Z({ col: "#7d7a73", rough: 0.72, kind: Q.TRIM, grime: 0.45 }),
    decal: Z({ col: "#1b1d20", rough: 0.55, kind: Q.DECAL, grime: 1 }),
    paper: Z({ col: "#c8c2b0", rough: 0.85, kind: Q.DECAL, grime: 0 }),
    red: Z({
      col: "#6e0b0e",
      rough: 0.45,
      clear: 0.3,
      kind: Q.PAINT,
      scuff: 0.4,
    }),
    orange: Z({ col: "#8a2a06", rough: 0.7, kind: Q.FABRIC, scuff: 0.3 }),
    redBag: Z({ col: "#5c0a0c", rough: 0.75, kind: Q.FABRIC, scuff: 0.35 }),
    mattress: Z({
      col: "#0f2238",
      rough: 0.45,
      clear: 0.2,
      kind: Q.FABRIC,
      scuff: 0.2,
    }),
    white: Z({ col: "#c9c7c0", rough: 0.5, kind: Q.PAINT, scuff: 0.2 }),
    green: Z({
      col: "#173a1f",
      rough: 0.45,
      clear: 0.3,
      kind: Q.PAINT,
      scuff: 0.4,
    }),
    yellow: Z({ col: "#8a6a08", rough: 0.5, kind: Q.PAINT, scuff: 0.5 }),
    net: Z({ col: "#2a2c2e", rough: 0.9, kind: Q.NET }),
    lens: Z({ col: "#a8a8a2", rough: 0.1, kind: Q.LAMP }),
    blood: Z({ col: "#1e0203", rough: 0.25, clear: 0.6, kind: Q.PLAIN }),
    gauze: Z({ col: "#b8b4aa", rough: 0.9, kind: Q.FABRIC }),
  };
function xe(e, l, a = 0) {
  const o = t0.panel,
    t = h(0, Math.cos(o.tilt), Math.sin(o.tilt)),
    s = h(0, Math.sin(o.tilt), -Math.cos(o.tilt));
  return h(e, o.y0, o.z0).addScaledVector(t, l).addScaledVector(s, a);
}
const D0 = (e, l, a = 0) => {
  const o = t0.panel,
    t = new b0().makeRotationX(o.tilt);
  return (t.setPosition(xe(e, l, a)), t);
};
function Ca(e, l, { rng: a = Math.random } = {}) {
  const o = {},
    t = (s, n) => {
      const c = e.tris;
      (n(), (o[s] = e.tris - c));
    };
  return (
    t("floor", () => Na(e)),
    t("panel", () => Fa(e, l)),
    t("pedestal", () => Ea(e, l)),
    t("overhead", () => Da(e, l)),
    t("post", () => Ba(e)),
    t("seats", () => {
      for (const s of [1, -1]) Ga(e, s);
    }),
    t("controls", () => Ua(e)),
    t("doorsInside", () => Va(e)),
    t("rearCabin", () => Ka(e, l, a)),
    t("ceiling", () => Wa(e)),
    t("loose", () => qa(e)),
    { parts: o }
  );
}
