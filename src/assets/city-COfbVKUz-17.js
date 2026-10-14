// assets/city-COfbVKUz 17 — fire
// Lines 5576-5915 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
const Po = 3.1;
function Ao(m, e) {
  const d = [],
    n = [],
    h = (x, k) => (
      (x.userData.noShadowBudget = !0),
      (x.castShadow = !1),
      (x.decay = 2),
      m.add(x),
      { light: x, fire: null, next: null, k: 0, phase: k * 1.7 }
    );
  for (let x = 0; x < 8; x++) {
    const k = new re(16742954, 0, 140, 2);
    ((k.name = "city3_fire_pt" + x), d.push(h(k, x)));
  }
  for (let x = 0; x < 3; x++) {
    const k = new ce(16738850, 0, 220, 0.75, 0.9, 2);
    ((k.name = "city3_fire_spot" + x), m.add(k.target), n.push(h(k, x + 8)));
  }
  const c = [];
  let w = 0;
  const s = (x) => {
    c.length = 0;
    for (const N of e) {
      if (!(N.I > 0)) continue;
      const T = (N.x - x.x) ** 2 + (N.y - x.y) ** 2 + (N.z - x.z) ** 2;
      T > 260 * 260 || c.push([T / N.I, N]);
    }
    c.sort((N, T) => N[0] - T[0]);
    const k = c.slice(0, 11).map((N) => N[1]),
      _ = k
        .slice()
        .sort((N, T) => T.I - N.I)
        .slice(0, 3),
      g = k.filter((N) => !_.includes(N)).slice(0, 8),
      M = (N, T) => {
        const S = T.filter((v) => !N.some((a) => a.fire === v));
        for (const v of N)
          T.includes(v.fire) ? (v.next = v.fire) : (v.next = S.shift() || null);
      };
    (M(d, g), M(n, _));
  };
  return {
    points: d,
    spots: n,
    update(x, k, P) {
      w++ % 8 === 0 && s(P);
      for (const _ of [...d, ...n]) {
        _.next !== _.fire
          ? ((_.k = Math.max(0, _.k - x / 0.35)),
            _.k === 0 && (_.fire = _.next))
          : _.fire && (_.k = Math.min(1, _.k + x / 0.5));
        const g = _.fire,
          M = _.light;
        if (!g) {
          M.intensity = 0;
          continue;
        }
        const N =
          0.78 +
          0.14 * Math.sin(k * 7.3 + _.phase) +
          0.08 * Math.sin(k * 13.1 + _.phase * 2.1);
        if (
          ((M.intensity = g.I * Po * N * _.k * (M.isSpotLight ? 1.6 : 1)),
          M.isSpotLight)
        ) {
          const T = P.x - g.x,
            S = P.y - g.y,
            v = P.z - g.z,
            a = Math.hypot(T, S, v) || 1;
          (M.position.set(
            g.x - (T / a) * 2,
            g.y - (S / a) * 2,
            g.z - (v / a) * 2,
          ),
            M.target.position.set(P.x, P.y, P.z),
            M.target.updateMatrixWorld());
        } else M.position.set(g.x, g.y, g.z);
      }
    },
  };
}
const dt = new X(),
  Kt = new X();
