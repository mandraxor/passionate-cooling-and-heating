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
    <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-14 shadow-2xl">
      {/* Background flare & glowing particle effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-red-950 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Pitch */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-amber-300 border border-white/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span>115°F Nevada Heatwave Protocol In Effect</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              A/C Stopped Cooling? We Dispatch in 45 Minutes or Less.
            </h2>

            <p className="text-sm sm:text-base text-red-100 max-w-2xl leading-relaxed">
              When it's triple-digits in Las Vegas, air conditioning failure isn't just an inconvenience — it's a dangerous medical emergency for families, seniors, and pets. Our emergency trucks are stocked with OEM parts and ready to restore freezing air right now.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-red-100 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Zero After-Hours Bait-and-Switch</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>\$0 Diagnostic Fee with Completed Repair</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Direct Live Human Dispatch Desk</span>
              </span>
            </div>
          </div>

          {/* Right Action Trigger Box */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {/* Direct Instant Hotline */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 active:bg-slate-200 text-red-700 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl transition-all duration-200 active:scale-95 group"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </div>
              <Phone className="w-5 h-5 text-red-600 fill-red-600 group-hover:rotate-12 transition-transform" />
              <span>Call (702) 858-1211</span>
            </a>

            {/* Direct SMS Button */}
            <a
              href={BUSINESS_INFO.smsUrl}
              className="w-full inline-flex items-center justify-center gap-2 bg-red-900/60 hover:bg-red-900/90 text-white font-extrabold text-sm py-3 px-6 rounded-xl border border-white/20 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span>Send Urgent SMS to On-Call Tech</span>
            </a>

            {/* Online Modal Trigger */}
            <button
              onClick={() => onOpenBookingModal("24/7 Emergency AC Repair & Diagnostics")}
              className="w-full inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white font-bold text-xs py-3 px-6 rounded-xl border border-white/10 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Request Priority Emergency Ticket Online</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
