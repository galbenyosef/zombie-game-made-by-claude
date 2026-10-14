// assets__metro-xgLUk92P 08 — attributes
// Lines 2721-3020 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function pe(c) {
  const a = c.attributes.position,
    o = c.attributes.normal,
    s = c.index;
  if (!s) return c;
  const f = J0(),
    h = J0(),
    d = J0(),
    l = J0(),
    i = J0(),
    t = J0();
  for (let e = 0; e < s.count; e += 3) {
    const n = s.getX(e),
      r = s.getX(e + 1),
      u = s.getX(e + 2);
    (f.fromBufferAttribute(a, n),
      h.fromBufferAttribute(a, r),
      d.fromBufferAttribute(a, u),
      i.subVectors(h, f).cross(t.subVectors(d, f)),
      l
        .fromBufferAttribute(o, n)
        .add(t.fromBufferAttribute(o, r))
        .add(t.fromBufferAttribute(o, u)),
      i.dot(l) < 0 && (s.setX(e + 1, u), s.setX(e + 2, r)));
  }
  return ((s.needsUpdate = !0), c);
}
function je(c, a, o, s) {
  const f = c / 2,
    h = a / 2,
    d = s / 2;
  return [
    [-h, -f],
    [h, -f],
    [h, -f + o],
    [d, -f + o],
    [d, f - o],
    [h, f - o],
    [h, f],
    [-h, f],
    [-h, f - o],
    [-d, f - o],
    [-d, -f + o],
    [-h, -f + o],
  ];
}
const Ht = { color: [1, 1, 1], aFix: [-1], aH: [1] };
function q0(c) {
  let a = 0,
    o = 0;
  const s = Object.keys(Ht).filter((r) => c.some((u) => u.attributes[r]));
  for (const r of c)
    ((a += r.attributes.position.count),
      (o += r.index ? r.index.count : r.attributes.position.count));
  const f = new Float32Array(a * 3),
    h = new Float32Array(a * 3),
    d = new Float32Array(a * 2),
    l = Object.fromEntries(
      s.map((r) => [r, new Float32Array(a * Ht[r].length)]),
    ),
    i = a > 65535 ? new Uint32Array(o) : new Uint16Array(o);
  let t = 0,
    e = 0;
  for (const r of c) {
    r.attributes.normal || r.computeVertexNormals();
    const u = r.attributes.position.count;
    (f.set(r.attributes.position.array.subarray(0, u * 3), t * 3),
      h.set(r.attributes.normal.array.subarray(0, u * 3), t * 3),
      r.attributes.uv &&
        d.set(r.attributes.uv.array.subarray(0, u * 2), t * 2));
    for (const b of s) {
      const M = Ht[b].length,
        x = l[b],
        w = r.attributes[b];
      if (w)
        for (let p = 0; p < u; p++)
          for (let S = 0; S < M; S++)
            x[(t + p) * M + S] = w.array[p * w.itemSize + S];
      else
        for (let p = 0; p < u; p++)
          for (let S = 0; S < M; S++) x[(t + p) * M + S] = Ht[b][S];
    }
    if (r.index) {
      const b = r.index.array;
      for (let M = 0; M < r.index.count; M++) i[e + M] = b[M] + t;
      e += r.index.count;
    } else {
      for (let b = 0; b < u; b++) i[e + b] = t + b;
      e += u;
    }
    t += u;
  }
  const n = new ue();
  (n.setAttribute("position", new gt(f, 3)),
    n.setAttribute("normal", new gt(h, 3)),
    n.setAttribute("uv", new gt(d, 2)));
  for (const r of s) n.setAttribute(r, new gt(l[r], Ht[r].length));
  return (
    n.setIndex(new gt(i, 1)),
    n.computeBoundingBox(),
    n.computeBoundingSphere(),
    n
  );
}
function O0(c, a) {
  const o = c.attributes.position.count;
  return (c.setAttribute("aFix", new gt(new Float32Array(o).fill(a), 1)), c);
}
class na {
  constructor(a, o = {}) {
    ((this.name = a),
      (this.m = new Map()),
      (this.floorAt = o.floorAt || null),
      (this.meshes = []));
  }
  add(a, o, { cast: s = !0, receive: f = !0, chunk: h = "" } = {}) {
    if (!a) return a;
    a.attributes.normal || a.computeVertexNormals();
    const d = o.uuid + "|" + s + "|" + f + "|" + h;
    let l = this.m.get(d);
    return (
      l ||
        this.m.set(
          d,
          (l = { mat: o, cast: s, receive: f, chunk: h, geos: [] }),
        ),
      l.geos.push(a),
      a
    );
  }
  flush(a) {
    const o = [];
    for (const s of this.m.values()) {
      const f = q0(s.geos);
      for (const d of s.geos) d.dispose();
      if (s.mat.userData.metroAH && this.floorAt) {
        const d = f.attributes.position,
          l = new Float32Array(d.count);
        for (let i = 0; i < d.count; i++) {
          const t = d.getY(i),
            e = this.floorAt(d.getX(i), d.getZ(i), t);
          l[i] = e == null ? 1.5 : t - e;
        }
        f.setAttribute("aH", new gt(l, 1));
      }
      const h = new bt(f, s.mat);
      ((h.castShadow = s.cast),
        (h.receiveShadow = s.receive),
        (h.name =
          this.name +
          ":" +
          (s.mat.name || s.mat.userData.catalog || "mat") +
          (s.chunk ? ":" + s.chunk : "")),
        (h.matrixAutoUpdate = !1),
        h.updateMatrix(),
        a.add(h),
        o.push(h));
    }
    return (this.m.clear(), this.meshes.push(...o), o);
  }
}
function Bt(c, a, o, { cast: s = !1, receive: f = !0, name: h = "" } = {}) {
  const d = new Xo(c, a, o.length);
  return (
    o.forEach((l, i) => d.setMatrixAt(i, l)),
    (d.instanceMatrix.needsUpdate = !0),
    (d.castShadow = s),
    (d.receiveShadow = f),
    (d.name = h),
    d.computeBoundingSphere(),
    d.computeBoundingBox?.(),
    (d.matrixAutoUpdate = !1),
    d.updateMatrix(),
    d
  );
}
const sa = {
  "+z": { n: [0, 0, 1], r: [1, 0, 0], u: [0, 1, 0] },
  "-z": { n: [0, 0, -1], r: [-1, 0, 0], u: [0, 1, 0] },
  "+x": { n: [1, 0, 0], r: [0, 0, -1], u: [0, 1, 0] },
  "-x": { n: [-1, 0, 0], r: [0, 0, 1], u: [0, 1, 0] },
  "+y": { n: [0, 1, 0], r: [1, 0, 0], u: [0, 0, -1] },
  "-y": { n: [0, -1, 0], r: [1, 0, 0], u: [0, 0, 1] },
};
function So(c, a = 0) {
  const o = sa[c],
    s = Math.cos(a),
    f = Math.sin(a),
    h = [
      o.r[0] * s + o.u[0] * f,
      o.r[1] * s + o.u[1] * f,
      o.r[2] * s + o.u[2] * f,
    ],
    d = [
      o.u[0] * s - o.r[0] * f,
      o.u[1] * s - o.r[1] * f,
      o.u[2] * s - o.r[2] * f,
    ];
  return { n: o.n, r: h, u: d };
}
function Rt(c, a, o, s, f, h = 0, d = 0) {
  const { n: l, r: i, u: t } = So(f, h),
    e = (M, x) => [
      a[0] + i[0] * M + t[0] * x + l[0] * d,
      a[1] + i[1] * M + t[1] * x + l[1] * d,
      a[2] + i[2] * M + t[2] * x + l[2] * d,
    ],
    [n, r, u, b] = c;
  return k0(
    e(-o / 2, -s / 2),
    e(o / 2, -s / 2),
    e(o / 2, s / 2),
    e(-o / 2, s / 2),
    [
      [n, r],
      [u, r],
      [u, b],
      [n, b],
    ],
  );
}
function la(c) {
  const { B: a, M: o, A: s } = c;
  return {
    sign(
      f,
      h,
      d,
      l,
      i,
      {
        atlas: t = "signs",
        mat: e = null,
        depth: n = 0.012,
        plate: r = !0,
        chunk: u = "",
        rot: b = 0,
        cast: M = !1,
      } = {},
    ) {
      const x = s[t].rect(f);
      if (!x) {
        console.warn("[metro] no sign " + f);
        return;
      }
      const { n: w } = So(i, b);
      if (
        (a.add(
          Rt(x, h, d, l, i, b, n + (r ? 0.004 : 0.001)),
          e || (t === "frieze" ? o.frieze : o.signs),
          { chunk: u, cast: !1 },
        ),
        r)
      ) {
        const p = h[0] + (w[0] * n) / 2,
          S = h[1] + (w[1] * n) / 2,
          y = h[2] + (w[2] * n) / 2,
          L = Math.abs(w[0]) > 0.5 ? n / 2 : d / 2,
          v = Math.abs(w[2]) > 0.5 ? n / 2 : d / 2,
          C = Math.abs(w[1]) > 0.5 ? n / 2 : l / 2;
        b ||
          a.add(T(p - L, S - C, y - v, p + L, S + C, y + v, 0.003), o.iron, {
            chunk: u,
            cast: M,
          });
      }
    },
    decal(
      f,
      h,
      d,
      l,
      i,
      { rot: t = 0, matt: e = !1, chunk: n = "", off: r = 0.004 } = {},
    ) {
      const u = s.decals.rect(f);
      u &&
        a.add(Rt(u, h, d, l, i, t, r), e ? o.decalMatt : o.decal, {
          chunk: n,
          cast: !1,
          receive: !0,
        });
    },
    glow(
      f,
      h,
      d,
      l,
      i,
      { fx: t = -1, chunk: e = "", rot: n = 0, off: r = 0.002 } = {},
    ) {
      const u = s.glows.rect(f);
      u &&
        a.add(O0(Rt(u, h, d, l, i, n, r), t), o.glowSign, {
          chunk: e,
          cast: !1,
        });
    },
  };
}
