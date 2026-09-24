import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Star,
  Snowflake,
  Flame,
  ShieldCheck,
  Award,
  Zap,
  Droplets,
  Wind
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';
import { SERVICE_CATEGORIES } from '../data/services';

export default function Footer({ onOpenBookingModal }) {
  return (
    <footer className="bg-[#040d1a] border-t border-slate-800 pt-16 pb-28 sm:pb-16 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges & Emergency Ribbon */}
        <div className="bg-[#07152b] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-sky-500/20">
              <Snowflake className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">
                When Your A/C Don’t Sing, Give Passionate A Ring!
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                24/7/365 Emergency Dispatch • Nevada License #0088935 • EPA Universal Certified
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>(702) 858-1211</span>
            </a>

            <button
              onClick={() => onOpenBookingModal ? onOpenBookingModal() : null}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm px-5 py-3 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Book Service / Free Quote</span>
            </button>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand & NAP */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <Snowflake className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <span className="text-base font-black text-white uppercase tracking-tight block">
                  Passionate Cooling & Heating
                </span>
                <span className="text-[11px] text-sky-400 font-bold">
                  HVAC & General Contractor LLC
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Las Vegas’s authoritative 24/7 climate and plumbing contractor. Specializing in rapid 45-minute emergency rescues, high-efficiency system conversions, and upfront transparent pricing without sales gimmicks.
            </p>

            <div className="text-xs space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>6672 Boulder Hwy Suite 2, Las Vegas, NV 89122</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-bold transition-colors">
                  (702) 858-1211 (24/7 Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Open 24 Hours / 7 Days a Week (Emergency Trucks Active)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded font-mono font-bold text-sky-400">
                Lic. #0088935
              </span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded font-bold text-sky-400">
                EPA Universal
              </span>
              <span className="text-amber-400 font-bold">
                ★ 5.0 Google Score
              </span>
            </div>
          </div>

          {/* Column 2: Cooling & Heating Services */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Snowflake className="w-3.5 h-3.5 text-sky-400" />
              <span>Cooling & Heating</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">24/7 Emergency AC Repair</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">High-Efficiency AC Installation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Inverter Heat Pumps (Dual Fuel)</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Ductless Mini-Split Systems</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Commercial Rooftop Package Units</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Furnace Safety Repairs & Tune-Ups</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Hydronic Radiant Heating</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Plumbing & Air Quality */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-blue-400" />
              <span>Plumbing & Air Quality</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Tankless Water Heater Conversions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Tankless Acid Descaling & Flush</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Traditional Water Heater Repair</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Whole-Home Water Softeners</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Aeroseal Duct Sealing (Save 30%)</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Complete Attic Duct Replacement</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">UV-C Air Purifiers & Caliche Defense</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas & Local Hubs */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Clark County Hubs</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/locations/henderson-nv" className="hover:text-sky-400 transition-colors">
                  Henderson & Green Valley
                </Link>
              </li>
              <li>
                <Link to="/locations/summerlin-nv" className="hover:text-sky-400 transition-colors">
                  Summerlin & The Ridges
                </Link>
              </li>
              <li>
                <Link to="/locations/north-las-vegas-nv" className="hover:text-sky-400 transition-colors">
                  North Las Vegas & Aliante
                </Link>
              </li>
              <li>
                <Link to="/locations/boulder-hwy-east-lv" className="hover:text-sky-400 transition-colors">
                  Boulder Hwy & Whitney (HQ)
                </Link>
              </li>
              <li>
                <Link to="/locations/boulder-city-nv" className="hover:text-sky-400 transition-colors">
                  Boulder City
                </Link>
              </li>
              <li>
                <Link to="/locations/mesquite-nv" className="hover:text-sky-400 transition-colors">
                  Mesquite, NV
                </Link>
              </li>
            </ul>
            <div className="pt-3 space-y-1.5">
              <Link
                to="/service-areas"
                className="block text-xs font-bold text-sky-400 hover:text-sky-300"
              >
                All Clark County Zips →
              </Link>
              <Link
                to="/knowledge-base"
                className="block text-xs font-bold text-cyan-400 hover:text-cyan-300"
              >
                115°F Diagnostic Guides →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Passionate Cooling & Heating LLC. All rights reserved. NV License #0088935.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="text-sky-400 font-semibold">24/7 Emergency Dispatch</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
