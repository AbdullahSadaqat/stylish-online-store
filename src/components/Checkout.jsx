// src/components/Checkout.js
import React, { useState } from 'react';
import ShippingInfo from './ShippingInfo';
import PaymentInfo from './PaymentInfo';
import OrderReview from './OrderReview';

const Checkout = () => {
    const [step, setStep] = useState(1);
    const [shippingData, setShippingData] = useState({});
    const [paymentData, setPaymentData] = useState({});

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleShippingData = (data) => {
        setShippingData(data);
        nextStep();
    };

    const handlePaymentData = (data) => {
        setPaymentData(data);
        nextStep();
    };

    return (
        <div className="container mx-auto p-6">
            {/* Step Indicator */}
            <div className="mb-6">
                <div className="flex space-x-2">
                    {[1, 2, 3].map((num) => (
                        <div
                            key={num}
                            className={`w-8 h-8 flex items-center justify-center rounded-md ${
                                step === num ? 'bg-blue-500 text-white px-8' : 'bg-gray-300'
                            }`}
                        >
                            {num}
                        </div>
                    ))}
                </div>
            </div>

            {/* Step Components */}
            {step === 1 && <ShippingInfo onSubmit={handleShippingData} />}
            {step === 2 && (
                <PaymentInfo onSubmit={handlePaymentData} onBack={prevStep} />
            )}
            {step === 3 && (
                <OrderReview
                    shippingData={shippingData}
                    paymentData={paymentData}
                />
            )}
        </div>
    );
};

export default Checkout;
