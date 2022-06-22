import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const Page = (props) => {
  return (
    <BrowserRouter>
        <div>Ta funcinando</div>
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