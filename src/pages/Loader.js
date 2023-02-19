import React from "react";
import "../components/css/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="ld-container">
        <div id="loader" className="qt-loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
