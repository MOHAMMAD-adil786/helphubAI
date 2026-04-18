import React from 'react';
import Navbar from '../components/common/Navbar';
import RequestCard from '../components/cards/RequestCard';

const ExplorePage = () => {
  const mockRequests = [
    {
      title: "Need help",
      description: "helpn needed",
      category: "Web Development",
      urgency: "High",
      status: "Solved",
      tags: [],
      userName: "Ayesha Khan",
      userLocation: "Karachi",
      helpersCount: 1
    },
    {
      title: "Need help making my portfolio responsive before demo day",
      description: "My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.",
      category: "Web Development",
      urgency: "High",
      status: "Solved",
      tags: ["HTML/CSS", "Responsive", "Portfolio"],
      userName: "Sara Noor",
      userLocation: "Karachi",
      helpersCount: 1
    },
    {
      title: "Looking for Figma feedback on a volunteer event poster",
      description: "I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.",
      category: "Design",
      urgency: "Medium",
      status: "Open",
      tags: ["Figma", "Poster", "Design Review"],
      userName: "Ayesha Khan",
      userLocation: "Lahore",
      helpersCount: 1
    },
    {
      title: "Need mock interview support for internship applications",
      description: "Applying to frontend internships and need someone to practice behavioral and technical questions with me.",
      category: "Career",
      urgency: "Low",
      status: "Solved",
      tags: ["Interview Prep", "Career", "Frontend"],
      userName: "Sara Noor",
      userLocation: "Remote",
      helpersCount: 2
    }
  ];

  return (
    <div className="explore-page">
      <Navbar />
      
      <main className="explore-container">
        <header className="explore-header">
          <div className="section-tag">EXPLORE / FEED</div>
          <h1 className="explore-title">Browse help requests with filterable community context.</h1>
          <p className="explore-subtitle">Filter by category, urgency, skills, and location to surface the best matches.</p>
        </header>

        <div className="explore-content">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <h2 className="sidebar-title">Refine the feed</h2>
            
            <div className="filter-group">
              <label>Category</label>
              <select className="filter-select">
                <option>All categories</option>
                <option>Web Development</option>
                <option>Design</option>
                <option>Career</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Urgency</label>
              <select className="filter-select">
                <option>All urgency levels</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Skills</label>
              <input type="text" placeholder="React, Figma, Git/GitHub" className="filter-input" />
            </div>

            <div className="filter-group">
              <label>Location</label>
              <input type="text" placeholder="Karachi, Lahore, Remote" className="filter-input" />
            </div>
          </aside>

          {/* Main Feed */}
          <section className="requests-feed">
            {mockRequests.map((req, index) => (
              <RequestCard key={index} request={req} />
            ))}
          </section>
        </div>
      </main>

      <style jsx="true">{`
        .explore-page {
          min-height: 100vh;
        }

        .explore-container {
          padding: 3rem 2%;
          max-width: 100%;
          margin: 0;
        }

        .explore-header {
          background: var(--dark-header);
          color: white;
          padding: 3rem;
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
        }

        .explore-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0.5rem 0;
          line-height: 1.2;
        }

        .explore-subtitle {
          opacity: 0.7;
          font-size: 1.1rem;
        }

        .explore-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 3rem;
        }

        .filters-sidebar {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          height: fit-content;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          box-shadow: var(--shadow-soft);
        }

        .sidebar-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-header);
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .filter-select, .filter-input {
          padding: 1rem;
          background: #fdfcf7;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          outline: none;
        }

        .filter-input::placeholder {
          color: #cbd5e1;
        }

        .requests-feed {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        @media (max-width: 1000px) {
          .explore-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ExplorePage;
