// assets/metro-xgLUk92P 01 — array
// Lines 1-300 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
import {
  M as so,
  ae as Ro,
  C as We,
  P as Do,
  n as Eo,
  V as ot,
  x as te,
  aC as No,
  m as Lo,
  f as lo,
  g as ro,
  N as Bo,
  aw as Oo,
  h as gt,
  c as bt,
  B as ue,
  ah as co,
  ak as io,
  b as D0,
  Q as fo,
  J as Ot,
  I as _t,
  K as Xo,
  E as Co,
  o as rt,
  aB as Zo,
  a9 as Wo,
  G as Jt,
  $ as U0,
  a0 as Ho,
  q as uo,
  d as ho,
  a5 as po,
  aa as xo,
  ag as mo,
  T as Fo,
} from "./index-DaQlAVPp.js";
import {
  A as ut,
  P as ve,
  R as V0,
  U as Go,
  E as lt,
  T as ct,
  a as he,
  b as Yo,
  c as Kt,
} from "./plan3-BlRgM2iV.js";
import { H as tt } from "./hatch-Vg74Rrkt.js";
import { R as Vo } from "./RoundedBoxGeometry-D0zz8qHa.js";
const u0 = Go,
  q = V0 - 0.3,
  Ut = tt.shaft,
  _0 = {
    x0: Ut.x0,
    x1: Ut.x1,
    z0: Ut.z0,
    z1: Ut.z1,
    cx: tt.x,
    cz: tt.z,
    wall: 0.25,
    top: -0.05,
    collarBot: -0.4,
    bottom: tt.bottom,
    open: 0.84,
    ladderZ: tt.ladderZ,
    railX: [tt.x - 0.22, tt.x + 0.22],
    rungTop: -0.25,
    rungBot: -8.85,
    railZ: tt.ladderZ + 0.015,
    postZ: tt.ladderZ + 0.025,
    postTop: 0.95,
    door: { x0: tt.x - 0.45, x1: tt.x + 0.45, y1: -6.95 },
  },
  dt = {
    x0: tt.x - 0.75,
    x1: tt.x + 0.75,
    z0: Ut.z1 + 0.25,
    z1: ut.north.z0 - 0.25,
    y0: u0,
    y1: u0 + 2.4,
  },
  y0 = {
    x0: ut.passageDoor[0] - 0.45,
    x1: ut.passageDoor[0] + 0.45,
    z: ut.north.z0,
    y1: u0 + 2.05,
  },
  m = {
    x0: ut.x0,
    x1: ut.x1,
    zN: ut.north.z0,
    zS: ut.south.z1,
    edgeN: ut.north.z1,
    edgeS: ut.south.z0,
    ceil: u0 + 4.2,
    colZ: (ct + he) / 2,
    cols: [-9, -3, 3, 9, 15, 21, 27, 33, 39, 45],
    girderBot: u0 + 3.5,
    beamBot: u0 + 3.75,
    stopX: ut.stopX,
  },
  d0 = { z0: ct - 2.5, z1: he + 2.5, roof: V0 + 4.9 },
  et = { x0: -262, x1: m.x0 },
  ht = { x0: m.x1, x1: 80, buffer2: 76.5 },
  c0 = {
    z0: m.zN,
    z1: m.zN + 3.6,
    x0: m.x1,
    rise: 0.17,
    tread: 0.3,
    landing: [m.x1 + 3.6, m.x1 + 3.6 + 1.6],
    topX: m.x1 + 3.6 + 1.6 + 3.6,
    topY: u0 + 26 * 0.17,
    hall: { x0: m.x1 + 8.8, x1: m.x1 + 17.5, z0: m.zN - 0.6, z1: m.zN + 4.6 },
    shutterX: m.x1 + 12.6,
  },
  Lt = { z0: m.zS - 3.6, z1: m.zS, x0: m.x1, gateX: m.x1 + 0.35 },
  W0 = { r: 2.5, cy: 1.8, x0: ht.x1, x1: 386 },
  qt = 234.5,
  P = {
    track: qt,
    edge: qt - Yo,
    bufferX: ve.bufferX,
    stopGap: ve.stopGap,
    hallZ0: 218.5,
    hallZ1: qt + 2.9,
    hallX0: 386,
    hallX1: 455,
    ceil: -1.2,
    platX0: 387.5,
    platX1: 453,
    mezz: { z0: 212.5, z1: 218.5, x0: 402, x1: 452, y: u0 + 4.5, ceil: -1.2 },
    gatesZ: 215.6,
    stair: {
      x0: 426.2,
      x1: 430.2,
      zTop: 218.5,
      zBot: 228.5,
      flights: 15,
      rise: 0.15,
      tread: 0.3,
      landing: 1.6,
    },
    esc: [
      { x0: 422.3, x1: 423.6 },
      { x0: 424.3, x1: 425.6 },
    ],
    exit: {
      x0: 428,
      x1: 432,
      zTop: lt[2],
      zBot: 212.5,
      flights: 15,
      rise: 0.15,
      tread: 0.3,
      landing: 1.1,
      openZ: 209,
    },
  },
  Me = m.x0 - 228,
  ke = 130,
  He = 290;
