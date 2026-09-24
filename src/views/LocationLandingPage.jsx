import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Phone,
  Clock,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Star,
  Flame,
  Droplets,
  Wind,
  Wrench,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  Calendar
} from 'lucide-react';
import { LOCATIONS, getLocationBySlug } from '../data/locations';
import { BUSINESS_INFO } from '../data/hours';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import AEOQuestionAnswer from '../components/AEOQuestionAnswer';
import { getLocationBusinessSchema } from '../data/schemas';

export default function LocationLandingPage({ onOpenBookingModal }) {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  // If no match, gracefully fallback to general service areas
  if (!location) {
    return <Navigate to="/service-areas" replace />;
  }

  const siblingLocations = LOCATIONS.filter(l => l.slug !== location.slug);
  const locationSchema = getLocationBusinessSchema(location);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead
        title={location.pageTitle}
        description={location.metaDescription}
        canonicalPath={`/locations/${location.slug}`}
        schema={locationSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs
          items={[
            { name: "Service Areas", url: "/service-areas" },
            { name: `${location.city}, NV`, url: `/locations/${location.slug}` }
          ]}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Urgent Dispatch Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-6 shadow-lg shadow-sky-950/40 border border-cyan-400/30">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping"></span>
              <span>{location.heroBadge}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white">
              {location.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed mb-8">
              {location.subheadline}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black px-7 py-4 rounded-xl text-lg shadow-xl shadow-sky-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-6 h-6 animate-bounce" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBookingModal?.(`Emergency AC Service - ${location.city}`)}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur font-bold px-6 py-4 rounded-xl text-base transition-colors"
              >
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span>Book Priority Dispatch ($0 Diagnostic*)</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>NV Lic. #0088935</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>24/7/365 Live Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                <span>5.0 Star Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>EPA Universal Certified</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS MATRIX */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {location.serviceHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all hover:shadow-md flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-sm font-bold text-slate-800 leading-snug">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CLIMATE & SYSTEM STRESS BREAKDOWN */}
      <section className="py-16 bg-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-black uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>{location.city} Regional Thermal Profile</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#07152b] tracking-tight">
                Why HVAC & Water Systems Require Localized Engineering in {location.city}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {location.localEmergencyContext}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 mt-0.5">
                    <Flame className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Extreme Heat Thermal Stress:</strong> Rooftop and ground condensers routinely cycle at 125°F+ ambient coil temperatures, demanding heavy-duty 440V American-made run capacitors and contactors.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600 mt-0.5">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Desert Mineral Caliche Scale:</strong> Clark County’s 20+ grain hard water bakes scale onto heat exchangers, requiring specialized yearly descaling flushes for tankless units.
                  </div>
                </div>
              </div>
            </div>

            {/* Local Technician Dispatch Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#07152b] to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400">
                  <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400 animate-pulse" />
                  <span>Fleet Dispatch Status</span>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                  Active Units On Patrol
                </span>
              </div>

              <h3 className="text-lg font-black text-white mb-2">
                Master Techs Assigned to {location.city}:
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {location.assignedTechs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 border border-white/15"
                  >
                    <Wrench className="w-3 h-3 text-sky-400" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              {/* Local Customer Review */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[...Array(location.localTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                  <span className="text-xs text-slate-300 ml-1 font-bold">
                    {location.localTestimonial.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic mb-2 leading-relaxed">
                  "{location.localTestimonial.quote}"
                </p>
                <div className="text-xs font-black text-white">
                  — {location.localTestimonial.author}
                  <span className="text-slate-400 font-normal ml-1">
                    ({location.localTestimonial.neighborhood})
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3 rounded-xl text-sm transition-colors shadow-lg shadow-sky-950/40"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {location.city} Dispatch Hotline</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS & LANDMARKS COVERED */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#07152b] tracking-tight">
              {location.city} Neighborhoods & Zip Codes We Serve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Our mobile trucks operate throughout {location.city} and surrounding Clark County corridors with full OEM parts inventories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Key Landmarks */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-base font-black text-[#07152b] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>Key Communities & Neighborhoods:</span>
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {location.landmarks.map((landmark, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    <span>{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Covered Zip Codes */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-base font-black text-[#07152b] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Covered {location.city} Postal Zip Codes:</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.zipCodes.map((zip, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-mono text-xs font-bold text-slate-800 shadow-sm"
                  >
                    {zip}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                *Don't see your specific zip code? Call our live 24/7 operator at <strong>{BUSINESS_INFO.phone}</strong>—we service all Clark County communities!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* AEO QUESTION & ANSWER SECTION */}
      {location.aeoQuestions && location.aeoQuestions.length > 0 && (
        <AEOQuestionAnswer
          title={`Frequently Asked Questions: ${location.city} AC & Heating`}
          subtitle={`Direct diagnostic answers and facts for ${location.city} homeowners facing Southern Nevada desert conditions.`}
          items={location.aeoQuestions}
          includeSchema={true}
        />
      )}

      {/* SIBLING LOCATIONS CROSS-LINKING GRID */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#07152b]">
              Additional Southern Nevada Emergency Service Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Passionate Cooling & Heating provides true 24/7 coverage across Clark County.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siblingLocations.map(sib => (
              <Link
                key={sib.slug}
                to={`/locations/${sib.slug}`}
                className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-sky-500 hover:shadow-md transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-extrabold text-sm text-[#07152b] group-hover:text-sky-600 transition-colors">
                    {sib.city}, NV
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {sib.heroBadge.replace(/🚨|🎯|⚡|🌵|🏔️/, '').trim()}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-center gap-1 text-[11px] font-black text-sky-600 group-hover:translate-x-0.5 transition-transform">
                  <span>View Hub</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL EMERGENCY CALLOUT FOOTER BANNER */}
      <section className="bg-[#07152b] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            AC Down in {location.city}? We’re Ready to Roll Right Now.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Don’t suffer in desert heat. Our {location.city} on-call crew is equipped with universal replacement parts to restore freezing cold air on the very first visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black px-8 py-4 rounded-xl text-lg shadow-xl shadow-sky-900/50 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>Call (702) 858-1211</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenBookingModal?.(`Emergency AC Service - ${location.city}`)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-4 rounded-xl text-base transition-colors"
            >
              <span>Schedule Service Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