function _o(m, e) {
  if (!e || !(e.intensity > 0)) {
    m.uSLCol.value.set(0, 0, 0);
    return;
  }
  (e.getWorldPosition(dt),
    e.target.getWorldPosition(Kt),
    m.uSLPos.value.copy(dt),
    m.uSLDir.value.copy(Kt).sub(dt).normalize(),
    m.uSLCos.value.set(
      Math.cos(e.angle),
      Math.cos(e.angle * (1 - (e.penumbra || 0) * 0.9)),
    ),
    m.uSLCol.value
      .set(e.color.r, e.color.g, e.color.b)
      .multiplyScalar(e.intensity / Math.PI));
}
const ut = [
    [
      "birds",
      9.6,
      2.6,
      "props.birds.set(0..1) over 2.6 s: a flock bursts off the corner roof on the left and crosses ahead; birds_flee",
    ],
    [
      "crane",
      14.4,
      4.4,
      "props.crane.set(0..1) over 4.4 s: the jib swings across the turn, over the rotor at t ~17.4; crane_groan (the mast top), crane_pass",
    ],
    [
      "glass",
      20.4,
      3.2,
      "props.glass.set(0..1) over 3.2 s: the burning tower on the left bursts its windows, glass rains across Grand Street; glass_burst, glass_shards_rain; heli.crack(0.08) at ~22.6 (a shard hits)",
    ],
    [
      "gap",
      24.5,
      1.6,
      "the slot between the twin towers (x 668..727): level, 2 m each side; gap_whoosh",
    ],
    [
      "smoke",
      29.6,
      1.6,
      "into the tanker's smoke column: blind ~1.4 s (the city draws the veil itself); smoke_rush; heli.warn(['MASTER CAUTION'])",
    ],
    [
      "climb",
      31.2,
      6.4,
      "out of the smoke at the tower's face: the flare and the climb up the glass (8.5 m off it) to t 37.6; engine strain; low-rotor horn (the helicopter's)",
    ],
    [
      "tank",
      45.6,
      5.2,
      "props.tank.set(0..1) over 5.2 s: a blast on the roof of the building on the right throws its water tank across the avenue; it crosses ahead at t ~47.3, passes under the chin by t ~48.2, smashes into the west facade at 48.8 and drops to the street (~50.6); tank_blast, tank_fall, tank_smash",
    ],
    [
      "heli2",
      46,
      4.3,
      "the army helicopter (flight.heli2: place it, smoke(1), spin it) crosses ahead right to left and hits the building on the left at t 50.3; heli2_fall (on it)",
    ],
    [
      "impact",
      50.3,
      8,
      "props.impact.set(0..1) over 8 s at the hit: the fireball, the flash, the wreck in the facade, the fire; heli2_explosion, impact_fire; hide the army helicopter; shake",
    ],
    [
      "highway",
      52.4,
      1.6,
      "under the elevated highway (the girders 2.2 m over the rotor); deck_whoosh",
    ],
    [
      "bridge",
      58.9,
      1.2,
      "under the bridge (the girders 3 m over the rotor, a pier 4 m off the rotor's right tip); bridge_whoosh",
    ],
    [
      "wires",
      67.85,
      1.6,
      "props.wires.set(0..1) over 1.6 s: the skids snap the power lines (sparks, a transformer blows); wires_snap, transformer_blast; heli.sparks(the skid); heli.warn(['MASTER CAUTION', 'ENG 1 FIRE'])",
    ],
    [
      "clip",
      69.55,
      1.2,
      "props.clip.set(0..1) over 1.2 s: the radio mast's guy wire takes the tail rotor; clip_snap; heli.breakTail(), warn TAIL ROTOR, the spin begins (the owner's)",
    ],
    ["crash", 73.86, 0, "the impact in the street: black"],
  ],
  pt = [
    [
      9.6,
      "birds_flee",
      [421, 34, -30],
      1,
      14,
      "a flock of pigeons bursting off a roof: wings clattering, calls",
    ],
    [
      14.4,
      "crane_groan",
      [494, 43.6, -179],
      1,
      22,
      "a tower crane's steel groaning and its slewing ring grinding as the jib swings loose",
    ],
    [
      16.9,
      "crane_pass",
      null,
      0.9,
      0,
      "the jib sweeping over the rotor: a deep steel whoosh, a cable's twang",
    ],
    [
      20.4,
      "glass_burst",
      [596, 72, -243],
      1,
      26,
      "a burning tower's windows bursting from the heat: a deep thump, a cascade of breaking glass",
    ],
    [
      21.2,
      "glass_shards_rain",
      [596, 40, -225],
      1,
      14,
      "the glass raining down onto the street (the existing clip)",
    ],
    [
      24.5,
      "gap_whoosh",
      null,
      0.9,
      0,
      "the rotor's slap thrown back by the twin towers' walls: a fast rising and falling roar",
    ],
    [
      29.6,
      "smoke_rush",
      null,
      1,
      0,
      "into the smoke: a rush of hot wind, the fire's roar below, grit on the glass",
    ],
    [
      45.6,
      "tank_blast",
      [1068, 55, -349],
      1,
      30,
      "an explosion on a roof: a sharp blast, debris",
    ],
    [
      45.75,
      "tank_fall",
      [1071.5, 64.5, -349],
      1,
      18,
      "a wooden water tank torn off its stand: staves creaking, water sloshing out, its tumble",
    ],
    [
      48.77,
      "tank_smash",
      [1038.4, 29.1, -352.6],
      1,
      30,
      "the tank smashing into a facade: a huge wooden crash, a burst of water, masonry falling",
    ],
    [
      50.3,
      "heli2_explosion",
      [M0.x, M0.y, M0.z],
      1,
      60,
      "a helicopter hitting a building and exploding: a huge blast, tearing metal, glass, a fireball's roar",
    ],
    [
      50.6,
      "impact_fire",
      [M0.x, M0.y, M0.z],
      0.8,
      30,
      "the fuel fire flaring up after the blast: a 4-5 s roar settling into crackle",
    ],
    [
      52.4,
      "deck_whoosh",
      null,
      0.9,
      0,
      "under the elevated highway: the rotor noise slammed back off the deck, a deep boom",
    ],
    [
      58.9,
      "bridge_whoosh",
      null,
      0.9,
      0,
      "under the bridge: the rotor's echo off the girders, a short hollow roar",
    ],
    [
      67.85,
      "wires_snap",
      [1256, 12, -667],
      1,
      15,
      "power lines snapping on the skids: twangs, a whip, crackling sparks",
    ],
    [
      67.95,
      "transformer_blast",
      [1264.95, 10, -667],
      1,
      25,
      "a pole transformer blowing: a bang, an electric zap and buzz, a shower of sparks",
    ],
    [
      69.55,
      "clip_snap",
      [1256, 14.6, -701.3],
      1,
      12,
      "a guy wire striking the tail rotor: a violent metallic bang, a shriek of tearing metal",
    ],
  ],
  mt = [
    [
      46,
      50.3,
      "heli2_fall",
      "heli2",
      1,
      30,
      "a stricken helicopter going down (loop): its rotor's ragged thud, a dying turbine's whine, an alarm",
    ],
  ],
  zt = [
    [1262, 96, -520, 46],
    [1222, 84, -494, 46.8],
    [1182, 70, -470, 47.6],
    [1143, 57, -452, 48.4],
    [1105, 45, -440, 49.1],
    [1071, 34.5, -434, 49.7],
    [M0.x + 5.5, M0.y + 0.5, M0.z, 50.3],
  ];
