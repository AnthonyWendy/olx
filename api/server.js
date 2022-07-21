// Carregar as variavéis de ambiente.
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

//Importando o router e nomeando ele
const apiRoutes = require('./src/Router')

// Conexão com o banco de dados
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise; // O mogoose irá utilizar as promise locais

mongoose.connection.on('error', (error)=>{//Menssagem de erro caso haja algum erro de conexão
    console.log("Erro: ", error.message);
});

//Criando o servidor
const server = express();

server.use(cors());//Habilitar o recebimento de configurações padrão
server.use(express.json());//O processp vai ser com o .json
server.use(express.urlencoded({extended: true}));//
server.use(fileupload());

server.use(express.static(__dirname+'/public'));//Link que permite o acesso à pasta public

//Criação das rotas
server.use('/', apiRoutes);


server.listen(process.env.PORT, ()=>{
    console.log(`Rodando no endereço ${process.env.BASE}`)
})