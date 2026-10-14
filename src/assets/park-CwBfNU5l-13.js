// assets/park-CwBfNU5l 13 — math
// Lines 3561-4791 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function ao(e, a, t, r) {
  const o = we(e),
    n = xe(),
    i = Me(),
    f = new P0();
  f.name = "park_furniture";
  const w = [],
    s = [],
    l = [],
    u = [],
    c = [],
    M = (x, p, g, T, G = 1.2, Z = 0, tt = {}) =>
      w.push({ x0: x, x1: p, z0: g, z1: T, y0: Z, y1: G, ...tt }),
    h = (x, p, g, T, G, Z = 1.2) => {
      const tt = Math.abs(Math.cos(G)),
        it = Math.abs(Math.sin(G)),
        et = tt * g + it * T,
        at = it * g + tt * T;
      M(x - et, x + et, p - at, p + at, Z);
    },
    v = (x, p, g, T) => {
      for (const G of He(p, g)) t.add(x, G, T);
    },
    S = Ba(),
    d = [],
    y = (x, p, g = !1, T = {}) => {
      d.push({
        x,
        z: p,
        lit: g,
        dying: !!T.dying,
        yaw: T.yaw ?? a() * f0,
        lean: T.lean ?? 0,
      });
    },
    m = (x, p, g, T = 6, G = 1e9, Z = 0) => {
      const tt = be.find((et) => et.id === x);
      let it = Z ? -1 : 1;
      for (let et = T; et < Math.min(tt.length - 4, G); et += p) {
        const at = re(x, et),
          nt = at.x - at.tz * it * (at.hw + g),
          mt = at.z + at.tx * it * (at.hw + g);
        ((it = -it),
          !(G0(nt, mt) < 2.2) &&
            (d.some((Mt) => Math.hypot(Mt.x - nt, Mt.z - mt) < 9) ||
              ve(nt, mt) ||
              (nt > R0.x0 - 1 && nt < R0.x1 + 1 && mt > 195) ||
              y(nt, mt)));
      }
    };
  (y(439.6, 188.4, !0),
    y(420.4, 188.6, !1),
    y(434.4, 180.2, !0),
    y(427.6, 171, !1),
    y(436.4, 165.4, !1));
  for (const [x, p] of [
    [45, !1],
    [135, !1],
    [-42, !0],
    [-135, !1],
  ]) {
    const g = (x * Math.PI) / 180;
    y(c0.x + Math.cos(g) * 13.4, c0.z + Math.sin(g) * 13.4, p);
  }
  (y(445.4, 134.8, !1),
    y(438.2, 127.8, !0),
    y(406.6, 147.8, !0),
    y(418.6, 183.4, !1, { dying: !0 }),
    y(415.8, 120.6, !0),
    y(470, 152.2, !0),
    y(384, 154.2, !1),
    y(455.4, 186.4, !1),
    y(398.2, 193.4, !0),
    m("crossW", 24, 0.7, 6),
    m("crossE", 24, 0.7, 14, 1e9, 1),
    m("swPath", 24, 0.7, 30),
    m("sePath", 24, 0.7, 26),
    m("diagNW", 26, 0.7, 30),
    m("north", 26, 0.7, 8),
    m("east", 26, 0.7, 26),
    m("statueW", 24, 0.7, 14));
  const F = new u0({
      color: 1313798,
      emissive: new Vt(1, 0.52, 0.16),
      emissiveIntensity: 5.5,
      roughness: 0.25,
      fog: !1,
    }),
    C = new Float32Array(64).fill(1);
  ((F.onBeforeCompile = (x) => {
    ((x.uniforms.uLampK = { value: C }),
      (x.vertexShader = x.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute float aLamp;
varying float vLamp;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vLamp = aLamp;`,
        )),
      (x.fragmentShader = x.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uLampK[64];
varying float vLamp;`,
        )
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
totalEmissiveRadiance *= uLampK[int(vLamp + 0.5)];`,
        )));
  }),
    (F.customProgramCacheKey = () => "park3_lampglass"));
  const L = [],
    z = [],
    W = new Vt(1, 0.56, 0.2);
  let D = 0;
  for (const x of d) {
    const p = Yt(x.x, 0, x.z, x.yaw, x.lean, 0),
      g = i0(x.x, x.z);
    if ((v(o.iron, S.iron, p, g), x.lit || x.dying)) {
      const T = D++;
      x.chan = T;
      for (const tt of [...S.glass, S.bulb]) {
        const it = tt.clone().applyMatrix4(p);
        (it.setAttribute(
          "aLamp",
          new $t(new Float32Array(it.attributes.position.count).fill(T), 1),
        ),
          N(it),
          L.push(it));
      }
      const G = new a0(0, S.glassY, 0).applyMatrix4(p);
      ((x.glow = r.add(
        [G.x, G.y, G.z],
        W.clone().multiplyScalar(1.1),
        1.7,
        1 + T,
      )),
        (x.pos = G));
      const Z = x.dying
        ? (tt) => {
            const it = (tt * 0.11) % 1;
            return it < 0.62
              ? 1
              : it < 0.7
                ? 1 - ((it - 0.62) / 0.08) * 0.92
                : it < 0.9
                  ? 0.08 + 0.04 * Math.sin(tt * 9)
                  : Math.min(1, 0.08 + ((it - 0.9) / 0.1) * 1.6) *
                    (0.75 + 0.25 * Math.sin(tt * 40));
          }
        : () => 1;
      ((x.k = Z),
        l.push({
          pos: G.clone().add(I(0, -0.1, 0)),
          color: new Vt(1, 0.6, 0.26),
          cd: 58,
          range: 13,
          k: (tt) => C[T] * (x.on === !1 ? 0 : 1),
          air: 1.6,
          airK: 1,
          kind: "lamp",
          lamp: x,
        }),
        u.push([x.x, x.z, 0.9, 0.6]));
    } else for (const T of S.glass) z.push(N(T.clone().applyMatrix4(p)));
    s.push({ x: x.x, z: x.z, r: 0.2, lamp: !0 });
  }
  if (L.length) {
    const x = new jt(v0(L), F);
    ((x.name = "park_lamps_lit"), (x.castShadow = !1), f.add(x));
  }
  if (z.length) for (const x of z) t.add(o.glassDead, x, "all");
  c.push((x, p) => {
    for (const g of d)
      if (g.chan != null) {
        const T = g.on === !1 ? 0 : g.k(p);
        ((C[g.chan] = T), (r.K[1 + g.chan] = T));
      }
  });
  const V = to(),
    A = eo(),
    K = [],
    J = (x, p, g, T = {}) => {
      K.push({ x, z: p, yaw: g, ...T });
    },
    q = (x, p, g, T = 1.25, G = {}) => {
      const Z = re(x, p),
        tt = -Z.tz * g,
        it = Z.tx * g,
        et = Z.x + tt * (Z.hw + T),
        at = Z.z + it * (Z.hw + T);
      J(et, at, Math.atan2(-tt, -it), G);
    };
  (q("avenue", 8.5, -1),
    q("avenue", 18.5, 1, 1.25, { bin: !0 }),
    q("avenue", 28.5, -1, 1.25, { fallen: !0 }));
  for (const x of [20, 70, 110, 160, 200, 250, 290, 340]) {
    if (x === 340 || x === 20) continue;
    const p = (x * Math.PI) / 180,
      g = 11.4,
      T = c0.x + Math.cos(p) * g,
      G = c0.z + Math.sin(p) * g;
    G0(T, G) < 2.5 ||
      J(T, G, Math.atan2(c0.x - T, c0.z - G), { bin: x === 160 });
  }
  (q("avenueN", 6, 1, 0.5),
    q("crossW", 30, -1, 1.2, { bin: !0 }),
    q("crossW", 54, 1),
    q("crossE", 24, 1, 1.2, { bin: !0 }),
    q("crossE", 52, -1, 1.2, { fallen: !0 }),
    q("swPath", 18, -1, 1.2, { bin: !0 }),
    q("swPath", 44, 1),
    q("sePath", 22, 1, 1.2, { bin: !0 }),
    q("sePath", 50, -1),
    q("sePath", 74, 1),
    q("diagNW", 40, 1),
    q("diagNW", 70, -1, 1.2, { bin: !0 }),
    q("statueW", 30, 1),
    q("north", 50, 1),
    q("east", 50, -1),
    J(415.6, 172, -Math.PI / 2, { bin: !0 }),
    J(415.6, 179, -Math.PI / 2),
    J(Z0.x0 + 2, (Z0.z0 + Z0.z1) / 2, Math.PI / 2),
    J((F0.x0 + F0.x1) / 2, F0.z0 + 2, 0),
    J((F0.x0 + F0.x1) / 2, F0.z1 - 2, Math.PI));
  for (const x of K) {
    if (G0(x.x, x.z) < 2) continue;
    const p = i0(x.x, x.z),
      g = x.fallen
        ? Yt(x.x, 0.32, x.z, x.yaw + 0.2, -Math.PI / 2 + 0.05, 0.08).multiply(
            new gt().makeTranslation(0, 0, -0.1),
          )
        : Yt(x.x, 0, x.z, x.yaw);
    if (
      (v(o.iron, V.iron, g, p),
      v(o.wood, V.wood, g, p),
      h(x.x, x.z, 0.95, 0.35, x.yaw, x.fallen ? 0.6 : 0.9),
      u.push([
        x.x + Math.sin(x.yaw) * 0.8,
        x.z + Math.cos(x.yaw) * 0.8,
        1.3,
        0.75,
      ]),
      x.bin)
    ) {
      const G = x.x + Math.cos(x.yaw) * 1.35,
        Z = x.z - Math.sin(x.yaw) * 1.35,
        tt = a() < 0.35,
        it = tt
          ? Yt(G, 0.22, Z, a() * f0, Math.PI / 2, 0)
          : Yt(G, 0, Z, a() * f0);
      (v(o.iron, A.iron, it, p),
        v(o.rubber, A.dark, it, p),
        tt || s.push({ x: G, z: Z, r: 0.26, bin: !0 }));
      for (let et = 0; et < (tt ? 7 : 2); et++) {
        const at = a() * f0,
          nt = 0.3 + a() * (tt ? 1.6 : 0.6);
        st(G + Math.cos(at) * nt, Z + Math.sin(at) * nt, p);
      }
    }
  }
  function st(x, p, g, T = 0.21 + a() * 0.08) {
    const G = new _t(T, T * 1.3)
      .rotateX(-Math.PI / 2 + (a() - 0.5) * 0.25)
      .rotateY(a() * f0);
    Zt(G, n.rect["paper" + Math.floor(a() * 8)]);
    const Z = G.attributes.position;
    for (let tt = 0; tt < Z.count; tt++)
      Z.setY(
        tt,
        Z.getY(tt) + 0.012 + Math.abs(Z.getX(tt) * Z.getZ(tt)) * 1.5 * a(),
      );
    t.add(o.paper, G.translate(x, 0.004, p), g);
  }
  {
    const x = Jt,
      p = [],
      g = (P, $, lt) => P.push([$, lt]),
      T = [],
      G = [],
      Z = [],
      tt = [];
    (g(T, x.x0, R0.x0 - 0.45),
      g(T, R0.x1 + 0.45, Nt.breach[0] - 2.4),
      g(T, Nt.breach[0] + 2.4, x.x1));
    const it = _a,
      et = (P, $, lt) => {
        const ft = [];
        let Pt = P;
        for (const Wt of lt.sort((Dt, e0) => Dt.at - e0.at))
          (ft.push([Pt, Wt.at - Wt.w / 2]), (Pt = Wt.at + Wt.w / 2));
        return (ft.push([Pt, $]), ft);
      };
    (G.push(
      ...et(
        x.x0,
        x.x1,
        it.filter((P) => P.axis === "z").map((P) => ({ at: P.x, w: P.w })),
      ),
    ),
      Z.push(
        ...et(
          x.z0,
          x.z1,
          it
            .filter((P) => P.axis === "x" && P.x === x.x0)
            .map((P) => ({ at: P.z, w: P.w })),
        ),
      ),
      tt.push(
        ...et(
          x.z0,
          x.z1,
          it
            .filter((P) => P.axis === "x" && P.x === x.x1)
            .map((P) => ({ at: P.z, w: P.w })),
        ),
      ));
    for (const [P, $] of T) p.push({ x0: P, z0: x.z1, x1: $, z1: x.z1 });
    for (const [P, $] of G) p.push({ x0: P, z0: x.z0, x1: $, z1: x.z0 });
    for (const [P, $] of Z) p.push({ x0: x.x0, z0: P, x1: x.x0, z1: $ });
    for (const [P, $] of tt) p.push({ x0: x.x1, z0: P, x1: x.x1, z1: $ });
    const at = v0(
        [
          new It(0.012, 0.012, 1.42, 4, 1, !0)
            .rotateY(Math.PI / 4)
            .translate(0, 0.32 + 0.71, 0),
          new he(0.03, 0.12, 3).translate(0, 1.74 + 0.06, 0),
        ].map(
          (P) => (
            P.deleteAttribute("uv"),
            P.setAttribute(
              "uv",
              new $t(new Float32Array(P.attributes.position.count * 2), 2),
            ),
            P
          ),
        ),
      ),
      nt = [];
    for (const P of p) {
      const $ = Math.hypot(P.x1 - P.x0, P.z1 - P.z0);
      if ($ < 0.3) continue;
      const lt = (P.x1 - P.x0) / $,
        ft = (P.z1 - P.z0) / $,
        Pt = Math.floor($ / 0.125);
      for (let O = 1; O < Pt; O++)
        nt.push([P.x0 + lt * O * 0.125, P.z0 + ft * O * 0.125]);
      const Wt = (P.x0 + P.x1) / 2,
        Dt = (P.z0 + P.z1) / 2,
        e0 = Math.atan2(ft, lt),
        n0 = i0(Wt, Dt);
      (t.add(
        o.stone,
        N(new xt($, 0.32, 0.4).rotateY(-e0).translate(Wt, 0.16, Dt)),
        n0,
      ),
        t.add(
          o.stone,
          N(new xt($, 0.05, 0.48).rotateY(-e0).translate(Wt, 0.345, Dt)),
          n0,
        ));
      for (const O of [0.5, 1.58])
        t.add(
          o.iron,
          N(new xt($, 0.045, 0.014).rotateY(-e0).translate(Wt, O, Dt)),
          n0,
        );
      const s0 = Math.max(1, Math.round($ / 22));
      for (let O = 0; O <= s0; O++) {
        const ht = O / s0,
          U = P.x0 + (P.x1 - P.x0) * ht,
          vt = P.z0 + (P.z1 - P.z0) * ht;
        for (const ct of [
          new xt(0.56, 1.9, 0.56).translate(U, 0.95, vt),
          new xt(0.68, 0.12, 0.68).translate(U, 1.96, vt),
          new xt(0.42, 0.14, 0.42).translate(U, 2.08, vt),
        ])
          t.add(o.stone, N(ct), i0(U, vt));
      }
      const k = 0.22;
      M(
        Math.min(P.x0, P.x1) - k,
        Math.max(P.x0, P.x1) + k,
        Math.min(P.z0, P.z1) - k,
        Math.max(P.z0, P.z1) + k,
        1.9,
        0,
        { rail: !0 },
      );
    }
    const mt = new U0(at, o.iron, nt.length);
    mt.name = "park_railing_bars";
    const Mt = new gt(),
      Ft = new C0(),
      wt = new a0(1, 1, 1),
      Et = new a0();
    (nt.forEach(([P, $], lt) => {
      const ft = a() < 0.03 ? (a() - 0.5) * 0.12 : 0;
      (Ft.setFromEuler(new q0(ft, a() * 0.4, ft * 0.6)),
        mt.setMatrixAt(lt, Mt.compose(Et.set(P, 0, $), Ft, wt)));
    }),
      (mt.castShadow = !1),
      (mt.receiveShadow = !0),
      (mt.frustumCulled = !1),
      f.add(mt));
    for (const P of it) {
      const $ = P.axis === "z";
      for (const lt of [-1, 1]) {
        const ft = $ ? P.x + lt * (P.w / 2 + 0.38) : P.x,
          Pt = $ ? P.z : P.z + lt * (P.w / 2 + 0.38);
        for (const Rt of [
          new xt(0.76, 2.4, 0.76).translate(ft, 1.2, Pt),
          new xt(0.9, 0.14, 0.9).translate(ft, 2.47, Pt),
          new z0(0.26, 14, 10).translate(ft, 2.8, Pt),
        ])
          t.add(o.stone, N(Rt), i0(ft, Pt));
        M(ft - 0.4, ft + 0.4, Pt - 0.4, Pt + 0.4, 2.4);
        const Wt = $ ? P.x + (lt * P.w) / 2 : P.x,
          Dt = $ ? P.z : P.z + (lt * P.w) / 2,
          e0 = $ ? (P.z < 100 ? 1 : -1) : P.x < 400 ? 1 : -1,
          n0 = P.w / 2 - 0.05,
          s0 = [];
        for (const Rt of [0.15, 0.95, 1.85])
          s0.push(new xt(n0, 0.05, 0.03).translate(-n0 / 2, Rt, 0));
        for (let Rt = 0; Rt <= Math.floor(n0 / 0.12); Rt++)
          (s0.push(new xt(0.02, 1.8, 0.02).translate(-Rt * 0.12 - 0.03, 1, 0)),
            s0.push(
              new he(0.03, 0.12, 4).translate(-Rt * 0.12 - 0.03, 1.96, 0),
            ));
        const k = $ ? -lt : 0,
          O = $ ? 0 : -lt,
          ht = $ ? 0 : e0,
          U = $ ? e0 : 0,
          vt = ((95 + a() * 25) * Math.PI) / 180,
          ct = k * Math.cos(vt) + ht * Math.sin(vt),
          pt = O * Math.cos(vt) + U * Math.sin(vt),
          bt = a() < 0.4 ? 0.1 : 0,
          Ot = Yt(Wt, 0, Dt, Math.atan2(pt, -ct), 0, bt);
        for (const Rt of s0) t.add(o.iron, N(Rt.applyMatrix4(Ot)), i0(Wt, Dt));
      }
    }
    {
      const [P, $] = Nt.breach;
      for (let lt = 0; lt < 9; lt++) {
        const ft = at.clone();
        (ft.applyMatrix4(
          Yt(
            P + (a() - 0.5) * 4,
            0.05,
            $ - 0.6 - a() * 2.5,
            a() * f0,
            (Math.PI / 2) * (0.7 + a() * 0.3),
            (a() - 0.5) * 0.6,
          ),
        ),
          t.add(o.iron, ft, "se"));
      }
      for (let lt = 0; lt < 7; lt++)
        t.add(
          o.stone,
          N(
            Xt(0.3 + a() * 0.4, 0.15 + a() * 0.2, 0.25 + a() * 0.3, 0.04)
              .rotateY(a() * f0)
              .translate(P + (a() - 0.5) * 4.5, 0.1, $ - 0.2 - a() * 1.5),
          ),
          "se",
        );
    }
  }
  {
    const { x, z: p, r: g } = c0,
      T = i0(x, p);
    (t.add(
      o.stone,
      N(
        g0(
          [
            [g - 0.05, 0],
            [g, 0.04],
            [g, 0.42],
            [g + 0.08, 0.46],
            [g + 0.08, 0.56],
            [g - 0.02, 0.62],
            [g - 0.36, 0.62],
            [g - 0.44, 0.56],
            [g - 0.42, 0.5],
            [g - 0.42, 0.14],
            [g - 0.5, 0.12],
            [0.001, 0.12],
          ],
          80,
        ).translate(x, 0, p),
      ),
      T,
    ),
      t.add(
        o.stone,
        N(
          g0(
            [
              [0.001, 0.12],
              [1.05, 0.12],
              [1.05, 0.36],
              [0.9, 0.44],
              [0.62, 0.52],
              [0.44, 0.64],
              [0.37, 0.9],
              [0.33, 1.14],
              [0.5, 1.24],
              [1.5, 1.36],
              [1.95, 1.48],
              [2.02, 1.58],
              [1.94, 1.64],
              [1.42, 1.58],
              [0.52, 1.5],
              [0.27, 1.6],
              [0.23, 1.9],
              [0.21, 2.18],
              [0.3, 2.28],
              [0.86, 2.4],
              [0.96, 2.48],
              [0.9, 2.54],
              [0.3, 2.5],
              [0.17, 2.58],
              [0.15, 2.78],
              [0.21, 2.9],
              [0.23, 3.04],
              [0.16, 3.2],
              [0.07, 3.32],
              [0.001, 3.38],
            ],
            44,
          ).translate(x, 0, p),
        ),
        T,
      ));
    for (let tt = 0; tt < 4; tt++) {
      const it = (tt * Math.PI) / 2 + Math.PI / 4;
      t.add(
        o.stone,
        N(
          new z0(0.16, 10, 8)
            .scale(1, 1.1, 0.8)
            .translate(x + Math.cos(it) * 0.98, 0.62, p + Math.sin(it) * 0.98),
        ),
        T,
      );
    }
    const G = new j0(g - 0.46, 64).rotateX(-Math.PI / 2).translate(x, 0.125, p),
      Z = qt("fountainwater", 329223, { rough: 0.04, metal: 0 });
    ((Z.userData.noCast = !0), t.add(Z, N(G), T));
    for (let tt = 0; tt < 40; tt++) {
      const it = a() * f0,
        et = 1.2 + a() * (g - 1.8);
      st(x + Math.cos(it) * et, p + Math.sin(it) * et, T, 0.12 + a() * 0.08);
    }
    s.push({ x, z: p, r: g + 0.12, fountain: !0 });
  }
  {
    const { x, z: p, r: g } = I0,
      T = i0(x, p),
      G = 0.95,
      Z = Math.PI / 8;
    (t.add(
      o.brick,
      N(
        new It(g, g + 0.04, G - 0.12, 8)
          .rotateY(Z)
          .translate(x, (G - 0.12) / 2, p),
      ),
      T,
    ),
      t.add(
        o.stone,
        N(
          new It(g + 0.14, g + 0.14, 0.12, 8)
            .rotateY(Z)
            .translate(x, G - 0.06, p),
        ),
        T,
      ),
      t.add(
        o.stone,
        N(new It(g + 0.1, g + 0.12, 0.14, 8).rotateY(Z).translate(x, 0.07, p)),
        T,
      ),
      t.add(
        o.boards,
        N(
          new It(g - 0.02, g - 0.02, 0.02, 8)
            .rotateY(Z)
            .translate(x, G + 0.01, p),
        ),
        T,
      ));
    const tt = g * Math.cos(Z);
    for (let et = 0; et < 4; et++)
      t.add(
        o.stone,
        N(
          new xt(2.6, 0.24 * (et + 1) - 0.01, 0.32).translate(
            x,
            (0.24 * (et + 1)) / 2,
            p + tt + 0.16 + (3 - et) * 0.32,
          ),
        ),
        T,
      );
    for (const et of [-1, 1])
      t.add(
        o.stone,
        N(new xt(0.3, 1.05, 1.45).translate(x + et * 1.45, 0.52, p + tt + 0.7)),
        T,
      );
    const it = (et) => {
      const at = (et * f0) / 8 + Z;
      return [x + Math.sin(at) * (g - 0.28), p + Math.cos(at) * (g - 0.28)];
    };
    for (let et = 0; et < 8; et++) {
      const [at, nt] = it(et);
      t.add(
        o.iron,
        N(
          g0(
            [
              [0.001, 0],
              [0.12, 0],
              [0.12, 0.08],
              [0.085, 0.14],
              [0.07, 0.3],
              [0.062, 2.5],
              [0.09, 2.6],
              [0.13, 2.72],
              [0.13, 2.78],
              [0.001, 2.78],
            ],
            12,
          ).translate(at, G, nt),
        ),
        T,
      );
      const [mt, Mt] = it(et + 1),
        Ft = (at + mt) / 2,
        wt = (nt + Mt) / 2,
        Et = Math.hypot(mt - at, Mt - nt),
        P = Math.atan2(Mt - nt, mt - at),
        $ = Zt(new _t(Et - 0.1, 0.5), i.rect.frieze);
      if (
        (t.add(o.lace, $.rotateY(-P).translate(Ft, G + 2.45, wt), T),
        !(Math.cos(Math.atan2(wt - p, Ft - x) - Math.PI / 2) > 0.95))
      ) {
        const ft = Zt(new _t(Et - 0.12, 0.92), i.rect.balustrade);
        (t.add(o.lace, ft.rotateY(-P).translate(Ft, G + 0.47, wt), T),
          t.add(
            o.iron,
            N(
              new xt(Et - 0.1, 0.05, 0.07)
                .rotateY(-P)
                .translate(Ft, G + 0.95, wt),
            ),
            T,
          ));
      }
    }
    (t.add(
      o.zinc,
      N(
        g0(
          [
            [g + 0.42, G + 2.78],
            [g + 0.3, G + 2.88],
            [g * 0.86, G + 3.14],
            [g * 0.62, G + 3.6],
            [g * 0.4, G + 4.2],
            [g * 0.2, G + 4.75],
            [0.18, G + 5.1],
            [0.001, G + 5.2],
          ],
          8,
        )
          .rotateY(Z)
          .translate(x, 0, p),
      ),
      T,
    ),
      t.add(
        o.boards,
        N(
          new It(g + 0.42, g + 0.42, 0.22, 8, 1, !0)
            .rotateY(Z)
            .translate(x, G + 2.68, p),
        ),
        T,
      ),
      t.add(
        o.boards,
        N(
          new j0(g + 0.4, 8)
            .rotateX(Math.PI / 2)
            .rotateY(Z)
            .translate(x, G + 2.79, p),
        ),
        T,
      ),
      t.add(
        o.iron,
        N(
          g0(
            [
              [0.001, 0],
              [0.08, 0],
              [0.05, 0.2],
              [0.09, 0.32],
              [0.04, 0.45],
              [0.012, 0.9],
              [0.001, 0.92],
            ],
            10,
          ).translate(x, G + 5.15, p),
        ),
        T,
      ));
    for (let et = 0; et < 3; et++) {
      const at = a() * f0,
        nt = a() * 3;
      t.add(
        o.iron,
        Ht(
          I(x + Math.cos(at) * nt, G + 0.03, p + Math.sin(at) * nt),
          I(
            x + Math.cos(at) * nt + 1 * Math.cos(at + 1),
            G + 0.06,
            p + Math.sin(at) * nt + 1 * Math.sin(at + 1),
          ),
          0.012,
          0.01,
          5,
        ),
        T,
      );
    }
    for (let et = 0; et < 12; et++) {
      const at = a() * f0,
        nt = a() * (g - 0.6),
        mt = new _t(0.22, 0.3).rotateX(-Math.PI / 2).rotateY(a() * f0);
      (Zt(mt, n.rect["paper" + (et % 8)]),
        t.add(
          o.paper,
          mt.translate(x + Math.cos(at) * nt, G + 0.025, p + Math.sin(at) * nt),
          T,
        ));
    }
    (s.push({ x, z: p, r: g * 0.96, bandstand: !0 }),
      M(x - 1.6, x + 1.6, p + tt, p + tt + 1.5, 0.9));
  }
  {
    const { x, z: p } = L0,
      g = i0(x, p),
      T = Math.atan2(c0.x - x, c0.z - p),
      G = Yt(x, 0, p, T),
      Z = [
        Xt(2.7, 0.32, 2.7, 0.03).translate(0, 0.16, 0),
        Xt(2.2, 0.3, 2.2, 0.03).translate(0, 0.47, 0),
        Xt(1.5, 0.22, 1.5, 0.03).translate(0, 0.73, 0),
        Xt(1.26, 1.5, 1.26, 0.02).translate(0, 1.58, 0),
        Xt(1.5, 0.18, 1.5, 0.03).translate(0, 2.42, 0),
        Xt(1.2, 0.2, 1.2, 0.03).translate(0, 2.6, 0),
      ];
    for (const nt of He(Z, G)) t.add(o.stone, N(nt), g);
    {
      const nt = Zt(new _t(1, 0.125), n.rect.plaque);
      (nt.scale(1, 1, 1),
        t.add(
          o.sign,
          nt.applyMatrix4(
            G.clone().multiply(new gt().makeTranslation(0, 1.72, 0.632)),
          ),
          g,
        ));
    }
    const tt = [],
      it = 1.3,
      et = 2.7,
      at = g0(
        [
          [0.001, 0],
          [0.44, 0],
          [0.46, 0.06],
          [0.4, 0.4],
          [0.33, 0.8],
          [0.27, 0.98],
          [0.25, 1.1],
          [0.27, 1.22],
          [0.28, 1.32],
          [0.22, 1.42],
          [0.09, 1.47],
          [0.07, 1.53],
          [0.001, 1.53],
        ],
        28,
      );
    {
      const nt = at.attributes.position;
      for (let mt = 0; mt < nt.count; mt++) {
        const Mt = nt.getX(mt),
          Ft = nt.getZ(mt),
          wt = nt.getY(mt),
          Et = Math.atan2(Ft, Mt),
          P = 1 + 0.07 * Math.sin(Et * 9 + wt * 2) * Math.max(0, 1 - wt / 1.1);
        (nt.setX(mt, Mt * P), nt.setZ(mt, Ft * P * 0.86));
      }
      at.computeVertexNormals();
    }
    (tt.push(at),
      tt.push(
        new z0(0.115, 16, 12).scale(1, 1.15, 1.05).translate(0, 1.66, 0.01),
      ),
      tt.push(new z0(0.075, 10, 8).translate(0, 1.72, -0.09)),
      tt.push(
        k0(
          [
            I(0.2, 1.4, 0),
            I(0.3, 1.62, 0.03),
            I(0.32, 1.86, 0.05),
            I(0.31, 2.06, 0.06),
          ],
          [0.06, 0.05, 0.045, 0.04],
          8,
        ),
      ),
      tt.push(new It(0.035, 0.045, 0.36, 10).translate(0.31, 2.2, 0.06)),
      tt.push(
        g0(
          [
            [0.001, 0],
            [0.09, 0.02],
            [0.12, 0.1],
            [0.08, 0.2],
            [0.04, 0.32],
            [0.001, 0.38],
          ],
          10,
        ).translate(0.31, 2.36, 0.06),
      ),
      tt.push(
        k0(
          [I(-0.2, 1.4, 0), I(-0.29, 1.15, 0.08), I(-0.24, 0.94, 0.2)],
          [0.055, 0.047, 0.04],
          8,
        ),
      ),
      tt.push(
        new pe(0.17, 0.035, 8, 20)
          .rotateX(Math.PI / 2 - 0.4)
          .translate(-0.24, 0.84, 0.3),
      ));
    for (const nt of tt)
      t.add(
        o.bronze,
        N(
          nt
            .applyMatrix4(new gt().makeScale(it, it, it))
            .applyMatrix4(
              G.clone().multiply(new gt().makeTranslation(0, et, 0)),
            ),
        ),
        g,
      );
    s.push({ x, z: p, r: 1.45, statue: !0 });
  }
  let j = null;
  {
    const x = ta,
      p = "sw",
      g = (P, $, lt = 0.035, ft = o.red) =>
        t.add(ft, N(Ht(P, $, lt, lt, 10)), p);
    (t.add(
      o.safety,
      N(new _t(6.6, 6.2).rotateX(-Math.PI / 2).translate(405, 0.03, 170.6)),
      p,
    ),
      t.add(
        o.safety,
        N(new _t(6.2, 4.2).rotateX(-Math.PI / 2).translate(400.6, 0.03, 181.2)),
        p,
      ));
    for (const [P, $, lt, ft] of [
      [403.2, 179.6, 408.6, 179.8],
      [403.2, 183.6, 408.6, 183.8],
      [403.2, 179.6, 403.4, 183.8],
      [408.4, 179.6, 408.6, 183.8],
    ])
      t.add(
        o.wood,
        N(
          new xt(lt - P, 0.28, ft - $).translate(
            (P + lt) / 2,
            0.14,
            ($ + ft) / 2,
          ),
        ),
        p,
      );
    (t.add(
      o.sand,
      N(new _t(5, 3.8).rotateX(-Math.PI / 2).translate(405.9, 0.16, 181.7)),
      p,
    ),
      M(403.2, 408.6, 179.6, 183.8, 0.28));
    const T = 402.4,
      G = 407.6,
      Z = 170.6,
      tt = 2.45;
    for (const P of [T, G])
      for (const $ of [-1, 1]) g(I(P, 0, Z + $ * 1.1), I(P, tt, Z), 0.045);
    g(I(T - 0.1, tt, Z), I(G + 0.1, tt, Z), 0.05);
    for (const P of [T, G]) M(P - 0.15, P + 0.15, Z - 1.2, Z + 1.2, 2.4);
    const it = (P) => {
      const $ = [];
      for (const lt of [-0.24, 0.24])
        $.push(Ht(I(P + lt, 0, 0), I(P + lt, -1.92, 0), 0.008, 0.008, 5));
      return ($.push(Xt(0.5, 0.04, 0.2, 0.015).translate(P, -1.94, 0)), $);
    };
    {
      const P = v0(it(403.8).map(($) => N($.translate(0, tt, Z))));
      t.add(o.steel, P, p);
    }
    const et = v0(it(0).map((P) => N(P))),
      at = new jt(et, o.steel);
    ((at.name = "park_swing"),
      (at.castShadow = !0),
      (at.receiveShadow = !0),
      at.position.set(406.2, tt, Z),
      (at.rotation.order = "XYZ"),
      f.add(at),
      (j = {
        mesh: at,
        amp: 0.55,
        target: 0.55,
        ph: 0,
        creakT: 0,
        pos: [406.2, 1, Z],
        dir: 1,
      }));
    const nt = 398.8,
      mt = 181.2,
      Mt = 1.45;
    for (const [P, $] of [
      [-0.45, -0.45],
      [0.45, -0.45],
      [-0.45, 0.45],
      [0.45, 0.45],
    ])
      g(I(nt + P, 0, mt + $), I(nt + P, Mt + 0.9, mt + $), 0.04, o.blue);
    t.add(o.yellow, N(new xt(0.98, 0.06, 0.98).translate(nt, Mt, mt)), p);
    for (const P of [-0.45, 0.45])
      g(
        I(nt - 0.45, Mt + 0.9, mt + P),
        I(nt + 0.45, Mt + 0.9, mt + P),
        0.03,
        o.blue,
      );
    for (let P = 0; P < 5; P++)
      g(
        I(nt - 0.45, 0.3 + P * 0.28, mt - 0.3),
        I(nt - 0.45, 0.3 + P * 0.28, mt + 0.3),
        0.02,
        o.steel,
      );
    {
      const P = [];
      for (let lt = 0; lt <= 10; lt++) {
        const ft = lt / 10,
          Pt = nt + 0.5 + ft * 3,
          Wt = Mt - Math.pow(ft, 1.2) * (Mt - 0.3) + (ft > 0.9, 0);
        P.push([Pt, Wt]);
      }
      for (let lt = 0; lt < 10; lt++) {
        const [ft, Pt] = P[lt],
          [Wt, Dt] = P[lt + 1],
          e0 = Math.hypot(Wt - ft, Dt - Pt),
          n0 = Math.atan2(Dt - Pt, Wt - ft);
        t.add(
          o.steel,
          N(
            new xt(e0, 0.02, 0.5)
              .rotateZ(n0)
              .translate((ft + Wt) / 2, (Pt + Dt) / 2, mt),
          ),
          p,
        );
        for (const s0 of [-1, 1])
          t.add(
            o.steel,
            N(
              new xt(e0, 0.14, 0.02)
                .rotateZ(n0)
                .translate((ft + Wt) / 2, (Pt + Dt) / 2 + 0.07, mt + s0 * 0.25),
            ),
            p,
          );
      }
    }
    M(nt - 0.6, nt + 3.6, mt - 0.6, mt + 0.6, 1.4);
    const Ft = 412.4,
      wt = 181.2;
    for (const P of [-1, 0, 1])
      for (const $ of [-1, 0, 1])
        g(I(Ft + P, 0, wt + $), I(Ft + P, 2, wt + $), 0.025, o.blue);
    for (const P of [0.7, 1.35, 2])
      for (const $ of [-1, 0, 1])
        (g(I(Ft - 1, P, wt + $), I(Ft + 1, P, wt + $), 0.022, o.blue),
          g(I(Ft + $, P, wt - 1), I(Ft + $, P, wt + 1), 0.022, o.blue));
    (M(Ft - 1.1, Ft + 1.1, wt - 1.1, wt + 1.1, 2),
      t.add(o.red, N(new xt(0.3, 0.4, 0.3).translate(398.6, 0.2, 175.6)), p),
      t.add(
        o.wood,
        N(Xt(3.4, 0.07, 0.26, 0.02).rotateZ(0.2).translate(398.6, 0.45, 175.6)),
        p,
      ));
    for (const P of [-1, 1])
      t.add(
        o.steel,
        N(
          Ht(
            I(398.6 + P * 1.4, 0.45 + P * 0.29 + 0.05, 175.45),
            I(398.6 + P * 1.4, 0.45 + P * 0.29 + 0.3, 175.75),
            0.015,
            0.015,
            6,
          ),
        ),
        p,
      );
    (M(396.9, 400.3, 175.4, 175.8, 0.5),
      t.add(o.steel, N(new It(1, 1, 0.06, 28).translate(412.6, 0.3, 174.4)), p),
      g(I(412.6, 0.33, 174.4), I(412.6, 0.92, 174.4), 0.05, o.yellow));
    for (let P = 0; P < 4; P++) {
      const $ = (P * Math.PI) / 2 + 0.3,
        lt = Math.cos($),
        ft = Math.sin($);
      t.add(
        o.yellow,
        k0(
          [
            I(412.6 + lt * 0.06, 0.88, 174.4 + ft * 0.06),
            I(412.6 + lt * 0.55, 0.86, 174.4 + ft * 0.55),
            I(412.6 + lt * 0.86, 0.72, 174.4 + ft * 0.86),
            I(412.6 + lt * 0.9, 0.36, 174.4 + ft * 0.9),
          ],
          [0.022, 0.022, 0.022, 0.022],
          6,
        ),
        p,
      );
    }
    s.push({ x: 412.6, z: 174.4, r: 1.05 });
    const Et = (P, $, lt, ft) => {
      const Pt = Math.hypot(lt - P, ft - $),
        Wt = Math.max(1, Math.round(Pt / 2)),
        Dt = (lt - P) / Pt,
        e0 = (ft - $) / Pt,
        n0 = Math.atan2(e0, Dt);
      for (let s0 = 0; s0 < Wt; s0++) {
        const k = (s0 * Pt) / Wt,
          O = ((s0 + 1) * Pt) / Wt,
          ht = P + (Dt * (k + O)) / 2,
          U = $ + (e0 * (k + O)) / 2,
          vt = Zt(new _t(O - k, 1), i.rect.bars);
        (t.add(o.lace, vt.rotateY(-n0).translate(ht, 0.5, U), p),
          t.add(
            o.iron,
            N(new xt(0.05, 1.08, 0.05).translate(P + Dt * k, 0.54, $ + e0 * k)),
            p,
          ));
      }
      M(
        Math.min(P, lt) - 0.06,
        Math.max(P, lt) + 0.06,
        Math.min($, ft) - 0.06,
        Math.max($, ft) + 0.06,
        1,
      );
    };
    (Et(x.x0, x.z0, x.x1, x.z0),
      Et(x.x0, x.z0, x.x0, x.z1),
      Et(x.x1, x.z0, x.x1, 174),
      Et(x.x1, 177, x.x1, x.z1),
      Et(x.x0, x.z1, 404, x.z1),
      Et(406.8, x.z1, x.x1, x.z1),
      t.add(
        o.lace,
        Zt(new _t(1.5, 1), i.rect.bars)
          .rotateY(-Math.PI / 2 - 1.1)
          .translate(x.x1 + 0.6, 0.5, 174.4),
        p,
      ),
      u.push(
        [405, 176, 2.2, 0.9],
        [416.6, 175.5, 1.6, 0.8],
        [405.4, 185.6, 1.4, 0.8],
      ));
  }
  {
    const x = (T, G, Z, tt, it, et, at, nt = !0) => {
      const mt = i0(T, G),
        Mt = Yt(T, 0, G, Z);
      if (
        (t.add(
          o.sign,
          Zt(new _t(it, et), tt).applyMatrix4(
            Mt.clone().multiply(new gt().makeTranslation(0, at, 0.026)),
          ),
          mt,
        ),
        t.add(
          o.iron,
          N(
            new xt(it + 0.06, et + 0.06, 0.05).applyMatrix4(
              Mt.clone().multiply(new gt().makeTranslation(0, at, 0)),
            ),
          ),
          mt,
        ),
        nt)
      )
        for (const Ft of [-1, 1])
          t.add(
            o.iron,
            N(
              new xt(0.06, at + et / 2, 0.06).applyMatrix4(
                Mt.clone().multiply(
                  new gt().makeTranslation(
                    Ft * (it / 2 - 0.08),
                    (at + et / 2) / 2,
                    -0.03,
                  ),
                ),
              ),
            ),
            mt,
          );
      h(T, G, it / 2 + 0.05, 0.12, Z, at + et / 2);
    };
    x(439.4, 193.6, -0.9, n.rect.map, 1.15, 1.15, 1.35);
    const p = (T, G, Z) => {
      const tt = i0(T, G),
        it = Yt(T, 0, G, Z);
      for (const et of [-1, 1]) {
        const at = et * 0.2,
          nt = it
            .clone()
            .multiply(new gt().makeTranslation(0, 0, et * 0.18))
            .multiply(new gt().makeRotationX(-at));
        (t.add(
          o.sign,
          Zt(new _t(1, 0.5), n.rect.arrowUp).applyMatrix4(
            nt
              .clone()
              .multiply(new gt().makeTranslation(0, 0.72, 0.012 * et))
              .multiply(new gt().makeRotationY(et > 0 ? 0 : Math.PI)),
          ),
          tt,
        ),
          t.add(
            o.wood,
            N(
              new xt(1.04, 1, 0.02).applyMatrix4(
                nt.clone().multiply(new gt().makeTranslation(0, 0.5, 0)),
              ),
            ),
            tt,
          ));
      }
      h(T, G, 0.55, 0.3, Z, 1);
    };
    (p(434.6, 190.8, 0.15),
      p(437.4, 164.2, -0.45),
      p(436.8, 143, -0.35),
      p(441.6, 136.4, -0.4));
    const g = (T, G, Z, tt) => {
      x(T, G, Z, tt, 0.8, 0.2, 0.75);
    };
    (g(424.6, 183.2, 1.2, n.rect.keepOff),
      g(458.6, 152.6, -2.2, n.rect.keepOff),
      g(419.2, 177, 1.57, n.rect.playSign));
  }
  function Y(x, p, g) {
    for (const T of c) T(x, p);
    if (j) {
      const T = j;
      ((T.ph += x * 2.15),
        !T.manual &&
          Math.floor(p / 7.3) !== T.lastPush &&
          ((T.lastPush = Math.floor(p / 7.3)),
          (T.target = 0.32 + 0.38 * (0.5 + 0.5 * Math.sin(p * 0.37)))),
        (T.amp += (T.target - T.amp) * Math.min(1, x * 0.4)));
      const G = Math.sin(T.ph) * T.amp;
      ((T.mesh.rotation.x = G),
        Math.cos(T.ph) * T.dir < 0 &&
          ((T.dir = -T.dir),
          T.amp > 0.05 &&
            (g.position.x - T.pos[0]) ** 2 + (g.position.z - T.pos[2]) ** 2 <
              576 &&
            e.audio?.play?.("p3_swing", {
              pos: T.pos,
              vol: 0.3 * Math.min(1, T.amp * 2),
              dur: 0.5,
              rate: 0.95 + 0.1 * Math.random(),
            })));
    }
  }
  return {
    group: f,
    colliders: w,
    circles: s,
    lamps: d,
    swing: j,
    sources: l,
    wear: u,
    update: Y,
    LK: C,
  };
}
