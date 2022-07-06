import Cookies from 'js-cookie';
import qs from 'qs';
const BASEAPI = 'http://192.168.128.111:5000'

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

        // Faz a substituição do localhost encontrada dentro do link, 
        // pelo link da API do lab, percorre o vetor com o .map para fazer a substituição
        json.categories.map((categoria) => {
            categoria.img = BASEAPI+categoria.img.substring(21);
        }); 
            
        return json.categories;
    },

    getAds: async (options) => {
        const json = await apiFetchGet(
            '/ads/list',
            options
        );
        return json;
    }
};

export default () => OlxAPI;