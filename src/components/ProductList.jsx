import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import { useSearch } from '../context/SearchContext';
import './ProductList.css';

const ProductList = ({ onQuickView }) => {
    const {
        searchQuery, setSearchQuery,
        activeFilter, setActiveFilter,
        priceRange, setPriceRange,
        minRating, setMinRating
    } = useSearch();
    const [sortBy, setSortBy] = useState('featured');

    const filters = ['All', 'Men', 'Women'];

    const filteredProducts = products.filter(product => {
        const category = product.category ? product.category.toLowerCase() : '';
        const name = product.name ? product.name.toLowerCase() : '';
        const search = searchQuery.toLowerCase();
        const price = product.price || 0;
        const rating = product.rating || 0;

        const matchesSearch = !searchQuery.trim() ||
            name.includes(search) ||
            category.includes(search);

        const matchesCategory = activeFilter === 'All' ||
            (activeFilter === 'Men' && category === 'fashion') ||
            (activeFilter === 'Women' && category === 'beauty') ||
            (category === activeFilter.toLowerCase());

        const matchesPrice = price >= priceRange.min && price <= priceRange.max;
        const matchesRating = rating >= minRating;

        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    // Sort Logic
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured (default)
    });

    return (
        <section className="product-list-container no-sidebar">
            <div className="product-list-main">
                <header className="explore-header">
                    <div className="header-top">
                        <div className="title-sort-group">
                            <h2 className="explore-title">Explore</h2>
                            <select className="sort-dropdown" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Avg. Customer Review</option>
                            </select>
                        </div>
                        <div className="filter-chips">
                            {filters.map(f => (
                                <button
                                    key={f}
                                    className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(f)}
                                >
                                    <span className={`chip-icon icon-${f.toLowerCase()}`}></span>
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="image-categories">
                        <div className="image-category-item" onClick={() => setActiveFilter('Footwear')}>
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop" alt="Shoes" />
                            <span>Shoes</span>
                        </div>
                        <div className="image-category-item" onClick={() => setActiveFilter('Electronics')}>
                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop" alt="Gadgets" />
                            <span>Gadgets</span>
                        </div>
                        <div className="image-category-item" onClick={() => setActiveFilter('Fashion')}>
                            <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=100&h=100&fit=crop" alt="Fashion" />
                            <span>Fashion</span>
                        </div>
                        <div className="image-category-item" onClick={() => setActiveFilter('Beauty')}>
                            <img src="https://images.unsplash.com/photo-1512496011212-5b9a7a83733d?w=100&h=100&fit=crop" alt="Beauty" />
                            <span>Beauty</span>
                        </div>
                        <div className="image-category-item" onClick={() => setActiveFilter('Home')}>
                            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=100&h=100&fit=crop" alt="Home" />
                            <span>Home</span>
                        </div>
                    </div>
                </header>

                <div className="bento-grid">
                    {/* Special Bento Banners (always visible, only if no search/filter active for cleaner UI or kept as widgets) */}
                    {activeFilter === 'All' && !searchQuery && (
                        <>
                            <div className="bento-item banner-mint">
                                <div className="banner-content">
                                    <h3>GET UP TO 50% OFF</h3>
                                    <button className="banner-btn">Get Discount</button>
                                </div>
                                <div className="banner-img">
                                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" alt="Special Offer" />
                                </div>
                            </div>

                            <div className="bento-item banner-yellow">
                                <div className="banner-content">
                                    <h3>Winter's weekend</h3>
                                    <p>keep it casual</p>
                                </div>
                                <div className="banner-img-small">
                                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400" alt="Winter Style" />
                                </div>
                                <div className="banner-arrow">→</div>
                            </div>
                        </>
                    )}

                    {/* Actual Products */}
                    {sortedProducts.length > 0 ? (
                        sortedProducts.map((product, index) => (
                            <div key={product.id} className={`bento-item product-item ${index === 0 && activeFilter === 'All' ? 'featured-product' : ''}`}>
                                <ProductCard
                                    product={product}
                                    onQuickView={() => onQuickView(product)}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="bento-item no-products-widget">
                            <div className="no-products-content">
                                <span>🔍</span>
                                <p>No products found for "{searchQuery || activeFilter}"</p>
                                <button onClick={() => { setSearchQuery(''); setActiveFilter('All'); setMinRating(0); setPriceRange({ min: 0, max: 1000 }); }}>Clear Filter</button>
                            </div>
                        </div>
                    )}

                    {/* Favourites Small Widget (as seen in image) */}
                    <div className="bento-item widget-favourites">
                        <div className="widget-header">
                            <h4>Favourites</h4>
                            <div className="widget-arrows">
                                <span>{'<'}</span>
                                <span>{'>'}</span>
                            </div>
                        </div>
                        <div className="fav-previews">
                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100" alt="Fav 1" />
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100" alt="Fav 2" />
                        </div>
                        <button className="btn-see-all">See All</button>
                    </div>

                    <div className="bento-item banner-blue">
                        <div className="banner-content">
                            <h3>Bring Bold Fashion</h3>
                            <p>Layers on Layers</p>
                        </div>
                        <div className="banner-img-full">
                            <img src="https://images.unsplash.com/photo-1539109132314-3475d24c2194?auto=format&fit=crop&q=80&w=400" alt="Fashion" />
                        </div>
                        <div className="banner-arrow">→</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
