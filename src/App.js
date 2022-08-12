import React from "react";
import "@fontsource/poppins";
import "./App.css";

import NavBar from "./components/navBar";
import TextIntro from "./components/textBlock_intro";
import TextJoin from "./components/textBlock_join";
import Footer from "./components/footer";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <TextIntro/> */}
      {/* <TextJoin/> */}
      <Events />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
