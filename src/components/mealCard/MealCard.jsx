import './mealCard.scss'
import { FoodContext } from '../context'
import { useContext, useRef} from 'react'
import { useNavigate } from 'react-router-dom'

const MealCard = ({id}) => {
    const {categories} = useContext(FoodContext)
    const hoverCard = useRef()


    const handleHover = () => {
        hoverCard.current.className = 'mealCard mealCard__hover'
    }

    const handleBlur = () => {
        hoverCard.current.className = 'mealCard'
    }

    const navigate = useNavigate();

    const handleClick = () => {
        // Change the search query in the URL
        navigate(`/products/${categories[id].strCategory}`);
    };

    const info = categories[id].strCategoryDescription.slice(0, 200)
    return (
        <>
        <div ref={hoverCard} 
                className='mealCard' 
                onMouseOver={handleHover} 
                onMouseLeave={handleBlur}
                onClick={handleClick}
                >
            <img src={categories[id].strCategoryThumb} alt="dish" className='mealCard__img' />
            <h3 className='title title__small'>{categories[id].strCategory}</h3>
            <p>{info.length < 200 ? info : info + '...'}</p>
        </div>
        </>
    )

}
export default MealCard