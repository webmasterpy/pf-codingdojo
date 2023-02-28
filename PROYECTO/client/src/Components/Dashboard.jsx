import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Dashboard = (props) => {
    // const [logeado, setLogeado] = useState(false);
    const [pirata, setPirata] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/all')
            .then(res => {
                console.log(res.data);
                setPirata(res.data.results);})
            .catch(err => console.log(err))
    }, [])

    const onHandleDelete = (idPirata) => {
        axios.delete(`http://localhost:8000/api/pirates/${idPirata}/delete`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setPirata(pirata.filter(pirata => pirata._id !== idPirata));
    }

    const viewPirate = (id)=>{
        navigate(`/pirate/${id}`);
    }

    const addPirate = ()=>{
        navigate(`/pirate/new/`);
    }

    return (
        <>
            {/* NAVEGACION */}
            <div className="fondo-bar">
                <span className="navbar-text text-center">
                    <h2 className="text-white text-center">Pirate Crew</h2>
                </span>
                <div className="contenedor-boton" style={{height:"40px"}}>
                    <button className="btn-top" onClick={()=>{ addPirate() }}>Add Pirate</button>
                </div>
            </div>

            {/* DETALLE */}
            {
                pirata.map((personaje, indice)=>{
                    return(
                        
                        <div className="listado-piratas" key={indice}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contenedor-imagen">
                                        <img src={personaje.image}/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <h2 className="text-center mt-5">{personaje.name}</h2>
                                    <div className="text-center mt-5">
                                        <button className="btn btn-primary" onClick={()=>{viewPirate(personaje._id)}}>View Pirate</button>
                                        {" "}
                                        <button className="btn btn-danger" onClick={()=>{window.confirm("Esta seguro que desea borrar este pirata?") && onHandleDelete(personaje._id)}}>Walk the Plank</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
     )
}

export default Dashboard