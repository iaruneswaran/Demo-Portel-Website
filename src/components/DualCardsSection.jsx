import React from 'react';

const CLINICS = [
  {
    title: 'General Consultation',
    desc: 'Primary care & wellness check',
    image: '/General.png'
  },
  {
    title: 'Gynecology',
    desc: "Women's health & maternal care",
    image: '/Gynecology.png'
  },
  {
    title: 'Dental Care',
    desc: 'Oral care and consultations',
    image: '/Dental.png'
  },
  {
    title: 'Mental Wellness',
    desc: 'Emotional balance & therapy',
    image: '/Mental.png'
  },
  {
    title: 'Sports Medicine',
    desc: 'Injury rehab & performance care',
    image: '/Sports.png'
  }
];

const DOCTORS = [
  { name: 'Dr. Marcus Vance', specialty: 'General Consultation', image: '/Doctor 01.png' },
  { name: 'Dr. Sarah Johnson', specialty: 'Gynecology', image: '/Doctor 02.png' },
  { name: 'Dr. Elena Rostova', specialty: 'Dental Care', image: '/Doctor 02.png' },
  { name: 'Dr. Robert Chen', specialty: 'Mental Wellness', image: '/Doctor 01.png' },
  { name: 'Dr. Maya Patel', specialty: 'Sports Medicine', image: '/Doctor 02.png' }
];

export default function DualCardsSection() {
  return (
    <section className="apple-dual-section" id="cards-preview">
      {/* 01 Card - Patient Onboarding AI Agent */}
      <div className="apple-flagship-card">
        <div className="apple-card-header">
          <div className="apple-header-title-wrap">
            <h2 className="apple-card-title">Patient Onboarding AI Agent</h2>
            <span className="apple-step-badge">01</span>
          </div>
        </div>

        <div className="apple-grid-2x2">
          {CLINICS.map((clinic, index) => (
            <div key={index} className="apple-item-tile clinic-tile" tabIndex={0}>
              <div className="clinic-icon-wrap" aria-hidden="true">
                <img src={clinic.image} alt={clinic.title} className="clinic-icon-img" />
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
            <h2 className="apple-card-title">Assigned specialists</h2>
            <span className="apple-step-badge">02</span>
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
