import React, { useState } from "react";
import "../css/MemberPanel.css";

import MemberCard from "./MemberCard";
import ProgramTeam from "./ProgramTeam";

import bilal from "../../images/team/bilal.webp";

import akash_m_nandan from "../../images/team/Akash_M_Nandan__College of engg chengannur.webp";
import anoushka from "../../images/team/Anoushka L Nair S3 ECE2_page-0001.webp";
import joe_abraham from "../../images/team/Joe Abraham K CEC.webp";
import m_a_akshaya from "../../images/team/M A Akshaya _CET.webp";
import megha from "../../images/team/Megha.webp";
import neha_anna from "../../images/team/Neha Anna Abraham.webp";
import parvathy from "../../images/team/Parvathy_Gec.webp";
import akash_regi from "../../images/team/Akash Regi.webp";

import theertha_s from '../../images/program_team_24/THEERTHA S_CET TVM.webp';
import rayyan_khan from '../../images/program_team_24/Rayyan Khan_CET.webp';
import kashinath from '../../images/program_team_24/Kasinath K V_College of Engineering Trivandrum.webp';
import afsal_v_n from '../../images/program_team_24/AFSAL V N _CET TVM.webp';

import keerthana from '../../images/design_team_24/Keerthana_CET.webp';
import malavika_k_j from '../../images/design_team_24/Malavika KJ.webp';
import fathima_farhana from '../../images/design_team_24/Fathima Farhana.webp';

import m_aswathy from '../../images/content_team_24/M Aswathy, CE Chengannur.webp';
import ananya_p from '../../images/content_team_24/Ananya P Santh, CE Chengannur_.webp';
import anjitha_vk from '../../images/content_team_24/Anjitha VK_CET- TVM.webp';
import devi_dekshina from '../../images/content_team_24/Devi Dekshina-SOE,CUSAT.webp';

import shravan from '../../images/web_team_24/Shravan.webp';
import gopika from '../../images/web_team_24/Gopika.webp';
import keerthana_web from '../../images/web_team_24/Keerthana.webp';
import suraj from '../../images/web_team_24/Suraj_P.webp';

/*Not mentioned
import iqubal from '../../images/marketing_team_24/Iqubal.webp'
import revathy from '../../images/marketing_team_24/S_Revathy_Sankar_CET.webp'
import varun from '../../images/marketing_team_24/varun.png'
import vrindha from '../../images/marketing_team_24/VrindhaVinod.webp'

import abhijithg from '../../images/flutter_team_24/Abhijith G (CET).webp'
import anoop from '../../images/flutter_team_24/Anoop Prasannan(TKM College of Engineering)_.webp'
import sreenathkp from '../../images/flutter_team_24/K P SREENATH (CET).webp'
import rahuldas from '../../images/flutter_team_24/Rahul Das P(CET).webp'
import sivanilr from '../../images/flutter_team_24/Sivani L R _ LBSITW.webp'
*/

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
          Student Team '24
        </button>
      </div>

      {activeTab === "mtab1"? <div></div> : (
        <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Anoushka L Nair"
              position="Student Lead"
              image={anoushka}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Parvathy"
              position="Campus Community Lead"
              image={parvathy}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Joe Abraham K"
              position="Web Lead"
              image={joe_abraham}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Megha"
              position="Design Lead"
              image={megha}
              linkedin=" " 
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Akash Reji"
              position="Design Lead"
              image={akash_regi}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Neha Anna Abraham"
              position="Content Lead"
              image={neha_anna}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Akash M Nandan"
              position="Teachnical Lead"
              image={akash_m_nandan}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="M A Akshaya"
              position="Program Lead"
              image={m_a_akshaya}
              linkedin=" "
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
          Program Team '24
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Afsal V N"
              position="Team Member"
              image={afsal_v_n}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Kasinath K V"
              position="Team Member"
              image={kashinath}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Rayyan Khan"
              position="Team Member"
              image={rayyan_khan}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Theertha S"
              position="Team Member"
              image={theertha_s}
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
          Design Team '24
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Fathima Farhana"
              position="Team Member"
              image={fathima_farhana}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Keerthana"
              position="Team Member"
              image={keerthana}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Malaika K J"
              position="Team Member"
              image={malavika_k_j}
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
          Content Team '24
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            <MemberCard
              name="Ananya P Santh"
              position="Team Member"
              image={ananya_p}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Anjitha V K"
              position="Team Member"
              image={anjitha_vk}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="Devi Dekshina"
              position="Team Member"
              image={devi_dekshina}
              linkedin=" "
              github=""
              size="medium"
            ></MemberCard>

            <MemberCard
              name="M Aswathy"
              position="Team Member"
              image={m_aswathy}
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
          Web Team '24
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
              image={keerthana_web}
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
          Marketing Team '24
        </button>
      </div>


      <div className="tab-content">
          <div className="member-panel-cards">
            {/*
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
          */}
          </div>
        </div>

        <div className="mtabs">
        <button
          onClick={() => handleTabClick("mtab2")}
          className={`mtab `}
          id={activeTab === "mtab2" ? "active" : ""}
        >
          Flutter Team '24
        </button>
      </div>


      <div className="tab-content">
      <div className="member-panel-cards"> 
        {/* 
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
        */}
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
