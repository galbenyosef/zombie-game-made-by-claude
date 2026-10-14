// assets/index-BcIwWgby 02 — push
// Lines 181-502 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function buildRuinWalls(s, o) {
  const t = new Kt();
  t.name = "walls";
  const u = [],
    e = V0,
    r = { plinth: [], body: [], roof: [] },
    a = [],
    p = (q, U, Z, ot, $) => {
      if (U - q < 0.05) return;
      const [C, T, D, N] = ot
          ? [q, U, Z - T0 / 2, Z + T0 / 2]
          : [Z - T0 / 2, Z + T0 / 2, q, U],
        [H, Q, W, B] = ot
          ? [q, U, Z - We / 2, Z + We / 2]
          : [Z - We / 2, Z + We / 2, q, U];
      return (
        $.plinth.push(fo(H, 0, W, Q, uo, B)),
        $.body.push(fo(C, uo, D, T, ns, N)),
        $.roof.push(...ta(q, U, Z, ot)),
        u.push({ x0: H, x1: Q, z0: W, z1: B, y0: 0, y1: 2.8, wall: !0 }),
        u[u.length - 1]
      );
    },
    i = e.z0 - T0 / 2,
    d = e.z1 + T0 / 2,
    y = e.x0 - T0 / 2,
    w = e.x1 + T0 / 2;
  (p(e.x0 - T0, e.x1 + T0, i, !0, r),
    p(e.x0 - T0, u0.x0 - 0.12, d, !0, r),
    p(u0.x1 + 0.12, e.x1 + T0, d, !0, r));
  const g = [];
  for (const q of ["west", "east"]) {
    const U = Co.find(($) => $.side === q),
      Z = q === "west" ? y : w;
    (p(e.z0, U.a, Z, !1, r), p(U.b, e.z1, Z, !1, r));
    const ot = { plinth: [], body: [], roof: [] };
    (g.push(p(U.a, U.b, Z, !1, ot)),
      a.push({ side: q, part: ot, c: Z, a: U.a, b: U.b }));
  }
  const z = {
      plinth: At("garden_rock"),
      body: Sn(At("garden_wall")),
      roof: At("garden_roof"),
    },
    x = (q, U) => {
      const Z = new Kt();
      Z.name = U;
      for (const ot of ["plinth", "body", "roof"]) {
        if (!q[ot].length) continue;
        const $ = new bt(X0(q[ot]), z[ot]);
        (($.castShadow = !0), ($.receiveShadow = !0), Z.add($));
      }
      return Z;
    },
    v = [],
    n = (q, U, Z, ot, $) => {
      const C = Math.max(1, Math.round((U - q) / 2.8));
      for (let T = 0; T <= C; T++) {
        const D = q + ((U - q) * T) / C,
          N = Z + $ * (T0 / 2 + 0.07);
        v.push(
          ot
            ? fo(D - 0.08, 0, N - 0.07, D + 0.08, ns + 0.02, N + 0.07)
            : fo(N - 0.07, 0, D - 0.08, N + 0.07, ns + 0.02, D + 0.08),
        );
      }
    };
  (n(e.x0 + 0.2, e.x1 - 0.2, i, !0, 1),
    n(e.x0 + 0.2, u0.x0 - 0.3, d, !0, -1),
    n(u0.x1 + 0.3, e.x1 - 0.2, d, !0, -1),
    n(e.z0 + 0.2, Co[0].a - 0.2, y, !1, 1),
    n(Co[0].b + 0.2, e.z1 - 0.2, y, !1, 1),
    n(e.z0 + 0.2, Co[1].a - 0.2, w, !1, -1),
    n(Co[1].b + 0.2, e.z1 - 0.2, w, !1, -1));
  const l = new bt(X0(v), At("wood_ebony"));
  ((l.castShadow = !0),
    (l.receiveShadow = !0),
    (l.name = "wall_posts"),
    t.add(x(r, "walls_standing"), l));
  const f = new Kt();
  f.name = "walls_gaps_whole";
  for (const q of a) f.add(x(q.part, "gap_" + q.side));
  t.add(f);
  const h = new Kt();
  ((h.name = "walls_broken"), (h.visible = !1));
  const c = { plinth: [], body: [], roof: [] },
    M = [],
    m = [];
  for (const q of a) {
    const U = q.b - q.a;
    for (const [Z, ot, $] of [
      [q.a, q.a + 0.55, 1.6],
      [q.b - 0.7, q.b, 1.1],
    ]) {
      c.plinth.push(fo(q.c - We / 2, 0, Z, q.c + We / 2, uo, ot));
      const C = 4;
      for (let T = 0; T < C; T++) {
        const D = Z + ((ot - Z) * T) / C,
          N = Z + ((ot - Z) * (T + 1)) / C,
          H =
            uo +
            ($ - uo) *
              (0.55 + 0.45 * o()) *
              (Z === q.a ? 1 - (T / C) * 0.6 : 0.4 + (T / C) * 0.6);
        c.body.push(
          fo(
            q.c - T0 / 2 + (o() - 0.5) * 0.04,
            uo,
            D,
            q.c + T0 / 2 + (o() - 0.5) * 0.04,
            H,
            N,
          ),
        );
      }
      m.push({
        x0: q.c - We / 2,
        x1: q.c + We / 2,
        z0: Z,
        z1: ot,
        y0: 0,
        y1: 1.6,
        on: !1,
      });
    }
    for (let Z = 0; Z < 46; Z++) {
      const ot = q.a + 0.4 + o() * (U - 0.8),
        $ = (o() - 0.5) * 2.4,
        C = 0.12 + o() * 0.32,
        T = Math.max(0, 0.35 * (1 - Math.abs($) / 1.3)) * o(),
        D = new qt(C * (0.7 + o()), C * (0.4 + o() * 0.5), C * (0.7 + o()));
      (D.rotateX(o() * 0.8)
        .rotateY(o() * 3)
        .rotateZ(o() * 0.8)
        .translate(q.c + $, T + C * 0.2, ot),
        M.push({
          g: Ct(D),
          k: o() < 0.55 ? "body" : o() < 0.6 ? "plinth" : "roof",
        }));
    }
  }
  const k = { plinth: [], body: [], roof: [] };
  for (const q of M) k[q.k].push(q.g);
  (h.add(x(c, "stubs"), x(k, "rubble")), t.add(h));
  for (const q of m) u.push(q);
  const S = new Kt();
  S.name = "gate";
  const A = At("wood_ebony"),
    b = At("door_wood"),
    P = (q) => {
      const U = new bt(Ct(new qt(0.24, 3.1, 0.24).translate(q, 1.55, d)), A);
      return ((U.castShadow = !0), U);
    };
  S.add(P(u0.x0 - 0.12), P(u0.x1 + 0.12));
  const _ = new bt(
    Ct(new qt(u0.x1 - u0.x0 + 0.9, 0.2, 0.26).translate(0, 2.9, d)),
    A,
  );
  ((_.castShadow = !0), S.add(_));
  const [I, R] = ta(u0.x0 - 0.75, u0.x1 + 0.75, d, !0, 3),
    V = new bt(X0([I, R]), z.roof);
  ((V.castShadow = !0), S.add(V));
  const L = (q) => {
      const U = [];
      for (let Z = 0; Z < 5; Z++)
        U.push(
          Ct(
            new qt(q / 5 - 0.008, 2.5, 0.06).translate(
              -q / 2 + ((Z + 0.5) * q) / 5,
              1.3,
              0,
            ),
          ),
        );
      for (const Z of [0.45, 1.3, 2.2])
        U.push(Ct(new qt(q * 0.94, 0.12, 0.05).translate(0, Z, -0.05)));
      return X0(U);
    },
    K = (u0.x1 - u0.x0) / 2,
    j = new Kt(),
    O = new Kt(),
    J = new bt(L(K), b);
  ((J.position.x = K / 2),
    (J.castShadow = !0),
    j.add(J),
    j.position.set(u0.x0, 0, d));
  const tt = new bt(L(K), b);
  ((tt.position.x = -K / 2),
    (tt.castShadow = !0),
    O.add(tt),
    O.position.set(u0.x1, 0, d),
    S.add(j, O));
  const st = {
    x0: u0.x0,
    x1: u0.x1,
    z0: d - 0.1,
    z1: d + 0.1,
    y0: 0,
    y1: 2.6,
    on: !0,
  };
  (u.push(st), t.add(S));
  const G = z.body.userData.U;
  return {
    group: t,
    colliders: u,
    setWorld(q) {
      const U = q === "ruins";
      ((f.visible = !U), (h.visible = U));
      for (const Z of g) Z.on = !U;
      for (const Z of m) Z.on = U;
      ((G.uSoot.value = U ? 1 : 0),
        (st.on = !U),
        U
          ? (j.position.set(u0.x0 - 0.2, 0.03, d + 1.25),
            j.rotation.set(-Math.PI / 2 + 0.06, 0.35, 0),
            O.position.set(u0.x1, 0, d),
            O.rotation.set(0.05, 1.9, 0.22))
          : (j.position.set(u0.x0, 0, d),
            j.rotation.set(0, 0, 0),
            O.position.set(u0.x1, 0, d),
            O.rotation.set(0, 0, 0)));
    },
  };
}
function Sn(s) {
  const o = s.clone();
  return (
    (o.userData = { ...s.userData, U: { uSoot: { value: 0 } } }),
    (o.onBeforeCompile = (t) => {
      ((t.uniforms.uSoot = o.userData.U.uSoot),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSootW;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vSootW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )),
        (t.fragmentShader = t.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSootW;
uniform float uSoot;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      {
        float n = fract(sin(dot(floor(vSootW.xz * 3.0 + vSootW.y * 0.7), vec2(12.9898, 78.233))) * 43758.5453);
        float s = uSoot * clamp(1.15 - vSootW.y * 0.32 + (n - 0.5) * 0.35 + 0.25 * sin(vSootW.x * 1.7 + vSootW.z * 2.3), 0.0, 1.0);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.16, 0.14, 0.13), s);
      }`,
          )));
    }),
    (o.customProgramCacheKey = () => "soot2"),
    o
  );
}
const _e = 3,
  ea = 5,
  An = `
vec2 causH(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
float causticAt(vec2 p, float t) {
  float c = 0.0;
  vec2 q = p;
  for (int k = 0; k < 2; k++) {
    vec2 w = q + vec2(sin(q.y * 1.3 + t * 0.9), cos(q.x * 1.1 - t * 0.7)) * 0.3;
    vec2 i = floor(w), f = fract(w);
    float d1 = 8.0, d2 = 8.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = 0.5 + 0.5 * sin(t * 0.6 + 6.2831 * causH(i + g));
      float d = length(g + o - f);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
    }
    c += pow(clamp(1.0 - (d2 - d1) * 2.4, 0.0, 1.0), 5.0);
    q = q * 1.73 + 3.1;
  }
  return c * 0.65;
}`,
  bo = 10,
  Pn = 2.6,
  Tn = `
uniform vec4 uKoiA[${bo}], uKoiB[${bo}];
float koiShade(vec3 P) {
  float sh = 0.0;
  float sl = length(uKoiSun.xy);
  vec2 sd = uKoiSun.xy / max(sl, 1e-4);
  for (int i = 0; i < ${bo}; i++) {
    vec4 a = uKoiA[i], b = uKoiB[i];
    float h = a.y - P.y;                                          // the fish's height over this point
    if (b.x <= 0.0 || h < 0.02) continue;
    vec2 q = P.xz + uKoiSun.xy * h - a.xz;                        // up the bent sun ray to the fish's level
    float L = b.x, blur = 0.008 + 0.05 * h;
    float r = 0.64 * L + blur;
    if (dot(q, q) > r * r) continue;
    float cy = cos(a.w), sy = sin(a.w);
    vec2 l = vec2(q.x * cy - q.y * sy, q.x * sy + q.y * cy) / L;  // in the fish's frame, body lengths: across, along (nose +0.5)
    // (the body's own depth throws a wider shadow across the sun's way)
    vec2 sl2 = vec2(sd.x * cy - sd.y * sy, sd.x * sy + sd.y * cy);
    l -= sl2 * clamp(dot(l - vec2(0.0, 0.1), sl2), -0.1 * sl, 0.1 * sl);
    // the same curl and tail wave the body swims with
    float s = clamp((0.5 - l.y) / 1.02, 0.0, 1.0);
    l.x -= b.y * (l.y - 0.1) * (l.y - 0.1) * 1.2 + sin(b.z - s * 4.2) * b.w * (0.012 + 0.11 * s * s);
    // the body's outline (its lofted profile), a narrow tail fin behind the wrist
    float sb = clamp((0.5 - l.y) / 0.78, 0.0, 1.0);
    float w = 0.105 * pow(sin(3.14159 * clamp(pow(sb, 0.62) * 0.98 + 0.02, 0.0, 1.0)), 0.75) * (1.0 - 0.55 * sb * sb) + 0.008;
    if (l.y < -0.25) w = max(w, 0.018 + 0.05 * smoothstep(-0.36, -0.5, l.y));
    float d = max(abs(l.x) - w, max(l.y - 0.505, -0.52 - l.y)) * L;
    float o = 1.0 - smoothstep(-blur, blur, d);
    // the pectoral fans: thin, a paler shade
    float dp = max(abs(l.x) - 0.18, abs(l.y - 0.23) - 0.06) * L;
    o = max(o, 0.35 * (1.0 - smoothstep(-blur, blur, dp)));
    sh = max(sh, o * exp(-h * 0.6));                              // (the water's own glow fills a high fish's shadow)
  }
  return sh * uKoiSun.z;
}`;
