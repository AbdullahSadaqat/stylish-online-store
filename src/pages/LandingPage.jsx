import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const products = useSelector(state => state.ProductReducer);

  return (
    <div className="container mx-auto px-4">
      {/* Top Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {/* Large Image on the Left */}
        <div className="col-span-2">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="/images/product3.jpg"
              alt="Product 1"
              className="rounded-md object-cover w-74 h-68"
            />
          </div>
        </div>

        {/* Two Smaller Images on the Right */}
        <div className="grid gap-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="/images/product4.jpg"
              alt="Product 2"
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="/images/product5.jpg"
              alt="Product 3"
              className="rounded-md object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      

      {/* Featured Products */}
      <div className="flex justify-between items-center mt-18 mb-4">
        <h2 className="text-xl font-bold">Featured Products</h2>
        <Link to="products" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        
        {products?.map(product => {
          return product.isFeatured && <Card data={product} key={product.id} />
        })}

      </div>

       {/* Top Images Section */}
       <div className="grid grid-cols-1 mt-24 md:grid-cols-2 gap-4 my-8">
        {/* Large Images */}
        <div className="aspect-w-4 aspect-h-3">
          <img
            src="/images/product1.jpg" // Replace with your image URL
            alt="Product 1"
            className="rounded-md object-cover w-full h-full"
          />
        </div>
        <div className="aspect-w-4 aspect-h-3">
          <img
            src="/images/product6.jpg" // Replace with your image URL
            alt="Product 2"
            className="rounded-md object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Latest Products</h2>
        <Link to="products" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16">
        {products?.map(product => {
          return !product.isFeatured && <Card data={product}  key={product.id} />
        })}
      </div>

    </div>


     
    

  );
};

export default HomePage;
