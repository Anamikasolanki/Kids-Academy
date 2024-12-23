import React from "react";
import "./Banner.css";
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../Json-api/Banner.json';

export default function Banner() {
  return (
    <section className="banner position-relative">
     <Carousel>
        {
          banner.map((item, index)=>{
            return(
                <Carousel.Item interval={3000} className="cHeight" key={index}>
                  <img src={item.image} style={{filter:"brightness(50%)"}}/>
                  <Carousel.Caption className="text-start" style={{top: "25%"}}>
                    <h3 className="fs-36 fw-bold cHeadingOne text-start">{item.h3Text}</h3>
                    <h1 className=" fs-sm-66 cHeadingSec text-start">{item.h1Text}</h1>
                    <p className="text-start text-white">
                    {item.pText}
                    <br />
                    <button className="btn btn-purple mt-3 me-3">Read More</button>
                    <button className="btn btn-orange mt-3">Buy Now</button>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
            );
          })
        }
      </Carousel>
    </section>
  );
}
