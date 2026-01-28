import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup attempt:', formData);
    };

    return (
        <div className="auth-page container">
            <div className="auth-card">
                <div className="auth-header">
                    <span className="auth-icon">🚀</span>
                    <h2>Create Account</h2>
                    <p>Join LuxeMart for a personalized shopping experience.</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="user@luxe-mart.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-auth-primary">Register</button>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <p className="auth-footer">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
