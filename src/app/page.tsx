// src/app/page.tsx
//testing
import React from 'react';
import LandingPage from './components/LandingPage/page';
//import AboutPage from './components/About/page';
//import Footer from './components/Footer/page';
import Navbar from './components/NavBar/page';
const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
};

export default Page;