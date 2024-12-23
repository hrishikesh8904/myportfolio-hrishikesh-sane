import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
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
            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/experience" component={Experience}></Route>
            <Route path="/education" component={Education}></Route>
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
