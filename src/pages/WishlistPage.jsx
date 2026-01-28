import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './WishlistPage.css';

const WishlistPage = ({ onQuickView }) => {
    const { wishlist, clearWishlist, wishlistCount } = useWishlist();
    const { addToCart } = useCart();

    const handleAddAllToCart = () => {
        wishlist.forEach(product => addToCart(product));
        clearWishlist();
    };

    if (wishlistCount === 0) {
        return (
            <div className="wishlist-page-empty container">
                <div className="empty-wishlist-content">
                    <span className="empty-icon">❤️</span>
                    <h2>Your Wishlist is Empty</h2>
                    <p>You haven't saved any items yet. Start exploring our collection to find your favorites!</p>
                    <Link to="/" className="btn-primary">Browse Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="wishlist-page container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">My Wishlist</h1>
                    <p className="page-subtitle">A curated collection of your favorite items</p>
                </div>
                <div className="page-actions">
                    <button onClick={clearWishlist} className="btn-secondary">Clear All</button>
                    <button onClick={handleAddAllToCart} className="btn-primary">Add All to Cart</button>
                </div>
            </div>

            <div className="wishlist-grid">
                {wishlist.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onQuickView={onQuickView}
                    />
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
