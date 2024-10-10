import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../redux/actions/CartAction';
import toast from 'react-hot-toast';
import Card from '../components/Card';

const ProductDetailsPage = () => {
    const products = useSelector(state => state.ProductReducer);

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('Medium'); // Default size
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            let prd = await products.filter(p => p.id === Number(id));
            setProduct(prd[0]);
            setLoading(false);
        };
        getData();
        // eslint-disable-next-line
    }, []);

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
    };

    const handleOnCart = () => {
        dispatch(addToCart({ ...product, quantity: quantity, size: size }));
        toast.success('Item Added Successfully!')
    }

    return (
        loading ? <Spinner /> :
            <div className='container mx-auto'>
                <div className="relative p-6 my-12">
                    {product.discount && <span className="bg-blue-600 py-1 px-2 text-xs absolute -top-1 -right-1 rounded-md text-slate-100">{product.discount}% off</span>}
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5">
                            <div className="relative w-full aspect-square">
                                <img
                                    src={product.imgSrc}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="md:w-3/5 md:pl-6 mt-6 md:mt-0 text-gray-800">
                            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                            <p className="mt-2">{product.description}</p>
                            <p className='my-2'>
                                Amount: {product.currency} {product.discount ? (product.price - (product.price / 100 * product.discount)).toFixed(2) : product.price.toFixed(2)}
                            </p>
                            <p className='flex items-center gap-3 my-2'>
                                <FontAwesomeIcon icon={faStar} className={`${product.isFeatured ? 'text-green-700' : ''}`} />
                                <span>{product.isFeatured ? 'Featured' : 'Not Featured'}</span>
                            </p>

                            {/* Size Selection */}
                            <div className="mt-4 flex items-center gap-3">
                                <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size:</label>
                                <select id="size" value={size}
                                    onChange={(e) => setSize(e.target.value)} className='pe-2'
                                >
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="Extra Large">Extra Large</option>
                                </select>
                            </div>

                            <div className="flex items-center mt-6">
                                <button
                                    className="bg-gray-200 text-gray-600 px-3 py-1 rounded-l"
                                    onClick={() => handleQuantityChange(-1)}
                                >
                                    -
                                </button>
                                <span className="px-4">{quantity}</span>
                                <button
                                    className="bg-gray-200 text-gray-600 px-3 py-1 rounded-r"
                                    onClick={() => handleQuantityChange(1)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="mt-6 px-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                                onClick={handleOnCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-18 my-4">
                    <h2 className="text-xl font-bold">Related Products</h2>
                    <Link to="products" className="text-blue-600 hover:underline">
                        View More
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8 px-4">

                    {products?.map(product => {
                        return product.isFeatured && <Card data={product} key={product.id} />
                    })}

                </div>
            </div>
    );
};

export default ProductDetailsPage;
