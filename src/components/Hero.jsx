import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Discover <span className="text-gradient">Luxury</span> for Everyday Life
                    </h1>
                    <p className="hero-subtitle">
                        Curated collections of premium essentials designed to elevate your style and comfort.
                        Experience quality like never before.
                    </p>
                    <div className="hero-actions">
                        <a href="#products" className="btn btn-primary">Shop Now</a>
                        <a href="#about" className="btn btn-secondary">Learn More</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-circle"></div>
                    <div className="visual-card">
                        <div className="card-content">
                            <span>New Arrival</span>
                            <h3>Premium Headphones</h3>
                            <p>$299.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
