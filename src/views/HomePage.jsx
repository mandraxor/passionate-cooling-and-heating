import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import EmergencyRescueBanner from '../components/EmergencyRescueBanner';
import InteractiveServiceMatrix from '../components/InteractiveServiceMatrix';
import TechnicianReviewCarousel from '../components/TechnicianReviewCarousel';
import QuoteSecondOpinion from '../components/QuoteSecondOpinion';
import ServiceAreaCoverage from '../components/ServiceAreaCoverage';
import MultiStepBookingModal from '../components/MultiStepBookingModal';
import SEOHead from '../components/SEOHead';
import AEOQuestionAnswer from '../components/AEOQuestionAnswer';
import { getBusinessSchema } from '../data/schemas';

const HOMEPAGE_AEO_QUESTIONS = [
  {
    id: "las-vegas-emergency-dispatch",
    question: "How fast is emergency AC repair dispatch in Las Vegas and Clark County?",
    directAnswer: "Passionate Cooling & Heating maintains an average 30 to 45-minute emergency response time across the Las Vegas Valley, Henderson, Summerlin, and Boulder City. Our 24/7/365 fleet operates from Boulder Highway with mobile trucks fully stocked with universal 440V run capacitors, fan motors, and contactors.",
    keyFacts: [
      { label: "Valley-Wide Response Time", value: "30–45 Minutes (24/7/365)" },
      { label: "Diagnostic Fee Policy", value: "$0 with Any Completed Repair" },
      { label: "Dispatch Headquarters", value: "6672 Boulder Hwy Suite 2, Las Vegas, NV" },
      { label: "Contractor License", value: "NV State Contractors Board #0088935" }
    ],
    checklist: [
      "Call (702) 858-1211 immediately for priority board placement",
      "Switch thermostat from COOL to OFF to prevent compressor motor burnout",
      "Ensure pets and children remain in shaded or fan-cooled rooms",
      "Unlock side gates for direct outdoor condenser access"
    ]
  },
  {
    id: "hvac-diagnostic-fee-las-vegas",
    question: "How does Passionate's $0 Diagnostic Fee with repair work?",
    directAnswer: "Unlike corporate competitors that charge separate $89 to $189 dispatch trip charges on top of repair bills, Passionate Cooling & Heating waives your diagnostic fee 100% when you approve any necessary repair. If you decide not to repair, you pay only our flat-rate diagnostic evaluation.",
    keyFacts: [
      { label: "Diagnostic Fee with Repair", value: "$0.00 (100% Waived)" },
      { label: "Quote Guarantees", value: "Upfront Flat-Rate Written Pricing" },
      { label: "Second Opinions", value: "100% Free on Competitor Quotes" },
      { label: "Overtime Surcharges", value: "Zero Weekend/Holiday Surcharges" }
    ],
    checklist: [
      "Master technician performs multi-point electrical and refrigerant diagnostics",
      "You receive an itemized, flat-rate quote before any wrench touches your unit",
      "Upon your approval, the full diagnostic fee is credited against the final repair bill"
    ]
  },
  {
    id: "ac-blowing-warm-air-115",
    question: "Why is my air conditioner blowing warm air during a 115°F Las Vegas heatwave?",
    directAnswer: "When outdoor temperatures exceed 110°F, extreme thermal load causes standard 370V run capacitors to degrade, contactor points to pit, or condenser coils to overheat and trip thermal safety limits. In other cases, clogged 1-inch filters restrict airflow, causing evaporator coils to turn into solid blocks of ice.",
    keyFacts: [
      { label: "Most Common Cause (80%)", value: "Blown Dual-Run Capacitor or Contactor" },
      { label: "Second Most Common Cause", value: "Frozen Evaporator Coil from Filter Restriction" },
      { label: "Average Repair Time", value: "30–45 Minutes On-Site" },
      { label: "Replacement Part Standard", value: "Heavy-Duty 440V American-Made Components" }
    ],
    checklist: [
      "Check if outdoor fan is turning; if stationary while humming, shut system off immediately",
      "Inspect indoor air filter and replace if gray, dusty, or clogged",
      "Inspect copper refrigerant line; if encased in white frost, thaw unit before technician arrives",
      "Call Passionate at (702) 858-1211 for same-day mobile rescue"
    ]
  }
];

export default function HomePage({ isBookingOpen, setIsBookingOpen, initialServiceToBook, setInitialServiceToBook }) {
  const handleOpenBooking = (serviceName = '') => {
    setInitialServiceToBook(serviceName);
    setIsBookingOpen(true);
  };

  const businessSchema = getBusinessSchema();

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Passionate Cooling & Heating LLC | 24/7 HVAC & Plumbing Las Vegas, NV"
        description="When Your A/C Don’t Sing, Give Passionate A Ring! 24/7 emergency AC repair, heating, tankless water heaters & ductwork across Clark County & Mesquite, NV. 45-min avg arrival. Lic. #0088935. Call (702) 858-1211."
        canonicalPath="/"
        schema={businessSchema}
      />

      {/* 1. HERO SECTION WITH PUNCHY BRANDING & TRUST BADGE BAR */}
      <HeroSection onOpenBookingModal={handleOpenBooking} />

      {/* 2. 115°F EMERGENCY DESERT HEAT RESCUE BANNER */}
      <EmergencyRescueBanner onOpenBookingModal={handleOpenBooking} />

      {/* 3. INTERACTIVE SERVICE MATRIX (THE FULL 17-SERVICE CATALOG SOLUTION) */}
      <InteractiveServiceMatrix onSelectServiceToBook={handleOpenBooking} />

      {/* 4. SOCIAL PROOF & TECHNICIAN-ATTRIBUTED REVIEW CAROUSEL */}
      <TechnicianReviewCarousel />

      {/* 5. TRANSPARENT VALUE: SECOND OPINION QUOTE ANALYZER & FINANCING */}
      <QuoteSecondOpinion onOpenBookingModal={handleOpenBooking} />

      {/* 6. AEO QUESTION & ANSWER MODULE (DIRECT SNIPPET EXTRACTIONS) */}
      <AEOQuestionAnswer
        title="Frequently Asked Questions & Emergency Diagnostics"
        subtitle="Snippet-ready facts and emergency triage steps for Clark County homeowners facing 115°F temperatures."
        items={HOMEPAGE_AEO_QUESTIONS}
        includeSchema={true}
      />

      {/* 7. SERVICE AREA & DISPATCH COVERAGE (CLARK COUNTY, LAS VEGAS, MESQUITE) */}
      <ServiceAreaCoverage onOpenBookingModal={handleOpenBooking} />

      {/* 8. MODAL FUNNEL */}
      <MultiStepBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={initialServiceToBook}
      />
    </div>
  );
}

