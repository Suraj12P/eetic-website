import React, { useContext, useEffect } from "react";
import "@fontsource/poppins";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import UnderDev from "./pages/UnderDev";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataContext } from "./context";
import sanityClient from "./client";
import { IoLogoClosedCaptioning } from "react-icons/io";
import RegisterEvent from "./pages/RegisterEvent";
import Loader from "./pages/Loader";
import Resources from "./pages/Resources";
import WeeklyContent from "./pages/WeeklyContent";

function App() {
  const { events, setEventData, careers, setCareersData } =
    useContext(DataContext);

  useEffect(() => {
    //event
    const fetchData = async () => {
      await sanityClient
        .fetch(
          `*[_type == "event"]{
        _id,
        event_name,
        description,
        startDate,
        endDate,
        host_name,
        poster_url{
          asset->{
            _id,
            url
          },
          alt
        },
        venue,
        registration_link,
        isOffline,
        yt
      } | order(startDate desc)`
        )
        .then((data) => {
          // console.log(data);
          setEventData(data);
        })
        .catch((err) => {
          console.log(err);
        });

      //careers
      await sanityClient
        .fetch(`*[_type == "careers"] | order(_createdAt desc)`)
        .then((data) => {
          // console.log(data);
          setCareersData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* {events.length !== 0 && careers.length !== 0 ? ( */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/careers" element={<Careers />} />
            {/* <Route exact path="/join-us" element={<JoinUs />} /> */}
            <Route exact path="/register/:id" element={<RegisterEvent />} />
            <Route exact path="/resources" element={<Resources />} />
            <Route exact path="/weeklycontent" element={<WeeklyContent />} />
            <Route exact path="/404" element={<UnderDev />} />
          </Routes>
        </Router>
      {/* ) : (
        <Loader />
      )} */}
    </div>
  );
}

export default App;
