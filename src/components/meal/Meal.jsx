import "./meal.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FoodContext } from "../context";

const Meal = (props) => {
  const { strMeal, strMealThumb, idMeal: idMealCard } = props;
  const { addToBasket, setTimer, setShow, clearTimer, setLastAdded, showAdded } = useContext(FoodContext);

  let price = idMealCard.replace("0", "5").slice(2);
  const hoverCard = useRef('meal');

  const handleHover = () => {
    hoverCard.current.className = "meal meal__hover";
  };

  const handleBlur = () => {
    hoverCard.current.className = "meal";
  };

  const handleAdded = () => {
    if (showAdded) {
      clearTimer();
      setLastAdded(strMeal);
    } else {
      setShow();
      setLastAdded(strMeal);
    }
    setTimer(
      setTimeout(() => {
        setShow();
        clearTimer();
      }, 5000)
    );
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target) {
      if (e.target.className !== "btn meal__btn") {
        navigate(`/meals/${idMealCard}`)
      } else {
        e.target.className = "meal__btn added";
        setTimeout(() => {
          e.target.className = "btn meal__btn";
        }, 1000);
        handleAdded();
        addToBasket({ idMeal: idMealCard, strMeal, strMealThumb, price });
      }
    }
  };

  return (
    <>
      <div ref={hoverCard} className="meal" onMouseOver={handleHover} onMouseLeave={handleBlur} onClick={(e) => handleClick(e)}>
        <img src={strMealThumb} alt={strMeal} className="meal__img" />
        <h3 className="meal__title">{strMeal}</h3>
        <p className="meal__price">{price} RUB</p>
        <button className="btn meal__btn">Add To Basket</button>
      </div>
    </>
  );
};
export default Meal;
