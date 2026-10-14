// assets/lab-n3Z2_Qkz 01 — mode
// Lines 1-347 of readable/assets/lab-n3Z2_Qkz.pretty.js (statement-aligned).
import { m as ue } from "./labkit-ElMHH8EU.js";
import { c as me } from "./index-TPd_HXBJ.js";
import { T as b, b as T, R as E, A as fe, U as g } from "./plan3-BlRgM2iV.js";
import {
  E as pe,
  G as de,
  M as Z,
  C as F,
  P as re,
  ah as ne,
  K as he,
  o as we,
  d as ge,
  c as J,
  a1 as se,
  $ as be,
  V as j,
  B as xe,
  h as N,
} from "./index-DaQlAVPp.js";
import "./looks-DR2oSjqf.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./kit-CFeM0oZ2.js";
const ye = {
    envName: "under",
    env: 0.22,
    hemi: [3029572, 1315344, 0.22],
    key: [10335968, 0],
    fill: [5662346, 0],
    fog: [461325, 0.014],
    post: {
      exposure: 1,
      bloom: 0.3,
      bloomThreshold: 1.15,
      vignette: 0.42,
      sat: 0.95,
      contrast: 1.06,
    },
  },
  U = -250,
  ee = 460,
  W = fe.stopX - U,
  B = Math.PI / 180,
  ie = 8.8;
