import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <Navbar />
      
      <main className="hero-container">
        <section className="hero-left">
          <p className="hero-badge">SMIT GRAND CODING NIGHT 2026</p>
          <h1 className="hero-title">
            Find help faster.<br />
            Become help that matters.
          </h1>
          <p className="hero-description">
            HelpHub AI is a community-powered support network for students, mentors, creators, and builders. 
            Ask for help, offer help, track impact, and let AI surface smarter matches across the platform.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/auth')}>Open product demo</button>
            <button className="btn-secondary" onClick={() => navigate('/create')}>Post a request</button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">MEMBERS</span>
              <h2 className="stat-value">384+</h2>
              <p className="stat-sub">Students, mentors, and helpers in the loop.</p>
            </div>
            <div className="stat-card">
              <span className="stat-label">REQUESTS</span>
              <h2 className="stat-value">72+</h2>
              <p className="stat-sub">Support posts shared across learning journeys.</p>
            </div>
            <div className="stat-card">
              <span className="stat-label">SOLVED</span>
              <h2 className="stat-value">69+</h2>
              <p className="stat-sub">Problems resolved through fast community action.</p>
            </div>
          </div>
        </section>

        <section className="hero-right">
          <div className="dark-card">
            <div className="dark-card-header">
              <div className="live-pill">LIVE PRODUCT FEEL</div>
              <div className="circle-icon"></div>
            </div>
            <h2 className="dark-title">More than a form. More like an ecosystem.</h2>
            <p className="dark-desc">
              A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, 
              contribution signals, notifications, and leaderboard momentum built directly in MERN Stack.
            </p>

            <div className="feature-item">
              <h4>Al request intelligence</h4>
              <p>Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.</p>
            </div>
            <div className="feature-item">
              <h4>Community trust graph</h4>
              <p>Badges, helper rankings, trust score boosts, and visible contribution history.</p>
            </div>
            <div className="feature-item">
              <h4>100%</h4>
              <p>Top trust score currently active across the sample mentor network.</p>
            </div>
          </div>
        </section>
      </main>

      <section className="core-flow-section">
        <div className="section-header">
          <div className="section-tag">CORE FLOW</div>
          <div className="section-title-row">
            <h2 className="section-title">From struggling alone to solving together</h2>
            <button className="btn-secondary small">Try onboarding AI</button>
          </div>
        </div>

        <div className="flow-grid">
          <div className="flow-card">
            <h3>Ask for help clearly</h3>
            <p>Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.</p>
          </div>
          <div className="flow-card">
            <h3>Discover the right people</h3>
            <p>Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.</p>
          </div>
          <div className="flow-card">
            <h3>Track real contribution</h3>
            <p>Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.</p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <div className="section-tag">FEATURED REQUESTS</div>
          <div className="section-title-row">
            <h2 className="section-title">Community problems currently in motion</h2>
            <button className="btn-secondary small">View full feed</button>
          </div>
        </div>

        <div className="featured-grid">
          {/* Mock Request 1 */}
          <div className="request-card">
            <div className="request-badges">
              <span className="badge teal">Web Development</span>
              <span className="badge red">High</span>
              <span className="badge gray">Solved</span>
            </div>
            <h3 className="request-title">Need help</h3>
            <p className="request-desc">helpn needed</p>
            <div className="request-footer">
              <div className="request-user">
                <strong>Ayesha Khan</strong>
                <span>Karachi • 1 helper interested</span>
              </div>
              <button className="btn-details">Open details</button>
            </div>
          </div>

          {/* Mock Request 2 */}
          <div className="request-card">
            <div className="request-badges">
              <span className="badge teal">Web Development</span>
              <span className="badge red">High</span>
              <span className="badge gray">Solved</span>
            </div>
            <h3 className="request-title">Need help making my portfolio responsive before demo day</h3>
            <p className="request-desc">My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.</p>
            <div className="request-tags">
              <span>HTML/CSS</span>
              <span>Responsive</span>
              <span>Portfolio</span>
            </div>
            <div className="request-footer">
              <div className="request-user">
                <strong>Sara Noor</strong>
                <span>Karachi • 1 helper interested</span>
              </div>
              <button className="btn-details">Open details</button>
            </div>
          </div>

          {/* Mock Request 3 */}
          <div className="request-card">
            <div className="request-badges">
              <span className="badge green">Design</span>
              <span className="badge yellow">Medium</span>
              <span className="badge blue">Open</span>
            </div>
            <h3 className="request-title">Looking for Figma feedback on a volunteer event poster</h3>
            <p className="request-desc">I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.</p>
            <div className="request-tags">
              <span>Figma</span>
              <span>Poster</span>
              <span>Design Review</span>
            </div>
            <div className="request-footer">
              <div className="request-user">
                <strong>Ayesha Khan</strong>
                <span>Lahore • 1 helper interested</span>
              </div>
              <button className="btn-details">Open details</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>HelpHub AI is built as a premium-feel, multi-page community support product using HTML, CSS, JavaScript, and LocalStorage.</p>
      </footer>

      <style jsx="true">{`
        .landing-page {
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          padding: 4rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .hero-badge {
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--primary-teal);
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: 800;
          color: var(--dark-header);
          margin-bottom: 2rem;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--dark-header);
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid var(--border-light);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-secondary:hover {
          background-color: white;
          border-color: var(--text-muted);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .stat-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--dark-header);
          margin: 0.5rem 0;
        }

        .stat-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Dark Card Styling */
        .dark-card {
          background-color: var(--dark-header);
          color: white;
          padding: 3rem;
          border-radius: var(--radius-xl);
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .dark-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .live-pill {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }

        .circle-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
        }

        .dark-title {
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .dark-desc {
          opacity: 0.8;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-item h4 {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .feature-item p {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .core-flow-section, .featured-section {
          padding: 4rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary-teal);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .section-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--dark-header);
        }

        .btn-secondary.small {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
        }

        .flow-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .flow-card {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .flow-card h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--dark-header);
        }

        .flow-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Request Cards */
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .request-card {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          border: 1px solid rgba(0,0,0,0.03);
          transition: var(--transition);
        }

        .request-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
        }

        .request-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .badge.teal { background: #e0f2f1; color: #00897b; }
        .badge.red { background: #ffebee; color: #e53935; }
        .badge.gray { background: #f5f5f5; color: #757575; }
        .badge.green { background: #e8f5e9; color: #43a047; }
        .badge.yellow { background: #fffde7; color: #fbc02d; }
        .badge.blue { background: #e3f2fd; color: #1e88e5; }

        .request-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--dark-header);
          line-height: 1.3;
        }

        .request-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .request-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .request-tags span {
          background: #f0fdfa;
          color: #0d9488;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .request-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .request-user strong {
          display: block;
          font-size: 0.9rem;
          color: var(--dark-header);
        }

        .request-user span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .btn-details {
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          border: 1px solid var(--border-light);
          background: white;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-details:hover {
          background: #f9fafb;
          border-color: var(--text-muted);
        }

        .landing-footer {
          text-align: center;
          padding: 4rem 2%;
          color: var(--text-muted);
          font-size: 0.85rem;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
