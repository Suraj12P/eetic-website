import React from 'react';
import './css/MemberCard.css';
import {IoLogoLinkedin} from 'react-icons/io';

const MemberCard = ({ name, position, image, linkedin, github }) => {
    return (
        <div className="member-card">
            <div className="member-card-image">
                <img src={image} alt="member" />
            </div>
            <div className="member-card-details">
                <h3>{name}</h3>
                <p>{position}</p>
                <div className="member-card-socials">
                    <a href={`https://www.linkedin.com/in/${linkedin}/`} target="_blank" rel="noreferrer">
                        {/* <i className="fab fa-linkedin"></i> */}
                        <IoLogoLinkedin size="1.5em"  color="white"/>  
                    </a>
                    {/* <a href={github} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default MemberCard;