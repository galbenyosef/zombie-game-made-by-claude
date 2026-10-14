// assets/index-BcIwWgby 50 — math
// Lines 15027-15376 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
const ke = Math.PI * 2;
class Ks {
  constructor() {
    ((this.P = []),
      (this.N = []),
      (this.UV = []),
      (this.C = []),
      (this.F = []),
      (this.I = []));
  }
  get n() {
    return this.P.length / 3;
  }
  v(o, t, u, e, r, a, p, i, d, y, w, g) {
    return (
      this.P.push(o, t, u),
      this.N.push(e, r, a),
      this.UV.push(p, i),
      this.C.push(d, y, w),
      this.F.push(g),
      this.n - 1
    );
  }
  geometry() {
    if (!this.P.length) return null;
    const o = new Rt();
    return (
      o.setAttribute("position", new xt(this.P, 3)),
      o.setAttribute("normal", new xt(this.N, 3)),
      o.setAttribute("uv", new xt(this.UV, 2)),
      o.setAttribute("color", new xt(this.C, 3)),
      o.setAttribute("aFlex", new xt(this.F, 1)),
      o.setIndex(this.I),
      o
    );
  }
}
function bc(s, o, t, u, e, r, a = 0) {
  const p = 7 + Math.floor(o() * 6),
    i = o() * ke,
    d = 0.75 + o() * 0.35;
  for (let y = 0; y < p; y++) {
    const w = i + (y / p) * ke + (o() - 0.5) * 0.5,
      g = r * (0.7 + o() * 0.5),
      z = o() < a,
      x = z ? Bt.fernDry : Bt.fern,
      [v, n, l, f] = Ao(x),
      h = Math.cos(w),
      c = Math.sin(w),
      M = -c,
      m = h,
      k = 0.55 + o() * 0.35,
      S = 0.35 + o() * 0.3,
      A = g * 0.62,
      b = 4,
      P = s.n;
    for (let _ = 0; _ < b; _++) {
      const I = _ / (b - 1),
        R = g * (0.12 + 0.85 * I),
        V =
          g *
          (k * Math.sin(Math.PI * I * 0.85) * (1 - S * I) +
            (I > 0.7 ? -S * (I - 0.7) : 0)),
        L = t + h * R,
        K = u + V + 0.02,
        j = e + c * R,
        O = h * (0.2 + I * 0.5),
        J = 1,
        tt = c * (0.2 + I * 0.5),
        st = Math.hypot(O, J, tt),
        G = (0.45 + 0.55 * I) * d * (z ? 1.1 : 1),
        q = A * (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, I * 0.9 + 0.1)));
      for (const U of [-1, 1])
        s.v(
          L + (M * U * q) / 2,
          K + U * 0.04 * I,
          j + (m * U * q) / 2,
          O / st,
          J / st,
          tt / st,
          v + (l - v) * I,
          U < 0 ? n : f,
          G,
          G,
          G,
          I,
        );
    }
    for (let _ = 0; _ < b - 1; _++) {
      const I = P + _ * 2;
      s.I.push(I, I + 1, I + 2, I + 1, I + 3, I + 2);
    }
  }
}
function zc(s, o, t, u, e, r) {
  const a = r * (0.55 + o() * 0.3),
    p = r * 0.55,
    i = 8,
    d = 3,
    y = s.n;
  for (let n = 0; n <= d; n++) {
    const l = n / d,
      f = l * Math.PI * 0.5,
      h = Math.cos(f) * a * 0.72,
      c = u + Math.sin(f) * p * 1.4 + 0.05;
    for (let M = 0; M < i; M++) {
      const m = (M / i) * ke,
        k = Math.cos(m) * Math.cos(f),
        S = Math.sin(f) + 0.3,
        A = Math.sin(m) * Math.cos(f),
        b = Math.hypot(k, S, A);
      s.v(
        t + Math.cos(m) * h * (0.85 + o() * 0.3),
        c,
        e + Math.sin(m) * h * (0.85 + o() * 0.3),
        k / b,
        S / b,
        A / b,
        go[0],
        go[1],
        0.35,
        0.4,
        0.34,
        -1,
      );
    }
  }
  for (let n = 0; n < d; n++)
    for (let l = 0; l < i; l++) {
      const f = y + n * i + l,
        h = y + n * i + ((l + 1) % i);
      s.I.push(f, f + i, h, h, f + i, h + i);
    }
  const [w, g, z, x] = Ao(Bt.bush),
    v = Math.round(14 + r * 18);
  for (let n = 0; n < v; n++) {
    const l = o() * ke,
      f = Math.acos(Math.pow(o(), 0.7)) * 0.95,
      h = t + Math.cos(l) * Math.sin(f) * a,
      c = u + Math.cos(f) * p * 1.35 + 0.1,
      M = e + Math.sin(l) * Math.sin(f) * a,
      m = Math.cos(l) * Math.sin(f),
      k = Math.cos(f) + 0.25,
      S = Math.sin(l) * Math.sin(f),
      A = Math.hypot(m, k, S),
      b = m / A,
      P = k / A,
      _ = S / A,
      I = Math.hypot(b, _) || 1,
      R = -_ / I,
      V = b / I,
      L = P * V,
      K = _ * R - b * V,
      j = -P * R,
      O = 0.42 + o() * 0.3,
      J = o() * ke,
      tt = Math.cos(J),
      st = Math.sin(J),
      G = tt * R + st * L,
      q = st * K,
      U = tt * V + st * j,
      Z = P * U - _ * q,
      ot = _ * G - b * U,
      $ = b * q - P * G,
      C = 0.6 + o() * 0.4,
      T = s.n;
    for (const [D, N, H, Q] of [
      [-1, -1, w, g],
      [1, -1, z, g],
      [1, 1, z, x],
      [-1, 1, w, x],
    ])
      s.v(
        h + ((G * D + Z * N) * O) / 2,
        c + ((q * D + ot * N) * O) / 2,
        M + ((U * D + $ * N) * O) / 2,
        m / A,
        k / A,
        S / A,
        H,
        Q,
        C * 0.9,
        C,
        C * 0.9,
        0.3,
      );
    s.I.push(T, T + 1, T + 2, T, T + 2, T + 3);
  }
}
function va(s, o, t, u, e, r, a = Bt.grass) {
  const [p, i, d, y] = Ao(a),
    w = o() * Math.PI,
    g = 0.7 + o() * 0.4;
  for (let z = 0; z < 2; z++) {
    const x = w + (z * Math.PI) / 2,
      v = Math.cos(x) * r * 0.5,
      n = Math.sin(x) * r * 0.5,
      l = s.n,
      f = (o() - 0.5) * 0.2;
    (s.v(t - v, u - 0.02, e - n, 0, 1, 0, p, i, g * 0.5, g * 0.5, g * 0.5, 0),
      s.v(t + v, u - 0.02, e + n, 0, 1, 0, d, i, g * 0.5, g * 0.5, g * 0.5, 0),
      s.v(t + v + f, u + r, e + n, 0, 1, 0, d, y, g, g, g, 1),
      s.v(t - v + f, u + r, e - n, 0, 1, 0, p, y, g, g, g, 1),
      s.I.push(l, l + 1, l + 2, l, l + 2, l + 3));
  }
}
function kc(s, o, t, u) {
  const e = new Map(),
    r = [],
    a = [],
    p = (d, y) => {
      const w = t(d, y);
      return (e.has(w) || e.set(w, new Ks()), e.get(w));
    },
    i = 0.9;
  for (let d = St.z + 0.6; d < 214; d += i)
    for (let y = -51; y < 51; y += i) {
      const w = y + (o() - 0.5) * i,
        g = d + (o() - 0.5) * i,
        z = s.dPathAt(w, g);
      if (z > 26 && s.clearingSd(w, g) > 14) continue;
      const x = s.sdAt(w, g),
        v = s.dStreamAt(w, g),
        n = s.clearingSd(w, g);
      if (w > _t.x0 - 3 && w < _t.x1 + 3 && g > _t.z0 - 3 && g < _t.z1 + 3)
        continue;
      const l = s.sPathAt(w, g),
        f = s.pw(l);
      if ((z < f + 0.45 && n > -1) || v < 1.7 || u(w, g)) continue;
      const h = s.heightAt(w, g),
        c = 0.5 + 0.5 * It(w * 0.21 + 3.3, g * 0.21 - 1.1),
        M = 0.5 + 0.5 * It(w * 0.9, g * 0.9);
      let m =
        x < -1.2 ? 0.05 : x < 0 ? 0.35 : x < 5 ? 0.75 : x < 14 ? 0.45 : 0.22;
      ((m *= 0.45 + 0.9 * c),
        n < -1.5 && (m *= 0.12),
        v < 5 && (m = Math.max(m, 0.6)),
        g < 84 && (m *= 0.55));
      const k = o();
      if (k < m * 0.55) {
        const A = (x < 0 ? 0.42 : 0.55) + M * 0.45 + (v < 5 ? 0.15 : 0);
        bc(p(w, g), o, w, h, g, A, g < 95 ? 0.35 : 0.12);
        continue;
      }
      if (x > 1.1 && x < 16 && n > 2 && k < m * 0.55 + 0.028 * (0.3 + c)) {
        const A = 0.8 + o() * 0.9;
        (zc(p(w, g), o, w, h, g, A),
          x < 4 && r.push({ x: w, z: g, r: A * 0.45, bush: !0 }));
        continue;
      }
      const S =
        (n < 3 ? 1 : 0) +
        (v < 6.5 ? 0.6 : 0) +
        (g < 92 ? 0.5 : 0) +
        (x < 1.5 && x > -1.2 ? 0.25 : 0);
      if (k < m * 0.55 + 0.03 + S * 0.25) {
        const A = p(w, g);
        for (let b = 0; b < 2; b++)
          va(
            A,
            o,
            w + (o() - 0.5) * 0.5,
            h,
            g + (o() - 0.5) * 0.5,
            0.25 + o() * 0.35 + (n < 0 ? 0.2 : 0),
            n < -2 && o() < 0.12 ? Bt.flowers : Bt.grass,
          );
      }
      x > 0.3 && x < 4 && o() < 0.012 && a.push([w, h, g]);
    }
  for (let d = 0; d < 5200; d++) {
    const y = o() * ke,
      w = Math.sqrt(o()) * 1.08,
      g = R0.x + Math.cos(y) * w * R0.rx,
      z = R0.z + Math.sin(y) * w * R0.rz,
      x = s.clearingSd(g, z);
    if (
      x > 0.5 ||
      (g > _t.x0 - 2.6 && g < _t.x1 + 2.6 && z > _t.z0 - 2.4 && z < _t.z1 + 2.6)
    )
      continue;
    const v = s.dPathAt(g, z);
    if (v < 0.8 || (v < 1.6 && o() < 0.6) || u(g, z)) continue;
    const n = s.heightAt(g, z),
      l = 0.35 + o() * 0.45 + (x > -2 ? 0.15 : 0);
    va(p(g, z), o, g, n, z, l, o() < 0.1 ? Bt.flowers : Bt.grass);
  }
  return { out: e, circles: r, mush: a };
}
function Sc(s, o, t) {
  const u = [],
    e = [],
    r = [];
  for (const [a, p, i] of t) {
    const d = s.heightAt(a, p),
      y = 0.35 + o() * 0.4,
      w = 12,
      g = (o() - 0.5) * 0.12,
      z = [],
      x = [],
      v = [],
      n = [],
      l = [];
    for (let m = 0; m <= 3; m++) {
      const k = m / 3,
        S = d - 0.15 + k * (y + 0.15),
        A = i * (1 + (1 - k) * 0.35 * (m === 0 ? 1.4 : 1));
      for (let b = 0; b <= w; b++) {
        const P = (b / w) * ke;
        (z.push(
          a + Math.cos(P) * A,
          S + (k === 1 ? Math.cos(P) * g * i : 0),
          p + Math.sin(P) * A,
        ),
          x.push(Math.cos(P), 0.2, Math.sin(P)),
          v.push(P * i, S),
          n.push(0.5, 0.3, 1));
      }
    }
    for (let m = 0; m < 3; m++)
      for (let k = 0; k < w; k++) {
        const S = m * (w + 1) + k,
          A = S + w + 1;
        l.push(S, A, S + 1, S + 1, A, A + 1);
      }
    const f = new Rt();
    (f.setAttribute("position", new xt(z, 3)),
      f.setAttribute("normal", new xt(x, 3)),
      f.setAttribute("uv", new xt(v, 2)),
      f.setAttribute("aK", new xt(n, 3)),
      f.setIndex(l),
      u.push(f));
    const h = new Ms(i, w).rotateX(-Math.PI / 2),
      c = h.attributes.position,
      M = h.attributes.uv;
    for (let m = 0; m < c.count; m++)
      (M.setXY(m, 0.5 + c.getX(m) / (2 * i), 0.5 + c.getZ(m) / (2 * i)),
        c.setY(
          m,
          Math.cos(Math.atan2(c.getZ(m), c.getX(m))) *
            g *
            i *
            (Math.hypot(c.getX(m), c.getZ(m)) / i),
        ));
    (h.translate(a, d + y + 0.002, p),
      e.push(h),
      r.push({ x: a, z: p, r: i + 0.05, stump: !0 }));
  }
  return { bark: u, tops: e, circles: r };
}
