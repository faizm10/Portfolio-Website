// src/app/page.tsx
import React from 'react';
import LandingPage from './components/LandingPage/page';
//import AboutPage from './components/About/page';
import ProjectCard from './components/Projects/page';
//import Footer from './components/Footer/page';
import Navbar from './components/NavBar/page';
const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ProjectCard />
    </>
  );
};

export default Page;
