// assets__house-BEzMWI26 06 — math
// Lines 1744-1938 of readable/assets__house-BEzMWI26.pretty.js (statement-aligned).
function St(s) {
  const o = [],
    e = [],
    n = [];
  for (const u of s) {
    const d = u.index ? u.toNonIndexed() : u;
    d.computeVertexNormals();
    const a = d.attributes.position,
      h = d.attributes.color,
      c = d.attributes.normal;
    for (let m = 0; m < a.count; m++)
      (o.push(a.getX(m), a.getY(m), a.getZ(m)),
        e.push(h.getX(m), h.getY(m), h.getZ(m)),
        n.push(c.getX(m), c.getY(m), c.getZ(m)));
  }
  const t = new ee();
  return (
    t.setAttribute("position", new g0(o, 3)),
    t.setAttribute("color", new g0(e, 3)),
    t.setAttribute("normal", new g0(n, 3)),
    t
  );
}
let A0 = null;
function Ee() {
  if (A0) return A0;
  const s = 64,
    o = new Uint8Array(s * s * 4);
  for (let e = 0; e < s; e++)
    for (let n = 0; n < s; n++) {
      const t = Math.hypot((n + 0.5) / s - 0.5, (e + 0.5) / s - 0.5) * 2,
        u = Math.max(0, 1 - t),
        d = Math.round(255 * (0.5 * u * u * u + 0.5 * Math.pow(u, 10))),
        a = (e * s + n) * 4;
      ((o[a] = o[a + 1] = o[a + 2] = 255), (o[a + 3] = d));
    }
  return (
    (A0 = new we(o, s, s, xe)),
    (A0.needsUpdate = !0),
    (A0.magFilter = A0.minFilter = ye),
    A0
  );
}
const He = ["W2"],
  be = 24,
  N0 = (s, o, e) => {
    const n = Math.max(0, Math.min(1, (e - s) / (o - s)));
    return n * n * (3 - 2 * n);
  };
