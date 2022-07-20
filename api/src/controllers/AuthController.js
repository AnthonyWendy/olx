const { validationResult, matchedData} = require('express-validator');

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

        res.json({tudocerto: true});
    }
};