'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EHCPAssessmentsPage() {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (templateName: string) => {
    setDownloaded(templateName);
    // Simulate template download action
    setTimeout(() => setDownloaded(null), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Breadcrumb / Back Link */}
      <div>
        <Link href="/guidance" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center space-x-1">
          <span>← Back to Guidance Hub</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-brand-blue px-3 py-1 rounded-md">
          Statutory Guidance • SEND Code of Practice 2015
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
          EHCP Assessments & Draft Letter Templates
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
          Parents and legal guardians have the direct statutory right under Section 36 of the Children and Families Act 2014 to request an Education, Health and Care Needs Assessment (EHCP) independently—even if the school disagrees.
        </p>
      </div>

      {/* Success Notification Banner */}
      {downloaded && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-xs flex items-center justify-between shadow-sm">
          <span>✅ Successfully downloaded: <strong>{downloaded}</strong>. Check your downloads folder.</span>
          <span className="text-green-600 font-bold">PDF / Docx Ready</span>
        </div>
      )}

      {/* Templates Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold text-brand-navy">Free Downloadable Request Letters</h2>
        <p className="text-xs text-gray-500">
          Click any template below to download legal-grade letters prepared by specialist SEND consultants.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Template Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center font-bold">
                📄
              </div>
              <h3 className="font-bold text-brand-navy text-sm sm:text-base">
                Initial EHCP Needs Assessment Request Letter
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Use this template to formally request your Local Authority to initiate an Education, Health and Care Needs Assessment for your child. Fully aligned with statutory 6-week decision timelines.
              </p>
            </div>
            <button
              onClick={() => handleDownload('Initial EHCP Assessment Request Letter')}
              className="w-full bg-brand-navy hover:bg-brand-orange text-white font-semibold py-2.5 rounded-xl text-xs transition-colors shadow flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Download Template (.docx)</span>
              <span>↓</span>
            </button>
          </div>

          {/* Template Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center font-bold">
                ⚖️
              </div>
              <h3 className="font-bold text-brand-navy text-sm sm:text-base">
                Response Letter to 'Refusal to Assess'
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                If your Local Authority refuses to assess your child, use this pre-formatted letter to challenge their decision within the statutory pre-mediation window.
              </p>
            </div>
            <button
              onClick={() => handleDownload('Refusal to Assess Appeal Letter')}
              className="w-full bg-brand-navy hover:bg-brand-orange text-white font-semibold py-2.5 rounded-xl text-xs transition-colors shadow flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Download Template (.docx)</span>
              <span>↓</span>
            </button>
          </div>

        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-extrabold text-brand-navy">Step-by-Step Assessment Process</h2>
        
        <div className="space-y-4 text-xs text-gray-700">
          <div className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold shrink-0">1</span>
            <div>
              <h4 className="font-bold text-brand-navy text-sm">Gather Evidence</h4>
              <p className="text-gray-600 mt-0.5">Collect school reports, pediatrician letters, speech and language therapy notes, and your own family impact statement.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold shrink-0">2</span>
            <div>
              <h4 className="font-bold text-brand-navy text-sm">Submit to the Local Authority SEND Team</h4>
              <p className="text-gray-600 mt-0.5">Send your request letter via recorded delivery or official email to your council's Director of Children's Services.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold shrink-0">3</span>
            <div>
              <h4 className="font-bold text-brand-navy text-sm">The 6-Week Statutory Window</h4>
              <p className="text-gray-600 mt-0.5">The council has exactly 6 weeks from receipt to review your application and inform you whether they agree to assess.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className=" bg-brand-navy text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-bold">Need a professional social worker to review your letter?</h3>
          <p className="text-xs text-blue-200">Book a 1:1 case consultation to ensure your application meets all legal criteria.</p>
        </div>
        <Link
          href="/consultation"
          className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition-all shadow whitespace-nowrap"
        >
          Book 1:1 Social Worker
        </Link>
      </section>

    </div>
  );
}