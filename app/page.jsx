'use client';

import React, { useState } from 'react';
import HeroSection from '../src/components/HeroSection';
import EmergencyRescueBanner from '../src/components/EmergencyRescueBanner';
import InteractiveServiceMatrix from '../src/components/InteractiveServiceMatrix';
import TechnicianReviewCarousel from '../src/components/TechnicianReviewCarousel';
import QuoteSecondOpinion from '../src/components/QuoteSecondOpinion';
import ServiceAreaCoverage from '../src/components/ServiceAreaCoverage';
import MultiStepBookingModal from '../src/components/MultiStepBookingModal';
import { Phone, MessageSquare, Calendar, Flame, Snowflake, Award, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../src/data/hours';
import { SERVICE_CATEGORIES } from '../src/data/services';

export default function NextAppPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [serviceToBook, setServiceToBook] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setServiceToBook(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Emergency Bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white px-3 py-1.5 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-extrabold uppercase tracking-wider text-[11px] truncate">
              🚨 24/7/365 EMERGENCY DISPATCH ACTIVE • 45-MIN AVG RESPONSE ACROSS CLARK COUNTY
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] font-bold text-red-100 flex-shrink-0">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>NV License #0088935</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>EPA 608 Universal Certified</span>
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-white/20 hover:bg-white text-white hover:text-red-700 px-2.5 py-0.5 rounded transition-colors"
            >
              Hotline: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full bg-[#07152b] border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-blue-600 p-0.5 shadow-lg flex-shrink-0">
              <div className="w-full h-full bg-[#07152b] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Flame className="w-6 h-6 text-red-500 absolute -bottom-1 -left-1" />
                <Snowflake className="w-5 h-5 text-sky-400 absolute -top-0.5 -right-0.5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                  Passionate
                </span>
                <span className="text-xs font-black uppercase text-red-500 bg-red-950/80 px-1.5 py-0.5 rounded border border-red-800">
                  HVAC
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-wide text-slate-400 -mt-0.5 flex items-center gap-1">
                <span>Cooling & Heating LLC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400">★ 5.0 (200+ Reviews)</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-extrabold text-sm px-4 py-2.5 rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500 fill-red-500" />
              <span>(702) 858-1211</span>
            </a>

            <a
              href={BUSINESS_INFO.smsUrl}
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs px-3 py-2.5 rounded-xl border border-slate-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span>SMS</span>
            </a>

            <button
              onClick={() => handleOpenBooking()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-red-900/30 transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Free Quote / Book</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-grow pb-16 lg:pb-0">
        <HeroSection onOpenBookingModal={handleOpenBooking} />
        <EmergencyRescueBanner onOpenBookingModal={handleOpenBooking} />
        <InteractiveServiceMatrix onSelectServiceToBook={handleOpenBooking} />
        <TechnicianReviewCarousel />
        <QuoteSecondOpinion onOpenBookingModal={handleOpenBooking} />
        <ServiceAreaCoverage onOpenBookingModal={handleOpenBooking} />
      </main>

      {/* Footer */}
      <footer className="bg-[#040d1a] border-t border-slate-800 pt-16 pb-28 sm:pb-16 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#07152b] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  When Your A/C Don’t Sing, Give Passionate A Ring!
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  24/7/365 Emergency Dispatch • Nevada License #0088935 • EPA Universal Certified
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>(702) 858-1211</span>
              </a>

              <button
                onClick={() => handleOpenBooking()}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm px-5 py-3 rounded-xl border border-slate-700 transition-colors"
              >
                <span>Book Service / Free Quote</span>
              </button>
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Passionate Cooling & Heating LLC. All rights reserved. NV License #0088935.
            </div>
            <div className="flex items-center gap-6">
              <span>6672 Boulder Hwy Suite 2, Las Vegas, NV 89122</span>
              <span className="text-red-500 font-semibold">24/7 Emergency Dispatch</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07152b]/95 backdrop-blur-md border-t border-slate-800 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-[1.2] min-h-[48px] inline-flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white font-black text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-lg transition-all text-center"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <Phone className="w-4 h-4 fill-white flex-shrink-0" />
          <span className="truncate">Call (702) 858-1211</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-sky-500 to-blue-600 active:from-sky-600 active:to-blue-700 text-white font-bold text-xs sm:text-sm py-2.5 px-2 rounded-xl transition-all text-center shadow-md"
        >
          <Calendar className="w-4 h-4 text-white flex-shrink-0" />
          <span className="truncate">Book Online</span>
        </button>

        <a
          href={BUSINESS_INFO.smsUrl}
          className="min-h-[48px] px-3 inline-flex items-center justify-center bg-slate-800 active:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl transition-colors"
          title="Send SMS"
        >
          <MessageSquare className="w-4 h-4 text-sky-400" />
        </a>
      </div>

      {/* Global Multi-Step Booking Modal */}
      <MultiStepBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={serviceToBook}
      />
    </div>
  );
}
