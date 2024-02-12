import "./oneMeal.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback, useContext } from "react";
import { getOneMeal, getAllMeals } from "../../api";
import Preloader from "../../Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import sample from "../../middleware/randomSample";
import Meal from "../../meal/Meal";
import { FoodContext } from "../../context";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";

const OneMeal = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState({});
  const value = useParams();
  const navigate = useNavigate();
  const { idMeal, strMeal, strMealThumb } = meal;
  const smallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const randomMeals = useCallback(
    sample(
      allMeals.filter((item) => item.idMeal != idMeal),
      4
    ),
    [allMeals]
  );
  const { addToBasket, setTimer, setShow, clearTimer, setLastAdded, showAdded } = useContext(FoodContext);
  const price = meal.idMeal ? meal.idMeal.replace("0", "5").slice(2) : null;

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    getOneMeal(value.id)
      .then((data) => {
        if (!data.meals) {
          navigate("/404");
        }
        setMeal(data.meals[0]);
      })
      .catch((err) => console.log(err));
    setLoading(false);
    //eslint-disable-next-line
  }, [value]);

  useEffect(() => {
    if (meal.idMeal) {
      getAllMeals(meal.strCategory)
        .then((data) => {
          if (!data.meals) {
            navigate("/404");
          }
          setAllMeals(data.meals);
        })
        .catch((err) => console.log(err));
    }
    //eslint-disable-next-line
  }, [meal]);

  const handleAdd = (e) => {
    e.target.className = "mealInfo__btn mealInfo__added";
    setTimeout(() => {
      e.target.className = "btn mealInfo__btn";
    }, 1000);
    handleAdded();
    addToBasket({ idMeal, strMeal, strMealThumb, price });
  };

  const cards = randomMeals.map((item) => <Meal key={item.idMeal} {...item} />);

  return (
    <>
      <Helmet>
        <meta name="description" content={`FAST FOOD - ${meal.strMeal}`} />
        <meta name="keywords" content={`Fast Food, Food store, ${meal.strMeal}`}></meta>
        <title>{`FAST FOOD - ` + meal.strMeal}</title>
      </Helmet>
      <section className="mealInfo">
        <div className="container">
          {!loading ? (
            <div className="mealInfo__wrapper">
              <div className="mealInfo__card">
                {smallScreen ? <h2 className="mealInfo__title title title__black">{meal.strMeal}</h2> : null}
                <img className="mealInfo__img" src={meal.strMealThumb} alt={meal.strMeal} />

                <div className="mealInfo__card-info">
                  {!smallScreen ? <h2 className="title title__black mealInfo__title">{meal.strMeal}</h2> : null}
                  {meal.strArea ? (
                    <div className="mealInfo__kitchen">
                      <span>Kitchen:</span> {meal.strArea}
                    </div>
                  ) : null}
                  <div className="mealInfo__about">{meal.strInstructions}</div>
                  <div className="mealInfo__price">
                    <span>PRICE:</span> {price} RUB
                  </div>
                  <button className="mealInfo__btn btn" onClick={(e) => handleAdd(e)}>
                    Add to Basket!
                  </button>
                </div>
              </div>
              <div className="mealInfo__randomForm">
                <div className="mealInfo__titleRandom title title__black">Try other dishes</div>
                <div className="mealInfo__randomCards">{cards}</div>
              </div>
            </div>
          ) : (
            <Preloader />
          )}
        </div>
      </section>
    </>
  );
};

export default OneMeal;
