//Importando ferramentas para validação
const { validationResult, matchedData} = require('express-validator');

//ferramenta para a criptografia
const bcrypt = require('bcrypt');


const mongoose = require('mongoose');

const State = require('../models/State');

//Importação do users
const User = require('../models/Users');

// Responsável por controlar a autencação realizada na OLX
module.exports = {
    signin: async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()});
            return;
        }

        const data = matchedData(req);

        //Validandoo email
        const user = await User.findOne({email: data.email});

        if(!user){
            res.json({error:'Email e/ou senha incorretos!'});
            return;
        }

        //Validando a senha
        const match = await bcrypt.compare(data.password, user.passwordHash);
        if(!match){
            res.json({error: ' senha incorretos!'});
            return;
        }

        //Gerando um novo token 
        const payload = (Date.now() + Math.random()).toString();//Gerando um código
        const token = await bcrypt.hash(payload, 10)

        //Alterando o token no cadastro do usuário
        user.token = token;
        await user.save();

        res.json({token, email: data.email});
    },
    
    signup: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        //Procurar se já possui email cadastrado
        const user = await User.findOne({
            email: data.email
        });
        if(user){
            res.json({
                error:{email:{msg: 'Esse e-mail já está cadastrado.'}}
            });
            return;
        }
        
        //Verificar se o estado informado existe
        if(mongoose.Types.ObjectId.isValid(data.state)){
            const stateItem = await State.findById(data.state);
            if(!stateItem) {
                res.json({
                    error:  {state: {msg: 'Estado não existe.'}}
                });
                return;
            }
        } else { 
            res.json({
                error: {state: {msg: 'Código do estado está invalido.'}}
            });
            return;
        }

        //Construindo o hash da senha
        const passwordHash = await bcrypt.hash(data.password, 10);//Encriptografia da senha
        const payload = (Date.now() + Math.random()).toString();//Gerando um código
        const token = await bcrypt.hash(payload, 10);

        const newUser = new User({
            name: data.name,
            email: data.email,
            passwordHash,
            token,
            state: data.state
        });
        await newUser.save();

        res.json({ token });
    }
};