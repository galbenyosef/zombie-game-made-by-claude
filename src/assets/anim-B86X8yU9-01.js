// assets/anim-B86X8yU9 01 — math
// Lines 1-133 of readable/assets/anim-B86X8yU9.pretty.js (statement-aligned).
import { V as m, Q as O, E as dt, o as st } from "./index-DaQlAVPp.js";
const F = [
    "hips",
    "spine",
    "chest",
    "neck",
    "head",
    "jaw",
    "shoulderL",
    "upperArmL",
    "foreArmL",
    "handL",
    "shoulderR",
    "upperArmR",
    "foreArmR",
    "handR",
    "thighL",
    "shinL",
    "footL",
    "thighR",
    "shinR",
    "footR",
  ],
  V = [-1, 0, 1, 2, 3, 4, 2, 6, 7, 8, 2, 10, 11, 12, 0, 14, 15, 0, 17, 18],
  d = Object.fromEntries(F.map((r, t) => [r, t])),
  S = F.length,
  Tt = {
    hips: "spine",
    spine: "chest",
    chest: "neck",
    neck: "head",
    head: "headTop",
    jaw: "chin",
    shoulderL: "upperArmL",
    upperArmL: "foreArmL",
    foreArmL: "handL",
    handL: "handTipL",
    shoulderR: "upperArmR",
    upperArmR: "foreArmR",
    foreArmR: "handR",
    handR: "handTipR",
    thighL: "shinL",
    shinL: "footL",
    footL: "toeL",
    thighR: "shinR",
    shinR: "footR",
    footR: "toeR",
  };
function Vt(r, t) {
  const s = F.map((h) => {
    const e = new r.Bone();
    return ((e.name = h), e);
  });
  return (
    F.forEach((h, e) => {
      const o = V[e],
        i = t[h];
      if (o < 0) s[e].position.set(i[0], i[1], i[2]);
      else {
        const n = t[F[o]];
        (s[e].position.set(i[0] - n[0], i[1] - n[1], i[2] - n[2]),
          s[o].add(s[e]));
      }
    }),
    s
  );
}
function yt(r) {
  return F.map((t, s) => {
    const h = V[s],
      e = r[t];
    if (h < 0) return [e[0], e[1], e[2]];
    const o = r[F[h]];
    return [e[0] - o[0], e[1] - o[1], e[2] - o[2]];
  });
}
const k = Math.PI / 180,
  x = (r, t = 0, s = 1) => (r < t ? t : r > s ? s : r),
  J = (r, t, s) => r + (t - r) * s,
  z = (r, t, s) => {
    const h = x((s - r) / (t - r));
    return h * h * (3 - 2 * h);
  },
  M = (r) => r - Math.floor(r),
  Z = (r, t) => (r <= 0 ? 0 : (r / t) * Math.exp(1 - r / t)),
  I = (r, t) =>
    Math.sin(r * 1.31 + t) * 0.5 +
    Math.sin(r * 2.27 + t * 2.1) * 0.3 +
    Math.sin(r * 0.53 + t * 3.7) * 0.2,
  G = [
    "idle",
    "shamble",
    "run",
    "reach",
    "attack",
    "stagger_front",
    "stagger_back",
    "stagger_left",
    "stagger_right",
    "die_front",
    "die_back",
    "die_head",
    "grab_hold",
    "emerge",
  ],
  K = new Set(["idle", "shamble", "run", "reach", "grab_hold", "emerge"]),
  ht = {
    attack: 0.95,
    stagger_front: 0.5,
    stagger_back: 0.5,
    stagger_left: 0.5,
    stagger_right: 0.5,
  },
  U = { die_front: 1.55, die_back: 1.6, die_head: 1.45 },
  P = { shamble: "shamble", reach: "shamble", run: "run", emerge: "emerge" },
  T = {};
function ut(r) {
  for (const [t, s] of Object.entries(r))
    (G.includes(t) || G.push(t),
      s.loop && K.add(t),
      s.gait && (P[t] = s.gait),
      (T[t] = s));
}
class $ {
  constructor() {
    ((this.hp = new m()), (this.q = Array.from({ length: S }, () => new O())));
  }
  copy(t) {
    this.hp.copy(t.hp);
    for (let s = 0; s < S; s++) this.q[s].copy(t.q[s]);
    return this;
  }
}
