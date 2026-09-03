import React from 'react';
import HeroSection from './components/HeroSection';
import DualCardsSection from './components/DualCardsSection';
import WorkflowCardsSection from './components/WorkflowCardsSection';

export default function App() {
  return (
    <div className="app-root">
      <main>
        <HeroSection />
        <div className="sections-wrapper">
          <DualCardsSection />
          <WorkflowCardsSection />
        </div>
      </main>
    </div>
  );
}
