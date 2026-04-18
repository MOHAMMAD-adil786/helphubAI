import React from 'react';
import Navbar from '../components/common/Navbar';

const NotificationsPage = () => {
  const notifications = [
    { title: "Need help” was marked as solved", meta: "Status • Just now", status: "Unread" },
    { title: "Ayesha Khan offered help on “Need help”", meta: "Match • Just now", status: "Unread" },
    { title: "Your request “Need help” is now live in the community feed", meta: "Request • Just now", status: "Unread" },
    { title: "Need help making my portfolio responsive before demo day” was marked as solved", meta: "Status • Just now", status: "Unread" },
    { title: "New helper matched to your responsive portfolio request", meta: "Match • 12 min ago", status: "Unread" },
    { title: "Your trust score increased after a solved request", meta: "Reputation • 1 hr ago", status: "Unread" },
    { title: "AI Center detected rising demand for interview prep", meta: "Insight • Today", status: "Read" }
  ];

  return (
    <div className="notifications-page">
      <Navbar />
      
      <main className="notifications-container">
        <header className="notifications-header">
          <div className="section-tag-light">NOTIFICATIONS</div>
          <h1 className="notifications-title">Stay updated on requests, helpers, and trust signals.</h1>
        </header>

        <section className="feed-section">
          <div className="white-card-full">
            <div className="section-tag">LIVE UPDATES</div>
            <h1 className="section-main-title">Notification feed</h1>
            
            <div className="notif-list">
              {notifications.map((n, idx) => (
                <div key={idx} className="notif-item">
                  <div className="notif-content">
                    <h4>{n.title}</h4>
                    <span>{n.meta}</span>
                  </div>
                  <button className={`status-badge ${n.status.toLowerCase()}`}>
                    {n.status}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx="true">{`
        .notifications-page {
          min-height: 100vh;
        }

        .notifications-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .notifications-header {
          background: var(--dark-header);
          color: white;
          padding: 4rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .notifications-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          margin: 1rem 0;
          max-width: 900px;
        }

        .section-tag-light {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.7;
        }

        .white-card-full {
          background: white;
          padding: 3.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
        }

        .section-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-teal);
          letter-spacing: 0.05em;
          margin-bottom: 0.8rem;
          display: block;
        }

        .section-main-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--dark-header);
          margin-bottom: 3rem;
        }

        .notif-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .notif-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: #fdfcf7;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0,0,0,0.02);
          transition: var(--transition);
        }

        .notif-item:hover {
          transform: translateX(8px);
          border-color: var(--primary-teal);
        }

        .notif-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--dark-header);
          margin-bottom: 0.3rem;
        }

        .notif-content span {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .status-badge {
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid var(--border-light);
          background: white;
          cursor: pointer;
        }

        .status-badge.unread {
          color: var(--dark-header);
        }

        .status-badge.read {
          color: var(--text-muted);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default NotificationsPage;
