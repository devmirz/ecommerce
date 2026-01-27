import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <header className="about-hero">
                <div className="container">
                    <h1 className="about-title">Our Story</h1>
                    <p className="about-subtitle">Redefining luxury and elegance for the modern lifestyle.</p>
                </div>
            </header>

            <section className="about-section">
                <div className="container about-grid">
                    <div className="about-content">
                        <h2>Who We Are</h2>
                        <p>
                            Founded in 2024, LuxeMart began with a simple vision: to curate the world's most
                            exquisite lifestyle products and deliver them with an unparalleled shopping experience.
                            We believe that luxury isn't just about a brand—it's about craftsmanship,
                            attention to detail, and the way a product makes you feel.
                        </p>
                        <p>
                            Every piece in our collection is handpicked by our team of expert curators,
                            ensuring that only the finest quality reaches your doorstep.
                        </p>
                    </div>
                    <div className="about-image-placeholder">
                        <div className="animated-shape"></div>
                    </div>
                </div>
            </section>

            <section className="about-values">
                <div className="container">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">✨</div>
                            <h3>Quality</h3>
                            <p>We never compromise. Every product undergoes rigorous quality control.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💎</div>
                            <h3>Luxury</h3>
                            <p>Curating only the most exclusive and elegant designs for our clients.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Customer First</h3>
                            <p>Our dedicated support team is always here to ensure your satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-mission">
                <div className="container">
                    <div className="mission-card">
                        <h2>Our Mission</h2>
                        <p>
                            "To inspire confidence and elegance in every home by providing access
                            to premium products that blend style with functionality."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
