'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/sLogo.png';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-5 py-12 bg-gray-100 dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between">
        {/* Logo & Contact Info */}
        <div className="flex-1 space-y-4">
          <Link href="/" className="w-fit">
            <div className="relative flex items-center h-12 w-fit">
              <p className="text-black dark:text-white text-lg font-medium z-10">
                EcoRoots 
              </p>
              <Image
                src={logo}
                alt="logo"
                className="absolute left-[80%] -top-1 h-12 w-12"
              />
            </div>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Building a greener tomorrow through shared sustainable ideas.
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>Email: support@ecoroots.com</p>
            <p>Phone: +8801751499625</p>
          </div>
        </div>

        {/* Navigation and Legal */}
        <div className="flex-1 grid grid-cols-2 gap-10">
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-100">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="hover:text-primary">
                  Ideas
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-100">
              Terms
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
                <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
