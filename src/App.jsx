import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Collections from "./components/Collections";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <HeroSection />
      <Testimonials />
      <Collections />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
