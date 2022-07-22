const User = require('../models/Users')

//Vericaficação de login

module.exports = {
    private: async (req, res, next) => {
        //verificação da presença do token
        if(!req.query.token && !req.body.token){
            res.json({notallowed: true});
            return;
        }

        let token = '';
        //Verificando de onde o token veio
        if(req.query.token){
            token = req.query.token;
        }
        if(req.body.token){
            token = req.body.token;
        }
        //Verificando se o token é fazio
        if(token == ''){
            console.log(token, 'to')
            res.json({notallowed: true});
            return;
        }

        //Procurar se existe algum usuário com o mesmo token
        const user = await User.findOne({token});
        //caso não existe
        if(!user){
            res.json({notallowed: true});
            return;
        }
        console.log(user, 'use ');

        next();
    }
};