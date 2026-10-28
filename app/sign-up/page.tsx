'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Parent / Carer');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-brand-orange text-white font-black text-lg rounded-xl flex items-center justify-center mx-auto shadow-sm">
            EH
          </div>
          <h1 className="text-2xl font-extrabold text-brand-navy">Create Member Account</h1>
          <p className="text-xs text-gray-500">
            Join the EHCP Helper community for free self-help tools and expert advocacy access.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center space-y-3">
            <div className="text-2xl">🎉</div>
            <h3 className="font-bold text-sm">Account Created Successfully!</h3>
            <p className="text-xs text-green-700">
              Welcome to the community, <strong>{fullName}</strong>. A verification email has been sent to <strong>{email}</strong>.
            </p>
            <Link
              href="/guidance"
              className="inline-block mt-2 bg-brand-orange text-white px-5 py-2 rounded-xl text-xs font-semibold"
            >
              Explore Guidance Hub
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Sarah Jenkins"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                I am a...
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option>Parent / Carer</option>
                <option>Young Person (16-25)</option>
                <option>SEND Advocate / Volunteer</option>
                <option>Social Worker / Education Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl text-xs transition-colors shadow-md mt-2"
            >
              Create Free Account
            </button>
          </form>
        )}

        {/* Footer Link */}
        <div className="text-center pt-4 border-t border-gray-100 text-xs text-gray-600">
          Already have an account?{' '}
          <Link href="/sign-in" className="font-bold text-brand-navy hover:underline">
            Member Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}