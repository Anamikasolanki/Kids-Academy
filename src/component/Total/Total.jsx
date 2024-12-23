import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./Total.css"

function Total() {
  const total = [
    {
      icon: <FaUserGraduate />,
      title: "Total Students",
      value: "320+",
    },
    {
      icon: <MdOutlineAddHomeWork />,
      title: "Class Rooms",
      value: "22",
    },
    {
      icon: <FaBus />,
      title: "School Bus",
      value: "33",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Total Teachers",
      value: "12",
    },
  ];
  return (
    <div className="total bg-purple py-5 position-relative">
      <Container className="py-5">
        <Row>
          {total.map((item, index) => {
            return (
              <Col md={3} sm={3} key={index}>
                <div className="achievement-item text-center text-white">
                <span className="fs-66">{item.icon}</span>
                  <br />
                  <span className="fs-36 fw-bold">{item.value}</span>
                  <p className="fw-bold text-center text-white fs-5">{item.title}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Total;
