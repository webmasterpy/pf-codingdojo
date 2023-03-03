import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

const BannerEditar = () => {
    const {idBanner} = useParams();
    const navigate = useNavigate();
    const [campos, setCampos] = useState(
        {
            titulo: "",
            imagen: ""
        }
    )
    const [activado, setActivado] = useState(true);
    const [errores, setErrores] = useState({})

    useEffect(() => detalleBanner(), [])
    
    const detalleBanner = () => {
        axios.get('http://localhost:8000/api/banner/'+idBanner)
            .then(res => {
                console.log(res.data.results);
                setCampos(res.data.results)
                setActivado(res.data.results.activado);
            })
            .catch(err => console.log(err))
    }

    const onHandleChange = (e) => {
        setCampos(cargaEstados => ({ ...cargaEstados, [e.target.name]: e.target.value }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/banner/editar/'+idBanner, campos)
            .then(res => {
                console.log("Datos actualizados:",res)
                navigate("/admin/banner")
            })
            .catch(err => {
                setErrores(err.response.data.errors)
            })
    }

    const changeActivado = (turn) => {
        axios.patch(`http://localhost:8000/api/banner/editar/${idBanner}`, 
            {
                activado: turn
            })
            .then(res => {
                console.log(res.data)
                navigate("/admin/banner")
            })
            .catch(err => console.log(err))
            setActivado(turn)
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
                        <input type="text" className="form-control" id="imagen" name="imagen" onChange={onHandleChange} required/>
                        {(campos.imagen.length < 3 && campos.imagen !== "") ? <p className="alert alert-danger">Imagen debe tener almenos 3 caracteres <br/>{errores.campos.imagen && errores.campos.imagen.message}</p> : ""}
                    </div>

                    <div className="form-group mt-4">
                        <input className="form-check-input" 
                                name="activado" 
                                type="checkbox" 
                                defaultChecked={activado} 
                                checked = {activado} 
                                //onClick={()=>changeActivado(campos.activado? false : true)} 
                                onChange={() => {
                                    setActivado(!activado)
                                    changeActivado(campos.activado? false : true)
                                 }}
                            />
                        <label htmlFor="activado"><b>Activado?</b></label>
                        {(errores.activado) ? <p className="alert alert-danger">{errores.activado && errores.activado.message}</p> : ""}
                    </div>
                </div>

                <div className="padding-20 col-lg-12 mt-0">
                <hr/>
                    <div className="form-group mt-0 text-center">
                        <input type="submit" value="Actualizar Banner" className="btn btn-primary" />{" "}
                        <Link to={"/admin/banner"}><button className="btn btn-info">Volver</button></Link>
                    </div>
                </div>
            </div>
        </form>
    </>
    )
}

export default BannerEditar