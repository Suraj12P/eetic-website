import React from "react";
import NavBar from "../components/navBar";
import TextIntro from "../components/textBlock_intro";
import Community_why from "../components/community_why";
import Footer from "../components/footer";
import UnderDev from "../pages/UnderDev";
const Home = () => {
  return (
    <div>
      <NavBar />
      {/* <TextIntro /> */}
      <Community_why />
      <Footer />
    </div>
  );
};

export default Home;
