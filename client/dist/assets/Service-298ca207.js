import{d as l,r as o,j as e}from"./index-fc9815cb.js";import{A as d}from"./Accordions-cadc9f8c.js";import{d as m}from"./dots-loading-586fb599.js";import{u as x}from"./useServiceData-357172ff.js";import{k as a}from"./motion-2170f2e1.js";import"./axios-d16e7a2c.js";const r={initial:{x:-250,opacity:0},animate:{x:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},u=()=>{const{serviceData:t}=x(),{serviceId:c}=l(),n=o.useRef(),i=t.find(s=>s.path===c);return i?e.jsx(a.div,{className:"service",ref:n,variants:r,children:e.jsxs(a.div,{className:"service-container",variants:r,children:[e.jsxs(a.div,{className:"service-textContainer",initial:"initial",whileInView:"animate",variants:r,children:[e.jsx("h2",{className:"service-title",children:i.title}),e.jsx("p",{className:"service-text",children:i.descr}),e.jsxs("ol",{children:[e.jsx("span",{children:"Як проходить"}),i.passing.map(s=>e.jsx("li",{children:s.stage},s.id))]}),e.jsxs("ul",{children:[e.jsx("span",{className:"service-price-title",children:" Вартість: "}),i.prices.map(s=>e.jsx("li",{className:"service-price",children:s.price},s.id))]})]}),e.jsx(d,{data:i.warnings})]})}):e.jsx("div",{className:"loading",style:{height:"100%"},children:e.jsx("img",{style:{width:"40px"},src:m,alt:"loading"})})};export{u as default};