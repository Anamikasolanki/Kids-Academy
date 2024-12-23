import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "./ContactWelcome.css"
import { Link } from 'react-router-dom';

function ContactWelcome() {
  return (
    <div className='contact position-relative py-sm-5'>
      <Container className='py-5'>
        <Row>
          <Col>
            <div className="text-center">
              <h1 className="fw-bold text-white">Our Contact Info</h1>
            </div>
            <div className="d-flex pt-0 justify-content-center">
            <Link to={"/"} className='text-decoration-none text-white '>home</Link>
            <span className='text-white'>-Contact US</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactWelcome
