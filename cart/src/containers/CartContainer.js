import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../conponents/Cart';
import CartItem from './../conponents/CartItem';
import CartResult from '../conponents/CartResult';
import * as actions from './../actions/index';
import * as Messega from './../constants/Message';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;

        return (
            <>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
            </>                  
        );  
    }
    showCartItem = (cart) =>{
        var {onRemoveProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        var result = <tr>
            <td>
                {Messega.MSG_CART_EMPTY}
            </td>
        </tr>;
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onRemoveProductInCart = {onRemoveProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = {cart} />
        }
        return result;
    }
}
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired
}

const mapStateToProps = (state) =>{
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onRemoveProductInCart : (product) =>{
            dispatch(actions.actRemoveProductInCart(product));
        },
        onChangeMessage : (message) =>{
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateProductInCart : (product, quantity) =>{
            dispatch(actions.actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartContainer);
