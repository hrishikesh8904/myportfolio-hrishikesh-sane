import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import bitmoji from "./assets/grin smile.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import Resume from "./assets/Resume.pdf";
import { FaFileDownload } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
// import About from "./About";
function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPercentage = mouseX / width - 0.5;
    const yPercentage = mouseY / height - 0.5;
    x.set(xPercentage);
    y.set(yPercentage);
  };
  return (
    <section className="Home">
      <Navbar></Navbar>
      <Container fluid className="home-section">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="home-text">
              <Row>
                <Container className="home-header">
                  <h1 className="home-text-one">Hi There,</h1>
                  <h1 className="home-text-two">
                    I am <span className="header-name">HRISHIKESH SANE</span>
                  </h1>
                  <h1 className="home-text-three">
                    <Typewriter
                      options={{ loop: true }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Full Stack Web Developer")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Computer Science Student")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Machine Learning")
                          .pauseFor(1000)
                          .start();
                      }}
                    ></Typewriter>
                  </h1>
                </Container>
              </Row>
            </Col>
            <Col className="home-img">
              <motion.div
                style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
              >
                <img src={bitmoji} className="img" alt="bitmoji"></img>
              </motion.div>
            </Col>
          </Row>
          <Row className="py-5 px-5 d-flex justify-content-center justify-content-md-start">
            <Col xs="auto">
              <a href={Resume} download="Hrishikesh_Resume.pdf">
                <Button className="resume-button" variant="outline-dark">
                  <FaFileDownload size={15} />
                  &nbsp;Resume
                </Button>
              </a>
            </Col>
            <Col xs="auto">
              <Button
                href="/projects"
                className="resume-button"
                variant="outline-dark"
              >
                <AiOutlineFile />
                &nbsp; Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
