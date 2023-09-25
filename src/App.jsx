import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <Socials />
    </div>
  );
}

export default App;
