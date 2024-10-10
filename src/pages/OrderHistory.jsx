// src/components/OrderHistory.js
import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
    const orders = useSelector(state => state.OrderReducer.orders);
    let total = 0;
    return (
        <div className="container mx-auto p-6 min-h-[40vh]">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            <div className="space-y-4">
                {orders?.map((order) => (
                    <div key={order.id} className="border p-4 rounded shadow">
                        <h3 className="text-lg font-bold">Order ID: {order.id}</h3>
                        <p>Date: {order.date}</p>
                        <p>Status: {order.status}</p>
                        <h4 className="font-semibold">Items:</h4>
                        <ul className="list-disc list-inside mb-2">
                            {order.items.map((item, index) => (
                                <li key={index}>
                                    {item.name} (x{item.quantity}) - ${item.price.toFixed(2)}
                                    {(()=>{
                                        total += ((item.price - (item.price/100*item.discount??100)) * item.quantity)
                                    })()}
                                </li>
                            ))}
                        </ul>
                        <p className="font-bold">Total: ${total}</p>
                    </div>
                ))}

                {(orders?.length === 0 ) && <p>No Order History Found</p>}
            </div>
        </div>
    );
};

export default OrderHistory;
