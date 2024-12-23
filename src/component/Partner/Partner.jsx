import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Partner.css";

function Partner() {
  return (
    <div className="partner position-relative py-sm-5">
      <Container className="pt-5">
        <Row>
          <Col>
            <div className="text-center">
              <h1 className="fw-bold text-white">Our Popular Classes </h1>
              <p className="text-center text-white px-sm-5">
                Rapidiously expedite granular imperatives before economically
                sound web services. Credibly actualize pandemic strategic
                themeplatform.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-5 text-center">
          <Col md={3} sm={3} className="mb-3">
            <img src="./image/partner_01.jpg" className="img-fluid" alt=""/>
          </Col>
          <Col md={3} sm={3} className="mb-3">
            <img src="./image/partner_02.jpg" className="img-fluid" alt=""/>
          </Col>
          <Col md={3} sm={3} className="mb-3">
            <img src="./image/partner_03.jpg" className="img-fluid" alt=""/>
          </Col>
          <Col md={3} sm={3} className="mb-3">
            <img src="./image/partner_05.jpg" className="img-fluid" alt=""/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partner;
