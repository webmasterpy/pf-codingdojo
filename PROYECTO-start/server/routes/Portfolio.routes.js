const PortfolioController = require('../controllers/Portfolio.controllers');
module.exports = function(app){
    app.post('/api/portfolio/nuevo', PortfolioController.nuevoPortfolio);
    app.get('/api/portfolio/todos', PortfolioController.todosPortfolio);
    app.get('/api/portfolio/seis', PortfolioController.seisPortfolio);
    app.get('/api/portfolio/:_id', PortfolioController.unPortfolio);
    app.patch('/api/portfolio/editar/:_id', PortfolioController.editarPortfolio);
    app.delete('/api/portfolio/borrar/:_id', PortfolioController.borrarPortfolio);
}