'use client';
import React from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const AboutMeSection: React.FC = () => {
  return (
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
              {["Skills", "Education", "Volunteer"].map((category) => (
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
                </motion.div>
              </Tab.Panel>
              <Tab.Panel className="text-gray-600">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Currently pursuing a Bachelor of Computing specializing in
                  Computer Science at University of Guelph.
                </motion.p>
              </Tab.Panel>
              <Tab.Panel className="text-gray-600">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Volunteering at ABC Organization, helping with web development
                  and IT support.
                </motion.p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      
    </section>
  );
};

export default AboutMeSection;
