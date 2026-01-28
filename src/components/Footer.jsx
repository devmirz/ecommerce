import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="amazon-footer">
            <button className="back-to-top" onClick={scrollToTop}>
                Back to top
            </button>

            <div className="footer-links-container">
                <div className="container footer-links-grid">
                    <div className="footer-col">
                        <h3>Get to Know Us</h3>
                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About BuyMore</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Press Center</a></li>
                            <li><a href="#">Investor Relations</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Make Money with Us</h3>
                        <ul>
                            <li><a href="#">Sell products on BuyMore</a></li>
                            <li><a href="#">Sell apps on BuyMore</a></li>
                            <li><a href="#">Become an Affiliate</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                            <li><a href="#">Self-Publish with Us</a></li>
                            <li><a href="#">Host an BuyMore Hub</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>BuyMore Payment Products</h3>
                        <ul>
                            <li><a href="#">BuyMore Rewards Visa Card</a></li>
                            <li><a href="#">BuyMore.com Store Card</a></li>
                            <li><a href="#">BuyMore Business Card</a></li>
                            <li><a href="#">Shop with Points</a></li>
                            <li><a href="#">Reload Your Balance</a></li>
                            <li><a href="#">BuyMore Currency Converter</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Let Us Help You</h3>
                        <ul>
                            <li><a href="#">BuyMore and COVID-19</a></li>
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Your Orders</a></li>
                            <li><a href="#">Shipping Rates & Policies</a></li>
                            <li><a href="#">Returns & Replacements</a></li>
                            <li><a href="#">Manage Your Content and Devices</a></li>
                            <li><a href="#">BuyMore Assistant</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-brand-section">
                <div className="container brand-inner">
                    <div className="brand-logo-group">
                        <img src={logo} alt="BuyMore Logo" className="footer-logo" />
                        <span className="footer-brand-name">BuyMore</span>
                    </div>
                    <div className="footer-controls">
                        <div className="control-item">🌍 English</div>
                        <div className="control-item">$ USD - U.S. Dollar</div>
                        <div className="control-item">🇺🇸 United States</div>
                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <div className="container legal-inner">
                    <div className="legal-links">
                        <a href="#">Conditions of Use</a>
                        <a href="#">Privacy Notice</a>
                        <a href="#">Consumer Health Data Privacy Disclosure</a>
                        <a href="#">Your Ads Privacy Choices</a>
                    </div>
                    <p className="copyright">© 1996-2026, BuyMore.com, Inc. or its affiliates</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
