import React from 'react'
import Navegacion from './Navegacion'
import './Panel.css'

const Panel = () => {
  return (
    <>
    <div className="contenedor">
      <div className="barra-izquierda">
        <Navegacion/>
      </div>
      <div className="barra-derecha container mt-2">
        <div className="texto">
          <br/><br/><br/><br/><br/>
          <b>ADMINISTRACION DE CONTENIDO</b><br/>
          <img src="../assets/img/dashboard.png" width="300"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Panel