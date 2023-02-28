// REQUERIMO DEL MODELO Y ESQUEMO DE EXPERIENCIA
const { Experiencia } = require('../models/Experiencia.models');

// EXPORTAMOS FUNCION PARA INSERTAR NUEVA EXPERIENCIA
module.exports.nuevoExperiencia = (req, res) => {
    console.log(req.body)
    Experiencia.create(req.body)
        .then(dato_1 => res.json({ results: dato_1 }))
        .catch(err => res.json({ message: 'Registro de nueva experiencia ha fallado', err }));
}

// EXPORTAMOS FUNCION PARA OBTENER LA ULTIMA Y SOLO 1 EXPERIENCIA 
module.exports.unaExperiencia = (req, res) => {
    Experiencia.find({}).sort({$natural:-1}).limit(1)
        .then(dato_2 => res.json({ results: dato_2 }))
        .catch(err => res.json({ message: 'Lista de todas las experiencias ha fallado', err }));
}

// EXPORTAMOS FUNCION PARA EDITAR  EXPERIENCIA
module.exports.editarExperiencia = (req, res) => {
    Experiencia.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(datos_3 => res.json({ results: datos_3 }))
        .catch(err => res.json({ message: 'Error al editar Experiencia:', err }));
}
