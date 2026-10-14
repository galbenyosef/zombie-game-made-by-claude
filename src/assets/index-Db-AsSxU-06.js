// assets/index-Db-AsSxU 06 — math
// Lines 1613-1846 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function be(e) {
  const o = String(e).replace("#", ""),
    n = parseInt(o, 16),
    c = (t) => (
      (t /= 255),
      t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)
    );
  return [c((n >> 16) & 255), c((n >> 8) & 255), c(n & 255)];
}
function ro(e, o) {
  const n = new Float32Array(He * 3),
    c = new Float32Array(He * 3),
    t = new Float32Array(He * 3),
    s = new Float32Array(He * 4),
    i = new Float32Array(He * 4),
    r = new Float32Array(He * 3),
    l = new Float32Array(He);
  for (const [u, f] of Object.entries(e.pattern || {}))
    i.set([f[0], f[1], 0, 0], +u * 4);
  for (let u = 0; u < He; u++) {
    const f = e.palette[u] || e.palette[L.SKIN];
    (n.set(be(f.base), u * 3),
      c.set(be(f.shade), u * 3),
      t.set(be(f.deep ?? f.shade), u * 3),
      r.set(be(f.line ?? "#1a1620"), u * 3));
    const d = so[f.type] ?? 1,
      v = f.spec ?? (d === 6 ? 0.35 : d === 5 ? 0.25 : d === 3 ? 1.2 : 0),
      C = f.fold ?? (d === 1 ? 0.3 : 0);
    (s.set([d, v, C, f.rim ?? 1], u * 4),
      (l[u] =
        f.lineW ?? (d === 3 || d === 4 || d === 5 ? 0 : d === 2 ? 0.8 : 1)));
  }
  const a = e.shade || {};
  return {
    uBaseP: { value: n },
    uShadeP: { value: c },
    uDeepP: { value: t },
    uMatP: { value: s },
    uMatQ: { value: i },
    uLineP: { value: r },
    uLineW: { value: l },
    uBlood: { value: new H0(...be(a.blood ?? "#4b0e12")) },
    uBloodShade: { value: new H0(...be(a.bloodShade ?? "#1f0508")) },
    uDirt: { value: new H0(...be(a.dirt ?? "#b5a48d")) },
    uBruise: { value: new H0(...be(a.bruise ?? "#6b5578")) },
    uVein: { value: new H0(...be(a.vein ?? "#3e3a55")) },
    uLivor: { value: new H0(...be(a.livor ?? "#6a5a78")) },
    uLivorY: { value: a.livorY ?? 0.5 },
    uFaceTex: { value: o },
    uFaceRect: { value: new Fe(...e.head.rect) },
    uHC: { value: new H0(...e.HC) },
    uFaceOn: { value: o ? 1 : 0 },
    uEyeL: { value: new Fe(...e.head.eyeC.L, e.head.eyeC.r) },
    uEyeR: { value: new Fe(...e.head.eyeC.R, e.head.eyeC.r) },
    uGaze: { value: new Fe(...(e.eyes?.gaze ?? [0.05, 0.02, -0.06, -0.08])) },
    uIrisCol: { value: new H0(...be(e.eyes?.iris ?? "#6f7f7a")) },
    uScleraCol: { value: new H0(...be(e.eyes?.sclera ?? "#c9c2a4")) },
    uCloud: { value: e.eyes?.cloud ?? 0.65 },
    uAliveP: {
      value: new Fe(
        e.alive ? 1 : 0,
        e.alive?.pupil ?? 0.9968,
        e.alive?.lid ?? 0.3,
        e.alive?.catch ?? 0,
      ),
    },
  };
}
function co() {
  return {
    uKeyDir: { value: new H0(0.3, 0.8, 0.5).normalize() },
    uKeyCol: { value: new ze(0.6, 0.6, 0.6) },
    uRimDir: { value: new H0(1, 0.2, -0.3).normalize() },
    uRimCol: { value: new ze(0.4, 0.5, 0.9) },
    uRimAmt: { value: 0.35 },
    uAmbCol: { value: new ze(0.2, 0.3, 0.6) },
    uAmb: { value: 0.4 },
    uAmbGain: { value: new ze(1, 1, 1) },
    uAmbRGB: { value: new ze(0.02, 0.025, 0.035) },
    uTorchPos: { value: new H0() },
    uTorchDir: { value: new H0(0, 0, -1) },
    uTorchCol: { value: new ze(0, 0, 0) },
    uTorchP: { value: new Fe(0.9, 0.97, 30, 1) },
    uExposure: { value: 1 },
    uPx: { value: 1.6 },
    uPxToView: { value: 0.001 },
    uW: { value: 1 },
    uSeed: { value: 0 },
    uSil: { value: 0 },
    uBlink: { value: 0 },
  };
}
const lo = { NMAT: String(He) },
  ho = () => h1.clone(d1.fog);
