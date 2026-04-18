import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import OnboardingPage from './pages/OnboardingPage';
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage';
import ExplorePage from './pages/ExplorePage';
import CreateRequestPage from './pages/CreateRequestPage';
import RequestDetailPage from './pages/RequestDetailPage';
import MessagingPage from './pages/MessagingPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AICenterPage from './pages/AICenterPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Pixel-perfect mesh background */}
        <div className="mesh-bg"></div>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/create" element={<CreateRequestPage />} />
          <Route path="/details/:id" element={<RequestDetailPage />} />
          <Route path="/messages" element={<MessagingPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/ai-center" element={<AICenterPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>

      <style jsx="true">{`
        .app-container {
          position: relative;
          min-height: 100vh;
        }
      `}</style>
    </Router>
  );
}

export default App;
