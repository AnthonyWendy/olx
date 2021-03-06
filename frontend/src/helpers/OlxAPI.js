import Cookies from 'js-cookie';
import qs from 'qs';
const BASEAPI = 'http://192.168.129.122:5000';
// const BASEAPI = 'http://localhost:5000';

const apiFetchFile = async (endpoint,body) =>{
    if(!body.token){
        let token = Cookies.get('token');
        if(token) body.append("token", token)
    }
    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        body
    });

    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/singin';
        return;
    }
    return json;
}

const apiFetchPost = async (endpoint, body) => {
    
    if(!body.token){
        let token = Cookies.get('token');
        if(token) {
            body.token  = token;
        }
    }
    
    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)      
    });

    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/singin';
        return;
    }
    return json;
}

const apiFetchGet = async (endpoint, body = []) => {
    
    if(!body.token){
        let token = Cookies.get('token');
        if(token) {
            body.token  = token;
        }
    }
    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);

    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/singin';
        return 
    }
    return json;
}

const OlxAPI = {
    login:async (email, password) => {

        const json = await apiFetchPost(
                '/user/signin',
                {email, password}
        );
        return json;
    },

    register: async (name, email, password, state) => {
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password, state}
        );
        return json;
    },

    getStates: async () => {
        const json = await apiFetchGet(
            '/states'
        );
        return json.states;
    },

    getCategories: async () => {
        const json = await apiFetchGet(
            '/categories'
        );

        // Faz a substitui????o do localhost encontrada dentro do link, 
        // pelo link da API do lab, percorre o vetor com o .map para fazer a substitui????o
        json.categories.map((categoria) => {
            categoria.img = BASEAPI+categoria.img.substring(21);
        }); 
            
        return json.categories;
    },

    getAds: async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );

        json.ads.map((ads) => {
            ads.image = BASEAPI+ads.image.substring(21);
        });

        return json;
    },

    getAd: async (id, other = false) => {
        const json = await apiFetchGet("/ad/item", { id, other });


        if(json.images) {
            for (let i = 0; i < json.images.length; i++) {
                json.images[i] = BASEAPI + json.images[i].substring(21);
            }

            json.others.map((ad) => {
                ad.image = BASEAPI + ad.image.substring(21);
            });
        }

        

        return json;
    },

    addAd: async (fData) => {
        const json = await apiFetchFile(
            '/ad/add',
            fData
        );
        return json;
    },

    getUserInfo: async () => {
        const json = await apiFetchGet("/user/me");
        return json;
    },

    getApi: () => {
        return BASEAPI;
    },

}        
export default () => OlxAPI;