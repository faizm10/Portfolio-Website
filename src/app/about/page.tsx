"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Accordion, AccordionItem, Card, CardBody } from "@nextui-org/react";
import ExperienceSection from "../experience/page";
const AboutMeSection: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="bg-yellow-400 w-3/5 p-4 text-white flex flex-col justify-center items-center">
          <div className="align-middle w-3/4">
            <h2 className="text-8xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-6 font-sans">
              Hi, I'm Faiz, a Software Developer with a passion for creating
              innovative solutions. With a deep interest in AI and web
              development, I aim to apply my full-stack development skills in
              real-world settings. Originally from Scarborough, I now live in
              Brampton and commute to university five days a week. In addition
              to my technical pursuits, I enjoy playing and watching sports,
              further enriching my dynamic lifestyle
            </p>
            <div className=" gap-8 flex flex-row text-black">
              <Accordion selectionMode="multiple" variant="splitted">
                <AccordionItem aria-label="Education" title="Education">
                  <p>
                    Currently pursuing Bachelor of Computing Honours Degree,
                    Specializing in Computer Science with a Minor in Sports &
                    Event Management
                  </p>
                  <p>
                    Some of my relevant coursework:
                    <br />
                    CIS2910 - Discrete Mathematics in Computing II
                    <br />
                    CIS2500 - Intermediate Programming
                    <br />
                    STAT2400 - Statistics I
                    <br />
                    MATH1160 - Linear Algebra I
                    <br />
                    CIS1050 - Web Design & Development
                  </p>
                </AccordionItem>

                <AccordionItem
                  aria-label="Extracurricular Activities"
                  title="Extracurricular Activities"
                >
                  <p>
                    Intramurals: Table-Tennis, Badminton, Soccer, and
                    Basketball.
                  </p>
                  <p>
                    Drop-In Sports: Table Tennis, Badminton, Basketball, and
                    Soccer.
                  </p>
                </AccordionItem>

                <AccordionItem
                  aria-label="Clubs and Organizations"
                  title="Clubs & Organizations"
                >
                  <p>
                    SOCIS (Society of Computing and Information Science) -
                    Member
                  </p>
                  <p>Google Developer Student Club - Member</p>
                  <p>Guelph MSA (Muslim Student Association) - Member</p>
                  <p>Engineering Ambition - Software Developer</p>
                  <p>Muslims in Tech - Co-Founder & Software Engineer</p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="bg-blue-300 w-2/5 p-4 text-white flex justify-center items-center">
          <div className="bg-white p-6 shadow-lg flex flex-col items-center">
            <div className="flex flex-col items-center">
              <img src="./images/me/aboutme.jpg" alt="Profile Picture" />
              <p className="text-gray-800 text-lg font-bold">Faiz Mustansar</p>
            </div>
          </div>
        </div>
      </div>

      <ExperienceSection />
    </>
  );
};

export default AboutMeSection;
