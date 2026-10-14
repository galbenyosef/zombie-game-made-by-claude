// assets/index-Db-AsSxU 26 — fade
// Lines 10926-11208 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function tn(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = t.J,
    r = s.tk || (s.tk = {});
  if ((zo(Xo, o, r), c > 0))
    for (const [F, J] of Zo.events)
      o >= F && o - c < F && t.events.push([J, "taken"]);
  const l = R0(1.62, 2.05, o),
    a = I0((o - 2.2) / 0.32),
    u = l * (1 - a * a),
    f = R0(1.62, 1.95, o) * (1 - R0(2.18, 2.5, o)),
    d = o < 2.5 ? Ze(n, 4) : 0;
  (e.hp.set(i.hips[0] + r.hx, i.hips[1] + r.hy, i.hips[2] + r.hz),
    t.qe(e.q[d0.hips], r.hp, r.hyaw, r.hr),
    t.qe(e.q[d0.spine], r.sp, r.syaw, r.sr),
    t.qe(e.q[d0.chest], r.cp + f * 7, r.cyaw, r.cr));
  const v = r.nyaw * (1 - f),
    C = r.dyaw * (1 - f);
  (t.qe(e.q[d0.neck], r.np + f * 26, v + C * 0.45, r.nr),
    t.qe(e.q[d0.head], r.dp + f * 4, C * 0.55, r.dr),
    t.qe(e.q[d0.jaw], I0(r.jaw + (t.mouth ?? 0) * 9, 0, 18), 0, 0),
    t.qe(e.q[d0.shoulderL], 0, -3, -4),
    t.qe(e.q[d0.shoulderR], 0, 3, 4 - u * 6),
    t.clampFloor(e, R0(0.95, 1.1, o), t.torso),
    t.fkTo(e, d0.hips));
  for (const F of [1, -1]) {
    const J = F > 0,
      n0 = J ? r.lp : r.rp,
      _ = s.e.set(F * 0.22, 0, 1).applyQuaternion(t.wq[0]);
    ((_.x += Math.sin(r.kr * te) * 1.6),
      _.normalize(),
      en(
        t,
        e,
        F,
        J ? r.lx : r.rx,
        t.ankleFor(F, n0 * te),
        J ? r.lz : r.rz,
        n0,
        J ? r.lyw : r.ryw,
        _,
      ));
  }
  if (
    (s1(t, e, 1, r.alf, r.ala, r.alt, r.el),
    t.hand(e, 1, r.hL, 0, 0),
    s1(t, e, -1, r.arf, r.ara, r.art, r.er),
    t.hand(e, -1, r.hR, 0, 0),
    t.look ? s.lb.copy(t.look) : s.lb.set(0, 1.6, 3.2),
    u > 0.001)
  ) {
    (Me(t, e, -1), t.fkTo(e, d0.upperArmR));
    const F = s.f.copy(s.lb).sub(t.wp[d0.upperArmR]);
    ((F.y = 0),
      F.normalize().multiplyScalar(0.5),
      (F.y = 0.86),
      (F.x -= 0.1),
      F.normalize(),
      (F.x += d * 0.012),
      (F.y += Ze(n, 6) * 0.012),
      F.normalize(),
      t.armDir(e, -1, F.x, F.y, F.z, 0.3, 0.4, 1, 14 + d * 2),
      st(t, e, -1, F.x, F.y + 0.15, F.z, -1, 0, 0),
      Le(t, e, -1, u));
  }
  ((s.eyeOn = u > 0.25), s.eyeOn && s.eyeT.copy(s.lb));
  const p = R0(1.1, 1.5, o);
  if (p > 0)
    for (let F = 0; F < 2; F++)
      (t.settleChain(e, t.chains[0], p),
        u < 0.001 &&
          t.settleChain(e, t.chains[1], p * (o < 2 ? 1 : R0(2.42, 2.6, o))),
        t.settleChain(e, t.chains[4], p * (1 - f)));
  t.clampFloor(e, 0, null);
}
function on(e, o, n, c) {
  const t = this,
    s = t.J,
    i = Math.sin(n * 0.8);
  (e.hp.set(0, s.hips[1] - 0.012 + i * 8e-4, s.hips[2] + 0.004),
    t.qe(e.q[d0.hips], 0.5, 0, 0),
    Ee(t, e, n, c, {
      lean: -5,
      sp: -1,
      cp: -2,
      hp: -2,
      hr2: 7,
      comp: 0.6,
      breath: 0.15,
      look: 1,
      torso: 0,
      maxYaw: 55,
    }),
    lt(t, e, pe),
    t.dangle(e, -1, 2, 7, 12),
    t.hand(e, -1, 10, 0, 0),
    Oe(
      t,
      e,
      1,
      d0.chest,
      0.33,
      0.37,
      0.16,
      0.06,
      0.02,
      1,
      0.35,
      1,
      0.05,
      1,
      -0.75,
      -0.25,
    ));
}
const he = {
  dur: 2.6,
  out: 0.5,
  tilt: 13,
  fwd: 7,
  eyes: 0.28,
  lean: 0.12,
  stretch: 0.44,
  lift: 0.013,
  browIn: 0.0012,
  browUp: 0.0012,
  lidLean: 0.2,
  pupil: 0.95,
  jaw: 1.2,
};
function nn(e, o) {
  return (
    (o[0] =
      R0(0.25, 1.1, e) * 0.42 + R0(1, 2.6, e) * 0.5 + R0(2.6, 7, e) * 0.08),
    (o[1] = R0(0.15, 2, e)),
    (o[2] = R0(0.9, 2.5, e)),
    o
  );
}
function sn(e, o, n, c) {
  const t = this,
    s = R0(0, 0.9, o),
    i = R0(0.35, 2.7, o) + 0.15 * R0(2.7, 7, o);
  (c > 0 && o >= he.dur && o - c < he.dur && t.events.push(["strange", "held"]),
    Xe(t, e, n, c, {
      shift: 1 - s,
      still: s,
      breath: T0(1, 0.15, s),
      hr2: he.tilt * i,
      hp2: he.fwd * i,
      look: 1,
      jaw: he.jaw * R0(1.9, 3.4, o),
    }),
    Qe(t, e));
}
const x1 = {
    pray: { fn: Co, loop: !0, fade: 0.5 },
    still: { fn: Fo, fade: 0.45 },
    look_back: { fn: Eo, fade: 0.3 },
    rise: { fn: No, fade: 0.25, dur: Dt.dur, next: "stand", nextFade: 0.3 },
    stand: { fn: Do, loop: !0, fade: 0.4 },
    talk: { fn: Ho, loop: !0, fade: 0.4 },
    point: { fn: qo, fade: 0.3 },
    refuse: { fn: Oo, fade: 0.25, dur: 1.5, next: "prev", nextFade: 0.35 },
    walk: { fn: Po, loop: !0, gait: "shamble", fade: 0.35 },
    face: { fn: Bo, loop: !0, fade: 0.5 },
    pray_stand: { fn: Yo, loop: !0, fade: 0.5 },
    shield: { fn: Go, loop: !0, fade: 0.35 },
    flinch: { fn: $o, fade: 0.08, dur: Uo, next: "prev", nextFade: 0.3 },
    grabbed: { fn: Vo, loop: !0, fade: 0.15 },
    taken: { fn: tn, fade: 0.15 },
    lantern: { fn: on, loop: !0, fade: 0.5 },
    strange: { fn: sn, loop: !0, fade: 0.7 },
  },
  Ot = `
float prH3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float prVN(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(prH3(i), prH3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(prH3(i + vec3(0.0, 1.0, 0.0)), prH3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(prH3(i + vec3(0.0, 0.0, 1.0)), prH3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(prH3(i + vec3(0.0, 1.0, 1.0)), prH3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
// the dissolve value of a rest-space point: smoke-like wisps (taller than wide, drifting slowly up while he goes), a finer
// layer, a little grain on the edges; it rises from the ground (the feet go first, the face and the lantern last)
float prFadeN(vec3 rp, float t) {
  vec3 q = rp + vec3(13.7, 7.3 - t * 0.12, 21.1);                 // (away from the lattice's origin: the hash is 0 there)
  float n = prVN(q * vec3(5.5, 3.2, 5.5)) * 0.62 + prVN(q * vec3(14.0, 9.0, 14.0) + 7.1) * 0.28 + prH3(floor(rp * 150.0) + vec3(311.5, 173.5, 97.5)) * 0.1;
  vec3 hd = rp - vec3(0.0, 1.62, 0.02);                              // (his face lingers: with the lantern, the last of him)
  return n + (0.9 - rp.y) * 0.2 - 0.22 * exp(-dot(hd, hd) * 28.0);
}
// k = the share of him still there (the threshold is the noise's measured distribution, inverted: a logit)
bool prFaded(vec3 rp, float k, float t) {
  if (k >= 0.999) return false;
  if (k <= 0.001) return true;
  return prFadeN(rp, t) > 0.504 + (k < 0.5 ? 0.095 : 0.115) * log(k / (1.0 - k));
}
`,
  an = `
uniform float uFade;              // PRIEST round 2: 1 solid .. 0 gone
uniform float uFadeT;             // (the dissolve's drift)
uniform vec3 uSelfPos;            // the faked lantern light (world); his materials only
uniform vec3 uSelfCol;            // its colour * strength (0 = off)
uniform float uSelfShield;        // 1: the lantern's cap and fount shade what is straight above and below the flame
uniform vec4 uStrange;            // PRIEST round 3: the strange face (x: the smile, which fades its paint in)
uniform sampler2D uFaceTex2;      // its paint (paintStrangeFace)
`,
  rn = `
  if (uFaceOn > 0.5 && uStrange.x > 0.002 && mi == ${L.FACE}) {
    vec2 uv2 = ((vL.xy - uHC.xy) - uFaceRect.xy) / uFaceRect.zw;
    float fr2 = smoothstep(0.0, 0.3, vLN.z + (vL.z - uHC.z - 0.05) * 4.0) * step(0.0, uv2.x) * step(uv2.x, 1.0) * step(0.0, uv2.y) * step(uv2.y, 1.0);
    vec4 t2 = texture2D(uFaceTex2, uv2);
    float a2 = t2.a * fr2 * clamp(uStrange.x, 0.0, 1.0);
    if (a2 > 0.001) {
      vec3 pc2 = dec(clamp(t2.rgb / max(t2.a, 1e-4), 0.0, 1.0));
      vec3 ratio2 = shade / max(base, vec3(1e-3));
      base = mix(base, pc2, a2);
      shade = mix(shade, pc2 * clamp(ratio2, 0.0, 1.2), a2);
    }
  }
`,
  cn = `
  if (isSkin && uAliveP.x > 0.5) {
    vec3 kcW = uKeyCol + uSelfCol * 6.0;
    float kmW = max(max(kcW.r, kcW.g), max(kcW.b, 1e-4));
    float warmW = clamp((kcW.r - kcW.b) / kmW * 1.4, 0.0, 1.0);
    albedo *= mix(vec3(1.0), vec3(0.8, 1.0, 1.1), warmW * 0.85);
  }
`,
  ln = `
  // PRIEST: the lantern's light, faked (his materials only: no light is ever added to the scene)
  if (uSelfCol.r + uSelfCol.g + uSelfCol.b > 1e-5) {
    vec3 Ls = uSelfPos - vW;
    float d2 = dot(Ls, Ls);
    Ls *= inversesqrt(max(d2, 1e-6));
    vec3 Es = uSelfCol / (d2 + 0.012);
    Es *= mix(1.0, 0.12 + 0.88 * (1.0 - smoothstep(0.74, 0.9, abs(Ls.y))), uSelfShield);
    Es /= 1.0 + lumi(Es) / 2.6;
    float ndl = dot(N, Ls);
    float dS = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    col += albedo * Es * dS * mix(1.0, ao, 0.5);
    if (isSkin) col += albedo * Es * vec3(0.15, 0.06, 0.1) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    if (isSkin && uAliveP.x > 0.5) col += albedo * Es * vec3(0.12, 0.02, -0.07) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    vec3 Hs = normalize(Ls + V);
    float frS = F0 + (1.0 - F0) * pow(1.0 - clamp(dot(V, Hs), 0.0, 1.0), 5.0);
    col += min(Es * nrm * pow(max(dot(N, Hs), 0.0), shin) * frS * max(ndl, 0.0), vec3(0.6));
    if (mi == ${L.EYE} && uAliveP.x > 0.5) col += Es * 1.3 * uAliveP.w * smoothstep(0.9925, 0.9965, dot(N, Hs)) * (1.0 - lidPx);
  }
`;
function hn(e) {
  const o = (c, t, s) =>
    c.includes(t)
      ? c.replace(t, s)
      : (console.warn("[priest] shader anchor missing: " + t.slice(0, 60)), c);
  let n = e;
  return (
    (n = o(
      n,
      `void main() {
  #include <clipping_planes_fragment>`,
      an +
        Ot +
        `void main() {
  #include <clipping_planes_fragment>
  if (prFaded(vL, uFade, uFadeT)) discard;`,
    )),
    (n = o(
      n,
      "  albedo *= (ty == 3) ? 0.85 : grime;",
      cn + "  albedo *= (ty == 3) ? 0.85 : grime;",
    )),
    (n = o(
      n,
      "  // the shade side: the rest of the room + the sky",
      ln + "  // the shade side: the rest of the room + the sky",
    )),
    (n = o(
      n,
      "  // ---- the eyes: procedural on the eyeball",
      rn + "  // ---- the eyes: procedural on the eyeball",
    )),
    n
  );
}
