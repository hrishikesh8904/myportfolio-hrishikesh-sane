import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        className="project-card-img"
        variant="top"
        draggable="false"
        src={props.img}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "Justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="outline-dark" href={props.ghLink} target="_blank">
          <BsGithub />
          &nbsp;{"Github"}
        </Button>
        {"\n"}
        {"\n"}
        {props.isDemo && (
          <Button
            variant="outline-dark"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite />
            &nbsp;{"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
