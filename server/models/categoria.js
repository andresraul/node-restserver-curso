const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'La descripcion de la categoría es requerida'],
        unique: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});



categoriaSchema.plugin(uniqueValidator, { message: 'Ya existe esta {PATH}' });

module.exports = mongoose.model('Categoria', categoriaSchema);