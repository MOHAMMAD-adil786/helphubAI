import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/common/Navbar';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Both' // Need Help, Can Help, Both
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const res = await axios.post(`http://localhost:5000${endpoint}`, formData);
      
      // Store token
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // Route Logic
      if (isLogin) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding');
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Navbar />
      
      <main className="auth-container">
        <div className="auth-card">
          <header className="auth-header">
            <div className="logo-icon large">H</div>
            <h1 className="form-title">{isLogin ? 'Welcome back' : 'Create an account'}</h1>
            <p className="form-subtitle">
              {isLogin ? 'Enter your details to access your dashboard.' : 'Join the community and start collaborating today.'}
            </p>
          </header>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="input-field" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                required 
                className="input-field" 
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                required 
                className="input-field" 
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label>Your Role in the Community</label>
                <select 
                  className="input-field select-field"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                  <option value="Both">I want to Help and Be Helped (Both)</option>
                  <option value="Need Help">I mainly Need Help</option>
                  <option value="Can Help">I am here to Can Help</option>
                </select>
              </div>
            )}

            <button type="submit" className="btn-primary full-width" disabled={loading}>
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                className="link-btn" 
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </main>

      <style jsx="true">{`
        .auth-page {
          min-height: 100vh;
        }

        .auth-container {
          padding: 4rem 2%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .auth-card {
          background: white;
          border-radius: var(--radius-xl);
          padding: 3rem;
          box-shadow: var(--shadow-card);
          max-width: 480px;
          width: 100%;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-icon.large {
          width: 48px;
          height: 48px;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--dark-header);
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-header);
        }

        .input-field {
          padding: 0.85rem 1rem;
          background: #fdfcf7;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition);
        }

        .input-field:focus {
          border-color: var(--primary-teal);
          background: white;
        }

        .select-field {
          appearance: none;
          cursor: pointer;
        }

        .full-width {
          width: 100%;
          margin-top: 1rem;
          padding: 1rem;
          font-size: 1rem;
        }

        .auth-footer {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .link-btn {
          background: none;
          border: none;
          color: var(--primary-teal);
          font-weight: 700;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .link-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
