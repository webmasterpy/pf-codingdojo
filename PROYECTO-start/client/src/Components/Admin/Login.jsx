import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = (props) => {
    // DESESTRUCTURACION PARA LOGIN DE USUARIOS
    const [getUsuario, setUsuario] =useState('');
    const [getPassword, setPassword] = useState('');
    const [getLoginErrors, setLoginErrors] = useState({});
    let navigate = useNavigate();

    const onSubmitLogin = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/users/login', {
            usuario: getUsuario, password: getPassword
        })
            .then(res => {
                console.log('results')
                console.log(res.data.results);
                if (res.data.results !== null) {
                    //props.setIdUsuario(getUsuario);
                    navigate('/admin/panel');
                } else {
                    //console.log("error")
                    console.log(res.data)
                    setLoginErrors({message: 'Password o Correo son invalidos'});
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
        <section className="mt-5">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" aria-hidden  alt="Login Image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={onSubmitLogin}>
                            <div className="form-outline mb-4">
                                <input type="usuario" id="usuario" className="form-control form-control-lg" placeholder="Ingrese un usuario" onChange={(evento)=> setUsuario(evento.target.value)} />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password"  onChange={(evento)=> setPassword(evento.target.value)}/>
                            </div>
                            {
                                (getLoginErrors.message)
                                ?
                                <p className="alert alert-danger mt-2 mb-2">Error al ingresar datos</p>
                                :
                                "" 
                            }
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <input type="submit" className="btn btn-primary btn-lg" value="Ingresar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login