var pt=Object.create;var U=Object.defineProperty;var ht=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var gt=Object.getPrototypeOf,dt=Object.prototype.hasOwnProperty;var wt=p=>U(p,"__esModule",{value:!0});var j=(p,i)=>()=>(i||p((i={exports:{}}).exports,i),i.exports);var yt=(p,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of xt(i))!dt.call(p,f)&&f!=="default"&&U(p,f,{get:()=>i[f],enumerable:!(l=ht(i,f))||l.enumerable});return p},O=p=>yt(wt(U(p!=null?pt(gt(p)):{},"default",p&&p.__esModule&&"default"in p?{get:()=>p.default,enumerable:!0}:{value:p,enumerable:!0})),p);var Y=j((Z,S)=>{(function(p,i,l){function f(t){var r=this,o=a();r.next=function(){var n=2091639*r.s0+r.c*23283064365386963e-26;return r.s0=r.s1,r.s1=r.s2,r.s2=n-(r.c=n|0)},r.c=1,r.s0=o(" "),r.s1=o(" "),r.s2=o(" "),r.s0-=o(t),r.s0<0&&(r.s0+=1),r.s1-=o(t),r.s1<0&&(r.s1+=1),r.s2-=o(t),r.s2<0&&(r.s2+=1),o=null}function h(t,r){return r.c=t.c,r.s0=t.s0,r.s1=t.s1,r.s2=t.s2,r}function u(t,r){var o=new f(t),n=r&&r.state,e=o.next;return e.int32=function(){return o.next()*4294967296|0},e.double=function(){return e()+(e()*2097152|0)*11102230246251565e-32},e.quick=e,n&&(typeof n=="object"&&h(n,o),e.state=function(){return h(o,{})}),e}function a(){var t=4022871197,r=function(o){o=String(o);for(var n=0;n<o.length;n++){t+=o.charCodeAt(n);var e=.02519603282416938*t;t=e>>>0,e-=t,e*=t,t=e>>>0,e-=t,t+=e*4294967296}return(t>>>0)*23283064365386963e-26};return r}i&&i.exports?i.exports=u:l&&l.amd?l(function(){return u}):this.alea=u})(Z,typeof S=="object"&&S,typeof define=="function"&&define)});var K=j((J,P)=>{(function(p,i,l){function f(a){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var n=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^n^n>>>8},a===(a|0)?t.x=a:r+=a;for(var o=0;o<r.length+64;o++)t.x^=r.charCodeAt(o)|0,t.next()}function h(a,t){return t.x=a.x,t.y=a.y,t.z=a.z,t.w=a.w,t}function u(a,t){var r=new f(a),o=t&&t.state,n=function(){return(r.next()>>>0)/4294967296};return n.double=function(){do var e=r.next()>>>11,c=(r.next()>>>0)/4294967296,s=(e+c)/(1<<21);while(s===0);return s},n.int32=r.next,n.quick=n,o&&(typeof o=="object"&&h(o,r),n.state=function(){return h(r,{})}),n}i&&i.exports?i.exports=u:l&&l.amd?l(function(){return u}):this.xor128=u})(J,typeof P=="object"&&P,typeof define=="function"&&define)});var Q=j((N,V)=>{(function(p,i,l){function f(a){var t=this,r="";t.next=function(){var n=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(n^n<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,a===(a|0)?t.x=a:r+=a;for(var o=0;o<r.length+64;o++)t.x^=r.charCodeAt(o)|0,o==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function h(a,t){return t.x=a.x,t.y=a.y,t.z=a.z,t.w=a.w,t.v=a.v,t.d=a.d,t}function u(a,t){var r=new f(a),o=t&&t.state,n=function(){return(r.next()>>>0)/4294967296};return n.double=function(){do var e=r.next()>>>11,c=(r.next()>>>0)/4294967296,s=(e+c)/(1<<21);while(s===0);return s},n.int32=r.next,n.quick=n,o&&(typeof o=="object"&&h(o,r),n.state=function(){return h(r,{})}),n}i&&i.exports?i.exports=u:l&&l.amd?l(function(){return u}):this.xorwow=u})(N,typeof V=="object"&&V,typeof define=="function"&&define)});var tt=j((W,R)=>{(function(p,i,l){function f(a){var t=this;t.next=function(){var o=t.x,n=t.i,e,c,s;return e=o[n],e^=e>>>7,c=e^e<<24,e=o[n+1&7],c^=e^e>>>10,e=o[n+3&7],c^=e^e>>>3,e=o[n+4&7],c^=e^e<<7,e=o[n+7&7],e=e^e<<13,c^=e^e<<9,o[n]=c,t.i=n+1&7,c};function r(o,n){var e,c,s=[];if(n===(n|0))c=s[0]=n;else for(n=""+n,e=0;e<n.length;++e)s[e&7]=s[e&7]<<15^n.charCodeAt(e)+s[e+1&7]<<13;for(;s.length<8;)s.push(0);for(e=0;e<8&&s[e]===0;++e);for(e==8?c=s[7]=-1:c=s[e],o.x=s,o.i=0,e=256;e>0;--e)o.next()}r(t,a)}function h(a,t){return t.x=a.x.slice(),t.i=a.i,t}function u(a,t){a==null&&(a=+new Date);var r=new f(a),o=t&&t.state,n=function(){return(r.next()>>>0)/4294967296};return n.double=function(){do var e=r.next()>>>11,c=(r.next()>>>0)/4294967296,s=(e+c)/(1<<21);while(s===0);return s},n.int32=r.next,n.quick=n,o&&(o.x&&h(o,r),n.state=function(){return h(r,{})}),n}i&&i.exports?i.exports=u:l&&l.amd?l(function(){return u}):this.xorshift7=u})(W,typeof R=="object"&&R,typeof define=="function"&&define)});var et=j((nt,T)=>{(function(p,i,l){function f(a){var t=this;t.next=function(){var o=t.w,n=t.X,e=t.i,c,s;return t.w=o=o+1640531527|0,s=n[e+34&127],c=n[e=e+1&127],s^=s<<13,c^=c<<17,s^=s>>>15,c^=c>>>12,s=n[e]=s^c,t.i=e,s+(o^o>>>16)|0};function r(o,n){var e,c,s,w,v,_=[],A=128;for(n===(n|0)?(c=n,n=null):(n=n+"\0",c=0,A=Math.max(A,n.length)),s=0,w=-32;w<A;++w)n&&(c^=n.charCodeAt((w+32)%n.length)),w===0&&(v=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,w>=0&&(v=v+1640531527|0,e=_[w&127]^=c+v,s=e==0?s+1:0);for(s>=128&&(_[(n&&n.length||0)&127]=-1),s=127,w=4*128;w>0;--w)c=_[s+34&127],e=_[s=s+1&127],c^=c<<13,e^=e<<17,c^=c>>>15,e^=e>>>12,_[s]=c^e;o.w=v,o.X=_,o.i=s}r(t,a)}function h(a,t){return t.i=a.i,t.w=a.w,t.X=a.X.slice(),t}function u(a,t){a==null&&(a=+new Date);var r=new f(a),o=t&&t.state,n=function(){return(r.next()>>>0)/4294967296};return n.double=function(){do var e=r.next()>>>11,c=(r.next()>>>0)/4294967296,s=(e+c)/(1<<21);while(s===0);return s},n.int32=r.next,n.quick=n,o&&(o.X&&h(o,r),n.state=function(){return h(r,{})}),n}i&&i.exports?i.exports=u:l&&l.amd?l(function(){return u}):this.xor4096=u})(nt,typeof T=="object"&&T,typeof define=="function"&&define)});var ot=j((rt,H)=>{(function(p,i,l){function f(a){var t=this,r="";t.next=function(){var n=t.b,e=t.c,c=t.d,s=t.a;return n=n<<25^n>>>7^e,e=e-c|0,c=c<<24^c>>>8^s,s=s-n|0,t.b=n=n<<20^n>>>12^e,t.c=e=e-c|0,t.d=c<<16^e>>>16^s,t.a=s-n|0},t.a=0,t.b=0,t.c=2654435769|0,t.d=1367130551,a===Math.floor(a)?(t.a=a/4294967296|0,t.b=a|0):r+=a;for(var o=0;o<r.length+20;o++)t.b^=r.charCodeAt(o)|0,t.next()}function h(a,t){return t.a=a.a,t.b=a.b,t.c=a.c,t.d=a.d,t}function u(a,t){var r=new f(a),o=t&&t.state,n=function(){return(r.next()>>>0)/4294967296};return n.double=function(){do var e=r.next()>>>11,c=(r.next()>>>0)/4294967296,s=(e+c)/(1<<21);while(s===0);return s},n.int32=r.next,n.quick=n,o&&(typeof o=="object"&&h(o,r),n.state=function(){return h(r,{})}),n}i&&i.exports?i.exports=u:l&&l.amd?l(function(){return u}):this.tychei=u})(rt,typeof H=="object"&&H,typeof define=="function"&&define)});var it=j(()=>{});var ct=j((at,G)=>{(function(p,i,l){var f=256,h=6,u=52,a="random",t=l.pow(f,h),r=l.pow(2,u),o=r*2,n=f-1,e;function c(g,d,m){var b=[];d=d==!0?{entropy:!0}:d||{};var y=_(v(d.entropy?[g,q(i)]:g??A(),3),b),C=new s(b),k=function(){for(var $=C.g(h),M=t,L=0;$<r;)$=($+L)*f,M*=f,L=C.g(1);for(;$>=o;)$/=2,M/=2,L>>>=1;return($+L)/M};return k.int32=function(){return C.g(4)|0},k.quick=function(){return C.g(4)/4294967296},k.double=k,_(q(C.S),i),(d.pass||m||function($,M,L,z){return z&&(z.S&&w(z,C),$.state=function(){return w(C,{})}),L?(l[a]=$,M):$})(k,y,"global"in d?d.global:this==l,d.state)}function s(g){var d,m=g.length,b=this,y=0,C=b.i=b.j=0,k=b.S=[];for(m||(g=[m++]);y<f;)k[y]=y++;for(y=0;y<f;y++)k[y]=k[C=n&C+g[y%m]+(d=k[y])],k[C]=d;(b.g=function($){for(var M,L=0,z=b.i,B=b.j,F=b.S;$--;)M=F[z=n&z+1],L=L*f+F[n&(F[z]=F[B=n&B+M])+(F[B]=M)];return b.i=z,b.j=B,L})(f)}function w(g,d){return d.i=g.i,d.j=g.j,d.S=g.S.slice(),d}function v(g,d){var m=[],b=typeof g,y;if(d&&b=="object")for(y in g)try{m.push(v(g[y],d-1))}catch{}return m.length?m:b=="string"?g:g+"\0"}function _(g,d){for(var m=g+"",b,y=0;y<m.length;)d[n&y]=n&(b^=d[n&y]*19)+m.charCodeAt(y++);return q(d)}function A(){try{var g;return e&&(g=e.randomBytes)?g=g(f):(g=new Uint8Array(f),(p.crypto||p.msCrypto).getRandomValues(g)),q(g)}catch{var d=p.navigator,m=d&&d.plugins;return[+new Date,p,m,p.screen,q(i)]}}function q(g){return String.fromCharCode.apply(0,g)}if(_(l.random(),i),typeof G=="object"&&G.exports){G.exports=c;try{e=it()}catch{}}else typeof define=="function"&&define.amd?define(function(){return c}):l["seed"+a]=c})(typeof self!="undefined"?self:at,[],Math)});var E=j((Vt,st)=>{var bt=Y(),mt=K(),vt=Q(),Ct=tt(),$t=et(),kt=ot(),D=ct();D.alea=bt;D.xor128=mt;D.xorwow=vt;D.xorshift7=Ct;D.xor4096=$t;D.tychei=kt;st.exports=D});var I=O(E());var x=class{x;y;constructor(i,l){this.x=i||0,this.y=l||0}add(i){return new x(this.x+i.x,this.y+i.y)}multiply(i){return new x(this.x*i,this.y*i)}normalize(){let i=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));return new x(this.x/i,this.y/i)}},X=(p,i,l=!0)=>`M ${p.x} ${p.y} ${i.map(f=>`l ${f.x} ${f.y}`).join(" ")}${l?" z":""}`;var lt="#98aed2",_t="#0036B1",Lt=["#165DFF","#ff1553","#ff8e16","#07ac65"],Mt=["#E96B89","#F36F52","#F2994A","#23da35","#92CCC9","#CDD9F0","#92A2CC","#A892CC"],jt=`
  <defs>
    <radialGradient
      id="app_icon_paint0_radial"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(27.6588 18.1629) rotate(52.1169) scale(101.192 140.632)"
    >
      <stop offset="0.239878" stop-color="white" />
      <stop offset="0.62901" stop-color="#739EFE" />
      <stop offset="1" stop-color="#94B4FC" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="app_icon_paint1_radial"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(77.4247 80.3412) rotate(-142.415) scale(55.3379 46.8338)"
    >
      <stop stop-color="#0424CF" />
      <stop offset="0.421875" stop-color="#0B2ACC" stop-opacity="0.42" />
      <stop offset="1" stop-color="#BFD0E3" stop-opacity="0.26" />
    </radialGradient>
    <path
      id="app_icon_outer_shape0"
      d="M41.3636 96.46L6.07272 76.1729C3.88725 74.9166 2.55561 72.6087 2.56068 70.1264L2.64329 29.6983C2.64836 27.2161 3.98943 24.9137 6.18001 23.6664L41.5535 3.52539C43.7466 2.27668 46.4484 2.28227 48.6364 3.54003L83.9273 23.8271C86.1128 25.0834 87.4444 27.3913 87.4393 29.8736L87.3567 70.3017C87.3517 72.7839 86.0106 75.0863 83.82 76.3336L48.4465 96.4746C46.2534 97.7233 43.5516 97.7177 41.3636 96.46Z"
    />
  </defs>
`,zt=p=>{let{name:i,size:l=100,upperColorLib:f=Lt,lowerColorLib:h=Mt,borderColor:u=_t}=p,{upperColor:a,lowerColor:t}=(()=>{let n=(0,I.default)(i),e=Math.floor(n()*f.length),c=Math.floor(n()*h.length);return{upperColor:i?f[e]:lt,lowerColor:i?h[c]:lt}})(),{upperPath:r,upperRotation:o}=(()=>{let n=(0,I.default)(i),e=[new x(.5,-.5),new x(.2,1.2),new x(.8,1.2)].map(c=>c.add(new x(n()-.5,n()-.5).multiply(.5)).multiply(100));return{upperPath:i?`M${e[0].x} ${e[0].y} L${e[1].x} ${e[1].y} L${e[2].x} ${e[2].y} z`:"",upperRotation:i?Math.round(n()*360):0}})();return`
    <svg
      width="${l}"
      height="${l}"
      viewBox="0 0 90 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      ${jt}
      <desc>${i}</desc>

      <g mask="url(#app_icon_mask0)">
        <mask
          id="app_icon_mask0"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
        >
          <use xlink:href="#app_icon_outer_shape0" fill="white" />
        </mask>
        <use xlink:href="#app_icon_outer_shape0" fill="white" />
        <path
          d="M-7.99798 36.9657L50.3896 74.9754L115.593 -35.2086L56.244 -54.6547L-7.99798 36.9657Z"
          fill="${a}"
          fill-opacity="0.5"
        />
        <path
          d="${r}"
          fill="${a}"
          transform="rotate(${o}, 50, 50)"
        />
        <path
          d="M-11.465 83.2533L18.3775 114.657L118.492 58.292L115.945 47.7026L-11.465 83.2533Z"
          fill="${t}"
        />
        <g style="mix-blend-mode: overlay">
          <rect
            x="0"
            y="0"
            width="90"
            height="100"
            fill="url(#app_icon_paint0_radial)"
            fill-opacity="0.6"
          />
          <rect
            x="0"
            y="0"
            width="90"
            height="100"
            fill="url(#app_icon_paint1_radial)"
          />
        </g>
      </g>
      <use
        xlink:href="#app_icon_outer_shape0"
        stroke="${u}"
        stroke-width="5"
      />
    </svg>
  `};var ft=O(E());var Dt="#98aed2",At="#0033A8",qt=["#98aed2","#7191ce","#5974c6","#2f50c2","#1a97cd","#d65564","#dab2b5"],Ft=(p,i,l)=>{let f=i*Math.tan(Math.PI/6),h=p.add(new x(0,-l)),u=[new x(i,-f),new x(0,-l),new x(-i,-f),new x(-i,f),new x(0,l)],a=[new x(-i,-f),new x(i,-f),new x(i,f)],t=[new x(0,l),new x(-i,-f),new x(0,-l)],r=[new x(i,-f),new x(0,l),new x(-i,f)],o=X(p,u),n=X(h,a),e=X(h,t),c=X(h,r);return{outerD:o,topD:n,leftD:e,rightD:c}},Xt=`
  <filter id="brighten1_6">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2.4" />
      <feFuncG type="linear" slope="2.4" />
      <feFuncB type="linear" slope="2.4" />
    </feComponentTransfer>
  </filter>
  <filter id="brighten1_2">
    <feComponentTransfer>
      <feFuncR type="linear" slope="1.6" />
      <feFuncG type="linear" slope="1.6" />
      <feFuncB type="linear" slope="1.6" />
    </feComponentTransfer>
  </filter>
`,ut=p=>{let{position:i,size:l,height:f,color:h,backdropColor:u}=p,{outerD:a,topD:t,leftD:r,rightD:o}=Ft(i,l,f);return{backDrop:`
      <path
        d="${a}"
        fill="none"
        stroke="${u}"
        stroke-width="10.5"
        stroke-linejoin="round"
      />
    `,cube:`
      <g>
        <path
          d="${a}"
          stroke="none"
          fill="${h}"
          style="filter: url(#brighten1_6)"
        />
        <path d="${t}" stroke="none" fill="rgba(255,255,255,0.5)" />
        <path
          d="${r}"
          stroke="none"
          fill="${h}"
          style="filter: url(#brighten1_2)"
        />
        <path d="${o}" stroke="none" fill="${h}" />
      </g>
    `}},Bt=p=>{let{colors:i,heights:l,backdropColor:f,fillUp:h}=p,u=16,a=u/2,t=u*Math.tan(Math.PI/6),r=a*Math.tan(Math.PI/6),o=new x(50,100-2*r),n=[o.add(new x(0,-t*2-2*r)),o.add(new x(-u-a,-t-r)),o.add(new x(u+a,-t-r)),o],e=u*2+r*2,c=n.map((w,v)=>ut({position:w,size:u,height:e-l[v]*u*(v===0?.5:1),color:i[v],backdropColor:f}));return`
  <g>
    ${ut({position:o,size:u*2+a,height:h?e:u,color:f,backdropColor:f}).backDrop}
    ${c.map(w=>`<g>${w.backDrop}</g>`).join("")}
    ${c.map(w=>`<g>${w.cube}</g>`).join("")}
  </g>
  `},Gt=p=>{let{name:i,size:l=100,colorLib:f=qt,fillUp:h,backdropColor:u=At}=p,{colors:a,heights:t}=(()=>{let r=(0,ft.default)(i),o=[];for(let e=0;e<4;e++){let c=r(),s=Math.floor(c*f.length);o.push(i?f[s]:Dt)}let n=[];for(let e=0;e<4;e++){let c=r();n.push(i?c:.5)}return{colors:o,heights:n}})();return`
    <svg
      width="${l}"
      height="${l}"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>${i}</desc>
      ${Xt}
      ${Bt({colors:a,heights:t,backdropColor:u,fillUp:h})}
    </svg>
  `};export{Gt as generateCubers,zt as generateHexer};
//# sourceMappingURL=index.js.map
