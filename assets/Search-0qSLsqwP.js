import{r as c,j as t}from"./index-1AmNAf7l.js";/* empty css               */const m=({setFilteredMeals:s,allMeals:r})=>{const[e,n]=c.useState("");c.useEffect(()=>{o()},[e]);const o=()=>{if(!e)s(r);else{const a=new RegExp(e,"gi"),p=r.filter(i=>i.strMeal.match(a));s(p)}},h=a=>{n(a.target.value)};return t.jsx(t.Fragment,{children:t.jsx("div",{className:"search__Area",children:t.jsx("input",{className:"search__input",type:"search",placeholder:"Search you Meal",value:e,onChange:h})})})};export{m as S};
