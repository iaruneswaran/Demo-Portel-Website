import React, { useState, useEffect } from 'react';

const DEMO_CATEGORIES = [
  'All',
  'Clinic Intake',
  'Admission AI',
  'Laboratory',
  'Pharmacy',
  'Discharge'
];

const DEMO_SNIPPETS = [
  // 01 CLINIC INTAKE REASONS
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'General Consultation Reason',
    tag: 'Appointment Reason',
    content: 'Patient requesting annual comprehensive health checkup, baseline metabolic screening, and routine blood pressure evaluation.'
  },
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'Gynecology Intake Reason',
    tag: 'Appointment Reason',
    content: 'Routine annual pelvic examination, reproductive wellness consultation, and follow-up on prenatal screening results.'
  },
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'Dental Care Reason',
    tag: 'Appointment Reason',
    content: 'Patient requesting bi-annual dental prophylaxis, periodontal evaluation, and treatment for mild cold sensitivity on upper premolar.'
  },
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'Mental Wellness Intake Reason',
    tag: 'Appointment Reason',
    content: 'Requesting initial clinical assessment for work-related chronic fatigue, sleep disruption, and cognitive stress management.'
  },
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'Sports Medicine Intake Reason',
    tag: 'Appointment Reason',
    content: 'Acute right lateral knee discomfort following marathon training. Localized joint stiffness and assessment for physical therapy.'
  },

  // 03 IP/OP AGENTS
  {
    category: 'Admission AI',
    section: '03',
    title: 'Ambient Listening Transcription',
    tag: 'Live Clinical Note',
    content: 'Dr. Johnson: "Blood pressure is 128/82 mmHg, heart sounds regular with no audible murmur. EKG shows normal sinus rhythm at 72 bpm. Will order lipid profile and stress echocardiogram for baseline confirmation."'
  },
  {
    category: 'Admission AI',
    section: '03',
    title: 'Hands-Free Mode Charting Prompt',
    tag: 'Voice Dictation',
    content: 'Dictate Chart: Subjective chest tightness resolved with rest. Objective findings: Normal S1/S2, clear lung fields bilaterally, no peripheral edema. Assessment: Atypical non-cardiac chest discomfort. Plan: Lipid panel, follow-up in 2 weeks.'
  },

  // 04 PHARMACY
  {
    category: 'Pharmacy',
    section: '04',
    title: 'POS Billing & Checkout',
    tag: 'Point-of-Sale',
    content: 'POS Transaction #POS-8841: Prescription items validated. Total $42.50. Co-pay collected via NFC terminal. Receipt and medication intake schedule printed.'
  },
  {
    category: 'Pharmacy',
    section: '04',
    title: 'AI Pharmacy Verification',
    tag: 'Smart e-Rx',
    content: 'Rx: Atorvastatin Calcium 20mg oral tablet. Take 1 tablet daily at bedtime. Quantity: 30 tablets. AI Dosage Verification: Cleared with zero drug-drug contraindications.'
  },

  // 05 LABORATORY
  {
    category: 'Laboratory',
    section: '05',
    title: 'Work Order Management Log',
    tag: 'Lab Orders',
    content: 'WORK-ORDER-77492: Fasting venous blood sample collected in green top tube. Centrifuged at 3000 RPM. Scheduled for comprehensive metabolic panel and HbA1c screening.'
  },
  {
    category: 'Laboratory',
    section: '05',
    title: 'Report Approval / AI Verification',
    tag: 'Diagnostic Verification',
    content: 'Automated AI Diagnostic Check: Troponin-I < 0.01 ng/mL (Normal), Fasting Glucose 94 mg/dL (Normal), Serum Creatinine 0.9 mg/dL (Normal). No critical alerts triggered. Verified & released to physician portal.'
  },

  // 06 DISCHARGE SUMMARY
  {
    category: 'Discharge',
    section: '06',
    title: 'Reports Studio Care Summary',
    tag: 'Reports Studio',
    content: 'Patient discharged in stable hemodynamic condition. Instructions provided regarding low-sodium diet, hydration, and prescribed statin medication. Return to clinic in 14 days or immediately if chest discomfort recurs.'
  },
  {
    category: 'Discharge',
    section: '06',
    title: 'Template Management Care Plan',
    tag: 'Standardized Template',
    content: 'Discharge Template #TPL-CARDIO-04 applied: Post-consultation guidelines, diet protocol, emergency triage indicators, and digital follow-up booking link generated.'
  }
];

export default function DemoContentDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Close on Escape key & Lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const filteredSnippets = DEMO_SNIPPETS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Top Right Floating Trigger Button */}
      <button
        type="button"
        className="demo-trigger-btn"
        onClick={() => setIsOpen(true)}
        title="Open Pre-written Demo Content"
        aria-label="Open Pre-written Demo Content"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        <span>Demo Content</span>
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="demo-drawer-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer Panel */}
      <aside
        className={`demo-drawer-panel ${isOpen ? 'open' : ''}`}
        aria-label="Demo Content Copy Panel"
      >
        {/* Drawer Header */}
        <div className="demo-drawer-header">
          <div className="demo-drawer-header-left">
            <h3 className="demo-drawer-title">Demo Content</h3>
          </div>

          <button
            type="button"
            className="demo-drawer-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close demo panel"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="demo-drawer-search-wrap">
          <svg className="demo-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="demo-search-input"
            placeholder="Search appointment reasons, notes, rx..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="demo-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="demo-category-pills">
          {DEMO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`demo-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Snippets List */}
        <div className="demo-snippets-list">
          {filteredSnippets.length === 0 ? (
            <div className="demo-empty-state">
              No matching demo content found.
            </div>
          ) : (
            filteredSnippets.map((item, idx) => (
              <div key={idx} className="demo-snippet-card">
                <div className="demo-snippet-card-header">
                  <div className="demo-snippet-title">{item.title}</div>
                  <button
                    type="button"
                    className={`demo-copy-btn ${copiedIndex === idx ? 'copied' : ''}`}
                    onClick={() => handleCopy(item.content, idx)}
                  >
                    {copiedIndex === idx ? (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="demo-snippet-content">{item.content}</div>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}
