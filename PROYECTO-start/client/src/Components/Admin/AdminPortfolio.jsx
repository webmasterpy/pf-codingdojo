import React from 'react'
import Navegacion from './Navegacion'
import PortfolioEditar from './PortfolioEditar'
import PortfolioListado from './PortfolioListado'
import PortfolioNuevo from './PortfolioNuevo'

const AdminPortfolio = (props) => {
    console.log("Administracion de Portfolio {accion}:", props.accion)
    return(
        <>
        <div className="contenedor">
            <div className="barra-izquierda">
                <Navegacion/>
            </div>
            <div className="barra-derecha container mt-2">
            {(props.accion==="listado")?<PortfolioListado/>:""}
            {(props.accion==="nuevo")?<PortfolioNuevo/>:""}
            {(props.accion==="editar")?<PortfolioEditar/>:""}
            </div>
        </div>
        </>
    )
}

export default AdminPortfolio