import React,{useEffect} from "react";
import "./css/community_why.css";
import ball from "./site_images/ball.svg";
import { Image } from "react-bootstrap";
import illustration from "../images/illustration1.svg";
import AOS from "aos";
import "aos/dist/aos.css"

function CommunityWhy() {
  useEffect(()=>{
    AOS.init({duration:1000,
      easing: 'ease-out'});
  },[])

  return (
    <div className="community_why">
      <Image
        className="illust1"
        // src={require("../images/illustration1.svg")}
        src={illustration}
        fluid
        roundedCircle
      />

      <div className="header p-4">
        <h1 data-aos="fade-up" >Here is why you should join our community</h1>
        {/* set  start*/}
        <div data-aos="fade-right" className="d-flex point flex-row  mb-3">
          <div className="p-2 dot">
            <img src={ball} alt="" className="ball" />
          </div>

          <div className="p-2 flex-grow-1 txt_1 left">
            <p className="text-start  p-1 fs-4">
              Bring together people with similar interests and offer a
              safe-space to work on your skills
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="d-flex point flex-row-reverse ">
          <div className="p-2 dot">
            <img src={ball} alt="" className="ball" />
          </div>
          <div className="p-2 flex-grow-1 right">
            <p className="text-end p-1 fs-4">
              If you join us, you will surely build delightful, growing both
              personally and professionally without any pressure, you can build
              your skills without any stress
            </p>
          </div>
        </div>
        {/* set end*/}
        <div data-aos="fade-right" className="d-flex point flex-row  mb-3">
          <div className="p-2 dot">
            <img src={ball} alt="" className="ball" />
          </div>

          <div className="p-2 flex-grow-1 txt_1 left">
            <p className="text-start  p-1 fs-4">
              It's the best opportunity to establish a curiosity about the most
              recent technological and scientific developments
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="d-flex point flex-row-reverse ">
          <div className="p-2 dot">
            <img src={ball} alt="" className="ball" />
          </div>
          <div className="p-2 flex-grow-1 right">
            <p className="text-end p-1 fs-4">
              Take advantage of the masters' talk sessions to expand your
              knowledge of various subjects
            </p>
          </div>
        </div>

        <div data-aos="fade-right" className="d-flex point flex-row  mb-3">
          <div className="p-2 dot">
            <img src={ball} alt="" className="ball" />
          </div>

          <div className="p-2 flex-grow-1 txt_1 left">
            <p className="text-start  p-1 fs-4">
              With the assistance and support of experts, you can put the
              theoretical knowledge so learned into practice
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="d-flex point flex-row-reverse ">
          <div className="p-2 dot">
            <img src={ball} alt="" className="ball" />
          </div>
          <div className="p-2 flex-grow-1 right">
            <p className="text-end p-1  fs-4">
              You can improve your soft skills and get an awareness about the
              demand that society place on us
            </p>
          </div>
        </div>

        {/* <div className="d-flex point flex-row  mb-3">
          <div className="p-2 dot">
            <img src={ball} alt="" className="ball" />
          </div>

          <div className="p-2 flex-grow-1 txt_1 left">
            <p className="text-start  p-1 fs-3">
              It's all on meeting interesting people, working on our skills,
              grow personally and professionally- and enjoy doing so
            </p>
          </div>
        </div> */}

        {/* set end*/}

        {/* <Row>
            <Col sm={2} className="p-4 justify-content-center" >
              <img src={ball} alt="" className="ball"/>
            </Col >
            <Col className="p-4" >
            <p className="text-start  fs-3">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            </Col>
          </Row>

          <Row>
            <Col   className="p-4" >
            <p className="text-end fs-3">Lorem is Ipsum is simply dummy text of the printing and typesetting </p>
            </Col>
            <Col sm={2} className="p-4 justify-content-center" >
              <img src={ball} alt="" className="ball"/>
            </Col >
          </Row> */}
      </div>
    </div>
    // <div className="community_why">
    //   <p className="title">Here is why you should join our community</p>
    //   <div className="b1">
    //     <img src={ball} alt="" className="ball"/>
    //     <p className="text_left">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
    //     </div>
    //   <div className="b2">
    //     <img src={ball} alt="" className="ball"/>
    //     <p className="text_left">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
    //     </div>
    //   <div className="b3">
    //     <img src={ball} alt="" className="ball"/>
    //     <p className="text_right">We passages, and more recently with desktop publishing web page editors now usesearc.</p>
    //     </div>
    //   <div className="b4">
    //     <img src={ball} alt="" className="ball"/>
    //     <p className="text_right">We passages, and more recently with desktop publishing web page editors now usesearc.</p>
    //     </div>

    // </div>
  );
}

export default CommunityWhy;
