import React from 'react'
import ExperienciaEditar from './ExperienciaEditar'
import ExperienciaListado from './ExperienciaListado'
import Navegacion from './Navegacion'

const AdminExperiencia = (props) => {
    console.log("Administracion de Experiencia {accion}:",props.accion)
    return(
        <>
        <div className="contenedor">
            <div className="barra-izquierda">
                <Navegacion/>
            </div>
            <div className="barra-derecha container mt-2">
            {(props.accion==="listado")?<ExperienciaListado/>:""}
            {/* {(props.accion==="nuevo")?<BannerNuevo/>:""} */}
            {(props.accion==="editar")?<ExperienciaEditar/>:""}
            </div>
        </div>
        </>
    )
}

export default AdminExperiencia