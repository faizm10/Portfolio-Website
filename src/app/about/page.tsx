"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Code,
  Divider,
} from "@nextui-org/react";
import ExperienceSection from "../experience/page";
const AboutMeSection: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div
          className=" w-3/5 p-4 text-black flex flex-col justify-center items-center  "
          style={{ backgroundColor: "#fdddb7" }}
        >
          <div className="align-middle w-3/4">
            <h2 className="text-6xl font-bold mb-4 hover:text-9xl duration-150 hover:drop-shadow-2xl">
              About Me
            </h2>
            <p className="text-lg mb-6 font-sans">
              Hi, I'm Faiz, a software developer passionate about creating
              innovative solutions. With a strong interest in AI and web
              development, I aim to leverage my full-stack development skills in
              real-world applications. Beyond my technical pursuits, I'm an avid
              sports fan, enjoying playing and watching soccer, basketball,
              badminton, and more!
            </p>
            <p className="text-lg mb-6 font-sans">
              Currently in my second year at the University of Guelph, I'm
              pursuing a Computer Science major with a minor in Sports & Event
              Management. My proficiency in various programming languages and
              web development tools allows me to bring a diverse skillset to the
              table. As an Undergraduate Research Assistant working with
              Professor Nicole, I'm developing two chatbots for MCS2020 and
              MGMT1000. In addition, I'm working on several side projects that
              showcase my technical expertise while simultaneously allowing me
              to learn new languages and tools.
            </p>
          </div>
        </div>

        <div
          className=" w-2/5 p-4 text-white content-center justify-center items-center"
          style={{ backgroundColor: "#fdddb7" }}
        >
          <div className=" gap-8 flex flex-row text-black">
            <Accordion selectionMode="single" variant="splitted">
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
                  Intramurals: Table-Tennis, Badminton, Soccer, and Basketball.
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
                  SOCIS (Society of Computing and Information Science) - Member
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
      <Divider />
      <ExperienceSection />
    </>
  );
};

export default AboutMeSection;
