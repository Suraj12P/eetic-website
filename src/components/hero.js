import React, { useState } from "react";
import './css/hero.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import IMAGES from "..";
import arc from './site_images/arc.svg'
import left_arrow from './site_images/arrow-left.svg';
import right_arrow from './site_images/arrow-right.svg';





function Hero(options) {
  const [i, setIndex] = useState(0);

  function left() {
    if (i === 0)
      setIndex(IMAGES.length - 1);
    else
      setIndex(i - 1);
  }

  function right() {
    if (i === IMAGES.length - 1)
      setIndex(0);

    else
      setIndex(i + 1);
  }
  return (
    <div className="hero">

      {/* <div className="text">
          <p className="p1">One of the biggest jakdjowej akfjoa</p>
          <p className="p2">EETIC Community</p>
          <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Button variant="outlined">Read more</Button>
          <img src={IMAGES[i]} alt="" className="showReel"/>
          <img src={arc} className="arc" alt=""/>
          <img src={left_arrow} className="left" onClick={left} alt=""/>
          <img src={right_arrow} className="right"onClick={right} alt=""/>
        </div> */}
      <Row>
        <Col className="p-4">
          <Container className="container p-4">
            <div>
              <h1 className="text-start">One of the biggest Student Community</h1>
            </div>
            <div>
              <h3 className="brand_text text-start">EETIC Community</h3>
            </div>
            <div>
              <h5 className="text-start text_info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </h5>
            </div>
            <Button className="btn_readmore">Read More</Button>
          </Container>
        </Col>
        <Col className="">
          <Container className="container p-4">
            <Row>
              <Col className="flex-shrink-1 bg-info">
                <img src={left_arrow} className="reel_nav_arrow" onClick={left} alt="prev" />

              </Col>
              <Col className="flex-grow bg-warning">
                2 of 3
                </Col>
              <Col className="flex-shrink-1 bg-success">
              <img src={right_arrow} className="reel_nav_arrow" onClick={left} alt="next" />
                
                </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>

  );
}

export default Hero;

