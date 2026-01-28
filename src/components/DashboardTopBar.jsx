import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import logo from '../assets/logo.png';
import './DashboardTopBar.css';

const DashboardTopBar = ({ onLogoClick }) => {
    const { cartCount } = useCart();
    const {
        searchQuery, setSearchQuery,
        isFilterOpen, setIsFilterOpen,
        priceRange, setPriceRange,
        minRating, setMinRating,
        setActiveFilter
    } = useSearch();

    return (
        <header className="dashboard-top-bar">
            <div className="top-bar-left">
                <div className="brand-trigger" onClick={onLogoClick}>
                    <img src={logo} alt="BuyMore" className="brand-logo-small" />
                    <span className="brand-name-small">BuyMore</span>
                </div>
            </div>


            <div className="top-bar-right">
                <div className="search-pill">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="filters-container">
                    <button
                        className={`filters-pill ${isFilterOpen ? 'active' : ''}`}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <span>Filters</span>
                        <span className="dot-blue"></span>
                    </button>

                    {isFilterOpen && (
                        <div className="filters-dropdown">
                            <div className="dropdown-section">
                                <h4>Price Range</h4>
                                <div className="dropdown-price-inputs">
                                    <input
                                        type="number"
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                                        placeholder="Min"
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                                        placeholder="Max"
                                    />
                                </div>
                            </div>

                            <div className="dropdown-section">
                                <h4>Rating</h4>
                                <div className="dropdown-ratings">
                                    {[4, 3, 2, 1].map(star => (
                                        <label key={star} className="dropdown-rating-option">
                                            <input
                                                type="radio"
                                                name="rating-dropdown"
                                                checked={minRating === star}
                                                onChange={() => setMinRating(star)}
                                            />
                                            <span>{star} Stars & Up</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="dropdown-footer">
                                <button className="btn-reset" onClick={() => {
                                    setPriceRange({ min: 0, max: 1000 });
                                    setMinRating(0);
                                    setActiveFilter('All');
                                    setSearchQuery('');
                                }}>Reset All</button>
                                <button className="btn-apply" onClick={() => setIsFilterOpen(false)}>Apply</button>
                            </div>
                        </div>
                    )}
                </div>

                <Link to="/cart" className="cart-link">
                    <div className="cart-pill">
                        <span className="pill-icon">🛒</span>
                        <span className="pill-label">Cart</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default DashboardTopBar;
