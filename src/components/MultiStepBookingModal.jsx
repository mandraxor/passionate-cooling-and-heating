import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Snowflake,
  Flame,
  Wind,
  Droplets
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { BUSINESS_INFO } from '../data/hours';

export default function MultiStepBookingModal({
  isOpen,
  onClose,
  initialService = '',
  initialCategory = 'cooling'
}) {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'cooling');
  const [selectedService, setSelectedService] = useState(initialService || '');
  const [urgency, setUrgency] = useState('emergency');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeWindow, setTimeWindow] = useState('Morning (8am - 12pm)');

  // Contact Info
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    zipCode: '',
    notes: '',
    isOwner: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedRef, setConfirmedRef] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
      // Auto-detect category
      const match = SERVICES.find(s => s.name === initialService || s.id === initialService);
      if (match) setSelectedCategory(match.category);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 1 && !selectedService) {
      alert('Please select a service or choose general consultation.');
      return;
    }
    if (step === 2 && !urgency) {
      alert('Please select your preferred urgency level.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please enter your name and phone number so our dispatcher can call you.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedRef(`LV-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep(4);
    }, 700);
  };

  const resetAndClose = () => {
    setStep(1);
    setConfirmedRef('');
    onClose();
  };

  const filteredServices = SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 transition-all my-8">
        
        {/* Top Header Bar with Emergency Live Beacon */}
        <div className="bg-[#07152b] text-white p-4 sm:p-5 relative border-b border-slate-800">
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-400">
              24/7 Live Emergency Dispatch
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-[11px] text-slate-300 font-medium">45-Min Avg Response in Clark County</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {step === 4 ? 'Dispatch Request Confirmed' : 'Request Emergency Service or Free Quote'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Nevada Licensed Contractor #0088935 • 100% Upfront Transparent Flat Rates
          </p>

          {/* Stepper Progress Bar */}
          {step < 4 && (
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold">
              <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-red-400' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step >= 1 ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-400'}`}>1</span>
                <span>Service</span>
              </div>
              <div className="h-0.5 flex-1 mx-2 bg-slate-800">
                <div className={`h-full bg-red-600 transition-all duration-300 ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-red-400' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step >= 2 ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-400'}`}>2</span>
                <span>Urgency</span>
              </div>
              <div className="h-0.5 flex-1 mx-2 bg-slate-800">
                <div className={`h-full bg-red-600 transition-all duration-300 ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-red-400' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step >= 3 ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-400'}`}>3</span>
                <span>Details</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {/* ================= STEP 1: SERVICE CATEGORY & SPECIFIC SERVICE ================= */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  Select Category:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SERVICE_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedService('');
                      }}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedCategory === cat.id
                          ? 'border-red-600 bg-red-50/50 text-[#07152b] ring-2 ring-red-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs">{cat.shortName}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{cat.count} Options</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  Select Specific Service Needed:
                </label>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {filteredServices.map(srv => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.name)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        selectedService === srv.name
                          ? 'border-red-600 bg-red-50/40 text-[#07152b] ring-1 ring-red-500'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900">{srv.name}</div>
                        <div className="text-xs text-slate-500">{srv.badge} • {srv.turnaround}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        selectedService === srv.name
                          ? 'border-red-600 bg-red-600 text-white'
                          : 'border-slate-300'
                      }`}>
                        {selectedService === srv.name && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  ))}

                  {/* Free Second Opinion Quote analyzer option */}
                  <button
                    type="button"
                    onClick={() => setSelectedService("Free Second Opinion on Existing Quote / Diagnostic")}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selectedService === "Free Second Opinion on Existing Quote / Diagnostic"
                        ? 'border-red-600 bg-red-50/40 text-[#07152b] ring-1 ring-red-500'
                        : 'border-amber-300 bg-amber-50/50 hover:bg-amber-50 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-900">🔍 Free Second-Opinion Quote Review</div>
                      <div className="text-xs text-amber-700 font-medium">Already got an expensive quote from another contractor? We'll review it for free.</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      selectedService === "Free Second Opinion on Existing Quote / Diagnostic"
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-amber-400'
                    }`}>
                      {selectedService === "Free Second Opinion on Existing Quote / Diagnostic" && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need help now? Call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-red-600 hover:underline">{BUSINESS_INFO.phone}</a></span>
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!selectedService}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>Next: Choose Urgency</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: URGENCY LEVEL & TIMING ================= */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  How urgent is this request?
                </label>
                <div className="space-y-3">
                  {/* Urgent 45-min Emergency */}
                  <label
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      urgency === 'emergency'
                        ? 'border-red-600 bg-red-50/60 ring-2 ring-red-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="urgency"
                        value="emergency"
                        checked={urgency === 'emergency'}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-extrabold text-[#07152b]">
                            🚨 Immediate Emergency (45-Minute Target Dispatch)
                          </span>
                          <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                            Urgent Priority
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          AC not cooling in extreme heat, dangerous gas odor, smoking components, or active water leak. Tech dispatched immediately.
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* Same Day */}
                  <label
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      urgency === 'same-day'
                        ? 'border-red-600 bg-red-50/60 ring-2 ring-red-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="urgency"
                        value="same-day"
                        checked={urgency === 'same-day'}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500"
                      />
                      <div>
                        <span className="text-sm font-bold text-[#07152b]">
                          ⚡ Same-Day Service (Within Today's Window)
                        </span>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Unit struggling or making unusual noises. We will schedule you for today before our evening shift finishes.
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* Scheduled Consultation / Estimate */}
                  <label
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      urgency === 'estimate'
                        ? 'border-red-600 bg-red-50/60 ring-2 ring-red-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="urgency"
                        value="estimate"
                        checked={urgency === 'estimate'}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500"
                      />
                      <div>
                        <span className="text-sm font-bold text-[#07152b]">
                          📅 Free In-Home Estimate / Routine Appointment
                        </span>
                        <p className="text-xs text-slate-600 mt-0.5">
                          New AC or Heat Pump installation, ductwork retrofit, tankless water heater conversion, or annual maintenance.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Time Window Selector */}
              {urgency !== 'emergency' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Window</label>
                    <select
                      value={timeWindow}
                      onChange={(e) => setTimeWindow(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="Morning (8am - 12pm)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12pm - 4pm)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4pm - 8pm)">Evening (4:00 PM - 8:00 PM)</option>
                      <option value="First Available Slot">First Available Technician</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 text-xs font-bold px-3 py-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Service</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>Next: Contact & Address</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: CONTACT & PROPERTY DETAILS ================= */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <div>
                  <strong>Selected:</strong> {selectedService}
                </div>
                <div className="font-bold text-red-600">
                  {urgency === 'emergency' ? '🚨 45-Min Priority' : 'Standard Routine'}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (for Dispatcher SMS/Call) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(702) 858-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Street Address in Clark County
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 6672 Boulder Hwy / Las Vegas or Henderson"
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="89122"
                    maxLength={5}
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Describe symptoms or existing quote details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. AC fan humming but not spinning, second floor won't drop below 82°, or received quote from another company..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 text-xs font-bold px-3 py-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Urgency</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Connecting Dispatcher...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Dispatch Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* ================= STEP 4: INSTANT CONFIRMATION & DIRECT CALL ================= */}
          {step === 4 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300 shadow-sm">
                <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-[#07152b]">
                  Dispatch Request Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Thank you, <strong>{formData.fullName}</strong>. A Passionate HVAC coordinator is reviewing your ticket and will call/text you at <strong>{formData.phone}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-slate-500">Dispatch Reference:</span>
                  <span className="font-mono font-black text-red-600">#{confirmedRef}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-slate-900">{selectedService}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-slate-500">Priority Tier:</span>
                  <span className="font-bold text-red-600">{urgency === 'emergency' ? '🚨 45-Min Emergency Priority' : 'Standard Routine'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-medium text-slate-900">{formData.streetAddress || 'Clark County Metro'} ({formData.zipCode || '89122'})</span>
                </div>
              </div>

              {/* Fast Direct Contact Triggers */}
              <div className="pt-2 max-w-md mx-auto space-y-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Dispatch Desk Now: (702) 858-1211</span>
                </a>

                <a
                  href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi%20Passionate%2C%20I%20just%20submitted%20ticket%20%23${confirmedRef}%20for%20${encodeURIComponent(selectedService)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#07152b] font-bold text-sm py-3 px-6 rounded-xl border border-slate-300 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span>Send Text Message to On-Call Tech</span>
                </a>
              </div>

              <div>
                <button
                  onClick={resetAndClose}
                  className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
