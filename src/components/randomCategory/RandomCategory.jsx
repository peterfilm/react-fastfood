import "./randomCategory.scss";
import { useContext } from "react";
import { FoodContext } from "../context";
import Preloader from '../Preloader/Preloader'
import { useNavigate } from "react-router-dom";

const RandomCategory = () => {
  const { categories } = useContext(FoodContext);
  const navigate = useNavigate()

  
  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };

  const randomCategory = getRandomCategory()

  return (
    <section className="randomCatergory">
      <div className="container">
        {!randomCategory ? (
          <Preloader/>
        ) : (
          <div className="randomCategory__wrapper">
            <div className="randomCategory__left">
              <h2 className="title title__yellow">{randomCategory.strCategory}</h2>
              <div className="randomCategory__text subtitle__white_small">{randomCategory.strCategoryDescription.slice(0, 150)}...</div>
              <button className="btn btn_322 randomCategory__btn" onClick={() => navigate(`/products/${randomCategory.strCategory}`)}>Look Category</button>
            </div>
            <div className="randomCategory__right">
              <div className="randomCategory__placeholder">
                <img className="randomCategory__img" src={randomCategory.strCategoryThumb} alt={randomCategory.strCategory} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RandomCategory;
