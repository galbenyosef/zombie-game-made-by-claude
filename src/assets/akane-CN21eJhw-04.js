// assets/akane-CN21eJhw 04 — math
// Lines 1389-1621 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function go(e, t = 4096) {
  const a = () => {
      const C = new e.WebGLRenderTarget(t, t, { depthBuffer: !0 });
      return (
        (C.depthTexture = new e.DepthTexture(t, t)),
        (C.depthTexture.type = e.UnsignedIntType),
        C
      );
    },
    o = a(),
    r = a(),
    i = new e.OrthographicCamera(-1, 1, 1, -1, 0.01, 10),
    n = new e.OrthographicCamera(-1, 1, 1, -1, 0.01, 10),
    s = new e.Matrix4(),
    u = new e.Scene(),
    l = new e.MeshBasicMaterial({ colorWrite: !1, side: e.DoubleSide });
  u.overrideMaterial = l;
  const v = [],
    g = new e.Matrix4();
  function m(C, x = {}) {
    const p = new e.Mesh(C.geometry, l);
    ((p.matrixAutoUpdate = !1),
      (p.frustumCulled = !1),
      u.add(p),
      v.push({ src: C, proxy: p, inB: x.inB ?? !0 }));
  }
  const y = (C) => {
      for (let x = C; x; x = x.parent) if (!x.visible) return !1;
      return !0;
    },
    k = new e.Color(),
    G = (C, x, p, M) => {
      ((C.left = -M),
        (C.right = M),
        (C.top = M),
        (C.bottom = -M),
        (C.near = 0.01),
        (C.far = M * 4),
        C.position.copy(p).addScaledVector(x, M * 2),
        C.up.set(0, 1, 0),
        Math.abs(x.y) > 0.98 && C.up.set(0, 0, 1),
        C.lookAt(p),
        C.updateMatrixWorld(!0),
        C.updateProjectionMatrix());
    },
    d = (C) => C.state && C.state.buffers && C.state.buffers.depth;
  function w(C, x, p, M, I = x) {
    const P = d(C),
      F = !!(P && P.getReversed && P.getReversed());
    ((i._reversedDepth = !1),
      (n._reversedDepth = !1),
      G(i, x, p, M),
      G(n, I, p, M));
    for (const s0 of v)
      ((s0.proxy.geometry = s0.src.geometry),
        s0.proxy.matrix.copy(s0.src.matrixWorld),
        s0.proxy.matrixWorld.copy(s0.src.matrixWorld),
        (s0.vis = y(s0.src)));
    const L = C.getRenderTarget(),
      O = C.autoClear;
    C.getClearColor(k);
    const J = C.getClearAlpha();
    ((C.autoClear = !0),
      (u.matrixWorldAutoUpdate = !1),
      F && P.setReversed(!1));
    try {
      for (const s0 of v) s0.proxy.visible = s0.vis;
      (C.setRenderTarget(o), C.render(u, i));
      for (const s0 of v) s0.proxy.visible = s0.vis && s0.inB;
      (C.setRenderTarget(r), C.render(u, n));
    } finally {
      (F && P.setReversed(!0),
        C.setRenderTarget(L),
        (C.autoClear = O),
        C.setClearColor(k, J));
    }
    return (
      g.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
      s.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      {
        matrix: g,
        matrixB: s,
        texA: o.depthTexture,
        texB: r.depthTexture,
        texel: 1 / t,
      }
    );
  }
  function f() {
    (o.dispose(), r.dispose(), l.dispose());
  }
  return { add: m, render: w, dispose: f, proxies: v };
}
const U0 = [-0.09, -0.115, 0.18, 0.18],
  Ye = 1e3,
  k0 = {
    lash: "#0b080d",
    lashLow: "#1a1219",
    crease: "#7d4a66",
    shadow: "90,34,70",
    irisTop: "#4a0710",
    irisMid: "#8e0f1d",
    irisMid2: "#d8283a",
    irisBot: "#ff4d5e",
    irisRing: "#230306",
    pupil: "#120103",
    sclera: "#fdfbff",
    scleraShade: "#c7c0dc",
    brow: "#2a1c24",
    mouthLine: "#5a2230",
    teeth: "#fbf8fb",
    nose: "#c98a98",
  },
  C0 = (e, t, a, o, r) => {
    const i = [];
    for (let n = 0; n <= r; n++) {
      const s = n / r,
        u = 1 - s;
      i.push([
        u * u * u * e[0] +
          3 * u * u * s * t[0] +
          3 * u * s * s * a[0] +
          s * s * s * o[0],
        u * u * u * e[1] +
          3 * u * u * s * t[1] +
          3 * u * s * s * a[1] +
          s * s * s * o[1],
      ]);
    }
    return i;
  },
  le = (e, t, a) => [n0(e[0], t[0], a), n0(e[1], t[1], a)],
  vo = (e, t, a) => {
    const o = parseInt(e.slice(1), 16),
      r = parseInt(t.slice(1), 16),
      i = [16, 8, 0].map((n) =>
        Math.round(n0((o >> n) & 255, (r >> n) & 255, Z(a))),
      );
    return `rgb(${i[0]},${i[1]},${i[2]})`;
  };
