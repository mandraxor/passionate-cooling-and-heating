import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Navigation,
  CheckCircle2,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';
import MultiStepBookingModal from '../components/MultiStepBookingModal';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service') || '';
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Header */}
      <section className="bg-[#07152b] text-white py-14 sm:py-20 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-wider text-sky-300 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-800 mb-4 inline-block">
            24/7 Live Emergency Dispatch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact & 24/7 Dispatch Center
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Call, text, or schedule online. Our on-call technicians are ready to dispatch across the Las Vegas valley right now.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Call Triggers & Facility Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Emergency Hotline Card */}
            <div className="bg-gradient-to-br from-[#07152b] via-sky-950 to-blue-900 border border-sky-500/40 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Immediate Assistance Needed?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black">
                Call Our 24/7 Hotline
              </h2>

              <p className="text-sm text-sky-100 leading-relaxed">
                Direct live human dispatch. If your AC is failing in triple-digit heat, call directly for a 45-minute average arrival time.
              </p>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-sky-700 font-black text-lg py-4 px-6 rounded-2xl shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-5 h-5 fill-sky-700" />
                  <span>(702) 858-1211</span>
                </a>
              </div>

              <a
                href={BUSINESS_INFO.smsUrl}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-900/60 hover:bg-sky-900/80 text-white font-bold text-xs py-3 px-4 rounded-xl border border-sky-400/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-cyan-300" />
                <span>Send SMS to On-Call Technician</span>
              </a>
            </div>

            {/* Location & Licensing Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 text-xs sm:text-sm">
              <h3 className="text-base font-black text-[#07152b] uppercase tracking-wider">
                Headquarters & Hours
              </h3>

              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">{BUSINESS_INFO.address}</div>
                  <div className="text-slate-500 text-xs">Directly on Boulder Highway corridor</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Monday – Sunday: Open 24 Hours</div>
                  <div className="text-slate-500 text-xs">Emergency fleet always active & dispatched</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-700">
                <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">NV Contractors Board Lic. #0088935</div>
                  <div className="text-slate-500 text-xs">EPA 608 Universal Certified • Bonded & Insured</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#07152b] font-bold text-xs py-3 px-4 rounded-xl border border-slate-200 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-sky-600" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Online Booking Funnel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card-elevated">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-sky-600">
                Instant Dispatch Form
              </span>
              <h2 className="text-2xl font-black text-[#07152b] mt-1">
                Request Free Estimate or Emergency Booking
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Select your service and urgency level. Our dispatch coordinator will contact you immediately.
              </p>
            </div>

            <div className="text-center py-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-base py-4 px-8 rounded-2xl shadow-lg transition-all active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Launch Multi-Step Booking Funnel</span>
              </button>
              <p className="text-xs text-slate-500 mt-3">
                Pre-selected service: <strong>{requestedService || 'General Consultation'}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100 text-center text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="font-bold text-slate-900">45-Min Avg</div>
                <div className="text-[10px] text-slate-500">Emergency Dispatch</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="font-bold text-slate-900">100% Upfront</div>
                <div className="text-[10px] text-slate-500">No Hidden Fees</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="font-bold text-slate-900">Free 2nd Opinion</div>
                <div className="text-[10px] text-slate-500">Quote Analysis</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <MultiStepBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={requestedService}
      />
    </div>
  );
}
