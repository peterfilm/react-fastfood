import{r as t,a as f,u as h,b as j,j as e}from"./index-1AmNAf7l.js";import{M as u}from"./Meal-1TxPbYXb.js";import{P as n}from"./Preloader-qd3T3-ZA.js";import{S as p}from"./Search-0qSLsqwP.js";import{H as M}from"./Helmet-gSd_iNXg.js";/* empty css               */const _=()=>{const[l,c]=t.useState([]),[o,r]=t.useState([]),[i,m]=t.useState(!0),a=f(),d=h();t.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[]),t.useEffect(()=>{j(a.cat).then(s=>{s.meals||d("/404"),c(s.meals),r(s.meals)}).catch(s=>console.log(s)),m(!1)},[]);const x=o.map(s=>e.jsx(u,{...s},s.idMeal));return e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx("meta",{name:"description",content:`FAST FOOD - All meals of ${a.cat}`}),e.jsx("meta",{name:"keywords",content:`Fast Food, Food store, ${a.cat}`}),e.jsx("title",{children:"FAST FOOD - "+a.cat})]}),l.length>0?e.jsx("section",{className:"allMeals",children:e.jsxs("div",{className:"container",children:[e.jsxs("h2",{className:"title title__black",children:["All Meals of ",a.cat]}),e.jsx(p,{setFilteredMeals:r,allMeals:l}),o.length===0?e.jsx("h3",{className:"allMeals__nofound",children:"Nothing found"}):null,i?e.jsx(n,{}):e.jsx("div",{className:"allMeals__wrapper",children:x})]})}):e.jsx(n,{})]})};export{_ as default};
