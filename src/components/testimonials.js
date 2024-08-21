import React, { useEffect, useState } from "react";
import "../components/css/testimonials.css";
import TestCard from "./test-card";
import { Swiper, SwiperSlide } from "swiper/react";


import Arjun from "../images/team/arjun.jpeg";//
import SidharthP from "../images/team/sidharth.jpg";//
import ardra from "../images/team/ardra.jpg";
import rameesa from "../images/team/rameesa.jpg";
import vaishnavi from "../images/team/vaishnavi.jpg";
import surya from "../images/team/surya.jpg";
import shehin from "../images/team/shehin.jpeg";
import archa from "../images/team/archa.jpg";
import harish from "../images/team/harish.jpg";

import nandana from "../images/testimonials/nandana.jpg"
import sreekiran from "../images/testimonials/sreekiran.jpg"
import jaidan from "../images/testimonials/jaidan.jpg"
import aanjith from "../images/testimonials/aanjith.jpg"
import aishwarya_achuthan from "../images/testimonials/aishwarya_achuthan.jpeg"
import akshay_p_k from "../images/testimonials/akshay_p_k.jpeg"
import ardra_v_v from "../images/testimonials/ardra_v_v.jpg"
import aswathy from "../images/team/aswathy.jpg"
import hilan from "../images/testimonials/hilan.jpeg"
import neeraj_rajeev from "../images/testimonials/neeraj_rajeev.jpeg"
import saniya from "../images/testimonials/saniya.jpeg"
import saranya_v_s from "../images/testimonials/saranya_v_s.jpg"
import gokulr from "../images/testimonials/gokulr.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
    const [slidesPerView, setSlidesPerView] = useState(2);
  
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 900) {
        setSlidesPerView(1); // Set to 1 slide for smaller screens
      } else {
        setSlidesPerView(2); // Set to 2 slides for larger screens
      }
    };
  
    useEffect(() => {
      updateSlidesPerView();
      window.addEventListener('resize', updateSlidesPerView);
  
      return () => {
        window.removeEventListener('resize', updateSlidesPerView);
      };
    }, []);

  return (
    <div className="testimonials">
      <div className="eventHeading">Testimonials</div>
      <Swiper
      slidesPerView={slidesPerView}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        spaceBetween={50}
      >
        <SwiperSlide>
          <TestCard name="Nandana J" position={'Graduate Engineering Trainee, L&T'} image={nandana} text="During my tenure as the Content Head at EETI Foundation, I gained valuable insights into organizational workflows, project management, and content creation. This role allowed me to delve deeply into various projects, significantly enhancing my content writing skills. Collaborating within a dedicated team, I witnessed firsthand the impact of effective content strategies on engagement and outreach. Moreover, working in this organization provided me with a platform to expand my network within the college community, fostering stronger connections. The diverse activities conducted by EETI Foundation offered me exposure to a wide range of experiences, contributing to my holistic growth and development. Overall, my experience at EETI Foundation was invaluable, offering practical knowledge in content creation, leadership, teamwork dynamics, and expanded connections within the college." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name="Sreekiran" position={'Post- Graduate Engineer Trainee, JSW Steels'} image={sreekiran} text="I am thrilled to share that I've secured a placement at JSW Steels through campus recruitment. This achievement is a testament to the exceptional education and preparation I received. I extend special thanks to the technical community 'EETI Foundation' for their invaluable support and knowledge throughout my placement journey. The collaborative spirit and abundant resources provided by EETI Foundation significantly contributed to my growth and industry readiness. I look forward to applying the skills gained here to make a meaningful contribution to the industry. Thank you for providing me with an enriching academic experience and fostering an environment that cultivates excellence." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name="Jaidan Sleeba" position={'SDE-1, CareStack'} image={jaidan} text="I served as the webmaster of EETI Foundation for 6 months. I led the development of EETI Foundation's website and also had the opportunity to mentor interns during that time. I had an amazing time working with innovative minds. This experience allowed me to apply my technical skills to a meaningful cause and contributed to both my personal and professional growth" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name="Aanjith" position={'Software developer at Qburst'} image={aanjith} text="I have always been a tech enthusiast and the biggest problem problem i've faced is to start learning a new skill, stay updated and have a good learning path. This has been the main problem of any college student like me and i believe EETIF has completely solved the problem by giving the best classes, mentorship and providing  a learning platform free of cost. I've seen my colleagues and myself improve in our area of expertise and stay motivated and disciplined, all with the help of EETIF and i hope the NGO continues the same and provide oppurtunities and resources to all the students out there in the world" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Muhammed Shehin' position={'Freelance Graphic Designer'} image={shehin} text ="Hello everyone, I'm Shehin, a student pursuing BTech at CET. Alongside my studies, I've ventured into freelance poster design. My journey began with creating posters for EETI Foundation, an organization that played a significant role in my growth as a graphic designer. I'm content with my current position and grateful to EETI Foundation for being a crucial part of my development." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Suryagayathri Thangalazhi' position={'Analog intern at Texas instruments ,Wish Mentee'} image={surya} text="Working as a Jr Chief Executive Officer at EETI Foundation was an incredibly rewarding experience for me. As a non-profit organization dedicated to boosting the technical and non technical skills in students, the Foundation's mission was one that resonated deeply with me. My role was multifaceted, and I had the opportunity to work closely with a team of passionate individuals who were committed to making a positive impact in the world. I was able to hone my leadership and communication skills. Overall, my time at EETI Foundation was a valuable and fulfilling experience that has shaped my career aspirations and left a lasting impression on me." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Saranya V S' position={'ASE at Accenture'} image={saranya_v_s} text="Being in the Program Team of EETIC, we have planned and organized several events. It was a wonderful experience for me." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Aishwarya Achuthan ' position={'Siemens scholar'} image={aishwarya_achuthan} text=" Got to work with a panel of amazing teammates. Learnt the essence of working in a group. Eventful nature helped me gain team management skills. Experience worth bragging about..." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Gokul R' position={'Founder and CEO Bit Builders'} image={gokulr} text="I want to express my gratitude to EETI Foundation for the transformative 5-month internship in graphic design. Under the guidance of ANJITHA S, my design lead, I honed my skills and discovered new facets of myself as a creative professional. Special thanks to MUHAMMED BILAL O P, the visionary founder, for providing meaningful opportunities. Best wishes to EETI Foundation for continuing to empower young talents and driving positive change through design. Thank you for an unforgettable experience, and I look forward to applying the skills gained in future endeavors."	 />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Vaishnavi M S' position={''} image={vaishnavi} text="I am Vaishnavi M S. The Public Relations Officer of EETIF. The curiosity to know more about Arduino helped me reach here. From Arduino to different topics like IOT etc and I met some amazing people with the curiosity to know more things and to teach it to all those people out there who wanna know. That's how I stepped here and from there on we started working like a team and helped many people to know more about this changing world. It was because of Bilal and his dedication which made this NGO a big success." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='A R Arjun' position={''} image={Arjun} text="Hiii iam A R Arjun, 3rd year Btech studying in CET.I have been working as the Chief Social Media Officer in EETIF and its been a great experience.lve got to meet different people acquire knowledge and work with many etc. All this happened because of Bilal the founder EETIF. He gave me this position and i tried my best.Now I am so happy to be a part of EETIF." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Rameesa Jahan' position={''} image={rameesa} text="Working with the EETI Foundation was a highly valuable experience for me. During my time there, I had the opportunity to collaborate and engage with a diverse range of individuals. This exposure expanded my professional network and gave me invaluable insights. Working at the EETI Foundation also provided me with the chance to work in an organized, professional environment. This experience helped me to understand the importance of teamwork and enhanced my problem-solving skills.
                    Additionally, I had the opportunity to refine my soft skills such as content writing, effective communication, and event management. I also learned how to manage my time more effectively. Overall, I found this experience to be enriching, and I am grateful for the skills and knowledge that I gained while working with the EETI Foundation." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Sidharth P' position={''} image={SidharthP} text="Being working from the start of this foundation helped me get more connections, build my network and upskilled myself. As part of this foundation i have learned skills that include arduino coding, incubated interests for robotics and much more. As part of the position I have been given upon, the Chief Creative Officer; my team along with me did create content for Instagram handle of eetifoundation on a weekly basis. As a whole i did learn to manage and connect with more people outside my peer group." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Ardra S S' position={''} image={ardra} text="I have been a member of EETIF for quite a long time now. It has been great to be a part of a high-spirited set of people The experiences I acquired from here is effable. It was great to communicate with many renowned personalities and listen to their experiences. At the same time, i was able to have lively connections with many others from diverse field of expertise, comprising of students, professionals and so on. The knack of organizing responsibilities can only be gained through experience and EETIF has provided that to me. I was able to understand the behind-the-scene working of a society. Being part of such an energetic group will help one to understand & practice how to coordinate things, plan effectively, manage time & lead a team Will forever be grateful to EETF for the space and opportunities that i received through this society" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Archa A S' position={''} image={archa} text="Hai there, my name may not matters so much. But EETIF means a lot. I am so glad to be part of EETIF and for its growth from the very beginning. Bilal who is the founder, just marked his path and I accompanied him for his ideas. He is so curious about the present innovation and that's how we got connected. The growth is owned by the members accompanied by our Foundation. The success lies in bringing up everyone together. Together we have achieved great success. And now our NGO is a platform providing a lots of opportunity to young innovators and help in developing and inspire you in living your life the way you dream of." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Harish Babu' position={''} image={harish} text="Hi, My name is Harish Babu. I'm 3rd year in Electrical and electronics engineering, CET. I first joined the EETIF in my first year, second semester onwards. I joined because most workshops provided by other clubs at that time were paid and Arduino classes by EETIF were free. That time the community was not registered. I was able to help a little during they became a community. During my second year there was a whole Arduino series from EETIF. I was able to gain much technical idea about Arduino programming. There was many other programs." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Ardra V V' position={''} image={ardra_v_v} text="Joining EETI Foundation transformed my professional journey—more than program management, it was a personal metamorphosis. Grateful for the enriching experience, I broadened my network, interacted with speakers, and acquired skills that are invaluable assets for my future" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Saniya Teresa Sandeep' position={''} image={saniya} text="It was a delight for me to be a part of the EETIF program team. Whether it be contacting the speakers, designing the posters or anchoring the session, all of those helped me improve myself in all ways possible." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Akshay P K ' position={''} image={akshay_p_k} text="In my third year of Electronics and Communication Engg at CET, I decided to join EETIF based on my interest in being a part of a club that not only provides free technical classes but also actively contributes to the community. I was drawn to the idea of expanding my network and enhancing my technical skills in a collaborative environment. Joining EETIF as a programming team member has proven to be a rewarding experience, allowing me to connect with like-minded individuals , help organise lectures workshops and contribute to the community while gaining valuable insights. Glad to be part of EETIF.				" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Neeraj Rajeev' position={''} image={neeraj_rajeev} text="My experience as a program team member at EETI Foundation was incredibly enriching. It provided me with invaluable opportunities to develop my skills in event organization and online session management. I learned the importance of collaboration, time management, and adaptability in delivering engaging and impactful programs. The supportive environment at EETI fostered my personal and professional growth, allowing me to contribute significantly to the foundation's mission. I am grateful for my time at EETIF and look forward to applying the knowledge and experience gained to future endeavors." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Hilan S Shiva' position={''} image={hilan} text="Working at the EETI Foundation provided an excellent opportunity to meet new people while also exposing me to like-minded individuals. I believe I performed well considering it was my first time working in a team. I sincerely appreciate the EETI foundation giving me this chance.	" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Aswathy K' position={''} image={aswathy} text="Working alongside an amazing panel of teammates, I gained valuable insights into the essence of effective group collaboration. The dynamic nature of our tasks not only made every day eventful but also enhanced my team management skills significantly. This hands-on experience is truly worth boasting about, as it enriched my professional journey in ways I hadn't imagined."	 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
