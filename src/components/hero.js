import React, { useEffect } from "react";
import "./css/hero.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import ImgReel from "./carousel";
import { FiExternalLink } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero(options) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-quart" });
  }, []);
  return (
    <div className="hero">
      <Row>
        <Col
          lg
          className=" md-4 column1"
          style={{ maxWidth: "100vw !important" }}
        >
          <Container className="container">
            {/* <div>
              <h1 className="text-start">
                One of the biggest Student Community
              </h1>
            </div> */}
            <div>
              <h1 className="brand_text text-start">EETI Foundation</h1>
            </div>
            <div>
              <h5 className="text-start text_info">
                A community initiative from college of engineering Trivandrum,
                EETI Foundation is a group of young innovators future
                entrepreneurs and technology enthusiasts across Kerala, coming
                under one platform to share ideas and explore the blazing fast
                changes and advancements in science and technology.
              </h5>
            </div>
            <div className="readmore_ca">
              <div className="buttons">
                <a href="/aboutus">
                  <Button className="btn_readmore">Read More</Button>
                </a>
              </div>
              {/* <div className="buttons">
                <a href="https://www.ca.eetifoundation.org/" target="_blank" rel="noopener noreferrer" id="btn_ca">
                  <Button className="btn_ca">Campus Ambassador <FiExternalLink /> </Button>
              <div className="buttons">
                <a
                  href="https://www.ca.eetifoundation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn_ca"
                >
                  <Button className="btn_ca">
                    Campus Ambassador <FiExternalLink />{" "}
                  </Button>
                </a>
              </div> */}
            </div>
          </Container>
        </Col>
        <div
          data-aos="fade-up"
          className="carousel-container p-4 md-4 w-auto"
        >
          {/* <Container className="w-auto p-4"> */}
          {/* <div className="arc"></div>
          <div className="dashes"></div> */}
          <ImgReel />
          {/* </Container> */}
        </div>
      </Row>
    </div>
  );
}

export default Hero;
