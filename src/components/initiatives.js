import React from "react";
import "./css/initiatives.css";

// import imag from "./site_images/campus-1.jpg";

const Initiatives = () => {
  const handleCardClick = () => {
    window.open("https://www.campus.eetifoundation.org", "_blank");
  };

  return (
    <div className="Imain">
      <h1 className="Iheading">Our Initiatives</h1>
      <div className="Icards-Row1">
        <div className="Icard" onClick={handleCardClick}>
          {/* <img className="ICCImag" src={imag} alt="Image" /> */}
          <div className="IcardHead">CAMPUS COMMUNITY</div>
          <div className="IcardContent">
            This is an initiative to let students network with professionals,
            tech enthusiasts and stand out in the crowd. As a part of marking
            EETIF’s presence in all colleges and making sure that our resources
            and workshops are being utilized to the fullest and being benefited
            from; EETIF decided to setup campus communities all through Kerala,
            where a proficient executive committee will overlook all the matters
            concerning with the functioning of the community. In addition to
            benefiting the students of the respective campuses it also gives an
            excellent opportunity to the exe-com to build and showcase their
            leadership and organizational skills.
          </div>
        </div>
        <div className="Icard">
          <div className="IcardHead">STARTUP SCHOOL</div>
          <div className="IcardContent">
            This initiative, started in colleges across Kerala was intended to
            boost entrepreneurship skills in students and guide them through all
            the steps of their startup journey. Startup school is an elaborate
            one year program where the selected students are guided and trained
            to become exemplary entrepreneurs capable of initiating startups of
            their own. Building these curious minds from ground zero, by
            equipping them with knowledge on all facets of entrepreneurship and
            encouraging them to become the future of tomorrow has always been
            the prime aim of startup schools.
          </div>
        </div>
      </div>
      <div className="Icards-Row2">
        <div className="Icard">
          {/* <img className="ICCImag" src={imag} alt="Image" /> */}
          <div className="IcardHead">SUPER10</div>
          <div className="IcardContent">
            With new advancements in technology and changing market landscapes
            it is only necessary that students find their place and seize
            opportunities for innovation and success. Super10 is an initiative
            where a team of selected students would be trained and guided by
            professionals from various fields. This one year programme seeks to
            create the future of tomorrow by training these selected students
            and frequently driving them through a set of workshops and
            mentorships to sharpen their skills and instill leadership qualities
            in them. Super10 promotes them to embrace this moment and urges them
            to learn and connect.
          </div>
        </div>
        <div className="Icard">
          <div className="IcardHead">INDUSTRIAL CONNECT</div>
          <div className="IcardContent">
            With the year by year rise in employment scale and a resulting dip
            in opportunities it has to be noted that only the top-notch layer in
            any crowd receives the jobs they desire. Here EETIF comes in with
            our initiative to urge students to step forward, building and
            helping them with their placement choices and opportunities.
            Industrial connect was aimed to connect students directly with
            professionals who work in different industries so that they would be
            able to analyze and compare on various factors regarding their
            future and ultimately deciding on what they truly want and preparing
            for the same under the guidance of these experts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
