// assets__index-DQDjAbEY 02 — math
// Lines 340-683 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function ae(e) {
  const l = e.length,
    a = e.map((n) => n[0]),
    o = e.map((n) => n[1]),
    t = [],
    s = new Array(l).fill(0);
  for (let n = 0; n < l - 1; n++) t.push((o[n + 1] - o[n]) / (a[n + 1] - a[n]));
  ((s[0] = t[0]), (s[l - 1] = t[l - 2]));
  for (let n = 1; n < l - 1; n++)
    s[n] = t[n - 1] * t[n] <= 0 ? 0 : (t[n - 1] + t[n]) / 2;
  for (let n = 0; n < l - 1; n++) {
    if (t[n] === 0) {
      ((s[n] = 0), (s[n + 1] = 0));
      continue;
    }
    const c = s[n] / t[n],
      i = s[n + 1] / t[n],
      d = c * c + i * i;
    if (d > 9) {
      const f = 3 / Math.sqrt(d);
      ((s[n] = f * c * t[n]), (s[n + 1] = f * i * t[n]));
    }
  }
  return (n) => {
    if (n <= a[0]) return o[0];
    if (n >= a[l - 1]) return o[l - 1];
    let c = 0;
    for (; n > a[c + 1];) c++;
    const i = a[c + 1] - a[c],
      d = (n - a[c]) / i,
      f = d * d,
      p = f * d;
    return (
      (2 * p - 3 * f + 1) * o[c] +
      (p - 2 * f + d) * i * s[c] +
      (-2 * p + 3 * f) * o[c + 1] +
      (p - f) * i * s[c + 1]
    );
  };
}
const J0 = { tip: 3.28, capN: 2.98, rear: -2.92, capR: -2.3 },
  qo = ae([
    [-2.92, 2.06],
    [-2.4, 2.18],
    [-1.8, 2.24],
    [1.78, 2.24],
    [2.03, 2.21],
    [2.28, 2.12],
    [2.53, 1.96],
    [2.78, 1.75],
    [2.98, 1.55],
    [3.28, 1.3],
  ]),
  Wo = ae([
    [-2.92, 1.7],
    [-2.58, 1.44],
    [-2.18, 1.08],
    [-1.78, 0.78],
    [-1.4, 0.645],
    [-1.05, 0.62],
    [2.05, 0.62],
    [2.33, 0.645],
    [2.58, 0.71],
    [2.82, 0.83],
    [3.02, 0.97],
    [3.28, 1.1],
  ]),
  Ko = ae([
    [-2.92, 0.44],
    [-2.5, 0.66],
    [-2, 0.8],
    [-1.5, 0.84],
    [2.05, 0.84],
    [2.33, 0.82],
    [2.6, 0.775],
    [2.84, 0.7],
    [3.04, 0.62],
    [3.28, 0.52],
  ]),
  Ho = ae([
    [-2.92, 1.9],
    [-2.4, 1.62],
    [-1.8, 1.36],
    [2.05, 1.32],
    [2.68, 1.27],
    [3.28, 1.21],
  ]),
  $o = ae([
    [-2.92, 2.4],
    [-2.2, 3.3],
    [1.95, 3.3],
    [2.7, 2.7],
    [3.28, 2.3],
  ]),
  Yo = ae([
    [-2.92, 2.3],
    [-2.2, 3.8],
    [2.05, 3.8],
    [2.75, 3],
    [3.28, 2.4],
  ]),
  Ft = (e, l) => Math.pow(Math.max(0, 1 - Math.pow(m0(e), l)), 1 / l);
