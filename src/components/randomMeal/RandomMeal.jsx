import './randomMeal.scss'
import { useContext, useEffect } from 'react'
import { FoodContext } from '../context'
import { getRandomMeal } from '../api'
import { useNavigate } from 'react-router-dom'

const RandomMeal = () => {
    const {randomMeal, setRandomMeals} = useContext(FoodContext)
    const navigate = useNavigate()

    useEffect(() => {
        getRandomMeal().then(data => setRandomMeals(data))
                        .catch(err => console.log(err))
                        //eslint-disable-next-line
    },[])

    return (

        <section className='randomMeal'>
            <div className="container">
                <div className="randomMeal__main">
                    <div className="randomMeal__left"><img className='randomMeal__img' src={randomMeal.strMealThumb} alt={randomMeal.strMeal}/></div>
                    <div className="randomMeal__right">
                        <h2 className='title title__yellow'>{randomMeal.strMeal}</h2>
                        <p className='suntitle subtitle__white_small'>{randomMeal.strInstructions ? randomMeal.strInstructions.slice(0, 150) : 'Loading...'}</p>
                        <button className='btn btn_322' onClick={() => navigate(`/meals/${randomMeal.idMeal}`)}>Look for detail</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RandomMeal