import React, { useState } from "react";
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

import abhijith from "../../images/team/abhijith.jpg";
import adheena from "../../images/team/adheena.jpg";
import afeefa from "../../images/team/afeefa.jpg";
import aleena from "../../images/team/Aleena.jpg";
import anoushka from "../../images/team/anoushka.jpg";
import arya from "../../images/team/arya1.jpg";
import ashna from "../../images/team/ashna.jpg";
import aswajith from "../../images/team/aswajith.jpg";
import aswathy from "../../images/team/aswathy.jpg";
import binto from "../../images/team/binto.jpg";
import rayen from "../../images/team/rayen.jpg";
import savan from "../../images/team/savan.jpg";
import shabeeba from "../../images/team/shabeeba.jpeg";
import sreepriya from "../../images/team/sreepriya.jpg";
import srutav from "../../images/team/srutav.jpg";
import yadhu from "../../images/team/yadhu.jpeg";

import ashkind from '../../images/program_team_23/ashkind.jpg';
import ananthalakshmi from '../../images/program_team_23/ananthalakshmi-2.jpg';
import haeba from '../../images/program_team_23/haeba.jpg';
import edison from '../../images/program_team_23/edison.jpg';
import neha from '../../images/program_team_23/neha.jpg';


import adhil from '../../images/design_team_23/Adhil.jpg';
import adithya from '../../images/design_team_23/Adithya.jpg';
import akash from '../../images/design_team_23/Akash.jpg';
import celma from '../../images/design_team_23/Celma_CET.jpg';
import greeshma from '../../images/design_team_23/greeshma-jayakumar.jpg';

import parvathy from '../../images/content_team_23/parvathy.png';
import gouri from '../../images/content_team_23/gouri.jpg';
import deepthi from '../../images/content_team_23/deepthi.jpg';
import nehanna from '../../images/content_team_23/neha-anna.jpg';

import shravan from '../../images/web_team_24/Shravan.png';
import gopika from '../../images/web_team_24/Gopika.jpeg';
import keerthana from '../../images/web_team_24/Keerthana.jpg';
import suraj from '../../images/web_team_24/Suraj_P.jpg';

import iqubal from '../../images/marketing_team_23/Iqubal.jpg'
import revathy from '../../images/marketing_team_23/S_Revathy_Sankar_CET.jpg'
import varun from '../../images/marketing_team_23/varun.png'
import vrindha from '../../images/marketing_team_23/VrindhaVinod.jpg'

import abhijithg from '../../images/flutter_team_23/Abhijith G (CET).jpg'
import anoop from '../../images/flutter_team_23/Anoop Prasannan(TKM College of Engineering)_.jpg'
import sreenathkp from '../../images/flutter_team_23/K P SREENATH (CET).jpg'
import rahuldas from '../../images/flutter_team_23/Rahul Das P(CET).jpg'
import sivanilr from '../../images/flutter_team_23/Sivani L R _ LBSITW.jpg'


