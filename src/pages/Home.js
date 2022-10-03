import React from "react";
import NavBar from "../components/navBar";
import Hero from "../components/hero";
import CommunityWhy from "../components/community_why";
import Footer from "../components/footer";
import UpcomingEvents from "../components/upcoming_events";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <CommunityWhy />
      <UpcomingEvents/>
      <Footer />
    </div>
  );
};

export default Home;
