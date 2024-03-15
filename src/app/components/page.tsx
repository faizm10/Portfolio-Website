import LandingPage from "./LandingPage/page";
import Navbar from "./NavBar/page";
import ContactMeSection from "./ContactMe/page";
import AboutMeSection from "./About/page";
import Projects from "./Projects/page";
import Footer from "./Footer/page";
import Experience from "./Experience/page";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMeSection />
      <Experience />
      <Projects />
      <ContactMeSection />
      <Footer />
    </div>
  );
};

export default MainPage;
