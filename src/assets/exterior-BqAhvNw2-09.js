// assets/exterior-BqAhvNw2 09 — push
// Lines 2172-2486 of readable/assets/exterior-BqAhvNw2.pretty.js (statement-aligned).
function Ke(t, i, a, e, s = {}) {
  const l = new b0();
  l.name = "city_fx";
  const d = (o, u) => o + (u - o) * e(),
    v = [],
    x = [],
    n = [],
    k = [a.tower, ...a.near.filter((o) => o.burnN > 0), ...a.fires];
  for (const o of k) {
    const u = o === a.tower,
      z = Math.hypot(o.x - 3, o.z - 2),
      f = Z0(o);
    for (const F of f) {
      const I = F.nz ? o.w : o.d,
        T = Math.max(1, Math.floor(I / o.bay + 0.5));
      for (let y = o.burnF; y < o.burnF + o.burnN; y++)
        for (let H = 0; H < T; H++) {
          const c = e();
          if (c < (u ? 0.3 : 0.5)) continue;
          const w = B0(o, F, H, y, 0.35),
            h = c > 0.85,
            g =
              (u ? d(0.8, 1.35) : z < 120 ? d(0.55, 1) : d(1.2, 2.2)) *
              (h ? 1.6 : 1);
          (v.push({
            p: [w.x, w.y - o.flH * 0.3, w.z],
            w: 2.2 * g,
            h: o.flH * d(0.9, 1.7) * g,
            i: d(0.7, 1.2),
            seed: e() * 50,
            lean: d(-0.6, 0.2),
          }),
            z < 120 &&
              h &&
              x.push({
                p: [w.x, w.y + o.flH * 0.6, w.z + F.nz * 1.5],
                h: d(40, 70),
                w0: 2.5,
                w1: d(18, 28),
                dx: -d(25, 45),
                dz: F.nz * d(2, 6),
                seed: e() * 20,
                dens: 0.9,
                fire: 0.8,
                speed: 1.6,
              }));
        }
    }
    const L = o.base + o.flH * 1.3 + (o.burnF - 1 + o.burnN) * o.flH,
      P = o.base + o.h;
    if (u) {
      for (let F = 0; F < 5; F++) {
        const I = f[F % f.length],
          T = B0(
            o,
            I,
            Math.floor(e() * 7),
            o.burnF + Math.floor(e() * o.burnN),
            1,
          );
        x.push({
          p: [T.x, T.y + 1.5, T.z],
          h: d(28, 45),
          w0: 4,
          w1: d(16, 24),
          dx: -d(8, 18),
          dz: I.nz * d(4, 10) + 6,
          seed: e() * 20,
          dens: 0.75,
          fire: 0.6,
          speed: 1.3,
        });
      }
      for (let F = 0; F < 9; F++)
        v.push({
          p: [o.x + d(-o.w, o.w) * 0.42, P - 1.5, o.z + d(-o.d, o.d) * 0.42],
          w: d(6, 10),
          h: d(9, 16),
          i: d(0.9, 1.3),
          seed: e() * 50,
          lean: d(-0.8, 0),
        });
      (x.push({
        p: [o.x + 2, P + 2, o.z],
        h: 180,
        w0: 18,
        w1: 105,
        dx: -55,
        dz: 95,
        seed: 3.1,
        dens: 1,
        fire: 1,
        speed: 1.4,
      }),
        x.push({
          p: [o.x - 3, P + 1, o.z + 4],
          h: 150,
          w0: 10,
          w1: 44,
          dx: -110,
          dz: 18,
          seed: 11.3,
          dens: 0.28,
          fire: 0.9,
          speed: 1.2,
        }),
        x.push({
          p: [o.x + 4, P - 6, o.z + 6],
          h: 120,
          w0: 12,
          w1: 70,
          dx: -95,
          dz: 10,
          seed: 7.7,
          dens: 0.7,
          fire: 0.8,
          speed: 1.1,
        }));
    } else {
      const F = z < 480 ? 1 : 1.6;
      x.push({
        p: [o.x, Math.max(L, P - 4), o.z],
        h: d(70, 140) * F,
        w0: d(6, 10) * F,
        w1: d(35, 70) * F,
        dx: -d(40, 110) * F,
        dz: d(-10, 25),
        seed: e() * 20,
        dens: z < 480 ? 0.85 : 0.6,
        fire: 0.7,
        speed: d(0.8, 1.3),
      });
    }
  }
  for (const o of s.flames || []) v.push(o);
  for (const o of s.plumes || []) x.push(o);
  for (const [o, u, z] of s.gridLamps || [])
    n.push({
      p: [o, u, z],
      c: [1.6, 0.66, 0.18],
      s: 1.1,
      m: [e() < 0.05 ? 5 : 0, e(), 6, 0],
    });
  for (const o of a.far) {
    const u = Z0(o),
      z = Math.max(1, Math.round((o.h - o.flH * 1.3 - 1.25) / o.flH) + 1),
      f = s.powered ? s.powered(o.x, o.z) : !0;
    for (const L of u) {
      const P = L.nz ? o.w : o.d,
        F = Math.max(1, Math.floor(P / o.bay + 0.5)),
        I = F * z,
        T = o.lit * (o.tone > 0.75 ? 1.5 : 1) * (f ? 0.9 : 0.12),
        y = Math.round(I * T + e() - 0.5);
      for (let H = 0; H < y; H++) {
        const c = B0(o, L, Math.floor(e() * F), Math.floor(e() * z), 0.3),
          w = e() < 0.82,
          h = d(0.35, 1) * (f ? 1 : 0.45);
        n.push({
          p: [c.x, c.y, c.z],
          c: w ? [1 * h, 0.5 * h, 0.19 * h] : [0.45 * h, 0.6 * h, 1 * h],
          s: d(0.8, 1.2),
          m: [e() < 0.04 ? 3 : 0, e(), 2, 0],
        });
      }
    }
  }
  const m = [...a.far, ...a.mid]
    .filter((o) => o.h > 70)
    .sort((o, u) => u.h - o.h)
    .slice(0, 26);
  for (const o of m) {
    const u = o.base + o.h + 0.6,
      z = e();
    for (const [f, L] of [
      [-1, -1],
      [1, 1],
    ])
      n.push({
        p: [o.x + f * o.w * 0.45, u, o.z + L * o.d * 0.45],
        c: [4, 0.18, 0.06],
        s: 1.6,
        m: [1, z, 0.55, 0],
      });
  }
  for (const o of s.warning || [])
    n.push({ p: o, c: [4, 0.18, 0.06], s: 1.8, m: [1, e(), 0.5, 0] });
  for (let o = 0; o < 22; o++) {
    const u = e() < 0.6 ? a.mid : a.far,
      z = u[Math.floor(e() * u.length)];
    if (!z) continue;
    const f = e() < 0.4,
      L = z.x + d(-z.w, z.w) * 0.6,
      P = z.z + z.d / 2 + d(2, 8),
      F = f ? z.base + z.h + 1.2 : t0(L, P) + 1.3;
    n.push({
      p: [L, F, f ? z.z : P],
      c: [7, 5.2, 2.6],
      s: 1.5,
      m: [2, e() * 10, 1, 0],
    });
  }
  for (let o = 0; o < 7; o++) {
    const u = a.mid[Math.floor(e() * a.mid.length)],
      z = u.x + d(-u.w, u.w) * 0.4,
      f = u.z + u.d / 2 + d(3, 7),
      L = t0(z, f) + 1.5,
      P = e();
    (n.push({
      p: [z - 0.4, L, f],
      c: [4, 0.25, 0.15],
      s: 1.5,
      m: [4, P, 1.6, 0],
    }),
      n.push({
        p: [z + 0.4, L, f],
        c: [0.3, 0.6, 5],
        s: 1.5,
        m: [4, P, 1.6, 1],
      }));
  }
  for (const o of s.points || []) n.push(o);
  const p = Ee(i, v),
    b = Ge(i, x),
    N = Ie(i, n, "city_points");
  return (
    l.add(p, b, N),
    s.embers?.length && l.add(je(i, s.embers, e)),
    {
      group: l,
      counts: { flames: v.length, plumes: x.length, points: n.length },
    }
  );
}
const Ue = `
attribute float aPart;
attribute vec4 aCarA;   // paint rgb (linear), state: 0 whole, 1 burnt, 2 police
attribute vec4 aCarB;   // hazard 0/1, phase, headlights 0/1, dirt
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
varying float vPart;
varying vec4 vA;
varying vec4 vB;
void main() {
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  n = mat3(instanceMatrix) * n;
#endif
  wp = modelMatrix * wp;
  vWorld = wp.xyz; vNw = normalize(mat3(modelMatrix) * n); vLocal = position; vPart = aPart; vA = aCarA; vB = aCarB;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Xe = `
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
varying float vPart;
varying vec4 vA;
varying vec4 vB;
${c0}
${m0}
${N0}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vNw);
  vec3 V = normalize(P - cameraPosition);
  int part = int(vPart + 0.5);
  float burnt = step(0.5, vA.w) * step(vA.w, 1.5);
  float police = step(1.5, vA.w);
  vec3 alb = vA.rgb;
  vec3 emit = vec3(0.0);
  float gloss = 0.55, rough = 0.12;
  float n = exNoise(vLocal.xy * 3.0 + vLocal.z * 2.0 + vB.y * 10.0);
  if (part == 0) {
    alb *= 0.85 + 0.3 * n;
    alb = mix(alb, vec3(0.05, 0.045, 0.04), vB.w * smoothstep(0.55, 0.3, vLocal.y));
    if (burnt > 0.5) { alb = mix(vec3(0.018, 0.016, 0.015), vec3(0.09, 0.04, 0.02), smoothstep(0.4, 0.8, n)); gloss = 0.05; rough = 0.6; }
    if (police > 0.5) alb = vLocal.y > 0.72 ? vec3(0.55, 0.55, 0.55) : vec3(0.02, 0.02, 0.025);
  } else if (part == 1) {
    alb = vec3(0.004, 0.005, 0.006);
    gloss = burnt > 0.5 ? 0.0 : 1.0; rough = 0.04;
    float crack = step(0.82, exNoise(vLocal.xz * 9.0 + vB.y * 30.0));
    alb += vec3(0.05) * crack * (1.0 - burnt);
  } else if (part == 2) {
    alb = vec3(0.012); gloss = 0.1; rough = 0.5;
  } else if (part == 3 || part == 4) {
    float front = step(0.0, vLocal.x);
    float blink = vB.x * step(0.5, fract(uTime * 1.25 + vB.y));
    vec3 base = front > 0.5 ? vec3(0.10, 0.10, 0.09) : vec3(0.10, 0.008, 0.004);
    alb = base;
    emit = vec3(2.6, 1.05, 0.15) * blink * (1.0 - burnt);
    if (front > 0.5) emit += vec3(2.2, 2.0, 1.6) * vB.z * (1.0 - burnt);
    else emit += vec3(0.5, 0.02, 0.01) * vB.z;
    gloss = 0.4;
  } else if (part == 5) {
    alb = vec3(0.015, 0.015, 0.016); gloss = 0.2; rough = 0.3;
  } else {
    float side = step(0.0, vLocal.z);
    float c = fract(uTime * 1.6 + vB.y);
    float on = side > 0.5 ? step(0.5, c) : step(c, 0.5);
    on *= 0.6 + 0.4 * step(0.5, fract(uTime * 6.4));
    emit = (side > 0.5 ? vec3(0.25, 0.5, 4.5) : vec3(4.5, 0.2, 0.12)) * on;
    alb = vec3(0.05);
  }
  vec3 L = exLight(P, N);
  vec3 col = alb * L + emit + wetReflect(V, N, rough) * gloss + exSpec(P, N, V, mix(20.0, 260.0, gloss)) * gloss * 0.35;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
