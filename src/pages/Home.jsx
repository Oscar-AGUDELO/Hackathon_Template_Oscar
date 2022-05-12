import React from "react";
import Button from "../components_Fathers/Button";
import "../assets/button.css";
import background from "../assets/background.jpg";
import DisplayAll from "../components_Fathers/DisplayAll";

const Home = ({ apiBdHackathon }) => {
  return (
    <div className="gloApp">
      <div className="bubblePerso">
        <div className="bubble">
          <DisplayAll apiBdHackathon={apiBdHackathon} />
        </div>
        <img src={background} alt="backgroundapp" className="backgroudapp" />
      </div>

      <div className="buttonPlay">
        <Button />
      </div>
    </div>
  );
};

export default Home;
