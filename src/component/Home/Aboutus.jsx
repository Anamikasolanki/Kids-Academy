import React from 'react'
import './Aboutus.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Aboutus() {
  return (
    <div className='aboutus p-5 text-center'>
      <Container>
        <Row>
            <Col lg={6}> 
                <img src="./image/about.png" className='img-fluid' alt="aboutImg" />
            </Col>
            <Col lg={6} className='mt-5 px-sm-5'>
            <h1 className='fw-bold text-light'>About Our Kids</h1>
            <p className='text-white'>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
            <button type='submit' className="btn btn-purple mt-3 me-3">Read More</button>
            <button type='submit' className="btn btn-orange mt-3 me-3">Buy Now</button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
