// src/app/components/Experience/ExperienceSection.tsx
'use client'
import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import Card from '@/app/mini-components/Experience/Card';

const ExperienceSection = () => {
  let tabs = [
    {
      id: "undergrad",
      label: "Research Assistant",
      title: "Undergraduate Research Assistant",
      role: "University of Guelph",
      period: "May 2024 - August 2024",
      description: "Languages Soon To Be Updated"
    },
    {
      id: "dev",
      label: "Software Developers", //tab title
      //description below
      title: "Software Developer",
      role: "Engineering Ambition",
      period: "February 2024 - Present",
      description: "Working on exciting projects with technologies like ClickUp, Next.js, React, and more."
    },
    {
      id: "eng",
      label: "Software Engineer", //tab title
      //description below
      title: "Software Engineer",
      role: "Muslims In Tech",
      period: "February 2024 - Present",
      description: "Soon To Be Updated"
    }
    // Add more tabs if needed
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Experience</h2>
        
        <Tabs color="primary" variant="bordered">
          {tabs.map((tab) => (
            <Tab key={tab.id} value={tab.id} title={tab.label}>
              <Card 
                title={tab.title}
                role={tab.role}
                period={tab.period}
                description={tab.description}
              />
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
