import React from "react";
import "./ParentSay.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import test from "../../Json-api/ParentSay.json";

function ParentSay() {
  
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col className="text-center py-sm-5">
            <h1 className="fw-bold text-purple">What Parents Say</h1>
            <p className="text-center">
              Rapidiously expedite granular imperatives before economically
              sound web services. Credibly actualize pandemic strategic
              themeplatform.
            </p>
          </Col>
        </Row>
        <Row>
          {test.map((item, index) => {
            return (
              <Col sm={6} lg={4} className="p-4">
                <Row
                  className={`${item.borderColor} border-3 p-sm-4 px-5`}
                >
                  <p className="mb-0">
                    Professionally predominate that timely infrastructure tops
                    line methodologies Colaboratively size scalable a channels
                    before long term high impoact.
                  </p>
                  <h6 className="text-orange fw-bold ">
                    {item.name}
                    <span className="text-secondary">{item.role}</span>
                  </h6>
                </Row>
                <div className="testimonial rounded">
                  <img src={item.img} className={`${item.borderimg} img-fluid`} alt="" />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ParentSay;
