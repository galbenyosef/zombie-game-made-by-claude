// assets/index-DQDjAbEY 23 — math
// Lines 6535-6699 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
const _n = (e, l, a, o) => e + (l - e) * (1 - Math.exp(-8 * o));
function Ln(e, l, { enabled: a = !0 } = {}) {
  const o = e.audio,
    t = {},
    s = { building: !1, built: !1, c: null, ob: 0, mix: null, pos: [0, 0, 0] },
    n = ["heli_rotor_out", "heli_turbine_out"],
    c = ["heli_rotor_in", "heli_turbine_in"],
    i = async () => {
      if (!(s.built || s.building || !a || !o?.ctx || !o.buffer)) {
        s.building = !0;
        try {
          const f = o.ctx;
          s.c = f;
          const p = async (m, x) => {
            const w = await o.buffer(m);
            if (!w) return;
            const v = f.createBufferSource();
            ((v.buffer = w), (v.loop = !0));
            const u = f.createGain();
            ((u.gain.value = 0), v.connect(u));
            let g = u,
              P = null;
            (x &&
              ((P = f.createPanner()),
              (P.panningModel = "HRTF"),
              (P.distanceModel = "inverse"),
              (P.refDistance = 6),
              (P.rolloffFactor = 0.9),
              (P.maxDistance = 400),
              u.connect(P),
              (g = P)),
              g.connect(o.bus.sfx),
              v.start(f.currentTime + 0.02, Math.random() * w.duration * 0.9),
              (t[m] = { s: v, g: u, pan: P, norm: w._norm ?? 1 }));
          };
          (await Promise.all([
            ...n.map((m) => p(m, !0)),
            ...c.map((m) => p(m, !1)),
            p("heli_wind", !1),
            p("heli_lowrpm_horn", !1),
            p("heli_fire_bell", !1),
            p("heli_tail_grind", !0),
          ]),
            (s.built = !0));
        } catch {}
        s.building = !1;
      }
    },
    d = (f, p, m = 0.06) => {
      try {
        f.setTargetAtTime(p, s.c.currentTime, m);
      } catch {}
    };
  return {
    play(f, p = 0.8, m = {}) {
      if (!a || !o?.play) return null;
      try {
        return o.play(f, {
          ...(l.onboard && !m.outside
            ? {}
            : { pos: m.pos || s.pos, ref: m.ref ?? 4 }),
          vol: p,
          ...m.extra,
        });
      } catch {
        return null;
      }
    },
    update(
      f,
      {
        rpm: p,
        n1: m,
        wind: x,
        horn: w,
        bell: v,
        grind: u,
        pos: g,
        vol: P = 1,
      },
    ) {
      if (((s.pos[0] = g.x), (s.pos[1] = g.y), (s.pos[2] = g.z), !s.built)) {
        (p > 0.001 || m > 0.001 || w || v) && o?.ctx && i();
        return;
      }
      s.ob = _n(s.ob, l.onboard ? 1 : 0, 8, f);
      const k = o.speaking ? 0.62 : 1,
        y = P * (l.engineVol ?? 1) * k,
        M = Math.pow(Math.min(1, p), 0.8),
        F = Math.min(1, m * 1.2),
        A = (W) => t[W];
      (A("heli_rotor_in") &&
        (d(
          A("heli_rotor_in").g.gain,
          A("heli_rotor_in").norm * M * 0.85 * s.ob * y,
        ),
        d(
          A("heli_rotor_in").s.playbackRate,
          0.45 + 0.55 * Math.min(1.08, p),
          0.12,
        )),
        A("heli_turbine_in") &&
          (d(
            A("heli_turbine_in").g.gain,
            A("heli_turbine_in").norm * F * 0.5 * s.ob * y,
          ),
          d(A("heli_turbine_in").s.playbackRate, 0.5 + 0.5 * m, 0.15)),
        A("heli_rotor_out") &&
          (d(
            A("heli_rotor_out").g.gain,
            A("heli_rotor_out").norm * M * 1 * (1 - s.ob) * y,
          ),
          d(
            A("heli_rotor_out").s.playbackRate,
            0.45 + 0.55 * Math.min(1.08, p),
            0.12,
          )),
        A("heli_turbine_out") &&
          (d(
            A("heli_turbine_out").g.gain,
            A("heli_turbine_out").norm * F * 0.6 * (1 - s.ob) * y,
          ),
          d(A("heli_turbine_out").s.playbackRate, 0.5 + 0.5 * m, 0.15)),
        A("heli_wind") &&
          (d(A("heli_wind").g.gain, A("heli_wind").norm * x * 0.8 * s.ob),
          d(A("heli_wind").s.playbackRate, 0.8 + 0.3 * x, 0.3)),
        A("heli_lowrpm_horn") &&
          d(
            A("heli_lowrpm_horn").g.gain,
            A("heli_lowrpm_horn").norm * (w ? 0.55 : 0),
            0.02,
          ),
        A("heli_fire_bell") &&
          d(
            A("heli_fire_bell").g.gain,
            A("heli_fire_bell").norm * (v ? 0.5 : 0),
            0.02,
          ),
        A("heli_tail_grind") &&
          d(
            A("heli_tail_grind").g.gain,
            A("heli_tail_grind").norm * u * 0.9 * y,
            0.05,
          ));
      for (const W of [...n, "heli_tail_grind"]) {
        const N = A(W);
        N?.pan &&
          ((N.pan.positionX.value = g.x),
          (N.pan.positionY.value = g.y),
          (N.pan.positionZ.value = g.z));
      }
    },
    dispose() {
      for (const f of Object.values(t))
        try {
          (f.s.stop(), f.g.disconnect(), f.pan?.disconnect());
        } catch {}
    },
  };
}
const Y0 = H0,
  U0 = Math.PI / 180,
  X0 = (e, l, a, o) => e + (l - e) * (1 - Math.exp(-a * o)),
  Ht = 2 * Math.PI * 6.4,
  $t = 2 * Math.PI * 36;
