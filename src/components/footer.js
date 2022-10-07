// import React from "react";
// import linkedin from './site_images/Linkedin.svg';
// import facebook from './site_images/Facebook.svg';
// import twitter from './site_images/Twitter.svg';
// import whatsapp from './site_images/Whatsapp.svg';
// import instagram from './site_images/Instagram.svg'
// function footer(){
//     return(
//     <div className="footer">
//         <p className="whiteText">Contact Us</p>
//     <div className="share_links">
//       <div className="linkedin circle"><img src={linkedin} alt="" className="linkedin_img"/></div>
//       <div className="twitter circle"><img src={twitter} alt=""  className="twitter_img"/></div>
//       <div className="whatsapp circle"><img src={whatsapp} alt="" className="whatsapp_img"/></div>
//       <div className="instagram circle"><img src={instagram} alt="" className="instagram_img"/></div>
//       <div className="facebook circle"><img src={facebook} alt="" className="facebook_img"/></div>
//       </div>
//     </div>
//     );
// }

// export default footer;

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

function Footer() {
  return (
    <footer class="text-center bg-dark">
      <div className="f-container">
        <div className="f-top">
          <div className="logo">
            <Link to="/">
              <Image
                className="f-logo"
                src={require("./site_images/eeti foundation-white.svg")}
              />
            </Link>
            
          </div>
          <div className="company">
            <span>
              <u>COMPANY</u>
            </span>
            <a href="/aboutus" className="f_links">
              About Us
            </a>
            <a href="/events" className="f_links">
              Events
            </a>
            <a href="/team" className="f_links">
              Team
            </a>
            <a href="/" className="f_links">
              Resources
            </a>
          </div>
          <div className="other-links">
            <span>
              <u>OTHER LINKS</u>
            </span>
            <a href="/" className="f_links">
              Privacy Policy
            </a>
            <a href="/" className="f_links">
              Terms and Conditions
            </a>
          </div>
        </div>
        <div class="down container justify text-white py-4 py-lg-5">
          {/* <ul class="list-inline">
            <li class="list-inline-item me-4"><a class="link-light" href="#">Web design</a></li>
            <li class="list-inline-item me-4"><a class="link-light" href="#">Development</a></li>
            <li class="list-inline-item"><a class="link-light" href="#">Hosting</a></li>
        </ul> */}

          {/* <h4>Contact Us</h4> */}
          <ul class="list-inline">
            <li class="list-inline-item me-4 ">
              <a href={info.linkedin}>
                <IoLogoLinkedin size="2rem" color="grey" />
              </a>
            </li>
            <li class="list-inline-item me-4">
              <a href={info.phone}>
                <IoLogoWhatsapp size="2rem" color="grey" />
              </a>
            </li>
            <li class="list-inline-item me-4">
              <a href={info.facebook}>
                <IoLogoFacebook size="2rem" color="grey" />
              </a>
            </li>
            <li class="list-inline-item me-4">
              <a href={info.instagram}>
                <IoLogoInstagram size="2rem" color="grey" />
              </a>
            </li>
            <li class="list-inline-item me-4">
              <a href={info.twitter}>
                <IoLogoTwitter size="2rem" color="grey" />
              </a>
            </li>
          </ul>
          <p class="text-muted mb-0">Copyright © 2022 EETI Foundation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
