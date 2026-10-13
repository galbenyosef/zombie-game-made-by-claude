import {
  m as d,
  l as T,
  B as n0,
  e as d0,
  s as h0,
  V as y,
  t as x0,
  g as co,
  F as zo,
  i as y0,
  c as wo,
  A as T0,
  b as Q0,
  a as Po,
  j as Io,
  f as io,
} from "./frames-D6Ub_iDK.js";
import {
  b as j,
  M as E0,
  G as c0,
  a5 as K0,
  aa as go,
  J as R0,
  a7 as m0,
  $ as f0,
  ab as W0,
  m as F0,
  U as Do,
  X as _o,
  Y as uo,
  c as H0,
  B as q0,
  I as L0,
  n as xo,
  P as bo,
  Q as U0,
  o as N0,
  ah as po,
  q as Lo,
  V as J0,
  ai as Ao,
  d as So,
  aj as Bo,
} from "./index-DaQlAVPp.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./BufferGeometryUtils-Qxvmd-vM.js";
const Yo = [
    [-0.103, 5e-4],
    [0.097, 5e-4],
    [0.1, 0.004],
    [0.1, 0.025],
    [0.097, 0.029],
    [-0.099, 0.029],
    [-0.103, 0.025],
  ],
  Go = [
    [0.085, 0],
    [0.085, -0.008],
    [0.08, -0.013],
    [0.028, -0.013],
    [0.026, -0.03],
    [0.018, -0.038],
    [0, -0.0405],
    [-0.024, -0.038],
    [-0.035, -0.03],
    [-0.04, -0.024],
    [-0.046, -0.05],
    [-0.053, -0.075],
    [-0.06, -0.1],
    [-0.064, -0.106],
    [-0.098, -0.106],
    [-0.1, -0.1],
    [-0.094, -0.07],
    [-0.089, -0.04],
    [-0.088, -0.022],
    [-0.096, -0.012],
    [-0.109, -0.007],
    [-0.114, -0.002],
    [-0.11, 0.002],
    [-0.1, 0.0015],
  ],
  Ho = [
    [0.019, -0.0145],
    [-0.031, -0.0145],
    [-0.031, -0.024],
    [-0.021, -0.0325],
    [0.008, -0.034],
    [0.016, -0.029],
  ],
  To = [
    [-0.044, -0.026],
    [-0.087, -0.026],
    [-0.093, -0.06],
    [-0.096, -0.097],
    [-0.064, -0.097],
    [-0.057, -0.075],
    [-0.05, -0.048],
  ];
