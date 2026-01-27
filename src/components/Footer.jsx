import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-section brand">
                    <h2 className="footer-logo">Luxe<span className="logo-accent">Mart</span></h2>
                    <p>Elevating your lifestyle with premium quality essentials.</p>
                </div>

                <div className="footer-section links">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Sale</a></li>
                        <li><a href="#">Collections</a></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section newsletter">
                    <h3>Stay in the Loop</h3>
                    <p>Subscribe for exclusive offers and updates.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; 2026 LuxeMart. All rights reserved.</p>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Twitter">TW</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
