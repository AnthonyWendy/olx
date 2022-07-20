const express = require('express');
// Criando o roteador, para inserir aqui as rotas do navegador.
const router = express.Router();

router.get('/ping', (req, res)=>{
    res.json({pong: true});
});


module.exports = router;