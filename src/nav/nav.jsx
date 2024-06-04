/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "./style.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";

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
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <p className={style.name}>
            &lt; M<span>orshedy</span> /&gt;
          </p>
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
          <Nav className="ms-auto " defaultActiveKey="#home">
            <Nav.Item className="me-3">
              <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon
                  icon={faHouse}
                  style={{ color: "#0d6efd", marginRight: "10px" }}
                />
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="me-3">
              <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#0d6efd", marginRight: "10px" }}
                />
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="me-3">
              <Nav.Link href="#skills" onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon
                  icon={faCode}
                  style={{ color: "#0d6efd", marginRight: "10px" }}
                />
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="me-3">
              <Nav.Link href="#work " onClick={() => updateExpanded(false)}>
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  style={{ color: "#0d6efd", marginRight: "10px" }}
                />
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/ahmed-morshedy"
                target="_blank"
                className="fork-btn-inner bg-dark btn-dark"
                style={{ padding: "5px", width: "40px", height: "40px" }}
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
