var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String
        , required: [true, "Nombre es requerido"]
        , minlength: [2, "Nombre debe contener minimanente 2 caracteres"]
        , maxlength: [30, "Nombre puede contener hasta 30 caracteres"]
    }
    ,lastName: {
        type: String
        , required: [true, "Apellido es requerido"]
        , minlength: [2, "Apellido debe contener minimanente 2 caracteres"]
        , maxlength: [40, "Apellido puede contener hasta 30 caracteres"]
    }
    ,email: {
        type: String
        , required: [true, "Correo es requerido"]
        , minlength: [2, "Email debe contener minimanente 2 caracteres"]
        , maxlength: [60, "Email puede contener hasta 60 caracteres"]
        , unique: [true, "Email debe ser unico"]
    }
    ,username: {
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

}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema);
