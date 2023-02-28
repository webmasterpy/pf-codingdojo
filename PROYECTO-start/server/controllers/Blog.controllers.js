// REQUERIMOS MODELO Y ESQUEMA DE BLOG
const { Blog } = require('../models/Blog.models');

// EXPORTAMOS FUNCION PARA CREAR NUEVO BLOG
module.exports.nuevoBlog = (req, res) => {
    console.log(req.body);
    Blog.create(req.body)
        .then(datos_1 => res.json({ results: datos_1 }))
        .catch(err => res.json({ message: 'Error al intentar crear Blog:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER BLOGS ORDENADO POR TITULO
module.exports.todosBlog = (req, res) => {
    Blog.find({}).sort({titulo: 1})
        .then(datos_2 => res.json({ results: datos_2 }))
        .catch(err => res.json({ message: 'Error al obtener Blog:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER 1 BLOG POR PARAMETRO
module.exports.unBlog = (req, res) => {
    Blog.findOne({ _id: req.params._id })
        .then(datos_3 => res.json({ results: datos_3 }))
        .catch(err => res.json({ message: 'Error al obtener 1 Blog:', err }));
}


// EXPORTAMOS FUNCION PARA OBTENER 3 BLOG
module.exports.tresBlog = (req, res) => {
    Blog.find().limit(3)
        .then(datos_4 => res.json({ results: datos_4 }))
        .catch(err => res.json({ message: 'Error al obtener lista de 6 portfolio:', err }));
}

// EXPORTAMOS FUNCION PARA EDITAR BLOG
module.exports.editarBlog = (req, res) => {
    Blog.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(datos_5 => res.json({ results: datos_5 }))
        .catch(err => res.json({ message: 'Error al editar Blog:', err }));
}

// EXPORTAMOS FUNCION PARA BORRAR BLOG
module.exports.borrarBlog = (req, res) => {
    Blog.deleteOne({ _id: req.params._id })
        .then(datos_6 => res.json({ results: datos_6 }))
        .catch(err => res.json({ message: 'Error al borrar Blog:', err }));
}