import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Snowflake, Flame, Menu, X, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-semibold transition-all duration-150 py-1 ${
      isActive
        ? 'text-[#0284c7] font-bold border-b-2 border-[#0284c7]'
        : 'text-[#07152b] hover:text-[#0284c7]'
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `block px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors ${
      isActive
        ? 'bg-sky-100 text-[#0284c7] border-l-4 border-[#0284c7] font-bold'
        : 'text-[#07152b] hover:bg-sky-50 hover:text-[#0284c7]'
    }`;

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* 1. TOP EMERGENCY NOTIFICATION BANNER */}
      <aside aria-label="Emergency Alert" className="bg-[#07152b] text-white py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b border-sky-950/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm transition-colors flex-shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Fast 45-Min
            </span>
            <span className="text-slate-200 text-[11px] sm:text-sm leading-tight">
              <strong className="text-white">EMERGENCY DISPATCH:</strong> 24/7 HVAC Across Las Vegas Valley
            </span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-[#ea580c] active:bg-[#c2410c] text-white border border-white/20 hover:border-[#ea580c] px-3 py-1 rounded-full font-bold text-[11px] sm:text-xs tracking-wide transition-all duration-200 shadow-sm group mt-0.5 sm:mt-0"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400 group-hover:text-white fill-current transition-colors" />
            <span>Emergency Dispatch: <strong className="underline decoration-sky-400">{BUSINESS_INFO.phone}</strong></span>
          </a>
        </div>
      </aside>

      {/* 2. MAIN FROSTED GLASS NAVBAR */}
      <div className="bg-white/85 backdrop-blur-md border-b border-sky-100/90 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Brand */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 group-hover:shadow-sky-500/35 transition-all duration-200 border border-sky-200 flex-shrink-0">
                <div className="flex items-center justify-center text-white">
                  <Snowflake className="w-4 h-4 sm:w-5 sm:h-5 -mr-0.5 sm:-mr-1 text-white stroke-[2.5]" />
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5 -ml-0.5 sm:-ml-1 text-amber-200 fill-amber-200" />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-xl font-black tracking-tight text-[#07152b] group-hover:text-[#0284c7] transition-colors duration-200 truncate">
                    PASSIONATE
                  </span>
                  <span className="inline-block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider bg-sky-100 text-sky-800 border border-sky-200/80 px-1.5 sm:px-2 py-0.5 rounded flex-shrink-0">
                    24/7
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-600 tracking-wider truncate">
                  Cooling & Heating LLC
                </span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 truncate">
                  Lic. General Contractor #NV
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              <NavLink to="/" className={navLinkClasses} end>
                Home
              </NavLink>
              <NavLink to="/services" className={navLinkClasses}>
                Services & Specialties
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                About & Why Us
              </NavLink>
              <NavLink to="/reviews" className={navLinkClasses}>
                5★ Reviews (207+)
              </NavLink>
              <NavLink to="/hours" className={navLinkClasses}>
                Hours & Location
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact & Quote
              </NavLink>
            </nav>

            {/* Desktop Call CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 hover:-translate-y-0.5 focus:ring-4 focus:ring-sky-500/30"
              >
                <Phone className="w-4 h-4 fill-white text-white" />
                <div className="text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-100 leading-none">
                    24/7 Live Hotline
                  </div>
                  <div className="text-xs sm:text-sm leading-tight tracking-tight font-extrabold">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button - 44px+ touch targets */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center bg-[#0284c7] text-white rounded-xl font-bold active:bg-[#0369a1] transition-colors shadow-sm"
                aria-label="Call (702) 858-1211"
              >
                <Phone className="w-5 h-5 fill-white text-white" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#07152b] hover:bg-sky-50 active:bg-sky-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with scroll safety */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-sky-200/80 px-4 pt-3 pb-6 space-y-2 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              Services & Specialties
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              About & Why Us
            </NavLink>
            <NavLink
              to="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              5★ Google Reviews (207+)
            </NavLink>
            <NavLink
              to="/hours"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              Hours & Location (24/7)
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              Contact & Book Online
            </NavLink>
            <div className="pt-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white font-bold py-3 px-4 rounded-xl text-center shadow-lg shadow-sky-500/25 active:scale-[0.98] transition-transform"
              >
                <Phone className="w-5 h-5 fill-white text-white" />
                <span>Call (702) 858-1211 (24/7 Dispatch)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

