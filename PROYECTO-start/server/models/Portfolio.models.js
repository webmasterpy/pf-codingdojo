const mongoose = require('mongoose');
const PortfolioSchema = new mongoose.Schema({
    titulo: {
        type: String
        , required: [true, "Nombre es requerido"]
        , minlength: [3, "Nombre debe contener minimanente 3 caracteres"]
        , maxlength: [30, "Nombre puede contener hasta 30 caracteres"]
    }
    ,descripcion:{
        type: String
        , minlength: [3, "Descripcion debe contener minimanente 3 caracteres"]
        ,required: [true, "Descripcion es requerido"]
    }
    ,imagen:{
        type: String
        ,required: [true, "Imagen es requerido"]
    }
    ,url:{
        type: String
    }
    ,precio: {
        type: Number
    }
}, { timestamps: true });

module.exports.Portfolio = mongoose.model('Portfolio', PortfolioSchema);
