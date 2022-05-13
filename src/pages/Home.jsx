import React, { useState } from "react";
import Button from "../components_Fathers/Button";
import "../assets/button.css";
import background from "../assets/copie_background.jpg";
import DisplayAll from "../components_Fathers/DisplayAll";

const Home = ({ apiBdHackathon }) => {
  const[currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="gloApp">
      <div className="buttonPlay">
        <Button setCurrentQuestion={setCurrentQuestion} maximum={apiBdHackathon.length-1} name="fa-solid fa-backward" direction={-1} />
        <Button setCurrentQuestion={setCurrentQuestion} maximum={apiBdHackathon.length-1} name="fa-solid fa-forward" direction={1}/>
      </div>
      <div className="bubblePerso">
        <div >
          <DisplayAll apiBdHackathon={apiBdHackathon} currentQuestion={currentQuestion}/>
        </div>
        <img src={background} alt="backgroundapp" className="backgroudapp" />
      </div>

      
    </div>
  );
};

export default Home;
