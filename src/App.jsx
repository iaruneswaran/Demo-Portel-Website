import React from 'react';
import HeroSection from './components/HeroSection';
import DualCardsSection from './components/DualCardsSection';
import WorkflowCardsSection from './components/WorkflowCardsSection';
import UtilityCardsSection from './components/UtilityCardsSection';
import DemoContentDrawer from './components/DemoContentDrawer';

export default function App() {
  return (
    <div className="app-root">
      <DemoContentDrawer />
      <main>
        <HeroSection />
        <div className="sections-wrapper">
          <DualCardsSection />
          <WorkflowCardsSection />
          <UtilityCardsSection />
        </div>
      </main>
    </div>
  );
}
