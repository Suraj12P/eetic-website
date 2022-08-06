// import React from "react";
// import './css/footer.css';
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


import React from 'react'
import {IoLogoLinkedin,IoLogoWhatsapp,IoLogoTwitter,IoLogoInstagram, IoLogoFacebook} from 'react-icons/io';
import {info } from '../data/info';


function Footer() {
  return (
    <footer class="text-center bg-dark">
    <div class="container justify text-white py-4 py-lg-5">

        {/* <ul class="list-inline">
            <li class="list-inline-item me-4"><a class="link-light" href="#">Web design</a></li>
            <li class="list-inline-item me-4"><a class="link-light" href="#">Development</a></li>
            <li class="list-inline-item"><a class="link-light" href="#">Hosting</a></li>
        </ul> */}

        <h4 >Contact Us</h4>
        <ul class="list-inline">
            <li class="list-inline-item me-4">
            <a href={info.linkedin}><IoLogoLinkedin size="1.5em"  color="grey"/></a>  
            </li>
            <li class="list-inline-item me-4">
            <a href={info.phone}><IoLogoWhatsapp size="1.5em" color="grey"/></a>
            </li>
            <li class="list-inline-item me-4">
            <a href={info.facebook}><IoLogoFacebook size="1.5em" color="grey"/></a>
            </li>
            <li class="list-inline-item me-4">
            <a href={info.instagram}><IoLogoInstagram size="1.5em" color="grey"/></a>
            </li>
            <li class="list-inline-item me-4">
            <a href={info.twitter}><IoLogoTwitter size="1.5em" color="grey"/></a>
            </li>
        </ul>
        <p class="text-muted mb-0">Copyright © 2022 EETICommunity</p>
    </div>
</footer>
  )
}

export default Footer