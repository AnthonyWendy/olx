import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import {Template} from "./components/MainCompents";
import Header from './components/partiais/Header';
import Footer from './components/partiais/Footer';

import Routes from './Routes';

const Page = (props) => {
  return (
    <BrowserRouter>
       <Template>
        <Header/>
        <Routes/>
       <Footer/>
        </Template> 
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);