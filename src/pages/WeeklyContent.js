import React from "react";
import { useState, useEffect } from "react";
import "./Style/WeeklyContent.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import week1 from "./Images/week1.jpg";
import week2 from "./Images/week2.jpg";

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

  const weeklyContent = [
    {
      title: "Week 1",
      path : week1,
      link : "https://www.instagram.com/p/CrqlNVipRgM/?igshid=YmMyMTA2M2Y%3D "
    },
    {
      title: "Week 2",
      path : week2,
      link : "https://www.instagram.com/p/CsNg-u4plHd/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
    },

  ]

  return (
    <div className="weeklycontent">
      <NavBar />
      <div className="WCmain">
        <div className="WCheading">Weekly Content</div>
        <div className="WCrow">
          {weeklyContent.map((item) => (
            <div className="WCcard">
              <a 
                href={item.link}
                target="_blank"
              >
                <div className="WCweek-img"><img src={item.path} alt={item.title} className="WCweek_1" /></div>
              </a>
              <div className="WCweek-text">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeeklyContent;
