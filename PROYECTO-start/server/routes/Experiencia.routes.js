const ExperienciaController = require('../controllers/Experiencia.controllers');
module.exports = function(app){
    app.post('/api/experiencia/nuevo', ExperienciaController.nuevoExperiencia);
    app.get('/api/experiencia/una', ExperienciaController.unaExperiencia);
    app.patch('/api/experiencia/editar/:_id', ExperienciaController.editarExperiencia);
}