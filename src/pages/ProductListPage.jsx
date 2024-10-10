import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import Spinner from '../components/Spinner';

const ProductListingPage = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector(state => state.ProductReducer)

  useEffect(()=>{
    setLoading(false)
  }, [])

  return (
    loading ? <Spinner /> :
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Our Products</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products?.map(product => {
          return <Card data={product} key={product.id} />
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
