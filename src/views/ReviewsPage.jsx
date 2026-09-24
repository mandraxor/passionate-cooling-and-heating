import React, { useState } from 'react';
import {
  Star,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ThermometerSnowflake,
  UserCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { REVIEWS, REVIEW_METRICS } from '../data/reviews';
import { BUSINESS_INFO } from '../data/hours';
import MultiStepBookingModal from '../components/MultiStepBookingModal';

export default function ReviewsPage() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const filteredReviews = selectedTech === 'All'
    ? REVIEWS
    : REVIEWS.filter(r => r.technician.includes(selectedTech));

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Header */}
      <section className="bg-[#07152b] text-white py-14 sm:py-20 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 bg-amber-950/80 border border-amber-800 text-amber-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>100% Google Verified Customer Feedback</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            5.0 Stars Across 200+ Verified Reviews
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Real experiences from Southern Nevada homeowners saved during dangerous 115°F heatwaves. Read testimonials about our on-call technicians: <strong>Jason, Derek, Bobby, Alfredo, and Krayson</strong>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Scorecard */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card-elevated max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-6xl font-black text-[#07152b]">5.0</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Google Maps Verified</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                Based on <strong>214+ customer ratings</strong>. Every job is backed by owner Jason Roden's 100% satisfaction guarantee.
              </p>

              <div className="mt-4">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 underline"
                >
                  <span>Verify Directly on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Verified Review Distribution:
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-14 font-bold text-slate-700 flex items-center gap-1">
                  5 ★ <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[99%]"></div>
                </div>
                <span className="w-10 text-right font-black text-slate-700">99%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-14 font-bold text-slate-400 flex items-center gap-1">
                  4 ★ <Star className="w-3 h-3 text-slate-300" />
                </span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[1%]"></div>
                </div>
                <span className="w-10 text-right font-bold text-slate-400">1%</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="w-14">3, 2, 1 ★</span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full"></div>
                <span className="w-10 text-right">0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technician Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-black uppercase text-slate-500 mr-2 flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Filter Reviews by Technician:</span>
          </span>
          {['All', 'Jason', 'Derek', 'Bobby', 'Alfredo', 'Krayson'].map(tech => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                selectedTech === tech
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {tech === 'All' ? 'All Reviews (200+)' : `Technician: ${tech}`}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-card-elevated flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Google • {rev.date}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                    <ThermometerSnowflake className="w-3 h-3 text-sky-600" />
                    <span>{rev.temperatureContext}</span>
                  </span>
                </div>

                <h4 className="text-base font-black text-[#07152b] mb-2 leading-snug">
                  "{rev.headline}"
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-black text-[#07152b] flex items-center gap-1">
                      <span>{rev.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-[11px] text-slate-500">{rev.location}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Tech:</span>
                  <span className="text-xs font-black text-sky-600">{rev.technician}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-10 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-2xl font-black text-[#07152b]">Experience 5-Star Service Yourself</h3>
          <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
            Book online or call 24/7. Our licensed technicians are on standby across Clark County.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              Book Service / Request Estimate
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-[#07152b] hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400 fill-sky-400" />
              <span>Call (702) 858-1211</span>
            </a>
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
