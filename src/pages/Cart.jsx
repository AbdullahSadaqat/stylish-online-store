import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/actions/CartAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    
    const totalPrice = cartItems.reduce((total, item) => total + (item.price - (item.price/100*item.discount??100)) * item.quantity, 0);

    useEffect(()=>{
        setLoading(false);
        // eslint-disable-next-line
    }, [])

    return (
        loading ? <Spinner /> :
        <div className="container mx-auto p-6 min-h-[50vh]">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='max-w-full overflow-x-scroll'>
                    <table className='w-full'>
                        <thead>
                            <th className='text-start'>Action</th>
                            <th className='text-start'>Product</th>
                            <th className='text-start'>Quantity</th>
                            <th className='text-start'>Amount</th>
                            <th className='text-start'>Discount %</th>
                            <th className='text-start'>Sub Total</th>
                            <th className='text-start'>Total</th>
                        </thead>
                        <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="border-b pb-4">
                                <td>
                                    <button className="text-red-600 px-4 py-2 rounded"
                                        onClick={() => dispatch(removeFromCart(item.id))} >
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                                <td className="font-semibold">{item.title}</td>
                                <td>{item.quantity}</td>
                                <td> {item.currency} {item.price.toFixed(2)}</td>
                                <td> {item.discount??''}</td>
                                <td> {item.currency} {(item.price * item.quantity).toFixed(2)}</td>
                                <td> {item.currency} {((item.price - (item.price/100*item.discount)) * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='font-bold text-lg'>Grand Total</td>
                            <td className='font-bold text-lg'>{totalPrice.toFixed(2)}</td>
                        </tfoot>
                    </table>
                    <div className="flex justify-end my-5 gap-4">
                    <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => dispatch(clearCart())}
                        >Clear Cart</button>
                        <Link to='/checkout' className='py-2 px-4 bg-blue-600 text-white rounded'>Procceed for payment</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
