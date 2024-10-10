import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants';

const initialValue = [];

const CartReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            }
            return [...state, { ...action.payload, quantity: action.payload.quantity }];

        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload);

        case CLEAR_CART:
            return [];

        default:
            return state;
    }
};

export default CartReducer;
