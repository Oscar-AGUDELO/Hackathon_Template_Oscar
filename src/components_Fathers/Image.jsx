import React from "react";
import dechetElectro from "../assets/dechetElctro.jpg";
import dechetVet from "../assets/dechetVet.jpg";

const Image = ({ apiBdHackathon, currentQuestion }) => {
        if (apiBdHackathon[currentQuestion].ID === "0") {
          return <img id="dechetVet" src={dechetVet} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "1") {
          return <img id="dechetElectro" src={dechetElectro} />
           
        }
  console.log(apiBdHackathon[currentQuestion].ID);
  return (
    
    <>
      
    </>
  );
};

export default Image;
