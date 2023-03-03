import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

const ExperienciaEditar = () => {
    const {idExperiencia} = useParams();
    const navigate = useNavigate();
    const [campos, setCampos] = useState(
        {
            titulo: "",
            columna_1: "",
            columna_2: ""
        }
    )
    const [errores, setErrores] = useState({})

    useEffect(() => detalleExperiencia(), [])
    
    const detalleExperiencia = () => {
        axios.get('http://localhost:8000/api/experiencia/'+idExperiencia)
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
        axios.patch('http://localhost:8000/api/experiencia/editar/'+idExperiencia, campos)
            .then(res => {
                console.log("Datos actualizados:",res)
                navigate("/admin/experiencia")
            })
            .catch(err => {
                setErrores(err.response.data.errors)
            })
    }

    return (
        <>
        <h3 className="text-center mt-5">Actualizar Experiencia</h3>
        <form onSubmit={onSubmitHandler} className="formulario">
            <div className="row">
                <div className="padding-20 col-lg-12 mt-4">
                    <div className="form-group">
                        <label htmlFor="titulo"><b>Titulo</b></label>
                        <input type="text" className="form-control" id="titulo" name="titulo" onChange={onHandleChange} value={campos.titulo} required/>
                        {(campos.titulo.length < 3 && campos.titulo !== "") ? <p className="alert alert-danger">Titulo debe tener almenos 3 caracteres</p> : ""}
                    </div>
                    
                    <div className="form-group mt-4">
                        <label htmlFor="imagen"><b>Descripcion</b></label>
                        {/* <textarea className="form-control" id="descripcion" name="descripcion" onChange={onHandleChange}>{campos.columna_1}</textarea> */}
                        <input type="text" className="form-control" id="columna_1" name="columan_1" onChange={onHandleChange} value={campos.columna_1} />
                        {(campos.columna_1.length < 10 && campos.columna_1 !== "") ? <p className="alert alert-danger">Descripcion debe tener almenos 10 caracteres <br/>{errores.columna_1 && errores.columna_1.message}</p> : ""}
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="imagen"><b>Descripcion</b></label>
                        {/* <textarea className="form-control" id="descripcion" name="descripcion" onChange={onHandleChange}>{campos.columna_2}</textarea> */}
                        <input type="text" className="form-control" id="columna_2" name="columna_2" onChange={onHandleChange} value={campos.columna_2} />
                        {(campos.columna_2.length < 10 && campos.columna_2 !== "") ? <p className="alert alert-danger">Descripcion debe tener almenos 10 caracteres <br/>{errores.columna_2 && errores.columna_2.message}</p> : ""}
                    </div>

                </div>

                <div className="padding-20 col-lg-12 mt-0">
                <hr/>
                    <div className="form-group mt-0 text-center">
                        <input type="submit" value="Actualizar Portfolio" className="btn btn-primary" />{" "}
                        <Link to={"/admin/experiencia"}><button className="btn btn-info">Volver</button></Link>
                    </div>
                </div>
            </div>
        </form>
    </>
    )
}

export default ExperienciaEditar