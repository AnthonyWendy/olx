const bcript = require('bcrypt');
const { validationResult, matchedData} = require('express-validator');
const { default: mongoose } = require('mongoose');

const State = require('../models/State');
const User = require('../models/Users');
const Category = require('../models/Category');
const Ad = require('../models/Ads');



// Responsável por controlar as informações do usuário
module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();//vai pegar todos os dados da minha tabela
        res.json({states}); //vai mandar os dados
    },
  
    info: async (req, res) => {
        let token = req.query.token;

        const user = await User.findOne({token});
        const state = await State.findById(user.state);;
        const ads = await Ad.find({idUser: user._id.toString()});

        let adList = [];
        for(let i in ads){
            const cat = await Category.findById(ads[i].category);
            adList.push({ ...ads[i], category: cat.slug})
        }

        res.json({
            name: user.name,
            email: user.email,
            state: state.name,
            ads: adList
        });
    },

    editAction: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        let updates = {};

        //Alterando o nome
        if(data.name) {
            updates.name = data.name;
        }

        //Alterando o email
        if(data.email){
            //Verificando se o novo já existe
            const emailCheck = await User.findOne({email: data.email});
            if(emailCheck){
                res.json({error: 'Este e-mail já existe.'});
                return;
            }
            updates.email = data.email;
        }

        if(data.state){
            if(mongoose.Types.ObjectId.isValid(data.state)){
                const stateCheck = await State.findById(data.state);
                if(!stateCheck){
                    res.json({error: 'Estado não existe.'});
                    return;
                }
                updates.state = data.state;
            }
        }

        if(data.password){
            updates.passwordhas = await bcrypt.hash(data.password, 10);
        }

        await User.findOneAndUpdate({token: data.token}, {$set: updates});


        res.json({});   
    }
};