import React from 'react';

const WORKFLOW_STEPS = [
  {
    title: 'IP/OP Agents',
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
    title: 'Pharmacy',
    number: '04',
    items: [
      {
        title: 'POS Billing',
        desc: 'Prescription checkout & point-of-sale billing',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        )
      },
      {
        title: 'AI Pharmacy',
        desc: 'Smart dosage verification & e-Rx',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Laboratory',
    number: '05',
    items: [
      {
        title: 'Work Order Management',
        desc: 'Sample intake, barcode tracking & lab orders',
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
        title: 'Report Approval / AI Verification',
        desc: 'Diagnostic review & automated report release',
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
    title: 'Discharge Summary',
    number: '06',
    items: [
      {
        title: 'Reports Studio',
        desc: 'Dynamic clinical reporting & summary builder',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="3" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        )
      },
      {
        title: 'Template Management',
        desc: 'Standardized care plans & discharge templates',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
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
              <h2 className="apple-card-title">{col.title}</h2>
              <span className="apple-step-badge">{col.number}</span>
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
