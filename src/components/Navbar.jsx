import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Luxe<span className="logo-accent">Mart</span>
                </Link>

                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>
                    <a href="/#products" className="nav-link">Shop</a>
                    <Link to="/about" className="nav-link">About</Link>
                    <a href="/#contact" className="nav-link">Contact</a>
                </div>

                <div className="navbar-actions">
                    <Link to="/cart" className="cart-btn" aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="cart-badge">{cartCount}</span>
                    </Link>

                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
