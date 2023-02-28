const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    titulo: {
        type: String
        , required: [true, "Titulo es requerido"]
        , minlength: [3, "Titulo debe contener minimanente 3 caracteres"]
        , maxlength: [100, "Titulo puede contener hasta 100 caracteres"]
    }
    ,html:{
        type: String
        ,required: [true, "Contenido es requerido"]
    }
    ,imagen:{
        type: String
        ,required: [true, "Imagen es requerido"]
    }
    ,fecha:{
        type: String
        ,required: [true, "Fecha es requerido"]
    }
    ,activado: {
        type: Boolean
        , required: [true, "Ativado debe ser SI o NO"]
    }
}, { timestamps: true });

module.exports.Blog = mongoose.model('Blog', BlogSchema);
