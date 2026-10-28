'use client';

import { useState } from 'react';

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    background: '',
    motivation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: '💙',
      title: 'Support Carers',
      desc: 'Provide peer support and emotional validation to parents feeling overwhelmed by Local Authority bureaucracy.',
    },
    {
      icon: '📄',
      title: 'Review Letters',
      desc: 'Help parents check their draft "Request for Assessment" letters using our comprehensive, pre-approved checklists.',
    },
    {
      icon: '🌍',
      title: 'Full Training Provided',
      desc: 'We offer comprehensive, free training on the UK SEND Code of Practice 2015, supported by licensed Social Workers.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header Section */}
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold">
            <span>🛡️ Make a Real Difference</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Join Our Volunteer Advocate Network
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Help parents stand up to Local Authorities. We are looking for parent-carers, legal professionals, and SEND allies to volunteer as peer advocates and help review template letters.
          </p>
        </div>
      </section>

      {/* 3 Feature Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center font-bold text-lg border border-orange-100">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Application Form Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-brand-navy">Volunteer Application</h3>
            <p className="text-xs text-gray-500">Take 5 minutes to join our trusted UK advocate network.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center space-y-3">
              <div className="text-3xl">🎉</div>
              <h4 className="font-bold text-lg">Application Submitted Successfully!</h4>
              <p className="text-xs text-green-700 max-w-md mx-auto">
                Thank you for applying to volunteer, {formData.name}. Our volunteer coordinator will review your background and reach out to <strong>{formData.email}</strong> within 3–5 business days with onboarding steps.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', background: '', motivation: '' });
                }}
                className="mt-4 bg-brand-navy text-white px-5 py-2.5 rounded-xl text-xs font-semibold"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Background / Experience</label>
                <input
                  type="text"
                  required
                  placeholder="Parent-Carer (Lived Experience)"
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Why would you like to volunteer with us?</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly share your motivation..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold py-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Submit Application ✓</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}