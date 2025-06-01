import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";
import SkillCards from "./SkillCards";
function Skills() {
  return (
    <section className="skills">
      <Navbar></Navbar>
      <Container className="skills-section">
        <Row>
          <div className="skills-title">
            Professional <span className="skills-skillset">Skillset</span>
          </div>
        </Row>
        <Row>
          <SkillCards></SkillCards>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
