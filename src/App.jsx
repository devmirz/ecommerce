import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div id="products">
                  <ProductList />
                </div>
              </>
            } />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
