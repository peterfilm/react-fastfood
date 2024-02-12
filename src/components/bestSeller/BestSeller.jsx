import './bestSeller.scss'
import MealCard from '../mealCard/MealCard'
import { useContext } from 'react'
import { FoodContext } from '../context'

const BestSeller = () => {
    const {categories} = useContext(FoodContext)

    

    const cards = categories.slice(0, 3).map((item, index) => <MealCard key={index} id = {index}/>)
    return (
        <section className="bestSeller">
            <div className="container">
                <h2 className='title title__black'>Best Seller</h2>
                <div className="bestSeller__text subtitle subtitle__black">Savor exquisite flavors with our finest dishes. Culinary perfection awaits you at our exceptional food store.</div>
                <div className="bestSeller__cards">
                    {cards}
                </div>
            </div>
        </section>
    )
}

export default BestSeller