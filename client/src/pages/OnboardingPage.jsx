import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/common/Navbar';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Ayesha Khan',
    location: 'Karachi',
    interests: '',
    skills: ''
  });
  const [aiSuggestions, setAiSuggestions] = useState(null);

  const handleAiSuggest = async () => {
    if (!formData.interests) {
      alert("Please enter a basic interest first (e.g., frontend, python, design).");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/ai/onboarding-suggest', {
        interests: formData.interests
      });
      setAiSuggestions(res.data);
      // Auto-populate formatting
      setFormData({
        ...formData,
        skills: res.data.canHelpWith.join(', ')
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFinish = () => {
    navigate('/dashboard');
  };

  return (
    <div className="onboarding-page">
      <Navbar />
      
      <main className="onboarding-container">
        <div className="onboarding-card">
          <header className="onboarding-header">
            <div className="section-tag">STEP 2 / 2</div>
            <h1 className="form-title">Complete your profile</h1>
            <p className="form-subtitle">Let the community know what you know, and what you are learning.</p>
          </header>

          <div className="onboarding-content">
            <div className="form-section">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input 
                    type="text" 
                    className="input-field"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>What are your main interests? (e.g. Web Dev, Data, Design)</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. Building UIs, React, Hackathons"
                  value={formData.interests}
                  onChange={(e) => setFormData({...formData, interests: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Skills you can help others with</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Will be auto-populated by AI based on interests..."
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                />
              </div>

              <div className="form-actions">
                <button 
                  className="btn-secondary"
                  onClick={handleAiSuggest}
                  disabled={loading}
                >
                  {loading ? 'Analyzing...' : 'Generate AI Profile'}
                </button>
                <button className="btn-primary" onClick={handleFinish}>Go to dashboard</button>
              </div>
            </div>

            {/* AI Insights Sidebar */}
            <aside className="ai-sidebar">
              <div className="dark-card compact">
                <div className="section-tag-light">ONBOARDING AI</div>
                <h3>Smart Profile Setup</h3>
                
                {aiSuggestions ? (
                  <div className="ai-results">
                    <div className="insight-block">
                      <span>You can confidently help with:</span>
                      <div className="pill-group">
                        {aiSuggestions.canHelpWith.map((skill, idx) => (
                          <span key={idx} className="pill teal">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="insight-block mt-3">
                      <span>You might need help with:</span>
                      <div className="pill-group">
                        {aiSuggestions.mightNeedHelpWith.map((area, idx) => (
                          <span key={idx} className="pill orange">{area}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Type your interests above and let AI suggest areas where you can act as a mentor, and complex topics where you might need future support.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <style jsx="true">{`
        .onboarding-page {
          min-height: 100vh;
        }

        .onboarding-container {
          padding: 4rem 5%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .onboarding-card {
          background: white;
          border-radius: var(--radius-xl);
          padding: 4rem;
          box-shadow: var(--shadow-card);
          max-width: 1000px;
          width: 100%;
        }

        .onboarding-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-teal);
          letter-spacing: 0.05em;
        }

        .form-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--dark-header);
          margin-top: 0.5rem;
        }

        .form-subtitle {
          color: var(--text-muted);
          margin-top: 0.5rem;
        }

        .onboarding-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

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
          font-weight: 700;
          color: var(--text-muted);
        }

        .input-field {
          padding: 1rem;
          background: #fdfcf7;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 1rem;
          outline: none;
          transition: var(--transition);
        }

        .input-field:focus {
          border-color: var(--primary-teal);
          background: white;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .dark-card.compact {
          background: var(--dark-header);
          color: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          height: 100%;
        }

        .dark-card.compact h3 {
          margin: 1rem 0;
          font-size: 1.5rem;
        }

        .dark-card.compact p {
          opacity: 0.8;
          line-height: 1.6;
        }

        .insight-block span {
          display: block;
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 0.8rem;
        }

        .pill-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pill {
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .pill.teal { background: rgba(13, 148, 136, 0.2); color: #2dd4bf; }
        .pill.orange { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }

        .mt-3 {
          margin-top: 1.5rem;
        }

        @media (max-width: 900px) {
          .onboarding-card { padding: 2rem; }
          .onboarding-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default OnboardingPage;
