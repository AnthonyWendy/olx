const State = require('../models/State');

// Responsável por controlar as informações do usuário
module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();//vai pegar todos os dados da minha tabela
        res.json({states}); //vai mandar os dados
    },
  
    info: async (req, res) => {
        res.json({});
    },

    editAction: async (req, res) => {
        
        res.json({});
    }
};