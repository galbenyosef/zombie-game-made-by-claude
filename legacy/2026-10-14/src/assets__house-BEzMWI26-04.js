// assets__house-BEzMWI26 04 — math
// Lines 938-1260 of readable/assets__house-BEzMWI26.pretty.js (statement-aligned).
function xt(s, o, e) {
  const n = De(s, o, T0.door, "frontDoor", { open: "house_door_creak" }, e),
    t = De(s, o, T0.back, "backDoor", { open: "house_door_creak_back" }, e);
  return {
    front: n,
    back: t,
    anim: [n.anim, t.anim],
    colliders: [...n.colliders, ...t.colliders],
    groups: [n.group, t.group],
  };
}
const yt = (s) => s * s * (3 - 2 * s),
  Mt = (170 * Math.PI) / 180,
  j0 = 0.026,
  R0 = 0.024,
  O0 = Ye + 0.035 + 0.02,
  ue = [0.95, 0.78, 0.58];
function Ve(s) {
  const o = T0[s];
  return o.wall === "N"
    ? { es: [1, 0, 0], en: [0, 0, 1], base: [0, 0, d0.N], sOf: (e) => e }
    : o.wall === "S"
      ? { es: [-1, 0, 0], en: [0, 0, -1], base: [0, 0, d0.S], sOf: (e) => -e }
      : { es: [0, 0, 1], en: [-1, 0, 0], base: [d0.E, 0, 0], sOf: (e) => e };
}
const Xe = (s, o, e, n) => [
  s.base[0] + o * s.es[0] + n * s.en[0],
  e,
  s.base[2] + o * s.es[2] + n * s.en[2],
];
function kt(s) {
  if ((s.scale(-1, 1, 1), s.index)) {
    const o = s.index.array;
    for (let e = 0; e < o.length; e += 3) {
      const n = o[e + 1];
      ((o[e + 1] = o[e + 2]), (o[e + 2] = n));
    }
    s.index.needsUpdate = !0;
  } else
    for (const o of Object.values(s.attributes)) {
      const e = o.array,
        n = o.itemSize;
      for (let t = 0; t + 2 < o.count; t += 3)
        for (let u = 0; u < n; u++) {
          const d = (t + 1) * n + u,
            a = (t + 2) * n + u,
            h = e[d];
          ((e[d] = e[a]), (e[a] = h));
        }
      o.needsUpdate = !0;
    }
  return s;
}
function Oe(s, o, e) {
  let n = [[s, o]];
  for (const [t, u] of e) {
    const d = [];
    for (const [a, h] of n) {
      if (u <= a || t >= h) {
        d.push([a, h]);
        continue;
      }
      (t > a && d.push([a, t]), u < h && d.push([u, h]));
    }
    n = d;
  }
  return n.filter(([t, u]) => u - t > 0.03);
}
function he(s, o, e, n) {
  const t = T0[n],
    u = it[n],
    d = Ve(n),
    a = d.sOf(u.hinge === "a" ? t.a : t.b),
    h = d.sOf(u.hinge === "a" ? t.b : t.a),
    c = Math.sign(h - a),
    m = Math.abs(t.b - t.a) + 2 * u.over,
    g = u.h,
    w = u.y0,
    M = a - c * u.over,
    p = new l0();
  ((p.name = "shutter:" + n),
    p.position.set(d.base[0], 0, d.base[2]),
    p.quaternion.setFromRotationMatrix(
      new Ue().makeBasis(new j(...d.es), new j(0, 1, 0), new j(...d.en)),
    ));
  const C = new l0();
  ((C.name = n + ":pivot"), C.position.set(M, w, O0 + j0), p.add(C));
  const A = new pe("house_shutter_" + n),
    L = (i, f, _) => A.add(c < 0 ? kt(i) : i, f, _),
    R = [0, ...u.cracks.map(([i, f]) => [i - f / 2, i + f / 2]).flat(), m];
  for (let i = 0; i < 4; i++) {
    const f = R[i * 2],
      _ = R[i * 2 + 1],
      F = g - (i % 2) * 0.008 - (i === 3 ? 0.004 : 0),
      E = i === 2 ? 0.006 : 0,
      V =
        u.slot && u.slot[0] === i
          ? [
              [E, g * u.slot[1] - u.slot[2] / 2],
              [g * u.slot[1] + u.slot[2] / 2, F],
            ]
          : [[E, F]];
    for (const [l, f0] of V) {
      const i0 = G(f, l, -j0, _, f0, 0, 0.004, "y", 1);
      (r0(i0, ue), L(i0, o.plank));
    }
  }
  const I = [0.13, g - 0.14];
  for (const i of I) {
    const f = G(0.04, i - 0.05, 0, m - 0.04, i + 0.05, R0, 0.005, "x", 1);
    (r0(f, ue), L(f, o.plank));
  }
  const W = { ax: 0.09, ay: 0.2, bx: m - 0.09, by: g - 0.2, hw: 0.045 };
  if (u.brace !== !1) {
    const i = Math.hypot(W.bx - W.ax, W.by - W.ay),
      f = G(-i / 2, -0.045, -0.012, i / 2, W.hw, 0.012, 0.005, "x", 1);
    (f.rotateZ(Math.atan2(W.by - W.ay, W.bx - W.ax)),
      f.translate((W.ax + W.bx) / 2, (W.ay + W.by) / 2, R0 / 2),
      r0(f, ue),
      L(f, o.plank));
  }
  const o0 = [0.11, 0.1, 0.095];
  for (const i of I)
    for (const f of [
      G(0.02, i - 0.018, R0, m * 0.55, i + 0.018, R0 + 0.005, 0.002, "x", 1),
      G(-0.006, i - 0.018, 0.002, 0.03, i + 0.018, R0 + 0.005, 0.002, "x", 1),
      L0([-0.003, i - 0.04, 0.006], [-0.003, i + 0.04, 0.006], 0.01, 8),
    ])
      (r0(f, o0), L(f, o.plank));
  {
    const i = G(
      m - 0.085,
      g * 0.5 - 0.07,
      0,
      m - 0.055,
      g * 0.5 + 0.07,
      0.042,
      0.008,
      "y",
      1,
    );
    (r0(i, [0.8, 0.62, 0.44]), L(i, o.plank));
  }
  const D = new l0();
  ((D.name = n + ":leaf"), A.flush(D), C.add(D));
  const Y = (i, f, _) => Xe(d, i, f, _);
  for (const i of I) {
    const f = M - c * 0.003,
      _ = O0 + j0 + 0.006;
    e.add(
      L0(Y(f, w + i - 0.058, _), Y(f, w + i + 0.052, _), 0.005, 8),
      o.iron,
      { cast: !1 },
    );
    const F = Y(f - c * 0.012, w + i - 0.056, O0 - 0.008),
      E = Y(f + c * 0.012, w + i - 0.043, _ + 0.01);
    e.add(
      G(
        Math.min(F[0], E[0]),
        F[1],
        Math.min(F[2], E[2]),
        Math.max(F[0], E[0]),
        E[1],
        Math.max(F[2], E[2]),
        0.002,
        "x",
      ),
      o.iron,
      { cast: !1 },
    );
  }
  {
    const i = Y(M + c * (m + 0.014), w + g * 0.5, O0 + 0.02);
    e.add(
      G(
        i[0] - 0.008,
        i[1] - 0.008,
        i[2] - 0.008,
        i[0] + 0.008,
        i[1] + 0.008,
        i[2] + 0.008,
        0.003,
      ),
      o.iron,
      { cast: !1 },
    );
  }
  const e0 = (d.sOf(t.a) + d.sOf(t.b)) / 2,
    T = (t.y0 + t.y1) / 2 + 0.01,
    S = Math.min(d.sOf(t.a), d.sOf(t.b)) + 0.046,
    H = Math.max(d.sOf(t.a), d.sOf(t.b)) - 0.046,
    K = t.y0 + 0.062,
    x = t.y1 - 0.047,
    v = (i) => W.ay + ((i - W.ax) * (W.by - W.ay)) / (W.bx - W.ax),
    z = W.hw * Math.hypot(1, (W.by - W.ay) / (W.bx - W.ax)),
    r = O0 + j0,
    B = [];
  for (const [i, f] of u.cracks) {
    const _ = M + c * i;
    if (_ < S || _ > H) continue;
    const F = [
      [0, w + I[0] + 0.05],
      [w + I[1] - 0.05, 9],
      [T - 0.016, T + 0.016],
    ];
    u.brace !== !1 && F.push([w + v(i) - z, w + v(i) + z]);
    for (const [E, V] of Oe(K, x, F))
      B.push({ win: n, kind: "v", a: Y(_, E, r), b: Y(_, V, r), w: f });
  }
  if (u.slot) {
    const i = R[u.slot[0] * 2],
      f = R[u.slot[0] * 2 + 1],
      _ = w + g * u.slot[1],
      F = M + c * i,
      E = M + c * f,
      V = W.ax + ((g * u.slot[1] - W.ay) * (W.bx - W.ax)) / (W.by - W.ay),
      l = M + c * V,
      f0 = W.hw * 1.6,
      i0 = [[e0 - 0.016, e0 + 0.016]];
    if ((u.brace !== !1 && i0.push([l - f0, l + f0]), _ > K && _ < x))
      for (const [H0, c0] of Oe(
        Math.max(Math.min(F, E), S),
        Math.min(Math.max(F, E), H),
        i0,
      ))
        B.push({
          win: n,
          kind: "h",
          a: Y(H0, _, r),
          b: Y(c0, _, r),
          w: u.slot[2],
        });
  }
  const y = { k: 0, from: 0, goal: 0, t: 0, secs: 0, slam: !1, bounce: -1 },
    a0 = -c * Mt,
    Z = (i) => {
      C.rotation.y = a0 * (1 - i);
    };
  Z(0);
  const $ = {
    id: n,
    pos: Y(e0, (t.y0 + t.y1) / 2, O0 + 0.09).map((i) => +i.toFixed(3)),
    standAt: null,
    get closeK() {
      return y.k;
    },
    close(i = 1, f = 0) {
      ((i = Math.max(0, Math.min(1, i))),
        f > 0
          ? ((y.from = y.k),
            (y.goal = i),
            (y.t = 0),
            (y.secs = f),
            (y.bounce = -1),
            (y.slam = i > y.k && f < 0.4),
            y.slam ||
              s.audio?.play?.(
                i > y.k ? "house_shutter_close" : "house_shutter_open",
                { pos: $.pos, vol: 0.8 },
              ))
          : ((y.k = i), (y.goal = i), (y.secs = 0), (y.bounce = -1), Z(i)));
    },
    onImpact: null,
  };
  return {
    api: $,
    frame: p,
    anim: (i) => {
      if (y.secs > 0) {
        y.t = Math.min(y.secs, y.t + i);
        const f = y.t / y.secs,
          _ = y.slam ? f * f * (0.6 + 0.4 * f) : yt(f);
        ((y.k = y.from + (y.goal - y.from) * _),
          Z(y.k),
          y.t >= y.secs &&
            ((y.secs = 0),
            y.slam &&
              ((y.slam = !1),
              (y.bounce = 0),
              s.audio?.play?.("house_shutter_close", { pos: $.pos, vol: 1.35 }),
              $.onImpact?.($, 1))));
      } else if (y.bounce >= 0) {
        y.bounce += i;
        const f = y.bounce,
          _ =
            f < 0.16
              ? 0.05 * Math.sin((f / 0.16) * Math.PI)
              : f < 0.27
                ? 0.012 * Math.sin(((f - 0.16) / 0.11) * Math.PI)
                : 0;
        ((y.k = y.goal - _),
          Z(y.k),
          f >= 0.27 && ((y.bounce = -1), (y.k = y.goal), Z(y.k)));
      }
    },
    slits: B,
    F: d,
    dir: c,
    sH: M,
    w: m,
    h: g,
    y0: w,
    parts: { pivot: C, leaf: D },
  };
}
function zt(s, o, e) {
  const n = {
      W1: he(s, o, e, "W1"),
      W2: he(s, o, e, "W2"),
      W3: he(s, o, e, "W3"),
    },
    t = ["W1", "W2", "W3"];
  return {
    one: n,
    list: t.map((u) => n[u].api),
    groups: t.map((u) => n[u].frame),
    anim: t.map((u) => n[u].anim),
    slits: t.flatMap((u) => n[u].slits),
    closeK: (u) => n[u].api.closeK,
  };
}
const W0 = { x: m0.cx + 0.42, z: m0.cz - 0.04, y: m0.top },
  q0 = W0.y + 0.255;
