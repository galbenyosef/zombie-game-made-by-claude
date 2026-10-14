// assets/akane-CN21eJhw 05 — math
// Lines 1622-1948 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function vt(e, t, a, o, r, i, n = !1, s = null) {
  const u = t.eyes,
    l = wo(t, a);
  (e.save(), e.translate(o, r), e.scale(a * H0, H0));
  const v = Z(t.anger),
    g = Z(t.sad),
    m = (d) =>
      n0(1.3, 3.7, Math.pow(d, 0.8)) * (1 + v * 0.35) + v * (1 - d) * 0.9;
  if (l.openAmt > 0.02 && !n) {
    (e.save(),
      e.beginPath(),
      O0(e, l.upper),
      O0(e, l.lower.slice().reverse(), !1),
      e.closePath(),
      e.clip());
    const d = Math.max(...l.upper.map((t0) => t0[1])),
      w = e.createLinearGradient(0, d, 0, d - 9);
    (w.addColorStop(0, k0.scleraShade),
      w.addColorStop(1, k0.sclera),
      (e.fillStyle = w),
      e.fillRect(-20, -20, 40, 40));
    const f = jt(t),
      [C, x] = Vt(u, a),
      p = 0.6 + C,
      M = -1.4 + x,
      I = 10 * f,
      P = 12 * f,
      F = e.createLinearGradient(0, M + P, 0, M - P);
    (F.addColorStop(0, k0.irisTop),
      F.addColorStop(0.42, k0.irisMid),
      F.addColorStop(0.78, k0.irisMid2),
      F.addColorStop(1, k0.irisBot),
      (e.fillStyle = F),
      e.beginPath(),
      e.ellipse(p, M, I, P, 0, 0, Math.PI * 2),
      e.fill(),
      e.save(),
      e.beginPath(),
      e.ellipse(p, M, I, P, 0, 0, Math.PI * 2),
      e.clip(),
      (e.strokeStyle = "rgba(255,96,110,0.22)"),
      (e.lineWidth = 0.35));
    for (let t0 = 0; t0 < 26; t0++) {
      const V = (t0 / 26) * Math.PI * 2 + X0(t0, 3) * 0.2,
        R = 0.45 + X0(t0, 5) * 0.15,
        H = 0.78 + X0(t0, 7) * 0.18;
      (e.beginPath(),
        e.moveTo(p + Math.cos(V) * I * R, M + Math.sin(V) * P * R),
        e.lineTo(p + Math.cos(V) * I * H, M + Math.sin(V) * P * H),
        e.stroke());
    }
    const L = e.createRadialGradient(
      p,
      M - P * 0.55,
      0.5,
      p,
      M - P * 0.55,
      I * 0.95,
    );
    (L.addColorStop(0, "rgba(255,62,78,0.8)"),
      L.addColorStop(1, "rgba(255,90,100,0)"),
      (e.fillStyle = L),
      e.beginPath(),
      e.ellipse(p, M - P * 0.52, I * 0.8, P * 0.42, 0, 0, Math.PI * 2),
      e.fill());
    const O = e.createLinearGradient(0, M + P, 0, M + P * 0.05);
    (O.addColorStop(0, "rgba(24,2,6,0.88)"),
      O.addColorStop(1, "rgba(24,2,6,0)"),
      (e.fillStyle = O),
      e.fillRect(p - I, M, I * 2, P + 0.1));
    const J = 0.3 + 0.18 * (1 - v),
      s0 = e.createRadialGradient(p, M + 1, 0.2, p, M + 0.5, I * J * 1.1);
    (s0.addColorStop(0, "#080001"),
      s0.addColorStop(1, k0.pupil),
      (e.fillStyle = s0),
      e.beginPath(),
      e.ellipse(p, M + 0.6, I * J, P * J * 1.05, 0, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = k0.irisRing),
      (e.lineWidth = 0.75 + v * 0.3),
      e.beginPath(),
      e.ellipse(p, M, I - 0.3, P - 0.3, 0, 0, Math.PI * 2),
      e.stroke(),
      e.restore());
    const $ = Z(u.light) * (1 - v * 0.9);
    if ($ > 0.01) {
      e.fillStyle = `rgba(255,255,255,${$})`;
      const t0 = p + -3.6 * a,
        V = M + 4.8;
      (e.beginPath(),
        e.ellipse(t0, V, 3.3 * f, 4 * f, -0.35 * a, 0, Math.PI * 2),
        e.fill(),
        e.beginPath(),
        e.ellipse(p + 3.6 * a, M - 4.6, 1.5 * f, 1.5 * f, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `rgba(255,255,255,${$ * 0.7})`),
        e.beginPath(),
        e.ellipse(p + 1.6 * a, M + 6.3, 0.9, 0.9, 0, 0, Math.PI * 2),
        e.fill());
    }
    const r0 = Math.max(Z(t.tears), g * 0.5);
    if (
      (r0 > 0.02 &&
        ((e.strokeStyle = `rgba(235,245,255,${0.75 * r0})`),
        (e.lineWidth = 1.1),
        e.beginPath(),
        O0(
          e,
          l.lower.slice(6, 25).map((t0) => [t0[0], t0[1] + 1.6]),
        ),
        e.stroke()),
      e.restore(),
      s &&
        (s.save(),
        s.translate(o, r),
        s.scale(a * H0, H0),
        s.beginPath(),
        O0(s, l.upper),
        O0(s, l.lower.slice().reverse(), !1),
        s.closePath(),
        (s.fillStyle = "rgb(255,0,0)"),
        s.fill(),
        s.clip(),
        (s.globalCompositeOperation = "lighter"),
        (s.fillStyle = "rgb(0,255,0)"),
        s.beginPath(),
        s.ellipse(p, M, I, P, 0, 0, Math.PI * 2),
        s.fill(),
        s.restore()),
      e.save(),
      (e.filter = J0(e, 10)),
      (e.fillStyle = `rgba(${k0.shadow},0.5)`),
      y0(
        e,
        l.lower.slice(9).map((t0) => [t0[0], t0[1] - 0.8]),
        (t0) => n0(0.8, 2.6, t0),
      ),
      e.restore(),
      (e.fillStyle = k0.lashLow),
      y0(
        e,
        l.lower.slice(9),
        (t0) => n0(0.35, 1.35, Math.sin(t0 * Math.PI * 0.75)) * (1 + v * 0.3),
      ),
      l.closed < 0.5)
    ) {
      e.fillStyle = k0.crease;
      const t0 = C0(
        [-6, l.u1[1] * 0.8 + 3.2],
        [-2, l.u1[1] + 4],
        [7, l.u2[1] + 3.2],
        [13, l.O[1] + 5.5],
        16,
      );
      y0(e, t0, (V) => Math.sin(V * Math.PI) * 0.7);
    }
  }
  const y =
      l.closed > 0.5
        ? C0(
            l.O,
            [l.O[0] + 2, l.O[1] - 0.2],
            [l.O[0] + 4, l.O[1] + 0.8],
            [l.O[0] + 5.6, l.O[1] + 1.6],
            8,
          )
        : C0(
            l.O,
            [l.O[0] + 2.2, l.O[1] + 1.2],
            [l.O[0] + 4.6, l.O[1] + 2.8],
            [l.O[0] + 7, l.O[1] + 3.9],
            10,
          ),
    k = l.upper.concat(y.slice(1)),
    G = l.upper.length;
  if (
    (n ||
      (e.save(),
      (e.filter = J0(e, 22)),
      (e.fillStyle = `rgba(${k0.shadow},${0.55 + v * 0.2})`),
      y0(
        e,
        l.upper.map((d) => [d[0], d[1] + 2.6]),
        (d) => n0(2.5, 5.5, Math.sin(d * Math.PI * 0.85)),
      ),
      (e.filter = J0(e, 9)),
      (e.fillStyle = "rgba(12,8,14,0.55)"),
      y0(
        e,
        k.map((d) => [d[0], d[1] + 0.5]),
        (d) => 2.2 + Math.sin(d * Math.PI) * 2.2,
      ),
      e.restore()),
    (e.fillStyle = k0.lash),
    y0(e, k, (d) => {
      const w = d * (k.length - 1);
      if (w < G) return m(w / (G - 1)) * (l.closed > 0.5 ? 0.75 : 1);
      const f = (w - G + 1) / (k.length - G);
      return n0(m(1), 0.2, Math.pow(f, 0.7)) * (l.closed > 0.5 ? 0.75 : 1);
    }),
    l.openAmt > 0.2)
  )
    for (let d = 0; d < 2; d++) {
      const w = l.upper[22 + d * 3],
        f = C0(
          w,
          [w[0] + 1.2, w[1] + 1.5],
          [w[0] + 2.2, w[1] + 2.8],
          [w[0] + 3.4 + d, w[1] + 3 + d * 0.3],
          6,
        );
      y0(e, f, (C) => (1 - C) * 1.1);
    }
  e.restore();
}
function wt(e, t, a, o, r) {
  const i = Z(a > 0 ? t.brows.l : t.brows.r, -1, 1),
    n = Math.max(0, -i),
    s = Math.max(0, i),
    u = [-13.5 - n * 1.6, 20.5 - n * 12.5 + s * 5],
    l = [-2.5, 24.5 - n * 5.2 + s * 1.6],
    v = [14.5, 21.5 + n * 0.2 - s * 2.4],
    g = C0(u, le(u, l, 0.55), le(l, v, 0.35), v, 22);
  (e.save(),
    e.translate(o, r),
    e.scale(a, 1),
    (e.fillStyle = n > 0 ? vo(k0.brow, "#5e1f40", n * 0.8) : k0.brow),
    y0(
      e,
      g,
      (m) =>
        (m < 0.15
          ? n0(1.5, 2.3, m / 0.15)
          : n0(2.3, 0.4, Math.pow((m - 0.15) / 0.85, 1.3))) *
        (1 + n * 1.1),
    ),
    e.restore());
}
const Ie = -58.5,
  bt = 6.4,
  ke = {
    A: {
      top: -47.5,
      cy: -50.5,
      bot: -65.5,
      wt: 11.1,
      wb: 8.6,
      sq: 0.15,
      teeth: 2,
    },
    E: {
      top: -53,
      cy: -54.3,
      bot: -62.2,
      wt: 14,
      wb: 11.1,
      sq: 0.35,
      teeth: 2,
    },
    I: { top: -55.4, cy: -56, bot: -60, wt: 10, wb: 8.2, sq: 0.35, teeth: 1.4 },
    O: {
      top: -51.6,
      cy: -57.8,
      bot: -64,
      wt: 5,
      wb: 5,
      sq: 0,
      teeth: 0,
      oval: !0,
    },
    U: {
      top: -54.4,
      cy: -58.2,
      bot: -62,
      wt: 3.6,
      wb: 3.6,
      sq: 0,
      teeth: 0,
      oval: !0,
    },
  },
  yt = {
    A: {
      top: -50.6,
      cy: -52.8,
      bot: -64.2,
      wt: 8.2,
      wb: 6.4,
      sq: 0.15,
      teeth: 1.5,
    },
    E: {
      top: -54.4,
      cy: -55.4,
      bot: -61.2,
      wt: 10.4,
      wb: 8.2,
      sq: 0.35,
      teeth: 1.5,
    },
  },
  Mt = {
    wide: {
      top: -41.8,
      cy: -47.2,
      bot: -66,
      wt: 14.6,
      wb: 9.4,
      sq: 0.75,
      teeth: 3.1,
    },
    round: {
      top: -42.8,
      cy: -49,
      bot: -65.8,
      wt: 11.6,
      wb: 8.4,
      sq: 0.3,
      teeth: 2.7,
    },
  },
  qe = (e, t, a) => {
    const o = {};
    for (const r of ["top", "cy", "bot", "wt", "wb", "sq", "teeth"])
      o[r] = n0(e[r], t[r], a);
    return ((o.oval = a < 0.5 ? e.oval : t.oval), o);
  };
