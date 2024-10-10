// src/components/ShippingInfo.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ShippingInfo = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            zip: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            address: Yup.string().required('Address is required'),
            city: Yup.string().required('City is required'),
            zip: Yup.string().required('Zip Code is required').length(5, 'Zip Code must be 5 characters'),
        }),
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return (
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 flex items-center'>
                <img src="/images/delivery.png" className='w-full' alt="delivery images" />
            </div>
            <div className='w-full lg:w-1/2'>

                <form onSubmit={formik.handleSubmit} className="bg-white p-6 lg:w-4/5 mx-auto">
                    <h2 className="text-2xl mb-4">Shipping Information</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`block w-full border p-2 mb-2 ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.name && formik.errors.name && <p className="text-red-500 text-xs mb-2">{formik.errors.name}</p>}

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        className={`block w-full border p-2 mb-2 ${formik.touched.address && formik.errors.address ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.address && formik.errors.address && <p className="text-red-500 text-xs mb-2">{formik.errors.address}</p>}

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                        className={`block w-full border p-2 mb-2 ${formik.touched.city && formik.errors.city ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.city && formik.errors.city && <p className="text-red-500 text-xs mb-2">{formik.errors.city}</p>}

                    <input
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.zip}
                        className={`block w-full border p-2 mb-2 ${formik.touched.zip && formik.errors.zip ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.zip && formik.errors.zip && <p className="text-red-500 text-xs mb-2">{formik.errors.zip}</p>}

                    <div className="flex justify-end mt-5">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShippingInfo;
