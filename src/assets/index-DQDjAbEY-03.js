// assets/index-DQDjAbEY 03 — push
// Lines 684-1014 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function Pt() {
  let e = `float hSmax(float a, float b, float k) { float h = max(k - abs(a - b), 0.0) / k; return max(a, b) + h * h * k * 0.25; }
`;
  for (const [l, a] of Object.entries(to)) {
    e += `float hm_${l}(vec3 p) {
  float ax = abs(p.x); float d = -1000.0;
`;
    for (const o of a.c) {
      const t = o[0] === "s" ? "p.z" : "ax",
        s = o[0] === "t" ? "p.z" : "p.y";
      e += `  d = hSmax(d, ${Ge(o[1])} + ${Ge(o[2])} * ${t} + ${Ge(o[3])} * ${s} + ${Ge(o[4])} * ${t} * ${t}, ${Ge(a.k)});
`;
    }
    e += `  return d;
}
`;
  }
  return (
    (e += `float hmBody(vec3 p) { return min(min(min(hm_ws(p), hm_chin(p)), min(hm_ovh(p), hm_rwin(p))), min(hm_dfront(p), hm_dslide(p))); }
`),
    (e += `float hmGlass(vec3 p) { return min(min(min(hm_ws(p), hm_chin(p)), min(hm_ovh(p), hm_rwin(p))), min(hm_wfront(p), hm_wslide(p))); }
`),
    (e += `float hmDoorF(vec3 p) { return hSmax(hm_dfront(p), -hm_wfront(p), 0.02); }
`),
    (e += `float hmDoorS(vec3 p) { return hSmax(hm_dslide(p), -hm_wslide(p), 0.02); }
`),
    (e += `float hmKeep(vec3 p, float mode) {
  if (mode < 0.5) return 1.0;
  if (mode < 1.5) return hmBody(p);
  if (mode < 3.5) return -hmDoorF(p);
  if (mode < 5.5) return -hmDoorS(p);
  return -hmGlass(p);
}
`),
    e
  );
}
function ta(
  e,
  {
    s0: l = 0,
    s1: a = 1,
    th0: o = Oe,
    th1: t = Oe + Math.PI * 2,
    ns: s = 240,
    nt: n = 360,
    smoothIt: c = 2,
  } = {},
) {
  const i = new Float64Array((s + 1) * (n + 1)),
    d = (y, M) => y * (n + 1) + M,
    f = (y) => l + (a - l) * (y / s),
    p = (y) => o + (t - o) * (y / n),
    m = new H0();
  for (let y = 0; y <= s; y++)
    for (let M = 0; M <= n; M++)
      (ze(f(y), p(M), m), (i[d(y, M)] = e(m.x, m.y, m.z)));
  const x = new Map(),
    w = new Map(),
    v = (y, M, F) => (y * (n + 1) + M) * 2 + F,
    u = (y, M, F) => {
      const A = v(y, M, F);
      if (!x.has(A)) {
        const W = i[d(y, M)],
          N = F ? i[d(y, M + 1)] : i[d(y + 1, M)],
          D = W / (W - N);
        x.set(A, F ? { s: f(y), th: p(M + D) } : { s: f(y + D), th: p(M) });
      }
      return A;
    },
    g = (y, M) => {
      ((w.get(y) || w.set(y, []).get(y)).push(M),
        (w.get(M) || w.set(M, []).get(M)).push(y));
    };
  for (let y = 0; y < s; y++)
    for (let M = 0; M < n; M++) {
      const F = i[d(y, M)] < 0,
        A = i[d(y + 1, M)] < 0,
        W = i[d(y + 1, M + 1)] < 0,
        N = i[d(y, M + 1)] < 0,
        D = (F ? 1 : 0) | (A ? 2 : 0) | (W ? 4 : 0) | (N ? 8 : 0);
      if (D === 0 || D === 15) continue;
      const $ = [
          () => u(y, M, 0),
          () => u(y + 1, M, 1),
          () => u(y, M + 1, 0),
          () => u(y, M, 1),
        ],
        u0 = {
          1: [[0, 3]],
          2: [[0, 1]],
          3: [[1, 3]],
          4: [[1, 2]],
          5: [
            [0, 1],
            [2, 3],
          ],
          6: [[0, 2]],
          7: [[2, 3]],
          8: [[2, 3]],
          9: [[0, 2]],
          10: [
            [0, 3],
            [1, 2],
          ],
          11: [[1, 2]],
          12: [[1, 3]],
          13: [[0, 1]],
          14: [[0, 3]],
        }[D];
      for (const [L, T] of u0) g($[L](), $[T]());
    }
  const P = new Set(),
    k = [];
  for (const y of w.keys()) {
    if (P.has(y)) continue;
    let M = y;
    {
      const D = new Set([M]);
      let $ = null,
        u0 = M;
      for (;;) {
        const L = (w.get(u0) || []).filter((T) => T !== $ && !D.has(T));
        if (!L.length) break;
        if ((($ = u0), (u0 = L[0]), D.add(u0), (w.get(u0) || []).length < 2)) {
          M = u0;
          break;
        }
      }
    }
    const F = [M];
    P.add(M);
    let A = null,
      W = M;
    for (;;) {
      const D = (w.get(W) || []).filter(($) => $ !== A && !P.has($));
      if (!D.length) break;
      ((A = W), (W = D[0]), P.add(W), F.push(W));
    }
    const N = (w.get(W) || []).includes(M) && F.length > 2;
    k.push({ closed: N, pts: F.map((D) => ({ ...x.get(D) })) });
  }
  for (const y of k) {
    for (let M = 0; M < c; M++) {
      const F = y.pts,
        A = F.length,
        W = [];
      if (y.closed)
        for (let N = 0; N < A; N++) {
          const D = F[N],
            $ = F[(N + 1) % A];
          W.push(
            { s: D.s * 0.75 + $.s * 0.25, th: D.th * 0.75 + $.th * 0.25 },
            { s: D.s * 0.25 + $.s * 0.75, th: D.th * 0.25 + $.th * 0.75 },
          );
        }
      else {
        W.push(F[0]);
        for (let N = 0; N < A - 1; N++) {
          const D = F[N],
            $ = F[N + 1];
          W.push(
            { s: D.s * 0.75 + $.s * 0.25, th: D.th * 0.75 + $.th * 0.25 },
            { s: D.s * 0.25 + $.s * 0.75, th: D.th * 0.25 + $.th * 0.75 },
          );
        }
        W.push(F[A - 1]);
      }
      y.pts = W;
    }
    ((y.pos = y.pts.map((M) => ze(M.s, M.th))),
      (y.nrm = y.pts.map((M) => eo(M.s, M.th))));
  }
  return k;
}
function Gt(e, l, a, o = !0) {
  const t = e.length,
    s = o ? t : t - 1,
    n = [0];
  for (let p = 0; p < s; p++) n.push(n[p] + e[p].distanceTo(e[(p + 1) % t]));
  const c = n[s],
    i = Math.max(o ? 3 : 2, Math.round(c / a)),
    d = [],
    f = [];
  for (let p = 0; p < (o ? i : i + 1); p++) {
    const m = (p / i) * c;
    let x = 0;
    for (; x < s - 1 && n[x + 1] < m;) x++;
    const w = (m - n[x]) / Math.max(n[x + 1] - n[x], 1e-9),
      v = e[x],
      u = e[(x + 1) % t];
    (d.push(v.clone().lerp(u, m0(w))),
      f.push(
        l[x]
          .clone()
          .lerp(l[(x + 1) % t], m0(w))
          .normalize(),
      ));
  }
  return { pos: d, nrm: f, len: c };
}
const it = { z0: -2.78, z1: 1.04 },
  oa = ae([
    [-2.78, 0.3],
    [-2.55, 0.42],
    [-2.1, 0.55],
    [-1.2, 0.6],
    [-0.3, 0.58],
    [0.4, 0.52],
    [0.8, 0.42],
    [1.04, 0.3],
  ]),
  aa = ae([
    [-2.78, 2.42],
    [-2.5, 2.6],
    [-2.05, 2.78],
    [-1, 2.83],
    [-0.35, 2.85],
    [0.2, 2.88],
    [0.62, 2.8],
    [0.9, 2.62],
    [1.04, 2.4],
  ]);
