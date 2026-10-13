// assets__metro-xgLUk92P 07 — math
// Lines 2374-2720 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function ta(c) {
  return (((Math.sin(c * 91.7) * 43758.5453) % 1) + 1) % 1;
}
const Ue = {
  A: "01110100011000111111100011000110001",
  B: "11110100011000111110100011000111110",
  C: "01110100011000010000100001000101110",
  D: "11110100011000110001100011000111110",
  E: "11111100001000011110100001000011111",
  F: "11111100001000011110100001000010000",
  G: "01110100011000010111100011000101111",
  H: "10001100011000111111100011000110001",
  I: "01110001000010000100001000010001110",
  J: "00111000100001000010000101001001100",
  K: "10001100101010011000101001001010001",
  L: "10000100001000010000100001000011111",
  M: "10001110111010110101100011000110001",
  N: "10001100011100110101100111000110001",
  O: "01110100011000110001100011000101110",
  P: "11110100011000111110100001000010000",
  Q: "01110100011000110001101011001001101",
  R: "11110100011000111110101001001010001",
  S: "01111100001000001110000010000111110",
  T: "11111001000010000100001000010000100",
  U: "10001100011000110001100011000101110",
  V: "10001100011000110001100010101000100",
  W: "10001100011000110101101011010101010",
  X: "10001100010101000100010101000110001",
  Y: "10001100010101000100001000010000100",
  Z: "11111000010001000100010001000011111",
  0: "01110100011001110101110011000101110",
  1: "00100011000010000100001000010001110",
  2: "01110100010000100010001000100011111",
  3: "11111000100010000010000011000101110",
  4: "00010001100101010010111110001000010",
  5: "11111100001111000001000011000101110",
  6: "00110010001000011110100011000101110",
  7: "11111000010001000100010000100001000",
  8: "01110100011000101110100011000101110",
  9: "01110100011000101111000010001001100",
  "-": "00000000000000011111000000000000000",
  ".": "00000000000000000000000000110001100",
  ":": "00000011000110000000011000110000000",
  " ": "00000000000000000000000000000000000",
  "'": "00100001000100000000000000000000000",
  "/": "00001000010001000100010001000010000",
  "&": "01100100101010001000101011001001101",
};
function ea({ cols: c = 24, rows: a = 2 } = {}) {
  const h = c * 6 * 6 + 12,
    d = a * 9 * 6 + 12,
    l = document.createElement("canvas");
  ((l.width = h), (l.height = d));
  const i = l.getContext("2d"),
    t = new lo(l);
  ((t.colorSpace = ro), (t.anisotropy = 8));
  const e = ["", ""],
    n = [0, 0];
  let r = !0,
    u = 0;
  const b = () => {
    ((i.fillStyle = "#050302"), i.fillRect(0, 0, h, d));
    for (let M = 0; M < a; M++) {
      const x = (e[M] || "").toUpperCase(),
        p =
          x.length > c
            ? (x + "     " + x).slice(
                n[M] % (x.length + 5),
                (n[M] % (x.length + 5)) + c,
              )
            : (" ".repeat(Math.floor((c - x.length) / 2)) + x).padEnd(c);
      for (let S = 0; S < c; S++) {
        const y = Ue[p[S]] || Ue[" "];
        for (let L = 0; L < 7; L++)
          for (let v = 0; v < 5; v++) {
            const C = y[L * 5 + v] === "1",
              k = 6 + (S * 6 + v) * 6 + 6 / 2,
              R = 6 + (M * 9 + L + 1) * 6 + 6 / 2;
            ((i.fillStyle = C ? "#ffb02a" : "#1c1006"),
              i.beginPath(),
              i.arc(k, R, 6 * 0.38, 0, Math.PI * 2),
              i.fill());
          }
      }
    }
    ((t.needsUpdate = !0), (r = !1));
  };
  return {
    tex: t,
    aspect: h / d,
    set(M) {
      const x = String(M).split(`
`);
      ((e[0] = x[0] || ""), (e[1] = x[1] || ""), (n[0] = n[1] = 0), (r = !0));
    },
    get text() {
      return e.join(`
`);
    },
    tick(M) {
      if (((u += M), u > 0.18)) {
        u = 0;
        let x = !1;
        for (let w = 0; w < a; w++)
          (e[w] || "").length > c && (n[w]++, (x = !0));
        x && (r = !0);
      }
      r && b();
    },
  };
}
const J0 = (c, a, o) => new ot(c, a, o);
new rt();
const Ae = new fo(),
  qe = new Co(),
  Te = new ot(),
  oa = new ot();
