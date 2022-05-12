import React, { useState, useEffect,  } from "react";
import papa from "papaparse"
import "./assets/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import AboutUs from "./pages/AboutUs";
import "./assets/Home.css";
import "./assets/Page1.css";
import "./assets/Page2.css";
import "./assets/AboutUs.css";
import Nav from "./components_Fathers/Nav";
import Footer from "./components_Fathers/Footer";

const App = () => {
  const [apiBdHackathon, setApiBdHackathon] = useState([]);
  const API = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLSgkrDdiA68XL2xzb5tsZvByO0hWoJbE7zi6kGXDaAx7w5BPTorE9LW4MHZutyouq3DXrpZCIqWl6/pub?output=csv";
  const convertData = data => {
    const json = data.map((line, index) => {
      if (index > 0) {
        let obj = {};
        data[0].forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
        return obj;
      }
    })
    json.shift();
    setApiBdHackathon(json)
  }
  
  useEffect(() => {
    fetch(API)
      .then(result => result.text())
      .then(text => papa.parse(text))
      .then(data => convertData(data.data))
  }, []);
  return (
    <div className="app-div-container">
      <div className="app-div-container-body">
        <Nav />
        <Routes>
          <Route path="/" element={<Home apiBdHackathon={apiBdHackathon} setApiBdHackathon={setApiBdHackathon} />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
};

export default App;
