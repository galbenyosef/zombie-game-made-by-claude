// assets__index-DaQlAVPp 01 — shadowmap
// Lines 35396-35431 of readable/assets__index-DaQlAVPp.pretty.js (statement-aligned).
function kM(r, { service: e = !1 } = {}) {
  const t = new Ip({
    canvas: r,
    antialias: !1,
    alpha: !1,
    stencil: !1,
    depth: !0,
    powerPreference: "high-performance",
    preserveDrawingBuffer: e,
  });
  return (
    (t.outputColorSpace = Ht),
    (t.toneMapping = un),
    (t.shadowMap.enabled = !0),
    (t.shadowMap.type = Fs),
    t.setClearColor(0, 1),
    (t.info.autoReset = !1),
    t
  );
}
const zM = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;
function gi(r, e, t = {}) {
  return new mn({
    vertexShader: zM,
    fragmentShader: r,
    uniforms: e,
    depthTest: !1,
    depthWrite: !1,
    blending: In,
    toneMapped: !1,
    ...t,
  });
}
