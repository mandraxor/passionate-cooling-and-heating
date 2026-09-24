import React from 'react';
import {
  Flame,
  Phone,
  MessageSquare,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';

export default function EmergencyRescueBanner({ onOpenBookingModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-sky-900 to-[#07152b] text-white py-14 shadow-2xl border-y border-sky-500/30">
      {/* Background flare & glowing arctic particle effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Pitch */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-cyan-300 border border-sky-400/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span>❄️ 115°F Nevada Heatwave Cooling Protocol Active</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              A/C Stopped Cooling? Freezing Air Restored in 45 Minutes or Less.
            </h2>

            <p className="text-sm sm:text-base text-sky-100 max-w-2xl leading-relaxed">
              When it's triple-digits in Las Vegas, air conditioning failure isn't just an inconvenience — it's a dangerous medical emergency for families, seniors, and pets. Our emergency trucks are stocked with OEM parts and ready to restore freezing cold air right now.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-sky-200 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>Zero After-Hours Bait-and-Switch</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>$0 Diagnostic Fee with Completed Repair</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>Direct Live Human Dispatch Desk</span>
              </span>
            </div>
          </div>

          {/* Right Action Trigger Box */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {/* Direct Instant Hotline */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-sky-50 active:bg-sky-100 text-blue-900 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl transition-all duration-200 active:scale-95 group"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600"></span>
              </div>
              <Phone className="w-5 h-5 text-sky-600 fill-sky-600 group-hover:rotate-12 transition-transform" />
              <span>Call (702) 858-1211</span>
            </a>

            {/* Direct SMS Button */}
            <a
              href={BUSINESS_INFO.smsUrl}
              className="w-full inline-flex items-center justify-center gap-2 bg-sky-900/60 hover:bg-sky-900/90 text-white font-extrabold text-sm py-3 px-6 rounded-xl border border-sky-400/30 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 text-cyan-300" />
              <span>Send Urgent SMS to On-Call Tech</span>
            </a>

            {/* Online Modal Trigger */}
            <button
              onClick={() => onOpenBookingModal("24/7 Emergency AC Repair & Diagnostics")}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-sky-200 font-bold text-xs py-3 px-6 rounded-xl border border-sky-500/20 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Request Priority Emergency Ticket Online</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
