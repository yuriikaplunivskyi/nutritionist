import{r as u,j as n,L as I}from"./index-b368ffa7.js";import{C as K}from"./Cursor-37213fd0.js";import{u as A,m as y,M as $,i as U,a as V,c as Y,f as j,b as L,d as T,e as Q,g as P,h as Z,p as ee,v as te,j as se,w as ie,k as l}from"./motion-bb713fe2.js";import ne from"./Navbar-eb843a5d.js";import{a as ae}from"./axios-d16e7a2c.js";import{r as re,u as G,C as oe}from"./Contact-12443384.js";import{u as ce}from"./useServiceData-f1764fa2.js";import{d as le}from"./dots-loading-586fb599.js";function J(e){const t=A(()=>y(e)),{isStatic:a}=u.useContext($);if(a){const[,s]=u.useState(e);u.useEffect(()=>t.on("change",s),[])}return t}const de=e=>typeof e=="object"&&e.mix,ue=e=>de(e)?e.mix:void 0;function fe(...e){const t=!Array.isArray(e[0]),a=t?0:-1,s=e[0+a],i=e[1+a],r=e[2+a],o=e[3+a],d=U(i,r,{mixer:ue(r[0]),...o});return t?d(s):d}function q(e,t){const a=J(t()),s=()=>a.set(t());return s(),V(()=>{const i=()=>j.update(s,!1,!0),r=e.map(o=>o.on("change",i));return()=>{r.forEach(o=>o()),Y(s)}}),a}function he(e){L.current=[],e();const t=q(L.current,e);return L.current=void 0,t}function E(e,t,a,s){if(typeof e=="function")return he(e);const i=typeof t=="function"?t:fe(t,a,s);return Array.isArray(e)?k(e,i):k([e],([r])=>i(r))}function k(e,t){const a=A(()=>[]);return q(e,()=>{a.length=0;const s=e.length;for(let i=0;i<s;i++)a[i]=e[i].get();return t(a)})}function me(e,t={}){const{isStatic:a}=u.useContext($),s=u.useRef(null),i=J(T(e)?e.get():e),r=()=>{s.current&&s.current.stop()};return u.useInsertionEffect(()=>i.attach((o,d)=>{if(a)return d(o);if(r(),s.current=Q({keyframes:[i.get(),o],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:d}),!P.isProcessing){const f=performance.now()-P.timestamp;f<30&&(s.current.time=Z(f))}return i.get()},r),[JSON.stringify(t)]),V(()=>{if(T(e))return e.on("change",o=>i.set(parseFloat(o)))},[i]),i}const S=new WeakMap;let p;function ge(e,t){if(t){const{inlineSize:a,blockSize:s}=t[0];return{width:a,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function pe({target:e,contentRect:t,borderBoxSize:a}){var s;(s=S.get(e))===null||s===void 0||s.forEach(i=>{i({target:e,contentSize:t,get size(){return ge(e,a)}})})}function xe(e){e.forEach(pe)}function ve(){typeof ResizeObserver>"u"||(p=new ResizeObserver(xe))}function ye(e,t){p||ve();const a=re(e);return a.forEach(s=>{let i=S.get(s);i||(i=new Set,S.set(s,i)),i.add(t),p==null||p.observe(s)}),()=>{a.forEach(s=>{const i=S.get(s);i==null||i.delete(t),i!=null&&i.size||p==null||p.unobserve(s)})}}const C=new Set;let b;function je(){b=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};C.forEach(a=>a(t))},window.addEventListener("resize",b)}function be(e){return C.add(e),b||je(),()=>{C.delete(e),!C.size&&b&&(b=void 0)}}function we(e,t){return typeof e=="function"?be(e):ye(e,t)}const Ne=50,W=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Ee=()=>({time:0,x:W(),y:W()}),Se={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function R(e,t,a,s){const i=a[t],{length:r,position:o}=Se[t],d=i.current,f=a.time;i.current=e["scroll"+o],i.scrollLength=e["scroll"+r]-e["client"+r],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=ee(0,i.scrollLength,i.current);const g=s-f;i.velocity=g>Ne?0:te(i.current-d,g)}function Ce(e,t,a){R(e,"x",t,a),R(e,"y",t,a),t.time=a}function Le(e,t){const a={x:0,y:0};let s=e;for(;s&&s!==t;)if(s instanceof HTMLElement)a.x+=s.offsetLeft,a.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const i=s.getBoundingClientRect();s=s.parentElement;const r=s.getBoundingClientRect();a.x+=i.left-r.left,a.y+=i.top-r.top}else if(s instanceof SVGGraphicsElement){const{x:i,y:r}=s.getBBox();a.x+=i,a.y+=r;let o=null,d=s.parentNode;for(;!o;)d.tagName==="svg"&&(o=d),d=s.parentNode;s=o}else break;return a}const He={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},z={start:0,center:.5,end:1};function M(e,t,a=0){let s=0;if(z[e]!==void 0&&(e=z[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?s=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?s=i/100*document.documentElement.clientWidth:e.endsWith("vh")?s=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(s=t*e),a+s}const Ie=[0,0];function Pe(e,t,a,s){let i=Array.isArray(e)?e:Ie,r=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,z[e]?e:"0"]),r=M(i[0],a,s),o=M(i[1],t),r-o}const ze={x:0,y:0};function Ae(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Ve(e,t,a){let{offset:s=He.All}=a;const{target:i=e,axis:r="y"}=a,o=r==="y"?"height":"width",d=i!==e?Le(i,e):ze,f=i===e?{width:e.scrollWidth,height:e.scrollHeight}:Ae(i),g={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let c=!t[r].interpolate;const h=s.length;for(let m=0;m<h;m++){const O=Pe(s[m],g[o],f[o],d[r]);!c&&O!==t[r].interpolatorOffsets[m]&&(c=!0),t[r].offset[m]=O}c&&(t[r].interpolate=U(t[r].offset,se(s)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function Be(e,t=e,a){if(a.x.targetOffset=0,a.y.targetOffset=0,t!==e){let s=t;for(;s&&s!==e;)a.x.targetOffset+=s.offsetLeft,a.y.targetOffset+=s.offsetTop,s=s.offsetParent}a.x.targetLength=t===e?t.scrollWidth:t.clientWidth,a.y.targetLength=t===e?t.scrollHeight:t.clientHeight,a.x.containerLength=e.clientWidth,a.y.containerLength=e.clientHeight}function Oe(e,t,a,s={}){return{measure:()=>Be(e,s.target,a),update:i=>{Ce(e,a,i),(s.offset||s.target)&&Ve(e,a,s)},notify:()=>t(a)}}const v=new WeakMap,_=new WeakMap,H=new WeakMap,D=e=>e===document.documentElement?window:e;function Te(e,{container:t=document.documentElement,...a}={}){let s=H.get(t);s||(s=new Set,H.set(t,s));const i=Ee(),r=Oe(t,e,i,a);if(s.add(r),!v.has(t)){const d=()=>{for(const m of s)m.measure()},f=()=>{for(const m of s)m.update(P.timestamp)},g=()=>{for(const m of s)m.notify()},c=()=>{j.read(d,!1,!0),j.update(f,!1,!0),j.update(g,!1,!0)};v.set(t,c);const h=D(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&_.set(t,we(t,c)),h.addEventListener("scroll",c,{passive:!0})}const o=v.get(t);return j.read(o,!1,!0),()=>{var d;Y(o);const f=H.get(t);if(!f||(f.delete(r),f.size))return;const g=v.get(t);v.delete(t),g&&(D(t).removeEventListener("scroll",g),(d=_.get(t))===null||d===void 0||d(),window.removeEventListener("resize",g))}}function F(e,t){ie(!!(!t||t.current))}const ke=()=>({scrollX:y(0),scrollY:y(0),scrollXProgress:y(0),scrollYProgress:y(0)});function B({container:e,target:t,layoutEffect:a=!0,...s}={}){const i=A(ke);return(a?V:u.useEffect)(()=>(F("target",t),F("container",e),Te(({x:o,y:d})=>{i.scrollX.set(o.current),i.scrollXProgress.set(o.progress),i.scrollY.set(d.current),i.scrollYProgress.set(d.progress)},{...s,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(s.offset)]),i}const x={initial:{x:-900,opacity:0},animate:{x:0,opacity:1,transition:{duration:1,staggerChildren:.15}},scrollButton:{opacity:0,y:10,transition:{duration:2,repeat:1/0}}},We={initial:{x:0},animate:{x:"-220%",transition:{duration:50,repeatType:"mirror",repeat:1/0}}},Re=()=>n.jsxs("div",{className:"hero",children:[n.jsx("div",{className:"wrapper",children:n.jsxs(l.div,{className:"textContainer",variants:x,initial:"initial",animate:"animate",children:[n.jsx(l.h2,{variants:x,children:"Катерина Каплунівська"}),n.jsx(l.h1,{variants:x,children:"Персональний тренер та нутриціолог"}),n.jsxs(l.div,{variants:x,className:"buttons",children:[n.jsx(l.div,{children:n.jsx(I,{variants:x,to:"#about",children:"Про мене"})}),n.jsx(l.div,{children:n.jsx(I,{variants:x,to:"#contacts",children:"Зв'язатися зі мною"})})]}),n.jsx(l.img,{variants:x,animate:"scrollButton",src:"./img/scroll.png",alt:"scroll button"})]})}),n.jsx(l.div,{className:"slidingTextContainer",initial:"initial",animate:"animate",variants:We,children:"NUTRITIONIST PERSONAL COACH HEALTH COACH  ---------------------------------------------            "}),n.jsx("div",{className:"imageContainer",children:n.jsx("img",{src:"./img/hero.avif",alt:"hero img"})})]});const Me=e=>{const[t,a]=u.useState(0);let s=0,i=null;const r=c=>{s=c.clientX,i=c.pointerId,c.target.setPointerCapture(i)},o=c=>{if(c.pointerId===i){const h=c.clientX,m=s-h;m>50?f():m<-50&&g()}},d=c=>{c.pointerId===i&&(c.target.releasePointerCapture(i),i=null)},f=()=>{a(c=>c===e.slides.length-1?0:c+1)},g=()=>{a(c=>c===0?e.slides.length-1:c-1)};return n.jsxs("div",{className:"slider carousel-container",onPointerDown:r,onPointerMove:o,onPointerUp:d,children:[n.jsx("button",{className:"prev-button",onClick:g,children:"❮"}),n.jsx("div",{className:"carousel-slideCard",children:Array.isArray(e.slides)&&e.slides.map((c,h)=>n.jsxs(l.div,{className:`slide ${t===h?"active":""}`,initial:{opacity:0,x:300},animate:{opacity:t===h?1:0,x:t===h?0:h>t?300:-300,z:t===h?0:(h>t,50)},exit:{opacity:0,x:h>t?300:-300},transition:{duration:.5},children:[n.jsx("div",{className:"slide-imgContainer",children:n.jsx("img",{src:`https://kateryna-kaplunivska.com.ua/api/public/${c.img_path}`,alt:`Slide ${h}`})}),n.jsxs("div",{className:"slide-textContainer",children:[n.jsx("span",{children:c.school}),n.jsxs("h6",{children:['"',c.title,'"']})]})]},c.id))}),n.jsx("button",{className:"next-button",onClick:f,children:"❯"})]})},_e=[{id:1,img_path:"/img/certificates/nodiet.png",school:"Nodiet school",title:"Нутриціологія"},{id:2,img_path:"/img/certificates/iFit-group-fit.png",school:"iFIT",title:"Інструктор групових занять"},{id:3,img_path:"/img/certificates/fa-bodyMobility.png",school:"Fitness academy",title:"Body Mobility"},{id:4,img_path:"/img/certificates/fa-dprpm.png",school:"Fitness academy",title:"Діагностика, профілактика та вирішення проблеми м'язового дисбалансу"},{id:5,img_path:"/img/certificates/fa-func_training.png",school:"Fitness academy",title:"Функціональний тренінг/НІІТ"},{id:6,img_path:"/img/certificates/fa-pumpIt.png",school:"Fitness academy",title:"Силове тренування PUMP IT UP & TABS"},{id:7,img_path:"/img/certificates/fa-master-trainer_2l.png",school:"Fitness academy",title:"Майстер тренер тренажерної зали (рівень ІІ)"},{id:8,img_path:"/img/certificates/fa-master-trainer_3l.png",school:"Fitness academy",title:"Майстер тренер тренажерної зали (рівень ІІІ)"}],w={initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5}}},De={initial:{},animate:{transition:{staggerChildren:.5}}},Fe=()=>{const e=u.useRef(),t=G(e,{margin:"0px"}),[a,s]=u.useState([]);return u.useEffect(()=>{(async()=>{try{const r=await ae.get("https://kateryna-kaplunivska.com.ua/api/certificates");s(r.data),console.log(r.data)}catch(r){console.log(r),console.error("Error fetching service data:",r),s(_e)}})()},[]),n.jsx("div",{className:"about",children:n.jsxs(l.div,{className:"wrapper",variants:De,animate:t&&"animate",initial:"initial",ref:e,whileInView:"animate",children:[n.jsx(l.h3,{variants:w,className:"about-title",children:"Я сертифікований фітнес-тренер та нутриціолог"}),n.jsx(l.div,{variants:w,className:"about-imgContainer",children:n.jsx(l.img,{src:"./img/whoami.webp",alt:"who I am"})}),n.jsx(Me,{variants:w,slides:a}),n.jsx(l.p,{variants:w,className:"about-text",children:"Вже більше 2-х років я прививаю любов до спорту та збалансованого харчуванню своїм клієнтам. допомагаю людям робити здоровий вибір у харчуванні та житті, набувати фігури мрії, повертати енергію та значно покращувати здоров'я. Я можу вам показати великі можливості збалансованого харчування, а не обмеження, привити любов до фізичної активності без болей і втоми"})]})})};const Xe=[{id:1,icon:"./icon/about/profile.svg",img:"./img/about/about-1.webp",desc:"Ви заповнюєте анкету та ведете щоденник харчування протягом 3-5 днів."},{id:2,icon:"./icon/about/consultation.svg",img:"./img/about/about-2.webp",desc:"Ми проводимо першу консультацію, де обговорюємо  історію вашого схуднення, оцінюємо рівень активності,  та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без зусиль та заборон."},{id:3,icon:"./icon/about/advice.svg",img:"./img/about/about-3.webp",desc:"Я розробляю вам рекомендації, які враховують ваші потреби, стан здоров'я та особливості життєвого стилю. Процес може зайняти 2-3 дні. "},{id:4,icon:"./icon/about/no-bads.svg",img:"./img/about/about-4.webp",desc:"Ніяких дієтичних добавок, БАДів та аналізів не призначаю, адже їх має призначати лише ваш лікар, не забороняю їсти улюблені продукти, солодке, їсти глютен, лактозу (якщо для цього не має рекомендацій від лікаря), не змушую рахувати калорії."},{id:5,icon:"./icon/about/looking.svg",img:"./img/about/about-5.webp",desc:"Ви дотримуєтесь моїх рекомендацій, скидаєте на перевірку звіти по харчуванню. Ми розбираємо кожний незрозумілий момент і робимо корективи в процесі співпраці, аби досягти бажаного результату. Паралельно ви отримуєте знання про харчування, які в подальшому допоможуть вам самостійно керувати своїм раціоном. "},{id:6,icon:"./icon/about/growth.svg",img:"./img/about/about-6.webp",desc:"Пам'ятайте, що результат на 99% залежить від вашої віддачі. Я не змушую вас їсти, звітувати і змінюватися, якщо ви цього самі не хочете. "}],$e=({item:e,mainRef:t})=>{const a=u.useRef(),{scrollYProgress:s}=B({container:t,target:a,layoutEffect:!1}),i=E(s,[0,1],[-300,300]);return n.jsx("article",{id:"reviews",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"wrapper",children:[n.jsx("div",{className:"imageContainer",ref:a,children:n.jsx("img",{src:e.img,alt:e.id})}),n.jsxs(l.div,{className:"textContainer",style:{y:i},children:[n.jsx("img",{src:e.icon,alt:e.id}),n.jsx("p",{children:e.desc})]})]})})})},Ue=({mainRef:e})=>{const t=u.useRef(),{scrollYProgress:a}=B({container:e,target:t,layoutEffect:!1,offset:["end end","start start"]}),s=me(a,{stiffness:100,damping:30});return n.jsxs("div",{className:"review",ref:t,children:[n.jsxs("div",{className:"progress",children:[n.jsx("h6",{children:"Як я працюю"}),n.jsx(l.div,{style:{scaleX:s},className:"progressBar"})]}),Xe.map(i=>n.jsx($e,{item:i,mainRef:e},i.id))]})};const N={initial:{x:-200,y:10,opacity:0},animate:{x:0,opacity:1,y:0,transition:{duration:1,staggerChildren:.5}}},Ye=()=>{const e=u.useRef(),t=G(e,{margin:"-50px"}),{serviceData:a,loading:s}=ce();return n.jsx("div",{className:"services-container",children:n.jsxs(l.div,{className:"services",variants:N,animate:t&&"animate",initial:"initial",ref:e,whileInView:"animate",children:[n.jsxs(l.div,{className:"textContainer",variants:N,children:[n.jsxs(l.p,{children:["Я фокусуюся на підтримці в досягненні",n.jsx("br",{}),"  ваших цілей. "]}),n.jsx(l.hr,{})]}),n.jsxs(l.div,{className:"titleContainer",variants:N,children:[n.jsxs("div",{className:"title",children:[n.jsx("img",{src:"./img/banana.webp",alt:"people"}),n.jsxs("h2",{children:[n.jsx(l.b,{whileHover:{color:"#0f0a0a"},children:"Унікальні"})," ідеї"]})]}),n.jsxs("div",{className:"title",children:[n.jsxs("h2",{children:[n.jsx(l.b,{whileHover:{color:"#0f0a0a"},children:"для вашого"})," здоров'я"]}),n.jsx("button",{children:"Що робимо?"})]})]}),s?n.jsx("div",{className:"loading",style:{height:"100%"},children:n.jsx("img",{style:{width:"40px"},src:le,alt:"loading"})}):n.jsx(l.div,{className:"listContainer",variants:N,animate:t&&"animate",initial:"initial",ref:e,whileInView:"animate",children:a.map(i=>n.jsxs(l.div,{className:"box",children:[n.jsx("h2",{className:"box-title",children:i.title}),n.jsx(I,{className:"box-btn-container",to:{pathname:`/service/${i.path}`},children:n.jsx("button",{children:"Переглянути"})})]},i.id))})]})})};const X=({type:e,mainRef:t})=>{const a=u.useRef(),{scrollYProgress:s}=B({container:t,target:a,layoutEffect:!1,offset:["start start","end start"]}),i=E(s,[0,1],["0%","500%"]),r=E(s,[0,1],["0%","100%"]),o=E(s,[0,1],[0,720]);return n.jsxs("div",{className:"parallax",ref:a,style:{background:"linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(226,163,171,1) 100%, rgba(255,255,255,0.9401961468181023) 100%)"},children:[n.jsx(l.h1,{style:{y:i},children:e==="services"?"Послуги? ":"Хто я? "}),n.jsx(l.div,{className:"mountains"}),n.jsx(l.div,{className:"planets",style:{y:r,rotate:o,backgroundImage:`url(${e==="services"?"./img/planets.png":"./img/sun.png"})`}}),n.jsx(l.div,{className:"stars",style:{x:r}})]})};function st(){const e=u.useRef();return n.jsxs("main",{ref:e,children:[n.jsx(K,{}),n.jsxs("section",{id:"homepage",children:[n.jsx(ne,{}),n.jsx(Re,{})]}),n.jsx("section",{id:"about",children:n.jsx(X,{type:"reviews",mainRef:e})}),n.jsx("section",{children:n.jsx(Fe,{})}),n.jsx(Ue,{id:"reviews",mainRef:e}),n.jsx("section",{children:n.jsx(X,{type:"services",mainRef:e})}),n.jsx("section",{id:"services",children:n.jsx(Ye,{})}),n.jsx("section",{id:"contacts",children:n.jsx(oe,{})})]})}export{st as default};
