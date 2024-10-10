// src/store/orderReducer.js
const initialState = {
    orders: [],
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.payload],
            };
        default:
            return state;
    }
};

export default OrderReducer;
