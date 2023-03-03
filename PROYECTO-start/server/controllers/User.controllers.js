// REQUERIMO DEL MODELO Y ESQUEMO DE USUARIO
const {User} = require('../models/User.models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const SECRET = "MIPASSWORD"

// EXPORTAMOS FUNCION PARA INSERTAR NUEVO USUARIO
// module.exports.nuevoUsuario = (req, res) => {
//     console.log(req.body)
//     User.create(req.body)
//         .then(user => res.json({ results: user }))
//         .catch(err => res.status(400).json({ message: 'Registro nuevo usuario ha fallado', err }));
// } 

module.exports.nuevoUsuario = (req, res) => {
    const {nombre, usuario, password, tipo} = req.body;

    //'$2a$10$CwTycUXWue0Thq9StjUM0u'
    bcrypt.hash(password, 10)
        .then(passwordEncriptado => {
            User.findOne({usuario}).then(usuarioObtenido => {
                if(usuarioObtenido){
                    res.statusMessage = "El usuario utilizado ya existe en la base de datos.";
                    return res.status(406).json({mensaje: "El usuario ya existe en la base de datos."})
                }
                else{
                    const nuevoUsuario = {nombre, usuario, password:passwordEncriptado, tipo};
                    User.create(nuevoUsuario)
                        .then(usuarioCreado => {
                            const payload ={
                                nombre:usuarioCreado.nombre,
                                usuario:usuarioCreado.usuario,
                                tipo:usuarioCreado.tipo,
                                _id:usuarioCreado._id
                            };
                            return res.status(200).json({mensaje: "El usuario se registro correctamente."})
                        })
                        .catch(err => {
                            res.statusMessage = "Hubo un error al intentar registrar al usuario. "+err;
                            return res.status(400).end();
                        })
                }
            }).catch( err => {
                res.statusMessage = "Hubo un error al intentar registrar al usuario. "+err;
                return res.status(400).end();
            });
        })
} 

// EXPORTAMOS FUNCION PARA OBTENER 1 USUARIO
module.exports.login = async (req, res) => {
    console.log(req.body)
    const usuario = await User.findOne({usuario:req.body.usuario})
    if(!usuario){
        res.json({error: "Usuario/Password incorrecto"})
    }
    try{
        const passValidation = await bcrypt.compare(req.body.password, usuario.password )
        //console.log(passValidation, "PASSWORD VALIDA")
        if(!passValidation){
            return res.json({error: "Email/Password no valido"})
        }else{
            const userToken = jwt.sign({_id:usuario._id}, SECRET)
            res.cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 90000)}).json({ successMessage:"Usuario Logueado", token: userToken})
        }
        
    }catch(error){
        return res.json({error: "Email/Password no valido"})
    }

    // console.log(req.body)
    // User.findOne({ usuario: req.body.usuario, password: req.body.password })
    //     .then(user => res.json({ results: user }))
    //     .catch(err => res.json({ message: 'Consulta usuario ha fallado', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER TODOS LOS USUARIOS
module.exports.logout = (req, res) => {
    res.clearCookie('userToken')
    res.json({success:'Usuario salio'})
}

// EXPORTAMOS FUNCION PARA OBTENER TODOS LOS USUARIOS
module.exports.todosUsuarios = (req, res) => {
    User.find({})
        .then(user => res.json({ results: user }))
        .catch(err => res.json({ message: 'Lista de todos los usuarios ha fallado', err }));
}
