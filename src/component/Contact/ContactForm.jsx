import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import form from "../../Json-api/ContactForm.json"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function ContactForm() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} md={6} className='py-sm-4 mx-auto'>
            {
              form.map((item, index)=>{
                return(
                  <ul className="list-unstyled p-3">
                    {item.icon}
                    <li className={`fs-36 ${item.headingColor}`}>{item.heading}</li>
                    <li className='text-secondary'>{item.headingDetails}</li>
                  </ul>
                )
              })
            }
          </Col>
          <Col lg={4} md={6} className='mx-auto'>
            <form className="form-group p-4">
              <input type="text" className="form-control my-5" placeholder='your name' />
              <input type="email" className="form-control mb-5" placeholder='your name' />
              <button className="btn btn-purple mt-sm-3 mx-auto me-3">Read More</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactForm
