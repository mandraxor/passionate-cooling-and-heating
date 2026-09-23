import React, { useState } from 'react';
import ServiceAreaCoverage from '../components/ServiceAreaCoverage';
import MultiStepBookingModal from '../components/MultiStepBookingModal';

export default function ServiceAreasPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#07152b] text-white py-14 sm:py-20 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-wider text-red-400 bg-red-950/80 px-4 py-1.5 rounded-full border border-red-800 mb-4 inline-block">
            Southern Nevada Dispatch Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Clark County & Mesquite Coverage Map
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Strategic mobile dispatch units stationed across Las Vegas, Henderson, Summerlin, Boulder City, and Mesquite, NV.
          </p>
        </div>
      </section>

      {/* Coverage Component with Interactive Zip Checker */}
      <ServiceAreaCoverage onOpenBookingModal={() => setIsBookingOpen(true)} />

      <MultiStepBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
