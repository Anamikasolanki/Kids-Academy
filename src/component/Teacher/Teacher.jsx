import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Teacher.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Teacher() {
  const teacherContent = [
    {
      img: "./image/teacher_01.jpg",
      teacherName: "Broklyn Doel",
      backcolor: "bg-purple",
    },
    {
      img: "./image/teacher_02.jpg",
      teacherName: "Alex Jhonson",
      backcolor: "bg-darkorange",
    },
    {
      img: "./image/teacher_03.jpg",
      teacherName: "Robot Jhonson",
      backcolor: "bg-tometo",
    },
    {
      img: "./image/teacher_04.jpg",
      teacherName: "Janslon Doe",
      backcolor: "bg-skyblue",
    },
  ];
  return (
    <div className="teacher teacher-bg py-md-4 position-relative">
      <Container>
        <Row className="py-md-5">
          <Col>
            <h1 className="fw-bold text-white text-center py-3 mt-5">
              Meet Our Teacher
            </h1>
            <p className="text-center text-white px-sm-5">
              Rapidiously expedite granular imperatives before economically
              sound web services. Credibly actualize pandemic strategic
              themeplatform.
            </p>
          </Col>
        </Row>
        <Row>
          {teacherContent.map((item, index) => {
            return (
              <Col lg={6} key={index} className="px-sm-4 mb-5">
                <Row>
                  <div className="teacher-image col-sm-5 p-0">
                    <img className="w-100 h-100" src={item.img} alt="teacher" />
                  </div>
                  <div
                    className={`teacher-content col-sm-7 text-white p-4 pe-5 ${item.backcolor}`}
                  >
                    <h3 className="fw-bold">{item.teacherName}</h3>
                    <div className="social-media">
                      <Link to={"javascript.void()"}>
                        <i className="fa fa-facebook text-white"></i>
                      </Link>
                      <Link to={"javascript.void()"}>
                        <i className="fa fa-youtube text-white"></i>
                      </Link>
                      <Link to={"javascript.void()"}>
                        <i className="fa fa-twitter text-white"></i>
                      </Link>
                      <Link to={"javascript.void()"}>
                        <i className="fa fa-instagram text-white"></i>
                      </Link>
                    </div>
                    <p className="text-white">
                      Distinctively initiate and sustainable synergy vaan
                      tactical opportunities. awesome theme ollaboratively.
                    </p>
                    <Link
                      to={"./view.html"}
                      className=" fw-bold text-white text-decoration-none"
                    >
                      {" "}
                      View Profile
                    </Link>
                  </div>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
     
    </div>
  );
}