function pt(c) {
  if (c <= ke) return ct;
  if (c >= He) return qt;
  const a = (c - ke) / (He - ke);
  return ct + (qt - ct) * a * a * a * (a * (a * 6 - 15) + 10);
}
function Uo(c = 0.5) {
  const a = ve.bufferX,
    o = Math.ceil((a - Me) / 0.05),
    s = new Float64Array(o + 1),
    f = new Float64Array(o + 1);
  let h = 0;
  for (let u = 0; u <= o; u++) {
    const b = Me + (a - Me) * (u / o);
    if (((s[u] = b), u > 0)) {
      const M = b - s[u - 1],
        x = pt(b) - pt(s[u - 1]);
      h += Math.hypot(M, x);
    }
    f[u] = h;
  }
  const d = h,
    l = [],
    i = [],
    t = [];
  let e = 0;
  const n = Math.ceil(d / c);
  for (let u = 0; u <= n; u++) {
    const b = Math.min(d, u * (d / n));
    for (; e < o - 1 && f[e + 1] < b;) e++;
    const M = (b - f[e]) / Math.max(1e-9, f[e + 1] - f[e]),
      x = s[e] + (s[e + 1] - s[e]) * M;
    (l.push([+x.toFixed(4), V0, +pt(x).toFixed(4)]), i.push(b), t.push(x));
  }
  return {
    pts: l,
    s: i,
    xs: t,
    length: d,
    sAtX: (u) => {
      let b = 0,
        M = o;
      for (; M - b > 1;) {
        const w = (b + M) >> 1;
        s[w] < u ? (b = w) : (M = w);
      }
      const x = (u - s[b]) / (s[M] - s[b]);
      return f[b] + (f[M] - f[b]) * x;
    },
  };
}
function Fe(c, a = {}) {
  const o = pt(c),
    s = (pt(c + 0.05) - pt(c - 0.05)) / 0.1,
    f = Math.hypot(1, s);
  return (
    (a.x = c),
    (a.z = o),
    (a.tx = 1 / f),
    (a.tz = s / f),
    (a.nx = -s / f),
    (a.nz = 1 / f),
    a
  );
}
const H0 = 32,
  _e = 512,
  ee = () => new te(0, -200, 0, 0),
  we = Array.from({ length: H0 }, ee),
  zo = Array.from({ length: H0 }, ee),
  yo = Array.from({ length: H0 }, ee),
  go = Array.from({ length: H0 }, ee),
  bo = Array.from({ length: H0 }, ee),
  ie = Array.from({ length: H0 }, () => new te(0, -1, 0, 0)),
  de = Array.from({ length: 8 }, () => new te(0, 0, 0, 0)),
  Pe = new te(0, 0, 0, 0),
  Mo = Array.from({ length: _e / 4 }, () => new te(0, 0, 0, 0)),
  mt = {
    uVA: { value: we },
    uVB: { value: zo },
    uVC: { value: yo },
    uVZ0: { value: go },
    uVZ1: { value: bo },
    uVD: { value: ie },
    uMyPt: { value: de },
    uTorch: { value: Pe },
    uFX: { value: Mo },
    uMWet: { value: 1 },
  },
  It = No.lights_fragment_begin,
  qo = (() => {
    const c = It.indexOf(
        "#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )",
      ),
      a = It.indexOf("#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )"),
      o =
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );";
    if (c < 0 || a < 0) return It;
    const s = It.slice(c, a);
    if (!s.includes(o)) return It;
    const f = "getSpotLightInfo( spotLight, geometryPosition, directLight );",
      h = It.slice(a).replace(
        f,
        f +
          " { vec3 dt = uTorch.xyz - spotLight.position; if ( uTorch.w > 0.5 && dot( dt, dt ) < 2.5e-3 ) { float te = dot( directLight.color, vec3( 0.2126, 0.7152, 0.0722 ) ); directLight.color *= 70.0 / ( te + 70.0 ); } }",
      );
    return (
      It.slice(0, c) +
      s.replace(
        o,
        "{ bool mine = false; for ( int q = 0; q < 8; q ++ ) { vec3 dq = uMyPt[ q ].xyz - pointLight.position; if ( uMyPt[ q ].w > 0.5 && dot( dq, dq ) < 2.5e-3 ) mine = true; } if ( ! mine ) reflectedLight.directDiffuse += saturate( dot( geometryNormal, directLight.direction ) ) * directLight.color * BRDF_Lambert( material.diffuseContribution ); }",
      ) +
      h
    );
  })(),
  $o = `
uniform vec4 uVA[${H0}];
uniform vec4 uVB[${H0}];
uniform vec4 uVC[${H0}];
uniform vec4 uVZ0[${H0}];
uniform vec4 uVZ1[${H0}];
uniform vec4 uVD[${H0}];
uniform vec4 uMyPt[8];
uniform vec4 uTorch;
uniform float uMWet;
varying vec3 vMW;
#ifdef METRO_AH
varying float vAH;
#endif
float mHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float mNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = mHash(i), b = mHash(i + vec2(1.0, 0.0)), c = mHash(i + vec2(0.0, 1.0)), d = mHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
`;
