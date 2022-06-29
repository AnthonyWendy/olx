import React from 'react';
import { HeaderArea} from './styled';
import { Link } from 'react-router-dom';

import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img  className="logo" src="./image/olx-logo.png"/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged && 
                            <>
                                <li>
                                    <Link to="my-accounte">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>                            
                                <li>
                                    <Link to="post-an-ad" className="button">Anúncie aqui</Link>
                                </li>
                            </>
                        }

                        {!logged &&
                            <>
                            <li>
                                <Link to="singup">Cadastre-se</Link>
                            </li>
                            <li>
                                <Link to="/singin">Login</Link>
                            </li>
                            </>
                        }

                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;