import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Navbar from "./Navbar";
import myPhoto from "./assets/hrishikesh.jpg";
function About() {
  return (
    <section className="about">
      <Navbar></Navbar>
      <Container className="about-section">
        <Row>
          <div className="card">
            <div className="card-overlay"></div>
            <div className="card-inner">
              <Container>
                <Row className="about-row">
                  <Col className="about-two">
                    <img
                      src={myPhoto}
                      className="about-photo"
                      alt="myPhoto"
                    ></img>
                  </Col>
                  <Col className="about-two-text">
                    Let me Introduce Myself
                    <p className="about-two-one">
                      Hello! I’m Hrishikesh Sane, a final year Computer Science
                      and Engineering student at VIT Vellore. impact.
                    </p>
                    <p className="about-two-one">
                      I have a strong interest in data structures and algorithms
                      and enjoy tackling complex problem-solving challenges.
                      With a passion for continuous learning, I am currently
                      exploring the exciting world of machine learning.
                    </p>
                    <p className="about-two-one">
                      I am proficient in C++, Python, and Java, and also have
                      experience in building dynamic, user-friendly websites
                      through web development.
                    </p>
                    <p className="about-two-one">
                      As I delve deeper into the intersection of software
                      engineering and machine learning, I look forward to
                      contributing to impactful and innovative projects.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
