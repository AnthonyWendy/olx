const express = require('express');
// Criando o roteador, para inserir aqui as rotas do navegador.
const router = express.Router();

//Importa a verificação do token, para ver se exite o usuário.
const Auth = require('./middlewares/Auth');

//Importa as regras para o cadastro do usuário
const AuthValidator = require('./validators/AuthValidator')

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
router.post('/user/signup', AuthValidator.signup, AuthController.signup);//para fazer cadastro

//Usuário
router.get('/user/me', Auth.private, UserController.info);//Para trazer informações do usuário
router.put('/user/me', Auth.private, UserController.editAction);//Para Alterar informações do usuário

//Categorias
router.get('/categories', AdsController.getCategories);//Para trazer a lista de categoria

//Anúncio
router.get('/ad/list', AdsController.getList);//Para listar os anúncios
router.get('/ad/item', AdsController.getItem);//Para ver um anúncio em especifíco
router.post('/ad/add', Auth.private,AdsController.addAction);;//Adicionar um novo anúncio
router.post('/ad/:id', Auth.private,AdsController.editAction);//Para alterar o anúncio, usasse o POST por conta das imagens que serão enviadas.

module.exports = router;