import React from "react";
import NavBar from "../components/navBar";
import TextIntro from "../components/textBlock_intro";
import TextJoin from "../components/textBlock_join";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <TextIntro />
      <TextJoin />
      <Footer />
    </div>
  );
};

export default Home;
