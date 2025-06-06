'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoIosCall } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/achievers', label: 'Achievers' },
    { href: '/announcements', label: 'Announcements' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(href);
};


  return (
    <header>
      {/* 🌟 Top Navbar (Logo + Nav links) */}
      <nav className="bg-white flex w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-b border-gray-300 z-50">
        <div className="flex items-center w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 p-2 border-r border-gray-300">
            <Image
              src="/logo/logo.png"
              alt="Happy Hours School Logo"
              width={120}
              height={120}
              className="object-contain min-w-[70px]"
              unoptimized
            />
          </Link>

          {/* Right Side */}
          <div className="flex flex-col w-full h-full justify-center">
            {/* Top Bar (Desktop Only) */}
            <div className="bg-[#bf213e] text-white text-sm py-2 px-4 h-[40%] flex justify-end items-center space-x-2 lg:space-x-6 pe-5 lg:pe-10">

              <div className="flex space-x-3 lg:space-x-8 ">

                <Link href="tel:+911234567890" className="rounded-full flex items-center gap-2">
                  <span className='p-1 flex bg-white rounded-full'>
                    <IoIosCall className='size-5 text-[#bf213e]' />
                  </span>
                  <span className='max-lg:hidden font-semibold'>+911234567890</span>
                </Link>

                <Link href="mailto:info@happyhoursschool.com" className="p-1.5  rounded-full flex items-center gap-2">
                  <span className='p-1 flex bg-white rounded-full'>
                    <TbMailFilled className='size-5 text-[#bf213e]' />
                  </span>
                  <span className='max-lg:hidden font-semibold'>info@happyhoursschool.com</span>
                </Link>

                {/* <Link href="https://maps.app.goo.gl/eEzfFWD4BFQtXPw97https://maps.app.goo.gl/eEzfFWD4BFQtXPw97" target="_blank" className="p-1.5  rounded-full  flex items-center gap-2">
                  <span className='p-1 flex bg-white rounded-full'>
                    <IoLocationSharp className='size-5 text-[#bf213e]' />
                  </span>
                  <span>Nimbahera Road, Raila (Bhilwara)</span>
                </Link> */}
              </div>
              <Link href='/' className="btn rounded-tl-2xl rounded-br-2xl rounded-br-2xl-sm bg-white text-black border-0 shadow-none hover:scale-95 transition-all duration-200">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                LOGIN
              </Link>
            </div>

            {/* Main Nav Links */}
            <div className="flex items-center h-full justify-end lg:justify-center w-full px-4 py-2 pe-5 lg:pe-10">
              {/* Desktop nav */}
              <ul className="hidden lg:flex space-x-10 text-lg font-semibold">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#bf213e]  after:transition-transform after:duration-300 ${isActive(href)
                          ? 'text-[#bf213e] after:scale-x-100'
                          : 'text-black after:scale-x-0 hover:text-[#bf213e] hover:after:scale-x-100'
                        }`}
                    >

                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <label htmlFor="mobile-drawer" className="btn rounded-tl-2xl rounded-br-2xl bg-white border-0 shadow-none p-0 hover:bg-gray-200 text-[#bf213e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7 cursor-pointer text-[#bf213e]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 📱 Drawer only for mobile screens */}
      <div className="drawer drawer-start lg:hidden">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side z-50">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>

          <ul className="menu relative p-4 w-80 bg-white min-h-full text-[#bf213e] space-y-2">
            {/* Close button */}
            <label
              htmlFor="mobile-drawer"
              className="absolute top-4 right-4 cursor-pointer text-2xl text-[#bf213e] font-bold"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
            </label>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 p-2">
              <Image
                src="/logo/logo.png"
                alt="Happy Hours School Logo"
                width={50}
                height={50}
                className="object-contain min-w-[70px]"
                unoptimized
              />
            </Link>

            {/* Nav Items */}
            {navItems.map(({ href, label }) => (
              <li
                key={href}
                className="uppercase mlb mb-0 py-3 text-lg font-bold border-b border-gray-300 last:border-b-0"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
  );
};
