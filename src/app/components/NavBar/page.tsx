// src/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <Link href="/">
        <span className="flex items-center">
          <Image
            src="/images/logo.webp" // Adjust the path to your logo
            alt="Logo"
            width={40} // Adjust the size to match your design
            height={40} // Adjust the size to match your design
          />
          <span className="text-xl font-bold ml-3">FM</span>
        </span>
      </Link>

      <div className="space-x-4 text-lg">
        <Link href="/">
          <span className="hover:text-gray-300 cursor-pointer">Home</span>
        </Link>
        <Link href="/about">
          <span className="hover:text-gray-300 cursor-pointer">About</span>
        </Link>
        <Link href="/components/projects">
          <span className="hover:text-gray-300 cursor-pointer">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-gray-300 cursor-pointer">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
