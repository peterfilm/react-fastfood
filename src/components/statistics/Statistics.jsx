import './statistics.scss'

const Statistics = () => {
    return (
        <section className='statistics'>
            <div className="container">
                <div className="statistics__wrapper">
                    <h2 className='title title__yellow'>Statistics</h2>
                    <div className="statistics__text subtitle__white_small">Exceptional service, top chefs, diverse menu. Our food stores thrive in multiple outlets across the country.</div>
                    <div className="statistics__info">
                        <div className="statistics__item">
                            <h3 className='statistics__item-digit'>123</h3>
                            <div className="statistics__item-info">Outlets</div>
                        </div>
                        <div className="statistics__item">
                            <h3 className='statistics__item-digit'>100</h3>
                            <div className="statistics__item-info">chef</div>
                        </div>
                        <div className="statistics__item">
                            <h3 className='statistics__item-digit'>300</h3>
                            <div className="statistics__item-info">menu</div>
                        </div>
                        <div className="statistics__item">
                            <h3 className='statistics__item-digit'>30</h3>
                            <div className="statistics__item-info">country</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics