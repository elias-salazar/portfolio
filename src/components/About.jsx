import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/about.css";
const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="title line-title">About Me</h1>

      <Row className="row-img-about">
        <Col className="col-data-about pt-5">
          <div className="data-description">
            <p>
              Hola! mi nombre es Elias Salazar, vivo en Argentina y soy
              programador Web Full Stack. Lleve a cavo mi formacion en Academlo
              y cada dia trabajo para mejorar mis habilidades buscando nuevos
              retos y proyectos que exijan mas de mi. Lenguajes y dev tools
              html, css, javaScrypt ,reactjs, nodejs postgresSQL, boostrap.
            </p>
          </div>
        </Col>
        <Col className="perfil">
          <div className="content-img">
            <div className="content-border">
              <div className="border-img" title="border1"></div>
              <div className="border-img2" title="elias"></div>
            </div>
            <img
              src="https://i.ibb.co/sJ3jPHj/HOY.jpg"
              alt="elias salazar"
              border="0"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