function bt(e, l = {}) {
  let a = 1;
  e > J0.capN
    ? (a = Ft((e - J0.capN) / (J0.tip - J0.capN), 2.1))
    : e < J0.capR && (a = Ft((J0.capR - e) / (J0.capR - J0.rear), 1.9));
  const o = Ho(e);
  return (
    (l.C = o),
    (l.W = Ko(e) * a),
    (l.T = o + (qo(e) - o) * a),
    (l.B = o - (o - Wo(e)) * a),
    (l.pT = $o(e)),
    (l.pB = Yo(e)),
    l
  );
}
const Mt = {};
function xt(e, l, a = [0, 0]) {
  const o = bt(e, Mt),
    t = Math.cos(l),
    s = Math.sin(l),
    n = s >= 0 ? o.pT : o.pB,
    c = s >= 0 ? o.T - o.C : o.C - o.B;
  return (
    (a[0] = o.W * Math.sign(t) * Math.pow(Math.abs(t), 2 / n)),
    (a[1] = o.C + c * Math.sign(s) * Math.pow(Math.abs(s), 2 / n)),
    a
  );
}
function _0(e, l) {
  const a = bt(e, Mt);
  if (a.W < 1e-4) return -1;
  const o = l >= a.C,
    t = o ? a.T - a.C : a.C - a.B,
    s = o ? a.pT : a.pB,
    n = Math.abs(l - a.C) / Math.max(t, 1e-5);
  return n > 1 ? -1 : a.W * Math.pow(1 - Math.pow(n, s), 1 / s);
}
function he(e, l, a = !0) {
  const o = bt(l, Mt),
    t = Math.abs(e) / Math.max(o.W, 1e-5);
  if (t > 1) return NaN;
  const s = a ? o.pT : o.pB,
    n = a ? o.T - o.C : o.C - o.B;
  return o.C + (a ? 1 : -1) * n * Math.pow(1 - Math.pow(t, s), 1 / s);
}
const Oe = -Math.PI / 2,
  Xo = (e) =>
    J0.rear +
    (J0.tip - J0.rear) *
      (e - (0.82 * Math.sin(2 * Math.PI * e)) / (2 * Math.PI));
let He = null;
function jo(e) {
  if (He && He.length === e) return He;
  const l = 4096,
    a = [0],
    o = [0, 0],
    t = [0, 0];
  xt(0, Oe, t);
  for (let c = 1; c <= l; c++)
    (xt(0, Oe + (c / l) * Math.PI * 2, o),
      a.push(a[c - 1] + Math.hypot(o[0] - t[0], o[1] - t[1])),
      (t[0] = o[0]),
      (t[1] = o[1]));
  const s = a[l],
    n = [];
  for (let c = 0, i = 0; c < e; c++) {
    const d = (c / e) * s;
    for (; i < l && a[i + 1] < d;) i++;
    const f = (d - a[i]) / Math.max(a[i + 1] - a[i], 1e-9);
    n.push(Oe + ((i + f) / l) * Math.PI * 2);
  }
  return ((He = n), n);
}
const st = [0, 0];
function ze(e, l, a = new H0()) {
  const o = Xo(m0(e));
  return (xt(o, l, st), a.set(st[0], st[1], o));
}
const rt = new H0(),
  Et = new H0(),
  lt = new H0(),
  Dt = new H0();
