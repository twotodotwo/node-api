const mongoose = require('mongoose');

const Receita =  mongoose.model('Receita');

module.exports = {
    async listarReceitas(req, res) {
        const { page = 1 } = req.query;
        const receitas = await Receita.paginate({}, { page, limit: 10});

        return res.json(receitas);
    },

    async buscarReceita(req, res) {
        const receita = await Receita.findById(req.params.id);

        return res.json(receita);
    },

    async criarReceita(req, res) {
        const receita = await Receita.create(req.body);

        return res.json(receita);
    },
 
    async atualizarReceita(req, res) {
        const receita = await Receita.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(receita);
    },

    async excluirReceita(req, res) {
        await Receita.findByIdAndRemove(req.params.id);

        return res.send();
    }

}