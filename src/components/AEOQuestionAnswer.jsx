import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Info,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { getFAQSchema } from '../data/schemas';

/**
 * Reusable AEOQuestionAnswer Component
 * Engineered for Google AI Overviews, Featured Snippets, and LLM Retrieval
 */
export default function AEOQuestionAnswer({
  title = "Frequently Asked Questions & Technical Diagnostics",
  subtitle = "Direct answers formatted for instant clarity, featuring Clark County climate engineering specs.",
  items = [],
  includeSchema = true,
  category = "HVAC & Plumbing"
}) {
  const [expandedIndex, setExpandedIndex] = useState(0); // first item open by default

  const toggleItem = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  // Compile JSON-LD schema for FAQPage
  const faqSchema = includeSchema ? getFAQSchema(
    items.map(item => ({
      question: item.question,
      answer: `${item.directAnswer} ${item.checklist ? 'Key steps: ' + item.checklist.join('; ') : ''}`
    }))
  ) : null;

  return (
    <section className="py-16 bg-white border-y border-slate-200 text-slate-800">
      {/* Schema Injection */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Answer Engine Optimized (AEO) Knowledge Module</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#07152b] tracking-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Q&A Accordion Items */}
        <div className="space-y-6">
          {items.map((item, idx) => {
            const isOpen = expandedIndex === idx;

            return (
              <article
                key={item.id || idx}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm hover:border-sky-300"
              >
                {/* Question Trigger (H3 with H2 context) */}
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#07152b] leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <span className="p-1 rounded-lg bg-white border border-slate-200 text-slate-500 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 space-y-5 animate-in fade-in duration-200">
                    
                    {/* INVERTED PYRAMID DIRECT ANSWER BLOCK (40–60 words) */}
                    <div className="bg-white border-l-4 border-sky-500 p-4 sm:p-5 rounded-r-xl shadow-sm border border-y-slate-200 border-r-slate-200">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-sky-700 mb-1.5">
                        <Info className="w-3.5 h-3.5" />
                        <span>Direct Quick Answer (Verified Fact Summary):</span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                        {item.directAnswer}
                      </p>
                    </div>

                    {/* KEY FACTS & SPECS TABLE (Pricing, Windows, Hardware Specs) */}
                    {item.keyFacts && item.keyFacts.length > 0 && (
                      <div className="bg-white rounded-xl border border-slate-200 p-4 overflow-hidden">
                        <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                          <FileCheck className="w-4 h-4 text-sky-600" />
                          <span>Key Technical Facts & Operational Specs:</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {item.keyFacts.map((fact, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                            >
                              <span className="font-bold text-slate-600">{fact.label}:</span>
                              <span className="font-extrabold text-[#07152b] text-right truncate ml-2">
                                {fact.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* BULLETED DIAGNOSTIC / ACTION CHECKLIST */}
                    {item.checklist && item.checklist.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-xs font-black uppercase tracking-wider text-slate-700">
                          Recommended Actions & Troubleshooting Steps:
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {item.checklist.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* EXPANDED TECHNICAL DETAIL (If provided) */}
                    {item.technicalDetails && (
                      <div className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/80">
                        <strong className="text-slate-800">Master Tech Insight:</strong> {item.technicalDetails}
                      </div>
                    )}

                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