function Ro(
  I,
  { name: L = "pistol", gripMat: u = null, steelMat: c = null } = {},
) {
  const b = (i, v) => I.mats.get(i, v),
    e = c || b("study_gunmetal"),
    a = u || b("study_grip"),
    n = new E0({ color: 328965, roughness: 0.6, metalness: 0.2 });
  n.name = "gun_bore";
  const t = new c0();
  t.name = L;
  const h = new n0(L),
    s = 0.0235,
    M = 0.0205;
  (h.push(d([0.004, 0.036, 0])),
    h.add(d0(h0(Yo), s, 0.0016, { seg: 3 }), e, { uv: "world" }));
  for (const i of [-1, 1])
    for (let v = 0; v < 11; v++)
      h.box(
        e,
        0.0011,
        0.021,
        0.0012,
        [-0.097 + v * 0.0023, 0.0145, i * (s / 2 + 2e-4)],
        { r: 4e-4, grain: null },
      );
  (h.box(n, 0.036, 0.012, 0.004, [-0.012, 0.0195, -s / 2 + 0.0012], {
    r: 0.001,
    grain: null,
  }),
    h.add(new j(0.0072, 0.0072, 0.03, 16), e, {
      m: d([-0.012, 0.0195, -s / 2 + 0.0035], [0, 0, Math.PI / 2]),
      uv: "world",
    }),
    h.box(e, 0.0065, 0.0065, 0.0032, [0.089, 0.0315, 0], {
      r: 0.0012,
      grain: null,
    }));
  for (const i of [-1, 1])
    h.box(e, 0.009, 0.0062, 0.0075, [-0.093, 0.0315, i * 0.0058], {
      r: 0.0012,
      grain: null,
    });
  (h.add(
    T(
      [
        [0, 0],
        [0.0079, 0],
        [0.0079, 0.006],
        [0.0072, 0.0072],
        [0.0059, 0.0072],
        [0.0059, 0.0072],
        [0, 0.0072],
      ],
      20,
    ),
    e,
    { m: d([0.0995, 0.019, 0], [0, 0, -Math.PI / 2]), uv: "world" },
  ),
    h.add(new j(0.0057, 0.0057, 0.002, 16), n, {
      m: d([0.1066, 0.019, 0], [0, 0, Math.PI / 2]),
      uv: "keep",
    }),
    h.add(new j(0.0048, 0.0048, 0.004, 14), e, {
      m: d([0.1015, 0.0065, 0], [0, 0, Math.PI / 2]),
      uv: "world",
    }),
    h.add(d0(h0(Go, [Ho]), M, 0.0012, { seg: 2 }), e, { uv: "world" }));
  for (const i of [-1, 1]) {
    h.add(d0(h0(To), 0.0042, 0.0013, { seg: 2 }), a, {
      m: d([0, 0, i * (M / 2 + 0.0019)]),
      uv: "world",
    });
    for (const [v, G] of [
      [-0.061, -0.033],
      [-0.075, -0.088],
    ])
      h.add(
        T(
          [
            [0, 0],
            [0.0029, 0],
            [0.0027, 9e-4],
            [0.0016, 0.0014],
            [0, 0.0015],
          ],
          12,
        ),
        e,
        {
          m: d([v, G, i * (M / 2 + 0.004)], [(i * Math.PI) / 2, 0, 0]),
          uv: "world",
        },
      );
  }
  const k = new K0();
  (k.moveTo(-0.101, 0),
    k.lineTo(-0.107, 0.001),
    k.absarc(-0.112, 0.012, 0.0068, -Math.PI * 0.4, Math.PI * 1.05, !1),
    k.lineTo(-0.104, 0.009),
    k.lineTo(-0.101, 0.004));
  const P = new go();
  return (
    P.absarc(-0.112, 0.012, 0.0028, 0, Math.PI * 2, !0),
    k.holes.push(P),
    h.add(d0(k, 0.0068, 9e-4, { seg: 2 }), e, { uv: "world" }),
    h.add(
      d0(
        h0([
          [0.006, -0.0145],
          [-0.004, -0.0145],
          [-0.0055, -0.024],
          [-0.0035, -0.0305],
          [0.0015, -0.03],
          [0.004, -0.022],
        ]),
        0.0062,
        9e-4,
        { seg: 1 },
      ),
      e,
      { uv: "world" },
    ),
    h.add(
      d0(
        h0([
          [0.031, -0.001],
          [0.028, -0.0075],
          [0.022, -0.009],
          [-0.004, -0.004],
          [-0.012, -0.002],
          [-0.014, 0.003],
          [-0.004, 0.003],
          [0.02, 0.0015],
        ]),
        0.0018,
        5e-4,
        { seg: 1 },
      ),
      e,
      { m: d([0, 0, M / 2 + 0.0011]), uv: "world" },
    ),
    h.add(new j(0.0042, 0.0042, 0.0022, 14), e, {
      m: d([0.026, -0.0045, M / 2 + 0.0019], [Math.PI / 2, 0, 0]),
      uv: "world",
    }),
    h.add(
      d0(
        h0([
          [-0.093, -0.004],
          [-0.083, -0.006],
          [-0.07, -0.004],
          [-0.064, 0.0015],
          [-0.072, 0.003],
          [-0.09, 0.0025],
        ]),
        0.0018,
        5e-4,
        { seg: 1 },
      ),
      e,
      { m: d([0, 0, M / 2 + 0.0011]), uv: "world" },
    ),
    h.add(new j(0.0045, 0.0045, 0.0028, 14), e, {
      m: d([-0.041, -0.02, M / 2 + 0.0012], [Math.PI / 2, 0, 0]),
      uv: "world",
    }),
    h.box(e, 0.036, 0.0035, 0.0215, [-0.081, -0.1075, 0], {
      r: 0.001,
      grain: null,
    }),
    h.pop(),
    h.flush(t),
    (t.userData.length = 0.224),
    t
  );
}
function ho(I, L, u, { loaded: c = !0 } = {}) {
  const b = (n, t) => I.mats.get(n, t),
    e = b("study_gunmetal"),
    a = b("brass_aged", { rough: 0.3 });
  (L.push(u),
    L.box(e, 0.033, 0.126, 0.0145, [0, 0.063, 0], { r: 0.0022, grain: null }),
    L.box(e, 0.036, 0.004, 0.017, [0, 0.002, 0], { r: 0.0012, grain: null }),
    c &&
      (L.add(new j(0.006, 0.006, 0.02, 14), a, {
        m: d([-0.004, 0.128, 0], [0, 0, Math.PI / 2 - 0.08]),
        uv: "world",
      }),
      L.add(
        T(
          [
            [0, 0],
            [0.0057, 0],
            [0.0057, 0.004],
            [0.0045, 0.009],
            [0.0022, 0.0115],
            [0, 0.012],
          ],
          14,
        ),
        b("rust_metal", { color: "#8a8a88" }),
        { m: d([0.006, 0.1285, 0], [0, 0, -Math.PI / 2 - 0.08]), uv: "world" },
      )),
    L.pop());
}
const Fo = { x0: 9.15, x1: 10.05, z0: 5.6, z1: 7.4, top: 0.78 },
  Zo = [
    [0.109, 0.032],
    [-0.106, 0.032],
    [-0.122, 0.021],
    [-0.122, 0.004],
    [-0.118, -0.005],
    [-0.101, -0.02],
    [-0.103, -0.1],
    [-0.101, -0.111],
    [-0.062, -0.111],
    [-0.052, -0.08],
    [-0.043, -0.032],
    [-0.027, -0.044],
    [0.021, -0.043],
    [0.031, -0.031],
    [0.031, -0.016],
    [0.088, -0.016],
    [0.109, -0.001],
  ],
  v0 = (I, L, u, c) => [
    (I + 3) / 2048,
    1 - (L + c - 3) / 2048,
    (I + u - 3) / 2048,
    1 - (L + 3) / 2048,
  ],
  u0 = {
    stag: v0(128, 0, 768, 1024),
    hunt: v0(1024, 128, 1024, 768),
    ammoA: v0(0, 1024, 768, 512),
    ammoAEnd: v0(768, 1024, 256, 512),
    ammoB: v0(1024, 1024, 768, 512),
    ammoBEnd: v0(1792, 1024, 256, 512),
    note: v0(0, 1536, 1024, 512),
    snap: v0(1195, 1536, 682, 512),
  };
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
function O0(I, L, u, c, b, e, a, n, t) {
  const h = new f0(0.011, 8, 6);
  h.scale(1, 1, 0.55);
  for (let s = 0; s < t; s++)
    for (let M = 0; M < n + (s % 2 ? -1 : 0); M++) {
      const k = u + ((M + (s % 2 ? 1 : 0.5)) / n) * (c - u),
        P = b + ((s + 0.5) / t) * (e - b);
      I.add(h, L, { m: d([k, P, a]), uv: "keep", shadow: !1 });
    }
}
function Xo(I, L) {
  const u = (f, w) => I.mats.get(f, w),
    c = u("wood_walnut"),
    b = u("brass_aged"),
    e = new c0();
  ((e.name = "seating"), L.add(e));
  const a = new n0("seating"),
    n = [],
    t = u("leather_brown"),
    h = u("leather_brown", { color: "#8a7066" }),
    s = { x: 10.27, z: 6.42, yaw: -Math.PI / 2 + 0.16, w: 0.72, d: 0.7 };
  (a.at([s.x, 0, s.z], s.yaw, () => {
    const f = s.w / 2,
      w = s.d / 2;
    for (const x of [-1, 1])
      for (const _ of [-1, 1])
        (a.add(
          T(
            [
              [0, 0],
              [0.018, 0],
              [0.024, 0.02],
              [0.02, 0.06],
              [0.026, 0.09],
              [0.022, 0.12],
              [0, 0.12],
            ],
            14,
          ),
          c,
          { m: d([x * (f - 0.06), 0.012, _ * (w - 0.06)]), uv: T0.y },
        ),
          a.add(new f0(0.013, 10, 8), b, {
            m: d([x * (f - 0.06), 0.012, _ * (w - 0.06)]),
            uv: "keep",
          }));
    (a.box(t, s.w - 0.04, 0.2, s.d - 0.04, [0, 0.23, 0], {
      r: 0.045,
      seg: 2,
      grain: null,
    }),
      a.box(t, s.w - 0.2, 0.12, s.d - 0.18, [0, 0.39, 0.06], {
        r: 0.05,
        seg: 2,
        grain: null,
      }),
      a.at([0, 0.44, -w + 0.1], [-0.12, 0, 0], () => {
        (a.box(t, s.w - 0.14, 0.74, 0.16, [0, 0.37, 0], {
          r: 0.06,
          seg: 2,
          grain: null,
        }),
          O0(a, h, -0.24, 0.24, 0.12, 0.64, 0.083, 4, 4));
        for (const x of [-1, 1])
          a.box(t, 0.1, 0.5, 0.3, [x * (f - 0.07), 0.44, 0.1], {
            rot: [0, x * 0.25, 0],
            r: 0.045,
            seg: 2,
            grain: null,
          });
      }));
    for (const x of [-1, 1])
      (a.box(t, 0.12, 0.26, s.d - 0.14, [x * (f - 0.07), 0.46, 0.02], {
        r: 0.04,
        seg: 2,
        grain: null,
      }),
        a.add(new j(0.068, 0.068, s.d - 0.12, 20), t, {
          m: d([x * (f - 0.06), 0.6, 0.03], [Math.PI / 2, 0, 0]),
          uv: "world",
        }),
        a.add(new j(0.06, 0.06, 0.012, 20), h, {
          m: d(
            [x * (f - 0.06), 0.6, 0.03 + (s.d - 0.12) / 2 + 0.004],
            [Math.PI / 2, 0, 0],
          ),
          uv: "world",
        }));
  }),
    n.push({
      x0: s.x - 0.38,
      x1: s.x + 0.38,
      z0: s.z - 0.4,
      z1: s.z + 0.4,
      y0: 0,
      y1: 1.15,
    }));
  const M = { x: 8.2, z: 5.47, L: 1.6, D: 0.84 },
    k = u("leather_brown", { color: "#b8625a" }),
    P = u("leather_brown", { color: "#6a3430" });
  (a.at([M.x, 0, M.z], 0, () => {
    const f = M.L / 2,
      w = M.D / 2;
    for (const x of [-1, 0, 1])
      for (const _ of [-1, 1])
        a.add(
          T(
            [
              [0, 0],
              [0.03, 0],
              [0.04, 0.02],
              [0.036, 0.045],
              [0.028, 0.06],
              [0, 0.06],
            ],
            12,
          ),
          c,
          { m: d([x * (f - 0.08), 0, _ * (w - 0.08)]), uv: T0.y },
        );
    (a.box(k, M.L, 0.16, M.D, [0, 0.14, 0], { r: 0.035, seg: 2, grain: null }),
      a.box(k, M.L - 0.36, 0.1, M.D - 0.28, [0, 0.27, 0.08], {
        r: 0.03,
        grain: null,
      }));
    for (const x of [-1, 1])
      a.box(
        k,
        (M.L - 0.38) / 2,
        0.13,
        M.D - 0.3,
        [(x * (M.L - 0.38)) / 4, 0.375, 0.1],
        { r: 0.05, seg: 2, grain: null },
      );
    (a.box(k, M.L - 0.06, 0.5, 0.2, [0, 0.47, -w + 0.1], {
      r: 0.05,
      seg: 2,
      grain: null,
    }),
      O0(a, P, -f + 0.2, f - 0.2, 0.33, 0.7, -w + 0.2 + 0.004, 9, 3),
      a.add(new j(0.075, 0.075, M.L - 0.02, 24), k, {
        m: d([0, 0.705, -w + 0.11], [0, 0, Math.PI / 2]),
        uv: "world",
      }));
    for (const x of [-1, 1])
      (a.box(k, 0.18, 0.5, M.D - 0.04, [x * (f - 0.09), 0.47, 0], {
        r: 0.05,
        seg: 2,
        grain: null,
      }),
        a.add(new j(0.085, 0.085, M.D - 0.06, 24), k, {
          m: d([x * (f - 0.075), 0.7, 0], [Math.PI / 2, 0, 0]),
          uv: "world",
        }),
        a.at([x * (f - 0.18), 0, 0], [0, (-x * Math.PI) / 2, 0], () =>
          O0(a, P, -w + 0.22, w - 0.22, 0.46, 0.64, 0.001, 4, 2),
        ));
  }),
    n.push({
      x0: M.x - M.L / 2,
      x1: M.x + M.L / 2,
      z0: M.z - M.D / 2,
      z1: M.z + M.D / 2,
      y0: 0,
      y1: 0.78,
    }));
  const i = { x: 7.22, z: 5.3, h: 0.6 };
  (a.at([i.x, 0, i.z], 0.3, () => {
    (a.add(
      T(
        [
          [0, i.h - 0.028],
          [0.19, i.h - 0.028],
          [0.2, i.h - 0.02],
          [0.2, i.h - 0.008],
          [0.19, i.h],
          [0, i.h],
        ],
        40,
      ),
      c,
      { uv: "world" },
    ),
      a.add(
        T(
          [
            [0, 0.12],
            [0.03, 0.12],
            [0.034, 0.16],
            [0.022, 0.22],
            [0.04, 0.3],
            [0.026, 0.42],
            [0.02, 0.5],
            [0.03, 0.54],
            [0.03, i.h - 0.028],
            [0, i.h - 0.028],
          ],
          18,
        ),
        c,
        { uv: T0.y },
      ));
    for (let f = 0; f < 3; f++) {
      const w = (f / 3) * Math.PI * 2,
        x = new m0([
          y(0, 0.15, 0),
          y(Math.cos(w) * 0.1, 0.08, Math.sin(w) * 0.1),
          y(Math.cos(w) * 0.19, 0.015, Math.sin(w) * 0.19),
        ]);
      a.add(
        x0(x, (_) => 0.02 - _ * 0.008, 12, 8),
        c,
        { uv: "world" },
      );
    }
  }),
    n.push({
      x0: i.x - 0.21,
      x1: i.x + 0.21,
      z0: i.z - 0.21,
      z1: i.z + 0.21,
      y0: 0,
      y1: i.h,
    }));
  const v = new n0("crystal"),
    G = wo(14477026, 0.22, {
      name: "crystal",
      flatShading: !0,
      roughness: 0.03,
      envMapIntensity: 2.2,
    }),
    S = new W0({
      color: 9062930,
      roughness: 0.05,
      transparent: !0,
      opacity: 0.72,
      depthWrite: !1,
      clearcoat: 1,
      emissive: 1705984,
    });
  S.name = "whisky";
  const l = i.h;
  v.at([i.x + 0.02, l, i.z - 0.03], 0, () => {
    const f = [
      [0, 0],
      [0.058, 0],
      [0.062, 0.01],
      [0.064, 0.1],
      [0.06, 0.14],
      [0.04, 0.17],
      [0.018, 0.19],
      [0.017, 0.23],
      [0.024, 0.236],
      [0.018, 0.24],
    ];
    (v.add(T(f, 8), G, { uv: "keep" }),
      v.add(
        T(
          [
            [0, 0.004],
            [0.055, 0.004],
            [0.059, 0.012],
            [0.06, 0.07],
            [0, 0.07],
          ],
          8,
        ),
        S,
        { uv: "keep" },
      ),
      v.add(
        T(
          [
            [0, 0.232],
            [0.014, 0.232],
            [0.014, 0.25],
            [0.03, 0.27],
            [0.034, 0.3],
            [0.02, 0.32],
            [0, 0.325],
          ],
          8,
        ),
        G,
        { uv: "keep" },
      ));
  });
  for (const [f, w, x] of [
    [-0.1, 0.07, 0.022],
    [0.09, 0.09, 0],
  ])
    v.at([i.x + f, l, i.z + w], 0, () => {
      (v.add(
        T(
          [
            [0, 0],
            [0.038, 0],
            [0.04, 0.004],
            [0.041, 0.085],
            [0.037, 0.085],
            [0.036, 0.012],
            [0, 0.012],
          ],
          10,
        ),
        G,
        { uv: "keep" },
      ),
        x &&
          v.add(
            T(
              [
                [0, 0.013],
                [0.035, 0.013],
                [0.036, 0.013 + x],
                [0, 0.013 + x],
              ],
              10,
            ),
            S,
            { uv: "keep" },
          ));
    });
  const m = v.flush(e);
  for (const f of m) f.renderOrder = f.material === S ? 2 : 3;
  const r = { x: 9.22, z: 5.2 };
  return (
    a.at([r.x, 0, r.z], 0, () => {
      (a.add(
        T(
          [
            [0, 0],
            [0.15, 0],
            [0.155, 0.012],
            [0.13, 0.03],
            [0.06, 0.05],
            [0.03, 0.07],
            [0.02, 0.1],
            [0, 0.1],
          ],
          32,
        ),
        b,
        { uv: "keep" },
      ),
        a.add(
          T(
            [
              [0, 0.1],
              [0.012, 0.1],
              [0.012, 0.7],
              [0.02, 0.72],
              [0.02, 0.75],
              [0.011, 0.77],
              [0.011, 1.38],
              [0.016, 1.39],
              [0.016, 1.42],
              [0, 1.42],
            ],
            12,
          ),
          b,
          { uv: "keep" },
        ),
        a.add(
          T(
            [
              [0.2, 1.36],
              [0.205, 1.365],
              [0.14, 1.6],
              [0.135, 1.605],
            ],
            36,
          ),
          u("linen_stained", { color: "#b89a74", side: F0 }),
          { uv: "world" },
        ),
        a.add(
          T(
            [
              [0, 1.42],
              [0.018, 1.42],
              [0.018, 1.47],
              [0, 1.47],
            ],
            10,
          ),
          b,
          { uv: "keep" },
        ),
        a.add(
          T(
            [
              [0, 1.47],
              [0.012, 1.472],
              [0.03, 1.5],
              [0.03, 1.53],
              [0.012, 1.56],
              [0, 1.565],
            ],
            12,
          ),
          new E0({ color: 9077362, roughness: 0.35 }),
          { uv: "keep" },
        ));
    }),
    n.push({
      x0: r.x - 0.16,
      x1: r.x + 0.16,
      z0: r.z - 0.16,
      z1: r.z + 0.16,
      y0: 0,
      y1: 1.6,
    }),
    a.flush(e),
    { group: e, colliders: n, chair: s, sofa: M }
  );
}
const g = {
  L: 3.15,
  baseD: 0.38,
  upD: 0.28,
  off: 0.055,
  plinth: 0.1,
  ledgeY: 0.895,
  shelves: [1.19, 1.48, 1.77, 2.06],
  topY: 2.35,
  t: 0.024,
};
function V0(I, L, u = 2) {
  const c = (I * 128 + u) / 2048,
    b = ((I + 1) * 128 - u) / 2048,
    e = 1 - (L * 1024 + 1024 - u) / 2048,
    a = 1 - (L * 1024 + u) / 2048;
  return [c, e, b, a];
}
function mo(I, L, u, c, b, e, a, n, t) {
  const h = b / 2,
    s = a / 2,
    M = [
      n[0] + (n[2] - n[0]) * 0.35,
      n[1] + (n[3] - n[1]) * 0.03,
      n[0] + (n[2] - n[0]) * 0.65,
      n[1] + (n[3] - n[1]) * 0.09,
    ],
    k = [
      [
        [0, 0, 1],
        [
          [-h, 0, s],
          [h, 0, s],
          [h, e, s],
          [-h, e, s],
        ],
        n,
      ],
      [
        [0, 0, -1],
        [
          [h, 0, -s],
          [-h, 0, -s],
          [-h, e, -s],
          [h, e, -s],
        ],
        M,
      ],
      [
        [1, 0, 0],
        [
          [h, 0, s],
          [h, 0, -s],
          [h, e, -s],
          [h, e, s],
        ],
        M,
      ],
      [
        [-1, 0, 0],
        [
          [-h, 0, -s],
          [-h, 0, s],
          [-h, e, s],
          [-h, e, -s],
        ],
        M,
      ],
      [
        [0, 1, 0],
        [
          [-h, e, s],
          [h, e, s],
          [h, e, -s],
          [-h, e, -s],
        ],
        [t[0], t[3], t[2], t[1]],
      ],
      [
        [0, -1, 0],
        [
          [-h, 0, -s],
          [h, 0, -s],
          [h, 0, s],
          [-h, 0, s],
        ],
        t,
      ],
    ],
    P = new J0(),
    i = new J0(),
    v = new Ao().getNormalMatrix(c);
  for (const [G, S, l] of k) {
    const m = [
      [l[0], l[1]],
      [l[2], l[1]],
      [l[2], l[3]],
      [l[0], l[3]],
    ];
    for (const r of [0, 1, 2, 0, 2, 3])
      (P.set(S[r][0], S[r][1], S[r][2]).applyMatrix4(c),
        I.push(P.x, P.y, P.z),
        i.set(G[0], G[1], G[2]).applyMatrix3(v).normalize(),
        L.push(i.x, i.y, i.z),
        u.push(m[r][0], m[r][1]));
  }
}
function Vo(I, L) {
  const u = (m, r) => I.mats.get(m, r),
    c = u("wood_walnut"),
    b = u("brass_aged"),
    e = I.rng(1847),
    a = new c0();
  ((a.name = "bookcases"), L.add(a));
  const n = new n0("bookcases"),
    t = [],
    h = [],
    s = [],
    M = [],
    k = [V0(15, 0, 3), V0(15, 1, 3)],
    P = [
      { id: "N", cx: 8.875, wallZ: 4.6, rot: 0 },
      { id: "S", cx: 8.875, wallZ: 9, rot: Math.PI },
    ],
    i = 4,
    v = (g.L - 0.025) / i;
  let G = 0;
  for (const m of P) {
    const r = d([m.cx, 0, m.wallZ], [0, m.rot, 0]);
    (n.push(r), n.push(d([0, 0, g.off])));
    const f = g.L,
      w = f / 2;
    (n.box(c, f, g.topY + 0.03, 0.015, [0, (g.topY + 0.03) / 2, 0.0075], {
      r: 0.002,
      grain: "y",
    }),
      n.box(
        c,
        f,
        g.plinth,
        g.baseD - 0.02,
        [0, g.plinth / 2, (g.baseD - 0.02) / 2],
        { r: 0.004 },
      ),
      n.box(
        c,
        f - 0.02,
        g.ledgeY - g.plinth - 0.035,
        g.baseD - 0.04,
        [0, (g.plinth + g.ledgeY - 0.035) / 2, (g.baseD - 0.04) / 2],
        { r: 0.003 },
      ),
      n.box(
        c,
        f + 0.03,
        0.035,
        g.baseD + 0.02,
        [0, g.ledgeY - 0.0175, (g.baseD + 0.02) / 2],
        { r: 0.01, seg: 2 },
      ));
    for (let D = 0; D <= i; D++) {
      const F = -w + 0.0125 + D * v,
        R = D === 0 || D === i ? 0.03 : 0.024;
      n.box(
        c,
        R,
        g.topY - g.ledgeY,
        g.upD,
        [F, (g.ledgeY + g.topY) / 2, g.upD / 2 + 0.01],
        { r: 0.004, grain: "y" },
      );
    }
    for (const D of [-1, 1])
      n.box(
        c,
        0.03,
        g.ledgeY - 0.035,
        g.baseD,
        [D * (w - 0.015), (g.ledgeY - 0.035) / 2, g.baseD / 2],
        { r: 0.004, grain: "y" },
      );
    (n.box(c, f, 0.03, g.upD + 0.01, [0, g.topY + 0.015, g.upD / 2 + 0.005], {
      r: 0.004,
    }),
      n.box(
        c,
        f + 0.05,
        0.045,
        g.upD + 0.04,
        [0, g.topY + 0.052, (g.upD + 0.04) / 2],
        { r: 0.008, seg: 2 },
      ),
      n.box(
        c,
        f + 0.09,
        0.04,
        g.upD + 0.07,
        [0, g.topY + 0.094, (g.upD + 0.07) / 2],
        { r: 0.012, seg: 2 },
      ));
    for (let D = 0; D < i; D++) {
      const F = -w + 0.0125 + (D + 0.5) * v;
      for (const R of [-1, 1]) {
        const N = F + (R * v) / 4,
          Z = v / 2 - 0.012,
          z = g.ledgeY - g.plinth - 0.075;
        (n.box(c, Z, z, 0.02, [N, g.plinth + 0.02 + z / 2, g.baseD - 0.03], {
          r: 0.004,
          grain: "y",
        }),
          n.box(
            c,
            Z - 0.09,
            z - 0.12,
            0.012,
            [N, g.plinth + 0.02 + z / 2, g.baseD - 0.016],
            { r: 0.012, seg: 2, grain: "y" },
          ),
          n.add(new f0(0.011, 12, 8), b, {
            m: d([F + R * 0.035, g.plinth + 0.02 + z * 0.62, g.baseD - 0.012]),
            uv: "keep",
          }));
      }
    }
    for (let D = 0; D < i; D++) {
      const F = -w + 0.0125 + (D + 0.5) * v;
      for (let R = 0; R < g.shelves.length; R++)
        (m.id === "S" && D === 1 && R === 0) ||
          n.box(
            c,
            v - 0.024,
            g.t,
            g.upD - 0.01,
            [F, g.shelves[R], g.upD / 2 + 0.005],
            { r: 0.004, grain: "x" },
          );
    }
    const x = [g.ledgeY, ...g.shelves.map((D) => D + g.t / 2)],
      _ = [...g.shelves.map((D) => D - g.t / 2), g.topY];
    for (let D = 0; D < i; D++) {
      const F = -w + 0.0125 + D * v + 0.014,
        R = F + v - 0.028;
      for (let N = 0; N < x.length; N++) {
        let Z = x[N],
          z = _[N];
        if (
          (m.id === "S" && D === 1 && N <= 1) ||
          (m.id === "N" && D === 1 && N === 0)
        )
          continue;
        const Y = z - Z - 0.012;
        let C = F + e() * 0.02;
        const E = e() < 0.14,
          J = E ? (G++ % 2 === 0 ? [3, 0] : [9, 1]) : null;
        for (; C < R - 0.03;) {
          const O = e();
          if (O < 0.035 && C > F + 0.1) {
            C += 0.05 + e() * 0.1;
            continue;
          }
          const K = E
              ? Math.min(Y, 0.235)
              : Math.min(Y, 0.17 + e() * e() * 0.11 + e() * 0.03),
            H = E ? 0.042 : 0.018 + e() * e() * 0.05,
            a0 = Math.min(g.upD - 0.05, 0.13 + K * 0.3 + e() * 0.03),
            r0 = E ? J[0] : Math.floor(e() * 15),
            k0 = E ? J[1] : Math.floor(e() * 2),
            z0 = V0(r0, k0);
          if (O > 0.965 && !E && R - C > 0.25) {
            const o0 = 3 + Math.floor(e() * 3);
            let X = Z;
            const l0 = 0.16 + e() * 0.06;
            for (let w0 = 0; w0 < o0; w0++) {
              const P0 = 0.022 + e() * 0.025,
                A0 = 0.14 + e() * 0.06,
                S0 = d(
                  [
                    C + l0 / 2,
                    X,
                    g.upD - 0.02 - (0.13 + A0 * 0.3) / 2 + (e() - 0.5) * 0.01,
                  ],
                  [0, (e() - 0.5) * 0.08, 0],
                )
                  .multiply(d([0, P0 / 2, 0], [0, 0, Math.PI / 2]))
                  .multiply(d([0, -l0 / 2, 0]));
              (mo(
                t,
                h,
                s,
                n.top.clone().multiply(S0),
                P0,
                l0,
                0.13 + A0 * 0.3,
                V0(Math.floor(e() * 15), Math.floor(e() * 2)),
                k[1],
              ),
                (X += P0));
            }
            C += l0 + 0.02;
            continue;
          }
          const A = !E && e() < 0.05 ? -(0.12 + e() * 0.18) : 0,
            i0 = g.upD - 0.012 - a0 / 2 - e() * 0.018,
            s0 = A
              ? d([C + H, Z, i0], [0, 0, A]).multiply(d([-H / 2, 0, 0]))
              : d([C + H / 2, Z, i0], [0, (e() - 0.5) * 0.03, 0]),
            p0 = A ? H + K * Math.sin(-A) : H;
          if (C + p0 > R) break;
          (mo(t, h, s, n.top.clone().multiply(s0), H, K, a0, z0, k[0]),
            (C += p0 + (A ? 0.001 : 0.0012 + e() * 0.002)));
        }
      }
    }
    (n.pop(), n.pop());
    const V = m.wallZ,
      Q = m.wallZ + (m.rot === 0 ? 1 : -1) * (g.off + g.baseD + 0.02);
    M.push({
      x0: m.cx - w - 0.05,
      x1: m.cx + w + 0.05,
      z0: Math.min(V, Q),
      z1: Math.max(V, Q),
      y0: 0,
      y1: 2.5,
    });
  }
  {
    const m = 8.875 - (-1.5625 + 1.5 * v),
      r = 9 - g.off - g.upD / 2 - 0.02;
    n.at([m, g.ledgeY, r], Math.PI + 0.12, () => Eo(n, u));
  }
  {
    const m = 8.875 + (-1.5625 + 1.5 * v),
      r = 4.6 + g.off + g.upD - 0.06;
    (n.at([m - 0.12, g.ledgeY, r], [0, 0.25, 0], () => {
      (n.at([0, 0, 0], [-0.18, 0, 0], () => {
        (n.box(u("wood_ebony"), 0.17, 0.135, 0.012, [0, 0.0675, 0], {
          r: 0.003,
          grain: null,
        }),
          n.add(
            y0(0.136, 0.102, u0.snap),
            u("study_paper", { extra: { clearcoat: 0 } }),
            { m: d([0, 0.0675, 0.0065]), uv: "keep" },
          ));
      }),
        n.box(u("wood_ebony"), 0.02, 0.12, 0.006, [0, 0.06, -0.035], {
          rot: [0.35, 0, 0],
          r: 0.002,
          grain: null,
        }));
    }),
      n.box(b, 0.045, 0.07, 0.022, [m + 0.14, g.ledgeY + 0.035, r + 0.02], {
        r: 0.006,
        grain: null,
      }));
  }
  n.flush(a);
  const S = new q0();
  (S.setAttribute("position", new L0(t, 3)),
    S.setAttribute("normal", new L0(h, 3)),
    S.setAttribute("uv", new L0(s, 2)),
    S.computeBoundingSphere(),
    S.computeBoundingBox());
  const l = new H0(S, u("study_books"));
  return (
    (l.name = "books"),
    (l.castShadow = !0),
    (l.receiveShadow = !0),
    a.add(l),
    { group: a, colliders: M, bookCount: t.length / 108 }
  );
}
function Eo(I, L, u) {
  const c = L("wood_ebony"),
    b = L("wood_oak_pale", { color: "#c49a4a" }),
    e = L("linen_stained", { color: "#d8cdb2", side: F0 }),
    a = L("iron_black"),
    n = L("wood_walnut");
  I.box(n, 0.36, 0.022, 0.1, [0, 0.011, 0], { r: 0.004 });
  for (const P of [-0.1, 0.1])
    I.box(n, 0.018, 0.05, 0.06, [P, 0.045, 0], { r: 0.003 });
  const t = [],
    h = 16,
    s = 0.46;
  for (let P = 0; P <= 20; P++) {
    const i = P / 20,
      v = -s / 2 + i * s,
      G =
        0.05 * Math.pow(Math.sin(Math.PI * Math.min(1, 0.08 + i * 0.95)), 0.6),
      S =
        0.055 *
        Math.pow(Math.sin(Math.PI * Math.min(1, 0.05 + i * 0.95)), 0.35),
      l =
        0.012 * Math.pow(2 * i - 1, 2) + (i < 0.15 ? 0.02 * (1 - i / 0.15) : 0),
      m = [];
    for (let r = 0; r < h; r++) {
      const f = (r / h) * Math.PI * 2,
        w = Math.sin(f),
        x = Math.cos(f),
        _ = w > 0 ? 0.075 + l : 0.075 - Math.pow(-w, 0.8) * S;
      m.push(
        y(
          v,
          _ + 0.02,
          x *
            Math.max(0.004, G) *
            (w > 0 ? 1 : Math.pow(1 - Math.pow(-w, 3) * 0.2, 1)),
        ),
      );
    }
    t.push(m.reverse());
  }
  (I.add(Q0(t, { capStart: !0, capEnd: !0 }), c, { uv: "keep" }),
    I.box(b, s * 0.86, 0.006, 0.101, [0, 0.092, 0], { r: 0.002, grain: null }),
    I.add(
      x0(
        new m0([y(s / 2 - 0.02, 0.11, 0), y(s / 2 + 0.12, 0.15, 0)]),
        (P) => 0.004 - P * 0.002,
        6,
        6,
      ),
      c,
      { uv: "keep" },
    ));
  const M = [
    [-0.13, 0.3],
    [0, 0.36],
    [0.12, 0.3],
  ];
  for (const [P, i] of M) {
    I.add(new j(0.0028, 0.004, i, 8), c, {
      m: d([P, 0.1 + i / 2, 0]),
      uv: "keep",
    });
    for (const [v, G] of [
      [0.1 + i * 0.42, 0.16],
      [0.1 + i * 0.68, 0.13],
      [0.1 + i * 0.88, 0.09],
    ]) {
      I.add(new j(0.002, 0.002, G, 6), c, {
        m: d([P, v, 0], [Math.PI / 2, 0, 0]),
        uv: "keep",
      });
      const S = i * 0.22,
        l = new So(G * 0.92, S, 6, 4),
        m = l.attributes.position;
      for (let r = 0; r < m.count; r++) {
        const f = m.getX(r) / (G * 0.46),
          w = (m.getY(r) + S / 2) / S;
        m.setZ(r, (1 - f * f) * 0.018 * Math.sin(Math.PI * (0.2 + w * 0.8)));
      }
      (l.computeVertexNormals(),
        I.add(l, e, {
          m: d([P + 0.004, v - S / 2 - 0.004, 0], [0, Math.PI / 2, 0]),
          uv: "world",
        }));
    }
  }
  const k = (P) => y(M[P][0], 0.1 + M[P][1], 0);
  for (const [P, i] of [
    [k(0), y(-s / 2 + 0.01, 0.12, 0)],
    [k(0), k(1)],
    [k(1), k(2)],
    [k(2), y(s / 2 + 0.11, 0.15, 0)],
    [k(1), y(0.04, 0.1, 0.05)],
    [k(1), y(0.04, 0.1, -0.05)],
  ]) {
    const v = P.distanceTo(i),
      G = P.clone().add(i).multiplyScalar(0.5),
      S = new U0().setFromUnitVectors(y(0, 1, 0), i.clone().sub(P).normalize());
    I.add(new j(6e-4, 6e-4, v, 4), a, {
      m: new N0().compose(G, S, y(1, 1, 1)),
      uv: "keep",
      shadow: !1,
    });
  }
}
function fo(I) {
  const L = I.attributes.uv;
  for (let u = 0; u < L.count; u++) {
    const c = L.getX(u);
    L.setXY(u, -L.getY(u), c);
  }
  return I;
}
function Wo(I, L) {
  const u = (l, m) => I.mats.get(l, m),
    c = u("wood_walnut"),
    b = u("brass_aged");
  I.rng(5150);
  const e = new c0();
  ((e.name = "studyWalls"), L.add(e));
  const a = new n0("studyWalls"),
    n = [],
    t = new c0();
  ((t.name = "deerHead"), e.add(t));
  const h = { z: 5.45, y: 1.74 };
  (t.position.set(7, h.y, h.z), (t.rotation.y = Math.PI / 2));
  const s = new n0("deerHead"),
    M = u("study_fur", { color: "#c79c7c" }),
    k = u("study_fur", { color: "#8c6c58" }),
    P = u("study_fur", { color: "#a88870" });
  {
    const l = new K0();
    (l.moveTo(0, -0.28),
      l.quadraticCurveTo(0.13, -0.22, 0.18, -0.06),
      l.lineTo(0.18, 0.15),
      l.quadraticCurveTo(0.14, 0.21, 0.08, 0.18),
      l.quadraticCurveTo(0.03, 0.24, 0, 0.21),
      l.quadraticCurveTo(-0.03, 0.24, -0.08, 0.18),
      l.quadraticCurveTo(-0.14, 0.21, -0.18, 0.15),
      l.lineTo(-0.18, -0.06),
      l.quadraticCurveTo(-0.13, -0.22, 0, -0.28),
      s.add(d0(l, 0.032, 0.006, { seg: 3, curveSegments: 10 }), c, {
        m: d([0, 0, 0.018]),
        uv: "world",
      }));
    const m = new m0([
        y(0, -0.06, 0.02),
        y(0, -0.01, 0.14),
        y(0, 0.06, 0.25),
        y(0, 0.1, 0.33),
        y(0, 0.085, 0.41),
        y(0, 0.03, 0.52),
        y(0, -0.02, 0.6),
        y(0, -0.035, 0.625),
      ]),
      r = [
        [0, 0.115, 0.17, 0],
        [0.15, 0.1, 0.15, 0.01],
        [0.32, 0.085, 0.13, 0.02],
        [0.48, 0.078, 0.1, 0.025],
        [0.56, 0.075, 0.085, 0.02],
        [0.64, 0.068, 0.072, 0.018],
        [0.74, 0.05, 0.06, 0.012],
        [0.84, 0.034, 0.05, 0.01],
        [0.93, 0.028, 0.042, 0.008],
        [0.98, 0.022, 0.032, 0.006],
        [1, 0.01, 0.014, 0.004],
      ],
      f = (z) => {
        for (let Y = 0; Y < r.length - 1; Y++)
          if (z >= r[Y][0] && z <= r[Y + 1][0]) {
            const C = (z - r[Y][0]) / (r[Y + 1][0] - r[Y][0]);
            return r[Y].map(($, E) => $ + (r[Y + 1][E] - $) * C);
          }
        return r[r.length - 1];
      },
      w = (z, Y = 1) => {
        const C = m.getPointAt(z),
          $ = m.getTangentAt(z),
          E = y(1, 0, 0),
          J = y().crossVectors($, E).normalize(),
          [, O, K, H] = f(z),
          a0 = Math.exp(-(((z - 0.57) / 0.07) ** 2));
        return Po(
          C.clone().addScaledVector(J, -H),
          E,
          J,
          O * Y,
          K * Y,
          22,
          (r0) =>
            Math.sin(r0) > 0
              ? 0.9 + 0.1 * Math.cos(r0 * 2)
              : 1 + (0.05 + 0.12 * a0) * Math.sin(-r0),
        );
      },
      x = [],
      _ = [];
    for (let z = 0; z <= 18; z++) {
      const Y = (z / 18) * 0.53;
      x.push(w(Y, 1 + 0.035 * Math.max(0, (Y - 0.44) / 0.09)));
    }
    for (let z = 0; z <= 28; z++) _.push(w(0.47 + (z / 28) * 0.53));
    (s.add(fo(Q0(x, { capStart: !0, capEnd: !0 })), k, { uv: "keep" }),
      s.add(fo(Q0(_, { capStart: !1, capEnd: !0 })), M, { uv: "keep" }));
    const V = new W0({
      color: 525830,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    V.name = "deer_nose";
    const Q = new W0({
      color: 656900,
      roughness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      envMapIntensity: 2.5,
    });
    Q.name = "deer_eye";
    const D = m.getTangentAt(0.99);
    m.getPointAt(0.985);
    const F = new U0().setFromUnitVectors(y(0, 0, 1), D);
    s.add(new f0(1, 16, 12), V, {
      m: new N0().compose(
        m.getPointAt(0.975).addScaledVector(y(0, 1, 0), -0.006),
        F,
        y(0.021, 0.027, 0.011),
      ),
      uv: "keep",
    });
    const R = m.getPointAt(0.63),
      N = m.getTangentAt(0.63);
    for (const z of [-1, 1]) {
      (s.add(new f0(0.019, 16, 12), Q, {
        m: d([z * 0.06, R.y + 0.012, R.z], [0, z * 0.45, 0], [0.72, 0.9, 1.2]),
        uv: "keep",
      }),
        s.add(new f0(1, 10, 6), u("leather_brown", { color: "#2a1a14" }), {
          m: new N0().compose(
            y(z * 0.052, R.y - 0.004, R.z + 0.04),
            new U0().setFromUnitVectors(y(0, 0, 1), N),
            y(0.005, 0.007, 0.024),
          ),
          uv: "keep",
          shadow: !1,
        }));
      const Y = T(
        [
          [0, 0],
          [0.03, 0.02],
          [0.038, 0.065],
          [0.03, 0.11],
          [0.014, 0.145],
          [0, 0.16],
        ],
        12,
      );
      s.add(Y, P, {
        m: d([z * 0.07, 0.15, 0.32], [-0.35, z * 0.2, -z * 0.95], [1, 1, 0.34]),
        uv: "world",
      });
    }
    const Z = u("study_antler");
    for (const z of [-1, 1]) {
      const Y = y(z * 0.036, 0.152, 0.355);
      s.add(new R0(0.02, 0.0085, 6, 14), Z, {
        m: d([Y.x, Y.y + 0.006, Y.z], [Math.PI / 2 - 0.25, 0, z * 0.35]),
        uv: "keep",
      });
      const C = new m0([
        Y,
        y(z * 0.1, 0.28, 0.33),
        y(z * 0.2, 0.42, 0.27),
        y(z * 0.27, 0.56, 0.26),
        y(z * 0.27, 0.7, 0.31),
        y(z * 0.22, 0.8, 0.37),
      ]);
      s.add(
        x0(C, (E) => 0.019 - E * 0.011, 30, 9),
        Z,
        { uv: "keep" },
      );
      const $ = (E, J, O) => {
        const K = C.getPointAt(E);
        s.add(
          x0(
            new m0([K, ...J.map((H) => y(z * H[0], H[1], H[2]))]),
            (H) => O * (1 - H * 0.85),
            14,
            7,
          ),
          Z,
          { uv: "keep" },
        );
      };
      ($(
        0.05,
        [
          [0.09, 0.22, 0.44],
          [0.1, 0.25, 0.53],
        ],
        0.012,
      ),
        $(
          0.18,
          [
            [0.17, 0.33, 0.41],
            [0.19, 0.37, 0.48],
          ],
          0.01,
        ),
        $(
          0.45,
          [
            [0.28, 0.48, 0.35],
            [0.33, 0.52, 0.42],
          ],
          0.009,
        ),
        $(
          0.82,
          [
            [0.33, 0.78, 0.33],
            [0.36, 0.84, 0.34],
          ],
          0.007,
        ),
        $(
          0.9,
          [
            [0.17, 0.86, 0.42],
            [0.14, 0.9, 0.45],
          ],
          0.006,
        ));
    }
  }
  s.flush(t);
  const i = u("study_paper", {
      extra: { clearcoat: 0.7, clearcoatRoughness: 0.1 },
    }),
    v = u("paper_old"),
    G = (l, m, r, f, w, x) => {
      const _ = (w.h + 2 * w.mat + 0.116) / 2;
      a.at([l, r - _, m], f, () =>
        a.at([0, 0, 0.001], [0.025, 0, 0], () =>
          a.at([0, _, 0], 0, () => Io(a, w, x, i, v)),
        ),
      );
    };
  (G(
    7,
    h.z,
    1.2,
    Math.PI / 2,
    { w: 0.32, h: 0.24, mat: 0.045, prof: "wide", rect: u0.hunt },
    u("wood_ebony"),
  ),
    G(
      10.8,
      8.2,
      1.58,
      -Math.PI / 2,
      { w: 0.27, h: 0.36, mat: 0.05, prof: "wide", rect: u0.stag },
      c,
    ));
  {
    const l = { z: 7.95, y: 1.52, L: 1.08, H: 0.46 };
    a.at([7, l.y, l.z], Math.PI / 2, () => {
      (a.box(
        u("wood_walnut", { color: "#7a6456" }),
        l.L,
        l.H,
        0.02,
        [0, 0, 0.012],
        { r: 0.006, seg: 2, grain: "x" },
      ),
        a.box(c, l.L + 0.04, 0.035, 0.03, [0, l.H / 2 + 0.017, 0.016], {
          r: 0.008,
          grain: "x",
        }),
        a.box(c, l.L + 0.04, 0.03, 0.03, [0, -0.46 / 2 - 0.015, 0.016], {
          r: 0.008,
          grain: "x",
        }));
      for (const f of [-1, 1]) {
        const x = [
          [0, -0.22],
          [0.065, -0.22],
          [0.075, -0.21000000000000002],
        ];
        for (let _ = 0; _ < 3; _++) {
          const V = -0.14500000000000002 + _ * 0.14;
          x.push([0.075, V - 0.03]);
          for (let Q = 0; Q <= 8; Q++) {
            const D = (Q / 8) * Math.PI;
            x.push([
              0.075 - 0.004 - Math.sin(D) * 0.024,
              V - 0.024 * Math.cos(D),
            ]);
          }
          x.push([0.075 + 0.012, V + 0.034], [0.075, V + 0.05]);
        }
        (x.push(
          [0.075, l.H / 2 - 0.03],
          [0.075 - 0.012, l.H / 2 - 0.02],
          [0, l.H / 2 - 0.02],
        ),
          a.add(d0(h0(x), 0.03, 0.004, { seg: 2 }), c, {
            m: d([f * (l.L / 2 - 0.1), 0, 0.022], [0, -Math.PI / 2, 0]),
            uv: "world",
          }));
      }
      const m = [
          [-0.5, -0.045],
          [-0.5, 0.025],
          [-0.28, 0.012],
          [-0.2, 0.018],
          [0.04, 0.013],
          [0.5, 0.008],
          [0.5, -0.002],
          [0.12, -0.006],
          [-0.1, -0.016],
          [-0.18, -0.03],
          [-0.2, -0.016],
          [-0.29, -0.016],
        ],
        r = u("wood_walnut", { color: "#ffffff" });
      for (let f = 0; f < 3; f++)
        a.add(d0(h0(m), 0.0012, 0, { seg: 1 }), r, {
          m: d([0.01, -0.46 / 2 + 0.085 + f * 0.14, 0.0225]),
          uv: "world",
          shadow: !1,
        });
      a.box(
        u("brass_aged", { rough: 0.3 }),
        0.11,
        0.028,
        0.003,
        [0, -0.46 / 2 - 0.015, 0.032],
        { r: 0.001, grain: null },
      );
    });
  }
  {
    a.add(new j(0.018, 0.018, 7.9 - 5.1, 16), c, {
      m: d([10.67, 2.6, (5.1 + 7.9) / 2], [Math.PI / 2, 0, 0]),
      uv: T0.z,
    });
    for (const _ of [5.1, 7.9])
      (a.add(
        T(
          [
            [0, 0],
            [0.024, 0],
            [0.032, 0.02],
            [0.03, 0.05],
            [0.012, 0.07],
            [0, 0.075],
          ],
          16,
        ),
        c,
        {
          m: d([10.67, 2.6, _], [_ < 6 ? -Math.PI / 2 : Math.PI / 2, 0, 0]),
          uv: "keep",
        },
      ),
        a.box(
          b,
          0.13,
          0.016,
          0.016,
          [10.8 - 0.065, 2.6, _ + (_ < 6 ? 0.12 : -0.12)],
          { r: 0.004, grain: null },
        ));
    const w = u("velvet_red", { side: F0 }),
      x = (_, V) => {
        const Q = Math.abs(V - _),
          D = Math.sign(V - _),
          F = 36,
          R = 40,
          N = 2.6 - 0.03,
          Z = 1.05,
          z = [],
          Y = [];
        for (let E = 0; E <= R; E++) {
          const J = E / R,
            O = 0.015 + (N - 0.015) * J,
            K =
              O > Z
                ? 0.38 + 0.62 * Math.pow((O - Z) / (N - Z), 0.8)
                : 0.38 + 0.4 * Math.pow((Z - O) / Z, 0.9),
            H = 0.028 * Math.pow(1 / K, 0.7);
          for (let a0 = 0; a0 <= F; a0++) {
            const r0 = a0 / F,
              k0 =
                Math.sin(r0 * Math.PI * 2 * 7 + J * 0.8) * H +
                Math.sin(r0 * Math.PI * 2 * 2.3 + 1.7) * H * 0.35;
            z.push(
              10.67 - 0.005 - Math.abs(k0) * 0.4 - k0 * 0.6,
              O,
              _ + D * Q * K * r0,
            );
          }
        }
        for (let E = 0; E < R; E++)
          for (let J = 0; J < F; J++) {
            const O = E * (F + 1) + J,
              K = O + F + 1;
            Y.push(O, O + 1, K, O + 1, K + 1, K);
          }
        const C = new q0();
        (C.setAttribute("position", new L0(z, 3)),
          C.setIndex(Y),
          C.computeVertexNormals(),
          a.add(C, w, { uv: "world" }));
        const $ = _ + D * Q * 0.38 * 0.55;
        (a.add(
          new R0(0.075, 0.007, 6, 20),
          u("brass_aged", { color: "#d8b060", rough: 0.6 }),
          { m: d([10.67 - 0.02, Z, $], [0, 0, 0], [0.7, 0.35, 1]), uv: "keep" },
        ),
          a.add(
            T(
              [
                [0, 0],
                [0.018, 0.005],
                [0.022, 0.05],
                [0.012, 0.075],
                [0.006, 0.09],
                [0, 0.095],
              ],
              10,
            ),
            u("brass_aged", { color: "#d8b060", rough: 0.7 }),
            { m: d([10.67 - 0.06, Z - 0.12, $]), uv: "keep" },
          ));
      };
    (x(5.18, 5.62), x(7.82, 7.38));
  }
  const S = new c0();
  ((S.name = "globe"), e.add(S));
  {
    const l = { x: 8.02, z: 8.06, cy: 0.74, r: 0.22 },
      m = new n0("globe");
    (m.at([l.x, 0, l.z], 0.4, () => {
      for (let w = 0; w < 4; w++) {
        const x = (w / 4) * Math.PI * 2 + Math.PI / 4,
          _ = new m0([
            y(Math.cos(x) * 0.27, 0, Math.sin(x) * 0.27),
            y(Math.cos(x) * 0.23, 0.3, Math.sin(x) * 0.23),
            y(Math.cos(x) * 0.26, l.cy - 0.02, Math.sin(x) * 0.26),
          ]);
        m.add(
          x0(_, (V) => 0.02 - 0.006 * Math.sin(Math.PI * V), 16, 10),
          c,
          { uv: T0.y },
        );
      }
      for (const w of [Math.PI / 4, -Math.PI / 4])
        m.box(c, 0.5, 0.024, 0.03, [0, 0.16, 0], { rot: [0, w, 0], r: 0.006 });
      m.add(
        T(
          [
            [0, 0.15],
            [0.03, 0.15],
            [0.034, 0.18],
            [0.02, 0.22],
            [0.008, 0.26],
            [0, 0.265],
          ],
          14,
        ),
        c,
        { uv: "keep" },
      );
      const r = new K0();
      r.absarc(0, 0, 0.3, 0, Math.PI * 2, !1);
      const f = new go();
      (f.absarc(0, 0, 0.235, 0, Math.PI * 2, !0),
        r.holes.push(f),
        m.add(d0(r, 0.022, 0.004, { seg: 2, curveSegments: 48 }), c, {
          m: d([0, l.cy, 0], [-Math.PI / 2, 0, 0]),
          uv: "world",
        }),
        m.add(new Bo(0.24, 0.29, 64), u("paper_old", { color: "#e0d0a8" }), {
          m: d([0, l.cy + 0.0115, 0], [-Math.PI / 2, 0, 0]),
          uv: "world",
        }),
        m.at([0, l.cy, 0], [0, 0, 0.41], () => {
          (m.add(new R0(l.r + 0.012, 0.006, 8, 64), b, {
            m: d([0, 0, 0], [0, Math.PI / 2 - 0.3, 0]),
            uv: "keep",
          }),
            m.add(new f0(l.r, 64, 40), u("study_globe"), {
              m: d([0, 0, 0], [0, 2.1, 0]),
              uv: "keep",
            }));
          for (const w of [-1, 1])
            m.add(
              T(
                [
                  [0, 0],
                  [0.01, 0],
                  [0.01, 0.014],
                  [0.004, 0.02],
                  [0, 0.022],
                ],
                10,
              ),
              b,
              {
                m: d([0, w * (l.r + 0.004), 0], [w < 0 ? Math.PI : 0, 0, 0]),
                uv: "keep",
              },
            );
        }));
    }),
      m.flush(S),
      n.push({
        x0: l.x - 0.31,
        x1: l.x + 0.31,
        z0: l.z - 0.31,
        z1: l.z + 0.31,
        y0: 0,
        y1: 1,
      }));
  }
  return (a.flush(e), { group: e, colliders: n, deerHead: t, globe: S });
}
async function Oo(I) {
  const { game: L, shell: u } = I,
    c = (m, r) => I.mats.get(m, r),
    b = new c0();
  ((b.name = "study"), I.scene.add(b));
  const e = I.rng(777),
    a = [],
    n = [],
    t = Co(I, b),
    h = Xo(I, b),
    s = Vo(I, b),
    M = Wo(I, b);
  a.push(t.collider, ...h.colliders, ...s.colliders, ...M.colliders);
  {
    const m = new n0("studyRug"),
      r = { x0: 7.55, x1: 9.9, z0: 5.35, z1: 7.95, t: 0.008 };
    m.box(
      c("rug_persian"),
      r.x1 - r.x0,
      r.t,
      r.z1 - r.z0,
      [(r.x0 + r.x1) / 2, r.t / 2, (r.z0 + r.z1) / 2],
      { r: 0.003, grain: null },
    );
    const f = [];
    for (const [x, _] of [
      [r.z0, -1],
      [r.z1, 1],
    ])
      for (let Q = 0; Q < 150; Q++) {
        const D =
            r.x0 +
            0.015 +
            (r.x1 - r.x0 - 0.03) * (Q / 149) +
            (e() - 0.5) * 0.004,
          F = 0.055 + e() * 0.03,
          R = (e() - 0.5) * 0.4,
          N = 0.0034,
          Z = D + Math.sin(R) * F,
          z = x + _ * Math.cos(R) * F,
          Y = r.t * 0.5,
          C = 0.0012 + e() * 0.002;
        f.push(
          D - N / 2,
          Y,
          x,
          Z,
          C,
          z,
          D + N / 2,
          Y,
          x,
          D + N / 2,
          Y,
          x,
          Z,
          C,
          z,
          Z + N * 0.8,
          C,
          z,
        );
      }
    const w = new q0();
    (w.setAttribute("position", new L0(f, 3)),
      w.computeVertexNormals(),
      m.add(w, c("linen_stained", { color: "#b8a888", side: F0 }), {
        uv: "world",
        shadow: !1,
      }),
      m.flush(b));
  }
  const k = new xo(16756848, 6, 7.5, 0.5, 0.9, 2);
  ((k.name = "studyBounce"),
    k.position.set(8.9, 0.9, 7.1),
    k.target.position.set(7.1, 2.1, 5.5),
    (k.castShadow = !0),
    k.shadow.mapSize.set(1024, 1024),
    (k.shadow.camera.near = 0.1),
    (k.shadow.camera.far = 7.5),
    (k.shadow.bias = -6e-4),
    (k.shadow.normalBias = 0.02),
    b.add(k, k.target));
  const P = new bo(16762512, 0.25, 3, 2);
  ((P.name = "studyFill"), P.position.set(8.9, 2.1, 6.9), b.add(P));
  const i = k.intensity,
    v = P.intensity;
  n.push((m) => {
    t.update(m);
    const r = t.lamp.on ? Math.max(0, t.lamp.light.intensity / 4.5) : 0;
    ((k.intensity = i * r), (P.intensity = v * (0.35 + 0.65 * r)));
  });
  const G = t.pistolA,
    S = t.pistolB,
    l = t.pistolASpot;
  return (
    I.interact &&
      I.interact.add({
        id: "pistol",
        pos: l,
        radius: 1.6,
        prompt: "take",
        enabled: () => G.visible,
        onUse: (m) => m.events.emit("use", "pistol"),
      }),
    io(L, "study:lampoff", () => t.lamp.setOn(!1)),
    io(L, "study:taken", () => {
      ((G.visible = !1), (S.visible = !1));
    }),
    {
      group: b,
      colliders: a,
      anim: n,
      points: {
        deskFront: [8.75, 0, 6.5],
        deskFrontWoman: [8.8, 0, 7.12],
        studyInside: [7.45, 0, 6.65],
        pistolASpot: l,
        pistolBSpot: t.pistolBSpot,
      },
      props: {
        desk: t.group,
        pistolA: G,
        pistolB: S,
        ammo: t.ammo,
        lamp: t.lamp,
        deerHead: M.deerHead,
        gunCase: t.gunCase,
        caseLid: t.caseLid,
        globe: M.globe,
      },
      lights: {
        deskLamp: t.lights.deskLamp,
        deskLampGlass: t.lights.deskLampGlass,
        bounce: k,
        fill: P,
      },
      interact: ["pistol"],
    }
  );
}
export { Oo as build };
