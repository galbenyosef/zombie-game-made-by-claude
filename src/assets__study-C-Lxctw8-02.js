// assets__study-C-Lxctw8 02 — add
// Lines 343-1166 of readable/assets__study-C-Lxctw8.pretty.js (statement-aligned).
function Co(I, L) {
  const u = (o, p) => I.mats.get(o, p),
    c = u("wood_walnut", {
      extra: {
        clearcoat: 0.12,
        clearcoatRoughness: 0.5,
        envMapIntensity: 0.22,
      },
    }),
    b = u("brass_aged"),
    e = u("velvet_red", { color: "#d02a50" }),
    a = new c0();
  ((a.name = "desk"), L.add(a));
  const n = new n0("desk"),
    t = Fo,
    h = (t.x0 + t.x1) / 2,
    s = (t.z0 + t.z1) / 2,
    M = t.x1 - t.x0,
    k = t.z1 - t.z0;
  (n.box(c, M, 0.036, k, [h, t.top - 0.018, s], {
    r: 0.012,
    seg: 2,
    grain: "z",
  }),
    n.box(c, M - 0.03, 0.022, k - 0.03, [h, t.top - 0.047, s], {
      r: 0.006,
      grain: "z",
    }));
  const P = 0.44,
    i = 0.07,
    v = t.top - 0.058;
  for (const o of [t.z0 + P / 2 + 0.02, t.z1 - P / 2 - 0.02]) {
    (n.box(c, M - 0.02, i, P + 0.02, [h, i / 2, o], { r: 0.008, grain: "z" }),
      n.box(c, M - 0.06, v - i, P - 0.02, [h, (i + v) / 2, o], {
        r: 0.006,
        grain: "y",
      }));
    const p = (v - i - 0.05) / 3;
    for (let B = 0; B < 3; B++) {
      const W = i + 0.02 + p * (B + 0.5) + B * 0.004;
      (n.box(c, 0.02, p - 0.012, P - 0.07, [t.x1 - 0.02, W, o], {
        r: 0.005,
        grain: "z",
      }),
        n.add(new R0(0.03, 0.004, 6, 16, Math.PI), b, {
          m: d([t.x1 - 0.004, W + 0.005, o], [0, Math.PI / 2, Math.PI]),
          uv: "keep",
        }));
      for (const q of [-1, 1])
        n.add(new j(0.008, 0.008, 0.005, 12), b, {
          m: d([t.x1 - 0.008, W + 0.005, o + q * 0.03], [0, 0, Math.PI / 2]),
          uv: "keep",
        });
    }
    (n.box(c, 0.02, v - i - 0.1, P - 0.12, [t.x0 + 0.025, (i + v) / 2, o], {
      r: 0.008,
      grain: "y",
    }),
      n.box(c, 0.012, v - i - 0.16, P - 0.18, [t.x0 + 0.012, (i + v) / 2, o], {
        r: 0.01,
        seg: 2,
        grain: "y",
      }));
  }
  const G = t.z0 + P + 0.04,
    S = t.z1 - P - 0.04;
  n.box(c, 0.022, v - 0.2, S - G, [t.x0 + 0.05, (0.2 + v) / 2, (G + S) / 2], {
    r: 0.004,
    grain: "z",
  });
  for (const o of [-1, 1])
    n.box(
      c,
      0.012,
      v - 0.3,
      (S - G) / 2 - 0.08,
      [t.x0 + 0.036, (0.2 + v) / 2, (G + S) / 2 + (o * (S - G)) / 4],
      { r: 0.01, seg: 2, grain: "z" },
    );
  (n.box(c, 0.024, 0.075, k - 0.06, [t.x0 + 0.03, v - 0.035, s], {
    r: 0.005,
    grain: "z",
  }),
    n.box(c, 0.024, 0.075, k - 0.06, [t.x1 - 0.03, v - 0.035, s], {
      r: 0.005,
      grain: "z",
    }));
  const l = { x: 9.5, z: 6.45, w: 0.5, l: 0.66 };
  n.box(
    u("leather_brown", { color: "#56705a" }),
    l.w,
    0.004,
    l.l,
    [l.x, t.top + 0.002, l.z],
    { r: 0.0015, grain: null },
  );
  for (const o of [-1, 1])
    for (const p of [-1, 1]) {
      const B = h0([
        [0, 0],
        [-0.08, 0],
        [0, -0.08],
      ]);
      n.add(
        d0(B, 0.0055, 0.0012, { seg: 1 }),
        u("leather_brown", { color: "#3a2a22" }),
        {
          m: d(
            [l.x + (o * l.w) / 2, t.top + 0.0028, l.z + (p * l.l) / 2],
            [
              Math.PI / 2,
              0,
              o > 0
                ? p > 0
                  ? 0
                  : -Math.PI / 2
                : p > 0
                  ? Math.PI / 2
                  : Math.PI,
            ],
          ),
          uv: "world",
        },
      );
    }
  const m = { x: 9.9, z: 6.43 },
    r = new c0();
  ((r.name = "bankersLamp"),
    r.position.set(m.x, t.top, m.z),
    (r.rotation.y = -Math.PI / 2),
    a.add(r));
  const f = new n0("lamp");
  (f.add(
    T(
      [
        [0, 0],
        [0.078, 0],
        [0.08, 0.006],
        [0.074, 0.012],
        [0.06, 0.018],
        [0.03, 0.024],
        [0.016, 0.03],
        [0.012, 0.045],
        [0, 0.046],
      ],
      40,
    ),
    b,
    { uv: "keep" },
  ),
    f.add(
      T(
        [
          [0, 0.04],
          [0.007, 0.04],
          [0.007, 0.13],
          [0.012, 0.14],
          [0.012, 0.155],
          [0.0065, 0.165],
          [0.0065, 0.3],
          [0, 0.3],
        ],
        16,
      ),
      b,
      { uv: "keep" },
    ));
  const w = 0.345,
    x = 0.07,
    _ = 0.068,
    V = 0.25,
    Q = new m0([y(0, 0.29, 0), y(0, 0.33, 0.02), y(0, w + 0.03, x - 0.01)]);
  f.add(
    x0(Q, () => 0.0055, 14, 8),
    b,
    { uv: "keep" },
  );
  for (const o of [-1, 1]) {
    const p = new m0([
      y(0, w + 0.03, x - 0.01),
      y(o * V * 0.3, w + 0.045, x),
      y(o * (V / 2 - 0.004), w + 0.01, x),
    ]);
    (f.add(
      x0(p, () => 0.0035, 12, 6),
      b,
      { uv: "keep" },
    ),
      f.add(new f0(0.007, 10, 8), b, {
        m: d([o * (V / 2 + 0.002), w + 0.008, x]),
        uv: "keep",
      }));
  }
  f.add(
    T(
      [
        [0, 0],
        [0.013, 0],
        [0.013, 0.03],
        [0, 0.03],
      ],
      14,
    ),
    b,
    { m: d([0.05, w - 0.012, x], [0, 0, Math.PI / 2]), uv: "keep", shadow: !1 },
  );
  for (let o = 0; o < 9; o++)
    f.add(new f0(0.0022, 6, 4), b, {
      m: d([0.07, w - 0.03 - o * 0.0055, x + 0.02]),
      uv: "keep",
      shadow: !1,
    });
  (f.add(
    T(
      [
        [0, 0],
        [0.004, 0.002],
        [0.005, 0.01],
        [0.002, 0.016],
        [0, 0.017],
      ],
      10,
    ),
    b,
    { m: d([0.07, w - 0.1, x + 0.02]), uv: "keep", shadow: !1 },
  ),
    f.flush(r));
  const D = new c0();
  (D.position.set(0, w, x), r.add(D));
  const F = -Math.PI * 0.2,
    R = Math.PI * 1.45,
    N = new j(_, _, V, 40, 1, !0, F, R);
  N.rotateZ(Math.PI / 2);
  const Z = new j(_ - 0.004, _ - 0.004, V - 0.006, 40, 1, !0, F, R);
  Z.rotateZ(Math.PI / 2);
  {
    const o = Z.attributes.normal;
    for (let p = 0; p < o.count; p++)
      o.setXYZ(p, -o.getX(p), -o.getY(p), -o.getZ(p));
    Z.setIndex([...Z.index.array].reverse());
  }
  const z = new W0({
    color: 997916,
    roughness: 0.12,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    emissive: 16777215,
    emissiveIntensity: 1,
    side: F0,
  });
  z.name = "lamp_green_glass";
  {
    const p = new Uint8Array(4096);
    for (let W = 0; W < 32; W++)
      for (let q = 0; q < 32; q++) {
        const b0 = q / 31,
          g0 = W / 31,
          G0 =
            (0.16 + 0.84 * Math.pow(Math.abs(2 * b0 - 1), 2.2)) *
            (0.45 + 0.55 * Math.sin(Math.PI * g0)),
          e0 = (W * 32 + q) * 4;
        ((p[e0] = p[e0 + 1] = p[e0 + 2] = Math.round(Math.min(1, G0) * 255)),
          (p[e0 + 3] = 255));
      }
    const B = new Do(p, 32, 32, _o);
    ((B.magFilter = uo),
      (B.minFilter = uo),
      (B.needsUpdate = !0),
      (z.emissiveMap = B));
  }
  const Y = co(1.5, 1.2, 0.75, { name: "lamp_opal" }),
    C = new H0(N, z);
  ((C.castShadow = !1), D.add(C));
  const $ = new H0(Z, Y);
  D.add($);
  const E = (o, p, B = _) => y(o, B * Math.sin(p), B * Math.cos(p));
  for (const o of [-1, 1]) {
    const p = [];
    for (let W = 0; W < 24; W++) {
      const q = F + (W / 24) * R,
        b0 = F + ((W + 1) / 24) * R,
        g0 = y((o * V) / 2, 0, 0),
        G0 = E((o * V) / 2, q),
        e0 = E((o * V) / 2, b0);
      o > 0
        ? p.push(...g0.toArray(), ...e0.toArray(), ...G0.toArray())
        : p.push(...g0.toArray(), ...G0.toArray(), ...e0.toArray());
    }
    const B = new q0();
    (B.setAttribute("position", new L0(p, 3)),
      B.computeVertexNormals(),
      D.add(new H0(B, z)));
  }
  {
    const o = new n0("lampRims");
    for (const B of [-1, 1]) {
      const W = [];
      for (let q = 0; q <= 24; q++)
        W.push(E((B * V) / 2, F + (q / 24) * R, _ + 0.001));
      o.add(
        x0(new m0(W), () => 0.0026, 36, 6, { capEnd: !1 }),
        b,
        { uv: "keep", shadow: !1 },
      );
    }
    const p = [];
    for (let B = 0; B <= 12; B++)
      p.push(y(-V / 2 + (B / 12) * V, _ * Math.sin(F), _ * Math.cos(F)));
    (o.add(
      x0(new m0(p), () => 0.0022, 12, 6, { capEnd: !1 }),
      b,
      { uv: "keep", shadow: !1 },
    ),
      o.flush(D));
  }
  const J = co(4, 2.8, 1.5, { name: "lamp_bulb" }),
    O = new H0(new f0(0.022, 16, 12), J);
  (O.scale.set(1.6, 1, 1), O.position.set(0, -0.012, 0), D.add(O));
  const K = y(0, w - 0.015, x);
  (r.updateMatrixWorld(!0), K.applyMatrix4(r.matrixWorld));
  const H = new xo(16761470, 4.5, 7, 1.15, 0.6, 2);
  ((H.name = "deskLamp"),
    H.position.copy(K),
    H.target.position.set(9.48, t.top, 6.45),
    (H.castShadow = !0),
    H.shadow.mapSize.set(1024, 1024),
    (H.shadow.camera.near = 0.03),
    (H.shadow.camera.far = 7),
    (H.shadow.bias = -5e-4),
    (H.shadow.normalBias = 0.015),
    a.add(H, H.target));
  const a0 = new bo(8048778, 0.25, 1.4, 2);
  ((a0.name = "deskLampGlass"),
    a0.position.copy(K).add(y(0.04, 0.07, 0)),
    a.add(a0));
  const r0 = new zo(I.rng(4242), { amount: 0 });
  let k0 = 1;
  const z0 = {
    group: r,
    light: H,
    glowLight: a0,
    on: !0,
    setOn(o) {
      ((r0.on = !!o), (z0.on = !!o));
    },
    flicker(o) {
      r0.amount = Math.max(0, Math.min(1, o));
    },
    setLevel(o) {
      k0 = o;
    },
    update(o) {
      const p = r0.update(o) * k0;
      ((H.intensity = 4.5 * p),
        (a0.intensity = 0.25 * p),
        z.emissive.setRGB(0.03 * p, 0.42 * p, 0.16 * p),
        Y.color.setRGB(1.5 * p, 1.2 * p, 0.75 * p),
        J.color.setRGB(4 * p, 2.8 * p, 1.5 * p));
    },
  };
  z0.update(0);
  const A = { x: 9.48, z: 6.45, L: 0.36, D: 0.42, H: 0.082, t: 0.012 },
    i0 = new c0();
  ((i0.name = "gunCase"),
    i0.position.set(A.x, t.top + 0.004, A.z),
    (i0.rotation.y = 0.03),
    a.add(i0));
  const s0 = new n0("gunCase"),
    p0 = A.L / 2,
    o0 = A.D / 2,
    X = A.t;
  (s0.box(c, A.L, X, A.D, [0, X / 2, 0], { r: 0.003, grain: "x" }),
    s0.box(c, A.L, A.H, X, [0, A.H / 2, o0 - X / 2], { r: 0.003, grain: "x" }),
    s0.box(c, A.L, A.H, X, [0, A.H / 2, -o0 + X / 2], {
      r: 0.003,
      grain: "x",
    }));
  for (const o of [-1, 1])
    s0.box(c, X, A.H, A.D - 2 * X, [o * (p0 - X / 2), A.H / 2, 0], {
      r: 0.003,
      grain: "z",
    });
  for (const o of [-1, 1])
    for (const p of [-1, 1])
      (s0.box(
        b,
        0.022,
        A.H - 0.01,
        0.003,
        [o * (p0 - 0.011), A.H / 2, p * (o0 + 0.0012)],
        { r: 0.001, grain: null },
      ),
        s0.box(
          b,
          0.003,
          A.H - 0.01,
          0.022,
          [o * (p0 + 0.0012), A.H / 2, p * (o0 - 0.011)],
          { r: 0.001, grain: null },
        ));
  for (const o of [-1, 1])
    (s0.box(b, 0.026, 0.034, 0.004, [o * 0.11, A.H - 0.022, o0 + 0.002], {
      r: 0.0015,
      grain: null,
    }),
      s0.add(new R0(0.006, 0.0015, 5, 12), b, {
        m: d([o * 0.11, A.H - 0.043, o0 + 0.005], [0, 0, 0]),
        uv: "keep",
      }),
      s0.add(new j(0.0045, 0.0045, 0.05, 10), b, {
        m: d([o * 0.12, A.H, -o0 - 0.001], [0, 0, Math.PI / 2]),
        uv: "keep",
      }));
  const l0 = { x0: -p0 + X, x1: p0 - X, z0: -o0 + X, z1: o0 - X },
    w0 = X + 0.006,
    P0 = 0.05,
    A0 = [
      { key: "A", PX: -0.084, PZ: -0.07, tilt: 0.1 },
      { key: "B", PX: 0.084, PZ: -0.07, tilt: -0.05 },
    ],
    S0 = [];
  for (const o of A0)
    S0.push(
      Zo.map(([p, B]) => [o.PX + B + 0.036, -(o.PZ + p + 0.004)]).reverse(),
    );
  const $0 = [{ Z: 0.1 }, { Z: 0.152 }];
  for (const o of $0)
    S0.push([
      [-0.071, -(o.Z + 0.021)],
      [-0.071, -(o.Z - 0.021)],
      [0.071, -(o.Z - 0.021)],
      [0.071, -(o.Z + 0.021)],
    ]);
  const Mo = h0(
    [
      [l0.x0, -0.19799999999999998],
      [l0.x1, -0.19799999999999998],
      [l0.x1, 0.19799999999999998],
      [l0.x0, 0.19799999999999998],
    ],
    S0,
  );
  (s0.add(d0(Mo, P0 - w0, 0.0025, { seg: 2, curveSegments: 4 }), e, {
    m: d([0, (P0 + w0) / 2, 0], [-Math.PI / 2, 0, 0]),
    uv: "world",
  }),
    s0.box(
      e,
      l0.x1 - l0.x0,
      w0 - X + 0.002,
      l0.z1 - l0.z0,
      [0, (w0 + X) / 2, 0],
      { r: 0.001, grain: null },
    ));
  for (const o of $0)
    ho(I, s0, d([-0.064, w0 + 0.0075, o.Z], [-Math.PI / 2, 0, -Math.PI / 2]));
  s0.flush(i0);
  const I0 = new c0();
  ((I0.name = "caseLid"),
    I0.position.set(0, A.H, -o0),
    (I0.rotation.x = -1.76),
    i0.add(I0));
  {
    const o = new n0("caseLid");
    (o.box(c, A.L, X, A.D, [0, 0.026, o0], { r: 0.003, grain: "x" }),
      o.box(c, A.L, 0.026, X, [0, 0.013, A.D - X / 2], {
        r: 0.003,
        grain: "x",
      }),
      o.box(c, A.L, 0.026, X, [0, 0.013, X / 2], { r: 0.003, grain: "x" }));
    for (const p of [-1, 1])
      o.box(c, X, 0.026, A.D - 2 * X, [p * (p0 - X / 2), 0.013, o0], {
        r: 0.003,
        grain: "z",
      });
    (o.box(e, A.L - 2 * X - 0.002, 0.016, A.D - 2 * X - 0.002, [0, 0.012, o0], {
      r: 0.006,
      seg: 2,
      grain: null,
    }),
      o.box(
        u("brass_aged", { rough: 0.62 }),
        0.07,
        0.0025,
        0.03,
        [0, 0.0035, o0 - 0.02],
        { r: 0.001, grain: null },
      ));
    for (const p of [-1, 1])
      for (const B of [0, 1])
        o.box(
          b,
          0.022,
          0.003,
          0.022,
          [p * (p0 - 0.011), 0.0335, B ? A.D - 0.011 : 0.011],
          { r: 0.001, grain: null },
        );
    o.flush(I0);
  }
  const B0 = {},
    vo = new U0().setFromRotationMatrix(
      new N0().makeBasis(y(0, 0, 1), y(1, 0, 0), y(0, 1, 0)),
    );
  for (const o of A0) {
    const p = Ro(I, { name: "pistol" + o.key });
    (p.position.set(o.PX, w0 + 0.0167 + Math.abs(o.tilt) * 0.03, o.PZ),
      p.quaternion.setFromAxisAngle(y(0, 0, 1), o.tilt).multiply(vo),
      i0.add(p),
      (B0[o.key] = p));
  }
  const Z0 = new c0();
  ((Z0.name = "ammo"), a.add(Z0));
  const t0 = new n0("ammo"),
    Y0 = u("study_paper"),
    C0 = u("study_paper", { color: "#d8d0c0" }),
    oo = u("brass_aged", { rough: 0.28 }),
    to = u("rust_metal", { color: "#7e7c78" });
  function eo(o, p, B, W, q) {
    const e0 = W === "A" ? u0.ammoA : u0.ammoB,
      M0 = W === "A" ? u0.ammoAEnd : u0.ammoBEnd;
    t0.at([o, t.top, p], B, () => {
      t0.box(C0, 0.105 - 0.002, 0.04 - 0.002, 0.068 - 0.002, [0, 0.04 / 2, 0], {
        r: 0.0012,
        grain: null,
      });
      const yo = y0(0.105, 0.068, e0);
      q ||
        t0.add(yo, Y0, {
          m: d([0, 0.04 + 2e-4, 0], [-Math.PI / 2, 0, 0]),
          uv: "keep",
        });
      const no = [e0[0], e0[1], e0[2], e0[1] + (e0[3] - e0[1]) * 0.35];
      (t0.add(y0(0.105, 0.04, no), Y0, {
        m: d([0, 0.04 / 2, 0.068 / 2 + 2e-4]),
        uv: "keep",
      }),
        t0.add(y0(0.105, 0.04, no), Y0, {
          m: d([0, 0.04 / 2, -0.068 / 2 - 2e-4], [0, Math.PI, 0]),
          uv: "keep",
        }));
      for (const X0 of [-1, 1])
        t0.add(
          y0(0.068, 0.04, [
            M0[0],
            M0[1] + (M0[3] - M0[1]) * 0.3,
            M0[2],
            M0[1] + (M0[3] - M0[1]) * 0.7,
          ]),
          Y0,
          {
            m: d(
              [X0 * (0.105 / 2 + 2e-4), 0.04 / 2, 0],
              [0, (X0 * Math.PI) / 2, 0],
            ),
            uv: "keep",
          },
        );
      if (q) {
        (t0.add(y0(0.105, 0.068, e0), C0, {
          m: d(
            [
              0,
              0.04 + (0.068 / 2) * Math.cos(0.35),
              -0.068 / 2 - (0.068 / 2) * Math.sin(0.35),
            ],
            [-0.35, 0, 0],
          ),
          uv: "keep",
        }),
          t0.box(
            C0,
            0.105 - 0.004,
            0.002,
            0.068 - 0.004,
            [0, 0.04 - 0.012, 0],
            { r: 5e-4, grain: null },
          ));
        const X0 = T(
            [
              [0, 0],
              [0.006, 0],
              [0.006, 0.0215],
              [0.0058, 0.0228],
              [0, 0.0228],
            ],
            10,
          ),
          ko = T(
            [
              [0, 0],
              [0.0057, 0],
              [0.0057, 0.004],
              [0.0048, 0.0085],
              [0.0026, 0.0115],
              [0, 0.012],
            ],
            10,
          );
        for (let D0 = 0; D0 < 10; D0++)
          for (let _0 = 0; _0 < 5; _0++) {
            if (
              (D0 === 7 && _0 === 2) ||
              (D0 === 8 && _0 === 1) ||
              (D0 === 3 && _0 === 4)
            )
              continue;
            const ro = -0.105 / 2 + 0.0055 + D0 * 0.0105,
              lo = -0.068 / 2 + 0.008 + _0 * 0.013;
            (t0.add(X0, oo, { m: d([ro, 0.04 - 0.03, lo]), uv: "keep" }),
              t0.add(ko, to, {
                m: d([ro, 0.04 - 0.03 + 0.0228, lo]),
                uv: "keep",
              }));
          }
      }
    });
  }
  (eo(9.42, 6.98, 0.18, "A", !1), eo(9.6, 7.04, -0.12, "B", !0));
  const ao = (o, p) =>
      Math.abs(o - l.x) < l.w / 2 && Math.abs(p - l.z) < l.l / 2 ? 0.004 : 0,
    j0 = (o, p, B, W) =>
      t0.at([o, t.top + 0.006 + ao(o, p), p], B, () => {
        (t0.add(
          T(
            [
              [0, 0],
              [0.006, 0],
              [0.006, 0.0215],
              [0.0058, 0.0228],
              [0.0052, 0.0228],
              [0, 0.0228],
            ],
            14,
          ),
          oo,
          { m: d([0, 0, 0], [0, 0, Math.PI / 2]), uv: "keep" },
        ),
          W
            ? t0.add(
                new Lo(0.0052, 12),
                new E0({ color: 657414, roughness: 0.8 }),
                { m: d([-0.0229, 0, 0], [0, -Math.PI / 2, 0]), uv: "keep" },
              )
            : t0.add(
                T(
                  [
                    [0, 0],
                    [0.0057, 0],
                    [0.0057, 0.004],
                    [0.0048, 0.0085],
                    [0.0026, 0.0115],
                    [0, 0.012],
                  ],
                  14,
                ),
                to,
                { m: d([-0.0228, 0, 0], [0, 0, Math.PI / 2]), uv: "keep" },
              ));
      });
  (j0(9.29, 6.73, 0.9, !0),
    j0(9.36, 6.86, -0.4, !1),
    j0(9.57, 6.87, 2.2, !1),
    ho(
      I,
      t0,
      d(
        [9.26, t.top + 0.0073 + ao(9.26, 6.08), 6.08],
        [-Math.PI / 2, 0.4, 0, "YXZ"],
      ),
    ),
    t0.flush(Z0));
  const U = new n0("note");
  (U.at([9.3, t.top + 0.0015, 7.19], -0.5, () => {
    const o = [u0.note[0], u0.note[1], u0.note[2], u0.note[3]];
    (U.add(y0(0.16, 0.08, o), Y0, {
      m: d([0, 0.004, 0.036], [-Math.PI / 2 + 0.1, 0, 0]),
      uv: "keep",
    }),
      U.add(
        y0(0.16, 0.08, [o[0], o[1], o[2], o[1] + (o[3] - o[1]) * 0.2]),
        C0,
        { m: d([0, 0.004, -0.036], [-Math.PI / 2 - 0.1, 0, 0]), uv: "keep" },
      ));
  }),
    U.at([9.83, t.top, 7.2], 0.08, () => {
      (U.box(c, 0.26, 0.1, 0.18, [0, 0.05, 0], { r: 0.004, grain: "x" }),
        U.box(c, 0.265, 0.03, 0.185, [0, 0.115, 0], {
          r: 0.006,
          seg: 2,
          grain: "x",
        }),
        U.add(new j(0.022, 0.022, 0.006, 24), b, {
          m: d([0.06, 0.132, 0]),
          uv: "keep",
        }),
        U.add(new j(0.018, 0.018, 0.001, 24), u("paper_old"), {
          m: d([0.06, 0.1352, 0]),
          uv: "keep",
        }),
        U.box(b, 0.05, 0.002, 0.018, [-0.05, 0.1305, 0], {
          r: 7e-4,
          grain: null,
        }),
        U.box(b, 0.004, 0.02, 0.03, [0.132, 0.1, 0], {
          r: 0.001,
          grain: null,
        }));
    }),
    U.at([9.74, t.top, 5.86], 0.14, () => {
      let o = 0;
      [
        ["#7a3a2a", 0.26, 0.19, 0.038],
        ["#3e5040", 0.235, 0.17, 0.032],
        ["#6a5238", 0.21, 0.15, 0.03],
      ].forEach(([p, B, W, q], b0) => {
        const g0 = u("leather_brown", { color: p });
        (U.at([0.006 * b0, o, -0.004 * b0], (b0 - 1) * 0.09, () => {
          (U.box(g0, B, 0.0035, W, [0, 0.00175, 0], { r: 0.0012, grain: null }),
            U.box(g0, B, 0.0035, W, [0, q - 0.00175, 0], {
              r: 0.0012,
              grain: null,
            }),
            U.box(
              u("paper_old", { color: "#d8c8a0" }),
              B - 0.008,
              q - 0.006,
              W - 0.008,
              [0.004, q / 2, 0],
              { r: 0.001, grain: null },
            ),
            U.box(g0, 0.012, q, W, [-B / 2 + 0.005, q / 2, 0], {
              r: 0.005,
              grain: null,
            }));
        }),
          (o += q));
      });
    }),
    U.at([9.42, t.top, 5.84], 0.3, () => {
      (U.add(
        new po(0.055, 0.045, 0.055),
        wo(13688024, 0.3, { name: "inkwell", flatShading: !0 }),
        { m: d([0, 0.0225, 0]), uv: "keep" },
      ),
        U.add(
          new po(0.04, 0.03, 0.04),
          new E0({ color: 658452, roughness: 0.2 }),
          { m: d([0, 0.016, 0]), uv: "keep" },
        ),
        U.add(
          T(
            [
              [0, 0],
              [0.024, 0],
              [0.024, 0.004],
              [0.016, 0.012],
              [0.006, 0.018],
              [0, 0.02],
            ],
            16,
          ),
          b,
          { m: d([0, 0.045, 0]), uv: "keep" },
        ),
        U.add(
          T(
            [
              [0, 0],
              [0.0055, 0],
              [0.0062, 0.05],
              [0.0058, 0.11],
              [0.0045, 0.135],
              [0.002, 0.15],
              [0, 0.152],
            ],
            12,
          ),
          u("wood_ebony"),
          { m: d([0.06, 0.006, 0.05], [0, 0.4, Math.PI / 2]), uv: "keep" },
        ),
        U.add(new j(0.0064, 0.0064, 0.012, 12), b, {
          m: d(
            [0.06 - 0.058 * Math.cos(0.4), 0.006, 0.05 + 0.058 * Math.sin(0.4)],
            [0, 0.4, Math.PI / 2],
          ),
          uv: "keep",
        }));
    }),
    U.flush(a),
    n.flush(a),
    i0.updateMatrixWorld(!0));
  const so = (o) => {
    const p = new J0();
    return (
      o.getWorldPosition(p),
      [+p.x.toFixed(3), +p.y.toFixed(3), +p.z.toFixed(3)]
    );
  };
  return {
    group: a,
    lamp: z0,
    pistolA: B0.A,
    pistolB: B0.B,
    ammo: Z0,
    gunCase: i0,
    caseLid: I0,
    pistolASpot: so(B0.A),
    pistolBSpot: so(B0.B),
    lights: { deskLamp: H, deskLampGlass: a0 },
    collider: {
      x0: t.x0,
      x1: t.x1,
      z0: t.z0,
      z1: t.z1,
      y0: 0,
      y1: t.top + 0.02,
    },
    update(o) {
      z0.update(o);
    },
  };
}
