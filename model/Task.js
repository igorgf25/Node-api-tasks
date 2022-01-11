const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A propriedade nome é obrigatória'],
        trim: true,
        maxlength: [20, 'O numero máximo de caracteres: 20'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)