import React from "react";
import NavBar from "./Navbar";
import { Container, Col } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ToastMasters from "./assets/toastmasters.png";
import LnT from "./assets/l&t.png";
import VIT from "./assets/vit.png";
import Navrachana from "./assets/navrachana.png";
function Experiance() {
  return (
    <section>
      <NavBar />
      <Container className="py-4 d-flex flex-column justify-content-center">
        <Col className="py-5 text-center">
          <h2
            className="py-5"
            style={{
              fontFamily: "monospace",
              fontSize: "4rem",
              fontWeight: "700",
              color: "#3b3838",
            }}
          >
            Timeline
          </h2>
        </Col>
        <Col>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b3838", color: "black" }}
              contentArrowStyle={{ borderRight: "14px solid #3b3838" }}
              date="June 2024 - June 2025"
              iconStyle={{ background: "#3b3838", color: "#fff" }}
              icon={
                <img
                  src={ToastMasters}
                  alt="toastmaster-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title timeline-text">
                Assisted Area Director of Public Relations A5
              </h3>
              <h4 className="vertical-timeline-element-subtitle timeline-text">
                VIT, Vellore
              </h4>
              <p className="timeline-text">
                Public Relations, Team Coordination, Leadership, Management
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b3838", color: "black" }}
              contentArrowStyle={{ borderRight: "14px solid #3b3838" }}
              date="June 2024 - July 2024"
              iconStyle={{ background: "#3b3838", color: "#fff" }}
              icon={
                <img
                  src={LnT}
                  alt="L&T-logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title timeline-text">
                Machine Learning Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle timeline-text">
                L&T Knowledge City, Vadodara
              </h4>
              <p className="timeline-text">
                Machine Learning,Python, Model Training & Evaluation, Team
                Collaboration
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b3838", color: "black" }}
              contentArrowStyle={{ borderRight: "14px solid #3b3838" }}
              date="Jan 2024 - June 2024"
              iconStyle={{ background: "#3b3838", color: "#fff" }}
              icon={
                <img
                  src={ToastMasters}
                  alt="Toastmasters-logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title timeline-text">
                Vice President of Public Relations
              </h3>
              <h4 className="vertical-timeline-element-subtitle timeline-text">
                Trueno-VIT, Vellore
              </h4>
              <p className="timeline-text">
                Content Creation, Lead Club's PR, Promote the Club
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b3838", color: "black" }}
              contentArrowStyle={{ borderRight: "14px solid #3b3838" }}
              date="June 2022 - Present"
              iconStyle={{ background: "#3b3838", color: "#fff" }}
              icon={
                <img
                  src={VIT}
                  alt="VIT-logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title timeline-text">
                Vellore Institute of Technology, Vellore
              </h3>
              <h4 className="vertical-timeline-element-subtitle timeline-text">
                B.Tech in Computer Science Engineering
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b3838", color: "black" }}
              contentArrowStyle={{ borderRight: "14px solid #3b3838" }}
              date="Jan 2008 - June 2022"
              iconStyle={{ background: "#3b3838", color: "#fff" }}
              icon={
                <img
                  src={Navrachana}
                  alt="Navrachana-logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title timeline-text">
                Navrachana School, Sama
              </h3>
              <h4 className="vertical-timeline-element-subtitle timeline-text">
                Higher Secondary Education (CBSE)
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Col>
      </Container>
    </section>
  );
}

export default Experiance;
