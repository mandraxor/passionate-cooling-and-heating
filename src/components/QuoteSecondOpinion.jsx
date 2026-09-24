import React, { useState } from 'react';
import {
  FileText,
  DollarSign,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  HelpCircle,
  Zap,
  Percent
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hours';

export default function QuoteSecondOpinion({ onOpenBookingModal }) {
  // Financing calculator states
  const [systemPrice, setSystemPrice] = useState(8500);
  const [termMonths, setTermMonths] = useState(36);
  const [interestRate, setInterestRate] = useState(0); // 0% APR default promo!
  const [rebateApplied, setRebateApplied] = useState(true);

  const NV_ENERGY_REBATE = 650;
  const netPrice = Math.max(0, systemPrice - (rebateApplied ? NV_ENERGY_REBATE : 0));
  
  // Calculate monthly payment
  const monthlyPayment = interestRate === 0
    ? Math.round(netPrice / termMonths)
    : Math.round((netPrice * (interestRate / 100 / 12)) / (1 - Math.pow(1 + (interestRate / 100 / 12), -termMonths)));

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-emerald-800 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparent Honest Value</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#07152b] tracking-tight">
            Second-Opinion Quote Analysis & Financing
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Never sign a high-pressure \$12,000+ replacement contract without getting a second opinion. We evaluate diagnostic accuracy, eliminate hidden dealer markups, and calculate real NV Energy rebate savings.
          </p>
        </div>

        {/* Dual Value Engines Grid: Second Opinion Analyzer + Financing Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Card 1: Second Opinion Quote Reviewer */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-elevated space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-sky-600 uppercase">
                  100% Free Service
                </span>
                <h3 className="text-xl font-black text-[#07152b]">
                  Got a Competing Quote? We'll Check It.
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Many Las Vegas private-equity owned franchises train their technicians as commission salespeople, falsely condemning repairable compressors to push expensive new systems. Let our licensed General Contractor inspect your system before you spend thousands.
            </p>

            <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200 text-xs">
              <div className="font-bold text-[#07152b] uppercase text-[11px] tracking-wider mb-1">
                What We Verify During Your 2nd Opinion:
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Did the previous tech accurately test capacitor microfarads, amp draws, and refrigerant subcooling?</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Is a simple \$200–\$400 electrical component repair viable instead of a total \$10,000 unit replacement?</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Are equipment model numbers genuinely matched to your home's square footage via Manual-J calculations?</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal("Free Second Opinion on Existing Quote / Diagnostic")}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm py-4 px-6 rounded-xl shadow-md transition-all active:scale-95"
              >
                <span>Request Free 2nd-Opinion Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Interactive 0% APR Financing Calculator */}
          <div className="lg:col-span-6 bg-[#07152b] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-emerald-400 uppercase">
                  Budget Estimator
                </span>
                <h3 className="text-xl font-black text-white">
                  Flexible 0% APR Payment Calculator
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              Upgrade to a high-efficiency 16 to 20 SEER2 system without depleting emergency savings. Calculate your estimated monthly payment below:
            </p>

            {/* Slider 1: Estimated System Cost */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-300">Estimated Project Scope:</span>
                <span className="text-white font-mono text-sm">\${systemPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="3500"
                max="18000"
                step="500"
                value={systemPrice}
                onChange={(e) => setSystemPrice(Number(e.target.value))}
                className="w-full accent-sky-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>\$3,500 (Single Repair/Mini-Split)</span>
                <span>\$18,000 (Complete Dual Multi-Unit)</span>
              </div>
            </div>

            {/* Term Months Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Financing Term Duration:
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {[12, 24, 36, 60].map(term => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setTermMonths(term)}
                    className={`py-2 rounded-xl font-bold transition-all ${
                      termMonths === term
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {term} Mos
                  </button>
                ))}
              </div>
            </div>

            {/* NV Energy Rebate Toggle */}
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Apply Instant NV Energy Utility Rebate (-\$650)</span>
              </div>
              <input
                type="checkbox"
                checked={rebateApplied}
                onChange={(e) => setRebateApplied(e.target.checked)}
                className="h-4 w-4 rounded accent-sky-500 cursor-pointer"
              />
            </div>

            {/* Calculated Monthly Box */}
            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">
                  Estimated Monthly Investment:
                </div>
                <div className="text-3xl font-black text-emerald-400 mt-0.5">
                  \${monthlyPayment} <span className="text-xs text-slate-400 font-normal">/ month</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {termMonths} months @ 0% APR promo • \${netPrice.toLocaleString()} Net Total
                </div>
              </div>

              <button
                onClick={() => onOpenBookingModal("High-Efficiency AC Installation / 0% Financing")}
                className="bg-emerald-500 hover:bg-emerald-600 text-[#07152b] font-black text-xs px-4 py-3 rounded-xl transition-colors shadow-md flex-shrink-0"
              >
                Apply for 0% APR
              </button>
            </div>
          </div>

        </div>

        {/* Transparent Comparison Table */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h3 className="text-xl sm:text-2xl font-black text-[#07152b] text-center mb-6">
            The Passionate Promise vs. Las Vegas Corporate Franchises
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase text-[10px] sm:text-xs">
                  <th className="py-3 px-4 font-black">Standard Evaluation Criteria</th>
                  <th className="py-3 px-4 font-black text-sky-600 bg-sky-50/60 rounded-t-xl">
                    Passionate Cooling & Heating
                  </th>
                  <th className="py-3 px-4 font-black text-slate-500">Typical Corporate Franchises</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-4 px-4 font-bold text-[#07152b]">
                    Pricing Transparency
                  </td>
                  <td className="py-4 px-4 bg-sky-50/30 font-bold text-slate-900">
                    <span className="text-emerald-600">✓ Upfront flat-rate quote</span> before any work begins. No surprises.
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    Hourly billing, open-ended travel fees, unpredictable final invoices.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[#07152b]">
                    Emergency Response (115°F Heat)
                  </td>
                  <td className="py-4 px-4 bg-sky-50/30 font-bold text-slate-900">
                    <span className="text-emerald-600">✓ 45-minute average dispatch</span> with fully stocked OEM repair trucks.
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    Answering services, 24–48 hour waitlists, emergency surcharge spikes.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[#07152b]">
                    Technician Incentives
                  </td>
                  <td className="py-4 px-4 bg-sky-50/30 font-bold text-slate-900">
                    <span className="text-emerald-600">✓ Salaried master craftsmen</span> focused on fixing components.
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    Commissioned sales techs incentivized to push total replacements.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[#07152b]">
                    Licensing Breadth
                  </td>
                  <td className="py-4 px-4 bg-sky-50/30 font-bold text-slate-900">
                    <span className="text-emerald-600">✓ NV Lic. #0088935</span> + General Contractor & Plumbing capability.
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    Subcontracting structural, electrical, or plumbing work to 3rd parties.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
