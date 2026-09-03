import React from 'react';
import { Sparkles, LayoutDashboard, Globe } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, isScrolled }) {
  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); setCurrentView('landing'); }}>
          <div className="nav-brand-logo">
            <Sparkles size={18} strokeWidth={2.5} />
          </div>
          <span>Nasro</span>
        </a>

        <div className="nav-actions">
          <div className="view-mode-toggle" title="Toggle between Landing Page and Creator Dashboard">
            <button
              className={`view-mode-btn ${currentView === 'landing' ? 'active' : ''}`}
              onClick={() => setCurrentView('landing')}
              id="view-landing-btn"
            >
              <Globe size={14} />
              <span>Landing</span>
            </button>
            <button
              className={`view-mode-btn ${currentView === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentView('dashboard')}
              id="view-dashboard-btn"
            >
              <LayoutDashboard size={14} />
              <span>Creator Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
