// Home.js
import Hero from "./HeroHome";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WorkSection from "./WorkSection";
import TeamsSection from "./Teams";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TeamsSection />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
};

export default Home;
