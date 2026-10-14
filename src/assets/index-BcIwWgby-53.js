// assets/index-BcIwWgby 53 — push
// Lines 16134-16366 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Wc(s, o, t) {
  const u = new Kt();
  u.name = "forest_stream";
  const e = [];
  {
    const l = o.stream,
      f = 5.6,
      h = [],
      c = [],
      M = [],
      m = [];
    let k = 0;
    for (let _ = 0; _ < l.n; _++) {
      const I = l.x[_],
        R = l.z[_];
      if (I < -51 || I > 51) continue;
      const V = -l.tz[_],
        L = l.tx[_];
      for (const K of [-1, -0.5, 0, 0.5, 1])
        (h.push(I + (V * K * f) / 2, we.water, R + (L * K * f) / 2),
          c.push(l.s[_], (K * f) / 2),
          M.push(0, 1, 0));
      k++;
    }
    for (let _ = 0; _ < k - 1; _++)
      for (let I = 0; I < 4; I++) {
        const R = _ * 5 + I,
          V = R + 5;
        m.push(R, R + 1, V, R + 1, V + 1, V);
      }
    const S = new Rt();
    (S.setAttribute("position", new xt(h, 3)),
      S.setAttribute("normal", new xt(M, 3)),
      S.setAttribute("uv", new xt(c, 2)),
      S.setIndex(m));
    const A = new n0({
        color: 395531,
        roughness: 0.06,
        metalness: 0,
        envMapIntensity: 1.6,
      }),
      b = i0(
        A,
        "water",
        (_) => {
          ((_.vertexShader = _.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec2 vWUv;`,
            )
            .replace(
              "#include <uv_vertex>",
              `#include <uv_vertex>
vWUv = uv;`,
            )),
            (_.fragmentShader = _.fragmentShader
              .replace(
                "#include <common>",
                `#include <common>
varying vec2 vWUv;`,
              )
              .replace(
                "#include <normal_fragment_maps>",
                `#include <normal_fragment_maps>
        {
          // ripples carried downstream: a few wave trains, their slopes summed (u along the flow, v across)
          float t = uFT;
          vec2 p = vWUv;
          vec2 g = vec2(0.0);
          g += vec2(cos(p.x * 3.1 - t * 2.4 + sin(p.y * 1.7) * 1.3), 0.0) * 0.07;
          g += vec2(cos(p.x * 5.3 + p.y * 2.1 - t * 3.3) * 0.05, cos(p.x * 5.3 + p.y * 2.1 - t * 3.3) * 0.02);
          g += vec2(0.0, cos(p.y * 4.7 + p.x * 1.3 - t * 1.9) * 0.05);
          float n1 = fnoise(p * vec2(1.6, 2.4) - vec2(t * 0.9, 0.0)), n2 = fnoise(p * vec2(4.2, 5.1) - vec2(t * 1.6, 0.3 * t));
          g += (vec2(n1, n2) - 0.5) * 0.16;
          // the ripple's slope is in the ribbon's frame (u downstream); the ribbon lies flat, so tip the view normal round x and z
          vec3 wn = normalize(vec3(-g.x, 1.0, -g.y));
          normal = normalize((viewMatrix * vec4(wn, 0.0)).xyz);
        }`,
              )
              .replace(
                "#include <emissivemap_fragment>",
                `#include <emissivemap_fragment>
        {
          // a little foam where it runs fast (in the middle, in streaks) and where it laps the banks
          float fo = smoothstep(0.72, 0.95, fnoise(vWUv * vec2(0.7, 3.0) - vec2(uFT * 0.8, 0.0))) * (1.0 - smoothstep(0.4, 1.6, abs(vWUv.y)));
          totalEmissiveRadiance += vec3(0.012, 0.016, 0.02) * fo;
          diffuseColor.rgb += vec3(0.05, 0.06, 0.07) * fo;
          // the night sky in it: a faint sheen moving with the ripples, brighter toward grazing
          vec3 Vv = normalize(vViewPosition);
          float fr = pow(1.0 - clamp(dot(normal, Vv), 0.0, 1.0), 4.0);
          float rip = 0.5 + 0.5 * sin(vWUv.x * 6.0 - uFT * 3.0 + fnoise(vWUv * 2.0) * 6.0);
          totalEmissiveRadiance += vec3(0.005, 0.009, 0.014) * (0.3 + 0.7 * rip) + vec3(0.03, 0.045, 0.07) * fr;
        }`,
              )));
        },
        { canopy: !1 },
      ),
      P = new bt(S, b);
    ((P.name = "forest_water"), (P.receiveShadow = !0), u.add(P));
  }
  const r = [],
    a = [],
    p = Tt.x,
    i = Tt.z0 - 0.35,
    d = Tt.z1 + 0.35,
    y = d - i;
  for (const l of [-0.52, 0.52]) {
    const f = [];
    for (let c = 0; c <= 8; c++) {
      const M = c / 8;
      f.push(
        at(
          p + l + (t() - 0.5) * 0.03,
          -0.2 - Math.sin(Math.PI * M) * 0.05,
          i - 0.4 + M * (y + 0.8),
        ),
      );
    }
    const h = Vt(f, () => 0.14 + t() * 0.01, 10);
    r.push(h);
  }
  for (let l = i + 0.04; l < d - 0.1;) {
    const f = 0.18 + t() * 0.07,
      h = 1.52 + (t() - 0.5) * 0.1,
      c = t() < 0.12 ? (t() - 0.5) * 0.06 : 0,
      M = new qt(h, 0.05, f - 0.015, 3, 1, 1),
      m = M.attributes.position;
    for (let k = 0; k < m.count; k++)
      m.setY(k, m.getY(k) + c * (m.getX(k) / h) ** 2 * 4);
    (M.computeVertexNormals(),
      M.rotateY((t() - 0.5) * 0.04),
      M.translate(
        p + (t() - 0.5) * 0.06,
        0.005 - Math.sin((Math.PI * (l - i)) / y) * 0.05 + (t() - 0.5) * 0.008,
        l + f / 2,
      ),
      r.push(Ct(M)),
      (l += f));
  }
  for (const l of [-0.74, 0.74]) {
    const f = Math.round(y / 1.9);
    for (let h = 0; h <= f; h++) {
      const c = i + 0.12 + (h / f) * (y - 0.24),
        M = h === 0 || h === f,
        m = M ? 2.02 : 1.08,
        k = new qt(0.1, m + 0.25, 0.1).translate(p + l, m / 2 - 0.12 - 0.05, c);
      r.push(Ct(k));
    }
    for (const h of [0.98, 0.55]) {
      const c = [];
      for (let M = 0; M <= 10; M++) {
        const m = M / 10;
        c.push(
          at(
            p + l + Math.sin(m * 9 + l) * 0.01,
            h - Math.sin(Math.PI * m) * 0.05,
            i + 0.12 + m * (y - 0.24),
          ),
        );
      }
      r.push(Vt(c, () => (h > 0.9 ? 0.042 : 0.032), 7));
    }
    e.push({
      x0: p + l - 0.07,
      x1: p + l + 0.07,
      z0: Tt.z0 - 0.3,
      z1: Tt.z1 + 0.3,
      y0: 0,
      y1: 1.1,
    });
  }
  for (const l of [i - 0.3, d + 0.3])
    for (let f = 0; f < 3; f++) {
      const h = new qt(0.55 + t() * 0.3, 0.45, 0.5 + t() * 0.2, 2, 2, 2),
        c = h.attributes.position;
      for (let M = 0; M < c.count; M++)
        c.setXYZ(
          M,
          c.getX(M) * (0.9 + t() * 0.2),
          c.getY(M) * (0.9 + t() * 0.2),
          c.getZ(M) * (0.9 + t() * 0.2),
        );
      (h.computeVertexNormals(),
        h.translate(
          p - 0.6 + f * 0.6,
          -0.45 + t() * 0.1,
          l + (t() - 0.5) * 0.2,
        ),
        a.push(Ct(h)));
    }
  const w = i0(At("forest_bark"), "bridgelog"),
    g = i0(At("boards_barricade"), "bridgewood", (l) => {
      const f = At("garden_moss");
      ((l.uniforms.tMoss = { value: f.map }),
        (l.vertexShader = l.vertexShader
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
        (l.fragmentShader = l.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tMoss;
varying vec3 vSN;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      { float mk = smoothstep(0.55, 0.9, (texture2D(tMoss, vMapUv * 0.5).g - 0.1) * 2.2) * (0.35 + 0.65 * clamp(vSN.y, 0.0, 1.0)); diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.85, 0.82, 0.78), texture2D(tMoss, vMapUv * 1.3).rgb, mk * 0.7); }`,
          )));
    }),
    z = i0(At("garden_rock"), "bridgestone"),
    x = r.slice(0, 2),
    v = r.slice(2),
    n = (l, f, h) => {
      const c = new bt(a0(l.map((M) => d0(M))), f);
      ((c.name = h), (c.castShadow = !0), (c.receiveShadow = !0), u.add(c));
    };
  return (
    n(x, w, "bridge_stringers"),
    n(v, g, "bridge_deck"),
    n(a, z, "bridge_footings"),
    { group: u, colliders: e, center: [p, we.water + 0.3, (Tt.z0 + Tt.z1) / 2] }
  );
}
