import React from "react";
import { Button, Container, ModalTitle } from "react-bootstrap";
import "../styles/home.css";
const Home = () => {
  return (
    <div id="home" className="container-home">
      <div className="content-home">
        <h4 className="green">Hola, mi nombre es</h4>
        <h1 className="title-home big-heading">
          <span> Elias Salazar. </span>
          <br />
          Soy desarrollador web Full Stack.
        </h1>
        <p>
          soy desarrollador web Full Stack . Dispuesto a brindar mis habilidades
          y conocimiento para ayudar al crecimiento y desarrollo de su empresa.{" "}
        </p>

        <a href="#contact">
          <button className="btn btn-home"> Contactame</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
