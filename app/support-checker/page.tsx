'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SupportCheckerPage() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState('England (SEND Code of Practice)');
  const [stage, setStage] = useState('Thinking about requesting an EHCP assessment');
  const [concern, setConcern] = useState('School refusing to support or apply');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  return (
    <div className="space-y-12 pb-20">
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-orange-50 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold">
            Interactive Diagnostic Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            SEND & EHCP Support Readiness Checker
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Find out where your child stands in 3 quick steps and generate a customized action plan tailored to your local authority and situation.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
          {!completed ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
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
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
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
                className="w-full bg-brand-navy hover:bg-blue-900 text-white font-semibold py-3.5 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center space-x-2"
              >
                <span>Get My Custom Roadmap</span>
                <span>→</span>
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl space-y-3">
                <span className="text-xs font-bold text-brand-orange uppercase">Your Diagnostic Result</span>
                <h3 className="text-xl font-extrabold text-brand-navy">Action Plan: EHCP Assessment Trigger</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Based on your location (<strong>{region}</strong>) and current status (<strong>{stage}</strong>), parents do not need to wait for school consent to request an assessment directly from the Local Authority.
                </p>
              </div>

              <div className="space-y-3 text-xs text-gray-700">
                <h4 className="font-bold text-brand-navy">Recommended Next Steps:</h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Download our free draft letter template for requesting an assessment.</li>
                  <li>Gather medical, therapist, and school report evidence.</li>
                  <li>Consider a 1:1 case review with a SEND Social Worker to draft Section F provision requirements.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <Link
                  href="/guidance"
                  className="flex-1 text-center bg-brand-orange hover:bg-orange-600 text-white font-semibold py-3 rounded-xl text-xs transition-all shadow"
                >
                  View Assessment Templates
                </Link>
                <Link
                  href="/consultation"
                  className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-brand-navy font-semibold py-3 rounded-xl text-xs transition-all"
                >
                  Book 1:1 Social Worker
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}