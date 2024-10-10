// src/components/OrderReview.js
import React from 'react';
import { toast } from 'react-hot-toast';
import { clearCart } from '../redux/actions/CartAction';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addOrder} from '../redux/actions/OrderAction'

const OrderReview = ({ shippingData, paymentData }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.CartReducer);

    const handlePlaceOrder = () => {
        toast.success('Order placed successfully!');

        const order = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString(),
            items: cartItems,
            status: 'Pending',
            shipping: shippingData,
            payment: paymentData,
        };
        dispatch(addOrder(order));

        dispatch(clearCart());
        navigate('/');
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">Order Review</h2>
            <h3 className="text-lg mb-2">Shipping Information:</h3>
            <p>Name: {shippingData.name}</p>
            <p>Address: {shippingData.address}</p>
            <p>City: {shippingData.city}</p>
            <p>Zip: {shippingData.zip}</p>
            <h3 className="text-lg mt-4 mb-2">Payment Information:</h3>
            <p>Card Number: {paymentData.cardNumber.replace(/.(?=.{4})/g, '*')}</p>
            <p>Expiration: {paymentData.expiration}</p>
            <button onClick={handlePlaceOrder} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                Place Order
            </button>
        </div>
    );
};

export default OrderReview;
