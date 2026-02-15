import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // We will build this next
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
        <div className="fixed inset-0 overflow-y-auto">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
