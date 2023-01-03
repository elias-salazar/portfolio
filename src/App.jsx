import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import "./App.css";
import About from "./components/About";

import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Work from "./components/Work";
import Contact from "./components/Contact";
// ..

function App() {
  AOS.init({
    duration: 1500,
  });
  let Esc = "{Esc}";
  return (
    <>
      <Navbar sticky="top" expand="md" className="navbar  navbar-dark bg-dark">
        <div className="logo">
          <Navbar.Brand href="#home">
            <h2 style={{ cursor: "pointer" }}>{Esc}</h2>
          </Navbar.Brand>
        </div>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-menu">
            <Nav.Link className="nav-link" href="#about">
              About
            </Nav.Link>

            <Nav.Link className="nav-link" href="#work">
              Work
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
            <Button variant="dark" className="btn nav-link">
              <a
                className="green"
                href="https://drive.google.com/file/d/1P0a7z78639YnAdwu-vZFNo7v4-Se1XVe/view?usp=sharing"
                target="blank_"
                download="CV-Elias-Salazar.pdf"
              >
                {" "}
                Descargar cv
              </a>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container-app">
        <div className="container-components">
          <Home />
          <About />

          <Work />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
