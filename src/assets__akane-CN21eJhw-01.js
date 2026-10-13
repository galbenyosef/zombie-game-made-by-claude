// assets__akane-CN21eJhw 01 — math
// Lines 1-160 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
import {
  G as ee,
  at as ft,
  aT as ye,
  p as Qt,
  C as Rt,
  c as te,
  b as Ue,
  $ as Jt,
  O as mt,
  q as Ht,
  T as Et,
  D as eo,
  V as Me,
} from "./index-DaQlAVPp.js";
import {
  s as ze,
  a as S0,
  e as N0,
  b as B0,
  f as E0,
  c as st,
  d as Se,
  g as to,
} from "./lightrig-BOum5aAY.js";
import { R as oo } from "./RoundedBoxGeometry-D0zz8qHa.js";
import { m as no } from "./BufferGeometryUtils-Qxvmd-vM.js";
const Z = (e, t = 0, a = 1) => (e < t ? t : e > a ? a : e),
  n0 = (e, t, a) => e + (t - e) * a,
  V0 = (e, t, a) => {
    const o = Z((a - e) / (t - e));
    return o * o * (3 - 2 * o);
  };
function _t(e = 1) {
  let t = e >>> 0 || 2654435769;
  return function () {
    t = (t + 1831565813) | 0;
    let a = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (a = (a + Math.imul(a ^ (a >>> 7), 61 | a)) ^ a),
      ((a ^ (a >>> 14)) >>> 0) / 4294967296
    );
  };
}
function X0(...e) {
  let t = 2166136261;
  for (let a of e)
    ((a = Math.floor(a * 1000003) | 0),
      (t ^= a),
      (t = Math.imul(t, 16777619)),
      (t ^= t >>> 13),
      (t = Math.imul(t, 1540483477)),
      (t ^= t >>> 15));
  return (t >>> 0) / 4294967296;
}
const ao = {
    yaw: 0,
    bodyYaw: null,
    pitch: 0,
    roll: 0,
    lean: 0,
    breathe: 0,
    eyes: {
      open: 1,
      openL: null,
      openR: null,
      lids: 0,
      iris: 1,
      gaze: [0, 0],
      light: 1,
      closed: 0,
    },
    brows: { l: 0, r: 0 },
    mouth: { open: 0, shape: "A", smile: 0, teeth: 0 },
    blush: 0.3,
    tears: 0,
    anger: 0,
    sad: 0,
    arms: "guitar",
    guitar: 1,
    strum: 0,
    strumAmp: 1,
    fret: 0.3,
    wet: 0,
    crack: 0,
    glow: 0,
    wind: [0, 0],
    hairSwing: [0, 0],
    sit: 0,
    seat: 0.46,
    kneel: 0,
    stomp: 0,
    stompSide: 1,
    block: 0.45,
    jump: 0,
    headbang: 0,
    headbangAmp: 0,
    lookUp: 0,
    headFwd: null,
    bounce: 0,
    pump: 0,
    sway: 0,
    weight: 0,
    shoulders: 0,
    hop: 0,
    stamp: 0,
    stampSide: 1,
    neckLift: 0,
    guitarTilt: 0,
    guitarSwing: 0,
    guitarDrop: 0,
    bend: 0,
    extraFinger: 0,
    pointUp: 0.15,
    desk: 0.74,
    penAt: [0, 0],
    phoneY: 1.1,
    micH: null,
    micZ: 0.455,
    micStand: null,
    micBoom: !0,
    micSide: 1,
    eyeReflect: 0.5,
    headScale: 1,
    chibi: 0,
    phoneScreen: null,
    light: {
      key: [-0.6, -0.8],
      keyColor: "#fff4ea",
      rim: [1, -0.2],
      rimColor: "#6f95e8",
      rimAmt: 0.6,
      ambient: "#16338f",
      amb: 0.35,
    },
  },
  pt = (e) => e !== null && typeof e == "object" && !Array.isArray(e);
function rt(e = {}, t = ao) {
  const a = {};
  for (const o of Object.keys(t)) {
    const r = t[o],
      i = e[o];
    pt(r)
      ? (a[o] = rt(pt(i) ? i : {}, r))
      : Array.isArray(r)
        ? (a[o] = Array.isArray(i) ? i.slice() : r.slice())
        : (a[o] = i === void 0 ? r : i);
  }
  for (const o of Object.keys(e)) o in a || (a[o] = e[o]);
  return a;
}
function Nt(e) {
  const t = Z(e.headbangAmp ?? 0, 0, 1.5);
  if (!(t > 0)) return 0;
  const a = 0.5 + 0.5 * Math.cos(2 * Math.PI * (e.headbang || 0));
  return t * 40 * Math.pow(a, 2.2) - t * 6;
}
function so(e) {
  return (e.pitch || 0) + Nt(e) - 32 * Z(e.lookUp ?? 0);
}
