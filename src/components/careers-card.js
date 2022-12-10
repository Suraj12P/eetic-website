import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import careers from "../images/careers.jpg";
import "./css/careers.css";

const builder = imageUrlBuilder({
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  dataset: "production",
});

const urlFor = (source) => {
  // console.log(builder.image(source).url());
  return builder.image(source);
};

const CareersCard = ({ title, desc, link, poster, disabled }) => {
  // console.log(title, desc, link,poster ,disabled)
  return (
    <div className="careers-card">
      <div className="img">
        <img src={urlFor(`${poster.asset._ref}`).toString()} alt="careers" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        {/* <span className="type">
          Job Type : <b> Internship</b>
        </span> */}
        <p className="p-content">{desc}</p>
      </div>
      {disabled ? (
        <button disabled={disabled} className="apply-btn apply">
          Registration Closed
        </button>
      ) : (
        <button disabled={disabled} className="apply-btn">
          <a href={link} className="apply">
            Apply Now
          </a>
        </button>
      )}
    </div>
  );
};

export default CareersCard;
