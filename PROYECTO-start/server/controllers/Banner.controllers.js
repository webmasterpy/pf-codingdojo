// REQUERIMOS MODELO Y ESQUEMA DE PIRATAS
const { Banner } = require('../models/Banner.models');

// EXPORTAMOS FUNCION PARA CREAR NUEVO BANNER
module.exports.nuevoBanner = (req, res) => {
    console.log(req.body);
    Banner.create(req.body)
        .then(datos_1 => res.json({ results: datos_1 }))
        .catch(err => res.json({ message: 'Error al intentar crear Banner:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER PIRATAS ORDENADO POR TITULO
module.exports.todosBanner = (req, res) => {
    Banner.find({}).sort({titulo: 1})
        .then(datos_2 => res.json({ results: datos_2 }))
        .catch(err => res.json({ message: 'Error al obtener Banner:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER 1 BANNER
module.exports.unBanner = (req, res) => {
    Banner.findOne({ _id: req.params._id })
        .then(datos_3 => res.json({ results: datos_3 }))
        .catch(err => res.json({ message: 'Error al obtener 1 Banner:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER ULTIMO BANNER
module.exports.ultimoBanner = (req, res) => {
    Banner.find({activado: true}).sort({$natural:-1}).limit(1)
        .then(datos_3 => res.json({ results: datos_3 }))
        .catch(err => res.json({ message: 'Error al obtener 1 Banner:', err }));
}

// EXPORTAMOS FUNCION PARA EDITAR BANNER
module.exports.editarBanner = (req, res) => {
    Banner.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(datos_4 => res.json({ results: datos_4 }))
        .catch(err => res.json({ message: 'Error al editar Banner:', err }));
}

// EXPORTAMOS FUNCION PARA BORRAR BANNER
module.exports.borrarBanner = (req, res) => {
    Banner.deleteOne({ _id: req.params._id })
        .then(datos_5 => res.json({ results: datos_5 }))
        .catch(err => res.json({ message: 'Error al borrar Banner:', err }));
}