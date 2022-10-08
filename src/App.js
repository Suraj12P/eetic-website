import React from "react";
import "@fontsource/poppins";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import UnderDev from "./pages/UnderDev";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/aboutus" element={<AboutUs/>} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
