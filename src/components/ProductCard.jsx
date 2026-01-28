import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
    const { addToCart } = useCart();

    return (
        <div className="dashboard-product-card" onClick={() => onQuickView && onQuickView(product)}>
            <div className="card-image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="card-heart">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </div>
                {/* Dot markers as seen in image */}
                <div className="dot-markers">
                    <div className="dot yellow"></div>
                    <div className="dot black"></div>
                </div>
            </div>

            <div className="card-info">
                <div className="info-main">
                    <span className="card-category">Our Picks</span>
                    <h3 className="card-title">{product.name}</h3>
                    <div className="card-rating">
                        <span className="star-icon">⭐</span>
                        <span className="rating-value">{product.rating}</span>
                        <span className="review-count">({product.reviewCount})</span>
                    </div>
                    <div className="card-details-row">
                        <span className="stock-indicator">In Stock</span>
                        <span className="color-count">+3 Colors</span>
                    </div>
                </div>

                <div className="price-circle" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                    ${Math.floor(product.price)}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
