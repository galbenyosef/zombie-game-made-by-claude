// assets/index-BcIwWgby 27 — setattribute
// Lines 8025-8280 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function _r(s, o, { keyDir: t, rng: u, glows: e = [], wisps: r = [] }) {
  const a = { uT: { value: 0 }, uScale: { value: 600 } },
    i = t.clone().normalize().clone().multiplyScalar(-1),
    d = 10.6,
    y = Ir(48).map(([b, P]) => [b * 0.94 + -3 * 0.06, P * 0.94 + 51.4 * 0.06]),
    w = d / -i.y,
    g = [],
    z = [],
    x = [],
    v = y.length,
    n = 6;
  for (let b = 0; b <= n; b++) {
    const P = b / n,
      _ = d * (1 - P);
    for (let I = 0; I < v; I++) {
      const [R, V] = y[I],
        L = w * P;
      g.push(R + i.x * L, _, V + i.z * L);
      const [K, j] = y[(I + 1) % v],
        [O, J] = y[(I - 1 + v) % v],
        tt = K - O,
        st = j - J,
        G = Math.hypot(tt, st) || 1;
      z.push(st / G, 0, -tt / G);
    }
  }
  for (let b = 0; b < n; b++)
    for (let P = 0; P < v; P++) {
      const _ = b * v + P,
        I = b * v + ((P + 1) % v),
        R = _ + v,
        V = I + v;
      x.push(_, R, I, I, R, V);
    }
  const l = new Rt();
  (l.setAttribute("position", new xt(g, 3)),
    l.setAttribute("normal", new xt(z, 3)),
    l.setIndex(x));
  const f = new P0({
      uniforms: {
        uT: a.uT,
        uI: { value: 0.042 },
        uCol: { value: new Xt(0.62, 0.74, 1) },
        uTop: { value: d },
      },
      vertexShader: `varying vec3 vW; varying vec3 vN;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform float uT; uniform float uI; uniform vec3 uCol; uniform float uTop; varying vec3 vW; varying vec3 vN;
      ${la}
      void main() {
        vec3 V = normalize(cameraPosition - vW);
        float soft = pow(abs(dot(normalize(vN), V)), 2.4);
        float h = clamp(vW.y / uTop, 0.0, 1.0);
        float fade = smoothstep(0.0, 0.1, h) * (1.0 - smoothstep(0.82, 1.0, h));
        vec2 q = vW.xz * 1.1 + vec2(vW.y * 0.35, -vW.y * 0.2);
        float n = an(q + vec2(uT * 0.03, uT * 0.05)) * 0.55 + an(q * 3.1 - vec2(uT * 0.07, 0.0)) * 0.3 + an(q * 9.0 + uT * 0.1) * 0.15;
        float near = smoothstep(1.0, 4.0, length(cameraPosition - vW));
        gl_FragColor = vec4(uCol * uI * soft * fade * (0.2 + 1.5 * n * n * n) * near, 1.0);
      }`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
      side: p0,
    }),
    h = new bt(l, f);
  ((h.name = "church_moonshaft"), (h.renderOrder = 25), o.add(h));
  const c = `
    uniform vec3 uDown; uniform vec2 uHole; uniform vec2 uHoleR;
    float inShaft(vec3 p) {
      // back along the light to the vault's height: inside the hole's ellipse there?
      float s = (${d.toFixed(2)} - p.y) / -uDown.y;
      vec2 q = p.xz - uDown.xz * s;
      vec2 d = (q - uHole) / uHoleR;
      return 1.0 - smoothstep(0.75, 1.0, length(d));
    }`,
    M = (b, P) => {
      const _ = new Rt(),
        I = new Float32Array(b * 3),
        R = new Float32Array(b * 2);
      for (let K = 0; K < b; K++) {
        const [j, O] = y[Math.floor(u() * y.length)],
          J = Math.sqrt(u()),
          tt = -3 + (j + 3) * J * 0.95,
          st = 51.4 + (O - 51.4) * J * 0.95,
          G = u() * d,
          q = (d - G) / -i.y;
        (I.set([tt + i.x * q, G, st + i.z * q], K * 3),
          R.set([u(), u()], K * 2));
      }
      (_.setAttribute("position", new vt(I, 3)),
        _.setAttribute("aSeed", new vt(R, 2)));
      const V = new P0({
          uniforms: {
            uT: a.uT,
            uScale: a.uScale,
            uDown: { value: i.clone() },
            uHole: { value: new re(-3, 51.4) },
            uHoleR: { value: new re(2.4, 1.95) },
          },
          vertexShader: `attribute vec2 aSeed; uniform float uT; uniform float uScale; varying float vLit; varying float vHot; varying float vA;
        ${c}
        void main() {
          // falling (ash) or drifting (motes): the column wraps top to bottom
          float fall = ${P.fall.toFixed(3)} * (0.6 + aSeed.x * 0.8);
          float y = mod(position.y - uT * fall + aSeed.y * 3.0, ${d.toFixed(2)});
          float s = (position.y - y) / -uDown.y;
          vec3 p = vec3(position.x + uDown.x * s, y, position.z + uDown.z * s);
          p.x += sin(uT * (0.3 + aSeed.x * 0.4) + aSeed.y * 30.0) * ${P.wander.toFixed(3)};
          p.z += cos(uT * (0.25 + aSeed.y * 0.3) + aSeed.x * 20.0) * ${P.wander.toFixed(3)};
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          vLit = inShaft(p);
          vHot = step(${P.hot.toFixed(3)}, aSeed.x) * (0.5 + 0.5 * sin(uT * 3.0 + aSeed.y * 40.0));
          vA = smoothstep(0.0, 0.6, y) * (1.0 - smoothstep(${(d - 0.8).toFixed(2)}, ${d.toFixed(2)}, y)) * (1.0 - smoothstep(${(P.near * 0.6).toFixed(2)}, ${P.near.toFixed(2)}, -mv.z));
          gl_PointSize = max(1.0, ${P.size.toFixed(4)} * uScale / -mv.z);
        }`,
          fragmentShader: `varying float vLit; varying float vHot; varying float vA;
        void main() {
          vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard;
          vec3 col = mix(vec3(${P.dark}), vec3(${P.lit}), vLit) + vec3(3.2, 1.1, 0.25) * vHot;
          gl_FragColor = vec4(col * smoothstep(0.5, 0.15, d) * vA, 1.0);
        }`,
          transparent: !0,
          depthWrite: !1,
          blending: ye,
        }),
        L = new Do(_, V);
      return ((L.frustumCulled = !1), (L.renderOrder = 26), L);
    },
    m = M(420, {
      fall: 0.32,
      wander: 0.35,
      size: 0.028,
      near: 30,
      hot: 0.95,
      dark: "0.002, 0.002, 0.0025",
      lit: "0.07, 0.08, 0.1",
    });
  m.name = "church_ash";
  const k = M(380, {
    fall: 0.02,
    wander: 0.5,
    size: 0.006,
    hot: 2,
    dark: "0.0, 0.0, 0.0",
    lit: "0.5, 0.56, 0.72",
    near: 7,
  });
  ((k.name = "church_motes"), o.add(m, k));
  const S = new P0({
    uniforms: { uT: a.uT },
    vertexShader: `attribute vec4 aG; attribute vec3 aC; varying vec2 vUv; varying vec3 vC; varying float vK;
      uniform float uT;
      void main() {
        vec3 c = aG.xyz; float r = aG.w;
        vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), camU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 p = c + (camR * (uv.x - 0.5) + camU * (uv.y - 0.5)) * r * 2.0;
        vUv = uv - 0.5; vC = aC;
        float dc = length(cameraPosition - c);
        vK = smoothstep(r * 0.4, r * 1.6, dc) * (0.9 + 0.1 * sin(uT * 2.3 + c.x * 3.0));
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `varying vec2 vUv; varying vec3 vC; varying float vK;
      void main() { float d = length(vUv) * 2.0; float a = exp(-d * d * 3.5) * (1.0 - smoothstep(0.8, 1.0, d)); gl_FragColor = vec4(vC * a * vK, 1.0); }`,
    transparent: !0,
    depthWrite: !1,
    blending: ye,
  });
  if (e.length) {
    const b = new m0(1, 1);
    b.translate(0.5, 0.5, 0);
    const P = new Po();
    ((P.index = b.index),
      P.setAttribute("position", b.attributes.position),
      P.setAttribute("uv", b.attributes.uv));
    const _ = new Float32Array(e.length * 4),
      I = new Float32Array(e.length * 3);
    (e.forEach((V, L) => {
      (_.set([V.x, V.y, V.z, V.r], L * 4), I.set(V.c, L * 3));
    }),
      P.setAttribute("aG", new M0(_, 4)),
      P.setAttribute("aC", new M0(I, 3)),
      (P.instanceCount = e.length));
    const R = new bt(P, S);
    ((R.frustumCulled = !1),
      (R.renderOrder = 24),
      (R.name = "church_haze"),
      o.add(R));
  }
  if (r.length) {
    const P = [],
      _ = [],
      I = [],
      R = [];
    r.forEach((j, O) => {
      const J = P.length / 3;
      for (let tt = 0; tt <= 24; tt++)
        for (const st of [0, 1])
          (P.push(j.x, j.y, j.z),
            _.push(O * 7.3, st, j.h),
            R.push(st, tt / 24));
      for (let tt = 0; tt < 24; tt++) {
        const st = J + tt * 2;
        I.push(st, st + 1, st + 2, st + 1, st + 3, st + 2);
      }
    });
    const V = new Rt();
    (V.setAttribute("position", new xt(P, 3)),
      V.setAttribute("aS", new xt(_, 3)),
      V.setAttribute("uv", new xt(R, 2)),
      V.setIndex(I));
    const L = new P0({
        uniforms: { uT: a.uT },
        vertexShader: `attribute vec3 aS; uniform float uT; varying vec2 vUv; varying float vSeed;
        void main() {
          float t = uv.y, sd = aS.x, hgt = aS.z;
          float wv = uT * 0.9 + sd;
          vec3 p = position + vec3(sin(t * 5.0 - wv * 1.3) * 0.05 * t + sin(t * 11.0 - wv * 2.1) * 0.02 * t, t * hgt, cos(t * 4.0 - wv) * 0.04 * t);
          vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
          p += camR * (aS.y - 0.5) * (0.006 + 0.07 * t * t);
          vUv = vec2(aS.y, t); vSeed = sd;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,
        fragmentShader: `uniform float uT; varying vec2 vUv; varying float vSeed;
        ${la}
        void main() {
          float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float n = an(vec2(vUv.x * 3.0 + vSeed, vUv.y * 6.0 - uT * 0.8));
          float a = across * across * smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.35, 1.0, vUv.y)) * (0.4 + n);
          vec3 c = mix(vec3(0.5, 0.26, 0.1), vec3(0.12, 0.11, 0.1), smoothstep(0.0, 0.5, vUv.y));
          gl_FragColor = vec4(c * a * 0.22, 1.0);
        }`,
        transparent: !0,
        depthWrite: !1,
        blending: ye,
        side: p0,
      }),
      K = new bt(V, L);
    ((K.frustumCulled = !1),
      (K.renderOrder = 23),
      (K.name = "church_smoke"),
      o.add(K));
  }
  return {
    update: (b, P) => {
      a.uT.value = P;
      const _ = s.game;
      _?.post?.size &&
        _.camera &&
        (a.uScale.value =
          _.post.size.y / (2 * Math.tan((_.camera.fov * Math.PI) / 360)));
    },
    shaft: h,
    U: a,
  };
}
