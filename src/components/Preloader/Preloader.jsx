import preloader from '../../assets/cooking_preloader.gif'
import './preloader.scss'

const Preloader = () => {
    return (
        <div className="container">
            <div className="preloader"><img src={preloader} alt="Preloader" /></div>
        </div>
    )
}

export default Preloader