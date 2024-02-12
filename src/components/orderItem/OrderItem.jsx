import './orderItem.scss'
import trash from '../../assets/trash.png'
import { useContext } from 'react'
import { FoodContext } from '../context'
import { Link } from 'react-router-dom'

const OrderItem = ({idMeal, strMeal, strMealThumb, price, quantity, index}) => {
    const {removeFromBasket, incQuantity, decQuantity} = useContext(FoodContext)

    const link = '/meals/' + idMeal
    return (<div className={index % 2 === 0 ? 'orderItem lightBg' : 'orderItem'}>

        <img className='orderItem__img' src={strMealThumb} alt={strMeal} />
        <div className="orderItem__name"><Link to={link} target='_blank'>{strMeal}</Link></div>
        <div className="orderItem__price">{price} RUB</div>
        <div className="orderItem__count">
            <button className='btn orderItem__btn' type="number" onClick = {() => decQuantity(idMeal)}>-</button>
            <div className="orderItem__digit">{quantity}</div>
            <button className='btn orderItem__btn' type="number" onClick = {() => incQuantity(idMeal)}>+</button>
        </div>
        <img className='orderItem__trash' onClick={() => removeFromBasket(idMeal)} src={trash} alt="Удалить" />
    </div>
    )
}

export default OrderItem