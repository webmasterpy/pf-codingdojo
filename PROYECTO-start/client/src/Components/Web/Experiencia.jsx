import React, { useEffect, useState } from "react";
import axios from 'axios';

const Experiencia = () => {
    const [experiencias, setExperiencias] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/experiencia/una')
            .then(res => {
                //console.log(res.data.results[0]);
                setExperiencias(res.data.results[0]);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        <section className="page-section text-white mb-0" id="experiencia" style={{ backgroundColor: '#ed7b14' }}>
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">Mi Experiencia</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                { 
                    //experiencias.map((experiencia, indice)=>{
                        <div className="row" >
                            <div className="col-lg-4 ms-auto"><p className="lead">{experiencias.columna_1}</p></div>
                            <div className="col-lg-4 me-auto"><p className="lead">{experiencias.columna_2}</p></div>
                        </div>
                    //})
                }
            </div>
        </section>
        </>
    )
}

export default Experiencia