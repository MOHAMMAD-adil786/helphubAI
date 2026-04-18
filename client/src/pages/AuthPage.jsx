import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const AuthPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: 'Ayesha Khan',
    role: 'Both',
    email: 'community@helphub.ai',
    password: '••••••••'
  });

  const handleContinue = () => {
    // Logic will be added later with backend integration
    navigate('/onboarding');
  };

  return (
    <div className="auth-page">
      <Navbar />
      
      <main className="auth-container">
        <div className="auth-card">
          {/* Left Dark Section */}
          <div className="auth-left">
            <div className="section-tag-light">COMMUNITY ACCESS</div>
            <h1 className="auth-title">Enter the support network.</h1>
            <p className="auth-desc">
              Choose a demo identity, set your role, and jump into a multi-page product flow designed for asking, offering, and tracking help with a premium interface.
            </p>
            <ul className="auth-features">
              <li>Role-based entry for Need Help, Can Help, or Both</li>
              <li>Direct path into dashboard, requests, AI Center, and community feed</li>
              <li>Persistent demo session powered by MongoDB</li>
            </ul>
          </div>

          {/* Right Form Section */}
          <div className="auth-right">
            <div className="section-tag">LOGIN / SIGNUP</div>
            <h2 className="form-title">Authenticate your community profile</h2>
            
            <div className="form-group">
              <label>Select demo user</label>
              <select 
                value={formData.username} 
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              >
                <option>Ayesha Khan</option>
                <option>Hassan Ali</option>
                <option>Sara Noor</option>
              </select>
            </div>

            <div className="form-group">
              <label>Role selection</label>
              <select 
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option>Both</option>
                <option>Need Help</option>
                <option>Can Help</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={formData.email} readOnly />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" value={formData.password} readOnly />
              </div>
            </div>

            <button className="btn-primary full-width" onClick={handleContinue}>
              Continue to dashboard
            </button>
          </div>
        </div>
      </main>

      <style jsx="true">{`
        .auth-page {
          min-height: 100vh;
        }

        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem 5%;
          max-width: 100%;
          margin: 0;
        }

        .auth-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          min-height: 600px;
          width: 100%;
        }

        .auth-left {
          background-color: var(--dark-header);
          color: white;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-tag-light {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }

        .auth-title {
          font-size: 3rem;
          line-height: 1.1;
          font-weight: 700;
        }

        .auth-desc {
          opacity: 0.8;
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .auth-features {
          margin-top: 1rem;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .auth-features li {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .auth-features li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-teal);
          font-weight: bold;
        }

        .auth-right {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--dark-header);
          margin-bottom: 1rem;
        }

        .section-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary-teal);
          letter-spacing: 0.1em;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .form-group input, .form-group select {
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          background-color: #f9fafb;
          font-size: 1rem;
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group select:focus {
          border-color: var(--primary-teal);
          box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .full-width {
          width: 100%;
          margin-top: 1rem;
          padding: 1rem;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          .auth-card {
            grid-template-columns: 1fr;
          }
          .auth-left {
            padding: 3rem;
          }
          .auth-right {
            padding: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
