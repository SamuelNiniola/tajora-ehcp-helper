'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful message dispatch
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Details & Guidelines */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-brand-navy tracking-tight">
              Contact EHCP Helper
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Have questions about our free resources, need help with a paid booking, or want to discuss partnership opportunities? Send us a message and our friendly support team will get back to you within 24–48 hours.
            </p>
          </div>

          <div className="space-y-6">
            {/* General Enquiries */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                ✉️
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-sm">General Enquiries</h4>
                <a href="mailto:hello@ehcphelper.org.uk" className="text-xs text-brand-orange hover:underline font-medium">
                  hello@ehcphelper.org.uk
                </a>
              </div>
            </div>

            {/* Safeguarding & Social Work Quality */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                🛡️
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-sm">Safeguarding & Social Work Quality</h4>
                <a href="mailto:quality@ehcphelper.org.uk" className="text-xs text-brand-orange hover:underline font-medium">
                  quality@ehcphelper.org.uk
                </a>
              </div>
            </div>

            {/* Please Note Notice Box */}
            <div className="flex items-start space-x-4 bg-orange-50/60 border border-orange-100 p-4 rounded-2xl">
              <div className="w-8 h-8 bg-orange-100 text-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs">
                ℹ️
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-xs mb-1">Please Note</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  We cannot provide immediate, personalized legal or social care advice over email. If you need 1:1 advice, please book a consultation with one of our experts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Send a Message Form Card */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-brand-navy mb-6">Send a Message</h3>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center space-y-3">
              <div className="text-3xl">🎉</div>
              <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
              <p className="text-xs text-green-700">
                Thank you for reaching out, {formData.name}. Our support team has received your message and will get back to you at <strong>{formData.email}</strong> within 24–48 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-4 bg-brand-navy text-white px-5 py-2 rounded-lg text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="General Support Question"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-navy hover:bg-blue-900 text-white font-semibold py-3.5 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                {/* <span>📤</span> */}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}