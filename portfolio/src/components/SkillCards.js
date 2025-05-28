import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiJupyter
} from "react-icons/si";
import {VscGithub,VscVscode} from "react-icons/vsc"
import { FaJava } from "react-icons/fa";

const techstack = [
  { name: "C++", icon: <SiCplusplus size={80} /> },
  { name: "Java", icon: <FaJava size={80} /> },
  { name: "Python", icon: <SiPython size={80} /> },
];
const webDev = [
  { name: "HTML", icon: <SiHtml5 size={80} /> },
  { name: "CSS", icon: <SiCss3 size={80} /> },
  { name: "JavaScript", icon: <SiJavascript size={80} /> },
  { name: "React", icon: <SiReact size={80} /> },
];
const frameworks = [
  { name: "Bootstrap", icon: <SiBootstrap size={80} /> },
  { name: "NodeJs", icon: <SiNodedotjs size={80} /> },
  { name: "ExpressJs", icon: <SiExpress size={80} /> },
];
const databases = [
    { name: "Firebase", icon: <SiFirebase size={80} /> },
  { name: "MongoDB", icon: <SiMongodb size={80} /> },
  { name: "PostgresSql", icon: <SiPostgresql size={80} /> },
]

const tools = [
    {name: "Vscode", icon: <VscVscode size={80}/>},
    {name: "VscGithub", icon: <VscGithub size={80}/>},
    {name: "Jupyter", icon: <SiJupyter size={80}/>}
]
function SkillCards() {
  return (
    <Container className="py-4 text-center d-flex flex-column justify-content-center align-items-center">
      <Row className="py-5">
        <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Tech Stack</h2>
      </Row>

      <Row xs={2} sm={2} md={3} lg={3} className="py-3 g-5">
        {techstack.map((skill, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              className="shadow-sm border-0"
              style={{ width: "300px", height: "140px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                {skill.icon}
                {/* <strong className="mt-2">{skill.name}</strong> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={2} sm={2} md={4} lg={4} className="py-3 g-5">
        {webDev.map((skill, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              className="shadow-sm border-0"
              style={{ width: "300px", height: "140px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                {skill.icon}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={2} sm={2} md={3} lg={3} className="py-3 g-5">
        {frameworks.map((skill, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              className="shadow-sm border-0"
              style={{ height: "140px", width: "300px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                {skill.icon}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={2} sm={2} md={3} lg={3} className="py-3 g-5">
        {databases.map((skill, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              className="shadow-sm border-0"
              style={{ height: "140px", width: "300px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                {skill.icon}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="py-5">
        <h2 style={{fontSize:"2rem",fontWeight:"700"}}><span style={{color:"#93a1a1"}}>Tools</span> I Use</h2>
      </Row>
      <Row xs={2} sm={2} md={3} lg={3} className="py-3 g-5">
        {tools.map((skill, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              className="shadow-sm border-0"
              style={{ height: "140px", width: "300px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                {skill.icon}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SkillCards;
