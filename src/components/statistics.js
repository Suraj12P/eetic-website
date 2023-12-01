import React from "react";

import "./css/statistics.css";

import members from "../images/icons/members.jpg";
import events from "../images/icons/events.png";
import dreams from "../images/icons/dream.png";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="stat-heading">Statistics</div>
      <div className="stats">
        <div className="stat">
          <div>
            <img src={members} alt="" />
          </div>
          <div className="stat-data">
            <div className="stat-value">4000+</div>
            <div>Members</div>
          </div>
        </div>

        <div className="stat">
          <div>
            <img src={events} alt="" />
          </div>
          <div className="stat-data">
            <div className="stat-value">50+</div>
            <div>Free Events</div>
            <div>Organized</div>
          </div>
        </div>

        <div className="stat">
          <div>
            <img src={dreams} alt="" />
          </div>
          <div className="stat-data">
            <div className="stat-value">1000+</div>
            <div>Students Guided</div>
            <div>To Their Dreams</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
