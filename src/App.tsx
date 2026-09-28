import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSpace } from './components/AboutSpace';
import { Gallery } from './components/Gallery';
import { EventTypes } from './components/EventTypes';
import { VenueAmenities } from './components/VenueAmenities';
import { BudgetSimulator } from './components/BudgetSimulator';
import { LocationSection } from './components/LocationSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function MainApp() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [simulatorEventType, setSimulatorEventType] = useState('aniversarios');

  const handleSelectEventType = (typeId: string) => {
    setSimulatorEventType(typeId);
    const simulatorEl = document.getElementById('simulador');
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50/40 text-neutral-900 transition-colors duration-200 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-800 dark:selection:text-amber-200">
      
      {/* Top Navbar with Theme Toggle */}
      <Navbar onOpenScheduleModal={() => setScheduleModalOpen(true)} />

      {/* Main Content Flow - Harmonious, Symmetrical, No Bloated Spacings */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenScheduleModal={() => setScheduleModalOpen(true)} />

        {/* About Venue Section */}
        <AboutSpace />

        {/* Gallery Section with Lightbox */}
        <Gallery />

        {/* Event Types Section */}
        <EventTypes onSelectEventType={handleSelectEventType} />

        {/* Structure & Amenities Symmetrical 3x2 Grid */}
        <VenueAmenities />

        {/* Interactive Budget Simulator with 1-click WhatsApp */}
        <BudgetSimulator initialEventType={simulatorEventType} />

        {/* Customer Testimonials Symmetrical 3-Col Grid */}
        <Testimonials />

        {/* Location Section with Google Maps & Waze */}
        <LocationSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenScheduleModal={() => setScheduleModalOpen(true)} />

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
