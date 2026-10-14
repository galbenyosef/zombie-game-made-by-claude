// assets/index-DQDjAbEY 04 — assets/index-dqdjabey
// Lines 1015-1384 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
const da = `
float hpH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float hpN(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hpH(i), hpH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(hpH(i + vec3(0.0, 1.0, 0.0)), hpH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(hpH(i + vec3(0.0, 0.0, 1.0)), hpH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(hpH(i + vec3(0.0, 1.0, 1.0)), hpH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float hpF(vec3 p) { return 0.5 * hpN(p) + 0.25 * hpN(p * 2.03 + 1.7) + 0.125 * hpN(p * 4.07 - 3.1) + 0.0625 * hpN(p * 8.13 + 5.3); }
float hpF2(vec3 p) { return 0.62 * hpN(p) + 0.38 * hpN(p * 2.41 + 4.2); }
// a line of width w (m) at distance d, anti-aliased by the pixel's footprint fw
float hpLine(float d, float w, float fw) { return 1.0 - smoothstep(w * 0.5, w * 0.5 + fw, abs(d)); }
`,
  ua = `
varying vec4 vSurf;
varying vec4 vWear;
varying vec3 vRest;
varying vec3 vRestN;
varying float vMode;
varying float vAO;
uniform float uLivery;        // 0 the rescue livery, 1 the army's olive drab
uniform float uDirt;          // the whole machine's grime (a dial)
uniform float uBurn;          // scorching on the engine deck (the fire)
uniform vec4 uRotor;
uniform float uTRotorA;
uniform vec4 uLamp[${Rt}];  // each lamp's glow (linear rgb x strength); a: the lens's tint strength
uniform vec4 uDecP[${Ce}];   // the lettering: side-view rect (z0, y0, z1, y1)
uniform vec4 uDecU[${Ce}];   // its atlas rect (u0, v0, u1, v1)
uniform vec4 uDecS[${Ce}];   // x: the side (1 left, -1 right, 0 both), y: on (1)
uniform sampler2D tAtlas;     // the lettering (top half) and the cockpit's placards and legends (bottom half)
uniform mat4 uViewToRest;     // the camera's view space -> the machine's own (rest) frame (index.js, every frame)
uniform vec4 uDoorsOpen;      // the doors' openness (front L, front R, slide L, slide R)
uniform float uPanelLight;    // the panels' backlighting (the legends glow with the power on)
${da}
${Pt()}
// INSIDE, A LAMP OUTSIDE SHINES IN ONLY THROUGH THE GLASS (or an open door): the ray from this point toward the lamp leaves the
// hull (a superquadric close to it) somewhere; the windows' masks there say whether that is glass. (Shadow maps would do it,
// but the floodlights and the city's fires do not all cast; without this the cabin's walls were lit as if transparent.)
float hpHullF(vec3 p) { vec3 q = vec3(p.x / 0.86, (p.y - 1.43) / 0.83, (p.z - 0.2) / 3.05); q = q * q; q = q * q; return q.x + q.y + q.z - 1.0; }
float hpLightVis(vec3 lightView) {
  if (vAO > 0.999) return 1.0;
  vec3 L = (uViewToRest * vec4(lightView, 1.0)).xyz;
  if (hpHullF(L) < 0.0) return 1.0;
  vec3 a = vRest;
  if (hpHullF(a) > 0.0) return 1.0;
  vec3 b = a + normalize(L - a) * min(length(L - a), 7.0);
  for (int i = 0; i < 8; i++) { vec3 m = (a + b) * 0.5; if (hpHullF(m) < 0.0) a = m; else b = m; }
  vec3 e = (a + b) * 0.5;
  float g = smoothstep(0.04, -0.04, hmGlass(e));
  float dF = smoothstep(0.04, -0.04, hm_dfront(e)) * (e.x > 0.0 ? uDoorsOpen.x : uDoorsOpen.y);
  float dS = smoothstep(0.04, -0.04, hm_dslide(e)) * (e.x > 0.0 ? uDoorsOpen.z : uDoorsOpen.w);
  return max(g, max(dF, dS));
}
float wkRough = -1.0, wkMetal = -1.0, wkH = 0.0, wkCoat = 1.0, wkGlow = 0.0, wkSheen = 0.0;
vec3 wkGlowCol = vec3(0.0);
`,
  pa = `
float hpKeep = hmKeep(vRest, vMode);
// (round each door a 3 mm gap on both sides of its outline: the door and the body never quite touch)
if (hpKeep < ((vMode > 0.5 && vMode < 5.5) ? 0.003 : 0.0)) discard;
{
  float kd = floor(vSurf.w + 0.5);
  if (kd == 12.0) {
    float fa = vWear.y > 0.5 ? uTRotorA : uRotor.w;
    if (fa < 0.999) { float dz = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))); if (dz > fa) discard; }
  }
}
`,
  ma = `
{
  vec3 P = vRest;
  vec3 Nn = normalize(vRestN);
  float kind = floor(vSurf.w + 0.5);
  vec3 col = diffuseColor.rgb;
  float rough = vSurf.x, metal = vSurf.y;
  float h = 0.0;
  float grime = vWear.x * uDirt, scuff = vWear.y, soot = vWear.z, dust = vWear.w;
  float fwP = length(fwidth(P)) * 0.7 + 1e-5;
  // ================================================================ THE SKIN (the painted fuselage, the deck, the boom, fins)
  if (kind == 1.0) {
    float zz = P.z, yy = P.y, ax = abs(P.x);
    if (uLivery < 0.5) {
      // white over a red belly; the red's edge runs low along the cabin and sweeps up into the all-red tail; a thin yellow line
      // rides 3 cm over it
      float edge = 0.96 + 0.06 * smoothstep(3.3, 2.5, zz) + 2.0 * smoothstep(-1.2, -2.75, zz) + 0.01 * sin(zz * 1.7);
      float red = smoothstep(0.003, -0.003, yy - edge);
      float yl = hpLine(yy - (edge + 0.038), 0.024, fwP) * (1.0 - smoothstep(-2.0, -2.45, zz));
      vec3 white = vec3(0.79, 0.785, 0.76), crimson = vec3(0.42, 0.018, 0.022), yellow = vec3(0.86, 0.56, 0.035);
      col = mix(white, crimson, red);
      col = mix(col, yellow, yl);
      // the tail's red ends at the fin's top in a white cap; the stabiliser white with red tips
      // (a fin cap and the stabiliser's tips: by height / span)
      if (zz < -5.9) col = mix(col, white, smoothstep(3.22, 3.24, yy));
      if (yy > 1.8 && yy < 2.2 && zz < -4.6 && zz > -5.6 && ax > 0.3) col = mix(white, crimson, smoothstep(1.0, 1.02, ax));
    } else {
      // olive drab, a little mottled and sun-faded on top; black lettering
      vec3 od = vec3(0.065, 0.075, 0.042);
      float mott = hpF(P * 1.3 + 7.0);
      col = od * (0.82 + 0.36 * mott);
      col = mix(col, col * 1.25 + vec3(0.01, 0.01, 0.0), smoothstep(0.3, 0.9, Nn.y) * 0.5);
      rough = 0.72; wkCoat = 0.15;
    }
    // ---- lettering (atlas, projected from the side): read on both sides (u runs nose -> tail on the left, tail -> nose on the right)
    {
      vec2 duv = vec2(-1.0); float dk = 0.0;
      for (int i = 0; i < ${Ce}; i++) {
        vec4 r = uDecP[i];
        if (uDecS[i].y < 0.5) continue;
        if (zz < r.x || zz > r.z || yy < r.y || yy > r.w) continue;
        if (uDecS[i].x * P.x < -0.0001) continue;
        if (ax < 0.02 && abs(Nn.x) < 0.3) continue;
        float fu = (zz - r.x) / (r.z - r.x);
        if (P.x > 0.0) fu = 1.0 - fu;
        float fv = (yy - r.y) / (r.w - r.y);
        duv = mix(uDecU[i].xy, uDecU[i].zw, vec2(fu, fv));
        dk = smoothstep(0.15, 0.45, abs(Nn.x));
      }
      if (dk > 0.0) {
        vec4 d = texture2D(tAtlas, duv);
        col = mix(col, d.rgb, d.a * dk);
        rough = mix(rough, 0.45, d.a * dk);
      }
    }
    // ---- panel lines and rivets (the pod's frames, the doors' gaps, the boom's rings, the cowlings' joints)
    {
      float seam = 0.0, riv = 0.0;
      // the pod: frames at these stations, joints along the belly and the roof
      float st[7]; st[0] = 2.66; st[1] = 0.97; st[2] = -0.70; st[3] = -1.92; st[4] = -2.30; st[5] = 1.62; st[6] = 0.12;
      if (zz > -2.6 && yy < 2.3) {
        for (int i = 0; i < 5; i++) seam = max(seam, hpLine(zz - st[i], 0.0022, fwP) * step(yy, 2.2) * step(0.66, yy));
        seam = max(seam, hpLine(yy - 0.78, 0.0022, fwP) * step(ax, 0.84));
        seam = max(seam, hpLine(yy - 2.16, 0.0022, fwP) * step(zz, 2.3) * step(-2.3, zz));
        // rivets: rows beside the joints
        float rz = 0.0;
        for (int i = 0; i < 5; i++) rz = max(rz, hpLine(zz - st[i] - 0.016, 0.0001, 0.0005));
        float along = fract(yy / 0.032);
        riv = max(riv, rz * (1.0 - smoothstep(0.18, 0.32, abs(along - 0.5))) * step(0.66, yy) * step(yy, 2.2));
        float ry = hpLine(yy - 0.795, 0.0001, 0.0005) + hpLine(yy - 2.145, 0.0001, 0.0005);
        riv = max(riv, ry * (1.0 - smoothstep(0.18, 0.32, abs(fract(zz / 0.032) - 0.5))));
        // the nose's avionics bay doors
        float bay = max(abs(zz - 2.86) - 0.2, abs(yy - 1.33) - 0.11);
        seam = max(seam, hpLine(bay, 0.0022, fwP) * step(2.5, zz));
      }
      // the boom: rings of rivets every 0.6 m, a joint along its top and bottom
      if (zz < -2.4 && zz > -6.9 && yy > 1.55 && yy < 2.35 && ax < 0.5) {
        float ringz = abs(fract((zz + 2.4) / 0.6 + 0.5) - 0.5) * 0.6;
        seam = max(seam, hpLine(ringz, 0.0018, fwP));
        riv = max(riv, hpLine(ringz - 0.014, 0.0001, 0.0005) * (1.0 - smoothstep(0.18, 0.32, abs(fract(atan(P.x, P.y - 2.0) * 0.18 / 0.03) - 0.5))));
      }
      // the deck: the cowlings' joints and their hinge line
      if (yy > 2.25 && zz > -2.7 && zz < 1.05) {
        seam = max(seam, hpLine(zz + 0.38, 0.0022, fwP));
        seam = max(seam, hpLine(zz + 2.18, 0.0022, fwP));
        seam = max(seam, hpLine(yy - 2.44, 0.0022, fwP) * step(0.35, ax) * step(zz, -0.38));
        // latches along the hinge line
        float lt = max(abs(fract((zz + 0.38) / 0.45) - 0.5) * 0.45 - 0.03, abs(yy - 2.38) - 0.012);
        seam = max(seam, (1.0 - smoothstep(0.0, fwP, lt)) * 0.7 * step(0.35, ax) * step(zz, -0.45) * step(-2.15, zz));
      }
      // the door gaps (the cut's own edge: hpKeep is the distance to it)
      float gap = (vMode > 0.5 && vMode < 5.5) ? (1.0 - smoothstep(0.003, 0.003 + fwP * 1.5, hpKeep)) : 0.0;
      col *= 1.0 - 0.55 * seam - 0.25 * riv - 0.7 * gap;
      h -= seam * 0.5 + gap * 0.6;
      h += riv * 0.35;
    }
    // ---- grime: running down from the joints and the windows, swept back by the air on the boom; dirt low down
    {
      float streak = hpF2(vec3(P.z * 9.0, P.y * 0.9, P.x * 3.0) + 3.0);
      float run = smoothstep(0.55, 0.85, streak) * (0.4 + 0.6 * hpN(P * 2.0));
      float low = 1.0 - smoothstep(0.62, 1.15, yy);
      float aft = smoothstep(-1.5, -2.6, zz) * hpF2(vec3(P.z * 0.6, P.y * 14.0, P.x * 14.0));
      float under = smoothstep(0.2, -0.6, Nn.y);
      float g = clamp(grime * (run * 0.35 + low * 0.45 + aft * 0.5 + under * 0.35) * (0.6 + 0.6 * hpF(P * 3.1)), 0.0, 1.0);
      col = mix(col, col * vec3(0.55, 0.52, 0.47) + vec3(0.012, 0.01, 0.008), g);
      rough = mix(rough, 0.75, g * 0.8);
      wkCoat *= 1.0 - g * 0.7;
    }
    // ---- exhaust soot: from both outlets back over the deck's tail and along the boom's top and sides
    {
      float behind = clamp(-2.2 - zz, 0.0, 6.0);
      float spread = 0.1 + behind * 0.09;
      float lat = min(abs(P.x - 0.33), abs(P.x + 0.33));
      float sootK = exp(-lat * lat / (spread * spread)) * smoothstep(-2.05, -2.35, zz) * exp(-behind * 0.32) * smoothstep(1.85, 2.3, yy + Nn.y * 0.2);
      sootK += smoothstep(-2.0, -2.3, zz) * smoothstep(0.55, 0.0, lat) * exp(-behind * 0.7) * 0.6 * step(2.3, yy);
      sootK *= (0.55 + 0.6 * hpF(vec3(P.z * 2.0, P.y * 8.0, P.x * 8.0)));
      sootK = clamp(sootK * (0.7 + soot) + uBurn * smoothstep(-0.2, -1.2, zz) * smoothstep(2.3, 2.6, yy) * hpF(P * 5.0) * 1.5, 0.0, 1.0);
      col = mix(col, vec3(0.018, 0.016, 0.015), sootK * 0.92);
      rough = mix(rough, 0.92, sootK);
      wkCoat *= 1.0 - sootK;
    }
    // ---- scuffs: boots on the door sills and the belly corners (dark rubber smears, here and there bare metal), hands round
    // the handles
    {
      float sill = (1.0 - smoothstep(0.74, 0.9, yy)) * smoothstep(-0.7, -0.5, zz) * (1.0 - smoothstep(2.3, 2.5, zz));
      float n1 = hpF(P * vec3(10.0, 22.0, 10.0) + 2.0), n2 = hpN(P * 70.0);
      float mark = clamp((sill * 0.9 + scuff * 0.5) * smoothstep(0.6, 0.78, n1 * 0.85 + n2 * 0.25), 0.0, 1.0);
      float bare = mark * smoothstep(0.82, 0.9, hpN(P * 140.0 + 3.0));
      col = mix(col, col * 0.42 + vec3(0.01), mark * 0.7);
      col = mix(col, uLivery < 0.5 ? vec3(0.3, 0.3, 0.29) : vec3(0.06, 0.06, 0.05), bare);
      rough = mix(rough, 0.7, mark);
      h -= bare * 0.4;
      wkCoat *= 1.0 - mark * 0.8;
    }
    // ---- a film of ash on what faces up
    {
      float up = smoothstep(0.25, 0.9, Nn.y);
      float dk = up * dust * (0.4 + 0.6 * smoothstep(0.3, 0.75, hpF(P * 4.0 + 9.0)));
      col = mix(col, vec3(0.2, 0.19, 0.18), dk * 0.5);
      rough = mix(rough, 0.9, dk);
      wkCoat *= 1.0 - dk * 0.8;
    }
    // (the paint's own fine orange-peel)
    h += (hpN(P * 220.0) - 0.5) * 0.04;
  }
  // ================================================================ PAINTED parts (skids, hoist, struts ...): chips, scrapes
  else if (kind == 2.0) {
    float n1 = hpF(P * 11.0 + 3.7), n2 = hpN(P * 55.0 - 1.3);
    float t = 1.0 - 0.38 * scuff;
    float chip = smoothstep(t - 0.006, t + 0.004, max(n1 * 1.05 - 0.02, n2 * 0.9));
    float ring = smoothstep(t - 0.035, t - 0.01, max(n1 * 1.05 - 0.02, n2 * 0.9)) * (1.0 - chip);
    col = mix(col, vec3(0.16, 0.155, 0.14), ring);
    col = mix(col, vec3(0.34, 0.33, 0.31), chip);
    metal = mix(metal, 0.8, chip); rough = mix(rough, 0.45, chip);
    h -= chip * 0.5 + ring * 0.15;
    wkCoat *= 1.0 - ring;
    float g = grime * (0.5 + 0.5 * hpF(P * 4.0)) * (0.5 + 0.5 * smoothstep(0.3, -0.5, Nn.y));
    col = mix(col, col * 0.55, g);
  }
  // ================================================================ METAL (hub, mast, rods, rails): machining, oil, grime
  else if (kind == 3.0) {
    float st = hpF(P * 24.0 + 5.0);
    col *= 0.82 + 0.3 * st;
    rough = clamp(rough + (hpN(P * 90.0) - 0.5) * 0.12, 0.05, 1.0);
    float oil = grime * smoothstep(0.45, 0.8, hpF(vec3(P.x * 30.0, P.y * 5.0, P.z * 30.0)));
    col = mix(col, vec3(0.02, 0.018, 0.015), oil * 0.8);
    rough = mix(rough, 0.25, oil);
  }
  // ================================================================ RUBBER (seals, boots): dull, a faint grain, dust in the folds
  else if (kind == 4.0) {
    col *= 0.85 + 0.25 * hpN(P * 160.0);
    rough = clamp(rough + (hpN(P * 40.0) - 0.5) * 0.15, 0.4, 1.0);
  }
  // ================================================================ PLASTIC (the panel, the consoles): a moulded grain, worn edges
  else if (kind == 5.0) {
    float grain = hpN(P * 520.0) * 0.6 + hpN(P * 190.0) * 0.4;
    h += (grain - 0.5) * 0.18;
    rough = clamp(rough + (grain - 0.5) * 0.12, 0.2, 1.0);
    float wear = scuff * smoothstep(0.6, 0.85, hpF(P * 30.0));
    col = mix(col, col * 1.5 + 0.02, wear);
    rough = mix(rough, rough - 0.2, wear);
    col *= 1.0 - grime * 0.35 * hpF(P * 6.0);
  }
  // ================================================================ TRIM (the cabin's lining): vinyl panels, their joints, scuffs low
  else if (kind == 6.0) {
    float zz = P.z, yy = P.y;
    col *= mix(1.0, 0.62, smoothstep(0.8, 1.05, zz));
    float seam = hpLine(yy - 1.30, 0.004, fwP) + hpLine(yy - 2.12, 0.004, fwP);
    float pz = abs(fract((zz + 0.31) / 0.62) - 0.5) * 0.62;
    seam += hpLine(pz, 0.004, fwP) * step(0.8, yy) * step(yy, 2.1);
    // the headliner: a quilted pad
    float hl = smoothstep(2.04, 2.1, yy);
    float q = hpLine(abs(fract(P.x / 0.11) - 0.5) * 0.11, 0.003, fwP) + hpLine(abs(fract(zz / 0.11) - 0.5) * 0.11, 0.003, fwP);
    seam += q * hl * 0.6;
    col *= 1.0 - 0.35 * clamp(seam, 0.0, 1.0);
    col = mix(col, col * 1.08, hl);
    h -= clamp(seam, 0.0, 1.0) * 0.5;
    h += (hpN(P * 300.0) - 0.5) * 0.08;
    float low = 1.0 - smoothstep(0.7, 1.15, yy);
    float sc = clamp(grime * (low * 0.8 + 0.25) * smoothstep(0.45, 0.85, hpF(P * 7.0)), 0.0, 1.0);
    col = mix(col, col * 0.5, sc);
  }
  // ================================================================ FABRIC / LEATHER (the seats): creases, wear on the bolsters
  else if (kind == 7.0) {
    float cr = abs(hpF2(P * vec3(9.0, 16.0, 9.0)) - 0.5);
    float crease = (1.0 - smoothstep(0.0, 0.022, cr)) * smoothstep(0.55, 0.8, hpN(P * 4.0 + 1.0));
    col = mix(col, col * 0.7, crease * 0.5);
    h -= crease * 0.25;
    float shine = smoothstep(0.5, 0.85, hpN(P * vec3(4.0, 2.0, 4.0) + 2.0));
    rough = mix(rough, rough - 0.18, shine);
    h += (hpN(P * 420.0) - 0.5) * 0.12;
    float worn = scuff * smoothstep(0.55, 0.8, hpF(P * 14.0));
    col = mix(col, col * 1.6 + 0.015, worn);
  }
  // ================================================================ WEBBING (the harnesses): a weave
  else if (kind == 8.0) {
    float wv = abs(sin(vUv.y * 1400.0)) * abs(sin(vUv.x * 900.0));
    col *= 0.8 + 0.32 * wv;
    h += wv * 0.08;
  }
  // ================================================================ FLOOR: ribbed rubber, dirt, worn bare where feet go
  else if (kind == 9.0) {
    float rib = abs(fract(P.x / 0.012) - 0.5);
    float rb = smoothstep(0.18, 0.32, rib);
    col *= 0.8 + 0.25 * rb;
    h += rb * 0.2;
    float d = clamp(grime * smoothstep(0.35, 0.75, hpF(P * 3.0 + 2.0)), 0.0, 1.0);
    col = mix(col, vec3(0.045, 0.038, 0.03), d * 0.8);
    rough = mix(rough, 0.95, d);
  }
  // ================================================================ DECALS / PLACARDS / LEGENDS (the atlas, by uv)
  else if (kind == 10.0) {
    vec4 d = texture2D(tAtlas, vUv);
    col = mix(col, d.rgb, d.a);
    rough = mix(rough, 0.4, d.a);
    // (backlit legends: the light parts of a panel's face glow softly with the power on; vWear.x = 1 marks a lit panel)
    float lum = dot(d.rgb, vec3(0.3333));
    wkGlow = uPanelLight * vWear.x * smoothstep(0.45, 0.85, lum) * d.a;
    wkGlowCol = vec3(1.0, 0.88, 0.7) * 0.32;
  }
  // ================================================================ LAMPS: the lens, lit from inside (uLamp[id])
  else if (kind == 11.0) {
    int li = int(vWear.x + 0.5);
    vec4 L = vec4(0.0);
    for (int i = 0; i < ${Rt}; i++) if (i == li) L = uLamp[i];
    float fres = hpN(P * 400.0);
    col = mix(col, col * 0.5 + 0.05, 0.3 * fres);
    rough = 0.08;
    wkGlow = 1.0; wkGlowCol = L.rgb;
    h += (fres - 0.5) * 0.1;
  }
  // ================================================================ BLADES: the paint, the tip bands, the leading edge's strip
  else if (kind == 12.0) {
    float r = vUv.x, ch = vUv.y;
    if (vWear.y < 0.5) {
      col = mix(col, vec3(0.75, 0.48, 0.02), smoothstep(uRotor.z - 0.33, uRotor.z - 0.325, r));
      col = mix(col, vec3(0.62, 0.62, 0.6), (1.0 - smoothstep(0.035, 0.05, ch)) * 0.8);
      metal = mix(metal, 0.9, 1.0 - smoothstep(0.035, 0.05, ch));
    } else {
      float band = fract((r - 0.5) / 0.16);
      col = mix(col, r > 0.5 ? (band < 0.5 ? vec3(0.55, 0.02, 0.02) : vec3(0.78, 0.78, 0.76)) : col, step(0.5, r));
    }
    col *= 0.85 + 0.25 * hpN(vec3(r * 3.0, ch * 8.0, 1.0));
  }
  // ================================================================ NET (cargo nets): a diamond mesh, the holes cut away
  else if (kind == 13.0) {
    vec2 q = vUv / 0.075;
    vec2 dq = vec2(q.x + q.y, q.x - q.y);
    vec2 g = abs(fract(dq) - 0.5);
    float strand = 1.0 - smoothstep(0.06, 0.1, min(g.x, g.y));
    if (strand < 0.5) discard;
    col *= 0.8 + 0.3 * hpN(vec3(q * 9.0, 1.0));
  }
  // ================================================================ DARK GLASS (the army's windows; the dead screens)
  else if (kind == 14.0) {
    float sm = hpF(P * 30.0);
    rough = mix(0.04, 0.22, smoothstep(0.5, 0.75, sm));
    metal = 0.0;
  }
  // ================================================================ GRILLE (the intakes' screens): a woven wire mesh
  else if (kind == 15.0) {
    vec2 q = vec2(P.z, P.y) / 0.006;
    float w = max(1.0 - smoothstep(0.1, 0.3, abs(fract(q.x) - 0.5)), 1.0 - smoothstep(0.1, 0.3, abs(fract(q.y) - 0.5)));
    col = mix(vec3(0.004), col, w);
    h += w * 0.3;
    rough = mix(0.9, 0.5, w);
  }
  // ---- (any kind) a dial of general grime on what is low and faces down (not the lamps, decals or glass)
  if (kind != 1.0 && kind != 10.0 && kind != 11.0 && kind != 14.0) col *= 1.0 - 0.18 * uDirt * vWear.x * (1.0 - smoothstep(-0.3, 0.6, Nn.y));
  diffuseColor.rgb = col;
  wkRough = clamp(rough, 0.04, 1.0); wkMetal = clamp(metal, 0.0, 1.0); wkH = h;
}
`,
  va = `
{
  vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition);
  vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
  float det = dot(sx, r1);
  vec2 dh = vec2(dFdx(wkH), dFdy(wkH)) * 0.0022;
  vec3 g = sign(det) * (dh.x * r1 + dh.y * r2);
  normal = normalize(abs(det) * normal - g);
}
`;
