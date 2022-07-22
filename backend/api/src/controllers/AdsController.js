//Biblioteca para a manipulação de imagens
const {v4: uuid} = require('uuid');
const jimp = require('jimp');

const User = require('../models/Users');
const Category = require('../models/Category');
const Ads = require('../models/Ads');

//Função que diminuir o tamanho da imagem, dá um nome para o arquivo e salva ela
const addImage = async (buffer) => {
    let newName = `${uuid()}.jpg`;
    let tmpImg = await jimp.read(buffer);
    tmpImg.cover(500, 500).quality(80).write(`./public/media/${newName}`);
    return newName;
}

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
        let {title, price, priceneg, desc, cat, token} = req.body;

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

        //Verificando se foi enviado imagem
        if(req.files && req.files.img){
            //Verificando se foi enviado mais de duas imagens
            if(req.files.img.length == undefined){
                if(['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)){
                    let url = await addImage(req.files.img.data);
                    newAd.images.push({
                        url,
                        default: false
                    });

                }
            }else {
                for(let i=0; i < req.files.img.length; i++){
                    if(['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img[i].mimetype)){
                        let url = await addImage(req.files.img.data);
                        newAd.images.push({
                            url,
                            default: false
                        });
                    }
                }
            }
            //Coloca a primeira imagem como default para deixar ela como capa
            if(newAd.images.length > 0){
                newAd.images[0].default = true;
            }
        }

        const info = await newAd.save();
        res.json({id: info._id});

    },

    getList: async (req, res) => {
        let 

    },

    getItem: async (req, res) => {

    },

    editAction: async (req, res) => {

    },
};