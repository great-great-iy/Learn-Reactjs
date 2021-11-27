import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';
import * as Messega from '../constants/Message';
import Message from '../conponents/Message';
// import * as actions from './../actions/index' ;
// import products from '../reducers/products';

class CartContainer extends Component {
    render() {
        var {message} = this.props;
        return (
            <Message message = {message}/>                 
        );  
    }

}


const mapStateToProps = (state) =>{
    return {
        message : state.message
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onChangeMessage : (message) =>{
            dispatch(actions.actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartContainer);
