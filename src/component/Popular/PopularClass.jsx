import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "./PopularClass.css";
import { Link } from "react-router-dom";
import popular from "../../Json-api/PopularClass.json";

function PopularClass() {
  return (
    <section className="popular py-sm-5">
      <Container>
        <Row className="mt-5">
          <div className="text-center">
            <h1 className="fw-bold text-purple">Our Popular Classes </h1>
            <p className="text-center px-sm-5">
              Rapidiously expedite granular imperatives before economically
              sound web services. Credibly actualize pandemic strategic
              themeplatform.
            </p>
          </div>
          {popular.map((item, index) => {
            return (
              <Col sm={6} lg={4} className="mb-4">
                <div
                  className="class-item bg-secondary bg-opacity-10"
                  key={index}
                >
                  <img
                    className="img-fluid w-100"
                    src={item.image}
                    alt="class_01"
                  />
                  <ListGroup
                    horizontal
                    className="d-flex justify-content-center"
                  >
                    <ListGroup.Item className="w-33 text-center text-white rounded-0 border-light bg-purple">
                      <span>Class Size</span> <br />
                      <span>30 - 40</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="w-33 text-center text-white rounded-0 border-light bg-orange">
                      <span>Years Old</span> <br />
                      <span>5 - 6</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="w-33 text-center text-white rounded-0 border-light bg-darkorange">
                      <span>Tution Fee</span> <br />
                      <span> $1500 </span>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="p-2">
                    <Link
                      to={"./class-single.html"}
                      className={`fw-bold text-decoration-none ${item.textcolor}`}
                    >
                      {item.cardhead}
                    </Link>
                    <p>
                      <span className="text-danger">Class Time: </span>
                      <span> 9:00 AM - 12:00 PM</span>
                    </p>
                    <p className="p-0">
                      Draticaly novate fuly rarched an plications awesome theme
                      education
                    </p>
                  </div>
                  <div
                    className={`text-center py-2 text-white ${item.addbgcolor}`}
                  >
                    218 New Newyork Road, USA- 1205
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="text-center mb-4">
            <Link
              to={"./more.html"}
              className="btn btn-purple mt-sm-3 me-3 text-white"
            >
              See More Classes
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PopularClass;
