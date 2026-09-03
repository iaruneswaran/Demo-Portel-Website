import React from 'react';

const WORKFLOW_STEPS = [
  {
    title: 'Admission AI',
    number: '03',
    items: [
      {
        title: 'Ambient Listening',
        desc: 'Real-time clinical conversation transcription',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        )
      },
      {
        title: 'Hands-Free Mode',
        desc: 'Voice-driven charting & live clinical notes',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 10v3" />
            <path d="M6 6v11" />
            <path d="M10 3v18" />
            <path d="M14 8v7" />
            <path d="M18 5v13" />
            <path d="M22 10v3" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Laboratory',
    number: '04',
    items: [
      {
        title: 'AI Sample Tracking',
        desc: 'Scan barcodes & smart specimen analysis',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2" />
            <path d="M8.5 2h7" />
            <path d="M9.5 9h5" />
            <path d="M9.5 14h3" />
          </svg>
        )
      },
      {
        title: 'AI Diagnostic Reports',
        desc: 'Automated diagnostic review & report release',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="m9 15 2 2 4-4" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Pharmacy',
    number: '05',
    items: [
      {
        title: 'AI Pharmacy',
        desc: 'Smart dosage verification & e-Rx',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
          </svg>
        )
      },
      {
        title: 'AI Pharmacy Report',
        desc: 'Stock fulfillment & medicine issue',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="16" height="18" x="4" y="3" rx="4" />
            <path d="M8 9h8" />
            <path d="M8 13h5" />
            <path d="M12 9v8" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Discharge Summary',
    number: '06',
    items: [
      {
        title: 'Care Summary',
        desc: 'Physician notes & follow-up plan',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" />
            <path d="M9 14l2 2 4-4" />
          </svg>
        )
      },
      {
        title: 'Billing Clearance',
        desc: 'Invoice reconciliation & exit slip',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="4" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
            <path d="m9 16 3-3 3 3" />
          </svg>
        )
      }
    ]
  }
];

export default function WorkflowCardsSection() {
  return (
    <section className="apple-workflow-section" id="workflow-cards">
      {WORKFLOW_STEPS.map((col, index) => (
        <div key={index} className="apple-workflow-card">
          <div className="apple-card-header">
            <div className="apple-header-title-wrap">
              <span className="apple-step-badge">{col.number}</span>
              <h2 className="apple-card-title">{col.title}</h2>
            </div>
          </div>

          <div className="apple-workflow-items">
            {col.items.map((item, i) => (
              <div key={i} className="apple-item-tile workflow-item-tile" tabIndex={0}>
                <div className="apple-icon-well" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="apple-tile-body">
                  <div className="apple-tile-title">{item.title}</div>
                  <div className="apple-tile-desc">{item.desc}</div>
                </div>
                <div className="apple-tile-action" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
