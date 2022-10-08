import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import CareersPanel from "../components/CareersPanel";
import "../components/css/careers.css";

const Careers = () => {
  return (
    <div>
      <NavBar />
      <CareersPanel />
      <Footer />
    </div>
  );
};

export default Careers;
