// assets__index-DQDjAbEY 16 — add
// Lines 4580-4921 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function Ka(e, l, a) {
  const o = t0.floorY;
  (e.add(G(0.56, 0.12, 2, 0.02, 1), z(0.36, o + 0.09, -0.95), R.alu),
    e.add(G(0.52, 0.07, 1.4, 0.03, 2), z(0.36, o + 0.185, -1.25), R.mattress, {
      wear: () => [0.2, 0.4, 0, 0.1],
    }),
    e.add(
      G(0.52, 0.07, 0.6, 0.03, 2),
      z(0.36, o + 0.32, -0.27, 0.48),
      R.mattress,
      { wear: () => [0.2, 0.4, 0, 0.1] },
    ));
  for (const t of [-1.7, -1.05])
    e.add(G(0.6, 0.004, 0.05, 0.001, 1), z(0.36, o + 0.222, t), R.web);
  (e.add(
    G(0.6, 0.004, 0.05, 0.001, 1),
    z(0.36, o + 0.38, -0.3, 0.48),
    R.webRed,
  ),
    e.add(
      new Ne(0.14, 20),
      z(0.33, o + 0.222, -1.35, -Math.PI / 2, 0, 0, 1.3, 0.8, 1),
      R.blood,
    ));
  for (const t of [1, -1])
    e.add(
      g0(
        h(0.36 + t * 0.28, o + 0.2, -1.95),
        h(0.36 + t * 0.28, o + 0.2, 0),
        0.012,
        8,
      ),
      null,
      R.alu,
    );
  (e.add(
    G(0.34, 0.5, 0.22, 0.07, 2),
    z(-0.45, o + 0.25, -1.95, 0.08, 0.3, 0),
    R.redBag,
    { wear: () => [0.4, 0.5, 0, 0.2] },
  ),
    e.add(
      G(0.28, 0.18, 0.06, 0.04, 1),
      z(-0.45, o + 0.24, -1.82, 0.08, 0.3, 0),
      R.redBag,
    ),
    e.add(
      G(0.5, 0.2, 0.3, 0.06, 2),
      z(-0.25, o + 0.1, -0.45, 0, 0.6, 0),
      R.orange,
      { wear: () => [0.5, 0.5, 0, 0.2] },
    ));
  for (let t = 0; t < 6; t++) {
    const s = a() * Math.PI * 2,
      n = 0.2 + a() * 0.35;
    e.add(
      new V0(0.03, 0.03, 0.06, 12),
      z(
        -0.25 + Math.cos(s) * n,
        o + 0.03,
        -0.45 + Math.sin(s) * n,
        Math.PI / 2,
        s,
        0,
      ),
      R.gauze,
    );
  }
  for (let t = 0; t < 3; t++)
    e.add(
      new V0(0.008, 0.008, 0.05, 8),
      z(-0.05 + t * 0.07, o + 0.008, -0.2 + t * 0.03, Math.PI / 2, a() * 3, 0),
      R.white,
    );
  {
    (e.add(G(0.34, 0.24, 0.14, 0.02, 1), z(-0.3, 1.5, -2.02), R.plasticGrey),
      e.add(
        G(0.3, 0.035, 0.03, 0.01, 1),
        z(-0.3, 1.5 + 0.14, -2.02 + 0.02),
        R.plastic,
      ),
      e.add(
        G(0.06, 0.12, 0.08, 0.01, 1),
        z(-0.3, 1.5 - 0.17, -2.02 - 0.03),
        R.alu,
      ),
      l.quad(
        [
          h(-0.3 - 0.14, 1.5 - 0.09, -2.02 + 0.0715),
          h(-0.3 + 0.11, 1.5 - 0.09, -2.02 + 0.0715),
          h(-0.3 + 0.11, 1.5 + 0.1, -2.02 + 0.0715),
          h(-0.3 - 0.14, 1.5 + 0.1, -2.02 + 0.0715),
        ],
        8,
      ));
    for (let c = 0; c < 4; c++)
      e.add(
        new V0(0.008, 0.008, 0.01, 10),
        z(-0.3 + 0.135, 1.5 + 0.07 - c * 0.045, -2.02 + 0.072, Math.PI / 2),
        R.button,
      );
  }
  for (const t of [-0.55, -0.68]) {
    (e.add(
      W0(
        [
          [0, 0],
          [0.07, 0],
          [0.072, 0.02],
          [0.072, 0.6],
          [0.06, 0.66],
          [0.025, 0.69],
          [0.02, 0.72],
          [0, 0.72],
        ],
        20,
      ),
      z(t, o + 0.02, -2.06),
      R.white,
      { wear: () => [0.4, 0.4, 0, 0.3] },
    ),
      e.add(
        g0(h(t, o + 0.74, -2.06), h(t, o + 0.8, -2.06), 0.012, 8),
        null,
        R.chrome,
      ));
    for (const s of [0.2, 0.5])
      e.add(
        new Z0(0.075, 0.008, 6, 20),
        z(t, o + s, -2.06, Math.PI / 2),
        R.web,
      );
  }
  {
    const n = o + 0.42;
    (e.add(
      G(0.42, 0.06, 0.4, 0.025, 2),
      z(-0.52, n, -1, 0, Math.PI / 2, 0),
      R.fabric,
      { wear: () => [0.3, 0.4, 0, 0.1] },
    ),
      e.add(
        G(0.42, 0.5, 0.06, 0.025, 2),
        z(-0.52 - 0.2, n + 0.3, -1, -0.1, Math.PI / 2, 0),
        R.fabric,
        { wear: () => [0.3, 0.4, 0, 0.1] },
      ));
    for (const c of [-0.17, 0.17])
      e.add(
        g0(
          h(-0.52 + 0.15, o, -1 + c),
          h(-0.52 + 0.15, n - 0.03, -1 + c),
          0.014,
          8,
        ),
        null,
        R.alu,
      );
    for (const c of [-0.17, 0.17])
      e.add(
        g0(
          h(-0.52 - 0.15, o, -1 + c),
          h(-0.52 - 0.15, n - 0.03, -1 + c),
          0.014,
          8,
        ),
        null,
        R.alu,
      );
  }
  {
    const i = -(_0(-1.6, 1.3) - S0 - 0.035),
      d = new de(-1.35 - -1.95, 1.62 - 0.95, 1, 1);
    e.add(
      d,
      z(i, (0.95 + 1.62) / 2, (-1.95 + -1.35) / 2, 0, Math.PI / 2, 0),
      R.net,
      { uv: (f) => [f.z, f.y] },
    );
    for (const [f, p] of [
      [h(i, 0.95, -1.95), h(i, 0.95, -1.35)],
      [h(i, 1.62, -1.95), h(i, 1.62, -1.35)],
      [h(i, 0.95, -1.95), h(i, 1.62, -1.95)],
      [h(i, 0.95, -1.35), h(i, 1.62, -1.35)],
    ])
      e.add(g0(f, p, 0.006, 5), null, R.web);
  }
  (e.add(
    W0(
      [
        [0, 0],
        [0.055, 0],
        [0.057, 0.3],
        [0.04, 0.34],
        [0, 0.35],
      ],
      18,
    ),
    z(-0.62, o + 0.02, 0.9),
    R.red,
  ),
    e.add(G(0.06, 0.08, 0.05, 0.01, 1), z(-0.62, o + 0.42, 0.9), R.dark),
    e.add(G(0.36, 0.22, 0.1, 0.02, 1), z(0.62, 1.55, -1.95, 0, 0, 0), R.white),
    e.add(G(0.12, 0.12, 0.004, 0.002, 1), z(0.62, 1.55, -1.899), R.red));
}
const T0 = { x0: -0.85, x1: 0.85, y0: 1.35, y1: 2.3 },
  Ha = `
attribute vec3 aTag;
uniform mat4 uPart[${Xe}];
varying vec3 vRest;
varying vec3 vRestN;
`,
  $a = `
int hpI = int(aTag.x + 0.5);
mat4 hpM = uPart[hpI];
vRest = position - normal * aTag.z;
vRestN = normal;
objectNormal = mat3(hpM) * objectNormal;
`,
  Ya = `
transformed = (hpM * vec4(transformed, 1.0)).xyz;
`,
  Xa = `
varying vec3 vRest;
varying vec3 vRestN;
uniform sampler2D tCrack;
uniform float uCrack;
uniform float uDirtG;
uniform vec4 uSmear[6];       // blood smears on the glass: xyz (rest frame), w size (0 = none)
uniform float uFog;
uniform float uReflBoost;     // (the scene's environment intensity is the look's: the glass reflects more than paint)
uniform vec3 uCamRest;        // the eye, in the machine's rest frame (the screens' reflections in the glass)
uniform vec4 uPanel;          // the panel's face: y0, z0, tilt (rad), the screens' brightness (0 = dark)
uniform vec4 uScrRefl;        // x the warning lamps' red, y the master caution's amber, z the PFDs' bank (rad), w strength
vec3 gaRefl = vec3(0.0);
float gaOut = 0.0;            // 1: seen from outside (the outer face)
float glH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float glN(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(glH(i), glH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(glH(i + vec3(0.0, 1.0, 0.0)), glH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(glH(i + vec3(0.0, 0.0, 1.0)), glH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(glH(i + vec3(0.0, 1.0, 1.0)), glH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float glF(vec3 p) { return 0.5 * glN(p) + 0.25 * glN(p * 2.03 + 1.7) + 0.125 * glN(p * 4.07 - 3.1) + 0.125 * glN(p * 8.1 + 2.2); }
${Pt()}
float gaCrack = 0.0, gaShard = 0.0;
vec3 gaTilt = vec3(0.0);
`,
  ja = `
if (hmKeep(vRest, 6.0) < 0.0) discard;
`,
  Za = `
{
  vec3 P = vRest;
  gaOut = step(dot(normalize(P - uCamRest), normalize(vRestN)), 0.0);
  float ovh = step(hm_ovh(P), 0.0);
  float wsk = step(hm_ws(P), 0.0);
  vec3 tint = mix(vec3(0.02, 0.025, 0.025), vec3(0.01, 0.05, 0.035), ovh);
  float a = mix(0.06, 0.34, ovh);
  // smudges (wiped arcs), dust settled toward the frame, a film of ash
  float sm = glF(P * 9.0 + 3.0);
  float edgeD = -hmGlass(P);
  float nearEdge = 1.0 - smoothstep(0.0, 0.12, edgeD);
  float dirt = clamp(uDirtG * (smoothstep(0.55, 0.85, sm) * 0.5 + nearEdge * 0.6 * glF(P * 30.0)), 0.0, 1.0);
  a += dirt * 0.22;
  tint = mix(tint, vec3(0.16, 0.15, 0.14), dirt);
  // the cracks (the windscreen only)
  if (wsk > 0.5 && uCrack > 0.0) {
    vec2 cu = vec2((P.x - ${T0.x0.toFixed(3)}) / ${(T0.x1 - T0.x0).toFixed(3)}, (P.y - ${T0.y0.toFixed(3)}) / ${(T0.y1 - T0.y0).toFixed(3)});
    vec4 c = texture2D(tCrack, cu);
    float th = c.g / max(c.r, 0.004);
    float line = c.r * smoothstep(th, th + 0.04, uCrack);
    float shard = step(0.001, c.b) * smoothstep(c.a, c.a + 0.05, uCrack);
    gaCrack = line; gaShard = shard;
    float h1 = fract(c.b * 113.7), h2 = fract(c.b * 57.3 + 0.3);
    gaTilt = vec3(h1 - 0.5, h2 - 0.5, 0.0) * 0.16 * shard;
    tint = mix(tint, vec3(0.55, 0.58, 0.6), line);
    a = mix(a, 0.75, line);
    a = mix(a, a + 0.07, shard);
  }
  // blood: smears where the dead slapped the glass (dark, thick at the middle, dragged down)
  for (int i = 0; i < 6; i++) {
    vec4 s = uSmear[i];
    if (s.w <= 0.0) continue;
    vec3 d = P - s.xyz;
    float drag = clamp(-d.y / (s.w * 2.2), 0.0, 1.0);
    vec2 q = vec2(length(d.xz), d.y + drag * s.w * 1.2) / s.w;
    float n = glF(P * 40.0 + float(i) * 7.0);
    float blob = smoothstep(1.0, 0.55, length(q) + (n - 0.5) * 0.7);
    float streaks = smoothstep(0.62, 0.8, glN(vec3(P.x * 90.0, P.y * 6.0, P.z * 90.0) + float(i))) * smoothstep(0.0, 0.3, -d.y) * smoothstep(s.w * 3.0, 0.0, -d.y) * step(length(d.xz), s.w * 0.9);
    float b = clamp(max(blob, streaks * 0.8), 0.0, 1.0);
    tint = mix(tint, vec3(0.09, 0.004, 0.003), b);
    a = mix(a, 0.93, b * (0.75 + 0.25 * n));
  }
  // the cockpit's screens mirrored in the glass (seen from inside): the eye's ray reflected off this pane, onto the panel's
  // face - where it lands on a display, a dim, soft copy of that display's light
  if (uPanel.w > 0.001) {
    vec3 Vd = normalize(P - uCamRest);
    vec3 Nr = normalize(vRestN);
    if (dot(Vd, Nr) > 0.0) {                                 // (the eye inside: it sees the pane's inner face)
      vec3 R = reflect(Vd, -Nr);
      vec3 PU = vec3(0.0, cos(uPanel.z), sin(uPanel.z)), PN = vec3(0.0, sin(uPanel.z), -cos(uPanel.z));
      vec3 PO = vec3(0.0, uPanel.x, uPanel.y);
      float den = dot(R, PN);
      if (den < -0.02) {
        float tt = dot(PO - P, PN) / den;
        if (tt > 0.0) {
          vec3 Hh = P + R * tt;
          float sx = Hh.x, ss = dot(Hh - PO, PU);
          vec3 rc = vec3(0.0);
          for (int i = 0; i < 4; i++) {
            float xc = i == 0 ? 0.40 : i == 1 ? 0.135 : i == 2 ? -0.135 : -0.40;
            float m = (1.0 - smoothstep(0.075, 0.1, abs(sx - xc))) * (1.0 - smoothstep(0.1, 0.13, abs(ss - 0.137)));
            vec3 c;
            if (i == 0 || i == 3) {
              // a PFD: sky over ground, the line tilted with the bank
              float hz = (ss - 0.14) + (sx - xc) * tan(uScrRefl.z);
              c = hz > 0.0 ? vec3(0.06, 0.2, 0.55) : vec3(0.32, 0.17, 0.05);
            } else c = i == 1 ? vec3(0.05, 0.09, 0.14) : vec3(0.07, 0.08, 0.09);
            rc += c * m;
          }
          // the warning panel above the centre screens, the master caution lamps
          rc += vec3(1.0, 0.06, 0.03) * uScrRefl.x * (1.0 - smoothstep(0.2, 0.25, abs(sx))) * (1.0 - smoothstep(0.02, 0.035, abs(ss - 0.29)));
          rc += vec3(1.0, 0.55, 0.05) * uScrRefl.y * (1.0 - smoothstep(0.02, 0.04, abs(abs(sx) - 0.27))) * (1.0 - smoothstep(0.02, 0.04, abs(ss - 0.335)));
          float fres = 0.04 + 0.96 * pow(1.0 - clamp(dot(-Vd, -Nr), 0.0, 1.0), 5.0);
          gaRefl = rc * uPanel.w * uScrRefl.w * (fres * 0.5 + 0.012);
        }
      }
    }
  }
  diffuseColor.rgb = tint;
  diffuseColor.a = clamp(a, 0.0, 1.0);
}
`,
  Qa = `
normal = normalize(normal + gaTilt);
`,
  Ja = `
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
gl_FragColor = vec4(totalDiffuse * diffuseColor.a + totalSpecular * (1.0 + gaShard * 0.6) + totalEmissiveRadiance + gaRefl, diffuseColor.a);
`;
