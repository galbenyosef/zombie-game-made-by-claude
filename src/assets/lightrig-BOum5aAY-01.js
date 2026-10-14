// assets/lightrig-BOum5aAY 01 — math
// Lines 1-349 of readable/assets/lightrig-BOum5aAY.pretty.js (statement-aligned).
import { C as A, V as O } from "./index-DaQlAVPp.js";
const pt = (e, r, f) => {
    if (f <= 0) return Math.min(e, r);
    const s = Math.max(f - Math.abs(e - r), 0) / f;
    return Math.min(e, r) - s * s * f * 0.25;
  },
  bt = (e, r, f) => -pt(-e, -r, f);
function dt(e, r, f, s, p, C, c) {
  const M = e - s,
    u = r - p,
    i = f - C;
  return Math.sqrt(M * M + u * u + i * i) - c;
}
function kt(e, r, f, s, p, C, c, M, u) {
  const i = e - s,
    S = r - p,
    b = f - C,
    g = Math.sqrt((i / c) ** 2 + (S / M) ** 2 + (b / u) ** 2),
    h = Math.sqrt((i / (c * c)) ** 2 + (S / (M * M)) ** 2 + (b / (u * u)) ** 2);
  return h < 1e-12 ? -Math.min(c, M, u) : (g * (g - 1)) / h;
}
function vt(e, r, f, s, p, C, c, M, u, i) {
  const S = e - s,
    b = r - p,
    g = f - C,
    h = c - s,
    w = M - p,
    y = u - C,
    q = Math.max(
      0,
      Math.min(1, (S * h + b * w + g * y) / (h * h + w * w + y * y)),
    ),
    G = S - h * q,
    H = b - w * q,
    J = g - y * q;
  return Math.sqrt(G * G + H * H + J * J) - i;
}
function St(e, r, f, s, p, C, c, M, u, i, S) {
  const b = M - s,
    g = u - p,
    h = i - C,
    w = b * b + g * g + h * h,
    y = c - S,
    q = w - y * y,
    G = 1 / w,
    H = e - s,
    J = r - p,
    W = f - C,
    k = H * b + J * g + W * h,
    j = k - w,
    z = H * w - b * k,
    D = J * w - g * k,
    I = W * w - h * k,
    V = z * z + D * D + I * I,
    N = k * k * w,
    U = j * j * w,
    R = Math.sign(y) * y * y * V;
  return Math.sign(j) * q * U > R
    ? Math.sqrt(V + U) * G - S
    : Math.sign(k) * q * N < R
      ? Math.sqrt(V + N) * G - c
      : (Math.sqrt(V * q * G) + k * y) * G - c;
}
function qt(e, r, f, s, p, C, c, M, u, i) {
  const S = Math.abs(e - s) - c + i,
    b = Math.abs(r - p) - M + i,
    g = Math.abs(f - C) - u + i,
    h = Math.max(S, 0),
    w = Math.max(b, 0),
    y = Math.max(g, 0);
  return Math.sqrt(h * h + w * w + y * y) + Math.min(Math.max(S, b, g), 0) - i;
}
function zt(e, r, f, s, p = {}) {
  const c = Math.ceil((f[0] - r[0]) / s / 4) * 4 + 1,
    M = Math.ceil((f[1] - r[1]) / s / 4) * 4 + 1,
    u = Math.ceil((f[2] - r[2]) / s / 4) * 4 + 1,
    [i, S, b] = r,
    g = c * M,
    h = new Float32Array(c * M * u),
    w = new Uint8Array(c * M * u),
    y = (a, o, t) => a + o * c + t * g,
    q = (c - 1) / 4,
    G = (M - 1) / 4,
    H = (u - 1) / 4;
  for (let a = 0; a <= H; a++)
    for (let o = 0; o <= G; o++)
      for (let t = 0; t <= q; t++) {
        const n = y(t * 4, o * 4, a * 4);
        ((h[n] = e(i + t * 4 * s, S + o * 4 * s, b + a * 4 * s)), (w[n] = 1));
      }
  const J = 4 * s * 1.9;
  for (let a = 0; a < H; a++)
    for (let o = 0; o < G; o++)
      for (let t = 0; t < q; t++) {
        const n = t * 4,
          l = o * 4,
          m = a * 4,
          L = h[y(n, l, m)],
          B = h[y(n + 4, l, m)],
          v = h[y(n, l + 4, m)],
          E = h[y(n + 4, l + 4, m)],
          F = h[y(n, l, m + 4)],
          T = h[y(n + 4, l, m + 4)],
          ot = h[y(n, l + 4, m + 4)],
          K = h[y(n + 4, l + 4, m + 4)],
          et =
            Math.min(
              Math.abs(L),
              Math.abs(B),
              Math.abs(v),
              Math.abs(E),
              Math.abs(F),
              Math.abs(T),
              Math.abs(ot),
              Math.abs(K),
            ) < J;
        for (let st = 0; st <= 4; st++)
          for (let ct = 0; ct <= 4; ct++)
            for (let it = 0; it <= 4; it++) {
              const at = y(n + it, l + ct, m + st);
              if (w[at] !== 1) {
                if (et)
                  ((h[at] = e(
                    i + (n + it) * s,
                    S + (l + ct) * s,
                    b + (m + st) * s,
                  )),
                    (w[at] = 1));
                else if (w[at] === 0) {
                  const X = it / 4,
                    lt = ct / 4,
                    ut = st / 4;
                  ((h[at] =
                    ((L * (1 - X) + B * X) * (1 - lt) +
                      (v * (1 - X) + E * X) * lt) *
                      (1 - ut) +
                    ((F * (1 - X) + T * X) * (1 - lt) +
                      (ot * (1 - X) + K * X) * lt) *
                      ut),
                    (w[at] = 2));
                }
              }
            }
      }
  const W = c - 1,
    k = M - 1,
    j = u - 1,
    z = new Int32Array(W * k * j).fill(-1),
    D = (a, o, t) => a + o * W + t * W * k,
    I = [],
    V = [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [0, 2],
      [1, 3],
      [4, 6],
      [5, 7],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ],
    N = [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ],
    U = new Float64Array(8);
  for (let a = 0; a < j; a++)
    for (let o = 0; o < k; o++)
      for (let t = 0; t < W; t++) {
        let n = 0;
        for (let v = 0; v < 8; v++) {
          const E = N[v];
          ((U[v] = h[y(t + E[0], o + E[1], a + E[2])]),
            U[v] < 0 && (n |= 1 << v));
        }
        if (n === 0 || n === 255) continue;
        let l = 0,
          m = 0,
          L = 0,
          B = 0;
        for (const [v, E] of V) {
          const F = U[v],
            T = U[E];
          if (F < 0 == T < 0) continue;
          const ot = F / (F - T),
            K = N[v],
            et = N[E];
          ((l += K[0] + (et[0] - K[0]) * ot),
            (m += K[1] + (et[1] - K[1]) * ot),
            (L += K[2] + (et[2] - K[2]) * ot),
            B++);
        }
        ((z[D(t, o, a)] = I.length / 3),
          I.push(
            i + (t + l / B) * s,
            S + (o + m / B) * s,
            b + (a + L / B) * s,
          ));
      }
  const R = [],
    x = I,
    Z = (a, o, t, n, l) => {
      if (a < 0 || o < 0 || t < 0 || n < 0) return;
      if (l) {
        const B = o;
        ((o = n), (n = B));
      }
      const m =
          (x[a * 3] - x[t * 3]) ** 2 +
          (x[a * 3 + 1] - x[t * 3 + 1]) ** 2 +
          (x[a * 3 + 2] - x[t * 3 + 2]) ** 2,
        L =
          (x[o * 3] - x[n * 3]) ** 2 +
          (x[o * 3 + 1] - x[n * 3 + 1]) ** 2 +
          (x[o * 3 + 2] - x[n * 3 + 2]) ** 2;
      m < L ? R.push(a, o, t, a, t, n) : R.push(a, o, n, o, t, n);
    };
  for (let a = 0; a < u; a++)
    for (let o = 0; o < M; o++)
      for (let t = 0; t < c; t++) {
        const l = h[y(t, o, a)] < 0;
        if (t < W && o > 0 && o < k && a > 0 && a < j) {
          const m = h[y(t + 1, o, a)];
          l !== m < 0 &&
            Z(
              z[D(t, o - 1, a - 1)],
              z[D(t, o, a - 1)],
              z[D(t, o, a)],
              z[D(t, o - 1, a)],
              !l,
            );
        }
        if (o < k && t > 0 && t < W && a > 0 && a < j) {
          const m = h[y(t, o + 1, a)];
          l !== m < 0 &&
            Z(
              z[D(t - 1, o, a - 1)],
              z[D(t - 1, o, a)],
              z[D(t, o, a)],
              z[D(t, o, a - 1)],
              !l,
            );
        }
        if (a < j && t > 0 && t < W && o > 0 && o < k) {
          const m = h[y(t, o, a + 1)];
          l !== m < 0 &&
            Z(
              z[D(t - 1, o - 1, a)],
              z[D(t, o - 1, a)],
              z[D(t, o, a)],
              z[D(t - 1, o, a)],
              !l,
            );
        }
      }
  const _ = I.length / 3,
    d = new Float32Array(I),
    $ = _ > 65535 ? new Uint32Array(R) : new Uint16Array(R),
    Q = p.smooth ?? 1;
  if (Q > 0) {
    const a = Ct(_, $),
      o = new Float32Array(d.length);
    for (let t = 0; t < Q; t++) {
      for (let n = 0; n < _; n++) {
        const l = a.start[n],
          m = a.start[n + 1];
        if (m === l) {
          ((o[n * 3] = d[n * 3]),
            (o[n * 3 + 1] = d[n * 3 + 1]),
            (o[n * 3 + 2] = d[n * 3 + 2]));
          continue;
        }
        let L = 0,
          B = 0,
          v = 0;
        for (let F = l; F < m; F++) {
          const T = a.list[F];
          ((L += d[T * 3]), (B += d[T * 3 + 1]), (v += d[T * 3 + 2]));
        }
        const E = 1 / (m - l);
        ((o[n * 3] = d[n * 3] * 0.5 + L * E * 0.5),
          (o[n * 3 + 1] = d[n * 3 + 1] * 0.5 + B * E * 0.5),
          (o[n * 3 + 2] = d[n * 3 + 2] * 0.5 + v * E * 0.5));
      }
      d.set(o);
    }
  }
  const tt = new Float32Array(d.length),
    P = s * 0.25,
    nt = p.project ?? 3;
  for (let a = 0; a < _; a++) {
    let o = d[a * 3],
      t = d[a * 3 + 1],
      n = d[a * 3 + 2],
      l = 0,
      m = 0,
      L = 1;
    for (let v = 0; v <= nt; v++) {
      const E = e(o, t, n);
      ((l = e(o + P, t, n) - e(o - P, t, n)),
        (m = e(o, t + P, n) - e(o, t - P, n)),
        (L = e(o, t, n + P) - e(o, t, n - P)));
      const F = (l * l + m * m + L * L) / (4 * P * P);
      if (v === nt || F < 1e-12) break;
      const T = Math.max(-s, Math.min(s, E / F));
      ((o -= (l / (2 * P)) * T),
        (t -= (m / (2 * P)) * T),
        (n -= (L / (2 * P)) * T));
    }
    ((d[a * 3] = o), (d[a * 3 + 1] = t), (d[a * 3 + 2] = n));
    const B = Math.sqrt(l * l + m * m + L * L) || 1;
    ((tt[a * 3] = l / B), (tt[a * 3 + 1] = m / B), (tt[a * 3 + 2] = L / B));
  }
  return { positions: d, normals: tt, indices: $ };
}
function Ct(e, r) {
  const f = new Uint32Array(e + 1);
  for (let c = 0; c < r.length; c += 3) {
    const M = r[c],
      u = r[c + 1],
      i = r[c + 2];
    ((f[M] += 2), (f[u] += 2), (f[i] += 2));
  }
  const s = new Uint32Array(e + 1);
  for (let c = 0; c < e; c++) s[c + 1] = s[c] + f[c];
  const p = new Uint32Array(s[e]),
    C = s.slice(0, e);
  for (let c = 0; c < r.length; c += 3) {
    const M = r[c],
      u = r[c + 1],
      i = r[c + 2];
    ((p[C[M]++] = u),
      (p[C[M]++] = i),
      (p[C[u]++] = M),
      (p[C[u]++] = i),
      (p[C[i]++] = M),
      (p[C[i]++] = u));
  }
  return { start: s, list: p };
}
