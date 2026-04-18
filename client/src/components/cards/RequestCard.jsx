import React from 'react';

const RequestCard = ({ request }) => {
  // Mock data if none provided
  const {
    title = "Need help making my portfolio responsive",
    description = "My HTML/CSS portfolio breaks on tablets and I need layout guidance.",
    category = "Web Development",
    urgency = "High",
    status = "Open",
    tags = ["HTML/CSS", "Responsive", "Portfolio"],
    userName = "Sara Noor",
    userLocation = "Karachi",
    helpersCount = 1
  } = request || {};

  return (
    <div className="request-card">
      <div className="request-badges">
        <span className={`badge-pill cat-${category.toLowerCase().replace(' ', '-')}`}>{category}</span>
        <span className={`badge-pill urgency-${urgency.toLowerCase()}`}>{urgency}</span>
        <span className={`badge-pill status-${status.toLowerCase()}`}>{status}</span>
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>

      <div className="card-tags">
        {tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
      </div>

      <div className="card-footer">
        <div className="user-blob">
          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-meta">{userLocation} • {helpersCount} helper{helpersCount !== 1 ? 's' : ''} interested</span>
          </div>
        </div>
        <button className="btn-details-outline">Open details</button>
      </div>

      <style jsx="true">{`
        .request-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          transition: var(--transition);
        }

        .request-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }

        .request-badges {
          display: flex;
          gap: 0.5rem;
        }

        .badge-pill {
          padding: 0.25rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* Category dynamic colors */
        .cat-web-development { background: #f0fdfa; color: #0d9488; }
        .cat-design { background: #fdf2f8; color: #db2777; }
        
        /* Urgency dynamic colors */
        .urgency-high { background: #fff1f2; color: #e11d48; }
        .urgency-medium { background: #fffbeb; color: #d97706; }
        .urgency-low { background: #eff6ff; color: #2563eb; }

        /* Status colors */
        .status-solved { background: #ecfdf5; color: #059669; }
        .status-open { background: #f3f4f6; color: #4b5563; }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--dark-header);
          line-height: 1.3;
        }

        .card-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .card-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag-pill {
          background: #f9fafb;
          border: 1px solid var(--border-light);
          padding: 0.2rem 0.7rem;
          border-radius: 6px;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .card-footer {
          margin-top: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .user-name {
          display: block;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--dark-header);
        }

        .user-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .btn-details-outline {
          background: transparent;
          border: 1px solid var(--border-light);
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-details-outline:hover {
          background: var(--bg-main);
          border-color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

export default RequestCard;
