// assets__metro-xgLUk92P 20 — mezz
// Lines 7931-8274 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function _a(c, a, o, s) {
  const { B: f, M: h } = c,
    d = u0,
    l = { chunk: s };
  (f.add(
    T(a - 1, d + 0.42, o, a + 1, d + 0.45, o + 0.42, 0.01),
    h.stainless,
    l,
  ),
    f.add(
      T(
        a - 1,
        d + 0.45,
        o - 0.02,
        a + 1,
        d + 0.85,
        o + 0.01,
        0.01,
      ).applyMatrix4(new rt().makeTranslation(0, 0, 0)),
      h.stainless,
      l,
    ));
  for (const i of [-0.85, 0.85])
    f.add(
      T(a + i - 0.03, d, o + 0.05, a + i + 0.03, d + 0.42, o + 0.37, 0.01),
      h.panelDark,
      l,
    );
  return [
    { x0: a - 1, x1: a + 1, z0: o - 0.05, z1: o + 0.45, y0: d, y1: d + 0.9 },
  ];
}
const b0 = (c, a, o, s, f, h) => c >= o && c <= s && a >= f && a <= h,
  Yt = [m.stopX - Kt.cars * Kt.carLen, m.stopX],
  to = P.bufferX - P.stopGap,
  Vt = [to - Kt.cars * Kt.carLen, to],
  Et = Kt.width / 2;
function Ie(c, a, o, s, f) {
  const h = (o - 1) * f;
  return c <= 0
    ? 0
    : c < h
      ? (c / h) * o * a
      : c < h + s
        ? o * a
        : c < 2 * h + s
          ? o * a + ((c - h - s) / h) * o * a
          : 2 * o * a;
}
const eo = (c) =>
    u0 + Ie(c - c0.x0, c0.rise, 13, c0.landing[1] - c0.landing[0], c0.tread),
  oo = (c) =>
    u0 +
    Ie(
      P.stair.zBot - c,
      P.stair.rise,
      P.stair.flights,
      P.stair.landing,
      P.stair.tread,
    ),
  ao = (c) =>
    P.mezz.y +
    Ie(
      P.exit.zBot - c,
      P.exit.rise,
      P.exit.flights,
      P.exit.landing,
      P.exit.tread,
    ),
  fe = P.stair.zTop,
  Qt = P.stair.zBot,
  no = 1.1,
  wa = (c) => {
    const a = Qt - fe - 2 * no,
      o = Qt - no - c;
    return u0 + Math.max(0, Math.min(1, o / a)) * (P.mezz.y - u0);
  };
function Pa() {
  function c(l, i, t = 0) {
    if (t < -2.5) {
      if (b0(l, i, _0.x0 - _0.wall, _0.x1 + _0.wall, _0.z0 - _0.wall, _0.z1))
        return "shaft";
      if (b0(l, i, dt.x0 - 0.25, dt.x1 + 0.25, _0.z1, m.zN)) return "passage";
      if (
        b0(l, i, m.x0, c0.hall.x1 + 0.5, m.zN - 0.3, m.zS + 0.3) ||
        b0(l, i, m.x1, c0.hall.x1 + 0.5, c0.hall.z0 - 0.3, c0.hall.z1 + 0.3)
      )
        return l > m.x1 &&
          i > c0.z1 + 0.2 &&
          !(i > Lt.z0 - 0.2 && l < Lt.x0 + 5.2)
          ? "tunnel"
          : "ashwood";
    }
    if (
      b0(
        l,
        i,
        P.exit.x0 - 0.5,
        P.exit.x1 + 0.5,
        lt[2] - 0.5,
        P.exit.zBot + 0.1,
      ) &&
      t < 2 &&
      t > P.mezz.y - 1.5
    )
      return "stairs";
    if (t < -1) {
      if (
        b0(l, i, P.mezz.x0 - 0.3, P.mezz.x1 + 0.3, P.mezz.z0, P.mezz.z1) &&
        t > P.mezz.y - 2
      )
        return "concourse";
      if (b0(l, i, P.hallX0, P.hallX1, P.hallZ0, P.hallZ1 + 0.3))
        return "parkgate";
      if (
        t < -3 &&
        l > et.x0 - 5 &&
        l < P.hallX0 + 1 &&
        Math.abs(i - (l < W0.x0 ? ct + 2 : pt(l))) < 6
      )
        return "tunnel";
    }
    return null;
  }
  function a(l, i, t = 0) {
    if (t < -2.5) {
      if (
        b0(l, i, _0.x0, _0.x1, _0.z0, _0.z1 + _0.wall) ||
        b0(l, i, dt.x0, dt.x1, dt.z0, m.zN)
      )
        return u0;
      if (b0(l, i, c0.x0, c0.topX, c0.z0, c0.z1)) return eo(l);
      if (b0(l, i, c0.topX, c0.hall.x1, c0.hall.z0, c0.hall.z1)) return c0.topY;
      if (b0(l, i, m.x0, m.x1, m.zN, m.zS))
        return i <= m.edgeN ||
          i >= m.edgeS ||
          (i <= ct + Et && l >= Yt[0] && l <= Yt[1])
          ? u0
          : q;
      if (
        l > et.x0 &&
        l < P.hallX0 &&
        i > d0.z0 - 1 &&
        i < Math.max(d0.z1, pt(l) + 3)
      )
        return q;
    }
    if (t < 2 && b0(l, i, P.exit.x0, P.exit.x1, lt[2], P.exit.zBot))
      return ao(i);
    if (t < 1.5 && b0(l, i, P.exit.x0, P.exit.x1, lt[2] - 1.2, lt[2])) return 0;
    if (t < -1) {
      if (
        b0(l, i, P.mezz.x0, P.mezz.x1, P.mezz.z0, P.mezz.z1) &&
        t > P.mezz.y - 2.2
      )
        return P.mezz.y;
      if (b0(l, i, P.stair.x0, P.stair.x1, P.stair.zTop, P.stair.zBot))
        return oo(i);
      for (const e of P.esc) if (b0(l, i, e.x0, e.x1, fe, Qt)) return wa(i);
      if (b0(l, i, P.hallX0, P.hallX1, P.hallZ0, P.hallZ1))
        return i <= P.edge || (i <= P.track + Et && l >= Vt[0] && l <= Vt[1])
          ? u0
          : q;
    }
    return null;
  }
  function o(l, i, t = 0) {
    const e = c(l, i, t);
    if (!e) return null;
    if (e === "shaft") return t > u0 + 0.3 ? "metal" : "concrete";
    if (e === "passage" || e === "tunnel") return "concrete";
    if (e === "ashwood")
      return b0(l, i, c0.x0, c0.hall.x1, c0.hall.z0, c0.hall.z1)
        ? "concrete"
        : i > m.edgeN && i < m.edgeS
          ? i <= ct + Et
            ? "metal"
            : "concrete"
          : "tile";
    if (e === "parkgate") {
      for (const n of P.esc) if (b0(l, i, n.x0, n.x1, fe, Qt)) return "metal";
      return i > P.edge ? "metal" : "tile";
    }
    return "tile";
  }
  const s = (l, i) =>
      b0(l, i, _0.x0, _0.x1, _0.z0, _0.z1) ||
      b0(l, i, _0.door.x0, _0.door.x1, _0.z1, _0.z1 + _0.wall) ||
      b0(l, i, dt.x0, dt.x1, dt.z0, dt.z1) ||
      b0(l, i, y0.x0, y0.x1, dt.z1, m.zN) ||
      b0(l, i, m.x0, m.x1, m.zN, m.edgeN) ||
      b0(l, i, m.x0, m.x1, m.edgeS, m.zS) ||
      b0(l, i, Yt[0], Yt[1], m.edgeN, ct + Et) ||
      b0(l, i, c0.x0, c0.topX, c0.z0, c0.z1) ||
      b0(l, i, c0.topX, c0.hall.x1, c0.hall.z0, c0.hall.z1),
    f = (l, i) => P.esc.some((t) => b0(l, i, t.x0 - 0.35, t.x1 + 0.35, fe, Qt)),
    h = (l, i) =>
      (b0(l, i, P.platX0, P.platX1, P.hallZ0, P.edge) && !f(l, i)) ||
      b0(l, i, Vt[0], Vt[1], P.edge, P.track + Et) ||
      b0(l, i, P.mezz.x0, P.mezz.x1, P.mezz.z0, P.mezz.z1) ||
      b0(l, i, P.exit.x0, P.exit.x1, lt[2] - 1.2, P.exit.zBot),
    d = {
      ashwood: {
        x0: m.x0 - 0.5,
        x1: c0.hall.x1 + 0.5,
        z0: _0.z0 - 0.5,
        z1: m.zS + 0.5,
        cell: 0.15,
        inArea: s,
        floor: u0,
      },
      parkgate: {
        x0: P.platX0 - 0.5,
        x1: P.hallX1,
        z0: lt[2] - 1.5,
        z1: P.track + Et + 0.5,
        cell: 0.15,
        inArea: h,
        floor: u0,
      },
    };
  return {
    zoneAt: c,
    groundAt: a,
    surfaceAt: o,
    navPlans: d,
    ASH_SPAN: Yt,
    PG_SPAN: Vt,
    ashStairY: eo,
    pgStairY: oo,
    pgExitY: ao,
  };
}
const Nt = {
    envName: "under",
    key: [10335968, 0],
    fill: [5662346, 0],
    keyBox: 20,
  },
  Aa = {
    shaft: {
      ...Nt,
      post: {
        exposure: 1.08,
        bloom: 0.3,
        bloomThreshold: 1.1,
        vignette: 0.56,
        sat: 0.95,
        contrast: 1.08,
      },
      hemi: [2765366, 1183242, 0.16],
      env: 0.22,
      fog: [329223, 0.03],
    },
    passage: {
      ...Nt,
      post: {
        exposure: 1.05,
        bloom: 0.3,
        bloomThreshold: 1.1,
        vignette: 0.52,
        sat: 0.95,
        contrast: 1.08,
      },
      hemi: [3025444, 1183242, 0.18],
      env: 0.28,
      fog: [460810, 0.03],
    },
    ashwood: {
      ...Nt,
      post: {
        exposure: 0.98,
        bloom: 0.32,
        bloomThreshold: 1.05,
        vignette: 0.52,
        sat: 0.94,
        contrast: 1.12,
      },
      hemi: [3424830, 1315342, 0.22],
      env: 0.4,
      fog: [527115, 0.009],
    },
    tunnel: {
      ...Nt,
      post: {
        exposure: 1.05,
        bloom: 0.35,
        bloomThreshold: 1,
        vignette: 0.55,
        sat: 0.95,
        contrast: 1.1,
      },
      hemi: [2238506, 1051656, 0.12],
      env: 0.3,
      fog: [395015, 0.012],
    },
    parkgate: {
      ...Nt,
      post: {
        exposure: 1,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.5,
        sat: 0.92,
        contrast: 1.1,
      },
      hemi: [3424332, 1446930, 0.28],
      env: 0.5,
      fog: [658705, 0.014],
    },
    concourse: {
      ...Nt,
      post: {
        exposure: 1,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.48,
        sat: 0.92,
        contrast: 1.1,
      },
      hemi: [3687508, 1446936, 0.28],
      env: 0.45,
      fog: [790550, 0.015],
    },
    stairs: {
      envName: "sky",
      key: [10466004, 0.35],
      keyDir: [0.15, 0.85, -0.5],
      fill: [5925514, 0.06],
      fillDir: [-0.4, 0.5, 0.6],
      keyBox: 24,
      post: {
        exposure: 1,
        bloom: 0.28,
        bloomThreshold: 1.1,
        vignette: 0.45,
        sat: 0.92,
        contrast: 1.08,
      },
      hemi: [5267582, 1710102, 0.4],
      env: 0.45,
      fog: [1317928, 0.012],
    },
  };
