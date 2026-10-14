// assets/gameplay-DnQwS-TC 06 — list
// Lines 1882-2220 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
async function spawnZombies(o) {
  let t = null,
    i = !1,
    e = ["lanky", "brute", "gown"];
  try {
    const l = await fe(
      () => import("./index-Db-AsSxU.js"),
      __vite__mapDeps([0, 1, 2, 3]),
      import.meta.url,
    );
    if (l.createZombie) {
      if (
        (o.section === 2 && l.KINDS && (e = Object.keys(l.KINDS)),
        o.section === 3 &&
          l.KINDS &&
          (e = ["lanky", "brute", "gown", "soldier"].filter((r) => l.KINDS[r])),
        l.prebuildZombies)
      )
        try {
          await l.prebuildZombies(e);
        } catch (r) {
          console.warn("[zombies] prebuild failed", r.message);
        }
      const n = await fe(
        () => import("./zombie_stub-3Vfgk-wH.js"),
        __vite__mapDeps([4, 1]),
        import.meta.url,
      );
      ((t = (r, h) => {
        try {
          return l.createZombie(o.makeCtx(), { kind: r, seed: h });
        } catch (a) {
          return (
            console.warn("[zombies] the kit failed, using a stub:", a.message),
            n.createZombieStub(o.makeCtx(), { kind: r })
          );
        }
      }),
        (i = !0));
    }
  } catch {}
  if (!t) {
    const l = await fe(
      () => import("./zombie_stub-3Vfgk-wH.js"),
      __vite__mapDeps([4, 1]),
      import.meta.url,
    );
    t = (n) => l.createZombieStub(o.makeCtx(), { kind: n });
  }
  const s = {
    game: o,
    list: [],
    real: i,
    kinds: e,
    onKill: null,
    onAkaneHit: null,
    _groans: 0,
    spawn(l, n, r, h = {}) {
      const a = t(l, h.seed ?? s.list.length + 1);
      o.scene.add(a.root);
      const y = new ZombieAnimator(s, l, a, n, r, h.yaw ?? 0);
      return (
        o.world.groundAt &&
          ((y.pos.y = o.world.groundAt(n, r, h.y ?? o.player.pos.y)), y.sync()),
        h.state === "emerge" && ((y.alerted = !0), (y.rushed = !0)),
        h.alerted && ((y.alerted = !0), (y.alertT = h.delay ?? 0)),
        h.target && (y.forceTarget = h.target),
        s.list.push(y),
        y
      );
    },
    alertAt(l, n) {
      for (const r of s.list) {
        if (r.dead || r.alerted) continue;
        const h = Math.hypot(r.pos.x - l.x, r.pos.z - l.z);
        h < n && r.alert(St(0.25, 1.1) + h * 0.04);
      }
    },
    alertAll(l = 0.5) {
      for (const n of s.list) n.alert(l * Math.random());
    },
    groan(l, n = 1) {
      s._groans >= 2 ||
        (s._groans++,
        setTimeout(() => {
          s._groans--;
        }, 1800),
        o.audio.play("zombie_groan_" + (1 + ((Math.random() * 4) | 0)), {
          pos: [l.pos.x, l.pos.y + 1.5, l.pos.z],
          vol: 0.85 * n,
          ref: 2.5,
          rate: St(0.9, 1.08),
          reverb: 0.35,
        }));
    },
    keepWarm() {
      if (s.keeper) return s.keeper;
      const l = t("lanky", 99);
      return (
        l.root.position.set(-80, 0, -80),
        o.scene.add(l.root),
        (s.keeper = l),
        l
      );
    },
    alive() {
      return s.list.filter((l) => !l.dead);
    },
    climbIn(l, n, r = {}) {
      const h = s.spawn(l, n.out[0], n.out[1], { yaw: n.face, seed: r.seed });
      ((h.alerted = !0), (h.alertT = 0));
      const a = (h.air = {
        win: n,
        o: r,
        phase: "wait",
        t: 0,
        perch: r.perch ?? 0.4,
        hard: !!r.crash,
        look: new Ge(),
        res: null,
      });
      return (
        (h.landed = new Promise((y) => {
          a.res = y;
        })),
        (h.y = -30),
        (h.kit.root.visible = !1),
        (h.circle.x = h.circle.z = 1e4),
        h.sync(),
        s.winQ(n).q.push(h),
        h
      );
    },
    _wins: new Map(),
    winQ(l) {
      let n = s._wins.get(l);
      return (n || ((n = { q: [], busy: null }), s._wins.set(l, n)), n);
    },
    nearest(l) {
      let n = null,
        r = 1e9;
      for (const h of s.alive()) {
        const a = h.pos.distanceToSquared(l);
        a < r && ((r = a), (n = h));
      }
      return n;
    },
    update(l) {
      for (const n of s.list) n.update(l);
    },
    prepare(l) {
      for (const n of s.list) n.kit.prepare && n.kit.prepare(l);
    },
    clear(l = null) {
      const n = [];
      for (const r of s.list) {
        if (l && !l(r)) {
          n.push(r);
          continue;
        }
        (o.scene.remove(r.kit.root), r.kit.dispose && r.kit.dispose());
        const h = o.world.circles.indexOf(r.circle);
        h >= 0 && o.world.circles.splice(h, 1);
      }
      ((s.list.length = 0), s.list.push(...n));
      for (const r of s._wins.values())
        ((r.q = r.q.filter((h) => n.includes(h))),
          r.busy && !n.includes(r.busy) && (r.busy = null));
    },
  };
  return s;
}
const ii = `
varying vec3 vLocal; varying vec3 vWorld;
void main() {
  vLocal = position;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
  oi = `
