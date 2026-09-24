import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
  Award,
  Star,
  CheckCircle2,
  HeartHandshake,
  Flame,
  Snowflake,
  Phone
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';
import MultiStepBookingModal from '../components/MultiStepBookingModal';

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const brands = [
    'Trane', 'Carrier', 'Lennox', 'Navien', 'Mitsubishi Electric', 'Daikin', 'Rheem', 'Goodman', 'York', 'Amana'
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Header */}
      <section className="bg-[#07152b] text-white py-14 sm:py-20 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-sky-300 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-800 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Nevada Contractor License #0088935</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Passionate About Las Vegas Climate & Craftsmanship
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Family-owned and led by Managing Member <strong>Jason Curtis Roden</strong>. We wouldn't send a technician into your home that we wouldn't trust inside our own.
          </p>
        </div>
      </section>

      {/* Main Story & Contractor Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-md">
              The Passionate Standard
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-[#07152b] leading-tight">
              Why Our Credentials Protect Your Home & Wallet
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most HVAC companies in Southern Nevada are corporate-equity operations where technicians are incentivized by commission on equipment sales. When you call Passionate Cooling & Heating, you deal directly with master craftsmen.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under <strong>Nevada State Contractors Board License #0088935</strong> and <strong>EPA 608 Universal Certification</strong>, our team has the authority and engineering expertise to handle everything from emergency midnight capacitor replacements to multi-ton commercial package crane installations and full tankless water heater conversions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-sky-600 font-black text-sm">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Rapid Dispatch</span>
                </div>
                <p className="text-xs text-slate-600">
                  Stationed right on Boulder Highway for 45-minute average response times across Clark County.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-black text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed & Bonded</span>
                </div>
                <p className="text-xs text-slate-600">
                  Fully bonded, insured, and verified with the Nevada State Contractors Board.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-[#07152b]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                alt="Contractor team analyzing architectural HVAC plans"
                className="w-full h-96 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-sky-600 uppercase">
                      5.0 Star Rated Local Contractor
                    </div>
                    <div className="text-sm font-black text-[#07152b] mt-0.5">
                      200+ Verified Reviews on Google Maps
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">
            Certified Service & Installation on All Major Industry Brands
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 text-[#07152b] font-bold text-xs sm:text-sm shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-[#07152b]">Our Four Pillars of Service</h2>
          <p className="text-slate-600 text-sm mt-2">The operational standard that earned us 200+ 5-star Google ratings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-black">1</div>
            <h4 className="text-base font-black text-[#07152b]">100% Upfront Pricing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We diagnose the exact failure and give you a written flat-rate quote before turning a wrench. No surprise billing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">2</div>
            <h4 className="text-base font-black text-[#07152b]">Emergency Priority</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Losing air conditioning at 115°F is a health danger. Our 24/7 on-call trucks reach most valley homes in 45 minutes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">3</div>
            <h4 className="text-base font-black text-[#07152b]">Repair First, Replace Only When Necessary</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never push costly unit replacements when a simple capacitor, relay, or motor replacement will restore your cold air.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-black">4</div>
            <h4 className="text-base font-black text-[#07152b]">Owner Oversight</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jason Curtis Roden directly oversees company operations to ensure every client receives white-glove respect and care.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95"
          >
            <span>Request Free In-Home Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <MultiStepBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
