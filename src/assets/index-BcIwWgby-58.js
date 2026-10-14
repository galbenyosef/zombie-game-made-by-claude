// assets/index-BcIwWgby 58 — math
// Lines 17568-17899 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Oc(s, o, t, { young: u = !1 } = {}) {
  const e = [],
    r = [];
  let a = 0;
  const p = at(0, 1, 0),
    i = at(0, 0, 0),
    d = () => at(t() - 0.5, t() - 0.5, t() - 0.5),
    y = u ? 2 : 3,
    w = u ? [3, 3] : [4, 3, 3],
    g = t(),
    z = (f, h, c, M, m) => {
      const k = Vt(f, (b) => h + (c - h) * Math.pow(b, 0.8), M),
        S = k.attributes.position.count,
        A = new Float32Array(S * 3);
      for (let b = 0; b < S; b++)
        ((A[b * 3] = m), (A[b * 3 + 1] = g), (A[b * 3 + 2] = 0.8));
      (k.setAttribute("aK", new vt(A, 3)), e.push(k));
    },
    x = (f, h, c, M, m) => {
      const k = [f.clone()],
        S = h.clone(),
        A = f.clone(),
        b = m === 0 ? 7 : 5;
      for (let _ = 0; _ < b; _++)
        (S.addScaledVector(d(), u ? 0.3 : 0.42)
          .addScaledVector(p, m === 0 ? 0.12 : 0.02 - m * 0.06)
          .normalize(),
          A.addScaledVector(S, c / b),
          m >= 1 &&
            A.y < a + 2.6 &&
            ((A.y = a + 2.6 + (A.y - a - 2.6) * 0.15),
            S.y < 0.1 && (S.y = 0.1 + Math.abs(S.y) * 0.3),
            S.normalize()),
          k.push(A.clone()));
      const P = Math.max(0.012, M * 0.5);
      if (
        (m === 0 && !u && k.unshift(f.clone().add(at(0, -0.5, 0))),
        z(
          k,
          m === 0 && !u ? M * 1.5 : M,
          P,
          m === 0 ? (u ? 7 : 12) : m === 1 ? 7 : 5,
          m === 0 ? 0.6 : 0.3,
        ),
        m >= y)
      ) {
        for (let I = 0; I < 14; I++) {
          const R = k[Math.max(1, k.length - 1 - Math.floor(t() * 3))]
            .clone()
            .add(at((t() - 0.5) * 1.6, (t() - 0.3) * 0.9, (t() - 0.5) * 1.6));
          r.push({
            pos: R,
            along: S.clone().add(d().multiplyScalar(1.2)).normalize(),
            size: u ? 0.62 + t() * 0.3 : 1.1 + t() * 0.6,
            cell: Bt.broad,
            out: null,
            shade: 0.8,
          });
        }
        return;
      }
      if (!u && m >= 1 && t() < 0.55)
        for (let _ = 0; _ < 2; _++) {
          const I = k[1 + Math.floor(t() * (k.length - 2))];
          r.push({
            pos: I.clone().add(at(0, -0.45, 0)),
            along: at((t() - 0.5) * 0.15, -1, (t() - 0.5) * 0.15).normalize(),
            size: 0.7 + t() * 0.5,
            cell: Bt.moss,
            out: at(t() - 0.5, 0, t() - 0.5).normalize(),
            shade: 0.75,
            vertical: !0,
            hang: !0,
          });
        }
      for (let _ = 0; _ < w[m]; _++) {
        const I = 0.4 + 0.6 * ((_ + 0.3 + t() * 0.5) / w[m]),
          R = k[Math.min(k.length - 1, Math.round(I * (k.length - 1)))];
        i.crossVectors(S, d()).normalize();
        const V = S.clone().applyAxisAngle(
            i,
            (u ? 0.6 : 0.8) * (0.7 + t() * 0.6),
          ),
          L = at(V.x, 0, V.z);
        (L.lengthSq() > 1e-4 &&
          V.addScaledVector(L.normalize(), u ? 0.2 : 0.6).normalize(),
          x(
            R,
            V,
            c * (u ? 0.6 : 0.66) * (0.8 + t() * 0.4),
            Math.max(0.02, P * (0.8 + 0.4 * (1 - I)) * 1.3),
            m + 1,
          ));
      }
    },
    v = at(s.x, o - 0.1, s.z),
    n = at(
      (t() - 0.5) * (u ? 0.25 : 0.4),
      1,
      (t() - 0.5) * (u ? 0.25 : 0.4),
    ).normalize();
  ((a = Math.max(o, 0)),
    x(v, n, s.H * (u ? 0.55 : 0.4), s.r, 0),
    (s.cb = s.H * (u ? 0.4 : 0.3)),
    (s.Rc = s.H * (u ? 0.22 : 0.3)));
  const l = at(0, 0, 0);
  for (const f of r) l.add(f.pos);
  l.divideScalar(Math.max(1, r.length));
  for (const f of r) f.out = f.pos.clone().sub(l).normalize();
  return { parts: e, cards: r };
}
function Ma(s, o, t) {
  const u = s.length,
    e = new Float32Array(u * 12),
    r = new Float32Array(u * 12),
    a = new Float32Array(u * 8),
    p = new Float32Array(u * 12),
    i = new Uint32Array(u * 6),
    d = at(0, 0, 0),
    y = at(0, 0, 0),
    w = at(0, 0, 0),
    g = new Xt();
  for (let x = 0; x < u; x++) {
    const v = s[x],
      n = v.size;
    if (v.ivy) d.crossVectors(v.ivy, v.along).normalize();
    else if (v.hang) d.set(v.out.z, 0, -v.out.x).normalize();
    else {
      (d.set(-v.along.z, 0, v.along.x),
        d.lengthSq() < 1e-4 && d.set(1, 0, 0),
        d.normalize());
      const S = (o() - 0.5) * (v.vertical ? 2.5 : 0.9);
      d.applyAxisAngle(v.along, S);
    }
    (y.crossVectors(v.along, d).normalize(),
      y.y < 0 && !v.vertical && !v.ivy && (y.negate(), d.negate()),
      w
        .copy(y)
        .lerp(v.out || y, 0.62)
        .normalize());
    const [l, f, h, c] = Ao(v.cell),
      M = v.cell === Bt.twigs ? l + (h - l) * 0.84 : h,
      m = v.hang
        ? [
            [0, -0.5, l, c],
            [1, -0.5, l, f],
            [1, 0.5, M, f],
            [0, 0.5, M, c],
          ]
        : [
            [0, -0.5, l, f],
            [1, -0.5, M, f],
            [1, 0.5, M, c],
            [0, 0.5, l, c],
          ],
      k = v.pos.clone().addScaledVector(v.along, -n * 0.35);
    for (let S = 0; S < 4; S++) {
      const [A, b, P, _] = m[S],
        I = x * 4 + S;
      ((e[I * 3] = k.x + v.along.x * A * n + d.x * b * n),
        (e[I * 3 + 1] = k.y + v.along.y * A * n + d.y * b * n),
        (e[I * 3 + 2] = k.z + v.along.z * A * n + d.z * b * n),
        (r[I * 3] = w.x),
        (r[I * 3 + 1] = w.y),
        (r[I * 3 + 2] = w.z),
        (a[I * 2] = P),
        (a[I * 2 + 1] = _));
    }
    t(v, g);
    for (let S = 0; S < 4; S++) {
      const A = x * 4 + S;
      ((p[A * 3] = g.r), (p[A * 3 + 1] = g.g), (p[A * 3 + 2] = g.b));
    }
    i.set([x * 4, x * 4 + 1, x * 4 + 2, x * 4, x * 4 + 2, x * 4 + 3], x * 6);
  }
  const z = new Rt();
  return (
    z.setAttribute("position", new vt(e, 3)),
    z.setAttribute("normal", new vt(r, 3)),
    z.setAttribute("uv", new vt(a, 2)),
    z.setAttribute("color", new vt(p, 3)),
    z.setAttribute("aFlex", new vt(new Float32Array(u * 4), 1)),
    z.setIndex(new vt(i, 1)),
    z
  );
}
function jc(s, o, t) {
  const u = new m0(1, 1).translate(0, 0.5, 0),
    e = new P0({
      uniforms: ko.merge([
        So.fog,
        {
          tTree: { value: null },
          uNV: { value: t },
          uAmb: { value: new Xt(0.02, 0.028, 0.034) },
        },
      ]),
      vertexShader: `
attribute vec2 aFar;            // variant, shade
varying vec2 vUv;
varying float vShade;
varying float vFogDepth;
varying vec3 vFW;
void main() {
  vec3 base = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float w = length(instanceMatrix[0].xyz), h = length(instanceMatrix[1].xyz);
  vec3 toCam = cameraPosition - base; toCam.y = 0.0; toCam = normalize(toCam + vec3(1e-4, 0.0, 0.0));
  vec3 right = vec3(toCam.z, 0.0, -toCam.x);
  vec3 wp = base + right * position.x * w + vec3(0.0, position.y * h, 0.0);
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  vUv = vec2((aFar.x + uv.x) / ${t}.0, uv.y); vShade = aFar.y;
  vFogDepth = -mv.z; vFW = wp;
}`,
      fragmentShader: `
uniform sampler2D tTree;
uniform vec3 uAmb;
varying vec2 vUv;
varying float vShade;
#include <fog_pars_fragment>
${bn}
void main() {
  vec4 t = texture2D(tTree, vUv);
  if (t.a < 0.5) discard;
  vec3 col = t.rgb * uAmb * 18.0 * vShade;
  gl_FragColor = vec4(col, 1.0);
  #ifdef USE_FOG
  gl_FragColor.rgb = forestAir(gl_FragColor.rgb, vFW, vFogDepth);
  #endif
}`,
      fog: !0,
    });
  ((e.uniforms.tTree.value = o), Object.assign(e.uniforms, K0));
  const r = new l0(u, e, s.length);
  r.name = "forest_far";
  const a = new Float32Array(s.length * 2),
    p = new wt(),
    i = new w0(),
    d = at(1, 1, 1),
    y = at(0, 0, 0);
  return (
    s.forEach((w, g) => {
      (p.compose(y.set(w.x, w.y - 0.6, w.z), i, d.set(w.w, w.H, 1)),
        r.setMatrixAt(g, p),
        (a[g * 2] = w.v),
        (a[g * 2 + 1] = 0.7 + 0.6 * ((g * 0.618) % 1)));
    }),
    u.setAttribute("aFar", new M0(a, 2)),
    (r.frustumCulled = !1),
    r
  );
}
function Yc(s, o, t, u = { x0: -64, z0: 56, w: 128, d: 192 }) {
  const r = Math.round(u.w / 0.5),
    a = Math.round(u.d / 0.5),
    p = new Float32Array(r * a),
    i = -t.x / t.y,
    d = -t.z / t.y,
    y = (x, v, n, l) => {
      const f = Math.max(0, Math.floor((x - n - u.x0) / 0.5)),
        h = Math.min(r - 1, Math.ceil((x + n - u.x0) / 0.5)),
        c = Math.max(0, Math.floor((v - n - u.z0) / 0.5)),
        M = Math.min(a - 1, Math.ceil((v + n - u.z0) / 0.5));
      for (let m = c; m <= M; m++)
        for (let k = f; k <= h; k++) {
          const S = u.x0 + (k + 0.5) * 0.5,
            A = u.z0 + (m + 0.5) * 0.5,
            b = Math.hypot(S - x, A - v) / n;
          b < 1 && (p[m * r + k] += l * (1 - b * b));
        }
    };
  for (const x of s) {
    if (x.cb == null) continue;
    const v = x.kind === "cedar" ? 1.5 : 2;
    for (let n = x.cb; n < x.H; n += v) {
      const l = (x.H - n) / Math.max(0.1, x.H - x.cb),
        f =
          x.kind === "cedar"
            ? x.Rc * Math.pow(l, 0.8) + 0.4
            : x.Rc * Math.sin(Math.PI * Math.min(1, 0.15 + l * 0.85));
      y(x.x + i * n, x.z + d * n, f * 1.05, x.kind === "young" ? 0.35 : 0.42);
    }
  }
  for (const x of o)
    if (!(
      x.x < u.x0 - 30 ||
      x.x > u.x0 + u.w + 30 ||
      x.z < u.z0 - 30 ||
      x.z > u.z0 + u.d + 30
    ))
      for (let v = x.H * 0.45; v < x.H; v += 3)
        y(
          x.x + i * v,
          x.z + d * v,
          3 * Math.pow((x.H - v) / (x.H * 0.55), 0.8) + 0.5,
          0.6,
        );
  const w = new Float32Array(p.length);
  for (let x = 0; x < 2; x++) {
    for (let v = 0; v < a; v++)
      for (let n = 0; n < r; n++) {
        let l = 0,
          f = 0;
        for (let h = -2; h <= 2; h++) {
          const c = n + h;
          c >= 0 && c < r && ((l += p[v * r + c]), f++);
        }
        w[v * r + n] = l / f;
      }
    for (let v = 0; v < a; v++)
      for (let n = 0; n < r; n++) {
        let l = 0,
          f = 0;
        for (let h = -2; h <= 2; h++) {
          const c = v + h;
          c >= 0 && c < a && ((l += w[c * r + n]), f++);
        }
        p[v * r + n] = l / f;
      }
  }
  const g = new Uint8Array(r * a);
  for (let x = 0; x < p.length; x++)
    g[x] = Math.round((1 - Math.exp(-p[x] * 1.6)) * 255);
  const z = new ga(g, r, a, on, sn);
  return (
    (z.magFilter = _s),
    (z.minFilter = _s),
    (z.wrapS = z.wrapT = an),
    (z.needsUpdate = !0),
    { tex: z, box: u, data: g, nx: r, nz: a }
  );
}
