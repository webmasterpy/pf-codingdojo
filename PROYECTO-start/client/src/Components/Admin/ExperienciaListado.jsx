import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const ExperienciaListado = () => {
    const [experiencia, setExperiencia] = useState([])
    let numeracion=1;

    useEffect(() => {
        axios.get('http://localhost:8000/api/experiencia/una')
            .then(res => {
                //console.log(res.data);
                setExperiencia(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])

    const onHandleDelete = (idBanner) => {
        axios.delete(`http://localhost:8000/api/experiencia/borrar/${idBanner}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setExperiencia(experiencia.filter(experiencia => experiencia._id !== idBanner));
    }

    return (
    <>
        <h3 className="text-center">
            Listado de Experiencia<br/>
            <Link to="/admin/experiencia/nuevo">
                <button className="btn btn-primary">Nuevo</button>
            </Link>
        </h3>
        <table className="table table-light table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Detalle 1</th>
                <th scope="col">Detalle 2</th>
                <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
            {
                experiencia.map((experiencia, indice)=>{
                    return (
                        <tr key={indice}>
                            <th scope="row">{numeracion++}</th>
                            <td>{experiencia.titulo}</td>
                            <td>{experiencia.columna_1}</td>
                            <td>{experiencia.columna_2}</td>
                            <td>
                                <a href={"/admin/experiencia/editar/"+experiencia._id}>
                                    <button className="btn btn-sm btn-success">Editar</button>{" "}
                                </a>
                                {/* <button className="btn btn-sm btn-danger" onClick={()=>{window.confirm("Esta seguro que desea borrar este registro?") && onHandleDelete(experiencia._id)}}>Borrar</button>                                 */}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </>
    )
}

export default ExperienciaListado