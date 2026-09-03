import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      {/* Ambient background glow orbs */}
      <div className="hero-ambient-glow-1"></div>
      <div className="hero-ambient-glow-2"></div>

      <div className="hero-content">
        {/* Main Heading */}
        <h1 className="hero-title">
          GoodDoc<br />Experience Center
        </h1>
      </div>

      {/* Bottom-aligned Hero Doctors Image */}
      <div className="hero-image-container">
        <img
          src="/hero%20image.png"
          alt="GoodDoc Medical Team"
          className="hero-bottom-img"
        />
      </div>
    </section>
  );
}
