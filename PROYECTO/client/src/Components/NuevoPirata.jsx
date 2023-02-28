import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const NuevoPirata = (props) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [numChests, setNumChests] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [hookHand, setHookHand] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [pegLeg, setPegLeg] = useState(true);
    const [crewPosition, setCrewPosition] = useState('');

    const navigate = useNavigate();
    const [error, setError] = useState({});

    const [existCaptian, setExistCaptian] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(crewPosition);
        switch(crewPosition){
            case 'Captain':
                console.log("Validacion si existe un Capitan");
                axios.post('http://localhost:8000/api/pirates/captain', 
                { 
                    crewPosition: crewPosition 
                })
                    .then(res => {
                        console.log("Resultados: ");
                        console.log(res.data);
                        if (res.data.results !== null) {
                            console.log("Capitan encontrado");
                            setExistCaptian(true);
                        } else {
                            console.log("Tenemos nuevo capitan");
                            setExistCaptian(false);
                            axios.post('http://localhost:8000/api/pirates/newPirata', {
                                name: name
                                , image: image
                                , numChests: numChests
                                , catchPhrase: catchPhrase
                                , hookHand: hookHand
                                , eyePatch: eyePatch
                                , pegLeg: pegLeg
                                , crewPosition: crewPosition
                            })
                                .then(res => {
                                    console.log("Nuevos resultados creados:");
                                    console.log(res.data);
                                    if (res.data.results) {
                                        navigate('/pirates');
                                    } else {
                                        console.log(res.data.err.errors)
                                        setError(res.data.err.errors);
                                    }
                                })
                                .catch(err => console.log(err.data))
                        }
                    })
                    .catch(err => console.log(err.data))
            break;

            default:
                setExistCaptian(false);
                console.log("Registrando nuevo pirata que no sea un capitan")
                axios.post('http://localhost:8000/api/pirates/newPirata', 
                {
                    name: name
                    , image: image
                    , numChests: numChests
                    , catchPhrase: catchPhrase
                    , hookHand: hookHand
                    , eyePatch: eyePatch
                    , pegLeg: pegLeg
                    , crewPosition: crewPosition
                })
                    .then(res => {
                        console.log("results");
                        console.log(res.data);
                        if (res.data.results) {
                            navigate('/pirates');
                        } else {
                            console.log(res.data.err.errors)
                            setError(res.data.err.errors);
                        }
                    })
                    .catch(err => console.log(err.data))
            break;
        }

        // if (crewPosition === 'Captain') {            
        // } else {
        // }
    }
    
    const viewDashboard = ()=>{
        navigate('/pirates');
    }


    return (
        <>
            {/* NAVEGACION */}
            <div className="fondo-bar">
                <span className="navbar-text text-center">
                    <h2 className="text-white text-center">Add Pirate</h2>
                </span>
                <div className="contenedor-boton" style={{height:"40px"}}>
                    <button className="btn-top" onClick={()=>{ viewDashboard() }}>Crew Board</button>
                </div>
            </div>

            <div className="contenedor-carga">
                <form onSubmit={onSubmitHandler}>
                    <div className="row">
                        <div className="padding-20 col-lg-6 mt-5">
                            <div className="form-group">
                                <label htmlFor="name"><b>Pirate Name</b></label>
                                <input type="text" className="form-control" id="name" name="name" onChange={(evento)=> setName(evento.target.value)} required/>
                                {(name.length < 3 && name !== "") ? <p className="alert alert-danger">Nombre debe tener almenos 3 caracteres</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="image"><b>Image Url</b></label>
                                <input type="text" className="form-control" id="image" name="image" onChange={(evento)=> setImage(evento.target.value)} required/>
                                {(image.length < 3 && image !== "") ? <p className="alert alert-danger">Imagen debe tener almenos 3 caracteres <br/>{error.image && error.image.message}</p> : ""}
                            </div>
                            
                            <div className="form-group mt-4">
                                <label htmlFor="numChests"><b># of Treasure Chests</b></label>
                                <input type="number" className="form-control" id="numChests" name="numChests" onChange={(evento)=> setNumChests(evento.target.value)} required/>
                                {(numChests <0 && numChests !== "") ? <p className="alert alert-danger">Cantidad de Tesoro no puede ser negativo <br/>{error.numChests && error.numChests.message}</p> : ""}
                            </div>
                            
                            <div className="form-group mt-4">
                                <label htmlFor="catchPhrase"><b>Pirate Catch Phrase:</b></label>
                                <input type="text" className="form-control" id="catchPhrase" name="catchPhrase" onChange={(evento)=> setCatchPhrase(evento.target.value)} required/>
                                {(catchPhrase.length < 3 && catchPhrase !== "") ? <p className="alert alert-danger">La frase debe tener almenos 3 caracteres <br/>{error.catchPhrase && error.catchPhrase.message}</p> : ""}
                            </div>
                        </div>

                        <div className="padding-20 col-lg-6 mt-5">
                            <div className="form-group">
                                <label htmlFor="crewPosition"><b>Crew Position:</b></label>
                                <select name="crewPosition" id="crewPosition" className="form-control" onChange={(e)=>setCrewPosition(e.target.value)} >
                                    <option >Select One Crew Position</option>
                                    <option value="Captian">Captian</option>
                                    <option value="Quarter Master">Quarter Master</option>
                                    <option value="First Mate">First Mate</option>
                                    <option value="Boatswain">Boatswain</option>
                                    <option value="Powder Monkey">Powder Monkey</option>
                                </select>
                                {(error.crewPosition) ? <p className="alert alert-danger">{error.crewPosition && error.crewPosition.message}</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <input className="form-check-input" name="pegLeg"  type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg} />
                                <label htmlFor="pegLeg"><b>Peg Leg</b></label>
                                {(error.pegLeg) ? <p className="alert alert-danger">{error.pegLeg && error.pegLeg.message}</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <input className="form-check-input" name="eyePatch"  type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch} />
                                <label htmlFor="eyePatch"><b>Eye Patch</b></label>
                                {(error.eyePatch) ? <p className="alert alert-danger">{error.eyePatch && error.eyePatch.message}</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <input className="form-check-input" name="hookHand" type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={hookHand} />
                                <label htmlFor="hookHand"><b>Hook Hand</b></label>
                                {(error.hookHand) ? <p className="alert alert-danger">{error.hookHand && error.hookHand.message}</p> : ""}
                            </div>

                            <hr/>
                            <div className="form-group mt-5 text-center">
                                <input type="submit" value="Add Pirate" className="btn btn-primary" />
                            </div>
                            <div className="col-12">
                                {/* {
                                    const listItems = error.map((lista) =>
                                        <li>{lista}</li>
                                    );
                                } */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default NuevoPirata