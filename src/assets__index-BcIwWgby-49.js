// assets__index-BcIwWgby 49 — pos
// Lines 14652-15026 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function gc(s, o, t) {
  const u = Ea(o),
    e = { uGlow: { value: new Float32Array(zo).fill(1) } },
    r = new n0({
      color: 2759184,
      emissive: new Xt(1, 0.5, 0.17),
      emissiveIntensity: 3.2,
      roughness: 0.15,
      metalness: 0,
      transparent: !1,
    }),
    a = (G) => {
      ((G.uniforms.uGlow = e.uGlow),
        (G.vertexShader = G.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute float aLamp;
varying float vLamp;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vLamp = aLamp;`,
          )),
        (G.fragmentShader = G.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uGlow[${zo}];
varying float vLamp;
${pc}`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      if (vLamp < -0.5) {
        // a DEAD lantern's glass: cold, grimy, sooted black toward the top where the flame was; only the torch finds it (a
        // glint, a dull sheen)
        float sootK = smoothstep(0.25, 0.95, clamp(-vLamp - 1.0, 0.0, 1.0) / 0.98);
        diffuseColor.rgb = mix(vec3(0.034, 0.036, 0.036), vec3(0.006, 0.005, 0.004), sootK);
        roughnessFactor = mix(0.16, 0.62, sootK);
        totalEmissiveRadiance = vec3(0.0);
      } else {
        int li = int(vLamp + 0.5);
        float g = 0.0;
        for (int k = 0; k < ${zo}; k++) if (k == li) g = uGlow[k];
        totalEmissiveRadiance *= g * lampFlicker(uFT, vLamp);
      }`,
          )));
    },
    p = i0(r, "lampglass", a, { canopy: !1 }),
    i = i0(
      new n0({
        color: 0,
        emissive: new Xt(1, 0.62, 0.25),
        emissiveIntensity: 9,
        roughness: 1,
      }),
      "lampflame",
      a,
      { canopy: !1 },
    ),
    d = i0(
      new n0({
        color: 0,
        emissive: new Xt(1, 0.5, 0.16),
        emissiveIntensity: 2.4,
        roughness: 1,
      }),
      "stoneglow",
      a,
      { canopy: !1 },
    ),
    y = i0(At("iron_black"), "lampiron"),
    w = i0(At("boards_barricade"), "lamppost"),
    g = i0(At("forest_stone"), "lampstone", (G) => {
      const q = At("garden_moss");
      ((G.uniforms.tMoss = { value: q.map }),
        (G.vertexShader = G.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSN;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vSN = normalize(mat3(modelMatrix) * normal);`,
          )),
        (G.fragmentShader = G.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tMoss;
varying vec3 vSN;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      { float mk = smoothstep(0.35, 0.8, vSN.y + (texture2D(tMoss, vMapUv * 0.7).g - 0.15) * 1.5); diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(tMoss, vMapUv * 1.4).rgb, mk * 0.9); }`,
          )));
    }),
    z = { metal: [], glass: [], flame: [], wood: [], stone: [], sglow: [] };
  new wt();
  const x = new w0(),
    v = at(1, 1, 1),
    n = mc(),
    l = (G, q, U, Z) => {
      for (const ot of q) {
        const $ = ot.clone().applyMatrix4(U);
        (Z != null && gn($, "aLamp", [Z]), G.push($));
      }
    },
    f = [];
  let h = null;
  u.forEach((G, q) => {
    const U = x.setFromAxisAngle(at(0, 1, 0), G.face);
    let Z = null;
    if (G.kind === "post") {
      const C = Mc(t),
        T = new wt().compose(at(G.x, 0, G.z), U, v);
      if ((l(z.wood, C.wood, T), G.fate === "gone")) {
        const D = at(C.hang[0], 1.945, C.hang[2]).applyMatrix4(T),
          N = a0(vc());
        N.computeBoundingSphere();
        const H = new bt(N, y);
        ((H.name = "lantern_hook_swing"),
          (H.castShadow = !1),
          (H.receiveShadow = !0),
          H.position.copy(D),
          (H.rotation.order = "YXZ"),
          (H.rotation.y = G.face),
          (h = { mesh: H, yaw: G.face, ph: t() * 6, creakT: 2 }));
        const Q = D.clone().add(at(0, -0.2, 0));
        f.push({ ...G, pos: Q, light: Q.clone(), power: 0 });
        return;
      }
      if (
        (l(z.metal, C.iron, T),
        (Z = at(...C.hang)
          .applyMatrix4(T)
          .add(at(0, -0.24, 0))),
        G.fate === "smashed")
      ) {
        const D = xc(n, t),
          N = at(C.hang[0] + 0.08, 0, C.hang[2] + 0.12).applyMatrix4(T),
          H = new wt().compose(
            at(N.x, Math.max(0, o.heightAt(N.x, N.z)) + 0.004, N.z),
            new w0().setFromAxisAngle(at(0, 1, 0), G.face + 0.9 + t() * 0.6),
            v,
          );
        (l(z.metal, D.metal, H),
          l(z.glass, D.glass, H),
          f.push({
            ...G,
            pos: at(N.x, 0.08, N.z),
            light: at(N.x, 0.3, N.z),
            power: 0,
          }));
        return;
      }
    } else if (G.kind === "stone") {
      const C = yc(t),
        T = new wt().compose(
          at(G.x, o.heightAt(G.x, G.z) - 0.04, G.z),
          U.setFromAxisAngle(at(0, 1, 0), G.face + (t() - 0.5) * 0.3),
          v,
        );
      (l(z.stone, C.stone, T), G.lit && l(z.sglow, C.glow, T, q));
      const D = at(0, 0.86, 0).applyMatrix4(T);
      f.push({
        ...G,
        pos: D,
        light: D.clone().add(
          at(Math.sin(G.face) * 0.3, 0.05, Math.cos(G.face) * 0.3),
        ),
        power: 0.45,
        stone: !0,
      });
      return;
    } else if (G.kind === "angel")
      Z = at(G.hang[0], G.hang[1] - 0.24, G.hang[2]);
    else {
      const C = wc(),
        T = new wt().compose(at(G.x, G.y + 0.26, G.z), U, v);
      (l(z.metal, C.iron, T),
        (Z = at(...C.hang)
          .applyMatrix4(T)
          .add(at(0, -0.24, 0))));
    }
    const ot = new wt().compose(
      Z,
      x.setFromAxisAngle(at(0, 1, 0), G.face + (t() - 0.5) * 0.5),
      v,
    );
    if ((l(z.metal, n.metal, ot), G.lit))
      (l(z.glass, n.glass, ot, q),
        l(
          z.flame,
          n.flame,
          new wt().copy(ot).multiply(new wt().makeTranslation(0, -0.03, 0)),
          q,
        ));
    else for (const C of n.glass) z.glass.push(qa(C.clone()).applyMatrix4(ot));
    const $ = G.kind === "angel" ? 0.55 : G.kind === "post" ? 0.1 : 0.3;
    f.push({
      ...G,
      pos: Z.clone(),
      light: Z.clone().add(at(Math.sin(G.face) * $, 0, Math.cos(G.face) * $)),
      power: G.kind === "angel" ? 0.45 : G.kind === "wall" ? 0.8 : 1,
    });
  });
  const c = new Kt();
  c.name = "forest_lanterns";
  const M = (G, q, U, Z = !0, ot = !1) => {
    if (!G.length) return null;
    const $ = a0(G.map((T) => (ot && Ct(T), T))),
      C = new bt($, q);
    return (
      (C.name = U),
      (C.castShadow = Z),
      (C.receiveShadow = !0),
      c.add(C),
      C
    );
  };
  (M(z.metal, y, "lantern_iron", !0),
    M(z.wood, w, "lantern_posts", !0, !0),
    M(z.stone, g, "stone_lanterns", !0, !0),
    M(z.glass, p, "lantern_glass", !1),
    M(z.flame, i, "lantern_flames", !1),
    M(z.sglow, d, "stone_lantern_glow", !1),
    h && c.add(h.mesh));
  const m = [],
    k = [];
  for (let G = 0; G < 4; G++) {
    const q = new No(16751178, 0, 5.8, 2);
    ((q.name = "forest_lamp_" + G),
      (q.castShadow = !1),
      m.push(q),
      k.push({ l: q, lamp: -1, next: -1, k: 0 }));
  }
  const S = f.map((G) => ({ k: G.lit ? 1 : 0, snuffT: -1 })),
    A = 21;
  let b = 0;
  const P = f.length,
    _ = new Float64Array(P),
    I = Array.from({ length: P }, (G, q) => q),
    R = [];
  let V = 0,
    L = 0;
  const K = (G, q) => _[G] - _[q],
    j = () => {
      for (let G = 0; G < P; G++)
        _[G] =
          (f[G].pos.x - V) ** 2 +
          (f[G].pos.z - L) ** 2 +
          (S[G].k > 0.05 ? 0 : 1e12);
      I.sort(K);
    },
    O = (G, q) => {
      for (let U = 0; U < G.length; U++) if (G[U] === q) return !0;
      return !1;
    },
    J = () => {
      R.length = 0;
      for (let G = 0; G < P && R.length < k.length; G++)
        _[I[G]] < 1e11 && R.push(I[G]);
      for (const G of k) {
        const q = G.next >= 0 ? G.next : G.lamp;
        if (!(q >= 0 && O(R, q)))
          for (const U of R) {
            let Z = !1;
            for (const ot of k)
              (ot.next >= 0 ? ot.next : ot.lamp) === U && (Z = !0);
            if (!Z) {
              G.next = U;
              break;
            }
          }
      }
    };
  function tt(G, q, U) {
    for (let ot = 0; ot < P; ot++) {
      const $ = S[ot];
      if ($.snuffT >= 0) {
        $.snuffT += G;
        const C = $.snuffT / 0.7;
        (($.k =
          C >= 1 ? 0 : (1 - C) * (1 - C) * (0.8 + 0.4 * Math.sin(C * 41))),
          C >= 1 && ($.snuffT = -1));
      }
      e.uGlow.value[ot] = $.k;
    }
    ((V = U.position.x),
      (L = U.position.z),
      j(),
      (b -= G),
      b <= 0 && ((b = 0.3), J()));
    for (const ot of k) {
      if (
        (ot.next >= 0 && ot.next !== ot.lamp
          ? ((ot.k = Math.max(0, ot.k - G * 3)),
            ot.k === 0 && ((ot.lamp = ot.next), (ot.next = -1)))
          : ((ot.next = -1), (ot.k = Math.min(1, ot.k + G * 2))),
        ot.lamp < 0)
      ) {
        ot.l.intensity = 0;
        continue;
      }
      const $ = f[ot.lamp];
      (ot.l.position.copy($.light),
        (ot.l.intensity = ot.k * S[ot.lamp].k * A * $.power * xa(q, ot.lamp)));
    }
    const Z = K0.uLamps.value;
    for (let ot = 0; ot < 8; ot++) {
      if (ot >= P) {
        Z[ot].w = 0;
        continue;
      }
      const $ = I[ot],
        C = f[$];
      Z[ot].set(
        C.pos.x,
        C.pos.y,
        C.pos.z,
        S[$].k * xa(q, $) * (C.stone ? 0.5 : 1),
      );
    }
    if (h) {
      const ot = q + h.ph;
      if (
        ((h.mesh.rotation.x =
          0.2 * Math.sin(ot * 1.55) * (0.75 + 0.25 * Math.sin(ot * 0.21))),
        (h.mesh.rotation.z = 0.06 * Math.sin(ot * 1.1 + 1.3)),
        (h.creakT -= G),
        h.creakT <= 0)
      ) {
        h.creakT = 4.5 + 3 * (0.5 + 0.5 * Math.sin(ot * 0.37));
        const $ = h.mesh.position;
        ($.x - U.position.x) ** 2 + ($.z - U.position.z) ** 2 < 196 &&
          s.audio?.play?.("hook_creak", { pos: [$.x, $.y, $.z], vol: 0.4 });
      }
    }
  }
  const st = {
    list: f.map((G) => ({
      pos: G.pos.toArray().map((q) => +q.toFixed(2)),
      kind: G.kind,
      lit: !!G.lit,
      fate: G.fate,
      s: G.s != null ? +G.s.toFixed(1) : null,
    })),
    snuff(G) {
      S[G] &&
        S[G].k > 0 &&
        S[G].snuffT < 0 &&
        ((S[G].snuffT = 0),
        s.audio?.play?.("lantern_snuff", {
          pos: f[G].pos.toArray(),
          vol: 0.7,
        }));
    },
    relight(G) {
      S[G] && f[G].lit && ((S[G].k = 1), (S[G].snuffT = -1));
    },
    reset() {
      S.forEach((G, q) => {
        ((G.k = f[q].lit ? 1 : 0), (G.snuffT = -1));
      });
    },
  };
  return { group: c, lights: m, update: tt, api: st, spots: f, uGlow: e.uGlow };
}
