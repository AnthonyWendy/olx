import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <img src="../image/404.jpg" width="50%" height="50%" />
            <Link to="/">Voltar para a Home.</Link>
        </div>
    )
}

export default Page;