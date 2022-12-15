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
        <div className="redes line">
          <div className="redes-c">
            <div className="red">
              <a
                className="green"
                href="https://www.linkedin.com/in/elias-salazar-36532b24a/"
                target="blank_"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="red ">
              <a
                className="green"
                href="https://github.com/elias-salazar"
                target="blank_"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="red">
              <a
                href="https://app.netlify.com/teams/eliassalazaresc/"
                target="blank_"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.961,11.954l-0.017-0.007l0.049,0.049C24.014,11.996,23.961,11.954,23.961,11.954z" />
                  <polygon points="23.272 12.518 23.272 12.562 23.366 12.602" />
                  <linearGradient
                    id="a"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37340.602 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M16.159,8.413l0.575-3.562L14.6,2.609l-2.511,3.864v0.054c0.108,0.163,0.184,0.359,0.208,0.57l0.001,0.006l3.505,1.487c0.102-0.079,0.22-0.139,0.35-0.176L16.159,8.413z"
                  />
                  <linearGradient
                    id="b"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37345.875 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M23.327,12.604l-5.934-2.537c-0.166,0.22-0.414,0.37-0.696,0.407l-0.005,0.001l-0.648,3.971c0.187,0.188,0.303,0.447,0.304,0.733l3.642,0.765l3.338-3.321V12.604z"
                  />
                  <linearGradient
                    id="c"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37347.059 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#c)"
                    points="20.293 8.276 17.738 9.324 24 11.987"
                  />
                  <linearGradient
                    id="d"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.364"
                    y2="-1809.364"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37338.016 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#d)"
                    d="M12.161,7.846C12.114,7.917,12.06,7.983,12,8.042v2.893l3.445-1.495l-0.003-0.074l0.004-0.088v0.004l0.001-0.009L15.437,9.24L12.161,7.846L12.161,7.846z"
                  />
                  <linearGradient
                    id="e"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37343.398 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#e)"
                    d="M16.21,15.913c-0.119,0.151-0.274,0.271-0.454,0.343l-0.007,0.003l-0.763,4.736l4.447-4.411l-0.021,0.02v-0.03L16.21,15.913z"
                  />
                  <linearGradient
                    id="f"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37344.477 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#f)"
                    d="M16.974,8.507c0.118,0.061,0.219,0.138,0.303,0.23l0.001,0.001l2.354-1.049l-2.197-2.179l-0.491,2.964L16.974,8.507z"
                  />
                  <linearGradient
                    id="g"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37341.637 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#g)"
                    points="15.446 9.439 15.445 9.439 15.446 9.449"
                  />
                  <linearGradient
                    id="h"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.289"
                    y2="-1809.289"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37335.293 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#h)"
                    points="12 21.233 12 23.9 13.092 22.817 12 21.233"
                  />
                  <linearGradient
                    id="i"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.368"
                    y2="-1809.368"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37338.293 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#i)"
                    d="M15.698,10.256L12,11.842v2.472l2.369,0.489c0.17-0.294,0.472-0.495,0.822-0.524h0.004l0.639-3.907L15.698,10.256L15.698,10.256z"
                  />
                  <linearGradient
                    id="j"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.335"
                    y2="-1809.335"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37336.727 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#j)"
                    points="12 .049 12 5.292 14.044 2.095 12 .049"
                  />
                  <linearGradient
                    id="k"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.365"
                    y2="-1809.365"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37337.79 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#k)"
                    d="M12,15.06v4.793l1.678,2.431l0.324-0.326l0.921-5.689l0.01,0.008v-0.028c-0.305-0.127-0.533-0.387-0.615-0.705l-0.002-0.007L12,15.06L12,15.06z"
                  />
                  <linearGradient
                    id="l"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37329.234 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#l)"
                    points=".534 12.737 2.742 14.98 5.526 13.796 5.556 13.787 .534 12.737"
                  />
                  <linearGradient
                    id="m"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37333.148 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#m)"
                    d="M6.467,5.417L3.789,8.026l2.939,4.294l0.157-0.007l0.165,0.008L7.044,12.32l0.172-0.012l0.18,0.012L7.389,12.32l2.741-4.265C9.924,7.842,9.796,7.55,9.795,7.229L9.788,7.093l0.008-0.141L9.795,6.958L6.467,5.417L6.467,5.417z"
                  />
                  <linearGradient
                    id="n"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37329.219 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#n)"
                    d="M6.061,12.748c0,0-0.001,0.001-0.001,0.001l0,0L6.061,12.748L6.061,12.748z M3.286,8.602L0,11.796l5.818,1.289h0.002c0.069-0.127,0.149-0.237,0.241-0.335L3.286,8.602L3.286,8.602z"
                  />
                  <linearGradient
                    id="o"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.539"
                    y2="-1809.539"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37338.016 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#o)"
                    d="M12,8.042c-0.219,0.217-0.517,0.349-0.847,0.349l-0.041-0.001h-0.198l-2.711,4.192L12,10.935V8.042L12,8.042z"
                  />
                  <polygon
                    fill="#DEDEDE"
                    points="12 23.9 11.899 24 12 24 12 23.9"
                  />
                  <linearGradient
                    id="p"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.456"
                    y2="-1809.456"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37330.848 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#p)"
                    points="5.882 14.446 3.339 15.494 4.574 16.72 5.975 14.541 5.882 14.446"
                  />
                  <linearGradient
                    id="q"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.482"
                    y2="-1809.482"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37335.293 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#q)"
                    d="M6.655,15.02c0.003,0.001,0.007,0.002,0.01,0.003l0-0.001L6.655,15.02L6.655,15.02z M7.681,14.97c-0.165,0.079-0.359,0.125-0.564,0.126H7.11c-0.155,0-0.305-0.026-0.445-0.073l-1.547,2.252L11.899,24L12,23.9v-2.666L7.681,14.97L7.681,14.97z"
                  />
                  <linearGradient
                    id="r"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.549"
                    y2="-1809.549"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37338.293 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#r)"
                    points="12 11.842 8.373 13.398 8.472 13.576 8.476 13.588 12 14.314 12 11.842"
                  />
                  <linearGradient
                    id="s"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.505"
                    y2="-1809.505"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37336.727 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <path
                    fill="url(#s)"
                    d="M11.512,6.055L11.512,6.055l0.01,0.003C11.519,6.058,11.516,6.057,11.512,6.055L11.512,6.055z M11.951,0L7.032,4.829v0.064l3.245,1.383c0.213-0.177,0.489-0.284,0.791-0.284l0.048,0.001h-0.002c0.139,0.001,0.272,0.023,0.398,0.063L12,5.292V0.049L11.951,0L11.951,0z"
                  />
                  <linearGradient
                    id="t"
                    x1="-1830.001"
                    x2="-1829.001"
                    y1="-1809.527"
                    y2="-1809.527"
                    gradientTransform="matrix(0 20.6284 20.6284 0 37337.79 37752.14)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="rgb(80, 255, 168)" />
                    <stop offset="1" stop-color="rgb(80, 255, 168)" />
                  </linearGradient>
                  <polygon
                    fill="url(#t)"
                    points="8.351 14.309 8.268 14.446 12 19.853 12 15.06 8.351 14.309"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="correo line">
          <a
            className="green"
            href="mailto:eliassalazaresc@gmail.com"
            target="blank_"
          >
            eliassalazaresc@gmail.com
          </a>
        </div>

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
