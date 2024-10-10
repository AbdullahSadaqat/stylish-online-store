import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(state => state.CartReducer);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className='flex-shrink-0 flex items-center'>
            <Link to="/" className="text-3xl font-bold text-gray-900 flex-shrink-0 flex items-center">Stylish <span className="text-xs ml-2 text-gray-500 hidden lg:inline">Online Store</span></Link>
          </div>

          <div className='flex items-center gap-7'>

            {/* Menu items */}
            <div className="hidden lg:flex lg:space-x-6 items-center">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
              <Link to="/orders" className="text-gray-700 hover:text-gray-900">Orders</Link>

            </div>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
              </a>
              <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative">
                <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
                {(cartItems?.length > 0) && <span className='absolute -top-3 -right-3 bg-blue-700 text-white p-0.5 flex items-center justify-center rounded-full w-5 h-5 text-[10px]'>{cartItems?.length}</span>}
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
              </Link>
            </div>
            <div className="-mr-2 flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-300 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="space-y-1 pt-2 pb-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">Home</Link>
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">Products</Link>
            <Link to="/orders" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">Orders</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
