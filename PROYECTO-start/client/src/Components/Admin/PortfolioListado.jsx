import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const PortfolioListado = () => {
    const [portfolio, setPortfolio] = useState([])
    let numeracion=1;

    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolio/todos')
            .then(res => {
                console.log(res.data);
                setPortfolio(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])

    const onHandleDelete = (idPortfolio) => {
        axios.delete(`http://localhost:8000/api/portfolio/borrar/${idPortfolio}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setPortfolio(portfolio.filter(portfolio => portfolio._id !== idPortfolio));
    }

    return (
        <>
            <h3 className="text-center">
                Listado de Portfolio<br/>
                <Link to="/admin/portfolio/nuevo">
                    <button className="btn btn-primary">Nuevo</button>
                </Link>
            </h3>
            <table className="table table-light table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                {
                    portfolio.map((portfolio, indice)=>{
                        
                        return (
                            <tr key={indice}>
                                <th scope="row">{numeracion++}</th>
                                <td>{portfolio.titulo}</td>
                                <td><img src={`../assets/portfolio/${portfolio.imagen}`} height="50" alt="titulo imagen"/></td>
                                <td>
                                    <a href={"/admin/portfolio/editar/"+portfolio._id}>
                                        <button className="btn btn-sm btn-success">Editar</button>{" "}
                                    </a>
                                    <button className="btn btn-sm btn-danger" onClick={()=>{window.confirm("Esta seguro que desea borrar este registro?") && onHandleDelete(portfolio._id)}}>Borrar</button>                                
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

export default PortfolioListado