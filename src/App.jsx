import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";

import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Teams from "./components/Teams";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <header>
        <Header />
      </header>
      <Routes>
        {/* Home page: All sections */}
        <Route path="/" element={<HomePage />} />

        {/* Individual pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
      <GoTop />
    </div>
  );
};

export default App;

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
