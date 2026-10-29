'use client';

import { useState } from 'react';
import Link from "next/link";

export default function GuidanceHubPage() {
  const [completed, setCompleted] = useState(false);
  const [region, setRegion] = useState('England (SEND Code of Practice)');
  const [stage, setStage] = useState('Thinking about requesting an EHCP assessment');
  const [concern, setConcern] = useState('School refusing to support or apply');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  const guidanceCards = [
    {
      title: "EHCP Assessments",
      desc: "How to trigger an EH Needs Assessment, draft letters, and gather school evidence.",
      slug: "ehcp-assessments",
    },
    {
      title: "DLA & Benefits",
      desc: "Step-by-step guidance on filling Disability Living Allowance and Carer's Allowance forms.",
      slug: "dla-benefits",
    },
    {
      title: "Care Hours & Social Care",
      desc: "How to request a Children's Social Care Assessment and secure overnight respite or direct payments.",
      slug: "care-hours",
    },
    {
      title: "Appeals & Tribunals",
      desc: "Appealing a 'refusal to assess' or content of Section I (school placement) at SEND Tribunal.",
      slug: "appeals-tribunals",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section with Support Checker Widget */}
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              <span>Fully aligned with SEND Code of Practice 2015</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              EHCPs, DLA and Care Hours explained without the jargon
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We help parents, carers, and guardians figure out what support, funding, and education hours their child is legally entitled to in the United Kingdom.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xl font-bold text-brand-navy">Free</p>
                <p className="text-xs text-gray-500 font-medium">Self-help guidance</p>
              </div>
              <div>
                <p className="text-xl font-bold text-brand-navy">100%</p>
                <p className="text-xs text-gray-500 font-medium">Legally checked</p>
              </div>
              <div>
                <p className="text-xl font-bold text-brand-navy">SEND</p>
                <p className="text-xs text-gray-500 font-medium">Expert social workers</p>
              </div>
            </div>
          </div>

          {/* Right Support Checker Widget */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center space-x-2 mb-2 text-brand-navy font-bold text-sm">
              <span>✓ Support Checker</span>
            </div>
            <p className="text-xs text-gray-500 mb-6">Find out where your child stands in 3 quick steps.</p>

            {!completed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    1. Where do you live in the UK?
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option>England (SEND Code of Practice)</option>
                    <option>Scotland (ALN System)</option>
                    <option>Wales (ALN Framework)</option>
                    <option>Northern Ireland</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    2. What stage of support are you in?
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option>Thinking about requesting an EHCP assessment</option>
                    <option>Assessment request submitted / awaiting decision</option>
                    <option>Received a draft EHCP (Checking Section F & I)</option>
                    <option>Refusal to assess / Refusal to issue plan</option>
                    <option>Preparing for Annual Review or Tribunal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    3. What is your biggest immediate concern?
                  </label>
                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option>School refusing to support or apply</option>
                    <option>Local authority exceeding statutory 6-week deadline</option>
                    <option>Unsuitable school placement offered (Section I)</option>
                    <option>Lack of social care / overnight respite provision</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-navy hover:bg-brand-orange text-white font-semibold py-3.5 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center space-x-2 cursor-pointer mt-2"
                >
                  <span>Get My Custom Roadmap</span>
                  <span>→</span>
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl space-y-3">
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Your Diagnostic Result</span>
                  <h3 className="text-lg font-extrabold text-brand-navy leading-snug">Action Plan: EHCP Assessment Trigger</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Based on your location (<strong>{region}</strong>) and current status (<strong>{stage}</strong>), parents do not need to wait for school consent to request an assessment directly from the Local Authority.
                  </p>
                  <p className="text-[11px] text-gray-500 italic border-t border-blue-100 pt-2">
                    Primary concern noted: {concern}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-gray-700">
                  <h4 className="font-bold text-brand-navy">Recommended Next Steps:</h4>
                  <ul className="space-y-1.5 list-disc pl-4 text-gray-600">
                    <li>Download our free draft letter template for requesting an assessment.</li>
                    <li>Gather medical, therapist, and school report evidence.</li>
                    <li>Consider a 1:1 case review with a SEND Social Worker to draft Section F provision requirements.</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
                  <Link
                    href="/guidance/ehcp-assessments"
                    className="flex-1 text-center bg-brand-orange hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-xs transition-all shadow"
                  >
                    View Assessment Templates
                  </Link>
                  <Link
                    href="/consultation"
                    className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-brand-navy font-semibold py-2.5 rounded-xl text-xs transition-all"
                  >
                    Book 1:1 Social Worker
                  </Link>
                </div>

                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => setCompleted(false)}
                    className="text-[11px] text-gray-500 hover:text-brand-orange underline font-medium cursor-pointer"
                  >
                    ← Start over with different answers
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Free Self-Help Guidance Hub Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-brand-navy">Free Self-Help Guidance Hub</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Expertly curated resources to help you understand your legal rights and navigate SEND processes without expensive lawyers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guidanceCards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center font-bold mb-4 border border-orange-100">
                  📄
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-orange transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>
              <Link href={`/guidance/${card.slug}`} className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center">
                Read Guide →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Template Letters Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between shadow-sm">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center font-bold">✉️</div>
            <div>
              <h4 className="font-bold text-brand-navy">Need to write to your Local Authority?</h4>
              <p className="text-xs text-gray-500">Download our free template letters checked by SEND legal experts.</p>
            </div>
          </div>
          <Link href="/guidance/ehcp-assessments" className="bg-brand-navy hover:bg-brand-orange text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-colors whitespace-nowrap">
            Get Template Letters
          </Link>
        </div>
      </section>

      {/* Professional Social Worker Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-6 text-center border border-orange-100">
            <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              👨‍👩‍👦
            </div>
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm">
              Independent Expert Advice
            </span>
            <h4 className="font-bold text-brand-navy mt-3">Social Worker led consultations</h4>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-brand-orange px-2.5 py-1 rounded-md">
              Paid 1:1 Social Work Support
            </span>
            <h3 className="text-3xl font-extrabold text-brand-navy">Need a Professional Social Worker in Your Corner?</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              While our resources are and always will be 100% free, sometimes you need an expert to read draft plans, write specific appeals, or represent you. Book a 1:1 video consultation with an experienced SEND Social Work Consultant.
            </p>

            <ul className="space-y-2 text-xs text-gray-700 pt-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Expert Case Review:</strong> We analyze your draft EHCP or refusal letter and give actionable feedback.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Personalized Social Care Assessment prep:</strong> Prepare for children&apos;s services visits with confidence and structure.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Transparent & Affordable:</strong> Clear hourly pricing with sliding-scale options for low-income families.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/consultation" className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl text-xs transition-all shadow">
                Book a 1:1 Consultation
              </Link>
              <Link href="/consultation" className="bg-gray-100 hover:bg-gray-200 text-brand-navy font-semibold px-6 py-3 rounded-xl text-xs transition-all">
                Meet Our Social Work team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}