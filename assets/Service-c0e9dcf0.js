import{r as a,j as s,u as t,N as l}from"./index-7f029cad.js";const o=({data:n})=>{const[e,i]=a.useState(null),r=c=>{i(c===e?null:c)};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"accordion",children:[s.jsxs("h2",{className:"accordion-header",children:[s.jsx("span",{children:"✓"}),"Кому підходить?"]}),n.length?n.map(c=>s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:"accordion-title",onClick:()=>r(c.id),children:[s.jsx("div",{children:c.title}),s.jsx("button",{className:"accordion-btn",children:c.id===e?"➖":"➕"})]}),s.jsx("div",{className:"accordion-content",style:{maxHeight:c.id===e?"300px":"0"},children:s.jsx("p",{children:c.content})})]},c.id)):console.log("error data accordions")]})})};const x=()=>{const{state:n}=t(),e=n.selectedService;return!e||!e.passing?s.jsx(l,{to:"/404"}):s.jsx("div",{className:"service",children:s.jsxs("div",{className:"service-container",children:[s.jsxs("div",{className:"service-textContainer",children:[s.jsx("h2",{className:"service-title",children:e.title}),s.jsx("img",{className:"service-icon",src:e.icon,alt:`"icon" ${e.title}`}),s.jsx("p",{className:"service-text",children:e.content}),s.jsxs("ol",{children:[s.jsx("span",{children:"Як проходить"}),e.passing.map(i=>s.jsx("li",{children:i.option},i.id))]}),s.jsxs("ul",{children:[s.jsx("span",{className:"service-price-title",children:" Вартість: "}),e.prices.map(i=>s.jsx("li",{className:"service-price",children:i.price},i.id))]})]}),s.jsx(o,{data:e.warnings})]})})};export{x as default};