const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    prioridad: {
        type: String,
        enum: ['baja', 'media', 'baja'],
        default: 'media'
    },
    estado: {
        type: String,
        default: 'abierto'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Reporte', reportSchema);