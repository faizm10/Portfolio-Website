
//src/app/components/Footer/page.tsx
import React from 'react';
import Link from "next/link"; 

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6" style={{background: 'linear-gradient(to bottom, #3573cf, #feb47b)'}}>
      <div className="flex justify-center items-center space-x-4">
        <Link href="https://github.com/faizm10">
          <span
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img src="/images/github.png" alt="GitHub" className="w-8 h-8" />
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/faiz-mustansar-a9a435213/">
          <span
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </span>
        </Link>
        <Link href="https://www.instagram.com/_faiz_m_10/">
          <span
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </span>
        </Link>
        <Link href="mailto:faizmustansar10@gmail.com">
          <span
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img src="/images/gmail.png" alt="Gmail" className="w-8 h-8" />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
