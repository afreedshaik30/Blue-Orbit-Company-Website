import HeroBanner from "./HeroBanner";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Teams from "./Teams";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <main>
        <HeroBanner />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default Home;
