import React from "react";
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBG";
const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <ParticlesBackground/> */}
        <div
          className="flex-1 flex items-center justify-center flex-col text-center"
          style={{
            background: "linear-gradient(to bottom, #3573cf, #feb47b)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundImage: 'url(./images/extra/landingpage.webp)'
          }}
        >
          <div className="mt-6">
            <Image
              src="/images/profilepic.webp"
              alt="Software Developer"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">Faiz Mustansar</h1>
          <h1 className="text-medium font-bold mb-6">Software Developer</h1>
          {/* Social Media Links */}
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
                  className="w-8 h-8 rounded-full object-cover"
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
                  className="w-8 h-8 rounded-full object-cover"
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
                  src="/images/socials/ig.png"
                  alt="Instagram"
                  className="w-8 h-8 rounded-full object-cover"
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
                  className="w-8 h-8 rounded-full object-cover"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
