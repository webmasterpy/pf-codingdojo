import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const VerPirata = () => {

    const [pirata, setPirata] = useState({});
    const [pegLeg, setPegLeg] = useState(false);
    const [eyePatch, setEyePatch] = useState(false);
    const [hookHand, setHookHand] = useState(false);
    const navigate = useNavigate();
    const { idPirata } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${idPirata}`)
            .then(res => {
                setPirata(res.data.results);
                setPegLeg(res.data.results.pegLeg);
                setEyePatch(res.data.results.eyePatch);
                setHookHand(res.data.results.hookHand);
                console.log(res.data.results)
            
            })
            .catch(err => console.log(err))
    }, [])


    const changePegLeg = (turn) => {
        axios.patch(`http://localhost:8000/api/pirates/${idPirata}/edit`, 
            {
                pegLeg: turn
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setPegLeg(turn);
    }

    const changeHookHand = (turn) => {
        axios.patch(`http://localhost:8000/api/pirates/${idPirata}/edit`, 
            {
                hookHand: turn
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setHookHand(turn);
    }

    const changEyePatch = (turn) => {
        axios.patch(`http://localhost:8000/api/pirates/${idPirata}/edit`, 
            {
                eyePatch: turn
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setEyePatch(turn);
    }

    const viewDashboard = ()=>{
        navigate('/pirates');
    }

    return (
        <>
            {/* NAVEGACION */}
            <div className="fondo-bar">
                <span className="navbar-text text-center">
                    <h2 className="text-white text-center">{pirata.name}</h2>
                </span>
                <div className="contenedor-boton" style={{height:"40px"}}>
                    <button className="btn-top" onClick={()=>{ viewDashboard() }}>Go to Dashboard</button>
                </div>
            </div>

            {/* DETALLE */}
            <div className="contenedor-detalle">
                <div className="row">
                    <div className="padding-20 col-lg-6 mt-5 text-center">
                        <div className="contenedor-imagen-detalle mx-auto">
                            <img src={pirata.image} alt={pirata.name}/>
                        </div>
                        <h2 className="text-center" style={{width:"100%"}}>"{pirata.catchPhrase}"</h2>
                    </div>
                    <div className="padding-20 bordes col-6 mt-5">
                        <div className="contenedor-about">
                            <h3 className="text-center linea-bottom">About</h3>
                            <div className="lista-items">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td>Position</td>
                                            <td>{pirata.crewPosition}</td>
                                        </tr>
                                        <tr>
                                            <td>Teasures</td>
                                            <td>{pirata.numChests}</td>
                                        </tr>
                                        <tr>
                                            <td>Peg Leg</td>
                                            <td>
                                                <div className="ordenado">
                                                    <div>
                                                        {pegLeg ? 'Yes' : 'No'} {" "}
                                                    </div>
                                                    <div>
                                                        <input 
                                                            name="" 
                                                            onClick={()=>changePegLeg(pegLeg? false : true)} 
                                                            className={pegLeg ? `btn btn-danger mi-boton` : `btn btn-success mi-boton`}
                                                            value={pegLeg ? 'No' : 'Yes'}
                                                            type="button"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Eye Patch</td>
                                            <td>
                                                <div className="ordenado">
                                                    <div>
                                                        {eyePatch ? 'Yes' : 'No'} {" "}
                                                    </div>
                                                    <div>
                                                        <input 
                                                            name="" 
                                                            onClick={()=>changEyePatch(eyePatch? false : true)} 
                                                            className={eyePatch ? `btn btn-danger mi-boton` : `btn btn-success mi-boton`}
                                                            value={eyePatch ? 'No' : 'Yes'}
                                                            type="button"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td>Hook Hand</td>
                                            <td>
                                                <div className="ordenado">
                                                    <div>
                                                        {hookHand ? 'Yes' : 'No'} {" "}
                                                    </div>
                                                    <div>
                                                        <input 
                                                            name="" 
                                                            onClick={()=>changeHookHand(hookHand? false : true)} 
                                                            className={hookHand ? `btn btn-danger mi-boton` : `btn btn-success mi-boton`}
                                                            value={hookHand ? 'No' : 'Yes'}
                                                            type="button"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerPirata