const mongoose = require('mongoose');
const WebProjectSchema = new mongoose.Schema({
    name: {
        type: String
        , required: [true, "Nombre es requerido"]
        , minlength: [3, "Nombre debe contener minimanente 3 caracteres"]
        , maxlength: [30, "Nombre puede contener hasta 30 caracteres"]
    }
    ,image:{
        type: String
        ,required: [true, "Imagen es requerido"]
    }
    , numChests: {
        type: Number
        , required: [true, "Numero de cofres es requerido"]
        , min: [0, "La cantidad debe ser mayor o igual a 0"]
    }
    , catchPhrase: {
        type: String
        , required: [true, "La frase es requerida"]
        , minlength: [3, "Frase debe contener minimanente 3 caracteres"]
        , maxlength: [200, "Frase puede contener hasta 30 caracteres"]
    }
    , hookHand: {
        type: Boolean
        , required: [true, "Ganco de Mano debe seleccion Si o NO porfavor"]
    }
    , eyePatch: {
        type: Boolean
        , required: [true, "Parche en el Ojo debe seleccion Si o NO porfavor"]
    }
    , pegLeg: {
        type: Boolean
        , required: [true, "Pata de Palo debe seleccion Si o NO porfavor"]
    }
    ,crewPosition: {
        type: String
        , enum: ['Captian','First Mate','Quarter Master','Boatswain','Powder Monkey']
        , required: [true, "Puesto de Tripulacion es requerida"]
    }


}, { timestamps: true });

module.exports.WebProject = mongoose.model('WebProject', WebProjectSchema);
