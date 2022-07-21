//Importando ferramentas para validação
const { validationResult, matchedData} = require('express-validator');

//Importação do users
const User = require('../models/Users')

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

        res.json({tudocerto: true});
    }
};