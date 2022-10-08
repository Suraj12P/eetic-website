import React from "react";
import "./css/MemberCard.css";
import { IoLogoLinkedin } from "react-icons/io";

const MemberCard = ({ name, position, image, linkedin, type }) => {
  return (
    <div className={`member-card`}>
      <div className={`member-card-image`}>
        <img src={image} alt="member" />
      </div>
      <div className={`member-card-details`}>
        <h3>{name}</h3>
        <p>{position}</p>
        <div className={`member-card-socials`}>
          <a
            href={`https://www.linkedin.com/in/${linkedin}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size="1.5em" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
