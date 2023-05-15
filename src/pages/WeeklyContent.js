import React from "react";
import { useState, useEffect } from "react";
import "./Style/WeeklyContent.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import week1 from "./Images/week1.jpg"
import week2 from "./Images/week2.jpg"

function WeeklyContent() {
  //   const instagramPostUrl =
  //     "https://www.instagram.com/p/CrqlNVipRgM/?igshid=YmMyMTA2M2Y%3D";
  //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const oEmbedUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(
  //     instagramPostUrl
  //   )}`;

  //   const [imageSrc, setImageSrc] = useState([]);

  //   fetch(proxyUrl + oEmbedUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImageSrc = data.thumbnail_url;
  //       // Use imageSrc to display the image on your website
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  return (
    <div>
      <NavBar />
      <div className="WCmain">
        <div className="WCheading">Weekly Content</div>
        <div className="WCrow">
          <div className="WCcard">
            <a
              href="https://www.instagram.com/p/CrqlNVipRgM/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <div className="WCweek-img"><img src={week1} alt="Week-1" className="WCweek_1" /></div>
            </a>
            <div className="WCweek-text">Week 1</div>
          </div>
          <div className="WCcard">
            <a
              href="https://www.instagram.com/p/CsNg-u4plHd/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
              target="_blank"
            >
              <div className="WCweek-img"><img src={week2} alt="Week-2" className="WCweek_2" /></div>
            </a>
            <div className="WCweek-text">Week 2</div>
          </div>
          <div className="WCnot-card">ㅤ</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeeklyContent;