function y0(e, t, a) {
  const o = t.length;
  if (o < 2) return;
  const r = [],
    i = [];
  for (let n = 0; n < o; n++) {
    const s = t[Math.max(0, n - 1)],
      u = t[Math.min(o - 1, n + 1)];
    let l = u[0] - s[0],
      v = u[1] - s[1];
    const g = Math.hypot(l, v) || 1;
    ((l /= g), (v /= g));
    const m = (typeof a == "function" ? a(n / (o - 1)) : a[n]) * 0.5;
    (r.push([t[n][0] - v * m, t[n][1] + l * m]),
      i.push([t[n][0] + v * m, t[n][1] - l * m]));
  }
  (e.beginPath(), e.moveTo(r[0][0], r[0][1]));
  for (let n = 1; n < o; n++) e.lineTo(r[n][0], r[n][1]);
  for (let n = o - 1; n >= 0; n--) e.lineTo(i[n][0], i[n][1]);
  (e.closePath(), e.fill());
}
const J0 = (e, t) => "blur(" + ((t * e.canvas.width) / 2048).toFixed(2) + "px)",
  O0 = (e, t, a = !0) => {
    t.forEach((o, r) =>
      r === 0 && a ? e.moveTo(o[0], o[1]) : e.lineTo(o[0], o[1]),
    );
  };
function wo(e, t) {
  const a = e.eyes,
    o = t > 0 ? (a.openL ?? a.open) : (a.openR ?? a.open),
    r = Z(a.closed),
    i = Z(e.anger),
    n = Z(e.sad),
    s = Z(a.lids),
    u = _e(e),
    l = Z(o, 0, 1.15) * (1 - 0.62 * s) * (1 - 0.18 * u),
    v = 0.82 + 0.18 * Z(o, 0, 1),
    g = [-12.5, -1.6 + n * 0.8 + i * 1.6],
    m = [13.6, -0.6 - n * 1.8 + i * 1.8];
  let y = [-10.2 + i * 2.2, n0(11.4 * l, g[1] + 1.6, i * 0.9) + n * 1.4],
    k = [5.5, n0(14.6 * l, 8.6 * l, i) - n * 3.4 * l];
  const G = [-8.5, -3.6],
    d = [6.5, -4.4];
  ((y = le(y, G, r)), (k = le(k, d, r)));
  let w = [-6.5, -12.4 * v + i * 6.4 + u * 1.6],
    f = [7.5, -12.8 * v + i * 5.4 + u * 1.8];
  ((w = le(w, [-6, -3.4], r)), (f = le(f, [7, -4], r)));
  const C = C0(g, y, k, m, 28),
    x = C0(g, w, f, m, 28),
    p = r > 0.85 ? 0 : Z(l * (1 - r));
  return {
    I: g,
    O: m,
    u1: y,
    u2: k,
    l1: w,
    l2: f,
    upper: C,
    lower: x,
    openAmt: p,
    closed: r,
    kUp: l,
  };
}
function Vt(e, t) {
  const a = (r, i, n) => {
      const s = Z(r, -1, 1),
        u = Math.abs(s);
      return Math.sign(s) * (i * u + (n - i) * u * u * u);
    },
    o = e.gaze[1];
  return [a(e.gaze[0], 5.5, 8.5) * t, -a(o, 3.5, o < 0 ? 10.2 : 6)];
}
function gt(e, t) {
  const a = e.eyes,
    o = jt(e),
    [r, i] = Vt(a, t),
    n = 0.6 + r,
    s = -1.4 + i,
    u = 10 * o,
    l = 12 * o;
  return {
    cx: t * ce + t * H0 * n,
    cy: ue + H0 * s,
    rx: u * H0,
    ry: l * H0,
    pupil: 0.3 + 0.18 * (1 - Z(e.anger)),
  };
}
function _e(e) {
  return Z((Z(e.anger) - 0.35) / 0.4) * Z((Z(e.mouth.open) - 0.3) / 0.4);
}
const jt = (e) => Z(e.eyes.iris * (1 - 0.15 * _e(e)), 0.5, 1.15);
