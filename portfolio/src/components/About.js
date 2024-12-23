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
                      Hello! I’m Hrishikesh Sane, a 3rd-year Computer Science
                      and Engineering student at VIT Vellore. With a keen
                      interest in data structures and algorithms, I am always
                      eager to tackle complex problem-solving challenges. I am
                      passionate about continuous learning and currently diving
                      into the fascinating world of machine learning. Proficient
                      in programming languages like C++, Python, and Java, I
                      also enjoy crafting dynamic and user-friendly websites
                      through web development. As I explore the intersection of
                      software engineering and machine learning, I am excited to
                      contribute to innovative projects that make a meaningful
                      impact.
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
