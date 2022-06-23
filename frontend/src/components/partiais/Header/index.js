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
            </div>
        </HeaderArea>
    );
}

export default Header;

