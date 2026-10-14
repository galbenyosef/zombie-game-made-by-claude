// assets/bedroom-Se-_w21f 04 — math
// Lines 562-1058 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
function Ze(N, t, w = []) {
  const e = new u0();
  e.name = "candles";
  const o = new M0("candles"),
    M = nt(77),
    s = N.rng(1907),
    h = [];
  (Ce.map((O) => O.slice())
    .concat(w)
    .forEach((O, l) => {
      const [a, r, n, Y, P, q, Q] = O;
      let H = n ?? Se;
      if (q === "saucer")
        (o.add(
          E(
            [
              [0, 0],
              [0.045, 0],
              [0.052, 0.003],
              [0.058, 0.011],
              [0.056, 0.013],
              [0.047, 0.006],
              [0, 0.005],
            ],
            a,
            H,
            r,
            { segs: 28 },
          ),
          t.saucer,
        ),
          (H += 0.005));
      else if (q === "chamber") {
        o.add(
          E(
            [
              [0, 0],
              [0.058, 0],
              [0.066, 0.004],
              [0.068, 0.012],
              [0.064, 0.012],
              [0.056, 0.005],
              [0.03, 0.004],
              [0.027, 0.006],
              [0.027, 0.03],
              [0.031, 0.033],
              [0.03, 0.036],
              [0.024, 0.034],
              [0, 0.034],
            ],
            a,
            H,
            r,
            { segs: 28 },
          ),
          t.brass,
        );
        const o0 = s() * Math.PI * 2,
          m0 = new at(0.018, 0.0035, 8, 20);
        (st(
          m0,
          [a + Math.cos(o0) * 0.072, H + 0.02, r + Math.sin(o0) * 0.072],
          [0, -o0, 0],
        ),
          o.add(m0, t.brass),
          (H += 0.03));
      } else if (q === "stick") {
        const o0 = [
          [0, 0],
          [0.052, 0],
          [0.056, 0.006],
          [0.05, 0.012],
          [0.03, 0.02],
          [0.016, 0.03],
          [0.012, 0.05],
          [0.02, 0.06],
          [0.012, 0.07],
          [0.01, 0.12],
          [0.017, 0.132],
          [0.012, 0.145],
          [0.013, 0.16],
          [0.034, 0.168],
          [0.036, 0.172],
          [0.024, 0.174],
          [0.024, 0.19],
          [0.026, 0.195],
          [0.02, 0.194],
          [0, 0.192],
        ];
        (o.add(E(o0, a, H, r, { segs: 28 }), t.brass), (H += 0.192));
      }
      const e0 = s() * Math.PI * 2,
        n0 = l * 13.7,
        i0 = (o0, m0) => {
          const b0 = o0.attributes.position;
          for (let x0 = 0; x0 < b0.count; x0++) {
            const P0 = b0.getX(x0) - a,
              I0 = b0.getZ(x0) - r,
              A0 = b0.getY(x0) - m0,
              G0 = Math.hypot(P0, I0);
            if (G0 < 1e-5) continue;
            const X0 = Math.atan2(I0, P0),
              j0 =
                1 +
                0.06 * M.n2(Math.cos(X0) * 2 + n0, A0 * 30) +
                0.03 * M.n2(Math.sin(X0) * 5 - n0, A0 * 80);
            let E0 = 0;
            if (A0 > Y - 0.012) {
              const _0 = Math.cos(X0 - e0);
              E0 = -0.006 * Math.max(0, _0) ** 6 + 0.002 * M.n2(X0 * 3 + n0, 1);
            }
            b0.setXYZ(
              x0,
              a + P0 * j0,
              b0.getY(x0) + E0 * (G0 / P),
              r + I0 * j0,
            );
          }
          o0.computeVertexNormals();
        },
        l0 = Q ? 0.009 : 0.004,
        s0 = [
          [0, 0],
          [P * 1.05, 0],
          [P, 0.006],
          [P, Y - 0.012],
        ],
        t0 = [
          [P, Y - 0.012],
          [P * 0.99, Y - 0.003],
          [P * 0.93, Y + 0.0015],
          [P * 0.84, Y - 0.001],
          [P * 0.6, Y - l0 * 0.8],
          [P * 0.3, Y - l0],
          [0, Y - l0],
        ],
        p0 = E(s0, a, H, r, { segs: 28, tile: 0.3 });
      (i0(p0, H), o.add(p0, t.wax));
      const y0 = E(t0, a, H, r, { segs: 28, tile: 0.3 });
      (i0(y0, H), o.add(y0, Q ? t.waxGlow : t.wax));
      const F0 = 2 + Math.floor(s() * 3);
      for (let o0 = 0; o0 < F0; o0++) {
        const m0 = e0 + (s() - 0.5) * 0.9,
          b0 = (0.25 + s() * 0.7) * (Y - 0.01),
          x0 = 0.003 + s() * 0.0035,
          P0 = H + Y - 0.004,
          I0 = Math.max(H + 0.004, P0 - b0),
          A0 = [];
        for (let X0 = 0; X0 <= 6; X0++) {
          const j0 = X0 / 6;
          A0.push([
            a + Math.cos(m0) * (P + x0 * 0.4),
            P0 - (P0 - I0) * j0,
            r + Math.sin(m0) * (P + x0 * 0.4),
          ]);
        }
        const G0 = h0(A0, x0 * (1 - 0.2), 8, 6);
        (o.add(G0, t.wax),
          o.add(
            J0(A0[6][0], I0, A0[6][2], x0 * 1.35, 8, 6, [1, 1.4, 1]),
            t.wax,
          ));
      }
      if (q !== "stick") {
        const o0 = P * (1.25 + s() * 0.9),
          m0 = 0.003 + s() * 0.003,
          b0 = E(
            [
              [0, m0],
              [o0 * 0.6, m0],
              [o0 * 0.92, m0 * 0.8],
              [o0, m0 * 0.3],
              [o0 * 1.02, 0],
            ],
            a,
            H - 5e-4,
            r,
            { segs: 32 },
          ),
          x0 = b0.attributes.position;
        for (let P0 = 0; P0 < x0.count; P0++) {
          const I0 = x0.getX(P0) - a,
            A0 = x0.getZ(P0) - r,
            G0 = Math.atan2(A0, I0),
            X0 =
              1 +
              0.28 * M.n2(Math.cos(G0) * 1.7 + n0 * 3, Math.sin(G0) * 1.7) +
              0.12 * Math.max(0, Math.cos(G0 - e0)) ** 4;
          x0.setXYZ(P0, a + I0 * X0, x0.getY(P0), r + A0 * X0);
        }
        (b0.computeVertexNormals(), o.add(b0, t.wax));
      } else
        o.add(
          E(
            [
              [0, 0.003],
              [0.03, 0.003],
              [0.034, 0.0015],
              [0.035, 0],
            ],
            a,
            H - 0.001,
            r,
            { segs: 24 },
          ),
          t.wax,
        );
      const B0 = H + Y - l0 + (Q ? 0.009 : 0.005),
        H0 = s() * Math.PI * 2;
      (o.add(
        h0(
          [
            [a, H + Y - l0 - 0.004, r],
            [
              a + Math.cos(H0) * 0.0012,
              H + Y - l0 + 0.004,
              r + Math.sin(H0) * 0.0012,
            ],
            [a + Math.cos(H0) * 0.003, B0, r + Math.sin(H0) * 0.003],
          ],
          8e-4,
          6,
          5,
        ),
        t.wick,
        { cast: !1 },
      ),
        h.push({
          i: l,
          pos: [a, B0, r],
          base: [a, H, r],
          lit: !!Q,
          lit0: !!Q,
          level: Q ? 1 : 0,
          target: Q ? 1 : 0,
          group: Ye[l] ?? 3,
          lean: H0,
          phase: s() * 100,
          rate: 0.8 + s() * 0.5,
        }));
    }),
    o.flush(e));
  const z = E(
      [
        [0, 0],
        [0.0032, 0.0015],
        [0.0056, 0.006],
        [0.0064, 0.012],
        [0.0058, 0.018],
        [0.0042, 0.026],
        [0.0022, 0.034],
        [0, 0.041],
      ],
      0,
      0,
      0,
      { segs: 16 },
    ),
    D = new Float32Array(z.attributes.position.count * 3);
  for (let O = 0; O < z.attributes.position.count; O++) {
    const l = z.attributes.position.getY(O) / 0.041;
    let a;
    if (l < 0.12) a = [0.35, 0.45, 1.3];
    else if (l < 0.5) {
      const r = (l - 0.12) / 0.38;
      a = [0.35 + r * 4.6, 0.45 + r * 2.35, 1.3 - r * 0.62];
    } else {
      const r = (l - 0.5) / 0.5;
      a = [4.95 - r * 1.9, 2.8 - r * 1.7, 0.68 - r * 0.5];
    }
    ((D[O * 3] = a[0]), (D[O * 3 + 1] = a[1]), (D[O * 3 + 2] = a[2]));
  }
  z.setAttribute("color", new R0(D, 3));
  const C = new Dt({
    vertexColors: !0,
    toneMapped: !1,
    transparent: !0,
    opacity: 0.95,
    depthWrite: !1,
  });
  C.name = "flame";
  const V = new Rt(z, C, h.length);
  ((V.name = "candles:flames"),
    (V.castShadow = !1),
    (V.receiveShadow = !1),
    (V.frustumCulled = !1),
    V.instanceMatrix.setUsage(Yt),
    e.add(V));
  const A = 64,
    x = new Uint8Array(A * A * 4);
  for (let O = 0; O < A; O++)
    for (let l = 0; l < A; l++) {
      const a = Math.hypot((l + 0.5) / A - 0.5, (O + 0.5) / A - 0.5) * 2,
        r = Math.max(0, 1 - a),
        n = Math.round(255 * (0.55 * r * r * r + 0.45 * Math.pow(r, 9))),
        Y = (O * A + l) * 4;
      ((x[Y] = x[Y + 1] = x[Y + 2] = 255), (x[Y + 3] = n));
    }
  const k = new pe(x, A, A, fe);
  ((k.needsUpdate = !0), (k.magFilter = Kt), (k.minFilter = Kt));
  const _ = new ot(),
    y = new Float32Array(h.length * 3),
    L = new Float32Array(h.length * 3);
  (_.setAttribute("position", new R0(y, 3).setUsage(Yt)),
    _.setAttribute("color", new R0(L, 3).setUsage(Yt)));
  const W = new ge({
      size: 0.22,
      sizeAttenuation: !0,
      map: k,
      vertexColors: !0,
      transparent: !0,
      depthWrite: !1,
      blending: le,
      toneMapped: !1,
      fog: !1,
    }),
    X = new we(_, W);
  ((X.name = "candles:halos"),
    (X.frustumCulled = !1),
    (X.renderOrder = 5),
    e.add(X));
  const F = [0.55, 0.24, 0.07],
    G = [];
  for (let O = 0; O < 4; O++) {
    const l = h.filter((H) => H.group === O),
      a = l.reduce((H, e0) => H + e0.pos[0], 0) / l.length,
      r = l.reduce((H, e0) => H + e0.pos[2], 0) / l.length,
      n = new ie(16747066, 1.3, 3.5, 2),
      Y = h[[1, 5, 7, 12][O]] || l[0],
      P = Y.pos[0] - 1.1,
      q = Y.pos[2] - 2.4,
      Q = Math.hypot(P, q) || 1;
    (n.position.set(
      Y.pos[0] + (P / Q) * 0.07,
      Y.pos[1] + 0.05,
      Y.pos[2] + (q / Q) * 0.07,
    ),
      (n.castShadow = !1),
      (n.name = "candleLight" + O),
      (n.userData.actorGain = 0.5),
      (n.userData.base = 1.3),
      (n.userData.members = l),
      (n.userData.cx = a),
      (n.userData.cz = r),
      e.add(n),
      G.push(n));
  }
  const m = h.length,
    S = {
      uCandle: {
        value: h.map((O) => new me(O.pos[0], O.pos[1] + 0.012, O.pos[2], 0)),
      },
      uCandleCol: { value: new pt(1, 0.5, 0.17) },
    },
    u = 1.1;
  function c(O) {
    const l = O.clone();
    return (
      (l.userData = { ...O.userData }),
      (l.onBeforeCompile = (a) => {
        ((a.uniforms.uCandle = S.uCandle),
          (a.uniforms.uCandleCol = S.uCandleCol),
          (a.vertexShader = a.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vPoolW;`,
            )
            .replace(
              "#include <begin_vertex>",
              `#include <begin_vertex>
vPoolW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
            )),
          (a.fragmentShader = a.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vPoolW;
uniform vec4 uCandle[${m}];
uniform vec3 uCandleCol;`,
            )
            .replace(
              "#include <lights_fragment_end>",
              `#include <lights_fragment_end>
        {
          // under the bed (x 0.05..2.1, z 1.6..3.2) the frame and the hanging covers block the candles and the
          // unshadowed lights: soft-edged contact occlusion, so the hem's gaps never show a glowing floor
          float ubx = smoothstep(0.0, 0.14, vPoolW.x - 0.05) * smoothstep(0.0, 0.14, 2.1 - vPoolW.x);
          float ubz = smoothstep(0.0, 0.14, vPoolW.z - 1.6) * smoothstep(0.0, 0.14, 3.2 - vPoolW.z);
          float underBed = ubx * ubz;
          reflectedLight.directDiffuse *= 1.0 - 0.85 * underBed;
          vec3 pAcc = vec3(0.0);
          for (int i = 0; i < ${m}; i++) {
            vec3 L = uCandle[i].xyz - vPoolW;
            float d2 = dot(L, L) + 0.003;
            pAcc += uCandle[i].w * max(L.y, 0.0) * inversesqrt(d2) / d2;
          }
          reflectedLight.directDiffuse += BRDF_Lambert(diffuseColor.rgb) * pAcc * uCandleCol * (1.0 - 0.95 * underBed);
        }`,
            )));
      }),
      (l.customProgramCacheKey = () => "bedPool" + m),
      l
    );
  }
  const g = new ct(),
    b = new Ft(),
    p = new de(),
    v = new w0(),
    I = new w0(),
    Z = new pt(),
    j = t.waxGlow.emissiveIntensity,
    T = Math.max(1, h.filter((O) => O.lit0).length),
    d = { snuffQ: [], snuffT: 0, snuffEvery: 0 };
  function K(O, l) {
    const a = O.phase;
    return (
      1 +
      0.07 * Math.sin(l * 8.3 * O.rate + a) +
      0.05 * Math.sin(l * 17.9 * O.rate + a * 1.7) +
      0.04 * Math.sin(l * 29.3 + a * 2.3) +
      0.06 * M.n2(l * 1.3 * O.rate + a, a)
    );
  }
  const f = (O, l) => {
    if (d.snuffQ.length)
      for (d.snuffT -= O; d.snuffQ.length && d.snuffT <= 0;) {
        const n = d.snuffQ.shift();
        ((n.target = 0), (n.lit = !1), (d.snuffT += d.snuffEvery));
      }
    let a = 0,
      r = 0;
    for (let n = 0; n < 4; n++) G[n].userData.acc = 0;
    for (const n of h) {
      const Y = n.target > n.level ? 6 : 9;
      ((n.level += (n.target - n.level) * Math.min(1, O * Y)),
        n.level < 0.002 && n.target === 0 && (n.level = 0));
      const P = K(n, l) * n.level,
        q =
          0.06 * Math.sin(l * 2.1 * n.rate + n.phase) +
          0.05 * M.n2(l * 0.9 + n.phase, 3);
      (p.set(q * Math.cos(n.lean), 0, q * Math.sin(n.lean)), b.setFromEuler(p));
      const Q = n.level > 0 ? (0.8 + 0.28 * P) * Math.min(1, n.level * 1.5) : 0,
        H = n.level > 0 ? 0.92 + 0.1 * (1 - P) : 0;
      (v.set(H, Q, H),
        I.set(n.pos[0], n.pos[1] - 0.004, n.pos[2]),
        g.compose(I, b, v),
        V.setMatrixAt(n.i, g),
        Z.setRGB(P, P, P),
        V.setColorAt(n.i, Z),
        (y[n.i * 3] = n.pos[0]),
        (y[n.i * 3 + 1] = n.pos[1] + 0.016 * Q),
        (y[n.i * 3 + 2] = n.pos[2]),
        (L[n.i * 3] = F[0] * P),
        (L[n.i * 3 + 1] = F[1] * P),
        (L[n.i * 3 + 2] = F[2] * P),
        (G[n.group].userData.acc += P),
        (S.uCandle.value[n.i].w = P * u),
        (a += P),
        r++);
    }
    ((V.instanceMatrix.needsUpdate = !0),
      V.instanceColor && (V.instanceColor.needsUpdate = !0),
      (_.attributes.position.needsUpdate = !0),
      (_.attributes.color.needsUpdate = !0));
    for (const n of G) {
      const Y = n.userData.members.length;
      n.intensity = n.userData.base * (n.userData.acc / Math.max(1, Y * 0.75));
    }
    t.waxGlow.emissiveIntensity = j * (r ? a / T : 0);
  };
  f(0, 0);
  const U = {
    list: h,
    setLit(O, l = !1) {
      d.snuffQ.length = 0;
      for (const a of h) {
        const r = O && (l || a.lit0);
        ((a.target = r ? 1 : 0), (a.lit = r));
      }
    },
    snuff(O = 2) {
      const l = h.filter((a) => a.lit);
      for (let a = l.length - 1; a > 0; a--) {
        const r = Math.floor(((Math.sin(a * 91.7) + 1) / 2) * (a + 1));
        [l[a], l[r]] = [l[r], l[a]];
      }
      ((d.snuffQ = l),
        (d.snuffEvery = O / Math.max(1, l.length)),
        (d.snuffT = 0));
    },
    flames: V,
    lights: G,
    poolMaterial: c,
  };
  return (N.scene.add(e), { group: e, anim: f, lights: G, api: U });
}
