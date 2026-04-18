import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/common/Navbar';

const CreateRequestPage = () => {
  const [loading, setLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: 'JavaScript, Debugging, Review',
    category: 'Web Development',
    urgency: 'High'
  });

  const handleAiSuggest = async () => {
    if (!formData.title || !formData.description) {
      alert("Please enter a title and description first.");
      return;
    }
    
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/ai/suggest', {
        title: formData.title,
        description: formData.description
      });
      setAiAnalysis(res.data);
      // Auto-update form with suggestions
      setFormData({
        ...formData,
        category: res.data.category,
        urgency: res.data.urgency,
        tags: res.data.tags.join(', ')
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    try {
      await axios.post('http://localhost:5000/api/requests', {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()),
        requesterId: "USE_LOGGED_IN_USER_ID" // Placeholder for auth logic
      });
      alert("Request published successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-request-page">
      <Navbar />
      
      <main className="create-container">
        <header className="create-header">
          <div className="section-tag">CREATE REQUEST</div>
          <h1 className="create-title">Turn a rough problem into a clear help request.</h1>
          <p className="create-subtitle">Use built-in AI suggestions for category, urgency, tags, and a stronger description rewrite.</p>
        </header>

        <div className="create-content">
          {/* Main Form */}
          <section className="form-section">
            <div className="form-group">
              <label>Title</label>
              <input 
                type="text" 
                placeholder="Need review on my JavaScript quiz app before submission"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea 
                placeholder="Explain the challenge, your current progress, deadline, and what kind of help would be useful."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="textarea-field"
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tags</label>
                <input 
                  type="text" 
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select 
                  className="select-field"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Career</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Urgency</label>
              <select 
                className="select-field"
                value={formData.urgency}
                onChange={(e) => setFormData({...formData, urgency: e.target.value})}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="form-actions">
              <button 
                className="btn-secondary" 
                onClick={handleAiSuggest}
                disabled={loading}
              >
                {loading ? 'Analyzing...' : 'Apply AI suggestions'}
              </button>
              <button 
                className="btn-primary"
                onClick={handlePublish}
              >
                Publish request
              </button>
            </div>
          </section>

          {/* AI Assistant Sidebar */}
          <aside className="ai-sidebar">
            <div className="ai-card">
              <div className="section-tag">AI ASSISTANT</div>
              <h2 className="ai-title">Smart request guidance</h2>
              
              <div className="ai-insight-item">
                <span className="ai-label">Suggested category</span>
                <span className="ai-value">{aiAnalysis ? aiAnalysis.category : '...'}</span>
              </div>

              <div className="ai-insight-item">
                <span className="ai-label">Detected urgency</span>
                <span className="ai-value">{aiAnalysis ? aiAnalysis.urgency : '...'}</span>
              </div>

              <div className="ai-insight-item">
                <span className="ai-label">Suggested tags</span>
                <p className="ai-hint">{aiAnalysis ? aiAnalysis.tags.join(', ') : 'Add more detail for smarter tags'}</p>
              </div>

              <div className="ai-insight-item">
                <span className="ai-label">Rewrite suggestion</span>
                <p className="ai-hint">{aiAnalysis ? aiAnalysis.rewrite : 'Start describing the challenge to generate a stronger version.'}</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <style jsx="true">{`
        .create-request-page {
          min-height: 100vh;
        }

        .create-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .create-header {
          background: var(--dark-header);
          color: white;
          padding: 3.5rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .create-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0.8rem 0;
          line-height: 1.1;
        }

        .create-subtitle {
          opacity: 0.7;
          font-size: 1.1rem;
        }

        .create-content {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 3rem;
        }

        .form-section {
          background: white;
          padding: 3rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .input-field, .select-field, .textarea-field {
          padding: 1rem;
          background: #fdfcf7;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 1rem;
          outline: none;
          transition: var(--transition);
        }

        .textarea-field {
          min-height: 180px;
          resize: vertical;
        }

        .input-field:focus, .select-field:focus, .textarea-field:focus {
          border-color: var(--primary-teal);
          background: white;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-actions {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        /* AI Sidebar */
        .ai-sidebar {
          display: flex;
          flex-direction: column;
        }

        .ai-card {
          background: white;
          padding: 3rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(0,0,0,0.03);
          height: fit-content;
        }

        .ai-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--dark-header);
          margin: 1rem 0 2rem;
        }

        .ai-insight-item {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ai-insight-item:last-child {
          border-bottom: none;
        }

        .ai-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .ai-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--dark-header);
          text-align: right;
        }

        .ai-hint {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-header);
          line-height: 1.4;
        }

        @media (max-width: 1000px) {
          .create-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CreateRequestPage;
