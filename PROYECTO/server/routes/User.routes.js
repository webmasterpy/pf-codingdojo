// REQUERIMO DEL CONTROLADOR DE USUARIOS
const UserController = require('../controllers/User.controllers');

// EXPORTAMOS FUNCION PARA RUTAS DE API
module.exports = function(app){
    app.post('/api/users/uno/', UserController.obtenerUnUsuario);
    app.post('/api/users/nuevo/', UserController.nuevoUsuario);
    app.get('/api/users/todos', UserController.todosUsuarios);
}