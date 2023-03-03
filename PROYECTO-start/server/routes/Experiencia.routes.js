const ExperienciaController = require('../controllers/Experiencia.controllers');
module.exports = function(app){
    app.post('/api/experiencia/nuevo', ExperienciaController.nuevoExperiencia);
    app.get('/api/experiencia/una', ExperienciaController.unaExperiencia);
    app.get('/api/experiencia/:_id', ExperienciaController.getExperiencia);
    app.patch('/api/experiencia/editar/:_id', ExperienciaController.editarExperiencia);
}