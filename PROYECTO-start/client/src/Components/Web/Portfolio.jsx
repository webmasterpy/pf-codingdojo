import React, { useEffect, useState } from "react";
import axios from 'axios';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolio/seis')
            .then(res => {
                //console.log(res.data);
                setPortfolios(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])

    return (
    <>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Cabecera--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- iconos --> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid --> */}
                <div className="row justify-content-center">
                {
                    portfolios.map((portfolio, indice)=>{
                        return (
                            <div className="col-md-6 col-lg-4 mb-5" key={indice}>
                                <p className="text-center" style={{borderBottom:"1px solid #ccc"}}><b>{portfolio.titulo}</b></p>
                                <div className="portfolio-item mx-auto">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={`../assets/portfolio/${portfolio.imagen}`} alt={portfolio.titulo} />
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    </>
    )
}

export default Portfolio