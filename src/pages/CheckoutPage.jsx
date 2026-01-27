import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        paymentMethod: 'cod' // Default to Cash on Delivery
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock order placement
        alert(`Order placed successfully!\nMethod: ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}`);
        clearCart();
        navigate('/');
    };

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <h1 className="page-title">Checkout</h1>
                <div className="checkout-content">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <section className="form-section">
                            <h2>Shipping Information</h2>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>ZIP Code</label>
                                    <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                                </div>
                            </div>
                        </section>

                        <section className="form-section">
                            <h2>Payment Options</h2>
                            <div className="payment-options">
                                <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={formData.paymentMethod === 'cod'}
                                        onChange={handleChange}
                                    />
                                    <div className="option-info">
                                        <span className="option-title">Cash on Delivery</span>
                                        <span className="option-desc">Pay when your order arrives</span>
                                    </div>
                                </label>
                                <label className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={formData.paymentMethod === 'card'}
                                        onChange={handleChange}
                                    />
                                    <div className="option-info">
                                        <span className="option-title">Credit / Debit Card</span>
                                        <span className="option-desc">Secure online payment</span>
                                    </div>
                                </label>
                            </div>
                        </section>

                        <button type="submit" className="btn-place-order">Place Order</button>
                    </form>

                    <div className="order-summary">
                        <h2>Your Order</h2>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="summary-total">
                            <span>Total Amount</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
