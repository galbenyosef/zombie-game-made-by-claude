// assets/index-DQDjAbEY 20 — replace
// Lines 5730-5963 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function rn() {
  const e = on(),
    l = Ze.map((t) => {
      const s = no[t] || [0, 0, 0, 0];
      return new I0(s[0], s[1], s[2], s[3]);
    }),
    a = {
      tAtlas: { value: e },
      uTime: { value: 0 },
      uPower: { value: 0 },
      uBoot: { value: 0 },
      uAtt: { value: new I0() },
      uAir: { value: new I0(0, 0, 0, 0) },
      uEng: { value: new I0() },
      uEng2: { value: new I0() },
      uMisc: { value: new I0(410, 9, 0, 1) },
      uMap: { value: new I0(452, 92, -Math.PI / 2, 900) },
      uWarn: { value: new Array(12).fill(0) },
      uMC: { value: 0 },
      uFire: { value: new Lo() },
      uSmall: { value: new I0() },
      uCapU: { value: l },
    },
    o = new ke({
      vertexShader: nn,
      fragmentShader: sn,
      uniforms: a,
      toneMapped: !1,
      fog: !1,
    });
  return ((o.userData.U = a), o);
}
function ln(e, l) {
  const a = new K0();
  return (
    a.setAttribute(
      "position",
      new L0(
        e.flatMap((o) => [o.x, o.y, o.z]),
        3,
      ),
    ),
    a.setAttribute("uv", new L0([0, 0, 1, 0, 1, 1, 0, 1], 2)),
    a.setAttribute("aScr", new L0([l, l, l, l], 1)),
    a.setIndex([0, 1, 2, 0, 2, 3]),
    a
  );
}
const cn = `
uniform vec4 uDroop;          // x droop at the tip (m), y coning at the tip (m), z R, w r0
varying vec2 vPol;            // (r, theta)
`,
  Wt = `
{
  float hr = length(position.xz);
  float hu = clamp((hr - uDroop.w) / (uDroop.z - uDroop.w), 0.0, 1.0);
  transformed.y += -uDroop.x * hu * hu + uDroop.y * hu;
  vPol = vec2(hr, atan(position.x, position.z));
}
`,
  fn = `
varying vec2 vPol;
vec3 hdLit = vec3(0.0);
uniform float uPhase;         // the visible phase of blade 0 (rad)
uniform float uSweep;         // the blur's length behind each ghost (rad)
uniform float uGhost;         // the ghosts' strength
uniform float uDisc;          // the even disc's strength
uniform float uAlpha;         // the whole disc
uniform float uNB;            // blades
uniform vec4 uBlade;          // x chord (m), y R, z the tip band's inner radius, w the tip's chord factor
uniform vec3 uTipCol;         // the tip band's colour (linear)
uniform vec3 uBladeCol;
uniform float uStripes;       // 1: the tail rotor's red / white bands toward the tips
uniform vec3 uLit;            // light from under the disc (the top beacon's red flash, a strobe): added on the blades
`,
  hn = `
{
  float r = vPol.x, th = vPol.y;
  float tipK = smoothstep(uBlade.y - 0.4, uBlade.y, r);
  float chordR = uBlade.x * mix(1.0, uBlade.w, tipK);
  float w = 0.5 * chordR / max(r, 0.05);
  float per = 6.2831853 / uNB;
  float ghost = 0.0;
  for (int k = 0; k < 4; k++) {
    if (float(k) >= uNB) break;
    float d = mod(th - uPhase - float(k) * per + 3.1415927, 6.2831853) - 3.1415927;
    float bladeK = 1.0 - smoothstep(w * 0.7, w * 1.15, abs(d));
    float behind = -d - w;                                  // (> 0: behind the blade, in the turn's wake)
    float trail = behind > 0.0 ? exp(-behind / max(uSweep, 0.002) * 2.2) * step(behind, uSweep * 2.5) : 0.0;
    ghost = max(ghost, max(bladeK, trail * 0.8));
  }
  // the time-average: what a disc really looks like (nB x chord over the circumference), denser near the hub
  float avg = clamp(uNB * chordR / (6.2831853 * max(r, 0.2)), 0.0, 1.0);
  float a = uGhost * ghost + uDisc * avg * 1.7;
  // the disc's edges: the hub (the blades' roots) and the tips fade softly
  a *= smoothstep(uBlade.y + 0.02, uBlade.y - 0.06, r);
  vec3 col = uBladeCol;
  float band = smoothstep(uBlade.z - 0.01, uBlade.z + 0.01, r);
  if (uStripes > 0.5) { float st = step(0.5, fract((r - uBlade.z) / 0.16)); col = mix(col, mix(vec3(0.55, 0.02, 0.02), vec3(0.75, 0.75, 0.72), st), band); }
  else col = mix(col, uTipCol, band);
  diffuseColor.rgb = col;
  diffuseColor.a = clamp(a, 0.0, 0.92) * uAlpha;
  hdLit = uLit * 0.55 / (0.12 + r * r);                  // (a lamp just under the hub: by the inverse square)
  if (diffuseColor.a < 0.002) discard;
}
`;
function Kt({
  R: e,
  r0: l,
  chord: a,
  tipChord: o = 0.62,
  nb: t,
  tipBand: s,
  tipCol: n = [0.75, 0.48, 0.02],
  bladeCol: c = [0.085, 0.088, 0.093],
  stripes: i = !1,
  axis: d = "y",
  name: f = "heli_disc",
}) {
  const p = new Oo(l, e + 0.03, 128, 24);
  d === "y" && p.rotateX(-Math.PI / 2);
  const m = {
      uDroop: { value: new I0(0, 0, e, l) },
      uPhase: { value: 0 },
      uSweep: { value: 0.1 },
      uGhost: { value: 1 },
      uDisc: { value: 0 },
      uAlpha: { value: 0 },
      uNB: { value: t },
      uBlade: { value: new I0(a, e, s, o) },
      uTipCol: { value: new ee(...n) },
      uBladeCol: { value: new ee(...c) },
      uStripes: { value: i ? 1 : 0 },
      uLit: { value: new ee(0, 0, 0) },
    },
    x = new Io({
      color: 16777215,
      roughness: 0.55,
      metalness: 0.1,
      transparent: !0,
      depthWrite: !1,
      side: wt,
    });
  ((x.forceSinglePass = !0),
    (x.onBeforeCompile = (g) => {
      (Object.assign(g.uniforms, m),
        (g.vertexShader = g.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + cn,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` +
              (d === "y"
                ? Wt
                : Wt.replace("length(position.xz)", "length(position.xy)")
                    .replace(
                      "atan(position.x, position.z)",
                      "atan(-position.x, position.y)",
                    )
                    .replace("transformed.y +=", "transformed.z +=")),
          )),
        (g.fragmentShader = g.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + fn,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + hn,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
totalEmissiveRadiance += hdLit * (diffuseColor.rgb * 3.0 + 0.02);`,
          )));
    }),
    (x.customProgramCacheKey = () => "heli_disc_" + d));
  const w = new le(p, x);
  ((w.name = f),
    (w.castShadow = !1),
    (w.receiveShadow = !1),
    (w.renderOrder = 5));
  const v = { ghostPhase: 0 };
  return {
    mesh: w,
    U: m,
    step: (g, P, k, y, M = -0.9) => {
      const F = Math.abs(P),
        A = F / y,
        W = 1 - dt(0.12, 0.27, A),
        N = dt(0.26, 0.6, A);
      return (
        N <= 0
          ? (v.ghostPhase = k)
          : (v.ghostPhase += g * (P * (1 - N) + M * N)),
        (m.uPhase.value = v.ghostPhase),
        (m.uSweep.value =
          Math.min(1.2, F * (1 / 60) * 2.4) * (1 - N) + 0.85 * N),
        (m.uGhost.value = (1 - N) * 1 + N * 0.22),
        (m.uDisc.value = N),
        (m.uAlpha.value = dt(0.08, 0.2, A)),
        (w.visible = m.uAlpha.value > 0.002),
        W
      );
    },
    material: x,
  };
}
function dn(e, l, a) {
  const o = Math.max(0, Math.min(1, (a - e) / (l - e)));
  return o * o * (3 - 2 * o);
}
const dt = dn,
  _e = H0,
  un = () => new de(1, 1);
function ut(e, l) {
  const a = un(),
    o = new Do();
  ((o.index = a.index),
    o.setAttribute("position", a.attributes.position),
    o.setAttribute("uv", a.attributes.uv));
  const t = {};
  for (const [s, n] of Object.entries(l)) {
    const c = new Bo(new Float32Array(e * n), n);
    (c.setUsage(gt), o.setAttribute(s, c), (t[s] = c));
  }
  return ((o.instanceCount = 0), { g: o, a: t });
}
