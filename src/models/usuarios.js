const mongoose = require('mongoose');

const usuarioScheme = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true 
    },

    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', usuarioScheme);