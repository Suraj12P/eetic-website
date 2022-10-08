import React from "react";
import CareersCard from "./careers-card";
import "../components/css/careers.css";

const CareersPanel = () => {
  return (
    <div className="careers-panel">
      <h2 className="careers-title">Careers</h2>
      <div className="careers-panel-cards">
        <CareersCard
          title="Internship"
          desc="Are you someone who is crazy about editting and designing?

Interested to put down your thoughts rather than expressing them through your speech?

Do you believe that your words can enlighten the minds of common masses inspiring them to explore themselves?

If you have the skill to pen down your ideas then it's for you...

Are you confident enough to precisely position video shorts to create an engaging visual?

Then what are you waiting for!? Come join us to build you career, pursue your dream!"
        />
      </div>
    </div>
  );
};

export default CareersPanel;
