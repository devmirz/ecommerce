import React from 'react';
import './ProductModal.css';
import StarRating from './StarRating';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ product, onClose }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    if (!product) return null;

    const handleBuyNow = () => {
        addToCart(product);
        onClose();
        navigate('/checkout');
    };

    // Mock stars distribution
    const distribution = [
        { stars: 5, percentage: 75 },
        { stars: 4, percentage: 15 },
        { stars: 3, percentage: 5 },
        { stars: 2, percentage: 3 },
        { stars: 1, percentage: 2 }
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="product-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-grid">
                    <div className="modal-gallery">
                        <div className="main-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="thumbnails">
                            <div className="thumb active"><img src={product.image} alt="" /></div>
                            <div className="thumb"><img src={product.image} alt="" /></div>
                            <div className="thumb"><img src={product.image} alt="" /></div>
                        </div>
                    </div>

                    <div className="modal-info">
                        <header className="info-header">
                            <p className="modal-category">{product.category}</p>
                            <h1>{product.name}</h1>
                            <div className="modal-rating">
                                <StarRating rating={product.rating} />
                                <span className="rating-count">{product.reviewCount.toLocaleString()} ratings</span>
                            </div>
                        </header>

                        <div className="modal-price">
                            <span className="currency">$</span>
                            <span className="amount">{Math.floor(product.price)}</span>
                            <span className="decimals">{(product.price % 1).toFixed(2).split('.')[1]}</span>
                        </div>

                        <div className="modal-description">
                            <p>{product.description}</p>
                        </div>

                        <div className="review-distribution">
                            {distribution.map(item => (
                                <div key={item.stars} className="dist-row">
                                    <span>{item.stars} star</span>
                                    <div className="bar-container">
                                        <div className="bar-fill" style={{ width: `${item.percentage}%` }}></div>
                                    </div>
                                    <span>{item.percentage}%</span>
                                </div>
                            ))}
                        </div>

                        <div className="modal-actions">
                            <button className="btn-add-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                            <button className="btn-buy-now" onClick={handleBuyNow}>Buy Now</button>
                        </div>

                        <div className="delivery-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                            <span>Fast Delivery: <strong>Arrives by Tomorrow</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
