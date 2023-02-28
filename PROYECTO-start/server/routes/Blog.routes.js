const BlogController = require('../controllers/Blog.controllers');
module.exports = function(app){
    app.post('/api/blog/nuevo', BlogController.nuevoBlog);
    app.get('/api/blog/todos', BlogController.todosBlog);
    app.get('/api/blog/tres', BlogController.tresBlog);
    app.get('/api/blog/detalle/:_id', BlogController.unBlog);
    app.patch('/api/blog/editar/:_id', BlogController.editarBlog);
    app.delete('/api/blog/borrar/:_id', BlogController.borrarBlog);
}