// assets__metro-xgLUk92P 10 — add
// Lines 3383-3747 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function ca(c) {
  const { B: a, M: o, L: s, D: f, group: h } = c,
    d = dt,
    l = "pass",
    i = { chunk: l },
    t = [],
    e = d.y0,
    n = d.y1,
    r = e + 1.1,
    u = r + 0.035,
    b = y0.x0,
    M = y0.x1,
    x = y0.y1,
    w = _0.door.x0,
    p = _0.door.x1,
    S = _0.door.y1,
    y = (X, G, l0, h0, F, e0) => {
      Math.min(e0, r) > F + 1e-4 &&
        a.add(r0(X, G, l0, h0, F, Math.min(e0, r)), o.paintLow, i);
      const g0 = Math.max(F, r),
        N0 = Math.min(e0, u);
      N0 > g0 + 1e-4 && a.add(r0(X, G, l0, h0, g0, N0), o.paintLine, i);
      const F0 = Math.max(F, u);
      e0 > F0 + 1e-4 && a.add(r0(X, G, l0, h0, F0, e0), o.paintHigh, i);
    };
  (y("+x", d.x0, d.z0, d.z1, e, n),
    y("-x", d.x1, d.z0, d.z1, e, n),
    y("+z", d.z0, d.x0, w, e, n),
    y("+z", d.z0, p, d.x1, e, n),
    y("+z", d.z0, w, p, S, n),
    y("-z", d.z1, d.x0, b, e, n),
    y("-z", d.z1, M, d.x1, e, n),
    y("-z", d.z1, b, M, x, n),
    a.add(T0(d.x0, d.z0, d.x1, d.z1, n, !1), o.paintHigh, i),
    a.add(T0(d.x0, d.z0, d.x1, d.z1, e, !0), o.concFloor, i),
    a.add(r0("+x", b, d.z1, y0.z, e, x), o.paintHigh, i),
    a.add(r0("-x", M, d.z1, y0.z, e, x), o.paintHigh, i),
    a.add(T0(b, d.z1, M, y0.z, x, !1), o.paintHigh, i),
    a.add(T0(b, d.z1, M, y0.z, e, !0), o.concFloor, i));
  const L = d.z0 + 0.05,
    v = d.z1 - 0.05;
  (a.add(
    j([d.x0 + 0.2, n - 0.16, L], [d.x0 + 0.2, n - 0.16, v], 0.055, 14),
    o.pipeRed,
    i,
  ),
    a.add(
      j([d.x0 + 0.42, n - 0.12, L], [d.x0 + 0.42, n - 0.12, v], 0.032, 10),
      o.galvDark,
      i,
    ));
  for (let X = d.z0 + 0.6; X < d.z1; X += 1.5) {
    (a.add(
      j([d.x0 + 0.2, n, X], [d.x0 + 0.2, n - 0.1, X], 0.006, 5),
      o.galvDark,
      i,
    ),
      a.add(
        j([d.x0 + 0.42, n, X], [d.x0 + 0.42, n - 0.08, X], 0.006, 5),
        o.galvDark,
        i,
      ),
      a.add(
        new Ot(0.058, 0.006, 4, 16)
          .rotateY(Math.PI / 2)
          .translate(d.x0 + 0.2, n - 0.16, X),
        o.galvDark,
        i,
      ));
    for (const G of [0.5, 1])
      Math.abs(((X - d.z0) % 3) - G) < 0.01 &&
        a.add(
          j(
            [d.x0 + 0.2, n - 0.16, X - 0.03],
            [d.x0 + 0.2, n - 0.16, X + 0.03],
            0.07,
            14,
          ),
          o.pipeRed,
          i,
        );
  }
  const C = d.x1 - 0.32,
    k = n - 0.26;
  (a.add(T(C, k, d.z0 + 0.02, d.x1 - 0.02, k + 0.012, d.z1 - 0.02), o.galv, i),
    a.add(T(C, k, d.z0 + 0.02, C + 0.012, k + 0.06, d.z1 - 0.02), o.galv, i));
  for (let X = d.z0 + 0.4; X < d.z1; X += 1.2)
    a.add(T(C, k - 0.03, X - 0.02, d.x1, k, X + 0.02), o.galvDark, i);
  for (let X = 0; X < 5; X++) {
    const G = C + 0.04 + X * 0.05,
      l0 = 0.012 + (X % 2) * 0.006;
    a.add(
      j(
        [G, k + 0.012 + l0, d.z0 + 0.02],
        [G, k + 0.012 + l0, d.z1 - 0.02],
        l0,
        6,
      ),
      X === 2 ? o.cableR : o.cable,
      { chunk: l, cast: !1 },
    );
  }
  const R = d.z0 + 3.3,
    W = n - 0.45,
    Y = d.x0;
  a.add(
    new D0(0.13, 0.13, 0.07, 24)
      .rotateZ(Math.PI / 2)
      .translate(Y + 0.035, W, R),
    o.iron,
    i,
  );
  const $ = s.fixId();
  a.add(
    O0(
      new U0(0.095, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2)
        .rotateZ(-Math.PI / 2)
        .translate(Y + 0.07, W, R),
      $,
    ),
    o.warmBulb,
    { chunk: l, cast: !1 },
  );
  for (let X = 0; X < 4; X++) {
    const G = (X / 4) * Math.PI;
    a.add(
      new Ot(0.105, 0.004, 4, 20, Math.PI)
        .rotateX(G)
        .rotateY(Math.PI / 2)
        .rotateZ(-Math.PI / 2)
        .translate(Y + 0.07, W, R),
      o.iron,
      i,
    );
  }
  (s.add({
    a: [Y + 0.12, W, R],
    col: [1, 0.66, 0.36],
    cd: 5.5,
    reach: 7,
    zone: "passage",
    fix: $,
    state: "dying",
    box: [d.x0 - 0.05, e - 0.1, d.z0 - 0.05, d.x1 + 0.05, n + 0.05, d.z1 + 0.3],
    spot: {
      cd: 13,
      dist: 9,
      angle: 1.35,
      pen: 0.9,
      dir: [0.8, -0.55, 0.05],
      at: [Y + 0.16, W - 0.02, R],
    },
  }),
    a.add(
      T(d.x1 - 0.22, e + 1.05, d.z0 + 2.2, d.x1, e + 1.75, d.z0 + 2.75, 0.01),
      o.galvDark,
      i,
    ),
    a.add(
      T(
        d.x1 - 0.235,
        e + 1.36,
        d.z0 + 2.3,
        d.x1 - 0.22,
        e + 1.44,
        d.z0 + 2.33,
        0.003,
      ),
      o.black,
      i,
    ),
    a.add(
      j(
        [d.x0 + 0.1, e + 0.5, d.z1 - 1.6],
        [d.x0 + 0.1, e + 1.05, d.z1 - 1.6],
        0.075,
        14,
      ),
      o.pipeRed,
      i,
    ),
    a.add(
      j(
        [d.x0 + 0.1, e + 1.05, d.z1 - 1.6],
        [d.x0 + 0.1, e + 1.16, d.z1 - 1.6],
        0.025,
        8,
      ),
      o.black,
      i,
    ),
    a.add(
      T(d.x0, e + 0.75, d.z1 - 1.66, d.x0 + 0.03, e + 0.85, d.z1 - 1.54),
      o.black,
      i,
    ),
    f.decal("st_exit", [d.x0 + 0.004, e + 1.75, d.z0 + 1], 0.62, 0.19, "+x", {
      matt: !0,
      chunk: l,
    }),
    f.decal("st_up", [d.x0 + 0.004, e + 1.45, d.z0 + 1], 0.2, 0.2, "+x", {
      matt: !0,
      chunk: l,
      rot: Math.PI / 2,
    }),
    f.decal("damp", [d.x1 - 0.004, e + 0.5, d.z0 + 4.6], 1.4, 1, "-x", {
      matt: !0,
      chunk: l,
    }),
    f.decal("b_hand", [d.x1 - 0.004, e + 1.3, d.z1 - 0.8], 0.16, 0.2, "-x", {
      chunk: l,
      rot: 0.3,
    }));
  const Z = s.fixId();
  (a.add(
    T(y0.x0 + 0.27, x + 0.12, d.z1 - 0.07, y0.x1 - 0.27, x + 0.3, d.z1, 0.006),
    o.housing,
    i,
  ),
    f.glow(
      "exit",
      [(y0.x0 + y0.x1) / 2, x + 0.21, d.z1 - 0.07],
      0.34,
      0.17,
      "-z",
      { fx: Z, chunk: l },
    ),
    s.add({
      a: [y0.x0 + 0.3, x + 0.21, d.z1 - 0.12],
      b: [y0.x1 - 0.3, x + 0.21, d.z1 - 0.12],
      col: [0.22, 1, 0.45],
      cd: 0.8,
      reach: 3.6,
      zone: "passage",
      fix: Z,
      state: "on",
      box: [d.x0 - 0.05, e - 0.1, d.z0 + 3, d.x1 + 0.05, n + 0.05, d.z1 + 0.05],
      spec: 0.6,
    }));
  const H = y0.z;
  (a.add(T(b - 0.06, e, H - 0.03, b, x + 0.06, H + 0.012), o.steel, i),
    a.add(T(M, e, H - 0.03, M + 0.06, x + 0.06, H + 0.012), o.steel, i),
    a.add(T(b - 0.06, x, H - 0.03, M + 0.06, x + 0.06, H + 0.012), o.steel, i));
  const V = new Jt();
  ((V.name = "metro_staffDoor"), V.position.set(b + 0.005, e, H), h.add(V));
  const I = M - b - 0.012,
    E = x - e - 0.008,
    N = [],
    Q = [],
    K = [];
  (N.push(T(0, 0.006, -0.05, I, E, -0.004, 0.006)),
    N.push(T(0.04, 0.02, -0.052, I - 0.04, 0.26, -0.049)),
    Q.push(T(I * 0.5 - 0.11, E * 0.6, -0.04, I * 0.5 + 0.11, E * 0.86, -0.014)),
    K.push(
      T(0.06, 0.97, -0.11, 0.13, 1.07, -0.05, 0.01),
      T(I - 0.13, 0.97, -0.11, I - 0.06, 1.07, -0.05, 0.01),
    ),
    K.push(
      new D0(0.018, 0.018, I - 0.2, 12)
        .rotateZ(Math.PI / 2)
        .translate(I / 2, 1.02, -0.1),
    ),
    K.push(T(I - 0.1, 1, -0.004, I - 0.04, 1.04, 0.03, 0.004)));
  const s0 = new bt(q0(N), o.steel);
  ((s0.castShadow = !0), (s0.receiveShadow = !0));
  const f0 = new bt(q0(K), o.galv);
  f0.castShadow = !0;
  const p0 = new bt(q0(Q), o.black);
  V.add(s0, f0, p0);
  const o0 = new bt(
    c.faceQuadLocal("staff_only", [I / 2, 1.5, 0.002], 0.3, 0.15),
    o.signs,
  );
  V.add(o0);
  const M0 = {
      x0: b,
      x1: M,
      z0: d.z1,
      z1: H + 0.06,
      y0: e - 0.2,
      y1: x,
      door: "staff",
    },
    S0 = {
      x0: b - 0.04,
      x1: b + 0.1,
      z0: H,
      z1: H + I + 0.04,
      y0: e - 0.2,
      y1: x,
      door: "staff",
      on: !1,
    };
  t.push(M0, S0);
  const m0 = {
      k: 0,
      goal: 0,
      rate: 0,
      collider: M0,
      colliderOpen: S0,
      set(X) {
        ((m0.k = m0.goal = X), g());
      },
      open(X = 1, G = 1.2) {
        ((m0.goal = X),
          (m0.rate = Math.abs(X - m0.k) / Math.max(0.05, G)),
          X > m0.k
            ? c.audio?.play?.("metro_staff_door_open", {
                pos: [y0.x0 + 0.45, e + 1.1, H],
                vol: 0.9,
              })
            : c.audio?.play?.("metro_staff_door_shut", {
                pos: [y0.x0 + 0.45, e + 1.1, H],
                vol: 0.9,
              }));
      },
    },
    g = () => {
      const X = m0.k,
        G = X < 0.5 ? 2 * X * X : 1 - Math.pow(-2 * X + 2, 2) / 2;
      ((V.rotation.y = -G * 1.62), (M0.on = X < 0.35), (S0.on = X > 0.75));
    };
  (g(),
    c.anim.push((X) => {
      if (m0.k === m0.goal) return;
      const G = m0.goal - m0.k;
      ((m0.k += Math.sign(G) * Math.min(Math.abs(G), m0.rate * X)),
        g(),
        m0.k === m0.goal &&
          m0.k === 0 &&
          c.audio?.play?.("metro_staff_door_slam", {
            pos: [y0.x0 + 0.45, e + 1.1, H],
            vol: 0.9,
          }));
    }));
  const A = e - 0.2,
    O = n + 0.1;
  return (
    t.push(
      { x0: d.x0 - 0.2, x1: d.x0, z0: d.z0, z1: d.z1 + 0.25, y0: A, y1: O },
      { x0: d.x1, x1: d.x1 + 0.2, z0: d.z0, z1: d.z1 + 0.25, y0: A, y1: O },
    ),
    t.push(
      { x0: d.x0, x1: b, z0: d.z1, z1: y0.z, y0: A, y1: O },
      { x0: M, x1: d.x1, z0: d.z1, z1: y0.z, y0: A, y1: O },
    ),
    t.push({
      x0: d.x0,
      x1: d.x0 + 0.2,
      z0: d.z1 - 1.75,
      z1: d.z1 - 1.45,
      y0: A,
      y1: e + 1.2,
    }),
    c.sounds.drips.push([d.x0 + 0.5, e + 0.02, d.z0 + 4.4]),
    {
      colliders: t,
      props: { staffDoor: m0 },
      points: {
        passageEnd: [y0.x0 + 0.45, e, d.z1 - 0.45],
        staffDoor: [y0.x0 + 0.45 + 0.25, e, y0.z + 0.75],
      },
    }
  );
}
