import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/card.css";
import yt from "./site_images/yt.svg";

function EventCard({ data }) {
  // console.log(data);
  const [isOpen, setIsOpen] = useState(1);
  let e_date = null;

  useEffect(() => {
    e_date = new Date(`${data.start_date}`);
    if (e_date <= new Date()) setIsOpen(0);
    else setIsOpen(1);
  }, []);

  return (
    <div className="card position-relative">
      <div className={`card-front `}>
        {/* <span className="ig-id">@eeti_community</span> */}
        <img
          src={data.poster_url}
          // src={cardimg}
          alt="card"
          className="position-absolute"
        />
        {/* <div className="text">
          <h2>{data.event_name}</h2>

          <div className="container d-flex flex-column justify-content-center">
            <span className="date">
              {`Date : ${new Date(data.start_date).getDate()}/${new Date(
                data.start_date
              ).getMonth()+1}/${new Date(data.start_date).getFullYear()}`}{" "}
            </span>

            <span className="time">{`Time : ${new Date(
              data.start_date
            ).getHours()}.${new Date(data.start_date).getMinutes()} ${
              new Date(data.start_date).getHours() < 12 ? "am" : "pm"
            }`}</span>

            <span className="venue">{`Venue : ${data.venue}`} </span>
          </div>
        </div>

        <div className="speaker">
          <span className="name">{data.host_name}</span>
          <span className="company">Lorem, ipsum dolor.</span>
        </div> */}
      </div>
      <div className={`card-details card-rear position-absolute`}>
        <h2 className="mt-4">{data.event_name}</h2>
        <p className="desc mt-3">{data.description}</p>
        <div className="det-container d-flex flex-column">
          {/* {console.log(new Date().getDate())} */}

          <span className="det-date">
            {`Date : ${new Date(data.start_date).getDate()}/${new Date(
              data.start_date
            ).getMonth() + 1}/${new Date(data.start_date).getFullYear()}`}{" "}
          </span>

          <span className="det-time">{`Time : ${new Date(
            data.start_date
          ).getHours() % 12}.${new Date(data.start_date).getMinutes()} ${
            new Date(data.start_date).getHours() < 12 ? "am" : "pm"
          }`}</span>

          <span className="det-venue">{`Venue : ${data.venue}`} </span>
        </div>
        {isOpen ? (
          <button type="button" class=" register btn btn-primary">
            Register
          </button>
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
