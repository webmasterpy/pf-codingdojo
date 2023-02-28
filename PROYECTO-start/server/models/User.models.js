var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String
        , required: [true, "Nombre es requerido"]
        , minlength: [2, "Nombre debe contener minimanente 2 caracteres"]
        , maxlength: [30, "Nombre puede contener hasta 30 caracteres"]
    }
    ,usuario: {
        type: String
        , required: [true, "Usuario es requerido"]
        , minlength: [2, "Usuario debe contener minimanente 3 caracteres"]
        , maxlength: [40, "Usuario puede contener hasta 40 caracteres"]
        , unique: [true, "Usuario debe ser unico"]
    }
    ,password: {
        type: String
        , required: [true, "Password es requerido"]
        , minlength: [4, "Password debe contener minimanente 4 caracteres"]
        , maxlength: [255, "Password puede contener hasta 255 caracteres"]
    }
    ,tipo: {
        type: String
        , enum: ['admin','usuario']
        , required: [true, "Tipo de usuario es requerida"]
    }

}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema);
