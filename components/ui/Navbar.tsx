'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Guidance Hub', href: '/guidance' },
    { name: 'Book an Expert', href: '/consultation' },
    { name: 'About EHCPs', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Volunteer', href: '/volunteer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Top Banner */}
      <div className="bg-brand-navy text-white text-[11px] py-1.5 px-4 text-center font-medium flex items-center justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span>Direct Access to Licensed UK Social Work Consultants</span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/guidance" className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white font-black text-xs sm:text-sm shadow">
            EH
          </div>
          <div>
            <span className="text-base sm:text-lg font-extrabold text-brand-navy tracking-tight block leading-none">
              EHCP Helper
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium block mt-0.5">
              UK Special Needs Navigator
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link
            href="/sign-in"
            className="hidden sm:inline-block text-xs font-bold text-gray-700 hover:text-brand-orange"
          >
            Member Sign In
          </Link>

          {/* Compact CTA Button for Mobile / Full for Desktop */}
          <Link
            href="/consultation"
            className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-[11px] sm:text-xs transition-colors shadow flex items-center space-x-1.5 whitespace-nowrap"
          >
            <span>📅</span>
            <span className="hidden xs:inline sm:inline">Book 1:1 Social Worker</span>
            <span className="xs:hidden sm:hidden">Book 1:1</span>
          </Link>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 text-xs font-bold text-brand-navy bg-gray-50 rounded-xl"
            >
              Member Sign In
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 text-xs font-bold text-white bg-brand-orange rounded-xl"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}