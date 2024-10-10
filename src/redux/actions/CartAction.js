// src/redux/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});
