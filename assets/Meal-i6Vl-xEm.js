import{r as d,F as j,u as p,j as e}from"./index-cmrXGz81.js";const T=i=>{const{strMeal:s,strMealThumb:r,idMeal:t}=i,{addToBasket:_,setTimer:h,setShow:n,clearTimer:c,setLastAdded:m,showAdded:u}=d.useContext(j);let o=t.replace("0","5").slice(2);const l=d.useRef("meal"),x=()=>{l.current.className="meal meal__hover"},N=()=>{l.current.className="meal"},b=()=>{u?(c(),m(s)):(n(),m(s)),h(setTimeout(()=>{n(),c()},5e3))},g=p(),M=a=>{a.target&&(a.target.className!=="btn meal__btn"?g(`/meals/${t}`):(a.target.className="meal__btn added",setTimeout(()=>{a.target.className="btn meal__btn"},1e3),b(),_({idMeal:t,strMeal:s,strMealThumb:r,price:o})))};return e.jsx(e.Fragment,{children:e.jsxs("div",{ref:l,className:"meal",onMouseOver:x,onMouseLeave:N,onClick:a=>M(a),children:[e.jsx("img",{src:r,alt:s,className:"meal__img"}),e.jsx("h3",{className:"meal__title",children:s}),e.jsxs("p",{className:"meal__price",children:[o," RUB"]}),e.jsx("button",{className:"btn meal__btn",children:"Add To Basket"})]})})};export{T as M};
