import React from 'react';
import './css/MemberPanel.css';

import { MemberCard, Chairperson } from './MemberCard';
import Anirudh_A_V from '../assets/team/Anirudh_A_V.png';

const MemberPanel = () => {
    return (
        <div className="member-panel">
            {/* <div className="member-panel-heading">
                <h1>Meet Our Team</h1>
            </div> */}
            <div className="member-team">
                <h2>Team</h2>
            </div>
            <div className="member-panel-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl. Eu non diam phasellus vestibulum lorem sed risus. A iaculis at erat pellentesqu
            </div>
            <div className="member-chair">
                <Chairperson name="Anirudh A V" position="Founder" image={Anirudh_A_V} linkedin="anirudh-a-v" github=""></Chairperson>
            </div>
            <div className="member-panel-cards">
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
            </div>
            <div className="member-team">
                <h2>Co Team</h2>
            </div>
            <div className="member-panel-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan in nisl. Eu non diam phasellus vestibulum lorem sed risus. A iaculis at erat pellentesqu
            </div>
            <div className="member-panel-cards co-team">
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
            </div>
            <div className="member-panel-details end-para">
                Porta non pulvinar neque laoreet suspendisse interdum. Eu volutpat odio facilisis mauris sit amet. Nisl purus in mollis nunc sed id semper risus. Enim diam vulputate ut pharetra. Volutpat blandit aliquam etiam erat. Tellus cras adipiscing enim eu turpis egestas. Rhoncus dolor purus non enim praesent elementum facilisis. Placerat vestibulum lectus mauris ultrices eros in. Pharetra sit amet aliquam id diam maecenas. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Pretium quam vulputate dignissim suspendisse in est ante.
            </div>
        </div>

    );
}

export default MemberPanel;

