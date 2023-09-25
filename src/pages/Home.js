import React from "react";
import NavBar from "../components/navBar";
import Hero from "../components/hero";
import CommunityWhy from "../components/community_why";
import Footer from "../components/footer";
import UpcomingEvents from "../components/upcoming_events";
import Award from "../components/award";
import { Helmet } from "react-helmet";
import Testimonials from "../components/testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EETI Foundation</title>
        <meta property="og:site_name" content="EETI Foundation" />
        <meta property="og:title" content="EETI Foundation" />
        <meta property="og:url" content="https://eetifoundation.org" />
        <meta
          property="og:image"
          itemprop="image"
          content="%PUBLIC_URL%/logo192.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A community initiative from college of engineering Trivandrum, EETI Foundation is a group of young innovators future entrepreneurs and technology enthusiasts across Kerala"
        />
      </Helmet>

      <NavBar />
      <Hero />
      <CommunityWhy />
      <Award />
      <UpcomingEvents />
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Home;
