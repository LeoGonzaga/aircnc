import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

import Routes from "./routers";
function App() {
  

  return (
    <div className="container">
      <img src={logo} alt="Logo AirCnc" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
