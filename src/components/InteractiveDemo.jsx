import React, { useState } from 'react';
import { Palette, Check, Sparkles, Code2, Sliders } from 'lucide-react';

export default function InteractiveDemo() {
  const [theme, setTheme] = useState('sky');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoJoined, setDemoJoined] = useState(false);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (!demoEmail) return;
    setDemoJoined(true);
    setTimeout(() => {
      setDemoJoined(false);
      setDemoEmail('');
    }, 3000);
  };

  return (
    <section className="section-demo" id="product">
      <div className="section-header">
        <span className="section-tag">Interactive Preview</span>
        <h2 className="section-title">Built for high-converting product launches</h2>
        <p className="section-desc">
          Embed modern, ultra-fast waitlist capture forms directly onto your landing page or web app with zero backend setup.
        </p>
      </div>

      <div className="demo-showcase-container">
        {/* Top interactive controller */}
        <div className="demo-top-bar">
          <div className="demo-traffic-lights">
            <span className="demo-light red"></span>
            <span className="demo-light yellow"></span>
            <span className="demo-light green"></span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Palette size={14} />
              <span>Widget Theme:</span>
            </span>
            <div className="demo-theme-selector">
              <button
                className={`demo-theme-btn ${theme === 'sky' ? 'active' : ''}`}
                onClick={() => setTheme('sky')}
              >
                Sky Blue
              </button>
              <button
                className={`demo-theme-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                Midnight Dark
              </button>
              <button
                className={`demo-theme-btn ${theme === 'emerald' ? 'active' : ''}`}
                onClick={() => setTheme('emerald')}
              >
                Emerald
              </button>
              <button
                className={`demo-theme-btn ${theme === 'purple' ? 'active' : ''}`}
                onClick={() => setTheme('purple')}
              >
                Violet
              </button>
            </div>
          </div>
        </div>

        {/* Live dynamic preview stage */}
        <div className={`demo-stage theme-${theme}`}>
          <div className="demo-widget-preview">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(10px)',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              marginBottom: '16px',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <Sparkles size={12} />
              <span>Public Beta Preview</span>
            </div>

            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              marginBottom: '10px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}>
              Be the first to know
            </h3>

            <p style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '0.92rem',
              maxWidth: '420px',
              margin: '0 auto 24px',
              lineHeight: 1.5
            }}>
              Join 8,000+ creators building their audience before launching on Product Hunt.
            </p>

            <form onSubmit={handleDemoSubmit} style={{ maxWidth: '440px', margin: '0 auto' }}>
              <div className="waitlist-pill-bar" style={{ padding: '5px 5px 5px 18px' }}>
                <input
                  type="email"
                  className="waitlist-input"
                  placeholder="name@company.com"
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="waitlist-btn"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.78rem',
                    color: theme === 'sky' ? '#0284c7' : theme === 'emerald' ? '#059669' : '#0f172a'
                  }}
                >
                  {demoJoined ? 'RESERVED!' : 'GET ACCESS'}
                </button>
              </div>
            </form>

            {demoJoined && (
              <p style={{
                color: '#86efac',
                fontSize: '0.84rem',
                marginTop: '12px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}>
                <Check size={16} />
                <span>Simulated spot #4,291 reserved! Viral loop triggered.</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
