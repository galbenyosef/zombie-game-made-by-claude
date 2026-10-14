// assets/metro-xgLUk92P 09 — add
// Lines 3021-3382 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function buildMetroShaft(c) {
  const { B: a, M: o, L: s, D: f, group: h, rng: d } = c,
    l = _0,
    i = "shaft",
    t = { chunk: i },
    e = [],
    n = l.collarBot,
    r = l.bottom,
    u = l.cx - l.open / 2,
    b = l.cx + l.open / 2,
    M = l.cz - l.open / 2,
    x = l.cz + l.open / 2,
    w = l.x0 - l.wall - 0.1,
    p = l.x1 + l.wall + 0.1,
    S = l.z0 - l.wall - 0.1,
    y = l.z1 + l.wall + 0.1;
  for (const [F, e0, g0, N0] of [
    [l.x0, l.z0, l.x1, M],
    [l.x0, x, l.x1, l.z1],
    [l.x0, M, u, x],
    [b, M, l.x1, x],
  ])
    a.add(T0(F, e0, g0, N0, n, !1), o.concShaft, t);
  (a.add(r0("+z", M, u, b, n, l.top), o.concShaft, t),
    a.add(r0("-z", x, u, b, n, l.top), o.concShaft, t),
    a.add(r0("+x", u, M, x, n, l.top), o.concShaft, t),
    a.add(r0("-x", b, M, x, n, l.top), o.concShaft, t));
  for (const [F, e0, g0, N0] of [
    [w, S, p, M],
    [w, x, p, y],
    [w, M, u, x],
    [b, M, p, x],
  ])
    a.add(T0(F, e0, g0, N0, l.top, !0), o.concShaft, { chunk: i, receive: !1 });
  const L = l.door.x0,
    v = l.door.x1,
    C = l.door.y1;
  (a.add(r0("+z", l.z0, l.x0, l.x1, r, n), o.concShaft, t),
    a.add(r0("-x", l.x1, l.z0, l.z1, r, n), o.concShaft, t),
    a.add(r0("+x", l.x0, l.z0, l.z1, r, n), o.concShaft, t),
    a.add(r0("-z", l.z1, l.x0, L, r, n), o.concShaft, t),
    a.add(r0("-z", l.z1, v, l.x1, r, n), o.concShaft, t),
    a.add(r0("-z", l.z1, L, v, C, n), o.concShaft, t),
    a.add(r0("+x", L, l.z1, l.z1 + l.wall, r, C), o.concShaft, t),
    a.add(r0("-x", v, l.z1, l.z1 + l.wall, r, C), o.concShaft, t),
    a.add(T0(L, l.z1, v, l.z1 + l.wall, C, !1), o.concShaft, t),
    a.add(T0(l.x0, l.z0, l.x1, l.z1, r, !0), o.concFloor, t),
    a.add(T0(L, l.z1, v, l.z1 + l.wall, r, !0), o.concFloor, t),
    a.add(
      T(l.x0 + 0.06, r, l.z1 - 0.32, l.x0 + 0.32, r + 0.008, l.z1 - 0.06),
      o.iron,
      t,
    ));
  for (let F = 0; F < 6; F++)
    a.add(
      T(
        l.x0 + 0.08 + F * 0.04,
        r + 0.008,
        l.z1 - 0.3,
        l.x0 + 0.095 + F * 0.04,
        r + 0.012,
        l.z1 - 0.08,
      ),
      o.iron,
      t,
    );
  const k = l.railZ,
    R = l.railX;
  for (const F of R)
    a.add(
      T(F - 0.006, r, k - 0.03, F + 0.006, -0.1, k + 0.03, 0.002),
      o.galv,
      t,
    );
  const W = 30,
    Y = (l.rungTop - l.rungBot) / (W - 1);
  for (let F = 0; F < W; F++) {
    const e0 = l.rungTop - F * Y;
    a.add(
      j(
        [R[0] - 0.012, e0, l.ladderZ],
        [R[1] + 0.012, e0, l.ladderZ],
        0.0125,
        10,
      ),
      o.galv,
      { chunk: i },
    );
  }
  for (let F = -1; F > r + 0.3; F -= 1.5)
    for (const e0 of R) {
      (a.add(
        T(e0 - 0.005, F - 0.03, l.z0, e0 + 0.005, F + 0.03, k - 0.028),
        o.galv,
        t,
      ),
        a.add(
          T(
            e0 - 0.05,
            F - 0.06,
            l.z0,
            e0 + 0.05,
            F + 0.06,
            l.z0 + 0.008,
            0.002,
          ),
          o.galv,
          t,
        ));
      for (const g0 of [-0.03, 0.03])
        a.add(
          j([e0 + g0, F, l.z0 + 0.008], [e0 + g0, F, l.z0 + 0.02], 0.009, 6),
          o.galvDark,
          t,
        );
    }
  for (const F of R)
    a.add(T(F - 0.04, r, k - 0.05, F + 0.04, r + 0.01, k + 0.05), o.galv, t);
  e.push({
    x0: R[0] - 0.04,
    x1: R[1] + 0.04,
    z0: l.z0,
    z1: k + 0.06,
    y0: r - 0.1,
    y1: -0.6,
    ladder: !0,
  });
  const $ = new Jt();
  (($.name = "metro_ladderTop"), h.add($));
  const Z = [];
  for (const F of R)
    (Z.push(j([F, -1.45, l.postZ], [F, l.postTop, l.postZ], 0.021, 12)),
      Z.push(
        ko([F, l.postTop, l.postZ + 0.085], 0.085, 0.019, "x", Math.PI, 8, 16),
      ),
      Z.push(
        j(
          [F, l.postTop - 0.12, l.postZ + 0.17],
          [F, l.postTop, l.postZ + 0.17],
          0.019,
          10,
        ),
      ));
  const H = new bt(q0(Z), o.galv);
  ((H.castShadow = !0), (H.receiveShadow = !0), $.add(H));
  for (const F of R)
    for (const e0 of [-0.35, -1.25])
      a.add(
        T(
          F - 0.03,
          e0 - 0.04,
          l.postZ - 0.03,
          F + 0.03,
          e0 + 0.04,
          l.postZ + 0.03,
          0.004,
        ),
        o.galvDark,
        t,
      );
  const V = {
    k: 1,
    goal: 1,
    rate: 0,
    set(F) {
      ((V.k = V.goal = F),
        ($.position.y = -(1 - F) * (l.postTop + 0.07 + 0.105)));
    },
    to(F, e0 = 0.5) {
      ((V.goal = F),
        (V.rate = Math.abs(F - V.k) / Math.max(0.05, e0)),
        c.audio?.play?.("metro_ladder_slide", {
          pos: [l.cx, -0.3, l.postZ],
          vol: 0.7,
        }));
    },
  };
  (V.set(1),
    c.anim.push((F) => {
      if (V.k === V.goal) return;
      const e0 = V.goal - V.k;
      ((V.k += Math.sign(e0) * Math.min(Math.abs(e0), V.rate * F)),
        ($.position.y = -(1 - V.k) * (l.postTop + 0.07 + 0.105)));
    }));
  const I = l.x1 - 0.05,
    E = l.z0 + 0.05;
  a.add(j([I, n, E], [I, -6.35, E], 0.013, 8), o.galvDark, t);
  for (let F = -0.8; F > -6.3; F -= 1)
    a.add(
      T(I - 0.022, F - 0.015, l.z0, I + 0.022, F + 0.015, E + 0.016, 0.002),
      o.galv,
      t,
    );
  (a.add(
    T(I - 0.06, -6.5, l.z0 + 0, I + 0.03, -6.32, E + 0.05, 0.006),
    o.galvDark,
    t,
  ),
    a.add(
      j([I - 0.02, -6.42, E + 0.03], [I - 0.02, -6.42, l.z1 - 0.05], 0.011, 8),
      o.galvDark,
      t,
    ),
    a.add(
      j(
        [I - 0.02, -6.42, l.z1 - 0.05],
        [l.cx + 0.12, -6.42, l.z1 - 0.05],
        0.011,
        8,
      ),
      o.galvDark,
      t,
    ));
  const N = l.cx,
    Q = -6.62,
    K = l.z1;
  a.add(
    T(N - 0.13, Q - 0.08, K - 0.075, N + 0.13, Q + 0.08, K, 0.025),
    o.iron,
    t,
  );
  const s0 = s.fixId();
  a.add(
    O0(
      aa(
        new U0(0.075, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(
          1.4,
          0.75,
          0.6,
        ),
        [N, Q, K - 0.075],
        [-Math.PI / 2, 0, 0],
      ),
      s0,
    ),
    o.redLamp,
    { chunk: i, cast: !1 },
  );
  for (let F = -2; F <= 2; F++)
    a.add(
      j(
        [N + F * 0.045, Q - 0.075, K - 0.075],
        [N + F * 0.045, Q + 0.075, K - 0.075],
        0.003,
        4,
      ),
      o.iron,
      t,
    );
  (s.add({
    a: [N - 0.05, Q, K - 0.1],
    b: [N + 0.05, Q, K - 0.1],
    col: [1, 0.16, 0.07],
    cd: 3.2,
    reach: 7.5,
    zone: "shaft",
    fix: s0,
    state: "on",
    box: [l.x0 - 0.05, r - 0.1, l.z0 - 0.05, l.x1 + 0.05, n, l.z1 + 0.9],
    weight: 1.5,
    spot: {
      cd: 9,
      dist: 9.5,
      angle: 1.2,
      pen: 0.85,
      dir: [0, -0.55, -1],
      at: [N, Q - 0.02, K - 0.14],
    },
  }),
    s.add({
      a: [l.cx - 0.3, -0.2, l.cz],
      b: [l.cx + 0.3, -0.2, l.cz],
      col: [1, 0.6, 0.3],
      cd: 1,
      reach: 5.5,
      zone: "shaft",
      state: "on",
      box: [l.x0 - 0.05, -6, l.z0 - 0.05, l.x1 + 0.05, -0.04, l.z1 + 0.05],
      spec: 0.3,
    }),
    f.decal("st_exit", [l.x0 + 0.004, -1.25, l.cz], 0.86, 0.27, "+x", {
      matt: !0,
      chunk: i,
    }));
  for (const F of [2, 4, 6, 8])
    f.decal("st_d" + F, [l.x1 - 0.14, -F, l.z0 + 0.004], 0.24, 0.12, "+z", {
      matt: !0,
      chunk: i,
    });
  (f.decal("st_up", [l.x0 + 0.004, -7.55, l.cz - 0.12], 0.26, 0.26, "+x", {
    matt: !0,
    chunk: i,
  }),
    f.decal("st_exit", [l.x0 + 0.004, -7.95, l.cz - 0.12], 0.5, 0.16, "+x", {
      matt: !0,
      chunk: i,
    }),
    f.decal("damp", [l.x1 - 0.004, -3.4, l.cz + 0.1], 0.9, 1.4, "-x", {
      matt: !0,
      chunk: i,
    }),
    f.decal("damp", [l.x0 + 0.004, -5.2, l.cz - 0.2], 0.8, 1.6, "+x", {
      matt: !0,
      chunk: i,
      rot: 0.3,
    }));
  const f0 = l.z1 + l.wall;
  (a.add(T(L - 0.06, r, f0 - 0.02, L, C + 0.06, f0 + 0.03), o.steel, t),
    a.add(T(v, r, f0 - 0.02, v + 0.06, C + 0.06, f0 + 0.03), o.steel, t),
    a.add(
      T(L - 0.06, C, f0 - 0.02, v + 0.06, C + 0.06, f0 + 0.03),
      o.steel,
      t,
    ));
  const p0 = new Jt();
  (p0.position.set(L, r, f0 + 0.03), (p0.rotation.y = -1.78));
  const o0 = v - L - 0.01,
    M0 = C - r - 0.01,
    S0 = [];
  (S0.push(T(0, 0.005, -0.025, o0, M0, 0.025, 0.008)),
    S0.push(T(0.04, 0.9, 0.025, 0.06, 1.15, 0.05, 0.005)),
    S0.push(T(o0 - 0.08, 0.95, 0.025, o0 - 0.03, 1.05, 0.045, 0.004)));
  const m0 = new bt(q0(S0), o.steel);
  ((m0.castShadow = !0), (m0.receiveShadow = !0), p0.add(m0), h.add(p0));
  const g = Math.cos(-1.78),
    A = Math.sin(-1.78),
    O = L + o0 * g,
    X = f0 + 0.03 - o0 * A;
  e.push({
    x0: Math.min(L, O) - 0.03,
    x1: Math.max(L, O) + 0.03,
    z0: f0,
    z1: Math.max(f0, X) + 0.03,
    y0: r - 0.1,
    y1: C,
    door: "shaft",
  });
  const G = 0.2,
    l0 = r - 0.2,
    h0 = -0.5;
  return (
    e.push(
      { x0: l.x0 - G, x1: l.x1 + G, z0: l.z0 - G, z1: l.z0, y0: l0, y1: h0 },
      { x0: l.x1, x1: l.x1 + G, z0: l.z0, z1: l.z1, y0: l0, y1: h0 },
      { x0: l.x0 - G, x1: l.x0, z0: l.z0, z1: l.z1, y0: l0, y1: h0 },
      { x0: l.x0 - G, x1: L, z0: l.z1, z1: l.z1 + l.wall, y0: l0, y1: h0 },
      { x0: v, x1: l.x1 + G, z0: l.z1, z1: l.z1 + l.wall, y0: l0, y1: h0 },
    ),
    c.sounds.drips.push(
      [l.cx - 0.3, r + 0.05, l.cz + 0.25],
      [l.x1 - 0.1, r + 0.05, l.z0 + 0.2],
    ),
    {
      colliders: e,
      props: { ladderTop: V },
      points: {
        shaftBottom: [l.cx, r, l.cz + 0.12],
        shaftTop: [l.cx, l.top, l.cz],
      },
    }
  );
}
