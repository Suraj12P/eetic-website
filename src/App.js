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
import { DataContext } from "./context/DataContext";
// import axios from "axios";
import sanityClient from "./client";
import { fetchCareers, fetchEvent, fetchStart } from "./context/DataActions";

function App() {
  const { events, dispatch } = useContext(DataContext);

  // useEffect(() => {
  //   const getdata = async () => {
  //     dispatch(fetchStart);
  // await axios
  //   .get(process.env.REACT_APP_EVENT_API_URL, {
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res.data.result);
  //     dispatch(fetchEvent(res.data.result));
  //     console.log(events);
  //   })
  //   .catch((err) => console.log(err));

  // await axios
  //   .get(process.env.REACT_APP_CAREERS_API_URL, {
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res.data.result);
  //     dispatch(fetchCareers(res.data.result));
  //     console.log(events);
  //   })
  //   .catch((err) => console.log(err));
  //   };
  //   getdata();
  // }, []);

  useEffect(() => {
    dispatch(fetchStart);
    console.log("insidde clg")
    //event
    sanityClient
      .fetch(
        `*[_type == "event"]{
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
        dispatch(fetchEvent(data));
      })
      .catch(console.error);

    //careers
    sanityClient
      .fetch(`*[_type == "careers"] | order(_createdAt desc)`)
      .then((data) => {
        // console.log(data);
        dispatch(fetchCareers(data));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/404" element={<UnderDev />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
