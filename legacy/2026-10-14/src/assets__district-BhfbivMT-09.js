// assets__district-BhfbivMT 09 — math
// Lines 2473-2686 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
const mo = new Nt(),
  bo = new xn();
function Z(
  n = 0,
  t = 0,
  e = 0,
  r = 0,
  o = 0,
  l = 0,
  s = 1,
  c = 1,
  a = 1,
  h = "XYZ",
) {
  return new J0().compose(
    new z(n, t, e),
    mo.setFromEuler(bo.set(r, o, l, h)),
    new z(s, c, a),
  );
}
function le(n, t, e = new z(0, 1, 0)) {
  const r = new z().crossVectors(e, t);
  (r.lengthSq() < 1e-6 && r.set(1, 0, 0), r.normalize());
  const o = new z().crossVectors(t, r).normalize();
  return new J0().makeBasis(r, o, t.clone().normalize()).setPosition(n);
}
function j0(n, t, e, r, o, l, s, c = [1, 1, 1]) {
  const a = [
    [-r / 2, -o / 2, 0, 0],
    [r / 2, -o / 2, 1, 0],
    [r / 2, o / 2, 1, 1],
    [-r / 2, o / 2, 0, 1],
  ].map(([h, f, y, m]) => ({ p: new z(h, f, l).applyMatrix4(e), uv: s(y, m) }));
  n.quad(
    t,
    a[0].p,
    a[1].p,
    a[2].p,
    a[3].p,
    a[0].uv,
    a[1].uv,
    a[2].uv,
    a[3].uv,
    c,
  );
}
const Oe = 16,
  ne = 2 * Oe - 1,
  wo = [0, 0.12, 0.34, 0.58, 0.8, 0.935, 1],
  xo = [0, 0.045, 0.14, 0.4, 0.7, 1];
