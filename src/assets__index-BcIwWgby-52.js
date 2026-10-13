// assets__index-BcIwWgby 52 — math
// Lines 15603-16133 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Fc(s, o, t, u) {
  const e = new Kt();
  e.name = "forest_yard";
  const r = [],
    a = [],
    p = {
      wall: [],
      coping: [],
      stone: [],
      iron: [],
      wood: [],
      earth: [],
      flag: [],
      angel: [],
    },
    i = (b, P, _, I, R) => r.push({ x0: b, x1: P, z0: _, z1: I, y0: 0, y1: R }),
    d = (b, P, _, I) => {
      const R = Math.abs(_ - b) > Math.abs(I - P),
        V = Math.abs(R ? _ - b : I - P),
        L = St.t,
        K = St.h,
        j = R
          ? Gt(V, K, L, (b + _) / 2, K / 2, P)
          : Gt(L, K, V, b, K / 2, (P + I) / 2);
      p.wall.push(Ct(j));
      const O = R
        ? Gt(V + 0.04, 0.1, L + 0.1, (b + _) / 2, K + 0.05, P)
        : Gt(L + 0.1, 0.1, V + 0.04, b, K + 0.05, (P + I) / 2);
      p.coping.push(Ct(O));
      const J = R
        ? new Pt(L * 0.42, L * 0.42, V, 8, 1)
            .rotateZ(Math.PI / 2)
            .scale(1, 0.45, 1)
            .translate((b + _) / 2, K + 0.1, P)
        : new Pt(L * 0.42, L * 0.42, V, 8, 1)
            .rotateX(Math.PI / 2)
            .scale(1, 0.45, 1)
            .translate(b, K + 0.1, (P + I) / 2);
      (p.coping.push(Ct(J)),
        R
          ? i(Math.min(b, _), Math.max(b, _), P - L / 2, P + L / 2, K + 0.15)
          : i(b - L / 2, b + L / 2, Math.min(P, I), Math.max(P, I), K + 0.15));
    },
    y = 0.62,
    w = U0.x0 - y / 2,
    g = U0.x1 + y / 2;
  (d(St.xW, St.z, w - y / 2, St.z),
    d(g + y / 2, St.z, St.xE, St.z),
    d(St.xW, r0.z1 - 0.3, St.xW, St.z),
    d(St.xE, r0.z1 - 0.3, St.xE, St.z),
    d(St.xW, r0.z1, r0.x0 + 0.05, r0.z1),
    d(r0.x1 - 0.05, r0.z1, St.xE, r0.z1));
  for (const b of [w, g])
    (p.wall.push(Ct(Gt(y, 1.95, y, b, 0.975, St.z))),
      p.coping.push(Ct(Gt(y + 0.12, 0.1, y + 0.12, b, 2, St.z))),
      p.coping.push(
        Ct(new no(0.42, 0.22, 4).rotateY(Math.PI / 4).translate(b, 2.16, St.z)),
      ),
      p.coping.push(Ct(new t0(0.13, 12, 8).translate(b, 2.36, St.z))),
      i(b - y / 2, b + y / 2, St.z - y / 2, St.z + y / 2, 2.4));
  {
    const b = (U0.x1 - U0.x0) / 2,
      P = 1.55,
      _ = (I, R, V) => {
        const L = [];
        for (let st = 0; st < 7; st++) {
          const G = 0.06 + (st / 6) * (b - 0.12);
          (L.push(new Pt(0.011, 0.011, P, 6).translate(G, P / 2 + 0.06, 0)),
            L.push(new no(0.025, 0.09, 6).translate(G, P + 0.1, 0)));
        }
        for (const st of [0.18, 0.95, P - 0.05])
          L.push(new qt(b, 0.035, 0.03).translate(b / 2, st, 0));
        L.push(new qt(0.045, P + 0.05, 0.045).translate(0.02, P / 2 + 0.05, 0));
        const j = [];
        for (let st = 0; st <= 24; st++) {
          const G = st / 24;
          j.push(at(b * G, 1.1 + Math.abs(Math.sin(G * Math.PI * 3)) * 0.2, 0));
        }
        L.push(Vt(j, () => 0.009, 4));
        const O = a0(L.map((st) => d0(st)));
        (O.rotateY(R > 0 ? -V : Math.PI + V),
          O.translate(I, 0, St.z + 0.02),
          p.iron.push(O));
        const J = I + Math.cos(R > 0 ? -V : Math.PI + V) * b,
          tt = St.z + Math.sin(V) * b;
        i(
          Math.min(I, J) - 0.03,
          Math.max(I, J) + 0.03,
          St.z + 0.02,
          Math.max(St.z + 0.1, tt) + 0.03,
          P,
        );
      };
    (_(U0.x0 + 0.02, 1, 2.72), _(U0.x1 - 0.02, -1, 2.5));
  }
  const z = [];
  for (let b = 0; b < o.yardPath.n; b += 3) {
    const P = o.yardPath.x[b],
      _ = o.yardPath.z[b];
    for (const I of [-0.42, 0.42])
      z.push([
        P - o.yardPath.tz[b] * I + (t() - 0.5) * 0.12,
        _ + o.yardPath.tx[b] * I + (t() - 0.5) * 0.12,
      ]);
  }
  const x = [];
  for (const [b, P] of z)
    x.some((_) => Math.hypot(_[0] - b, _[1] - P) < 0.62) || x.push([b, P]);
  for (const [b, P] of x) {
    if (P > St.z - 0.35 || P < r0.z1 + 0.25) continue;
    const _ = new he(),
      I = 5 + Math.floor(t() * 3),
      R = 0.3 + t() * 0.08;
    for (let L = 0; L < I; L++) {
      const K = (L / I) * vo + t() * 0.4,
        j = R * (0.8 + t() * 0.3);
      L
        ? _.lineTo(Math.cos(K) * j, Math.sin(K) * j)
        : _.moveTo(Math.cos(K) * j, Math.sin(K) * j);
    }
    const V = new te(_, {
      depth: 0.07,
      bevelEnabled: !0,
      bevelThickness: 0.012,
      bevelSize: 0.015,
      bevelSegments: 1,
    });
    (V.rotateX(-Math.PI / 2),
      V.rotateY(t() * vo),
      V.translate(b, -0.045 + t() * 0.025, P),
      p.flag.push(Ct(V)));
  }
  const v = [],
    n = (b, P, _) => {
      if (
        b < St.xW + 0.9 + _ ||
        b > St.xE - 0.9 - _ ||
        P < r0.z1 + 1.8 + _ ||
        P > St.z - 0.9 - _
      )
        return !1;
      let I = 1e9;
      for (let R = 0; R < le.length - 1; R++)
        I = Math.min(
          I,
          fe(b, P, le[R][0], le[R][1], le[R + 1][0], le[R + 1][1]),
        );
      if (
        I < 1.35 + _ ||
        Math.hypot(b - U0.x, P - St.z) < 2.6 ||
        Math.hypot(b - r0.back.x0 - 0.65, P - r0.z1) < 2.6 ||
        fe(
          b,
          P,
          Y0.x - Math.sin(Y0.yaw) * 1.3,
          Y0.z - Math.cos(Y0.yaw) * 1.3,
          U0.x,
          St.z,
        ) <
          1.25 + _ + 0.4
      )
        return !1;
      for (const R of v)
        if (Math.hypot(R.x - b, R.z - P) < R.r + _ + 0.55) return !1;
      return !0;
    },
    l = (b, P, _, I, R = {}) => v.push({ kind: b, x: P, z: _, yaw: I, ...R });
  (v.push({ kind: "yew", x: ie.x, z: ie.z, r: 1.6 }),
    v.push({ kind: "angel", x: b0.x, z: b0.z, r: 0.75 }),
    [
      [6.3, 66.2],
      [6.3, 68.6],
      [6.3, 71],
      [6.3, 73.4],
    ].forEach(([b, P], _) =>
      v.push({ kind: "fresh", x: b, z: P, r: 1, yaw: Math.PI / 2, i: _ }),
    ));
  const h = [
    "round",
    "round",
    "gothic",
    "shoulder",
    "round",
    "celtic",
    "iron",
    "table",
    "shoulder",
    "gothic",
    "kerb",
    "round",
    "obelisk",
  ];
  let c = 0;
  for (let b = 0; b < 900 && c < 30; b++) {
    const P = Math.floor(t() * 10),
      _ = -7.2 + P * 1.55 + (t() - 0.5) * 0.4,
      I = r0.z1 + 2.2 + t() * 12.2;
    let R = h[Math.floor(t() * h.length)];
    (R === "obelisk" && v.some((L) => L.kind === "obelisk") && (R = "round"),
      R === "table" &&
        v.filter((L) => L.kind === "table").length >= 2 &&
        (R = "gothic"));
    const V =
      R === "table" ? 1.1 : R === "kerb" ? 1 : R === "obelisk" ? 0.6 : 0.5;
    n(_, I, V) &&
      (l(R, _, I, Math.PI / 2 + (t() - 0.5) * 0.25, {
        r: V,
        lean: (t() - 0.5) * 0.22,
        tip: (t() - 0.5) * 0.12,
        sink: t() * 0.08,
        s: 0.85 + t() * 0.35,
      }),
      c++);
  }
  for (const b of v) {
    const P = new wt().compose(
        at(b.x, 0, b.z),
        new w0().setFromEuler(
          new pe(b.tip || 0, b.yaw || 0, b.lean || 0, "YXZ"),
        ),
        at(1, 1, 1),
      ),
      _ = (R, V) => {
        V.push(Ct(R.applyMatrix4(P)));
      },
      I = b.s || 1;
    if (["round", "gothic", "shoulder"].includes(b.kind)) {
      const R = (0.48 + t() * 0.3) * I,
        V = (0.62 + t() * 0.45) * I,
        L = 0.1 + t() * 0.05,
        K = Ic(b.kind, R, V, L);
      (K.translate(0, -0.12 - (b.sink || 0), 0),
        t() < 0.07 &&
          (K.rotateX(-Math.PI / 2 + 0.05), K.translate(0, 0.03, V * 0.5)),
        _(K, p.stone),
        i(b.x - 0.32 * I, b.x + 0.32 * I, b.z - 0.32 * I, b.z + 0.32 * I, V));
    } else if (b.kind === "celtic") {
      const R = 1.25 + t() * 0.35;
      (_(_c(R), p.stone), i(b.x - 0.3, b.x + 0.3, b.z - 0.3, b.z + 0.3, R));
    } else if (b.kind === "iron") {
      const R = 0.95 + t() * 0.2,
        V = [
          Gt(0.035, R, 0.035, 0, R / 2, 0),
          Gt(0.46, 0.035, 0.035, 0, R * 0.72, 0),
          new s0(0.08, 0.008, 4, 14).translate(0, R * 0.72, 0),
        ],
        L = a0(V.map((K) => d0(K)));
      (L.applyMatrix4(P), p.iron.push(L), a.push({ x: b.x, z: b.z, r: 0.12 }));
    } else if (b.kind === "table") {
      const K = [
        Gt(0.85, 0.75, 1.9, 0, 0.375, 0),
        Gt(0.99, 0.1, 2.04, 0, 0.8, 0),
        Gt(0.9099999999999999, 0.08, 1.96, 0, 0.04, 0),
      ];
      _(a0(K.map((J) => d0(J))), p.stone);
      const j =
          (Math.abs(Math.cos(b.yaw)) * 1.9) / 2 +
          (Math.abs(Math.sin(b.yaw)) * 0.85) / 2 +
          0.08,
        O =
          (Math.abs(Math.sin(b.yaw)) * 1.9) / 2 +
          (Math.abs(Math.cos(b.yaw)) * 0.85) / 2 +
          0.08;
      i(b.x - j, b.x + j, b.z - O, b.z + O, 0.75 + 0.1);
    } else if (b.kind === "kerb") {
      const L = [
        Gt(0.1, 0.16, 1.9, -0.4, 0.06, 0),
        Gt(0.1, 0.16, 1.9, 0.4, 0.06, 0),
        Gt(0.9, 0.16, 0.1, 0, 0.06, -0.95),
        Gt(0.9, 0.16, 0.1, 0, 0.06, 0.95),
        Gt(0.5, 0.6, 0.1, 0, 0.28, -0.97),
      ];
      (_(a0(L.map((K) => d0(K))), p.stone),
        i(b.x - 0.35, b.x + 0.35, b.z - 0.35, b.z + 0.35, 0.6));
    } else if (b.kind === "obelisk") {
      const R = [
        Gt(0.7, 0.4, 0.7, 0, 0.2, 0),
        Gt(0.52, 0.5, 0.52, 0, 0.65, 0),
        new Pt(0.14, 0.2, 1.7, 4).rotateY(Math.PI / 4).translate(0, 1.75, 0),
        new no(0.14, 0.22, 4).rotateY(Math.PI / 4).translate(0, 2.71, 0),
      ];
      (_(a0(R.map((V) => d0(V))), p.stone),
        i(b.x - 0.38, b.x + 0.38, b.z - 0.38, b.z + 0.38, 2.8));
    } else if (b.kind === "fresh") {
      const R = new t0(1, 14, 8, 0, vo, 0, Math.PI / 2).scale(0.55, 0.28, 1.05);
      {
        const O = R.attributes.position;
        for (let J = 0; J < O.count; J++)
          O.setY(J, O.getY(J) + It(O.getX(J) * 7 + b.i, O.getZ(J) * 7) * 0.03);
        R.computeVertexNormals();
      }
      (R.translate(b.x, -0.02, b.z), p.earth.push(Ct(R)));
      const V = b.x,
        L = b.z - 1.2,
        K = (t() - 0.5) * 0.12,
        j = a0(
          [
            Gt(0.07, 0.95, 0.05, 0, 0.47, 0),
            Gt(0.45, 0.06, 0.05, 0, 0.72, 0),
          ].map((O) => d0(O)),
        );
      if (
        (j.rotateZ(K), j.translate(V, -0.05, L), p.wood.push(Ct(j)), b.i === 3)
      ) {
        const O = a0(
          [
            Gt(0.035, 0.85, 0.035, 0, 0.62, 0),
            Gt(0.16, 0.035, 0.03, 0, 1.03, 0),
            Gt(0.18, 0.26, 0.012, 0, 0.1, 0),
          ].map((J) => d0(J)),
        );
        (O.rotateZ(0.22),
          O.rotateY(0.6),
          O.translate(b.x + 0.25, 0.02, b.z + 0.55),
          p.iron.push(O));
      }
      i(b.x - 0.5, b.x + 0.5, b.z - 1.3, b.z + 1, 0.95);
    }
  }
  {
    const b = a0(
        [
          Gt(0.95, 0.18, 0.95, 0, 0.09, 0),
          Gt(0.78, 0.8, 0.78, 0, 0.58, 0),
          Gt(0.9, 0.12, 0.9, 0, 1.04, 0),
        ].map((I) => d0(I)),
      ),
      P = new wt().compose(
        at(b0.x, 0, b0.z),
        new w0().setFromAxisAngle(at(0, 1, 0), b0.yaw),
        at(1, 1, 1),
      );
    p.stone.push(Ct(b.applyMatrix4(P)));
    const _ = Cc();
    (_.applyMatrix4(
      new wt().compose(
        at(b0.x, 1.1, b0.z),
        new w0().setFromAxisAngle(at(0, 1, 0), b0.yaw),
        at(1.02, 1.02, 1.02),
      ),
    ),
      p.angel.push(Ct(_)),
      i(b0.x - 0.52, b0.x + 0.52, b0.z - 0.52, b0.z + 0.52, 2.8));
  }
  const M = [],
    m = new Ks();
  {
    for (let V = 0; V < 4; V++) {
      const L = (V / 4) * vo + t() * 0.5,
        K = [];
      for (let J = 0; J <= 6; J++) {
        const tt = J / 6;
        K.push(
          at(
            ie.x + Math.cos(L) * (0.35 + tt * 1.6 * (0.7 + t() * 0.3)),
            -0.2 + tt * 6.2,
            ie.z + Math.sin(L) * (0.35 + tt * 1.6),
          ),
        );
      }
      const j = Vt(K, (J) => 0.42 - J * 0.3, 10),
        O = new Float32Array(j.attributes.position.count * 3).fill(0.4);
      (j.setAttribute("aK", new vt(O, 3)), M.push(j));
    }
    const [P, _, I, R] = Ao(Bt.yew);
    for (let V = 0; V < 900; V++) {
      const L = t() * vo,
        K = Math.acos(Math.pow(t(), 0.6)),
        j = 4.2 * (0.85 + 0.15 * It(L * 2, K * 3)),
        O = j * (0.8 + 0.25 * t()),
        J = Math.cos(L) * Math.sin(K),
        tt = Math.cos(K),
        st = Math.sin(L) * Math.sin(K),
        G = ie.x + J * O,
        q = 3.2 + tt * O * 1.25,
        U = ie.z + st * O * 0.95;
      if (q < 1.4) continue;
      const Z = 1 + t() * 0.7,
        ot = Math.hypot(J, st) || 1,
        $ = -st / ot,
        C = J / ot,
        T = (t() - 0.5) * 1.2,
        D = tt * C * 1,
        N = st * $ - J * C,
        H = -tt * $,
        Q = Math.cos(T),
        W = Math.sin(T),
        B = $ * Q + D * W,
        F = N * W,
        E = C * Q + H * W,
        Y = -$ * W + D * Q,
        et = N * Q,
        nt = -C * W + H * Q,
        it = 0.4 + t() * 0.25,
        lt = m.n,
        ht = Math.hypot(J, tt + 0.3, st);
      for (const [yt, Ft, Ut, Lt] of [
        [-1, -1, P, _],
        [1, -1, I, _],
        [1, 1, I, R],
        [-1, 1, P, R],
      ])
        m.v(
          G + ((B * yt + Y * Ft) * Z) / 2,
          q + ((F * yt + et * Ft) * Z) / 2,
          U + ((E * yt + nt * Ft) * Z) / 2,
          J / ht,
          (tt + 0.3) / ht,
          st / ht,
          Ut,
          Lt,
          it,
          it,
          it,
          0.1,
        );
      m.I.push(lt, lt + 1, lt + 2, lt, lt + 2, lt + 3);
    }
    a.push({ x: ie.x, z: ie.z, r: 1.15, tree: !0 });
  }
  const k = new Ks();
  {
    const [b, P, _, I] = Ao(Bt.grass);
    for (let R = 0; R < 3400; R++) {
      const V = St.xW + 0.35 + t() * (St.xE - St.xW - 0.7),
        L = r0.z1 + 0.35 + t() * (St.z - r0.z1 - 0.7);
      let K = 1e9;
      for (let tt = 0; tt < le.length - 1; tt++)
        K = Math.min(
          K,
          fe(V, L, le[tt][0], le[tt][1], le[tt + 1][0], le[tt + 1][1]),
        );
      if ((K < 0.78 && t() < 0.9) || Math.hypot(V - ie.x, L - ie.z) < 1.2)
        continue;
      const j =
          (K < 0.8 ? 0.15 : 0.3) +
          t() * 0.38 +
          (Math.abs(V) > 7.4 || L > 75.6 ? 0.2 : 0),
        O = t() * Math.PI,
        J = 0.55 + t() * 0.45;
      for (let tt = 0; tt < 2; tt++) {
        const st = O + (tt * Math.PI) / 2,
          G = Math.cos(st) * j * 0.55,
          q = Math.sin(st) * j * 0.55,
          U = k.n,
          Z = (t() - 0.5) * 0.15;
        (k.v(V - G, -0.03, L - q, 0, 1, 0, b, P, J * 0.45, J * 0.5, J * 0.4, 0),
          k.v(
            V + G,
            -0.03,
            L + q,
            0,
            1,
            0,
            _,
            P,
            J * 0.45,
            J * 0.5,
            J * 0.4,
            0,
          ),
          k.v(V + G + Z, j, L + q, 0, 1, 0, _, I, J, J, J * 0.9, 1),
          k.v(V - G + Z, j, L - q, 0, 1, 0, b, I, J, J, J * 0.9, 1),
          k.I.push(U, U + 1, U + 2, U, U + 2, U + 3));
      }
    }
  }
  const S = (b, P) =>
      i0(P, b, (_) => {
        const I = At("garden_moss");
        ((_.uniforms.tMoss = { value: I.map }),
          (_.vertexShader = _.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vSN;`,
            )
            .replace(
              "#include <uv_vertex>",
              `#include <uv_vertex>
vSN = normalize(mat3(modelMatrix) * normal);`,
            )),
          (_.fragmentShader = _.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
uniform sampler2D tMoss;
varying vec3 vSN;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      {
        float mk = smoothstep(0.45, 0.85, vSN.y + (texture2D(tMoss, vMapUv * 0.6).g - 0.15) * 1.6) + smoothstep(0.35, 0.0, vFW.y) * 0.5;
        diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(tMoss, vMapUv * 1.3).rgb, clamp(mk, 0.0, 1.0) * 0.85);
      }`,
            )));
      }),
    A = {
      wall: S("ywall", At("forest_wall")),
      coping: S("ycoping", At("forest_stone")),
      stone: S("ystone", At("forest_stone")),
      angel: S("yangel", At("forest_stone")),
      iron: i0(At("rust_metal"), "yiron"),
      wood: i0(At("boards_barricade"), "ywood"),
      earth: i0(At("forest_path"), "yearth"),
      flag: S("yflag", At("forest_stone")),
    };
  for (const b of Object.keys(p)) {
    if (!p[b].length) continue;
    const P = new bt(
      a0(p[b].map((_) => d0(_, ["position", "normal", "uv"]))),
      A[b],
    );
    ((P.name = "yard_" + b),
      (P.castShadow = b !== "flag" && b !== "earth"),
      (P.receiveShadow = !0),
      e.add(P));
  }
  return {
    group: e,
    colliders: r,
    circles: a,
    yewParts: M,
    yewLeaves: m,
    grass: k,
    angel: b0,
    yew: ie,
    graves: v,
  };
}
