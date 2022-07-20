const { checkSchema } = require('express-validator');

module.exports = {
    // Validar o cadastro
    signup: checkSchema({
        //Regras específicas
        name: {
            trim: true, //Vai retirar os espaços
            isLength: {options: {min: 2}}, //Vai dizer que o min de caracteres é 
            errorMenssage: 'O seu nome precisa de no mínimo de caracteres.'

        },
        Email: {
            isEmail: true,//verifica se é email
            normalizeEmail: true,//vai colocar o emaill prontinho para a inserção no banco
            errorMenssage: 'E-mail inválido.'
        },
        senha: {
            isLength:{ options: { min: 2} },
            errorMenssage: 'Senha precisa ter pelo menos 2 caracteres.'
        },
        state: {
            notEmpty: true,
            errorMenssage: 'É necessário informar o estado.'
        }
    })

}