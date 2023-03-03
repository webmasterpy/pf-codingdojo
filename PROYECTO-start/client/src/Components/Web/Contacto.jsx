import React, {useState} from "react";
import axios from "axios";

//import PropTypes from "prop-types";


const Contacto = ()=> {
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
    const [errores, setErrores] = useState({})

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: "post",
          url: `http://sistemasbig.com/dojo-correo.php`,
          headers: { "content-type": "application/json" },
          data: formData
        }, config)
          .then(result => {
            if (result.data.sent) {
              setmailSent(result.data.sent)
              setError(false)
            } else {
              setError(true)
            }
        })
        .catch(error => setError( error.message ));
    };

    const handleChange = (e, field) => {
        let value = e.target.value;
        setFormData({
          ...formData,
          [field]: value,
        });
    };

    //const { title, description, successMessage, errorMessage, fieldsConfig } = props.config;


    return (
    <section className="page-section" id="contacto">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contacto</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">
                    <form id="contactForm" method="post" onSubmit={handleFormSubmit}>
                        <div className="form-floating mb-3">
                            <input className="form-control" name="name" id="name" type="text" placeholder="Ingrese su nombre..." onChange={e => handleChange(e, e.fieldName)}/>
                            <label htmlFor="name">Nombre Completo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" name="email" id="email" type="email" placeholder="nombre@ejemplo.com" onChange={e => handleChange(e, e.fieldName)}/>
                            <label htmlFor="email">Correo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" name="phone" id="phone" type="tel" placeholder="(0981) 123-456" onChange={e => handleChange(e, e.fieldName)}/>
                            <label htmlFor="phone">Numero Telefono</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="message" id="message" type="text" placeholder="Ingrese su mensaje..." style={{height: "10rem"}} onChange={e => handleChange(e, e.fieldName)} ></textarea>
                            <label htmlFor="message">Mensaje</label>
                        </div>
                        
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Formulario enviado correctamente.!</div>
                            </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">Error enviando mensaje!</div>
                        </div>
                        
                        {/* Boton Enviar */}
                        <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto