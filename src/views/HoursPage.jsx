import React, { useState } from 'react';
import { Clock, MapPin, Phone, Navigation, Check, Award, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';
import MultiStepBookingModal from '../components/MultiStepBookingModal';

export default function HoursPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Header */}
      <section className="bg-[#07152b] text-white py-14 sm:py-20 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-wider text-sky-300 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-800 mb-4 inline-block">
            Continuous 24/7/365 Readiness
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Operating Schedule & Boulder Hwy Facility
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            When desert temperatures soar past 115°F, HVAC emergencies don't wait for business hours. We maintain fully staffed emergency truck crews 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      {/* Main Schedule & Location Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Weekly Hours Table */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-elevated space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#07152b]">Weekly Dispatch Schedule</h2>
                  <p className="text-xs text-slate-500">Continuous 24-Hour Coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open 24 Hours</span>
              </div>
            </div>

            <div className="space-y-2">
              {BUSINESS_INFO.schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-800">{item.day}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                    <Check className="w-3.5 h-3.5 text-sky-600" />
                    <span>Open 24 Hours</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
              <p className="font-bold text-slate-800">Dispatch Guarantees:</p>
              <p>✓ 45-minute average arrival time across Clark County</p>
              <p>✓ Zero late-night or weekend emergency bait-and-switch fees</p>
              <p>✓ On-call master technicians equipped with OEM truck stock</p>
            </div>
          </div>

          {/* Physical Address & Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-elevated space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#07152b]">Physical Facility</h2>
                  <p className="text-xs text-slate-500">Headquarters & Parts Depot</p>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase font-extrabold text-sky-600 tracking-wider">
                  Address
                </div>
                <p className="text-lg font-black text-[#07152b] mt-1">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Strategically situated on Boulder Highway near Russell Rd & Tropicana corridors for immediate highway access to US-95, I-515, and the 215 Beltway.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase font-extrabold text-sky-600 tracking-wider">
                  24/7 Telephone
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-2xl font-black text-sky-600 hover:text-sky-700 transition-colors inline-flex items-center gap-2 mt-1"
                >
                  <Phone className="w-6 h-6 fill-sky-600" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#07152b] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>Google Maps Directions</span>
                </a>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>Book Slot Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Credentials Strip */}
            <div className="bg-[#07152b] text-white rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-black uppercase text-sky-300">Nevada License</div>
                <div className="text-sm font-bold mt-0.5">#0088935 • EPA Universal</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-black uppercase text-amber-400">Google Verified</div>
                <div className="text-sm font-bold mt-0.5">5.0 ★ (200+ Reviews)</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <MultiStepBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
