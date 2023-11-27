import{u as W,a as m,r as d,M as k,i as T,b as O,c as G,f as v,d as b,e as A,g as X,h as L,k as D,l as F,p as U,v as _,n as $,w as q,j as l,m as z}from"./index-13386199.js";function I(e){const t=W(()=>m(e)),{isStatic:o}=d.useContext(k);if(o){const[,n]=d.useState(e);d.useEffect(()=>t.on("change",n),[])}return t}const K=e=>typeof e=="object"&&e.mix,Q=e=>K(e)?e.mix:void 0;function Z(...e){const t=!Array.isArray(e[0]),o=t?0:-1,n=e[0+o],s=e[1+o],r=e[2+o],i=e[3+o],c=T(s,r,{mixer:Q(r[0]),...i});return t?c(n):c}function J(e,t){const o=I(t()),n=()=>o.set(t());return n(),O(()=>{const s=()=>v.update(n,!1,!0),r=e.map(i=>i.on("change",s));return()=>{r.forEach(i=>i()),G(n)}}),o}function ee(e){b.current=[],e();const t=J(b.current,e);return b.current=void 0,t}function te(e,t,o,n){if(typeof e=="function")return ee(e);const s=typeof t=="function"?t:Z(t,o,n);return Array.isArray(e)?B(e,s):B([e],([r])=>s(r))}function B(e,t){const o=W(()=>[]);return J(e,()=>{o.length=0;const n=e.length;for(let s=0;s<n;s++)o[s]=e[s].get();return t(o)})}function ne(e,t={}){const{isStatic:o}=d.useContext(k),n=d.useRef(null),s=I(A(e)?e.get():e),r=()=>{n.current&&n.current.stop()};return d.useInsertionEffect(()=>s.attach((i,c)=>{if(o)return c(i);if(r(),n.current=X({keyframes:[s.get(),i],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c}),!L.isProcessing){const a=performance.now()-L.timestamp;a<30&&(n.current.time=D(a))}return s.get()},r),[JSON.stringify(t)]),O(()=>{if(A(e))return e.on("change",i=>s.set(parseFloat(i)))},[s]),s}const x=new WeakMap;let h;function se(e,t){if(t){const{inlineSize:o,blockSize:n}=t[0];return{width:o,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function oe({target:e,contentRect:t,borderBoxSize:o}){var n;(n=x.get(e))===null||n===void 0||n.forEach(s=>{s({target:e,contentSize:t,get size(){return se(e,o)}})})}function re(e){e.forEach(oe)}function ie(){typeof ResizeObserver>"u"||(h=new ResizeObserver(re))}function ce(e,t){h||ie();const o=F(e);return o.forEach(n=>{let s=x.get(n);s||(s=new Set,x.set(n,s)),s.add(t),h==null||h.observe(n)}),()=>{o.forEach(n=>{const s=x.get(n);s==null||s.delete(t),s!=null&&s.size||h==null||h.unobserve(n)})}}const w=new Set;let y;function le(){y=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};w.forEach(o=>o(t))},window.addEventListener("resize",y)}function ae(e){return w.add(e),y||le(),()=>{w.delete(e),!w.size&&y&&(y=void 0)}}function ue(e,t){return typeof e=="function"?ae(e):ce(e,t)}const fe=50,j=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),de=()=>({time:0,x:j(),y:j()}),ge={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function C(e,t,o,n){const s=o[t],{length:r,position:i}=ge[t],c=s.current,a=o.time;s.current=e["scroll"+i],s.scrollLength=e["scroll"+r]-e["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=U(0,s.scrollLength,s.current);const f=n-a;s.velocity=f>fe?0:_(s.current-c,f)}function he(e,t,o){C(e,"x",t,o),C(e,"y",t,o),t.time=o}function pe(e,t){const o={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)o.x+=n.offsetLeft,o.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const s=n.getBoundingClientRect();n=n.parentElement;const r=n.getBoundingClientRect();o.x+=s.left-r.left,o.y+=s.top-r.top}else if(n instanceof SVGGraphicsElement){const{x:s,y:r}=n.getBBox();o.x+=s,o.y+=r;let i=null,c=n.parentNode;for(;!i;)c.tagName==="svg"&&(i=c),c=n.parentNode;n=i}else break;return o}const me={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},H={start:0,center:.5,end:1};function N(e,t,o=0){let n=0;if(H[e]!==void 0&&(e=H[e]),typeof e=="string"){const s=parseFloat(e);e.endsWith("px")?n=s:e.endsWith("%")?e=s/100:e.endsWith("vw")?n=s/100*document.documentElement.clientWidth:e.endsWith("vh")?n=s/100*document.documentElement.clientHeight:e=s}return typeof e=="number"&&(n=t*e),o+n}const ve=[0,0];function ye(e,t,o,n){let s=Array.isArray(e)?e:ve,r=0,i=0;return typeof e=="number"?s=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?s=e.split(" "):s=[e,H[e]?e:"0"]),r=N(s[0],o,n),i=N(s[1],t),r-i}const xe={x:0,y:0};function we(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Ee(e,t,o){let{offset:n=me.All}=o;const{target:s=e,axis:r="y"}=o,i=r==="y"?"height":"width",c=s!==e?pe(s,e):xe,a=s===e?{width:e.scrollWidth,height:e.scrollHeight}:we(s),f={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let g=!t[r].interpolate;const E=n.length;for(let u=0;u<E;u++){const P=ye(n[u],f[i],a[i],c[r]);!g&&P!==t[r].interpolatorOffsets[u]&&(g=!0),t[r].offset[u]=P}g&&(t[r].interpolate=T(t[r].offset,$(n)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function be(e,t=e,o){if(o.x.targetOffset=0,o.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)o.x.targetOffset+=n.offsetLeft,o.y.targetOffset+=n.offsetTop,n=n.offsetParent}o.x.targetLength=t===e?t.scrollWidth:t.clientWidth,o.y.targetLength=t===e?t.scrollHeight:t.clientHeight,o.x.containerLength=e.clientWidth,o.y.containerLength=e.clientHeight}function Se(e,t,o,n={}){return{measure:()=>be(e,n.target,o),update:s=>{he(e,o,s),(n.offset||n.target)&&Ee(e,o,n)},notify:()=>t(o)}}const p=new WeakMap,M=new WeakMap,S=new WeakMap,V=e=>e===document.documentElement?window:e;function Le(e,{container:t=document.documentElement,...o}={}){let n=S.get(t);n||(n=new Set,S.set(t,n));const s=de(),r=Se(t,e,s,o);if(n.add(r),!p.has(t)){const c=()=>{for(const u of n)u.measure()},a=()=>{for(const u of n)u.update(L.timestamp)},f=()=>{for(const u of n)u.notify()},g=()=>{v.read(c,!1,!0),v.update(a,!1,!0),v.update(f,!1,!0)};p.set(t,g);const E=V(t);window.addEventListener("resize",g,{passive:!0}),t!==document.documentElement&&M.set(t,ue(t,g)),E.addEventListener("scroll",g,{passive:!0})}const i=p.get(t);return v.read(i,!1,!0),()=>{var c;G(i);const a=S.get(t);if(!a||(a.delete(r),a.size))return;const f=p.get(t);p.delete(t),f&&(V(t).removeEventListener("scroll",f),(c=M.get(t))===null||c===void 0||c(),window.removeEventListener("resize",f))}}function R(e,t){q(!!(!t||t.current))}const ze=()=>({scrollX:m(0),scrollY:m(0),scrollXProgress:m(0),scrollYProgress:m(0)});function Y({container:e,target:t,layoutEffect:o=!0,...n}={}){const s=W(ze);return(o?O:d.useEffect)(()=>(R("target",t),R("container",e),Le(({x:i,y:c})=>{s.scrollX.set(i.current),s.scrollXProgress.set(i.progress),s.scrollY.set(c.current),s.scrollYProgress.set(c.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),s}const He=[{id:1,icon:"./icon/about/profile.svg",img:"./about/about-1.JPG",desc:"Ви заповнюєте анкету та ведете щоденник харчування протягом 3-5 днів."},{id:2,icon:"./icon/about/consultation.svg",img:"./about/about-2.JPG",desc:"Ми проводимо першу консультацію, де обговорюємо  історію вашого схуднення, оцінюємо рівень активності,  та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без зусиль та заборон."},{id:3,icon:"./icon/about/advice.svg",img:"./about/about-3.JPG",desc:"Я розробляю вам рекомендації, які враховують ваші потреби, стан здоров'я та особливості життєвого стилю. Процес може зайняти 2-3 дні. "},{id:4,icon:"./icon/about/no-bads.svg",img:"./about/about-4.JPG",desc:"Ніяких дієтичних добавок, БАДів та аналізів не призначаю, адже їх має призначати лише ваш лікар, не забороняю їсти улюблені продукти, солодке, їсти глютен, лактозу (якщо для цього не має рекомендацій від лікаря), не змушую рахувати калорії."},{id:5,icon:"./icon/about/looking.svg",img:"./about/about-5.JPG",desc:"Ви дотримуєтесь моїх рекомендацій, скидаєте на перевірку звіти по харчуванню. Ми розбираємо кожний незрозумілий момент і робимо корективи в процесі співпраці, аби досягти бажаного результату. Паралельно ви отримуєте знання про харчування, які в подальшому допоможуть вам самостійно керувати своїм раціоном. "},{id:6,icon:"./icon/about/growth.svg",img:"./about/about-6.JPG",desc:"Пам'ятайте, що результат на 99% залежить від вашої віддачі. Я не змушую вас їсти, звітувати і змінюватися, якщо ви цього самі не хочете. "}],We=({item:e})=>{const t=d.useRef(),{scrollYProgress:o}=Y({target:t}),n=te(o,[0,1],[-300,300]);return l.jsx("section",{children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"wrapper",children:[l.jsx("div",{className:"imageContainer",ref:t,children:l.jsx("img",{src:e.img,alt:e.id})}),l.jsxs(z.div,{className:"textContainer",style:{y:n},children:[l.jsx(z.img,{src:e.icon,alt:e.id}),l.jsx("p",{children:e.desc})]})]})})})},Pe=()=>{const e=d.useRef(),{scrollYProgress:t}=Y({target:e,offset:["end end","start start"]}),o=ne(t,{stiffness:100,damping:30});return l.jsxs("div",{className:"review",ref:e,children:[l.jsxs("div",{className:"progress",children:[l.jsx("h6",{children:"Як я працюю"}),l.jsx(z.div,{style:{scaleX:o},className:"progressBar"})]}),He.map(n=>l.jsx(We,{item:n},n.id))]})};export{Pe as default};
