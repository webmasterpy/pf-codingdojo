// REQUERIMOS MODELO Y ESQUEMA DE PIRATAS
const { WebProject } = require('../models/WebProject.models');

// EXPORTAMOS FUNCION PARA CREAR NUEVO PIRATA
module.exports.newPirata = (req, res) => {
    console.log(req.body);
    WebProject.create(req.body)
        .then(member => res.json({ results: member }))
        .catch(err => res.json({ message: 'Error al intentar crear Pirata:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER PIRATAS ORDENADO POR NOMBRE
module.exports.getPiratas = (req, res) => {
    WebProject.find({}).sort({name: 1})
        .then(crew => res.json({ results: crew }))
        .catch(err => res.json({ message: 'Error al obtener piratas:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER 1 PIRATA
module.exports.getUnPirata = (req, res) => {
    WebProject.findOne({ _id: req.params._id })
        .then(sailor => res.json({ results: sailor }))
        .catch(err => res.json({ message: 'Error al obtener 1 pirata:', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER TIPO CAPTAIN
module.exports.getCaptain = (req, res) => {
    WebProject.findOne(req.body)
        .then(pirata => res.json({ results: pirata }))
        .catch(err => res.json({ message: 'Error al obtener Captian', err }));
}

// EXPORTAMOS FUNCION PARA EDITAR PIRATA
module.exports.editPirata = (req, res) => {
    WebProject.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(sailor => res.json({ results: sailor }))
        .catch(err => res.json({ message: 'Error al editar pirata:', err }));
}

// EXPORTAMOS FUNCION PARA BORRAR PIRATA
module.exports.deletePirata = (req, res) => {
    WebProject.deleteOne({ _id: req.params._id })
        .then(sailor => res.json({ results: sailor }))
        .catch(err => res.json({ message: 'Error al borrar pirata:', err }));
}