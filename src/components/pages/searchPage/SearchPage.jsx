import "./searchPage.scss";
import "../../Search/search.scss";
import { useState, useEffect } from "react";
import { searchMeal } from "../../api";
import { useNavigate } from "react-router-dom";
import Meal from "../../meal/Meal";
import Preloader from "../../Preloader/Preloader";
import { Helmet } from 'react-helmet';

const SearchPage = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    searchMeal(value)
      .then((data) => {
        setAllMeals(data.meals.slice(0, 24));
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [value, navigate]);

  const cards = allMeals !== null ? allMeals.map((item) => <Meal key={item.idMeal} {...item} />) : [];

  return (
    <>
    <Helmet>
        <meta name="description" content={`FAST FOOD - Search Page. Find your meal`} />
        <meta name="keywords" content={`Fast Food, Food store, search meal, find meal`}></meta>
        <title>FAST FOOD - Search your meal</title>
      </Helmet>
    <section className="searchPage">
      <div className="container">
        <div className="searchPage__wrapper">
          <h2 className="title title__black">Search You favorite meal</h2>

          <div className="search__Area">
            <input className="search__input" type="search" placeholder="Search you Meal" value={value} onChange={(e) => setValue(e.target.value)} />
          </div>

          <div className="searchPage__cards">{loading ? <Preloader /> : cards}</div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SearchPage;
