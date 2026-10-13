// assets__hall-C7P9MLkg 01 — math
// Lines 1-289 of readable/assets__hall-C7P9MLkg.pretty.js (statement-aligned).
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
