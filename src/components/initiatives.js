import React from "react";
import "./css/initiatives.css";

import imag from "./site_images/campus-1.jpg";

const Initiatives = () => {
  const handleCardClick = () => {
    window.open("https://www.campus.eetifoundation.org", "_blank");
  };

  return (
    <div>
      <h1 className="Iheading">Campus Initiatives</h1>
      <div className="Icards">
        <div className="Icard" onClick={handleCardClick}>
          {/* <img className="ICCImag" src={imag} alt="Image" /> */}
          <div className="IcardHead">Campus Community</div>
          <div className="IcardContent">
            The EETI campus initiative empowers students to succeed in their
            careers by building tech communities on campus and providing
            resources and opportunities. The program offers a range of
            activities and access to mentors who are professionals in the tech
            industry to help students develop their skills and connect with
            like-minded individuals. By creating a supportive environment where
            students can learn and grow together, the EETI campus initiative
            helps students achieve their goals. It is a valuable program that
            helps students build their networks, develop their skills, and
            succeed in their career aspirations.
          </div>
        </div>
        <div className="Icard Icard2">
          <div className="IcardHead">Startup School</div>
          <div className="IcardContent Icard2Content">COMING SOON!</div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
