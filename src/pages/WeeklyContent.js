import React from "react";
import { useState, useEffect } from "react";
import "./Style/WeeklyContent.css";

import pic1 from "../images/weekly_content/week1.jpg";
import pic12 from "../images/weekly_content/week3.jpg";
import pic13 from "../images/weekly_content/week4.jpg";
import pic14 from "../images/weekly_content/week5.jpg";
import pic15 from "../images/weekly_content/week6.jpg";
import pic16 from "../images/weekly_content/week7.jpg";
import pic17 from "../images/weekly_content/week8.jpg";
import pic18 from "../images/weekly_content/week9.jpg";
import pic19 from "../images/weekly_content/week10.jpg";
import pic20 from "../images/weekly_content/week11.jpg";
import pic2 from "../images/weekly_content/week2.jpg";
import pic3 from "../images/weekly_content/pic3.jpg";
import pic4 from "../images/weekly_content/pic4.jpg";
import pic5 from "../images/weekly_content/pic5.jpg";
import pic6 from "../images/weekly_content/pic6.jpg";
import pic7 from "../images/weekly_content/pic7.jpg";
import pic8 from "../images/weekly_content/pic8.jpg";
import pic9 from "../images/weekly_content/pic9.jpg";
import pic10 from "../images/weekly_content/pic10.jpg";
import pic11 from "../images/weekly_content/pic11.jpg";

import NavBar from "../components/navBar";
import Footer from "../components/footer";



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
      title: "20",
      path :  pic20,
      link : "https://www.instagram.com/p/Cz2bOPBvH0B/?img_index=1 "
    },
    {
      title: "19",
      path :  pic19,
      link : "https://www.instagram.com/p/Czlr12EPp6G/?img_index=1 "
    },
    {
      title: "18",
      path :  pic18,
      link : "https://www.instagram.com/p/CzLpblOp7SO/?img_index=1 "
    },
    {
      title: "17",
      path :  pic17,
      link : "https://www.instagram.com/p/CyvFTAFp4jU/?img_index=1 "
    },
    {
      title: "16",
      path :  pic16,
      link : "https://www.instagram.com/p/CySJRMCy2p3/?img_index=1 "
    },
    {
      title: "15",
      path :  pic15,
      link : "https://www.instagram.com/p/CvTtJz6pcsf/?img_index=1 "
    },
    {
      title: "14",
      path :  pic14,
      link : "https://www.instagram.com/p/CtbiUqOpX5j/?img_index=1 "
    },
    {
      title: "13",
      path :  pic13,
      link : "https://www.instagram.com/p/CtEW7ONp7KP/?img_index=1 "
    },
    {
      title: "12",
      path :  pic12,
      link : "https://www.instagram.com/p/CssjOW_JZfp/?img_index=1 "
    },
    {
      title: "1",
      path :  pic1,
      link : "https://www.instagram.com/p/CrqlNVipRgM/?igshid=YmMyMTA2M2Y%3D "
    },
    {
      title: "2",
      path : pic2,
      link : "https://www.instagram.com/p/CsNg-u4plHd/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
    },
    {
      title: "3",
      path : pic3,
      link : "https://www.instagram.com/p/CqrrldqJ1GE/?igshid=YmMyMTA2M2Y%3D"
    },
    {
      title: "4",
      path : pic4,
      link : "https://www.instagram.com/p/Cp_3QVypFZl/?igshid=ZTE2MDY0MWU%3D"
    },
    {
      title: "5",
      path : pic5,
      link : "https://www.instagram.com/p/CprRKF-pWUa/?igshid=YmMyMTA2M2Y%3D"

    },
    {
      title: "6",
      path : pic6,
      link : "https://www.instagram.com/p/CpCIqyqpt3h/?igshid=YmMyMTA2M2Y%3D"

    },
    {
      title: "7",
      path : pic7,
      link : "https://www.instagram.com/p/CoU4lvwJoLH/?igshid=YWJhMjlhZTc%3D"
    },
    {
      title: "8",
      path : pic8,
      link : "https://www.instagram.com/p/CmjWgsDM-AO/?igshid=YmMyMTA2M2Y%3D"
    },
    {
      title: "9",
      path : pic9,
      link : "https://www.instagram.com/p/ClTeHI_pPd3/?igshid=YmMyMTA2M2Y%3D"
    },
    {
      title: "10",
      path : pic10,
      link : "https://www.instagram.com/p/CjQE82IJebe/?igshid=YmMyMTA2M2Y%3D"
    },
    {
      title: "11",
      path : pic11,
      link : "https://www.instagram.com/p/Ck0-EN6yOkX/?utm_source=ig_web_copy_link"

    }

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
                <div className="WCweek-img">
                  <img key={(item.title).default} src={item.path} alt={item.title} className="WCweek_1" />
                </div>
              </a>
              {/* <div className="WCweek-text">{item.title}</div> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WeeklyContent;
