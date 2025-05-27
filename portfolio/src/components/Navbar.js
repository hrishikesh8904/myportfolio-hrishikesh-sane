import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./assets/favicon.ico";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineGlobal,
  AiOutlineFundProjectionScreen,
  AiOutlineFile,
} from "react-icons/ai";
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
      bg="myWhite"
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="Brand"
            width="30"
            height="30"
            className="d-inline-block align-top"
            draggable="false"
          />{" "}
          Hrishikesh
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome
                  style={{ marginBottom: "4px", marginRight: "2px" }}
                />
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser
                  style={{ marginBottom: "4px", marginRight: "2px" }}
                />
                About
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineGlobal
                  style={{ marginBottom: "4px", marginRight: "2px" }}
                />
                Skills
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "4px", marginRight: "2px" }}
                />
                Experience
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFile
                  style={{ marginBottom: "4px", marginRight: "2px" }}
                />
                Projects
              </NavLink>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/hrishikesh8904"
                target="_blank"
                className="fork-btn-inner gitbutton"
                variant="outline-dark"
              >
                <CgGitFork style={{ fontSize: "1.2rem" }}></CgGitFork>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
