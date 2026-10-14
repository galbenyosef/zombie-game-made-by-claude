// assets/index-BcIwWgby 17 — math
// Lines 4665-4980 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function tr(s, o, t) {
  const u = new Kt();
  u.name = "checkpoint";
  const e = Mo.a,
    r = Mo.b,
    a = At("concrete_grey").clone();
  a.vertexColors = !0;
  const p = new he();
  (p.moveTo(-0.6, 0),
    p.lineTo(0.6, 0),
    p.lineTo(0.6, 0.32),
    p.lineTo(0.17, 0.55),
    p.lineTo(0.11, 3.55),
    p.lineTo(-0.11, 3.55),
    p.lineTo(-0.17, 0.55),
    p.lineTo(-0.6, 0.32),
    p.lineTo(-0.6, 0));
  const i = [],
    d = 1.52;
  for (let l = e.x0 + d / 2, f = 0; l < e.x1 + 0.01; l += d, f++) {
    const h = new te(p, {
      depth: d - 0.09,
      bevelEnabled: !0,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 2,
    });
    (h.translate(0, 0, -1.43 / 2),
      h.scale(1, 0.96 + s() * 0.07, 1),
      h.rotateY(Math.PI / 2));
    const c = f === 5 ? 0.14 : (s() - 0.5) * 0.03;
    (h.rotateX(c),
      h.rotateY((s() - 0.5) * 0.04),
      h.translate(Math.min(l, e.x1 - d / 2), 0, e.z + (s() - 0.5) * 0.08));
    const M = h.attributes.position,
      m = new Float32Array(M.count * 3),
      k = 0.8 + s() * 0.25;
    for (let S = 0; S < M.count; S++) {
      const A = M.getY(S),
        b = 0.35 + 0.65 * Math.min(1, A / 2.2);
      for (let P = 0; P < 3; P++) m[S * 3 + P] = b * k;
    }
    (h.setAttribute("color", new vt(m, 3)), i.push(Ct(h)));
  }
  const y = new bt(X0(i), a);
  ((y.castShadow = !0),
    (y.receiveShadow = !0),
    (y.name = "blast_walls"),
    u.add(y));
  {
    const l = (c, M, m) => {
        const k = document.createElement("canvas");
        ((k.width = Math.round(c * 200)), (k.height = Math.round(M * 200)));
        const S = k.getContext("2d");
        m(S, k.width, k.height);
        const A = new io(k);
        ((A.colorSpace = lo), (A.anisotropy = 4));
        const b = new n0({
          map: A,
          transparent: !0,
          roughness: 0.9,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          depthWrite: !1,
        });
        return new bt(new m0(c, M), b);
      },
      f = (c, M) => {
        (c.save(),
          (c.shadowColor = c.strokeStyle),
          (c.shadowBlur = 10),
          M(),
          c.restore());
      };
    for (const [c, M] of [
      [-12.2, "14"],
      [-7.6, "17"],
      [-3.1, "20"],
      [1.5, "23"],
    ]) {
      const m = l(0.9, 0.5, (k, S, A) => {
        ((k.fillStyle = "rgba(210,200,160,0.85)"),
          (k.font = `bold ${Math.round(A * 0.8)}px monospace`),
          (k.textAlign = "center"),
          (k.textBaseline = "middle"),
          k.fillText("B" + M, S / 2, A / 2));
      });
      (m.position.set(c, 2.7, e.z - 0.132), (m.rotation.y = Math.PI), u.add(m));
    }
    const h = l(3, 1.1, (c, M, m) => {
      ((c.strokeStyle = "rgba(190,24,16,0.95)"),
        (c.fillStyle = "rgba(190,24,16,0.95)"),
        (c.lineWidth = 16),
        (c.lineCap = "round"),
        (c.lineJoin = "round"),
        f(c, () => {
          ((c.font = `bold ${Math.round(m * 0.42)}px Impact, Arial Black, sans-serif`),
            (c.textAlign = "left"),
            (c.textBaseline = "top"),
            c.fillText("CHURCH", M * 0.06, m * 0.05),
            c.beginPath(),
            c.moveTo(M * 0.94, m * 0.72),
            c.lineTo(M * 0.08, m * 0.72),
            c.stroke(),
            c.beginPath(),
            c.moveTo(M * 0.2, m * 0.52),
            c.lineTo(M * 0.07, m * 0.72),
            c.lineTo(M * 0.2, m * 0.92),
            c.stroke());
          for (let k = 0; k < 9; k++) {
            const S = M * (0.1 + k * 0.1);
            c.fillRect(S, m * 0.72, 3, m * (0.08 + Math.random() * 0.2));
          }
        }));
    });
    (h.position.set(0.9, 1.75, e.z - 0.15), (h.rotation.y = Math.PI), u.add(h));
  }
  (o.push({
    x0: e.x0,
    x1: e.x1,
    z0: e.z - 0.62,
    z1: e.z + 0.62,
    y0: 0,
    y1: 3.55,
  }),
    At("ruin_char"));
  const w = At("rust_metal");
  {
    const l = Ta("armytruck", { burnt: !0, seed: 7 }).group;
    (l.position.set(e.truck[0], 0, e.truck[1]),
      (l.rotation.y = Math.PI / 2 + 0.06),
      (l.rotation.z = 0.04),
      l.updateMatrixWorld(!0),
      t(l),
      o.push({
        x0: e.gap[1] + 0.05,
        x1: 16.2,
        z0: e.truck[1] - 1.25,
        z1: e.truck[1] + 1.25,
        y0: 0,
        y1: 3,
      }));
  }
  const g = new t0(0.5, 10, 6);
  g.scale(0.58, 0.19, 0.34);
  const z = new n0({ color: 5984576, roughness: 0.97 }),
    x = [],
    v = (l, f, h, c) => {
      for (let M = 0; M < c; M++)
        for (let m = l + (M % 2 ? 0.29 : 0.05); m < f - 0.2; m += 0.56)
          x.push([
            m + (s() - 0.5) * 0.04,
            0.1 + M * 0.17,
            h + (s() - 0.5) * 0.05,
            (s() - 0.5) * 0.12,
          ]);
    };
  (v(r.bags0, r.x1, r.z - 0.17, 7),
    v(r.bags0, r.x1, r.z + 0.17, 7),
    v(r.west[0], r.west[1], r.z - 0.17, 7),
    v(r.west[0], r.west[1], r.z + 0.17, 7));
  const n = new l0(g, z, x.length);
  ((n.name = "sandbags"), (n.castShadow = !0), (n.receiveShadow = !0));
  {
    const l = new wt(),
      f = new w0(),
      h = new pe(),
      c = new dt(1, 1, 1),
      M = new dt();
    x.forEach(([m, k, S, A], b) => {
      (f.setFromEuler(h.set((s() - 0.5) * 0.08, A, (s() - 0.5) * 0.08)),
        c.set(1, 0.85 + s() * 0.3, 1),
        n.setMatrixAt(b, l.compose(M.set(m, k, S), f, c)));
    });
  }
  (u.add(n),
    o.push({
      x0: r.bags0,
      x1: r.x1,
      z0: r.z - 0.45,
      z1: r.z + 0.45,
      y0: 0,
      y1: 1.3,
    }),
    o.push({
      x0: r.x0,
      x1: r.bags0,
      z0: r.z - 0.65,
      z1: r.z + 0.65,
      y0: 0,
      y1: 1,
    }),
    o.push({
      x0: r.west[0] - 0.2,
      x1: r.west[1],
      z0: r.z - 0.45,
      z1: r.z + 0.45,
      y0: 0,
      y1: 1.3,
    }));
  {
    const l = At("iron_black"),
      f = (c, M) => {
        const m = [],
          k = M - c,
          S = Math.round(k / 0.24) * 10;
        for (let A = 0; A <= S; A++) {
          const b = A / S,
            P = b * (k / 0.24) * Math.PI * 2;
          m.push(
            new dt(
              c + b * k,
              1.52 + Math.cos(P) * 0.3,
              r.z + Math.sin(P) * 0.3,
            ),
          );
        }
        return new Es(new ws(m), S, 0.006, 4);
      },
      h = new bt(
        X0([f(r.bags0 + 0.3, r.x1 - 0.2), f(r.west[0], r.west[1] - 0.2)]),
        l,
      );
    ((h.name = "razor_wire"), u.add(h));
  }
  {
    const l = new Pt(0.29, 0.29, 0.88, 16);
    for (const [f, h] of [
      [0.55, -0.35],
      [0.9, 0.3],
      [1.35, -0.3],
    ]) {
      const c = new bt(Ct(l.clone().translate(r.gap[1] + f, 0.44, r.z + h)), w);
      ((c.castShadow = !0), (c.receiveShadow = !0), u.add(c));
    }
  }
  return { group: u };
}
const ce = 3.2,
  er = 720,
  Xo = (s, o) => {
    const t = Math.sin(s * 127.1 + o * 311.7) * 43758.5453;
    return t - Math.floor(t);
  },
  Fo = (s, o) => {
    const t = Math.floor(s),
      u = Math.floor(o);
    let e = s - t,
      r = o - u;
    ((e = e * e * (3 - 2 * e)), (r = r * r * (3 - 2 * r)));
    const a = Xo(t, u),
      p = Xo(t + 1, u),
      i = Xo(t, u + 1),
      d = Xo(t + 1, u + 1);
    return a + (p - a) * e + (i - a) * r + (a - p - i + d) * e * r;
  };
