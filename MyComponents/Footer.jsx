import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    // Main footer container with dark background and white text
    <footer
      className="relative bg-white text-white mt-12 py-12 md:py-16 overflow-hidden bg-no-repeat bg-cover bg-top"
      style={{ backgroundImage: 'url("/img/f.png")' }}
    >

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-20 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 md:gap-12 mb-8">
          {/* Left Section: School Info & Socials */}
          <div className=" text-center lg:text-left mb-8 lg:mb-0">
            <Link href="/" className=" inline-flex rounded-full p-4 items-center space-x-2 bg-white">
              <Image
                src="/logo/logo.png"
                alt="Happy Hours School Logo"
                width={120}
                height={120}
                className="object-contain min-w-[70px]"
                unoptimized
              />
            </Link>

          </div>

          {/* Navigation Links */}
          <div className="lg:w-3/5 flex items-center justify-center lg:justify-start gap-x-8 gap-y-4">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/achievers', label: 'Achievers' },
              { href: '/announcements', label: 'Announcements' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/team', label: 'Our Team' },
              { href: '/contact', label: 'Contact' },
              { href: '/privacy', label: 'Privacy Policies' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-white/65 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Section: Email Signup */}
          <div className="lg:w-1/4 text-center lg:text-right space-y-2">
            <h4 className="text-white font-semibold text-lg">Contact</h4>
            <div className="flex flex-col gap-1 text-white/70">
              <a href="tel:+919999999999" className="hover:text-white transition-colors duration-300">
                📞 +91 99999 99999
              </a>
              <a
                href="https://maps.google.com/?q=Happy+Hours+School+Bhilwara"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                📍 Bhilwara, Rajasthan
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Policies */}
        <div className="border-t border-gray-100 pt-6 mt-6 text-sm opacity-80">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Happy Hours School. All rights reserved.
          </p>
          <p className="mb-2">
            2802 Wetmore Ave, Everett, WA 98201 (Placeholder Address)
          </p>
          <div className="flex justify-center lg:justify-center gap-4">
            <Link href="/privacy" className="hover:underline transition-colors duration-200"></Link>
            <Link href="/cookie-policies" className="hover:underline transition-colors duration-200">Cookie Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
