import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import ScrollToTop from './components/ScrollToTop';
import MultiStepBookingModal from './components/MultiStepBookingModal';

import HomePage from './views/HomePage';
import ServicesPage from './views/ServicesPage';
import AboutPage from './views/AboutPage';
import ReviewsPage from './views/ReviewsPage';
import HoursPage from './views/HoursPage';
import ContactPage from './views/ContactPage';
import ServiceAreasPage from './views/ServiceAreasPage';
import LocationLandingPage from './views/LocationLandingPage';
import KnowledgeBasePage from './views/KnowledgeBasePage';
import BlogPostPage from './views/BlogPostPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialServiceToBook, setInitialServiceToBook] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setInitialServiceToBook(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-200 selection:text-slate-900 font-sans">
        <HeaderNav onOpenBookingModal={handleOpenBooking} />
        
        <main className="flex-grow pb-16 lg:pb-0">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isBookingOpen={isBookingOpen}
                  setIsBookingOpen={setIsBookingOpen}
                  initialServiceToBook={initialServiceToBook}
                  setInitialServiceToBook={setInitialServiceToBook}
                />
              }
            />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route
              path="/locations/:slug"
              element={<LocationLandingPage onOpenBookingModal={handleOpenBooking} />}
            />
            <Route
              path="/knowledge-base"
              element={<KnowledgeBasePage onOpenBookingModal={handleOpenBooking} />}
            />
            <Route
              path="/knowledge-base/:slug"
              element={<BlogPostPage onOpenBookingModal={handleOpenBooking} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/hours" element={<HoursPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <HomePage
                  isBookingOpen={isBookingOpen}
                  setIsBookingOpen={setIsBookingOpen}
                  initialServiceToBook={initialServiceToBook}
                  setInitialServiceToBook={setInitialServiceToBook}
                />
              }
            />
          </Routes>
        </main>

        <Footer onOpenBookingModal={handleOpenBooking} />
        <MobileBar onOpenBookingModal={handleOpenBooking} />

        {/* Global Multi-Step Booking Modal */}
        <MultiStepBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialService={initialServiceToBook}
        />
      </div>
    </BrowserRouter>
  );
}
