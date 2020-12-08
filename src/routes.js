const express = require('express');
const routes = express.Router();

const ReceitaController = require('./controllers/ReceitaController');

routes.get('/receitas', ReceitaController.listarReceitas);
routes.get('/receitas/:id', ReceitaController.buscarReceita);
routes.post('/receitas', ReceitaController.criarReceita);
routes.put('/receitas/:id', ReceitaController.atualizarReceita);
routes.delete('/receitas/:id', ReceitaController.excluirReceita);

module.exports = routes;