function eo(e, l, a = new H0()) {
  if (e >= 0.9999) return a.set(0, 0, 1);
  if (e <= 1e-4) return a.set(0, 0, -1);
  const o = 1e-4,
    t = 1e-4;
  return (
    ze(Math.min(1, e + o), l, rt),
    ze(Math.max(0, e - o), l, Et),
    rt.sub(Et),
    ze(e, l + t, lt),
    ze(e, l - t, Dt),
    lt.sub(Dt),
    a.crossVectors(lt, rt),
    a.lengthSq() < 1e-16 ? a.set(0, 0, e > 0.5 ? 1 : -1) : a.normalize()
  );
}
function Zo(e, l) {
  const a = jo(l),
    o = [],
    t = [],
    s = [];
  for (let n = 0; n <= e; n++) {
    const c = n / e;
    o.push(c);
    const i = [],
      d = [];
    for (let f = 0; f < l; f++) (i.push(ze(c, a[f])), d.push(eo(c, a[f])));
    (t.push(i), s.push(d));
  }
  return { pos: t, nrm: s, s: o, th: a, NS: e, NT: l };
}
const Ie = (() => {
    const t = -0.7599999999999998,
      s = 2.15 - 1.58,
      n = Math.hypot(t, s);
    let c = s / n,
      i = -t / n;
    return (
      c > 0 && ((c = -c), (i = -i)),
      { nz: c, ny: i, c: -(c * 2.84 + i * 1.58) }
    );
  })(),
  Qo = () => ["s", Ie.c, Ie.nz, Ie.ny, 0],
  Bt = (e) => ["s", e - Ie.c, -Ie.nz, -Ie.ny, 0],
  to = {
    ws: {
      k: 0.09,
      c: [
        ["f", 0.026, -1, 0, 0],
        ["f", 1.5, 0, -1, 0.22],
        Qo(),
        ["t", 2.06, 0, -1, 0.3],
      ],
    },
    chin: {
      k: 0.13,
      c: [
        ["f", 0.12, -1, 0, 0],
        ["f", -0.5, 1, 0, 0],
        ["f", 0.66, 0, -1, 0],
        ["f", -1, 0, 1, 0],
        ["s", 2.42, -1, 0, 0],
      ],
    },
    ovh: {
      k: 0.14,
      c: [
        ["t", 0.08, -1, 0, 0],
        ["t", -0.6, 1, 0, 0],
        ["t", 1.15, 0, -1, 0],
        ["t", -1.94, 0, 1, 0],
        ["s", 1.95, 0, -1, 0],
      ],
    },
    rwin: {
      k: 0.2,
      c: [
        ["s", -0.8, 1, 0, 0],
        ["s", -1.86, -1, 0, 0],
        ["s", 1.3, 0, -1, 0],
        ["s", -1.96, 0, 1, 0],
      ],
    },
    dfront: {
      k: 0.07,
      c: [
        Bt(0.075),
        ["s", -2.48, 1, 0, 0],
        ["s", 1, -1, 0, 0],
        ["s", -2.11, 0, 1, 0],
        ["s", 0.8, 0, -1, 0],
      ],
    },
    wfront: {
      k: 0.13,
      c: [
        Bt(0.115),
        ["s", -2.4, 1, 0, 0],
        ["s", 1.085, -1, 0, 0],
        ["s", -2.035, 0, 1, 0],
        ["s", 1.12, 0, -1, 0],
      ],
    },
    dslide: {
      k: 0.07,
      c: [
        ["s", -0.9, 1, 0, 0],
        ["s", -0.62, -1, 0, 0],
        ["s", -2.11, 0, 1, 0],
        ["s", 0.8, 0, -1, 0],
      ],
    },
    wslide: {
      k: 0.16,
      c: [
        ["s", -0.78, 1, 0, 0],
        ["s", -0.5, -1, 0, 0],
        ["s", -1.98, 0, 1, 0],
        ["s", 1.28, 0, -1, 0],
      ],
    },
  },
  Jo = (e, l, a) => {
    const o = Math.max(a - Math.abs(e - l), 0) / a;
    return Math.max(e, l) + o * o * a * 0.25;
  };
function C0(e, l, a, o) {
  const t = to[e],
    s = Math.abs(l);
  let n = -1e3;
  for (const c of t.c) {
    const i = c[0] === "s" ? o : s,
      d = c[0] === "s" || c[0] === "f" ? a : o;
    n = Jo(n, c[1] + c[2] * i + c[3] * d + c[4] * i * i, t.k);
  }
  return n;
}
const ea = (e, l, a) =>
    Math.min(
      C0("ws", e, l, a),
      C0("chin", e, l, a),
      C0("ovh", e, l, a),
      C0("rwin", e, l, a),
      C0("dfront", e, l, a),
      C0("dslide", e, l, a),
    ),
  oo = (e, l, a) =>
    Math.min(
      C0("ws", e, l, a),
      C0("chin", e, l, a),
      C0("ovh", e, l, a),
      C0("rwin", e, l, a),
      C0("wfront", e, l, a),
      C0("wslide", e, l, a),
    ),
  Ge = (e) => {
    const l = (+e).toFixed(5);
    return l.includes(".") ? l : l + ".0";
  };
