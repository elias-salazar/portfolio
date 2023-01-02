import React from "react";
import { Form } from "react-bootstrap";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title line-title">Contact</h1>
      <div className="content-form">
        <Form
          id="contact"
          className="m-5"
          action="https://formsubmit.co/eliassalazaresc@gmail.com"
          method="POST"
        >
          <Form.Group
            size="md"
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="name" />
          </Form.Group>
          <Form.Group
            size="md"
            f
            className="mb-3"
            controlId="exampleForm.ControlInput2"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group
            size="md"
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>message</Form.Label>
            <Form.Control
              as="textarea"
              type="textarea"
              name="coments"
              rows={3}
            />
          </Form.Group>
          <div className="content-btn-form">
            <input type="submit" value="enviar" className="btn-form" />
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://portfolio-elias-salazar.netlify.app/"
          ></input>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
