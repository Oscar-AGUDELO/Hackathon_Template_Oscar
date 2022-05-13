import React, { useState, useEffect } from "react";
import Button from "../components_Fathers/Button";
import "../assets/button.css";
import background from "../assets/copie_background.jpg";
import background730 from "../assets/background730.jpg";
import DisplayAll from "../components_Fathers/DisplayAll";
import dechetElectro from "../assets/dechetElctro.jpg"

const Home = ({ apiBdHackathon }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      console.log(screenWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="gloApp">
      <div className="buttonPlay">
        <Button setCurrentQuestion={setCurrentQuestion} maximum={apiBdHackathon.length - 1} name="fa-solid fa-backward" direction={-1} />
        <Button setCurrentQuestion={setCurrentQuestion} maximum={apiBdHackathon.length - 1} name="fa-solid fa-forward" direction={1} />
      </div>
      <div className="bubblePerso">
        <div >
          <DisplayAll apiBdHackathon={apiBdHackathon} currentQuestion={currentQuestion} />
        </div>
        {(screenWidth < 400) ?
          <img src={background730} alt="backgroundapp" className="backgroudapp" />
          :
          <img src={background} alt="backgroundapp" className="backgroudapp" />
        }
      </div>
    </div>
  );
};

export default Home;
