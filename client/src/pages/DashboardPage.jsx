import React from 'react';
import Navbar from '../components/common/Navbar';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      
      <main className="dashboard-container">
        <header className="dash-header">
          <div className="section-tag">COMMUNITY PULSE</div>
          <h1 className="dash-title">Good morning, Ayesha.</h1>
          <p className="dash-subtitle">Here is what the platform is noticing in your circle today.</p>
        </header>

        <section className="stats-grid">
          <div className="stat-card accent-teal">
            <span className="stat-label">TOTAL CONTRIBUTIONS</span>
            <h2 className="stat-value">35</h2>
            <div className="stat-progress">
              <div className="progress-bar" style={{width: '75%'}}></div>
            </div>
          </div>
          <div className="stat-card accent-blue">
            <span className="stat-label">ACTIVE REQUESTS</span>
            <h2 className="stat-value">12</h2>
            <p className="stat-sub">+3 since yesterday</p>
          </div>
          <div className="stat-card accent-green">
            <span className="stat-label">SUCCESS RATE</span>
            <h2 className="stat-value">98.4%</h2>
            <p className="stat-sub">Top 5% of community helpers</p>
          </div>
        </section>

        <div className="dash-content">
          {/* Main Feed Section */}
          <div className="feed-section">
            <div className="section-title-row">
              <h3>Recent help requests</h3>
              <button className="btn-text">View all</button>
            </div>
            
            <div className="mini-feed">
              {[1, 2, 3].map(item => (
                <div className="mini-card" key={item}>
                  <div className="mini-card-top">
                    <span className="badge teal">Web Development</span>
                    <span className="badge red">High</span>
                  </div>
                  <h4>Need mock interview support for internship applications</h4>
                  <p>Applying to frontend internships and need someone to practice behavioral and technical questions.</p>
                  <div className="mini-card-footer">
                    <span>12 mins ago • 2 helpers interested</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights Sidebar */}
          <aside className="insights-sidebar">
            <div className="dark-card compact">
              <div className="section-tag-light">AI INSIGHTS</div>
              <h3>Smart demand detection</h3>
              <p>We noticed a 40% rise in React-related requests in your area. Consider updating your skills to match.</p>
              <button className="btn-outline-light">View AI Center</button>
            </div>

            <div className="white-card">
              <h3>Quick actions</h3>
              <ul className="action-list">
                <li>Create a help request</li>
                <li>Browse latest feed</li>
                <li>Check trust signals</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <style jsx="true">{`
        .dashboard-page {
          min-height: 100vh;
        }

        .dashboard-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .dash-header {
          margin-bottom: 3rem;
        }

        .dash-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--dark-header);
          margin-top: 0.5rem;
        }

        .dash-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-soft);
        }

        .stat-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0.5rem 0;
          color: var(--dark-header);
        }

        .progress-bar {
          height: 6px;
          background: var(--primary-teal);
          border-radius: 3px;
        }

        .stat-card.accent-blue .progress-bar { background: var(--status-low); }
        .stat-card.accent-green .progress-bar { background: var(--status-solved); }

        .dash-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .section-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .btn-text {
          background: none;
          border: none;
          color: var(--primary-teal);
          font-weight: 600;
          cursor: pointer;
        }

        .mini-feed {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mini-card {
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0,0,0,0.03);
          transition: var(--transition);
        }

        .mini-card:hover {
          transform: translateX(8px);
          border-color: var(--primary-teal);
        }

        .mini-card h4 {
          margin: 1rem 0 0.5rem;
          font-size: 1.15rem;
          color: var(--dark-header);
        }

        .mini-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .mini-card-footer {
          font-size: 0.85rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
        }

        .insights-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .dark-card.compact {
          background: var(--dark-header);
          color: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
        }

        .dark-card.compact h3 { margin: 1rem 0; }
        .dark-card.compact p { opacity: 0.8; font-size: 0.9rem; margin-bottom: 1.5rem; }

        .btn-outline-light {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-outline-light:hover { background: rgba(255,255,255,0.1); }

        .white-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
        }

        .action-list {
          list-style: none;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-list li {
          padding: 0.8rem 1rem;
          border-radius: var(--radius-sm);
          background: var(--primary-teal-light);
          color: var(--primary-teal);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .action-list li:hover { background: #d1fae5; }

        @media (max-width: 900px) {
          .dash-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
