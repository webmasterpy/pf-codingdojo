import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navegacion from "./Navegacion";

const LoginRegistro = (props) => {
    // DESESTRUCTURACION PARA REGISTRO DE USUARIOS
    const [getFirstName, setFirstName] = useState('');
    const [getLastName, setLastName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getUsername, setUsername] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getConfirma, setConfirma] = useState('');
    const [getRegErrors, setRegErrors] = useState({});

    // DESESTRUCTURACION PARA LOGIN DE USUARIOS
    const [getLoginEmail, setLoginEmail] =useState('');
    const [getLoginPassword, setLoginPassword] = useState('');
    const [getLoginErrors, setLoginErrors] = useState({});
    let navigate = useNavigate();

    // SUBMIT  DE REGISTRO
    const onSubmitRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/nuevo/', {
            firstName: getFirstName
            , lastName: getLastName
            , email: getEmail
            , username: getUsername
            , password: getPassword
        })
            .then(res => {
                if (res.data.results) {
                    props.setIdPirata(getEmail);
                    navigate('/pirates');
                } else {
                    console.log(res.data.err.errors)
                    setRegErrors(res.data.err.errors);
                }
            })
            .catch(err => console.log(err))
    }

    const onSubmitLogin = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/users/uno/', {
            email: getLoginEmail
            , password: getLoginPassword
        })
            .then(res => {
                console.log('results')
                console.log(res.data.results);
                if (res.data.results !== null) {
                    props.setIdPirata(getLoginEmail);
                    navigate('/pirates');
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
        <Navegacion texto="Welcome to Pirate Crew" url=""/>
        <div className="row contenedor-login">
            <div className='bordes col-6 '>
                <form className="margen-30 padding-20 text-black fondo-blanco borde-negro" onSubmit={onSubmitRegister}>
                    <h3 className="text-center mt-2">Registrarse</h3>
                    <div className="form-group">
                        <label htmlFor="getFirstName">Nombre</label>
                        <input type="text" className="form-control" id="getFirstName" name="getFirstName" onChange={(evento)=> setFirstName(evento.target.value)} required/>
                        {getRegErrors.firstName ? <p className="alert alert-danger"><b>Server:</b> {getRegErrors.firstName.message}</p> : ""}
                        {(!getRegErrors.firstName && getFirstName.length < 2 && getFirstName !== "") ? <p className="alert alert-danger">Nombre debe tener almenos 2 caracteres</p> : ""}

                    </div>
                    <div className="form-group">
                        <label htmlFor="getLastName">Apellido</label>
                        <input type="text" className="form-control" id="getLastName" name="getLastName" onChange={(evento)=> setLastName(evento.target.value)} required/>
                        {getRegErrors.lastName ? <p className="alert alert-danger"><b>Server:</b>: {getRegErrors.lastName.message}</p> : ""}
                        {(!getRegErrors.lastName && getLastName.length < 2 && getLastName !== "") ? <p className="alert alert-danger">Apellido debe tener almenos 2 caracteres</p> : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtCorreo">Correo</label>
                        <input type="getEmail" className="form-control" id="getEmail" name="getEmail" onChange={(evento)=> setEmail(evento.target.value)} required/>
                        {getRegErrors.email ? <p className="alert alert-danger"><b>Server:</b> {getRegErrors.email.message}</p> : ""}
                        {(!getRegErrors.lastName && getEmail.length < 2 && getEmail !== "") ? <p className="alert alert-danger">Correo debe tener almenos 2 caracteres</p> : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="getUsername">Usuario</label>
                        <input type="text" className="form-control" id="getUsername" name="getUsername" onChange={(evento)=> setUsername(evento.target.value)} required/>
                        {getRegErrors.username ? <p className="alert alert-danger"><b>Server:</b> {getRegErrors.username.message}</p> : ""}
                        {(!getRegErrors.username && getUsername.length < 2 && getUsername !== "") ? <p className="alert alert-danger">Usuario debe tener almenos 2 caracteres</p> : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="getPassword">Password</label>
                        <input type="password" className="form-control" id="getPassword" name="getPassword" onChange={(evento)=> setPassword(evento.target.value)} required/>
                        {getRegErrors.password ? <p className="alert alert-danger"><b>Server:</b> {getRegErrors.password.message}</p> : ""}
                        {(!getRegErrors.password && getPassword.length < 4 && getPassword !== "") ? <p className="alert alert-danger">Password debe tener almenos 4 caracteres</p> : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtConfirm">Confirma Password</label>
                        <input type="password" className="form-control" id="getConfirma" name="getConfirma" onChange={(evento)=> setConfirma(evento.target.value)} required/>
                        {(getConfirma !== getPassword && getConfirma.length>=1) ? <p className="alert alert-danger">Password no coinciden con el primero</p> : ""}
                    </div>
                    <div className="text-center mt-3 mb-3">
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </div>
                </form>
            </div>

            <div className='bordes col-5'>
                <form className="margen-30 padding-20 text-black fondo-blanco borde-negro" onSubmit={onSubmitLogin}>
                    <h3 className="text-center mt-2">Login</h3>
                    <div className="form-group">
                        <label htmlFor="getLoginEmail">Correo</label>
                        <input type="text" className="form-control" id="getLoginEmail" name="getLoginEmail" onChange={(evento)=> setLoginEmail(evento.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="getLoginPassword">Password</label>
                        <input type="password" className="form-control" id="getLoginPassword" name="getLoginPassword" onChange={(evento)=> setLoginPassword(evento.target.value)}/>
                    </div>
                    {
                        (getLoginErrors.message)
                        ?
                        <p className="alert alert-danger mt-2 mb-2">Error al ingresar datos</p>
                        :
                        "" 
                    }
                    
                    <div className="text-center mt-3 mb-3">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginRegistro