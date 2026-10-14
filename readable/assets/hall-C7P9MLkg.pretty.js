import {
  B as n0,
  l as H,
  m as g,
  V as P,
  t as S0,
  g as O0,
  F as W0,
  S as x0,
  r as J0,
  A as $0,
  s as M0,
  e as g0,
  a as K0,
  b as U0,
  c as T0,
  d as Q0,
  f as z0,
  h as tt,
} from "./frames-D6Ub_iDK.js";
import {
  G as Q,
  J as A0,
  a7 as a0,
  $ as G0,
  M as _0,
  ae as ot,
  c as p0,
  P as B0,
  m as f0,
  U as et,
  X as nt,
  N as st,
  Y as C0,
  ab as at,
  b as c0,
  q as rt,
  d as u0,
  af as j0,
  a5 as ct,
  ag as E0,
  B as b0,
  I as l0,
  a0 as lt,
} from "./index-DaQlAVPp.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./BufferGeometryUtils-Qxvmd-vM.js";
function dt(b) {
  const r = new Uint8Array(256);
  for (let e = 0; e < 64; e++) {
    const y = e / 63;
    let o = b[0][1];
    for (let v = 0; v < b.length - 1; v++)
      if (y >= b[v][0] && y <= b[v + 1][0]) {
        const s = (y - b[v][0]) / (b[v + 1][0] - b[v][0]);
        o = b[v][1] + (b[v + 1][1] - b[v][1]) * s;
      }
    const p = Math.round(Math.max(0, Math.min(1, o)) * 255);
    ((r[e * 4] = p),
      (r[e * 4 + 1] = p),
      (r[e * 4 + 2] = p),
      (r[e * 4 + 3] = 255));
  }
  const x = new et(r, 1, 64, nt);
  return (
    (x.colorSpace = st),
    (x.magFilter = C0),
    (x.minFilter = C0),
    (x.needsUpdate = !0),
    x
  );
}
function it(b, C, { x: r = 6.1, z: x = 8, ceil: e = 3 } = {}) {
  const y = (w, A) => b.mats.get(w, A),
    o = y("brass_aged"),
    p = new Q();
  ((p.name = "ceilingFixture"), C.add(p));
  const v = new n0("fixture_rose");
  (v.add(
    H(
      [
        [0, e - 0.028],
        [0.1, e - 0.028],
        [0.13, e - 0.02],
        [0.155, e - 0.014],
        [0.17, e - 0.004],
        [0.17, e],
      ],
      40,
    ),
    y("trim_ivory"),
    { m: g([r, 0, x]), uv: "world" },
  ),
    v.add(
      H(
        [
          [0, e - 0.075],
          [0.022, e - 0.075],
          [0.03, e - 0.06],
          [0.034, e - 0.035],
          [0.042, e - 0.028],
          [0.042, e - 0.028],
          [0, e - 0.028],
        ],
        24,
      ),
      o,
      { m: g([r, 0, x]), uv: "keep" },
    ),
    v.flush(p));
  const s = new Q();
  ((s.name = "fixtureSwing"), s.position.set(r, e - 0.07, x), p.add(s));
  const Y = new n0("fixture"),
    m = 0.34,
    M = 0.026,
    i = new A0(0.0085, 0.0022, 6, 14);
  i.scale(0.75, 1.3, 1);
  const u = Math.round(m / (M * 0.72));
  for (let w = 0; w < u; w++)
    Y.add(i, o, {
      m: g([0, -0.012 - w * M * 0.72, 0], [0, ((w % 2) * Math.PI) / 2, 0]),
      uv: "keep",
    });
  const B = -0.012 - u * M * 0.72;
  Y.add(
    H(
      [
        [0, B - 0.05],
        [0.012, B - 0.05],
        [0.02, B - 0.04],
        [0.026, B - 0.022],
        [0.018, B - 0.008],
        [0.008, B],
        [0, B],
      ],
      20,
    ),
    o,
    { uv: "keep" },
  );
  const _ = B - 0.12,
    l = 0.17;
  Y.add(new A0(l, 0.006, 8, 48), o, {
    m: g([0, _, 0], [Math.PI / 2, 0, 0]),
    uv: "keep",
  });
  for (let w = 0; w < 3; w++) {
    const A = (w * Math.PI * 2) / 3 + 0.4,
      q = new a0([
        P(0, B - 0.035, 0),
        P(Math.cos(A) * 0.09, B - 0.05, Math.sin(A) * 0.09),
        P(Math.cos(A) * l, _ + 0.004, Math.sin(A) * l),
      ]);
    (Y.add(
      S0(q, () => 0.0035, 16, 6, { capEnd: !1 }),
      o,
      { uv: "keep" },
    ),
      Y.add(new G0(0.008, 10, 8), o, {
        m: g([Math.cos(A) * l, _, Math.sin(A) * l]),
        uv: "keep",
      }));
  }
  Y.add(
    H(
      [
        [0, _ - 0.005],
        [0.018, _ - 0.005],
        [0.018, _ + 0.035],
        [0.012, _ + 0.04],
        [0, _ + 0.04],
      ],
      14,
    ),
    o,
    { uv: "keep" },
  );
  const N = 0.13;
  (Y.add(
    H(
      [
        [0, _ - N - 0.035],
        [0.008, _ - N - 0.03],
        [0.012, _ - N - 0.012],
        [0.02, _ - N - 0.004],
        [0.022, _ - N + 0.002],
        [0, _ - N + 0.002],
      ],
      16,
    ),
    o,
    { uv: "keep", shadow: !1 },
  ),
    Y.flush(s));
  const G = [];
  for (let w = 0; w <= 14; w++) {
    const A = w / 14,
      q = (A * Math.PI) / 2;
    G.push([Math.sin(q) * (l - 0.004), _ - Math.cos(q) * N]);
  }
  const k = H(G, 48);
  {
    const w = k.attributes.uv,
      A = w.getY(w.count - 1) || 1;
    for (let q = 0; q < w.count; q++) w.setXY(q, 0.5, w.getY(q) / A);
  }
  const h = H(G.map(([w, A]) => [w * 0.965, A + 0.003]).reverse(), 48),
    n = dt([
      [0, 1],
      [0.35, 0.9],
      [0.75, 0.55],
      [1, 0.75],
    ]),
    a = new _0({
      color: 14212310,
      roughness: 0.55,
      metalness: 0,
      emissive: 16777215,
      emissiveMap: n,
      emissiveIntensity: 1,
      side: ot,
    });
  a.name = "hall_bowl";
  const c = new p0(k, a);
  ((c.name = "bowl"), (c.castShadow = !1), (c.receiveShadow = !1), s.add(c));
  const f = O0(1, 1, 1, { name: "hall_bowl_inner" }),
    E = new p0(h, f);
  ((E.castShadow = !1), s.add(E));
  const S = new B0(14870770, 4, 11, 2);
  ((S.name = "hallCeiling"),
    S.position.set(0, _ - 0.045, 0),
    (S.castShadow = !0),
    S.shadow.mapSize.set(1024, 1024),
    (S.shadow.camera.near = 0.04),
    (S.shadow.camera.far = 11),
    (S.shadow.bias = -0.0015),
    (S.shadow.normalBias = 0.025),
    (S.shadow.radius = 2),
    s.add(S));
  const L = {
      intensity: S.intensity,
      glow: [1.15, 1.27, 1.42],
      inner: [2.2, 2.4, 2.6],
    },
    z = new W0(b.rng(808), { amount: 0.5 }),
    V = new x0(9, 0.35),
    D = new x0(9, 0.35);
  let I = 1;
  const U = {
    group: p,
    pivot: s,
    light: S,
    bowl: c,
    setFlicker(w) {
      z.amount = Math.max(0, Math.min(1, w));
    },
    setOn(w) {
      z.on = !!w;
    },
    snap(w = 0.3) {
      z.snap(w);
    },
    setLevel(w) {
      I = w;
    },
    swing(w = 1) {
      (V.kick(w * 0.35), D.kick(w * 0.22));
    },
    get level() {
      return z.level * I;
    },
    update(w) {
      const A = z.update(w) * I;
      ((S.intensity = L.intensity * A),
        a.emissive.setRGB(L.glow[0] * A, L.glow[1] * A, L.glow[2] * A),
        f.color.setRGB(L.inner[0] * A, L.inner[1] * A, L.inner[2] * A),
        (s.rotation.x = V.update(w) * 0.25),
        (s.rotation.z = D.update(w) * 0.25));
    },
  };
  return (U.update(0), U);
}
const ht = [
  { wall: "W", z: 2.75, state: "dead" },
  { wall: "E", z: 4.42, state: "dead" },
  { wall: "W", z: 9.2, state: "dead" },
  { wall: "E", z: 11.25, state: "broken" },
  { wall: "W", z: 12.72, state: "live" },
];
function ut(b, C, { y: r = 1.86 } = {}) {
  const e = ((M, i) => b.mats.get(M, i))("brass_aged"),
    y = new Q();
  ((y.name = "sconces"), C.add(y));
  const o = new n0("sconces"),
    p = new _0({
      color: 10131082,
      roughness: 0.45,
      metalness: 0,
      transparent: !0,
      opacity: 0.78,
      side: f0,
      depthWrite: !1,
    });
  p.name = "sconce_glass_dead";
  const v = new _0({ color: 9209976, roughness: 0.3, metalness: 0 });
  v.name = "sconce_bulb_dead";
  const s = [],
    Y = [],
    m = [
      [0.012, 0],
      [0.016, 0.004],
      [0.028, 0.03],
      [0.04, 0.07],
      [0.047, 0.1],
      [0.05, 0.115],
    ];
  for (const M of ht) {
    const i = M.wall === "W",
      u = i ? 5.4 : 6.8,
      B = i ? Math.PI / 2 : -Math.PI / 2,
      _ = (N) => o.at([u, r, M.z], B, N);
    let l = null;
    if (
      (_(() => {
        o.add(
          H(
            [
              [0, 0],
              [0.034, 0],
              [0.04, 0.004],
              [0.04, 0.008],
              [0.03, 0.013],
              [0.012, 0.016],
              [0, 0.017],
            ],
            28,
          ),
          e,
          { m: g([0, 0, 0], [Math.PI / 2, 0, 0], [1, 1, 1.45]), uv: "keep" },
        );
        const N = new a0([
          P(0, -0.01, 0.012),
          P(0, -0.04, 0.05),
          P(0, -0.02, 0.085),
          P(0, 0.03, 0.09),
        ]);
        (o.add(
          S0(N, (G) => 0.0065 - G * 0.0015, 20, 8),
          e,
          { uv: "keep" },
        ),
          o.add(new G0(0.009, 12, 8), e, {
            m: g([0, -0.036, 0.047]),
            uv: "keep",
          }),
          (l = [0, 0.03, 0.09]),
          o.add(
            H(
              [
                [0, 0],
                [0.008, 0],
                [0.012, 0.006],
                [0.026, 0.012],
                [0.03, 0.017],
                [0.026, 0.018],
                [0.012, 0.014],
                [0, 0.014],
              ],
              20,
            ),
            e,
            { m: g(l), uv: "keep" },
          ),
          o.add(
            H(
              [
                [0, 0.012],
                [0.011, 0.012],
                [0.011, 0.034],
                [0.009, 0.036],
                [0, 0.036],
              ],
              14,
            ),
            e,
            { m: g(l), uv: "keep" },
          ),
          M.state === "dead"
            ? (o.add(H(m, 24), p, {
                m: g([l[0], l[1] + 0.014, l[2]]),
                uv: "keep",
              }),
              o.add(
                H(
                  [
                    [0, 0],
                    [0.008, 0.004],
                    [0.011, 0.02],
                    [0.008, 0.036],
                    [0.003, 0.046],
                    [0, 0.048],
                  ],
                  12,
                ),
                v,
                { m: g([l[0], l[1] + 0.034, l[2]]), uv: "keep" },
              ))
            : M.state === "broken" &&
              (o.add(
                H(m.slice(0, 4), 24, { phi0: 0.6, phi: Math.PI * 1.25 }),
                p,
                { m: g([l[0], l[1] + 0.014, l[2]]), uv: "keep" },
              ),
              o.add(
                H(
                  [
                    [0, 0],
                    [0.008, 0.004],
                    [0.009, 0.012],
                    [0.004, 0.014],
                    [0, 0.014],
                  ],
                  10,
                ),
                v,
                { m: g([l[0], l[1] + 0.034, l[2]]), uv: "keep" },
              )));
      }),
      M.state === "live")
    ) {
      const N = new Q();
      ((N.name = "sconce_live"),
        N.position.set(u, r, M.z),
        (N.rotation.y = B),
        y.add(N));
      const G = new _0({
        color: 15259832,
        roughness: 0.5,
        emissive: 16777215,
        side: f0,
      });
      G.name = "sconce_glass_live";
      const k = new p0(H(m, 24), G);
      (k.position.set(l[0], l[1] + 0.014, l[2]), N.add(k));
      const h = O0(4, 2.2, 0.9, { name: "sconce_bulb_live" }),
        n = new p0(
          H(
            [
              [0, 0],
              [0.008, 0.004],
              [0.011, 0.02],
              [0.008, 0.036],
              [0.003, 0.046],
              [0, 0.048],
            ],
            12,
          ),
          h,
        );
      (n.position.set(l[0], l[1] + 0.034, l[2]), N.add(n));
      const a = new B0(16752978, 1.1, 3.6, 2);
      ((a.name = "sconceLive"),
        a.position.set(l[0], l[1] + 0.06, l[2] + 0.02),
        N.add(a),
        s.push(a),
        Y.push({
          light: a,
          shadeMat: G,
          bulbMat: h,
          flick: new W0(b.rng(313), { amount: 0.55, rate: 1.4 }),
          base: a.intensity,
        }));
    }
  }
  return (
    o.flush(y),
    {
      group: y,
      lights: s,
      setOn(M) {
        for (const i of Y) i.flick.on = !!M;
      },
      setFlicker(M) {
        for (const i of Y) i.flick.amount = M;
      },
      update(M) {
        for (const i of Y) {
          const u = i.flick.update(M);
          ((i.light.intensity = i.base * u),
            i.shadeMat.emissive.setRGB(1.25 * u, 0.62 * u, 0.22 * u),
            i.bulbMat.color.setRGB(4 * u, 2.2 * u, 0.9 * u));
        }
      },
    }
  );
}
function pt(b, C) {
  b.computeBoundingBox();
  const { min: r, max: x } = b.boundingBox,
    e = b.attributes.position;
  for (let y = 0; y < e.count; y++) {
    const o = (x.y - e.getY(y)) / (x.y - r.y),
      p = 1 - C * o;
    (e.setX(y, e.getX(y) * p), e.setZ(y, e.getZ(y) * p));
  }
  return (b.computeVertexNormals(), b);
}
function Z0(
  b,
  { R: C = 0.0055, pitch: r = 0.009, r: x = 0.0021, stretch: e = 1 } = {},
) {
  const y = b.getLength(),
    o = Math.max(2, Math.round(y / (r * e))),
    p = 8,
    v = o * p,
    s = b.computeFrenetFrames(v, !1),
    Y = [];
  for (let m = 0; m <= v; m++) {
    const M = m / v,
      i = b.getPointAt(M),
      u = (m / p) * Math.PI * 2;
    Y.push(
      i
        .clone()
        .addScaledVector(s.normals[m], Math.cos(u) * C)
        .addScaledVector(s.binormals[m], Math.sin(u) * C),
    );
  }
  return new j0(new a0(Y), v * 2, x, 5, !1);
}
function ft(b, C) {
  const r = (t, d) => b.mats.get(t, d),
    x = b.rng(2024),
    e = r("wood_walnut"),
    y = r("brass_aged"),
    o = r("paper_old"),
    p = new at({
      color: 854795,
      roughness: 0.32,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.14,
    });
  p.name = "bakelite";
  const v = new Q();
  ((v.name = "hallNorth"), C.add(v));
  const s = new n0("hallNorth"),
    Y = [],
    m = { L: 1.1, D: 0.36, H: 0.8, z: 1.5, off: 0.036 },
    M = g([5.4, 0, m.z], [0, Math.PI / 2, 0]);
  s.push(M);
  {
    const { L: t, D: d, H: F, off: T } = m,
      R = T + d / 2;
    (s.box(e, t, 0.028, d, [0, F - 0.014, R], { r: 0.007, seg: 2 }),
      s.box(e, t - 0.036, 0.014, d - 0.026, [0, F - 0.035, R - 0.006], {
        r: 0.004,
      }),
      s.box(e, t - 0.1, 0.092, 0.02, [0, F - 0.088, T + d - 0.05]),
      s.box(e, t - 0.1, 0.092, 0.02, [0, F - 0.088, T + 0.03]));
    for (const X of [-1, 1])
      s.box(
        e,
        0.02,
        0.092,
        d - 0.09,
        [X * (t / 2 - 0.06), F - 0.088, R - 0.01],
        { grain: "z" },
      );
    s.box(e, 0.46, 0.068, 0.016, [0, F - 0.088, T + d - 0.036], { r: 0.004 });
    for (const X of [-1, 1])
      s.add(new c0(0.009, 0.009, 0.004, 14), y, {
        m: g([X * 0.04, F - 0.082, T + d - 0.026], [Math.PI / 2, 0, 0]),
        uv: "keep",
      });
    s.add(new A0(0.04, 0.0025, 6, 20, Math.PI), y, {
      m: g([0, F - 0.084, T + d - 0.019], [0.35, 0, Math.PI]),
      uv: "keep",
    });
    for (const X of [-1, 1])
      for (const Z of [T + 0.03, T + d - 0.04])
        (s.add(pt(J0(0.046, F - 0.05, 0.046, 0.005, 1), 0.42), e, {
          m: g([X * (t / 2 - 0.058), (F - 0.05) / 2, Z]),
          uv: $0.y,
        }),
          s.add(
            H(
              [
                [0, 0],
                [0.015, 0],
                [0.016, 0.03],
                [0.014, 0.032],
                [0, 0.032],
              ],
              12,
            ),
            y,
            { m: g([X * (t / 2 - 0.058), 0, Z]), uv: "keep" },
          ));
    (s.box(e, t - 0.14, 0.018, d - 0.12, [0, 0.17, R], { r: 0.004 }),
      [
        [0, 0],
        [0.012, 0.21],
        [-0.01, -0.12],
        [0.02, 0.35],
        [-0.004, 0.08],
        [0.015, -0.3],
      ].forEach(([X, Z], O) => {
        const $ =
          O === 2
            ? r("paper_old", { color: "#aeb6bb" })
            : O === 4
              ? r("paper_old", { color: "#b08a60" })
              : o;
        s.box(
          $,
          0.17,
          0.0026,
          0.11,
          [0.02 + X, F + 0.0014 + O * 0.0027, T + 0.16 + X * 0.6],
          { rot: [0, Z, 0], r: 8e-4, grain: null },
        );
      }));
  }
  {
    const d = m.off + 0.17,
      F = m.H;
    (s.add(
      H(
        [
          [0, 0],
          [0.058, 0],
          [0.062, 0.006],
          [0.072, 0.04],
          [0.082, 0.1],
          [0.086, 0.14],
          [0.094, 0.15],
          [0.094, 0.162],
          [0.084, 0.165],
          [0.08, 0.15],
          [0.08, 0.15],
          [0, 0.15],
        ],
        36,
      ),
      r("porcelain_cracked", { color: "#57735f" }),
      { m: g([-0.34, F, d]), uv: "keep" },
    ),
      s.add(new rt(0.079, 24), r("dark_room", { color: "#2a1d14" }), {
        m: g([-0.34, F + 0.1515, d], [-Math.PI / 2, 0, 0]),
        uv: "world",
      }));
    const T = r("wood_oak_pale", { color: "#c8b090" }),
      R = b.mats.paint("#7a5a3c", { rough: 0.92, props: { side: f0 } });
    for (let J = 0; J < 9; J++) {
      const X = x() * Math.PI * 2,
        Z = 0.18 + x() * 0.2,
        O = 0.05 + x() * 0.12,
        $ = x() < 0.6,
        j = P(-0.34 + Math.cos(X) * 0.02, F + 0.15, d + Math.sin(X) * 0.02),
        W = P(
          j.x + Math.cos(X) * O * 0.4,
          j.y + Z * 0.6,
          j.z + Math.sin(X) * O * 0.4,
        ),
        K = P(
          j.x + Math.cos(X) * O,
          j.y + Z * ($ ? 0.75 : 1),
          j.z + Math.sin(X) * O,
        ),
        e0 = $
          ? P(
              j.x + Math.cos(X) * (O + 0.08),
              j.y + Z * 0.45,
              j.z + Math.sin(X) * (O + 0.08),
            )
          : P(K.x + Math.cos(X) * 0.01, K.y + 0.03, K.z + Math.sin(X) * 0.01),
        y0 = new a0([j, W, K, e0]);
      s.add(
        S0(y0, (h0) => 0.0034 - h0 * 0.0018, 14, 5),
        T,
        { uv: "keep" },
      );
      for (let h0 = 0; h0 < 2; h0++) {
        const L0 = 0.45 + h0 * 0.3 + x() * 0.1,
          m0 = y0.getPointAt(Math.min(1, L0)),
          X0 = new u0(0.06, 0.022, 6, 1),
          k0 = X0.attributes.position;
        for (let w0 = 0; w0 < k0.count; w0++) {
          const D0 = k0.getX(w0),
            R0 = k0.getY(w0),
            v0 = (D0 + 0.03) / 0.06;
          k0.setXYZ(
            w0,
            D0,
            R0 * (1 - v0 * 0.7) * Math.sin(Math.PI * (0.15 + v0 * 0.85)),
            -v0 * v0 * 0.03 + Math.abs(R0) * 0.6,
          );
        }
        (X0.computeVertexNormals(),
          s.add(X0, R, {
            m: g(
              [m0.x, m0.y, m0.z],
              [x() * 1.2 - 0.3, X + x() * 2, -0.9 - x() * 0.8],
              [1, 1, 1],
            ),
            uv: "keep",
          }));
      }
    }
    for (let J = 0; J < 4; J++) {
      const X = new u0(0.055, 0.02, 5, 1),
        Z = X.attributes.position;
      for (let O = 0; O < Z.count; O++) {
        const $ = Z.getX(O),
          j = Z.getY(O),
          W = ($ + 0.0275) / 0.055;
        Z.setXYZ(
          O,
          $,
          j * Math.sin(Math.PI * (0.15 + W * 0.85)),
          Math.abs(j) * 0.5 + 0.002,
        );
      }
      (X.computeVertexNormals(),
        s.add(X, R, {
          m: g(
            [-0.34 + 0.1 + x() * 0.16, F + 0.001, m.off + 0.08 + x() * 0.22],
            [-Math.PI / 2, 0, x() * 6.28],
          ),
          uv: "keep",
        }));
    }
  }
  (s.pop(),
    Y.push({
      x0: 5.4,
      x1: 5.4 + m.off + m.D + 0.01,
      z0: m.z - m.L / 2,
      z1: m.z + m.L / 2,
      y0: 0,
      y1: m.H,
    }));
  const i = new Q();
  ((i.name = "phone"), v.add(i), (i.matrixAutoUpdate = !0));
  const u = new n0("phone"),
    B = M.clone().multiply(g([0.3, m.H, m.off + 0.17], [0, -0.22, 0]));
  u.push(B);
  {
    const t = M0([
        [-0.092, 0.014],
        [0.092, 0.014],
        [0.092, 0.09],
        [0.078, 0.1],
        [0.015, 0.104],
        [-0.06, 0.06],
        [-0.092, 0.05],
      ]),
      d = g0(t, 0.19, 0.014, { seg: 3 });
    (u.add(d, p, { m: g([0, 0, 0], [0, Math.PI / 2, 0]), uv: "keep" }),
      u.box(p, 0.2, 0.012, 0.215, [0, 0.006, 0], { r: 0.004 }));
    for (const Z of [-1, 1])
      (u.box(p, 0.034, 0.05, 0.05, [Z * 0.072, 0.12, -0.035], {
        r: 0.012,
        seg: 2,
      }),
        u.add(new c0(0.0065, 0.0065, 0.03, 12), r("porcelain_cracked"), {
          m: g([Z * 0.03, 0.112, -0.038]),
          uv: "keep",
        }));
    const F = Math.atan2(0.044, 0.075);
    u.at([0, 0.094, 0.03], [F, 0, 0], () => {
      u.add(
        new c0(0.047, 0.047, 0.003, 36),
        r("porcelain_cracked", { color: "#e8e0cc" }),
        { m: g([0, 0.0015, 0]), uv: "keep" },
      );
      const Z = [];
      for (let $ = 0; $ < 10; $++) {
        const j = Math.PI * 0.35 + $ * ((Math.PI * 1.55) / 9),
          W = [];
        for (let K = 0; K < 12; K++) {
          const e0 = -(K / 12) * Math.PI * 2;
          W.push([
            Math.cos(j) * 0.032 + Math.cos(e0) * 0.0068,
            Math.sin(j) * 0.032 + Math.sin(e0) * 0.0068,
          ]);
        }
        Z.push(W);
      }
      const O = M0(
        Array.from({ length: 40 }, ($, j) => {
          const W = (j / 40) * Math.PI * 2;
          return [Math.cos(W) * 0.043, Math.sin(W) * 0.043];
        }),
        Z,
      );
      (u.add(g0(O, 0.004, 8e-4, { seg: 1 }), p, {
        m: g([0, 0.0055, 0], [-Math.PI / 2, 0, 0]),
        uv: "keep",
      }),
        u.add(new c0(0.016, 0.016, 0.004, 24), r("paper_old"), {
          m: g([0, 0.0062, 0]),
          uv: "keep",
        }),
        u.box(
          r("brass_aged", { rough: 0.25 }),
          0.006,
          0.006,
          0.016,
          [0.036, 0.009, 0.022],
          { rot: [0, -0.6, 0], r: 0.002 },
        ));
    });
    const T = p,
      R = P(-0.06, 0, 0.215),
      J = new a0([
        P(-0.1, 0.03, 0.05),
        P(-0.13, 0.01, 0.1),
        P(-0.11, 0.004, 0.16),
        R.clone().add(P(0, 0.004, -0.01)),
      ]);
    u.add(Z0(J), T, { uv: "keep" });
    const X = new a0([
      P(0.05, 0.02, -0.1),
      P(0.08, 0.004, -0.15),
      P(0.1, 0, -0.19),
      P(0.11, -0.05, -0.21),
      P(0.12, -0.4, -0.22),
    ]);
    u.add(new j0(X, 24, 0.0028, 6, !1), r("iron_black", { rough: 0.7 }), {
      uv: "keep",
    });
  }
  (u.pop(), u.flush(i));
  const _ = P(-0.06, 0, 0.215).applyMatrix4(B),
    l = new Q();
  ((l.name = "handsetSwing"), l.position.copy(_), i.add(l));
  {
    const t = new n0("handset");
    (t.add(
      Z0(
        new a0([
          P(0, 0, 0),
          P(0.004, -0.06, 0.01),
          P(-0.004, -0.14, 0.012),
          P(0, -0.2, 0.012),
        ]),
        { stretch: 2.1 },
      ),
      p,
      { uv: "keep" },
    ),
      t.at([0, -0.2 - 0.012 - 0.1, 0.012], [0, 0.5, Math.PI / 2 - 0.04], () => {
        const d = [];
        for (let R = 0; R <= 16; R++) {
          const J = R / 16,
            X = -0.1 + J * 0.2,
            Z = 0.022 * Math.sin(Math.PI * J);
          d.push(P(X, Z, 0));
        }
        const F = new a0(d);
        F.computeFrenetFrames(24, !1);
        const T = [];
        for (let R = 0; R <= 24; R++) {
          const J = R / 24,
            X = F.getPointAt(J),
            Z = Math.min(J, 1 - J),
            O = 0.012 + 0.012 * Math.pow(Math.max(0, 1 - Z / 0.16), 2),
            $ = F.getTangentAt(J),
            j = P(0, 0, 1),
            W = P().crossVectors(j, $).normalize();
          T.push(K0(X, W, j, O * 0.86, O * 1.08, 14));
        }
        t.add(U0(T, { capStart: !0, capEnd: !0 }), p, { uv: "keep" });
        for (const R of [-1, 1])
          (t.add(
            H(
              [
                [0, 0],
                [0.029, 0],
                [0.031, 0.006],
                [0.028, 0.03],
                [0.016, 0.034],
                [0, 0.034],
              ],
              24,
            ),
            p,
            { m: g([R * 0.092, 0.004, 0], [Math.PI, 0, 0]), uv: "keep" },
          ),
            t.add(
              new c0(0.02, 0.02, 0.003, 20),
              r("iron_black", { rough: 0.5 }),
              { m: g([R * 0.092, 0.0035, 0], [Math.PI, 0, 0]), uv: "keep" },
            ));
      }),
      t.flush(l));
  }
  const N = new x0(14, 0.5),
    G = new x0(14, 0.5);
  N.kick(0.12);
  let k = 0;
  const h = i.children.filter((t) => t !== l),
    n = {
      group: i,
      handset: l,
      swing(t = 1) {
        (N.kick(t * 0.6), G.kick(t * 0.35));
      },
      ring(t = 2) {
        k = t;
      },
      update(t, d) {
        if (
          ((l.rotation.x = N.update(t) + 0.012 * Math.sin(d * 0.7)),
          (l.rotation.z = G.update(t)),
          k > 0)
        ) {
          k -= t;
          const F = k > 0 ? Math.sin(d * 95) * 0.0012 : 0;
          for (const T of h) T.position.x = F;
        }
      },
    },
    a = new Q();
  ((a.name = "clock"), v.add(a));
  const c = new n0("clock"),
    f = { z: 1.62, off: 0.036 },
    E = g([6.8, 0, f.z], [0, -Math.PI / 2, 0]),
    S = r("wood_walnut", { color: "#8a6a58" });
  c.push(E);
  const L = (t) => f.off + t / 2;
  (c.box(e, 0.54, 0.07, 0.31, [0, 0.035, L(0.31)], { r: 0.008 }),
    c.box(e, 0.5, 0.34, 0.28, [0, 0.24, L(0.28)], { r: 0.006 }),
    c.box(S, 0.34, 0.2, 0.012, [0, 0.235, f.off + 0.28 + 0.004], { r: 0.004 }),
    c.box(e, 0.52, 0.035, 0.3, [0, 0.425, L(0.3)], { r: 0.008 }));
  const z = { w: 0.38, d: 0.22, y0: 0.44, y1: 1.43 };
  c.box(S, z.w, z.y1 - z.y0, 0.014, [0, (z.y0 + z.y1) / 2, f.off + 0.007], {
    r: 0.002,
    grain: "y",
  });
  for (const t of [-1, 1])
    c.box(
      e,
      0.02,
      z.y1 - z.y0,
      z.d,
      [t * (z.w / 2 - 0.01), (z.y0 + z.y1) / 2, L(z.d)],
      { grain: "y" },
    );
  const V = f.off + z.d - 0.01,
    D = { y0: 0.66, y1: 1.26 };
  (c.box(e, z.w, D.y0 - z.y0, 0.022, [0, (z.y0 + D.y0) / 2, V], { r: 0.004 }),
    c.box(e, z.w, z.y1 - D.y1, 0.022, [0, (D.y1 + z.y1) / 2, V], { r: 0.004 }));
  for (const t of [-1, 1])
    c.box(
      e,
      z.w / 2 - 0.1,
      D.y1 - D.y0,
      0.022,
      [t * (0.1 + (z.w / 2 - 0.1) / 2), (D.y0 + D.y1) / 2, V],
      { r: 0.004, grain: "y" },
    );
  (c.box(y, 0.008, 0.03, 0.01, [0.13, 0.96, V + 0.014], { r: 0.002 }),
    c.add(new u0(0.2, 0.6), T0(12108992, 0.14, { name: "clock_glass" }), {
      m: g([0, (D.y0 + D.y1) / 2, V + 0.002]),
      uv: "keep",
    }));
  const I = { y0: 1.43, y1: 2.02, w: 0.46, d: 0.27 };
  (c.box(e, 0.5, 0.045, 0.3, [0, I.y0 + 0.0225, L(0.3)], { r: 0.008 }),
    c.box(
      e,
      I.w,
      I.y1 - I.y0 - 0.045,
      I.d - 0.03,
      [0, (I.y0 + 0.045 + I.y1) / 2, L(I.d - 0.03)],
      { r: 0.006 },
    ));
  const U = 0.3,
    w = I.y0 + 0.08,
    A = 0.3,
    q = 0.15,
    r0 = [];
  r0.push([-U / 2 + 0.012, 0.012], [U / 2 - 0.012, 0.012]);
  for (let t = 0; t <= 16; t++) {
    const d = (t / 16) * Math.PI;
    r0.push([Math.cos(d) * (q - 0.012), A + Math.sin(d) * (q - 0.012)]);
  }
  const o0 = M0(
    [
      [-0.46 / 2, -0.03],
      [I.w / 2, -0.03],
      [I.w / 2, A + q + 0.05],
      [-0.46 / 2, A + q + 0.05],
    ],
    [r0.reverse()],
  );
  c.add(g0(o0, 0.02, 0.003, { seg: 2, curveSegments: 16 }), e, {
    m: g([0, w, f.off + I.d - 0.008]),
    uv: "world",
  });
  const s0 = new ct();
  (s0.moveTo(-U / 2, 0),
    s0.lineTo(U / 2, 0),
    s0.lineTo(U / 2, A),
    s0.absarc(0, A, U / 2, 0, Math.PI, !1),
    s0.lineTo(-U / 2, 0));
  const F0 = new E0(s0, 24);
  {
    const t = F0.attributes.uv,
      d = F0.attributes.position;
    for (let F = 0; F < t.count; F++)
      t.setXY(F, (d.getX(F) + U / 2) / U, d.getY(F) / (A + q));
  }
  (c.add(F0, r("hall_clockface"), {
    m: g([0, w, f.off + I.d - 0.027]),
    uv: "keep",
  }),
    c.add(new E0(s0, 24), T0(12635336, 0.1, { name: "clock_glass2" }), {
      m: g([0, w, f.off + I.d - 5e-4]),
      uv: "keep",
    }));
  for (const t of [-1, 1])
    c.add(
      H(
        [
          [0, 0],
          [0.018, 0],
          [0.018, 0.02],
          [0.012, 0.03],
          [0.011, 0.44],
          [0.016, 0.45],
          [0.016, 0.47],
          [0, 0.47],
        ],
        14,
      ),
      y,
      {
        m: g([t * (I.w / 2 - 0.02), I.y0 + 0.045, f.off + I.d - 0.005]),
        uv: "keep",
      },
    );
  c.box(e, 0.5, 0.04, 0.29, [0, I.y1 + 0.02, L(0.29)], { r: 0.008 });
  for (const t of [-1, 1]) {
    const d = new a0([
      P(t * 0.24, I.y1 + 0.04, 0),
      P(t * 0.17, I.y1 + 0.1, 0),
      P(t * 0.08, I.y1 + 0.16, 0),
      P(t * 0.055, I.y1 + 0.14, 0),
    ]);
    for (const F of [f.off + 0.03, f.off + 0.25])
      c.add(
        S0(d, (T) => 0.022 - T * 0.008, 16, 8),
        e,
        { m: g([0, 0, F]), uv: "world" },
      );
    c.add(
      g0(
        M0([
          [t * 0.245, I.y1 + 0.04],
          [t * 0.06, I.y1 + 0.04],
          [t * 0.06, I.y1 + 0.13],
          [t * 0.15, I.y1 + 0.11],
        ]),
        0.22,
        0.003,
      ),
      e,
      { m: g([0, 0, f.off + 0.15]), uv: "world" },
    );
  }
  for (const [t, d] of [
    [-0.23, 0.8],
    [0, 1],
    [0.23, 0.8],
  ])
    c.add(
      H(
        [
          [0, 0],
          [0.018, 0],
          [0.012, 0.012],
          [0.02, 0.03],
          [0.022, 0.045],
          [0.012, 0.062],
          [0.004, 0.09],
          [0, 0.1],
        ],
        14,
      ),
      y,
      {
        m: g([t, I.y1 + (t === 0 ? 0.13 : 0.04), f.off + 0.15], [0, 0, 0], d),
        uv: "keep",
      },
    );
  for (const t of [-1, 1])
    (c.add(
      H(
        [
          [0, 0],
          [0.026, 0],
          [0.028, 0.006],
          [0.028, 0.19],
          [0.022, 0.2],
          [0.004, 0.205],
          [0, 0.205],
        ],
        20,
      ),
      y,
      { m: g([t * 0.085, 1.02 + (t > 0 ? 0.07 : 0), f.off + 0.1]), uv: "keep" },
    ),
      c.add(new c0(0.0012, 0.0012, 0.3, 4), r("iron_black"), {
        m: g([t * 0.085, 1.37 + (t > 0 ? 0.035 : 0), f.off + 0.1]),
        uv: "keep",
        shadow: !1,
      }));
  (c.pop(), c.flush(a));
  const V0 = E,
    i0 = new Q();
  ((i0.name = "pendulum"),
    i0.position.set(0, 1.5, f.off + 0.14).applyMatrix4(V0),
    (i0.rotation.y = -Math.PI / 2),
    a.add(i0));
  {
    const t = new n0("pendulum");
    (t.add(new c0(0.0022, 0.0022, 0.66, 6), y, {
      m: g([0, -0.33, 0]),
      uv: "keep",
    }),
      t.add(
        H(
          [
            [0, -0.009],
            [0.05, -0.006],
            [0.068, -0.002],
            [0.07, 0],
            [0.068, 0.002],
            [0.05, 0.006],
            [0, 0.009],
          ],
          32,
        ),
        r("brass_aged", { rough: 0.22 }),
        { m: g([0, -0.67, 0], [Math.PI / 2, 0, 0]), uv: "keep" },
      ),
      t.flush(i0));
  }
  const Y0 = [],
    H0 = r("iron_black", { color: "#1a2233", rough: 0.35 }),
    q0 = P(0, w + A / 2, f.off + I.d - 0.024).applyMatrix4(V0);
  for (const [t, d] of [
    [0.105, 0.007],
    [0.075, 0.011],
  ]) {
    const F = new Q();
    (F.position.copy(q0), (F.rotation.y = -Math.PI / 2), a.add(F));
    const T = new Q();
    F.add(T);
    const R = M0([
        [-d * 0.4, -0.018],
        [d * 0.4, -0.018],
        [d * 0.5, 0],
        [d, t * 0.55],
        [d * 0.35, t * 0.7],
        [d * 0.2, t],
        [-d * 0.2, t],
        [-d * 0.35, t * 0.7],
        [-d, t * 0.55],
        [-d * 0.5, 0],
      ]),
      J = new p0(g0(R, 0.0015, 4e-4, { seg: 1 }), H0);
    ((J.castShadow = !0), T.add(J), Y0.push(T));
  }
  const t0 = {
    group: a,
    pendulum: i0,
    running: !1,
    time: 3 + 7 / 60,
    amp: 0,
    set(t, d = 0) {
      ((t0.time = t + d / 60), N0());
    },
    start() {
      t0.running = !0;
    },
    stop() {
      t0.running = !1;
    },
    update(t, d) {
      (t0.running
        ? ((t0.amp += (0.07 - t0.amp) * Math.min(1, t * 0.8)),
          (t0.time += t / 3600),
          N0())
        : (t0.amp *= Math.max(0, 1 - t * 0.6)),
        (i0.rotation.z = t0.amp * Math.sin((d * Math.PI * 2) / 1.68)));
    },
  };
  function N0() {
    const t = t0.time % 12,
      d = (t0.time * 60) % 60;
    ((Y0[0].rotation.z = -(d / 60) * Math.PI * 2),
      (Y0[1].rotation.z = -(t / 12) * Math.PI * 2));
  }
  (N0(),
    Y.push({
      x0: 6.8 - f.off - 0.31,
      x1: 6.8,
      z0: f.z - 0.27,
      z1: f.z + 0.27,
      y0: 0,
      y1: 2.2,
    }));
  {
    s.add(new c0(0.008, 0.008, 1.16, 12), y, {
      m: g([6.1, 2.52, 0.11], [0, 0, Math.PI / 2]),
      uv: "keep",
    });
    for (const W of [-1, 1])
      (s.add(new G0(0.018, 14, 10), y, {
        m: g([6.1 + W * 0.59, 2.52, 0.11]),
        uv: "keep",
      }),
        s.box(y, 0.012, 0.012, 0.11, [6.1 + W * 0.5, 2.52, 0.11 / 2], {
          r: 0.003,
        }));
    const F = 48,
      T = 18,
      R = 5.58,
      J = 6.22,
      X = 0.955,
      Z = 2.52 - 0.03,
      O = new u0(1, 1, F, T),
      $ = O.attributes.position;
    for (let W = 0; W < $.count; W++) {
      const K = $.getX(W) + 0.5,
        e0 = $.getY(W) + 0.5,
        y0 = R + (J - R) * K,
        h0 = X + (Z - X) * e0,
        L0 =
          Math.sin(K * Math.PI * 2 * 7.5) * (0.018 + 0.014 * e0) +
          Math.sin(K * Math.PI * 2 * 2.3 + 1) * 0.008,
        m0 = (1 - e0) * (1 - e0) * 0.02 * Math.sin(K * 5);
      $.setXYZ(
        W,
        y0 + (1 - e0) * 0.02 * Math.sin(K * 9),
        h0 + (e0 < 0.02 ? Math.sin(K * 31) * 0.004 : 0),
        0.11 + L0 + m0,
      );
    }
    O.computeVertexNormals();
    const j = r("linen_stained", {
      side: f0,
      extra: { transparent: !0, opacity: 0.74, depthWrite: !1 },
    });
    s.add(O, j, { uv: "world", shadow: !1 });
    for (let W = 0; W < 9; W++)
      s.add(new A0(0.014, 0.0022, 6, 14), y, {
        m: g(
          [R + 0.02 + (W * (J - R - 0.04)) / 8, 2.52 - 0.006, 0.11],
          [0, Math.PI / 2, 0],
        ),
        uv: "keep",
      });
  }
  return (
    s.flush(v),
    {
      group: v,
      colliders: Y,
      phone: n,
      clock: t0,
      anims: [
        (t, d) => {
          (n.update(t, d), t0.update(t, d));
        },
      ],
    }
  );
}
const d0 = { x0: 5.7, x1: 6.5, z0: 1.35, z1: 12.85, t: 0.008 },
  P0 = { z: 6.95, skew: 0.2, h: 0.06, w: 0.08 };
