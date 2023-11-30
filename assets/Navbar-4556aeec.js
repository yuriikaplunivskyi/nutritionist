import{j as s,r}from"./index-ba52eedf.js";import{m as e}from"./motion-8ca11c22.js";const t={open:{transition:{staggeredChildren:.09}},closed:{transition:{staggerChildren:.08,staggerDirection:-1}}},c={open:{y:0,opacity:1},closed:{y:50,opacity:0}},o=()=>{const i=[{english:"homepage",ukrainian:"Головна"},{english:"about",ukrainian:"Про мене"},{english:"reviews",ukrainian:"Як я працюю"},{english:"services",ukrainian:"Послуги"},{english:"contacts",ukrainian:"Контакти"}];return s.jsx(e.div,{className:"links",variants:t,children:i.map((a,n)=>s.jsx("a",{href:`/#${a.english}`,children:s.jsx(e.span,{variants:c,whileHover:{scale:1.1},whileTap:{scale:.9},children:a.ukrainian})},n))})};const l=({setOpen:i})=>s.jsx("button",{onClick:()=>i(a=>!a),children:s.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[s.jsx(e.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),s.jsx(e.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}}}),s.jsx(e.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})}),d={open:{clipPath:"circle(1200px at 50px 50px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(30px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},h=()=>{const[i,a]=r.useState(!1);return s.jsxs(e.div,{className:"sidebar",animate:i?"open":"closed",children:[s.jsx(e.div,{className:"bg",variants:d,children:s.jsx(o,{})}),s.jsx(l,{setOpen:a})]})},g=()=>s.jsxs("header",{className:"navbar",children:[s.jsx(h,{}),s.jsx("div",{className:"wrapper",children:s.jsxs("ul",{className:"social",children:[s.jsx("li",{children:s.jsx("a",{href:"#",children:s.jsx("img",{src:"/facebook.svg",alt:"facebook"})})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:s.jsx("img",{src:"/instagram.svg",alt:"instagram"})})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:s.jsx("img",{src:"/tiktok.svg",alt:"tiktok"})})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:s.jsx("img",{src:"/telegram.svg",alt:"telegram"})})})]})})]});export{g as default};
