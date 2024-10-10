import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
// import CartPage from './pages/CartPage';
import CheckoutPage from "./pages/CheckoutPage";
// import AdminPanel from './pages/AdminPanel';
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import OrderHistory from "./pages/OrderHistory";

const App = () => {
  return (
    <Provider store={store}>
        <Navbar />
        <Toaster />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </div>
        <Footer />
    </Provider>
  );
};

export default App; // Ensure this is correct
