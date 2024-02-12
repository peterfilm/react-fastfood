import "./oneCategory.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMeals } from "../../api";
import Meal from "../../meal/Meal";
import Preloader from "../../Preloader/Preloader";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import { Helmet } from "react-helmet";

const OneCategory = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const value = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    getAllMeals(value.cat)
      .then((data) => {
        if (!data.meals) {
          navigate("/404");
        }
        setAllMeals(data.meals);
        setFilteredMeals(data.meals);
      })
      .catch((err) => console.log(err));
    setLoading(false);
    //eslint-disable-next-line
  }, []);

  const cards = filteredMeals.map((item) => <Meal key={item.idMeal} {...item} />);

  return (
    <>
      <Helmet>
        <meta name="description" content={`FAST FOOD - All meals of ${value.cat}`} />
        <meta name="keywords" content={`Fast Food, Food store, ${value.cat}`}></meta>
        <title>{`FAST FOOD - ` + value.cat}</title>
      </Helmet>
      {allMeals.length > 0 ? (
        <section className="allMeals">
          <div className="container">
            <h2 className="title title__black">All Meals of {value.cat}</h2>
            <Search setFilteredMeals={setFilteredMeals} allMeals={allMeals} />
            {filteredMeals.length === 0 ? <h3 className="allMeals__nofound">Nothing found</h3> : null}
            {!loading ? <div className="allMeals__wrapper">{cards}</div> : <Preloader />}
          </div>
        </section>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default OneCategory;
