import React from 'react'

const Contacto = () => {
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
                    <form id="contactForm" method="post">
                        <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Ingrese su nombre..." data-sb-validations="required" />
                            <label for="name">Nombre Completo</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">Nombre es requerido.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="email" type="email" placeholder="nombre@ejemplo.com" data-sb-validations="required,email" />
                            <label for="email">Correo</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="phone" type="tel" placeholder="(0981) 123-456" data-sb-validations="required" />
                            <label for="phone">Numero Telefono</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="message" type="text" placeholder="Ingrese su mensaje..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                            <label for="message">Mensaje</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">MEnsaje es requerido.</div>
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