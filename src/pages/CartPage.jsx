import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page-empty">
                <div className="container">
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" className="btn-primary">Browse Collection</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <h1 className="page-title">Shopping Cart</h1>
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="item-category">{item.category}</p>
                                    <p className="item-price">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="item-quantity">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <div className="item-total">
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" className="btn-checkout">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
