import React from 'react';

const WORKFLOW_STEPS = [
  {
    title: 'Admission AI',
    number: '03',
    items: [
      {
        title: 'Ambient Listening',
        desc: 'Real-time clinical conversation transcription'
      },
      {
        title: 'Hands-Free Mode',
        desc: 'Voice-driven charting & live clinical notes'
      }
    ]
  },
  {
    title: 'Laboratory',
    number: '04',
    items: [
      {
        title: 'Sample Tracking',
        desc: 'Scan barcodes & collect specimens'
      },
      {
        title: 'Publish Reports',
        desc: 'Diagnostic review & report release'
      }
    ]
  },
  {
    title: 'Pharmacy',
    number: '05',
    items: [
      {
        title: 'AI Pharmacy',
        desc: 'Smart dosage verification & e-Rx'
      },
      {
        title: 'Dispense Medicines',
        desc: 'Stock fulfillment & medicine issue'
      }
    ]
  },
  {
    title: 'Discharge',
    number: '06',
    items: [
      {
        title: 'Care Summary',
        desc: 'Physician notes & follow-up plan'
      },
      {
        title: 'Billing Clearance',
        desc: 'Invoice reconciliation & exit slip'
      }
    ]
  }
];

export default function WorkflowCardsSection() {
  return (
    <section className="workflow-cards-section" id="workflow-cards">
      {WORKFLOW_STEPS.map((col, index) => (
        <div key={index} className="workflow-white-card">
          <div className="apple-card-header workflow-card-header">
            <h2 className="apple-card-title workflow-card-title">{col.title}</h2>
            <span className="apple-card-number">{col.number}</span>
          </div>

          <div className="workflow-card-items">
            {col.items.map((item, i) => (
              <div key={i} className="apple-tile workflow-tile">
                <div className="workflow-tile-check" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="workflow-tile-info">
                  <div className="apple-tile-title">{item.title}</div>
                  <div className="apple-tile-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
