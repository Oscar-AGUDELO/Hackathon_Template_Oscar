import React from "react";
import Button from "../components_Fathers/Button";
import "../assets/button.css";
import background from "../assets/background.jpg";
//import background from "../assets/background.svg"
// import NameOfComponent from "../components_Fathers/RandomApi";
// import NameOfComponent from "../components_Fathers/RandomApi";
// import NameOfComponent from "../components_Fathers/RandomApi";
// import NameOfComponent from "../components_Fathers/RandomApi";

const Home = () => {
  return (
    <div >
      <div>
        <img src={background} className="backgroudapp" />
        <div className="buttonPlay">
      </div>
      
      <Button/>
      </div>
    </div>
  );
};

export default Home;