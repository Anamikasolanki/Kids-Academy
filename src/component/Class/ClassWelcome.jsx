import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "./ClassWelcome.css"

function ClassWelcome() {
  return (
    <div className="welcome position-relative py-5">
      <Container>
        <Row>
          <Col>
            <div className="text-center py-5">
              <h1 className="fw-bold text-white">About Our Classes</h1>
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
  )
}

export default ClassWelcome
