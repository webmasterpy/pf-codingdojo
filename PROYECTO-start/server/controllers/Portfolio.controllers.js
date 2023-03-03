// REQUERIMOS MODELO Y ESQUEMA DE PORTFOLIO
const { Portfolio } = require('../models/Portfolio.models');

// EXPORTAMOS FUNCION PARA CREAR NUEVO PORTFOLIO
module.exports.nuevoPortfolio = (req, res) => {
    console.log(req.body);
    Portfolio.create(req.body)
        .then(datos_1 => res.json({ results: datos_1 }))
        .catch(err => res.json({ message: 'Error al intentar crear Portfolio:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER PORTFOLIOS ORDENADO POR TITULO
module.exports.todosPortfolio = (req, res) => {
    Portfolio.find({}).sort({titulo: 1})
        .then(datos_2 => res.json({ results: datos_2 }))
        .catch(err => res.json({ message: 'Error al obtener Portfolio:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER 1 PORTFOLIO POR PARAMETRO
module.exports.unPortfolio = (req, res) => {
    Portfolio.findOne({ _id: req.params._id })
        .then(datos_3 => res.json({ results: datos_3 }))
        .catch(err => res.json({ message: 'Error al obtener 1 Portfolio:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER 6 PORTFOLIO
module.exports.seisPortfolio = (req, res) => {
    Portfolio.find({}).sort({titulo: 1}).limit(6)
        .then(datos_4 => res.json({ results: datos_4 }))
        .catch(err => res.json({ message: 'Error al obtener lista de 6 portfolio:', err }));
}

// EXPORTAMOS FUNCION PARA EDITAR PORTFOLIO
module.exports.editarPortfolio = (req, res) => {
    Portfolio.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(datos_5 => res.json({ results: datos_5 }))
        .catch(err => res.json({ message: 'Error al editar Portfolio:', err }));
}

// EXPORTAMOS FUNCION PARA BORRAR PORTFOLIO
module.exports.borrarPortfolio = (req, res) => {
    Portfolio.deleteOne({ _id: req.params._id })
        .then(datos_6 => res.json({ results: datos_6 }))
        .catch(err => res.json({ message: 'Error al borrar Portfolio:', err }));
}