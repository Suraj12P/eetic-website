import React from "react";
import "../css/MemberPanel.css";

import MemberCard from "./MemberCard";
import Arjun from "../../images/team/arjun.jpeg";
import SidharthP from "../../images/team/sidharth.jpeg";
import jaidan from "../../images/team/jaidan.jpg";
import ardra from "../../images/team/ardra.jpg";
import bilal from "../../images/team/bilal.JPG";
import haridathan from "../../images/team/haridathan.jpeg";
import harish from "../../images/team/harish.jpeg";
import meera from "../../images/team/meera.jpeg";
import rameesa from "../../images/team/rameesa.jpg";
import diya from "../../images/team/diya.jpg";
import vaishnavi from "../../images/team/vaishnavi.jpg";
import archa from "../../images/team/archa.jpeg";
import gokul from "../../images/team/gokul.jpeg";
import akhila from "../../images/team/akhila.jpeg";
import karthik from "../../images/team/karthik.jpeg";
import surya from "../../images/team/surya.png";
import dave from "../../images/team/dave.jpeg";
import shenin from "../../images/team/shenin.jpeg";
import anjitha from "../../images/team/anjitha.jpg";
import nandana from "../../images/team/nandana.jpeg";
import niran from "../../images/team/niran.jpeg";

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
          name="Archa A S"
          position="Chief Financial Officer"
          image={archa}
          linkedin="archa-a-s-839794221"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Meera J"
          position="Chief Operating Officer"
          image={meera}
          linkedin="meera-j-85803b201"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Niran S Narayan"
          position="Chief Technical Officer"
          image={niran}
          linkedin="niran-s-narayanan"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Harish Babu"
          position="Chief Marketing Officer"
          image={harish}
          linkedin="harish-babu-666127211"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Sidharth P"
          position="Chief Creative Officer"
          image={SidharthP}
          linkedin="sidharth-p-085255225"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Gogul G Kumar"
          position="Chief Community Officer"
          image={gokul}
          linkedin="gokul-g-kumar-b50877241"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Anjitha S"
          position="Design Head"
          image={anjitha}
          linkedin="anjitha-s-bb237a202"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="A R Arjun"
          position="Chief social media Officer"
          image={Arjun}
          linkedin="a-r-arjun-104a36200"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Ardra S S"
          position="Chief programmer Officer"
          image={ardra}
          linkedin="ardra-s-s-980670221"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Akhila Nasrin"
          position="Chief programmer Officer"
          image={akhila}
          linkedin="akhila-nasrin-a81991211"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Vaishnavi M S"
          position="Public Relation Officer"
          image={vaishnavi}
          linkedin="vaishnavi-m-s"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Nandana J"
          position="Content head"
          image={nandana}
          linkedin="nandana-j-b0a6b5220"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Jaidan Sleeba"
          position="Web Master"
          image={jaidan}
          linkedin="jaidan22"
          github=""
          size="medium"
        ></MemberCard>
      </div>

      {/* ================================ */}

      <div className="member-team">
        <h3>Junior Board of Governors</h3>
      </div>

      <div className="member-panel-cards">
        <MemberCard
          name="Suryagayatri Thangalazhi"
          position="Junior Chief Executive Officer"
          image={surya}
          linkedin="suryagayatri-thangalazhi-16116a223"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Karthik Ajay"
          position="Junior Chief Financial Officer"
          image={karthik}
          linkedin="karthik-ajay-42b252225"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Rameesa Jahan"
          position="Junior Chief Operating Officer"
          image={rameesa}
          linkedin="rameesa-jahan-a3a971227"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Dave Paul Joseph"
          position="Junior Chief Technical Officer"
          image={dave}
          linkedin="dave-paul-joseph-157153243"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Haridathan S"
          position="Junior Chief Marketing Officer"
          image={haridathan}
          linkedin="haridathan-s-73b986228"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Muhammed Shehin"
          position="Junior Chief Creative Officer"
          image={shenin}
          linkedin="muhammed-shehin-b197a9220"
          github=""
          size="medium"
        ></MemberCard>

        <MemberCard
          name="Diya Sunil"
          position="Junior Chief Community Officer"
          image={diya}
          linkedin=""
          github=""
          size="medium"
        ></MemberCard>
      </div>

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
