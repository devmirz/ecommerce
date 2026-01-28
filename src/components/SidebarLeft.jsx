import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './SidebarLeft.css';

const SidebarLeft = ({ isOpen, onClose }) => {
    const location = useLocation();

    const menuItems = [
        { icon: '🔥', label: 'Popular Products', path: '/' },
        { icon: '🧭', label: 'Explore New', path: '/explore' },
        { icon: '👕', label: 'Clothing and Shoes', path: '/clothing' },
        { icon: '🎁', label: 'Gifts and Living', path: '/gifts' },
        { icon: '💡', label: 'Inspiration', path: '/inspiration' },
    ];

    return (
        <aside className={`sidebar-left ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-logo">
                <div className="logo-group">
                    <img src={logo} alt="BuyMore Logo" className="vibrant-logo" />
                    <h2>BuyMore</h2>
                </div>
                <button className="sidebar-close-btn" onClick={onClose}>✕</button>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-section">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn">
                    <span className="nav-icon">↪</span>
                    <span>Log out</span>
                </button>
            </div>
        </aside >
    );
};

export default SidebarLeft;
