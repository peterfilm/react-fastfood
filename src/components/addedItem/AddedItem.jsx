import './addedItem.scss'
import { useContext } from 'react'
import { FoodContext } from '../context'

const AddedItem = () => {
    const {lastAdded, setShow, clearTimer} = useContext(FoodContext)

    const closeInfo = () => {
        setShow()
        clearTimer()
    }
    return (
        <div className="addedItem">
            <div className="addedItem__close" onClick={closeInfo}>&#x2716;</div>
            <div className='addedItem__text'>{lastAdded} added to basket</div>
        </div>
    )
}

export default AddedItem