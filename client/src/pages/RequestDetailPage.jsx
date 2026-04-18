import React from 'react';
import Navbar from '../components/common/Navbar';

const RequestDetailPage = () => {
  return (
    <div className="detail-page">
      <Navbar />
      
      <main className="detail-container">
        <header className="detail-header">
          <div className="section-tag-light">REQUEST DETAIL</div>
          <div className="detail-badges">
            <span className="badge-light">Career</span>
            <span className="badge-light">Low</span>
            <span className="badge-light solved">Solved</span>
          </div>
          <h1 className="detail-title">Need mock interview support for internship applications</h1>
          <p className="detail-subtitle">Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.</p>
        </header>

        <div className="detail-content">
          <div className="detail-left">
            <div className="white-card">
              <div className="section-tag">AI SUMMARY</div>
              <div className="ai-summary-box">
                <div className="logo-small">H</div>
                <p>Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.</p>
              </div>
              <div className="summary-tags">
                <span>Interview Prep</span>
                <span>Career</span>
                <span>Frontend</span>
              </div>
            </div>

            <div className="white-card actions-card">
              <div className="section-tag">ACTIONS</div>
              <div className="action-buttons">
                <button className="btn-primary">I can help</button>
                <button className="btn-secondary">Mark as solved</button>
              </div>
            </div>
          </div>

          <div className="detail-right">
            <div className="white-card">
              <div className="section-tag">REQUESTER</div>
              <div className="user-profile-mini">
                <div className="avatar-placeholder orange">SN</div>
                <div className="user-info">
                  <h3>Sara Noor</h3>
                  <p>Karachi • Student</p>
                </div>
              </div>
            </div>

            <div className="white-card">
              <div className="section-tag">HELPERS</div>
              <h4 className="card-subtitle">People ready to support</h4>
              
              <div className="helpers-list">
                <div className="helper-item">
                  <div className="helper-left">
                    <div className="avatar-small pink">AK</div>
                    <div className="helper-info">
                      <h5>Ayesha Khan</h5>
                      <p>Figma, UI/UX, HTML/CSS</p>
                    </div>
                  </div>
                  <div className="trust-pill">Trust 100%</div>
                </div>

                <div className="helper-item">
                  <div className="helper-left">
                    <div className="avatar-small blue">HA</div>
                    <div className="helper-info">
                      <h5>Hassan Ali</h5>
                      <p>JavaScript, React, Git/GitHub</p>
                    </div>
                  </div>
                  <div className="trust-pill faded">Trust 88%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx="true">{`
        .detail-page {
          min-height: 100vh;
        }

        .detail-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .detail-header {
          background: var(--dark-header);
          color: white;
          padding: 4rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
          position: relative;
        }

        .section-tag-light {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.7;
          margin-bottom: 1.5rem;
        }

        .detail-badges {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .badge-light {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .badge-light.solved {
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
        }

        .detail-title {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          max-width: 900px;
        }

        .detail-subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
          max-width: 800px;
        }

        .detail-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }

        .detail-left, .detail-right {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .white-card {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(0,0,0,0.02);
        }

        .ai-summary-box {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          margin: 1.5rem 0;
          padding: 1.5rem;
          background: #fdfcf7;
          border-radius: var(--radius-md);
        }

        .logo-small {
          background: var(--primary-teal);
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .ai-summary-box p {
          font-size: 1rem;
          color: var(--text-main);
          line-height: 1.6;
        }

        .summary-tags {
          display: flex;
          gap: 0.75rem;
        }

        .summary-tags span {
          background: transparent;
          border: 1px solid var(--border-light);
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-teal);
        }

        .action-buttons {
          margin-top: 1.5rem;
          display: flex;
          gap: 1.5rem;
        }

        .card-subtitle {
          font-size: 1.2rem;
          color: var(--dark-header);
          margin: 1rem 0 1.5rem;
        }

        .user-profile-mini {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .avatar-placeholder {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .orange { background: #f59e0b; }
        .pink { background: #f472b6; }
        .blue { background: #1e293b; }

        .helpers-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .helper-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f9fafb;
          border-radius: var(--radius-md);
        }

        .helper-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .helper-info h5 { font-size: 0.95rem; color: var(--dark-header); }
        .helper-info p { font-size: 0.75rem; color: var(--text-muted); }

        .trust-pill {
          background: #f0fdf4;
          color: #15803d;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .trust-pill.faded {
          background: #f8fafc;
          color: var(--text-muted);
          opacity: 0.7;
        }

        @media (max-width: 1000px) {
          .detail-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default RequestDetailPage;
