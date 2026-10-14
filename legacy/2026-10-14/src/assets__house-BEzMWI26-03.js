// assets__house-BEzMWI26 03 — math
// Lines 546-937 of readable/assets__house-BEzMWI26.pretty.js (statement-aligned).
function De(s, o, e, n, t, u) {
  const d = e.wall === "N",
    a = d ? n0.z0 : n0.z1,
    h = d ? X.z0 : X.z1,
    c = d ? 1 : -1,
    m = new l0();
  m.name = "house_" + n;
  const g = u,
    w = 0.1,
    M = Math.min(a, h) - 0.03,
    p = Math.max(a, h) + 0.03,
    C = (k, b, N) => rt(k, b, N),
    A = [
      G(e.a - w, 0, M, e.a, e.y1 + 0.03, p, 0.012, "y"),
      G(e.b, 0, M, e.b + w, e.y1 + 0.03, p, 0.012, "y"),
      G(
        e.a - w - 0.02,
        e.y1,
        M - 0.005,
        e.b + w + 0.02,
        e.y1 + 0.16,
        p + 0.005,
        0.014,
        "x",
      ),
    ];
  for (const k of A) ($0(k, C), g.add(k, o.plank));
  {
    const k = G(
      e.a - 0.02,
      -0.02,
      M + 0.02,
      e.b + 0.02,
      I0 + 0.018,
      p - 0.02,
      0.01,
      "x",
    );
    ($0(k, (b, N, q) => {
      const O = C(b, N, q);
      return [O[0] * 0.8, O[1] * 0.78, O[2] * 0.75];
    }),
      g.add(k, o.plank));
  }
  const L = e.b - e.a - 0.02,
    U = e.y1 - 0.055,
    R = 0.045,
    I = 0.03,
    W = a - c * (0.02 + R),
    o0 = W - c * 0.002,
    D = W - c * 0.03,
    Y = Math.min(o0, D),
    e0 = Math.max(o0, D);
  for (const k of [
    G(e.a, 0.02, Y, e.a + 0.025, e.y1, e0, 0.004, "y"),
    G(e.b - 0.025, 0.02, Y, e.b, e.y1, e0, 0.004, "y"),
    G(e.a, e.y1 - 0.025, Y, e.b, e.y1, e0, 0.004, "x"),
  ])
    ($0(k, C), g.add(k, o.plank));
  const T = e.hinge === "b" ? e.b - 0.012 : e.a + 0.012,
    S = new l0();
  S.name = n + ":pivot";
  const H = a - c * 0.02;
  S.position.set(T, I0 + I, H);
  const K = d ? 0 : Math.PI,
    x = (e.hinge === "a") === d,
    v = new pe("house_" + n + "_leaf");
  wt(v, o, L, U);
  const z = new l0();
  ((z.name = n + ":leaf"),
    v.flush(z),
    x && (z.scale.x = -1),
    S.add(z),
    m.add(S));
  for (const [k] of [[T]])
    for (const b of [0.26, U - 0.3])
      g.add(
        L0(
          [
            k + (e.hinge === "b" ? 0.02 : -0.02),
            I0 + I + b - 0.05,
            a - c * 0.02,
          ],
          [
            k + (e.hinge === "b" ? 0.02 : -0.02),
            I0 + I + b + 0.06,
            a - c * 0.02,
          ],
          0.007,
          8,
        ),
        o.iron,
        { cast: !1 },
      );
  const r = e.b - e.a + 0.34,
    B = 1.21,
    y = e.hinge === "b" ? e.b + w + 0.07 : e.a - w - 0.07,
    a0 = a + c * 0.052,
    Z = new l0();
  ((Z.name = n + ":barPivot"),
    Z.position.set(y, B, a0),
    (Z.rotation.y = e.hinge === "b" ? 0 : Math.PI));
  const $ = new pe("house_" + n + "_bar");
  {
    const k = G(-r, -0.045, -0.04, 0.05, 0.045, 0.04, 0.012, "x", 2);
    (r0(k, [0.8, 0.62, 0.44]), $.add(k, o.plank, { cast: !1 }));
  }
  $.add(L0([0, 0, -0.06], [0, 0, 0.06], 0.012, 8), o.iron, { cast: !1 });
  const J = new l0();
  ((J.name = n + ":bar"), $.flush(J), Z.add(J), m.add(Z));
  const i = e.hinge === "b" ? e.a - w * 0.5 : e.b + w * 0.5,
    f = (k) => {
      const b = a + c * 0.005,
        N = a + c * 0.11,
        q = [
          G(
            k - 0.035,
            B - 0.07,
            Math.min(b, N),
            k + 0.035,
            B - 0.058,
            Math.max(b, N),
            0.003,
            "z",
          ),
        ],
        O = a + c * 0.104;
      (q.push(
        G(
          k - 0.035,
          B - 0.07,
          Math.min(O, O + c * 0.012),
          k + 0.035,
          B + 0.06,
          Math.max(O, O + c * 0.012),
          0.003,
          "y",
        ),
      ),
        q.push(
          G(
            k - 0.045,
            B - 0.1,
            Math.min(a, a + c * 0.012),
            k + 0.045,
            B + 0.1,
            Math.max(a, a + c * 0.012),
            0.003,
            "y",
          ),
        ));
      for (const t0 of q) g.add(t0, o.iron, { cast: !1 });
    };
  (f(i),
    f(e.hinge === "b" ? e.b + w * 0.35 : e.a - w * 0.35),
    g.add(
      G(
        y - 0.05,
        B - 0.08,
        Math.min(a, a + c * 0.012),
        y + 0.05,
        B + 0.08,
        Math.max(a, a + c * 0.012),
        0.004,
        "y",
      ),
      o.iron,
      { cast: !1 },
    ));
  const _ = {
      x0: e.a,
      x1: e.b,
      z0: Math.min(a, h),
      z1: Math.max(a, h),
      y0: 0,
      y1: 2.2,
      on: !0,
      door: n,
    },
    F = T,
    E = Math.sin(Pe - Math.PI / 2) * L,
    V = {
      x0: e.hinge === "b" ? F - 0.06 : F - E - 0.1,
      x1: e.hinge === "b" ? F + E + 0.1 : F + 0.06,
      z0: d ? a : a - L - 0.02,
      z1: d ? a + L + 0.02 : a,
      y0: 0,
      y1: 2,
      on: !1,
      door: n,
    },
    l = {
      k: 0,
      goal: 0,
      bolted: !1,
      barK: 0,
      slam: !1,
      kick: -1,
      shoveT: -1,
      shoveK: 0,
    };
  let f0 = 0,
    i0 = 0;
  const H0 = x ? -1 : 1,
    c0 = (k) => {
      const b = Pe * k + f0;
      ((S.rotation.y = K + H0 * b), (S.position.z = H + c * f0 * 0.12));
    },
    B0 = (k) => {
      J.rotation.z = -(Math.PI / 2) * (1 - k) - i0;
    };
  (c0(0), B0(0));
  const Y0 = (e.a + e.b) / 2,
    s0 = {
      get openK() {
        return l.k;
      },
      get bolted() {
        return l.bolted;
      },
      pos: [Y0, 1.1, d ? d0.N : d0.S],
      usePos: [Y0, 1.15, +(a + c * 0.22).toFixed(3)],
      open(k = 1, b = 0) {
        if (((k = Math.max(0, Math.min(1, k))), l.bolted && k > 0.02)) {
          s.audio?.play?.("house_door_rattle", { pos: s0.pos, vol: 0.8 });
          return;
        }
        ((l.slam = !1),
          (l.kick = -1),
          b > 0
            ? ((l.from = l.k),
              (l.goal = k),
              (l.t = 0),
              (l.secs = b),
              k > l.k + 0.05
                ? s.audio?.play?.(t.open, { pos: s0.pos, vol: 0.9 })
                : k < l.k - 0.05 && (l.closing = !0))
            : ((l.k = k), (l.goal = k), (l.secs = 0), c0(k)),
          s0._cols());
      },
      slam(k = 0.35) {
        l.bolted ||
          l.k < 0.005 ||
          ((l.from = l.k),
          (l.goal = 0),
          (l.t = 0),
          (l.secs = Math.max(0.1, k)),
          (l.slam = !0),
          (l.closing = !1),
          (l.kick = -1),
          s0._cols());
      },
      shove(k = 1) {
        ((k = Math.max(0, Math.min(1, k))),
          !(l.k > 0.05) &&
            ((l.shoveT = 0),
            (l.shoveK = k),
            s.audio?.play?.("house_door_thud", {
              pos: s0.pos,
              vol: 0.55 + 0.45 * k,
            }),
            s.audio?.play?.("house_door_rattle", {
              pos: [y, B, a0],
              vol: (l.bolted ? 0.5 : 0.25) + 0.5 * k,
            }),
            s0.onImpact?.(s0, 0.35 + 0.65 * k, "shove")));
      },
      bolt(k = !0) {
        ((k = !!k),
          k !== l.bolted &&
            ((l.bolted = k),
            (l.barFrom = l.barK),
            (l.barGoal = k ? 1 : 0),
            (l.barT = 0),
            s.audio?.play?.(k ? "house_bar_drop" : "house_bar_lift", {
              pos: [y, B, a0],
              vol: 0.9,
            })));
      },
      snap(k = 0, b = !1) {
        ((l.secs = 0),
          (l.closing = !1),
          (l.slam = !1),
          (l.kick = -1),
          (l.shoveT = -1),
          (f0 = 0),
          (i0 = 0),
          (l.k = Math.max(0, Math.min(1, k))),
          (l.goal = l.k),
          c0(l.k),
          (l.bolted = !!b),
          (l.barK = b ? 1 : 0),
          (l.barGoal = void 0),
          B0(l.barK),
          s0._cols());
      },
      _cols() {
        ((_.on = l.k < 0.3 && s0._world), (V.on = l.k >= 0.3 && s0._world));
      },
      _world: !1,
      onImpact: null,
      _frame: {
        lintel: [
          [e.a + 0.02, e.y1 - 0.004, a + c * 0.01],
          [e.b - 0.02, e.y1 - 0.004, a + c * 0.01],
        ],
        inward: [0, c],
        sides: [
          [
            [e.a, 0.3, a + c * 0.01],
            [e.a, e.y1, a + c * 0.01],
          ],
          [
            [e.b, 0.3, a + c * 0.01],
            [e.b, e.y1, a + c * 0.01],
          ],
        ],
      },
    };
  return {
    api: s0,
    group: m,
    colliders: [_, V],
    anim: (k) => {
      if (l.secs > 0 && l.t < l.secs) {
        l.t = Math.min(l.secs, l.t + k);
        const b = l.t / l.secs,
          N = l.slam ? b * b * (0.55 + 0.45 * b) : Te(b);
        ((l.k = l.from + (l.goal - l.from) * N),
          c0(l.k),
          s0._cols(),
          l.t >= l.secs &&
            ((l.secs = 0),
            l.slam
              ? ((l.slam = !1),
                (l.kick = 0),
                s.audio?.play?.("house_door_slam", { pos: s0.pos, vol: 1 }),
                s0.onImpact?.(s0, 1, "slam"))
              : l.closing &&
                ((l.closing = !1),
                s.audio?.play?.("house_door_shut", {
                  pos: s0.pos,
                  vol: 0.9,
                }))));
      } else if (l.kick >= 0) {
        l.kick += k;
        const b = l.kick,
          N =
            b < 0.13
              ? 0.028 * Math.sin((b / 0.13) * Math.PI)
              : b < 0.22
                ? 0.007 * Math.sin(((b - 0.13) / 0.09) * Math.PI)
                : 0;
        ((l.k = N), c0(l.k), b >= 0.22 && ((l.kick = -1), (l.k = 0), c0(0)));
      }
      if (l.shoveT >= 0) {
        l.shoveT += k;
        const b = l.shoveT,
          N = l.shoveK,
          q = Math.exp(-b * 7.5);
        ((f0 = Math.max(
          -0.0015,
          N *
            0.016 *
            q *
            Math.sin(
              Math.min(b * 46, Math.PI * 0.5) +
                Math.max(0, b * 46 - Math.PI * 0.5) * 1.6,
            ) *
            (l.bolted ? 1 : 1.6),
        )),
          (i0 = l.bolted ? N * 0.014 * q * Math.abs(Math.sin(b * 38)) : 0),
          b > 0.9 && ((l.shoveT = -1), (f0 = 0), (i0 = 0)),
          c0(l.k),
          B0(l.barK));
      }
      if (l.barGoal !== void 0 && l.barT < 1) {
        l.barT = Math.min(1, l.barT + k / 0.55);
        let b = l.barT;
        (l.barGoal > l.barFrom
          ? (b =
              b < 0.8
                ? Math.pow(b / 0.8, 1.8)
                : 1 - 0.06 * Math.sin(((b - 0.8) / 0.2) * Math.PI))
          : (b = Te(b)),
          (l.barK = l.barFrom + (l.barGoal - l.barFrom) * b),
          B0(l.barK));
      }
    },
    parts: { pivot: S, leaf: z, bar: J, barPivot: Z },
  };
}
