import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Image } from "react-bootstrap";
import "./css/about.css";
import saly from "./site_images/Saly-10.svg";



const AboutUs = () => {
  return (
    <Container className="about-us mb-4">
      <div className="about-content"> 
        < Image src={saly} className="float-md-end mb-3 ms-md-3" />
        <h1 className="mt-5">AboutUs</h1> 
        <p className="mt-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl. Eu non diam phasellus vestibulum lorem sed risus. A iaculis at erat pellentesque adipiscing. Ultrices gravida dictum fusce ut placerat orci. Placerat in egestas erat imperdiet sed euismod nisi. Odio aenean sed adipiscing diam. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Cursus turpis massa tincidunt dui ut. Sed lectus vestibulum mattis ullamcorper. Nibh praesent tristique magna sit. Quis hendrerit dolor magna eget est lorem. Ut faucibus pulvinar elementum integer enim neque volutpat ac.</p>
        <p>Sit amet mauris commodo quis imperdiet. Arcu odio ut sem nulla pharetra. Leo duis ut diam quam nulla. Donec enim diam vulputate ut pharetra sit amet aliquam. Massa sed elementum tempus egestas sed sed risus pretium. Massa id neque aliquam vestibulum. Molestie a iaculis at erat. Et malesuada fames ac turpis. Vivamus at augue eget arcu dictum varius duis at. Molestie ac feugiat sed lectus vestibulum. Scelerisque fermentum dui faucibus in. Netus et malesuada fames ac turpis egestas. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.</p>
        <p>Porta non pulvinar neque laoreet suspendisse interdum. Eu volutpat odio facilisis mauris sit amet. Nisl purus in mollis nunc sed id semper risus. Enim diam vulputate ut pharetra. Volutpat blandit aliquam etiam erat. Tellus cras adipiscing enim eu turpis egestas. Rhoncus dolor purus non enim praesent elementum facilisis. Placerat vestibulum lectus mauris ultrices eros in. Pharetra sit amet aliquam id diam maecenas. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Pretium quam vulputate dignissim suspendisse in est ante. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Viverra justo nec ultrices dui sapien. Tortor at auctor urna nunc id cursus metus. Amet tellus cras adipiscing enim eu turpis egestas pretium. Ut aliquam purus sit amet luctus venenatis. Sapien nec sagittis aliquam malesuada bibendum. Ut pharetra sit amet aliquam id diam maecenas ultricies.</p>
      </div>
    </Container>
    
  );
}; export default AboutUs;