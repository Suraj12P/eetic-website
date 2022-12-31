import React from "react";
import "../components/css/navBar.css";
import Button from "react-bootstrap/Button";
function UnderDev() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      {/* <img className="d-block mx-auto mb-4" src="https://via.placeholder.com/100" /> */}
      <h1 className="display-5 fw-bold">Coming Soon ...</h1>
      <div className="col-lg-6 m-auto">
        <p className="lead mb-4">Website is Under Maintenance !</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/">
            <Button className="signInUpButton signIn">Home</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UnderDev;
