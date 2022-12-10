import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataContextProvider } from "./context/DataContext";

// const IMAGES=[
//   require('./images/1.png'),
//   require('./images/2.png'),
//   require('./images/3.png'),
//   require('./images/4.png'),
//   require('./images/5.png')
// ]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContextProvider>
);

// export default IMAGES;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
