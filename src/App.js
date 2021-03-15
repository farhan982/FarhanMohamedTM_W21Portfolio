import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import PersonalData from "./components/PersonalData";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Particles
      className = "particles-canvas"
        params = {{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#01cbd7"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <PersonalData />
      <Experience /> 
    </>
  );
}

export default App;
