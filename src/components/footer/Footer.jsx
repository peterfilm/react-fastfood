import './footer.scss'
import insta from '../../assets/icons/instagram.png'
import fbook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'
import whatsApp from '../../assets/icons/whatsApp.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    const setActive = ({ isActive }) => (isActive ? "active-link" : "nonactive-link");
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__info">
                        <h2 className='footer__title'><NavLink to="/" className={setActive}>FAST FOOD SERVICE</NavLink></h2>
                        <div className="footer__text">Indulge in a world of flavors! Your favorite food store – Subscribe for exclusive offers and updates.</div>
                    </div>

                    <nav className='footer__nav'>
                                <ul className='footer__menu_items'>
                                    <li className='footer__menu_item'><NavLink to="/products" className={setActive}>Catalogue</NavLink></li>
                                    <li className='footer__menu_item'><NavLink to="/areas" className={setActive}>Areas</NavLink></li>
                                    <li className='footer__menu_item'><NavLink to="/about" className={setActive}>About</NavLink></li>
                                </ul>
                            </nav>

                    <div className="footer__contact">
                        Contact us
                        <div className="footer__soc">
                            <a href="#"><img className='footer__soc-item' src={insta} alt="Instagram" /></a>
                            <a href="#"><img className='footer__soc-item' src={fbook} alt="Facebook" /></a>
                            <a href="#"><img className='footer__soc-item' src={twitter} alt="Twitter" /></a>
                            <a href="#"><img className='footer__soc-item' src={whatsApp} alt="Whatsapp" /></a>
                        </div>
                    </div>
                </div>
                    <div className="footer__copyright"><p>Design by</p><Link to='https://freepik.com' target='_blank'>Freepik.com</Link><p>. Front-end by</p> <Link to='https://github.com/peterfilm' target='_blank'>Peterfilm</Link></div>
            </div>
        </section>
    )
}

export default Footer