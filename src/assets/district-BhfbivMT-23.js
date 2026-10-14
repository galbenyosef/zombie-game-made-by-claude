// assets/district-BhfbivMT 23 — math
// Lines 7212-9228 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function $o(n, t) {
  let e = 90211;
  const r = () => (e = (e * 16807) % 2147483647) / 2147483647,
    o = new P0();
  o.name = "district";
  const l = [],
    s = [],
    c = [],
    a = [],
    h = new Map(),
    f = (R, I) => (h.has(R) || h.set(R, []), h.get(R).push(I), I),
    y = (R) => {
      (R.updateMatrixWorld(!0),
        R.traverse((I) => {
          if (I.isMesh && !I.isInstancedMesh) {
            const G = I.geometry.clone().applyMatrix4(I.matrixWorld);
            (G.attributes.uv ||
              G.setAttribute(
                "uv",
                new V0(new Float32Array(G.attributes.position.count * 2), 2),
              ),
              f(I.material, G));
          }
        }));
    },
    m = (R, I) => {
      const G = new mn({
          map: bakeSignTextures().card.map,
          color: new Mt(...I),
          transparent: !0,
          depthWrite: !1,
          blending: bn,
          polygonOffset: !0,
          polygonOffsetFactor: -6,
          polygonOffsetUnits: -6,
        }),
        S = R.map(([A, H, g, j, V = 0]) =>
          new D0(g, j)
            .rotateX(-Math.PI / 2)
            .rotateY(V)
            .translate(A, 0.014, H),
        ),
        F = new l0(_0(S.map((A) => I0(A))), G);
      return (
        (F.renderOrder = 3),
        (F.name = "glow_pool"),
        o.add(F),
        { m: G, base: new Mt(...I) }
      );
    },
    b = (R, I, G, S, F, A) =>
      I0(
        new p0(S - R, F - I, A - G).translate(
          (R + S) / 2,
          (I + F) / 2,
          (G + A) / 2,
        ),
      ),
    v = (R, I, G, S, F = 3.5, A = 0) => {
      l.push({ x0: R, x1: I, z0: G, z1: S, y0: A, y1: F });
    },
    p = Ft(v0("ext_brick"), t),
    d = Ft(v0("concrete_grey"), t),
    i = Ft(v0("plaster_bare"), t),
    u = Wt(v0("street_asphalt"), 1),
    x = v0("concrete_grey"),
    w = v0("tile_floor"),
    _ = v0("porcelain_cracked"),
    M = Wt(v0("sidewalk_tiles"), 0.55),
    C = Wt(v0("concrete_grey"), 0.8),
    T = v0("tactile_paving"),
    N = v0("wood_walnut"),
    K = v0("wood_oak_pale"),
    O = v0("wainscot_wood"),
    k = v0("plaster_bare"),
    P = v0("ceiling_plaster"),
    W = v0("ruin_char"),
    q = v0("rust_metal"),
    Y = v0("iron_black"),
    $ = v0("ruin_ash"),
    i0 = new e0({ color: 9211795, metalness: 0.85, roughness: 0.38 }),
    o0 = new e0({
      color: 13222568,
      roughness: 0.8,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
    C0 = new e0({ color: 2968115, roughness: 0.7, metalness: 0.3 }),
    Y0 = new e0({ color: 789517, roughness: 0.25, metalness: 0 }),
    H0 = () => [p, d, i][Math.floor(r() * 3)],
    t0 = xe.street,
    he = xe.alley,
    ce = xe.lane,
    Q0 = xe.back,
    Ge = xe.passage,
    s0 = xe.shop;
  (f(u, b(he.x0, -0.05, he.z0, he.x1, 0, he.z1)),
    f(u, b(t0.x0 + t0.walk, -0.05, t0.z0, t0.x1 - t0.walk, 0, t0.z1)),
    f(M, b(t0.x0, -0.05, t0.z0, t0.x0 + t0.walk, 0, t0.z1)),
    f(M, b(t0.x1 - t0.walk, -0.05, t0.z0, t0.x1, 0, t0.z1)));
  for (const R of [t0.x0 + 0.5, t0.x1 - 0.8])
    f(T, b(R, 0, t0.z0, R + 0.3, 0.006, t0.z1));
  for (const R of [t0.x0 + t0.walk, t0.x1 - t0.walk])
    f(x, b(R - 0.12, -0.05, t0.z0, R + 0.12, 0.035, t0.z1));
  (f(u, b(ce.x0, -0.05, ce.z0, ce.x1, 0, ce.z1)),
    f(C, b(Q0.x0, -0.05, Q0.z0, Q0.x1, 0, Q0.z1)),
    f(C, b(Ge.x0, -0.05, Ge.z0, Ge.x1, 0, Ge.z1)),
    f($, b(14, -0.08, -14, 62, -0.05, 60)));
  for (let R = t0.z0 + 1; R < t0.z1 - 1; R += 3.2)
    (R < xe.bus.z0 - 1 || R > xe.bus.z1 + 1) &&
      f(o0, b(34.94, 0, R, 35.06, 0.004, R + 1.6));
  for (let R = t0.x0 + t0.walk + 0.25; R < t0.x1 - t0.walk - 0.3; R += 0.9)
    f(o0, b(R, 0, 42.2, R + 0.5, 0.004, 44.6));
  f(o0, b(t0.x0 + t0.walk, 0, 41.6, t0.x1 - t0.walk, 0.004, 41.85));
  const be = [],
    r0 = (R, I, G, S, F, A = 0, H = H0()) => {
      const g = Zn(R, I, G, S, F - A, r);
      (A && g.translate(0, A, 0), be.push({ g, m: H }), v(R, I, G, S, F, A));
    };
  (r0(16.6, 22, -12, 12.6, 11),
    r0(22, 26.8, -12, 12.6, 14.5),
    r0(26.8, 31, -12, 12.6, 9.5),
    r0(16.6, 31, 15.4, 22, 10.5),
    r0(16.6, 31, 22, 29, 13.5),
    r0(16.6, 31, 29, 35.8, 9),
    r0(16.6, 31, 39.6, 47, 12),
    r0(16.6, 31, 47, 58, 9.5),
    r0(8.2, 16.6, 40.3, 58, 10),
    r0(39, 50, -12, 0, 12.5),
    r0(39, 50, 0, 11, 15),
    r0(39, 50, 11, 22, 10),
    r0(39, 46.5, 22, 24, 3.4, 0, i),
    r0(39, 46.5, 22, 32.6, 11.5, 3.4, p),
    r0(39, 46.5, 32.6, 39.6, 10, 0, d),
    r0(39, 50, 42.6, 58, 11),
    r0(49.5, 60, -12, 10, 13),
    r0(49.5, 60, 10, 30, 10),
    r0(49.5, 60, 30, 58, 12),
    v(-16.6, -16.2, 11.2, 40.4, 3),
    v(16.2, 16.6, 15.4, 35.8, 3),
    v(7.2, 8.4, 40.2, 58, 3));
  {
    const R = new Map();
    for (const I of be) (R.has(I.m) || R.set(I.m, []), R.get(I.m).push(I.g));
    for (const [I, G] of R) {
      const S = new l0(_0(G), I);
      ((S.castShadow = !0),
        (S.receiveShadow = !0),
        (S.name = "district_blocks"),
        o.add(S));
    }
  }
  const O0 = (R, I, G, S) => {
    const F = new nt(1, 18, 9, 0, Math.PI * 2, 0, Math.PI / 2),
      A = F.attributes.position;
    for (let H = 0; H < A.count; H++) {
      const g = 1 + (r() - 0.5) * 0.4;
      A.setXYZ(
        H,
        A.getX(H) * G * g,
        A.getY(H) * S * (0.75 + r() * 0.5),
        A.getZ(H) * G * g,
      );
    }
    return (F.computeVertexNormals(), F.translate(R, -0.05, I), f($, I0(F)));
  };
  (O0(35, 5.4, 4.6, 2.2),
    O0(32.2, 7, 2.2, 1.2),
    O0(37.8, 6.6, 2, 1),
    v(31, 39, 3, 7.4, 2.5),
    f(d, b(32.5, 0, 6.2, 37.5, 0.35, 6.6).rotateZ(0.02)),
    O0(35.2, 46.8, 4, 1.6),
    v(31, 39, 45.4, 48, 2));
  const q0 = [];
  for (let R = 0; R < 70; R++) {
    const I = R % 2 ? [35, 6.8] : [35, 45.2],
      G = 0.15 + r() * 0.45,
      S = new p0(G * (0.6 + r()), G * (0.4 + r() * 0.6), G * (0.6 + r()));
    (S.rotateX(r())
      .rotateY(r() * 3)
      .rotateZ(r())
      .translate(I[0] + (r() - 0.5) * 7.4, G * 0.25, I[1] + (r() - 0.5) * 2.4),
      q0.push(I0(S)));
  }
  (f(x, _0(q0)), s.push([34, 5.9, 1.3, 1.6], [36.5, 45.7, 1.1, 0.8]));
  const B0 = [],
    we = {
      sedan: [4.7, 1.7],
      kei: [3.4, 1.48],
      taxi: [4.6, 1.7],
      van: [4.69, 1.7],
      keitruck: [3.4, 1.48],
    },
    Se = (R, I, G, S, F, A) => {
      const H = Math.cos(G),
        g = Math.sin(G);
      for (let j = 0; j < 3; j++) {
        const V = -S / 2 + (S * j) / 3,
          m0 = -S / 2 + (S * (j + 1)) / 3;
        let c0 = 1e9,
          E0 = -1e9,
          y0 = 1e9,
          h0 = -1e9;
        for (const [L, S0] of [
          [-F / 2, V],
          [F / 2, V],
          [-F / 2, m0],
          [F / 2, m0],
        ]) {
          const B = R + L * H + S0 * g,
            a0 = I - L * g + S0 * H;
          ((c0 = Math.min(c0, B)),
            (E0 = Math.max(E0, B)),
            (y0 = Math.min(y0, a0)),
            (h0 = Math.max(h0, a0)));
        }
        v(c0, E0, y0, h0, A);
      }
    },
    ae = (R, I, G, S = {}) => {
      const F = pn(S.kind || "sedan", {
        burnt: S.burnt ?? !0,
        color: S.color,
        seed: S.seed ?? Math.round(Math.abs(R * 7.3 + I * 3.1)),
        doors: S.doors,
        flat: S.flat,
        side: S.side,
        hazards: S.hazards,
      });
      (F.group.position.set(R, 0, I),
        (F.group.rotation.y = G),
        F.group.updateMatrixWorld(!0),
        y(F.group),
        F.update && B0.push(F.update));
      const [A, H] = S.side
        ? [we[S.kind || "sedan"][0], F.size.w]
        : we[S.kind || "sedan"];
      if ((Se(R, I, G, A, H, Math.min(1.5, F.size.h)), S.fire && F.fire)) {
        const g = new ke(...F.fire).applyMatrix4(F.group.matrixWorld);
        s.push([g.x, g.z, S.fire, g.y]);
      }
      return F;
    };
  (a.push((R, I) => {
    for (const G of B0) G(R, I);
  }),
    ae(33.4, 10.6, 0.08, {
      kind: "kei",
      burnt: !1,
      color: "#d9d6cc",
      doors: { fr: 1 },
    }),
    ae(36.3, 19.6, 2.75, { kind: "taxi", fire: 1 }),
    ae(32.4, 26.4, -0.25, {
      kind: "sedan",
      burnt: !1,
      color: "#1f2d4a",
      hazards: !0,
      doors: { fl: 0.9 },
    }),
    ae(36.2, 29.45, 1.55, { kind: "van" }),
    ae(36.1, 38.2, 0.35, { kind: "sedan", fire: 0.9 }),
    ae(33.4, 44.1, 1.2, { kind: "keitruck", side: !0 }),
    ae(22.8, 37.2, 1.57, {
      kind: "kei",
      burnt: !1,
      color: "#8e2a22",
      flat: !0,
    }));
  {
    const R = pn("bus", { burnt: !0, seed: 11 });
    (R.group.position.set(35, 0, 32.6),
      R.group.rotation.set(0, Math.PI / 2 + 0.22, 0.05),
      R.group.updateMatrixWorld(!0),
      y(R.group),
      v(xe.bus.x0 - 0.5, xe.bus.x1 + 0.5, xe.bus.z0, xe.bus.z1, 3.2),
      s.push([34.2, 32.4, 1.9, 2.4], [37, 33.2, 1.2, 1]));
  }
  const fe = (R, I, G = 0, S = 0) => {
    const F = new P0(),
      A = new l0(new b0(0.07, 0.1, 5.6, 8).translate(0, 2.8, 0), Y);
    ((A.castShadow = !0), F.add(A));
    const H = new l0(new p0(0.08, 0.08, 1.3).translate(0, 5.5, 0.62), Y);
    F.add(H);
    const g = new l0(new p0(0.3, 0.14, 0.55).translate(0, 5.42, 1.2), Y);
    (F.add(g),
      F.position.set(R, 0, I),
      F.rotation.set(0, S, 0),
      F.rotateOnWorldAxis(new ke(1, 0, 0), G),
      y(F),
      G < 0.5 && v(R - 0.14, R + 0.14, I - 0.14, I + 0.14, 5));
  };
  (fe(31.35, 9, 0, Math.PI / 2),
    fe(38.65, 15.2, 0, -Math.PI / 2),
    fe(31.35, 21.4, 0, Math.PI / 2),
    fe(38.65, 27, 0, -Math.PI / 2),
    fe(38.65, 39.6, 0, -Math.PI / 2),
    fe(31.35, 44, 0, Math.PI / 2));
  {
    const R = new P0(),
      I = new l0(new b0(0.07, 0.1, 5.6, 8).translate(0, 2.8, 0), Y);
    (R.add(I),
      R.position.set(31.6, 0.1, 16.8),
      R.rotation.set(Math.PI / 2 - 0.08, 0, 0.35),
      y(R));
  }
  {
    for (const A of [16.8, 19.6])
      for (const H of [37.95, 38.9])
        f(Y, b(H - 0.04, 0, A - 0.04, H + 0.04, 2.4, A + 0.04));
    f(Y, b(37.95 - 0.1, 2.4, 16.8 - 0.1, 39, 2.48, 19.6 + 0.1));
    const S = se(256, 512, (A, H, g) => {
        const j = A.createLinearGradient(0, 0, 0, g);
        (j.addColorStop(0, "#1d3b5a"),
          j.addColorStop(1, "#0b1522"),
          (A.fillStyle = j),
          A.fillRect(0, 0, H, g),
          (A.fillStyle = "#f0e0c8"),
          (A.font = "bold 44px Arial"),
          (A.textAlign = "center"),
          A.fillText("SUMMER", H / 2, 120),
          A.fillText("FESTIVAL", H / 2, 170),
          (A.font = "26px Arial"),
          A.fillText("fireworks by the river", H / 2, 230),
          (A.fillStyle = "#d24a3a"),
          A.beginPath(),
          A.arc(H / 2, 350, 70, 0, 7),
          A.fill(),
          (A.strokeStyle = "rgba(0,0,0,0.7)"),
          (A.lineWidth = 3));
        for (let V = 0; V < 7; V++)
          (A.beginPath(),
            A.moveTo(H * 0.2 + V * 20, 0),
            A.lineTo(H * 0.5 + V * 13, g),
            A.stroke());
      }),
      F = new l0(
        new D0(1.1, 2),
        new e0({
          map: S,
          emissive: 16777215,
          emissiveMap: S,
          emissiveIntensity: 0.08,
          roughness: 0.4,
        }),
      );
    (F.position.set(38.88, 1.25, 18.2),
      (F.rotation.y = -Math.PI / 2),
      o.add(F),
      v(37.95 - 0.1, 39, 16.8, 19.6, 2.4));
  }
  {
    const R = [],
      I = (S, F, A, H = 16) => {
        const g = [];
        for (let j = 0; j <= H; j++) {
          const V = j / H;
          g.push(
            new ke(
              S[0] + (F[0] - S[0]) * V,
              S[1] + (F[1] - S[1]) * V - Math.sin(Math.PI * V) * A,
              S[2] + (F[2] - S[2]) * V,
            ),
          );
        }
        R.push(new Nn(new Dn(g), H, 0.012, 4));
      };
    for (let S = 8; S < 44; S += 5.5)
      I(
        [31, 6.8 + r(), S],
        [39, 6.2 + r(), S + (r() - 0.5) * 2],
        0.6 + r() * 0.5,
      );
    for (let S = 18; S < 31; S += 3.2)
      I(
        [S, 5.6 + r() * 2, 12.6],
        [S + (r() - 0.5) * 2, 5.2 + r() * 2, 15.4],
        0.3 + r() * 0.3,
      );
    (I([46.5, 5.2, 27], [49.5, 5.8, 28.5], 0.35),
      I([46.5, 6, 34], [49.5, 5.4, 33], 0.3),
      I([31, 4.4, 37], [31, 4.2, 38.8], 0.25),
      I([34, 6.6, 20], [34.5, 0.3, 21.8], 0.2));
    const G = new l0(
      _0(
        R.map((S) => {
          const F = new Float32Array(S.attributes.position.count * 2);
          return (S.setAttribute("uv", new V0(F, 2)), S.index, S);
        }),
      ),
      new e0({ color: 657930, roughness: 0.6 }),
    );
    ((G.name = "wires"), o.add(G));
  }
  const Pe = (R, I, G, S = 0) => {
    const F = new P0(),
      A = new l0(I0(new p0(1.8, 1.15, 1.05).translate(0, 0.62, 0)), C0);
    ((A.castShadow = !0), (A.receiveShadow = !0), F.add(A));
    const H = new l0(new p0(1.84, 0.05, 1.1), Y);
    (H.position.set(0, 1.2 + S * 0.2, -S * 0.35),
      (H.rotation.x = -S * 1.2),
      F.add(H));
    for (const V of [-0.75, 0.75])
      for (const m0 of [-0.4, 0.4]) {
        const c0 = new l0(new b0(0.07, 0.07, 0.05, 8).rotateZ(Math.PI / 2), Y);
        (c0.position.set(V, 0.07, m0), F.add(c0));
      }
    (F.position.set(R, 0, I), (F.rotation.y = G), y(F));
    const g = Math.abs(Math.sin(G)),
      j = Math.abs(Math.cos(G));
    v(
      R - (0.9 * j + 0.53 * g),
      R + (0.9 * j + 0.53 * g),
      I - (0.9 * g + 0.53 * j),
      I + (0.9 * g + 0.53 * j),
      1.25,
    );
  };
  (Pe(19.8, 14.75, 0.05, 1),
    Pe(28.7, 13.2, 3.1, 0.2),
    Pe(48.7, 23.3, 1.52, 0),
    Pe(48.8, 35.6, 1.6, 1));
  const He = [],
    Ie = (R, I, G, S) => {
      for (let F = 0; F < G; F++) {
        const A = r() * 6.28,
          H = Math.sqrt(r()) * S,
          g = 0.28 + r() * 0.16;
        He.push([
          R + Math.cos(A) * H,
          g * 0.55,
          I + Math.sin(A) * H,
          g,
          r() * 6,
        ]);
      }
    };
  (Ie(21.3, 15, 7, 0.6),
    Ie(27.4, 12.95, 5, 0.5),
    Ie(30.5, 15, 4, 0.4),
    Ie(47.2, 24.6, 6, 0.5),
    Ie(48.8, 37.2, 5, 0.5),
    Ie(40.6, 42.1, 4, 0.5),
    Ie(29.8, 39.1, 5, 0.5),
    Ie(38.4, 11.9, 4, 0.4));
  {
    const R = new nt(1, 10, 7);
    R.scale(1, 0.72, 0.9);
    const I = new Kn(R, Y0, He.length);
    ((I.name = "bin_bags"), (I.castShadow = !0), (I.receiveShadow = !0));
    const G = new J0(),
      S = new Nt(),
      F = new xn();
    (He.forEach(([A, H, g, j, V], m0) => {
      (S.setFromEuler(F.set((r() - 0.5) * 0.4, V, (r() - 0.5) * 0.4)),
        I.setMatrixAt(
          m0,
          G.compose(new ke(A, H, g), S, new ke(j, j * (0.8 + r() * 0.4), j)),
        ));
    }),
      o.add(I));
  }
  const jt = (R, I, G, S = 3) => {
    const F = [];
    for (let A = 1; A <= S; A++) {
      const H = A * 3.2;
      (F.push(b(R, H, I, R + 3.2, H + 0.06, I + 1.1)),
        F.push(b(R, H + 0.9, I + 1.06, R + 3.2, H + 0.95, I + 1.1)));
      for (let j = 0; j <= 4; j++)
        F.push(
          b(
            R + j * 0.8 - 0.02,
            H,
            I + 1.06,
            R + j * 0.8 + 0.02,
            H + 0.95,
            I + 1.1,
          ),
        );
      const g = new p0(3.3, 0.08, 0.6);
      (g.rotateZ(Math.atan2(3.2, 3) * (A % 2 ? 1 : -1)),
        g.translate(R + 1.6, H - 1.6, I + 0.35),
        A > 1 && F.push(I0(g)));
    }
    f(Y, _0(F));
  };
  (jt(17.6, 12.6, 1, 3), jt(23.4, 12.6, 1, 4));
  const Je = (R, I, G, S) => {
    f(
      i0,
      b(
        R - 0.45,
        I,
        G - (S > 0 ? 0 : 0.5),
        R + 0.45,
        I + 0.6,
        G + (S > 0 ? 0.5 : 0),
      ),
    );
  };
  (Je(20.4, 3.1, 12.6, 1),
    Je(25.6, 5.9, 12.6, 1),
    Je(29.2, 3.4, 15.4, -1),
    Je(46.5, 3.2, 30.5, 1),
    Je(49.5, 4, 26.5, -1),
    Je(49.5, 3, 38, -1));
  const Jt = (() => {
    const R = new P0();
    R.position.set(23.6, 0, 15.36);
    const I = new l0(
      I0(new p0(1, 2.15, 0.05).translate(0.5, 1.075, -0.025)),
      v0("door_wood"),
    );
    ((I.castShadow = !0), R.add(I));
    const G = new e0({ color: 1841688, roughness: 0.6, metalness: 0.4 }),
      S = new l0(
        _0([
          b(23.46, 0, 15.28, 23.6, 2.27, 15.4),
          b(24.6, 0, 15.28, 24.74, 2.27, 15.4),
          b(23.46, 2.15, 15.28, 24.74, 2.27, 15.4),
        ]),
        G,
      );
    S.castShadow = !0;
    const F = new l0(
      new D0(1, 2.15).rotateY(Math.PI).translate(24.1, 1.075, 15.397),
      Eo(t),
    );
    o.add(S, F, R);
    let A = 0,
      H = 0;
    const g = { x0: 23.28, x1: 23.66, z0: 14.3, z1: 15.36, y0: 0, y1: 2.15 };
    return (
      Object.defineProperty(g, "on", {
        get: () => A > 0.5 && o.parent?.visible !== !1,
        set: () => {},
      }),
      l.push(g),
      a.push((j) => {
        ((A += (H - A) * Math.min(1, j * (H > A ? 14 : 3))),
          (R.rotation.y = A * 1.9));
      }),
      {
        open() {
          H = 1;
        },
        close() {
          ((H = 0), (A = 0), (R.rotation.y = 0));
        },
        pos: [24.1, 1.2, 15],
        spot: [24.1, 15.12],
      }
    );
  })();
  (s.push([26.2, 13.3, 0.7, 0.35]),
    [
      Ne("z", 15.4, -1, 27, 1),
      Ne("z", 12.6, 1, 20.5, 1),
      Ne("x", 39, -1, 13.5, 1),
      Ne("x", 31, 1, 23.5, 1),
      Ne("x", 49.5, -1, 30.5, 1),
      Ne("x", 46.5, 1, 36.5, 1),
      Ne("z", 39.6, -1, 25.5, 1),
      Ne("z", 39.6, -1, 19, 0),
    ].forEach((I, G) => {
      (t.uHot.value[G].set(I.hot[0], I.hot[1], I.hot[2], 1), s.push(I.fire));
    }));
  {
    const R = s0.t,
      I = s0.x0,
      G = s0.x1,
      S = s0.z0,
      F = s0.z1,
      A = 3.4,
      H = s0.kx,
      g = I + R,
      j = G - R,
      V = S + R,
      m0 = F - R;
    f(w, b(g, 0, V, j, 0.012, m0));
    const c0 = { x0: 39.8, x1: 41.4, z0: 30, z1: 32 };
    (f(P, b(g, 3.2, V, j, A, c0.z0)),
      f(P, b(c0.x1, 3.2, c0.z0, j, A, m0)),
      f(P, b(g, 3.2, c0.z0, c0.x0, A, m0)));
    const E0 = [
      [S, 24.4],
      [26.1, s0.door[0]],
      [s0.door[1], 28.5],
      [32.2, F],
    ];
    for (const [E, J] of E0) f(p, b(I, 0, E, I + R, A, J));
    for (const [E, J] of [
      [24.4, 26.1],
      [28.5, 32.2],
    ])
      (f(p, b(I, 0, E, I + R, 0.9, J)), f(p, b(I, 2.6, E, I + R, A, J)));
    (f(p, b(I, 2.4, s0.door[0], I + R, A, s0.door[1])),
      v(I, I + R, S, s0.door[0], A),
      v(I, I + R, s0.door[1], F, A),
      f(p, b(I, 0, S, G, A, S + R)),
      f(p, b(I, 0, F - R, G, A, F)),
      f(p, b(G - R, 0, S, G, A, s0.back[0])),
      f(p, b(G - R, 0, s0.back[1], G, A, F)),
      f(p, b(G - R, 2.2, s0.back[0], G, A, s0.back[1])),
      v(I, G, S, S + R, A),
      v(I, G, F - R, F, A),
      v(G - R, G, S, s0.back[0], A),
      v(G - R, G, s0.back[1], F, A),
      f(O, b(g, 0, V, H, 1, V + 0.02)),
      f(O, b(g, 0, m0 - 0.02, H, 1, m0)),
      f(k, b(g, 1, V, H, 3.2, V + 0.02)),
      f(k, b(g, 1, m0 - 0.02, H, 3.2, m0)),
      f(k, b(H, 0, V, H + 0.15, 3.2, s0.pass[0])),
      f(k, b(H, 0, s0.pass[1], H + 0.15, 3.2, m0)),
      f(k, b(H, 2.2, s0.pass[0], H + 0.15, 3.2, s0.pass[1])),
      v(H, H + 0.15, V, s0.pass[0], 3.2),
      v(H, H + 0.15, s0.pass[1], m0, 3.2),
      f(_, b(H + 0.15, 0, V, j, 2.2, V + 0.02)),
      f(_, b(H + 0.15, 0, m0 - 0.02, j, 2.2, m0)),
      f(_, b(j - 0.02, 0, V, j, 2.2, s0.back[0])),
      f(_, b(j - 0.02, 0, s0.back[1], j, 2.2, m0)),
      f(N, b(42.05, 1, 24.4, 42.85, 1.06, 29.2)),
      f(K, b(42.1, 0, 24.4, 42.8, 1, 29.2)),
      v(42.05, 42.85, 24.4, 29.2, 1.06));
    const y0 = [];
    for (let E = 0; E < 5; E++) {
      const J = 24.9 + E * 0.95,
        n0 = E === 1 || E === 3,
        z0 = new b0(0.19, 0.19, 0.06, 14).translate(0, 0.72, 0),
        te = new b0(0.03, 0.05, 0.7, 6).translate(0, 0.35, 0),
        N0 = _0([I0(z0), I0(te)]);
      (n0 && N0.rotateZ(Math.PI / 2 - 0.1).translate(0, 0.2, 0),
        N0.rotateY(r() * 6).translate(41.55 - (n0 ? 0.3 : 0), 0, J),
        y0.push(N0));
    }
    f(i0, _0(y0));
    const h0 = (E, J, n0 = !1) => {
        const z0 = b(-0.4, 0.72, -0.4, 0.4, 0.76, 0.4),
          te = new b0(0.04, 0.05, 0.72, 6).translate(0, 0.36, 0),
          N0 = _0([z0, I0(te)]);
        (n0 && N0.rotateX(Math.PI / 2 - 0.05).translate(0, 0.4, 0),
          N0.translate(E, 0, J),
          f(N, N0),
          v(E - 0.42, E + 0.42, J - 0.42, J + 0.42, n0 ? 0.8 : 0.76));
      },
      L = (E, J, n0, z0 = !1) => {
        const te = [
          b(-0.2, 0.44, -0.2, 0.2, 0.48, 0.2),
          b(-0.2, 0.48, 0.16, 0.2, 0.92, 0.2),
        ];
        for (const [Ee, Ce] of [
          [-0.17, -0.17],
          [0.17, -0.17],
          [-0.17, 0.17],
          [0.17, 0.17],
        ])
          te.push(b(Ee - 0.02, 0, Ce - 0.02, Ee + 0.02, 0.44, Ce + 0.02));
        const N0 = _0(te);
        (z0 && N0.rotateX(-Math.PI / 2 + 0.1).translate(0, 0.2, 0),
          N0.rotateY(n0).translate(E, 0, J),
          f(K, N0));
      };
    (h0(40.15, 25.15),
      L(40.15, 25.85, Math.PI),
      L(40.7, 24.75, -1.2, !0),
      h0(40.25, 31.35, !0),
      L(39.8, 30.5, 0.4, !0),
      L(41.3, 31.9, 2.2),
      h0(41.15, 28.9),
      L(40.45, 28.9, Math.PI / 2),
      L(41.3, 29.8, 0.3, !0));
    {
      const E = [];
      for (let n0 = 0; n0 < 26; n0++) {
        const z0 = 0.1 + r() * 0.3,
          te = new p0(z0 * 2, z0 * 0.3, z0);
        (te
          .rotateX(r())
          .rotateY(r() * 3)
          .translate(
            c0.x0 + r() * (c0.x1 - c0.x0),
            z0 * 0.15,
            c0.z0 + r() * (c0.z1 - c0.z0),
          ),
          E.push(I0(te)));
      }
      f(P, _0(E));
      const J = I0(new p0(0.16, 0.2, 2.6));
      (J.rotateX(0.95).translate(40.6, 1.5, 31), f(W, J));
    }
    const S0 = new e0({
        color: 9049104,
        roughness: 0.7,
        emissive: 3803140,
        emissiveIntensity: 0.4,
      }),
      B = [];
    for (const [E, J, n0] of [
      [40.3, 2.65, 26.6],
      [41.3, 2.7, 27.9],
      [40.6, 2.62, 29.4],
      [41.9, 0.22, 30.8],
    ]) {
      const z0 = new nt(0.22, 14, 10);
      (z0.scale(1, 1.25, 1).translate(E, J, n0),
        B.push(z0),
        J > 1 &&
          B.push(
            new b0(0.005, 0.005, 3.2 - J - 0.25, 4).translate(
              E,
              (3.2 + J + 0.25) / 2,
              n0,
            ),
          ));
    }
    const a0 = new l0(
      _0(
        B.map(
          (E) => (
            E.attributes.uv ||
              E.setAttribute(
                "uv",
                new V0(new Float32Array(E.attributes.position.count * 2), 2),
              ),
            E
          ),
        ),
      ),
      S0,
    );
    ((a0.name = "lanterns"), o.add(a0));
    const x0 = se(512, 256, (E, J, n0) => {
        ((E.fillStyle = "#1b1410"),
          E.fillRect(0, 0, J, n0),
          (E.strokeStyle = "#b08a4a"),
          (E.lineWidth = 6),
          E.strokeRect(8, 8, J - 16, n0 - 16),
          (E.fillStyle = "#e8dcc0"),
          (E.font = "bold 34px Georgia"),
          (E.textAlign = "center"),
          E.fillText("M E N U", J / 2, 52),
          (E.font = "24px Georgia"),
          (E.textAlign = "left"),
          [
            ["Shoyu ramen", "850"],
            ["Miso ramen", "900"],
            ["Gyoza (6)", "400"],
            ["Karaage", "600"],
            ["Beer", "500"],
          ].forEach(([z0, te], N0) => {
            (E.fillText(z0, 40, 96 + N0 * 32),
              (E.textAlign = "right"),
              E.fillText(te, J - 40, 96 + N0 * 32),
              (E.textAlign = "left"));
          }),
          (E.strokeStyle = "rgba(120,0,0,0.9)"),
          (E.lineWidth = 10),
          E.beginPath(),
          E.moveTo(60, 200),
          E.lineTo(450, 110),
          E.stroke());
      }),
      u0 = new l0(new D0(1.4, 0.7), new e0({ map: x0, roughness: 0.6 }));
    (u0.position.set(41, 1.9, V + 0.03),
      o.add(u0),
      f(i0, b(45.55, 0, 27, j, 0.92, m0)),
      v(45.55, j, 27, m0, 0.92),
      f(i0, b(H + 0.15, 0, V, 44, 0.92, 28.6)),
      v(H + 0.15, 44, V, 28.6, 0.92),
      f(Y, b(45.6, 0.92, 28.1, j - 0.05, 0.98, 29.4)));
    const R0 = [];
    for (const [E, J, n0, z0] of [
      [45.85, 28.4, 0.2, 0.3],
      [45.9, 29.05, 0.16, 0.2],
      [44.1, 26.2, 0.14, 0.18],
      [45.9, 31, 0.24, 0.34],
    ])
      R0.push(
        new b0(n0, n0 * 0.95, z0, 16, 1, !0).translate(E, 0.98 + z0 / 2, J),
      );
    (f(i0, _0(R0.map((E) => I0(E)))),
      f(i0, b(44.2, 0, V, 45.1, 1.9, 24.95)),
      v(44.2, 45.1, V, 24.95, 1.9));
    {
      const E = I0(new p0(0.85, 1.8, 0.05).translate(-0.43, 0.95, 0));
      (E.rotateY(-2).translate(45.1, 0, 24.95), f(i0, E));
    }
    s.push([45.9, 28.7, 0.5, 1]);
    {
      const E = I0(
        new p0(0.06, 2.1, s0.back[1] - s0.back[0] - 0.05).translate(
          0,
          1.05,
          -0.6999999999999993,
        ),
      );
      (E.rotateY(-1.9).translate(G + 0.03, 0, s0.back[1]), f(i0, E));
    }
    const ee = se(1024, 256, (E, J, n0) => {
        ((E.fillStyle = "#000"),
          E.fillRect(0, 0, J, n0),
          (E.shadowColor = "#ff3050"),
          (E.shadowBlur = 26),
          (E.fillStyle = "#ffd0d8"),
          (E.font = "bold 150px Arial"),
          (E.textAlign = "center"),
          (E.textBaseline = "middle"),
          E.fillText("RAMEN", J * 0.35, n0 * 0.52),
          (E.shadowColor = "#40a0ff"),
          (E.fillStyle = "#d8ecff"),
          (E.font = 'bold 120px "Yu Gothic", "MS Gothic", sans-serif'),
          E.fillText("ラーメン", J * 0.8, n0 * 0.52));
      }),
      Z0 = new e0({
        color: 328451,
        emissive: 16777215,
        emissiveMap: ee,
        emissiveIntensity: 2.4,
        roughness: 0.5,
      }),
      Te = new l0(new D0(6.4, 1.6), Z0);
    (Te.position.set(I - 0.08, 3.25, (S + F) / 2),
      (Te.rotation.y = -Math.PI / 2),
      o.add(Te));
    const Ae = m([[I - 1.3, (S + F) / 2, 2.8, 7.5]], [0.55, 0.12, 0.18]);
    (f(Y, b(I - 0.14, 2.35, S + 0.8, I - 0.02, 3.72, F - 0.8)),
      a.push((E, J) => {
        const n0 = Math.sin(J * 37) * Math.sin(J * 13.3),
          z0 = Math.sin(J * 0.9) > 0.86 || Math.sin(J * 7.1) > 0.97;
        ((Z0.emissiveIntensity = z0 ? 0.08 : 2.2 + 0.4 * n0),
          Ae.m.color.copy(Ae.base).multiplyScalar(Z0.emissiveIntensity / 2.4));
      }));
    const ue = se(256, 128, (E, J, n0) => {
      ((E.fillStyle = "#1c2a4a"),
        E.fillRect(0, 0, J, n0),
        (E.fillStyle = "#e8e0d0"),
        (E.font = 'bold 70px "Yu Gothic", sans-serif'),
        (E.textAlign = "center"),
        E.fillText("麺", J / 2, 90));
    });
    for (let E = 0; E < 3; E++) {
      const J = new l0(
        new D0(0.56, 0.62 - (E === 2 ? 0.25 : 0)),
        new e0({ map: ue, side: ht, roughness: 0.95 }),
      );
      ((J.material.map = ue.clone()),
        (J.material.map.needsUpdate = !0),
        J.material.map.offset.set(E / 3, 0),
        J.material.map.repeat.set(1 / 3, 1),
        J.position.set(
          I - 0.03,
          2.08 + (E === 2 ? 0.12 : 0),
          s0.door[0] + 0.3 + E * 0.6,
        ),
        (J.rotation.y = -Math.PI / 2),
        (J.rotation.x = (E - 1) * 0.04),
        o.add(J));
    }
    const M0 = [];
    for (let E = 0; E < 90; E++) {
      const J = 0.03 + r() * 0.08,
        n0 = new At(J, 3);
      n0.rotateX(-Math.PI / 2).rotateY(r() * 6);
      const z0 = r() < 0.25;
      (n0.translate(
        z0 ? I + 0.4 + r() * 1.2 : I - 0.2 - r() * 1.6,
        0.012 + r() * 0.004,
        24.5 + r() * 7.6,
      ),
        n0.attributes.uv && M0.push(n0));
    }
    const K0 = new l0(
      _0(
        M0.map(
          (E) => (
            E.setAttribute(
              "normal",
              new V0(
                new Float32Array(E.attributes.position.count * 3).map(
                  (J, n0) => (n0 % 3 === 1 ? 1 : 0),
                ),
                3,
              ),
            ),
            E
          ),
        ),
      ),
      new e0({
        color: 10466496,
        roughness: 0.05,
        metalness: 0.2,
        transparent: !0,
        opacity: 0.55,
      }),
    );
    ((K0.name = "glass"), o.add(K0));
    {
      const E = new e0({ color: 15130836, roughness: 0.22 }),
        J = new e0({ color: 5901834, roughness: 0.18 }),
        n0 = new e0({ color: 1182214, roughness: 0.08, metalness: 0.1 }),
        z0 = new e0({ color: 10099220, roughness: 0.55 }),
        te = (D) => {
          const d0 = [
              [0, 0],
              [D * 0.42, 0],
              [D * 0.44, 0.012],
              [D * 0.4, 0.016],
              [D * 0.62, 0.035],
              [D * 0.86, 0.075],
              [D, 0.12],
              [D * 0.97, 0.121],
              [D * 0.83, 0.078],
              [D * 0.58, 0.04],
              [D * 0.3, 0.026],
              [0, 0.024],
            ].map(([G0, X0]) => new ye(G0, X0)),
            F0 = new Ht(d0, 20);
          return I0(F0);
        },
        N0 = [],
        Ee = [],
        Ce = [],
        It = [],
        Qt = [],
        lt = (D, d0, F0, G0, X0 = 0, pe = 0, Le = 0) =>
          D.rotateX(X0).rotateZ(Le).rotateY(pe).translate(d0, F0, G0);
      [
        [42.45, 24.8, 0],
        [42.5, 25.7, 1],
        [42.4, 26.55, 0],
        [42.5, 27.4, 2],
        [42.45, 28.3, 0],
        [42.55, 28.95, 3],
      ].forEach(([D, d0, F0], G0) => {
        const X0 = te(0.1);
        if (
          (F0 === 1
            ? lt(X0, D, 1.06 + 0.121, d0, Math.PI, 0, 0)
            : F0 === 3
              ? lt(X0, D, 1.06 + 0.1, d0, 0, 0.4, 1.35)
              : lt(X0, D, 1.06, d0, 0, G0, 0),
          (G0 % 2 ? Ee : N0).push(X0),
          F0 === 0)
        ) {
          const pe = new At(0.082, 16)
            .rotateX(-Math.PI / 2)
            .translate(D, 1.1600000000000001, d0);
          (I0(pe), It.push(pe));
        }
      });
      for (let D = 0; D < 3; D++) {
        const d0 = new Ht(
          [
            [0.05, 0],
            [0.086, 0.075],
            [0.1, 0.12],
          ].map(([F0, G0]) => new ye(F0, G0)),
          6,
          D * 2.1,
          1.3,
        );
        (I0(d0),
          lt(
            d0,
            41.2 + D * 0.18,
            0.012,
            27.9 + (D % 2) * 0.2,
            Math.PI / 2 - 0.2,
            D * 1.9,
            0.3,
          ),
          N0.push(d0));
      }
      for (let D = 0; D < 5; D++)
        N0.push(lt(te(0.095), 42.45, 1.06 + D * 0.03, 29.05, 0, D, 0));
      for (const D of [25.2, 26.95, 28.7]) {
        Ce.push(I0(new b0(0.035, 0.03, 0.12, 10).translate(42.7, 1.12, D)));
        for (let d0 = 0; d0 < 7; d0++)
          Ce.push(
            I0(
              new p0(0.006, 0.23, 0.006)
                .translate(
                  ((d0 % 3) - 1) * 0.012,
                  0,
                  (Math.floor(d0 / 3) - 1) * 0.012,
                )
                .rotateZ((d0 - 3) * 0.04)
                .translate(42.7, 1.2, D),
            ),
          );
        (It.push(
          I0(new b0(0.028, 0.03, 0.13, 10).translate(42.72, 1.125, D + 0.12)),
          I0(new b0(0.024, 0.026, 0.1, 10).translate(42.7, 1.11, D - 0.13)),
        ),
          Qt.push(
            I0(new b0(0.012, 0.016, 0.03, 8).translate(42.72, 1.205, D + 0.12)),
          ));
      }
      (f(E, _0(N0)), f(J, _0(Ee)), f(N, _0(Ce)), f(n0, _0(It)), f(z0, _0(Qt)));
      for (let D = 0; D < 4; D++) {
        const d0 = 43.4 + (D % 2) * 0.46,
          F0 = Math.floor(D / 2) * 0.3;
        f(z0, b(d0, F0, 31.75, d0 + 0.44, F0 + 0.29, 32.3));
      }
      v(43.35, 44.35, 31.7, 32.35, 0.6);
      const Tn = se(1024, 256, (D, d0, F0) => {
          [
            ["醤油", "850"],
            ["味噌", "900"],
            ["塩", "850"],
            ["豚骨", "950"],
            ["つけ麺", "980"],
            ["餃子", "400"],
            ["炒飯", "600"],
            ["唐揚げ", "600"],
            ["替玉", "150"],
            ["ビール", "500"],
            ["烏龍茶", "250"],
            ["半ライス", "150"],
          ].forEach(([X0, pe], Le) => {
            const Xe = (Le % 12) * (d0 / 12);
            ((D.fillStyle = Le % 3 === 1 ? "#c9b48a" : "#d8c49a"),
              D.fillRect(Xe + 2, 0, d0 / 12 - 4, F0),
              (D.fillStyle = "rgba(80,50,20,0.25)"));
            for (let it = 0; it < 12; it++)
              D.fillRect(Xe + 2 + ((it * 13) % 70), 0, 1, F0);
            ((D.fillStyle = "#16100c"),
              (D.font = 'bold 30px "Yu Mincho", "MS Mincho", serif'),
              (D.textAlign = "center"),
              [...X0].forEach((it, Fn) =>
                D.fillText(it, Xe + d0 / 24, 44 + Fn * 34),
              ),
              (D.font = "20px serif"),
              (D.fillStyle = "#7a1510"),
              D.fillText(pe, Xe + d0 / 24, F0 - 16));
          });
        }),
        Bt = [];
      for (let D = 0; D < 12; D++) {
        const d0 = new D0(0.13, 0.42),
          F0 = d0.attributes.uv;
        for (let G0 = 0; G0 < F0.count; G0++)
          F0.setXY(G0, (D + F0.getX(G0)) / 12, F0.getY(G0));
        (d0
          .rotateZ((((D * 37) % 7) - 3) * 0.012)
          .translate(39.55 + D * 0.2, 2.42, V + 0.035),
          Bt.push(d0));
      }
      const en = new l0(_0(Bt), new e0({ map: Tn, roughness: 0.85 }));
      ((en.name = "menu_slips"),
        o.add(en),
        f(N, b(39.45, 2.64, V + 0.02, 41.85, 2.68, V + 0.06)));
      const tn = se(256, 512, (D, d0, F0) => {
        ((D.fillStyle = "#0c0e10"),
          D.fillRect(0, 0, d0, F0),
          (D.fillStyle = "#e8e4d8"),
          (D.font = 'bold 22px "Yu Gothic", sans-serif'),
          (D.textAlign = "center"),
          D.fillText("食券", d0 / 2, 30));
        const G0 = ["#f2e070", "#f0a050", "#70c8f0", "#f07070", "#a0f090"];
        for (let X0 = 0; X0 < 7; X0++)
          for (let pe = 0; pe < 3; pe++) {
            const Le = 18 + pe * 76,
              Xe = 48 + X0 * 44;
            ((D.fillStyle = G0[(X0 * 3 + pe) % G0.length]),
              D.fillRect(Le, Xe, 66, 36),
              (D.fillStyle = "#1a1208"),
              (D.font = "bold 13px sans-serif"),
              D.fillText(
                ["醤油", "味噌", "塩", "豚骨", "餃子", "炒飯", "ビール"][X0] +
                  (pe ? "大" : ""),
                Le + 33,
                Xe + 23,
              ));
          }
        ((D.fillStyle = "#303438"),
          D.fillRect(40, 380, 176, 60),
          (D.fillStyle = "#070808"),
          D.fillRect(60, 400, 40, 8),
          D.fillRect(150, 395, 50, 30),
          (D.fillStyle = "#ff5040"),
          D.fillRect(200, 452, 8, 8));
      });
      (f(i0, b(42.28, 0, 31.88, 42.98, 1.62, 32.33)),
        v(42.25, 43, 31.85, 32.35, 1.62));
      const nn = new e0({
          color: 328965,
          emissive: 16777215,
          emissiveMap: tn,
          emissiveIntensity: 0.55,
          roughness: 0.3,
          map: tn,
        }),
        Tt = new l0(new D0(0.62, 1.1), nn);
      (Tt.position.set(42.63, 1, 31.875),
        (Tt.rotation.y = Math.PI),
        o.add(Tt),
        a.push((D, d0) => {
          nn.emissiveIntensity =
            Math.sin(d0 * 1.3) * Math.sin(d0 * 17) > 0.93 ? 0.15 : 0.55;
        }),
        f(Y, b(42.55, 2.62, 24.25, 42.62, 2.72, 24.6)),
        f(Y, b(42.3, 2.3, 24.45, 42.95, 2.72, 24.62)),
        f(n0, b(42.33, 2.33, 24.62, 42.92, 2.69, 24.63)),
        f(K, b(40.9, 2.78, V + 0.02, 41.7, 2.82, V + 0.32)),
        f(O, b(41.05, 2.82, V + 0.05, 41.55, 3.02, V + 0.26)),
        f(O, b(41, 3.02, V + 0.03, 41.6, 3.06, V + 0.3)));
      const An = se(256, 360, (D, d0, F0) => {
          ((D.fillStyle = "#f0ece2"),
            D.fillRect(0, 0, d0, F0),
            (D.fillStyle = "#8a1a14"),
            D.fillRect(0, 0, d0, 120),
            (D.fillStyle = "#fff"),
            (D.font = "bold 60px serif"),
            (D.textAlign = "center"),
            D.fillText("9月", d0 / 2, 84),
            (D.fillStyle = "#222"),
            (D.font = "18px sans-serif"));
          for (let G0 = 1; G0 <= 30; G0++) {
            const X0 = (G0 + 1) % 7,
              pe = Math.floor((G0 + 1) / 7);
            ((D.fillStyle = X0 === 0 ? "#b01818" : "#222"),
              D.fillText(String(G0), 22 + X0 * 35, 160 + pe * 38));
          }
          ((D.strokeStyle = "#c01010"),
            (D.lineWidth = 3),
            D.beginPath(),
            D.arc(232, 306, 16, 0, 7),
            D.stroke());
        }),
        pt = new l0(new D0(0.34, 0.48), new e0({ map: An, roughness: 0.9 }));
      (pt.position.set(40.3, 1.75, m0 - 0.03),
        (pt.rotation.y = Math.PI),
        (pt.rotation.z = 0.05),
        o.add(pt));
    }
    c.push(Gt(43.68, 27.2, Math.PI / 2 + 0.1, l, 0.92));
  }
  {
    const R = se(512, 256, (F, A, H) => {
        ((F.fillStyle = "#5a5c5e"), F.fillRect(0, 0, A, H));
        for (let g = 0; g < H; g += 8)
          ((F.fillStyle =
            g % 16 ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.08)"),
            F.fillRect(0, g, A, 3));
        F.fillStyle = "rgba(60,30,20,0.4)";
        for (let g = 0; g < 30; g++)
          F.fillRect(
            Math.random() * A,
            Math.random() * H,
            20 + Math.random() * 60,
            4 + Math.random() * 10,
          );
        ((F.fillStyle = "#b01818"),
          (F.font = "bold 54px Impact, Arial Black, sans-serif"),
          (F.textAlign = "center"),
          F.fillText("THEY ARE INSIDE", A / 2, H * 0.5),
          (F.font = "bold 30px Impact, Arial Black, sans-serif"),
          F.fillText("DO NOT OPEN", A / 2, H * 0.75));
      }),
      I = new l0(
        new D0(5.6, 2.6),
        new e0({ map: R, roughness: 0.6, metalness: 0.4 }),
      );
    (I.position.set(38.97, 1.3, 36.1), (I.rotation.y = -Math.PI / 2), o.add(I));
    const G = se(128, 128, (F, A, H) => {
        ((F.fillStyle = "#000"),
          F.fillRect(0, 0, A, H),
          (F.fillStyle = "#20e070"),
          F.fillRect(44, 12, 40, 104),
          F.fillRect(12, 44, 104, 40));
      }),
      S = new l0(
        new D0(0.8, 0.8),
        new e0({
          color: 132098,
          emissive: 16777215,
          emissiveMap: G,
          emissiveIntensity: 0.9,
        }),
      );
    (S.position.set(38.4, 3.3, 33.4),
      (S.rotation.y = -Math.PI / 2),
      o.add(S),
      f(Y, b(38.44, 3.2, 33.35, 39, 3.26, 33.45)));
  }
  {
    for (let G = Q0.x0; G < Q0.x1; G += 0.16)
      f(
        v0("boards_barricade"),
        b(G, 0, Q0.z0, G + 0.14, 2.2 + Math.sin(G * 9) * 0.12, Q0.z0 + 0.05),
      );
    v(Q0.x0, Q0.x1, Q0.z0 - 0.3, Q0.z0 + 0.1, 2.3);
    for (const [G, S, F] of [
      [47.3, 29.5, 3],
      [48.9, 31.8, 2],
    ])
      for (let A = 0; A < F; A++)
        f(K, b(G - 0.6, A * 0.15, S - 0.4, G + 0.6, A * 0.15 + 0.12, S + 0.4));
    (v(46.7, 47.9, 29.1, 29.9, 0.45), v(48.3, 49.5, 31.4, 32.2, 0.3));
    for (const [G, S, F] of [
      [48.9, 27.2, 0.6],
      [49, 27.9, 0.45],
      [47.1, 38.8, 0.55],
    ])
      (f(K, b(G - F / 2, 0, S - F / 2, G + F / 2, F, S + F / 2)),
        v(G - F / 2, G + F / 2, S - F / 2, S + F / 2, F));
    const R = new e0({
        color: 2236962,
        emissive: 16769184,
        emissiveIntensity: 2,
      }),
      I = new l0(new nt(0.07, 8, 6), R);
    (I.position.set(46.7, 2.5, 26),
      o.add(I),
      a.push((G, S) => {
        R.emissiveIntensity =
          Math.sin(S * 23) * Math.sin(S * 5.7) > 0.35 ? 0.1 : 2.2;
      }));
    for (const [G, S] of [
      [42.3, 42.2],
      [43, 42.25],
    ])
      (f(C0, b(G - 0.3, 0, S - 0.3, G + 0.3, 1, S + 0.3)),
        v(G - 0.3, G + 0.3, S - 0.3, S + 0.3, 1));
    (s.push([48.4, 40.9, 0.8, 0.4]),
      c.push(Gt(38.35, 43.9, 1.5, l)),
      c.push(Gt(4.3, 37.9, -0.35, l)));
  }
  {
    (s.push([19.4, 36.4, 0.7, 0.5]),
      f(q, b(19.1, 0, 36.1, 19.7, 0.9, 36.7)),
      v(19.1, 19.7, 36.1, 36.7, 0.9));
    {
      const R = ro({ fallen: !0 });
      (R.group.position.set(27.6, R.group.position.y, 39),
        (R.group.rotation.y = 1.4),
        y(R.group));
    }
  }
  {
    const R = [
        ["BAKERY", "#f0d8a8", "#5a3a1a", !1],
        ["BOOKS", "#e8e0c8", "#1f3a2a", !1],
        ["SUSHI  寿司", "#ffffff", "#8a1a14", !1],
        ["KARAOKE", "#ff5ac8", "#000", !0],
        ["LAUNDRY", "#d0e8f8", "#1a3a5a", !1],
        ["BAR 99", "#4ac8ff", "#000", !0],
        ["PACHINKO", "#ffd040", "#000", !0],
        ["24h MART", "#60ff90", "#000", !0],
        ["FLOWERS", "#f8e0e8", "#6a2a4a", !1],
        ["CAFÉ", "#f0e0c8", "#3a2418", !1],
        ["CLINIC", "#e8f0f0", "#1a4a4a", !1],
        ["TEA  茶", "#e8f0d8", "#2a4a2a", !1],
      ],
      I = se(1024, 768, (B, a0, x0) => {
        const u0 = a0 / 4,
          R0 = x0 / 3;
        R.forEach(([ee, Z0, Te, Ae], ue) => {
          const M0 = (ue % 4) * u0,
            K0 = Math.floor(ue / 4) * R0;
          if (((B.fillStyle = Te), B.fillRect(M0, K0, u0, R0), !Ae)) {
            ((B.strokeStyle = Z0),
              (B.lineWidth = 5),
              B.strokeRect(M0 + 10, K0 + 10, u0 - 20, R0 - 20),
              (B.fillStyle = "rgba(0,0,0,0.25)"));
            for (let E = 0; E < 40; E++)
              B.fillRect(M0 + ((E * 53) % u0), K0 + ((E * 31) % R0), 14, 3);
          }
          (B.save(),
            Ae && ((B.shadowColor = Z0), (B.shadowBlur = 22)),
            (B.fillStyle = Z0),
            (B.font = `bold ${ee.length > 8 ? 46 : 58}px "Arial Black", Arial, "Yu Gothic", sans-serif`),
            (B.textAlign = "center"),
            (B.textBaseline = "middle"),
            B.fillText(ee, M0 + u0 / 2, K0 + R0 / 2 + 4),
            B.restore());
        });
      }),
      G = new e0({ map: I, roughness: 0.8 }),
      S = new e0({
        color: 131586,
        emissive: 16777215,
        emissiveMap: I,
        emissiveIntensity: 1.7,
        roughness: 0.6,
      }),
      F = [],
      A = [],
      H = new e0({ color: 461067, roughness: 0.08, metalness: 0.6 }),
      g = se(256, 256, (B, a0, x0) => {
        ((B.fillStyle = "#4c4e50"), B.fillRect(0, 0, a0, x0));
        for (let u0 = 0; u0 < x0; u0 += 8)
          ((B.fillStyle = "rgba(0,0,0,0.3)"), B.fillRect(0, u0, a0, 3));
        ((B.fillStyle = "rgba(120,20,20,0.8)"),
          (B.font = "bold 40px Impact, sans-serif"),
          (B.textAlign = "center"),
          B.fillText("CLOSED", a0 / 2, x0 * 0.55));
      });
    g.wrapS = gt;
    const j = new e0({ map: g, roughness: 0.55, metalness: 0.5 }),
      V = (B, a0) =>
        se(128, 64, (x0, u0, R0) => {
          for (let ee = 0; ee < u0; ee += 16)
            ((x0.fillStyle = (ee / 16) % 2 ? B : a0),
              x0.fillRect(ee, 0, 16, R0));
          ((x0.fillStyle = "rgba(0,0,0,0.35)"), x0.fillRect(0, R0 - 8, u0, 8));
        }),
      m0 = [
        V("#8a1a14", "#d8d0c0"),
        V("#1f4a2a", "#d8d0c0"),
        V("#1a3a6a", "#d0c8b0"),
      ].map(
        (B) => ((B.wrapS = gt), new e0({ map: B, roughness: 0.9, side: ht })),
      ),
      c0 = [[], [], []],
      E0 = [],
      y0 = [],
      h0 = (B, a0, x0, u0, R0, ee, Z0 = {}) => {
        const Te = R0 - u0,
          Ae = (u0 + R0) / 2,
          ue = (M0, K0, E, J, n0, z0) => {
            if (B === "x") {
              const Ee = a0 + x0 * E,
                Ce = a0 + x0 * z0;
              return b(Math.min(Ee, Ce), K0, M0, Math.max(Ee, Ce), n0, J);
            }
            const te = a0 + x0 * E,
              N0 = a0 + x0 * z0;
            return b(M0, K0, Math.min(te, N0), J, n0, Math.max(te, N0));
          };
        if (
          (f(Y, ue(u0, 0, 0, u0 + 0.12, 3, 0.1)),
          f(Y, ue(R0 - 0.12, 0, 0, R0, 3, 0.1)),
          f(Y, ue(u0, 2.45, 0, R0, 2.55, 0.1)),
          f(Y, ue(u0 + 0.12, 0.35, 0, R0 - 0.12, 0.45, 0.12)),
          Z0.shutter)
        ) {
          const M0 = ue(u0 + 0.12, 0, 0.04, R0 - 0.12, 2.45, 0.06);
          E0.push(M0);
        } else {
          const M0 = Math.min(1, Te * 0.3),
            K0 = Z0.doorLeft
              ? [u0 + 0.12, u0 + 0.12 + M0]
              : [R0 - 0.12 - M0, R0 - 0.12];
          (f(Y, ue(K0[0] - 0.05, 0, 0, K0[0] + 0.03, 2.45, 0.08)),
            Z0.broken ||
              y0.push(
                ue(
                  Z0.doorLeft ? K0[1] : u0 + 0.12,
                  0.45,
                  0.03,
                  Z0.doorLeft ? R0 - 0.12 : K0[0],
                  2.45,
                  0.035,
                ),
              ),
            y0.push(ue(K0[0], 0, 0.03, K0[1], 2.45, 0.035)),
            f(v0("dark_room"), ue(u0 + 0.12, 0, -0.01, R0 - 0.12, 2.45, 0)));
        }
        if (Z0.awning != null) {
          const M0 = new D0(Te - 0.2, 1.1, 1, 1);
          (M0.rotateX(-Math.PI / 2 + 0.42),
            B === "x"
              ? (M0.rotateY(x0 > 0 ? Math.PI / 2 : -Math.PI / 2),
                M0.translate(a0 + x0 * 0.52, 2.78, Ae))
              : (x0 < 0 && M0.rotateY(Math.PI),
                M0.translate(Ae, 2.78, a0 + x0 * 0.52)),
            c0[Z0.awning].push(M0));
        }
        if (ee != null) {
          const M0 = new D0(Math.min(Te - 0.3, 3.4), 0.85),
            K0 = (ee % 4) / 4,
            E = 1 - (Math.floor(ee / 4) + 1) / 3,
            J = M0.attributes.uv;
          for (let n0 = 0; n0 < J.count; n0++)
            J.setXY(n0, K0 + J.getX(n0) / 4, E + J.getY(n0) / 3);
          (B === "x"
            ? (M0.rotateY(x0 > 0 ? Math.PI / 2 : -Math.PI / 2),
              M0.translate(a0 + x0 * 0.14, 3.35, Ae))
            : (x0 < 0 && M0.rotateY(Math.PI),
              M0.translate(Ae, 3.35, a0 + x0 * 0.14)),
            R[ee][3] ? A.push(M0) : F.push(M0));
        }
        if (Z0.broken) {
          const M0 = [];
          for (let K0 = 0; K0 < 26; K0++) {
            const E = 0.03 + r() * 0.07,
              J = new At(E, 3);
            J.rotateX(-Math.PI / 2).rotateY(r() * 6);
            const n0 = u0 + r() * Te,
              z0 = 0.1 + r() * 1.3;
            (B === "x"
              ? J.translate(a0 + x0 * z0, 0.012, n0)
              : J.translate(n0, 0.012, a0 + x0 * z0),
              M0.push(J));
          }
          y0.push(...M0);
        }
      };
    (h0("x", 31, 1, 8.4, 12.2, 4, { awning: 2, doorLeft: !0 }),
      h0("x", 31, 1, 16.4, 20.4, 0, { shutter: !0, awning: 0 }),
      h0("x", 31, 1, 21, 24.8, 1, { broken: !0, awning: 1 }),
      h0("x", 31, 1, 25.5, 29.2, 2, { awning: 0 }),
      h0("x", 39, -1, 1.6, 5.8, 5, { broken: !0 }),
      h0("x", 39, -1, 6.4, 10.6, 6, { shutter: !0 }),
      h0("x", 39, -1, 11.6, 16.6, 7, { broken: !0, awning: 1, doorLeft: !0 }),
      h0("x", 39, -1, 17.4, 21.5, 8, { awning: 0 }),
      h0("x", 39, -1, 43.2, 46.8, 9, { awning: 2, broken: !0 }),
      h0("z", 35.8, 1, 17.4, 21.2, 11, { awning: 1 }),
      h0("z", 39.6, -1, 24, 28.4, 10, { broken: !0, doorLeft: !0 }));
    const L = (B, a0, x0) => {
      if (!B.length) return null;
      const u0 = new l0(_0(B), a0);
      return ((u0.name = x0), (u0.receiveShadow = !0), o.add(u0), u0);
    };
    (L(F, G, "shop_signs"),
      L(A, S, "shop_neon"),
      L(
        y0.map(
          (B) => (
            B.attributes.uv ||
              B.setAttribute(
                "uv",
                new V0(new Float32Array(B.attributes.position.count * 2), 2),
              ),
            B
          ),
        ),
        H,
        "shop_glass",
      ),
      L(E0, j, "shutters"),
      c0.forEach((B, a0) => {
        const x0 = L(B, m0[a0], "awnings" + a0);
        x0 && (x0.castShadow = !0);
      }));
    const S0 = [
      m([[38.1, 3.7, 2.4, 4.2]], [0.09, 0.28, 0.55]),
      m([[38.1, 8.5, 2.4, 4.2]], [0.55, 0.36, 0.07]),
      m([[38.1, 14.1, 2.4, 5]], [0.1, 0.5, 0.18]),
    ];
    a.push((B, a0) => {
      const x0 = Math.sin(a0 * 29) * Math.sin(a0 * 11.3);
      S.emissiveIntensity = Math.sin(a0 * 0.7) > 0.9 ? 0.15 : 1.5 + 0.3 * x0;
      for (const u0 of S0)
        u0.m.color.copy(u0.base).multiplyScalar(S.emissiveIntensity / 1.6);
    });
  }
  {
    const R = se(256, 1024, (S, F, A) => {
        ((S.fillStyle = "#120404"),
          S.fillRect(0, 0, F, A),
          (S.strokeStyle = "#ff3a3a"),
          (S.lineWidth = 10),
          (S.shadowColor = "#ff2020"),
          (S.shadowBlur = 30),
          S.strokeRect(16, 16, F - 32, A - 32),
          (S.fillStyle = "#ffe0e0"),
          (S.font = 'bold 170px "Yu Gothic", "MS Gothic", sans-serif'),
          (S.textAlign = "center"),
          (S.textBaseline = "middle"),
          ["ラ", "ー", "メ", "ン"].forEach((H, g) =>
            S.fillText(H, F / 2, 150 + g * 230),
          ));
      }),
      I = new e0({
        color: 328194,
        emissive: 16777215,
        emissiveMap: R,
        emissiveIntensity: 2.2,
        roughness: 0.5,
      });
    for (const S of [0, Math.PI]) {
      const F = new l0(new D0(0.75, 3), I);
      (F.position.set(38.35, 5, 25.6 + (S ? -0.01 : 0.01)),
        (F.rotation.y = S),
        o.add(F));
    }
    (f(Y, b(38.3, 3.45, 25.55, 39, 3.52, 25.65)),
      f(Y, b(38.3, 6.48, 25.55, 39, 6.55, 25.65)));
    const G = m([[37.6, 25.6, 3.2, 3.2]], [0.5, 0.05, 0.05]);
    a.push((S, F) => {
      ((I.emissiveIntensity =
        Math.sin(F * 3.1) * Math.sin(F * 17) > 0.8 ? 0.2 : 2.1),
        G.m.color.copy(G.base).multiplyScalar(I.emissiveIntensity / 2.1));
    });
  }
  {
    const R = (I, G, S, F, A, H = !1) => {
      const g = se(512, 200, (V, m0, c0) => {
          ((V.strokeStyle = "rgba(190,24,16,0.95)"),
            (V.fillStyle = "rgba(190,24,16,0.95)"),
            (V.lineWidth = 16),
            (V.lineCap = "round"),
            (V.shadowColor = "rgba(190,24,16,0.9)"),
            (V.shadowBlur = 10),
            (V.font = "bold 64px Impact, Arial Black, sans-serif"),
            (V.textAlign = "center"),
            V.fillText(A, m0 / 2, 70));
          const E0 = H ? -1 : 1,
            y0 = m0 / 2 - E0 * 190,
            h0 = m0 / 2 + E0 * 190;
          (V.beginPath(),
            V.moveTo(y0, 140),
            V.lineTo(h0, 140),
            V.stroke(),
            V.beginPath(),
            V.moveTo(h0 - E0 * 40, 108),
            V.lineTo(h0, 140),
            V.lineTo(h0 - E0 * 40, 172),
            V.stroke());
        }),
        j = new l0(
          new D0(1.9, 0.75),
          new e0({
            map: g,
            transparent: !0,
            roughness: 0.9,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            depthWrite: !1,
          }),
        );
      (j.position.set(I, G, S), (j.rotation.y = F), o.add(j));
    };
    (R(18.6, 1.8, 12.58, Math.PI, "CHURCH", !0),
      R(30.98, 1.8, 20, Math.PI / 2, "CHURCH", !0),
      R(38.98, 1.9, 25.2, -Math.PI / 2, "THROUGH HERE", !1),
      R(31.02, 1.8, 41.6, Math.PI / 2, "CHURCH", !1));
  }
  {
    const R = [],
      I = (A, H, g, j = 0, V = null, m0 = 1.8) => {
        if (
          ((A.group.position.x += H),
          (A.group.position.z += g),
          (A.group.rotation.y = j),
          y(A.group),
          A.card &&
            (A.card.position.set(H, 0, g),
            (A.card.rotation.y = j),
            A.card.updateMatrixWorld(!0),
            R.push(A.card.geometry.clone().applyMatrix4(A.card.matrixWorld))),
          V)
        ) {
          const [c0, E0] = V,
            y0 = Math.abs(Math.cos(j)),
            h0 = Math.abs(Math.sin(j)),
            L = (c0 * y0 + E0 * h0) / 2,
            S0 = (c0 * h0 + E0 * y0) / 2;
          v(H - L, H + L, g - S0, g + S0, m0);
        }
      },
      G = (A, H, g, j) => {
        const V = jn(A);
        I(V, H, g, j, V.size, 1.85);
      };
    (G({ kind: "white" }, 18.2, 12.99, 0),
      G({ kind: "white" }, 38.62, 22.45, -Math.PI / 2),
      G({ kind: "blue" }, 38.62, 23.5, -Math.PI / 2),
      G({ kind: "red", smashed: !0 }, 26, 36.18, 0));
    const S = (A, H, g, j = 0) => I(Jn(A), H, g, j, [0.36, 0.36], 9);
    (S({ transformer: !0 }, 32.55, 11.5, Math.PI / 2),
      S({ lamp: !0 }, 32.55, 24, Math.PI / 2),
      S({}, 32.55, 34.9, Math.PI / 2),
      S({ transformer: !0, lamp: !0 }, 37.45, 17, -Math.PI / 2),
      S({}, 37.45, 41, -Math.PI / 2),
      S({}, 29.5, 12.85, 0),
      S({ transformer: !0 }, 49.25, 36, Math.PI / 2),
      S({ lamp: !0 }, 20.5, 39.35, Math.PI),
      I(ot({ fallen: !0 }), 19.3, 15, 1.4),
      I(ot({ color: 6974058 }), 31.45, 20.8, 0.05, [0.5, 1.8], 1.1),
      I(ot({ fallen: !0, color: 9050650 }), 32, 21.95, 2.2),
      I(ot({ fallen: !0, color: 1722922 }), 18.5, 39.1, -0.4),
      [
        [32.2, 29.4, 0],
        [33.4, 29, 0.3],
        [34.6, 28.85, 0],
        [37.3, 29.3, 0.8],
      ].forEach(([A, H, g]) => I(cn(), A, H, g)));
    {
      const A = cn();
      (A.group.rotation.set(0, 0, Math.PI / 2 - 0.2),
        (A.group.position.y = 0.14),
        I(A, 36, 28.7, 1.2));
    }
    (I(Qn(), 35.4, 28.3, 0.1, [1.3, 0.5], 1),
      I(Bn(), 31.5, 33.7, Math.PI / 2, [0.5, 0.5], 1.3),
      I(eo(), 32.45, 40, -Math.PI / 2, [0.12, 0.12], 2.6),
      I(to(), 14.8, 12.3, -Math.PI / 2 + 0.2, [1.4, 0.2], 3.4),
      I(fn(), 33.2, 18.5, 0.6),
      I(fn({ open: !0 }), 32.2, 27.4, 2),
      I(Ct(), 25.3, 14.9, 1),
      I(Ct(), 38, 42, 2.3),
      I(Ct(), 16.8, 38.6, 0.3));
    for (const [A, H] of [
      [35, 12],
      [35, 24.5],
      [35, 40.6],
      [24.5, 14],
      [21, 37.7],
    ])
      I(no(), A, H, A * 0.7);
    for (const [A, H] of [
      [32.75, 14],
      [32.75, 26],
      [32.75, 38.4],
      [37.25, 20],
      [37.25, 36.3],
    ])
      I(oo(), A, H, 0);
    if (R.length) {
      const A = new l0(_0(R), bakeSignTextures().card);
      ((A.name = "machine_light"), (A.renderOrder = 3), o.add(A));
    }
    const F = bakeSignTextures().glow;
    a.push((A, H) => {
      const g = Math.sin(H * 0.83) * Math.sin(H * 13.1);
      F.emissiveIntensity = g > 0.9 ? 0.15 : 0.55 + 0.05 * Math.sin(H * 50);
    });
  }
  {
    const R = se(1024, 1024, (g, j, V) => {
        const c0 = (L, S0) => {
          (g.save(),
            g.translate((L % 4) * 256, Math.floor(L / 4) * 256),
            g.beginPath(),
            g.rect(0, 0, 256, 256),
            g.clip(),
            S0(g),
            g.restore());
        };
        let E0 = 7;
        const y0 = () => (E0 = (E0 * 16807) % 2147483647) / 2147483647,
          h0 = (L, S0, B, a0, x0 = "70,6,8") => {
            for (let u0 = 0; u0 < 26; u0++) {
              const R0 = y0() * 6.28,
                ee = Math.pow(y0(), 0.7) * B,
                Z0 = 2 + y0() * B * (u0 < 5 ? 0.5 : 0.18);
              ((g.fillStyle = `rgba(${x0},${a0 * (0.6 + y0() * 0.4)})`),
                g.beginPath(),
                g.arc(L + Math.cos(R0) * ee, S0 + Math.sin(R0) * ee, Z0, 0, 7),
                g.fill());
            }
          };
        (g.clearRect(0, 0, j, V),
          c0(0, () => {
            (h0(128, 128, 80, 0.9), h0(128, 128, 40, 1, "40,2,4"));
          }),
          c0(1, () => {
            for (let L = 0; L < 40; L++) {
              const S0 = 20 + L * 5.5;
              ((g.fillStyle = `rgba(62,5,7,${0.25 + 0.6 * (1 - L / 40)})`),
                g.fillRect(
                  96 + Math.sin(L * 0.4) * 10 + y0() * 6,
                  S0,
                  60 - L * 0.6 + y0() * 10,
                  7,
                ));
            }
            h0(126, 30, 30, 0.9);
          }),
          c0(2, () => {
            for (const [L, S0, B] of [
              [80, 110, -0.3],
              [170, 150, 0.25],
            ]) {
              (g.save(),
                g.translate(L, S0),
                g.rotate(B),
                (g.fillStyle = "rgba(80,6,8,0.85)"),
                g.beginPath(),
                g.ellipse(0, 20, 26, 32, 0, 0, 7),
                g.fill());
              for (let a0 = 0; a0 < 5; a0++)
                (g.beginPath(),
                  g.ellipse(
                    -24 + a0 * 12,
                    -22 - (a0 === 0 ? -14 : a0 === 2 ? 8 : 0),
                    5,
                    18,
                    (a0 - 2) * 0.15,
                    0,
                    7,
                  ),
                  g.fill());
              for (let a0 = 0; a0 < 5; a0++)
                g.fillRect(-18 + a0 * 9 + y0() * 4, 44, 3, 20 + y0() * 50);
              g.restore();
            }
          }),
          c0(3, () => {
            const L = g.createRadialGradient(128, 128, 10, 128, 128, 124);
            (L.addColorStop(0, "rgba(6,5,4,0.95)"),
              L.addColorStop(0.55, "rgba(12,10,8,0.8)"),
              L.addColorStop(1, "rgba(20,16,12,0)"),
              (g.fillStyle = L),
              g.fillRect(0, 0, 256, 256));
          }),
          c0(4, () => {
            (g.translate(128, 128),
              g.rotate(0.2),
              (g.fillStyle = "#b8b2a4"),
              g.fillRect(-90, -110, 180, 220),
              (g.fillStyle = "#2a2826"),
              (g.font = "bold 26px serif"),
              g.fillText("号外", -80, -78));
            for (let L = 0; L < 18; L++)
              g.fillRect(
                -80 + (L % 2) * 86,
                -60 + Math.floor(L / 2) * 18,
                74 - y0() * 20,
                5,
              );
            ((g.fillStyle = "rgba(40,30,20,0.35)"),
              g.fillRect(-90, 40, 180, 70));
          }),
          c0(5, () => {
            (g.translate(128, 128),
              g.rotate(-0.35),
              (g.fillStyle = "#d8d0c0"),
              g.fillRect(-70, -95, 140, 190),
              (g.fillStyle = "#c03020"),
              g.fillRect(-70, -95, 140, 40),
              (g.fillStyle = "#222"));
            for (let L = 0; L < 9; L++)
              g.fillRect(-60, -40 + L * 13, 120 - y0() * 40, 4);
          }),
          c0(6, () => {
            ((g.fillStyle = "#e8e4da"),
              g.fillRect(28, 8, 200, 240),
              (g.fillStyle = "#111"),
              (g.font = "bold 30px Arial Black, Arial"),
              (g.textAlign = "center"),
              g.fillText("MISSING", 128, 44),
              (g.fillStyle = "#6a6460"),
              g.fillRect(68, 58, 120, 110),
              (g.fillStyle = "#3a3430"),
              g.beginPath(),
              g.arc(128, 100, 26, 0, 7),
              g.fill(),
              g.fillRect(90, 128, 76, 40),
              (g.fillStyle = "#111"),
              (g.font = "15px Arial"),
              g.fillText("YUKI  (7)", 128, 190),
              g.fillText("last seen at the", 128, 210),
              g.fillText("SUMMER FESTIVAL", 128, 228),
              (g.fillStyle = "rgba(90,70,40,0.25)"),
              g.fillRect(28, 150, 200, 98));
          }),
          c0(7, () => {
            for (let L = 0; L < 7; L++)
              (g.save(),
                g.translate(70 + (L % 2) * 60, 230 - L * 32),
                g.rotate(-0.1),
                (g.fillStyle = `rgba(70,6,8,${0.8 - L * 0.1})`),
                g.beginPath(),
                g.ellipse(0, 0, 12, 22, 0, 0, 7),
                g.fill(),
                g.beginPath(),
                g.ellipse(0, 26, 10, 9, 0, 0, 7),
                g.fill(),
                g.restore());
          }),
          c0(8, () => {
            const L = g.createRadialGradient(128, 128, 6, 128, 128, 110);
            (L.addColorStop(0, "rgba(8,8,6,0.8)"),
              L.addColorStop(1, "rgba(8,8,6,0)"),
              (g.fillStyle = L),
              g.beginPath(),
              g.ellipse(128, 128, 120, 80, 0.3, 0, 7),
              g.fill());
          }),
          c0(9, () => {
            ((g.strokeStyle = "rgba(8,8,8,0.8)"),
              (g.lineWidth = 22),
              (g.lineCap = "round"));
            for (const L of [70, 180])
              (g.beginPath(),
                g.moveTo(L, 256),
                g.bezierCurveTo(L, 170, L + 20, 90, L + 60, 0),
                g.stroke());
          }),
          c0(10, () => {
            ((g.fillStyle = "rgba(200,20,20,0.9)"),
              (g.font = 'bold 64px "Yu Gothic", sans-serif'),
              (g.textAlign = "center"),
              g.fillText("にげて", 128, 110),
              (g.font = "bold 34px Impact, Arial Black"),
              g.fillText("RUN", 128, 170));
            for (let L = 0; L < 10; L++)
              g.fillRect(40 + y0() * 170, 120 + y0() * 20, 3, 20 + y0() * 50);
          }),
          c0(11, () => {
            ((g.fillStyle = "#8a6a40"),
              g.translate(128, 128),
              g.rotate(0.5),
              g.fillRect(-100, -70, 200, 140),
              (g.fillStyle = "rgba(0,0,0,0.25)"),
              g.fillRect(-100, -5, 200, 6));
          }));
      }),
      I = new e0({
        map: R,
        transparent: !0,
        depthWrite: !1,
        roughness: 0.55,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4,
      }),
      G = [],
      S = (g, j, V, m0, c0, E0, y0 = 0.008) => {
        const h0 = new D0(m0, c0),
          L = h0.attributes.uv;
        for (let S0 = 0; S0 < L.count; S0++)
          L.setXY(
            S0,
            ((g % 4) + L.getX(S0)) / 4,
            1 - (Math.floor(g / 4) + 1 - L.getY(S0)) / 4,
          );
        (h0
          .rotateX(-Math.PI / 2)
          .rotateY(E0)
          .translate(j, y0, V),
          G.push(h0));
      },
      F = (g, j, V, m0, c0, E0, y0) => {
        const h0 = new D0(c0, E0),
          L = h0.attributes.uv;
        for (let S0 = 0; S0 < L.count; S0++)
          L.setXY(
            S0,
            ((g % 4) + L.getX(S0)) / 4,
            1 - (Math.floor(g / 4) + 1 - L.getY(S0)) / 4,
          );
        (h0.rotateY(y0).translate(j, V, m0), G.push(h0));
      };
    (S(3, 36.3, 19.6, 4.2, 5.2, 2.75),
      S(3, 36.1, 38.2, 4.2, 5.2, 0.35),
      S(3, 35, 32.6, 7, 13, Math.PI / 2 + 0.22),
      S(3, 26.2, 13.3, 2.2, 2.2, 0),
      S(9, 35.4, 26.6, 2.2, 6.4, 0.25),
      S(8, 33.1, 12.4, 1.8, 1.4, 0.4),
      S(8, 36.8, 42.2, 2, 1.4, -0.7),
      S(8, 24, 38, 1.6, 1.2, 1.1),
      S(1, 24.1, 14.3, 0.9, 1.9, Math.PI + 0.3),
      S(0, 23.8, 13.4, 1.4, 1.4, 0.5),
      S(0, 37.2, 18.9, 1.1, 1.1, 1.1),
      S(1, 41.6, 29.9, 0.7, 1.8, -1.1, 0.02),
      S(0, 42.9, 30.6, 0.9, 0.9, 0.3, 0.02),
      F(2, s0.kx - 0.01, 1.3, 29.3, 0.7, 0.7, -Math.PI / 2),
      S(1, 42.45, 26.2, 0.45, 1.6, 0, 1.068),
      S(0, 48, 24.6, 1.8, 1.8, 0.2),
      S(1, 48.1, 27.1, 1, 2.6, 0.1));
    for (let g = 0; g < 6; g++)
      S(
        7,
        29 - g * 1.9,
        38.2 + Math.sin(g) * 0.3,
        0.55,
        0.9,
        Math.PI / 2 + 0.1,
      );
    ([
      [4, 20.5, 14.6],
      [5, 27.9, 13.1],
      [4, 33.2, 17.9],
      [11, 32.1, 22.8],
      [5, 37.7, 21.4],
      [4, 36.4, 24.2],
      [5, 33.6, 36.6],
      [4, 37.1, 40.3],
      [11, 34.2, 43.1],
      [4, 47.6, 33],
      [5, 44, 41.2],
      [4, 26.5, 37.2],
      [5, 20.1, 38.9],
      [11, 17.6, 37],
      [4, 40.8, 27.6],
    ].forEach(([g, j, V], m0) =>
      S(g, j, V, g === 11 ? 0.8 : 0.5, g === 11 ? 0.6 : 0.62, m0 * 1.7),
    ),
      F(6, 38.97, 1.55, 17.6, 0.36, 0.45, -Math.PI / 2),
      F(6, 38.97, 1.5, 17.15, 0.36, 0.45, -Math.PI / 2 + 0.02),
      F(6, 38.97, 1.1, 17.4, 0.36, 0.45, -Math.PI / 2 - 0.03),
      F(6, 21.8, 1.6, 12.63, 0.4, 0.5, 0),
      F(5, 22.4, 1.5, 12.63, 0.36, 0.46, 0.05),
      F(6, 29.6, 1.55, 35.83, 0.4, 0.5, 0),
      F(10, 27.2, 1.9, 15.37, 1.8, 1.8, Math.PI));
    const H = new l0(_0(G), I);
    ((H.name = "decals"),
      (H.renderOrder = 2),
      (H.receiveShadow = !0),
      o.add(H));
  }
  for (const R of c) R.statics && y(R.statics);
  for (const [R, I] of h) {
    const G = new l0(
      _0(
        I.map(
          (S) => (
            S.attributes.uv ||
              S.setAttribute(
                "uv",
                new V0(new Float32Array(S.attributes.position.count * 2), 2),
              ),
            S.attributes.normal || S.computeVertexNormals(),
            S.index,
            S
          ),
        ),
      ),
      R,
    );
    ((G.castShadow = ![u, x, w, o0, $, M, C, T].includes(R)),
      (G.receiveShadow = !0),
      (G.name = "district_" + (R.name || "static")),
      o.add(G));
  }
  for (const R of c) o.add(R.group);
  const $0 = Math.PI / 2,
    _t = -Math.PI / 2,
    ve = Math.PI,
    We = 0,
    Rn = {
      forecourtW: [
        [-15.4, 13.6, $0],
        [-15.4, 16.2, $0],
      ],
      alleyAhead: [
        [25.5, 14, $0],
        [28, 14.6, $0],
        [30.2, 13.9, $0],
      ],
      alleyDoor: [[24.1, 14.95, ve]],
      alleyDump: [
        [30.3, 13.4, $0],
        [30.3, 14.7, $0],
      ],
      streetN: [
        [36.2, 8.3, We],
        [37.9, 9.4, We],
        [32.2, 8.1, We],
      ],
      streetBus: [
        [34.8, 26.6, ve],
        [33.2, 29.8, ve],
        [37.8, 25.4, ve],
        [35.6, 24, ve],
      ],
      kitchen: [[45.1, 31.7, _t]],
      backS: [
        [48, 39, ve],
        [47.9, 41.6, ve],
        [48.3, 37, ve],
      ],
      backN: [
        [47.2, 22.7, We],
        [47.3, 24.4, We],
      ],
      passage: [
        [44.2, 41.9, $0],
        [45.6, 40.3, $0],
      ],
      passageW: [
        [39.6, 41.4, _t],
        [40.3, 40.2, _t],
      ],
      streetS: [
        [36.6, 44.7, ve],
        [32, 42.4, ve],
        [37.6, 44.9, ve],
        [33.4, 36, ve],
      ],
      laneE: [
        [30.3, 37.8, $0],
        [30.5, 36.3, $0],
      ],
      squareLane: [
        [17, 37.6, $0],
        [20.6, 38.8, $0],
        [25.5, 38.8, $0],
      ],
      squareW: [
        [-15.4, 33.4, $0],
        [-15.4, 36.6, $0],
        [-15.4, 39, $0],
        [-13.2, 33.2, $0],
      ],
      squareBand: [
        [-4, 27.5, We],
        [3.2, 27, We],
        [-12, 24, We],
        [10.6, 25, We],
      ],
    };
  function _n(R, I) {
    for (const G of a) G(R, I);
  }
  function In() {
    Jt.close();
    for (const R of c) R.reset();
  }
  return {
    group: o,
    colliders: l,
    fireSpots: s,
    crates: c,
    spots: Rn,
    burstDoor: Jt,
    update: _n,
    reset: In,
  };
}
