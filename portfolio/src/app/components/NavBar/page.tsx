// src/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="flex justify-center items-center bg-blue-900 p-2 rounded-full w-25 h-25">
  <Image
    src="/images/logo.webp"
    alt="Logo"
    width={120}
    height={120}
    className="rounded-full object-cover"
  />
</div>

      <div className="space-x-6 text-2xl">
        <Link href="#home" passHref><span className="hover:text-gray-300 cursor-pointer">Home</span></Link>
        <Link href="#about" passHref><span className="hover:text-gray-300 cursor-pointer">About</span></Link>
        <Link href="#projects" passHref><span className="hover:text-gray-300 cursor-pointer">Projects</span></Link>
        <Link href="#contact" passHref><span className="hover:text-gray-300 cursor-pointer">Contact</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;
