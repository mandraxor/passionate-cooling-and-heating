import React, { useState } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  ExternalLink,
  Flame,
  ThermometerSnowflake,
  UserCheck,
  Search
} from 'lucide-react';
import { REVIEWS, REVIEW_METRICS } from '../data/reviews';
import { BUSINESS_INFO } from '../data/hours';

export default function TechnicianReviewCarousel() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter reviews based on technician & category
  const filteredReviews = REVIEWS.filter(review => {
    const matchesTech = selectedTech === 'All' || review.technician.includes(selectedTech);
    const matchesCategory = selectedCategory === 'All' || 
      (selectedCategory === 'Emergency' && (review.service.includes('Emergency') || review.temperatureContext.includes('114') || review.temperatureContext.includes('116') || review.temperatureContext.includes('Freeze'))) ||
      review.category === selectedCategory;
    return matchesTech && matchesCategory;
  });

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? Math.max(0, filteredReviews.length - 1) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= filteredReviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-amber-800 mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Verified Reputation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#07152b] tracking-tight">
            5.0 Stars Across 200+ Verified Reviews
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Real Clark County homeowners, property managers, and families saved during 115°F+ desert emergencies. See what customers say about technicians <strong>Jason, Derek, Bobby, Alfredo, and Krayson</strong>.
          </p>
        </div>

        {/* Reputation Overview Card */}
        <div className="bg-[#07152b] text-white rounded-3xl p-6 sm:p-10 mb-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-black text-white">5.0</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 font-bold mt-1">
                    Google Maps Verified Score
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed">
                Based on <strong>214+ verified reviews</strong> in Clark County. Zero unaddressed complaints. Owner Jason Curtis Roden guarantees every job.
              </div>

              <div className="mt-4">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 underline"
                >
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Middle Stats Block */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-2xl font-black text-red-500">45-Min</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">Avg Emergency Arrival</div>
                <div className="text-[10px] text-slate-400">During 115°F Heatwaves</div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-2xl font-black text-amber-400">100%</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">Upfront Flat Rates</div>
                <div className="text-[10px] text-slate-400">Zero Hidden Trip Surcharges</div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-2xl font-black text-emerald-400">#0088935</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">NV Board Licensed</div>
                <div className="text-[10px] text-slate-400">Dual HVAC & Contractor</div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-2xl font-black text-sky-400">24/7/365</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">Always Open & Dispatched</div>
                <div className="text-[10px] text-slate-400">Direct Human Answer</div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Controls: Filter by Technician & Specialty */}
        <div className="space-y-3 mb-10">
          {/* Technician Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase text-slate-500 mr-2 flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Filter by Technician:</span>
            </span>
            {['All', 'Jason', 'Derek', 'Bobby', 'Alfredo', 'Krayson'].map(tech => (
              <button
                key={tech}
                onClick={() => {
                  setSelectedTech(tech);
                  setCurrentIndex(0);
                }}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedTech === tech
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tech === 'All' ? 'All Technicians' : `Tech: ${tech}`}
              </button>
            ))}
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase text-slate-500 mr-2">
              Category:
            </span>
            {['All', 'Emergency', 'cooling', 'heating', 'plumbing', 'air-quality'].map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`text-xs font-semibold px-3 py-1 rounded-md transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#07152b] text-white'
                    : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
              >
                {cat === 'All' ? 'All Scopes' : cat === 'Emergency' ? '🚨 115°F Emergencies' : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.slice(0, 6).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-card-elevated hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars, Date, & Google Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    <span>Google</span>
                    <span className="text-slate-400">•</span>
                    <span>{rev.date}</span>
                  </span>
                </div>

                {/* Weather Context Tag (e.g. 114°F Heatwave) */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    <ThermometerSnowflake className="w-3 h-3 text-red-600" />
                    <span>{rev.temperatureContext}</span>
                  </span>
                </div>

                {/* Headline */}
                <h4 className="text-base font-extrabold text-[#07152b] mb-2 leading-snug">
                  "{rev.headline}"
                </h4>

                {/* Review Content */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{rev.review}"
                </p>
              </div>

              {/* Author & Technician Attribution Strip */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
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
                    <div className="text-[11px] text-slate-500 font-medium">
                      {rev.location}
                    </div>
                  </div>
                </div>

                {/* Technician Tag */}
                <div className="text-right flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Assigned Tech:
                  </span>
                  <span className="text-xs font-black text-red-600">
                    {rev.technician}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Filter State */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 font-bold">No reviews found matching "{selectedTech}".</p>
            <button
              onClick={() => {
                setSelectedTech('All');
                setSelectedCategory('All');
              }}
              className="mt-2 text-xs font-bold text-red-600 hover:underline"
            >
              Reset filters to show all reviews
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
