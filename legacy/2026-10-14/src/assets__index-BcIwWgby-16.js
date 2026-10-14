// assets__index-BcIwWgby 16 — math
// Lines 4029-4664 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Qn(s, o) {
  const t = new Kt();
  ((t.name = "outside"), (t.visible = !1));
  const u = new Map(),
    e = (ft) => {
      (ft.updateMatrixWorld(!0),
        ft.traverse((X) => {
          if (X.isMesh && !X.isInstancedMesh) {
            const rt = X.geometry.clone().applyMatrix4(X.matrixWorld);
            (rt.attributes.uv ||
              rt.setAttribute(
                "uv",
                new vt(new Float32Array(rt.attributes.position.count * 2), 2),
              ),
              u.has(X.material) || u.set(X.material, []),
              u.get(X.material).push(rt));
          }
        }));
    },
    r = [],
    a = { uFireT: { value: 0 } },
    p = zs(At("ext_brick"), a),
    i = zs(At("concrete_grey"), a),
    d = zs(At("plaster_bare"), a),
    y = () => [p, i, d][Math.floor(o() * 3)],
    w = [],
    g = (ft, X, rt, ct, ut, mt, gt, kt = !0) => {
      let zt = ut ? ft : rt;
      const Et = ut ? X : ct;
      for (; zt < Et - 2;) {
        const o0 = Math.min(Et - zt, 6 + o() * 6),
          E0 = o() < 0.2 ? 2 + o() * 3 : 0.15,
          oe = mt + o() * (gt - mt),
          Pe = ut
            ? Zs(zt, zt + o0, rt, ct, oe, o)
            : Zs(ft, X, zt, zt + o0, oe, o),
          qo = y();
        (kt &&
          (w.push({ g: Pe, m: qo }),
          ut
            ? r.push({ x0: zt, x1: zt + o0, z0: rt, z1: ct, y0: 0, y1: oe })
            : r.push({ x0: ft, x1: X, z0: zt, z1: zt + o0, y0: 0, y1: oe })),
          (zt += o0 + E0));
      }
    };
  (g(-30, -16.6, 11.6, 39.5, !1, 9, 17),
    g(16.6, 30, 11.6, 39.5, !1, 9, 17, !1),
    g(-34, 34, -34, -20, !0, 12, 26),
    g(-34, -18, -18, 11, !1, 8, 16),
    g(18, 34, -18, 11, !1, 8, 16, !1),
    g(-34, -9, 62, 76, !0, 10, 18),
    g(9, 34, 62, 76, !0, 10, 18),
    g(-30, -13, 40, 60, !1, 9, 15),
    g(13, 30, 40, 60, !1, 9, 15, !1));
  const z = new Map();
  for (const ft of w) (z.has(ft.m) || z.set(ft.m, []), z.get(ft.m).push(ft.g));
  for (const [ft, X] of z) {
    const rt = new bt(X0(X), ft);
    ((rt.castShadow = !0), (rt.receiveShadow = !0), t.add(rt));
  }
  const x = At("concrete_grey"),
    v = At("ruin_ash"),
    n = (ft, X, rt, ct) => {
      const ut = new t0(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        mt = ut.attributes.position;
      for (let gt = 0; gt < mt.count; gt++) {
        const kt = 1 + (o() - 0.5) * 0.35;
        mt.setXYZ(
          gt,
          mt.getX(gt) * rt * kt,
          mt.getY(gt) * ct * (0.8 + o() * 0.4),
          mt.getZ(gt) * rt * kt,
        );
      }
      return (ut.computeVertexNormals(), ut.translate(ft, -0.05, X), Ct(ut));
    },
    l = [
      [-9.5, 17.5, 2.2, 0.9],
      [11.2, 21.5, 2.6, 1.1],
      [-12.5, 30.5, 2, 0.8],
      [8.5, 33.5, 1.7, 0.7],
      [-5.5, 14.8, 1.3, 0.5],
    ],
    f = l.map(
      ([ft, X, rt, ct]) => (
        r.push({
          x0: ft - rt * 0.75,
          x1: ft + rt * 0.75,
          z0: X - rt * 0.75,
          z1: X + rt * 0.75,
          y0: 0,
          y1: ct,
        }),
        n(ft, X, rt, ct)
      ),
    ),
    h = new bt(X0(f), v);
  ((h.receiveShadow = !0), (h.castShadow = !0), t.add(h));
  const c = [];
  for (let ft = 0; ft < 160; ft++) {
    const X = l[ft % l.length],
      rt = o() * 6.28,
      ct = X[2] * (0.4 + o() * 1.1),
      ut = 0.12 + o() * 0.4,
      mt = new qt(ut * (0.6 + o()), ut * (0.3 + o() * 0.5), ut * (0.6 + o()));
    (mt
      .rotateX(o() * 0.8)
      .rotateY(o() * 3)
      .rotateZ(o() * 0.8)
      .translate(
        X[0] + Math.cos(rt) * ct,
        ut * 0.15 + Math.max(0, X[3] * (1 - ct / X[2])) * 0.8,
        X[1] + Math.sin(rt) * ct,
      ),
      c.push(Ct(mt)));
  }
  const M = new bt(X0(c), x);
  ((M.castShadow = !0),
    (M.receiveShadow = !0),
    t.add(M),
    At("ruin_char"),
    At("rust_metal"));
  const m = (ft, X, rt, ct = !1, ut = "sedan", mt = 1) => {
    const gt = Ta(ut, { burnt: !0, side: ct, seed: mt, doors: {} });
    (gt.group.position.set(ft, 0, X),
      (gt.group.rotation.y = rt),
      gt.group.updateMatrixWorld(!0),
      e(gt.group));
    const kt = Math.abs(Math.sin(rt)),
      zt = Math.abs(Math.cos(rt)),
      Et = (gt.size.w * zt + gt.size.l * kt) / 2,
      o0 = (gt.size.w * kt + gt.size.l * zt) / 2;
    return (
      r.push({
        x0: ft - Et,
        x1: ft + Et,
        z0: X - o0,
        z1: X + o0,
        y0: 0,
        y1: 1.5,
      }),
      gt
    );
  };
  (m(-6.5, 21, 0.4, !1, "sedan", 3),
    m(7.2, 27.5, -1.2, !1, "taxi", 4),
    m(-10.8, 35.5, 1.9, !0, "kei", 5),
    m(4.6, 17.2, 1.5, !1, "van", 6));
  {
    const ft = At("church_stone"),
      X = new bt(
        Ct(
          new s0(2.2, 0.28, 10, 40).rotateX(Math.PI / 2).translate(0, 0.35, 24),
        ),
        ft,
      ),
      rt = new bt(
        Ct(new Ms(2.1, 40).rotateX(-Math.PI / 2).translate(0, 0.12, 24)),
        v,
      ),
      ct = new bt(Ct(new Pt(0.3, 0.42, 1.6, 12).translate(0, 0.8, 24)), ft),
      ut = new bt(Ct(new Pt(0.9, 0.35, 0.35, 16).translate(0, 1.7, 24)), ft);
    for (const mt of [X, rt, ct, ut])
      ((mt.castShadow = !0), (mt.receiveShadow = !0), t.add(mt));
    r.push({ x0: -2.5, x1: 2.5, z0: 21.5, z1: 26.5, y0: 0, y1: 0.7 });
  }
  {
    const ft = At("iron_black"),
      X = [
        new dt(-2.6, 0, 14.6),
        new dt(-2.6, 2.2, 14.6),
        new dt(-3, 3.3, 15),
        new dt(-4, 3.6, 15.8),
      ],
      rt = new bt(new Es(new ws(X), 16, 0.07, 8), ft);
    ((rt.castShadow = !0),
      t.add(rt),
      r.push({ x0: -2.8, x1: -2.4, z0: 14.4, z1: 14.8, y0: 0, y1: 3 }));
  }
  const k = tr(o, r, e);
  t.add(k.group);
  const S = pn(s, a);
  (t.add(S.group), r.push(...S.colliders));
  const A = new Kt();
  A.name = "church";
  const b = At("church_stone"),
    P = At("garden_roof"),
    _ = At("door_wood"),
    I = r0,
    R = 12,
    V = $n(I, o),
    L = new bt(X0(V.outer), b);
  ((L.castShadow = !0),
    (L.receiveShadow = !0),
    (L.name = "church_shell"),
    A.add(L));
  const K = new bt(
    X0(V.inner),
    wo(At("church_ashlar"), { name: "church_ashlar_lit" }),
  );
  ((K.castShadow = !0),
    (K.receiveShadow = !0),
    (K.name = "church_inner"),
    A.add(K));
  const j = new bt(
    X0(V.char),
    wo(At("ruin_char"), { name: "church_char_lit" }),
  );
  ((j.castShadow = !0),
    (j.receiveShadow = !0),
    (j.name = "church_timbers"),
    A.add(j));
  const O = I.tower,
    J = new bt(
      Ct(
        new no(3.4, 10, 4)
          .rotateY(Math.PI / 4)
          .translate((O.x0 + O.x1) / 2, 27, (O.z0 + O.z1) / 2),
      ),
      P,
    );
  ((J.castShadow = !0), A.add(J));
  {
    I.z1 - I.z0 + 0.6;
    const ft = (I.x1 - I.x0) / 2 + 0.5,
      X = 6.5,
      rt = Math.hypot(ft, X),
      ct = Math.atan2(X, ft);
    for (const ut of [-1, 1]) {
      const mt =
        ut < 0
          ? [
              [I.z0 - 0.3, 48],
              [53.5, I.z1 + 0.3],
            ]
          : [[I.z0 - 0.3, I.z1 + 0.3]];
      for (const [gt, kt] of mt) {
        const zt = Ct(new qt(rt, 0.18, kt - gt)),
          Et = new bt(zt, P);
        (Et.position.set((ut * ft) / 2, R + X / 2, (gt + kt) / 2),
          (Et.rotation.z = -ut * ct),
          (Et.castShadow = !0),
          (Et.receiveShadow = !0),
          A.add(Et));
      }
    }
  }
  const tt = new Kt(),
    st = new Kt(),
    G = (ft) => {
      const X = new Kt();
      for (let rt = 0; rt < 4; rt++) {
        const ct = new bt(
          Ct(
            new qt(ft / 4 - 0.01, 4.2, 0.12).translate(
              -ft / 2 + ((rt + 0.5) * ft) / 4,
              2.1,
              0,
            ),
          ),
          _,
        );
        ((ct.castShadow = !0), X.add(ct));
      }
      for (const rt of [0.8, 2.1, 3.4])
        for (const ct of [-1, 1]) {
          const ut = new bt(new qt(ft * 0.95, 0.1, 0.03), At("iron_black"));
          (ut.position.set(0, rt, ct * 0.075), X.add(ut));
        }
      return X;
    },
    q = (I.door.x1 - I.door.x0) / 2,
    U = G(q);
  ((U.position.x = q / 2), tt.add(U), tt.position.set(I.door.x0, 0, I.z0));
  const Z = G(q);
  ((Z.position.x = -q / 2),
    st.add(Z),
    st.position.set(I.door.x1, 0, I.z0),
    A.add(tt, st));
  const ot = new No(16751176, 0, 9, 2);
  (ot.position.set(0, 2.5, I.z0 + 4),
    (ot.userData.noActor = !1),
    A.add(ot),
    t.add(A),
    r.push(...Zn(I)));
  const $ = {
    x0: I.door.x0,
    x1: I.door.x1,
    z0: I.z0 - 0.1,
    z1: I.z0 + 0.2,
    y0: 0,
    y1: 4.3,
    on: !0,
  };
  r.push($);
  const C = (ft, X, rt) => {
      const ct = Math.max(0, Math.min(1, (rt - ft) / (X - ft)));
      return ct * ct * (3 - 2 * ct);
    },
    T = {
      group: A,
      inside: ot,
      doorCol: $,
      openK: 0,
      burstU: 0,
      spill: 0,
      open(ft = 1) {
        (ft === 0 && this.burstU > 0 && this.onReset?.(),
          (this.openK = ft),
          (this.burstU = 0),
          (tt.position.z = st.position.z = I.z0),
          U.rotation.set(0, 0, 0),
          Z.rotation.set(0, 0, 0),
          U.position.set(q / 2, 0, 0),
          Z.position.set(-q / 2, 0, 0),
          (tt.rotation.y = ft * 1.7),
          (st.rotation.y = -ft * 1.7),
          ($.on = ft < 0.3),
          (this.spill = Math.max(0, ft)));
      },
      burst(ft = 1) {
        ((this.burstU = ft), (this.openK = 1), ($.on = !1), (this.spill = 1));
        const X = I.z0 + 0.95 * C(0, 0.28, ft);
        tt.position.z = st.position.z = X;
        const rt = C(0, 0.3, ft),
          ct = C(0.3, 0.52, ft),
          ut = C(0.52, 1, ft),
          mt = Math.sin(ft * 26) * 0.06 * (1 - ut) * ct,
          gt = -(2.28 * rt - 0.5 * ct + 0.2 * ut) + mt,
          kt = 2.2 * rt - 0.42 * ct + 0.12 * ut - mt * 0.7;
        ((tt.rotation.y = gt), (st.rotation.y = kt));
        const zt = C(0.22, 0.6, ft);
        (Z.rotation.set(0.06 * zt, 0.05 * zt, -0.3 * zt),
          Z.position.set(
            -q / 2 + (q / 2) * (1 - Math.cos(0.3 * zt)) + 0.04 * zt,
            -0.22 * zt,
            0.05 * zt,
          ),
          U.rotation.set(0, 0, 0.015 * zt),
          U.position.set(q / 2, 0, 0));
      },
    },
    D = Jn(a),
    N = [],
    H = [
      [-6.5, 21, 1.6, 1.3],
      [-9.5, 17.5, 1.1, 0.9],
      [Mo.a.truck[0] - 0.4, Mo.a.truck[1], 1.5, 2],
      [-11.5, 3.5, 1.2, 0.3],
      [12.2, -1, 1, 0.3],
      [-5.5, 14.8, 0.9, 0.5],
      [Mo.b.gap[1] + 0.55, Mo.b.z - 0.35, 0.75, 0.95],
    ],
    Q = H.length;
  H.push(...S.fireSpots);
  const W = new m0(1, 1),
    B = new l0(W, D, H.length * 4);
  ((B.name = "flames"), (B.renderOrder = 30), (B.frustumCulled = !1));
  const F = new Float32Array(H.length * 4);
  {
    const ft = new wt(),
      X = new dt(),
      rt = new w0(),
      ct = new dt();
    for (let ut = 0; ut < H.length; ut++) {
      const [mt, gt, kt, zt] = H[ut];
      for (let Et = 0; Et < 4; Et++) {
        const o0 = () => (ut < Q ? o() : 0.5);
        ((F[ut * 4 + Et] = (ut < Q ? o() : Math.random()) + Et),
          ct.set(kt * (0.7 + o0() * 0.6), kt * (1.1 + o0() * 0.9), 1),
          X.set(mt + (o0() - 0.5) * kt * 0.8, zt, gt + (o0() - 0.5) * kt * 0.8),
          B.setMatrixAt(ut * 4 + Et, ft.compose(X, rt, ct)));
      }
      N.push({
        light: null,
        x: mt,
        z: gt,
        y: zt + kt * 0.8,
        base: 6 + kt * 5,
        ph: ut < Q ? o() * 10 : ut * 1.7,
        want: 0,
      });
    }
  }
  (W.setAttribute("aSeed", new M0(F, 1)), t.add(B));
  const E = [];
  for (let ft = 0; ft < 5; ft++) {
    const X = new No(16742954, 0, 12, 2);
    ((X.userData.fire = !0),
      t.add(X),
      E.push({ l: X, fire: null, k: 0, next: null }));
  }
  let Y = 0;
  const et = (ft, X) => {
      const rt = N.map((ut) => [ut, (ut.x - ft) ** 2 + (ut.z - X) ** 2])
          .sort((ut, mt) => ut[1] - mt[1])
          .slice(0, E.length)
          .map((ut) => ut[0]),
        ct = new Set(
          E.map((ut) => ut.next || ut.fire).filter((ut) => rt.includes(ut)),
        );
      for (const ut of E) {
        const mt = ut.next || ut.fire;
        if (mt && rt.includes(mt)) continue;
        const gt = rt.find((kt) => !ct.has(kt));
        gt && (ct.add(gt), (ut.next = gt));
      }
    },
    nt = 7,
    it = 9,
    lt = H.length,
    ht = new Po(),
    yt = new m0(1, 1);
  (ht.setIndex(yt.index),
    ht.setAttribute("position", yt.attributes.position),
    ht.setAttribute("uv", yt.attributes.uv));
  const Ft = new Float32Array(lt * nt * 4),
    Ut = new Float32Array(lt * nt * 2);
  for (let ft = 0; ft < lt; ft++)
    for (let X = 0; X < nt; X++) {
      const [rt, ct, ut, mt] = H[ft],
        gt = ft * nt + X;
      (Ft.set([rt, mt + ut * 0.9, ct, ut], gt * 4),
        Ut.set([X / nt + Math.random() * 0.08, Math.random()], gt * 2));
    }
  (ht.setAttribute("aBase", new M0(Ft, 4)),
    ht.setAttribute("aSeed", new M0(Ut, 2)),
    (ht.instanceCount = lt * nt));
  const Lt = new P0({
      uniforms: ko.merge([So.fog, { uT: { value: 0 } }]),
      vertexShader: `
attribute vec4 aBase;
attribute vec2 aSeed;
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_vertex>
void main() {
  float life = 7.0 + aSeed.y * 3.0, age = fract(uT / life + aSeed.x);
  float sz = aBase.w;
  vec3 c = aBase.xyz + vec3(age * age * 3.2 + sin(uT * 0.3 + aSeed.y * 9.0) * 0.25 * age, age * (4.5 + sz * 2.5), age * 1.1 + cos(uT * 0.4 + aSeed.y * 7.0) * 0.2 * age);
  float size = sz * (0.9 + age * 4.2);
  vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
  float r = aSeed.y * 6.28 + uT * (0.15 + aSeed.y * 0.1) * (aSeed.y > 0.5 ? 1.0 : -1.0);
  vec2 q = (uv - 0.5) * size; q = mat2(cos(r), sin(r), -sin(r), cos(r)) * q;
  mvPosition.xy += q;
  gl_Position = projectionMatrix * mvPosition;
  vUv = uv; vAge = age; vSeed = aSeed.y;
  #include <fog_vertex>
}`,
      fragmentShader: `
precision highp float;
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_fragment>
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec2 c = vUv - 0.5;
  float cloud = n(vUv * 3.0 + vSeed * 17.0) * 0.55 + n(vUv * 7.0 - vSeed * 9.0 + uT * 0.05) * 0.3 + n(vUv * 15.0 + vSeed * 3.0) * 0.15;
  float a = smoothstep(0.5, 0.12, length(c) + (cloud - 0.5) * 0.35);
  a *= smoothstep(0.0, 0.08, vAge) * (1.0 - smoothstep(0.45, 1.0, vAge)) * 0.5;
  if (a < 0.004) discard;
  // lit by the fire under it while young, then just dark smoke against the glow of the sky
  vec3 col = mix(vec3(0.8, 0.26, 0.06) * (1.1 - vAge * 3.0), vec3(0.06, 0.052, 0.047), smoothstep(0.0, 0.2, vAge));
  col *= 0.8 + 0.4 * cloud;
  gl_FragColor = vec4(col, a);
  #include <fog_fragment>
}`,
      transparent: !0,
      depthWrite: !1,
      fog: !0,
    }),
    h0 = new bt(ht, Lt);
  ((h0.name = "smoke"),
    (h0.frustumCulled = !1),
    (h0.renderOrder = 31),
    t.add(h0));
  const D0 = new Rt(),
    ee = new Float32Array(lt * it * 3),
    Ye = new Float32Array(lt * it * 2);
  for (let ft = 0; ft < lt; ft++)
    for (let X = 0; X < it; X++) {
      const [rt, ct, ut, mt] = H[ft],
        gt = ft * it + X;
      (ee.set([rt, mt + ut * 0.3, ct], gt * 3),
        Ye.set([Math.random(), Math.random() * 0.8 + ut * 0.3], gt * 2));
    }
  (D0.setAttribute("position", new vt(ee, 3)),
    D0.setAttribute("aSeed", new vt(Ye, 2)));
  const Se = new P0({
      uniforms: { uT: Lt.uniforms.uT, uScale: { value: 600 } },
      vertexShader: `
attribute vec2 aSeed;
uniform float uT, uScale;
varying float vK;
void main() {
  float life = 1.6 + aSeed.x * 1.8, age = fract(uT / life + aSeed.x * 7.3);
  float s = aSeed.x * 6.28, up = aSeed.y;
  vec3 p = position + vec3(sin(s + uT * 2.1) * 0.35 * age + cos(s) * 0.3 * age, (1.0 - (1.0 - age) * (1.0 - age)) * (1.8 + up * 2.2), cos(s * 1.3 + uT * 1.7) * 0.35 * age + sin(s) * 0.3 * age);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vK = (1.0 - age) * (0.55 + 0.45 * sin(uT * 23.0 + s * 5.0));
  gl_PointSize = max(1.0, 0.045 * uScale / -mv.z);
}`,
      fragmentShader: `
precision highp float;
varying float vK;
void main() {
  float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
  gl_FragColor = vec4(vec3(4.0, 1.5, 0.35) * vK * smoothstep(0.5, 0.0, d), 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
    }),
    Ae = new Do(D0, Se);
  ((Ae.name = "sparks"),
    (Ae.frustumCulled = !1),
    (Ae.renderOrder = 32),
    t.add(Ae));
  const Xe = 1100,
    $e = new Rt(),
    y0 = new Float32Array(Xe * 3),
    Eo = new Float32Array(Xe);
  for (let ft = 0; ft < Xe; ft++)
    ((y0[ft * 3] = (o() - 0.5) * 24),
      (y0[ft * 3 + 1] = o() * 10),
      (y0[ft * 3 + 2] = (o() - 0.5) * 24),
      (Eo[ft] = ft % 11 === 0 ? 1 : 0));
  ($e.setAttribute("position", new vt(y0, 3)),
    $e.setAttribute("aHot", new vt(Eo, 1)));
  const ho = new P0({
    uniforms: ko.merge([
      So.fog,
      { uT: Lt.uniforms.uT, uScale: { value: 600 } },
    ]),
    vertexShader: `
attribute float aHot;
uniform float uT, uScale;
varying float vHot, vSpin;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = max(1.0, (aHot > 0.5 ? 0.03 : 0.045) * uScale / -mvPosition.z);
  vHot = aHot * (0.5 + 0.5 * sin(uT * 3.0 + position.x * 7.0 + position.z * 3.0));
  vSpin = sin(uT * 2.0 + position.y * 5.0 + position.x);
  #include <fog_vertex>
}`,
    fragmentShader: `
precision highp float;
varying float vHot, vSpin;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  c.x *= 1.0 + 0.8 * abs(vSpin);                                             // (a flake turning: thin, then broad)
  float d = length(c); if (d > 0.5) discard;
  vec3 col = mix(vec3(0.17, 0.16, 0.15), vec3(3.5, 1.2, 0.3), vHot);
  gl_FragColor = vec4(col, smoothstep(0.5, 0.2, d) * mix(0.75, 1.0, vHot));
  #include <fog_fragment>
}`,
    transparent: !0,
    depthWrite: !1,
    fog: !0,
  });
  ho.uniforms.uT = Lt.uniforms.uT;
  const Ze = new Do($e, ho);
  ((Ze.frustumCulled = !1), (Ze.name = "ash"), t.add(Ze));
  const Fe = s.game.camera;
  function bs(ft, X) {
    if (!t.visible) return;
    ((a.uFireT.value = X),
      (Y -= ft),
      Y <= 0 && ((Y = 0.35), et(Fe.position.x, Fe.position.z)));
    for (const ct of E) {
      ct.next && ct.next !== ct.fire
        ? ((ct.k = Math.max(0, ct.k - ft * 3)),
          ct.k === 0 && ((ct.fire = ct.next), (ct.next = null)))
        : ((ct.next = null), (ct.k = Math.min(1, ct.k + ft * 2)));
      const ut = ct.fire;
      if (!ut) {
        ct.l.intensity = 0;
        continue;
      }
      (ct.l.position.set(ut.x, ut.y, ut.z),
        (ct.l.intensity =
          ct.k *
          ut.base *
          (0.75 +
            0.25 * Math.sin(X * 13 + ut.ph) * Math.sin(X * 7.3 + ut.ph * 2) +
            0.1 * Math.sin(X * 31 + ut.ph))));
    }
    (S.update(ft, X),
      (Lt.uniforms.uT.value = X),
      Ze.position.set(Fe.position.x, 0, Fe.position.z));
    for (let ct = 0; ct < Xe; ct++)
      ((y0[ct * 3 + 1] -= ft * (0.35 + (ct % 7) * 0.04)),
        (y0[ct * 3] += ft * (0.25 + Math.sin(X * 0.7 + ct) * 0.2)),
        (y0[ct * 3 + 2] += ft * Math.cos(X * 0.5 + ct) * 0.15),
        y0[ct * 3 + 1] < 0 &&
          ((y0[ct * 3 + 1] = 10),
          (y0[ct * 3] = (o() - 0.5) * 24),
          (y0[ct * 3 + 2] = (o() - 0.5) * 24)),
        y0[ct * 3] > 12 && (y0[ct * 3] -= 24));
    $e.attributes.position.needsUpdate = !0;
    const rt = s.game.post.size.y / (2 * Math.tan((Fe.fov * Math.PI) / 360));
    ((Se.uniforms.uScale.value = rt), (ho.uniforms.uScale.value = rt));
  }
  for (const [ft, X] of u) {
    const rt = new bt(X0(X), ft);
    ((rt.castShadow = !0),
      (rt.receiveShadow = !0),
      (rt.name = "outside_baked"),
      t.add(rt));
  }
  for (const ft of r) ft.on = !1;
  return {
    group: t,
    colliders: r,
    church: T,
    fires: N,
    update: bs,
    district: S,
    crates: S.crates,
    setWorld(ft) {
      const X = ft === "ruins";
      t.visible = X;
      for (const rt of r) rt.on = X && (rt !== $ || T.openK < 0.3);
      for (const rt of E)
        ((rt.l.intensity = 0), (rt.k = 0), (rt.fire = null), (rt.next = null));
      X || (T.open(0), ($.on = !1));
    },
  };
}
