import{r as o,F as m,u as d,j as e}from"./index-cmrXGz81.js";const h=({id:s})=>{const{categories:a}=o.useContext(m),r=o.useRef(),n=()=>{r.current.className="mealCard mealCard__hover"},l=()=>{r.current.className="mealCard"},c=d(),i=()=>{c(`/products/${a[s].strCategory}`)},t=a[s].strCategoryDescription.slice(0,200);return e.jsx(e.Fragment,{children:e.jsxs("div",{ref:r,className:"mealCard",onMouseOver:n,onMouseLeave:l,onClick:i,children:[e.jsx("img",{src:a[s].strCategoryThumb,alt:"dish",className:"mealCard__img"}),e.jsx("h3",{className:"title title__small",children:a[s].strCategory}),e.jsx("p",{children:t.length<200?t:t+"..."})]})})};export{h as M};