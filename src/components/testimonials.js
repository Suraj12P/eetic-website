import React from "react";
import "../components/css/testimonials.css";
import TestCard from "./test-card";
import { Swiper, SwiperSlide } from "swiper/react";


import Arjun from "../images/team/arjun.jpeg";//
import SidharthP from "../images/team/sidharth.jpg";//
import ardra from "../images/team/ardra.jpg";//
import bilal from "../images/team/bilal.JPG";
import rameesa from "../images/team/rameesa.jpg";//
import vaishnavi from "../images/team/vaishnavi.jpg";//
import gokul from "../images/team/gokul.jpeg";
import surya from "../images/team/surya.jpg";//
import shehin from "../images/team/shehin.jpeg";//
import anjitha from "../images/team/anjitha.png";
import nandana from "../images/team/nandana.jpeg";
import sreenath from "../images/team/Sreenath.jpg";
import adithyan from "../images/team/adithyan.jpg";
import vishnu from "../images/team/vishnu.jpg";
import archa from "../images/team/archa.jpg";
import harish from "../images/team/harish.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="eventHeading">Testimonials</div>
      <Swiper
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
