import React from 'react'

const Navegacion = (props) => {
  return (
    <div className="fondo-bar">
        <span className="navbar-text text-center">
            <h2 className="text-white text-center">{props.texto}</h2>
        </span>
        <div className="contenedor-boton" style={{height:"40px"}}>
        {
            (props.url)
            ?
                <button className="btn-top">Add Profile</button>
            :
            ""
        }
        </div>
        
    </div>
  )
}

export default Navegacion