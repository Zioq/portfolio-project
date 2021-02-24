import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Milestones from "./components/Milestones/Milestones";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enabled: true,
            value_area: 900
          }
        },
        shape: {
          type:"circle",
          stroke: {
            width:10,
            color:"#f9ab00"
          }
        } 
      }
    }}

    />
    <NavBar />
    <Header />
    <AboutMe />
    <Skills />
    <Milestones />
    <Portfolio />
    <Testimonials />
    <ContactMe />
    <Footer />
    </>
  );
}

export default App;
