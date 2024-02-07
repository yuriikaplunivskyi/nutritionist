import{u as P,m as w,r as h,M as Y,i as q,a as T,c as G,f as b,b as k,d as M,e as Z,g as H,h as ee,j as te,p as se,v as ne,k as ie,w as ae,l as s,n as l,L as V,o as re,q as oe,C as ce,N as le}from"./index-5cef75b6.js";import{d as de}from"./dots-loading-586fb599.js";import{u as ue,a as fe}from"./useContactForm-69f1f56e.js";function J(e){const t=P(()=>w(e)),{isStatic:a}=h.useContext(Y);if(a){const[,n]=h.useState(e);h.useEffect(()=>t.on("change",n),[])}return t}const me=e=>typeof e=="object"&&e.mix,he=e=>me(e)?e.mix:void 0;function ge(...e){const t=!Array.isArray(e[0]),a=t?0:-1,n=e[0+a],i=e[1+a],r=e[2+a],o=e[3+a],u=q(i,r,{mixer:he(r[0]),...o});return t?u(n):u}function K(e,t){const a=J(t()),n=()=>a.set(t());return n(),T(()=>{const i=()=>b.update(n,!1,!0),r=e.map(o=>o.on("change",i));return()=>{r.forEach(o=>o()),G(n)}}),a}function pe(e){k.current=[],e();const t=K(k.current,e);return k.current=void 0,t}function C(e,t,a,n){if(typeof e=="function")return pe(e);const i=typeof t=="function"?t:ge(t,a,n);return Array.isArray(e)?W(e,i):W([e],([r])=>i(r))}function W(e,t){const a=P(()=>[]);return K(e,()=>{a.length=0;const n=e.length;for(let i=0;i<n;i++)a[i]=e[i].get();return t(a)})}function xe(e,t={}){const{isStatic:a}=h.useContext(Y),n=h.useRef(null),i=J(M(e)?e.get():e),r=()=>{n.current&&n.current.stop()};return h.useInsertionEffect(()=>i.attach((o,u)=>{if(a)return u(o);if(r(),n.current=Z({keyframes:[i.get(),o],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:u}),!H.isProcessing){const d=performance.now()-H.timestamp;d<30&&(n.current.time=ee(d))}return i.get()},r),[JSON.stringify(t)]),T(()=>{if(M(e))return e.on("change",o=>i.set(parseFloat(o)))},[i]),i}function Q(e,t,a){var n;if(typeof e=="string"){let i=document;t&&(te(!!t.current),i=t.current),a?((n=a[e])!==null&&n!==void 0||(a[e]=i.querySelectorAll(e)),e=a[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const I=new WeakMap;let x;function ve(e,t){if(t){const{inlineSize:a,blockSize:n}=t[0];return{width:a,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function ye({target:e,contentRect:t,borderBoxSize:a}){var n;(n=I.get(e))===null||n===void 0||n.forEach(i=>{i({target:e,contentSize:t,get size(){return ve(e,a)}})})}function je(e){e.forEach(ye)}function we(){typeof ResizeObserver>"u"||(x=new ResizeObserver(je))}function be(e,t){x||we();const a=Q(e);return a.forEach(n=>{let i=I.get(n);i||(i=new Set,I.set(n,i)),i.add(t),x==null||x.observe(n)}),()=>{a.forEach(n=>{const i=I.get(n);i==null||i.delete(t),i!=null&&i.size||x==null||x.unobserve(n)})}}const L=new Set;let N;function Ne(){N=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};L.forEach(a=>a(t))},window.addEventListener("resize",N)}function Ee(e){return L.add(e),N||Ne(),()=>{L.delete(e),!L.size&&N&&(N=void 0)}}function Se(e,t){return typeof e=="function"?Ee(e):be(e,t)}const Ce=50,R=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Ie=()=>({time:0,x:R(),y:R()}),Le={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function F(e,t,a,n){const i=a[t],{length:r,position:o}=Le[t],u=i.current,d=a.time;i.current=e["scroll"+o],i.scrollLength=e["scroll"+r]-e["client"+r],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=se(0,i.scrollLength,i.current);const g=n-d;i.velocity=g>Ce?0:ne(i.current-u,g)}function ke(e,t,a){F(e,"x",t,a),F(e,"y",t,a),t.time=a}function ze(e,t){const a={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)a.x+=n.offsetLeft,a.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const i=n.getBoundingClientRect();n=n.parentElement;const r=n.getBoundingClientRect();a.x+=i.left-r.left,a.y+=i.top-r.top}else if(n instanceof SVGGraphicsElement){const{x:i,y:r}=n.getBBox();a.x+=i,a.y+=r;let o=null,u=n.parentNode;for(;!o;)u.tagName==="svg"&&(o=u),u=n.parentNode;n=o}else break;return a}const He={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},A={start:0,center:.5,end:1};function $(e,t,a=0){let n=0;if(A[e]!==void 0&&(e=A[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?n=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?n=i/100*document.documentElement.clientWidth:e.endsWith("vh")?n=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(n=t*e),a+n}const Ve=[0,0];function Ae(e,t,a,n){let i=Array.isArray(e)?e:Ve,r=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,A[e]?e:"0"]),r=$(i[0],a,n),o=$(i[1],t),r-o}const Pe={x:0,y:0};function Te(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Be(e,t,a){let{offset:n=He.All}=a;const{target:i=e,axis:r="y"}=a,o=r==="y"?"height":"width",u=i!==e?ze(i,e):Pe,d=i===e?{width:e.scrollWidth,height:e.scrollHeight}:Te(i),g={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let c=!t[r].interpolate;const f=n.length;for(let m=0;m<f;m++){const p=Ae(n[m],g[o],d[o],u[r]);!c&&p!==t[r].interpolatorOffsets[m]&&(c=!0),t[r].offset[m]=p}c&&(t[r].interpolate=q(t[r].offset,ie(n)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function Oe(e,t=e,a){if(a.x.targetOffset=0,a.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)a.x.targetOffset+=n.offsetLeft,a.y.targetOffset+=n.offsetTop,n=n.offsetParent}a.x.targetLength=t===e?t.scrollWidth:t.clientWidth,a.y.targetLength=t===e?t.scrollHeight:t.clientHeight,a.x.containerLength=e.clientWidth,a.y.containerLength=e.clientHeight}function Me(e,t,a,n={}){return{measure:()=>Oe(e,n.target,a),update:i=>{ke(e,a,i),(n.offset||n.target)&&Be(e,a,n)},notify:()=>t(a)}}const y=new WeakMap,D=new WeakMap,z=new WeakMap,X=e=>e===document.documentElement?window:e;function We(e,{container:t=document.documentElement,...a}={}){let n=z.get(t);n||(n=new Set,z.set(t,n));const i=Ie(),r=Me(t,e,i,a);if(n.add(r),!y.has(t)){const u=()=>{for(const m of n)m.measure()},d=()=>{for(const m of n)m.update(H.timestamp)},g=()=>{for(const m of n)m.notify()},c=()=>{b.read(u,!1,!0),b.update(d,!1,!0),b.update(g,!1,!0)};y.set(t,c);const f=X(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&D.set(t,Se(t,c)),f.addEventListener("scroll",c,{passive:!0})}const o=y.get(t);return b.read(o,!1,!0),()=>{var u;G(o);const d=z.get(t);if(!d||(d.delete(r),d.size))return;const g=y.get(t);y.delete(t),g&&(X(t).removeEventListener("scroll",g),(u=D.get(t))===null||u===void 0||u(),window.removeEventListener("resize",g))}}function _(e,t){ae(!!(!t||t.current))}const Re=()=>({scrollX:w(0),scrollY:w(0),scrollXProgress:w(0),scrollYProgress:w(0)});function B({container:e,target:t,layoutEffect:a=!0,...n}={}){const i=P(Re);return(a?T:h.useEffect)(()=>(_("target",t),_("container",e),We(({x:o,y:u})=>{i.scrollX.set(o.current),i.scrollXProgress.set(o.progress),i.scrollY.set(u.current),i.scrollYProgress.set(u.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),i}const Fe={some:0,all:1};function $e(e,t,{root:a,margin:n,amount:i="some"}={}){const r=Q(e),o=new WeakMap,u=g=>{g.forEach(c=>{const f=o.get(c.target);if(c.isIntersecting!==!!f)if(c.isIntersecting){const m=t(c);typeof m=="function"?o.set(c.target,m):d.unobserve(c.target)}else f&&(f(c),o.delete(c.target))})},d=new IntersectionObserver(u,{root:a,rootMargin:n,threshold:typeof i=="number"?i:Fe[i]});return r.forEach(g=>d.observe(g)),()=>d.disconnect()}function O(e,{root:t,margin:a,amount:n,once:i=!1}={}){const[r,o]=h.useState(!1);return h.useEffect(()=>{if(!e.current||i&&r)return;const u=()=>(o(!0),i?void 0:()=>o(!1)),d={root:t&&t.current||void 0,margin:a,amount:n};return $e(e.current,u,d)},[t,e,a,i]),r}const v={initial:{x:-900,opacity:0},animate:{x:0,opacity:1,transition:{duration:1,staggerChildren:.15}},scrollButton:{opacity:0,y:10,transition:{duration:2,repeat:1/0}}},De={initial:{x:0},animate:{x:"-220%",transition:{duration:50,repeatType:"mirror",repeat:1/0}}},Xe=()=>s.jsxs("div",{className:"hero",children:[s.jsx("div",{className:"wrapper",children:s.jsxs(l.div,{className:"textContainer",variants:v,initial:"initial",animate:"animate",children:[s.jsx(l.h2,{variants:v,children:"Катерина Каплунівська"}),s.jsx(l.h1,{variants:v,children:"Персональний тренер та нутриціолог"}),s.jsxs(l.div,{variants:v,className:"buttons",children:[s.jsx(l.div,{children:s.jsx(V,{variants:v,to:"#about",children:"Про мене"})}),s.jsx(l.div,{children:s.jsx(V,{variants:v,to:"#contacts",children:"Зв'язатися зі мною"})})]}),s.jsx(l.img,{variants:v,animate:"scrollButton",src:"./img/scroll.png",alt:"scroll button"})]})}),s.jsx(l.div,{className:"slidingTextContainer",initial:"initial",animate:"animate",variants:De,children:"NUTRITIONIST PERSONAL COACH HEALTH COACH  ---------------------------------------------            "}),s.jsx("div",{className:"imageContainer",children:s.jsx("img",{src:"./img/hero.avif",alt:"hero img"})})]});const _e=e=>{const[t,a]=h.useState(0);let n=0,i=null;const r=c=>{n=c.clientX,i=c.pointerId,c.target.setPointerCapture(i)},o=c=>{if(c.pointerId===i){const f=c.clientX,m=n-f;m>50?d():m<-50&&g()}},u=c=>{c.pointerId===i&&(c.target.releasePointerCapture(i),i=null)},d=()=>{a(c=>c===e.slides.length-1?0:c+1)},g=()=>{a(c=>c===0?e.slides.length-1:c-1)};return s.jsxs("div",{className:"slider carousel-container",onPointerDown:r,onPointerMove:o,onPointerUp:u,children:[s.jsx("button",{className:"prev-button",onClick:g,children:"❮"}),s.jsx("div",{className:"carousel-slideCard",children:e.slides.map((c,f)=>s.jsxs(l.div,{className:`slide ${t===f?"active":""}`,initial:{opacity:0,x:300},animate:{opacity:t===f?1:0,x:t===f?0:f>t?300:-300,z:t===f?0:(f>t,50)},exit:{opacity:0,x:f>t?300:-300},transition:{duration:.5},children:[s.jsx("div",{className:"slide-imgContainer",children:s.jsx("img",{src:`${window.location.origin}${c.img_path}`,alt:`Slide ${f}`})}),s.jsxs("div",{className:"slide-textContainer",children:[s.jsx("span",{children:c.school}),s.jsxs("h6",{children:['"',c.title,'"']})]})]},c.id))}),s.jsx("button",{className:"next-button",onClick:d,children:"❯"})]})},Ue=[{id:1,img:"./img/certificates/nodiet.png",school:"Nodiet school",title:"Нутриціологія"},{id:2,img:"./img/certificates/iFit-group-fit.png",school:"iFIT",title:"Інструктор групових занять"},{id:3,img:"./img/certificates/fa-bodyMobility.png",school:"Fitness academy",title:"Body Mobility"},{id:4,img:"./img/certificates/fa-dprpm.png",school:"Fitness academy",title:"Діагностика, профілактика та вирішення проблеми м'язового дисбалансу"},{id:5,img:"./img/certificates/fa-func_training.png",school:"Fitness academy",title:"Функціональний тренінг/НІІТ"},{id:6,img:"./img/certificates/fa-pumpIt.png",school:"Fitness academy",title:"Силове тренування PUMP IT UP & TABS"},{id:7,img:"./img/certificates/fa-master-trainer_2l.png",school:"Fitness academy",title:"Майстер тренер тренажерної зали (рівень ІІ)"},{id:8,img:"./img/certificates/fa-master-trainer_3l.png",school:"Fitness academy",title:"Майстер тренер тренажерної зали (рівень ІІІ)"}],E={initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5}}},Ye={initial:{},animate:{transition:{staggerChildren:.5}}},qe=()=>{const e=h.useRef(),t=O(e,{margin:"0px"}),[a,n]=h.useState([]);return h.useEffect(()=>{(async()=>{try{const r=await re.get(`${window.location.origin}/certificates`);n(r.data),console.log(r.data)}catch(r){console.log(r),console.error("Error fetching service data:",r),n(Ue)}})()},[]),s.jsx("div",{className:"about",children:s.jsxs(l.div,{className:"wrapper",variants:Ye,animate:t&&"animate",initial:"initial",ref:e,whileInView:"animate",children:[s.jsx(l.h3,{variants:E,className:"about-title",children:"Я сертифікований фітнес-тренер та нутриціолог"}),s.jsx(l.div,{variants:E,className:"about-imgContainer",children:s.jsx(l.img,{src:"./img/whoami.webp",alt:"who I am"})}),s.jsx(_e,{variants:E,slides:a}),s.jsx(l.p,{variants:E,className:"about-text",children:"Вже більше 2-х років я прививаю любов до спорту та збалансованого харчуванню своїм клієнтам. допомагаю людям робити здоровий вибір у харчуванні та житті, набувати фігури мрії, повертати енергію та значно покращувати здоров'я. Я можу вам показати великі можливості збалансованого харчування, а не обмеження, привити любов до фізичної активності без болей і втоми"})]})})};const Ge=[{id:1,icon:"./icon/about/profile.svg",img:"./img/about/about-1.webp",desc:"Ви заповнюєте анкету та ведете щоденник харчування протягом 3-5 днів."},{id:2,icon:"./icon/about/consultation.svg",img:"./img/about/about-2.webp",desc:"Ми проводимо першу консультацію, де обговорюємо  історію вашого схуднення, оцінюємо рівень активності,  та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без зусиль та заборон."},{id:3,icon:"./icon/about/advice.svg",img:"./img/about/about-3.webp",desc:"Я розробляю вам рекомендації, які враховують ваші потреби, стан здоров'я та особливості життєвого стилю. Процес може зайняти 2-3 дні. "},{id:4,icon:"./icon/about/no-bads.svg",img:"./img/about/about-4.webp",desc:"Ніяких дієтичних добавок, БАДів та аналізів не призначаю, адже їх має призначати лише ваш лікар, не забороняю їсти улюблені продукти, солодке, їсти глютен, лактозу (якщо для цього не має рекомендацій від лікаря), не змушую рахувати калорії."},{id:5,icon:"./icon/about/looking.svg",img:"./img/about/about-5.webp",desc:"Ви дотримуєтесь моїх рекомендацій, скидаєте на перевірку звіти по харчуванню. Ми розбираємо кожний незрозумілий момент і робимо корективи в процесі співпраці, аби досягти бажаного результату. Паралельно ви отримуєте знання про харчування, які в подальшому допоможуть вам самостійно керувати своїм раціоном. "},{id:6,icon:"./icon/about/growth.svg",img:"./img/about/about-6.webp",desc:"Пам'ятайте, що результат на 99% залежить від вашої віддачі. Я не змушую вас їсти, звітувати і змінюватися, якщо ви цього самі не хочете. "}],Je=({item:e,mainRef:t})=>{const a=h.useRef(),{scrollYProgress:n}=B({container:t,target:a,layoutEffect:!1}),i=C(n,[0,1],[-300,300]);return s.jsx("article",{id:"reviews",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"wrapper",children:[s.jsx("div",{className:"imageContainer",ref:a,children:s.jsx("img",{src:e.img,alt:e.id})}),s.jsxs(l.div,{className:"textContainer",style:{y:i},children:[s.jsx("img",{src:e.icon,alt:e.id}),s.jsx("p",{children:e.desc})]})]})})})},Ke=({mainRef:e})=>{const t=h.useRef(),{scrollYProgress:a}=B({container:e,target:t,layoutEffect:!1,offset:["end end","start start"]}),n=xe(a,{stiffness:100,damping:30});return s.jsxs("div",{className:"review",ref:t,children:[s.jsxs("div",{className:"progress",children:[s.jsx("h6",{children:"Як я працюю"}),s.jsx(l.div,{style:{scaleX:n},className:"progressBar"})]}),Ge.map(i=>s.jsx(Je,{item:i,mainRef:e},i.id))]})};const S={initial:{x:-200,y:10,opacity:0},animate:{x:0,opacity:1,y:0,transition:{duration:1,staggerChildren:.5}}},Qe=()=>{const e=h.useRef(),t=O(e,{margin:"-50px"}),{serviceData:a,loading:n}=oe();return s.jsx("div",{className:"services-container",children:s.jsxs(l.div,{className:"services",variants:S,animate:t&&"animate",initial:"initial",ref:e,whileInView:"animate",children:[s.jsxs(l.div,{className:"textContainer",variants:S,children:[s.jsxs(l.p,{children:["Я фокусуюся на підтримці в досягненні",s.jsx("br",{}),"  ваших цілей. "]}),s.jsx(l.hr,{})]}),s.jsxs(l.div,{className:"titleContainer",variants:S,children:[s.jsxs("div",{className:"title",children:[s.jsx("img",{src:"./img/banana.webp",alt:"people"}),s.jsxs("h2",{children:[s.jsx(l.b,{whileHover:{color:"#0f0a0a"},children:"Унікальні"})," ідеї"]})]}),s.jsxs("div",{className:"title",children:[s.jsxs("h2",{children:[s.jsx(l.b,{whileHover:{color:"#0f0a0a"},children:"для вашого"})," здоров'я"]}),s.jsx("button",{children:"Що робимо?"})]})]}),n?s.jsx("div",{className:"loading",style:{height:"100%"},children:s.jsx("img",{style:{width:"40px"},src:de,alt:"loading"})}):s.jsx(l.div,{className:"listContainer",variants:S,animate:t&&"animate",initial:"initial",ref:e,whileInView:"animate",children:a.map(i=>s.jsxs(l.div,{className:"box",children:[s.jsx("h2",{className:"box-title",children:i.title}),s.jsx(V,{className:"box-btn-container",to:{pathname:`/service/${i.path}`},children:s.jsx("button",{children:"Переглянути"})})]},i.id))})]})})};const j={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},Ze=()=>{const e=h.useRef(),{formRef:t,error:a,success:n,handleSubmit:i,validationSchema:r}=ue(),{register:o,handleSubmit:u,formState:{errors:d}}=fe({resolver:r}),g=O(e,{margin:"-100px"});return h.useEffect(()=>{const c=()=>document.body.style.scrollSnapType="none",f=()=>document.body.style.scrollSnapType="y mandatory",m=document.querySelectorAll("input, textarea");return m.forEach(p=>{p.addEventListener("touchstart",c,{passive:!1}),p.addEventListener("touchend",f,{passive:!1})}),()=>{m.forEach(p=>{p.removeEventListener("touchstart",c,{passive:!1}),p.removeEventListener("touchend",f,{passive:!1})})}},[]),s.jsxs(l.div,{ref:e,className:"contact",variants:j,initial:"initial",whileInView:"animate",children:[s.jsxs(l.div,{className:"textContainer",variants:j,children:[s.jsx(l.h2,{children:"Попрацюємо разом"}),s.jsxs(l.div,{className:"item",variants:j,children:[s.jsx("h3",{children:"E-mail:"}),s.jsx("a",{href:"mailto:katerynakaplunivska@gmail.com",children:"katerynakaplunivska@gmail.com"})]}),s.jsxs(l.div,{className:"item",variants:j,children:[s.jsx("h3",{children:"Telegram:"}),s.jsx("a",{href:"https://t.me/kateryna_kaplunivska",children:"@kateryna_kaplunivska"})]}),s.jsxs(l.div,{className:"item",variants:j,children:[s.jsx("h3",{children:"Instagram:"}),s.jsx("a",{href:"https://www.instagram.com/kateryna_kaplunivska?igsh=NXF5NzBwMHcxczEw",children:"@kateryna_kaplunivska"})]})]}),s.jsxs("div",{className:"formContainer",children:[s.jsx(l.div,{className:"phoneSvg",initial:{opacity:1},whileInView:{opacity:0},transition:{delay:2,duration:1},children:s.jsx("svg",{width:"450px",height:"450px",viewBox:"0 0 32.666 32.666",children:s.jsx(l.path,{strokeWidth:.2,fill:"none",initial:{pathLength:0},animate:g&&{pathLength:1},transition:{duration:3},d:`M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z\r
                        M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0\r
                        C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01\r
                        c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319\r
                        c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529\r
                        c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814\r
                        c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001\r
                        c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459\r
                        c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084\r
                        c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292\r
                        c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095\r
                        l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719\r
                        C32.666,7.326,25.339,0,16.333,0z`})})}),s.jsxs(l.form,{onSubmit:u(c=>i(c)),ref:t,action:"",initial:{opacity:0},whileInView:{opacity:1},transition:{delay:2.5,duration:1},children:[s.jsxs("div",{className:"input-wrapper",children:[s.jsx("input",{type:"text",required:!0,placeholder:"Ім'я",name:"name",id:"name",className:`input ${d&&d.name?"error":""}`,...o("name")}),d&&d.name&&s.jsx("p",{className:"error-message",children:d.name.message})]}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx("input",{type:"email",required:!0,placeholder:"Елетронная пошта",name:"email",id:"email",className:`input ${d&&d.email?"error":""}`,...o("email")}),d&&d.email&&s.jsx("p",{className:"error-message",children:d.email.message})]}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx("textarea",{name:"message",id:"message",rows:"4",placeholder:"Повідомлення",className:`input ${d&&d.message?"error":""}`,...o("message")}),d&&d.message&&s.jsx("p",{className:"error-message",children:d.message.message})]}),s.jsx("button",{type:"submit",disabled:n||a,children:n?"Успішно відправлено":a?"Помилка при відправці":"Відправити"})]})]})]})};const U=({type:e,mainRef:t})=>{const a=h.useRef(),{scrollYProgress:n}=B({container:t,target:a,layoutEffect:!1,offset:["start start","end start"]}),i=C(n,[0,1],["0%","500%"]),r=C(n,[0,1],["0%","100%"]),o=C(n,[0,1],[0,720]);return s.jsxs("div",{className:"parallax",ref:a,style:{background:"linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(226,163,171,1) 100%, rgba(255,255,255,0.9401961468181023) 100%)"},children:[s.jsx(l.h1,{style:{y:i},children:e==="services"?"Послуги? ":"Хто я? "}),s.jsx(l.div,{className:"mountains"}),s.jsx(l.div,{className:"planets",style:{y:r,rotate:o,backgroundImage:`url(${e==="services"?"./img/planets.png":"./img/sun.png"})`}}),s.jsx(l.div,{className:"stars",style:{x:r}})]})};function nt(){const e=h.useRef();return s.jsxs("main",{ref:e,children:[s.jsx(ce,{}),s.jsxs("section",{id:"homepage",children:[s.jsx(le,{}),s.jsx(Xe,{})]}),s.jsx("section",{id:"about",children:s.jsx(U,{type:"reviews",mainRef:e})}),s.jsx("section",{children:s.jsx(qe,{})}),s.jsx(Ke,{id:"reviews",mainRef:e}),s.jsx("section",{children:s.jsx(U,{type:"services",mainRef:e})}),s.jsx("section",{id:"services",children:s.jsx(Qe,{})}),s.jsx("section",{id:"contacts",children:s.jsx(Ze,{})})]})}export{nt as default};
