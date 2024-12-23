import React from "react";
import "./Footer.css";
import "../../../src/index.css";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../../../src/Json-api/Contactdetails.json";
import latestNews from "../../Json-api/Footernews.json";
import TwitterWidget from "../../Json-api/Footertwitter.json";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3}>
            <img src="./image/logo.png" alt="logo" className="py-3" />
            <p>
              Distily enable team driven services through extensive is a
              relatonships platforms with interactive content. Enthusiastically
              scale effective.
            </p>
            <ul className="list-unstyled">
              {contact.map((item, index) => {
                return (
                  <li className="d-flex gap-3 align-items-center" key={index}>
                    <i className={item.class}></i>
                    <p className="mt-3">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col sm={6} lg={3}>
            <h3 className="text-warning py-3 fw-bold">Latest News</h3>
            {latestNews.map((item, index) => {
              return (
                <div
                  className="d-flex gap-3 my-5 align-items-center"
                  key={index}
                >
                  <div>
                    <img src={item.image} alt="logo" />
                  </div>
                  <div>
                    <h6 className="text-secondary">{item.text}</h6>
                    <h6 className="text-secondary text-warning">{item.date}</h6>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col sm={6} lg={3}>
            <h3 className="text-pink py-3 fw-bold">Twitter Widget</h3>
            {TwitterWidget.map((item, index) => {
              return (
                <div
                  key={index}
                  className="d-flex align-items-center gap-3 my-5"
                >
                  <div>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h6 className="text-secondary">{item.text}</h6>
                    <h6 className="text-secondary">{item.time}</h6>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col sm={6} lg={3}>
            <h3 className="text-darkorange py-3 fw-bold">Recent Photos</h3>
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <div>
                  <img src="./image/gallery_01.jpg" alt="" />
                </div>
                <div>
                  <img src="./image/gallery_02.jpg" alt="" />
                </div>
                <div>
                  <img src="./image/gallery_03.jpg" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <div>
                  <img src="./image/gallery_04.jpg" alt="" />
                </div>
                <div>
                  <img src="./image/gallery_05.jpg" alt="" />
                </div>
                <div>
                  <img src="./image/gallery_06.jpg" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img src="./image/gallery_07.jpg" alt="" />
                </div>
                <div>
                  <img src="./image/gallery_08.jpg" alt="" />
                </div>
                <div>
                  <img src="./image/gallery_09.jpg" alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary w-100">
        <h2 className="text-center p-3 mt-3">Created By : Anamika Solanki</h2>
      </div>
    </footer>
  );
}
