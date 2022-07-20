const express = require('express');
// Criando o roteador, para inserir aqui as rotas do navegador.
const router = express.Router();

//Importação dos arquivos de controle
const AuthController = require('./controllers/AuthController');
const AdsController = require('./controllers/AdsController');
const UserController = require('./controllers/UserController');

router.get('/ping', (req, res)=>{
    res.json({pong: true});
});


module.exports = router;