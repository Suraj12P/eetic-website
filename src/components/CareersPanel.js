import React, { useContext } from "react";
import CareersCard from "./careers-card";
import "../components/css/careers.css";
import { DataContext } from "../context";

const CareersPanel = () => {
  const { careers } = useContext(DataContext);
  // console.log("from context api !!!!!!!!!!!!!!!!" + careers);

  return (
    <div className="careers-panel">
      <h2 className="careers-title">Careers</h2>
      <div className="careers-panel-cards">
        {careers.map((c, i) => (
          <CareersCard
            title={c.title}
            desc={c.desc}
            link={c.link}
            poster={c.poster}
            disabled={c.disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default CareersPanel;
