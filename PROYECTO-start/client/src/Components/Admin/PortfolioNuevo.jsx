import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const PortfolioNuevo = () => {
    const [titulo, setTitulo] = useState('');
    const [imagen, setImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');
    

    const navigate = useNavigate();
    const [error, setError] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Registrando nuevo Portfolio")
        axios.post('http://localhost:8000/api/portfolio/nuevo', 
        {
            titulo: titulo
            , imagen: imagen
            , descripcion: descripcion
        })
            .then(res => {
                console.log("results");
                console.log(res.data);
                if (res.data.results) {
                    navigate('/admin/portfolio');
                } else {
                    console.log(res.data.err.errors)
                    setError(res.data.err.errors);
                }
            })
            .catch(err => console.log(err.data))
    }
    
    const navegar = (url)=>{
        navigate(url);
    }

    return (
        <>
        <h3 className="text-center mt-5">Agregar Portfolio</h3>
        <form onSubmit={onSubmitHandler} className="formulario">
            <div className="row">
                <div className="padding-20 col-lg-12 mt-4">
                    <div className="form-group">
                        <label htmlFor="titulo"><b>Titulo Portfolio</b></label>
                        <input type="text" className="form-control" id="titulo" name="titulo" onChange={(evento)=> setTitulo(evento.target.value)} required/>
                        {(titulo.length < 3 && titulo !== "") ? <p className="alert alert-danger">Titulo debe tener almenos 3 caracteres</p> : ""}
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="imagen"><b>Image Url</b></label>
                        <input type="text" className="form-control" id="imagen" name="imagen" onChange={(evento)=> setImagen(evento.target.value)} required/>
                        {(imagen.length < 3 && imagen !== "") ? <p className="alert alert-danger">Imagen debe tener almenos 3 caracteres <br/>{error.imagen && error.imagen.message}</p> : ""}
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="imagen"><b>Descripcion</b></label>
                        <textarea  className="form-control" id="descripcion" name="descripcion" onChange={(evento)=> setDescripcion(evento.target.value)}></textarea>
                        {(descripcion.length < 30 && imagen !== "") ? <p className="alert alert-danger">Imagen debe tener almenos 30 caracteres <br/>{error.descripcion && error.descripcion.message}</p> : ""}
                    </div>
                </div>

                <div className="padding-20 col-lg-12 mt-0">
                <hr/>
                    <div className="form-group mt-0 text-center">
                        <input type="submit" value="Guardar Portfolio" className="btn btn-primary" />{" "}
                        <Link to={"/admin/portfolio"}><button className="btn btn-info">Volver</button></Link>
                    </div>
                </div>
            </div>
        </form>
    </>
    )
}

export default PortfolioNuevo