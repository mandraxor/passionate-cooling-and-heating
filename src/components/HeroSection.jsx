import React from 'react';
import {
  Phone,
  MessageSquare,
  Calendar,
  Star,
  ShieldCheck,
  Award,
  Zap,
  Clock,
  ArrowRight,
  Flame,
  Snowflake,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';

export default function HeroSection({ onOpenBookingModal }) {
  return (
    <section className="relative overflow-hidden bg-[#07152b] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background Gradients & Heat vs Cool Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Value Proposition & Conversion Triggers */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill with Live Google Rating & License */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-slate-900/90 border border-slate-700/80 px-4 py-2 rounded-full text-xs font-semibold shadow-inner text-slate-300">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-extrabold">5.0 Star Rating</span>
              <span className="text-slate-500">•</span>
              <span>200+ Verified Google Reviews</span>
              <span className="text-slate-500">•</span>
              <span className="text-red-400 font-bold">Lic. #0088935</span>
            </div>

            {/* Branding Slogan & Powerful Headline */}
            <div>
              <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-red-500 mb-2 flex items-center justify-center lg:justify-start gap-2">
                <Flame className="w-4 h-4 text-red-500 inline" />
                <span>{BUSINESS_INFO.slogan}</span>
                <Snowflake className="w-4 h-4 text-sky-400 inline" />
              </p>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Las Vegas's Elite{' '}
                <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  24/7 HVAC & Plumbing
                </span>{' '}
                Emergency Rescue.
              </h1>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              When Nevada temperatures surge past <strong className="text-white font-bold">115°F</strong>, every minute counts. Passionate Cooling & Heating delivers master-level climate repair and tankless plumbing with a <strong className="text-red-400 font-bold">45-minute average emergency dispatch</strong>, 100% upfront flat-rate pricing, and family-owned integrity.
            </p>

            {/* Instant Action Triggers: Call, SMS, Free Quote */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* Direct Click to Call */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-black text-base px-8 py-3.5 rounded-xl shadow-xl shadow-red-950/50 transition-all duration-200 active:scale-95 group"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </div>
                <Phone className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Call (702) 858-1211</span>
              </a>

              {/* Instant Request Modal */}
              <button
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-base px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Service / Free Quote</span>
                <ArrowRight className="w-4 h-4 text-sky-200" />
              </button>

              {/* Direct SMS Button */}
              <a
                href={BUSINESS_INFO.smsUrl}
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm px-5 py-3.5 rounded-xl border border-slate-700 transition-colors"
                title="Send an instant SMS to on-call technician"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>SMS Dispatch</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-3 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-5 text-left text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Free In-Home Estimates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Free 2nd-Opinion Quote Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>0% APR Financing Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>$0 Diagnostic with Repair</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Standby Radar & Guarantee */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Showcase Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80"
                  alt="Passionate Cooling & Heating emergency technician performing precision climate diagnostic in Las Vegas"
                  className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/40 to-transparent"></div>

                {/* Real-time Technician Dispatch Standby Status Strip */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/90 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <div>
                        <div className="text-xs font-black text-white">Emergency Vans Dispatched</div>
                        <div className="text-[10px] text-emerald-400 font-semibold">Active in Valley Right Now</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded">
                      45-Min Avg Arrival
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top-Left: Emergency Alert */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-red-600 text-white p-3 rounded-xl border border-red-400/50 shadow-xl hidden sm:flex items-center gap-3 animate-bounce-subtle">
                <Clock className="w-5 h-5 text-white" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-red-200">
                    24/7/365 On-Call
                  </div>
                  <div className="text-xs font-black">
                    No Heat & AC Outage Priority
                  </div>
                </div>
              </div>

              {/* Floating Badge Bottom-Right: Transparent Value */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 shadow-xl hidden sm:flex items-center gap-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">
                    License #0088935
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    EPA Certified • Insured & Bonded
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 3. TRUST BADGE BAR (EPA Certified, Licensed #0088935 & Insured, 5.0★ Google Rating, Financing Available) */}
      <div className="mt-12 pt-6 border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            {/* Badge 1: Google Rating */}
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-lg sm:text-xl">
                <span>5.0</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-white mt-0.5">200+ Google Reviews</div>
              <div className="text-[10px] text-slate-400">100% Verified Five-Star Track Record</div>
            </div>

            {/* Badge 2: Licensed & Insured */}
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <div className="flex items-center justify-center gap-1 text-red-400 font-black text-lg sm:text-xl">
                <Award className="w-5 h-5 text-red-400" />
                <span>#0088935</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">NV State Contractors Board</div>
              <div className="text-[10px] text-slate-400">Fully Licensed, Bonded & Insured</div>
            </div>

            {/* Badge 3: EPA Certified */}
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <div className="flex items-center justify-center gap-1 text-sky-400 font-black text-lg sm:text-xl">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span>EPA 608</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Universal Certified Techs</div>
              <div className="text-[10px] text-slate-400">Eco-Friendly Refrigerant Handling</div>
            </div>

            {/* Badge 4: Flexible Financing */}
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <div className="flex items-center justify-center gap-1 text-emerald-400 font-black text-lg sm:text-xl">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span>0% APR</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Flexible Financing Options</div>
              <div className="text-[10px] text-slate-400">Plus NV Energy Instant Rebates</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
