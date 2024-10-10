// src/components/PaymentInfo.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PaymentInfo = ({ onSubmit, onBack }) => {
    

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expiration: '',
            cvv: '',
        },
        validationSchema: Yup.object({
            cardNumber: Yup.string().required('Card number is required').length(16, 'Card number must be 16 digits'),
            expiration: Yup.string().required('Expiration date is required'),
            cvv: Yup.string().required('CVV is required').length(3, 'CVV must be 3 digits'),
        }),
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return (
        <div className='flex'>
            <div className='lg:w-1/2 flex items-center'>
            <img src="/images/payment.webp" alt="" className='w-full' />
            </div>
            <div className='lg:w-1/2'>
                <form onSubmit={formik.handleSubmit} className="bg-white p-6 lg:w-4/5 mx-auto">
                    <h2 className="text-2xl mb-4">Payment Information</h2>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                        className={`block w-full border p-2 mb-4 ${formik.touched.cardNumber && formik.errors.cardNumber ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber && <p className="text-red-500">{formik.errors.cardNumber}</p>}

                    <input
                        type="text"
                        name="expiration"
                        placeholder="Expiration Date (MM/YY)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expiration}
                        className={`block w-full border p-2 mb-4 ${formik.touched.expiration && formik.errors.expiration ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.expiration && formik.errors.expiration && <p className="text-red-500">{formik.errors.expiration}</p>}

                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cvv}
                        className={`block w-full border p-2 mb-4 ${formik.touched.cvv && formik.errors.cvv ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.cvv && formik.errors.cvv && <p className="text-red-500">{formik.errors.cvv}</p>}

                    <div className="flex justify-between">
                        <button type="button" onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">
                            Back
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentInfo;
