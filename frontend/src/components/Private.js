import React from "react";
import { isLogged } from "../helpers/AuthHandler";
import SignIn from "../pages/SingIn";



export const Private = (props) => {
    
    if(!isLogged())
         return <SignIn/>
    
    return <props.component/>



}