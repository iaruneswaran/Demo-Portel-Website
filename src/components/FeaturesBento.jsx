import React from 'react';
import { Share2, ShieldCheck, Zap, Mail, BarChart3, Lock, Users } from 'lucide-react';

export default function FeaturesBento() {
  return (
    <section className="section-features" id="features">
      <div className="section-header">
        <span className="section-tag">Viral Mechanics</span>
        <h2 className="section-title">Everything you need to turn early adopters into advocates</h2>
        <p className="section-desc">
          Nasro combines behavioral psychology and viral loops so each subscriber brings 2.4 more.
        </p>
      </div>

      <div className="bento-grid">
        {/* Card 1: Large Span */}
        <div className="bento-card span-2">
          <div>
            <div className="bento-icon-wrapper">
              <Share2 size={26} />
            </div>
            <h3 className="bento-title">Gamified Referral Queue</h3>
            <p className="bento-desc">
              Every sign-up receives a customized queue position. Sharing their unique invite link moves them up the ladder, creating urgency and organic exponential sharing.
            </p>
          </div>
          <div className="bento-graphic" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0284c7' }}>2.4x</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Viral Coefficient</div>
            </div>
            <div style={{ height: '30px', width: '1px', background: '#cbd5e1' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>+41%</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Social Share Rate</div>
            </div>
            <div style={{ height: '30px', width: '1px', background: '#cbd5e1' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#7c3aed' }}>0.3s</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Queue Calculation</div>
            </div>
          </div>
        </div>

        {/* Card 2: Anti-Fraud */}
        <div className="bento-card">
          <div>
            <div className="bento-icon-wrapper emerald">
              <ShieldCheck size={26} />
            </div>
            <h3 className="bento-title">Bot & Disposable Filter</h3>
            <p className="bento-desc">
              Automatically weeds out 10-minute temporary inboxes, duplicate IP farms, and automated spam so your list stays 100% genuine.
            </p>
          </div>
          <div className="bento-graphic" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#059669', fontWeight: 700 }}>✓ Verified</span>
            <span>99.8% inbox deliverability</span>
          </div>
        </div>

        {/* Card 3: Lightning Embed */}
        <div className="bento-card">
          <div>
            <div className="bento-icon-wrapper amber">
              <Zap size={26} />
            </div>
            <h3 className="bento-title">1-Line React & HTML Embed</h3>
            <p className="bento-desc">
              Drop into Next.js, Webflow, Framer, or custom React apps in under 60 seconds with our zero-dependency snippet.
            </p>
          </div>
          <div className="bento-graphic" style={{ fontFamily: 'monospace', fontSize: '0.75rem', background: '#0f172a', color: '#38bdf8' }}>
            &lt;NasroWaitlist id="app" /&gt;
          </div>
        </div>

        {/* Card 4: Automated Drip Emails */}
        <div className="bento-card span-2">
          <div>
            <div className="bento-icon-wrapper purple">
              <Mail size={26} />
            </div>
            <h3 className="bento-title">Automated Progress & Milestone Notifications</h3>
            <p className="bento-desc">
              Keep subscribers excited with automatic transactional emails when friends join using their referral code, when they jump 100 spots, or when launch day arrives.
            </p>
          </div>
          <div className="bento-graphic" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8b5cf6' }}></div>
            <span>"Great news! Elena joined with your invite. You just jumped 450 spots to #42!"</span>
          </div>
        </div>
      </div>
    </section>
  );
}
