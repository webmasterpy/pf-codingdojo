const mongoose = require('mongoose');
const BannerSchema = new mongoose.Schema({
    titulo: {
        type: String
        , required: [true, "Titulo es requerido"]
        , minlength: [3, "Titulo debe contener minimanente 3 caracteres"]
        , maxlength: [30, "Titulo puede contener hasta 30 caracteres"]
    }
    ,imagen:{
        type: String
        ,required: [true, "Imagen es requerido"]
    }
    ,activado: {
        type: Boolean
        , required: [true, "Ativado debe ser SI o NO"]
    }
}, { timestamps: true });

module.exports.Banner = mongoose.model('Banner', BannerSchema);
