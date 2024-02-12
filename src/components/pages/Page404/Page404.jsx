import './page404.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Page404 = () => {
    return (
        <>
        <Helmet>
        <meta name="description" content={`FAST FOOD - Page not found`} />
        <meta name="keywords" content={`Fast Food, Food store, page not found`}></meta>
        <title>FAST FOOD - Page not found</title>
        </Helmet>
        <section className='error404'>
            <div className="container">
                <div className="error404__wrapper">
                    <div className="error404__title">Page not Found</div>
                    <div className="error404__sub">Please start from <Link to='/'>start page</Link> and try again!</div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Page404