import React from 'react';

const CLINICS = [
  { title: 'Dental Clinic', desc: 'Oral care and consultations' },
  { title: 'Cardiology Clinic', desc: 'Heart check-up and care' },
  { title: 'Pediatric Clinic', desc: 'Child health and care' },
  { title: 'Orthopedic Clinic', desc: 'Bone and joint care' }
];

const DOCTORS = [
  { name: 'Dr. Marcus Vance', specialty: 'Dental Clinic', image: '/Doctor 01.png' },
  { name: 'Dr. Sarah Johnson', specialty: 'Cardiology Clinic', image: '/Doctor 02.png' },
  { name: 'Dr. Elena Rostova', specialty: 'Pediatric Clinic', image: '/Doctor 02.png' },
  { name: 'Dr. Robert Chen', specialty: 'Orthopedic Clinic', image: '/Doctor 01.png' }
];

export default function DualCardsSection() {
  return (
    <section className="dual-cards-section" id="cards-preview">
      {/* Left Card */}
      <div className="dual-card">
        <div className="dual-card-inner-white">
          <div className="apple-card-header">
            <h2 className="apple-card-title">Select specialized hospital clinic intake</h2>
            <span className="apple-card-number">01</span>
          </div>

          <div className="apple-grid-2x2">
            {CLINICS.map((clinic, index) => (
              <div key={index} className="apple-tile clinic-tile">
                <img src="/Clinic.png" alt={clinic.title} className="clinic-tile-img" />
                <div className="clinic-tile-info">
                  <div className="apple-tile-title">{clinic.title}</div>
                  <div className="apple-tile-desc">{clinic.desc}</div>
                </div>
                <svg className="tile-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="dual-card">
        <div className="dual-card-inner-white">
          <div className="apple-card-header">
            <h2 className="apple-card-title">Assigned specialists & clinical care</h2>
            <span className="apple-card-number">02</span>
          </div>

          <div className="apple-grid-2x2">
            {DOCTORS.map((doctor, index) => (
              <div key={index} className="apple-tile doctor-tile">
                <img src={doctor.image} alt={doctor.name} className="doctor-tile-img" />
                <div className="doctor-tile-info">
                  <div className="apple-tile-title">{doctor.name}</div>
                  <div className="apple-tile-desc">{doctor.specialty}</div>
                </div>
                <svg className="tile-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
