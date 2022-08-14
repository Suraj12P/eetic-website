import React from "react";
import './css/community_why.css';
import ball from './site_images/ball.svg'
import { Container, Row, Col } from "react-bootstrap";
function Community_why() {
  return (
    <div className="community_why">
      <div className="header p-4">
        <h1>Here is why you should join our community</h1>
{/* set  start*/}
        <div class="d-flex flex-row  mb-3">
          <div class="p-4 ">
            <img src={ball} alt="" className="ball" />
          </div>
          
          <div class="p-2 flex-grow-1 txt_1">
            <p className="text-start  p-1 fs-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
        <div class="d-flex flex-row-reverse ">
          <div class="p-4 ">
            <img src={ball} alt="" className="ball" />

          </div>
          <div class="p-2 flex-grow-1">
            <p className="text-end p-1  fs-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
{/* set end*/}
        <div class="d-flex flex-row  mb-3">
          <div class="p-4 ">
            <img src={ball} alt="" className="ball" />
          </div>
          
          <div class="p-2 flex-grow-1 txt_1">
            <p className="text-start  p-1 fs-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
        <div class="d-flex flex-row-reverse ">
          <div class="p-4 ">
            <img src={ball} alt="" className="ball" />

          </div>
          <div class="p-2 flex-grow-1">
            <p className="text-end p-1  fs-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
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

export default Community_why;