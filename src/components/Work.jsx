import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/work.css";
const Work = () => {
  return (
    <div id="work" className="content-work">
      <h1 className="title line-title">Proyects</h1>
      <div className="content-works">
        <Row className=" mt-5 mb-4  row-img-work">
          <Col className="col-data-work">
            <div data-aos="fade-up-right" className="data-work"></div>
          </Col>
          <Col className=" col-img-work">
            <div data-aos="fade-up-left" className="img-work">
              <div className="content-data-work">
                <div className="title-work">
                  {" "}
                  <a
                    href="https://elias-salazar-ecommerce.netlify.app/"
                    target="_blank"
                  >
                    Ecommerce
                  </a>
                </div>
                <div className="text-work">
                  Aplicacion para una tienda de venta online. React js,
                  javascrypt, boostrap, css puro.
                </div>
              </div>
              <img
                src="https://i.ibb.co/vmhFh6g/ecommerce.jpg"
                alt="ecommerce"
                border="0"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-4 row-img-work">
          <Col className=" col-img-work">
            <div data-aos="fade-up-right" className="img-work">
              <div className="content-data-work">
                <div className="title-work">
                  <a
                    href="https://elias-salazar-entregable-05.netlify.app/"
                    target="_blank"
                  >
                    Pokedex
                  </a>{" "}
                </div>
                <div className="text-work">
                  Aplicacion para consulta de pokemones, con filtros por tipo,
                  nombre y id a traves del consumo de apis. React js,
                  javascrypt, boostrap, css puro.
                </div>
              </div>
              <img
                src="https://i.ibb.co/xzjGQBD/pokedex.jpg"
                alt="pokedex"
                border="0"
              />
            </div>
          </Col>
          <Col className="col-data-work">
            <div data-aos="fade-up-left" className="data-work"></div>
          </Col>
        </Row>
        <Row className="mb-4 row-img-work">
          <Col className="col-data-work">
            <div data-aos="fade-up-right" className="data-work"></div>
          </Col>
          <Col className=" col-img-work">
            <div data-aos="fade-up-left" className="img-work">
              <div className="content-data-work">
                <div className="title-work">
                  <a
                    href="https://elias-salazar-entregable-03.netlify.app/"
                    target="_blank"
                  >
                    Rick and Morty
                  </a>{" "}
                </div>
                <div className="text-work">
                  Aplicacion para consulta de informacion sobre la serie Rick
                  and morty, con filtros por lacalizacion, nombre y id a traves
                  del consumo de apis. React js, javascrypt, css puro.
                </div>
              </div>
              <img
                src="https://i.ibb.co/dg1qzr3/Rick-and-Morty.jpg"
                alt="Rick-and-Morty"
                border="0"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-4 row-img-work">
          <Col className=" col-img-work">
            <div data-aos="fade-up-right" className="img-work">
              <div className="content-data-work">
                <div className="title-work">
                  <a
                    href="https://elias-salazar-entregable-04.netlify.app/"
                    target="_blank"
                  >
                    Crud-users
                  </a>{" "}
                </div>
                <div className="text-work">
                  aplicacion para el manejo de usuarios. React js, javascrypt,
                  css puro.
                </div>
              </div>
              <img
                src="https://i.ibb.co/926MbCJ/crud-users.jpg"
                alt="crud-users"
                border="0"
              />
            </div>
          </Col>
          <Col className="col-data-work">
            <div data-aos="fade-up-left" className="data-work">
              <Card>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    Primary Card Title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Work;
