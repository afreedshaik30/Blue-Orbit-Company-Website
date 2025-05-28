import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import HeroHome from "./components/HeroHome";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import TeamsSection from "./components/Teams";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    // <div className="App">
    //   {/* 1.header */}
    //   <header id="header">
    //     <Header />
    //   </header>
    //   {/* 2. main */}
    //   <main>
    //     <Hero />
    //     <AboutSection />
    //     <ServicesSection />
    //     <WorkSection />
    //     <Teams />
    //     <Testimonials />
    //     <Blog />
    //     <Contact />
    //   </main>
    // </div>
    <div className="App">
      <Header />
      <Routes>
        {/* Home page: All sections */}
        <Route path="/" element={<HomePage />} />

        {/* Individual pages */}
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/works" element={<WorkSection />} />
        <Route path="/teams" element={<TeamsSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