function K0(c = [0, 0, 0], a = [0, 0, 0], o = 1) {
  return (
    qe.set(a[0] || 0, a[1] || 0, a[2] || 0, "YXZ"),
    Ae.setFromEuler(qe),
    typeof o == "number" ? Te.set(o, o, o) : Te.set(o[0], o[1], o[2]),
    new rt().compose(oa.set(c[0], c[1], c[2]), Ae, Te)
  );
}
const aa = (c, a, o, s) => c.applyMatrix4(K0(a, o, s));
function T(c, a, o, s, f, h, d = 0, l = 1) {
  const i = s - c,
    t = f - a,
    e = h - o,
    n =
      d > 0
        ? new Vo(
            i,
            t,
            e,
            l + 1,
            Math.min(d, i / 2 - 1e-4, t / 2 - 1e-4, e / 2 - 1e-4),
          )
        : new co(i, t, e);
  return (n.translate((c + s) / 2, (a + f) / 2, (o + h) / 2), io(n));
}
function it(c, a = 1) {
  const o = c.attributes.position,
    s = c.attributes.normal,
    f = new Float32Array(o.count * 2);
  for (let h = 0; h < o.count; h++) {
    const d = o.getX(h),
      l = o.getY(h),
      i = o.getZ(h),
      t = Math.abs(s.getX(h)),
      e = Math.abs(s.getY(h)),
      n = Math.abs(s.getZ(h));
    let r, u;
    (e >= t && e >= n
      ? ((r = d), (u = i))
      : t >= n
        ? ((r = i), (u = l))
        : ((r = d), (u = l)),
      (f[h * 2] = r * a),
      (f[h * 2 + 1] = u * a));
  }
  return (c.setAttribute("uv", new gt(f, 2)), c);
}
function k0(c, a, o, s, f = null) {
  const h = new ue();
  return (
    h.setAttribute("position", new _t([...c, ...a, ...o, ...s], 3)),
    h.setIndex([0, 1, 2, 0, 2, 3]),
    h.computeVertexNormals(),
    f ? h.setAttribute("uv", new _t(f.flat(), 2)) : io(h),
    h
  );
}
function r0(c, a, o, s, f, h) {
  return c === "+z"
    ? k0([o, f, a], [s, f, a], [s, h, a], [o, h, a])
    : c === "-z"
      ? k0([s, f, a], [o, f, a], [o, h, a], [s, h, a])
      : c === "+x"
        ? k0([a, f, s], [a, f, o], [a, h, o], [a, h, s])
        : k0([a, f, o], [a, f, s], [a, h, s], [a, h, o]);
}
function T0(c, a, o, s, f, h = !0) {
  return h
    ? k0([c, f, s], [o, f, s], [o, f, a], [c, f, a])
    : k0([c, f, a], [o, f, a], [o, f, s], [c, f, s]);
}
function j(c, a, o, s = 10, f = o, h = !0) {
  const d = J0(...c),
    l = J0(...a),
    i = d.distanceTo(l),
    t = new D0(f, o, i, s, 1, !h),
    e = t.attributes.uv,
    n = t.attributes.position;
  for (let r = 0; r < e.count; r++)
    e.setXY(r, e.getX(r) * 2 * Math.PI * o, n.getY(r) + i / 2);
  return (
    t.translate(0, i / 2, 0),
    t.applyQuaternion(
      Ae.setFromUnitVectors(J0(0, 1, 0), l.clone().sub(d).normalize()),
    ),
    t.translate(d.x, d.y, d.z),
    t
  );
}
function ko(c, a, o, s = "y", f = Math.PI * 2, h = 8, d = 24, l = 0) {
  const i = new Ot(a, o, h, d, f);
  return (
    l && i.rotateZ(l),
    s === "y" ? i.rotateX(Math.PI / 2) : s === "x" && i.rotateY(Math.PI / 2),
    i.translate(c[0], c[1], c[2]),
    i
  );
}
function $e(
  c,
  a,
  o,
  s,
  f = [0, 1, 0],
  { closed: h = !0, caps: d = !0, smooth: l = 0.5 } = {},
) {
  const i = J0(...a),
    t = J0(...o),
    e = J0(...s).normalize(),
    n = J0(...f).normalize(),
    r = i.distanceTo(t);
  return zt(
    c,
    [
      { p: i, s: e, u: n, t: 0 },
      { p: t, s: e, u: n, t: r },
    ],
    { closed: h, caps: d, smooth: l },
  );
}
function zt(
  c,
  a,
  { closed: o = !0, caps: s = !0, smooth: f = 0.5, vScale: h = 1 } = {},
) {
  const d = c.length,
    l = o ? d : d - 1,
    i = [];
  let t = 0;
  for (let S = 0; S < d; S++) {
    const [y, L] = c[S],
      [v, C] = c[(S + 1) % d];
    t += y * C - v * L;
  }
  const e = o && t < 0 ? -1 : 1;
  for (let S = 0; S < l; S++) {
    const [y, L] = c[S],
      [v, C] = c[(S + 1) % d],
      k = v - y,
      R = C - L,
      W = Math.hypot(k, R) || 1;
    i.push([(e * R) / W, (-e * k) / W, W]);
  }
  const n = [],
    r = [],
    u = [],
    b = [];
  let M = 0;
  for (let S = 0; S < l; S++) {
    const [y, L] = c[S],
      [v, C] = c[(S + 1) % d],
      k = i[S],
      R = (Z) => {
        if (k[0] * Z[0] + k[1] * Z[1] < f) return k;
        const V = k[0] + Z[0],
          I = k[1] + Z[1],
          E = Math.hypot(V, I) || 1;
        return [V / E, I / E];
      },
      W = o || S > 0 ? R(i[(S - 1 + l) % l]) : k,
      Y = o || S < l - 1 ? R(i[(S + 1) % l]) : k,
      $ = n.length / 3;
    for (const Z of a) {
      for (const [H, V, I] of [
        [y, L, W],
        [v, C, Y],
      ])
        (n.push(
          Z.p.x + Z.s.x * H + Z.u.x * V,
          Z.p.y + Z.s.y * H + Z.u.y * V,
          Z.p.z + Z.s.z * H + Z.u.z * V,
        ),
          r.push(
            Z.s.x * I[0] + Z.u.x * I[1],
            Z.s.y * I[0] + Z.u.y * I[1],
            Z.s.z * I[0] + Z.u.z * I[1],
          ));
      u.push(Z.t, M * h, Z.t, (M + k[2]) * h);
    }
    for (let Z = 0; Z < a.length - 1; Z++) {
      const H = $ + Z * 2,
        V = H + 2;
      b.push(H, V, H + 1, H + 1, V, V + 1);
    }
    M += k[2];
  }
  const x = new ue();
  if (
    (x.setAttribute("position", new _t(n, 3)),
    x.setAttribute("normal", new _t(r, 3)),
    x.setAttribute("uv", new _t(u, 2)),
    x.setIndex(b),
    pe(x),
    !(o && s))
  )
    return x;
  const w = [x],
    p = Zo.triangulateShape(
      c.map(([S, y]) => new Wo(S, y)),
      [],
    );
  for (const [S, y] of [
    [0, -1],
    [a.length - 1, 1],
  ]) {
    const L = a[S],
      v = J0().crossVectors(L.s, L.u).normalize();
    (a[a.length - 1].p.clone().sub(a[0].p).dot(v) < 0 && v.negate(),
      v.multiplyScalar(y));
    const C = [],
      k = [],
      R = [];
    for (const [Y, $] of c)
      (C.push(
        L.p.x + L.s.x * Y + L.u.x * $,
        L.p.y + L.s.y * Y + L.u.y * $,
        L.p.z + L.s.z * Y + L.u.z * $,
      ),
        k.push(v.x, v.y, v.z),
        R.push(Y, $));
    const W = new ue();
    (W.setAttribute("position", new _t(C, 3)),
      W.setAttribute("normal", new _t(k, 3)),
      W.setAttribute("uv", new _t(R, 2)),
      W.setIndex(p.flat()),
      pe(W),
      w.push(W));
  }
  return q0(w);
}
