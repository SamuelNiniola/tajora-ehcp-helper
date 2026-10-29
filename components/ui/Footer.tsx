import Link from "next/link";

import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* Col 1: Brand info */}
        <div className="md:col-span-4 space-y-4">
          <Link href="/guidance" className="flex items-center hover:opacity-90 transition-opacity">
            <div className="relative w-28 h-10 sm:w-36 sm:h-12 shrink-0">
              <Image
                src="https://tajora.co.uk/wp-content/uploads/2026/10/tajora-up-w-2b77d4.svg"
                alt="Tajora Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p className="text-gray-300 text-xs leading-relaxed pr-6">
            Providing high-quality, free and accessible special needs advocacy resources across the UK.
          </p>
          <p className="text-[10px] text-gray-400">
            &copy; 2026 Tajora EHCP Helper Ltd. All rights reserved.
          </p>
        </div>

        {/* Col 2: Free Guidance */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">Free Guidance</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="/guidance" className="hover:text-white">EHCP Assessment Request</Link></li>
            <li><Link href="/guidance" className="hover:text-white">Drafting Section F & I</Link></li>
            <li><Link href="/guidance" className="hover:text-white">DLA Application Tips</Link></li>
            <li><Link href="/guidance" className="hover:text-white">Appealing LA decisions</Link></li>
          </ul>
        </div>

        {/* Col 3: Our Services */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">Our Services</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="/consultation" className="hover:text-white">Book 1:1 Social Worker</Link></li>
            <li><Link href="/consultation" className="hover:text-white">Document Review Service</Link></li>
            <li><Link href="/consultation" className="hover:text-white">Tribunal Prep Package</Link></li>
            <li><Link href="/sliding-scale" className="hover:text-white">Sliding Scale Assistance</Link></li>
          </ul>
        </div>

        {/* Col 4: Legal & Safety */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">Legal & Safety</h4>
          <p className="text-[11px] text-gray-300 leading-relaxed">
            We are an independent advocacy and social work network. We are not a public body or affiliated with local authorities.
          </p>
          <div className="flex space-x-3 pt-2 text-sm">
            <span className="cursor-pointer hover:opacity-80">🛡️</span>
            <span className="cursor-pointer hover:opacity-80">🔒</span>
            <span className="cursor-pointer hover:opacity-80">📄</span>
          </div>
        </div>

      </div>
    </footer>
  );
}