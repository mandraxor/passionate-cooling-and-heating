import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Menu,
  X,
  Flame,
  Snowflake,
  ChevronDown,
  Calendar,
  Sparkles,
  Award,
  Star
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';
import { SERVICE_CATEGORIES } from '../data/services';

export default function HeaderNav({ onOpenBookingModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07152b] border-b border-slate-800 shadow-xl">
      {/* 1. TOP EMERGENCY BROADCAST TICKER - FLUID WIDE SPREAD */}
      <div className="bg-gradient-to-r from-sky-800 via-sky-600 to-blue-800 text-white px-4 sm:px-6 lg:px-10 py-1.5 text-xs font-semibold border-b border-sky-600/40">
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Emergency Status */}
          <div className="flex items-center gap-2.5 truncate">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span className="font-black uppercase tracking-wider text-[11px] sm:text-xs text-white truncate flex items-center gap-1.5">
              <span>❄️ 24/7/365 EMERGENCY COOLING DISPATCH ACTIVE</span>
            </span>
            <span className="hidden md:inline text-sky-200">•</span>
            <span className="hidden md:inline text-sky-100 font-medium text-[11px]">
              45-Minute Average Response Time Across All Clark County
            </span>
          </div>

          {/* Right: Badges & Hotline spread out */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold text-sky-100 flex-shrink-0">
            <span className="flex items-center gap-1.5 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-400/30">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>NV License #0088935</span>
            </span>
            <span className="flex items-center gap-1.5 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>EPA 608 Universal Certified</span>
            </span>
            <span className="flex items-center gap-1 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>5.0 Rating (200+ Reviews)</span>
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-white hover:bg-sky-50 text-sky-800 font-black px-3 py-0.5 rounded-full transition-all shadow-sm"
            >
              Direct: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION - SPACIOUS WIDE SCREEN DISTRIBUTION */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* Left: Logo & Brand Identity (Anchored firmly on Left) */}
          <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform flex-shrink-0">
              <div className="w-full h-full bg-[#07152b] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                <Flame className="w-5 h-5 text-amber-400 absolute -bottom-0.5 -left-0.5 opacity-80" />
                <Snowflake className="w-6 h-6 text-sky-400 absolute -top-0.5 -right-0.5 animate-pulse" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                  Passionate
                </span>
                <span className="text-[11px] font-black uppercase text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded-md border border-sky-700 tracking-wider">
                  HVAC & PLUMBING
                </span>
              </div>
              <p className="text-[11px] font-bold tracking-wide text-slate-400 mt-0.5 flex items-center gap-2">
                <span>Cooling & Heating LLC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">★ 5.0 Google Score</span>
              </p>
            </div>
          </Link>

          {/* Center: Main Desktop Nav Links (Evenly Centered & Generously Spaced) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 2xl:gap-10 text-sm font-bold text-slate-300">
            <Link
              to="/"
              className={`px-3 py-2 rounded-xl transition-all ${
                isActive('/') 
                  ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60' 
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`px-3.5 py-2 rounded-xl inline-flex items-center gap-1.5 transition-all ${
                  isActive('/services')
                    ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                    : 'hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Full Catalog</span>
                <span className="text-[10px] bg-sky-600 text-white font-extrabold px-1.5 py-0.2 rounded-full">
                  17 Services
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-88 bg-[#0b1d3a] border border-slate-700 rounded-2xl shadow-2xl p-3 z-50 text-xs animate-in fade-in slide-in-from-top-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 py-1 mb-1">
                    Select Service Pillar:
                  </div>
                  {SERVICE_CATEGORIES.map(cat => (
                    <Link
                      key={cat.id}
                      to={`/services?category=${cat.id}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/90 transition-colors group"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div>
                        <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">{cat.name}</div>
                        <div className="text-[10px] text-slate-400">{cat.count} Master Offerings</div>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        View
                      </span>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-800 px-2">
                    <Link
                      to="/services"
                      className="text-center block text-[11px] font-bold text-sky-400 hover:text-sky-300 py-1"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      Browse Entire 17-Service Matrix →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/reviews"
              className={`px-3 py-2 rounded-xl transition-all ${
                isActive('/reviews')
                  ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Verified Reviews
            </Link>

            <Link
              to="/service-areas"
              className={`px-3 py-2 rounded-xl transition-all ${
                isActive('/service-areas')
                  ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Dispatch Coverage
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-xl transition-all ${
                isActive('/about')
                  ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              About & License
            </Link>

            <Link
              to="/knowledge-base"
              className={`px-3 py-2 rounded-xl transition-all ${
                isActive('/knowledge-base')
                  ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Knowledge Base
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-xl transition-all ${
                isActive('/contact')
                  ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right: Action Triggers (Spread out cleanly on Right) */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            {/* Phone Number Callout with 24/7 pulse */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white font-black text-sm px-4 py-2.5 rounded-xl border border-slate-700/80 shadow-sm transition-all hover:border-sky-400/60 group"
            >
              <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </div>
              <Phone className="w-4 h-4 text-sky-400 fill-sky-400 group-hover:rotate-12 transition-transform" />
              <span>(702) 858-1211</span>
            </a>

            {/* Direct SMS Button */}
            <a
              href={BUSINESS_INFO.smsUrl}
              className="inline-flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-700/80 transition-colors"
              title="Send text message to dispatch"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>SMS</span>
            </a>

            {/* Request Service / Free Quote Button */}
            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 active:scale-95 text-white font-black text-sm px-5 xl:px-6 py-2.5 rounded-xl shadow-lg shadow-sky-950/40 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Free Quote / Book</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 rounded-xl bg-sky-600 text-white shadow-md"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07152b] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-sky-600 text-white font-extrabold text-sm py-3 rounded-xl shadow-md"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call (702) 858-1211</span>
            </a>
            <a
              href={BUSINESS_INFO.smsUrl}
              className="flex items-center justify-center gap-2 bg-slate-800 text-slate-200 font-bold text-sm py-3 rounded-xl border border-slate-700"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Text Us</span>
            </a>
          </div>

          <div className="space-y-1 text-sm font-bold text-slate-300">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Full Service Catalog (17 Offerings)
            </Link>
            <Link
              to="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Verified Google Reviews (200+)
            </Link>
            <Link
              to="/service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Service Areas & Zip Lookup
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              About Passionate & License #0088935
            </Link>
            <Link
              to="/knowledge-base"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white text-sky-400 font-extrabold"
            >
              Knowledge Base & 115°F Diagnostics
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white"
            >
              Hours & Boulder Hwy Location
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black text-sm py-3.5 rounded-xl shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Emergency Service / Free Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
