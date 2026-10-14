// assets/akane-CN21eJhw 06 — math
// Lines 1949-2297 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function bo(e) {
  const t = e.mouth,
    a = Z(t.open, 0, 1),
    o = t.shape === "M" ? "M" : ke[t.shape] ? t.shape : "A";
  if (a < 0.06 || o === "M") return null;
  const r = _e(e),
    i = yt[o] ? qe(yt[o], ke[o], 1 - 0.8 * Z(e.sad) * (1 - r)) : ke[o];
  i.oval = ke[o].oval;
  const n = i.oval ? Mt.round : Mt.wide,
    s = r > 0 ? qe(i, n, r) : { ...i },
    u = Z((a - 0.06) / 0.94),
    l = u < 0.2 ? u : 0.2 + 0.8 * Math.pow((u - 0.2) / 0.8, 0.7),
    v = l * (2 - l),
    g = {
      top: Ie,
      cy: Ie,
      bot: Ie,
      wt: bt * (i.oval ? 0.85 : 1),
      wb: bt * 0.8,
      sq: s.sq,
      teeth: 0,
    },
    m = qe(g, s, v);
  ((m.oval = s.oval && r < 0.5),
    (m.teeth =
      s.teeth *
      Z(
        (i.oval ? 0 : 0.45) +
          (t.teeth ?? 0) * 0.8 +
          r +
          (o === "E" || o === "I" ? 0.6 : 0),
      ) *
      Z(v * 1.4)));
  const y = Z(e.sad),
    k = Z(t.smile ?? 0, -1, 1) - y * 0.35,
    G = t.skew ?? Z((e.brows.l - e.brows.r) * 0.9, -1, 1),
    d = (C) => k * 2.2 * (1 + G * C) * (1 - 0.7 * r);
  let w, f;
  if (m.oval) {
    const C = m.wt,
      x = (m.top - m.bot) / 2,
      p = (m.top + m.bot) / 2;
    ((w = []), (f = []));
    for (let M = 0; M <= 28; M++) {
      const I = Math.PI - (M / 28) * Math.PI;
      (w.push([Math.cos(I) * C, p + Math.sin(I) * x * 0.92]),
        f.push([Math.cos(I) * C, p - Math.sin(I) * x * 1.08]));
    }
  } else {
    const C = [-m.wt, m.cy + d(-1)],
      x = [m.wt, m.cy + d(1)],
      p = (m.top - (0.25 * (C[1] + x[1])) / 2) / 0.75;
    w = C0(C, [-m.wt * 0.5, p], [m.wt * 0.5, p], x, 32);
    const M = (F) =>
        C0(
          F,
          [n0(F[0], Math.sign(F[0]) * m.wb, 0.85), n0(F[1], m.bot, 0.72)],
          [Math.sign(F[0]) * m.wb * (0.45 + 0.5 * m.sq), m.bot],
          [0, m.bot],
          16,
        ),
      I = M(C),
      P = M(x).reverse();
    f = I.concat(P.slice(1));
  }
  return { top: w, bot: f, S: m, open: a, sk: r };
}
function yo(e, t, a) {
  const o = t.mouth,
    r = Z(t.sad),
    i = Z(o.smile ?? 0, -1, 1) - r * 0.35,
    n = o.skew ?? Z((t.brows.l - t.brows.r) * 0.9, -1, 1),
    s = bo(t),
    u = 0,
    l = Ie;
  if (!s) {
    const p = (o.shape === "M" ? 9.5 : 10.5) * 1.22,
      M = (O) => i * 3.2 * (1 + n * O),
      I = [u - p / 2, l + M(-1)],
      P = [u + p / 2, l + M(1)],
      F = -1.1 * i + (o.shape === "M" ? 0.3 : 0),
      L = C0(
        I,
        [u - p * 0.2, l + F - i * 0.5],
        [u + p * 0.2, l + F - i * 0.5],
        P,
        20,
      );
    ((e.fillStyle = k0.mouthLine),
      y0(
        e,
        L,
        (O) =>
          n0(0.4, 1.2, Math.sin(O * Math.PI)) * (o.shape === "M" ? 1.1 : 0.95),
      ),
      (e.fillStyle = "rgba(214,140,165,0.55)"),
      y0(
        e,
        C0(
          [u - 3.2, l - 3.2],
          [u - 1.2, l - 3.8],
          [u + 1.2, l - 3.8],
          [u + 3.2, l - 3.2],
          10,
        ),
        (O) => Math.sin(O * Math.PI) * 0.7,
      ));
    return;
  }
  const { top: v, bot: g, S: m, sk: y } = s,
    k = () => {
      (e.beginPath(), O0(e, v), O0(e, g.slice().reverse(), !1), e.closePath());
    },
    G = Math.max(...v.map((p) => p[1])),
    d = Math.min(...g.map((p) => p[1])),
    w = G - d,
    f = m.wt * 2;
  if (
    (e.save(),
    (e.filter = J0(e, 14)),
    (e.fillStyle = `rgba(${k0.shadow},${0.16 + 0.12 * y})`),
    e.beginPath(),
    e.ellipse(0, d - 2.6, f * 0.26, 1.5 + w * 0.05, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore(),
    y > 0.05)
  ) {
    e.fillStyle = `rgba(150,82,120,${0.55 * y})`;
    for (const p of [-1, 1]) {
      const M = [p * (m.wt + 2.4), m.cy + 5.2],
        I = [p * (m.wt + 4), m.cy + 1],
        P = [p * (m.wt + 3.9), m.cy - 3.4],
        F = [p * (m.wt + 2.6), m.cy - 6.4];
      y0(e, C0(M, I, P, F, 14), (L) => Math.sin(L * Math.PI) * 0.75);
    }
  }
  (e.save(), k());
  const C = e.createLinearGradient(0, G, 0, d);
  (C.addColorStop(0, "#1c0409"),
    C.addColorStop(0.45, "#360914"),
    C.addColorStop(1, "#5a1426"),
    (e.fillStyle = C),
    e.fill(),
    e.clip());
  const x = e.createRadialGradient(
    0,
    G - w * 0.36,
    0,
    0,
    G - w * 0.36,
    Math.max(f * 0.42, w * 0.45),
  );
  if (
    (x.addColorStop(0, "rgba(12,1,5,0.75)"),
    x.addColorStop(1, "rgba(12,1,5,0)"),
    (e.fillStyle = x),
    e.fillRect(-f, d - 2, f * 2, w + 4),
    w > 3.5)
  ) {
    const p = Math.min(f * 0.36, m.wb * 0.92),
      M = w * 0.24,
      I = d + w * 0.08;
    (e.save(), (e.filter = J0(e, 5)));
    const P = e.createRadialGradient(
      0,
      I + M * 0.2,
      0,
      0,
      I + M * 0.2,
      p * 1.25,
    );
    (P.addColorStop(0, "#e2798e"),
      P.addColorStop(0.6, "#c85a74"),
      P.addColorStop(1, "#9a3a55"),
      (e.fillStyle = P),
      e.beginPath(),
      e.ellipse(0, I, p, M * 1.35, 0, 0, Math.PI * 2),
      e.fill(),
      e.restore());
  }
  if (m.teeth > 0.15) {
    const p = v.length,
      M = (P) =>
        m.teeth *
        Math.pow(Math.sin(Math.PI * (0.04 + (0.92 * P) / (p - 1))), 0.45),
      I = [];
    for (let P = 0; P < p; P++) I.push([v[P][0], v[P][1] - M(P)]);
    if (
      (e.beginPath(),
      O0(
        e,
        v.map((P) => [P[0], P[1] + 0.6]),
      ),
      O0(e, I.slice().reverse(), !1),
      e.closePath(),
      (e.fillStyle = k0.teeth),
      e.fill(),
      y > 0.2 || m.teeth > 2.2)
    ) {
      const P = Math.round((p - 1) * 0.7),
        F = I[P],
        L = 2.8 * Z(y * 1.4 + 0.3),
        O = 1.3;
      (e.beginPath(),
        e.moveTo(F[0] - O, F[1] + 0.3),
        e.quadraticCurveTo(
          F[0] - O * 0.35,
          F[1] - L * 0.55,
          F[0] + 0.2,
          F[1] - L,
        ),
        e.quadraticCurveTo(
          F[0] + O * 0.45,
          F[1] - L * 0.45,
          F[0] + O,
          F[1] + 0.3,
        ),
        e.closePath(),
        e.fill());
    }
    if (
      (e.save(),
      (e.filter = J0(e, 4)),
      (e.fillStyle = "rgba(150,120,160,0.55)"),
      y0(
        e,
        v.slice(2, -2).map((P) => [P[0], P[1] - 0.25]),
        (P) => Math.sin(P * Math.PI) * m.teeth * 0.55,
      ),
      (e.fillStyle = "rgba(8,1,4,0.5)"),
      y0(
        e,
        I.slice(3, -3).map((P) => [P[0], P[1] - 0.9]),
        (P) => Math.sin(P * Math.PI) * 1.4,
      ),
      e.restore(),
      y > 0.35)
    ) {
      const P = g.slice(
          Math.round(g.length * 0.32),
          Math.round(g.length * 0.68) + 1,
        ),
        F = 1.25 * Z((y - 0.35) / 0.4);
      (e.beginPath(),
        O0(
          e,
          P.map((L) => [L[0], L[1] - 0.5]),
        ),
        O0(
          e,
          P.slice()
            .reverse()
            .map((L, O, J) => [
              L[0],
              L[1] +
                F * Math.pow(Math.sin((Math.PI * O) / (J.length - 1)), 0.5),
            ]),
          !1,
        ),
        e.closePath(),
        (e.fillStyle = k0.teeth),
        e.fill());
    }
  }
  (e.restore(),
    (e.fillStyle = "#3a0d18"),
    y0(e, v, (p) => n0(0.45, 0.85, Math.sin(p * Math.PI))),
    (e.fillStyle = "rgba(70,18,34,0.85)"),
    y0(e, g, (p) => n0(0.3, 0.6, Math.sin(p * Math.PI))),
    e.save(),
    (e.filter = J0(e, 5)),
    (e.fillStyle = "rgba(226,150,172,0.45)"),
    e.beginPath(),
    e.ellipse(0, d - 1.3, Math.max(2, f * 0.16), 0.8, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function Mo(e, t, a) {
  const o = Z(t.tears);
  if (!(o < 0.02))
    for (const r of [-1, 1]) {
      const i = r * ce,
        n = ue;
      e.fillStyle = `rgba(214,236,255,${0.85 * o})`;
      const s = C0(
        [i - r * 6, n - 13.4],
        [i + r * 2, n - 15.6],
        [i + r * 9, n - 15],
        [i + r * 14.5, n - 11.5],
        16,
      );
      (y0(e, s, (k) => Math.sin(k * Math.PI) * 2.4),
        (e.fillStyle = `rgba(255,255,255,${o})`),
        y0(
          e,
          s.map((k) => [k[0], k[1] + 0.5]),
          (k) => Math.sin(k * Math.PI) * 0.8,
        ));
      const u = i + r * 11.5,
        l = n - 13.5;
      (e.save(),
        (e.filter = J0(e, 6)),
        (e.fillStyle = `rgba(28,18,34,${0.4 * o})`),
        y0(
          e,
          C0(
            [u - r * 1.2, l + 1],
            [u - r * 0.8, l - 6],
            [u - r * 0.2, l - 12],
            [u + r * 0.4, l - 17 * o],
            12,
          ),
          (k) => n0(1.8, 0.4, k),
        ),
        e.restore());
      const v = 16 + 34 * o,
        g = r * 2.8,
        m = C0(
          [u, l],
          [u + g * 0.25, l - v * 0.35],
          [u + g, l - v * 0.7],
          [u + g * 0.7, l - v],
          24,
        );
      ((e.fillStyle = `rgba(120,160,225,${0.55 * o})`),
        y0(e, m, (k) => n0(3.4, 2.4, k)),
        (e.fillStyle = `rgba(226,242,255,${0.95 * o})`),
        y0(e, m, (k) => n0(2.3, 1.6, k)),
        (e.fillStyle = `rgba(255,255,255,${o})`),
        y0(
          e,
          m.map((k) => [k[0] - r * 0.5, k[1]]),
          (k) => 0.7 * (1 - k * 0.4),
        ));
      const y = m[m.length - 1];
      ((e.fillStyle = `rgba(120,160,225,${0.7 * o})`),
        e.beginPath(),
        e.ellipse(y[0], y[1] - 1.8, 3, 3.8, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `rgba(226,242,255,${o})`),
        e.beginPath(),
        e.ellipse(y[0], y[1] - 1.6, 2.3, 3, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `rgba(255,255,255,${o})`),
        e.beginPath(),
        e.ellipse(y[0] - r * 0.8, y[1] - 0.6, 0.8, 1.1, 0, 0, Math.PI * 2),
        e.fill());
    }
}
