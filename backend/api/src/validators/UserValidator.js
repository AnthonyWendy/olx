const { checkSchema } = require('express-validator');

module.exports = {
    // Validar o cadastro
    editAction: checkSchema({
        //Regras específicas
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true, //Vai retirar os espaços
            isLength: {options: {min: 2}}, //Vai dizer que o min de caracteres é 
            errorMessage: 'O seu nome precisa de no mínimo de caracteres.'

        },
        email: {
            optional: true,
            isEmail: true,//verifica se é email
            normalizeEmail: true,//vai colocar o emaill prontinho para a inserção no banco
            errorMessage: 'E-mail inválido.'
        },
        password: {
            optional: true,
            isLength:{ options: { min: 2} },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres.'
        },
        state: {
            optional: true,
            notEmpty: true,
            errorMessage: 'É necessário informar o estado.'
        }
    })
}