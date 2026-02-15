import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // We will build this next
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PlasmaBackground from "./components/PlasmaBackground";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative w-full min-h-[100dvh]">
      {/* Background must be outside content flow and cover full viewport */}
      <PlasmaBackground />

      {/* Content layers on top with z-index */}
      <div className="relative z-10 w-full">
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
