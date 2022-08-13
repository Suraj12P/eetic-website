import React from 'react'
import "../components/css/navBar.css";
import Button from "react-bootstrap/Button";
function UnderDev() {
    return (
        <div class="px-4 py-5 my-5 text-center">
            {/* <img class="d-block mx-auto mb-4" src="https://via.placeholder.com/100" /> */}
            <h1 class="display-5 fw-bold">Coming Soon ...</h1>
            <div class="col-lg-6 m-auto">
                <p class="lead mb-4">Website is Under Maintenance !</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Button className="signInUpButton signIn">Home</Button>

                </div>
            </div>
        </div>
    )
}

export default UnderDev