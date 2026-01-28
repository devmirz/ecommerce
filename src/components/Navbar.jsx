import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useWishlist } from '../context/WishlistContext';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const { searchQuery, setSearchQuery } = useSearch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const categories = ['Electronics', 'Beauty', 'Kitchen', 'Smart Home', 'Sports', 'Fashion', 'Home'];

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <div className="container navbar-container">
                    <div className="navbar-left">
                        <Link
                            to="/"
                            className="navbar-logo"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsSidebarOpen(true);
                            }}
                        >
                            LuxeMart
                        </Link>
                    </div>

                    <form className="search-bar" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="search-button" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </button>
                    </form>

                    <div className="navbar-actions">
                        <Link to="/wishlist" className="wishlist-action" title="Wishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
                        </Link>

                        <Link to="/cart" className="cart-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                            <span className="cart-text">Cart</span>
                        </Link>

                        <div className="auth-actions">
                            <Link to="/login" className="login-link">Sign In</Link>
                        </div>

                        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
            <div className={`navbar-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="5"></circle>
                        <path d="M20 21a8 8 0 1 0-16 0"></path>
                    </svg>
                    <h3>Hello, Sign In</h3>
                    <button className="sidebar-close" onClick={() => setIsSidebarOpen(false)}>&times;</button>
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-section">
                        <h4>Trending</h4>
                        <ul>
                            <li><Link to="/" onClick={() => { setSearchQuery(''); setIsSidebarOpen(false); }}>Best Sellers</Link></li>
                            <li><Link to="/" onClick={() => { setSearchQuery(''); setIsSidebarOpen(false); }}>New Releases</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar-section">
                        <h4>Shop By Category</h4>
                        <ul>
                            {categories.map(cat => (
                                <li key={cat}>
                                    <Link to="/" onClick={() => { setSearchQuery(cat); setIsSidebarOpen(false); }}>
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sidebar-section">
                        <h4>Account & Settings</h4>
                        <ul>
                            <li><Link to="/login" onClick={() => setIsSidebarOpen(false)}>Your Account</Link></li>
                            <li><Link to="/wishlist" onClick={() => setIsSidebarOpen(false)}>Wishlist</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
