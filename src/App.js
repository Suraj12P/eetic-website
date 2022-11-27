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
import { AuthContext } from "./context/AuthContext";
import axios from "axios";
import { fetchStart, fetchSuccess } from "./context/AuthActions";

function App() {
  const { events, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const getdata = async () => {
      dispatch(fetchStart);
      await axios
        .get(process.env.REACT_APP_EVENT_API_URL)
        .then((res) => {
          console.log(res.data.result);
          dispatch(fetchSuccess(res.data.result));
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
