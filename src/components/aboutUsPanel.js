import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
import "./css/about.css";
import saly from "./site_images/Saly-10.svg";

const AboutUs = () => {
  return (
    <Container className="about-us mb-5">
      <div className="about-content mx-2">
        <Image src={saly} className="about-img float-md-end mb-3 ms-md-3" />
        <h1 className="mt-5">About Us</h1>
        <p className="mt-5 ">
          EETI Foundation is a community initiative from College of Engineering
          Trivandrum aiming to open up a new world of technology to the young
          minds out there. An exuberant group of young minds from Kerala, having
          students and mentors from all facets who have build products that have
          been game changers, and we are on a mission to spread the knowledge
          onto a much wider group of audience helping them learn the most hyped
          technologies and skills, to help them build the next big thing. We
          provide all our expertise to help explore enthusiasts to explore the
          possibility of the most hyped technologies, software etc. availing in
          this fast growing world. Our most hyped program SUPER 10, provides a
          platform to unleash your skills so as to present your big ideas on
          canvas to a group of some big investors out there and thereby
          exploring yourselves unwinding new opportunities. Besides all these we
          also aim at self development which helps each one to face even the
          most difficult situation professionally. With more than 1000 strong
          members, we would love to expand our reach, help making learning tech
          much more easier, hands on , and interesting. We hope that this will
          be a great opportunity to connect with like minded people, industry
          leaders and students who would have one same dream, to learn build and
          grow with EETI
        </p>
      </div>
    </Container>
  );
};
export default AboutUs;
