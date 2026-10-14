// assets/city-COfbVKUz 16 — math
// Lines 4483-5575 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function ko(m, e, d, n, h, c) {
  const w = new T0();
  w.name = "city3_sites";
  const s = (r, y) => r + (y - r) * c(),
    x = W0(e, h, 2),
    k = W0(e, h, 2, { objLocal: !0 }),
    P = [],
    _ = {},
    g = [],
    M = (r, y, b, p, i, t, u) => P.push({ box: [r, y, b, p, i, t], name: u }),
    N = (r, y, b, p) => P.push({ seg: [r, y, b], name: p }),
    T = n.blds.site.id,
    S = n.blds.prop.id,
    v = new l0();
  {
    const r = f0,
      y = (B) => z0(T, B),
      b = 457.6,
      p = 530.4,
      i = -205.4,
      t = -152.6;
    for (const [B, j] of [
      [
        [b, i],
        [p, i],
      ],
      [
        [p, i],
        [p, t],
      ],
      [
        [p, t],
        [b, t],
      ],
      [
        [b, t],
        [b, i],
      ],
    ]) {
      const O = Math.hypot(j[0] - B[0], j[1] - B[1]);
      for (let Z = 0; Z < O - 0.5; Z += 2.44) {
        const n0 = Math.min(O, Z + 2.42),
          t0 = [B[0] + ((j[0] - B[0]) * Z) / O, B[1] + ((j[1] - B[1]) * Z) / O],
          c0 = [
            B[0] + ((j[0] - B[0]) * n0) / O,
            B[1] + ((j[1] - B[1]) * n0) / O,
          ];
        (B[0] === b && j[0] === b && Math.abs((t0[1] + c0[1]) / 2 + 179) < 4) ||
          v.box(
            Math.min(t0[0], c0[0]) - 0.04,
            0,
            Math.min(t0[1], c0[1]) - 0.04,
            Math.max(t0[0], c0[0]) + 0.04,
            2.4 + (Z % 4.88 < 2.44 ? 0 : 0.05),
            Math.max(t0[1], c0[1]) + 0.04,
            y(C.plywood),
          );
      }
    }
    const u = 468,
      o = 522,
      l = -199,
      f = -160;
    for (let B = 0; B < 4; B++) {
      const j = B * 4.2,
        O = B === 3 ? u + 30 : o;
      if ((B > 0 && v.box(u, j - 0.3, l, O, j, f, y(C.concrete)), B < 3))
        for (let Z = u; Z <= o + 0.1; Z += 6)
          for (let n0 = l; n0 <= f + 0.1; n0 += 6.5)
            v.box(
              Z - 0.25,
              j,
              n0 - 0.25,
              Z + 0.25,
              j + 3.9,
              n0 + 0.25,
              y(C.concrete),
            );
    }
    for (let B = u + 31; B <= o; B += 6)
      for (let j = l; j <= f + 0.1; j += 6.5) {
        v.box(B - 0.25, 12.6, j - 0.25, B + 0.25, 15, j + 0.25, y(C.concrete));
        for (const O of [-0.12, 0.12])
          Y(v, [B + O, 15, j], [B + O * 2, 16.6, j + O], 0.03, y(C.iron));
      }
    for (let B = u + 0.5; B < u + 30; B += 1.2)
      v.box(B, 12.6, f - 0.1, B + 1.1, 13.8, f, y(C.plywood));
    for (let B = 0; B < 3; B++)
      (v.box(
        460 + B * 6.3,
        0.15,
        -158.5,
        466 + B * 6.3,
        2.75,
        -156,
        z0(T, C.container),
      ),
        B < 2 &&
          v.box(
            460 + B * 6.3,
            2.75,
            -158.5,
            466 + B * 6.3,
            5.35,
            -156,
            z0(T, C.container),
          ));
    for (let B = 0; B < 6; B++)
      v.box(
        500 + B * 2.2,
        0.15,
        -203.5,
        501.6 + B * 2.2,
        0.15 + s(0.8, 1.4),
        -202,
        y(C.plywood),
      );
    for (let B = 0; B < 5; B++)
      v.box(
        470 + B * 0.5,
        0.15,
        -156 - B * 0.1,
        482,
        0.4 + B * 0.12,
        -155.6 - B * 0.1,
        y(C.iron),
      );
    const z = r.sw / 2,
      A = r.x,
      F = r.z,
      E = r.mastH;
    v.box(A - 3.5, 0, F - 3.5, A + 3.5, 1.2, F + 3.5, y(C.concrete));
    const K = [
      [-z, -z],
      [z, -z],
      [z, z],
      [-z, z],
    ];
    for (const [B, j] of K)
      Y(v, [A + B, 1.2, F + j], [A + B, E, F + j], 0.16, y(C.crane));
    for (let B = 1.2; B < E - 0.1; B += 2.45) {
      const j = Math.min(E, B + 2.45);
      for (let O = 0; O < 4; O++) {
        const [Z, n0] = K[O],
          [t0, c0] = K[(O + 1) % 4];
        (Y(v, [A + Z, B, F + n0], [A + t0, j, F + c0], 0.08, y(C.crane)),
          Y(v, [A + Z, B, F + n0], [A + t0, B, F + c0], 0.07, y(C.crane)));
      }
    }
    M(A - 1.2, 0, F - 1.2, A + 1.2, E + 1, F + 1.2, "crane mast");
    const L = new l0(),
      q = (B) => z0(S, B),
      R = r.jibY,
      V = r.jibLen;
    (L.box(-1.6, E - R, -1.6, 1.6, 1, 1.6, q(C.crane)),
      L.box(1.3, -2.6, 1, 3.6, -0.1, 3.4, q(C.metal)),
      L.box(1.35, -2, 3.38, 3.55, -0.7, 3.42, q(C.glassRail)));
    const H = 0.85,
      I = 1.9,
      W = [-H, 0, 1.6],
      D = [-H * 0.6, 0, V],
      G = [H, 0, 1.6],
      a0 = [H * 0.6, 0, V],
      o0 = [0, I, 1.6],
      p0 = [0, I * 0.55, V];
    for (const [B, j] of [
      [W, D],
      [G, a0],
      [o0, p0],
    ])
      Y(L, B, j, 0.14, q(C.crane));
    (J0(L, W, D, G, a0, 2.4, 0.06, q(C.crane)),
      J0(L, W, D, o0, p0, 2.4, 0.07, q(C.crane)),
      J0(L, G, a0, o0, p0, 2.4, 0.07, q(C.crane)));
    const b0 = [-1, 0.2, -1.6],
      P0 = [-1, 0.2, -18],
      H0 = [1, 0.2, -1.6],
      x0 = [1, 0.2, -18];
    (Y(L, b0, P0, 0.16, q(C.crane)),
      Y(L, H0, x0, 0.16, q(C.crane)),
      J0(L, b0, P0, H0, x0, 2, 0.07, q(C.crane)));
    for (let B = 0; B < 4; B++)
      L.box(
        -1.3,
        -1.2,
        -18 + 0.3 + B * 1.15,
        1.3,
        0.9,
        -18 + 1.35 + B * 1.15,
        q(C.concrete),
      );
    L.box(-0.9, 0.3, -9, 0.9, 1.6, -6.5, q(C.metal));
    const R0 = r.headH;
    for (const [B, j] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ])
      Y(L, [B * 1, 0.5, j * 1], [0, R0, 0], 0.13, q(C.crane));
    for (const B of [22, 40])
      L0(
        L,
        [0, R0, 0.2],
        [0, I * (1 - (0.45 * B) / V), B],
        0.15,
        0.045,
        q(C.iron),
        6,
      );
    (L0(L, [0, R0, -0.2], [-1, 0.4, -17], 0.1, 0.045, q(C.iron), 6),
      L0(L, [0, R0, -0.2], [1, 0.4, -17], 0.1, 0.045, q(C.iron), 6),
      L.box(-0.8, -0.35, 13, 0.8, 0.05, 14.4, q(C.metal)));
    for (const B of [-0.25, 0.25])
      Y(L, [B, -0.3, 13.7], [B, -5, 13.7], 0.03, q(C.iron), !0);
    L.box(-0.35, -5.9, 13.35, 0.35, -4.9, 14.05, q(C.crane));
    const B0 = new s0(L.build(), k);
    ((B0.name = "city3_crane_jib"), B0.position.set(A, R, F), w.add(B0));
    const U = (B) => {
      const j = B * B * (3 - 2 * B);
      B0.rotation.y = r.th0 + (r.th1 - r.th0) * j;
    };
    (U(0),
      (_.crane = {
        k: 0,
        set(B) {
          ((_.crane.k = B = Math.max(0, Math.min(1, B))), U(B));
        },
        object: B0,
        warning: [0, 0, 0],
      }),
      P.push({
        name: "crane jib",
        dyn: "crane",
        obb: { c: [A, R, F], from: 1.6, to: V, half: 1.1, y0: -0.4, y1: 2.2 },
      }),
      P.push({
        name: "crane counter-jib",
        dyn: "crane",
        obb: {
          c: [A, R, F],
          from: -18,
          to: -1.6,
          half: 1.4,
          y0: -1.3,
          y1: R0 + 0.3,
        },
      }),
      g.push({ id: "crane_groan", at: [A, R, F] }));
  }
  {
    const r = (y) => z0(n.blds.twinN.id, y);
    for (const [y, b] of [
      [662, -290],
      [662, -150],
      [733, -200],
      [733, -246],
    ])
      v.box(y - 2.5, 0.15, b - 1.2, y + 2.5, 0.9, b + 1.2, r(C.concrete));
    v.box(657.5, 0.15, -224, 660.5, 1.2, -220, r(C.concrete));
    for (let y = 0; y < 16; y++) {
      const b = (y / 16) * Math.PI * 2,
        p = ((y + 1) / 16) * Math.PI * 2;
      Y(
        v,
        [659, 4.2 + Math.cos(b) * 2.8, -222 + Math.sin(b) * 2.8],
        [659, 4.2 + Math.cos(p) * 2.8, -222 + Math.sin(p) * 2.8],
        0.35,
        r(C.steel),
      );
    }
    M(657.5, 0, -225, 660.5, 7.2, -219, "sculpture");
  }
  {
    const r = I0,
      y = (t) => z0(S, t),
      b = new l0();
    (b.box(-1.25, 0.9, 5.2, 1.25, 3.4, 7.6, y(C.burnt)),
      b.box(-1.3, 0.55, -8, 1.3, 1, 5.4, y(C.burnt)));
    const p = new _0(1.35, 1.35, 11.5, 20, 1);
    (p.rotateX(Math.PI / 2), p.translate(0, 2.45, -1.6), b.geo(p, y(C.burnt)));
    for (const t of [6.4, -4.5, -6])
      for (const u of [-1, 1]) {
        const o = new _0(0.52, 0.52, 0.4, 12);
        (o.rotateZ(Math.PI / 2),
          o.translate(u * 1.2, 0.52, t),
          b.geo(o, y(C.dark)));
      }
    const i = new s0(b.build(), k);
    ((i.name = "city3_tanker"),
      i.position.set(r.x, 0.15, r.z),
      (i.rotation.y = r.yaw),
      w.add(i),
      M(r.x - 7, 0, r.z - 5, r.x + 7, 4.2, r.z + 5, "tanker"));
  }
  {
    const r = n.blds.climb,
      y = (t) => z0(r.id, t),
      b = y0;
    for (let t = b.z0 + 1.5; t < b.z1 - 0.5; t += 1.5)
      v.box(
        b.x0 - 0.12,
        6,
        t - 0.04,
        b.x0 + 0.02,
        b.h - 0.2,
        t + 0.04,
        y(C.trim),
      );
    for (let t = 6; t < b.h - 1; t += 3.9)
      v.box(
        b.x0 - 0.18,
        t - 0.25,
        b.z0,
        b.x0 + 0.02,
        t + 0.12,
        b.z1,
        y(C.trim),
      );
    const p = b.pad,
      i = p.s / 2;
    (v.box(b.x0, b.h, b.z0, b.x1, b.h + 1.2, b.z0 + 0.3, y(C.trim)),
      v.box(b.x0, b.h, b.z1 - 0.3, b.x1, b.h + 1.2, b.z1, y(C.trim)),
      v.box(b.x0, b.h, b.z0, b.x0 + 0.3, b.h + 1.2, b.z1, y(C.trim)),
      v.box(b.x1 - 0.3, b.h, b.z0, b.x1, b.h + 1.2, b.z1, y(C.trim)),
      v.box(p.x - i, p.y - 0.35, p.z - i, p.x + i, p.y, p.z + i, y(C.helipad)));
    for (const [t, u] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ])
      Y(
        v,
        [p.x + t * (i - 1), b.h, p.z + u * (i - 1)],
        [p.x + t * (i - 1), p.y - 0.35, p.z + u * (i - 1)],
        0.3,
        y(C.iron),
      );
    for (const t of [-1, 1])
      (v.box(
        p.x - i - 1.2,
        p.y - 0.4,
        p.z + t * i - (t > 0 ? 0 : 0.05),
        p.x + i + 1.2,
        p.y - 0.3,
        p.z + t * i + (t > 0 ? 0.05 : 0),
        y(C.iron),
      ),
        v.box(
          p.x + t * i - 0.05,
          p.y - 0.4,
          p.z - i - 1.2,
          p.x + t * i + 0.05,
          p.y - 0.3,
          p.z + i + 1.2,
          y(C.iron),
        ));
    (Y(
      v,
      [b.x1 - 3, b.h, b.z0 + 3],
      [b.x1 - 3, b.h + 6, b.z0 + 3],
      0.08,
      y(C.iron),
    ),
      Y(
        v,
        [b.x1 - 3, b.h + 5.9, b.z0 + 3],
        [b.x1 - 3 + 1.6, b.h + 5.2, b.z0 + 3.6],
        0.45,
        y(C.mast),
        !0,
      ),
      v.box(
        b.x1 - 14,
        b.h,
        b.z1 - 9,
        b.x1 - 4,
        b.h + 4.2,
        b.z1 - 3,
        y(C.concrete),
      ),
      M(b.x0 - 0.5, 0, b.z0, b.x1, b.h + 1.2, b.z1, "climb tower"),
      M(p.x - i, b.h, p.z - i, p.x + i, p.y, p.z + i, "helipad"));
  }
  {
    const r = Zt,
      y = (W) => z0(S, W);
    n.blds.tankB;
    const b = r.x,
      p = r.z,
      i = r.roof,
      t = [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ],
      u = new l0();
    for (const [W, D] of t)
      u.box(
        W * r.r * 0.7 - 0.11,
        0,
        D * r.r * 0.7 - 0.11,
        W * r.r * 0.7 + 0.11,
        r.legs,
        D * r.r * 0.7 + 0.11,
        y(C.iron),
      );
    for (const W of [r.legs * 0.4, r.legs * 0.8])
      (u.box(
        -2.1 * 0.7,
        W,
        -2.1 * 0.7 - 0.05,
        r.r * 0.7,
        W + 0.1,
        -2.1 * 0.7 + 0.05,
        y(C.iron),
      ),
        u.box(
          -2.1 * 0.7,
          W,
          r.r * 0.7 - 0.05,
          r.r * 0.7,
          W + 0.1,
          r.r * 0.7 + 0.05,
          y(C.iron),
        ));
    u.box(
      -2.1 * 0.8,
      r.legs - 0.14,
      -2.1 * 0.8,
      r.r * 0.8,
      r.legs + 0.04,
      r.r * 0.8,
      y(C.iron),
    );
    const o = new s0(u.build(), k);
    ((o.name = "city3_tank_stand"), o.position.set(b, i, p), w.add(o));
    const l = new l0(),
      f = new _0(r.r, r.r, r.h, 20, 1);
    (f.translate(0, 0, 0), l.geo(f, y(C.wood)));
    const z = new jt(r.r * 1.08, r.h * 0.28, 20, 1);
    (z.translate(0, r.h / 2 + r.h * 0.14, 0), l.geo(z, y(C.wood)));
    for (const W of [-4.6 * 0.3, 0, r.h * 0.3]) {
      const D = new ie(r.r + 0.03, 0.04, 4, 24);
      (D.rotateX(Math.PI / 2), D.translate(0, W, 0), l.geo(D, y(C.iron)));
    }
    const A = new s0(l.build(), k);
    ((A.name = "city3_tank"), w.add(A));
    const F = [b, i + r.legs + r.h / 2, p],
      E = 5.2,
      K = 0.15,
      L = (W, D) => {
        if (W <= K)
          return ((D[0] = F[0]), (D[1] = F[1]), (D[2] = F[2]), (D[3] = 0), D);
        const G = W - K;
        let a0 = F[0] + r.vx * G,
          o0 = F[1] + r.vy * G - 4.9 * G * G;
        const p0 = F[2] - 1.2 * G,
          b0 = 1036 + r.r + 0.3;
        if (a0 < b0) {
          const P0 = (b0 - F[0]) / r.vx,
            H0 = F[1] + r.vy * P0 - 4.9 * P0 * P0,
            x0 = G - P0;
          ((a0 = b0 + 0.8 * Math.min(x0, 0.5)),
            (o0 = Math.max(r.r + 0.1, H0 - 4.9 * x0 * x0 - 6 * x0)));
        }
        return (
          (o0 = Math.max(r.r + 0.15, o0)),
          (D[0] = a0),
          (D[1] = o0),
          (D[2] = p0),
          (D[3] = G),
          D
        );
      },
      q = [0, 0, 0, 0],
      R = (W) => {
        const D = W * E;
        (L(D, q), A.position.set(q[0], q[1], q[2]));
        const G = q[3];
        (A.rotation.set(
          0,
          0,
          Math.min(G * r.spin, 2.2) + (G > 1.2 ? (G - 1.2) * 0.8 : 0),
        ),
          (A.rotation.x = G * 0.35),
          (o.rotation.z = Math.min(1, D / 0.6) * 0.55),
          (o.position.y = i - Math.min(1, D / 0.6) * 0.6));
      };
    (R(0),
      (_.tank = {
        k: 0,
        dur: E,
        set(W) {
          ((_.tank.k = W = Math.max(0, Math.min(1, W))),
            R(W),
            (V.uni.uK.value = W > 0 ? W * E : -1),
            (I.uni.uK.value = W > 0.02 ? W : 0));
        },
        at: (W, D = [0, 0, 0, 0]) => L(W * E, D),
        object: A,
      }));
    const V = Wt(e, c, 26, 6, 3.5, "city3_tank_blast");
    (V.uni.uC.value.set(1068.5, i - 3, p), w.add(V.mesh));
    const H = [];
    for (let W = 0; W < 160; W++)
      H.push([
        [1067 + s(-1, 3), i - s(0, 6), p + s(-6, 6), c()],
        [s(-14, -2), s(-2, 9), s(-5, 5), s(0.15, 0.6)],
      ]);
    const I = ht(e, H, !1, E, "city3_tank_debris");
    (w.add(I.mesh),
      P.push({ name: "tank", dyn: "tank", sphere: { r: r.r * 1.35 } }),
      M(
        b - r.r,
        i,
        p - r.r,
        b + r.r,
        i + r.legs + r.h * 1.2,
        p + r.r,
        "tank stand",
      ),
      g.push(
        { id: "tank_blast", at: [1068, i - 3, p] },
        { id: "tank_fall", at: F },
        { id: "tank_smash", at: [1038.4, 29.1, -352.6] },
      ));
  }
  {
    const r = M0,
      y = Wt(e, c, 48, 9, 5, "city3_impact_fireball");
    (y.uni.uC.value.set(r.x + 4, r.y, r.z), w.add(y.mesh));
    const b = new l0(),
      p = (z) => z0(S, z);
    (b.box(-0.6, -4, -6, 0.2, 4.5, 6.5, p(C.burnt)),
      Y(b, [0.2, 0.6, 1.2], [6.8, 2.6, 3.4], 0.75, p(C.burnt)),
      Y(b, [6.6, 2.5, 3.3], [7.6, 4.4, 3.8], 0.12, p(C.burnt)),
      Y(b, [6.7, 2.6, 3.2], [7, 1, 5.2], 0.25, p(C.burnt)));
    for (let z = 0; z < 9; z++)
      Y(
        b,
        [0.2, s(-3, 3), s(-5, 5)],
        [s(1.2, 3.5), s(-4, 4), s(-6, 6)],
        s(0.08, 0.3),
        p(C.burnt),
      );
    const i = new s0(b.build(), k);
    ((i.name = "city3_impact_wreck"),
      i.position.set(r.x, r.y, r.z),
      (i.visible = !1),
      w.add(i));
    const t = [];
    for (let z = 0; z < 16; z++)
      t.push({
        p: [r.x + s(0.5, 3), r.y + s(-4, 3), r.z + s(-6, 6)],
        w: s(2.5, 5),
        h: s(4, 9),
        i: s(0.9, 1.3),
        seed: c() * 50,
        lean: s(-0.2, 0.6),
      });
    const u = Z0(e, t, "city3_impact_flames");
    ((u.visible = !1), w.add(u));
    const o = [];
    for (let z = 0; z < 220; z++)
      o.push([
        [r.x + s(0, 3), r.y + s(-3, 3), r.z + s(-5, 5), c()],
        [s(2, 18), s(-3, 10), s(-9, 9), s(0.1, 0.7)],
      ]);
    const l = ht(e, o, !1, 4, "city3_impact_debris");
    w.add(l.mesh);
    const f = d.fires.find((z) => z.kind === "impact");
    ((_.impact = {
      k: 0,
      dur: 8,
      set(z) {
        _.impact.k = z = Math.max(0, Math.min(1, z));
        const A = z * 8;
        ((y.uni.uK.value = z > 0 ? A : -1),
          (l.uni.uK.value = z > 0 ? Math.min(1, A / 4) : 0),
          (i.visible = u.visible = z > 0.01),
          f && (f.I = z > 0 ? 40 + 160 * Math.exp(-A * 1.2) : 0),
          e.uFlash.value.set(
            r.x + 6,
            r.y,
            r.z,
            z > 0 ? 9e3 * Math.exp(-A * 3) : 0,
          ));
      },
    }),
      g.push(
        { id: "heli2_explosion", at: [r.x, r.y, r.z] },
        { id: "impact_fire", at: [r.x, r.y, r.z] },
      ));
  }
  {
    const r = ro,
      y = (R) => z0(S, R),
      b = 12.6,
      p = [];
    for (let R = -632; R > -840; R -= 28) p.push(R);
    (p.push(r.z), p.sort((R, V) => V - R));
    for (const R of [r.xw, r.xe]) {
      let V = null;
      for (const H of p)
        if (!(H < -745 && H > -768)) {
          (Y(v, [R, 0, H], [R, b, H], 0.3, y(C.burnt), !0),
            v.box(
              R - 1.1,
              b - 0.9,
              H - 0.07,
              R + 1.1,
              b - 0.75,
              H + 0.07,
              y(C.burnt),
            ));
          for (const I of [-0.95, 0, 0.95])
            v.box(
              R + I - 0.06,
              b - 0.75,
              H - 0.06,
              R + I + 0.06,
              b - 0.45,
              H + 0.06,
              y(C.metal),
            );
          if (Math.abs(H - r.z) < 1) {
            const I = R + (R < 1256 ? -0.55 : 0.55),
              W = new _0(0.42, 0.42, 1.2, 12);
            (W.translate(I, b - 2.6, H), v.geo(W, y(C.metal)));
          }
          if (V != null)
            for (const I of [-0.95, 0.95])
              L0(
                v,
                [R + I, b - 0.45, V],
                [R + I, b - 0.45, H],
                0.45,
                0.025,
                y(C.dark),
                6,
              );
          (N([R, 0, H], [R, b, H], 0.35, "pole"), (V = H));
        }
    }
    const i = [];
    for (const R of r.ys) {
      for (const V of [0, 1]) {
        const H = new l0(),
          I = V ? [r.xe, R, r.z] : [r.xw, R, r.z],
          W = [1256, R - r.sag, r.z];
        L0(
          H,
          [0, 0, 0],
          [W[0] - I[0], W[1] - I[1], 0],
          r.sag * 0.5,
          0.03,
          y(C.dark),
          6,
        );
        const D = new s0(H.build(), k);
        (D.position.set(I[0], I[1], I[2]),
          (D.name = "city3_wire"),
          w.add(D),
          i.push({ mesh: D, half: V, a: I }));
      }
      N([r.xw, R, r.z], [r.xe, R, r.z], 0.03, "power line");
    }
    const t = Dt(
      e,
      c,
      [
        { p: [1256, r.ys[0] - 0.3, r.z], n: 120, speed: 7, up: 1.5, life: 1.2 },
        { p: [r.xw, b - 0.6, r.z], n: 70, speed: 5, up: 1, life: 1.4 },
        { p: [r.xe, b - 0.6, r.z], n: 70, speed: 5, up: 1, life: 1.4 },
        { p: [r.xe + 0.55, b - 2.6, r.z], n: 90, speed: 8, up: 2, life: 1.6 },
      ],
      "city3_wire_sparks",
    );
    w.add(t.mesh);
    const u = d.fires.find((R) => R.kind === "wires");
    ((_.wires = {
      k: 0,
      dur: 1.6,
      set(R) {
        _.wires.k = R = Math.max(0, Math.min(1, R));
        const V = R * 1.6;
        for (const H of i) {
          const I = R > 0 ? Math.min(1.45, V * 2.6) * (H.half ? -1 : 1) : 0;
          H.mesh.rotation.z =
            -I * (H.half ? -1 : 1) * 0 +
            (H.half ? 1 : -1) * Math.min(1.45, V * 2.6) * (R > 0 ? 1 : 0);
        }
        ((t.uni.uK.value = R > 0 ? V : -1),
          u &&
            (u.I =
              R > 0
                ? 90 * Math.exp(-V * 2.5) * (0.6 + 0.4 * Math.sin(V * 40))
                : 0));
      },
    }),
      g.push(
        { id: "wires_snap", at: [1256, 12, r.z] },
        { id: "transformer_blast", at: [r.xe + 0.55, b - 2.6, r.z] },
      ));
    const o = Jt,
      l = o.x,
      f = o.z,
      z = o.roof,
      A = o.roof + o.h,
      F = [
        [0.7, 0],
        [-0.35, 0.61],
        [-0.35, -0.61],
      ];
    for (const [R, V] of F)
      Y(v, [l + R, z, f + V], [l + R, A, f + V], 0.09, y(C.mast));
    for (let R = z; R < A - 0.5; R += 1.5)
      for (let V = 0; V < 3; V++) {
        const [H, I] = F[V],
          [W, D] = F[(V + 1) % 3];
        Y(v, [l + H, R, f + I], [l + W, R + 1.5, f + D], 0.04, y(C.mast));
      }
    for (const [R, V, H] of [
      [-14, -10, z + o.h * 0.5],
      [-14, 12, z + o.h * 0.5],
      [-16, 2, z + o.h * 0.9],
      [4.2, 22, z + o.h * 0.6],
      [4.5, -24, z + o.h * 0.6],
    ])
      (L0(v, [l, H, f], [l + R, z + 0.3, f + V], 0.25, 0.025, y(C.dark), 8),
        N([l, H, f], [l + R, z + 0.3, f + V], 0.05, "mast guy"));
    (v.box(l - 1.5, z, f - 1.5, l + 1.5, z + 0.4, f + 1.5, y(C.concrete)),
      N([l, z, f], [l, A, f], 0.9, "radio mast"));
    const E = [l + 0.4, o.guyY, f],
      K = o.anchor;
    v.box(
      K[0] - 0.05,
      K[1] - 0.4,
      K[2] - 0.25,
      K[0] + 0.25,
      K[1] + 0.4,
      K[2] + 0.25,
      y(C.iron),
    );
    const L = [];
    for (const R of [0, 1]) {
      const V = new l0(),
        H = R ? K : E,
        I = [(E[0] + K[0]) / 2, (E[1] + K[1]) / 2 - 0.1, (E[2] + K[2]) / 2];
      L0(
        V,
        [0, 0, 0],
        [I[0] - H[0], I[1] - H[1], I[2] - H[2]],
        0.05,
        0.035,
        y(C.dark),
        5,
      );
      const W = new s0(V.build(), k);
      (W.position.set(H[0], H[1], H[2]),
        (W.name = "city3_guy"),
        w.add(W),
        L.push({ mesh: W, half: R }));
    }
    N(E, K, 0.03, "the clip wire");
    const q = Dt(
      e,
      c,
      [
        { p: [1256, 14.6, -701.3], n: 90, speed: 9, up: 1, life: 0.9 },
        { p: K, n: 40, speed: 4, up: 0.5, life: 1 },
      ],
      "city3_clip_sparks",
    );
    (w.add(q.mesh),
      (_.clip = {
        k: 0,
        dur: 1.2,
        set(R) {
          _.clip.k = R = Math.max(0, Math.min(1, R));
          const V = R * 1.2;
          for (const H of L) {
            const I = R > 0 ? Math.min(1.6, V * 3.2) : 0;
            ((H.mesh.rotation.z = (H.half ? 1 : -1) * I * 0.7),
              (H.mesh.rotation.x = (H.half ? -1 : 1) * I * 0.4));
          }
          q.uni.uK.value = R > 0 ? V : -1;
        },
        wire: { a: E, b: K },
      }),
      g.push({ id: "clip_snap", at: [1256, 14.6, -701.3] }));
  }
  {
    const r = [],
      y = (l, f) => {
        let z = 30;
        for (const A of d.blds)
          A.kind !== "prop" &&
            A.kind !== "site" &&
            Math.abs(l - A.x) < A.w / 2 &&
            Math.abs(f - A.z) < A.d / 2 &&
            (z = Math.max(z, A.base + A.h + 1.4));
        return z;
      };
    for (let l = 0; l < 120; l++) {
      const f = s(417, 423),
        z = s(-112, -66),
        A = Math.min(y(f - 1, z) + s(0.2, 1.5), 48),
        F = s(10, 18),
        E = s(-5, 6),
        K = s(1.5, 6);
      r.push([
        [f, A, z, c()],
        [F, K, E, s(14, 22)],
      ]);
    }
    const b = new ot(),
      p = new v0();
    (p.setAttribute(
      "position",
      new e0(
        [
          -1, 0, -0.1, 0, 0, 0.35, 0, 0, -0.3, 1, 0, -0.1, 0, 0, -0.3, 0, 0,
          0.35, 0, -0.05, 0.45, 0, -0.05, -0.55, 0.12, -0.05, -0.05,
        ],
        3,
      ),
    ),
      b.setAttribute("position", p.attributes.position));
    const i = new Float32Array(r.length * 4),
      t = new Float32Array(r.length * 4);
    (r.forEach((l, f) => {
      (i.set(l[0], f * 4), t.set(l[1], f * 4));
    }),
      b.setAttribute("aB", new m0(i, 4)),
      b.setAttribute("aB2", new m0(t, 4)),
      (b.instanceCount = r.length));
    const u = { ...e, uK: { value: 0 } },
      o = new s0(
        b,
        r0({ vertexShader: po, fragmentShader: mo, uniforms: u, side: E0 }),
      );
    ((o.name = "city3_birds"),
      (o.frustumCulled = !1),
      w.add(o),
      (_.birds = {
        k: 0,
        dur: 2.6,
        set(l) {
          ((_.birds.k = l = Math.max(0, Math.min(1, l))), (u.uK.value = l));
        },
      }),
      g.push({ id: "birds_flee", at: [421, 34, -30] }));
  }
  {
    const r = n.blds.glass,
      y = r.z + r.d / 2,
      b = [];
    for (let u = 0; u < 900; u++)
      b.push([
        [s(596, 626), s(58, 78), y + s(0.2, 1.5), c()],
        [s(-2, 4), s(-1, 2.5), s(6.5, 11.5), s(0.25, 0.9)],
      ]);
    const p = ht(e, b, !0, 3.2, "city3_glass_rain");
    w.add(p.mesh);
    const i = [];
    for (let u = 0; u < 14; u++)
      i.push({
        p: [s(574, 618), s(64, 78), y + 1.2],
        w: s(3, 5),
        h: s(5, 9),
        i: s(1, 1.4),
        seed: c() * 50,
        lean: s(0, 0.6),
      });
    const t = Z0(e, i, "city3_glass_flames");
    ((t.visible = !1),
      w.add(t),
      (_.glass = {
        k: 0,
        dur: 3.2,
        set(u) {
          ((_.glass.k = u = Math.max(0, Math.min(1, u))),
            (p.uni.uK.value = u),
            (t.visible = u > 0));
        },
      }),
      g.push(
        { id: "glass_burst", at: [596, 72, y] },
        { id: "glass_shards_rain", at: [596, 40, -225] },
      ));
  }
  {
    const r = I0.col,
      y = [];
    for (let A = 0; A < 260; A++) {
      const F = Math.pow(c(), 1.35) * 150 + 2,
        E = r.x + r.lean * F,
        K = r.z - r.lean * 0.35 * F,
        L = r.r0 + r.k * F,
        q = c() * 6.283,
        R = Math.sqrt(c()) * L * 0.75;
      y.push([
        E + Math.cos(q) * R,
        F,
        K + Math.sin(q) * R,
        L * s(0.55, 0.95),
        c(),
        s(0.35, 0.65) * (F < 70 ? 1 : 0.8),
        s(0.6, 1),
        s(-1, 1),
      ]);
    }
    const b = new ot(),
      p = new et(1, 1);
    ((b.index = p.index), b.setAttribute("position", p.attributes.position));
    const i = new Float32Array(y.length * 4),
      t = new Float32Array(y.length * 4);
    (y
      .sort((A, F) => F[1] - A[1])
      .forEach((A, F) => {
        (i.set(A.slice(0, 4), F * 4), t.set(A.slice(4, 8), F * 4));
      }),
      b.setAttribute("aS", new m0(i, 4)),
      b.setAttribute("aS2", new m0(t, 4)),
      (b.instanceCount = y.length));
    const u = { ...e, uOn: { value: 1 } },
      o = new s0(
        b,
        r0({
          vertexShader: lo,
          fragmentShader: fo,
          uniforms: u,
          transparent: !0,
          depthWrite: !1,
          side: E0,
        }),
      );
    ((o.name = "city3_smoke_column"),
      (o.frustumCulled = !1),
      (o.renderOrder = 4),
      w.add(o));
    const l = [];
    for (let A = 0; A < 14; A++)
      l.push({
        p: [I0.x + s(-6, 6), 0.4, I0.z + s(-3.5, 3.5)],
        w: s(4, 7),
        h: s(7, 14),
        i: s(1, 1.4),
        seed: c() * 50,
        lean: s(0.1, 0.8),
      });
    w.add(Z0(e, l, "city3_tanker_flames"));
    const f = {
        uK: { value: 0 },
        uTime: e.uTime,
        uFire: { value: new X(0.045, 0.012, 0.0025) },
      },
      z = new s0(
        new et(2, 2),
        r0({
          vertexShader: ho,
          fragmentShader: uo,
          uniforms: f,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1,
        }),
      );
    ((z.name = "city3_smoke_veil"),
      (z.frustumCulled = !1),
      (z.renderOrder = 999),
      w.add(z),
      (_.smoke = {
        k: 1,
        set(A) {
          ((_.smoke.k = A), (u.uOn.value = A));
        },
        at: Qt,
        veil: f,
      }),
      g.push({ id: "smoke_rush", at: null }));
  }
  {
    const r = n.heli2Path,
      y = [];
    for (let L = 0; L < r.length - 1; L++) {
      const q = r[L],
        R = r[L + 1];
      for (let V = 0; V < 8; V++) {
        const H = V / 8;
        y.push([
          q[0] + (R[0] - q[0]) * H,
          q[1] + (R[1] - q[1]) * H,
          q[2] + (R[2] - q[2]) * H,
          q[3] + (R[3] - q[3]) * H,
        ]);
      }
    }
    y.push(r[r.length - 1]);
    const b = [],
      p = [],
      i = [],
      t = [];
    y.forEach((L, q) => {
      for (const R of [-1, 1])
        (b.push(0, 0, 0), p.push(L[0], L[1], L[2], L[3]), i.push(R));
      if (q < y.length - 1) {
        const R = q * 2;
        t.push(R, R + 1, R + 2, R + 1, R + 3, R + 2);
      }
    });
    const u = new v0();
    (u.setAttribute("position", new e0(b, 3)),
      u.setAttribute("aP", new e0(p, 4)),
      u.setAttribute("aSide", new e0(i, 1)),
      u.setIndex(t));
    const o = { ...e, uHead: { value: -1 } },
      l = new s0(
        u,
        r0({
          vertexShader: zo,
          fragmentShader: Mo,
          uniforms: o,
          transparent: !0,
          depthWrite: !1,
          side: E0,
        }),
      );
    ((l.name = "city3_heli2_trail"),
      (l.frustumCulled = !1),
      (l.renderOrder = 4),
      w.add(l));
    const f = [];
    for (let L = 0; L < 7; L++)
      f.push({
        p: [s(-1.2, 1.2), s(-0.5, 0.8), s(-2.5, 1.5)],
        w: s(1.6, 2.8),
        h: s(2.5, 4.5),
        i: s(1, 1.4),
        seed: c() * 50,
        lean: s(0.2, 0.9),
      });
    const z = Z0(e, f, "city3_heli2_flames");
    ((z.visible = !1), w.add(z));
    const A = f.map((L) => L.p.slice()),
      F = z.userData.attrs.aF,
      E = { x: 0, y: -999, z: 0, I: 0, kind: "heli2", dyn: !0 };
    d.fires.push(E);
    const K = [0, 0, 0];
    ((_.heli2fx = {
      t: -1,
      set(L, q) {
        _.heli2fx.t = L;
        const R = r[0][3],
          V = r[r.length - 1][3],
          H = L >= R && L < V + 0.05;
        if (
          ((z.visible = H),
          (o.uHead.value = L >= R && L < V + 6 ? Math.min(L, V) : -1),
          !H)
        ) {
          E.I = 0;
          return;
        }
        q(L, K);
        for (let I = 0; I < A.length; I++)
          ((F.array[I * 4] = K[0] + A[I][0]),
            (F.array[I * 4 + 1] = K[1] + A[I][1]),
            (F.array[I * 4 + 2] = K[2] + A[I][2]));
        ((F.needsUpdate = !0),
          (E.x = K[0]),
          (E.y = K[1]),
          (E.z = K[2]),
          (E.I = 70));
      },
    }),
      g.push({ id: "heli2_fall", at: "heli2", loop: !0 }));
  }
  const a = new s0(v.build(), x);
  return (
    (a.name = "city3_sites_static"),
    w.add(a),
    { group: w, props: _, solids: P, sounds: g, mats: [x, k] }
  );
}
