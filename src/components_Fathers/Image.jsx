import React from "react";
import dechetElectro from "../assets/dechetElctro.jpg";
import dechetVet from "../assets/dechetVet.jpg";
import jusdefruit from "../assets/jusdefruit.jpg";
import toxic from "../assets/toxic.jpg";

const Image = ({ apiBdHackathon, currentQuestion }) => {
        if (apiBdHackathon[currentQuestion].ID === "0") {
          return <img id="dechetVet" src={dechetVet} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "1") {
          return <img id="dechetElectro" src={dechetElectro} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "2") {
          return <img id="jusdefruit" src={jusdefruit} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "3") {
          return <img id="toxic" src={toxic} />
           
        }
  console.log(apiBdHackathon[currentQuestion].ID);
  return (
    
    <>
      
    </>
  );
};

export default Image;