function I0(b, C) {
  const r = d0;
  if (b < r.x0 || b > r.x1 || C < r.z0 || C > r.z1) return 0;
  const x = (b - r.x0) / (r.x1 - r.x0),
    e = P0.z + P0.skew * (b - 6.1),
    y =
      P0.h *
      Math.exp(-(((C - e) / P0.w) ** 2)) *
      (0.75 + 0.25 * Math.sin(x * Math.PI)),
    o =
      0.012 *
      Math.exp(-(((C - e - 0.28) / 0.09) ** 2)) *
      (1 - Math.abs(x - 0.4)),
    p = 0.0035 * (Math.exp(-x / 0.04) + Math.exp(-(1 - x) / 0.04)),
    v = 0.0015 * Math.sin(C * 3.1 + x * 2) * Math.sin(C * 0.9);
  return r.t + y + o + p + v;
}
function mt(b, C) {
  const r = (o, p) => b.mats.get(o, p),
    x = b.rng(90210),
    e = new Q();
  ((e.name = "hallFloor"), C.add(e));
  const y = new n0("hallFloor");
  {
    const o = d0,
      p = 10,
      v = 0.03,
      s = Math.round((o.z1 - o.z0) / v),
      Y = [],
      m = [],
      M = [];
    for (let k = 0; k <= s; k++)
      for (let h = 0; h <= p; h++) {
        const n = o.x0 + (o.x1 - o.x0) * (h / p),
          a = o.z0 + (o.z1 - o.z0) * (k / s);
        (Y.push(
          n,
          I0(
            Math.min(Math.max(n, o.x0 + 1e-5), o.x1 - 1e-5),
            Math.min(Math.max(a, o.z0 + 1e-5), o.z1 - 1e-5),
          ),
          a,
        ),
          m.push(n - o.x0, -a));
      }
    for (let k = 0; k < s; k++)
      for (let h = 0; h < p; h++) {
        const n = k * (p + 1) + h,
          a = n + p + 1;
        M.push(n, a, n + 1, n + 1, a, a + 1);
      }
    const i = new b0();
    (i.setAttribute("position", new l0(Y, 3)),
      i.setAttribute("uv", new l0(m, 2)),
      i.setIndex(M),
      i.computeVertexNormals());
    const u = r("rug_runner");
    y.add(i, u, { uv: "keep" });
    const B = [],
      _ = (k, h, n, a, c) => {
        for (let f = 0; f < c; f++) {
          const E = f / c,
            S = (f + 1) / c,
            L = k + (n - k) * E,
            z = h + (a - h) * E,
            V = k + (n - k) * S,
            D = h + (a - h) * S,
            I = I0(
              L + (k === n ? (k < 6 ? 1e-5 : -1e-5) : 0),
              z + (h === a ? (h < 6 ? 1e-5 : -1e-5) : 0),
            ),
            U = I0(
              V + (k === n ? (k < 6 ? 1e-5 : -1e-5) : 0),
              D + (h === a ? (h < 6 ? 1e-5 : -1e-5) : 0),
            );
          B.push(L, 5e-4, z, V, 5e-4, D, V, U, D, L, 5e-4, z, V, U, D, L, I, z);
        }
      };
    (_(o.x0, o.z0, o.x0, o.z1, s),
      _(o.x1, o.z1, o.x1, o.z0, s),
      _(o.x1, o.z0, o.x0, o.z0, p),
      _(o.x0, o.z1, o.x1, o.z1, p));
    const l = new b0();
    (l.setAttribute("position", new l0(B, 3)),
      l.computeVertexNormals(),
      y.add(l, r("rug_runner", { color: "#8a7a70" }), { uv: "world" }));
    const N = [];
    for (const [k, h] of [
      [o.z0, -1],
      [o.z1, 1],
    ])
      for (let a = 0; a < 64; a++) {
        const c =
            o.x0 +
            0.012 +
            (o.x1 - o.x0 - 0.024) * (a / 63) +
            (x() - 0.5) * 0.004,
          f = 0.05 + x() * 0.03,
          E = (x() - 0.5) * 0.35,
          S = 0.0034,
          L = c + Math.sin(E) * f,
          z = k + h * Math.cos(E) * f,
          V = o.t * 0.5,
          D = 0.0012 + x() * 0.002,
          I = (-Math.cos(E) * S) / 2,
          U = ((Math.sin(E) * S) / 2) * h,
          w = [c - S / 2, V, k],
          A = [c + S / 2, V, k],
          q = [L + I * -1, D, z + U],
          r0 = [L - I * -1, D, z - U];
        h > 0
          ? N.push(...w, ...q, ...A, ...A, ...q, ...r0)
          : N.push(...w, ...A, ...q, ...A, ...r0, ...q);
      }
    const G = new b0();
    (G.setAttribute("position", new l0(N, 3)),
      G.computeVertexNormals(),
      y.add(G, r("linen_stained", { color: "#b8a888", side: f0 }), {
        uv: "world",
        shadow: !1,
      }));
  }
  {
    const o = new a0([
        P(5.25, 0, 10.2),
        P(5.72, 0, 10.42),
        P(6.02, 0, 10.95),
        P(6.12, 0, 11.75),
        P(6.1, 0, 12.6),
        P(6.06, 0, 13.55),
      ]),
      p = o.getLength(),
      v = [],
      s = [],
      Y = [],
      m = [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ];
    let M = 0.34,
      i = 0;
    for (; M < p - 0.05;) {
      const l = M / p,
        N = o.getPointAt(l),
        G = o.getTangentAt(l),
        k = i % 2 === 0,
        h = P(G.z, 0, -G.x);
      let n = N.x + h.x * (k ? 0.085 : -0.085),
        a = N.z + h.z * (k ? 0.085 : -0.085);
      for (const o0 of [d0.x0, d0.x1])
        Math.abs(n - o0) < 0.07 && (n = o0 + (n >= o0 ? 0.072 : -0.072));
      n < 5.47 && (n = 5.47);
      const c = n > d0.x0 && n < d0.x1 && a > d0.z0 && a < d0.z1,
        f = (c ? I0(n, a) : 0) + 0.0016,
        E = Math.atan2(G.x, G.z) + (k ? 0.12 : -0.12) + (x() - 0.5) * 0.1,
        S = Math.max(0.3, 1 - i * 0.085) * (c ? 0.92 : 1),
        L = i < 3 ? m[k ? 0 : 1] : i % 3 === 2 ? m[3] : k ? m[2] : m[1],
        z = 0.15,
        V = 0.15,
        D = Math.cos(E),
        I = Math.sin(E),
        U = (o0, s0) => [
          n + o0 * z * D + s0 * V * I,
          f,
          a - o0 * z * I + s0 * V * D,
        ],
        [w, A] = [L[0] * 0.5, 1 - (L[1] + 1) * 0.5],
        q = [U(1, -1), U(-1, -1), U(-1, 1), U(1, 1)],
        r0 = [
          [w, A],
          [w + 0.5, A],
          [w + 0.5, A + 0.5],
          [w, A + 0.5],
        ];
      for (const o0 of [0, 1, 2, 0, 2, 3])
        (v.push(...q[o0]), s.push(...r0[o0]), Y.push(1, 1, 1, S));
      ((M += 0.315 + (x() - 0.5) * 0.03), i++);
    }
    const u = new b0();
    (u.setAttribute("position", new l0(v, 3)),
      u.setAttribute("uv", new l0(s, 2)),
      u.setAttribute("color", new l0(Y, 4)),
      u.computeVertexNormals());
    const B = r("hall_footprints", {
        color: "#553b3b",
        extra: {
          transparent: !0,
          depthWrite: !1,
          vertexColors: !0,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -4,
        },
      }),
      _ = new p0(u, B);
    ((_.name = "footprints"),
      (_.receiveShadow = !0),
      (_.renderOrder = 1),
      e.add(_));
  }
  {
    const o = r("leather_brown", { color: "#5a4038" }),
      p = r("leather_brown", { color: "#2a1a14" }),
      v = 18,
      s = 22,
      Y = 0.235,
      m = (n) =>
        0.012 +
        0.032 *
          Math.sin(Math.PI * Math.min(1, n * 1.25)) *
          (n > 0.75 ? 1 - (n - 0.75) * 1.4 : 1),
      M = (n) => (n < 0.55 ? 0 : 0.034 * Math.pow((n - 0.55) / 0.45, 1.3)),
      i = (n) =>
        n < 0.18
          ? 0.012 + n * 0.12
          : n < 0.42
            ? 0.034 + (n - 0.18) * 0.1
            : 0.058 - (n - 0.42) * 0.03,
      u = (n, a, c = 1) => {
        const f = Y / 2 - n * Y,
          E = Math.max(0.006, m(n)),
          S = Math.max(0.008, i(n)),
          L = M(n),
          z = Math.cos(a),
          V = Math.sin(a),
          D = L + S * 0.45,
          I = V < 0 ? L + S * 0.45 * (1 + V) : L + S * 0.45 + S * 0.55 * V;
        return P(f, D + (I - D) * c, z * E * c);
      },
      B = [];
    for (let n = 0; n <= s; n++) {
      const a = [];
      for (let c = 0; c < v; c++) a.push(u(n / s, (c / v) * Math.PI * 2));
      B.push(a);
    }
    const _ = [],
      l = 10,
      N = 8;
    for (let n = 0; n <= l; n++) {
      const a = 0.46 + (n / l) * 0.46,
        c = [];
      for (let f = 0; f <= N; f++)
        c.push(u(a, Math.PI / 2 - 0.85 + (f / N) * 1.7, 1.015));
      _.push(c);
    }
    const G = [];
    for (let n = 0; n < l; n++)
      for (let a = 0; a < N; a++) {
        const c = _[n][a],
          f = _[n][a + 1],
          E = _[n + 1][a + 1],
          S = _[n + 1][a];
        G.push(
          ...c.toArray(),
          ...S.toArray(),
          ...f.toArray(),
          ...f.toArray(),
          ...S.toArray(),
          ...E.toArray(),
        );
      }
    const k = new b0();
    (k.setAttribute("position", new l0(G, 3)), k.computeVertexNormals());
    const h = new n0("shoe");
    (h.at([6.72, 0.045, 12.3], [Math.PI / 2 - 0.06, -1.52, 0, "YXZ"], () => {
      (h.add(U0(B, { capStart: !0, capEnd: !0 }), o, { uv: "keep" }),
        h.add(k, r("leather_brown", { color: "#140d0b", side: f0 }), {
          uv: "keep",
        }),
        h.box(p, 0.04, 0.036, 0.042, [-0.095, 0.017, 0], { r: 0.004 }));
    }),
      h.flush(e));
  }
  {
    const o = r("wool_grey", { color: "#8e8880" }),
      p = [
        [5.47, 0.35],
        [5.46, 2.3],
        [6.74, 0.3],
        [6.73, 2.1],
        [6.74, 2.55],
        [5.46, 5.3],
        [6.73, 9.6],
        [5.47, 12.95],
        [6.74, 13.1],
        [5.8, 0.08],
        [5.65, 1.7],
      ];
    for (const [v, s] of p) {
      const Y = new lt(1, 1),
        m = Y.attributes.position;
      for (let i = 0; i < m.count; i++) {
        const u =
          0.7 +
          0.5 *
            Math.sin(m.getX(i) * 7 + v * 13) *
            Math.cos(m.getZ(i) * 5 + s * 7);
        m.setXYZ(i, m.getX(i) * u, m.getY(i) * u, m.getZ(i) * u);
      }
      Y.computeVertexNormals();
      const M = 0.012 + x() * 0.02;
      y.add(Y, o, {
        m: g(
          [v, M * 0.3, s],
          [0, x() * 3, 0],
          [M, M * 0.45, M * (0.8 + x() * 0.6)],
        ),
        uv: "world",
        shadow: !1,
      });
    }
  }
  return (y.flush(e), { group: e });
}
async function xt(b) {
  const { game: C, shell: r } = b,
    x = (h, n) => b.mats.get(h, n),
    e = new Q();
  ((e.name = "hall"), b.scene.add(e));
  const y = b.rng(1313),
    o = [],
    p = [],
    v = Q0(b, e),
    s = it(b, e, { x: 6.1, z: 8 }),
    Y = ut(b, e),
    m = ft(b, e);
  (mt(b, e), p.push(...m.colliders));
  const M = r?.doors?.D3;
  if (M) {
    const h = new Q();
    ((h.name = "d3_decor"), M.group.add(h));
    const n = new n0("d3");
    n.box(
      x("brass_aged", { rough: 0.3 }),
      0.003,
      0.28,
      0.07,
      [0.0245, 1.33, 0.795],
      { r: 0.0012, grain: null },
    );
    const a = new u0(0.21, 0.28, 6, 8);
    {
      const f = tt(2, 2, "P"),
        E = a.attributes.position,
        S = a.attributes.uv;
      for (let L = 0; L < E.count; L++) {
        const z = S.getX(L),
          V = S.getY(L);
        (E.setZ(
          L,
          0.0035 * Math.sin(Math.PI * z) * Math.sin(Math.PI * V) +
            0.002 * (1 - V) * z,
        ),
          S.setXY(L, f[0] + z * (f[2] - f[0]), f[1] + V * (f[3] - f[1])));
      }
      a.computeVertexNormals();
    }
    n.add(a, x("hall_photos"), {
      m: g([0.0343, 1.5, 0.44], [0, Math.PI / 2, 0.055]),
      uv: "keep",
      shadow: !1,
    });
    const c = x("paper_old", {
      color: "#e6d49a",
      extra: { transparent: !0, opacity: 0.78 },
    });
    for (const [f, E, S] of [
      [-0.092, 0.132, 0.7],
      [0.1, 0.128, -0.55],
      [0.004, -0.14, 0.1],
    ])
      n.add(new u0(0.052, 0.018), c, {
        m: g([0.0356, 1.5 + E, 0.44 + f], [0, Math.PI / 2, S]),
        uv: "keep",
        shadow: !1,
      });
    n.flush(h);
  }
  const i = new x0(260, 9);
  let u = 0,
    B = 1,
    _ = 0,
    l = !1;
  const N = (h = 1, n = 1.2) => {
    ((u = n), (B = h), (_ = 0), (l = !0));
  };
  ((N.stop = () => {
    u = 0;
  }),
    o.push((h) => {
      if (!M || !l) return;
      u > 0 &&
        ((u -= h),
        (_ -= h),
        _ <= 0 &&
          (i.kick((y() < 0.5 ? -1 : 1) * (0.035 + y() * 0.05) * B),
          (_ = 0.04 + y() * 0.16)));
      const n = Math.max(-0.012, Math.min(0.012, i.update(h)));
      ((M.group.rotation.y = (M.alongX ? -1 : 1) * M.dir * M.angle + n),
        u <= 0 &&
          Math.abs(n) < 1e-5 &&
          Math.abs(i.v) < 1e-4 &&
          ((l = !1),
          (M.group.rotation.y = (M.alongX ? -1 : 1) * M.dir * M.angle)));
    }));
  const G = new B0(10138879, 0.7, 5, 2);
  ((G.name = "hallArchSpill"),
    G.position.set(6.1, 2.2, 13.15),
    e.add(G),
    o.push((h, n) => {
      (s.update(h), Y.update(h), v.update(h));
      for (const a of m.anims) a(h, n);
    }));
  const k = r?.doors || {};
  return (
    z0(C, "halls:open", () => {
      (k.D1?.open(1, !0), k.D4?.open(1, !0));
    }),
    z0(C, "halls:d4open", () => {
      k.D4?.open(1, !0);
    }),
    z0(C, "halls:closed", () => {
      (k.D1?.open(0, !0), k.D4?.open(0, !0));
    }),
    z0(C, "halls:dark", () => {
      s.setOn(!1);
    }),
    {
      group: e,
      colliders: p,
      anim: o,
      points: {
        hallNorth: [6.1, 0, 2.3],
        d3Front: [6.1, 0, 9.9],
        hallMid: [6.1, 0, 8],
        archMouth: [6.1, 0, 13.2],
      },
      props: {
        ceilingLight: s,
        scratch3: N,
        clock: m.clock,
        phone: m.phone,
        photos: v,
        sconces: Y,
      },
      lights: { ceiling: s.light, archSpill: G, sconces: Y.lights },
      interact: [],
    }
  );
}
export { xt as build };
