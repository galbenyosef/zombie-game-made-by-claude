// assets/district-BhfbivMT 02 — replace
// Lines 332-666 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function buildDistrictGround(n) {
  const t = new P0();
  t.name = "terrain";
  const e = De,
    r = 0.14,
    o = Math.round((e.x1 - e.x0) / r) + 1,
    l = Math.round((e.z1 - e.z0) / r) + 1,
    s = new Float32Array(o * l * 3),
    c = new Float32Array(o * l * 2),
    a = new Float32Array(o * l * 2),
    h = new Float32Array(o * l);
  for (let O = 0; O < l; O++)
    for (let k = 0; k < o; k++) {
      const P = O * o + k,
        W = e.x0 + k * r,
        q = e.z0 + O * r,
        Y = Rt(W, q);
      ((h[P] = Y),
        (s[P * 3] = W),
        (s[P * 3 + 1] = Un(W, q)),
        (s[P * 3 + 2] = q),
        (c[P * 2] = W),
        (c[P * 2 + 1] = -q));
      const $ = Xn(W, q);
      ((a[P * 2] = 1 - Math.min(1, Math.max(0, ($ - 0.4) / 0.3))),
        (a[P * 2 + 1] = Y < 0.7 ? Math.max(0, 1 - Y / 0.7) : 0));
    }
  const f = [],
    y = [];
  for (let O = 0; O < l - 1; O++)
    for (let k = 0; k < o - 1; k++) {
      const P = O * o + k,
        W = P + 1,
        q = P + o,
        Y = q + 1;
      (Math.min(h[P], h[W], h[q], h[Y]) < 0.45 ? y : f).push(P, q, W, W, q, Y);
    }
  const m = (O) => {
      const k = new St();
      return (
        k.setAttribute("position", new V0(s, 3)),
        k.setAttribute("uv", new V0(c, 2)),
        k.setAttribute("aMask", new V0(a, 2)),
        k.setIndex(O),
        k.computeVertexNormals(),
        k
      );
    },
    b = v0("garden_moss"),
    v = v0("garden_gravel"),
    p = v0("ruin_ash"),
    d = $n(b, v, p),
    i = new l0(m(f), d);
  ((i.name = "garden_land"), (i.receiveShadow = !0));
  const u = v0("garden_pondbed").clone();
  ((u.userData = { U: { uDead: { value: 0 } } }),
    (u.onBeforeCompile = (O) => {
      ((O.uniforms.uDead = u.userData.U.uDead),
        (O.vertexShader = O.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vY;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vY = (modelMatrix * vec4(transformed, 1.0)).y;`,
          )),
        (O.fragmentShader = O.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vY;
uniform float uDead;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      float wetK = smoothstep(${(dt + 0.06).toFixed(3)}, ${(dt - 0.02).toFixed(3)}, vY);
      diffuseColor.rgb *= mix(0.9, 0.62, wetK);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.018, 0.016, 0.014), uDead * 0.8);`,
          )));
    }),
    (u.customProgramCacheKey = () => "bed2"));
  const x = m(y),
    w = new l0(x, u);
  ((w.name = "garden_basin"),
    (w.receiveShadow = !0),
    w.layers.enable(3),
    t.add(i, w));
  const _ = new P0();
  _.name = "outside_ground";
  const M = new D0(_e.x1 - _e.x0 + 1.4, _e.z1 - _e.z0 + 0.6, 1, 1).rotateX(
    -Math.PI / 2,
  );
  M.translate((_e.x0 + _e.x1) / 2, 0, (_e.z0 + _e.z1) / 2 + 0.3);
  const C = (O) => {
    const k = O.attributes.position,
      P = new Float32Array(k.count * 2);
    for (let W = 0; W < k.count; W++)
      ((P[W * 2] = k.getX(W)), (P[W * 2 + 1] = -k.getZ(W)));
    return (O.setAttribute("uv", new V0(P, 2)), O);
  };
  C(M);
  const T = new l0(M, v0("plaza_cobble"));
  ((T.receiveShadow = !0), (T.name = "plaza"));
  const N = [
      [-160, 160, -160, -11.4],
      [-160, -16.7, -11.4, 48],
      [16.7, 160, -11.4, 48],
      [-160, 160, 48, 62],
      [-160, -135, 62, 160],
      [135, 160, 62, 160],
      [-16.7, -13.4, -11.4, 11.4],
      [13.4, 16.7, -11.4, 11.4],
      [-16.7, 16.7, 40.8, 48],
    ],
    K = new l0(
      _0(
        N.map(([O, k, P, W]) =>
          C(
            new D0(k - O, W - P)
              .rotateX(-Math.PI / 2)
              .translate((O + k) / 2, -0.01, (P + W) / 2),
          ),
        ),
      ),
      v0("ruin_ash"),
    );
  return (
    (K.receiveShadow = !0),
    (K.name = "burnt_ground"),
    _.add(T, K),
    t.add(_),
    {
      group: t,
      land: i,
      basin: w,
      outside: _,
      setWorld(O) {
        const k = O === "ruins";
        ((d.userData.U.uAsh.value = k ? 1 : 0),
          (u.userData.U.uDead.value = k ? 1 : 0),
          (_.visible = k));
      },
    }
  );
}
function _0(n) {
  let t = 0,
    e = 0;
  for (const m of n)
    ((t += m.attributes.position.count),
      (e += m.index ? m.index.count : m.attributes.position.count));
  const r = new Float32Array(t * 3),
    o = new Float32Array(t * 3),
    l = new Float32Array(t * 2),
    s = new Uint32Array(e),
    c = n.every((m) => m.attributes.color),
    a = c ? new Float32Array(t * 3) : null;
  let h = 0,
    f = 0;
  for (const m of n) {
    (r.set(m.attributes.position.array, h * 3),
      o.set(m.attributes.normal.array, h * 3),
      l.set(m.attributes.uv.array, h * 2),
      a && a.set(m.attributes.color.array, h * 3));
    const b = m.index
      ? m.index.array
      : [...Array(m.attributes.position.count).keys()];
    for (let v = 0; v < b.length; v++) s[f + v] = b[v] + h;
    ((h += m.attributes.position.count), (f += b.length));
  }
  const y = new St();
  return (
    y.setAttribute("position", new V0(r, 3)),
    y.setAttribute("normal", new V0(o, 3)),
    y.setAttribute("uv", new V0(l, 2)),
    a && y.setAttribute("color", new V0(a, 3)),
    y.setIndex(new V0(s, 1)),
    y
  );
}
function Ft(n, t) {
  const e = n.clone();
  return (
    (e.userData = { ...n.userData }),
    t.uHot || (t.uHot = { value: Array.from({ length: 12 }, () => new Wn()) }),
    (e.onBeforeCompile = (r) => {
      ((r.uniforms.uFireT = t.uFireT),
        (r.uniforms.uHot = t.uHot),
        (r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vBW;
varying vec3 vBN;`,
          )
          .replace(
            "#include <worldpos_vertex>",
            `#include <worldpos_vertex>
vBW = (modelMatrix * vec4(transformed, 1.0)).xyz; vBN = normalize(mat3(modelMatrix) * objectNormal);`,
          )),
        (r.fragmentShader = r.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vBW;
varying vec3 vBN;
uniform float uFireT;
uniform vec4 uHot[12];
float bH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// is the window of this cell (id) one of the hot ones? (its centre against the list; w = the wall's own coordinate)
float hotAt(vec2 cid, float w, bool xFace) {
  vec3 c = xFace ? vec3(w, 0.4 + (cid.y + 0.515) * 3.2, (cid.x + 0.5) * 2.6) : vec3((cid.x + 0.5) * 2.6, 0.4 + (cid.y + 0.515) * 3.2, w);
  float k = 0.0;
  for (int i = 0; i < 12; i++) { vec4 hh = uHot[i]; if (hh.w > 0.5 && distance(hh.xyz, c) < 0.9) k = 1.0; }
  return k;
}`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      float winK = 0.0, glassK = 0.0, flatK = 0.0;
      vec3 fireE = vec3(0.0);
      if (abs(vBN.y) < 0.5) {
        bool xFace = abs(vBN.x) > 0.5;
        float along = xFace ? vBW.z : vBW.x;
        vec2 cellP = vec2(along / 2.6, (vBW.y - 0.4) / 3.2);
        vec2 f = fract(cellP), id = floor(cellP);
        float blockS = floor(along / 40.0) * 7.0;
        float h = bH(id + blockS), h2 = bH(id * 1.7 + 3.1 + blockS), h3 = bH(id * 2.3 + 9.7 + blockS);
        float hBelow = bH(id - vec2(0.0, 1.0) + blockS);
        float upper = step(0.8, vBW.y), upperBelow = step(1.0, id.y);
        const vec2 LO = vec2(0.28, 0.25), HI = vec2(0.72, 0.78), FM = vec2(0.05 / 2.6, 0.05 / 3.2);
        float inO = step(LO.x, f.x) * step(f.x, HI.x) * step(LO.y, f.y) * step(f.y, HI.y) * upper;
        float inF = step(LO.x - FM.x, f.x) * step(f.x, HI.x + FM.x) * step(LO.y - FM.y, f.y) * step(f.y, HI.y + FM.y) * upper;
        float sill = step(LO.x - 0.035, f.x) * step(f.x, HI.x + 0.035) * step(LO.y - FM.y - 0.028, f.y) * step(f.y, LO.y - FM.y) * upper;
        float wallW = xFace ? vBW.x : vBW.z;
        float hot = hotAt(id, wallW, xFace), hotB = hotAt(id - vec2(0.0, 1.0), wallW, xFace);
        float burn = max(step(0.86, h), hot), out_ = step(0.7, h) * (1.0 - burn);        // (burning; burnt out)
        float burnB = max(step(0.86, hBelow), hotB), outB = step(0.7, hBelow) * (1.0 - burnB);
        float flick = 0.6 + 0.4 * sin(uFireT * (7.0 + h * 9.0) + h * 30.0) * sin(uFireT * 3.1 + h * 11.0);
        // the wall itself: a band at every floor, rain streaks under the sills, grime low down
        vec3 wallC = diffuseColor.rgb;
        float band = (step(f.y, 0.03) + step(0.972, f.y)) * step(3.0, vBW.y);
        wallC *= 1.0 + 0.22 * band;
        float streak = step(0.55, bH(vec2(floor(along * 14.0), id.y + blockS))) * step(f.y, LO.y - 0.02) * step(abs(f.x - 0.5), 0.2) * upper;
        wallC *= 1.0 - 0.18 * streak * smoothstep(0.0, LO.y, f.y);
        wallC *= mix(0.5, 1.0, smoothstep(0.0, 1.5, vBW.y));
        // soot up the wall from a window that burns or burnt: a plume that widens as it rises, into the floor above
        float rise = f.y - HI.y, plume = step(0.0, rise) * step(abs(f.x - 0.5), 0.2 + rise * 0.9) * (1.0 - rise * 2.2);
        float riseB = f.y + 1.0 - HI.y, plumeB = step(abs(f.x - 0.5), 0.2 + riseB * 0.9) * max(0.0, 1.0 - riseB * 2.2) * step(f.y, LO.y - FM.y);
        float soot = clamp(plume * (burn + out_) * upper * (1.0 + hot) + plumeB * (burnB + outB) * upperBelow * (1.0 + hotB), 0.0, 1.0);
        soot *= 0.6 + 0.4 * bH(vec2(floor(along * 30.0), floor(vBW.y * 6.0)));
        wallC *= 1.0 - 0.85 * soot;
        // the frame (dark metal) and the sill (pale concrete)
        wallC = mix(wallC, vec3(0.045, 0.045, 0.05), inF - inO);
        wallC = mix(wallC, vec3(0.34, 0.33, 0.31) * (1.0 - 0.6 * soot), sill);
        diffuseColor.rgb = wallC;
        flatK = max(inF, sill);
        // THE ROOM behind the opening
        if (inO > 0.5) {
          winK = 1.0;
          vec3 T = xFace ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
          vec3 Nw = normalize(vec3(vBN.x, 0.0, vBN.z));
          vec3 rd = normalize(vBW - cameraPosition);
          vec3 r = vec3(dot(rd, T), rd.y, max(-dot(rd, Nw), 0.02));
          r.x = abs(r.x) < 1e-4 ? 1e-4 : r.x; r.y = abs(r.y) < 1e-4 ? 1e-4 : r.y;
          vec3 pp = vec3(f.x * 2.6, f.y * 3.2, 0.0), dims = vec3(2.6, 3.2, 3.5);
          vec3 tv = (step(0.0, r) * dims - pp) / r;
          float t = min(min(tv.x, tv.y), tv.z);
          vec3 hp = pp + r * t;
          float isBack = step(tv.z, min(tv.x, tv.y)), isY = (1.0 - isBack) * step(tv.y, tv.x);
          float isFloor = isY * step(r.y, 0.0), isCeil = isY * step(0.0, r.y), isSide = 1.0 - isBack - isY;
          vec3 paper = mix(vec3(0.3, 0.27, 0.22), vec3(0.24, 0.26, 0.28), h2) * (0.85 + 0.3 * h3);
          vec3 c = paper * (0.75 * isBack + 0.95 * isSide) + vec3(0.1, 0.085, 0.07) * isFloor + vec3(0.4, 0.39, 0.37) * isCeil;
          // a wardrobe or a shelf against the back wall in some rooms; a door in the back wall in others
          float furn = isBack * step(0.45, h3) * step(abs(hp.x - 0.6 - h2 * 1.4), 0.45) * step(hp.y, 1.9 + h2 * 0.3);
          float door = isBack * step(h3, 0.3) * step(abs(hp.x - 1.9 + h2 * 0.8), 0.42) * step(hp.y, 2.05);
          c = mix(c, vec3(0.07, 0.05, 0.04), furn); c = mix(c, vec3(0.03), door);
          c *= exp(-hp.z * 0.38);                                                // (deeper, darker)
          c = mix(c, vec3(0.02, 0.018, 0.016), out_ * 0.9);                      // (burnt out: black)
          // a fire on the floor: the ceiling glows most, the walls lit from below, smoke under the ceiling
          if (burn > 0.5) {
            // (lit from the floor at the back: the ceiling brightest over the fire, the walls bright low and dark high, the
            // furniture and the door black against it; the light does not saturate, so the room's shape reads)
            float lowK = 1.0 - hp.y / 3.2, deep = exp(-abs(hp.z - 2.4) * 0.6), side = exp(-abs(hp.x - 1.3) * 0.5);
            float gl = isCeil * (0.35 + 0.65 * deep * side) + isFloor * 0.9 * deep + (isBack + isSide) * (0.08 + 0.75 * lowK * lowK) * (0.4 + 0.6 * deep);
            float smoke = smoothstep(2.3, 3.1, hp.y) * (1.0 - isFloor) * (1.0 - isCeil * 0.5);
            gl *= (1.0 - 0.9 * furn) * (1.0 - 0.6 * door) * (1.0 - 0.75 * smoke);
            fireE = vec3(2.4, 0.72, 0.18) * flick * gl * (1.0 + hot * 0.8);
            c *= 0.3;
          }
          // the glass: kept (smooth, the fires glint in it), cracked, or gone; a curtain behind some (not the burnt)
          glassK = step(h3, 0.42) * (1.0 - burn) * (1.0 - out_);
          vec2 wp = vec2((f.x - LO.x) / (HI.x - LO.x), (f.y - LO.y) / (HI.y - LO.y));
          float curtain = step(0.62, h2) * (1.0 - burn) * (1.0 - out_) * step(wp.x, 0.28 + 0.25 * bH(id + 5.0)) * (0.8 + 0.2 * sin(wp.x * 60.0));
          c = mix(c, mix(vec3(0.42, 0.36, 0.3), vec3(0.3, 0.33, 0.36), h3) * 0.6, curtain);
          float crack = glassK * step(0.3, h3) * smoothstep(0.012, 0.0, abs(fract(wp.x * 1.3 + wp.y * 2.1 + h2) - 0.5) * abs(fract(wp.x * 2.7 - wp.y * 1.1) - 0.5));
          c = mix(c, vec3(0.5), crack * 0.6);
          diffuseColor.rgb = c * mix(1.0, 0.75, glassK);
        }
      }`,
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.7, flatK); roughnessFactor = mix(roughnessFactor, 0.95, winK); roughnessFactor = mix(roughnessFactor, 0.06, glassK);`,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
      normal = normalize(mix(normal, nonPerturbedNormal, max(winK, flatK)));`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      totalEmissiveRadiance += fireE;`,
          )));
    }),
    (e.customProgramCacheKey = () => "block3|" + (n.userData.catalog || "")),
    e
  );
}
function Ne(n, t, e, r, o) {
  const l = (Math.floor(r / 2.6) + 0.5) * 2.6,
    s = 0.4 + (o + 0.515) * 3.2,
    c = 0.4 + (o + 0.78) * 3.2,
    a = t + e * 0.35;
  return n === "x"
    ? { hot: [t, s, l], fire: [a, l, 0.95, c - 0.35] }
    : { hot: [l, s, t], fire: [l, a, 0.95, c - 0.35] };
}
