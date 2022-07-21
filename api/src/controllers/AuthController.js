//Importando ferramentas para validação
const { validationResult, matchedData} = require('express-validator');

const mongoose = require('mongoose');

//Importação do users
const User = require('../models/Users');

// Responsável por controlar a autencação realizada na OLX
module.exports = {
    signin: async (req, res) => {

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
                error: {state: {msg: 'Código do estado está invalido.'}}});
            return;
        }




        res.json({tudocerto: true});
    }
};