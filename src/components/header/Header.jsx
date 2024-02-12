import "./header.scss";
import logo from "../../assets/logo.png";
import looper from "../../assets/icons/looper.png";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import ShoppingList from "../../pages/ShoppingList/ShoppingList";
import { useContext, useEffect } from "react";
import { FoodContext } from "../context";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import AddedItem from "../addedItem/addedItem";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const { isBasketShow } = useContext(FoodContext);
  const location = useLocation();
  const setActive = ({ isActive }) => (isActive ? "active-link" : "nonactive-link");
  const { setMeals, showAdded } = useContext(FoodContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then((data) => setMeals(data.categories))
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {isBasketShow ? <ShoppingList /> : null}
      <ShoppingCart />
      <header className="header">
        <div className="container">
          <div className={location.pathname === "/" ? "header__main header__full" : "header__main header__small"}>
            <div className="header__menu">
              <div className="header__logo" onClick={() => navigate("/")}>
                <img src={logo} alt="Logo of FAST FOOD" />
              </div>
              {!isTabletOrMobile ? (
                <nav className="header__nav">
                  <ul className="header__menu_items">
                    <li className="header__menu_item">
                      <NavLink to="/" className={setActive}>
                        Home
                      </NavLink>
                    </li>
                    <li className="header__menu_item">
                      <NavLink to="/products" className={setActive}>
                        Catalogue
                      </NavLink>
                    </li>
                    <li className="header__menu_item">
                      <NavLink to="/areas" className={setActive}>
                        Areas
                      </NavLink>
                    </li>
                    <li className="header__menu_item">
                      <NavLink to="/about" className={setActive}>
                        About
                      </NavLink>
                    </li>
                    <li className="header__menu_item">
                      <NavLink to="/search" className={setActive}>
                        <img className="header__menu_loop" src={looper} alt="Search your meal" />
                        Search Meal
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              ) : null}
            </div>
            {location.pathname === "/" ? (
              <div className="header__info">
                <div className="header__title">
                  <h1 className="main_title">Fast Food</h1>
                  <div className="subtitle subtitle__white_big">
                    Delight your taste buds with our premium food selection. Quality ingredients, exceptional flavors — your culinary journey begins
                    here.
                  </div>
                  <button className="btn btn_245" onClick={() => navigate("/products")}>
                    Order now
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>
      {showAdded ? <AddedItem /> : null}
    </>
  );
};

export default Header;
