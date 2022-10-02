import React, { useEffect, useState } from "react";
import EventCard from "./card";
import "./css/cardPanel.css";
import "./css/card.css";
import { event_data } from "../data/event";

function CardPanel() {
  let date = new Date();
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    event_data.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    event_data.reverse();
    console.log(event_data); 
    setSortData(event_data);
  }, []);

  return (
    <div className="cardPanel">
      <div className="upcoming position-relative">
        <h1 className="position-absolute top-0">Upcoming Events</h1>

        {sortData.map((event, i) => {
          const e_date = new Date(`${event.start_date}`);
          return e_date > date && <EventCard data={event} key={i} />;
        })}
      </div>

      <div className="closed position-relative">
        <h1 className="position-absolute top-0">Closed Events</h1>

        {sortData.map((event, i) => {
          const e_date = new Date(`${event.start_date}`);
          return e_date <= date && <EventCard data={event} key={i} />;
        })}
      </div>
    </div>
  );
}

export default CardPanel;
