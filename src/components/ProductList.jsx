import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import './ProductList.css';

const ProductList = () => {
    return (
        <section className="product-list" id="products">
            <div className="container">
                <header className="section-header text-center">
                    <span className="subtitle">Curated Collection</span>
                    <h2 className="title">Featured <span className="text-highlight">Products</span></h2>
                    <p className="description">Explore our latest arrivals crafted for the modern connoisseur.</p>
                </header>

                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
