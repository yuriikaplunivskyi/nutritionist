import{e as p,j as t,L as r,r as o}from"./index-fc9815cb.js";import{k as e}from"./motion-2170f2e1.js";const d={open:{transition:{staggeredChildren:.09}},closed:{transition:{staggerChildren:.08,staggerDirection:-1}}},c={open:{y:0,opacity:1},closed:{y:50,opacity:0}},h=()=>{const s=[{path:"#homepage",title:"Головна"},{path:"#about",title:"Про мене"},{path:"#reviews",title:"Як я працюю"},{path:"#services",title:"Послуги"},{path:"#contacts",title:"Контакти"}],i=p().pathname==="/";return t.jsx(e.ul,{className:"links",variants:d,children:i?s.map((n,l)=>t.jsx(e.li,{variants:c,whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(r,{to:`${n.path}`,children:n.title})},l)):t.jsx(e.span,{variants:c,whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(r,{to:"/",children:"Головна"})})})};const m=({setOpen:s})=>t.jsx("button",{onClick:()=>s(a=>!a),children:t.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[t.jsx(e.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),t.jsx(e.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}}}),t.jsx(e.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})}),x={open:{clipPath:"circle(1200px at 50px 50px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(30px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},k=()=>{const[s,a]=o.useState(!1);return o.useEffect(()=>{const i=n=>{s&&!n.target.closest(".sidebar")&&a(!1)};return document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}},[s]),t.jsxs(e.div,{className:"sidebar",animate:s?"open":"closed",children:[t.jsx(e.div,{className:"bg",variants:x,children:t.jsx(h,{})}),t.jsx(m,{id:"menu button",setOpen:a})]})},g=""+new URL("../icon/instagram.svg",import.meta.url).href,j=""+new URL("../icon/telegram.svg",import.meta.url).href,v=""+new URL("../icon/tiktok.svg",import.meta.url).href,f=()=>t.jsxs("header",{className:"navbar",children:[t.jsx(k,{}),t.jsx("div",{className:"wrapper",children:t.jsxs("ul",{className:"social",children:[t.jsx("li",{children:t.jsx("a",{href:"https://www.instagram.com/kateryna_kaplunivska?igsh=NXF5NzBwMHcxczEw",children:t.jsx("img",{src:g,alt:"instagram"})})}),t.jsx("li",{children:t.jsx("a",{href:"https://www.tiktok.com/@kateryna_kaplunivska?_t=8jaFid5BF4v&_r=1",children:t.jsx("img",{src:v,alt:"tiktok"})})}),t.jsx("li",{children:t.jsx("a",{href:"https://t.me/kateryna_kaplunivska",children:t.jsx("img",{src:j,alt:"telegram"})})})]})})]});export{f as default};