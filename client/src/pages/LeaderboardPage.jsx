import React from 'react';
import Navbar from '../components/common/Navbar';

const LeaderboardPage = () => {
  const rankings = [
    { rank: 1, name: "Ayesha Khan", skills: "Figma, UI/UX, HTML/CSS", score: "100%", count: "35 contributions", avatar: "pink" },
    { rank: 2, name: "Hassan Ali", skills: "JavaScript, React, Git/GitHub", score: "88%", count: "24 contributions", avatar: "blue" },
    { rank: 3, name: "Sara Noor", skills: "Python, Data Analysis", score: "74%", count: "11 contributions", avatar: "orange" }
  ];

  return (
    <div className="leaderboard-page">
      <Navbar />
      
      <main className="leaderboard-container">
        <header className="leaderboard-header">
          <div className="section-tag">LEADERBOARD</div>
          <h1 className="leaderboard-title">Recognize the people who keep the community moving.</h1>
          <p className="leaderboard-subtitle">Trust score, contribution count, and badges create visible momentum for reliable helpers.</p>
        </header>

        <div className="leaderboard-content">
          {/* Rankings List */}
          <section className="rankings-section">
            <h2 className="section-subtitle">Top Helpers</h2>
            <h1 className="section-main-title">Rankings</h1>
            
            <div className="rankings-list">
              {rankings.map((user) => (
                <div key={user.rank} className="ranking-card">
                  <div className="user-info-group">
                    <div className={`avatar-circle avatar-${user.avatar}`}>{user.name.charAt(0)}</div>
                    <div className="user-details">
                      <h3>#{user.rank} {user.name}</h3>
                      <p>{user.skills}</p>
                    </div>
                  </div>
                  <div className="user-score-group">
                    <span className="trust-percent">{user.score}</span>
                    <span className="contribution-meta">{user.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Badge System */}
          <section className="badges-section">
            <h2 className="section-subtitle">Badge System</h2>
            <h1 className="section-main-title">Trust and achievement</h1>
            
            <div className="badge-system-cards">
              {rankings.map((user) => (
                <div key={user.name} className="badge-user-card">
                  <div className="badge-card-header">
                    <h4>{user.name}</h4>
                    <span className="role-tag">Code Rescuer • Bug Hunter</span>
                  </div>
                  <div className="trust-bar-container">
                    <div className="trust-bar" style={{width: user.score}}></div>
                  </div>
                  <p className="badge-description">Community Voice</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <style jsx="true">{`
        .leaderboard-page {
          min-height: 100vh;
        }

        .leaderboard-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .leaderboard-header {
          background: var(--dark-header);
          color: white;
          padding: 3.5rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .leaderboard-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin: 0.8rem 0;
          line-height: 1.1;
        }

        .leaderboard-subtitle {
          opacity: 0.7;
          font-size: 1.1rem;
          max-width: 700px;
        }

        .leaderboard-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .section-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-teal);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .section-main-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--dark-header);
          margin-bottom: 2rem;
        }

        .rankings-list, .badge-system-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ranking-card, .badge-user-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-soft);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .user-info-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .avatar-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
        }

        .avatar-pink { background: #f472b6; }
        .avatar-blue { background: #1e293b; }
        .avatar-orange { background: #f59e0b; }

        .user-details h3 { font-size: 1.15rem; color: var(--dark-header); }
        .user-details p { font-size: 0.85rem; color: var(--text-muted); }

        .user-score-group {
          text-align: right;
        }

        .trust-percent {
          display: block;
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--dark-header);
        }

        .contribution-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Badge Card Styles */
        .badge-user-card {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .badge-card-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .badge-card-header h4 { font-size: 1.1rem; color: var(--dark-header); }
        .role-tag { font-size: 0.8rem; color: var(--text-muted); }

        .trust-bar-container {
          width: 100%;
          height: 8px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
        }

        .trust-bar {
          height: 100%;
          background: linear-gradient(to right, #059669, #10b981);
        }

        .badge-description {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 1000px) {
          .leaderboard-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default LeaderboardPage;