varying vec3 vLocal; varying vec3 vWorld;
uniform float uTime; uniform float uTan; uniform float uK; uniform vec3 uColor; uniform float uLen;
float h31(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h31(i), h31(i + vec3(1,0,0)), f.x), mix(h31(i + vec3(0,1,0)), h31(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h31(i + vec3(0,0,1)), h31(i + vec3(1,0,1)), f.x), mix(h31(i + vec3(0,1,1)), h31(i + vec3(1,1,1)), f.x), f.y), f.z);
}
void main() {
  float t = clamp(-vLocal.z, 0.0, 1.0);                       // 0 at the lens, 1 at the far end
  float rad = length(vLocal.xy) / max(t, 1e-4);               // 1 at the cone wall, 0 on the axis (unit cone: radius = t)
  float core = pow(1.0 - smoothstep(0.0, 1.0, rad), 1.6);
  float nearF = smoothstep(0.0, 0.05, t);
  float farF = exp(-t * uLen * 0.16);
  float dust = 0.62 + 0.55 * vnoise(vWorld * 2.6 + vec3(0.0, uTime * 0.09, uTime * 0.05)) * vnoise(vWorld * 5.5 - vec3(uTime * 0.03));
  float a = core * nearF * farF * dust * uK;
  gl_FragColor = vec4(uColor * a, a);
}`;
function ai(o, t, i = {}) {
  const e = i.length ?? 14,
    s = t.angle,
    l = new Ws(1, 1, 40, 1, !0);
  (l.translate(0, -0.5, 0), l.rotateX(Math.PI / 2));
  const n = new bs({
      vertexShader: ii,
      fragmentShader: oi,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      side: Xe,
      blending: ke,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uTime: { value: 0 },
        uTan: { value: Math.tan(s) },
        uK: { value: i.k ?? 0.085 },
        uColor: { value: new Me(1, 0.93, 0.8) },
        uLen: { value: e },
      },
    }),
    r = new Vt(l, n);
  ((r.frustumCulled = !1), (r.renderOrder = 20), (r.name = "beam"));
  const h = Math.tan(s) * e;
  (r.scale.set(h, h, e), o.scene.add(r));
  const a = new pt(),
    y = new ze(),
    g = new pt(0, 0, -1);
  return {
    mesh: r,
    update(w) {
      ((n.uniforms.uTime.value += w),
        (r.visible = t.intensity > 0.5),
        r.visible &&
          (r.position.copy(t.position),
          a.subVectors(t.target.position, t.position).normalize(),
          y.setFromUnitVectors(g, a),
          r.quaternion.copy(y),
          (n.uniforms.uK.value = (i.k ?? 0.085) * (t.intensity / 26))));
    },
  };
}
const O = pt,
  At = ze,
  Zt = (o, t = 0, i = 1) => (o < t ? t : o > i ? i : o),
  Ne = (o, t, i) => o + (t - o) * i,
  Dt = (o, t, i, e) => o + (t - o) * (1 - Math.exp(-i * e)),
  ni = (o) => 1 - Math.pow(1 - o, 3),
  ee = (o, t, i) => {
    const e = Zt((i - o) / (t - o));
    return e * e * (3 - 2 * e);
  },
  $e = (o) => (o <= 0 ? 0 : 1.8 * Math.sin(o * 30) * Math.exp(-o * 13)),
  it = {
    cant: 0.3,
    release: 0.27,
    turn: [0.42, 0.85],
    down: [0.1, 0.46],
    up: [0.6, 0.96],
    seat: 1.08,
    back: [1.14, 1.5],
    slam: 1.3,
    ret: [1.34, 1.8],
    end: 1.8,
    retTac: [1.16, 1.58],
    endTac: 1.58,
  },
  ri = [
    ["gun_mag_out", it.release - 0.06],
    ["gun_mag_in", it.seat - 0.46],
    ["gun_slide_rack", it.slam - 0.235, !0],
  ],
  li = 0.93,
  ps = 0.113,
  hi = 0.12;
function jt(o, t = null) {
  const i = o.onBeforeCompile;
  return (
    (o.onBeforeCompile = (e, s) => {
      (i && i(e, s),
        (e.vertexShader = e.vertexShader.replace(
          "#include <project_vertex>",
          `#include <project_vertex>
 gl_Position.z *= 0.1;`,
        )),
        t !== null &&
          ((e.vertexShader = e.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying float vClipZ;`,
            )
            .replace(
              "#include <begin_vertex>",
              `#include <begin_vertex>
 vClipZ = transformed.z;`,
            )),
          (e.fragmentShader = e.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying float vClipZ;`,
            )
            .replace(
              "void main() {",
              `void main() {
 if (vClipZ < ${t.toFixed(4)}) discard;`,
            ))));
    }),
    (o.customProgramCacheKey = () =>
      "vm" + (o.userData.pk || "") + (t !== null ? "c" + t : "")),
    o
  );
}
function ci() {
  const t = document.createElement("canvas");
  t.width = t.height = 256;
  const i = t.getContext("2d"),
    e = i.createRadialGradient(256 / 2, 256 / 2, 0, 256 / 2, 256 / 2, 256 / 2);
  (e.addColorStop(0, "#ffffff"),
    e.addColorStop(0.55, "#f1ede4"),
    e.addColorStop(0.8, "#a8a296"),
    e.addColorStop(0.93, "#4a463f"),
    e.addColorStop(1, "#000000"),
    (i.fillStyle = e),
    i.fillRect(0, 0, 256, 256),
    (i.strokeStyle = "rgba(0,0,0,0.16)"),
    (i.lineWidth = 5),
    i.beginPath(),
    i.arc(256 / 2, 256 / 2, 256 * 0.3, 0, 7),
    i.stroke(),
    (i.fillStyle = "rgba(0,0,0,0.12)"),
    i.beginPath(),
    i.arc(256 / 2 + 4, 256 / 2 - 3, 12, 0, 7),
    i.fill());
  const s = new ts(t);
  return ((s.colorSpace = gs), s);
}
