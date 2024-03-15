// components/ExperienceSection.js or wherever you have your Experience section
import React from 'react';
import Card from '@/app/mini-components/Experience/Card';
const ExperienceSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Experience</h2>
        
        {/* Example Experience Entry */}
        <Card 
          title="Undergraduate Research Assistant"
          role="University of Guelph"
          period="May 2024 - August 2024"
          description="Languages Soon To Be Updated"
        />

        {/* Additional Experience Entries */}
        <Card 
          title="Software Developer"
          role="Engineering Ambition"
          period="February 2024 - Present"
          description="Working on exciting projects with technologies like ClickUp, Next.js, React, and more."
        />

        {/* Add more Card components as needed for each experience */}
      </div>
    </section>
  );
};

export default ExperienceSection;
