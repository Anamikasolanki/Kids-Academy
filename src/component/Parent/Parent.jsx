import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Parent.css";
import parent from "../../Json-api/Parent.json";
function Parent() {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <div className="text-center">
            <h1 className="fw-bold text-purple">Join Our Popular Classes </h1>
            <p className="text-center px-sm-5">
              Rapidiously expedite granular imperatives before economically
              sound web services. Credibly actualize pandemic strategic
              themeplatform.
            </p>
          </div>
          {parent.map((item, index) => {
            return (
              <Col sm={6} lg={4} className="mb-4"  key={index}>
                <div
                  className="class-item bg-secondary bg-opacity-10"
                >
                  <img
                    className="img-fluid w-100"
                    src={item.image}
                    alt="class_01"
                  />
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
                    <h2>Date : 24 March</h2>
                    <Link
                      to={"./Parent.html"}
                      className={`btn mt-3 me-3 text-white ${item.addbgcolor}`}
                    >
                      Join Now
                    </Link>
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
       </Container>
    </div>
  );
}

export default Parent;
