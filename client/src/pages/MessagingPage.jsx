import React from 'react';
import Navbar from '../components/common/Navbar';

const MessagingPage = () => {
  const conversations = [
    { from: "Ayesha Khan", to: "Sara Noor", text: "I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.", time: "09:45 AM" },
    { from: "Hassan Ali", to: "Ayesha Khan", text: "Your event poster concept is solid. I would tighten the CTA and reduce the background texture.", time: "11:10 AM" }
  ];

  return (
    <div className="messaging-page">
      <Navbar />
      
      <main className="messaging-container">
        <header className="messaging-header">
          <div className="section-tag-light">INTERACTION / MESSAGING</div>
          <h1 className="messaging-title">Keep support moving through direct communication.</h1>
          <p className="messaging-subtitle">Basic messaging gives helpers and requesters a clear follow-up path once a match happens.</p>
        </header>

        <div className="messaging-content">
          {/* Recent Messages */}
          <section className="conversation-stream">
            <div className="section-tag">CONVERSATION STREAM</div>
            <h2 className="section-main-title">Recent messages</h2>
            
            <div className="message-list">
              {conversations.map((msg, index) => (
                <div key={index} className="message-card">
                  <div className="message-header">
                    <span className="user-pair">{msg.from} → {msg.to}</span>
                    <span className="message-time">{msg.time}</span>
                  </div>
                  <p className="message-text">{msg.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* New Message Form */}
          <aside className="send-message-section">
            <div className="white-card">
              <div className="section-tag">SEND MESSAGE</div>
              <h1 className="section-main-title">Start a conversation</h1>
              
              <div className="form-group">
                <label>To</label>
                <select className="select-field">
                  <option>Ayesha Khan</option>
                  <option>Hassan Ali</option>
                  <option>Sara Noor</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  className="textarea-field"
                  placeholder="Share support details, ask for files, or suggest next steps."
                ></textarea>
              </div>

              <button className="btn-primary full-width">Send</button>
            </div>
          </aside>
        </div>
      </main>

      <style jsx="true">{`
        .messaging-page {
          min-height: 100vh;
        }

        .messaging-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .messaging-header {
          background: var(--dark-header);
          color: white;
          padding: 4rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .messaging-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 1rem 0;
          max-width: 900px;
        }

        .messaging-subtitle {
          opacity: 0.7;
          font-size: 1.1rem;
        }

        .messaging-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
        }

        .section-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-teal);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .section-main-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--dark-header);
          margin-bottom: 2rem;
        }

        .message-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .message-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-soft);
        }

        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .user-pair {
          font-weight: 700;
          color: var(--dark-header);
          font-size: 1rem;
        }

        .message-time {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-teal);
          background: var(--primary-teal-light);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          text-align: center;
          min-width: 80px;
        }

        .message-text {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1rem;
        }

        .white-card {
          background: white;
          padding: 3rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .form-group label {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .select-field, .textarea-field {
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          background: #fdfcf7;
          font-size: 1rem;
          outline: none;
        }

        .textarea-field {
          min-height: 150px;
          resize: none;
        }

        .full-width {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
        }

        @media (max-width: 1000px) {
          .messaging-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default MessagingPage;
