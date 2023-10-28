import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/card.css";
import yt from "./site_images/yt.svg";
import { useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { NavLink } from "react-router-dom";

const builder = imageUrlBuilder({
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  dataset: "production",
});

const urlFor = (source) => {
  // console.log(builder.image(source).url());
  return builder.image(source);
};

function EventCard({ data }) {
  const [isOpen, setIsOpen] = useState(1);
  const frontRef = useRef();
  const rearRef = useRef();
  let e_date = null;

  useEffect(() => {
    // console.log(data);
    e_date = new Date(`${data.startDate}`);
    if (e_date <= new Date()) setIsOpen(0);
    else setIsOpen(1);
  }, []);

  const handleClick = () => {
    if (window.innerWidth < 769) {
      rearRef.current.classList.toggle("flip-rear");
      frontRef.current.classList.toggle("flip-front");
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="card position-relative"
      onClick={handleClick}
    >
      <div className={`card-front`} ref={frontRef}>
        {/* <img src={data.poster_url} alt="card" className="position-absolute" /> */}
        <img
          // src={urlFor(`${data.poster_url.asset._ref}`).toString()}
          src={data.poster_url?.asset.url}
          alt="card"
          className="position-absolute"
        />
      </div>
      <div className={`card-details card-rear position-absolute`} ref={rearRef}>
        <h2 className="mt-4">{data.event_name}</h2>
        <p className="desc mt-3">{data.description}</p>
        <div className="det-container d-flex flex-column">
          {/* {console.log(new Date().getDate())} */}

          <span className="det-date">
            {`Date : ${new Date(data.startDate).getDate()}/${
              new Date(data.startDate).getMonth() + 1
            }/${new Date(data.startDate).getFullYear()}`}{" "}
          </span>

          <span className="det-time">{`Time : ${
            new Date(data.startDate).getHours() % 12
          }.${new Date(data.startDate).getMinutes()} ${
            new Date(data.startDate).getHours() < 12 ? "am" : "pm"
          }`}</span>

          <span className="det-venue">{`Venue : ${data.venue}`} </span>
        </div>
        {isOpen ? (
          <NavLink
            to={
              data._id === "8f787a4f-f857-40c3-91fa-f5f43c200368" ? (
                "/registerevent"
              ) : data._id === "ccfcc17e-12c7-4816-b8c0-e26dba79d23c" ? (
                "/registerevent1"
              ) : (
                data.registration_link
              )
            }
            // target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className=" register btn btn-primary" /*hidden-in-mobile*/
            >
              Register
            </button>
          </NavLink>
        ) : (
          <a href={data.yt}>
            <button type="button" className="register-closed btn btn-primary">
              <img className="yt" src={yt} alt="" />
            </button>
          </a>
        )}
        {/* <button type="button" className=" register btn btn-primary shown-in-mobile">
              Register
            </button> */}
      </div>
    </div>
  );
}

export default EventCard;
