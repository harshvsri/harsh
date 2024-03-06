import About from "./components/AboutMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Header";
import Skill from "./components/SkillIcons";
import Work from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <Work />
      <About />
      <Footer />
    </>
  );
}

export default App;
