"use client";
import React from "react";
import Image from "next/image";
import Typing from "react-typing-effect";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/constants";

const LandingPage = () => {
  return (
    <>
      <div
        className="flex flex-col min-h-screen"
        style={{
          background: "#fdddb7",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Container */}
        <div className="flex-1 flex items-center justify-center flex-col text-center p-4 sm:p-6">
          <div className="mt-4 sm:mt-6">
            {/* Responsive Profile Image */}
            <Image
              src="/images/me/profilepic.webp"
              alt="Software Developer"
              width={150}
              height={150}
              className="rounded-full object-cover sm:w-48 sm:h-48 w-36 h-36"
            />
          </div>
          {/* Name and Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-black">
            Faiz Mustansar
          </h1>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            {SOCIAL_LINKS.map((link, index) => (
              <Link key={index} href={link.href}>
                <span
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="hover:opacity-75 transition-opacity duration-300"
                >
                  <img
                    src={link.imgSrc}
                    alt={link.imgAlt}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                </span>
              </Link>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2.5 p-5">
            <Typing
              text={["Hi there! I'm Faiz", "I'm a Software Developer"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
            />
          </h1>

          <p className="text-md sm:text-lg text-gray-700 max-w-md sm:max-w-2xl mb-4">
            I'm a second-year <strong>Computer Science</strong> student at the{" "}
            <strong>University of Guelph</strong>, currently seeking{" "}
            <strong>2025 Summer SWE internship opportunities</strong> 🌱
          </p>

          {/* Current and Previous Section */}
          <div className="mb-4 max-w-md sm:max-w-2xl w-full">
            {/* Currently Section */}
            <div className="mb-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2.5">
                Currently...
              </h2>
              <div className="flex justify-center items-center gap-2">
                <Chip color="primary" size="lg" variant="shadow">
                  Teaching Assistant @ University of Guelph
                </Chip>
                {/* <span className="text-sm sm:text-md font-medium text-gray-600">
                  @ <strong>University of Guelph</strong>
                </span> */}
              </div>
            </div>

            {/* Previously Section */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-2.5">
                Previously...
              </h2>
              <div className="flex justify-center items-center gap-2">
                <Chip color="primary" size="lg" variant="shadow">
                  Undergraduate Research Assistant @ University of Guelph
                </Chip>
                {/* <span className="text-sm sm:text-md font-medium text-gray-600">
                  @ <strong>University of Guelph</strong>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
