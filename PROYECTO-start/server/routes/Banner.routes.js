const BannerController = require('../controllers/Banner.controllers');
module.exports = function(app){
    app.post('/api/banner/nuevo', BannerController.nuevoBanner);
    app.get('/api/banner/todos', BannerController.todosBanner);
    app.get('/api/banner/ultimoBanner', BannerController.ultimoBanner);
    app.get('/api/banner/:_id', BannerController.unBanner);
    app.patch('/api/banner/editar/:_id', BannerController.editarBanner);
    app.delete('/api/banner/borrar/:_id', BannerController.borrarBanner);
}