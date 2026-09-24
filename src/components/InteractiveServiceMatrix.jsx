import React, { useState } from 'react';
import {
  Snowflake,
  Flame,
  Wind,
  Droplets,
  Zap,
  ShieldCheck,
  RefreshCw,
  Split,
  Building2,
  ShieldAlert,
  CheckCircle,
  Waves,
  PenTool,
  Trash2,
  Sparkles,
  Shield,
  ArrowRight,
  Phone,
  Search,
  Check,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { BUSINESS_INFO } from '../data/hours';

export default function InteractiveServiceMatrix({ onSelectServiceToBook }) {
  const [activeCategory, setActiveCategory] = useState('cooling');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Snowflake':
        return <Snowflake className="w-6 h-6 text-sky-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-teal-500" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-blue-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-emerald-500" />;
      case 'Split':
        return <Split className="w-6 h-6 text-indigo-500" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-slate-700" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-sky-500" />;
      case 'Waves':
        return <Waves className="w-6 h-6 text-cyan-600" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-purple-600" />;
      case 'Trash2':
        return <Trash2 className="w-6 h-6 text-rose-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
    }
  };

  // Filter services by category and optional search term
  const displayedServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.warningSigns.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedServiceId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services-matrix" className="py-20 bg-slate-50 border-b border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#07152b] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-sm border border-sky-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Comprehensive 17-Service Catalog Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#07152b] tracking-tight">
            Master HVAC & Plumbing Capabilities
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            No limits, no missing offerings. Explore our complete four-pillar service catalog engineered to withstand Southern Nevada's 115°F desert summers and chilly winter nights.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {SERVICE_CATEGORIES.map(category => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery('');
                  }}
                  className={`min-h-[48px] px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-sm ${
                    isSelected
                      ? 'bg-[#07152b] text-white ring-2 ring-sky-500 shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {category.id === 'cooling' && <Snowflake className="w-4 h-4 text-sky-400" />}
                  {category.id === 'heating' && <Flame className="w-4 h-4 text-amber-500" />}
                  {category.id === 'air-quality' && <Wind className="w-4 h-4 text-teal-400" />}
                  {category.id === 'plumbing' && <Droplets className="w-4 h-4 text-blue-400" />}
                  <span>{category.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}

            <button
              onClick={() => setActiveCategory('all')}
              className={`min-h-[48px] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#07152b] text-white ring-2 ring-sky-500'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              All 17
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search symptoms or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Active Category Banner Message */}
        {activeCategory !== 'all' && (
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="text-xs font-black uppercase text-sky-600">
                Specialty Pillar: {SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.name}
              </div>
              <div className="text-sm font-semibold text-slate-700 mt-0.5">
                {SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.tagline}
              </div>
            </div>
            <span className="text-xs font-extrabold text-[#07152b] bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg flex-shrink-0">
              {SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.badge}
            </span>
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  service.popular
                    ? 'border-sky-500/50 shadow-card-elevated hover:shadow-card-hover ring-1 ring-sky-500/20'
                    : 'border-slate-200 shadow-card-elevated hover:shadow-card-hover'
                }`}
              >
                {/* Card Top Banner if Popular */}
                {service.popular && (
                  <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white text-[11px] font-black uppercase tracking-wider py-1 px-4 text-center">
                    ⭐ High Demand / Most Requested in Las Vegas
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Icon & Turnaround Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex-shrink-0">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full text-right truncate">
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div>
                    <span className="text-[11px] font-extrabold text-sky-600 uppercase tracking-wide">
                      {service.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#07152b] mt-1 leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Standard Inclusions Checklist */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-black text-slate-700 uppercase tracking-wider">
                      Standard Inclusions:
                    </div>
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Symptoms Drawer */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
                      <div>
                        <div className="text-[11px] font-black text-amber-700 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Common Warning Signs to Watch For:</span>
                        </div>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {service.warningSigns.map((sign, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-1.5">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-700">
                        <strong>Warranty & Value:</strong> {service.rebateOrWarranty}
                      </div>
                    </div>
                  )}

                  {/* Toggle Symptoms Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1 transition-colors pt-1"
                  >
                    <span>{isExpanded ? 'Hide Warning Signs & Details' : 'View Warning Signs & Diagnostics'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Card Action Footer: Book Service CTA */}
                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                  <button
                    onClick={() => onSelectServiceToBook(service.name)}
                    className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 bg-[#07152b] hover:bg-sky-600 text-white font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm active:scale-95 group"
                  >
                    <span>Book Service Online</span>
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {displayedServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 font-semibold">No services matched your search term "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-bold text-sky-600 hover:underline"
            >
              Reset search filters to see all 17 services
            </button>
          </div>
        )}

        {/* Second Opinion Quote Analyzer Banner */}
        <div className="mt-14 bg-gradient-to-br from-[#07152b] via-[#0b1e38] to-[#07152b] text-white rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-300 bg-sky-950/80 px-3 py-1 rounded-md border border-sky-800">
                100% Free Second Opinion
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Already Have an Expensive Quote From Another Vegas Contractor?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Before committing to a $12,000+ system replacement or an inflated diagnostic bill, let our licensed master technicians review it. We frequently save Las Vegas homeowners thousands of dollars by finding simple component fixes (capacitors, relays, wiring) that other companies claim require total replacement.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onSelectServiceToBook("Free Second Opinion on Existing Quote / Diagnostic")}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm py-4 px-6 rounded-xl shadow-lg shadow-sky-950/40 transition-all active:scale-95 text-center"
              >
                <span>Request Free 2nd Opinion Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-600 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-sky-400 fill-sky-400" />
                <span>Call (702) 858-1211</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
