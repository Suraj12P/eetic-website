import React from "react";
import NavBar from "../components/navBar";
import Hero from "../components/hero";
import CommunityWhy from "../components/community_why";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <CommunityWhy />
      <Footer />
    </div>
  );
};

export default Home;
