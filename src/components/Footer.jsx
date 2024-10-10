import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              Stylish is your number one destination for trendy and affordable fashion. We are committed to bringing you the latest styles with excellent customer service.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Men</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Women</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@stylish.com</li>
              <li className="text-gray-400">Phone: +123 456 789</li>
              <li className="text-gray-400">Address: 123 Fashion St, New York, USA</li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="/" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <p className="text-gray-400 mb-4">Subscribe to get updates on the latest trends and offers.</p>
            <form>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 mb-2 text-gray-900 bg-white rounded-md focus:outline-none"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Stylish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
