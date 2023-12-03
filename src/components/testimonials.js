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
          delay: 700000,
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
          <TestCard name="Nandana J" image={nandana} text="During my tenure as the Content Head at EETI Foundation, I gained valuable insights into organizational workflows, project management, and content creation. This role allowed me to delve deeply into various projects, significantly enhancing my content writing skills. Collaborating within a dedicated team, I witnessed firsthand the impact of effective content strategies on engagement and outreach. Moreover, working in this organization provided me with a platform to expand my network within the college community, fostering stronger connections. The diverse activities conducted by EETI Foundation offered me exposure to a wide range of experiences, contributing to my holistic growth and development. Overall, my experience at EETI Foundation was invaluable, offering practical knowledge in content creation, leadership, teamwork dynamics, and expanded connections within the college." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name="Sreekiran" image={sreekiran} text="I am thrilled to share that I've secured a placement at JSW Steels through campus recruitment. This achievement is a testament to the exceptional education and preparation I received. I extend special thanks to the technical community 'EETI Foundation' for their invaluable support and knowledge throughout my placement journey. The collaborative spirit and abundant resources provided by EETI Foundation significantly contributed to my growth and industry readiness. I look forward to applying the skills gained here to make a meaningful contribution to the industry. Thank you for providing me with an enriching academic experience and fostering an environment that cultivates excellence." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name="Jaidan Sleeba" image={jaidan} text="I served as the webmaster of EETI Foundation for 6 months. I led the development of EETI Foundation's website and also had the opportunity to mentor interns during that time. I had an amazing time working with innovative minds. This experience allowed me to apply my technical skills to a meaningful cause and contributed to both my personal and professional growth" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name="Aanjith" image={aanjith} text="I have always been a tech enthusiast and the biggest problem problem i've faced is to start learning a new skill, stay updated and have a good learning path. This has been the main problem of any college student like me and i believe EETIF has completely solved the problem by giving the best classes, mentorship and providing  a learning platform free of cost. I've seen my colleagues and myself improve in our area of expertise and stay motivated and disciplined, all with the help of EETIF and i hope the NGO continues the same and provide oppurtunities and resources to all the students out there in the world" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Muhammed Shehin' image={shehin} text ="This was my first execom call. It was a really good experience working with an amazing team. Sometimes I felt hectic about my work, still I enjoyed doing them and it has helped me grow as a designer.
            Looking forward to contribute more. Thank you for having me." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Suryagayathri Thangalazhi' image={surya} text="Working as a Jr Chief Executive Officer at EETI Foundation was an incredibly rewarding experience for me. As a non-profit organization dedicated to boosting the technical and non technical skills in students, the Foundation's mission was one that resonated deeply with me. My role was multifaceted, and I had the opportunity to work closely with a team of passionate individuals who were committed to making a positive impact in the world. I was able to hone my leadership and communication skills. Overall, my time at EETI Foundation was a valuable and fulfilling experience that has shaped my career aspirations and left a lasting impression on me." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Vaishnavi M S' image={vaishnavi} text="I am Vaishnavi M S. The Public Relations Officer of EETIF. The curiosity to know more about Arduino helped me reach here. From Arduino to different topics like IOT etc and I met some amazing people with the curiosity to know more things and to teach it to all those people out there who wanna know. That's how I stepped here and from there on we started working like a team and helped many people to know more about this changing world. It was because of Bilal and his dedication which made this NGO a big success." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='A R Arjun' image={Arjun} text="Hiii iam A R Arjun, 3rd year Btech studying in CET.I have been working as the Chief Social Media Officer in EETIF(Electronic Enthusiasts Tecnical Integration Foundation) and its been a great experience.lve got to meet different people acquire knowledge and work with many etc. All this happened because of Bilal the founder EETIF. He gave me this position and i tried my best.Now I am so happy to be a part of EETIF." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Rameesa Jahan' image={rameesa} text="Working with the EETI Foundation was a highly valuable experience for me. During my time there, I had the opportunity to collaborate and engage with a diverse range of individuals. This exposure expanded my professional network and gave me invaluable insights. Working at the EETI Foundation also provided me with the chance to work in an organized, professional environment. This experience helped me to understand the importance of teamwork and enhanced my problem-solving skills.
                    Additionally, I had the opportunity to refine my soft skills such as content writing, effective communication, and event management. I also learned how to manage my time more effectively. Overall, I found this experience to be enriching, and I am grateful for the skills and knowledge that I gained while working with the EETI Foundation." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Sidharth P' image={SidharthP} text="Being working from the start of this foundation helped me get more connections, build my network and upskilled myself. As part of this foundation i have learned skills that include arduino coding, incubated interests for robotics and much more. As part of the position I have been given upon, the Chief Creative Officer; my team along with me did create content for Instagram handle of eetifoundation on a weekly basis. As a whole i did learn to manage and connect with more people outside my peer group." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Ardra S S' image={ardra} text="I have been a member of EETI for quite a long time now. It has been great to be a part of a high-spirited set of people The experiences I acquired from here is effable. It was great to communicate with many renowned personalities and listen to their experiences. At the same time, i was able to have lively connections with many others from diverse field of expertise, comprising of students, professionals and so on. The knack of organizing responsibilities can only be gained through experience and EETI has provided that to me. I was able to understand the behind-the-scene working of a society. Being part of such an energetic group will help one to understand & practice how to coordinate things, plan effectively, manage time & lead a team Will forever be grateful to EETI for the space and opportunities that i received through this society" />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Archa A S' image={archa} text="Hai there, my name may not matters so much. But EETIF means a lot. I am so glad to be part of EETIF (Electronics Enthusiast Technical Integration Foundation) and for its growth from the very beginning. Bilal who is the founder, just marked his path and I accompanied him for his ideas. He is so curious about the present innovation and that's how we got connected. The growth is owned by the members accompanied by our Foundation. The success lies in bringing up everyone together. Together we have achieved great success. And now our NGO is a platform providing a lots of opportunity to young innovators and help in developing and inspire you in living your life the way you dream of." />
        </SwiperSlide>
        <SwiperSlide>
          <TestCard name='Harish Babu' image={harish} text="Hi, My name is Harish Babu. I'm 3rd year in Electrical and electronics engineering, CET. I first joined the EETIF in my first year, second semester onwards. I joined because most workshops provided by other clubs at that time were paid and Arduino classes by EETIF were free. That time the community was not registered. I was able to help a little during they became a community. During my second year there was a whole Arduino series from EETIF. I was able to gain much technical idea about Arduino programming. There was many other programs." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
