import React, { useState, useEffect } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { BUSINESS_INFO } from '../data/hours';

export default function BookingForm({ defaultService = '', formId = 'booking-form', title = 'Book Appointment / Request Free Estimate' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService,
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    isEmergency: false,
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(`PCH-${Math.floor(100000 + Math.random() * 900000)}`);
      setFormSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: defaultService || '',
      preferredDate: '',
      preferredTime: 'Morning (8:00 AM - 12:00 PM)',
      isEmergency: false,
      notes: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div id={formId} className="bg-white/95 backdrop-blur-md border border-sky-200/90 rounded-2xl p-6 sm:p-10 shadow-ice relative overflow-hidden">
      {formSubmitted ? (
        <div className="py-10 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#07152b]">
              Appointment Request Confirmed!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mt-2">
              Thank you, <strong className="text-[#07152b]">{formData.fullName}</strong>. A Passionate Cooling & Heating dispatch coordinator will call you at{' '}
              <strong className="text-[#0284c7]">{formData.phone}</strong> shortly to confirm your scheduled slot.
            </p>
          </div>

          <div className="bg-sky-50/70 p-4 rounded-xl max-w-md mx-auto text-left border border-sky-200 text-xs space-y-1.5 text-slate-700">
            <div><strong>Selected Service:</strong> {formData.service || 'General HVAC / Contractor Inquiry'}</div>
            <div><strong>Preferred Slot:</strong> {formData.preferredDate || 'Earliest Dispatch'} ({formData.preferredTime})</div>
            <div><strong>Emergency Dispatch:</strong> {formData.isEmergency ? '🚨 URGENT PRIORITY' : 'Standard Routine'}</div>
            <div><strong>Reference Number:</strong> <span className="text-[#0284c7] font-mono font-bold">#{bookingRef}</span></div>
          </div>

          {formData.isEmergency && (
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl max-w-md mx-auto text-xs text-orange-800">
              ⚠️ <strong>Emergency AC/Heating Outage?</strong> For the fastest dispatch in under 45 minutes, call our 24/7 hotline directly: <strong>(702) 858-1211</strong>.
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-[#0284c7] text-xs font-bold px-5 py-2.5 rounded-lg border border-sky-200 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-sky-100 pb-4 mb-2">
            <h3 className="text-xl font-bold text-[#07152b] tracking-tight">{title}</h3>
            <p className="text-xs text-slate-600 mt-1">Upfront flat-rate pricing. Fast dispatch across Las Vegas & Henderson.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Full Name <span className="text-[#0284c7]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Robert Smith"
                className="w-full min-h-[48px] bg-sky-50/50 border border-sky-200 rounded-xl px-4 py-3 text-[#07152b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-[#0284c7] text-base sm:text-sm transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Phone Number <span className="text-[#0284c7]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(702) 858-XXXX"
                className="w-full min-h-[48px] bg-sky-50/50 border border-sky-200 rounded-xl px-4 py-3 text-[#07152b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-[#0284c7] text-base sm:text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Email Address (Optional)
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="robert@example.com"
                className="w-full min-h-[48px] bg-sky-50/50 border border-sky-200 rounded-xl px-4 py-3 text-[#07152b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-[#0284c7] text-base sm:text-sm transition-all"
              />
            </div>

            {/* Service Needed */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Service Needed <span className="text-[#0284c7]">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full min-h-[48px] bg-sky-50/50 border border-sky-200 rounded-xl px-4 py-3 text-[#07152b] focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-[#0284c7] text-base sm:text-sm transition-all"
              >
                <option value="">-- Select Required Service --</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="General Consultation / Remodel Scope">
                  General Contracting / Remodel Scope
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Preferred Date */}
            <div>
              <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Preferred Date
              </label>
              <input
                id="preferredDate"
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full min-h-[48px] bg-sky-50/50 border border-sky-200 rounded-xl px-4 py-3 text-[#07152b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-[#0284c7] text-base sm:text-sm transition-all"
              />
            </div>

            {/* Preferred Time Window */}
            <div>
              <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Preferred Time Window
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full min-h-[48px] bg-sky-50/50 border border-sky-200 rounded-xl px-4 py-3 text-[#07152b] focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-[#0284c7] text-base sm:text-sm transition-all"
              >
                <option value="🚨 Emergency (Immediate Dispatch)">🚨 Emergency (Immediate Dispatch)</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                <option value="Night / Overtime Window">Night / Overtime Window</option>
              </select>
            </div>
          </div>

          {/* Emergency Priority Toggle */}
          <div className="p-3.5 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-3">
            <input
              type="checkbox"
              id="isEmergency"
              name="isEmergency"
              checked={formData.isEmergency}
              onChange={handleChange}
              className="mt-0.5 h-5 w-5 rounded border-orange-300 text-[#ea580c] focus:ring-[#ea580c] flex-shrink-0 cursor-pointer"
            />
            <label htmlFor="isEmergency" className="text-xs text-slate-700 cursor-pointer">
              <strong className="text-[#ea580c] font-bold">Urgent AC or Heating Emergency?</strong> Check here to notify our on-call 24/7 master technician for expedited dispatch.
            </label>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              System Symptoms / Project Details
            </label>
            <textarea
              id="notes"
              rows="3"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="E.g., AC blowing warm air, strange grinding noise, need quote on complete residential heat pump replacement..."
              className="w-full min-h-[80px] bg-sky-50/50 border border-sky-200 rounded-xl px-4 py-3 text-[#07152b] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-[#0284c7] text-base sm:text-sm transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[50px] bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] active:scale-[0.99] text-white font-extrabold text-base py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-200 flex items-center justify-center gap-2 focus:ring-4 focus:ring-sky-500/40 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting Your Request...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 text-white" />
                <span>Confirm Appointment Request / Get Free Quote</span>
              </>
            )}
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 text-center sm:text-left">
            <span>🔒 Confidential & Secure. We never share your phone number.</span>
            <span className="text-[#0284c7] font-semibold">Licensed NV General Contractor</span>
          </div>
        </form>
      )}
    </div>
  );
}
