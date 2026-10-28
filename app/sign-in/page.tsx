'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-brand-navy text-white font-black text-lg rounded-xl flex items-center justify-center mx-auto shadow-sm">
            EH
          </div>
          <h1 className="text-2xl font-extrabold text-brand-navy">Member Sign In</h1>
          <p className="text-xs text-gray-500">
            Access your saved EHCP guides, consultation bookings, and custom roadmaps.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center space-y-3">
            <div className="text-2xl">🔑</div>
            <h3 className="font-bold text-sm">Welcome back!</h3>
            <p className="text-xs text-green-700">
              Successfully signed in as <strong>{email}</strong>.
            </p>
            <Link
              href="/guidance"
              className="inline-block mt-2 bg-brand-navy text-white px-5 py-2 rounded-xl text-xs font-semibold"
            >
              Go to Guidance Hub
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-gray-600 uppercase">
                  Password
                </label>
                <a href="#" className="text-[11px] text-brand-orange hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy hover:bg-blue-900 text-white font-semibold py-3.5 rounded-xl text-xs transition-colors shadow-md mt-2"
            >
              Sign In to Your Account
            </button>
          </form>
        )}

        {/* Footer Link */}
        <div className="text-center pt-4 border-t border-gray-100 text-xs text-gray-600">
          Don&apos;t have an account yet?{' '}
          <Link href="/sign-up" className="font-bold text-brand-orange hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}