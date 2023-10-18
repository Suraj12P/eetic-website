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
        <h1 className="mt-5">Mission</h1>
        <p className="mt-5 ">
        At EETIF, our mission is to unite students in spreading knowledge on the most
sought-after technologies and skills, enabling them to collectively pursue innovation,
leadership, entrepreneurship, and social impact. Our tagline, <b>'Grow Together, Build
Tomorrow,'</b> encapsulates our commitment to fostering a community where members
empower each other to become visionary leaders, tech pioneers, and problem-solving
entrepreneurs, working together to create a brighter, more inclusive future.

        </p>
        <h1 className="mt-5">Vision</h1>
        <p className="mt-5 ">
        Our vision for this student community is to mold individuals into their best versions,
equipping them to pursue their dream jobs or become impactful entrepreneurs, poised to
make a global difference. We are committed to nurturing exceptional leadership and
other essential skills vital for success in today's rapidly changing world, with a special
emphasis on fostering creativity and innovation. Our aim is to empower the youth to not
only adapt but also thrive in a dynamic and evolving landscape, helping them emerge as
influential change-makers with the potential to leave a lasting mark on the world.

        </p>

        <p className="mt-5 ">
        In conclusion, EETIF has always worked to provide outstanding results and its very
functionality is a testament to the power of passion and expertise of all working within the
team. Our unwavering commitment to innovation and excellence not only benefits our
members but also has a broader positive impact on all who are benefited through our
resources, workshops etc. our accomplishments serve as a shining example of what can
be achieved when like-minded individuals come together to push the boundaries of
knowledge and technology. We would always strive to make the world a better place.

          </p>
      </div>
    </Container>
  );
};
export default AboutUs;
