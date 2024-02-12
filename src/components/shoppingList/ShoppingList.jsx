import "./shoppingList.scss";
import { useContext, useRef } from "react";
import { FoodContext } from "../context";
import { calcScroll } from "../middleware/shoppingMargin";
import { SLBuying } from "./SLBuying";
import { SLProgress } from "./SLProgress";
import { SLSent } from "./SLSent";
import SLFinal from "./SLFinal";
import { useMediaQuery } from "react-responsive";

const ShoppingList = () => {
  const { setBasketShow, isBasketShow, status} = useContext(FoodContext);
  const wrapper = useRef(null);
  const cart = document.querySelector(".shopping__cart");
  const isMobilePhone = useMediaQuery({ maxWidth: 768 });

  const handleWrapper = (e = null) => {
    if (e.target === wrapper.current) {
      if (!isBasketShow) {
        const scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
        cart.style.marginRight = `${scroll}px`;
      } else {
        document.body.style.marginRight = `0px`;
        cart.style.marginRight = `0px`;
      }
      setBasketShow();
    }
  };

  const handleCrest = () => {
    if (!isBasketShow) {
      const scroll = calcScroll();
      document.body.style.marginRight = `${scroll}px`;
      cart.style.marginRight = `${scroll}px`;
    } else {
      document.body.style.marginRight = `0px`;
      cart.style.marginRight = `0px`;
    }
    setBasketShow();
  };

  return (
    <div ref={wrapper} className={isMobilePhone? "shopping__wrapper mobileWrapper" : "shopping__wrapper" } onClick={handleWrapper}>
      <div className={isMobilePhone ? 'shopping__list adaptiveMobile' : 'shopping__list'}>
        {!isMobilePhone ? <div className="shopping__crest" onClick={() => handleCrest()}>
          &#x2716;
        </div> : null}
        <div className={isMobilePhone ? "shopping__title adaptiveYourOrder" : "shopping__title"}>Your Order</div>
        {status === 0 ? <SLBuying /> :
        status === 1 ? <SLProgress/> :
        status === 2 ? <SLSent/> :
        status === 3 ? <SLFinal/> :
        <h2>Error</h2>}
      </div>
    </div>
  );
};

export default ShoppingList;
