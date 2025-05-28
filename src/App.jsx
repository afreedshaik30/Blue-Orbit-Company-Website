import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/HeroHome";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      {/* 1.header */}
      <header id="header">
        <Header />
      </header>
      {/* 2. main */}
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <Teams />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default App;
