const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const require_dir = require('require-dir'); 

// Iniciando o App
const app = express();

//Permitir envio de dados em JSON
app.use(express.json());

//Permitir acesso de outras origens
app.use(cors());

// Iniciando o DB
mongoose.connect(
    MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

require_dir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);