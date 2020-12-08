const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ReceitaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    tipo_refeicao: {
        type: String,
        required: true,
    },
    porcao: {
        type: Number,
        required: true,
    }, 
    nivel_dificuldade: {
        type: String,
        required: true,
    },
    ingredientes: {
        type: [String],
        required: true,
    },
    modo_preparo: {
        type: [String],
        required: true,
    }, 
    tempo_preparo: {
        type: String, 
        required: true,
    },
    url_imagem: {
        type: String,
        required: true,
    },
    criada_em: {
        type: Date, 
        default: Date.now,
    }
});

ReceitaSchema.plugin(mongoosePaginate);

mongoose.model('Receita', ReceitaSchema);