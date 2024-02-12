import loading from '../../assets/spinner.gif'
import './spinner.scss'

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className="container">
                <div className="spinner__wrapper">
                <img src={loading} alt="Loading..." className='spinner__img' />
                </div>
            </div>
        </div>
    )
}

export default Spinner