import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <div className="logo-icon">H</div>
          <span className="logo-text">HelpHub AI</span>
        </div>
      </div>
      
      <div className="nav-center">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/explore" className="nav-link">Explore</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        <Link to="/ai-center" className="nav-link">AI Center</Link>
        <Link to="/admin" className="nav-link">Admin</Link>
      </div>
      
      <div className="nav-right">
        <span className="live-signals">Live community signals</span>
        <Link to="/auth" className="btn-primary join-btn">Join the platform</Link>
      </div>

      <style jsx="true">{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2%;
          position: sticky;
          top: 0;
          background: rgba(252, 251, 246, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          background-color: var(--primary-teal);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .logo-text {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--dark-header);
        }

        .nav-link {
          margin: 0 1rem;
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .nav-link.active, .nav-link:hover {
          color: var(--dark-header);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .live-signals {
          font-size: 0.9rem;
          color: var(--text-muted);
          position: relative;
          padding-left: 1.2rem;
        }

        .live-signals::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
        }

        .join-btn {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
