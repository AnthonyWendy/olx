import React from "react"
import {Routes, Route} from 'react-router-dom';

import { Private } from "./components/Private";

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SingIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd'
import Ads from './pages/Ads';
import Users from './pages/Users'

export default () => {
        return (
            <Routes>
                {/* public */}
                <Route path="/singin" element={<SingIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/ad/:id" element={<AdPage/>}/>
                <Route path="/ads" element={<Ads/>}/>

                <Route path="/*" element={<NotFound/>}/>

                {/* privado */}
                <Route path="/" element={<Private component={Home}/>}/>
                <Route path="/sobre" element={<Private component={About}/>}/>
                <Route path="/post-an-ad" element={<Private component={AddAd}/>}/>
                <Route path="/my-account" element={<Private component={Users}/>}/>
                
            </Routes>
        );
}