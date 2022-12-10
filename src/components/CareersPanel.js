import React, { useContext } from "react";
import CareersCard from "./careers-card";
import "../components/css/careers.css";
import p1 from "../images/2.png";
import p2 from "../images/6.png";
import p3 from "../images/5.png";
import { DataContext } from "../context/DataContext";

const careersArray = [
  {
    title: "Internship",
    desc:
      "Are you someone who is crazy about editting and designing?\
\
    Interested to put down your thoughts rather than expressing them through your speech?\
    \
    Do you believe that your words can enlighten the minds of common masses inspiring them to explore themselves?\
    \
    If you have the skill to pen down your ideas then it's for you...\
    \
    Are you confident enough to precisely position video shorts to create an engaging visual?\
    \
    Then what are you waiting for!? Come join us to build you career, pursue your dream!",
    link: "https://bit.ly/EETI-INTERN",
    poster: p1,
  },
  {
    title: "Web interns",
    desc:
      "The secret of getting ahead is getting started. \
          – Mark Twain \
\
      Hey folks✨ \
\
      The EETI Foundation is a community established by college students for all tech enthusiasts. 😍 \
\
      We are hiring web interns!!!💻 \
\
      We need some tech enthusiasts to help out with developing our own website : \
      📍https://www.eetifoundation.org/   \
\
      This will be an amazing opportunity for all those who are technically trained with the basics on web development.👨🏻‍💻...👩🏻‍💻 \
      Prerequisites : ReactJs, CSS   \
      Certificates will be provided to selected candidates☺  \
\
      So what are you waiting for...\
      Enroll now ❗❗❗: \
      ",
    link: "https://bit.ly/EETI-WEB-INTERNS",
    poster: p2,
  },
  {
    title: "Program Team",
    desc:
      ' "Sometimes you need to forget how you feel and think of what you deserve." \
\
    Hey folks!!🤗\
\
    Are you one among those who take the initiative and is upfront during the course of an event. Then here is what you have been looking for...😃 \
    EETI Foundation is here, in search of people to take forth our program team. \
    Come join us!! 🥳',

    link: "/",
    poster: p3,
  },
];

const CareersPanel = () => {
  const { careers } = useContext(DataContext);
  console.log("from context api !!!!!!!!!!!!!!!!" + careers);

  return (
    <div className="careers-panel">
      <h2 className="careers-title">Careers</h2>
      <div className="careers-panel-cards">
        <CareersCard
          title={careersArray[2].title}
          desc={careersArray[2].desc}
          link={careersArray[2].link}
          poster={careersArray[2].poster}
          disabled={false}
        />
        <CareersCard
          title={careersArray[1].title}
          desc={careersArray[1].desc}
          link={careersArray[1].link}
          poster={careersArray[1].poster}
          disabled={false}
        />
        <CareersCard
          title={careersArray[0].title}
          desc={careersArray[0].desc}
          link={careersArray[0].link}
          poster={careersArray[0].poster}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default CareersPanel;
