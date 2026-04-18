import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('requests');

  // Dummy requests for moderation demo
  const [requests, setRequests] = useState([
    { id: 1, title: 'Need help making my portfolio responsive', author: 'Sara Noor', status: 'Solved', flagged: false },
    { id: 2, title: 'Need mock interview support', author: 'Sara Noor', status: 'Open', flagged: false },
    { id: 3, title: 'Looking for Figma feedback', author: 'Ayesha Khan', status: 'Open', flagged: false },
    { id: 4, title: 'Inappropriate content example', author: 'Unknown Troll', status: 'Open', flagged: true }
  ]);

  const handleDelete = (id) => {
    setRequests(requests.filter(req => req.id !== id));
    alert('Request removed from platform.');
  };

  return (
    <div className="admin-page">
      <Navbar />
      
      <main className="admin-container">
        <header className="admin-header">
          <div className="section-tag-light">SYSTEM CONTROL</div>
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Monitor platform health, moderate content, and manage community interactions.</p>
        </header>

        {/* Analytics Section */}
        <section className="analytics-grid">
          <div className="analytics-card">
            <span className="stat-label">TOTAL USERS</span>
            <h2>384</h2>
            <p className="stat-trend positive">+12% this week</p>
          </div>
          <div className="analytics-card">
            <span className="stat-label">ACTIVE REQUESTS</span>
            <h2>72</h2>
            <p className="stat-trend">Standard volume</p>
          </div>
          <div className="analytics-card">
            <span className="stat-label">SUCCESS RATE</span>
            <h2>88.5%</h2>
            <p className="stat-trend positive">Above target</p>
          </div>
          <div className="analytics-card warning-bg">
            <span className="stat-label">FLAGGED CONTENT</span>
            <h2>1</h2>
            <p className="stat-trend negative">Requires attention</p>
          </div>
        </section>

        {/* Moderation Controls */}
        <div className="admin-content">
          <div className="admin-tabs">
            <button 
              className={`tab-btn ${activeTab === 'requests' ? 'active' : ''}`}
              onClick={() => setActiveTab('requests')}
            >
              Content Moderation
            </button>
            <button 
              className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              User Management
            </button>
          </div>

          <div className="white-card-full">
            {activeTab === 'requests' && (
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Request Title</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map(req => (
                      <tr key={req.id} className={req.flagged ? 'row-warning' : ''}>
                        <td>#{req.id}</td>
                        <td className="truncate">{req.title}</td>
                        <td>{req.author}</td>
                        <td>
                          <span className={`status-pill ${req.status.toLowerCase()}`}>{req.status}</span>
                          {req.flagged && <span className="flag-pill">Flagged</span>}
                        </td>
                        <td>
                          <div className="action-group">
                            <button className="btn-table-outline">View</button>
                            <button className="btn-table-danger" onClick={() => handleDelete(req.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'users' && (
              <div className="placeholder-content">
                <p>User management data table will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx="true">{`
        .admin-page {
          min-height: 100vh;
        }

        .admin-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .admin-header {
          background: var(--dark-header);
          color: white;
          padding: 3.5rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .section-tag-light {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.7;
          margin-bottom: 1rem;
        }

        .admin-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 0.8rem;
        }

        .admin-subtitle {
          opacity: 0.7;
          font-size: 1.1rem;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .analytics-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-soft);
        }

        .analytics-card.warning-bg {
          background: #fff1f2;
          border-color: #fecdd3;
        }

        .stat-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .analytics-card h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--dark-header);
          margin: 0.5rem 0;
        }

        .analytics-card.warning-bg h2 {
          color: #e11d48;
        }

        .stat-trend { font-size: 0.85rem; color: var(--text-muted); font-weight: 500; }
        .stat-trend.positive { color: #059669; }
        .stat-trend.negative { color: #e11d48; }

        .admin-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .tab-btn {
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-muted);
          padding: 0.8rem 1.5rem;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: var(--transition);
        }

        .tab-btn.active {
          color: var(--dark-header);
          border-bottom-color: var(--primary-teal);
        }

        .white-card-full {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
        }

        .table-container {
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .admin-table th {
          padding: 1.2rem 1rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--text-muted);
          border-bottom: 2px solid var(--border-light);
        }

        .admin-table td {
          padding: 1.5rem 1rem;
          font-size: 0.95rem;
          color: var(--dark-header);
          border-bottom: 1px solid var(--border-light);
        }

        .row-warning { background: #fff1f2; }

        .truncate {
          max-width: 300px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .status-pill {
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .status-pill.solved { background: #ecfdf5; color: #059669; }
        .status-pill.open { background: #fdfcf7; border: 1px solid var(--border-light); color: var(--text-muted); }

        .flag-pill {
          background: #e11d48;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          margin-left: 0.5rem;
        }

        .action-group {
          display: flex;
          gap: 0.5rem;
        }

        .btn-table-outline {
          background: white;
          border: 1px solid var(--border-light);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-table-danger {
          background: #fff1f2;
          color: #e11d48;
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
        }

        .placeholder-content {
          padding: 4rem 0;
          text-align: center;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 1000px) {
          .analytics-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AdminPage;
