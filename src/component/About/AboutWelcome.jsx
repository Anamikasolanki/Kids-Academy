import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutWelcome.css"

function AboutWelcome() {
  return (
    <div className="welcome py-5 position-relative">
      <Container>
        <Row>
          <Col>
            <div className="text-center py-sm-5">
              <h1 className="fw-bold text-white">About Our KidsAcademy</h1>
              <p className="text-center text-white px-sm-5">
                Rapidiously expedite granular imperatives before economically
                sound web services. Credibly actualize pandemic strategic
                themeplatform.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutWelcome;