function Et(n, t) {
  const e = n.hw(t),
    r = n.belt(t),
    o = n.top(t),
    l = ie(n.g(t));
  let s = n.bot(t);
  for (const u of n.arches) {
    const x = t - u.z;
    x > -u.r &&
      x < u.r &&
      (s = Math.max(s, u.y + Math.sqrt(u.r * u.r - x * x)));
  }
  s = Math.min(s, r - 0.05);
  const c = n.tuck,
    a = n.sh,
    h = [c, c * 0.22, 0.004, 0, 0.003, a * 0.42, a],
    f = [];
  for (let u = 0; u < 7; u++) f.push([e - h[u], s + (r - s) * wo[u]]);
  f[5][1] = r - Math.min(0.03, (r - s) * 0.07);
  const y = e - a,
    m = e - n.gin(t),
    b = o - n.crown,
    v = A0(y, m, l),
    p = A0(r, b, l),
    d = n.fg;
  for (let u = 1; u < 5; u++) {
    const x = d[u];
    f.push([A0(y, v, x) + n.bow * Math.sin(Math.PI * x) * l, A0(r, p, x)]);
  }
  const i = n.roofPow ?? 2;
  for (let u = 1; u < 6; u++) {
    const x = xo[u];
    f.push([v * (1 - x), o - (o - p) * Math.pow(1 - x, i)]);
  }
  return f;
}
function yo(n) {
  const t = [],
    e = (l) => {
      l >= n.z0 - 1e-6 && l <= n.z1 + 1e-6 && t.push(l);
    };
  for (const l of n.keys) e(l);
  for (const l of n.arches)
    for (let s = 0; s <= 6; s++) e(l.z + l.r * Math.cos((Math.PI * s) / 6));
  for (const l of n.endSt ?? [0, 0.015, 0.045, 0.1, 0.18, 0.28])
    (e(n.z1 - l), e(n.z0 + l));
  t.sort((l, s) => l - s);
  const r = [t[0]];
  for (const l of t) l - r[r.length - 1] > 0.012 && r.push(l);
  const o = [];
  for (let l = 0; l < r.length; l++) {
    if (l > 0) {
      const s = r[l] - r[l - 1],
        c = Math.ceil(s / n.step - 1e-6);
      for (let a = 1; a < c; a++) o.push(r[l - 1] + (s * a) / c);
    }
    o.push(r[l]);
  }
  return o;
}
function Vt(n) {
  const t = (c, a) => {
      const h = Et(n, c);
      let f = -1;
      for (let y = 0; y < Oe - 1; y++) {
        const m = h[y][1],
          b = h[y + 1][1];
        m !== b &&
          (a - m) * (a - b) <= 0 &&
          (f = Math.max(f, A0(h[y][0], h[y + 1][0], (a - m) / (b - m))));
      }
      return f;
    },
    e = (c, a) => {
      const h = Et(n, c),
        f = Math.abs(a);
      let y = -1;
      for (let m = 5; m < Oe - 1; m++) {
        const b = h[m][0],
          v = h[m + 1][0];
        b !== v &&
          (f - b) * (f - v) <= 0 &&
          (y = Math.max(y, A0(h[m][1], h[m + 1][1], (f - b) / (v - b))));
      }
      return y;
    },
    o = (c, a, h = 1) => {
      const f = t(c, a),
        y = (t(c + 0.004, a) - t(c - 0.004, a)) / (2 * 0.004),
        m = (t(c, a + 0.004) - t(c, a - 0.004)) / (2 * 0.004);
      return { p: new z(h * f, a, c), n: new z(h, -m, -y).normalize() };
    },
    l = (c, a) => {
      const h = e(a, c),
        f = (e(a, c + 0.004) - e(a, c - 0.004)) / (2 * 0.004),
        y = (e(a + 0.004, c) - e(a - 0.004, c)) / (2 * 0.004);
      return { p: new z(c, h, a), n: new z(-f, 1, -y).normalize() };
    },
    s = (c, a, h) => {
      const f = h ? n.z1 : n.z0,
        y = h ? -1 : 1,
        m = (u) => t(u, a) - Math.abs(c),
        b = f + y * 0.6;
      m(b) < 0 && (c = Math.sign(c) * Math.max(0, t(b, a) - 0.002));
      let v;
      if (m(f) >= 0) v = f;
      else {
        let u = f,
          x = b;
        for (let w = 0; w < 26; w++) {
          const _ = (u + x) / 2;
          m(_) >= 0 ? (x = _) : (u = _);
        }
        v = (u + x) / 2;
      }
      if (v === f) return { p: new z(c, a, f), n: new z(0, 0, -y) };
      const p = (t(v, a + 0.004) - t(v, a - 0.004)) / (2 * 0.004),
        d = (t(v + 0.004, a) - t(v - 0.004, a)) / (2 * 0.004),
        i = new z(Math.sign(c) || 1, -p, -d).normalize();
      return (
        i.z * -y < 0.05 && (i.z = -y * 0.05),
        { p: new z(c, a, v), n: i.normalize() }
      );
    };
  return {
    xAt: t,
    yAt: e,
    side: o,
    top: l,
    front: (c, a) => s(c, a, !0),
    back: (c, a) => s(c, a, !1),
  };
}
function vo(n, t, e, r, o) {
  let l = "body";
  for (const m of n.doors)
    m.side === r &&
      (e >= 1 && e <= 5 && t > m.lo[0] && t < m.lo[1] && (l = m.key),
      e >= 6 && e <= 9 && t > m.up[0] && t < m.up[1] && (l = m.key));
  (e >= 10 && n.bonnet && t > n.bonnet[0] && t < n.bonnet[1] && (l = "bonnet"),
    e >= 10 && n.boot && t > n.boot[0] && t < n.boot[1] && (l = "boot"));
  const s = (m) => m && t > m[0] && t < m[1],
    c = n.win.find((m) => (m.side === 0 || m.side === r) && s(m.z)),
    a = n.pillars.find((m) => s(m.z));
  let h = "paint",
    f = null;
  if (e === 0) h = n.sillMat;
  else if (e === 6) h = o > 0.02 ? n.beltMat : "paint";
  else if (e === 7 || e === 8) c ? ((h = "glass"), (f = c)) : a && (h = a.mat);
  else if (e === 9) h = c ? n.frameMat : a ? a.mat : "paint";
  else if (e >= 10) {
    for (const m of [n.ws, n.rw])
      m &&
        s(m.z) &&
        (e === 10
          ? (h = "paint")
          : e === 11 || t < m.frit[0] || t > m.frit[1]
            ? (h = "trim")
            : ((h = "glass"), (f = m)));
    s(n.cowl) && (h = "trim");
  }
  const y = { part: l, mat: h, pane: f };
  return (n.cls && n.cls(y, t, e, r, o), y);
}
