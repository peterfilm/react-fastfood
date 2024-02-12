import "./areas.scss";
import allAreas from "./allAreas";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Areas = () => {
  const cards = allAreas.map((item, index) => <AreaCard key={index} {...item} />);

  return (
    <>
      <Helmet>
        <meta name="description" content={`FAST FOOD - FOOD FROM ALL AREAS OF THE WORLD`} />
        <meta name="keywords" content="Fast Food, Food store, areas, countries"></meta>
        <title>FAST FOOD - FOOD FROM ALL AREAS OF THE WORLD</title>
      </Helmet>
      <section className="areas">
        <div className="container">
          <div className="areas__wrapper">
            <h2 className="title title__black">Areas</h2>
            <p className="areas__text">Explore a diverse array of culinary delights from around the world, offering unparalleled flavors</p>
            <div className="areas__cards">{cards}</div>
          </div>
        </div>
      </section>
    </>
  );
};

const AreaCard = (item) => {
  const [onImg, setOnImg] = useState(false);
  const imgChangeOn = (e) => {
    if (e.target) {
      setOnImg(true);
    }
  };

  const imgChangeOff = (e) => {
    if (e.target) {
      setOnImg(false);
    }
  };

  const link = "/areas/" + item.strArea;

  return (
    <Link to={link}>
      <div
        className={onImg ? "area__wrapper onImg" : "area__wrapper offImg"}
        onMouseOver={(e) => imgChangeOn(e)}
        onMouseLeave={(e) => imgChangeOff(e)}>
        <img src={item.img} className="offImg" alt={item.strArea} />
        <h3 className="area__name">{item.strArea}</h3>
      </div>
    </Link>
  );
};

export default Areas;
