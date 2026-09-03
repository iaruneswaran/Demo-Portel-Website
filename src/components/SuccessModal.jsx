import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Copy, Check, Share2, Sparkles, Trophy, Award, Gift, ArrowUpRight } from 'lucide-react';

export default function SuccessModal({ isOpen, onClose, userEmail, queuePosition, onSimulateReferral }) {
  const [copied, setCopied] = useState(false);
  const [referralCount, setReferralCount] = useState(0);

  // Generate a mock referral link based on email
  const referralCode = userEmail ? btoa(userEmail).slice(0, 8).toLowerCase() : 'beta77';
  const referralLink = `https://nasro.co/join?ref=${referralCode}`;

  useEffect(() => {
    if (isOpen) {
      // Fire confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#0284c7', '#22c55e', '#f59e0b', '#ec4899']
        });
      } catch (err) {
        // Safe fallback
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddReferral = () => {
    const nextCount = referralCount + 1;
    setReferralCount(nextCount);
    onSimulateReferral(nextCount);

    // Confetti on unlocking tiers
    if (nextCount === 3 || nextCount === 5 || nextCount === 10) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 }
      });
    }
  };

  // Adjusted position as referrals increase
  const currentPosition = Math.max(1, queuePosition - (referralCount * 450));

  const shareText = encodeURIComponent(`I just secured early access to Nasro! Jump ahead in line with my priority invite: ${referralLink}`);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`;

  return (
    <div className="success-overlay" onClick={onClose}>
      <div className="success-card" onClick={(e) => e.stopPropagation()} id="waitlist-success-modal">
        <button className="success-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="success-badge">
          <Sparkles size={14} />
          <span>Spot Reserved</span>
        </div>

        <h2 className="success-title">You're on the list!</h2>
        <p className="success-subtitle">
          We sent a confirmation to <strong>{userEmail}</strong>. Want early beta access sooner? Invite friends to leapfrog ahead!
        </p>

        {/* Queue Positioning Stats */}
        <div className="queue-indicator-box">
          <div className="queue-stat">
            <span className="queue-stat-value">#{currentPosition.toLocaleString()}</span>
            <span className="queue-stat-label">Your Queue Position</span>
          </div>
          <div className="queue-divider"></div>
          <div className="queue-stat">
            <span className="queue-stat-value" style={{ color: '#10b981' }}>{referralCount}</span>
            <span className="queue-stat-label">Friends Referred</span>
          </div>
          <div className="queue-divider"></div>
          <div className="queue-stat">
            <span className="queue-stat-value" style={{ color: '#f59e0b' }}>Top 5%</span>
            <span className="queue-stat-label">Priority Tier</span>
          </div>
        </div>

        {/* Unique Viral Link */}
        <div className="referral-box">
          <span className="referral-label">Your unique referral link (share to skip 450 spots per friend):</span>
          <div className="referral-input-wrapper">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="referral-input"
              onClick={handleCopy}
            />
            <button className="referral-copy-btn" onClick={handleCopy} id="copy-referral-btn">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Quick Social Shares */}
        <div className="share-shortcuts">
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="share-btn x" id="share-x-btn">
            <span>Share on X</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="share-btn whatsapp" id="share-wa-btn">
            <span>WhatsApp</span>
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="share-btn linkedin" id="share-li-btn">
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Milestone Rewards Tracker */}
        <div className="milestones-card">
          <div className="milestones-header">
            <span className="milestones-title">Milestone Rewards</span>
            <button
              onClick={handleAddReferral}
              style={{
                background: '#f0f9ff',
                border: '1px solid #bae6fd',
                color: '#0284c7',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Test referral progression"
            >
              + Simulate Friend Invite
            </button>
          </div>

          <div className="milestone-track">
            <div className={`milestone-item ${referralCount >= 3 ? 'unlocked' : ''}`}>
              <div className="milestone-icon">
                <Trophy size={14} />
              </div>
              <div className="milestone-info">
                <div className="milestone-name">VIP Beta Access Pass (3 referrals)</div>
                <div className="milestone-desc">
                  {referralCount >= 3 ? '🎉 Unlocked! Ready for Beta launch' : `${Math.max(0, 3 - referralCount)} more invites needed`}
                </div>
              </div>
            </div>

            <div className={`milestone-item ${referralCount >= 5 ? 'unlocked' : ''}`}>
              <div className="milestone-icon">
                <Gift size={14} />
              </div>
              <div className="milestone-info">
                <div className="milestone-name">1-Year Free Pro Subscription (5 referrals)</div>
                <div className="milestone-desc">
                  {referralCount >= 5 ? '🎉 Unlocked! $240 value credited' : `${Math.max(0, 5 - referralCount)} more invites needed`}
                </div>
              </div>
            </div>

            <div className={`milestone-item ${referralCount >= 10 ? 'unlocked' : ''}`}>
              <div className="milestone-icon">
                <Award size={14} />
              </div>
              <div className="milestone-info">
                <div className="milestone-name">Founder Circle & Custom Domain (10 referrals)</div>
                <div className="milestone-desc">
                  {referralCount >= 10 ? '🎉 Elite Status Unlocked' : `${Math.max(0, 10 - referralCount)} more invites needed`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
