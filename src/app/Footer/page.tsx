import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full text-white py-4 bg-white"
      style={{
        // background: "linear-gradient(to bottom, #feb47b, #3573cf)",
        position: "static",
        bottom: 0,
      }}
    >
      <div className="flex justify-center items-center space-x-4">
        <Link href="https://github.com/faizm10">
          <span
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="/images/socials/github.png"
              alt="GitHub"
              className="w-8 h-8"
            />
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/faiz-mustansar-a9a435213/">
          <span
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="/images/socials/linkedin.png"
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
              src="/images/socials/instagram.png"
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
            <img
              src="/images/socials/gmail.png"
              alt="Gmail"
              className="w-8 h-8"
            />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;