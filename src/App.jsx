import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/HeroHome";
import AboutSection from "./components/AboutSection";

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
      </main>
    </div>
  );
};

export default App;
