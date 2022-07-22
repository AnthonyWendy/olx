const User = require('../models/Users');
const Category = require('../models/Category');
const Ads = require('../models/Ads');

// Responsável por controlar as alterações realizadas nos anúncios

module.exports = {
    getCategories: async (req, res) => {
        const cats = await Category.find();

        let categories = [];

        for(let i in cats){
            categories.push({
                ...cats[i]._doc,
                img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
            })
        }

        res.json({categories});
    },
    
    addAction: async (req, res) => {
        //Método para adicionar novos anúncios

        //Pegas os dados do usuário
        let {title, price, priceneg, desc, cat, token} = body;

        const user = await User.findOne({token}).exec();

        //Verificar se há titulo e descrição
        if(!title || !cat){
            req.json({error: 'Titulo ou categoria não foram preenchidos.'})
        }

        //Formatar o valor  informado
        if(price){
            price = price.replace('.','').replace(',','.').replace('R$', '');
            price = parseFloat(price); 
        } else{
            price = 0;
        }

        const newAd = new Ads();
        newAd.status = true;
        newAd.idUser = user._id;
        newAd.state = user.state;
        newAd.dateCreated = new Date();
        newAd.title = title;
        newAd.category = cat;
        newAd.price = price;
        newAd.priceNegotiable = (priceneg == 'true') ? true : false;
        newAd.description = desc;
        newAd.views = 0;

    },

    getList: async (req, res) => {

    },

    getItem: async (req, res) => {

    },

    editAction: async (req, res) => {

    },
};