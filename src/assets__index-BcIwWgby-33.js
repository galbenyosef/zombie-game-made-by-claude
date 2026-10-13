// assets__index-BcIwWgby 33 — math
// Lines 10145-10509 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function qr(s, o, t, u) {
  const e = co,
    r = Math.floor(u() * 1e9);
  let a = fa(r);
  const p = Math.PI / 2,
    i = [e.xg + 0.05, e.sill, e.zm],
    d = [pt.x0 + 1.4, e.zm + 0.24],
    y = [e.xg - 0.95, e.zm],
    w = e.sill + 2.6,
    g = {
      x0: e.xg - 0.06,
      x1: e.xg + 0.06,
      z0: e.z0,
      z1: e.z1,
      y0: e.sill,
      y1: e.spring,
      on: !0,
    },
    z = new l0(Er(), t.shard, k0);
  ((z.name = "church_window_shards"),
    (z.castShadow = !1),
    (z.receiveShadow = !0),
    (z.count = 0),
    (z.boundingSphere = new hs(new dt(pt.x0 + 1.6, 2.2, e.zm), 4.2)),
    z.instanceMatrix.setUsage(en));
  const x = [
      [0.55, 0.05, 0.05],
      [0.08, 0.14, 0.55],
      [0.75, 0.52, 0.12],
      [0.7, 0.72, 0.62],
      [0.12, 0.35, 0.12],
    ],
    v = [0.34, 0.28, 0.2, 0.1, 0.08],
    n = () => {
      let Y = u(),
        et = 0;
      for (; et < v.length - 1 && Y > v[et];) ((Y -= v[et]), et++);
      return et;
    },
    l = new Xt(),
    f = new wt().makeScale(0, 0, 0),
    h = new Float32Array(k0 * 3);
  for (let Y = 0; Y < k0; Y++) {
    if (Y < rs) l.setRGB(0.62, 0.62, 0.68);
    else {
      const et = x[n()],
        nt = 0.85 + u() * 0.3;
      l.setRGB(et[0] * nt, et[1] * nt, et[2] * nt);
    }
    (l.toArray(h, Y * 3), z.setColorAt(Y, l), z.setMatrixAt(Y, f));
  }
  o.add(z);
  const c = (Y, et) => {
      const nt = Y * 3;
      (l.setRGB(h[nt] * et, h[nt + 1] * et, h[nt + 2] * et),
        z.setColorAt(Y, l));
    },
    M = { uT: { value: 0 }, uOn: { value: 0 } },
    m = new bt(
      new m0(3.15, 5)
        .rotateY(Math.PI / 2)
        .translate(e.xg - 1.25, e.sill + 1.6, e.zm),
      new P0({
        uniforms: M,
        fog: !1,
        depthWrite: !0,
        vertexShader: `
varying vec3 vW;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
        fragmentShader: `
uniform float uT;
uniform float uOn;
varying vec3 vW;
float fh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(fh(i), fh(i + vec2(1.0, 0.0)), f.x), mix(fh(i + vec2(0.0, 1.0)), fh(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  if (uOn <= 0.0) discard;
  // the burning town below the window, the smoke over it: a warm glow low down going to a dark red sky, drifting
  vec3 c = mix(vec3(0.5, 0.14, 0.04), vec3(0.035, 0.009, 0.01), smoothstep(${(e.sill - 0.4).toFixed(2)}, ${(e.sill + 3.4).toFixed(2)}, vW.y));
  // smoke rolling up across it, thick and thin, and the glow of the fires breathing under it
  vec2 p = vW.zy * vec2(2.6, 1.7);
  float n = fn(p + vec2(uT * 0.12, -uT * 0.55)) * 0.55 + fn(p * 2.3 + vec2(-uT * 0.35, -uT * 1.1)) * 0.3 + fn(p * 5.1 + vec2(uT * 0.2, -uT * 1.9)) * 0.15;
  n = smoothstep(0.25, 0.85, n);
  c *= 0.18 + 1.35 * n;
  c *= 0.92 + 0.08 * sin(uT * 6.3) * sin(uT * 2.9 + 1.3);
  gl_FragColor = vec4(c * uOn, 1.0);
}`,
      }),
    );
  ((m.name = "church_window_fire"),
    (m.castShadow = !1),
    (m.receiveShadow = !1),
    o.add(m));
  const k = new Float32Array(k0 * 3),
    S = new Float32Array(k0 * 3),
    A = new Float32Array(k0 * 4),
    b = new Float32Array(k0 * 4),
    P = new Float32Array(k0 * 3),
    _ = new Float32Array(k0),
    I = new Uint8Array(k0),
    R = new Uint8Array(k0),
    V = new Float32Array(k0 * 4),
    L = new Float32Array(k0),
    K = new Float32Array(k0),
    j = new w0(),
    O = new w0(),
    J = new w0(),
    tt = new dt(),
    st = new dt(),
    G = new dt(),
    q = new wt(),
    U = new dt(),
    Z = new pe(),
    ot = [
      [e.sill + 2.5, e.zm - 0.17, 0.34, 0.22, 0.75, 0.7],
      [e.sill + 2.32, e.zm + 0.15, 0.28, 0.2, 0.55, -0.9],
    ],
    $ = new dt(),
    C = new dt(),
    T = new dt(),
    D = new dt(),
    N = new dt(),
    H = (Y, et, nt, it, lt, ht, yt) => {
      T.subVectors(nt, et);
      const Ft = T.length();
      (T.divideScalar(Ft),
        C.set(lt, ht, yt),
        C.addScaledVector(T, -T.dot(C)).normalize(),
        $.crossVectors(C, T),
        q.makeBasis($, C, T),
        q.scale(G.set(it / 0.05, 1, Ft / 0.042)),
        q.setPosition((et.x + nt.x) / 2, (et.y + nt.y) / 2, (et.z + nt.z) / 2),
        z.setMatrixAt(Y, q));
    },
    Q = (Y) => {
      for (let et = 0; et < 2; et++) {
        const [nt, it, lt, ht, yt, Ft] = ot[et],
          Ut = Math.min(1, Y / 0.09),
          Lt =
            yt * Ut + 0.45 * Math.exp(-Y / 0.7) * Math.sin(Y * 7.5 + et) * Ut;
        (D.set(e.xg + 0.01, nt, it),
          N.set(
            D.x + Math.sin(Lt) * lt,
            nt - Math.cos(Lt) * lt,
            it + Math.sin(Lt) * 0.06 * (et ? -1 : 1),
          ),
          H(et * 2, D, N, 0.024, 1, 0, 0));
        const h0 = Lt + Ft * Ut;
        (D.copy(N),
          N.set(
            D.x + Math.sin(h0) * ht,
            D.y - Math.cos(h0) * ht,
            D.z + Math.cos(h0) * 0.05 * (et ? 1 : -1),
          ),
          H(et * 2 + 1, D, N, 0.02, 1, 0.2, 0.3));
      }
    },
    W = { t: -1, state: 0, active: !1, ruins: !1, rained: !1 },
    B = () => {
      for (let Y = rs; Y < k0; Y++) {
        const et = a() < 0.4,
          nt = et ? 2 * e.zc - e.zm : e.zm,
          it = Y * 3,
          lt = a() * 2 - 1,
          ht = Math.pow(a(), 0.8),
          yt = e.sill + 0.12 + ht * (et ? 2.9 : 3.5),
          Ft = nt + lt * (e.half - 0.02),
          Ut = (yt - (e.sill + 1)) / 1.4,
          Lt = Math.min(1, Math.hypot(lt * 0.6, Ut));
        ((k[it] = e.xg + 0.02 + a() * 0.06),
          (k[it + 1] = yt),
          (k[it + 2] = Ft));
        const h0 =
          (0.9 + 2.2 * (1 - Lt) + a() * 1.1) *
          (0.8 + 0.25 * a()) *
          (et ? 0.8 : 1);
        ((S[it] = h0),
          (S[it + 1] = -0.6 + a() * 1.2 + (1 - Lt) * 0.4),
          (S[it + 2] = lt * 0.6 + (a() - 0.5) * 1.1),
          U.set(a() - 0.5, a() - 0.5, a() - 0.5).normalize(),
          (A[Y * 4] = U.x),
          (A[Y * 4 + 1] = U.y),
          (A[Y * 4 + 2] = U.z),
          (A[Y * 4 + 3] = 6 + a() * 22),
          j
            .setFromEuler(Z.set(a() * 0.3, 0, Math.PI / 2 + (a() - 0.5) * 0.4))
            .premultiply(O.setFromAxisAngle(tt.set(1, 0, 0), a() * 6.28))
            .toArray(b, Y * 4));
        const D0 = a(),
          ee =
            D0 < 0.6
              ? 0.7 + a() * 0.8
              : D0 < 0.92
                ? 1.5 + a() * 0.9
                : 2.4 + a() * 0.8;
        ((P[it] = ee * (0.7 + a() * 0.6)),
          (P[it + 1] = 1),
          (P[it + 2] = ee * (0.7 + a() * 0.6)),
          (_[Y] = ua * 0.75 * Lt + a() * 0.03),
          (I[Y] = 0),
          (R[Y] = 0),
          (K[Y] = a() < 0.3 ? 4.5 + a() * 2.5 : 1.6 + a() * 1.2),
          J.setFromEuler(
            Z.set((a() - 0.5) * 0.3, a() * 6.28, (a() - 0.5) * 0.3),
          ).toArray(V, Y * 4),
          (L[Y] = 0));
      }
    },
    F = (Y) => {
      if (W.t < 0) return;
      W.t += Math.min(Y, 0.05);
      const et = W.t;
      if (
        ((W.state = Math.min(1, et / ua)),
        (Vo.uSmash.value = W.state),
        (M.uOn.value = W.state),
        (M.uT.value = et),
        W.state >= 0.5 && g.on && (g.on = !1),
        !W.active)
      )
        return;
      const nt = Math.min(Y, 0.05);
      let it = et < 2.5;
      Q(et);
      for (let lt = rs; lt < k0; lt++) {
        const ht = lt * 3,
          yt = lt * 4;
        if (I[lt] !== 3) {
          if (I[lt] === 0) {
            if (et < _[lt]) {
              it = !0;
              continue;
            }
            I[lt] = 1;
          }
          if (((it = !0), j.fromArray(b, yt), I[lt] === 1)) {
            ((S[ht + 1] -= Ur * nt),
              (k[ht] += S[ht] * nt),
              (k[ht + 1] += S[ht + 1] * nt),
              (k[ht + 2] += S[ht + 2] * nt),
              O.setFromAxisAngle(
                U.set(A[yt], A[yt + 1], A[yt + 2]),
                A[yt + 3] * nt,
              ),
              j.premultiply(O));
            const Ft = 0.004 + 0.012 * Math.min(1, P[ht] / 3);
            k[ht + 1] < Ft &&
              ((k[ht + 1] = Ft),
              S[ht + 1] < -0.9 && R[lt] < 2
                ? ((S[ht + 1] = -S[ht + 1] * (0.22 + 0.16 * a())),
                  (S[ht] *= 0.5),
                  (S[ht + 2] *= 0.5),
                  (A[yt + 3] *= 0.55),
                  R[lt]++,
                  W.rained ||
                    ((W.rained = !0),
                    s.audio?.play?.("glass_shards_rain", {
                      pos: [k[ht], 0.2, k[ht + 2]],
                      vol: 1.5,
                      reverb: 0.5,
                      ref: 7,
                      rolloff: 0.7,
                    })))
                : ((I[lt] = 2), (S[ht + 1] = 0)));
          } else {
            const Ft = Math.exp(-7 * nt);
            ((S[ht] *= Ft),
              (S[ht + 2] *= Ft),
              (k[ht] += S[ht] * nt),
              (k[ht + 2] += S[ht + 2] * nt),
              (k[ht + 1] += (0.008 - k[ht + 1]) * Math.min(1, nt * 12)),
              (L[lt] = Math.min(1, L[lt] + nt * 7)),
              J.fromArray(V, yt),
              j.slerp(J, L[lt]),
              L[lt] >= 1 &&
                Math.hypot(S[ht], S[ht + 2]) < 0.03 &&
                ((I[lt] = 3), j.copy(J), (k[ht + 1] = 0.008)));
          }
          (j.toArray(b, yt),
            c(
              lt,
              I[lt] === 3
                ? 1
                : 1 +
                    (K[lt] - 1) *
                      (1 - L[lt]) *
                      Math.exp(-Math.max(0, et - _[lt]) / 0.7),
            ),
            q.compose(
              st.set(k[ht], k[ht + 1], k[ht + 2]),
              j,
              G.set(P[ht], P[ht + 1], P[ht + 2]),
            ),
            z.setMatrixAt(lt, q));
        }
      }
      ((z.instanceMatrix.needsUpdate = !0),
        (z.instanceColor.needsUpdate = !0),
        it || (W.active = !1));
    };
  return {
    api: {
      sill: i,
      land: d,
      out: y,
      face: p,
      top: w,
      z0: e.z0,
      z1: e.z1,
      zc: e.zc,
      collider: g,
      get state() {
        return W.state;
      },
      get since() {
        return W.t;
      },
      smash() {
        return W.t >= 0
          ? !1
          : ((W.t = 0),
            (W.state = 0),
            (W.active = !0),
            (W.rained = !1),
            (a = fa(r)),
            B(),
            (z.count = k0),
            Q(0),
            s.audio?.play?.("church_window_smash", {
              pos: [e.xg + 0.4, e.sill + 1.2, e.zm],
              vol: 2.3,
              reverb: 0.65,
              ref: 10,
              rolloff: 0.6,
            }),
            s.game?.fx?.dust?.(
              { x: e.xg + 0.6, y: e.sill + 0.4, z: e.zm },
              0.9,
              1.1,
            ),
            s.game?.fx?.dust?.(
              { x: e.xg + 0.5, y: e.sill + 0.3, z: 2 * e.zc - e.zm },
              0.6,
              0.9,
            ),
            !0);
      },
      reset() {
        ((W.t = -1),
          (W.state = 0),
          (W.active = !1),
          (Vo.uSmash.value = 0),
          (M.uOn.value = 0),
          (z.count = 0),
          (g.on = W.ruins));
      },
      setWorld(Y) {
        ((W.ruins = Y === "ruins"), (g.on = W.ruins && W.state < 0.5));
      },
    },
    update: F,
    mesh: z,
    collider: g,
  };
}
