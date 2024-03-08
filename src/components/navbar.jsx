import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarComponent() {
  let [currentPage, setCurrentPage] = useState("home");
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          style={{ fontWeight: "700", fontSize: "xx-large" }}
          href="#home"
          className="tooltip-container"
        >
          Raj <span style={{ color: "rgb(255, 0, 254)" }}>Agarwal</span>
          <span className="tooltip-text">Go to home page</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navigation_links" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              onClick={() => {
                setCurrentPage("home");
              }}
              to="/"
            >
              <Nav.Link href="#link" className="tooltip-container">
                {currentPage === "home" ? (
                  <span style={{ borderBottom: "2px solid rgb(255, 0, 254)" }}>
                    Home
                  </span>
                ) : (
                  <span>Home</span>
                )}
                <span className="tooltip-text">Navigate to home page</span>
              </Nav.Link>
            </Link>
            <Link
              onClick={() => {
                setCurrentPage("about");
              }}
              to="/about"
            >
              <Nav.Link href="#link" className="tooltip-container">
                {currentPage === "about" ? (
                  <span style={{ borderBottom: "2px solid rgb(255, 0, 254)" }}>
                    About
                  </span>
                ) : (
                  <span>About</span>
                )}
                <span className="tooltip-text">Navigate to about page</span>
              </Nav.Link>
            </Link>
            <Link
              onClick={() => {
                setCurrentPage("service");
              }}
              to="/service"
            >
              <Nav.Link href="#link" className="tooltip-container">
                {currentPage === "service" ? (
                  <span style={{ borderBottom: "2px solid rgb(255, 0, 254)" }}>
                    Service
                  </span>
                ) : (
                  <span>Service</span>
                )}
                <span className="tooltip-text">Navigate to service page</span>
              </Nav.Link>
            </Link>
            <Link
              onClick={() => {
                setCurrentPage("portfolio");
              }}
              to="/portfolio"
            >
              <Nav.Link href="#link" className="tooltip-container">
                {currentPage === "portfolio" ? (
                  <span style={{ borderBottom: "2px solid rgb(255, 0, 254)" }}>
                    Portfolio
                  </span>
                ) : (
                  <span>Portfolio</span>
                )}
                <span className="tooltip-text">Navigate to portfolio page</span>
              </Nav.Link>
            </Link>
            <Link
              onClick={() => {
                setCurrentPage("contact");
              }}
              to="/contact"
            >
              <Nav.Link href="#link" className="tooltip-container">
                {currentPage === "contact" ? (
                  <span style={{ borderBottom: "2px solid rgb(255, 0, 254)" }}>
                    Contact
                  </span>
                ) : (
                  <span>Contact</span>
                )}
                <span className="tooltip-text">Navigate to contact page</span>
              </Nav.Link>
            </Link>
            <Link
              onClick={() => {
                setCurrentPage("hire_me");
              }}
              to="/hire_me"
            >
              <Nav.Link
                href="#link"
                className="tooltip-container btn-outline-light"
              >
                Hire Me
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
