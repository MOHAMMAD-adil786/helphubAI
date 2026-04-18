import React from 'react';
import Navbar from '../components/common/Navbar';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Navbar />
      
      <main className="profile-container">
        <header className="profile-header">
          <div className="section-tag-light">PROFILE</div>
          <h1 className="profile-title">Ayesha Khan</h1>
          <p className="profile-subtitle">Both • Karachi</p>
        </header>

        <div className="profile-content">
          {/* Public Profile Info */}
          <section className="profile-info-section">
            <div className="white-card">
              <div className="section-tag">PUBLIC PROFILE</div>
              <h2 className="section-main-title">Skills and reputation</h2>
              
              <div className="stats-row">
                <div className="stat-line">
                  <span>Trust score</span>
                  <strong>100%</strong>
                </div>
                <div className="stat-line">
                  <span>Contributions</span>
                  <strong>35</strong>
                </div>
              </div>

              <div className="profile-group">
                <label>Skills</label>
                <div className="pill-group">
                  <span className="pill teal">Figma</span>
                  <span className="pill teal">UI/UX</span>
                  <span className="pill teal">HTML/CSS</span>
                  <span className="pill teal">Career Guidance</span>
                </div>
              </div>

              <div className="profile-group">
                <label>Badges</label>
                <div className="pill-group">
                  <span className="pill green">Design Ally</span>
                  <span className="pill green">Fast Responder</span>
                  <span className="pill green">Top Mentor</span>
                </div>
              </div>
            </div>
          </section>

          {/* Edit Profile Form */}
          <section className="profile-edit-section">
            <div className="white-card">
              <div className="section-tag">EDIT PROFILE</div>
              <h2 className="section-main-title">Update your identity</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" defaultValue="Ayesha Khan" className="input-field" />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" defaultValue="Karachi" className="input-field" />
                </div>
              </div>

              <div className="form-group">
                <label>Skills</label>
                <input type="text" defaultValue="Figma, UI/UX, HTML/CSS, Career Guidance" className="input-field" />
              </div>

              <div className="form-group">
                <label>Interests</label>
                <input type="text" defaultValue="Hackathons, UI/UX, Community Building" className="input-field" />
              </div>

              <button className="btn-primary full-width">Save profile</button>
            </div>
          </section>
        </div>
      </main>

      <style jsx="true">{`
        .profile-page {
          min-height: 100vh;
        }

        .profile-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .profile-header {
          background: var(--dark-header);
          color: white;
          padding: 4rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .profile-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin: 0.8rem 0;
        }

        .profile-subtitle {
          opacity: 0.7;
          font-size: 1.1rem;
        }

        .profile-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
        }

        .white-card {
          background: white;
          padding: 3rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-main-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--dark-header);
          margin-bottom: 1rem;
        }

        .stats-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 2rem;
        }

        .stat-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-line span { color: var(--text-muted); font-weight: 500; }
        .stat-line strong { font-size: 1.2rem; color: var(--dark-header); }

        .profile-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .pill-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .pill {
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .pill.teal { background: #f0fdfa; color: #0d9488; }
        .pill.green { background: #ecfdf5; color: #059669; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
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

        .input-field {
          padding: 1rem;
          background: #fdfcf7;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 1rem;
          outline: none;
        }

        .full-width {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          margin-top: 1rem;
        }

        @media (max-width: 1000px) {
          .profile-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
