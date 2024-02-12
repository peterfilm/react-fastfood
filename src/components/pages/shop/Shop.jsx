import RandomMeal from "../../randomMeal/RandomMeal";
import Statistics from "../../statistics/Statistics";
import RandomCategory from "../../randomCategory/RandomCategory";
import Review from "../../review/Review";
import Subscribe from "../../subscribe/Subscribe";
import BestSeller from "../../bestSeller/BestSeller";
import { useContext} from "react";
import { FoodContext } from "../../context";
import Preloader from "../../Preloader/Preloader";
import { Helmet } from 'react-helmet';

const Shop = () => {
    const {loading} = useContext(FoodContext)
    return (
        <>
        <Helmet>
        <meta name="description" content={`FAST FOOD - THE BIGGEST FOOD STORE ON THE EARTH`} />
        <meta name="keywords" content={`Fast Food, Food store, main page, index page, meals`}></meta>
        <title>FAST FOOD - THE BIGGEST FOOD STORE ON THE EARTH</title>
        </Helmet>
            {loading ? <Preloader/> : <BestSeller />}
            <RandomMeal />
            <Statistics />
            <RandomCategory />
            <Review />
            <Subscribe />
        </>
    )
}

export default Shop