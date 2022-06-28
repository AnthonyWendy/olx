import React, { useState } from 'react';
import { PageArea} from './styled';
import useApi from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'


import {PageContainer, PageTitle} from '../../components/MainCompents'

const Page = () => {
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabledDisable(true);

        const json = await api.login(email, password);        

        if(json.error) {
            setError(json.error);
        }
        else{
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }
    };

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>

            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">E-mail:</div>
                        <div className="area-input">
                            <input type="email"></input>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Senha:</div>
                        <div className="area-input">
                            <input type="password"></input>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Lembrar senha:</div>
                        <div className="area-input-check">
                            <input type="checkbox"></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>

    );
}
export default Page;