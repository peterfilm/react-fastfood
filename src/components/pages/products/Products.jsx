import './products.scss'
import { useContext, useEffect} from 'react'
import { FoodContext } from '../../context'
import Preloader from '../../Preloader/Preloader'
import MealCard from '../../mealCard/MealCard'
import { Helmet } from 'react-helmet';

const Products = () => {
    const {loading, categories} = useContext(FoodContext)
    const cards = categories.map((item, index) => <MealCard key={index} id = {index}/>)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
        <Helmet>
        <meta name="description" content={`FAST FOOD - All Categories`} />
        <meta name="keywords" content={`Fast Food, Food store, all categories, all meals`}></meta>
        <title>FAST FOOD - All Categories</title>
        </Helmet>
        <section className="products">
            <div className="container">
            <h2 className='title title__black'>All Categories</h2>
                <div className="products__wrapper">
                {loading ? <Preloader/> : cards}
                </div>
            </div>
        </section>
        </>
    )
}

export default Products