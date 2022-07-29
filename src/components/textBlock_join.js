import React from "react";
import './css/textBlock_join.css';
import ball from './site_images/ball.svg'
function textBlock_join(){
    return(
    <div className="textBlock_join">
      <p className="title">Here is why you should join our community</p>
      <div className="b1">
        <img src={ball} alt="" className="ball"/>
        <p className="text_left">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        </div>
      <div className="b2">
        <img src={ball} alt="" className="ball"/>
        <p className="text_left">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        </div>
      <div className="b3">
        <img src={ball} alt="" className="ball"/>
        <p className="text_right">We passages, and more recently with desktop publishing web page editors now usesearc.</p>
        </div> 
      <div className="b4">
        <img src={ball} alt="" className="ball"/>
        <p className="text_right">We passages, and more recently with desktop publishing web page editors now usesearc.</p>
        </div>  
    
      </div>
    );
}

export default textBlock_join;