import React, { useState } from "react";
import Button from "../components_Fathers/Button";
import "../assets/button.css";
import background from "../assets/background.jpg";
import DisplayAll from "../components_Fathers/DisplayAll";

const Home = ({ apiBdHackathon }) => {
  const[currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="gloApp">
      <div className="bubblePerso">
        <div className="bubble">
          <DisplayAll apiBdHackathon={apiBdHackathon} currentQuestion={currentQuestion}/>
        </div>
        <img src={background} alt="backgroundapp" className="backgroudapp" />
      </div>

      <div className="buttonPlay">
        <Button setCurrentQuestion={setCurrentQuestion} maximum={apiBdHackathon.length-1} name="fa-solid fa-play" direction={1}/>
        <Button setCurrentQuestion={setCurrentQuestion} maximum={apiBdHackathon.length-1} name="fa-solid fa-pause" direction={-1} />
      </div>
    </div>
  );
};

export default Home;
