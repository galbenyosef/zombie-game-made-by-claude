// assets__park-CwBfNU5l 15 — math
// Lines 5028-6686 of readable/assets__park-CwBfNU5l.pretty.js (statement-aligned).
function io(e, a, t, r) {
  const o = we(e),
    n = xe(),
    i = Me(),
    f = new P0();
  f.name = "park_camp";
  const w = [],
    s = [],
    l = [],
    u = [],
    c = [],
    M = [],
    h = [],
    v = [],
    S = (b, _, R, E, X = 1.5, H = 0, rt = {}) =>
      w.push({ x0: b, x1: _, z0: R, z1: E, y0: H, y1: X, ...rt }),
    d = (b, _, R, E, X, H = 1.5) => {
      const rt = Math.abs(Math.cos(X)),
        ut = Math.abs(Math.sin(X)),
        dt = rt * R + ut * E,
        Ct = ut * R + rt * E;
      S(b - dt, b + dt, _ - Ct, _ + Ct, H);
    },
    [y, , m] = W0.pos,
    F = W0.clear,
    C = (b, _, R = 0) => Math.hypot(b - y, _ - m) > F + R,
    L = Gt(
      e.mats.get("park3_canvas", { color: 10132100 }),
      "tentcanvas",
      (b) => {
        ((b.vertexShader = b.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vTY;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vTY = (modelMatrix * vec4(position, 1.0)).y;`,
          )),
          (b.fragmentShader = b.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying float vTY;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.06, 0.045, 0.03), (1.0 - smoothstep(0.0, 0.55, vTY)) * 0.75);`,
            )));
      },
    );
  L.side = y0;
  const z = Gt(
    e.mats.get("park3_canvas", { color: 14210248 }),
    "medcanvas",
    (b) => {
      ((b.uniforms.uGlowK = { value: 1 }),
        (b.vertexShader = b.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vTY;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vTY = (modelMatrix * vec4(position, 1.0)).y;`,
          )),
        (b.fragmentShader = b.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vTY;
uniform float uGlowK;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.055, 0.04), (1.0 - smoothstep(0.0, 0.5, vTY)) * 0.7);`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      totalEmissiveRadiance += vec3(1.0, 0.8, 0.55) * 0.42 * uGlowK * (0.55 + 0.45 * smoothstep(0.2, 2.2, vTY)) * (0.75 + diffuseColor.g * 0.8);`,
          )),
        (z.userData.glow = b.uniforms.uGlowK));
    },
  );
  z.side = y0;
  const W = qt("tentfloor", 1315854, { rough: 0.9 }),
    D = qt("tentpole", 3816496, { rough: 0.6, metal: 0.5 }),
    V = qt("galv", 9080460, { rough: 0.42, metal: 0.85 }),
    A = qt("olive", 4080680, { rough: 0.7, metal: 0.2 }),
    K = Gt(e.mats.get("park3_canvas", { color: 14206106 }), "sandbag"),
    J = Gt(
      new u0({
        map: n.tex,
        emissiveMap: n.tex,
        emissive: new Vt(1, 0.85, 0.65),
        emissiveIntensity: 0.55,
        roughness: 0.7,
        side: y0,
      }),
      "signglow",
    ),
    q = qt("rope", 6972496, { rough: 0.9 }),
    st = qt("seam", 1842452, { rough: 0.95 }),
    j = qt("seammed", 9077880, { rough: 0.95 }),
    Y = qt("tabletop", 7236706, { rough: 0.6 }),
    x = qt("white", 14210766, { rough: 0.5 }),
    p = qt("bodybag", 921612, { rough: 0.45 }),
    g = qt("bodybag2", 2501148, { rough: 0.6 }),
    T = Gt(e.mats.get("ruin_char"), "char"),
    G = Gt(e.mats.get("rust_metal"), "rust"),
    Z = new u0({
      color: 3146756,
      emissive: new Vt(1, 0.04, 0.03),
      emissiveIntensity: 0,
      roughness: 0.3,
      fog: !1,
    });
  Z.userData.noCast = !0;
  const tt = new u0({
    color: 264752,
    emissive: new Vt(0.06, 0.18, 1),
    emissiveIntensity: 0,
    roughness: 0.3,
    fog: !1,
  });
  tt.userData.noCast = !0;
  const it = [];
  {
    const b = oo();
    b.anisotropy = 8;
    const _ = Gt(new u0({ map: b, roughness: 0.62, metalness: 0.12 }), "pad");
    _.userData.noCast = !0;
    const R = h0.half,
      E = new xt(R * 2, 0.04, R * 2).translate(h0.x, 0.02, h0.z),
      X = E.attributes.uv,
      H = E.attributes.position,
      rt = E.attributes.normal;
    for (let Q = 0; Q < X.count; Q++)
      rt.getY(Q) > 0.5
        ? X.setXY(
            Q,
            (H.getX(Q) - (h0.x - R)) / (R * 2),
            1 - (H.getZ(Q) - (h0.z - R)) / (R * 2),
          )
        : X.setXY(Q, 0.01, 0.01);
    const ut = new jt(E, _);
    ((ut.name = "camp_pad"), (ut.receiveShadow = !0), f.add(ut));
    const dt = [],
      Ct = new Vt(0.25, 1.6, 0.5);
    for (let Q = 0; Q < 32; Q++) {
      const yt = Math.floor(Q / 8),
        Tt = (Q % 8) / 8,
        kt = R - 0.35,
        [ot, At] = [
          [-kt + Tt * 2 * kt, -kt],
          [kt, -kt + Tt * 2 * kt],
          [kt - Tt * 2 * kt, kt],
          [-kt, kt - Tt * 2 * kt],
        ][yt],
        Ut = h0.x + ot,
        Bt = h0.z + At,
        zt = (Q * 7) % 11 === 3;
      (dt.push(new It(0.06, 0.08, 0.12, 8).translate(Ut, 0.06, Bt)),
        zt || r.add([Ut, 0.16, Bt], Ct, 0.55, 0),
        t.add(
          zt ? o.glassDead : et(),
          N(new It(0.045, 0.045, 0.05, 8).translate(Ut, 0.14, Bt)),
          B,
        ));
    }
    for (const Q of dt) t.add(o.steel, N(Q), B);
  }
  function et() {
    return (et.m ||= (() => {
      const b = new ge({ color: new Vt(0.4, 2.4, 0.8), fog: !1 });
      return ((b.userData.noCast = !0), b);
    })());
  }
  const at = V,
    nt = [];
  {
    const { z0: b, z1: _, xs: R } = ne;
    for (const Q of R) {
      const yt = Math.round((_ - b) / 2.4);
      for (let Tt = 0; Tt < yt; Tt++) {
        const kt = b + ((Tt + 0.5) * (_ - b)) / yt,
          ot = Q === R[1] || Q === R[2],
          At = a();
        At < (ot ? 0.25 : 0.3)
          ? nt.push({
              x: Q + (ot ? (Q < 447 ? -1 : 1) : a() - 0.5) * 0.6,
              z: kt,
              yaw: Math.PI / 2 + (a() - 0.5) * 0.8,
              down: !0,
            })
          : At < 0.5
            ? nt.push({
                x: Q + (a() - 0.5) * 0.5,
                z: kt + (a() - 0.5) * 0.4,
                yaw: Math.PI / 2 + (a() - 0.5) * 0.35,
              })
            : nt.push({ x: Q, z: kt, yaw: Math.PI / 2 + (a() - 0.5) * 0.06 });
      }
    }
    for (const [Q, yt, Tt, kt] of [
      [441, 124.4, 0.3, !0],
      [452.8, 123.8, -0.5, !1],
      [455.4, 125.6, 0.2, !0],
      [438.6, 122.6, 1.1, !1],
    ])
      nt.push({ x: Q, z: yt, yaw: Tt, down: kt });
    const E = so(),
      X = new U0(E, at, nt.length);
    X.name = "camp_barriers";
    const H = new gt(),
      rt = new C0(),
      ut = new q0(),
      dt = new a0(1, 1, 1),
      Ct = new a0();
    (nt.forEach((Q, yt) => {
      Q.down
        ? (ut.set(0, Q.yaw, Math.PI / 2 - 0.06, "YXZ"),
          rt.setFromEuler(ut),
          X.setMatrixAt(yt, H.compose(Ct.set(Q.x, 0.03, Q.z), rt, dt)))
        : (ut.set(0, Q.yaw, (a() - 0.5) * 0.03, "YXZ"),
          rt.setFromEuler(ut),
          X.setMatrixAt(yt, H.compose(Ct.set(Q.x, 0, Q.z), rt, dt)),
          d(Q.x, Q.z, 1.18, 0.12, Q.yaw, 1.1));
    }),
      (X.castShadow = !0),
      (X.receiveShadow = !0),
      f.add(X));
    for (let Q = ne.z1 + 1.2; Q > ne.z0 - 0.4; Q -= 1.25) {
      const yt = 447.5 + (a() - 0.5) * 0.25,
        Tt = (a() - 0.5) * 0.08,
        kt = Yt(yt, 0, Q, Tt);
      for (let ot = 0; ot < 5; ot++)
        t.add(
          o.boards,
          N(
            new xt(1.18, 0.022, 0.1).applyMatrix4(
              kt
                .clone()
                .multiply(new gt().makeTranslation(0, 0.11, -0.5 + ot * 0.25)),
            ),
          ),
          B,
        );
      for (const ot of [-0.5, 0, 0.5])
        t.add(
          o.boards,
          N(
            new xt(0.1, 0.09, 1.2).applyMatrix4(
              kt.clone().multiply(new gt().makeTranslation(ot, 0.05, 0)),
            ),
          ),
          B,
        );
    }
    v.push(
      [447.5, 113, 4.2, 0.9],
      [447, 122.5, 4.5, 1],
      [447.5, 106, 3.6, 0.8],
    );
    {
      const Tt = Yt(442.4, 0, 103, 0.4);
      t.add(
        Y,
        N(
          new xt(1.8, 0.75, 0.04).applyMatrix4(
            Tt.clone().multiply(new gt().makeTranslation(0, 0.375, 0)),
          ),
        ),
        B,
      );
      for (const kt of [-0.8, 0.8])
        for (const ot of [0.1, 0.65])
          t.add(
            o.steel,
            Ht(
              I(kt, ot, 0.02).applyMatrix4(Tt),
              I(kt, ot, 0.72).applyMatrix4(Tt),
              0.014,
              0.014,
              6,
            ),
            B,
          );
      d(442.4, 103, 0.95, 0.45, 0.4, 0.8);
      for (let kt = 0; kt < 26; kt++) {
        const ot = a() * M0,
          At = 0.4 + a() * 3.2;
        mt(442.4 + Math.cos(ot) * At + 1, 103 + Math.sin(ot) * At - 0.5);
      }
      Mt(440.6, 104.6, 1.2, !0);
    }
  }
  function mt(b, _, R = 0.21 + a() * 0.08) {
    const E = new _t(R, R * 1.3)
      .rotateX(-Math.PI / 2 + (a() - 0.5) * 0.25)
      .rotateY(a() * M0);
    (Zt(E, n.rect["paper" + Math.floor(a() * 8)]),
      t.add(o.paper, E.translate(b, 0.006 + a() * 0.004, _), B));
  }
  function Mt(b, _, R, E = !1) {
    const X = E ? Yt(b, 0.22, _, R, Math.PI / 2 - 0.1, 0) : Yt(b, 0, _, R),
      H = [
        new xt(0.44, 0.03, 0.42).translate(0, 0.45, 0),
        new xt(0.44, 0.36, 0.03).translate(0, 0.66, -0.2),
      ];
    for (const [rt, ut] of [
      [-0.2, -0.19],
      [0.2, -0.19],
      [-0.2, 0.19],
      [0.2, 0.19],
    ])
      H.push(new It(0.012, 0.012, 0.45, 6).translate(rt, 0.225, ut));
    for (const rt of H) t.add(A, N(rt.applyMatrix4(X)), B);
    E || s.push({ x: b, z: _, r: 0.3 });
  }
  {
    const b = m0,
      _ = 3.5,
      R = [],
      E = (ot, At, Ut, Bt, zt = () => !1) => {
        const Lt = Math.hypot(Ut - ot, Bt - At),
          l0 = Math.round(Lt / _),
          o0 = (Ut - ot) / Lt,
          p0 = (Bt - At) / Lt,
          D0 = -Math.atan2(p0, o0);
        for (let ze = 0; ze < l0; ze++) {
          const Ne = ((ze + 0.5) * Lt) / l0,
            Ge = ot + o0 * Ne,
            De = At + p0 * Ne;
          zt(Ge, De) || R.push({ x: Ge, z: De, yaw: D0, w: Lt / l0 });
        }
      };
    (E(b.x0, b.z1, E0.x0, b.z1),
      E(E0.x1, b.z1, b.x1, b.z1),
      E(b.x0, b.z0, b.x1, b.z0),
      E(b.x0, b.z0, b.x0, b.z1),
      E(b.x1, b.z0, b.x1, b.z1));
    const X = ro(),
      H = Zt(new _t(3.45, 1.9).translate(0, 1.05, 0), i.rect.mesh),
      rt = [];
    for (const ot of R) {
      const At = a(),
        Ut = Math.abs(ot.z - b.z1) < 1 && Math.abs(ot.x - 447) < 12;
      ((ot.state =
        (Ut && At < 0.45) || At < 0.1
          ? "down"
          : At < 0.22
            ? "lean"
            : At < 0.27
              ? "gone"
              : "up"),
        ((Math.abs(ot.x - b.x0) < 0.5 && Math.abs(ot.z - 96) < 4) ||
          (Math.abs(ot.x - b.x1) < 0.5 && Math.abs(ot.z - 88) < 4) ||
          (Math.abs(ot.z - b.z0) < 0.5 && Math.abs(ot.x - 480) < 4)) &&
          (ot.state = "down"),
        ot.state !== "gone" && rt.push(ot));
    }
    const ut = new U0(X, V, rt.length),
      dt = new U0(H, new u0(), rt.length);
    ((dt.material = o.lace.clone()),
      (dt.material.color = new Vt(10133148)),
      (dt.material.metalness = 0.8),
      (dt.material.roughness = 0.4),
      (dt.material.onBeforeCompile = o.lace.onBeforeCompile),
      (dt.material.customProgramCacheKey = () => "park3_fencemesh"),
      (dt.customDepthMaterial = o.lace.userData.depth),
      (ut.name = "camp_fence_frames"),
      (dt.name = "camp_fence_mesh"));
    const Ct = new gt(),
      Q = new C0(),
      yt = new q0(),
      Tt = new a0(1, 1, 1),
      kt = new a0();
    rt.forEach((ot, At) => {
      let Ut = 0,
        Bt = 0,
        zt = 0,
        Lt = 0,
        l0 = 0;
      if (ot.state === "down") {
        ((Bt = -Math.PI / 2 + 0.04), (Ut = 0.05));
        const o0 = Math.abs(ot.z - b.z1) < 1 ? 1 : -1;
        ((Lt = Math.sin(ot.yaw) * 0.9 * o0),
          (l0 = Math.cos(ot.yaw) * 0.9 * o0),
          Math.abs(ot.z - b.z1) < 1 && (Bt = Math.PI / 2 - 0.04));
      } else
        ot.state === "lean"
          ? (Bt = (a() < 0.5 ? -1 : 1) * (0.2 + a() * 0.25))
          : (zt = (a() - 0.5) * 0.04);
      if (
        (yt.set(Bt, ot.yaw, zt, "YXZ"),
        Q.setFromEuler(yt),
        Ct.compose(
          kt.set(ot.x + Lt, Ut, ot.z + l0),
          Q,
          Tt.set(ot.w / 3.45, 1, 1),
        ),
        ut.setMatrixAt(At, Ct),
        dt.setMatrixAt(At, Ct),
        ot.state !== "down")
      ) {
        d(ot.x, ot.z, ot.w / 2, 0.08, ot.yaw, 2);
        for (const o0 of [-1, 1])
          t.add(
            o.stone,
            N(
              new xt(0.62, 0.14, 0.22)
                .translate(0, 0.07, 0)
                .applyMatrix4(
                  Yt(
                    ot.x + (Math.cos(ot.yaw) * o0 * ot.w) / 2,
                    0,
                    ot.z - (Math.sin(ot.yaw) * o0 * ot.w) / 2,
                    ot.yaw,
                  ),
                ),
            ),
            B,
          );
      }
    });
    for (const ot of [ut, dt])
      ((ot.castShadow = !0), (ot.receiveShadow = !0), f.add(ot));
    {
      const ot = (E0.x0 + E0.x1) / 2,
        At = b.z1 + 0.3,
        Ut = Yt(ot, 0, At, 0),
        Bt = E0.x1 - E0.x0 + 0.6;
      for (const zt of [-1, 1])
        (t.add(
          o.steel,
          N(
            new It(0.045, 0.045, 4.3, 10)
              .translate((zt * Bt) / 2, 2.15, 0)
              .applyMatrix4(Ut),
          ),
          B,
        ),
          t.add(
            o.steel,
            N(
              new xt(0.5, 0.06, 0.5)
                .translate((zt * Bt) / 2, 0.03, 0)
                .applyMatrix4(Ut),
            ),
            B,
          ),
          d(ot + (zt * Bt) / 2, At, 0.18, 0.18, 0, 4.3));
      (t.add(
        o.steel,
        N(
          new It(0.04, 0.04, Bt, 10)
            .rotateZ(Math.PI / 2)
            .translate(0, 4.22, 0)
            .applyMatrix4(Ut),
        ),
        B,
      ),
        t.add(
          o.sign,
          Zt(new _t(6.4, 1.6), n.rect.banner).applyMatrix4(
            Ut.clone().multiply(new gt().makeTranslation(0, 3.35, 0.02)),
          ),
          B,
        ),
        t.add(
          o.sign,
          Zt(new _t(6.4, 1.6), n.rect.banner).applyMatrix4(
            Ut.clone()
              .multiply(new gt().makeTranslation(0, 3.35, -0.02))
              .multiply(new gt().makeRotationY(Math.PI)),
          ),
          B,
        ));
      for (const zt of [-1, 1])
        for (const Lt of [2.55, 4.15])
          t.add(
            q,
            Ht(
              I(ot + zt * 3.2, Lt, At),
              I(ot + zt * (Bt / 2), Lt + (Lt > 3 ? 0.05 : -0.1), At),
              0.008,
              0.008,
              4,
            ),
            B,
          );
    }
    for (const [ot, At, Ut] of [
      [b.x0 - 0.05, 110, -Math.PI / 2],
      [b.x1 + 0.05, 110, Math.PI / 2],
      [470, b.z1 + 0.05, 0],
      [430, b.z0 - 0.05, Math.PI],
    ])
      t.add(
        o.sign,
        Zt(new _t(0.9, 0.45), n.rect.noEntry).applyMatrix4(Yt(ot, 1.3, At, Ut)),
        B,
      );
    {
      const ot = E0.x1 + 0.6,
        At = b.z1 + 0.8;
      (t.add(o.red, N(new xt(0.3, 1.1, 0.3).translate(ot, 0.55, At)), B),
        S(ot - 0.18, ot + 0.18, At - 0.18, At + 0.18, 1.1));
      const Ut = new P0(),
        Bt = (zt) => (zt % 2 ? x : o.red);
      for (let zt = 0; zt < 6; zt++) {
        const Lt = new jt(
          new xt(0.5, 0.09, 0.07).translate(-0.25 - zt * 0.5, 0, 0),
          Bt(zt),
        );
        Ut.add(Lt);
      }
      (Ut.position.set(ot, 1.05, At),
        Ut.rotation.set(0, 0, 0.95),
        t.addGroup(Ut, B));
    }
  }
  const Ft = [],
    wt = (b, _, R, E = {}) => {
      const X = E.L ?? 6,
        H = E.W ?? 4.6,
        rt = E.wallH ?? 1.75,
        ut = E.ridgeH ?? 2.95,
        dt = Yt(b, 0, _, R),
        Ct = E.med ? z : E.burnt ? T : L;
      if (E.burnt)
        for (let zt = 0; zt < 9; zt++) {
          const Lt = a(),
            l0 = new _t(0.6 + a() * 1.2, 0.4 + a() * 0.9);
          (l0
            .rotateY(a() * M0)
            .rotateX((a() - 0.5) * 0.8)
            .translate(-X / 2 + Lt * X, 0.4 + a() * 1.6, (a() - 0.5) * H),
            t.add(T, N(l0.applyMatrix4(dt)), B));
        }
      else
        for (const zt of no(X, H, rt, ut, { collapse: E.collapse ?? 0 }))
          t.add(Ct, N(zt.applyMatrix4(dt)), B);
      const Q = X / 2,
        yt = H / 2,
        Tt = [];
      for (const zt of [-1, 1])
        for (const Lt of [-1, 1])
          Tt.push(
            Ht(I(zt * Q, 0, Lt * yt), I(zt * Q, rt, Lt * yt), 0.025, 0.025, 6),
          );
      for (const zt of [-1, 0, 1])
        Tt.push(Ht(I(zt * Q, 0, 0), I(zt * Q, ut, 0), 0.03, 0.03, 6));
      Tt.push(Ht(I(-Q, ut, 0), I(Q, ut, 0), 0.028, 0.028, 6));
      for (const zt of [-1, -1 / 3, 1 / 3, 1])
        for (const Lt of [-1, 1])
          Tt.push(
            Ht(I(zt * Q, rt, Lt * yt), I(zt * Q, ut, 0), 0.022, 0.022, 5),
          );
      if (!E.collapse)
        for (const zt of Tt) t.add(E.burnt ? T : D, N(zt.applyMatrix4(dt)), B);
      if (!E.burnt && !E.collapse) {
        const zt = E.med ? j : st,
          Lt = Math.hypot(yt, ut - rt);
        for (const l0 of [-1 / 3, 1 / 3])
          for (const o0 of [-1, 1]) {
            const p0 = new xt(0.1, 0.014, Lt)
              .translate(0, 0, -Lt / 2)
              .rotateX(-Math.atan2(ut - rt, yt));
            (o0 < 0 && p0.rotateY(Math.PI),
              p0.translate(l0 * Q, ut + 0.014, 0),
              t.add(zt, N(p0.applyMatrix4(dt)), B));
          }
        t.add(
          zt,
          N(new xt(X, 0.03, 0.14).translate(0, ut + 0.005, 0).applyMatrix4(dt)),
          B,
        );
      }
      if (!E.burnt) {
        t.add(
          W,
          N(
            new _t(X - 0.1, H - 0.1)
              .rotateX(-Math.PI / 2)
              .translate(0, 0.02, 0)
              .applyMatrix4(dt),
          ),
          B,
        );
        for (const zt of [-1, 1])
          for (let Lt = 0; Lt < 2; Lt++) {
            const l0 = -Q + 1.3 + Lt * 2.2,
              o0 = zt * (yt - 0.7);
            t.add(
              E.med ? x : A,
              N(
                new xt(1.9, 0.08, 0.7).translate(l0, 0.42, o0).applyMatrix4(dt),
              ),
              B,
            );
            for (const p0 of [-0.85, 0.85])
              t.add(
                o.steel,
                N(
                  new xt(0.04, 0.4, 0.66)
                    .translate(l0 + p0, 0.2, o0)
                    .applyMatrix4(dt),
                ),
                B,
              );
          }
      }
      if (!E.collapse && !E.burnt)
        for (const zt of [-1, -1 / 3, 1 / 3, 1])
          for (const Lt of [-1, 1]) {
            const l0 = I(zt * Q, rt, Lt * yt).applyMatrix4(dt),
              o0 = I(zt * Q * 1.04, 0.02, Lt * (yt + 1.3)).applyMatrix4(dt);
            (t.add(q, Ht(l0, o0, 0.006, 0.006, 3), B),
              t.add(
                o.steel,
                N(new It(0.012, 0.012, 0.22, 4).translate(o0.x, 0.06, o0.z)),
                B,
              ));
          }
      const kt = 0.12,
        ot = 0.8,
        At = (zt, Lt, l0, o0) => {
          const p0 = I(zt, 0, Lt).applyMatrix4(dt),
            D0 = I(l0, 0, o0).applyMatrix4(dt);
          S(
            Math.min(p0.x, D0.x) - kt,
            Math.max(p0.x, D0.x) + kt,
            Math.min(p0.z, D0.z) - kt,
            Math.max(p0.z, D0.z) + kt,
            2,
          );
        };
      !E.burnt && !(E.collapse > 0.5)
        ? (At(-Q, -yt, Q, -yt),
          At(-Q, yt, Q, yt),
          At(-Q, -yt, -Q, yt),
          At(Q, -yt, Q, -ot),
          At(Q, ot, Q, yt))
        : d(b, _, Q * 0.8, yt * 0.8, R, 1);
      const Ut = I(Q + 0.9, 0, 0).applyMatrix4(dt),
        Bt = I(Q - 1.4, 0, 0).applyMatrix4(dt);
      return (
        Ft.push({
          x: b,
          z: _,
          yaw: R,
          L: X,
          W: H,
          med: !!E.med,
          door: [Ut.x, Ut.z],
          inside: [Bt.x, Bt.z],
          M4: dt,
          wallH: rt,
          ridgeH: ut,
          burnt: !!E.burnt,
          collapse: E.collapse ?? 0,
        }),
        h.push([Ut.x, Ut.z, 1.8, 0.9]),
        Ft[Ft.length - 1]
      );
    };
  (wt(430.6, 116.2, 0),
    wt(430.6, 104.8, 0),
    wt(422.8, 110.6, 0, { L: 5, W: 4.2, ridgeH: 2.7 }),
    wt(481.4, 119.4, -Math.PI / 2, { L: 5, W: 4.2, ridgeH: 2.7 }),
    wt(430.2, 70.8, -Math.PI / 2),
    wt(480.2, 71.2, -Math.PI / 2, { L: 5, W: 4.2, ridgeH: 2.7 }));
  const Et = wt(471, 108.4, Math.PI, { med: !0, L: 8, W: 5, ridgeH: 3.1 });
  wt(472.6, 119.6, Math.PI);
  const P = wt(467, 71.2, -Math.PI / 2, { L: 6, W: 4.6 });
  (wt(426, 88.6, 0.1, { collapse: 0.9 }),
    wt(482.4, 90.4, Math.PI + 0.1, { burnt: !0 }));
  {
    const b = Et,
      _ = b.M4;
    for (const E of [-1, 1])
      t.add(
        J,
        Zt(new _t(1.4, 1.4), n.rect.cross).applyMatrix4(
          _.clone()
            .multiply(new gt().makeTranslation(0, 2.4, E * (b.W / 4 + 0.02)))
            .multiply(new gt().makeRotationX(E * -1.03)),
        ),
        B,
      );
    (t.add(
      J,
      Zt(new _t(1.1, 1.1), n.rect.cross).applyMatrix4(
        _.clone()
          .multiply(new gt().makeTranslation(b.L / 2 + 0.03, 2.25, 0))
          .multiply(new gt().makeRotationY(Math.PI / 2)),
      ),
      B,
    ),
      t.add(
        o.sign,
        Zt(new _t(1.4, 0.35), n.rect.triage).applyMatrix4(
          _.clone()
            .multiply(new gt().makeTranslation(b.L / 2 + 0.05, 1.75, 0))
            .multiply(new gt().makeRotationY(Math.PI / 2)),
        ),
        B,
      ));
    const R = I(b.L / 2 - 1.2, 1.9, 0).applyMatrix4(_);
    (l.push({
      pos: R,
      color: new Vt(1, 0.82, 0.6),
      cd: 30,
      range: 9,
      k: () => ($ ? 1 : 0),
      air: 1.2,
      airK: 0.35,
      kind: "tent",
    }),
      r.add(
        [
          I(b.L / 2 + 0.2, 1.2, 0).applyMatrix4(_).x,
          1.3,
          I(b.L / 2 + 0.2, 1.2, 0).applyMatrix4(_).z,
        ],
        new Vt(1, 0.8, 0.55).multiplyScalar(0.7),
        2.6,
        0,
      ));
  }
  let $ = !0;
  const lt = [
      { pos: [436.6, 108.6], aim: [447, 0, 101] },
      { pos: [465.8, 117.6], aim: [452, 0, 112] },
      { pos: [458.2, 71.4], aim: [451, 0, 88] },
    ],
    ft = { pos: [476.4, 82.6], yaw: 2.4 },
    Pt = (b) => {
      const _ = [],
        R = [];
      for (let X = 0; X < 3; X++) {
        const H = (X * M0) / 3 + 0.3;
        _.push(
          Ht(
            I(Math.cos(H) * 1.35, 0, Math.sin(H) * 1.35),
            I(Math.cos(H) * 0.08, 1.7, Math.sin(H) * 0.08),
            0.028,
            0.024,
            6,
          ),
        );
      }
      (_.push(Ht(I(0, 0.4, 0), I(0, 2.8, 0), 0.06, 0.06, 10)),
        _.push(Ht(I(0, 2.7, 0), I(0, 4.8, 0), 0.048, 0.048, 10)),
        _.push(Ht(I(0, 4.7, 0), I(0, 6.6, 0), 0.036, 0.036, 10)),
        _.push(new It(0.08, 0.08, 0.12, 10).translate(0, 2.75, 0)),
        _.push(new It(0.065, 0.065, 0.1, 10).translate(0, 4.75, 0)),
        _.push(new xt(1.5, 0.06, 0.06).translate(0, 6.6, 0)));
      for (const X of [-0.55, -0.18, 0.18, 0.55]) {
        const H = new gt()
          .makeTranslation(X, 6.72, 0)
          .multiply(new gt().makeRotationX(0.55));
        _.push(new xt(0.34, 0.3, 0.16).applyMatrix4(H));
        for (let rt = 0; rt < 4; rt++)
          _.push(
            new xt(0.34, 0.012, 0.06)
              .translate(0, -0.13 + rt * 0.08, -0.1)
              .applyMatrix4(H),
          );
        R.push(
          new _t(0.28, 0.24).translate(0, 0, b ? 0.082 : 0.081).applyMatrix4(H),
        );
      }
      return { iron: _, lens: R, H: 6.6 };
    },
    Wt = new Float32Array(4).fill(1),
    Dt = new ge({ color: new Vt(7, 7.6, 8.4), fog: !1 });
  ((Dt.onBeforeCompile = (b) => {
    ((b.uniforms.uFK = { value: Wt }),
      (b.vertexShader = b.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute float aFl;
varying float vFl;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
vFl = aFl;`,
        )),
      (b.fragmentShader = b.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uFK[4];
varying float vFl;`,
        )
        .replace(
          "#include <opaque_fragment>",
          `outgoingLight = mix(vec3(0.02, 0.022, 0.025), outgoingLight, uFK[int(vFl + 0.5)]);
#include <opaque_fragment>`,
        )));
  }),
    (Dt.customProgramCacheKey = () => "park3_floodlens"),
    (Dt.userData.noCast = !0));
  const e0 = [],
    n0 = [];
  lt.forEach((b, _) => {
    const [R, E] = b.pos,
      X = I(...b.aim),
      H = Math.atan2(X.x - R, X.z - E),
      rt = Pt(!0),
      ut = Yt(R, 0, E, H);
    for (const Ct of rt.iron) t.add(A, N(Ct.applyMatrix4(ut)), B);
    for (const Ct of rt.lens)
      (Ct.applyMatrix4(ut),
        Ct.setAttribute(
          "aFl",
          new $t(new Float32Array(Ct.attributes.position.count).fill(_), 1),
        ),
        n0.push(Ct));
    const dt = I(0, rt.H + 0.12, 0.2).applyMatrix4(ut);
    (e0.push({
      pos: dt,
      aim: X,
      cd: 650,
      range: 48,
      angle: 0.84,
      penumbra: 0.75,
      air: 3.4,
      airK: 0.8,
      i: _,
      shadowFar: 40,
    }),
      r.add(
        [dt.x, dt.y, dt.z],
        new Vt(0.9, 0.95, 1).multiplyScalar(1.6),
        3.2,
        60 + _,
      ),
      r.add([dt.x, dt.y - 0.5, dt.z], new Vt(0.3, 0.33, 0.38), 18, 60 + _, 34));
    for (let Ct = 0; Ct < 3; Ct++) {
      const Q = (Ct * M0) / 3 + 0.3;
      s.push({ x: R + Math.cos(Q) * 1.2, z: E + Math.sin(Q) * 1.2, r: 0.12 });
    }
    s.push({ x: R, z: E, r: 0.2 });
  });
  for (const [b, _, R, E] of [
    [437, 6.5, 104, 30],
    [452, 7.5, 97, 36],
    [467, 6.5, 104, 30],
  ])
    r.add([b, _, R], new Vt(0.075, 0.085, 0.105), E, 63, 44);
  {
    const b = Pt(!1),
      _ = Yt(ft.pos[0], 0.2, ft.pos[1], ft.yaw, Math.PI / 2 - 0.08, 0);
    for (const R of b.iron) t.add(A, N(R.applyMatrix4(_)), B);
    for (const R of b.lens) t.add(o.glassDead, R.applyMatrix4(_), B);
  }
  {
    const b = v0(n0),
      _ = new jt(b, Dt);
    ((_.name = "camp_flood_lenses"), f.add(_));
  }
  const s0 = [444.6, 72.4];
  {
    const [b, _] = s0,
      R = Yt(b, 0, _, Math.PI / 2 + 0.05),
      E = [
        Xt(2.3, 1.15, 1.1, 0.05).translate(0, 0.98, 0),
        Xt(2, 0.08, 1.2, 0.02).translate(0, 0.38, 0),
      ];
    for (const H of [-1, 1])
      E.push(
        new It(0.3, 0.3, 0.16, 16)
          .rotateX(Math.PI / 2)
          .translate(0.2, 0.3, H * 0.68),
      );
    E.push(Ht(I(1.15, 0.42, 0), I(2.1, 0.32, 0), 0.04, 0.04, 6));
    for (const H of E) t.add(A, N(H.applyMatrix4(R)), B);
    t.add(
      o.steel,
      N(
        Ht(I(-0.7, 1.55, 0.3), I(-0.7, 2.05, 0.3), 0.05, 0.05, 8).applyMatrix4(
          R,
        ),
      ),
      B,
    );
    for (let H = 0; H < 6; H++)
      t.add(
        o.rubber,
        N(
          new xt(0.5, 0.03, 0.01)
            .translate(0.6, 0.65 + H * 0.08, 0.556)
            .applyMatrix4(R),
        ),
        B,
      );
    (t.add(
      o.sign,
      Zt(new _t(0.62, 0.31), n.rect.genPanel)
        .translate(-0.55, 1.05, 0.556)
        .applyMatrix4(R),
      B,
    ),
      d(b, _, 0.65, 1.25, Math.PI / 2 + 0.05, 1.6));
    const X = I(-0.2, 1.3, 0.56).applyMatrix4(R);
    r.add([X.x, X.y, X.z], new Vt(1.6, 0.9, 0.2), 0.35, 0);
    for (const H of lt) {
      const [rt, ut] = H.pos,
        dt = [];
      for (let Q = 0; Q <= 12; Q++) {
        const yt = Q / 12,
          Tt = b + (rt - b) * yt + Math.sin(yt * Math.PI * 2 + rt) * 0.8,
          kt = _ + (ut - _) * yt + Math.cos(yt * Math.PI * 3) * 0.6;
        dt.push(I(Tt, 0.025, kt));
      }
      const Ct = dt.map((Q) => {
        const yt = Q.x - y,
          Tt = Q.z - m,
          kt = Math.hypot(yt, Tt);
        return kt < 12 ? I(y + (yt / kt) * 12, Q.y, m + (Tt / kt) * 12) : Q;
      });
      t.add(
        o.rubber,
        k0(Ct, () => 0.022, 5),
        B,
      );
    }
    (k(442, 70, 447.6, 70, 2), k(441.6, 70.2, 441.6, 74.6, 2));
  }
  function k(b, _, R, E, X = 3) {
    const H = Math.hypot(R - b, E - _),
      rt = Math.max(1, Math.round(H / 0.56)),
      ut = (R - b) / H,
      dt = (E - _) / H,
      Ct = -Math.atan2(dt, ut);
    for (let Q = 0; Q < X; Q++)
      for (let yt = 0; yt < rt - (Q % 2); yt++) {
        const Tt = (yt + 0.5 + (Q % 2) * 0.5) * (H / rt) + (a() - 0.5) * 0.04;
        for (const kt of [-0.17, 0.17])
          it.push([
            b + ut * Tt - dt * kt,
            0.075 + Q * 0.14,
            _ + dt * Tt + ut * kt,
            Ct + (a() - 0.5) * 0.12,
          ]);
      }
    S(
      Math.min(b, R) - 0.2,
      Math.max(b, R) + 0.2,
      Math.min(_, E) - 0.2,
      Math.max(_, E) + 0.2,
      0.15 * X + 0.1,
    );
  }
  (k(434.6, 127.6, 439.4, 127.6, 5),
    k(434.6, 127.6, 434.6, 130.6, 5),
    k(439.4, 127.6, 439.4, 129.4, 4),
    k(447, 79, 456, 79, 3),
    k(461.4, 76, 463.8, 76, 3));
  const O = (b, _, R, E, X) => {
      const H = Re(b, _);
      return (
        H.group.position.set(R, 0, E),
        (H.group.rotation.y = X),
        H.group.updateMatrixWorld(!0),
        t.addGroup(H.group, B),
        H
      );
    },
    ht = O(
      "armytruck",
      { burnt: !1, seed: 4, doors: { rr: 1.3 } },
      484.6,
      103.6,
      Math.PI + 0.06,
    );
  (d(484.6, 103.6, 1.3, 4, Math.PI + 0.06, 3), ht.update && c.push(ht.update));
  const U = { x: 432.4, z: 92, yaw: 0.08 },
    vt = O(
      "van",
      { burnt: !1, color: "#f2f0ea", seed: 9, doors: { fl: 0.9 } },
      U.x,
      U.z,
      U.yaw,
    );
  (d(U.x, U.z, 0.95, 2.45, U.yaw, 2), vt.update && c.push(vt.update));
  const ct = Yt(U.x, 0, U.z, U.yaw);
  {
    let b = 0.86;
    vt.group.updateMatrixWorld(!0);
    {
      const R = new gt().copy(vt.group.matrixWorld).invert(),
        E = new a0();
      vt.group.traverse((X) => {
        if (!X.isMesh) return;
        const H = X.geometry.attributes.position,
          rt = X.matrixWorld;
        for (let ut = 0; ut < H.count; ut += 3)
          (E.fromBufferAttribute(H, ut).applyMatrix4(rt).applyMatrix4(R),
            Math.abs(E.y - 1.25) < 0.1 &&
              E.z > -1.9 &&
              E.z < 0.4 &&
              (b = Math.max(b, Math.abs(E.x))));
      });
    }
    for (const R of [-1, 1]) {
      const E = Zt(new _t(2.6, 0.62), n.rect.ambulance)
        .rotateY((R * Math.PI) / 2)
        .translate(R * (b + 0.008), 1.22, -0.7);
      t.add(o.sign, E.applyMatrix4(ct), B);
    }
    (t.add(
      o.sign,
      Zt(new _t(1.1, 0.28), n.rect.ambFront)
        .translate(0, 1, 2.36)
        .applyMatrix4(ct),
      B,
    ),
      t.add(
        J,
        Zt(new _t(0.9, 0.9), n.rect.cross)
          .rotateX(-Math.PI / 2)
          .translate(0, 2, -0.9)
          .applyMatrix4(ct),
        B,
      ),
      t.add(
        o.steel,
        N(new xt(1.36, 0.06, 0.3).translate(0, 2.02, 0.95).applyMatrix4(ct)),
        B,
      ));
    for (const R of [-1, 1])
      for (let E = 0; E < 2; E++)
        t.add(
          R > 0 ? Z : tt,
          N(
            new xt(0.28, 0.1, 0.24)
              .translate(R * (0.18 + E * 0.32), 2.1, 0.95)
              .applyMatrix4(ct),
          ),
          B,
        );
    const _ = I(1.6, 0, -1.2).applyMatrix4(ct);
    w0(_.x, _.z, U.yaw + Math.PI / 2 + 0.3, !0);
  }
  const pt = I(0, 2.4, 0.95).applyMatrix4(ct);
  (r.add(
    [
      I(0.35, 2.12, 1.1).applyMatrix4(ct).x,
      2.12,
      I(0.35, 2.12, 1.1).applyMatrix4(ct).z,
    ],
    new Vt(2.4, 0.15, 0.1),
    1.6,
    70,
  ),
    r.add(
      [
        I(-0.35, 2.12, 1.1).applyMatrix4(ct).x,
        2.12,
        I(-0.35, 2.12, 1.1).applyMatrix4(ct).z,
      ],
      new Vt(0.15, 0.4, 2.6),
      1.6,
      71,
    ));
  let bt = !0;
  const Ot = (b) => {
      const _ = (b * 1.45) % 1,
        R = (H) => (H % 0.25 < 0.09 ? 1 : 0),
        E = _ < 0.5 ? R(_) : 0,
        X = _ >= 0.5 ? R(_ - 0.5) : 0;
      return { red: bt ? E : 0, blue: bt ? X : 0 };
    },
    Rt = new Vt(),
    Kt = {
      pos: pt,
      cd: 16,
      airK: 1.4,
      air: 2.2,
      k: 0,
      state: (b) => {
        const _ = Ot(b);
        return (
          Rt.setRGB(_.red * 1 + _.blue * 0.12, 0.05, _.blue * 1 + _.red * 0.05),
          { k: Math.max(_.red, _.blue), color: Rt }
        );
      },
    },
    r0 = [],
    St = Gt(new u0({ map: n.tex, roughness: 0.75 }), "crate"),
    Qt = (b, _, R, E = 0, X = [0.9, 0.5, 0.6]) => {
      const H = Yt(b, E, _, R);
      (t.add(
        A,
        N(
          Xt(X[0], X[1], X[2], 0.02)
            .translate(0, X[1] / 2, 0)
            .applyMatrix4(H),
        ),
        B,
      ),
        t.add(
          St,
          Zt(new _t(X[0] * 0.8, X[1] * 0.6), n.rect.crate)
            .translate(0, X[1] / 2, X[2] / 2 + 0.004)
            .applyMatrix4(H),
          B,
        ),
        E === 0 && d(b, _, X[0] / 2, X[2] / 2, R, X[1]));
    };
  for (const [b, _, R, E] of [
    [485.6, 109.4, 0.1, 0],
    [484.4, 109.6, -0.1, 0],
    [485, 109.5, 0.05, 0.5],
    [486.6, 110.8, 0.6, 0],
    [462.6, 73.6, 0.2, 0],
    [462.4, 73.6, 0.25, 0.5],
    [463.6, 69, 1.4, 0],
  ])
    Qt(b, _, R, E);
  {
    const b = Ke(483, 110.6, 0.4, w);
    (t.addGroup(b.statics, B), f.add(b.group), r0.push(b));
    const _ = Ke(461.2, 70, -0.6, w);
    (t.addGroup(_.statics, B), f.add(_.group), r0.push(_));
  }
  for (let b = 0; b < 6; b++)
    t.add(
      qt("water", 6982304, { rough: 0.2, metal: 0.1 }),
      N(
        Xt(0.38, 0.26, 0.26, 0.03).translate(
          477.4 + (b % 3) * 0.4,
          0.27 + Math.floor(b / 3) * 0.27,
          116.2,
        ),
      ),
      B,
    );
  (t.add(o.boards, N(new xt(1.2, 0.14, 0.8).translate(477.8, 0.07, 116.2)), B),
    S(477.2, 478.4, 115.8, 116.6, 0.7));
  function w0(b, _, R, E = !1) {
    const X = Yt(b, 0, _, R);
    for (const H of [-1, 1])
      t.add(
        o.steel,
        N(
          Ht(
            I(-1.1, 0.2, H * 0.27),
            I(1.1, 0.2, H * 0.27),
            0.016,
            0.016,
            6,
          ).applyMatrix4(X),
        ),
        B,
      );
    for (const H of [-0.85, 0.85])
      for (const rt of [-1, 1])
        t.add(
          o.steel,
          N(
            Ht(
              I(H, 0, rt * 0.27),
              I(H, 0.2, rt * 0.27),
              0.012,
              0.012,
              5,
            ).applyMatrix4(X),
          ),
          B,
        );
    (t.add(
      K,
      N(new xt(1.9, 0.015, 0.52).translate(0, 0.2, 0).applyMatrix4(X)),
      B,
    ),
      E && S0(X.clone().multiply(new gt().makeTranslation(0, 0.21, 0)), o.wool),
      d(b, _, 1.15, 0.32, R, 0.5));
  }
  function S0(b, _) {
    const R = ra(a, { bloodAt: 0.25 });
    (t.add(_, R.cloth.applyMatrix4(b), B),
      R.blood &&
        _ !== p &&
        _ !== g &&
        t.add(o.blood, R.blood.applyMatrix4(b), B));
  }
  (w0(467.4, 112.4, 0.05, !0), w0(465, 104.6, -0.3), w0(476, 101.6, 1.4, !0));
  for (let b = 0; b < 5; b++) {
    const _ = Yt(467 + b * 1, 0, 113.4, Math.PI / 2 + (a() - 0.5) * 0.15);
    (S0(_, b % 2 ? g : p), S(466.5 + b, 467.5 + b, 112.4, 114.4, 0.35));
  }
  {
    const [b, _] = [P.door[0] + 0.4, P.door[1] + 0.6],
      R = Yt(b, 0, _, 0.2);
    t.add(
      Y,
      N(new xt(1.4, 0.035, 0.7).translate(0, 0.74, 0).applyMatrix4(R)),
      B,
    );
    for (const [X, H] of [
      [-0.62, -0.3],
      [0.62, -0.3],
      [-0.62, 0.3],
      [0.62, 0.3],
    ])
      t.add(
        o.steel,
        N(new It(0.014, 0.014, 0.74, 6).translate(X, 0.37, H).applyMatrix4(R)),
        B,
      );
    (t.add(
      A,
      N(Xt(0.44, 0.26, 0.3, 0.02).translate(-0.2, 0.89, 0).applyMatrix4(R)),
      B,
    ),
      t.add(
        o.rubber,
        N(
          Xt(0.22, 0.06, 0.08, 0.02)
            .translate(0.18, 0.79, 0.1)
            .rotateY(0.4)
            .applyMatrix4(R),
        ),
        B,
      ),
      t.add(
        o.steel,
        Ht(
          I(-0.36, 1, -0.1).applyMatrix4(R),
          I(-0.42, 2.1, -0.16).applyMatrix4(R),
          0.004,
          0.003,
          4,
        ),
        B,
      ));
    for (let X = 0; X < 5; X++) {
      const H = new _t(0.21, 0.28).rotateX(-Math.PI / 2).rotateY(a() * M0);
      (Zt(H, n.rect["paper" + X]),
        t.add(
          o.paper,
          H.translate(0, 0.76 + X * 0.002, 0).applyMatrix4(
            R.clone().multiply(
              new gt().makeTranslation(
                0.25 + (a() - 0.5) * 0.4,
                0,
                (a() - 0.5) * 0.3,
              ),
            ),
          ),
          B,
        ));
    }
    (d(b, _, 0.72, 0.38, 0.2, 0.8), Mt(b - 0.2, _ + 0.9, Math.PI + 0.4));
    const E = I(-0.2, 0.92, 0.155).applyMatrix4(R);
    (r.add([E.x, E.y, E.z], new Vt(0.3, 2.2, 0.4), 0.22, 0),
      (M.radio = [b, 0.9, _]));
  }
  const J0 = [439.2, 113.6];
  {
    const [b, _] = J0;
    (t.add(G, N(new It(0.29, 0.29, 0.88, 18, 1, !0).translate(b, 0.44, _)), B),
      t.add(o.rubber, N(new It(0.28, 0.28, 0.02, 18).translate(b, 0.7, _)), B),
      s.push({ x: b, z: _, r: 0.36 }),
      u.push({
        x: b,
        y: 0.72,
        z: _,
        s: 0.55,
        k: 1,
        smoke: 0.8,
        kind: "brazier",
      }),
      Mt(437.8, 112.4, 0.9),
      Mt(440.4, 112.6, -1.2, !0));
  }
  u.push({
    x: 482,
    y: 0.05,
    z: 90,
    s: 0.45,
    k: 0.8,
    wide: 2.2,
    smoke: 1.4,
    kind: "tent",
  });
  const la = [
    [443.2, 117],
    [446, 109.8],
    [451.8, 113],
    [453, 106],
    [441.4, 108],
    [455.6, 101],
    [440.4, 98],
    [462.6, 101.4],
    [458.6, 82],
    [445.6, 121.6],
    [449.8, 118.6],
  ];
  for (const [b, _] of la) {
    if (!C(b, _, 0.6)) continue;
    const R = a(),
      E = a() * M0,
      X = Yt(b, 0, _, E);
    (R < 0.4
      ? t.add(
          o.cloth,
          N(Xt(0.66, 0.24, 0.45, 0.05).translate(0, 0.12, 0).applyMatrix4(X)),
          B,
        )
      : R < 0.7
        ? t.add(
            [o.cloth, o.cloth2, o.blue][Math.floor(a() * 3)],
            N(Xt(0.5, 0.3, 0.3, 0.1, 2).translate(0, 0.15, 0).applyMatrix4(X)),
            B,
          )
        : t.add(
            o.cloth2,
            N(
              Xt(0.45, 0.66, 0.24, 0.04)
                .rotateX(Math.PI / 2)
                .translate(0, 0.12, 0)
                .applyMatrix4(X),
            ),
            B,
          ),
      mt(b + 0.6, _ + 0.3));
  }
  {
    const b = qt("loo", 1985146, { rough: 0.55 }),
      _ = qt("looroof", 13159624, { rough: 0.5 });
    for (let R = 0; R < 4; R++) {
      const E = 420.8 + R * 1.32,
        X = 66.8,
        H = Yt(E, 0, X, Math.PI);
      (t.add(
        b,
        N(Xt(1.18, 2.2, 1.18, 0.04).translate(0, 1.12, 0).applyMatrix4(H)),
        B,
      ),
        t.add(
          _,
          N(Xt(1.24, 0.12, 1.24, 0.03).translate(0, 2.26, 0).applyMatrix4(H)),
          B,
        ));
      const rt = R === 2;
      t.add(
        b,
        N(
          new xt(0.86, 1.9, 0.04)
            .translate(rt ? 0.43 : 0, 1.02, 0)
            .applyMatrix4(
              H.clone()
                .multiply(new gt().makeTranslation(rt ? -0.43 : 0, 0, 0.6))
                .multiply(new gt().makeRotationY(rt ? 1.6 : 0)),
            ),
        ),
        B,
      );
    }
    S(420.1, 425.2, 66.1, 67.5, 2.3);
  }
  {
    const R = Yt(436.6, 0, 76.6, 0.25);
    t.add(
      A,
      N(
        new It(0.62, 0.62, 2.4, 18)
          .rotateZ(Math.PI / 2)
          .translate(0, 1.15, 0)
          .applyMatrix4(R),
      ),
      B,
    );
    for (const E of [-1, 1])
      (t.add(
        o.rubber,
        N(
          new It(0.34, 0.34, 0.22, 14)
            .rotateX(Math.PI / 2)
            .translate(0, 0.34, E * 0.72)
            .applyMatrix4(R),
        ),
        B,
      ),
        t.add(
          A,
          N(
            new z0(0.62, 14, 10, 0, M0, 0, Math.PI / 2)
              .rotateZ((E * Math.PI) / 2)
              .translate(E * 1.2, 1.15, 0)
              .applyMatrix4(R),
          ),
          B,
        ));
    (t.add(
      A,
      Ht(
        I(1.2, 0.45, 0).applyMatrix4(R),
        I(2.3, 0.3, 0).applyMatrix4(R),
        0.04,
        0.04,
        6,
      ),
      B,
    ),
      t.add(
        o.steel,
        N(
          new It(0.03, 0.03, 0.3, 6)
            .rotateX(Math.PI / 2)
            .translate(-0.6, 0.62, 0.62)
            .applyMatrix4(R),
        ),
        B,
      ),
      d(436.6, 76.6, 1.85, 0.75, 0.25, 1.8));
  }
  (O(
    "keitruck",
    { burnt: !1, color: "#3e4428", seed: 21, doors: { fl: 1.1, fr: 0.9 } },
    472.6,
    95.6,
    0.4,
  ),
    d(472.6, 95.6, 0.85, 1.75, 0.4, 1.8));
  {
    const b = Yt(462.8, 0.28, 110.6, 0.8, 0, Math.PI / 2 - 0.2);
    for (const _ of [-1, 1])
      (t.add(
        o.steel,
        new pe(0.3, 0.018, 6, 22)
          .rotateY(Math.PI / 2)
          .translate(_ * 0.3, 0.3, 0)
          .applyMatrix4(b),
        B,
      ),
        t.add(
          o.rubber,
          new pe(0.3, 0.012, 6, 22)
            .rotateY(Math.PI / 2)
            .translate(_ * 0.31, 0.3, 0)
            .applyMatrix4(b),
          B,
        ));
    (t.add(
      o.cloth,
      N(new xt(0.56, 0.04, 0.44).translate(0, 0.5, 0.05).applyMatrix4(b)),
      B,
    ),
      t.add(
        o.cloth,
        N(new xt(0.56, 0.44, 0.04).translate(0, 0.74, -0.18).applyMatrix4(b)),
        B,
      ));
  }
  for (let b = 0; b < 34; b++) {
    const _ = 438 + a() * 22,
      R = 100 + a() * 26;
    if (!C(_, R, 1.2) || Math.abs(_ - 447.6) < 1.1) continue;
    const E = a() * M0,
      X = Yt(_, 0, R, E),
      H = a();
    if (H < 0.3)
      t.add(
        [o.cloth, o.cloth2, o.blue][b % 3],
        N(
          Xt(0.5 + a() * 0.2, 0.22, 0.34, 0.06, 1)
            .translate(0, 0.11, 0)
            .applyMatrix4(X),
        ),
        B,
      );
    else if (H < 0.5)
      t.add(
        o.cloth2,
        N(Xt(0.45, 0.24, 0.66, 0.04).translate(0, 0.12, 0).applyMatrix4(X)),
        B,
      );
    else if (H < 0.75) {
      const rt = new _t(0.9, 0.6, 6, 4),
        ut = rt.attributes.position;
      for (let dt = 0; dt < ut.count; dt++)
        ut.setZ(
          dt,
          Math.sin(ut.getX(dt) * 9 + b) * 0.03 +
            Math.sin(ut.getY(dt) * 11) * 0.02 +
            0.03,
        );
      (rt.rotateX(-Math.PI / 2),
        rt.computeVertexNormals(),
        t.add(b % 2 ? o.blanket : o.cloth, N(rt.applyMatrix4(X)), B));
    } else mt(_, R);
  }
  {
    const b = (_, R, E, X, H, rt) => {
      const ut = Yt(_, 0, R, E);
      (t.add(
        o.sign,
        Zt(new _t(H, rt), X).translate(0, 1.6, 0.03).applyMatrix4(ut),
        B,
      ),
        t.add(
          o.steel,
          N(
            new xt(H + 0.05, rt + 0.05, 0.04)
              .translate(0, 1.6, 0)
              .applyMatrix4(ut),
          ),
          B,
        ));
      for (const dt of [-1, 1])
        t.add(
          o.steel,
          N(
            new xt(0.05, 1.6 + rt / 2, 0.05)
              .translate(dt * (H / 2 - 0.1), (1.6 + rt / 2) / 2, -0.03)
              .applyMatrix4(ut),
          ),
          B,
        );
      d(_, R, H / 2 + 0.05, 0.15, E, 2);
    };
    (b(441, 122.4, 0, n.rect.civilians, 1.8, 0.45),
      b(456, 104.4, -0.25, n.rect.airRescue, 1.8, 0.45));
  }
  const B0 = new P0();
  {
    const [b, _] = [466.4, 84];
    (t.add(x, N(Ht(I(b, 0, _), I(b, 5.2, _), 0.05, 0.035, 8)), B),
      s.push({ x: b, z: _, r: 0.12 }));
    const R = new It(0.28, 0.12, 1.6, 12, 4, !0)
        .rotateZ(Math.PI / 2)
        .translate(0.8, 0, 0),
      E = [],
      X = R.attributes.position;
    for (let ut = 0; ut < X.count; ut++) {
      const dt = X.getX(ut) / 1.6,
        Ct = Math.floor(dt * 5) % 2;
      E.push(Ct ? 0.9 : 1, Ct ? 0.88 : 0.36, Ct ? 0.84 : 0.08);
    }
    R.setAttribute("color", new H0(E, 3));
    const H = new jt(
      R,
      Gt(new u0({ vertexColors: !0, roughness: 0.8, side: y0 }), "sock"),
    );
    ((H.castShadow = !0), B0.add(H), B0.position.set(b, 5.05, _), f.add(B0));
    const rt = new jt(
      new z0(0.06, 8, 6),
      new ge({ color: new Vt(5, 0.3, 0.2), fog: !1 }),
    );
    (rt.position.set(b, 5.28, _),
      f.add(rt),
      r.add([b, 5.28, _], new Vt(1.8, 0.1, 0.05), 0.9, 0));
  }
  const ia = (b, _, R, E, X) => {
    const H = new j0(0.5, 14),
      rt = H.attributes.position;
    for (let ut = 1; ut < rt.count; ut++) {
      const dt = 0.6 + a() * 0.6;
      rt.setXY(ut, rt.getX(ut) * dt, rt.getY(ut) * dt);
    }
    (H.rotateX(-Math.PI / 2)
      .scale(R, 1, E)
      .rotateY(X)
      .translate(b, 0.035, _),
      t.add(o.blood, N(H), B));
  };
  for (const [b, _, R, E] of [
    [445.6, 119.4, 1.6, 0.9],
    [449.4, 110.2, 1, 0.7],
    [442.4, 101.6, 2.2, 0.8],
    [466.8, 110.4, 1.4, 1],
    [458.4, 96.2, 1.2, 0.8],
    [436.4, 99.4, 1.6, 0.6],
    [474.6, 98.4, 0.9, 0.7],
    [452, 123.6, 3, 0.5],
  ])
    ia(b, _, R, E, a() * M0);
  function ca(b, _) {
    for (const E of c) E(b, _);
    const R = Ot(_);
    ((Z.emissiveIntensity = 0.3 + R.red * 9),
      (tt.emissiveIntensity = 0.3 + R.blue * 9),
      (r.K[70] = R.red),
      (r.K[71] = R.blue),
      (B0.rotation.y =
        2.3 + Math.sin(_ * 0.13) * 0.5 + Math.sin(_ * 0.71) * 0.12),
      (B0.children[0].rotation.z =
        -0.35 + 0.25 * Math.sin(_ * 0.37) - 0.1 * Math.sin(_ * 1.7)),
      z.userData.glow && (z.userData.glow.value = $ ? 1 : 0));
  }
  {
    const b = lo(),
      _ = new U0(b, K, it.length);
    _.name = "camp_sandbags";
    const R = new gt(),
      E = new C0(),
      X = new q0(),
      H = new a0(),
      rt = new a0();
    (it.forEach(([ut, dt, Ct, Q], yt) => {
      (X.set((a() - 0.5) * 0.08, Q, (a() - 0.5) * 0.08, "YXZ"),
        E.setFromEuler(X));
      const Tt = 0.92 + a() * 0.16;
      _.setMatrixAt(
        yt,
        R.compose(rt.set(ut, dt, Ct), E, H.set(Tt, 0.9 + a() * 0.2, Tt)),
      );
    }),
      (_.castShadow = !0),
      (_.receiveShadow = !0),
      f.add(_));
  }
  for (const b of Ft) !b.burnt && b.collapse < 0.5 && M.push(b.inside, b.door);
  return {
    group: f,
    colliders: w,
    circles: s,
    sources: l,
    floods: e0,
    ambulance: Kt,
    fires: u,
    update: ca,
    tents: Ft,
    barriers: nt,
    crates: r0,
    spots: M,
    wear: h,
    mud: v,
    gen: s0,
    brazier: J0,
    lensK: Wt,
    setAmbulance(b) {
      bt = !!b;
    },
    setMedical(b) {
      $ = !!b;
    },
    get barMats() {
      return [Z, tt];
    },
  };
}
