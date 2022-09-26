import React from "react";
import "./css/hero.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import ImgReel from "./carousel";

function Hero(options) {
  return (
    <div className="hero">
      <Row>
        <Col lg className="p-4 md-4 column1">
          <Container className="container p-4">
            <div>
              <h1 className="text-start">
                One of the biggest Student Community
              </h1>
            </div>
            <div>
              <h1 className="brand_text text-start">EETIC Community</h1>
            </div>
            <div>
              <h5 className="text-start text_info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h5>
            </div>
            <div className="readmore">
              <Button className="btn_readmore">Read More</Button>
            </div>
          </Container>
        </Col>
        <div className="p-4 md-4 w-auto">
          {/* <Container className="w-auto p-4"> */}
          <ImgReel />
          {/* </Container> */}
        </div>
      </Row>
    </div>
  );
}

export default Hero;
