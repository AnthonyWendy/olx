import React from 'react';
import { HeaderArea} from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
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
                        <li>
                            <Link to="">Cadastre-se</Link>
                        </li>
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Anúncie aqui</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;