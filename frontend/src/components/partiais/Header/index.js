import React from 'react';
import { HeaderArea} from './styled';
import { Link } from 'react-router-dom';

import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

const handleLogout = () => {
    doLogout();
    window.location.href = '/';
}

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
                                    <Link to="my-account">Minha Conta</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>                            
                                <li>
                                    <Link to="post-an-ad" className="button">Anúncie aqui</Link>
                                </li>
                            </>
                        }

                        {!logged &&
                            <>
                            <li>
                                <Link to="/signup">Cadastre-se</Link>
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