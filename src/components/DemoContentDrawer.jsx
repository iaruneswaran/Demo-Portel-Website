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
    title: 'Dental Consultation Reason',
    tag: 'Appointment Reason',
    content: 'Patient requesting dental check-up for persistent cold sensitivity on upper right second premolar and routine periodontal scaling.'
  },
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'Cardiology Intake Reason',
    tag: 'Appointment Reason',
    content: '52-year-old patient reports intermittent exertional chest tightness and resting palpitations over the past 3 weeks. Requesting cardiovascular evaluation.'
  },
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'Pediatric Intake Reason',
    tag: 'Appointment Reason',
    content: 'Child aged 6 presenting with mild dry cough, nocturnal wheezing for 4 days, and overdue scheduled booster vaccination.'
  },
  {
    category: 'Clinic Intake',
    section: '01',
    title: 'Orthopedic Intake Reason',
    tag: 'Appointment Reason',
    content: 'Acute right knee pain following a twist during sports activity. Moderate localized swelling and restricted weight-bearing range of motion.'
  },

  // 03 ADMISSION AI
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
    title: 'Hands-Free Voice Charting Prompt',
    tag: 'Voice Dictation',
    content: 'Dictate Chart: Subjective chest tightness resolved with rest. Objective findings: Normal S1/S2, clear lung fields bilaterally, no peripheral edema. Assessment: Atypical non-cardiac chest discomfort. Plan: Lipid panel, follow-up in 2 weeks.'
  },

  // 04 LABORATORY
  {
    category: 'Laboratory',
    section: '04',
    title: 'Sample Barcode & Specimen ID',
    tag: 'Specimen Intake',
    content: 'SPEC-99420-EDTA: Fasting venous blood sample collected in green top tube. Centrifuged at 3000 RPM. Routine comprehensive metabolic panel and HbA1c screening.'
  },
  {
    category: 'Laboratory',
    section: '04',
    title: 'AI Diagnostic Report Release',
    tag: 'Diagnostic Summary',
    content: 'Automated AI Diagnostic Check: Troponin-I < 0.01 ng/mL (Normal), Fasting Glucose 94 mg/dL (Normal), Serum Creatinine 0.9 mg/dL (Normal). No critical alerts triggered. Released to attending physician portal.'
  },

  // 05 PHARMACY
  {
    category: 'Pharmacy',
    section: '05',
    title: 'AI e-Prescription (e-Rx)',
    tag: 'Smart Prescription',
    content: 'Rx: Atorvastatin Calcium 20mg oral tablet. Take 1 tablet daily at bedtime. Quantity: 30 tablets. AI Dosage Verification: Cleared with zero drug-drug contraindications.'
  },
  {
    category: 'Pharmacy',
    section: '05',
    title: 'AI Pharmacy Fulfillment Report',
    tag: 'Dispense Log',
    content: 'Pharmacy Stock Fulfillment #RX-88412: Amoxicillin 500mg (21 capsules) allocated from Automated Dispense Unit #3. Barcode scan verified. Patient label generated with food-timing instructions.'
  },

  // 06 DISCHARGE
  {
    category: 'Discharge',
    section: '06',
    title: 'Physician Care Summary & Plan',
    tag: 'Care Notes',
    content: 'Patient discharged in stable hemodynamic condition. Instructions provided regarding low-sodium diet, hydration, and prescribed statin medication. Return to clinic in 14 days or immediately if chest discomfort recurs.'
  },
  {
    category: 'Discharge',
    section: '06',
    title: 'Billing Clearance & Exit Slip',
    tag: 'Invoice Reconciliation',
    content: 'Invoice #INV-2026-8834: Total Consultation & Diagnostics $380.00. Insurance Co-Pay $30.00 processed via card. Account balance: $0.00 (Fully Cleared). Exit clearance granted.'
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
                  <div className="demo-snippet-meta">
                    <span className="demo-section-pill">{item.section}</span>
                    <span className="demo-tag-pill">{item.tag}</span>
                  </div>
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

                <div className="demo-snippet-title">{item.title}</div>
                <div className="demo-snippet-content">{item.content}</div>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}
