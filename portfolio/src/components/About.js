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
                <Row>
                  <Col className="about-two">
                    <img
                      src={myPhoto}
                      className="about-photo"
                      alt="myPhoto"
                    ></img>
                  </Col>
                  <Col className="about-two">Let me Introduce Myself</Col>
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
