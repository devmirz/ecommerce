import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="auth-page container">
            <div className="auth-card">
                <div className="auth-header">
                    <span className="auth-icon">🔐</span>
                    <h2>Account Login</h2>
                    <p>Sign in to your LuxeMart account</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="user@luxe-mart.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Remember me
                        </label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="btn-auth-primary">Sign In</button>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <p className="auth-footer">
                        New to LuxeMart? <Link to="/signup">Create Account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