const MemberPanel = () => {
  const [activeTab, setActiveTab] = useState("mtab2");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="member-panel">
      {/* <div className="member-panel-heading">
                <h1>Meet Our Team</h1>
            </div> */}
      <div className="member-team">
        <h2>Team</h2>
        {/* <h3>Senior Board of Governors</h3> */}
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

      <div className="mtabs">
        {/* <button
          onClick={() => handleTabClick("mtab1")}
          className={`mtab `}
          id={activeTab === "mtab1" ? "active" : ""}
        >
          Execom '22
        </button> */}
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Student Team '23
        </button>
      </div>

      {activeTab === "mtab1" ? (
        <div className="tab-content">
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
              position="Public Relation Head"
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
        </div>
      ) : (
        <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Yadhukrishnan S"
              position="Student Lead"
              image={yadhu}
              linkedin="yadhukrishnan-s-241941201"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Arya Vijayan"
              position="Technical Lead"
              image={arya}
              linkedin="arya-vijayan"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Anoushka L Nair"
              position="Program Lead"
              image={anoushka}
              linkedin="anoushka-l-nair-331b73239"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Aswathy K"
              position="Program Lead"
              image={aswathy}
              linkedin="aswathie"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Ashna Anna Philips"
              position="Campus Community Lead"
              image={ashna}
              linkedin="ashna-anna-philips-aab3b0227"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Afeefa Ali"
              position="Publicity Lead"
              image={afeefa}
              linkedin="afeefa-ali-879969276"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Rayen M Sulphi"
              position="Design Lead"
              image={rayen}
              linkedin="rayen-m-sulphi-944b62275"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Abhijith K V"
              position="Design Lead"
              image={abhijith}
              linkedin="abhiji-kv/"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Sreepriya S"
              position="Creative Lead"
              image={sreepriya}
              linkedin="sreepriya-s-a02772239"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Savan J Saji"
              position="Creative Lead"
              image={savan}
              linkedin="savan-j-saji"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Srutav Tarun"
              position="Web Master"
              image={srutav}
              linkedin="srutav-tarun-00625a25b/"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Binto Joseph"
              position="Web Master"
              image={binto}
              linkedin="binto-joseph/"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Aswajith M S"
              position="Video Editing Lead"
              image={aswajith}
              linkedin="aswajith-m-s-31713a24a"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Shabeeba T P"
              position="Media Lead"
              image={shabeeba}
              linkedin="shabeeba-t-p-a7b380277"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Adheena A K"
              position="Content Lead"
              image={adheena}
              linkedin="adheena-a-k-978939225"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Aleena Johny"
              position="Marketing Lead"
              image={aleena}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>
          </div>
        </div>
      )}


      {activeTab === "mtab1" ? <div></div> :
      <div>
      <div className="mtabs">
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Program Team '23
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Haeba Sara"
              position="Team Member"
              image={haeba}
              linkedin="haeba-sara-16982b244"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Neha Manoj"
              position="Team Member"
              image={neha}
              linkedin="neha-manoj-6ab292223"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Akshind A D"
              position="Team Member"
              image={ashkind}
              linkedin="akshind-a-d-a442b5213"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Anantha Lakshmi"
              position="Team Member"
              image={ananthalakshmi}
              linkedin="/"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Edison Alan"
              position="Team Member"
              image={edison}
              linkedin="/"
              github=""
              size="medium"
            ></MemberCard>

            
          </div>
        </div>


        <div className="mtabs">
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Design Team '23
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Adhil Abdulla"
              position="Team Member"
              image={adhil}
              linkedin="adhil-abdulla-4b5b62227"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Adithya V"
              position="Team Member"
              image={adithya}
              linkedin="adithya-viswanathan-09ba73294"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Akash Reji"
              position="Team Member"
              image={akash}
              linkedin="akash-regi-7b9311284"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Celma Mariya Naveen"
              position="Team Member"
              image={celma}
              linkedin="celma-maria-naveen-5aa50622a"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Greeshma Jayakumar"
              position="Team Member"
              image={greeshma}
              linkedin="greeshma-jayakumar-56b411295"
              github=""
              size="medium"
            ></MemberCard>

            
          </div>
        </div>


        <div className="mtabs">
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Content Team '23
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Parvathy Narayan H"
              position="Team Member"
              image={parvathy}
              linkedin="parvathy-narayan-h-4b2766282"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Gouri KS"
              position="Team Member"
              image={gouri}
              linkedin="gouri-k-s-01a31724b"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Deepthi N"
              position="Team Member"
              image={deepthi}
              linkedin="deepthi-n-6b6029256"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Neha Anna Abraham"
              position="Team Member"
              image={nehanna}
              linkedin="neha-anna-abraham"
              github=""
              size="medium"
            ></MemberCard>

            
          </div>
        </div>


        <div className="mtabs">
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Web Team '23
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Shravan Pandala"
              position="Team Member"
              image={shravan}
              linkedin="shravanpandala"
              github="Unknown-Geek"
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Suraj P"
              position="Team Member"
              image={suraj}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Gopika C"
              position="Team Member"
              image={gopika}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Keerthana T P"
              position="Team Member"
              image={keerthana}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>
            
          </div>
        </div>

        <div className="mtabs">
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Marketing Team '23
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Muhammed Iqubal"
              position="Team Member"
              image={iqubal}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Revathy Sankar"
              position="Team Member"
              image={revathy}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Varun Subramanian"
              position="Team Member"
              image={varun}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Vrindha Vinod"
              position="Team Member"
              image={vrindha}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            
          </div>
        </div>

        <div className="mtabs">
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Flutter Team '23
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Abhijith G"
              position="Team Member"
              image={abhijithg}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Anoop Prasannan"
              position="Team Member"
              image={anoop}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="K P Sreenath"
              position="Team Member"
              image={sreenath}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Rahul Das P"
              position="Team Member"
              image={rahuldas}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Siavni L R"
              position="Team Member"
              image={sivanilr}
              linkedin="placeholder"
              github=""
              size="medium"
            ></MemberCard>

            
          </div>
        </div>

        </div>}

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