function or() {
  const s = [0, 0.28, 0.52, 0.76],
    o = [],
    t = [];
  for (const r of s) o.push(-0.5, r, 0, 0.5, r, 0);
  o.push(0, 1, 0);
  for (let r = 0; r < s.length - 1; r++) {
    const a = r * 2;
    t.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const u = (s.length - 1) * 2;
  t.push(u, u + 1, u + 2);
  const e = new Po();
  return (
    e.setAttribute("position", new xt(o, 3)),
    e.setAttribute(
      "normal",
      new xt(
        new Float32Array(o.length).fill(0).map((r, a) => (a % 3 === 1 ? 1 : 0)),
        3,
      ),
    ),
    e.setIndex(t),
    e
  );
}
const Rs = `
float gh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gh(i), gh(i + vec2(1.0, 0.0)), f.x), mix(gh(i + vec2(0.0, 1.0)), gh(i + vec2(1.0, 1.0)), f.x), f.y); }
`,
  Na = `
uniform float uWindT, uWind, uBurn;
uniform vec3 uWindDir;
uniform vec4 uPush0, uPush1;   // x, z, radius, strength
vec2 lawnBend(vec3 root, float yaw, float arch, float var, float stiff) {
  vec2 f = vec2(sin(yaw), cos(yaw)), sd = vec2(cos(yaw), -sin(yaw));
  vec2 wd = uWindDir.xz;
  float gust = gn(root.xz * 0.21 - wd * uWindT * 1.15) * 0.7 + gn(root.xz * 0.83 - wd * uWindT * 2.4) * 0.3;
  float flutter = sin(uWindT * (2.3 + var * 1.7) + var * 40.0 + root.x * 0.6 + root.z * 0.4);
  vec2 B = f * arch + (wd * (0.06 + 0.62 * gust * gust) + sd * flutter * 0.05) * uWind * (1.0 - uBurn) * stiff;
  for (int k = 0; k < 2; k++) {
    vec4 pu = k == 0 ? uPush0 : uPush1;
    vec2 dp = root.xz - pu.xy; float dl = length(dp);
    float pk = (1.0 - smoothstep(pu.z * 0.35, pu.z, dl)) * pu.w;
    B += (dl > 1e-3 ? dp / dl : vec2(0.0)) * pk;
  }
  float bl = length(B); if (bl > 0.93) B *= 0.93 / bl;
  return B;
}
`,
  La = (s) =>
    Pa.lights_fragment_begin.replace(
      /(getDirectionalLightInfo\( directionalLight, directLight \);[\s\S]*?)(RE_Direct\( directLight)/,
      `$1{
    float back = pow(max(-dot(geometryViewDir, directLight.direction), 0.0), 3.0);
    float thru = max(-dot(geometryNormal, directLight.direction), 0.0);
    reflectedLight.directDiffuse += directLight.color * material.diffuseColor * (back * 0.8 + thru * 0.22) * ${s};
  }
  $2`,
    );
