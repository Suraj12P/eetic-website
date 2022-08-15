import React from "react";
import './css/hero.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import IMAGES from "..";
import arc from './site_images/arc.svg'
import left_arrow from './site_images/arrow-left.svg';
import right_arrow from './site_images/arrow-right.svg';
import ImgReel from './carousel';




function Hero(options) {
 
  return (
    <div className="hero">
      <Row>
        <Col lg className="p-4 md-4">
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
        <Col lg className="p-4 md-6">
          <Container className=" p-4">
            <ImgReel/>
          </Container>
        </Col>
      </Row>
    </div>

  );
}

export default Hero;

