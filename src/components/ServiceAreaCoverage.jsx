import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Search,
  Phone,
  ArrowRight,
  Flame,
  AlertCircle
} from 'lucide-react';
import { SERVICE_REGIONS, checkZipCodeCoverage } from '../data/serviceAreas';
import { BUSINESS_INFO } from '../data/hours';

export default function ServiceAreaCoverage({ onOpenBookingModal }) {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState(null);
  const [activeRegion, setActiveRegion] = useState(SERVICE_REGIONS[0].id);

  const handleZipCheck = (e) => {
    e.preventDefault();
    if (zipInput.trim().length === 5) {
      const result = checkZipCodeCoverage(zipInput);
      setZipResult(result);
    }
  };

  const selectedRegionData = SERVICE_REGIONS.find(r => r.id === activeRegion) || SERVICE_REGIONS[0];

  return (
    <section id="service-areas" className="py-20 bg-slate-50 border-b border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#07152b] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Southern Nevada Service Radius</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#07152b] tracking-tight">
            24/7 Dispatch Across Clark County & Mesquite, NV
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Headquartered at <strong>6672 Boulder Hwy Suite 2</strong>, our mobile fleet is strategically positioned across the Las Vegas valley to guarantee 45-minute average arrival during critical heat emergencies.
          </p>
        </div>

        {/* Interactive Zip Code Verification Box */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card-elevated mb-12">
          <h3 className="text-lg font-black text-[#07152b] text-center mb-2">
            Verify Immediate Technician Availability by Zip Code
          </h3>
          <p className="text-xs text-slate-500 text-center mb-5">
            Enter your 5-digit Clark County zip code to check average emergency response time.
          </p>

          <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. 89122, 89052, 89027..."
                maxLength={5}
                value={zipInput}
                onChange={(e) => {
                  setZipInput(e.target.value);
                  if (zipResult) setZipResult(null);
                }}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-black text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex-shrink-0"
            >
              Check Dispatch Status
            </button>
          </form>

          {/* Zip Check Result Display */}
          {zipResult && (
            <div className="mt-5 p-4 rounded-xl border animate-in fade-in duration-200 bg-slate-50 border-slate-200">
              {zipResult.covered ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-black text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Active 24/7 Dispatch Verified for Zip {zipInput}!</span>
                  </div>
                  <div className="text-xs text-slate-700 space-y-1 pl-7">
                    <div><strong>Region:</strong> {zipResult.region}</div>
                    <div><strong>Target Dispatch:</strong> <span className="text-red-600 font-extrabold">{zipResult.responseTime}</span></div>
                    <div><strong>Coverage Guarantee:</strong> {zipResult.tier}</div>
                  </div>
                  <div className="pt-2 pl-7 flex gap-2">
                    <button
                      onClick={() => onOpenBookingModal()}
                      className="bg-[#07152b] hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                    >
                      Book Dispatch to {zipInput}
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-600" />
                      <span>(702) 858-1211</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-2 text-amber-700 text-xs">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Bordering Dispatch Zone:</span> Zip code {zipInput} is on the periphery of our primary grid. Call <strong>(702) 858-1211</strong> to confirm immediate on-call van availability.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Coverage Grid & Interactive Regional Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Region Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
              Select Regional Coverage Zone:
            </h3>

            {SERVICE_REGIONS.map(region => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between shadow-sm ${
                  activeRegion === region.id
                    ? 'border-red-600 bg-white ring-2 ring-red-500/20 text-[#07152b]'
                    : 'border-slate-200 bg-white/70 hover:bg-white text-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm">{region.name}</span>
                    {region.isHeadquarters && (
                      <span className="bg-red-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
                        HQ Center
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-red-600 font-extrabold mt-0.5">
                    {region.leadTime}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 block">Active Vans:</span>
                  <span className="text-xs font-black text-emerald-600">● {region.activeTechCount} Trucks</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Hub Card & Map Presentation */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-elevated space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-black uppercase text-red-600">
                  {selectedRegionData.coverageType}
                </span>
                <h4 className="text-2xl font-black text-[#07152b] mt-0.5">
                  {selectedRegionData.name}
                </h4>
              </div>

              <div className="bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-red-600" />
                <span>{selectedRegionData.leadTime}</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedRegionData.description}
            </p>

            {/* Key Communities & Neighborhoods */}
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2.5">
                Key Neighborhoods & Dispatch Landmarks:
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedRegionData.landmarks.map((mark, mIdx) => (
                  <span
                    key={mIdx}
                    className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg"
                  >
                    📍 {mark}
                  </span>
                ))}
              </div>
            </div>

            {/* Headquarters Highlight Box */}
            <div className="bg-[#07152b] text-white p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-red-400">
                  Primary Dispatch Facility
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">Open 24/7/365</span>
              </div>
              
              <div className="text-base font-extrabold text-white">
                {BUSINESS_INFO.address}
              </div>

              <div className="text-xs text-slate-300">
                Directly accessible via Boulder Hwy & US-95 corridor. Fast highway access enables rapid dispatch to Henderson, Downtown, Spring Valley, and Summerlin.
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white text-[#07152b] hover:bg-slate-100 text-xs font-extrabold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-600" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Call Dispatch (702) 858-1211</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
