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
        </div>

        {/* Col 2: Free Guidance */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="/about" className="hover:text-white">About Tajora</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/guidance" className="hover:text-white">Privacy & Terms</Link></li>
            <li><Link href="/ehcp-assessment" className="hover:text-white">EHCP Assessment Request</Link></li>

          </ul>
        </div>

        {/* Col 3: Our Services */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">Contact Info</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="#" className="hover:text-white font-bold text-xs">General Enquiries</Link></li>
            <li><Link href="mailto:contact@tajora.co.uk" className="hover:text-white">contact@tajora.co.uk</Link></li>
            <li><Link href="#" className="hover:text-white font-bold text-xs">Official Charity</Link></li>
            <li><Link href="/sliding-scale" className="hover:text-white">Her Special Strength</Link></li>
          </ul>
        </div>

        {/* Col 4: Legal & Safety */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white">Legal & Safety</h4>
          <p className="text-[11px] text-gray-300 leading-relaxed">
            We are an independent advocacy and social work network. We are not a public body or affiliated with local authorities.
          </p>
          {/* <div className="flex space-x-3 pt-2 text-sm">
            <span className="cursor-pointer hover:opacity-80">🛡️</span>
            <span className="cursor-pointer hover:opacity-80">🔒</span>
            <span className="cursor-pointer hover:opacity-80">📄</span>
          </div> */}
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400 text-center">
            &copy; 2026 Tajora EHCP Helper Ltd. All rights reserved.
          </p>
      </div>
    </footer>
  );
}