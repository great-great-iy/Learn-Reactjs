import * as Types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1;
    switch (action.type){
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product.id);
            if(index !== -1){
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.REMOVE_PRODUCT_IN_CART:
            index = findProductInCart(state, product.id);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product.id);
            if(index !== -1){
                state[index].quantity = action.quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (cart, id) => {
    var index = -1;
    if(cart.length >0){
        for(var i = 0; i<cart.length; i++){
            if(cart[i].product.id === id){
                index = i;
                break;
            }
        }
    }
    return index;

}

export default cart;