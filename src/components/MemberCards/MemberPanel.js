import React from "react";
import "../css/MemberPanel.css";

import MemberCard from "./MemberCard";
import ProgramTeam from "./ProgramTeam";

import Arjun from "../../images/team/arjun.jpeg";
import SidharthP from "../../images/team/sidharth.jpg";
import ardra from "../../images/team/ardra.jpg";
import bilal from "../../images/team/bilal.JPG";
import rameesa from "../../images/team/rameesa.jpg";
import vaishnavi from "../../images/team/vaishnavi.jpg";
import gokul from "../../images/team/gokul.jpeg";
import surya from "../../images/team/surya.jpg";
import shehin from "../../images/team/shehin.jpeg";
import anjitha from "../../images/team/anjitha.png";
import nandana from "../../images/team/nandana.jpeg";
import sreenath from "../../images/team/Sreenath.jpg";
import adithyan from "../../images/team/adithyan.jpg";
import vishnu from "../../images/team/vishnu.jpg";

const MemberPanel = () => {
  return (
    <div className="member-panel">
      {/* <div className="member-panel-heading">
                <h1>Meet Our Team</h1>
            </div> */}
      <div className="member-team">
        <h2>Team</h2>
        <h3>Senior Board of Governers</h3>
      </div>
      {/* <div className="member-panel-details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus
        viverra accumsan in nisl. Eu non diam phasellus vestibulum lorem sed
        risus. A iaculis at erat pellentesqu
      </div> */}
      <div className="member-chair">
        <MemberCard
          name="Muhammed Bilal O P "
          position="Founder & CEO"
          image={bilal}
          linkedin="muhammed-bilal-o-p-445645201"
          github=""
        ></MemberCard>
      </div>
      <div className="member-panel-cards">


        <MemberCard
          name="Sidharth P"
          position="Creative Lead"
          image={SidharthP}
          linkedin="sidharth-p-085255225"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Gokul G Kumar"
          position="Public Realtion Head"
          image={gokul}
          linkedin="gokul-g-kumar-b50877241"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Anjitha S"
          position="Design Lead"
          image={anjitha}
          linkedin="anjitha-s-bb237a202"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Muhammed Shehin"
          position="Design Lead"
          image={shehin}
          linkedin="muhammed-shehin-b197a9220"
          github=""
          size="medium"
        ></MemberCard>

      <MemberCard
          name="Vishnu Shaji"
          position="Publicity Head"
          image={vishnu}
          linkedin="vishnu-shaji-36691019a"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Suryagayatri Thangalazhi"
          position="WIEETIF"
          image={surya}
          linkedin="suryagayatri-thangalazhi-16116a223"
          github=""
          size="medium"
        ></MemberCard>        

        <MemberCard
          name="A R Arjun"
          position="Social Media Head"
          image={Arjun}
          linkedin="a-r-arjun-104a36200"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Vaishnavi M S"
          position="Social Media Head"
          image={vaishnavi}
          linkedin="vaishnavi-m-s"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Ardra S S"
          position="Program Lead"
          image={ardra}
          linkedin="ardra-s-s-980670221"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Rameesa Jahan"
          position="Documentation Head"
          image={rameesa}
          linkedin="rameesa-jahan-a3a971227"
          github=""
          size="medium"
        ></MemberCard>

        

        <MemberCard
          name="Nandana J"
          position="Content Lead"
          image={nandana}
          linkedin="nandana-j-b0a6b5220"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Sreenath K P"
          position="Flutter team Lead"
          image={sreenath}
          linkedin="kpsreenath"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Adithyan T"
          position="Web Master"
          image={adithyan}
          linkedin="adithyan-t-ba37b9220"
          github=""
          size="medium"
        ></MemberCard>
      </div>

      {/* ================================ */}

      

      {/* <ProgramTeam /> */}

      {/* <div className="member-team">
        <h2>Co Team</h2>
      </div>
      <div className="member-panel-details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus
        viverra accumsan in nisl. Eu non diam phasellus vestibulum lorem sed
        risus. A iaculis at erat pellentesqu
      </div>
      <div className="member-panel-cards co-team">
        <MemberCard
          name="Anirudh A V"
          position="Technical coordinator"
          image={Anirudh_A_V}
          linkedin="anirudh-a-v"
          github=""
          size="medium"
        ></MemberCard>
        <MemberCard
          name="Anirudh A V"
          position="Technical coordinator"
          image={Anirudh_A_V}
          linkedin="anirudh-a-v"
          github=""
          size="medium"
        ></MemberCard>
        <MemberCard
          name="Anirudh A V"
          position="Technical coordinator"
          image={Anirudh_A_V}
          linkedin="anirudh-a-v"
          github=""
          size="medium"
        ></MemberCard>
        <MemberCard
          name="Anirudh A V"
          position="Technical coordinator"
          image={Anirudh_A_V}
          linkedin="anirudh-a-v"
          github=""
          size="medium"
        ></MemberCard>
        <MemberCard
          name="Anirudh A V"
          position="Technical coordinator"
          image={Anirudh_A_V}
          linkedin="anirudh-a-v"
          github=""
          size="medium"
        ></MemberCard>
        <MemberCard
          name="Anirudh A V"
          position="Technical coordinator"
          image={Anirudh_A_V}
          linkedin="anirudh-a-v"
          github=""
          size="medium"
        ></MemberCard>
        <MemberCard
          name="Anirudh A V"
          position="Technical coordinator"
          image={Anirudh_A_V}
          linkedin="anirudh-a-v"
          github=""
          size="medium"
        ></MemberCard>
      </div>
      <div className="member-panel-details end-para">
        Porta non pulvinar neque laoreet suspendisse interdum. Eu volutpat odio
        facilisis mauris sit amet. Nisl purus in mollis nunc sed id semper
        risus. Enim diam vulputate ut pharetra. Volutpat blandit aliquam etiam
        erat. Tellus cras adipiscing enim eu turpis egestas. Rhoncus dolor purus
        non enim praesent elementum facilisis. Placerat vestibulum lectus mauris
        ultrices eros in. Pharetra sit amet aliquam id diam maecenas. Lacus
        suspendisse faucibus interdum posuere lorem ipsum dolor. Pretium quam
        vulputate dignissim suspendisse in est ante.
      </div> */}
    </div>
  );
};

export default MemberPanel;
