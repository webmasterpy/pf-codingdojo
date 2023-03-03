import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const AdminBannerListado = () => {
    const [banner, setBanner] = useState([])
    let numeracion=1;

    useEffect(() => {
        axios.get('http://localhost:8000/api/banner/todos')
            .then(res => {
                //console.log(res.data);
                setBanner(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])

    const onHandleDelete = (idBanner) => {
        axios.delete(`http://localhost:8000/api/banner/borrar/${idBanner}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setBanner(banner.filter(banner => banner._id !== idBanner));
    }

    return (
    <>
        <h3 className="text-center">
            Listado de Banner<br/>
            <Link to="/admin/banner/nuevo">
                <button className="btn btn-primary">Nuevo</button>
            </Link>
        </h3>
        <table className="table table-light table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Activado</th>
                <th scope="col">Imagen</th>
                <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
            {
                banner.map((banner, indice)=>{
                    
                    return (
                        <tr key={indice}>
                            <th scope="row">{numeracion++}</th>
                            <td>{banner.titulo}</td>
                            <td>{(banner.activado)?<span className='activado'>Activado</span>:<span className='desactivado'>Desactivado</span>}</td>
                            <td><img src={`../assets/banner/${banner.imagen}`} height="50" alt="titulo imagen"/></td>
                            <td>
                                <a href={"/admin/banner/editar/"+banner._id}>
                                    <button className="btn btn-sm btn-success">Editar</button>{" "}
                                </a>
                                <button className="btn btn-sm btn-danger" onClick={()=>{window.confirm("Esta seguro que desea borrar este registro?") && onHandleDelete(banner._id)}}>Borrar</button>                                
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

export default AdminBannerListado