import React from 'react';
import './css/MemberPanel.css';

import {MemberCard, Chairperson} from './MemberCard';
import Anirudh_A_V from '../assets/team/Anirudh_A_V.png';

const MemberPanel = () => {
    return (
        <div className="member-panel">
            <div className="member-panel-heading">
                <h1>Meet Our Team</h1>
            </div>
            <div className="member-team">
                <h2>Team</h2>
            </div>
            <div className="member-panel-details">
                Consectetur sit duis consequat ex fugiat cupidatat. In nulla minim incididunt nostrud et esse do nulla ut. Consectetur veniam Lorem do officia ipsum fugiat nulla et consequat elit. Aliqua dolore duis cillum adipisicing consequat ex enim veniam duis cupidatat ipsum proident.Consectetur sit duis consequat ex fugiat cupidatat. In nulla minim incididunt nostrud et esse do nulla ut. Consectetur veniam Lorem do officia ipsum fugiat nulla et consequat elit. Aliqua dolore duis cillum adipisicing consequat ex enim veniam duis cupidatat ipsum proident.
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
            </div>
            <div className="member-team">
                <h2>Core Team</h2>
            </div>
            <div className="member-panel-details">
                Consectetur sit duis consequat ex fugiat cupidatat. In nulla minim incididunt nostrud et esse do nulla ut. Consectetur veniam Lorem do officia ipsum fugiat nulla et consequat elit. Aliqua dolore duis cillum adipisicing consequat ex enim veniam duis cupidatat ipsum proident.Consectetur sit duis consequat ex fugiat cupidatat. In nulla minim incididunt nostrud et esse do nulla ut. Consectetur veniam Lorem do officia ipsum fugiat nulla et consequat elit. Aliqua dolore duis cillum adipisicing consequat ex enim veniam duis cupidatat ipsum proident.
            </div>
            <div className="member-panel-cards">
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
                <MemberCard name="Anirudh A V" position="Technical coordinator" image={Anirudh_A_V} linkedin="anirudh-a-v" github="" size="medium"></MemberCard>
            </div>
        </div>

    );
}

export default MemberPanel;