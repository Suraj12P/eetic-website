import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/card.css";
import yt from "./site_images/yt.svg";
import { useRef } from "react";

function EventCard({ data }) {
  // console.log(data);
  const [isOpen, setIsOpen] = useState(1);
  const frontRef = useRef();
  const rearRef = useRef();
  let e_date = null;

  useEffect(() => {
    e_date = new Date(`${data.start_date}`);
    if (e_date <= new Date()) setIsOpen(0);
    else setIsOpen(1);
  }, []);

  const handleClick = () => {
    if (rearRef.current.style.transform == "rotateY(-180deg)") {
      frontRef.current.style.transform = "rotateY(180deg)";
      rearRef.current.style.transform = "rotateY(0deg)";
    } else {
      frontRef.current.style.transform = "rotateY(0deg)";
      rearRef.current.style.transform = "rotateY(-180deg)";
    }
  };

  return (
    <div className="card position-relative" onClick={handleClick}>
      <div className={`card-front`} ref={frontRef}>
        <img src={data.poster_url} alt="card" className="position-absolute" />
      </div>
      <div className={`card-details card-rear position-absolute`} ref={rearRef}>
        <h2 className="mt-4">{data.event_name}</h2>
        <p className="desc mt-3">{data.description}</p>
        <div className="det-container d-flex flex-column">
          {/* {console.log(new Date().getDate())} */}

          <span className="det-date">
            {`Date : ${new Date(data.start_date).getDate()}/${new Date(
              data.start_date
            ).getMonth() + 1}/${new Date(data.start_date).getFullYear()}`}{" "}
          </span>

          <span className="det-time">
            {`Time : ${new Date( data.start_date).getHours() % 12}:${new Date(data.start_date).getMinutes() == 0 ? "00" : new Date(data.start_date).getMinutes()}
            ${new Date(data.start_date).getHours() < 12 ? "AM" : "PM"}`}
          </span>

          <span className="det-venue">{`Venue : ${data.venue}`} </span>
        </div>
        {isOpen ? (
          <a href={data.registration_link} target="_blank" rel="noreferrer">
          <button type="button" class=" register btn btn-primary">
            Register
          </button></a>
        ) : (
          <a href={data.yt}>
            <button type="button" class="register-closed btn btn-primary">
              <img className="yt" src={yt} alt="" />
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default EventCard;
