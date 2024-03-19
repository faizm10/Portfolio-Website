"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Accordion, AccordionItem, Card, CardBody } from "@nextui-org/react";
// import Layout from "../Layout/page";
import ExperienceSection from "../Experience/page";
const AboutMeSection: React.FC = () => {
  
  return (
    // <Layout>

    <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-center lg:justify-between items-start lg:space-x-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex-shrink-0 mb-10 lg:mb-0 lg:w-1/3"
        >
          <Image
            src="/images/faizlogo.webp"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>

        <div className="flex-grow lg:w-2/3">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center lg:text-left text-gray-800 mb-6"
          >
            About Me
          </motion.h2>

          <Tab.Group>
            <Tab.List className="flex p-1 space-x-5 bg-blue-900/20 rounded-xl">
              {["Background", "Education"].map((category) => (
                <Tab as={React.Fragment} key={category}>
                  {({ selected }) => (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5
                        ${
                          selected
                            ? "bg-white text-blue-700 shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        }`}
                    >
                      {category}
                    </motion.button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-4">
              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* <SkillsCards/> */}
                  <Card>
                    <CardBody>
                      <ul className="list-disc space-y-2 ml-4">
                        <li>👋🏽 Hey there, I'm Faiz M.</li>
                        <li>
                          🎓 Currently pursuing a Bachelor's in Computer Science
                          at the University of Guelph, with a minor in Sports &
                          Event Management.
                        </li>
                        <li>
                          📚 Coursework: Discrete Structures II, Intermediate
                          Programming, Statistics I, Linear Algebra, and Web
                          Design and Development.
                        </li>
                        <li>
                          💻 Passionate about software development and full
                          stack technologies.
                        </li>
                        <li>
                          💪🏽 Keen on sports: soccer, ping pong, and basketball.
                        </li>
                        <li>
                          🛠️ Software Developer for Engineering Ambition at
                          UofG.
                        </li>
                        <li>
                          🏟️ Active member in clubs and intramural sports
                          leagues on campus.
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </motion.div>
              </Tab.Panel>
              <Tab.Panel className="text-gray-600">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Accordion selectionMode="multiple" variant="splitted">
                    <AccordionItem aria-label="Education" title="Education">
                      <p>
                        Bachelor of Computing Honours Degree, Specializing in
                        Computer Science with a Minor in Sports & Event
                        Management
                      </p>
                      <p>
                        Relevant coursework:
                        <br />
                        CIS2910 - Discrete Mathematics in Computing II
                        <br />
                        CIS2500 - Intermediate Programming
                        <br />
                        STAT2400 - Statistics I<br />
                        MATH1160 - Linear Algebra I<br />
                        CIS1050 - Web Design & Development
                      </p>
                    </AccordionItem>

                    <AccordionItem
                      aria-label="Extracurricular Activities"
                      title="Extracurricular Activities"
                    >
                      <p>
                        Intramurals: Participated in Table-Tennis, Badminton,
                        Soccer, and Basketball. Demonstrated teamwork and
                        competitive spirit across a variety of sports.
                      </p>
                      <p>
                        Drop-In Sports: Table Tennis,Basketball, and Soccer.
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
                </motion.p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <ExperienceSection>

      </ExperienceSection>
    </section>
    // </Layout>

  );
};

export default AboutMeSection;
