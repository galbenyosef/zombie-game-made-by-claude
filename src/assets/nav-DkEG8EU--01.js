// assets/nav-DkEG8EU- 01 — math
// Lines 1-309 of readable/assets/nav-DkEG8EU-.pretty.js (statement-aligned).
import { W as j, R as O } from "./index-DaQlAVPp.js";
class I {
  constructor(s, e = 0.3, h = null) {
    ((this.world = s), (this.radius = e), (this.plan = h));
    const i = h || { x0: -0.6, x1: 13, z0: -0.6, z1: 21.2, cell: 0.15 };
    ((this.CELL = i.cell ?? 0.15),
      (this.X0 = i.x0),
      (this.Z0 = i.z0),
      (this.W = Math.ceil((i.x1 - i.x0) / this.CELL)),
      (this.H = Math.ceil((i.z1 - i.z0) / this.CELL)));
    const c = this.W * this.H;
    if (
      ((this.free = new Uint8Array(c)),
      (this.sealed = new Uint8Array(c)),
      (this.g = new Float32Array(c)),
      (this.came = new Int32Array(c)),
      (this.seen = new Uint32Array(c)),
      (this.stamp = 0),
      (this.thresholds = []),
      !h)
    )
      for (const n of j)
        for (const d of n.openings) {
          if (d.type === "window") continue;
          const t = n.z1 - n.z0 < n.x1 - n.x0,
            r = (t ? n.x0 : n.z0) + d.at,
            x = r + d.w;
          this.thresholds.push(
            t
              ? { x0: r, x1: x, z0: n.z0 - 0.02, z1: n.z1 + 0.02 }
              : { x0: n.x0 - 0.02, x1: n.x1 + 0.02, z0: r, z1: x },
          );
        }
    this.rebuild();
  }
  cellOf(s, e) {
    return [
      Math.floor((s - this.X0) / this.CELL),
      Math.floor((e - this.Z0) / this.CELL),
    ];
  }
  center(s, e) {
    return [this.X0 + (s + 0.5) * this.CELL, this.Z0 + (e + 0.5) * this.CELL];
  }
  inRoom(s, e) {
    if (this.plan)
      return (
        this.plan.inArea(s, e) &&
        !(this.plan.blocked && this.plan.blocked(s, e))
      );
    for (const h in O) {
      const i = O[h];
      if (s >= i.x0 && s <= i.x1 && e >= i.z0 && e <= i.z1) return !0;
    }
    for (const h of this.thresholds)
      if (s >= h.x0 && s <= h.x1 && e >= h.z0 && e <= h.z1) return !0;
    return !1;
  }
  rebuild() {
    const s = this.plan?.groundAt,
      e = (t) =>
        s
          ? s((t.x0 + t.x1) / 2, (t.z0 + t.z1) / 2, t.y0 ?? 0)
          : (this.plan?.floor ?? 0),
      h = this.radius,
      i = this.W,
      c = this.H,
      n = this.CELL,
      d = this.world.colliders.filter(
        (t) =>
          t.on !== !1 &&
          (t.y1 === void 0 || (t.y1 > e(t) + 0.25 && t.y0 < e(t) + 1.5)),
      );
    if (!this.base) {
      this.base = new Uint8Array(i * c);
      for (let t = 0; t < c; t++)
        for (let r = 0; r < i; r++) {
          const [x, o] = this.center(r, t);
          let z = 0;
          if (!this.plan)
            for (const f in O) {
              const a = O[f];
              if (a.sealed && x > a.x0 && x < a.x1 && o > a.z0 && o < a.z1) {
                z = 1;
                break;
              }
            }
          ((this.sealed[t * i + r] = z),
            (this.base[t * i + r] = this.inRoom(x, o) ? 1 : 0));
        }
    }
    this.free.set(this.base);
    for (const t of d) {
      const r = Math.max(0, Math.floor((t.x0 - h - this.X0) / n - 0.5)),
        x = Math.min(i - 1, Math.ceil((t.x1 + h - this.X0) / n - 0.5)),
        o = Math.max(0, Math.floor((t.z0 - h - this.Z0) / n - 0.5)),
        z = Math.min(c - 1, Math.ceil((t.z1 + h - this.Z0) / n - 0.5));
      for (let f = o; f <= z; f++)
        for (let a = r; a <= x; a++) {
          const w = f * i + a;
          if (!this.free[w]) continue;
          const b = this.X0 + (a + 0.5) * n,
            k = this.Z0 + (f + 0.5) * n,
            C = Math.max(t.x0 - b, 0, b - t.x1),
            A = Math.max(t.z0 - k, 0, k - t.z1);
          C * C + A * A < h * h && (this.free[w] = 0);
        }
    }
  }
  walkable(s, e, h = !1) {
    const [i, c] = this.cellOf(s, e),
      n = this.W;
    if (i < 0 || c < 0 || i >= n || c >= this.H) return !1;
    const d = c * n + i;
    return this.free[d] === 1 && !(h && this.sealed[d]);
  }
  snap(s, e, h = !1) {
    if (this.walkable(s, e, h)) return [s, e];
    const [i, c] = this.cellOf(s, e),
      n = this.W,
      d = this.H;
    for (let t = 1; t < 30; t++) {
      let r = null,
        x = 1e9;
      for (let o = -t; o <= t; o++)
        for (let z = -t; z <= t; z++) {
          if (Math.max(Math.abs(z), Math.abs(o)) !== t) continue;
          const f = i + z,
            a = c + o;
          if (
            f < 0 ||
            a < 0 ||
            f >= n ||
            a >= d ||
            !this.free[a * n + f] ||
            (h && this.sealed[a * n + f])
          )
            continue;
          const [w, b] = this.center(f, a),
            k = (w - s) ** 2 + (b - e) ** 2;
          k < x && ((x = k), (r = [w, b]));
        }
      if (r) return r;
    }
    return [s, e];
  }
  lineFree(s, e, h, i, c = !1) {
    const n = Math.hypot(h - s, i - e),
      d = Math.max(1, Math.ceil(n / (this.CELL * 0.6)));
    for (let t = 0; t <= d; t++) {
      const r = t / d;
      if (!this.walkable(s + (h - s) * r, e + (i - e) * r, c)) return !1;
    }
    return !0;
  }
  path(s, e, h, i, c = {}) {
    const n = !!c.avoidSealed;
    if (
      (([s, e] = this.snap(s, e, n)),
      ([h, i] = this.snap(h, i, n)),
      this.lineFree(s, e, h, i, n))
    )
      return [[h, i]];
    const [d, t] = this.cellOf(s, e),
      [r, x] = this.cellOf(h, i),
      o = this.W,
      z = this.H,
      f = t * o + d,
      a = x * o + r,
      w = ++this.stamp,
      b = this.seen,
      k = this.g,
      C = this.came,
      A = this.free,
      Q = this.sealed,
      u = [],
      v = (l, p) => {
        u.push([l, p]);
        let m = u.length - 1;
        for (; m > 0;) {
          const M = (m - 1) >> 1;
          if (u[M][0] <= u[m][0]) break;
          (([u[M], u[m]] = [u[m], u[M]]), (m = M));
        }
      },
      T = () => {
        const l = u[0],
          p = u.pop();
        if (u.length) {
          u[0] = p;
          let m = 0;
          for (;;) {
            let M = 2 * m + 1,
              L = M + 1,
              g = m;
            if (
              (M < u.length && u[M][0] < u[g][0] && (g = M),
              L < u.length && u[L][0] < u[g][0] && (g = L),
              g === m)
            )
              break;
            (([u[g], u[m]] = [u[m], u[g]]), (m = g));
          }
        }
        return l;
      },
      F = (l) => {
        const p = l % o,
          m = (l / o) | 0,
          M = Math.abs(p - r),
          L = Math.abs(m - x);
        return M + L + (Math.SQRT2 - 2) * Math.min(M, L);
      };
    ((b[f] = w), (k[f] = 0), (C[f] = -1), v(F(f), f));
    const U = new Set();
    let N = !1;
    for (; u.length;) {
      const [, l] = T();
      if (l === a) {
        N = !0;
        break;
      }
      if (U.has(l)) continue;
      U.add(l);
      const p = l % o,
        m = (l / o) | 0;
      for (let M = -1; M <= 1; M++)
        for (let L = -1; L <= 1; L++) {
          if (!L && !M) continue;
          const g = p + L,
            H = m + M;
          if (g < 0 || H < 0 || g >= o || H >= z) continue;
          const y = H * o + g;
          if (
            !A[y] ||
            (n && Q[y]) ||
            (L && M && (!A[m * o + g] || !A[H * o + p]))
          )
            continue;
          const Z = k[l] + (L && M ? Math.SQRT2 : 1);
          (b[y] !== w || Z < k[y]) &&
            ((b[y] = w), (k[y] = Z), (C[y] = l), v(Z + F(y), y));
        }
    }
    if (!N) return null;
    const X = [];
    for (let l = a; l !== -1; l = C[l]) X.push(l);
    X.reverse();
    const W = X.map((l) => this.center(l % o, (l / o) | 0));
    W[W.length - 1] = [h, i];
    const q = [];
    let S = [s, e],
      E = 0;
    for (; E < W.length;) {
      let l = E;
      for (let p = W.length - 1; p >= E; p--)
        if (this.lineFree(S[0], S[1], W[p][0], W[p][1], n)) {
          l = p;
          break;
        }
      (q.push(W[l]), (S = W[l]), (E = l + 1));
    }
    return q;
  }
}
function B(R, s, e, h = 0, i = null) {
  let c = !1;
  for (let n = 0; n < 3; n++) {
    let d = !1;
    for (const t of R.colliders) {
      if (
        t.on === !1 ||
        (t.y1 !== void 0 && (t.y1 < h + 0.3 || t.y0 > h + 1.6))
      )
        continue;
      const r = Math.max(t.x0, Math.min(s.x, t.x1)),
        x = Math.max(t.z0, Math.min(s.z, t.z1)),
        o = s.x - r,
        z = s.z - x,
        f = o * o + z * z;
      if (!(f >= e * e))
        if (((d = c = !0), f > 1e-9)) {
          const a = Math.sqrt(f);
          ((s.x = r + (o / a) * e), (s.z = x + (z / a) * e));
        } else {
          const a = [
            [t.x0 - e - s.x, "x"],
            [t.x1 + e - s.x, "x"],
            [t.z0 - e - s.z, "z"],
            [t.z1 + e - s.z, "z"],
          ].sort((w, b) => Math.abs(w[0]) - Math.abs(b[0]))[0];
          a[1] === "x" ? (s.x += a[0]) : (s.z += a[0]);
        }
    }
    for (const t of R.circles) {
      if (t.on === !1 || t === i) continue;
      const r = s.x - t.x,
        x = s.z - t.z,
        o = e + t.r,
        z = r * r + x * x;
      if (z >= o * o || z < 1e-9) continue;
      d = c = !0;
      const f = Math.sqrt(z);
      ((s.x = t.x + (r / f) * o), (s.z = t.z + (x / f) * o));
    }
    if (!d) break;
  }
  return c;
}
