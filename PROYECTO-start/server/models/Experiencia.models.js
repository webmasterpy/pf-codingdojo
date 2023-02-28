const mongoose = require('mongoose');
const ExperienciaSchema = new mongoose.Schema({
    titulo: {
        type: String
        , required: [true, "Titulo es requerido"]
        , minlength: [3, "Titulo debe contener minimanente 3 caracteres"]
        , maxlength: [30, "Titulo puede contener hasta 30 caracteres"]
    }
    ,columna_1:{
        type: String
        , required: [true, "La columna 1 es requerida"]
    }
    ,columna_2:{
        type: String
        , required: [true, "La columna 2 es requerida"]
    }
}, { timestamps: true });

module.exports.Experiencia = mongoose.model('Experiencia', ExperienciaSchema);
