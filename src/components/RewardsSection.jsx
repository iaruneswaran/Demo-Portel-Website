import React from 'react';
import { Check, Trophy, Gift, Award, Zap } from 'lucide-react';

export default function RewardsSection({ onJoinClick }) {
  const tiers = [
    {
      title: 'VIP Early Beta',
      friends: '3 Friends',
      description: 'Skip ahead of the general public and test new features 3 weeks before anyone else.',
      icon: <Trophy size={28} color="#0284c7" />,
      features: [
        'Guaranteed Day 1 Access',
        'Direct Slack Channel with Founders',
        'Early Bird Launch Discount',
        'Private Beta Testing Badge'
      ],
      featured: false,
    },
    {
      title: 'Free 1-Year Pro',
      friends: '5 Friends',
      description: 'Our most popular reward. Get 12 months of full Pro capabilities completely on the house.',
      icon: <Gift size={28} color="#0284c7" />,
      features: [
        'All VIP Beta perks included',
        'Free Pro Tier for 1 Full Year ($240 value)',
        'Unlimited Waitlists & Subscribers',
        'Custom Domain & Custom CSS'
      ],
      featured: true,
      badge: 'Most Popular'
    },
    {
      title: 'Founder Circle',
      friends: '10 Friends',
      description: 'Exclusive group of our highest tier advocates with lifetime perks and direct roadmapping.',
      icon: <Award size={28} color="#0284c7" />,
      features: [
        'All Pro & VIP perks included',
        'Permanent 50% Lifetime discount',
        'Exclusive Founder Edition Swag Box',
        'Your logo on our Early Backer wall'
      ],
      featured: false,
    }
  ];

  return (
    <section className="section-rewards" id="rewards">
      <div className="section-header">
        <span className="section-tag">Referral Milestones</span>
        <h2 className="section-title">Unlock exclusive perks as your friends sign up</h2>
        <p className="section-desc">
          Every friend who signs up with your unique link moves you higher up the list and unlocks permanent product perks.
        </p>
      </div>

      <div className="rewards-grid">
        {tiers.map((tier, idx) => (
          <div key={idx} className={`reward-card ${tier.featured ? 'featured' : ''}`}>
            {tier.badge && <div className="reward-pill">{tier.badge}</div>}
            
            <div style={{ display: 'inline-flex', padding: '12px', background: '#f0f9ff', borderRadius: '16px', marginBottom: '16px' }}>
              {tier.icon}
            </div>

            <div className="reward-friends-badge">Invite {tier.friends}</div>
            <h3 className="reward-name">{tier.title}</h3>
            <p className="reward-description">{tier.description}</p>

            <ul className="reward-features-list">
              {tier.features.map((feat, fIdx) => (
                <li key={fIdx} className="reward-feature-item">
                  <Check size={16} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onJoinClick}
              className="waitlist-btn"
              style={{
                width: '100%',
                marginTop: '28px',
                background: tier.featured ? '#0284c7' : '#f1f5f9',
                color: tier.featured ? '#ffffff' : '#0f172a',
                boxShadow: tier.featured ? '0 4px 14px rgba(2, 132, 199, 0.25)' : 'none'
              }}
            >
              Unlock This Perk
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
