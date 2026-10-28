import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top utility alert bar */}
      <div className="bg-brand-navy text-white text-[11px] py-1 px-4 sm:px-6 lg:px-8 text-center sm:text-left flex items-center justify-between">
        <span>🟢 Direct Access to Licensed UK Social Work Consultants</span>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="hover:underline cursor-pointer">Translate</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">High Contrast</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/guidance" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white font-black text-sm shadow">
            EH
          </div>
          <div>
            <span className="text-lg font-extrabold text-brand-navy tracking-tight block leading-none">
              EHCP Helper
            </span>
            <span className="text-[10px] text-gray-500 font-medium">UK Special Needs Navigator</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-gray-700">
          <Link href="/guidance" className="hover:text-brand-orange transition-colors">Guidance Hub</Link>
          <Link href="/consultation" className="hover:text-brand-orange transition-colors">Book an Expert</Link>
          <Link href="/about" className="hover:text-brand-orange transition-colors">About EHCPs</Link>          
          <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
          <Link href="/volunteer" className="hover:text-brand-orange transition-colors">Volunteer</Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/sign-in" className="hidden sm:inline-block text-xs font-bold text-gray-700 hover:text-brand-orange">
            Member Sign In
          </Link>
          <Link href="/consultation" className="bg-brand-orange hover:bg-orange-600 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center space-x-2">
            <span>📅</span>
            <span>Book 1:1 Social Worker</span>
          </Link>
        </div>
      </div>
    </header>
  );
}