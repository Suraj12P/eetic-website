import React from "react";
import careers from "../images/careers.jpg";
import "./css/careers.css";

const CareersCard = ({ title, desc, link,poster }) => {
  return (
    <div className="careers-card">
      <div className="img">
        <img src={poster} alt="careers" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        {/* <span className="type">
          Job Type : <b> Internship</b>
        </span> */}
        <p style={{ "marginTop": "15px" }}>{desc}</p>
      </div>
      <div className="apply-btn">
        <a href={link} className="apply">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CareersCard;
