import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Snowflake,
  Flame,
  Wind,
  Droplets,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Clock,
  ArrowRight,
  AlertTriangle,
  Zap,
  Star
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { BUSINESS_INFO } from '../data/hours';
import MultiStepBookingModal from '../components/MultiStepBookingModal';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import AEOQuestionAnswer from '../components/AEOQuestionAnswer';

const SERVICES_AEO_QUESTIONS = [
  {
    id: "services-brands-repaired",
    question: "What HVAC brands does Passionate Cooling & Heating service and install?",
    directAnswer: "Passionate Cooling & Heating repairs and services all major HVAC brands in Southern Nevada, including Trane, Carrier, Lennox, Daikin, Goodman, Rheem, York, Amana, and Bosch. As EPA Universal certified contractors, our technicians carry universal OEM replacement capacitors, relays, fan motors, and TXV valves on every dispatch vehicle.",
    keyFacts: [
      { label: "Major Brands Serviced", value: "Trane, Carrier, Lennox, Daikin, Goodman, Bosch, Rheem" },
      { label: "Parts Availability", value: "Fully Stocked Mobile OEM Replacements" },
      { label: "Technician Certifications", value: "EPA 608 Universal & NATE Certified" },
      { label: "Diagnostic Policy", value: "$0 Diagnostic Fee with Completed Repair" }
    ],
    checklist: [
      "Find your unit model number on the metal data plate on the side of the condenser cabinet",
      "Call (702) 858-1211 to verify same-day OEM parts availability for your specific system",
      "Schedule priority morning or evening dispatch to avoid mid-day attic heat"
    ]
  },
  {
    id: "services-aeroseal-duct-efficiency",
    question: "Why is Aeroseal duct sealing essential for Las Vegas homes?",
    directAnswer: "In Las Vegas, attic temperatures regularly reach 140°F to 160°F. The average home has 25% to 35% air leakage in its ductwork, sucking superheated attic dust and heat into living spaces while blowing expensive conditioned air outside. Aeroseal seals all duct leaks from the inside out, reducing cooling bills by up to 30%.",
    keyFacts: [
      { label: "Typical Attic Temperature", value: "140°F to 160°F during Summer" },
      { label: "Average Duct Air Leakage", value: "25% to 35% Duct Loss in Clark County" },
      { label: "Aeroseal Leak Reduction", value: "Up to 95% Duct Air Leakage Sealed" },
      { label: "Estimated Bill Reduction", value: "$400–$800 per Year in Electricity" }
    ],
    checklist: [
      "Notice if second floor rooms are noticeably hotter than downstairs",
      "Check for excessive dust accumulating on furniture despite frequent cleaning",
      "Request a computer-calibrated duct blaster pressurization test with Passionate"
    ]
  }
];

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [serviceToBook, setServiceToBook] = useState('');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleBook = (serviceName) => {
    setServiceToBook(serviceName);
    setIsBookingModalOpen(true);
  };

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <SEOHead
        title="17 Emergency HVAC, Cooling, Heating & Plumbing Services | Passionate HVAC"
        description="Complete 17-service catalog for Las Vegas and Clark County: 24/7 AC repair, heat pumps, tankless water heaters, Aeroseal duct sealing, water softeners. Lic. #0088935."
        canonicalPath="/services"
      />

      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ name: "Full Services Catalog", url: "/services" }]} />
      </div>

      {/* Page Header */}
      <section className="bg-[#07152b] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-400 bg-red-950/80 px-4 py-1.5 rounded-full border border-red-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Comprehensive 17-Service Catalog</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            HVAC & Plumbing Solutions Built for Nevada Extremes
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            Whether your AC capacitor blew during a 115°F heatwave or you're converting to endless tankless hot water, Passionate Cooling & Heating delivers master craftsmanship with 100% upfront flat-rate pricing.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3.5 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-red-500" />
              24/7/365 Emergency Dispatch
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3.5 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              NV Contractor License #0088935
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3.5 py-2 rounded-xl">
              <Zap className="w-4 h-4 text-amber-400" />
              NV Energy Rebate Certified
            </span>
          </div>
        </div>
      </section>

      {/* Category Navigation Strip */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl font-black text-xs sm:text-sm transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#07152b] text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All 17 Services
          </button>

          {SERVICE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.id === 'cooling' && <Snowflake className="w-3.5 h-3.5" />}
              {cat.id === 'heating' && <Flame className="w-3.5 h-3.5" />}
              {cat.id === 'air-quality' && <Wind className="w-3.5 h-3.5" />}
              {cat.id === 'plumbing' && <Droplets className="w-3.5 h-3.5" />}
              <span>{cat.name} ({cat.count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Detailed Services Catalog Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card-elevated hover:shadow-card-hover transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                      {service.categoryName}
                    </span>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {service.turnaround}
                    </span>
                    {service.popular && (
                      <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                        ⭐ Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#07152b]">
                    {service.name}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Standard Inclusions Checklist */}
                  <div className="pt-2">
                    <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                      Key Highlights & Technical Inclusions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    <button
                      onClick={() => handleBook(service.name)}
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
                    >
                      <span>Book Service / Get Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#07152b] font-bold text-sm px-5 py-3 rounded-xl border border-slate-300 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-red-600 fill-red-600" />
                      <span>Call (702) 858-1211</span>
                    </a>
                  </div>
                </div>

                {/* Right: Diagnostic Warning Signs & Warranty Box */}
                <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <div>
                    <div className="text-xs font-black text-amber-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Common Warning Signs:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.warningSigns.map((sign, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-200 text-xs text-slate-700">
                    <div className="font-bold text-[#07152b] mb-1">
                      Warranty & Rebate Eligibility:
                    </div>
                    <p className="text-slate-600">
                      {service.rebateOrWarranty}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AEO QUESTION & ANSWER SECTION */}
      <AEOQuestionAnswer
        title="HVAC & Plumbing Equipment FAQ"
        subtitle="Snippet-optimized technical specs, warranties, and utility rebate guidelines for Southern Nevada."
        items={SERVICES_AEO_QUESTIONS}
        includeSchema={true}
      />

      {/* Booking Modal */}
      <MultiStepBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={serviceToBook}
      />
    </div>
  );
}
