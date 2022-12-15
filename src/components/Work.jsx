import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../styles/work.css";
const Work = () => {
  return (
    <div id="work" className="content-work">
      <h1 className="title line-title">Portafolio</h1>
      <div className="content-works">
        <Row className=" mt-5 mb-4  row-img-work">
          <Col className="col-data-work">
            <div data-aos="fade-up-right" className="data-work"></div>
          </Col>
          <Col className=" col-img-work">
            <div data-aos="fade-up-left" className="img-work">
              <div className="content-data-work">
                <div className="title-work">Ecomerce</div>
                <div className="text-work">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <div className="title-work">Pokedex</div>
                <div className="text-work">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <div className="title-work">Rick and Morty</div>
                <div className="text-work">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                <div className="title-work">Crud-users</div>
                <div className="text-work">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
