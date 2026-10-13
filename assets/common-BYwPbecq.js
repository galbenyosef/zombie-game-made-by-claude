import{x as v,C as F,V as x,B as A,h as _,aC as S,I as C}from"./index-DaQlAVPp.js";const D={uFT:{value:0},uLamps:{value:Array.from({length:8},()=>new v)},uLampCol:{value:new F(1,.5,.18)},uMist:{value:new v(.05,1.1,0,1)},uMistCol:{value:new F(.0085,.0125,.018)},uScatter:{value:.075},uRim:{value:new F(0,0,0)},uMoonDir:{value:new x(0,1,0)},tCanopy:{value:null},uCanopy:{value:new v(-64,56,128,192)},uCanBox:{value:new v(0,0,22,1)}},I=`
uniform float uFT;
uniform vec4 uLamps[8];
uniform vec3 uLampCol;
uniform vec4 uMist;
uniform vec3 uMistCol;
uniform float uScatter;
uniform sampler2D tCanopy;
uniform vec4 uCanopy;
uniform vec4 uCanBox;
uniform vec3 uRim;
uniform vec3 uMoonDir;
varying vec3 vFW;
float fhash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fhash(i), fhash(i + vec2(1.0, 0.0)), f.x), mix(fhash(i + vec2(0.0, 1.0)), fhash(i + vec2(1.0, 1.0)), f.x), f.y); }
// x: what the canopy lets through of the moon, y: of the sky
vec2 forestCanopy(vec3 wp) {
  vec2 cu = (wp.xz - uCanopy.xy) / uCanopy.zw;
  float cov = (cu.x > 0.0 && cu.x < 1.0 && cu.y > 0.0 && cu.y < 1.0) ? texture2D(tCanopy, cu).r : 0.92;
  cov *= 1.0 - smoothstep(8.0, 22.0, wp.y);                                  // (the crowns themselves stand in the moonlight)
  // flecks of moonlight through the needles
  float fl = fnoise(wp.xz * 0.8 + 3.1) * 0.55 + fnoise(wp.xz * 2.3 - 7.0) * 0.45;
  float fleck = smoothstep(0.63, 0.8, fl);
  // near the player the shadow map does it: the baked map is only a touch there
  float boxd = length(wp.xz - uCanBox.xy);
  float k = mix(0.4, 1.0, smoothstep(uCanBox.z * 0.8, uCanBox.z * 1.2, boxd)) * uCanBox.w;
  float direct = mix(1.0, 0.05 + 0.45 * fleck, cov * k);
  float sky = mix(1.0, 0.45, cov * uCanBox.w);
  return vec2(direct, sky);
}
`,K=`
vec3 forestAir(vec3 col, vec3 wp, float fogDepth) {
  vec3 ro = cameraPosition, rd = wp - ro;
  float L = max(length(rd), 1e-3); rd /= L;
  // the scene's haze (FogExp2)
  float fogK = 1.0 - exp(-fogDensity * fogDensity * fogDepth * fogDepth);
  // ground mist: density(y) = d0 * exp(-(max(y, yF) - y0) / hs) (thick near the ground, no thicker below yF: the ravine
  // fills, it does not go white), integrated from the eye to the fragment in closed form, piece by piece
  float hs = uMist.y, yF = uMist.z - 0.25;
  float od = 0.0;
  {
    float ya = ro.y, yb = ro.y + rd.y * L;
    float tc = abs(rd.y) > 1e-4 ? clamp((yF - ro.y) / rd.y, 0.0, L) : (ya >= yF ? L : 0.0);
    // the part above the floor: [t0, t1]
    float t0 = ya >= yF ? 0.0 : tc, t1 = ya >= yF ? (yb >= yF ? L : tc) : (yb >= yF ? L : tc);
    float k0 = uMist.x * exp(-(ro.y - uMist.z) / hs);
    if (t1 > t0) od += abs(rd.y) > 1e-4 ? k0 * hs / rd.y * (exp(-t0 * rd.y / hs) - exp(-t1 * rd.y / hs)) : k0 * (t1 - t0);
    // the part below it: constant
    od += uMist.x * exp(-(yF - uMist.z) / hs) * (L - max(t1 - t0, 0.0));
  }
  // (patchy: thicker and thinner banks drifting through, sampled where the ray ends and half way)
  vec2 q = wp.xz * 0.11 + vec2(uFT * 0.021, uFT * 0.013), q2 = mix(ro.xz, wp.xz, 0.5) * 0.17 - vec2(uFT * 0.017, -uFT * 0.01);
  float patchK = 0.5 + 1.0 * (fnoise(q) * 0.6 + fnoise(q2) * 0.4);
  float mistK = (1.0 - exp(-max(od, 0.0) * patchK)) * uMist.w;
  // the lanterns in the air: single scattering off a point light, integrated along the ray (closed form)
  vec3 sc = vec3(0.0);
  for (int i = 0; i < 8; i++) {
    vec4 lp = uLamps[i];
    if (lp.w <= 0.0) continue;
    vec3 oc = ro - lp.xyz;
    float b = dot(rd, oc), h2 = max(dot(oc, oc) - b * b, 0.03), hh = sqrt(h2);
    float I = (atan((L + b) / hh) - atan(b / hh)) / hh;
    // (a globe of lit mist round each lantern: the long physical tail cut off, it would tint the whole view)
    // (and less when the eye is right at the lantern: it would fill the whole view)
    sc += lp.w * I * exp(-hh / 1.1) * (0.2 + 0.8 * exp(-max(lp.y - uMist.z, 0.0) / (hs * 1.6))) * smoothstep(0.6, 3.0, length(oc));
  }
  col = mix(col, fogColor, fogK);
  // (the mist is seen by the light on it: bright in the moonlit gaps, dark under the crowns)
  float moonK = forestCanopy(wp).x;
  col = mix(col, uMistCol * (0.35 + 0.95 * moonK), mistK);
  return col + uLampCol * sc * uScatter * (1.0 - fogK * 0.7);
}
`,B=I+`
#ifdef USE_FOG
`+K+`
#endif
`;function E(e,s,n=null,m={}){const i=e.clone();i.userData={...e.userData};const l=m.canopy!==!1;return i.onBeforeCompile=r=>{Object.assign(r.uniforms,D),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFW;`).replace("#include <fog_vertex>",`#include <fog_vertex>
      {
        vec4 fwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          fwp = instanceMatrix * fwp;
        #endif
        vFW = (modelMatrix * fwp).xyz;
      }`),r.fragmentShader=r.fragmentShader.replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
`+B).replace("#include <fog_fragment>",`#ifdef USE_FOG
  gl_FragColor.rgb = forestAir(gl_FragColor.rgb, vFW, vFogDepth);
#endif`),l&&(r.fragmentShader=r.fragmentShader.replace("#include <lights_fragment_begin>",`vec2 canK = forestCanopy(vFW);
`+S.lights_fragment_begin.replace(/(getDirectionalLightInfo\( directionalLight, directLight \);[\s\S]*?)(RE_Direct\( directLight)/,`$1directLight.color *= ( UNROLLED_LOOP_INDEX == 0 ? canK.x : 1.0 );
		$2`)).replace("#include <lights_fragment_end>",`
          #if defined( RE_IndirectDiffuse )
            irradiance *= canK.y; iblIrradiance *= canK.y;
          #endif
          #if defined( RE_IndirectSpecular )
            radiance *= mix(1.0, canK.y, 0.8);
          #endif
          #include <lights_fragment_end>`)),n&&n(r)},i.customProgramCacheKey=()=>"forest_"+s+(l?"":"_nc"),i}function T(e){if(e=e.filter(Boolean),!e.length)return null;const s=Object.keys(e[0].attributes).filter(t=>e.every(a=>a.attributes[t]));let n=0,m=0;for(const t of e)n+=t.attributes.position.count,m+=t.index?t.index.count:t.attributes.position.count;const i=new A;for(const t of s){const a=e[0].attributes[t].itemSize,u=new Float32Array(n*a);let c=0;for(const d of e)u.set(d.attributes[t].array.subarray(0,d.attributes[t].count*a),c),c+=d.attributes[t].count*a;i.setAttribute(t,new _(u,a))}const l=n>65535?new Uint32Array(m):new Uint16Array(m);let r=0,p=0;for(const t of e){const a=t.attributes.position.count;if(t.index){const u=t.index.array;for(let c=0;c<t.index.count;c++)l[p+c]=u[c]+r;p+=t.index.count}else{for(let u=0;u<a;u++)l[p+u]=u+r;p+=a}r+=a}return i.setIndex(new _(l,1)),i}function O(e,s,n=6,{cap:m=!1}={}){const i=[],l=[],r=[],p=[],t=e.length,a=[],u=new x;for(let o=0;o<t;o++){const h=e[Math.max(0,o-1)],f=e[Math.min(t-1,o+1)];a.push(new x().subVectors(f,h).normalize())}const c=new x(0,1,0);Math.abs(a[0].y)>.9&&c.set(1,0,0),c.sub(u.copy(a[0]).multiplyScalar(c.dot(a[0]))).normalize();let d=0;for(let o=0;o<t;o++){o>0&&(d+=e[o].distanceTo(e[o-1]),c.sub(u.copy(a[o]).multiplyScalar(c.dot(a[o]))).normalize());const h=new x().crossVectors(a[o],c),f=typeof s=="function"?s(o/(t-1),o):s[o];for(let y=0;y<=n;y++){const z=y/n*Math.PI*2,w=Math.cos(z),b=Math.sin(z),M=w*c.x+b*h.x,k=w*c.y+b*h.y,L=w*c.z+b*h.z;i.push(e[o].x+M*f,e[o].y+k*f,e[o].z+L*f),l.push(M,k,L),r.push(y/n*Math.PI*2*Math.max(f,.03),d)}}for(let o=0;o<t-1;o++)for(let h=0;h<n;h++){const f=o*(n+1)+h,y=f+n+1;p.push(f,y,f+1,f+1,y,y+1)}if(m){const o=i.length/3;i.push(e[t-1].x,e[t-1].y,e[t-1].z),l.push(a[t-1].x,a[t-1].y,a[t-1].z),r.push(0,d);const h=(t-1)*(n+1);for(let f=0;f<n;f++)p.push(h+f,h+f+1,o)}const g=new A;return g.setAttribute("position",new C(i,3)),g.setAttribute("normal",new C(l,3)),g.setAttribute("uv",new C(r,2)),g.setIndex(p),g}function P(e,s,n){const m=e.attributes.position.count,i=n.length,l=new Float32Array(m*i);for(let r=0;r<m;r++)l.set(n,r*i);return e.setAttribute(s,new _(l,i)),e}function U(e,s=["position","normal","uv"]){for(const n of Object.keys(e.attributes))s.includes(n)||e.deleteAttribute(n);return e}const N=(e,s,n)=>new x(e,s,n);export{B as A,D as F,N as V,P as c,E as f,U as k,T as m,O as t};
