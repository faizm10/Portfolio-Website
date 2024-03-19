// src/app/page.tsx
import React from 'react';
import LandingPage from './components/LandingPage/page';
import AboutMeSection from './components/About/page';
import ProjectCard from './components/Projects/page';
import Navbar from './components/NavBar/page';
import Footer from './components/Footer/page';
import Experience from './components/Experience/page';
// Removed SkillsCards import as it's not used below, but you can add it wherever needed.

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutMeSection />
      {/* <Experience /> */}
      <ProjectCard />
      <Footer />
    </>
  );
};

export default Page;
