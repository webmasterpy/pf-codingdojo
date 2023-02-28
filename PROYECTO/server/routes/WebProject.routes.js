const WebProjectController = require('../controllers/WebProject.controllers');
module.exports = function(app){
    app.get('/api/pirates/all', WebProjectController.getPiratas);
    app.get('/api/pirates/:_id', WebProjectController.getUnPirata);
    app.post('/api/pirates/captain', WebProjectController.getCaptain);
    app.post('/api/pirates/newPirata', WebProjectController.newPirata);
    app.patch('/api/pirates/:_id/edit', WebProjectController.editPirata);
    app.delete('/api/pirates/:_id/delete', WebProjectController.deletePirata);
}