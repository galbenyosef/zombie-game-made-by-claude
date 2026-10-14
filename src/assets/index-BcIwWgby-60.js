// assets/index-BcIwWgby 60 — math
// Lines 18200-18542 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function $c(s, o, t, u, e, r, a, p) {
  const i = [],
    d = s.axis(o),
    y = s.rad(o, t)[0],
    w = at(d[0] + Math.cos(t) * y * 0.45, d[1], d[2] + Math.sin(t) * y * 0.45),
    g = at(-Math.sin(t), 0, Math.cos(t)),
    z = u * (0.36 + e() * 0.12),
    x = u - z,
    v = (e() - 0.5) * 0.7,
    n = at(Math.cos(t), 0.5 + e() * 0.5, Math.sin(t)).normalize(),
    l = at(Math.cos(t + v), -(0.18 + e() * 0.32), Math.sin(t + v)).normalize(),
    f = [w.clone()],
    h = w.clone(),
    c = n.clone(),
    M = 5,
    m = 7,
    k = (K, j, O) => {
      (c
        .copy(K)
        .addScaledVector(at(e() - 0.5, (e() - 0.5) * 0.6, e() - 0.5), O)
        .normalize(),
        h.addScaledVector(c, j),
        r.sdAt(h.x, h.z) < 1 && h.y < 2.9 && (h.y = 2.9),
        f.push(h.clone()));
    };
  for (let K = 1; K <= M; K++)
    k(n.clone().lerp(l, Math.pow(K / M, 3) * 0.3), z / M, 0.16);
  const S = f.length - 1;
  for (let K = 1; K <= m; K++)
    k(l.clone().add(at(0, (-0.12 * K) / m, 0)), x / m, 0.22);
  const A = f.length - 1,
    b = Math.min(0.5, y * (0.32 + e() * 0.12)),
    P = e() * 10;
  i.push(
    Vt(
      f,
      (K, j) =>
        (b * (1 - 0.72 * Math.pow(K, 0.9)) + 0.03) *
        (1 + 0.12 * Math.sin(j * 2.1 + P) + (j === S ? 0.14 : 0)),
      12,
    ),
  );
  const _ = f[A],
    I = f[A].clone()
      .sub(f[A - 1])
      .normalize(),
    R = 3 + Math.floor(e() * 2);
  for (let K = 0; K < R; K++) {
    const j = (K / (R - 1) - 0.5) * 2,
      O = I.clone()
        .addScaledVector(g, j * (0.55 + e() * 0.35))
        .add(at(0, 0.1 + (e() - 0.5) * 0.3, 0))
        .normalize(),
      J = 0.9 + e() * 1.6,
      tt = [_.clone().addScaledVector(I, -0.15)],
      st = tt[0].clone(),
      G = 0.05 + e() * 0.035;
    for (let Z = 1; Z <= 6; Z++)
      ((O.y -= 0.1 + 0.05 * Z),
        O.addScaledVector(at(e() - 0.5, e() - 0.5, e() - 0.5), 0.4).normalize(),
        st.addScaledVector(O, J / 6),
        r.sdAt(st.x, st.z) < 1 && st.y < 2.8 && (st.y = 2.8),
        tt.push(st.clone()));
    i.push(Vt(tt, (Z) => G * (1 - Z * 0.82) + 0.007, 6, { cap: !0 }));
    const q = tt[2 + Math.floor(e() * 3)],
      U = at(e() - 0.5, e() * 0.5 - 0.35, e() - 0.5).normalize();
    i.push(
      Vt(
        [
          q,
          q.clone().addScaledVector(U, 0.2 + e() * 0.25),
          q
            .clone()
            .addScaledVector(U, 0.35 + e() * 0.4)
            .add(at(0, -0.08, 0)),
        ],
        (Z) => 0.018 * (1 - Z) + 0.004,
        4,
      ),
    );
  }
  for (let K = 0; K < 3; K++) {
    const j = f[1 + Math.floor(e() * (A - 2))],
      O = at(e() - 0.5, 0.5 + e() * 0.6, e() - 0.5).normalize(),
      J = 0.25 + e() * 0.7,
      tt = b * (0.3 + e() * 0.2);
    i.push(
      Vt(
        [
          j,
          j.clone().addScaledVector(O, J * 0.5),
          j.clone().addScaledVector(O, J),
        ],
        [tt, tt * 0.85, tt * 0.7],
        7,
        { cap: !0 },
      ),
    );
  }
  const V = A;
  if (p)
    for (let K = 2; K <= V; K++)
      for (let j = 0; j < 2; j++) {
        if (e() < 0.35) continue;
        const O = f[K - 1].clone().lerp(f[K], e()),
          J = 0.7 + e() * 1,
          tt = O.y - 0.45 - J * 0.65;
        (r.sdAt(O.x, O.z) < 1.2 && tt < 2.35) ||
          a.push({
            pos: O.clone().add(at(0, -0.45, 0)),
            along: at((e() - 0.5) * 0.12, -1, (e() - 0.5) * 0.12).normalize(),
            size: J,
            cell: Bt.moss,
            out: at(e() - 0.5, 0, e() - 0.5).normalize(),
            shade: 0.3 + e() * 0.12,
            vertical: !0,
            hang: !0,
          });
      }
  const L = s.axis(0)[1];
  return i.map((K) => Os(K, (j, O) => gs(O - L, 0)));
}
function Zc(s, o) {
  const t = [],
    u = s.axis(0)[1];
  for (let e = 0, r = 2 + Math.floor(o() * 3); e < r; e++) {
    const a = s.H * (0.55 + o() * 0.38),
      p = o() * Jt,
      i = s.axis(a),
      d = s.rad(a, p)[0],
      y = at(i[0] + Math.cos(p) * d * 0.7, i[1], i[2] + Math.sin(p) * d * 0.7),
      w = at(Math.cos(p), 0.3 + o() * 0.8, Math.sin(p)).normalize(),
      g = 0.6 + o() * 1.6,
      z = [
        y,
        y
          .clone()
          .addScaledVector(w, g * 0.5)
          .add(at((o() - 0.5) * 0.2, 0, (o() - 0.5) * 0.2)),
        y.clone().addScaledVector(w, g),
      ],
      x = 0.08 + o() * 0.1;
    t.push(
      Os(Vt(z, [x, x * 0.75, x * 0.55], 7, { cap: !0 }), (v, n) =>
        gs(n - u, 0.15),
      ),
    );
  }
  return t;
}
function Jc(s, o, t, u, e) {
  const r = [],
    a = (d, y) => {
      for (const w of e) if (fe(d, y, w[0], w[1], w[2], w[3]) < 1.05) return !1;
      return !0;
    },
    p = s.B.map((d) => ({ a: d.a, A: d.A })).concat(
      Array.from({ length: 2 + Math.floor(u() * 2) }, () => ({
        a: u() * Jt,
        A: 0.15 + u() * 0.15,
      })),
    ),
    i = s.axis(0)[1];
  for (const d of p) {
    const y = s.axis(0);
    let w = d.a,
      g = y[0] + Math.cos(w) * s.r0 * 0.75,
      z = y[2] + Math.sin(w) * s.r0 * 0.75;
    const x = s.r0 * (0.2 + d.A * 0.42),
      v = 2.2 + u() * 3.6 + d.A * 3,
      n = Math.ceil(v / 0.3),
      l = [];
    for (let f = 0; f <= n; f++) {
      const h = f / n,
        c = x * (1 - h * 0.85),
        M = t.heightAt(g, z);
      if (f > 2 && (t.sdAt(g, z) < 0.12 || !a(g, z))) break;
      (l.push(
        at(
          g,
          Math.max(M - c * 0.45, i - 0.4) +
            c * (f === 0 ? 1.2 : f === 1 ? 0.7 : 0.25) +
            (f === 0 ? 0.35 : 0),
          z,
        ),
      ),
        (w += (u() - 0.5) * 0.45),
        (g += Math.cos(w) * 0.3),
        (z += Math.sin(w) * 0.3));
    }
    l.length < 3 ||
      r.push(
        Os(
          Vt(l, (f) => x * (1 - f * 0.88) + 0.01, 7),
          (f, h) => gs(Math.max(0, h - i) * 0.5, 0.05),
        ),
      );
  }
  return r;
}
function Qc(s, o, t) {
  const u = o() * Jt,
    e = 2.5 + o() * 4;
  for (let r = 0.3; r < e; r += 0.3 + o() * 0.25) {
    const a = u + r * 0.5 + (o() - 0.5) * 1.2,
      p = s.axis(r),
      i = s.rad(r, a)[0] + 0.04,
      d = at(Math.cos(a), 0.1, Math.sin(a)).normalize();
    t.push({
      pos: at(p[0] + Math.cos(a) * i, p[1], p[2] + Math.sin(a) * i),
      along: at(-Math.sin(a) * 0.5, 1, Math.cos(a) * 0.5).normalize(),
      size: 0.6 + o() * 0.5,
      cell: Bt.twigs,
      out: d,
      shade: 0.5,
      ivy: d,
    });
  }
}
function ti(s, o) {
  const t = [],
    u = [],
    e = [],
    r = [];
  for (const a of je) {
    const p = be[a.name],
      i = p[0],
      d = p[p.length - 1],
      y = s.at(a.s),
      w = [y.x - a.x, y.z - a.z],
      g = Math.hypot(...w),
      z = { ...a, toPath: [w[0] / g, w[1] / g], seed: o() * 10 };
    let x = 1e9;
    for (let k = 0; k < 8; k++)
      x = Math.min(
        x,
        s.heightAt(
          z.x + Math.cos((k * Jt) / 8) * z.r * 1.35,
          z.z + Math.sin((k * Jt) / 8) * z.r * 1.35,
        ),
      );
    const v = p.slice(0, 2).map((k) => Math.atan2(k[1] - z.z, k[0] - z.x)),
      n = Xc(z, x, o, v),
      l = [n.geo],
      f = [],
      h = o() < 0.45 ? 2 : 1,
      c = Math.atan2(z.toPath[1], z.toPath[0]);
    for (let k = 0; k < h; k++) {
      const S = Math.min(
          n.H - 1.2,
          Math.max(3.4 + o() * 3.2 + k * 1.6, 3.3 - x + k * 1.2),
        ),
        A = c + (k ? -1 : 1) * (0.25 + o() * 0.55) * (o() < 0.5 ? 1 : -1);
      l.push(...$c(n, S, A, 5.5 + o() * 3.2, o, s, f, o() < 0.6));
    }
    l.push(...Zc(n, o));
    const M = [];
    for (let k = 0; k < p.length - 1; k++)
      M.push([p[k][0], p[k][1], p[k + 1][0], p[k + 1][1]]);
    (l.push(...Jc(n, z, s, o, M)),
      o() < 0.4 && Qc(n, o, f),
      t.push({
        G: z,
        bark: l,
        cards: f.filter((k) => k.pos.y > 3.2 || s.sdAt(k.pos.x, k.pos.z) > 1.2),
        H: n.H,
      }));
    const m = z.r * 0.9;
    (u.push({
      x0: z.x - 0.92 * m,
      x1: z.x + 0.92 * m,
      z0: z.z - 0.38 * m,
      z1: z.z + 0.38 * m,
      y0: 0,
      y1: 3,
      giant: z.name,
    }),
      u.push({
        x0: z.x - 0.38 * m,
        x1: z.x + 0.38 * m,
        z0: z.z - 0.92 * m,
        z1: z.z + 0.92 * m,
        y0: 0,
        y1: 3,
        giant: z.name,
      }),
      e.push({ x: z.x, z: z.z, r: z.r * 1.12, tree: !0, giant: !0 }),
      r.push({
        name: z.name,
        x: i[0],
        z: i[1],
        yaw: +Math.atan2(p[1][0] - i[0], p[1][1] - i[1]).toFixed(3),
        s: z.s,
        route: s.routeIndexAtS
          ? s.routeIndexAtS(z.s)
          : s.routeIndexNear(i[0], i[1]),
        side: z.side,
        tree: [z.x, z.z, z.r],
        out: [d[0], d[1]],
      }));
  }
  return (
    r.sort((a, p) => a.s - p.s),
    { list: t, colliders: u, circles: e, lurks: r }
  );
}
const ne = Math.PI * 2,
  ae = {
    graves: [10.6, "R", 3.7],
    shoe: [19.5, "R", 1],
    suitcase: [33, "R", 1.95],
    coat: [70, "post"],
    strips: [
      [73, "R"],
      [76.5, "L"],
      [80, "R"],
      [83.5, "L"],
      [87, "R"],
      [90.5, "L"],
    ],
    graves2: [98, "R", 3.6],
    pram: [166, "L", 2.8],
    doll: [168.5, "L", 1.95],
    crate: [244.5, "L", 1.8],
  },
  es = new w0(),
  os = at(0, 1, 0),
  ss = at(1, 1, 1),
  B0 = (s) => new wt().makeRotationY(s),
  g0 = (s) => new wt().makeRotationX(s),
  ve = (s) => new wt().makeRotationZ(s),
  Ot = (s, o, t) => new wt().makeTranslation(s, o, t),
  Dt = (...s) => {
    const o = new wt();
    for (const t of s) o.premultiply(t);
    return o;
  };
function ei(s, o) {
  const t = s.attributes.position.count,
    u = new Float32Array(t * 3);
  for (let e = 0; e < t; e++) u.set(o, e * 3);
  return (s.setAttribute("color", new vt(u, 3)), s);
}
