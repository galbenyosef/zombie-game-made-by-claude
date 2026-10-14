// assets__exterior-BqAhvNw2 03 — push
// Lines 493-688 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
const be = `
varying vec3 vWorld;
varying vec3 vN;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  ze = 48,
  Me = `
varying vec3 vWorld;
varying vec3 vN;
uniform vec4 uAve[48];
${c0}
${m0}
${N0}
uint exIhash(uint x) { x ^= x >> 16u; x *= 0x7feb352du; x ^= x >> 15u; x *= 0x846ca68bu; x ^= x >> 16u; return x; }
float districtOn(vec2 p) {
  int a = int(floor(p.x / 280.0)), b = int(floor(p.y / 280.0));
  return float((exIhash(uint(a * 7919 + b * 104729 + 9000000)) & 1023u) < 470u);
}
float slotOn(float a, float b, float s) {
  return float((exIhash(uint(int(a) * 7919 + int(b) * 104729 + int(s) * 31 + 5000000)) & 1023u) < 880u);
}
float pool(vec2 p, vec2 lamp, float on) {
  vec2 d = p - lamp;
  return on * 60.0 / (dot(d, d) + 60.0);
}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vN);
  vec3 V = normalize(P - cameraPosition);
  vec2 p = P.xz;
  // ---- which kind of ground: a north-south street, an east-west street, or a block (pavement / yard)
  float kx = floor((p.x - ${Y.x0.toFixed(1)}) / ${y0.dx.toFixed(1)});
  float rx = p.x - ${Y.x0.toFixed(1)} - kx * ${y0.dx.toFixed(1)};
  float nsS = step(0.0, rx) * step(rx, 16.0);
  float ewS = 0.0, jz = 0.0, z0 = 0.0, z1 = 0.0, band = 0.0;
  if (p.y < -66.0) { jz = floor((-66.0 - p.y) / 76.0); float rr = -66.0 - p.y - jz * 76.0; ewS = step(rr, 16.0); z0 = -82.0 - 76.0 * jz; z1 = -66.0 - 76.0 * jz; band = jz + 100.0; }
  else if (p.y > 60.0) { jz = floor((p.y - 60.0) / 76.0); float rr = p.y - 60.0 - jz * 76.0; ewS = step(rr, 16.0); z0 = 60.0 + 76.0 * jz; z1 = 76.0 + 76.0 * jz; band = jz + 200.0; }
  float ave = step(-40.0, p.y) * step(p.y, -0.2);
  float street = max(max(nsS, ewS), ave);
  // ---- surface
  float n = exFbm3(p * 0.35);
  float n2 = exNoise(p * 2.7);
  vec3 asphalt = vec3(0.052, 0.051, 0.053) * (0.75 + 0.5 * n) * (0.9 + 0.2 * n2);
  vec3 pave = vec3(0.075, 0.070, 0.064) * (0.75 + 0.5 * n);
  // pavement strips along the street edges (curb lines)
  float edgeNS = min(rx, 16.0 - rx);
  float edgeEW = min(p.y - z0, z1 - p.y);
  float walk = (nsS > 0.5 ? step(edgeNS, 3.2) : 0.0) + (ewS > 0.5 && nsS < 0.5 ? step(edgeEW, 3.2) : 0.0);
  vec3 alb = mix(pave * 0.8, asphalt, street);
  alb = mix(alb, pave, clamp(walk, 0.0, 1.0));
  // lane markings (dashed centre lines), only where the pixel can hold them
  vec2 fw = fwidth(p);
  float mk = 0.0;
  if (fw.x < 0.25) {
    float cx = abs(rx - 8.0);
    mk += nsS * (1.0 - smoothstep(0.06, 0.06 + fw.x, cx)) * step(0.5, fract(p.y / 6.0));
    float cz = abs(p.y - (z0 + z1) * 0.5);
    mk += ewS * (1.0 - nsS) * (1.0 - smoothstep(0.06, 0.06 + fw.y, cz)) * step(0.5, fract(p.x / 6.0));
    mk *= 1.0 - 0.6 * smoothstep(0.1, 0.25, fw.x);
  }
  // the avenue: three lanes each way, edge lines, a zebra where the cross street meets it, manholes
  if (ave > 0.5 && fw.x < 0.3) {
    float z = p.y;
    float dash = step(0.45, fract(p.x / 9.0));
    float lw = 0.07 + fw.y;
    float lanes = 0.0;
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 30.7))) * dash + (1.0 - smoothstep(0.0, lw, abs(z + 26.4))) * dash;
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 13.8))) * dash + (1.0 - smoothstep(0.0, lw, abs(z + 9.5))) * dash;
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 34.6))) + (1.0 - smoothstep(0.0, lw, abs(z + 22.5)));
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 17.7))) + (1.0 - smoothstep(0.0, lw, abs(z + 5.6)));
    float zeb = step(0.5, fract(z / 1.2)) * (step(abs(p.x - 11.2), 1.6) + step(abs(p.x - 31.8), 1.6)) * step(z, -5.4) * step(-34.8, z);
    float wear = smoothstep(0.35, 0.75, exNoise(p * 0.6 + 9.0));
    mk += clamp(lanes + zeb, 0.0, 1.0) * (0.35 + 0.65 * wear);
    vec2 mh = vec2(fract((p.x + 7.0) / 41.0) - 0.5, 0.0) * 41.0; mh.y = mod(z + 13.0, 17.0) - 8.5;
    float man = 1.0 - smoothstep(0.30, 0.34, length(mh));
    alb = mix(alb, vec3(0.020, 0.019, 0.018), man * 0.9);
  }
  alb = mix(alb, vec3(0.30, 0.28, 0.22), clamp(mk, 0.0, 1.0) * 0.6);
  // ---- the lamps of the grid: sodium pools where the district still has power
  vec3 lampL = vec3(0.0);
  if (street > 0.5 && ave < 0.5) {
    float s = 0.0;
    if (nsS > 0.5) {
      float x0 = ${Y.x0.toFixed(1)} + kx * ${y0.dx.toFixed(1)};
      float iw = floor(p.y / 32.0 + 0.5); vec2 lw = vec2(x0 + 1.0, iw * 32.0);
      float ie = floor((p.y - 16.0) / 32.0 + 0.5); vec2 le = vec2(x0 + 15.0, ie * 32.0 + 16.0);
      s += pool(p, lw, districtOn(lw) * slotOn(kx, iw, 0.0));
      s += pool(p, le, districtOn(le) * slotOn(kx, ie, 1.0));
    }
    if (ewS > 0.5) {
      float ia = floor((p.x - 8.0) / 32.0 + 0.5); vec2 la = vec2(ia * 32.0 + 8.0, z0 + 1.0);
      float ib = floor((p.x - 24.0) / 32.0 + 0.5); vec2 lb = vec2(ib * 32.0 + 24.0, z1 - 1.0);
      s += pool(p, la, districtOn(la) * slotOn(band, ia, 2.0));
      s += pool(p, lb, districtOn(lb) * slotOn(band, ib, 3.0));
    }
    lampL = vec3(1.0, 0.42, 0.11) * s * 0.55;
  }
  // the avenue's own lamps (and the stretch of the cross street near it): real pools, some of them flickering
  // puddles: flat mirrors in the asphalt
  float puddle = smoothstep(0.55, 0.75, exNoise(p * 0.22 + 3.0)) * street;
  float wetK = mix(0.35, 1.0, puddle) * mix(0.35, 1.0, street);
  float rough = mix(0.35, 0.03, puddle);
  vec3 spec = vec3(0.0);
  if (p.y > -205.0 && p.y < 2.0 && abs(p.x) < 270.0) {
    float s = 0.0, sg = 0.0;
    float shin = mix(60.0, 900.0, puddle);
    for (int i = 0; i < 48; i++) {
      vec4 l = uAve[i];
      if (l.w <= 0.0) continue;
      vec3 d = vec3(l.x, l.y, l.z) - P;
      float r2 = dot(d, d);
      vec3 ld = d * inversesqrt(r2);
      s += l.w * max(d.y, 0.0) / (r2 * sqrt(r2) + 1.0);
      vec3 hv = normalize(ld - V);
      sg += l.w * pow(max(hv.y, 0.0), shin) * (shin + 8.0) * 0.010 * max(ld.y, 0.0) / (r2 + 1.0);
    }
    lampL += vec3(1.0, 0.42, 0.11) * s;
    spec = vec3(1.0, 0.45, 0.13) * sg * mix(0.35, 1.0, puddle);
  }
  vec3 L = exLight(P, N) + lampL;
  vec3 col = alb * L + wetReflect(V, N, rough) * wetK + spec + exSpec(P, N, V, mix(60.0, 700.0, puddle)) * wetK * 0.25;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function ke(t, i) {
  const a = [],
    e = [];
  for (let p = -1; p <= 1; p += 2)
    for (let b = 0; b <= 44; b++) {
      const N = b / 44;
      a.push(p * (N * N * 1180 + N * 280));
    }
  for (let p = 0; p <= 70; p++) {
    const b = p / 70;
    e.push(-(b * b * 1150 + b * 320));
  }
  for (let p = 1; p <= 12; p++) e.push(p * 45);
  const s = [...new Set(a.map((p) => Math.round(p * 10) / 10))].sort(
      (p, b) => p - b,
    ),
    l = [...new Set(e.map((p) => Math.round(p * 10) / 10))].sort(
      (p, b) => p - b,
    ),
    d = [],
    v = [];
  for (let p = 0; p < l.length; p++)
    for (let b = 0; b < s.length; b++) {
      const N = s[b],
        o = l[p];
      let u = t0(N, o);
      d.push(N, u, o);
    }
  for (let p = 0; p < l.length - 1; p++)
    for (let b = 0; b < s.length - 1; b++) {
      const N = p * s.length + b,
        o = N + 1,
        u = N + s.length,
        z = u + 1;
      v.push(N, u, o, o, u, z);
    }
  const x = new z0();
  if (
    (x.setAttribute("position", new o0(d, 3)),
    x.setIndex(v),
    x.computeVertexNormals(),
    x.attributes.normal.getY(0) < 0)
  ) {
    for (let p = 0; p < v.length; p += 3) {
      const b = v[p + 1];
      ((v[p + 1] = v[p + 2]), (v[p + 2] = b));
    }
    (x.setIndex(v), x.computeVertexNormals());
  }
  const k = n0({
      vertexShader: be,
      fragmentShader: Me,
      uniforms: {
        ...i,
        uAve: { value: Array.from({ length: ze }, () => new T0()) },
      },
    }),
    m = new e0(x, k);
  return (
    (m.name = "city_ground"),
    (m.frustumCulled = !1),
    { mesh: m, mat: k }
  );
}
