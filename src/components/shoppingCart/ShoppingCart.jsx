import "./shoppingCart.scss";
import scart_white from "../../assets/icons/shopping_cart_white.png";
import scart from "../../assets/icons/shopping_cart.png";
import { useContext, useRef } from "react";
import { FoodContext } from "../context";
import { calcScroll } from "../middleware/shoppingMargin";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
  const isMobilePhone = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {!isMobilePhone ? <CompShoppingCart /> : <MobileShoppingCart />}
    </>
  );
};

export default ShoppingCart;

const MobileShoppingCart = () => {
  const { order, setBasketShow, isBasketShow } = useContext(FoodContext);
  const setActive = ({ isActive }) => (isActive ? "active-link" : "nonactive-link");

  const handleBasket = () => {
    setBasketShow()
  }

  const closeBasketAnyway = () => {
    if (isBasketShow) {
      setBasketShow()
    }
  }

  return (
    <div className="shopping__mobile">
      <div className="shopping__mobile-wrapper">
      <nav className="shopping__nav">
                  <ul className="shopping__menu_items">
                    <li className="shopping__menu_item">
                      <NavLink to="/products" className={setActive} onClick={closeBasketAnyway}>
                        Catalogue
                      </NavLink>
                    </li>
                    <li className="shopping__menu_item">
                      <NavLink to="/areas" className={setActive} onClick={closeBasketAnyway}>
                        Areas
                      </NavLink>
                    </li>
                    <li className="shopping__menu_item">
                      <NavLink to="/about" className={setActive} onClick={closeBasketAnyway}>
                        About
                      </NavLink>
                    </li>
                    <li className="shopping__menu_item">
                      <NavLink to="/search" className={setActive} onClick={closeBasketAnyway}>
                        Search
                      </NavLink>
                    </li>
                  </ul>
                </nav>
        
        {order.length === 0 ? (
          <img src={scart_white} className="shopping__mobile-img" alt="Shopping Cart is empty" onClick={handleBasket} />
        ) : (
          <div>
            <div className="shopping__mobile-cart">
              <img src={scart} alt="In your cart" className="shopping__mobile-img"  onClick={handleBasket} />
              <div className="shopping__mobile-number" onClick={handleBasket}>{order.length}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CompShoppingCart = () => {
  const { order, setBasketShow, isBasketShow } = useContext(FoodContext);
  const cart = useRef(null);
  const handleBasket = () => {
    if (!isBasketShow) {
      const scroll = calcScroll();
      document.body.style.marginRight = `${scroll}px`;
      cart.current.style.marginRight = `${scroll}px`;
    } else {
      document.body.style.marginRight = `0px`;
      cart.current.style.marginRight = `0px`;
    }
    setBasketShow();
  };

  return (
    <div ref={cart} className="shopping__cart" onClick={handleBasket}>
      {order.length === 0 ? (
        <img src={scart_white} alt="Shopping Cart is empty" />
      ) : (
        <div>
          <img src={scart} alt="In your cart" />
          <div className="shopping__number">{order.length}</div>
        </div>
      )}
    </div>
  );
};
