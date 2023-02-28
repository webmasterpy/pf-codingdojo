// REQUERIMO DEL MODELO Y ESQUEMO DE USUARIO
const {User} = require('../models/User.models');

// EXPORTAMOS FUNCION PARA INSERTAR NUEVO USUARIO
module.exports.nuevoUsuario = (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then(user => res.json({ results: user }))
        .catch(err => res.json({ message: 'Registro nuevo usuario ha fallado', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER 1 USUARIO
module.exports.obtenerUnUsuario = (req, res) => {
    console.log(req.body)
    User.findOne({ email: req.body.email, password: req.body.password })
        .then(user => res.json({ results: user }))
        .catch(err => res.json({ message: 'Consulta usuario ha fallado', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER TODOS LOS USUARIOS
module.exports.todosUsuarios = (req, res) => {
    User.find({})
        .then(user => res.json({ results: user }))
        .catch(err => res.json({ message: 'Lista de todos los usuarios ha fallado', err }));
}
