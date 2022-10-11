import React from "react";
import NavBar from "../components/navBar";
// import Hero from "../components/hero";
// import CommunityWhy from "../components/community_why";
import MemberPanel from "../components/MemberCards/MemberPanel";
import Footer from "../components/footer";
const Team = () => {
  return (
    <div>
      <NavBar />
      {/* <Hero />
      <CommunityWhy /> */}
        <MemberPanel />
      <Footer />
    </div>
  );
};

export default Team;