function fo(e, o) {
  const n = new l1({
    defines: lo,
    uniforms: { ...ho(), ...e, ...o },
    vertexShader: ao,
    fragmentShader: io,
    fog: !0,
    clipping: !0,
  });
  return ((n.name = "zombie_body"), n);
}
const tt = Math.PI * 2;
function ie(e, o, n) {
  const c = o.length;
  if (c < 2) return;
  const t = [],
    s = [];
  for (let i = 0; i < c; i++) {
    const r = o[Math.max(0, i - 1)],
      l = o[Math.min(c - 1, i + 1)];
    let a = l[0] - r[0],
      u = l[1] - r[1];
    const f = Math.hypot(a, u) || 1;
    ((a /= f), (u /= f));
    const d = (typeof n == "function" ? n(i / (c - 1)) : n) * 0.5;
    (t.push([o[i][0] - u * d, o[i][1] + a * d]),
      s.push([o[i][0] + u * d, o[i][1] - a * d]));
  }
  (e.beginPath(), e.moveTo(t[0][0], t[0][1]));
  for (let i = 1; i < c; i++) e.lineTo(t[i][0], t[i][1]);
  for (let i = c - 1; i >= 0; i--) e.lineTo(s[i][0], s[i][1]);
  (e.closePath(), e.fill());
}
const Ie = (e, o, n, c, t = 16) => {
  const s = [];
  for (let i = 0; i <= t; i++) {
    const r = i / t,
      l = 1 - r;
    s.push([
      l * l * l * e[0] +
        3 * l * l * r * o[0] +
        3 * l * r * r * n[0] +
        r * r * r * c[0],
      l * l * l * e[1] +
        3 * l * l * r * o[1] +
        3 * l * r * r * n[1] +
        r * r * r * c[1],
    ]);
  }
  return s;
};
function we(e, o, n, c, t, s, i, r = 0, l = 0) {
  (e.save(), e.translate(o, n), e.rotate(r), e.scale(1, t / c));
  const a = e.createRadialGradient(0, 0, 0, 0, 0, c);
  (a.addColorStop(0, `rgba(${s},${i})`),
    a.addColorStop(Math.max(0.01, l), `rgba(${s},${i})`),
    a.addColorStop(1, `rgba(${s},0)`),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(0, 0, c, 0, tt),
    e.fill(),
    e.restore());
}
function pt(e, o, n, c, t, s, i, r, l, a = 2) {
  const u = [[n, c]];
  let f = n,
    d = c,
    v = t;
  const C = Math.max(4, Math.round(s / 1.6));
  for (let p = 0; p < C; p++)
    ((v += (o() - 0.5) * 0.7),
      (f += (Math.cos(v) * s) / C),
      (d += (Math.sin(v) * s) / C),
      u.push([f, d]),
      a > 0 &&
        p > 1 &&
        o() < 0.22 &&
        pt(
          e,
          o,
          f,
          d,
          v + (o() < 0.5 ? -1 : 1) * (0.5 + o() * 0.6),
          s * (0.35 + o() * 0.3),
          i * 0.6,
          r,
          l * 0.85,
          a - 1,
        ));
  ((e.fillStyle = `rgba(${r},${l})`), ie(e, u, (p) => i * (1 - p * 0.7)));
}
function Lt(e, o, n, c, t, s, i, r) {
  e.fillStyle = `rgba(${i},${r})`;
  const l = 18;
  e.beginPath();
  for (let a = 0; a <= l; a++) {
    const u = a / l,
      f = n - t / 2 + t * u,
      d = s * (0.25 + 0.75 * Math.pow(o(), 1.6)) * Math.sin(Math.PI * u) ** 0.4;
    a === 0 ? e.moveTo(f, c + 1) : e.lineTo(f, c - d);
  }
  e.lineTo(n + t / 2, c + 1.5);
  for (let a = l; a >= 0; a--)
    e.lineTo(n - t / 2 + (t * a) / l, c + 1.5 + o() * 1.2);
  (e.closePath(), e.fill());
  for (let a = 0; a < 4; a++) {
    const u = n + (o() - 0.5) * t * 0.8,
      f = c - s * (0.5 + o() * 0.6);
    (e.beginPath(),
      e.ellipse(u, f, 0.9 + o() * 0.8, 1.3 + o(), 0, 0, tt),
      e.fill(),
      ie(
        e,
        [
          [u, f],
          [u + (o() - 0.5) * 0.6, c - 1],
        ],
        0.9,
      ));
  }
}
function Zt(e, o, n, c, t, s, i, r) {
  e.fillStyle = `rgba(${i},${r})`;
  for (let l = 0; l < s; l++) {
    const a = o() * tt,
      u = t * Math.sqrt(o()),
      f = 0.25 + o() * o() * 1.8;
    (e.beginPath(),
      e.ellipse(
        n + Math.cos(a) * u,
        c + Math.sin(a) * u,
        f,
        f * (0.7 + o() * 0.6),
        o() * 3,
        0,
        tt,
      ),
      e.fill());
  }
}
