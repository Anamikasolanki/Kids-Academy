import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Newsletter.css"

function Newsletter() {
  return (
    <div className='news position-relative py-5'>
      <Container>
        <Row>
        <Col lg={6} className='text-center'>
        <h1 className="fw-bold text-white pt-3">Join Our Newsletter </h1>
        </Col>
        <Col lg={6}>
          <form className='d-flex justify-content-center'>
            <input type="email" placeholder='Enter your email here' className="form-control mt-3  w-75 me-3" />
            <button className="btn btn-light mt-3  w-50 me-3">Subscribe Now</button>          </form>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Newsletter