function ce(i, s) {
  const e = s[0] - i[0],
    x = s[1] - i[1],
    a = s[2] - i[2];
  return [
    i[0],
    i[1],
    i[2],
    Math.atan2(-e, -a) / B,
    Math.atan2(x, Math.hypot(e, a)) / B,
  ];
}
async function buildTrainLab(i) {
  const { game: s } = i;
  await i.mats.ensure([
    "train_moquette",
    "train_floor",
    "concrete_grey",
    "sidewalk_tiles",
    "tactile_paving",
  ]);
  const e = { mode: "stand", t: 0, ride: null },
    x = new j(),
    a = new pe(0, 0, 0, "YXZ"),
    r = {
      platform: {
        cam: [20, g + 1.6, b - T - 2, 95, -2],
        fov: 62,
        mode: "arrive",
      },
      platformEnd: {
        cam: [44, g + 1.6, b - T - 1.2, 97, -3],
        fov: 55,
        mode: "arrive",
      },
      mouth: {
        cam: [-10.5, g + 1.6, b - T - 0.5, 90, -2],
        fov: 50,
        mode: "arrive",
        t: 3.5,
      },
      front34: {
        cam: [49.6, g + 1.7, b - T - 0.45, 128, -5],
        fov: 66,
        mode: "stand",
        open: !1,
        t: 1,
      },
      front34t: {
        cam: [49.6, g + 1.7, b - T - 0.45, 128, -5],
        fov: 66,
        mode: "stand",
        open: !1,
        t: 1,
        torch: !0,
      },
      side: {
        cam: [26, g + 1.6, b - T - 3.6, 160, -1],
        fov: 70,
        mode: "stand",
        open: !0,
        t: 1,
      },
      gangOut: {
        cam: [11, g + 1.55, b - T - 1.6, -150, -6],
        fov: 60,
        mode: "stand",
        open: !1,
        t: 1,
        torch: !0,
      },
      tail: {
        cam: [-10.5, g + 1.7, b - T - 0.6, -128, -5],
        fov: 64,
        mode: "stand",
        open: !1,
        t: 1,
      },
      stand: {
        cam: [12, g + 1.6, b - T - 2.2, -135, -3],
        fov: 66,
        mode: "stand",
        open: !0,
        t: 1,
      },
      across: { ride: [0, -4], fov: 72, mode: "ride", dummies: !1 },
      floor: { ride: [32, -38], fov: 72, mode: "ride" },
      flicker: { ride: [-30, 2], fov: 72, mode: "ride", flicker: 0.75 },
      things: { carCam: [1, 3, 2.6, -0.4, -138, -28], fov: 66, mode: "ride" },
      bag: { carCam: [1, -1.3, 2.5, 0.4, 48, -46], fov: 66, mode: "ride" },
      torn: {
        carCam: [2, 3, 2.3, 0.1, 34, -29],
        fov: 66,
        mode: "standIn",
        t: 0.5,
      },
      gangway: {
        carCam: [1, -5.2, 2.72, -0.15, 90, -1],
        fov: 60,
        mode: "ride",
      },
      tocab: { ride: [88, -3], fov: 72, mode: "ride" },
      togang: { ride: [-88, -3], fov: 72, mode: "ride" },
      window: {
        ride: [-28, -6],
        fov: 66,
        mode: "ride",
        at: [0, 0, -0.8],
        dummies: !1,
      },
      doors: {
        carCam: [1, 0, 2.72, 0.7, 0, -7],
        fov: 70,
        mode: "standIn",
        open: !0,
        close: 0.6,
      },
      cab: {
        carCam: [0, 4.2, 2.72, 0, -90, -3],
        fov: 56,
        mode: "standIn",
        t: 0.6,
      },
      curve: { cam: [0, 0, 0, 0, -90], fov: 55, mode: "curve" },
      curveGang: { cam: [0, 0, 0, 0, -90], fov: 50, mode: "curve", gang: !0 },
      curveLow: { cam: [0, 0, 0, 0, -90], fov: 60, mode: "curve", low: !0 },
      under: {
        cam: [33, E + 0.3, b - 1.2, 114, -4],
        fov: 64,
        mode: "stand",
        open: !1,
      },
      dead: {
        carCam: [2, -1.6, 2.7, 0.45, -78, -24],
        fov: 72,
        mode: "standIn",
        t: 0.5,
      },
    },
    c = ue(i, {
      name: "train",
      look: ye,
      torch: !1,
      views: r,
      onView: (t, w) => K(w),
    }),
    h = c.group,
    y = buildTrainLabSet(i, h),
    o = me(i, { rng: i.rng(5303) });
  h.add(o.root);
  const u = [];
  for (let t = U; t <= ee; t += 1) u.push([t, E, b]);
  const m = le();
  (o.setLine(u), o.place(W), o.refreshColliders());
  const p = (t, w) => {
      const f = new de(),
        A = new Z({ color: w, roughness: 0.8 }),
        _ = new J(new se(0.19, t - 0.62, 4, 10), A);
      ((_.position.y = (t - 0.25) / 2 + 0.02), f.add(_));
      const X = new J(new be(0.11, 12, 8), A);
      (X.position.set(0, t - 0.12, 0.02), f.add(X));
      const R = new J(new se(0.045, 0.55, 3, 8), A);
      return (
        R.position.set(0.22, t - 0.45, 0.22),
        (R.rotation.x = -1.1),
        f.add(R),
        f
      );
    },
    q = p(1.78, 3814706);
  o.spots.gangwayDead.add(q);
  const S = p(1.66, 1710622);
  (o.spots.akane.add(S),
    S.children[2].position.set(-0.24, 1.22, 0.05),
    S.children[2].rotation.set(0, 0, 0.6),
    (e.dummies = [q, S]));
  const d = 14,
    v = 1.1,
    V = W - 200,
    H = W - (d * d) / (2 * v),
    M = (H - V) / d,
    D = d / v,
    G = (t) => {
      if (t < M) return [V + d * t, d];
      const w = Math.min(t - M, D);
      return [H + d * w - 0.5 * v * w * w, Math.max(0, d - v * w)];
    };
  function K(t) {
    if ((c.torch(!!t.torch), e.dummies))
      for (const f of e.dummies) f.visible = t.dummies !== !1;
    (o.flicker(1, t.flicker || 0),
      o.flicker(0, 0),
      o.lights(t.power ?? 1),
      (e.mode = t.mode),
      (e.t = 0),
      (e.ride = t.ride || null),
      (e.carCam = t.carCam || null),
      (e.at = t.at || null),
      (e.honked = !1),
      (e.opened = !1),
      (e.closed = !1),
      (e.close = t.close ?? -1),
      o.setLine(t.mode === "curve" ? m.pts : u),
      (o.onboard = !!(t.ride || t.carCam)),
      t.mode === "arrive"
        ? (o.place(V), o.doors("left", !1, 0.01))
        : t.mode === "ride"
          ? o.place(W + 95)
          : t.mode === "curve"
            ? o.place(m.mid + 27)
            : o.place(W));
    const w = !!t.open;
    for (let f = 0; f < 2; f++)
      (o.doors("left", w, 0.01), o.update(0.05, { speed: 0 }));
    w || o.doors("left", !1, 0.01);
    for (let f = 0; f < 4; f++)
      o.update(0.05, { speed: t.mode === "ride" ? 15 : 0 });
    if (t.mode === "curve") {
      const f = o.cars[1].group.position,
        A = new j(ie, 2.2, 0).applyMatrix4(o.cars[1].group.matrixWorld);
      if (t.gang)
        t.cam = ce([A.x - 2.6, A.y + 5.5, A.z + 4.6], [A.x, A.y - 0.6, A.z]);
      else if (t.low) {
        const _ = new j(ie - 2.55, 0.5, 0).applyMatrix4(
          o.cars[1].group.matrixWorld,
        );
        t.cam = ce([_.x + 2.8, _.y + 0.35, _.z + 3.4], [_.x, _.y, _.z]);
      } else t.cam = [f.x + 2, f.y + 26, f.z + 4, 0, -82];
    }
    (t.ride || t.carCam) &&
      ((s.cameraOverride = !0),
      (s.player.frozen = !0),
      (s.camera.rotation.order = "YXZ"),
      (s.camera.fov = t.fov || 72),
      s.camera.updateProjectionMatrix());
  }
  const Q = (t) => {
    if (((e.t += t), e.mode === "arrive")) {
      const [w, f] = G(e.t);
      (o.place(w),
        o.update(t, { speed: f }),
        !e.honked && e.t > 1.5 && ((e.honked = !0), o.horn()),
        !e.opened && e.t > M + D + 1 && ((e.opened = !0), o.doors("left", !0)));
    } else if (e.mode === "ride") {
      const w = W + 95 + 15 * e.t;
      (o.place(w), o.update(t, { speed: 15 }));
    } else
      e.mode === "curve"
        ? o.update(t, { speed: 0 })
        : (e.close >= 0 &&
            e.t > e.close &&
            !e.closed &&
            ((e.closed = !0), o.doors("left", !1)),
          o.update(t, { speed: 0 }));
    if (e.ride)
      e.at
        ? (o.carryCamera(s.camera, e.ride[0] * B, e.ride[1] * B),
          s.camera.position.add(
            x
              .set(e.at[0], e.at[1], e.at[2])
              .applyQuaternion(s.camera.quaternion),
          ))
        : o.carryCamera(s.camera, e.ride[0] * B, e.ride[1] * B);
    else if (e.carCam) {
      const [w, f, A, _, X, R] = e.carCam,
        Y = o.cars[w];
      (Y.group.updateMatrixWorld(!0),
        s.camera.position.set(f, A, _).applyMatrix4(Y.group.matrixWorld),
        s.camera.quaternion
          .setFromEuler(a.set(R * B, X * B, 0, "YXZ"))
          .premultiply(Y.group.quaternion),
        s.camera.updateMatrixWorld());
    }
    y.update(t, s.camera);
  };
  K(r.stand);
  const $ = [Q, ...c.anim];
  return {
    group: h,
    colliders: o.colliders,
    anim: $,
    props: { train: o, lab: c, set: y, D: e, views: r, arrive: G, curve: m },
    start: [20, b - T - 2.5, Math.PI / 2],
  };
}
function le() {
  const i = [],
    a = E;
  let r = 0;
  const c = 1;
  for (let m = -120; m < 0; m += c) (i.push([0 + m, a, 900]), (r += c));
  const h = r,
    y = 70 * B,
    o = Math.round((250 * y) / c);
  for (let m = 0; m <= o; m++) {
    const p = (m / o) * y;
    i.push([0 + 250 * Math.sin(p), a, 900 - 250 * (1 - Math.cos(p))]);
  }
  const u = i[i.length - 1];
  for (let m = 1; m <= 120; m++)
    i.push([u[0] + Math.cos(y) * m, a, u[2] - Math.sin(y) * m]);
  return { pts: i, mid: h + (250 * y) / 2 };
}
