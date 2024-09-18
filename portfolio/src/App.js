import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Education from "./components/Education.js";
import Experiance from "./components/Experiance.js";
import { Link, Element } from "react-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <section className="sections">
          <Element name="Home">
            <Routes>
              <Route path="/" exact element={<Home></Home>}></Route>
            </Routes>
          </Element>
          <Element name="about">
            <Routes>
              <Route path="/about" component={<About />}></Route>
            </Routes>
          </Element>
          <Element name="skills">
            <Routes>
              <Route path="/skills" component={Skills}></Route>
            </Routes>
          </Element>
          <Element name="experiance">
            <Routes>
              <Route path="/experiance" component={Experiance}></Route>
            </Routes>
          </Element>
          <Element name="education">
            <Routes>
              <Route path="/education" component={Education}></Route>
            </Routes>
          </Element>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