function de(s, o, e) {
  const n = T0[s],
    t = Ve(s),
    u = Math.min(t.sOf(n.a), t.sOf(n.b)) - e,
    d = Math.max(t.sOf(n.a), t.sOf(n.b)) + e;
  return [
    [u, n.y0 - e],
    [d, n.y0 - e],
    [d, n.y1 + e],
    [u, n.y1 + e],
  ].map(([a, h]) => new j(...Xe(t, a, h, o)));
}
function Ke(s, o) {
  let e = 99;
  (o.y < 0 && (e = Math.min(e, (s.y - I0 - 0.004) / -o.y)),
    o.x < 0
      ? (e = Math.min(e, (s.x - n0.x0) / -o.x))
      : o.x > 0 && (e = Math.min(e, (n0.x1 - s.x) / o.x)),
    o.z > 0
      ? (e = Math.min(e, (n0.z1 - s.z) / o.z))
      : o.z < 0 && (e = Math.min(e, (s.z - n0.z0) / -o.z)));
  const n = [
    [n0.x0, 3.34, 0, 200.41, 1.98, 201.55],
    [n0.x0, v0.front, 0, v0.z0, 2.6, v0.z1],
    [m0.cx - m0.hx, m0.cx + m0.hx, 0, m0.cz - m0.hz, m0.top, m0.cz + m0.hz],
    [z0.x0, z0.x1, 0, z0.z0, 0.66, z0.z1],
  ];
  for (const [t, u, d, a, h, c] of n) {
    let m = 0,
      g = e;
    for (const [w, M, p, C] of [
      [s.x, o.x, t, u],
      [s.y, o.y, d, h],
      [s.z, o.z, a, c],
    ]) {
      if (Math.abs(M) < 1e-6) {
        if (w < p || w > C) {
          m = 1e9;
          break;
        }
        continue;
      }
      let A = (p - w) / M,
        L = (C - w) / M;
      (A > L && ([A, L] = [L, A]), (m = Math.max(m, A)), (g = Math.min(g, L)));
    }
    m < g && m > 0.02 && (e = Math.min(e, m));
  }
  return e;
}
let C0 = null;
function Wt() {
  if (C0) return C0;
  const s = 128,
    o = 64,
    e = new Uint8Array(s * o * 4);
  let n = 7;
  const t = () => ((n = (n * 16807) % 2147483647), n / 2147483647),
    u = new Float32Array(s * o);
  for (let d = 0; d < s * o; d++) u[d] = t();
  for (let d = 0; d < 2; d++)
    for (let a = 0; a < o; a++)
      for (let h = 1; h < s; h++)
        u[a * s + h] = u[a * s + h] * 0.35 + u[a * s + h - 1] * 0.65;
  for (let d = 0; d < o; d++)
    for (let a = 0; a < s; a++) {
      const h = a / (s - 1),
        c = d / (o - 1),
        m =
          Math.pow(1 - h, 1.9) *
          Math.min(1, c / 0.1) *
          Math.min(1, (1 - c) / 0.1) *
          (0.66 + 0.34 * u[d * s + a]),
        g = (d * s + a) * 4;
      ((e[g] = e[g + 1] = e[g + 2] = 255), (e[g + 3] = Math.round(255 * m)));
    }
  return (
    (C0 = new we(e, s, o, xe)),
    (C0.needsUpdate = !0),
    (C0.magFilter = C0.minFilter = ye),
    C0
  );
}
const Bt = `
attribute float aSlit;
attribute float aWin;
attribute float aBright;
uniform vec3 uBlk[${be}];
uniform vec3 uWin;
varying vec2 vUv;
varying vec3 vBlk;
varying float vK;
varying float vFace;
void main() {
  vUv = uv;
  vBlk = uBlk[int(aSlit + 0.5)];
  float w = aWin < 0.5 ? uWin.x : (aWin < 1.5 ? uWin.y : uWin.z);
  vK = w * aBright;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 nrm = normalize(mat3(modelMatrix) * normal);
  vFace = abs(dot(nrm, normalize(cameraPosition - wp.xyz)));
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,
  Ft = `
uniform sampler2D uTex;
uniform vec3 uCol;
varying vec2 vUv;
varying vec3 vBlk;
varying float vK;
varying float vFace;
void main() {
  float a = texture2D(uTex, vUv).a * vK;
  // (a body outside in the light's way: that part of the crack is dark, and so is its sheet)
  float blk = vBlk.z * smoothstep(vBlk.x - 0.04, vBlk.x + 0.02, vUv.y) * (1.0 - smoothstep(vBlk.y - 0.02, vBlk.y + 0.04, vUv.y));
  a *= 1.0 - blk;
  // (a sheet of lit dust as thin as the crack: faint seen across it, a bright thread seen along it)
  a *= clamp(0.3 / max(vFace, 0.06), 0.3, 4.0);
  if (a < 0.002) discard;
  gl_FragColor = vec4(uCol * a, 1.0);
}`,
  At = `
attribute float aWin;
uniform vec3 uK;
varying float vK;
varying float vY;
varying float vSide;
void main() {
  vK = aWin < 0.5 ? uK.x : (aWin < 1.5 ? uK.y : uK.z);
  vSide = aWin;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vY = wp.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,
  Ct = `
uniform vec3 uCol;
uniform vec3 uGain;
varying float vK;
varying float vY;
varying float vSide;
void main() {
  if (vK < 0.002) discard;
  float g = vSide < 0.5 ? uGain.x : (vSide < 1.5 ? uGain.y : uGain.z);
  // (the night outside: the sky bright above, the moonlit clearing dimmer below)
  float sky = mix(0.38, 1.0, smoothstep(-0.2, 2.8, vY));
  gl_FragColor = vec4(uCol * g * sky, vK);
}`;
