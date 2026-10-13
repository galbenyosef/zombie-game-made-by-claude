// assets__park-CwBfNU5l 14 — math
// Lines 4792-5027 of readable/assets__park-CwBfNU5l.pretty.js (statement-aligned).
const M0 = Math.PI * 2,
  B = "camp";
function oo() {
  return ye(2048, 2048, (e, a, t) => {
    let r = 911;
    const o = () => (r = (r * 16807) % 2147483647) / 2147483647,
      n = a / 22;
    ((e.fillStyle = "#2a2e2a"), e.fillRect(0, 0, a, t));
    for (let s = 0; s < 22; s++)
      for (let l = 0; l < 22; l++) {
        const u = l * n,
          c = s * n,
          M = 0.88 + o() * 0.18,
          h = o() < 0.3 ? 1 : 0;
        ((e.fillStyle = `rgb(${((62 + h * 6) * M) | 0},${((68 + h * 6) * M) | 0},${((62 - h * 6) * M) | 0})`),
          e.fillRect(u + 2, c + 2, n - 4, n - 4));
        for (let v = 0; v < 9; v++)
          for (let S = 0; S < 9; S++) {
            const d = u + ((S + 0.5) * n) / 9,
              y = c + ((v + 0.5) * n) / 9,
              m = (S + v) % 2 ? 1 : -1;
            ((e.strokeStyle = "rgba(20,22,20,0.55)"),
              (e.lineWidth = 2.2),
              e.beginPath(),
              e.moveTo(d - 3, y - 3 * m),
              e.lineTo(d + 3, y + 3 * m),
              e.stroke(),
              (e.strokeStyle = "rgba(150,156,148,0.16)"),
              (e.lineWidth = 1),
              e.beginPath(),
              e.moveTo(d - 3, y - 3 * m - 1.5),
              e.lineTo(d + 3, y + 3 * m - 1.5),
              e.stroke());
          }
        ((e.strokeStyle = "rgba(10,12,10,0.95)"),
          (e.lineWidth = 2),
          e.beginPath());
        for (let v = 0; v <= 10; v++) {
          const S = v / 10;
          e.lineTo(u + S * n, c + (v % 2 ? 4 : 0));
        }
        (e.stroke(), e.beginPath());
        for (let v = 0; v <= 10; v++) {
          const S = v / 10;
          e.lineTo(u + (v % 2 ? 4 : 0), c + S * n);
        }
        e.stroke();
      }
    ((e.globalAlpha = 0.92),
      (e.strokeStyle = "#d8d6cc"),
      (e.lineWidth = 0.45 * n),
      e.beginPath(),
      e.arc(a / 2, t / 2, 8.2 * n, 0, M0),
      e.stroke(),
      (e.fillStyle = "#d8d6cc"));
    const i = 1.9 * n,
      f = 3.2 * n,
      w = 0.7 * n;
    (e.fillRect(a / 2 - i, t / 2 - f, w, f * 2),
      e.fillRect(a / 2 + i - w, t / 2 - f, w, f * 2),
      e.fillRect(a / 2 - i, t / 2 - w / 2, i * 2, w),
      (e.strokeStyle = "#c8a420"),
      (e.lineWidth = 0.3 * n),
      e.strokeRect(0.25 * n, 0.25 * n, a - 0.5 * n, t - 0.5 * n),
      (e.globalAlpha = 1));
    for (let s = 0; s < 2600; s++) {
      e.fillStyle = `rgba(${30 + o() * 30},${26 + o() * 20},18,${0.1 + o() * 0.25})`;
      const l = o() * a,
        u = o() * t;
      e.fillRect(l, u, 2 + o() * 14, 1 + o() * 4);
    }
    for (let s = 0; s < 90; s++)
      ((e.fillStyle = `rgba(36,30,20,${0.15 + o() * 0.25})`),
        e.beginPath(),
        e.ellipse(
          o() * a,
          o() * t,
          10 + o() * 40,
          6 + o() * 20,
          o() * 3,
          0,
          M0,
        ),
        e.fill());
    ((e.strokeStyle = "rgba(20,18,14,0.35)"), (e.lineWidth = 9));
    for (const s of [-1.2, 1.2])
      (e.beginPath(),
        e.moveTo(a / 2 + s * n - 2 * n, t / 2 - 1.6 * n),
        e.lineTo(a / 2 + s * n + 2.6 * n, t / 2 - 1.4 * n),
        e.stroke());
  });
}
function no(e, a, t, r, { collapse: o = 0, door: n = !0 } = {}) {
  const i = [],
    f = e / 2,
    w = a / 2,
    s = (M, h, v, S) => {
      const d = Math.abs(Math.sin(Math.PI * ((M + f) / (e / 3)))),
        y = (S ? 0.09 : 0.035) * d;
      let m = v - y;
      if (o > 0) {
        const F = o * Math.max(0, Math.min(1, ((M + f) / e) * 1.6 - 0.2));
        m = m * (1 - F * 0.82) + Math.sin(M * 2.1 + h * 1.7) * 0.05 * F;
      }
      return m;
    },
    l = (M, h, v, S, d = null) => {
      const y = [],
        m = [];
      for (let C = 0; C <= v; C++)
        for (let L = 0; L <= h; L++) {
          const [z, W, D] = M(L / h, C / v);
          y.push(z, s(z, D, W, S), D);
        }
      for (let C = 0; C < v; C++)
        for (let L = 0; L < h; L++) {
          if (d && d(L / h + 0.5 / h, C / v + 0.5 / v)) continue;
          const z = C * (h + 1) + L,
            W = z + h + 1;
          m.push(z, W, z + 1, z + 1, W, W + 1);
        }
      const F = new Q0();
      (F.setAttribute("position", new H0(y, 3)),
        F.setIndex(m),
        F.computeVertexNormals(),
        i.push(F));
    },
    u = Math.round(e / 0.3),
    c = Math.round(a / 0.3);
  for (const M of [-1, 1])
    l(
      (h, v) => [-f + h * e, v * t, M * w * (1 + 0.012 * Math.sin(h * 9))],
      u,
      6,
      !1,
    );
  for (const M of [-1, 1])
    l((h, v) => [-f + h * e, t + v * (r - t), M * w * (1 - v)], u, 8, !0);
  for (const M of [-1, 1])
    l(
      (h, v) => [-f - 0.12 + h * (e + 0.24), t - v * 0.07, M * (w + v * 0.2)],
      u,
      1,
      !0,
    );
  for (const M of [-1, 1])
    l(
      (h, v) => [
        -f - 0.12 + h * (e + 0.24),
        t - 0.07 - v * 0.22,
        M * (w + 0.2),
      ],
      u,
      1,
      !1,
    );
  for (const M of [-1, 1])
    l(
      (h, v) => {
        const S = -w + h * a,
          d = t + (r - t) * (1 - Math.abs(S) / w);
        return [M * f, v * d, S];
      },
      c,
      9,
      !1,
      M > 0 && n ? (h, v) => Math.abs(h - 0.5) < 0.17 && v < 0.72 : null,
    );
  return i;
}
function so() {
  const e = [],
    a = (r, o, n) => e.push(Ht(r, o, n, n, 6));
  (a(I(-1.15, 0.12, 0), I(1.15, 0.12, 0), 0.02),
    a(I(-1.15, 1.08, 0), I(1.15, 1.08, 0), 0.022));
  for (const r of [-1.15, 1.15]) a(I(r, 0.12, 0), I(r, 1.08, 0), 0.022);
  for (let r = 1; r < 18; r++)
    a(I(-1.15 + r * 0.128, 0.12, 0), I(-1.15 + r * 0.128, 1.08, 0), 0.007);
  for (const r of [-0.98, 0.98])
    (e.push(new xt(0.05, 0.012, 0.62).translate(r, 0.006, 0)),
      a(I(r, 0.012, 0), I(r, 0.12, 0), 0.015));
  return v0(
    e.map(
      (r) => (
        r.deleteAttribute("uv"),
        r.setAttribute(
          "uv",
          new $t(new Float32Array(r.attributes.position.count * 2), 2),
        ),
        r
      ),
    ),
  );
}
function ro() {
  const e = [];
  for (const [o, n] of [
    [I(-3.45 / 2, 0.1, 0), I(3.45 / 2, 0.1, 0)],
    [I(-3.45 / 2, 2, 0), I(3.45 / 2, 2, 0)],
    [I(-3.45 / 2, 0.1, 0), I(-3.45 / 2, 2, 0)],
    [I(3.45 / 2, 0.1, 0), I(3.45 / 2, 2, 0)],
  ])
    e.push(Ht(o, n, 0.021, 0.021, 6));
  for (const o of [-3.45 / 2, 3.45 / 2])
    e.push(new It(0.016, 0.016, 0.2, 6).translate(o, 0.05, 0));
  return v0(
    e.map(
      (o) => (
        o.deleteAttribute("uv"),
        o.setAttribute(
          "uv",
          new $t(new Float32Array(o.attributes.position.count * 2), 2),
        ),
        o
      ),
    ),
  );
}
function lo() {
  const e = new z0(1, 12, 6);
  e.deleteAttribute("uv");
  const a = e.attributes.position;
  for (let t = 0; t < a.count; t++) {
    const r = a.getX(t),
      o = a.getY(t),
      n = a.getZ(t),
      i = 1 - 0.25 * Math.pow(Math.abs(r), 6);
    a.setXYZ(
      t,
      r * 0.27,
      Math.sign(o) * Math.pow(Math.abs(o), 0.55) * 0.075 * i,
      Math.sign(n) * Math.pow(Math.abs(n), 0.7) * 0.16 * i,
    );
  }
  return (e.computeVertexNormals(), N(e));
}
