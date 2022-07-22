const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


// Criar Schema do banco de dados
const modelSchema = new mongoose.Schema({
    name: String,
    slug: String
});

const modelName = 'Category';

//Verificação de conexão e se há o modelo User para a exportação, caso não haja, será criado.
if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
} else{
    module.exports = mongoose.model(modelName, modelSchema)
}