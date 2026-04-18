import React from 'react';
import Navbar from '../components/common/Navbar';

const AICenterPage = () => {
  return (
    <div className="ai-center-page">
      <Navbar />
      
      <main className="ai-container">
        <header className="ai-header">
          <div className="section-tag-light">AI CENTER</div>
          <h1 className="ai-title">See what the platform intelligence is noticing.</h1>
          <p className="ai-subtitle">Al-like insights summarize demand trends, helper readiness, urgency signals, and request recommendations.</p>
        </header>

        <section className="stats-pulse-grid">
          <div className="pulse-card">
            <span className="section-tag">TREND PULSE</span>
            <h2 className="pulse-value">Web Development</h2>
            <p className="pulse-desc">Most common support area based on active community requests.</p>
          </div>
          <div className="pulse-card">
            <span className="section-tag">URGENCY WATCH</span>
            <h2 className="pulse-value">2</h2>
            <p className="pulse-desc">Requests currently flagged high priority by the urgency detector.</p>
          </div>
          <div className="pulse-card">
            <span className="section-tag">MENTOR POOL</span>
            <h2 className="pulse-value">2</h2>
            <p className="pulse-desc">Trusted helpers with strong response history and contribution signals.</p>
          </div>
        </section>

        <section className="recommendations-section">
          <div className="white-card-full">
            <div className="section-tag">AI RECOMMENDATIONS</div>
            <h1 className="section-main-title">Requests needing attention</h1>
            
            <div className="rec-list">
              {[
                { title: "Need help", desc: "Al summary: Web Development request with high urgency. Best suited for members with relevant expertise.", badges: ["Web Development", "High"] },
                { title: "Need help making my portfolio responsive before demo day", desc: "Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids and media queries.", badges: ["Web Development", "High"] },
                { title: "Looking for Figma feedback on a volunteer event poster", desc: "A visual design critique request where feedback on hierarchy, spacing, and messaging would create the most value.", badges: ["Design", "Medium"] },
                { title: "Need mock interview support for internship applications", desc: "Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.", badges: ["Career", "Low"] }
              ].map((item, idx) => (
                <div key={idx} className="rec-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="rec-badges">
                    {item.badges.map(b => <span key={b} className={`badge ${b.toLowerCase()}`}>{b}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx="true">{`
        .ai-center-page {
          min-height: 100vh;
        }

        .ai-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .ai-header {
          background: var(--dark-header);
          color: white;
          padding: 4rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .ai-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 0.8rem 0;
        }

        .ai-subtitle {
          opacity: 0.7;
          font-size: 1.1rem;
        }

        .section-tag-light {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }

        .stats-pulse-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .pulse-card {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-soft);
        }

        .section-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary-teal);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          display: block;
        }

        .pulse-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--dark-header);
          margin-bottom: 0.5rem;
        }

        .pulse-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .white-card-full {
          background: white;
          padding: 3.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
        }

        .section-main-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--dark-header);
          margin: 1rem 0 3rem;
        }

        .rec-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .rec-item {
          background: #fdfcf7;
          padding: 2rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0,0,0,0.02);
        }

        .rec-item h4 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: var(--dark-header);
        }

        .rec-item p {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 1.2rem;
          line-height: 1.5;
        }

        .rec-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge {
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .badge.web.development { background: #e0f2f1; color: #0d9488; }
        .badge.high { background: #fff1f2; color: #e11d48; }
        .badge.design { background: #fdf2f8; color: #db2777; }
        .badge.medium { background: #fffbeb; color: #d97706; }
        .badge.career { background: #eff6ff; color: #2563eb; }
        .badge.low { background: #f3f4f6; color: #4b5563; }

        @media (max-width: 900px) {
          .stats-pulse-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AICenterPage;
