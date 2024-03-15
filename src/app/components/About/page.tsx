import React from 'react';

const AboutMeSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">About Me</h2>
        
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-700 mb-3">Experience</h3>
          <p className="mb-2 text-black">Undergraduate Research Assistant at University of Guelph (May 2024 - August 2024)</p>
          <p className="mb-2 text-black" >Software Developer at Engineering Ambition (February 2024 - Present)</p>
        </div>
        
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-700 mb-3">Who I Am</h3>
          <p className="text-black">Greetings! I'm Faiz M, a first-year Computer Science major with a minor in Sports &
           Event Management at the University of Guelph. Proficient in various programming languages and web development tools
           , I bring a diverse skill set to the table. I am currently working on couple of projects that showcases my technical
            expertise while simultaneously learning new languages and tools.
        </p>
        </div>
        
        {/* <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-700 mb-3">Volunteer Work</h3>
          <p className="mb-2 text-black" >💻 Volunteer Developer for Non-Profit Organization (2020)</p>
          <p className='text-black'>🌍 Community Cleanup Organizer (2021)</p>
        </div> */}
        
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-700 mb-3">Education</h3>
          <p className="mb-2 text-black">🎓 Bachelor of Computing in Computer Science Honours at University of Guelph
           (2023-2027)</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
