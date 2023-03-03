import React from "react";
import BannerEditar from "./BannerEditar";
import BannerListado from "./BannerListado";
import BannerNuevo from "./BannerNuevo";
import Navegacion from './Navegacion'

const AdminBanner = (props) => {
    console.log("Administracion de Banner {accion}:",props.accion)
    return(
        <>
        <div className="contenedor">
            <div className="barra-izquierda">
                <Navegacion/>
            </div>
            <div className="barra-derecha container mt-2">
            {(props.accion==="listado")?<BannerListado/>:""}
            {(props.accion==="nuevo")?<BannerNuevo/>:""}
            {(props.accion==="editar")?<BannerEditar/>:""}
            </div>
        </div>
        </>
    )
}

export default AdminBanner