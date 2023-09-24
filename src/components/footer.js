import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { Image } from "react-bootstrap";
import {
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { info } from "../data/info";
import "./css/footer.css";
import logo from "./site_images/eeti foundation-white.svg";

function Footer() {
  return (
    <footer className="text-center bg-dark">
      <div className="f-container">
        <div className="f-top">
          <div className="logo">
            <Link to="/">
              <Image
                className="f-logo"
                // src={require("./site_images/eeti foundation-white.svg")}
                src={logo}
              />
            </Link>
            
          </div>
          <div className="company">
            {/* <span>
              <u>COMPANY</u>
            </span> */}
            {/* <div className="first_row"> */}
              <a href="/aboutus" className="f_links">
                About Us
              </a>
              <a href="/events" className="f_links">
                Events
              </a>
            {/* </div> */}
            {/* <div className="second_row"> */}
              <a href="/team" className="f_links">
                Team
              </a>
              <a href="/resources" className="f_links">
                Resources
              </a>
            {/* </div> */}
          </div>
          {/* <div className="other-links">
            <span>
              <u>OTHER LINKS</u>
            </span>
            <a href="/404" className="f_links">
              Privacy Policy
            </a>
            <a href="/404" className="f_links">
              Terms and Conditions
            </a>
          </div> */}
        </div>
        <div className="copyright down container justify text-white py-lg-4">
            {/* <ul className="list-inline">
              <li className="list-inline-item me-4"><a className="link-light" href="#">Web design</a></li>
              <li className="list-inline-item me-4"><a className="link-light" href="#">Development</a></li>
              <li className="list-inline-item"><a className="link-light" href="#">Hosting</a></li>
          </ul> */}

          {/* <h4>Contact Us</h4> */}
          <ul className="list-inline social-media" >
            <li className="list-inline-item social-media-item">
              <a href={info.linkedin}>
                <IoLogoLinkedin size="1.7rem" color="grey" />
              </a>
            </li>
            <li className="list-inline-item social-media-item">
              <a href={info.phone}>
                <IoLogoWhatsapp size="1.7rem" color="grey" />
              </a>
            </li>
            {/* <li className="list-inline-item social-media-item">
              <a href={info.facebook}>
                <IoLogoFacebook size="1.7rem" color="grey" />
              </a>
            </li> */}
            <li className="list-inline-item social-media-item">
              <a href={info.instagram}>
                <IoLogoInstagram size="1.7rem" color="grey" />
              </a>
            </li>
            {/* <li className="list-inline-item social-media-item">
              <a href={info.twitter}>
                <IoLogoTwitter size="1.7rem" color="grey" />
              </a>
            </li> */}
          </ul>
          <p className="text-muted mb-0">Copyright © 2022 EETI Foundation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
