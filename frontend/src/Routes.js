import React from "react"
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SingIn from './pages/SingIn';

export default () => {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/singin" element={<SingIn/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        );
}