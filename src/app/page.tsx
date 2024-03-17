// src/app/page.tsx
import React from 'react';
import LandingPage from './components/LandingPage/page';
import AboutMeSection from './components/About/page';
import ProjectCard from './components/Projects/page';
import Navbar from './components/NavBar/page';
import ContactMeSection from './components/ContactMe/page';
import Footer from './components/Footer/page';
import Experience from './components/Experience/page';
const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutMeSection />
      <Experience />
      <ProjectCard />
        {/* <ContactMeSection /> */}
      <Footer />
      
    </>
  );
};
export default Page;