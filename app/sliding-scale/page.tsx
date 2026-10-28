'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SlidingScalePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-12 pb-20">
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold">
            Subsidized Advocacy Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Sliding-Scale Consultation Support
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We believe no family should navigate the SEND system alone due to financial barriers. Apply for our low-income subsidized rates starting from £10 per session.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-8">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center space-y-3">
              <div className="text-3xl">🎉</div>
              <h4 className="font-bold text-lg">Application Received!</h4>
              <p className="text-xs text-green-700 max-w-md mx-auto">
                Thank you for submitting your application. Our team will review your details and issue a reduced-rate booking link within 24–48 hours.
              </p>
              <Link href="/consultation" className="inline-block mt-4 bg-brand-navy text-white px-5 py-2.5 rounded-xl text-xs font-semibold">
                Back to Experts
              </Link>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Full Name</label>
                  <input type="text" required placeholder="Parent or Guardian Name" className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email Address</label>
                  <input type="email" required placeholder="name@example.com" className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Financial Eligibility Category</label>
                <select className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange">
                  <option>Receiving Universal Credit</option>
                  <option>Receiving Carer&apos;s Allowance</option>
                  <option>Low Household Income (Under £25,000/yr)</option>
                  <option>Other Financial Hardship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Brief Summary of Assistance Needed</label>
                <textarea rows={4} required placeholder="Describe what support or document review you need..." className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange resize-none" />
              </div>

              <button type="submit" className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl text-xs transition-all shadow-md">
                Submit Sliding Scale Request →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}