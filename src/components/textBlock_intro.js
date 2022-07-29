import React, { useState } from "react";
import './css/textBlock_intro.css';
import Button from "react-bootstrap/Button";
import IMAGES from "..";
import arc from './site_images/arc.svg'
import left_arrow from './site_images/arrow-left.svg';
import right_arrow from './site_images/arrow-right.svg';





function textBlock_intro(){
  const [i,setIndex]=useState(0);

function left(){
  if(i===0)
    setIndex(IMAGES.length-1);
  else
  setIndex(i-1);
}

function right(){
  if(i===IMAGES.length-1)
    setIndex(0);
  
  else
  setIndex(i+1);
}
    return(
    <div className="textBlock_intro">
        <div className="text">
          <p className="p1">One of the biggest jakdjowej akfjoa</p>
          <p className="p2">EETIC Community</p>
          <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Button variant="outlined">Read more</Button>
          <img src={IMAGES[i]} alt="" className="showReel"/>
          <img src={arc} className="arc" alt=""/>
          <img src={left_arrow} className="left" onClick={left} alt=""/>
          <img src={right_arrow} className="right"onClick={right} alt=""/>
        </div>
      </div>
    );
}

export default textBlock_intro;

 