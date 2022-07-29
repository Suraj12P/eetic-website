import React from "react";
import './css/footer.css';
import linkedin from './site_images/Linkedin.svg';
import facebook from './site_images/Facebook.svg';
import twitter from './site_images/Twitter.svg';
import whatsapp from './site_images/Whatsapp.svg';
import instagram from './site_images/Instagram.svg'
function footer(){
    return(
    <div className="footer">
        <p className="whiteText">Contact Us</p>
    <div className="share_links">
      <div className="linkedin circle"><img src={linkedin} alt="" className="linkedin_img"/></div>
      <div className="twitter circle"><img src={twitter} alt=""  className="twitter_img"/></div>
      <div className="whatsapp circle"><img src={whatsapp} alt="" className="whatsapp_img"/></div>
      <div className="instagram circle"><img src={instagram} alt="" className="instagram_img"/></div>
      <div className="facebook circle"><img src={facebook} alt="" className="facebook_img"/></div>
      </div>
    </div>
    );
}

export default footer;