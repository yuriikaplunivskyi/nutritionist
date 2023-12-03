import{r as a,M as p,i as g,a as b,f as m,b as v,u as x,j as e,m as c}from"./index-a7554b61.js";import{u as j,a as f,b as h}from"./use-scroll-ff5b02a3.js";import"./resolve-element-c78fd88b.js";function y(s,i={}){const{isStatic:n}=a.useContext(p),t=a.useRef(null),o=j(g(s)?s.get():s),u=()=>{t.current&&t.current.stop()};return a.useInsertionEffect(()=>o.attach((r,l)=>{if(n)return l(r);if(u(),t.current=b({keyframes:[o.get(),r],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...i,onUpdate:l}),!m.isProcessing){const d=performance.now()-m.timestamp;d<30&&(t.current.time=v(d))}return o.get()},u),[JSON.stringify(i)]),x(()=>{if(g(s))return s.on("change",r=>o.set(parseFloat(r)))},[o]),o}const P=[{id:1,icon:"./icon/about/profile.svg",img:"./img/about/about-1.JPG",desc:"Ви заповнюєте анкету та ведете щоденник харчування протягом 3-5 днів."},{id:2,icon:"./icon/about/consultation.svg",img:"./img/about/about-2.JPG",desc:"Ми проводимо першу консультацію, де обговорюємо  історію вашого схуднення, оцінюємо рівень активності,  та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без зусиль та заборон."},{id:3,icon:"./icon/about/advice.svg",img:"./img/about/about-3.JPG",desc:"Я розробляю вам рекомендації, які враховують ваші потреби, стан здоров'я та особливості життєвого стилю. Процес може зайняти 2-3 дні. "},{id:4,icon:"./icon/about/no-bads.svg",img:"./img/about/about-4.JPG",desc:"Ніяких дієтичних добавок, БАДів та аналізів не призначаю, адже їх має призначати лише ваш лікар, не забороняю їсти улюблені продукти, солодке, їсти глютен, лактозу (якщо для цього не має рекомендацій від лікаря), не змушую рахувати калорії."},{id:5,icon:"./icon/about/looking.svg",img:"./img/about/about-5.JPG",desc:"Ви дотримуєтесь моїх рекомендацій, скидаєте на перевірку звіти по харчуванню. Ми розбираємо кожний незрозумілий момент і робимо корективи в процесі співпраці, аби досягти бажаного результату. Паралельно ви отримуєте знання про харчування, які в подальшому допоможуть вам самостійно керувати своїм раціоном. "},{id:6,icon:"./icon/about/growth.svg",img:"./img/about/about-6.JPG",desc:"Пам'ятайте, що результат на 99% залежить від вашої віддачі. Я не змушую вас їсти, звітувати і змінюватися, якщо ви цього самі не хочете. "}],N=({item:s})=>{const i=a.useRef(),{scrollYProgress:n}=f({target:i}),t=h(n,[0,1],[-300,300]);return e.jsx("section",{id:"reviews",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("div",{className:"imageContainer",ref:i,children:e.jsx("img",{src:s.img,alt:s.id})}),e.jsxs(c.div,{className:"textContainer",style:{y:t},children:[e.jsx(c.img,{src:s.icon,alt:s.id}),e.jsx("p",{children:s.desc})]})]})})})},G=()=>{const s=a.useRef(),{scrollYProgress:i}=f({target:s,offset:["end end","start start"]}),n=y(i,{stiffness:100,damping:30});return e.jsxs("div",{className:"review",ref:s,children:[e.jsxs("div",{className:"progress",children:[e.jsx("h6",{children:"Як я працюю"}),e.jsx(c.div,{style:{scaleX:n},className:"progressBar"})]}),P.map(t=>e.jsx(N,{item:t},t.id))]})};export{G as default};
