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

//Para trazer os estados(SC, RS,...)
router.get('/states', UserController.getStates);

//Autenticação
router.post('/user/signin', AuthController.signin);//Para fazer login
router.post('/user/signup', AuthController.signup);//para fazer cadastro

//Usuário
router.get('/user/me', UserController.info);//Para trazer informações do usuário
router.put('/user/me', UserController.editAction);//Para Alterar informações do usuário

//Categorias
router.get('/categories', AdsController.getCategorires);//Para trazer a lista de categoria

//Anúncio
router.post('/ad/add', AdsController.addAction);;//Adicionar um novo anúncio
router.get('/ad/list', AdsController.getList);//Para listar os anúncios
router.get('/ad/item',AdsController.getItem);//Para ver um anúncio em especifíco
router.post('/ad/:id', AdsController.editAction);//Para alterar o anúncio, usasse o POST por conta das imagens que serão enviadas.




module.exports = router;