function Ut(e) {
  return { W: oa(e), T: aa(e), B: 2.02, p: 2.9 };
}
const O0 = { z0: -2, z1: -6.92, brk: -5.56 },
  na = ae([
    [-6.92, 2.06],
    [-5, 2.02],
    [-3.3, 1.97],
    [-2.6, 1.9],
    [-2, 1.8],
  ]),
  sa = ae([
    [-6.92, 0.135],
    [-5, 0.17],
    [-3.4, 0.24],
    [-2.8, 0.34],
    [-2.3, 0.46],
    [-2, 0.52],
  ]),
  ra = ae([
    [-6.92, 0.15],
    [-5, 0.185],
    [-3.4, 0.25],
    [-2.8, 0.36],
    [-2.3, 0.5],
    [-2, 0.56],
  ]);
function ie(e) {
  return { C: na(e), rx: sa(e), ry: ra(e) };
}
const Xe = 24,
  _ = {
    DOOR_FL: 1,
    DOOR_FR: 2,
    DOOR_RL: 3,
    DOOR_RR: 4,
    ROTOR: 5,
    TROTOR: 6,
    CYC_L: 7,
    CYC_R: 8,
    COL_L: 9,
    COL_R: 10,
    PED_LL: 11,
    PED_LR: 12,
    PED_RL: 13,
    PED_RR: 14,
    SL_PAN: 15,
    SL_TILT: 16,
    THR_1: 17,
    THR_2: 18,
    HOOK: 19,
    BRK_BODY: 20,
    BRK_TAIL: 21,
    CABLES: 22,
  },
  Rt = 12,
  f0 = {
    NAV_L: 0,
    NAV_R: 1,
    NAV_TAIL: 2,
    BCN_TOP: 3,
    BCN_BELLY: 4,
    STROBE_L: 5,
    STROBE_R: 6,
    SEARCH: 7,
    LANDING: 8,
    CABIN: 9,
  },
  Ce = 14,
  la = `
attribute vec4 aSurf;
attribute vec4 aWear;
attribute vec3 aTag;
attribute float aAO;
varying float vAO;
uniform mat4 uPart[${Xe}];
uniform vec4 uRotor;          // x droop at the tip (m, at rest), y coning at the tip (m), z R (m), w the blades' fade (1 shown)
uniform float uTRotorA;       // the tail rotor's blades shown (1) .. faded (0)
varying vec4 vSurf;
varying vec4 vWear;
varying vec3 vRest;
varying vec3 vRestN;
varying float vMode;
`,
  ia = `
int hpI = int(aTag.x + 0.5);
mat4 hpM = uPart[hpI];
vSurf = aSurf; vWear = aWear; vMode = aTag.y; vAO = aAO;
vRest = position - normal * aTag.z;
vRestN = normal;
objectNormal = mat3(hpM) * objectNormal;
`,
  ca = `
if (hpI == ${fa()}) {
  float hr = length(position.xz);
  float hu = clamp((hr - 0.5) / (uRotor.z - 0.5), 0.0, 1.0);
  transformed.y += -uRotor.x * hu * hu + uRotor.y * hu;
  if (aSurf.w > 11.5 && aSurf.w < 12.5 && uRotor.w < 0.004) transformed = vec3(0.0);
}
if (hpI == ${ha()} && aSurf.w > 11.5 && aSurf.w < 12.5 && uTRotorA < 0.004) transformed = vec3(0.0);
transformed = (hpM * vec4(transformed, 1.0)).xyz;
`;
function fa() {
  return 5;
}
function ha() {
  return 6;
}
