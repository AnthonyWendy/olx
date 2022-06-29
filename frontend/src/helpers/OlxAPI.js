import Cookies from 'js-cookie';

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
        boy: JSON.stringify(body)
    });

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
                'user/singin',
                {email, password}
        );
        return json;
    }
};

export default () => OlxAPI;