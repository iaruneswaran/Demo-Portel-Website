import React from 'react';

const CLINICS = [
  {
    title: 'Dental Clinic',
    desc: 'Oral care and consultations',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7.5 3 11 0.8 1.8 2 3 3 3s2.2-1.2 3-3c1.5-3.5 3-7.5 3-11 0-3.5-2.5-6-6-6z" />
        <path d="M9 9c1 1.5 2 2 3 2s2-0.5 3-2" />
      </svg>
    )
  },
  {
    title: 'Cardiology Clinic',
    desc: 'Heart check-up and care',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        <path d="M8 12h2l1.5 -3l2 6l1.5 -3h2" />
      </svg>
    )
  },
  {
    title: 'Pediatric Clinic',
    desc: 'Child health and care',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        <path d="M12 3a2 2 0 0 1 2 2" />
      </svg>
    )
  },
  {
    title: 'Orthopedic Clinic',
    desc: 'Bone and joint care',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 4.5a3 3 0 0 0-4.24 0L12 5.76l-1.26-1.26a3 3 0 0 0-4.24 4.24L7.76 10l-4.26 4.26a3 3 0 0 0 4.24 4.24L9 17.24l1.26 1.26a3 3 0 0 0 4.24-4.24L13.24 13l4.26-4.26a3 3 0 0 0 0-4.24z" />
        <circle cx="7.5" cy="7.5" r="1" />
        <circle cx="16.5" cy="16.5" r="1" />
      </svg>
    )
  }
];

const DOCTORS = [
  { name: 'Dr. Marcus Vance', specialty: 'Dental Clinic', image: '/Doctor 01.png' },
  { name: 'Dr. Sarah Johnson', specialty: 'Cardiology Clinic', image: '/Doctor 02.png' },
  { name: 'Dr. Elena Rostova', specialty: 'Pediatric Clinic', image: '/Doctor 02.png' },
  { name: 'Dr. Robert Chen', specialty: 'Orthopedic Clinic', image: '/Doctor 01.png' }
];

export default function DualCardsSection() {
  return (
    <section className="apple-dual-section" id="cards-preview">
      {/* 01 Card - Clinic Intake */}
      <div className="apple-flagship-card">
        <div className="apple-card-header">
          <div className="apple-header-title-wrap">
            <span className="apple-step-badge">01</span>
            <h2 className="apple-card-title">Patient Onboarding AI Agent</h2>
          </div>
        </div>

        <div className="apple-grid-2x2">
          {CLINICS.map((clinic, index) => (
            <div key={index} className="apple-item-tile clinic-tile" tabIndex={0}>
              <div className="apple-icon-well" aria-hidden="true">
                {clinic.icon}
              </div>
              <div className="apple-tile-body">
                <div className="apple-tile-title">{clinic.title}</div>
                <div className="apple-tile-desc">{clinic.desc}</div>
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

      {/* 02 Card - Assigned Specialists */}
      <div className="apple-flagship-card">
        <div className="apple-card-header">
          <div className="apple-header-title-wrap">
            <span className="apple-step-badge">02</span>
            <h2 className="apple-card-title">Assigned specialists</h2>
          </div>
        </div>

        <div className="apple-grid-2x2">
          {DOCTORS.map((doctor, index) => (
            <div key={index} className="apple-item-tile doctor-tile" tabIndex={0}>
              <div className="doctor-avatar-wrap">
                <img src={doctor.image} alt={doctor.name} className="doctor-avatar-img" />
              </div>
              <div className="apple-tile-body">
                <div className="apple-tile-title">{doctor.name}</div>
                <div className="apple-tile-desc">{doctor.specialty}</div>
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
    </section>
  );
}
