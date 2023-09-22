import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/socials";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
