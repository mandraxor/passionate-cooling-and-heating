import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';

export default function MobileBar({ onOpenBookingModal }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07152b]/95 backdrop-blur-md border-t border-slate-800 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-2xl">
      {/* 1. Direct Call Now Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-[1.2] min-h-[48px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 active:from-sky-600 active:to-blue-700 text-white font-black text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-lg shadow-sky-950/40 transition-all text-center"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <Phone className="w-4 h-4 fill-white flex-shrink-0" />
        <span className="truncate">Call (702) 858-1211</span>
      </a>

      {/* 2. Book Online Trigger */}
      <button
        onClick={() => onOpenBookingModal()}
        className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-sky-400/30 text-white font-bold text-xs sm:text-sm py-2.5 px-2 rounded-xl transition-all text-center shadow-md"
      >
        <Calendar className="w-4 h-4 text-cyan-300 flex-shrink-0" />
        <span className="truncate">Book Online</span>
      </button>

      {/* 3. Instant SMS Trigger */}
      <a
        href={BUSINESS_INFO.smsUrl}
        className="min-h-[48px] px-3 inline-flex items-center justify-center bg-slate-800 active:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl transition-colors"
        title="Send SMS"
      >
        <MessageSquare className="w-4 h-4 text-sky-400" />
      </a>
    </div>
  );
}
