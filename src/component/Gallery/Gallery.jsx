import React from "react";
import "./Gallery.css";
import { Container, Row, Col } from "react-bootstrap";

function Gallery() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <h1 className="fw-bold text-purple"> Our School Gallery</h1>
            <p className="text-center px-sm-5">
              Rapidiously expedite granular imperatives before economically
              sound web services. Credibly actualize pandemic strategic
              themeplatform.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
