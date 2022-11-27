import React, { useEffect, useState } from "react";
import EventCard from "./card";
import "./css/cardPanel.css";
import "./css/card.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function CardPanel() {
  let date = new Date();
  const { events } = useContext(AuthContext);
  console.log(events);

  return (
    <div className="cardPanel">
      <div className="upcoming position-relative">
        <p className="event-caution">*Click on the poster to register</p>
        <h1 className="position-absolute top-0 mb-3">Upcoming Events</h1>
        {events.map((event, i) => {
          const e_date = new Date(`${event.startDate}`);
          return e_date > date && <EventCard data={event} key={i} />;
        })}
      </div>

      <div className="closed position-relative">
        <h1 className="position-absolute top-0">Closed Events</h1>

        {events.map((event, i) => {
          const e_date = new Date(`${event.startDate}`);
          return e_date <= date && <EventCard data={event} key={i} />;
        })}
      </div>
    </div>
  );
}

export default CardPanel;
