// src/app/page.tsx

import React from 'react';
import LandingPage from './components/LandingPage/page';
//import AboutPage from './components/About/page';
import Footer from './components/Footer/page';

const Page: React.FC = () => {
  return (
    <>
      <LandingPage />
      <Footer /> 
    </>
  );
};

export default Page;
