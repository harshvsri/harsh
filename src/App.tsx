import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
