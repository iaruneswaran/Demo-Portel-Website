import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer({ onJoinClick }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="nav-brand-logo" style={{ background: '#38bdf8', color: '#0f172a' }}>
            <Sparkles size={18} strokeWidth={2.5} />
          </div>
          <span>Nasro</span>
        </div>

        <div style={{ display: 'flex', gap: '28px', fontSize: '0.88rem' }}>
          <a href="#hero" style={{ color: '#94a3b8', textDecoration: 'none' }}>Back to Top</a>
          <a href="#product" style={{ color: '#94a3b8', textDecoration: 'none' }}>Widget Demo</a>
          <a href="#rewards" style={{ color: '#94a3b8', textDecoration: 'none' }}>Rewards</a>
          <a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>FAQ</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onJoinClick(); }} style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}>Join Waitlist</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} Nasro Technologies, Inc. All rights reserved.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>Crafted for high-growth launches</span>
        </div>
      </div>
    </footer>
  );
}
