import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // We will build this next
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PlasmaBackground from "./components/PlasmaBackground";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative">
      {/* This must be outside the main div flow */}
      <PlasmaBackground />

      <div className="relative z-10 min-h-dvh">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
