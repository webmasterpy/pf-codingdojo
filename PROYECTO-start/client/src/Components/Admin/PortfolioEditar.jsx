import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

const PortfolioEditar = () => {
    const {idPortfolio} = useParams();
    const navigate = useNavigate();
    const [campos, setCampos] = useState(
        {
            titulo: "",
            imagen: "",
            descripcion: ""
        }
    )
    const [errores, setErrores] = useState({})

    useEffect(() => detalleBanner(), [])
    
    const detalleBanner = () => {
        axios.get('http://localhost:8000/api/portfolio/'+idPortfolio)
            .then(res => {
                console.log(res.data.results);
                setCampos(res.data.results)
            })
            .catch(err => console.log(err))
    }

    const onHandleChange = (e) => {
        setCampos(cargaEstados => ({ ...cargaEstados, [e.target.name]: e.target.value }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/portfolio/editar/'+idPortfolio, campos)
            .then(res => {
                console.log("Datos actualizados:",res)
                navigate("/admin/portfolio")
            })
            .catch(err => {
                setErrores(err.response.data.errors)
            })
    }

    return (
        <>
        <h3 className="text-center mt-5">Agregar Banner</h3>
        <form onSubmit={onSubmitHandler} className="formulario">
            <div className="row">
                <div className="padding-20 col-lg-12 mt-4">
                    <div className="form-group">
                        <label htmlFor="titulo"><b>Titulo Banner</b></label>
                        <input type="text" className="form-control" id="titulo" name="titulo" onChange={onHandleChange} value={campos.titulo} required/>
                        {(campos.titulo.length < 3 && campos.titulo !== "") ? <p className="alert alert-danger">Titulo debe tener almenos 3 caracteres</p> : ""}
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="imagen"><b>Image Url</b></label>
                        <input type="text" className="form-control" id="imagen" name="imagen" onChange={onHandleChange} value={campos.imagen} required/>
                        {(campos.imagen.length < 3 && campos.imagen !== "") ? <p className="alert alert-danger">Imagen debe tener almenos 3 caracteres <br/>{errores.campos.imagen && errores.campos.imagen.message}</p> : ""}
                    </div>
                    
                    <div className="form-group mt-4">
                        <label htmlFor="imagen"><b>Descripcion</b></label>
                        <textarea className="form-control" id="descripcion" name="descripcion" onChange={onHandleChange}>{campos.descripcion}</textarea>
                        {(campos.descripcion.length < 30 && campos.descripcion !== "") ? <p className="alert alert-danger">Descripcion debe tener almenos 30 caracteres <br/>{errores.descripcion && errores.descripcion.message}</p> : ""}
                    </div>

                </div>

                <div className="padding-20 col-lg-12 mt-0">
                <hr/>
                    <div className="form-group mt-0 text-center">
                        <input type="submit" value="Actualizar Portfolio" className="btn btn-primary" />{" "}
                        <Link to={"/admin/portfolio"}><button className="btn btn-info">Volver</button></Link>
                    </div>
                </div>
            </div>
        </form>
    </>
    )
}

export default PortfolioEditar