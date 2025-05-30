import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import serenesoul from "./assets/serenesoul.png";
import vehicleMaintainence from "./assets/vehicle-maintainence.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <Navbar />
      <Container className="py-4 text-center d-flex flex-column justify-content-center align-items-center">
        <Row className="py-5">
          <h2
            className="py-5"
            style={{
              color: "#93a1a1",
              fontSize: "4rem",
              fontWeight: "700",
              fontFamily: "monospace",
            }}
          >
            My <strong style={{ color: "black" }}>Recent</strong> Works
          </h2>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              img={vehicleMaintainence}
              title="Vehicle Maintainence Prediction"
              description="Vehicle Maintenance Prediction is a smart system that lets users input data about their vehicle components to predict potential breakdowns. It uses a Flask API, stores data in a PostgreSQL database, and applies Linear Regression to forecast when maintenance is needed, helping users stay ahead of issues and avoid unexpected failures."
              ghLink="https://github.com/hrishikesh8904/caterpillar-vehicle-prediction"
              isDemo={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              img={serenesoul}
              title="Serene Soul-Mental Health PLatform"
              description="Serene Soul is a simple mental health platform focused on emotional well-being. It offers thoughtful blogs on self-care and mindfulness, a daily mood tracker to help users monitor their emotions, and easy access to psychiatrist contact details. It serves as a gentle, supportive space for mental wellness."
              ghLink="https://github.com/hrishikesh8904/miniproject"
              isDemo={true}
              demoLink="https://serenesoul.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
