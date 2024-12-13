import Home from "./components/Home";
import About from "./components/About";
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
        <section className="sections">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route path="/experiance" component={Experiance}></Route>
            <Route path="/education" component={Education}></Route>
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
