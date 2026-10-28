'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConsultationPage() {
  // State for filter inputs
  const [selectedSpecialisms, setSelectedSpecialisms] = useState<string[]>([
    'EHCP Draft Reviews',
    'Social Care Assessments',
  ]);
  const [regionFilter, setRegionFilter] = useState('England');
  const [consultType, setConsultType] = useState('standard');

  // Experts database
  const experts = [
    {
      id: 'sarah',
      name: 'Sarah Jenkins, BA',
      role: 'Registered SEND Social Worker',
      license: 'Social Work England #SW92841',
      rating: 5,
      reviews: 48,
      price: 65,
      badge: 'Highly Rated',
      initials: 'SJ',
      avatarBg: 'bg-gradient-to-tr from-brand-navy to-brand-blue',
      bio: 'Over 12 years of experience working inside Local Authorities. I specialize in helping families successfully appeal "refusal to assess" decisions and drafting Section F (provision) so it\'s legally binding.',
      specialisms: ['EHCP Draft Reviews', 'Section I Placement', 'Social Care Assessments'],
      region: 'England',
    },
    {
      id: 'mark',
      name: 'Mark Hughes, MSc',
      role: 'SEND Advocate & Care Consultant',
      license: 'Over 15 Years SEND Advocacy',
      rating: 5,
      reviews: 31,
      price: 60,
      badge: null,
      initials: 'MH',
      avatarBg: 'bg-brand-navy',
      bio: 'Specialist in children\'s social care assessments, overnight respite, and securing direct payments. Expert in navigating complex continuing care hours assessments for children with severe physical medical needs.',
      specialisms: ['Care Packages', 'Direct Payments', 'Overnight Respite', 'Social Care Assessments'],
      region: 'England',
    },
  ];

  // Handle checkbox toggles
  const handleCheckboxChange = (spec: string) => {
    if (selectedSpecialisms.includes(spec)) {
      setSelectedSpecialisms(selectedSpecialisms.filter((s) => s !== spec));
    } else {
      setSelectedSpecialisms([...selectedSpecialisms, spec]);
    }
  };

  // Filter logic: match region and at least one selected specialism (if any selected)
  const filteredExperts = experts.filter((expert) => {
    const matchesRegion = expert.region.toLowerCase().includes(regionFilter.toLowerCase()) || regionFilter === '';
    const matchesSpecialism =
      selectedSpecialisms.length === 0 ||
      expert.specialisms.some((s) => selectedSpecialisms.includes(s));
    return matchesRegion && matchesSpecialism;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-orange-50 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold">
            <span>🛡️ Registered Social Workers & SEND Advocates</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Book a 1:1 Video Consultation with a SEND Social Worker
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Get personalized, expert guidance to secure the education, health, and care hours your child deserves. Choose a consultant, select a slot, and receive live, hands-on support.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Filter Sidebar */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-fit space-y-6">
          <div className="flex items-center space-x-2 pb-4 border-b border-gray-100 font-bold text-brand-navy text-sm">
            <span>🔍 Filter Experts</span>
          </div>

          {/* Specialisms Checkboxes */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">Specialism</label>
            <div className="space-y-2 text-xs text-gray-700">
              {[
                'EHCP Draft Reviews',
                'Social Care Assessments',
                'SEND Tribunal Appeals',
                'DLA/PIP Applications',
              ].map((spec) => (
                <label key={spec} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSpecialisms.includes(spec)}
                    onChange={() => handleCheckboxChange(spec)}
                    className="rounded text-brand-orange focus:ring-brand-orange"
                  />
                  <span>{spec}</span>
                </label>
              ))}
            </div>
          </div>

          {/* UK Region / Jurisdiction */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">UK Region / Jurisdiction</label>
            <input
              type="text"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              placeholder="e.g. England, Wales..."
              className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-xs text-gray-700 outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          {/* Consultation Type */}
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">Consultation Type</label>
            <div className="space-y-2 text-xs text-gray-700">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultType"
                  checked={consultType === 'standard'}
                  onChange={() => setConsultType('standard')}
                  className="text-brand-orange focus:ring-brand-orange"
                />
                <span>Standard Consultation</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultType"
                  checked={consultType === 'sliding'}
                  onChange={() => setConsultType('sliding')}
                  className="text-brand-orange focus:ring-brand-orange"
                />
                <span>Sliding Scale (Low Income)</span>
              </label>
            </div>
          </div>

          <div className="text-[11px] text-gray-400 italic pt-2">
            * Filters apply instantly as you select options.
          </div>
        </div>

        {/* Right Experts List */}
        <div className="lg:col-span-9 space-y-6">
          {filteredExperts.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
              <p className="text-lg font-bold text-brand-navy">No experts match your selected filters.</p>
              <p className="text-xs text-gray-500">Try unchecking some specialisms or clearing the region filter.</p>
              <button
                onClick={() => {
                  setSelectedSpecialisms([]);
                  setRegionFilter('');
                }}
                className="mt-2 bg-brand-orange text-white px-4 py-2 rounded-xl text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredExperts.map((expert) => (
              <div
                key={expert.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {expert.badge && (
                  <span className="absolute top-4 right-4 bg-blue-50 text-brand-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {expert.badge}
                  </span>
                )}

                {/* Profile Avatar & Info */}
                <div className="md:col-span-8 flex flex-col sm:flex-row gap-6 items-start">
                  <div className={`w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl ${expert.avatarBg}`}>
                    {expert.initials}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy">{expert.name}</h3>
                      <p className="text-xs font-semibold text-brand-orange">{expert.role}</p>
                      <p className="text-[10px] text-gray-400">{expert.license}</p>
                    </div>

                    <div className="flex items-center space-x-1 text-amber-500 text-xs">
                      <span>{'★'.repeat(expert.rating)}</span>
                      <span className="text-gray-500 font-medium ml-1">({expert.reviews} reviews)</span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed pt-1">
                      {expert.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {expert.specialisms.map((spec, sIdx) => (
                        <span key={sIdx} className="bg-blue-50 text-brand-blue text-[10px] font-semibold px-2.5 py-1 rounded-md">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & Booking Action */}
                <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Video Consultation</p>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-3xl font-extrabold text-brand-navy">
                        £{consultType === 'sliding' ? '15' : expert.price}
                      </span>
                      <span className="text-xs text-gray-500">/ 60 mins</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1">
                      {consultType === 'sliding' ? 'Subsidized sliding-scale rate applied' : 'Sliding scale available for low income families'}
                    </p>
                  </div>

                  <button className="mt-6 w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-xs transition-all shadow flex items-center justify-center space-x-2">
                    <span>📅 Book Consultation</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </section>

      {/* Sliding-Scale Consultation Support Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-brand-navy">Sliding-Scale Consultation Support</h3>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe every child is entitled to support, regardless of their family&apos;s financial situation. If you are currently receiving Universal Credit, Carer&apos;s Allowance, or are on a low income, you can apply for our heavily subsidized sliding-scale consultation rate starting at £10 per session.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center space-x-2 bg-brand-navy hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl text-xs transition-colors shadow">
              <span>Apply for sliding scale rate</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}