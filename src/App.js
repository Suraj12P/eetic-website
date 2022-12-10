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
import axios from "axios";
import { fetchCareers, fetchEvent, fetchStart } from "./context/DataActions";

function App() {
  const { events, dispatch } = useContext(DataContext);

  useEffect(() => {
    const getdata = async () => {
      dispatch(fetchStart);
      await axios
        .get(process.env.REACT_APP_EVENT_API_URL)
        .then((res) => {
          console.log(res.data.result);
          dispatch(fetchEvent(res.data.result));
          console.log(events);
        })
        .catch((err) => console.log(err));

      await axios
        .get(process.env.REACT_APP_CAREERS_API_URL)
        .then((res) => {
          console.log(res.data.result);
          dispatch(fetchCareers(res.data.result));
          console.log(events);
        })
        .catch((err) => console.log(err));
    };
    getdata();
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
