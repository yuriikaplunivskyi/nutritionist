import{r as m,j as i,m as n}from"./index-38866a8f.js";import{u}from"./use-in-view-5aebb96f.js";import"./resolve-element-de8ecddd.js";const x=a=>{const[s,c]=m.useState(0);let o=0;const g=t=>{o=t.touches[0].clientX},h=t=>{const e=t.touches[0].clientX,d=o-e;d>50?l():d<-50&&r()},l=()=>{c(t=>t===a.slides.length-1?0:t+1)},r=()=>{c(t=>t===0?a.slides.length-1:t-1)};return i.jsxs("div",{className:"slider carousel-container",onTouchStart:g,onTouchMove:h,children:[i.jsx("button",{className:"prev-button",onClick:r,children:"❮"}),i.jsx("div",{className:"carousel-slideCard",children:a.slides.map((t,e)=>i.jsxs(n.div,{className:`slide ${s===e?"active":""}`,initial:{opacity:0,x:300},animate:{opacity:s===e?1:0,x:s===e?0:e>s?300:-300,y:s===e?0:(e>s,50)},exit:{opacity:0,x:e>s?300:-300},transition:{duration:.5},children:[i.jsx("div",{className:"slide-imgContainer",children:i.jsx("img",{src:t.img,alt:`Slide ${e}`})}),i.jsxs("div",{className:"slide-textContainer",children:[i.jsx("span",{children:t.school}),i.jsxs("h6",{children:['"',t.title,'"']})]})]},t.id))}),i.jsx("button",{className:"next-button",onClick:l,children:"❯"})]})},p=[{id:1,img:"./img/certificates/nodiet.png",school:"Nodiet school",title:"Нутриціологія"},{id:2,img:"./img/certificates/iFit-group-fit.png",school:"iFIT",title:"Інструктор групових занять"},{id:3,img:"./img/certificates/fa-bodyMobility.png",school:"Fitness academy",title:"Body Mobility"},{id:4,img:"./img/certificates/fa-dprpm.png",school:"Fitness academy",title:"Діагностика, профілактика та вирішення проблеми м'язового дисбалансу"},{id:5,img:"./img/certificates/fa-func_training.png",school:"Fitness academy",title:"Функціональний тренінг/НІІТ"},{id:6,img:"./img/certificates/fa-pumpIt.png",school:"Fitness academy",title:"Силове тренування PUMP IT UP & TABS"},{id:7,img:"./img/certificates/fa-master-trainer_2l.png",school:"Fitness academy",title:"Майстер тренер тренажерної зали (рівень ІІ)"},{id:8,img:"./img/certificates/fa-master-trainer_3l.png",school:"Fitness academy",title:"Майстер тренер тренажерної зали (рівень ІІІ)"}],f={initial:{x:-200,y:10,opacity:0},animate:{x:0,opacity:1,y:0,transition:{duration:1,staggerChildren:.5}}},b=()=>{const a=m.useRef(),s=u(a,{margin:"-50px"});return i.jsx("div",{className:"about",children:i.jsxs(n.div,{className:"wrapper",variants:f,animate:s&&"animate",initial:"initial",ref:a,whileInView:"animate",children:[i.jsx(n.div,{className:"about-imgContainer",children:i.jsx(n.img,{src:"./img/whoami.jpg",alt:"eee"})}),i.jsx(x,{slides:p}),i.jsx(n.h3,{className:"about-title",children:"Я сертифікований фітнес-тренер та нутриціолог"}),i.jsx(n.p,{className:"about-text",children:"Вже більше 2-х років я прививаю любов до спорту та збалансованого харчуванню своїм клієнтам. допомагаю людям робити здоровий вибір у харчуванні та житті, набувати фігури мрії, повертати енергію та значно покращувати здоров'я. Я можу вам показати великі можливості збалансованого харчування, а не обмеження, привити любов до фізичної активності без болей і втоми"})]})})};export{b as default};