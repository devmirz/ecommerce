import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLeft from './components/SidebarLeft';
import DashboardTopBar from './components/DashboardTopBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { WishlistProvider } from './context/WishlistContext';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductModal from './components/ProductModal';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <SearchProvider>
          <Router>
            <div className={`App ${isSidebarOpen ? 'sidebar-active' : ''}`}>
              <SidebarLeft isOpen={isSidebarOpen} onClose={closeSidebar} />

              {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

              <main className="dashboard-main">
                <DashboardTopBar onLogoClick={toggleSidebar} />

                <section className="dashboard-content">
                  <Routes>
                    <Route path="/" element={
                      <div id="products">
                        <ProductList onQuickView={setSelectedProduct} />
                      </div>
                    } />
                    <Route path="/explore" element={<ProductList onQuickView={setSelectedProduct} />} />
                    <Route path="/clothing" element={<ProductList onQuickView={setSelectedProduct} />} />
                    <Route path="/gifts" element={<ProductList onQuickView={setSelectedProduct} />} />
                    <Route path="/inspiration" element={<ProductList onQuickView={setSelectedProduct} />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/wishlist" element={<WishlistPage onQuickView={setSelectedProduct} />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<ProductList onQuickView={setSelectedProduct} />} />
                  </Routes>
                </section>

                <Footer />
              </main>

              {selectedProduct && (
                <ProductModal
                  product={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                />
              )}
            </div>
          </Router>
        </SearchProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
